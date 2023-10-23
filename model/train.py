import torch
import torch.nn as nn
import torch.optim as optim
from sklearn.preprocessing import LabelEncoder
import pandas as pd

# Load Data
data = pd.read_csv("./model/data/training_data.csv")

# Use LabelEncoder to convert text columns to numeric values
title_encoder = LabelEncoder()
artist_encoder = LabelEncoder()
genres_encoder = LabelEncoder()

data["title"] = title_encoder.fit_transform(data["title"])
data["artist"] = artist_encoder.fit_transform(data["artist"])
data["genres"] = genres_encoder.fit_transform(data["genres"])

X_train = torch.tensor(data[["title", "artist", "genres"]].values, dtype=torch.float32)

# For label encoding, use LabelEncoder
encoder = LabelEncoder()
data["label"] = encoder.fit_transform(data["label"])
y_train = torch.tensor(data["label"].values, dtype=torch.long)  # Changed to torch.long for classification


# Define Model
class MusicTasteModel(nn.Module):
    def __init__(self, input_dim, output_dim):
        super(MusicTasteModel, self).__init__()
        self.fc1 = nn.Linear(input_dim, 128)
        self.fc2 = nn.Linear(128, 64)
        self.fc3 = nn.Linear(64, output_dim)

    def forward(self, x):
        x = torch.relu(self.fc1(x))
        x = torch.relu(self.fc2(x))
        x = torch.sigmoid(self.fc3(x))
        return x


# Initialize Model, Loss Function, and Optimizer
input_dim = 3  # Now the input dimension is 3
output_dim = len(data["label"].unique())  # Number of unique labels
model = MusicTasteModel(input_dim, output_dim)

# Changed to nn.CrossEntropyLoss as it's suitable for classification
criterion = nn.CrossEntropyLoss()
optimizer = optim.Adam(model.parameters(), lr=0.001)

# Train Model
num_epochs = 1000
for epoch in range(num_epochs):
    optimizer.zero_grad()
    outputs = model(X_train)
    loss = criterion(outputs, y_train)
    loss.backward()
    optimizer.step()
    print(f"Epoch [{epoch+1}/{num_epochs}], Loss: {loss.item():.4f}")

# Save Model
torch.save(model.state_dict(), "./model/music_taste_model.pth")

import torch
import torch.nn as nn
from sklearn.preprocessing import LabelEncoder
import pandas as pd

# Load and Preprocess Test Data
test_data = pd.read_csv("./model/data/test_data.csv")

# Use LabelEncoder to convert text columns to numeric values
title_encoder = LabelEncoder()
artist_encoder = LabelEncoder()
genres_encoder = LabelEncoder()

test_data["title"] = title_encoder.fit_transform(test_data["title"])
test_data["artist"] = artist_encoder.fit_transform(test_data["artist"])
test_data["genres"] = genres_encoder.fit_transform(test_data["genres"])

X_test = torch.tensor(test_data[["title", "artist", "genres"]].values, dtype=torch.float32)

# Assume encoder is available or saved and loaded for labels
encoder = LabelEncoder()
test_data["label"] = encoder.fit_transform(test_data["label"])
y_test = torch.tensor(test_data["label"].values, dtype=torch.long)  # Changed to torch.long for classification


# Define Model (as before but with input_dim=3)
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


# Load Model
input_dim = 3  # Now the input dimension is 3
output_dim = len(test_data["label"].unique())  # Number of unique labels
model = MusicTasteModel(input_dim, output_dim)
model.load_state_dict(torch.load("./model/music_taste_model.pth"))
model.eval()  # Set the model to evaluation mode

# Make Predictions
with torch.no_grad():
    predictions = model(X_test)
    print(predictions)  # Outputs a tensor with predictions

import pandas as pd

# Define training data
training_data = {
    "title": [
        "Shape of You",
        "Blinding Lights",
        "Dance Monkey",
        "Bad Guy",
        "Señorita",
        "Watermelon Sugar",
        "Someone You Loved",
        "Circles",
        "Good 4 U",
        "Peaches",
        "Levitating",
        "Save Your Tears",
        "Kiss Me More",
        "Montero",
        "Industry Baby",
        "Stay",
        "Shivers",
        "Heat Waves",
        "Easy On Me",
        "Beggin'",
    ],
    "artist": [
        "Ed Sheeran",
        "The Weeknd",
        "Tones and I",
        "Billie Eilish",
        "Shawn Mendes & Camila Cabello",
        "Harry Styles",
        "Lewis Capaldi",
        "Post Malone",
        "Olivia Rodrigo",
        "Justin Bieber",
        "Dua Lipa",
        "The Weeknd & Ariana Grande",
        "Doja Cat",
        "Lil Nas X",
        "Lil Nas X & Jack Harlow",
        "The Kid LAROI & Justin Bieber",
        "Ed Sheeran",
        "Glass Animals",
        "Adele",
        "Måneskin",
    ],
    "genres": [
        ["Pop"],
        ["Synth-pop"],
        ["Pop"],
        ["Electropop"],
        ["Pop"],
        ["Pop"],
        ["Pop"],
        ["Pop"],
        ["Pop"],
        ["R&B", "Pop"],
        ["Pop"],
        ["Pop"],
        ["R&B", "Pop"],
        ["Hip Hop"],
        ["Hip Hop"],
        ["Pop"],
        ["Pop"],
        ["Psychedelic pop"],
        ["Pop"],
        ["Pop", "Rock"],
    ],
    "label": [
        "Hajin",
        "Addy",
        "Albert",
        "Patrick",
        "Hajin",
        "Addy",
        "Albert",
        "Patrick",
        "Hajin",
        "Addy",
        "Albert",
        "Patrick",
        "Hajin",
        "Addy",
        "Albert",
        "Patrick",
        "Hajin",
        "Addy",
        "Albert",
        "Patrick",
    ],
}

# Define test data
test_data = {
    "title": ["Stay With Me", "Uptown Funk", "Shallow", "Happy", "Thinking Out Loud"],
    "artist": [
        "Sam Smith",
        "Mark Ronson ft. Bruno Mars",
        "Lady Gaga & Bradley Cooper",
        "Pharrell Williams",
        "Ed Sheeran",
    ],
    "genres": [["Pop"], ["Funk", "Pop"], ["Pop"], ["Pop"], ["Pop"]],
    "label": ["Hajin", "Addy", "Albert", "Patrick", "Hajin"],
}

# Convert genres list to string for training data
training_data["genres"] = [" ".join(map(str, genre)) for genre in training_data["genres"]]

# Create DataFrame for training data
training_df = pd.DataFrame(training_data)

# Save training data to CSV
training_df.to_csv("./model/data/training_data.csv", index=False)

# Convert genres list to string for test data
test_data["genres"] = [" ".join(map(str, genre)) for genre in test_data["genres"]]

# Create DataFrame for test data
test_df = pd.DataFrame(test_data)

# Save test data to CSV
test_df.to_csv("./model/data/test_data.csv", index=False)

# Create DataFrame
df = pd.DataFrame(test_data)

# Save to CSV
df.to_csv("./model/data/test_data.csv", index=False)

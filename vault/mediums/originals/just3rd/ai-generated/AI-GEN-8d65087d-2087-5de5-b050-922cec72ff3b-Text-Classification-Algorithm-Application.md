---
type: medium
title: Applying Text Classification Algorithms
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[text-classification-algorithm-application|text-classification-algorithm-application]]"
learning-time-in-minutes: 4
---
# Applying Text Classification Algorithms

This lesson focuses on the practical application of two common text classification algorithms: Naïve Bayes and a deep learning approach (specifically, a Convolutional Neural Network or CNN for demonstration). We will walk through how to implement these to categorize text data.

## Understanding the Goal

Our objective is to take text inputs and assign them to predefined categories. For instance, classifying customer reviews as "positive" or "negative," or sorting news articles into "sports," "politics," or "technology."

## Naïve Bayes for Text Classification

Naïve Bayes is a probabilistic classifier based on Bayes' Theorem. Its "naïve" assumption is that the features (words in our case) are independent of each other, given the class. This simplification makes it computationally efficient and surprisingly effective.

### Core Idea

The algorithm calculates the probability of a document belonging to a specific class by considering the probability of each word appearing in that class.

$$ P(\text{Class} | \text{Document}) \propto P(\text{Document} | \text{Class}) \times P(\text{Class}) $$

For text, this translates to:

$$ P(\text{Class} | \text{words}) \propto \prod_{i=1}^{n} P(\text{word}_i | \text{Class}) \times P(\text{Class}) $$

### Implementation Steps

1.  **Data Preparation:**
    *   **Tokenization:** Breaking text into individual words or tokens.
    *   **Stop Word Removal:** Eliminating common words (like "the," "a," "is") that don't carry much meaning.
    *   **Stemming/Lemmatization:** Reducing words to their root form (e.g., "running," "ran" -> "run").
    *   **Vectorization:** Converting text into numerical features. A common method is **Bag-of-Words (BoW)**, where each document is represented by a vector indicating the frequency of each word in the vocabulary. **TF-IDF (Term Frequency-Inverse Document Frequency)** is another popular technique that weights words by their importance.

2.  **Model Training:**
    *   Use a library like `scikit-learn` in Python.
    *   Choose a Naïve Bayes variant. `MultinomialNB` is common for text classification with word counts.

3.  **Prediction:**
    *   Once trained, the model can predict the class of new, unseen text.

### Code Example (Python with scikit-learn)

```python
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.pipeline import make_pipeline
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

# Sample Data
texts = [
    "This movie is fantastic and I loved it!",
    "The acting was terrible, a complete waste of time.",
    "A delightful experience, highly recommend.",
    "I hated the plot, it was so boring.",
    "Best film of the year, truly amazing.",
    "Awful story and poor direction.",
]
labels = ["positive", "negative", "positive", "negative", "positive", "negative"]

# Split data
X_train, X_test, y_train, y_test = train_test_split(texts, labels, test_size=0.2, random_state=42)

# Create a pipeline: TF-IDF Vectorizer + Naïve Bayes Classifier
model_nb = make_pipeline(TfidfVectorizer(), MultinomialNB())

# Train the model
model_nb.fit(X_train, y_train)

# Predict on test data
y_pred_nb = model_nb.predict(X_test)

# Evaluate
accuracy_nb = accuracy_score(y_test, y_pred_nb)
print(f"Naïve Bayes Accuracy: {accuracy_nb:.2f}")

# Predict on new text
new_text = ["This was an amazing experience!"]
prediction_nb = model_nb.predict(new_text)
print(f"Prediction for '{new_text[0]}': {prediction_nb[0]}")
```

## Deep Learning Classifier (CNN Example)

Deep learning models, such as Convolutional Neural Networks (CNNs), can automatically learn hierarchical features from text, often outperforming traditional methods on complex tasks.

### Core Idea

A CNN for text typically uses convolutional filters to slide over sequences of word embeddings (numerical representations of words). These filters capture local patterns (like n-grams), and pooling layers summarize these patterns. Finally, fully connected layers make the classification decision.

### Implementation Steps

1.  **Data Preparation:**
    *   **Tokenization & Padding:** Similar to Naïve Bayes, but sequences are often padded to a fixed length for CNN input.
    *   **Word Embeddings:** Words are represented by dense vectors (e.g., Word2Vec, GloVe, or learned during training). These embeddings capture semantic relationships between words.

2.  **Model Architecture (CNN):**
    *   **Embedding Layer:** Converts integer-encoded tokens into dense vectors.
    *   **Convolutional Layers:** Apply filters to capture local features (e.g., patterns of 2-3 words).
    *   **Pooling Layers (e.g., Max Pooling):** Reduce dimensionality and select the most important features.
    *   **Fully Connected Layers:** Combine learned features for classification.
    *   **Output Layer:** With a sigmoid activation for binary classification or softmax for multi-class.

3.  **Model Training:**
    *   Use deep learning frameworks like TensorFlow or PyTorch.
    *   Train using an optimizer (e.g., Adam) and a loss function (e.g., binary cross-entropy).

4.  **Prediction:**
    *   The trained CNN can predict classes for new text.

### Code Example (Conceptual - requires TensorFlow/Keras)

This example illustrates the structure. A full implementation would involve more detailed setup for data loading, embedding matrix creation, and training loops.

```python
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Embedding, Conv1D, GlobalMaxPooling1D, Dense
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences

# --- Assume texts and labels are defined as before ---
# For simplicity, we'll use a subset of the data or re-define it here
texts_dl = [
    "This movie is fantastic and I loved it!",
    "The acting was terrible, a complete waste of time.",
    "A delightful experience, highly recommend.",
    "I hated the plot, it was so boring.",
    "Best film of the year, truly amazing.",
    "Awful story and poor direction.",
]
labels_dl = [1, 0, 1, 0, 1, 0] # 1 for positive, 0 for negative

# Data Preprocessing for DL
vocab_size = 1000 # Max words in vocabulary
max_length = 20   # Max sequence length
embedding_dim = 16 # Dimension of word embeddings

tokenizer = Tokenizer(num_words=vocab_size, oov_token="<OOV>")
tokenizer.fit_on_texts(texts_dl)
sequences = tokenizer.texts_to_sequences(texts_dl)
padded_sequences = pad_sequences(sequences, maxlen=max_length, padding='post', truncating='post')

# Split data
X_train_dl, X_test_dl, y_train_dl, y_test_dl = train_test_split(padded_sequences, labels_dl, test_size=0.2, random_state=42)

# Build the CNN Model
model_cnn = Sequential([
    Embedding(vocab_size, embedding_dim, input_length=max_length),
    Conv1D(128, 5, activation='relu'),
    GlobalMaxPooling1D(),
    Dense(24, activation='relu'),
    Dense(1, activation='sigmoid') # Sigmoid for binary classification
])

# Compile the model
model_cnn.compile(loss='binary_crossentropy', optimizer='adam', metrics=['accuracy'])

# Train the model (simplified - in reality, you'd have more epochs and data)
# model_cnn.fit(X_train_dl, y_train_dl, epochs=10, validation_data=(X_test_dl, y_test_dl))

# --- After training ---
# To predict, you would need to tokenize and pad new text, then use model_cnn.predict()
# new_text_dl_seq = tokenizer.texts_to_sequences(["This was an amazing experience!"])
# new_text_dl_padded = pad_sequences(new_text_dl_seq, maxlen=max_length, padding='post', truncating='post')
# prediction_cnn = model_cnn.predict(new_text_dl_padded)
# print(f"CNN Prediction for 'This was an amazing experience!': {prediction_cnn[0][0]:.2f}") # Raw probability
```

## When to Choose Which

*   **Naïve Bayes:**
    *   **When:** You need a fast, simple, and interpretable baseline. Works well with limited data. Good for spam detection, document categorization.
    *   **Pros:** Fast training, good performance on many tasks, low memory footprint.
    *   **Cons:** The independence assumption is often violated in natural language. May struggle with complex semantic nuances.

*   **Deep Learning (CNN/RNN):**
    *   **When:** You have a larger dataset and need to capture more complex patterns, context, and semantic relationships.
    *   **Pros:** Can achieve state-of-the-art performance, learns features automatically, handles sequential data well.
    *   **Cons:** Requires more data and computational resources, can be harder to interpret, longer training times.

By implementing both these approaches, you gain practical experience in applying different algorithmic paradigms to the same text classification problem, allowing you to understand their strengths and weaknesses in action.

## Supports

- [[text-classification-algorithm-application|Text Classification Algorithm Application]]

---
type: "medium"
title: "Implementing Naïve Bayes for Text Classification"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/data-ai/data-science/text-classification/microskills/naive-bayes-classifier-implementation|naive-bayes-classifier-implementation]]"
learning-time-in-minutes: 3
---
# Implementing Naïve Bayes for Text Classification

This lesson focuses on the practical implementation of the Naïve Bayes algorithm for text classification. We'll walk through the core concepts and provide a Python example to help you apply this technique.

## Understanding Naïve Bayes for Text

Naïve Bayes is a probabilistic classification algorithm based on Bayes' Theorem. For text classification, it leverages the "naïve" assumption that the presence of a particular word in a document is independent of the presence of other words, given the document's class. This simplification makes it computationally efficient and surprisingly effective for many text classification tasks.

### The Core Idea: Probability

At its heart, Naïve Bayes calculates the probability of a document belonging to a specific class. It does this by looking at the words within the document and comparing their frequencies to how often those words appear in documents of each class.

Let's say we want to classify an email as "Spam" or "Not Spam". For a new email, Naïve Bayes calculates:

*   P(Spam | Words in email): The probability that the email is Spam, given the words it contains.
*   P(Not Spam | Words in email): The probability that the email is Not Spam, given the words it contains.

The class with the higher probability is assigned to the email.

### How it Works (Simplified)

1.  **Training:** The algorithm learns from a labeled dataset of documents (e.g., emails marked as Spam or Not Spam). It counts word frequencies for each class.
2.  **Prediction:** For a new, unseen document, it uses these learned frequencies to calculate the probabilities mentioned above.

## Practical Implementation with Python

We'll use the `scikit-learn` library in Python, a powerful tool for machine learning.

### Steps

1.  **Import Libraries:** Import necessary modules from `scikit-learn`.
2.  **Load Data:** Prepare or load your text data and corresponding labels. For demonstration, we'll use a small, synthetic dataset.
3.  **Text Vectorization:** Convert text documents into a numerical representation that the algorithm can understand. A common method is CountVectorizer or TfidfVectorizer.
4.  **Model Initialization:** Create an instance of the Naïve Bayes classifier (e.g., `MultinomialNB` is often suitable for text).
5.  **Model Training:** Fit the classifier to your vectorized data and labels.
6.  **Prediction:** Use the trained model to predict the class of new text.

### Code Example

```python
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, classification_report

# 1. Sample Data (replace with your actual dataset)
documents = [
    "This is a great movie, I loved it!",        # Positive
    "The plot was boring and the acting was bad.", # Negative
    "Absolutely fantastic film, highly recommend.",# Positive
    "Terrible experience, waste of time.",        # Negative
    "A truly enjoyable and engaging story.",      # Positive
    "I did not like this at all.",               # Negative
    "Amazing visuals and a compelling narrative."  # Positive
]
labels = ["positive", "negative", "positive", "negative", "positive", "negative", "positive"]

# Split data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(documents, labels, test_size=0.3, random_state=42)

# 2. Text Vectorization
# CountVectorizer converts text into a matrix of token counts
vectorizer = CountVectorizer()
X_train_counts = vectorizer.fit_transform(X_train)
X_test_counts = vectorizer.transform(X_test)

# 3. Model Initialization
# Multinomial Naive Bayes is suitable for discrete counts (like word counts)
model = MultinomialNB()

# 4. Model Training
model.fit(X_train_counts, y_train)

# 5. Prediction
y_pred = model.predict(X_test_counts)

# Evaluate the model
print("Accuracy:", accuracy_score(y_test, y_pred))
print("\nClassification Report:\n", classification_report(y_test, y_pred))

# Example of predicting a new sentence
new_document = ["This movie was incredibly good and I enjoyed every moment."]
new_document_counts = vectorizer.transform(new_document)
prediction = model.predict(new_document_counts)
print(f"\nPrediction for '{new_document[0]}': {prediction[0]}")

new_document_2 = ["The story was very dull and the actors were awful."]
new_document_2_counts = vectorizer.transform(new_document_2)
prediction_2 = model.predict(new_document_2_counts)
print(f"Prediction for '{new_document_2[0]}': {prediction_2[0]}")
```

### How the Code Works

*   **`CountVectorizer`**: This object learns a vocabulary from the training data and then converts any text into a matrix of token counts. Each row is a document, and each column represents a word from the vocabulary. The value in a cell is the count of that word in that document.
*   **`MultinomialNB`**: This classifier is designed for classification with discrete features, such as word counts. It calculates the probability of each word appearing in each class and uses these probabilities to make predictions.
*   **`fit()`**: This method trains the `vectorizer` (learns the vocabulary and transforms the training data) and the `model` (learns the word probabilities for each class).
*   **`transform()`**: This method converts new text data into the same numerical format as the training data, using the vocabulary learned during training.
*   **`predict()`**: This method takes the vectorized new data and outputs the predicted class labels.

## When to Use Naïve Bayes

Naïve Bayes is a great starting point for text classification tasks due to its simplicity and speed. It often performs well on:

*   Spam detection
*   Sentiment analysis (positive/negative reviews)
*   Document categorization (news articles, support tickets)

However, its "naïve" independence assumption can be a limitation for tasks where word order and context are extremely critical. For such cases, deep learning models often provide better performance.

## Supports

- [[skills/computing/data-ai/data-science/text-classification/microskills/naive-bayes-classifier-implementation|Naïve Bayes Classifier Implementation]]

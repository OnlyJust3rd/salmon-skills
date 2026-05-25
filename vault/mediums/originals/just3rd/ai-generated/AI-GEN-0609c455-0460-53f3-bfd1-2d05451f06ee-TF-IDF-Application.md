---
type: medium
title: "TF-IDF Application: Turning Words into Numbers"
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[tf-idf-application|tf-idf-application]]"
learning-time-in-minutes: 6
---
# TF-IDF Application: Turning Words into Numbers

This lesson focuses on applying the Term Frequency-Inverse Document Frequency (TF-IDF) technique to convert text documents into numerical representations. This is a crucial step in preparing text data for machine learning models.

## What is TF-IDF?

TF-IDF is a numerical statistic that is intended to reflect how important a word is to a document in a collection or corpus. It's a weighting scheme used in information retrieval and text mining. The importance of a word increases proportionally to the number of times it appears in the document but is offset by the frequency of the word in the corpus.

The core idea behind TF-IDF is that words that appear frequently in a single document but rarely in others are likely to be important and distinctive to that document.

## The Two Components of TF-IDF

TF-IDF is a combination of two metrics:

1.  **Term Frequency (TF):** This measures how frequently a term (word) appears in a document. A higher TF means the term is more relevant to that specific document.

    The formula for Term Frequency is typically:

    $$
    TF(t, d) = \frac{\text{Number of times term } t \text{ appears in document } d}{\text{Total number of terms in document } d}
    $$

    For example, if the word "apple" appears 5 times in a document with a total of 100 words, its TF for that word would be 5/100 = 0.05.

2.  **Inverse Document Frequency (IDF):** This measures how common or rare a word is across the entire corpus of documents. A higher IDF means the word is rarer and therefore more informative. Words that appear in many documents will have a low IDF.

    The formula for Inverse Document Frequency is typically:

    $$
    IDF(t, D) = \log \left( \frac{\text{Total number of documents in corpus } D}{\text{Number of documents in corpus } D \text{ that contain term } t} \right)
    $$

    The logarithm is used to dampen the effect of very high document frequencies, preventing them from dominating the score. The '+1' is often added to the denominator to prevent division by zero if a term is not present in any document (though this is usually handled by filtering such terms).

## Calculating TF-IDF

To get the TF-IDF score for a term in a document, you multiply its TF by its IDF:

$$
TF\text{-}IDF(t, d, D) = TF(t, d) \times IDF(t, D)
$$

A high TF-IDF score means a word appears frequently in a particular document but is rare across the entire corpus, making it a good indicator of the document's content.

## When to Use TF-IDF

TF-IDF is particularly useful for:

*   **Information Retrieval:** Ranking documents by relevance to a search query.
*   **Text Classification:** Helping models distinguish between different categories of text.
*   **Document Similarity:** Identifying documents that are similar in content.
*   **Feature Extraction:** Creating numerical features for machine learning algorithms.

## Applying TF-IDF: A Step-by-Step Example

Let's consider a small corpus of three documents:

*   **Document 1 (d1):** "The cat sat on the mat."
*   **Document 2 (d2):** "The dog chased the cat."
*   **Document 3 (d3):** "The dog sat on the floor."

Our corpus ($D$) contains 3 documents.

**Step 1: Preprocess and Tokenize**

First, we clean the text (e.g., lowercase, remove punctuation) and split it into individual words (tokens).

*   d1: ["the", "cat", "sat", "on", "the", "mat"]
*   d2: ["the", "dog", "chased", "the", "cat"]
*   d3: ["the", "dog", "sat", "on", "the", "floor"]

**Step 2: Calculate Term Frequency (TF) for Each Document**

Let's calculate TF for the word "cat" in each document.

*   **d1:** "cat" appears 1 time. Total words in d1 = 6.
    $$
    TF(\text{"cat"}, d1) = \frac{1}{6} \approx 0.167
    $$
*   **d2:** "cat" appears 1 time. Total words in d2 = 5.
    $$
    TF(\text{"cat"}, d2) = \frac{1}{5} = 0.2
    $$
*   **d3:** "cat" appears 0 times. Total words in d3 = 6.
    $$
    TF(\text{"cat"}, d3) = \frac{0}{6} = 0
    $$

Let's do the same for "dog":

*   **d1:** "dog" appears 0 times. Total words in d1 = 6.
    $$
    TF(\text{"dog"}, d1) = \frac{0}{6} = 0
    $$
*   **d2:** "dog" appears 1 time. Total words in d2 = 5.
    $$
    TF(\text{"dog"}, d2) = \frac{1}{5} = 0.2
    $$
*   **d3:** "dog" appears 1 time. Total words in d3 = 6.
    $$
    TF(\text{"dog"}, d3) = \frac{1}{6} \approx 0.167
    $$

**Step 3: Calculate Inverse Document Frequency (IDF) for Each Term**

We need to know how many documents each term appears in.

*   "the": appears in 3 documents.
*   "cat": appears in 2 documents (d1, d2).
*   "sat": appears in 2 documents (d1, d3).
*   "on": appears in 2 documents (d1, d3).
*   "mat": appears in 1 document (d1).
*   "dog": appears in 2 documents (d2, d3).
*   "chased": appears in 1 document (d2).
*   "floor": appears in 1 document (d3).

Now, let's calculate IDF for "cat" and "dog". Remember, the total number of documents is 3.

*   **IDF("cat")**: Appears in 2 documents.
    $$
    IDF(\text{"cat"}, D) = \log \left( \frac{3}{2} \right) \approx \log(1.5) \approx 0.176
    $$
*   **IDF("dog")**: Appears in 2 documents.
    $$
    IDF(\text{"dog"}, D) = \log \left( \frac{3}{2} \right) \approx \log(1.5) \approx 0.176
    $$
*   **IDF("mat")**: Appears in 1 document.
    $$
    IDF(\text{"mat"}, D) = \log \left( \frac{3}{1} \right) = \log(3) \approx 1.098
    $$

Notice how words like "mat" and "floor" (which appear in only one document) have a higher IDF than "cat" or "dog" (which appear in more documents).

**Step 4: Calculate TF-IDF Scores**

Now we multiply the TF and IDF values.

For "cat":
*   **TF-IDF("cat", d1)** = $TF(\text{"cat"}, d1) \times IDF(\text{"cat"}, D) \approx 0.167 \times 0.176 \approx 0.029$
*   **TF-IDF("cat", d2)** = $TF(\text{"cat"}, d2) \times IDF(\text{"cat"}, D) = 0.2 \times 0.176 \approx 0.035$
*   **TF-IDF("cat", d3)** = $TF(\text{"cat"}, d3) \times IDF(\text{"cat"}, D) = 0 \times 0.176 = 0$

For "dog":
*   **TF-IDF("dog", d1)** = $TF(\text{"dog"}, d1) \times IDF(\text{"dog"}, D) = 0 \times 0.176 = 0$
*   **TF-IDF("dog", d2)** = $TF(\text{"dog"}, d2) \times IDF(\text{"dog"}, D) = 0.2 \times 0.176 \approx 0.035$
*   **TF-IDF("dog", d3)** = $TF(\text{"dog"}, d3) \times IDF(\text{"dog"}, D) \approx 0.167 \times 0.176 \approx 0.029$

By calculating this for all words in our vocabulary, we can create a numerical vector for each document. For instance, a simplified vector for our three documents, considering only "cat" and "dog", might look like this (using approximate values):

*   **d1:** [0.029, 0]
*   **d2:** [0.035, 0.035]
*   **d3:** [0, 0.029]

This numerical representation allows machine learning algorithms to process and compare the documents.

## Common Pitfalls and Considerations

*   **Stop Words:** Very common words like "the", "a", "is" (called stop words) often have very low IDF scores and can dominate the TF-IDF calculation if not removed. Most libraries provide default stop word lists.
*   **Vocabulary Size:** TF-IDF creates a vector for each document where the dimensionality is equal to the size of the vocabulary. For large corpora, this can lead to very high-dimensional and sparse vectors.
*   **Normalization:** While TF-IDF naturally involves some normalization, sometimes further normalization of the resulting vectors (e.g., L2 normalization) is applied to ensure that documents of different lengths don't unfairly influence distance calculations.
*   **Alternative IDF Calculation:** Sometimes, the IDF formula includes a '+1' in the numerator and denominator to avoid division by zero and to dampen extreme values. The exact implementation can vary slightly between libraries.

## Practical Implementation with Libraries

In practice, you'll use libraries like Scikit-learn in Python to efficiently compute TF-IDF scores.

```python
from sklearn.feature_extraction.text import TfidfVectorizer

documents = [
    "The cat sat on the mat.",
    "The dog chased the cat.",
    "The dog sat on the floor."
]

# Initialize TfidfVectorizer
# stop_words='english' will remove common English stop words
vectorizer = TfidfVectorizer(stop_words='english')

# Fit the vectorizer to the documents and transform them into TF-IDF features
tfidf_matrix = vectorizer.fit_transform(documents)

# Get feature names (words)
feature_names = vectorizer.get_feature_names_out()

# tfidf_matrix is a sparse matrix. You can convert it to a dense array for easier viewing.
# print(tfidf_matrix.todense())
# print(feature_names)

# Example: Print TF-IDF scores for the first document
print(f"TF-IDF scores for Document 1:")
for word, score in zip(feature_names, tfidf_matrix[0].toarray()[0]):
    if score > 0:
        print(f"  {word}: {score:.4f}")
```

This code snippet demonstrates how a library handles the preprocessing and calculation, making it straightforward to generate numerical features from your text data.

## Supports

- [[tf-idf-application|TF-IDF Application]]

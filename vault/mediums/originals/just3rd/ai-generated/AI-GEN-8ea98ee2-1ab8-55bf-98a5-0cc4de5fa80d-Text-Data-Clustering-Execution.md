---
type: medium
title: Executing K-Means Clustering on Text Data
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[text-data-clustering-execution|text-data-clustering-execution]]"
learning-time-in-minutes: 4
---
# Executing K-Means Clustering on Text Data

This lesson focuses on the practical execution of the K-means clustering algorithm for grouping textual data. We'll walk through the steps needed to implement this process, assuming you have already processed your text into a numerical representation.

## The Goal: Grouping Similar Text

Imagine you have a large collection of customer reviews, news articles, or social media posts. You want to automatically group these texts into meaningful categories without pre-defining the categories themselves. This is where K-means clustering shines. The core idea is to partition your data points (in this case, texts represented numerically) into `k` distinct clusters, where each text belongs to the cluster with the nearest mean (centroid).

## Prerequisites

Before executing K-means on text, you typically need to have completed these steps:

1.  **Text Preprocessing:** Cleaning the text (removing punctuation, stop words, stemming/lemmatization).
2.  **Vectorization:** Converting the cleaned text into numerical vectors. Common methods include:
    *   **Bag-of-Words (BoW):** Counts word occurrences.
    *   **TF-IDF (Term Frequency-Inverse Document Frequency):** Weights words based on their importance in a document and across the corpus.
    *   **Word Embeddings (e.g., Word2Vec, GloVe):** Captures semantic relationships between words.

For this lesson, we'll assume you have your text data already represented as numerical vectors, often in a matrix where each row is a document and each column is a feature (e.g., a word's TF-IDF score).

## The K-Means Algorithm: A Quick Recap

K-means is an iterative algorithm that aims to partition `n` observations into `k` clusters. The algorithm proceeds as follows:

1.  **Initialization:** Randomly select `k` initial centroids.
2.  **Assignment:** Assign each data point to the cluster whose centroid is closest.
3.  **Update:** Recalculate the centroids of each cluster as the mean of all data points assigned to that cluster.
4.  **Repeat:** Repeat steps 2 and 3 until the centroids no longer change significantly or a maximum number of iterations is reached.

## Executing K-Means: A Step-by-Step Example

Let's illustrate with a simplified example using Python and the `scikit-learn` library, a popular choice for machine learning tasks.

**Scenario:** You have a small dataset of sentences, and you want to group them into 2 clusters (`k=2`).

**Step 1: Prepare Your Data (Example using TF-IDF)**

First, let's create some sample text and vectorize it.

```python
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.cluster import KMeans
import pandas as pd

documents = [
    "This is a great product, I love it!",
    "The service was terrible, very disappointing.",
    "Amazing features and excellent performance.",
    "I had a bad experience with their support team.",
    "Highly recommended for its quality and ease of use.",
    "The price is too high for what you get.",
    "Fantastic buy, exceeded my expectations.",
    "Worst customer service ever, never again."
]

# Vectorize the documents using TF-IDF
vectorizer = TfidfVectorizer()
X = vectorizer.fit_transform(documents)

print("Vectorized data shape:", X.shape)
# Output will be something like: Vectorized data shape: (8, 30)
# This means 8 documents and potentially 30 unique words after vectorization.
```

**Step 2: Choose the Number of Clusters (`k`)**

This is a critical step. For this example, we'll set `k=2`. In real-world scenarios, determining the optimal `k` often involves techniques like the Elbow method or Silhouette analysis.

**Step 3: Apply the K-Means Algorithm**

Now, we instantiate and run the `KMeans` model.

```python
# Initialize KMeans with k=2
kmeans = KMeans(n_clusters=2, random_state=42, n_init=10) # n_init=10 to suppress FutureWarning

# Fit the model to your vectorized data
kmeans.fit(X)

# Get the cluster labels for each document
labels = kmeans.labels_

# Get the centroids (optional, but useful for understanding)
centroids = kmeans.cluster_centers_

print("Cluster labels:", labels)
# Example output: Cluster labels: [0 1 0 1 0 1 0 1]
```

**Step 4: Interpret the Results**

The `labels` array tells you which cluster each document belongs to. A `0` means it belongs to the first cluster, and a `1` means it belongs to the second cluster.

Let's put the labels back with the original documents to see the groupings.

```python
# Create a DataFrame for better visualization
df = pd.DataFrame({'document': documents, 'cluster': labels})

print("\nDocuments and their assigned clusters:")
print(df)
```

**Interpreting the example output:**

You would likely see sentences with positive sentiment grouped together, and sentences with negative sentiment grouped together. This is because the TF-IDF vectors for similar sentiment texts tend to be closer in the vector space.

**Step 5: Analyzing Cluster Contents (Manual Inspection)**

To understand *what* each cluster represents, you'd typically examine the documents assigned to each cluster. You can also look at the words that are most important (highest TF-IDF scores) within each cluster by analyzing the `vectorizer.get_feature_names_out()` and the `centroids` or by looking at the documents themselves.

For instance, Cluster 0 might contain words like "great," "product," "amazing," "excellent," "recommended," while Cluster 1 might contain "terrible," "disappointing," "bad," "support," "high," "worst."

## Key Considerations and Best Practices

*   **Choosing `k`:** As mentioned, selecting the right `k` is crucial. Don't just pick a number; use evaluation metrics.
*   **Initialization:** K-means is sensitive to the initial placement of centroids. Running it multiple times with different random initializations (like `n_init=10` in `scikit-learn`) helps mitigate this.
*   **Data Scaling:** If your features have vastly different scales (less common with TF-IDF but possible with other vectorizations), scaling your data can be beneficial.
*   **Vectorization Method:** The quality of your text vectorization directly impacts the clustering results. Experiment with different methods.
*   **Interpreting Clusters:** The algorithm groups data, but it's up to you to understand what those groups *mean* in the context of your problem. This often involves inspecting representative documents or identifying key terms for each cluster.

By following these steps, you can effectively execute K-means clustering on your textual data to discover underlying patterns and group similar documents.

## Supports

- [[text-data-clustering-execution|Text Data Clustering Execution]]

---
type: "medium"
title: "K-means Algorithm Implementation"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/data/data-science/text-clustering/microskills/k-means-algorithm-implementation|k-means-algorithm-implementation]]"
---
# K-means Algorithm Implementation

This lesson focuses on the practical implementation of the K-means clustering algorithm. We'll walk through how to apply it to group textual data.

## What is K-means Clustering?

K-means is an unsupervised machine learning algorithm used for partitioning a dataset into a specified number ($k$) of clusters. Each data point belongs to the cluster with the nearest mean (centroid), serving as a prototype of the cluster. The algorithm aims to minimize the within-cluster sum of squares, which is the sum of squared distances between each data point and its assigned centroid.

## How K-means Works (The Algorithm Steps)

The K-means algorithm is an iterative process. Here's a breakdown of the core steps:

1.  **Initialization:**
    *   Choose the number of clusters, $k$.
    *   Randomly select $k$ data points from your dataset as initial centroids. Alternatively, more sophisticated initialization methods like K-means++ can be used to spread out the initial centroids.

2.  **Assignment Step:**
    *   For each data point, calculate its distance to every centroid.
    *   Assign the data point to the cluster whose centroid is closest. The most common distance metric used is the Euclidean distance.

3.  **Update Step:**
    *   Recalculate the position of each centroid. The new centroid's position is the mean of all data points assigned to that cluster.

4.  **Iteration:**
    *   Repeat the Assignment and Update steps until a stopping criterion is met. Common stopping criteria include:
        *   Centroids no longer move significantly between iterations.
        *   Data points no longer change cluster assignments.
        *   A maximum number of iterations is reached.

$$
\text{Euclidean Distance} = \sqrt{\sum_{i=1}^{n} (x_i - y_i)^2}
$$

Where $x$ and $y$ are two data points in an n-dimensional space.

## Practical Application: Clustering Text Data

To apply K-means to text data, we first need to convert the text into a numerical format that the algorithm can understand. This process is called **text vectorization**. Common techniques include:

*   **Bag-of-Words (BoW):** Represents text as a vector of word counts, ignoring grammar and word order.
*   **TF-IDF (Term Frequency-Inverse Document Frequency):** Weights words based on their frequency in a document and rarity across the entire corpus. This helps to highlight important words.

Once text is vectorized, you can apply K-means.

### Example Scenario

Imagine you have a collection of customer reviews, and you want to group them into categories like "positive feedback," "bug reports," and "feature requests" without pre-labeling them.

**Data:**

*   Review 1: "The app is fantastic, very easy to use!"
*   Review 2: "I encountered a critical bug, the application crashes frequently."
*   Review 3: "Could you please add a dark mode option?"
*   Review 4: "Love the new update, performance is amazing."
*   Review 5: "The login functionality is broken, I can't access my account."
*   Review 6: "It would be great to have a search history feature."

**Steps to Implement:**

1.  **Text Preprocessing:** Clean the text (lowercase, remove punctuation, stop words).
2.  **Vectorization:** Convert the preprocessed text into numerical vectors using TF-IDF.
3.  **Choose $k$:** Decide how many clusters you want. For this example, let's choose $k=3$.
4.  **Apply K-means:** Run the K-means algorithm on the TF-IDF vectors.

Let's visualize the process conceptually after vectorization. Each review is now a point in a multi-dimensional space.

*   **Iteration 1:**
    *   Randomly pick 3 points as initial centroids.
    *   Assign each review to the closest centroid.
    *   Update centroid positions based on the assigned reviews.

*   **Iteration 2 onwards:**
    *   Refine assignments and update centroids until convergence.

After convergence, you would examine the reviews within each cluster to understand the common theme and assign a meaningful label (e.g., Cluster 1: Positive Feedback, Cluster 2: Bug Reports, Cluster 3: Feature Requests).

### Python Implementation Snippet (Conceptual)

```python
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.cluster import KMeans
import pandas as pd

# Sample data
reviews = [
    "The app is fantastic, very easy to use!",
    "I encountered a critical bug, the application crashes frequently.",
    "Could you please add a dark mode option?",
    "Love the new update, performance is amazing.",
    "The login functionality is broken, I can't access my account.",
    "It would be great to have a search history feature."
]

# 1. Text Preprocessing (simplified for example)
# In a real scenario, you'd use libraries like NLTK or spaCy for extensive cleaning.
processed_reviews = [review.lower().replace(',', '').replace('?', '').replace('!', '') for review in reviews]

# 2. Vectorization
vectorizer = TfidfVectorizer()
X = vectorizer.fit_transform(processed_reviews)

# 3. Choose k and Apply K-means
k = 3
kmeans = KMeans(n_clusters=k, random_state=42, n_init=10) # n_init to suppress warning
kmeans.fit(X)

# 4. Assign cluster labels back to original data
clusters = kmeans.labels_

# Display results
for i, review in enumerate(reviews):
    print(f"Review: '{review}' -> Cluster: {clusters[i]}")

# To interpret clusters, you'd examine keywords associated with each centroid.
# For example:
# print("Cluster centers:\n", kmeans.cluster_centers_)
# print("Top terms per cluster:\n", vectorizer.get_feature_names_out()) # For older sklearn versions, get_feature_names()
```

## Key Considerations

*   **Choosing $k$:** Determining the optimal number of clusters ($k$) is often a challenge. Techniques like the "elbow method" or "silhouette analysis" can help.
*   **Initialization:** The random initialization of centroids can lead to different clustering results. Running K-means multiple times with different initializations and choosing the best result is a common practice.
*   **Distance Metric:** While Euclidean distance is common, other metrics might be more suitable depending on the data.
*   **Text Representation:** The quality of your text vectorization significantly impacts clustering performance. Experiment with different methods and parameters.

By understanding these steps and considerations, you can effectively apply the K-means algorithm to group your textual data.

## Supports

- [[skills/data/data-science/text-clustering/microskills/k-means-algorithm-implementation|K-means Algorithm Implementation]]

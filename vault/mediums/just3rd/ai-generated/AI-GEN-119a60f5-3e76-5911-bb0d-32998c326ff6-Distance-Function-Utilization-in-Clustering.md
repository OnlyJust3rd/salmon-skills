---
type: "medium"
title: "Distance Functions in K-Means Clustering"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/data/data-science/text-clustering/microskills/distance-function-utilization-in-clustering|distance-function-utilization-in-clustering]]"
---
# Distance Functions in K-Means Clustering

When we group text data using K-means, we need a way to measure how "close" or "similar" two pieces of text are. This is where distance functions come in. They are the mathematical tools that K-means uses to decide which cluster a document belongs to.

## What are Distance Functions?

In the context of K-means for text, distance functions quantify the dissimilarity between two text documents. The goal is to find documents that are "close" in meaning or topic. K-means works by:

1.  **Initializing centroids:** These are representative points for each cluster.
2.  **Assigning documents:** Each document is assigned to the cluster whose centroid is closest to it.
3.  **Recalculating centroids:** The centroid of each cluster is updated based on the documents assigned to it.
4.  **Repeating:** Steps 2 and 3 are repeated until the cluster assignments no longer change.

The "closeness" in step 2 is determined by the chosen distance function.

## Common Distance Functions for Text

For textual data, we often represent documents as numerical vectors (e.g., using TF-IDF or word embeddings). The distance functions then operate on these vectors.

### 1. Euclidean Distance

This is the most common distance metric. It's the straight-line distance between two points in a multi-dimensional space.

Imagine two documents, Doc A and Doc B, represented by vectors $V_A = [v_{A1}, v_{A2}, ..., v_{An}]$ and $V_B = [v_{B1}, v_{B2}, ..., v_{Bn}]$, where $n$ is the number of features (e.g., words in your vocabulary).

The Euclidean distance ($d_E$) is calculated as:

$$
d_E(V_A, V_B) = \sqrt{\sum_{i=1}^{n} (v_{Ai} - v_{Bi})^2}
$$

**When to use:** Good for general-purpose clustering when the magnitude of features is important and there isn't a strong preference for directionality in the feature space.

### 2. Cosine Similarity (and Distance)

Cosine similarity measures the cosine of the angle between two non-zero vectors. It tells us about the orientation of the vectors, not their magnitude. For text, this is often more useful because the length of a document (number of words) doesn't necessarily correlate with its topic.

Cosine similarity ($sim_{cos}$) is calculated as:

$$
sim_{cos}(V_A, V_B) = \frac{V_A \cdot V_B}{\|V_A\| \|V_B\|} = \frac{\sum_{i=1}^{n} v_{Ai} v_{Bi}}{\sqrt{\sum_{i=1}^{n} v_{Ai}^2} \sqrt{\sum_{i=1}^{n} v_{Bi}^2}}
$$

K-means typically uses distance, not similarity. To convert cosine similarity to a distance metric, we can use:

Cosine Distance ($d_{cos}$) = $1 - sim_{cos}(V_A, V_B)$

So,

$$
d_{cos}(V_A, V_B) = 1 - \frac{\sum_{i=1}^{n} v_{Ai} v_{Bi}}{\sqrt{\sum_{i=1}^{n} v_{Ai}^2} \sqrt{\sum_{i=1}^{n} v_{Bi}^2}}
$$

**When to use:** Highly recommended for text data, especially when using term frequency (TF) or TF-IDF representations. It focuses on the proportion of terms, making it robust to document length variations.

### 3. Manhattan Distance (L1 Distance)

Also known as the "city block" distance, it's the sum of the absolute differences of their Cartesian coordinates.

$$
d_M(V_A, V_B) = \sum_{i=1}^{n} |v_{Ai} - v_{Bi}|
$$

**When to use:** Can be useful when features are independent and have a linear relationship. Less common than Euclidean or Cosine for standard text clustering but can be effective in specific feature spaces.

## Choosing the Right Distance Function

The choice of distance function significantly impacts the clustering results.

*   **For raw word counts or TF-IDF vectors:** **Cosine distance** is usually the best starting point. It normalizes for document length, focusing on the thematic content.
*   **For dense embeddings (like Word2Vec, GloVe, Sentence-BERT):** Both **Euclidean distance** and **Cosine distance** can work well. Euclidean distance might capture magnitude differences in embeddings, while Cosine distance focuses on semantic direction. Experimentation is key.

### Example Scenario

Let's say you have two very short documents represented as TF-IDF vectors:

*   Doc 1: `["apple": 0.5, "banana": 0.3, "fruit": 0.7]`
*   Doc 2: `["apple": 0.6, "fruit": 0.8, "red": 0.4]`

To apply K-means, we need to convert these into numerical vectors, assuming a consistent order of features: `["apple", "banana", "fruit", "red"]`.

*   $V_1 = [0.5, 0.3, 0.7, 0.0]$
*   $V_2 = [0.6, 0.0, 0.8, 0.4]$

**Calculating Euclidean Distance:**

$$
d_E(V_1, V_2) = \sqrt{(0.5-0.6)^2 + (0.3-0.0)^2 + (0.7-0.8)^2 + (0.0-0.4)^2}
$$
$$
d_E(V_1, V_2) = \sqrt{(-0.1)^2 + (0.3)^2 + (-0.1)^2 + (-0.4)^2}
$$
$$
d_E(V_1, V_2) = \sqrt{0.01 + 0.09 + 0.01 + 0.16} = \sqrt{0.27} \approx 0.52
$$

**Calculating Cosine Distance:**

First, calculate similarity:

$$
V_1 \cdot V_2 = (0.5 \times 0.6) + (0.3 \times 0.0) + (0.7 \times 0.8) + (0.0 \times 0.4) = 0.3 + 0 + 0.56 + 0 = 0.86
$$

$$
\|V_1\| = \sqrt{0.5^2 + 0.3^2 + 0.7^2 + 0.0^2} = \sqrt{0.25 + 0.09 + 0.49 + 0} = \sqrt{0.83} \approx 0.91
$$

$$
\|V_2\| = \sqrt{0.6^2 + 0.0^2 + 0.8^2 + 0.4^2} = \sqrt{0.36 + 0 + 0.64 + 0.16} = \sqrt{1.16} \approx 1.08
$$

$$
sim_{cos}(V_1, V_2) = \frac{0.86}{0.91 \times 1.08} \approx \frac{0.86}{0.98} \approx 0.88
$$

$$
d_{cos}(V_1, V_2) = 1 - 0.88 = 0.12
$$

In this case, the cosine distance (0.12) is much smaller than the Euclidean distance (0.52), suggesting these documents are more similar in topic than their raw vector magnitudes might imply. This is why cosine distance is often preferred for text.

## Summary

Understanding and selecting the appropriate distance function is crucial for effective K-means clustering of text. While Euclidean distance is a general metric, cosine distance often provides better results for text data by focusing on the relative importance of words rather than document length. Always consider the nature of your text representation when making this choice.

## Supports

- [[skills/data/data-science/text-clustering/microskills/distance-function-utilization-in-clustering|Distance Function Utilization in Clustering]]

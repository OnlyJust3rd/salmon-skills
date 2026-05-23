---
type: "medium"
title: "Euclidean Distance: Measuring Similarity"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/data-ai/data-science/text-clustering/microskills/euclidean-distance-definition|euclidean-distance-definition]]"
learning-time-in-minutes: 4
---
# Euclidean Distance: Measuring Similarity

In text clustering, we often need to understand how similar two documents are. One fundamental way to do this is by measuring the "distance" between them. The closer two documents are in a conceptual space, the more similar they are likely to be. Euclidean distance is a common and intuitive metric for calculating this similarity.

## What is Euclidean Distance?

Imagine you have two points in a space. Euclidean distance is simply the straight-line distance between these two points. It's the most common type of distance used in everyday life, like measuring the length of a road between two cities.

### From Geometry to Text

To apply Euclidean distance to text, we first need to represent our documents as points in a multi-dimensional space. This is typically done using techniques like TF-IDF (Term Frequency-Inverse Document Frequency) or word embeddings, where each dimension represents a word or a concept.

Let's say we have two documents, Document A and Document B. After converting them into numerical vectors, we can represent them as points in this multi-dimensional space.

For example, if we only consider two features (dimensions) for simplicity:
*   **Feature 1:** The count of the word "apple".
*   **Feature 2:** The count of the word "banana".

Document A might be represented by the vector \( \mathbf{a} = (a_1, a_2) \).
Document B might be represented by the vector \( \mathbf{b} = (b_1, b_2) \).

In this 2D space, \( a_1 \) and \( b_1 \) would be the "apple" counts for Document A and Document B, respectively. Similarly, \( a_2 \) and \( b_2 \) would be the "banana" counts.

## The Formula

For two points in an N-dimensional space, \( \mathbf{a} = (a_1, a_2, ..., a_n) \) and \( \mathbf{b} = (b_1, b_2, ..., b_n) \), the Euclidean distance is calculated as follows:

$$
d(\mathbf{a}, \mathbf{b}) = \sqrt{\sum_{i=1}^{n} (a_i - b_i)^2}
$$

Let's break this down:
1.  **\( (a_i - b_i) \):** For each dimension (feature), we find the difference between the values of the two documents.
2.  **\( (a_i - b_i)^2 \):** We square this difference. Squaring ensures that the distance is always positive, regardless of whether \( a_i \) is larger or smaller than \( b_i \). It also gives more weight to larger differences.
3.  **\( \sum_{i=1}^{n} (a_i - b_i)^2 \):** We sum up all the squared differences across all dimensions.
4.  **\( \sqrt{...} \):** Finally, we take the square root of the sum to get the actual straight-line distance.

### Worked Example (2D)

Let's say we have two simple text documents represented by the following vectors (representing the counts of "cat" and "dog"):

*   Document X: \( \mathbf{x} = (3, 1) \)  (3 mentions of "cat", 1 mention of "dog")
*   Document Y: \( \mathbf{y} = (1, 2) \)  (1 mention of "cat", 2 mentions of "dog")

Now, let's calculate the Euclidean distance between them:

*   Difference in "cat" count: \( a_1 - b_1 = 3 - 1 = 2 \)
*   Difference in "dog" count: \( a_2 - b_2 = 1 - 2 = -1 \)

Now, square these differences:
*   \( (3 - 1)^2 = 2^2 = 4 \)
*   \( (1 - 2)^2 = (-1)^2 = 1 \)

Sum the squared differences:
*   \( 4 + 1 = 5 \)

Take the square root:
*   \( \sqrt{5} \approx 2.24 \)

So, the Euclidean distance between Document X and Document Y is approximately 2.24.

## Interpretation

*   **Smaller Euclidean distance:** Indicates that the documents are more similar (closer in the feature space).
*   **Larger Euclidean distance:** Indicates that the documents are less similar (further apart in the feature space).

## When to Use Euclidean Distance

Euclidean distance is a good choice when:

*   Your feature vectors are numerical and represent continuous quantities.
*   The magnitude of the features is important.
*   The "origin" of your feature space has a meaningful interpretation (though this is less critical for distance calculations themselves).

## Potential Pitfalls and Considerations

*   **Feature Scaling:** Euclidean distance is sensitive to the scale of features. If one feature has a much larger range of values than others (e.g., word counts vs. document length), it can dominate the distance calculation. It's often necessary to normalize or scale your features before applying Euclidean distance.
*   **High Dimensionality:** In very high-dimensional spaces, Euclidean distance can sometimes behave counter-intuitively (the "curse of dimensionality").
*   **Sparsity:** For sparse text data (where most feature values are zero), other metrics like Cosine Similarity might be more appropriate.

By understanding Euclidean distance, you've taken a crucial step in grasping how we quantify similarity between text documents for clustering.

## Supports

- [[skills/computing/data-ai/data-science/text-clustering/microskills/euclidean-distance-definition|Euclidean Distance Definition]]

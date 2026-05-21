---
type: "medium"
title: "Cosine Similarity: Measuring Text \"Closeness\""
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/data/data-science/text-clustering/microskills/cosine-similarity-definition|cosine-similarity-definition]]"
---
# Cosine Similarity: Measuring Text "Closeness"

When we're working with text clustering, we often need to figure out how similar two pieces of text are. Imagine you have a pile of documents, and you want to group similar ones together. How do you quantify "similar"? This is where distance metrics come in, and one of the most common and effective for text is **Cosine Similarity**.

## What is Cosine Similarity?

At its core, cosine similarity measures the cosine of the angle between two non-zero vectors in a multi-dimensional space. In the context of text, these vectors represent our documents.

Think of it this way:

1.  **Representing Text as Vectors:** Before we can measure angles, we need to convert our text documents into numerical vectors. A common way to do this is using techniques like TF-IDF (Term Frequency-Inverse Document Frequency), where each dimension of the vector corresponds to a word in our vocabulary, and the value in that dimension represents how important that word is to the document.

2.  **The Angle Matters:** If two documents discuss very similar topics, their word vectors will point in roughly the same direction in this multi-dimensional space. The angle between them will be small, and the cosine of a small angle is close to 1. If the documents are very different, their vectors will point in different directions, leading to a larger angle and a cosine value closer to 0 (or even negative if the vectors point in opposite directions, though for text this is less common with positive TF-IDF weights).

3.  **Normalization:** Cosine similarity is particularly useful because it's not affected by the *length* of the documents, only their orientation. A long document that talks extensively about "dogs" will still be considered similar to a short document that also mentions "dogs" prominently, as long as the relative importance of words is similar.

### The Formula

The cosine similarity between two vectors, **A** and **B**, is calculated as:

$$ \text{cosine\_similarity}(A, B) = \frac{A \cdot B}{\|A\| \|B\|} $$

Where:

*   $A \cdot B$ is the dot product of vectors A and B.
*   $\|A\|$ is the magnitude (or Euclidean norm) of vector A.
*   $\|B\|$ is the magnitude (or Euclidean norm) of vector B.

$$ A \cdot B = \sum_{i=1}^{n} A_i B_i $$

$$ \|A\| = \sqrt{\sum_{i=1}^{n} A_i^2} $$

The result of cosine similarity ranges from -1 to 1. However, in text analysis, where vector components are typically non-negative (like word counts or TF-IDF scores), the range is usually **0 to 1**.

*   **1:** Means the vectors are identical in orientation (perfectly similar).
*   **0:** Means the vectors are orthogonal (no similarity).
*   Values between 0 and 1 indicate varying degrees of similarity.

## Why is Cosine Similarity Good for Text?

*   **Handles High Dimensionality:** Text data often results in very high-dimensional vectors (one dimension for every unique word). Cosine similarity performs well in these scenarios.
*   **Ignores Document Length:** As mentioned, it focuses on the *proportion* of words, making it robust to variations in document size.
*   **Effective for Sparse Data:** Text datasets are often sparse (most entries in the TF-IDF matrix are zero). Cosine similarity works efficiently with sparse vectors.

## Practical Understanding: An Example

Let's imagine we have two very short "documents" represented by simple word counts:

*   **Document 1:** "The cat sat on the mat."
*   **Document 2:** "The dog sat on the rug."

And let's consider a small vocabulary: {the, cat, sat, on, mat, dog, rug}.

We can represent these as vectors:

*   **Vector D1:** `[2, 1, 1, 1, 1, 0, 0]` (for "the", "cat", "sat", "on", "mat", "dog", "rug")
*   **Vector D2:** `[1, 0, 1, 1, 0, 1, 1]` (for "the", "cat", "sat", "on", "mat", "dog", "rug")

Now, let's calculate the cosine similarity:

1.  **Dot Product (D1 · D2):**
    $$(2 \times 1) + (1 \times 0) + (1 \times 1) + (1 \times 1) + (1 \times 0) + (0 \times 1) + (0 \times 1) = 2 + 0 + 1 + 1 + 0 + 0 + 0 = 4$$

2.  **Magnitude of D1 (||D1||):**
    $$ \sqrt{2^2 + 1^2 + 1^2 + 1^2 + 1^2 + 0^2 + 0^2} = \sqrt{4 + 1 + 1 + 1 + 1 + 0 + 0} = \sqrt{8} \approx 2.828 $$

3.  **Magnitude of D2 (||D2||):**
    $$ \sqrt{1^2 + 0^2 + 1^2 + 1^2 + 0^2 + 1^2 + 1^2} = \sqrt{1 + 0 + 1 + 1 + 0 + 1 + 1} = \sqrt{5} \approx 2.236 $$

4.  **Cosine Similarity:**
    $$ \frac{4}{2.828 \times 2.236} \approx \frac{4}{6.324} \approx 0.632 $$

A score of approximately 0.632 suggests a moderate to good degree of similarity between these two simple sentences. They share common words like "the", "sat", and "on", which drives up the similarity score. If we had included TF-IDF weighting, the score might shift based on the rarity of these words across a larger corpus.

## Common Pitfalls

*   **Zero Vectors:** Cosine similarity is undefined if one or both vectors are zero vectors. This usually doesn't happen with text unless a document is completely empty.
*   **Using Raw Counts:** While we used raw counts for simplicity, for real-world text clustering, it's almost always better to use TF-IDF or other more sophisticated vectorization methods. Raw counts can heavily favor very common words.
*   **Interpretation of Negative Scores:** Remember that in text processing with non-negative features, scores will be between 0 and 1. A score of 0 means no shared important terms; a score of 1 means perfect alignment.

Cosine similarity is a fundamental tool for understanding how "close" text documents are in a vector space, forming the backbone of many text clustering algorithms.

## Supports

- [[skills/data/data-science/text-clustering/microskills/cosine-similarity-definition|Cosine Similarity Definition]]

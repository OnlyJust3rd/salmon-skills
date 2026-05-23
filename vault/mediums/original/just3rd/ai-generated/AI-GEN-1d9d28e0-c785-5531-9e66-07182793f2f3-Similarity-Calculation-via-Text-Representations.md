---
type: "medium"
title: "Calculating Text Similarity Using Numerical Representations"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/data-ai/data-science/text-feature-engineering/microskills/similarity-calculation-via-text-representations|similarity-calculation-via-text-representations]]"
learning-time-in-minutes: 5
---
# Calculating Text Similarity Using Numerical Representations

Understanding how computers "understand" text is crucial in many areas, like searching for similar documents or recommending related articles. This is where text representation and similarity calculations come into play. We've learned about different ways to turn text into numbers (like Bag-of-Words, TF-IDF, Word2Vec, and GloVe). Now, let's focus on how these numerical representations actually allow us to measure how similar two pieces of text are.

## The Core Idea: Text as Points in Space

Imagine each document or word as a point in a multi-dimensional space. The numerical representation assigns coordinates to these points. The closer two points are in this space, the more similar the corresponding text is considered to be.

Think of it like this:
*   **Word2Vec/GloVe:** Words with similar meanings (like "king" and "queen") will be represented by vectors that are close to each other in this space.
*   **TF-IDF/Bag-of-Words:** Documents with similar word frequencies (even if they don't use the exact same words) will have vectors that are close.

### How Numerical Representations Enable Similarity

The magic happens because mathematical operations can be performed on these numerical vectors. We can calculate the "distance" or "angle" between them.

## Common Similarity Metrics

Several mathematical formulas are used to quantify this similarity. The most common ones rely on the geometric relationship between the text vectors.

### 1. Cosine Similarity

Cosine similarity measures the cosine of the angle between two non-zero vectors. It's a very popular metric because it's independent of the magnitude of the vectors, focusing instead on their orientation.

$$ \text{similarity} = \cos(\theta) = \frac{\mathbf{A} \cdot \mathbf{B}}{\|\mathbf{A}\| \|\mathbf{B}\|} $$

Where:
*   $\mathbf{A}$ and $\mathbf{B}$ are the two text vectors.
*   $\mathbf{A} \cdot \mathbf{B}$ is the dot product of the vectors.
*   $\|\mathbf{A}\|$ and $\|\mathbf{B}\|$ are the magnitudes (or Euclidean norms) of the vectors.

**Interpretation:**
*   A value of 1 means the vectors are identical (perfect similarity).
*   A value of 0 means the vectors are orthogonal (no similarity).
*   A value of -1 means the vectors are opposite (perfect dissimilarity).

**When it's useful:** Cosine similarity is excellent for comparing documents represented by TF-IDF or document-term matrices, as well as comparing word embeddings from Word2Vec or GloVe. It tells you if texts share similar *topics* or *meanings*, regardless of their length.

### 2. Euclidean Distance

Euclidean distance is the straight-line distance between two points in a multi-dimensional space.

$$ \text{distance} = \sqrt{\sum_{i=1}^{n} (A_i - B_i)^2} $$

Where:
*   $A_i$ and $B_i$ are the $i$-th dimensions of vectors $\mathbf{A}$ and $\mathbf{B}$.
*   $n$ is the total number of dimensions.

**Interpretation:**
*   A value of 0 means the points are identical (perfect similarity).
*   Larger values indicate greater distance and thus less similarity.

**When it's useful:** While it can be used with various text representations, Euclidean distance is more sensitive to the *magnitude* of the vectors. For text, this can sometimes be less desirable than cosine similarity because document length can heavily influence the magnitude. However, it can be useful in specific scenarios where magnitude is relevant.

### 3. Jaccard Similarity (for sets/Bag-of-Words)

While not strictly a vector-space metric, Jaccard similarity is very relevant when dealing with discrete representations like Bag-of-Words, especially when you think of documents as sets of unique words.

$$ \text{Jaccard Index} = \frac{|A \cap B|}{|A \cup B|} $$

Where:
*   $A$ and $B$ are the sets of unique words in two documents.
*   $|A \cap B|$ is the number of words common to both sets (intersection).
*   $|A \cup B|$ is the total number of unique words across both sets (union).

**Interpretation:**
*   A value of 1 means the sets are identical (perfect similarity).
*   A value of 0 means the sets have no words in common (no similarity).

**When it's useful:** Great for finding documents that share a lot of the same vocabulary, irrespective of word frequency. It's simple and intuitive for comparing the set of terms present.

## Putting It Together: An Example

Let's say we have two short sentences and we've represented them using a simple Bag-of-Words approach, then calculated their vectors.

**Sentence 1:** "the cat sat on the mat"
**Sentence 2:** "the dog sat on the rug"

Let's ignore common words for simplicity and focus on unique terms: `cat`, `dog`, `sat`, `mat`, `rug`.

**Simplified Bag-of-Words Vectors:**

*   **Doc 1 ("the cat sat on the mat"):** [1, 0, 1, 1, 0]  (cat, sat, mat)
*   **Doc 2 ("the dog sat on the rug"):** [0, 1, 1, 0, 1]  (dog, sat, rug)

Now, let's calculate Cosine Similarity:

*   $\mathbf{A} = [1, 0, 1, 1, 0]$
*   $\mathbf{B} = [0, 1, 1, 0, 1]$

1.  **Dot Product ($\mathbf{A} \cdot \mathbf{B}$):**
    $(1 \times 0) + (0 \times 1) + (1 \times 1) + (1 \times 0) + (0 \times 1) = 0 + 0 + 1 + 0 + 0 = 1$

2.  **Magnitude of $\mathbf{A}$ ($\|\mathbf{A}\|$):**
    $\sqrt{1^2 + 0^2 + 1^2 + 1^2 + 0^2} = \sqrt{1 + 0 + 1 + 1 + 0} = \sqrt{3}$

3.  **Magnitude of $\mathbf{B}$ ($\|\mathbf{B}\|$):**
    $\sqrt{0^2 + 1^2 + 1^2 + 0^2 + 1^2} = \sqrt{0 + 1 + 1 + 0 + 1} = \sqrt{3}$

4.  **Cosine Similarity:**
    $$ \frac{1}{\sqrt{3} \times \sqrt{3}} = \frac{1}{3} \approx 0.33 $$

The cosine similarity of approximately 0.33 indicates a moderate level of similarity. This makes sense because both sentences share the words "sat" and are structured similarly, even though they have different subjects ("cat" vs. "dog") and locations ("mat" vs. "rug").

## Conclusion

By transforming text into numerical representations, we unlock powerful mathematical tools to measure similarity. Metrics like cosine similarity, Euclidean distance, and Jaccard similarity allow us to quantify how alike texts are, which is fundamental for building intelligent systems that can understand and process natural language.

## Supports

- [[skills/computing/data-ai/data-science/text-feature-engineering/microskills/similarity-calculation-via-text-representations|Similarity Calculation via Text Representations]]

---
type: "medium"
title: "Generating Co-Occurrence Matrices"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/data/data-science/text-feature-engineering/microskills/co-occurrence-matrix-generation|co-occurrence-matrix-generation]]"
---
# Generating Co-Occurrence Matrices

This lesson focuses on generating co-occurrence matrices, a technique used to represent the relationships between words in a text corpus. This is a crucial step in text feature engineering, helping us understand which words tend to appear together, which can then be used for various machine learning tasks.

## What is a Co-Occurrence Matrix?

A co-occurrence matrix is a square matrix where both the rows and columns represent the unique words (or tokens) in your vocabulary. Each cell `(i, j)` in the matrix stores a count representing how many times word `i` and word `j` appear together within a defined context window.

The "context window" is a key concept here. It defines how we determine if two words "co-occur." Common window definitions include:

*   **Fixed Window:** A fixed number of words before and after a target word. For example, a window of size 2 would consider words within 2 positions to the left and 2 positions to the right.
*   **Sentence Window:** Words co-occur if they appear within the same sentence.
*   **Paragraph Window:** Words co-occur if they appear within the same paragraph.

The choice of context window significantly impacts the resulting matrix and the insights derived from it.

## Why Use Co-Occurrence Matrices?

Co-occurrence matrices capture semantic relationships between words. Words that frequently appear together often have related meanings. For example, "king" and "queen" or "machine" and "learning" are likely to have high co-occurrence counts. This information can be valuable for:

*   **Word Similarity:** Estimating how similar two words are based on their co-occurrence patterns.
*   **Dimensionality Reduction:** Creating dense vector representations (like Word2Vec or GloVe, which are often built upon co-occurrence statistics) from sparse co-occurrence data.
*   **Topic Modeling:** Identifying underlying themes or topics by analyzing clusters of co-occurring words.

## Generating a Co-Occurrence Matrix: A Step-by-Step Approach

Let's walk through the process of generating a co-occurrence matrix using a simple example.

**Our Text Corpus:**

Imagine we have the following two short documents:

1.  "The cat sat on the mat."
2.  "The dog sat on the rug."

**Step 1: Preprocessing and Tokenization**

First, we need to clean and tokenize our text. This involves:

*   **Lowercasing:** Converting all text to lowercase.
*   **Punctuation Removal:** Removing punctuation marks.
*   **Tokenization:** Splitting the text into individual words (tokens).

After preprocessing, our documents become:

1.  "the cat sat on the mat" -> `['the', 'cat', 'sat', 'on', 'the', 'mat']`
2.  "the dog sat on the rug" -> `['the', 'dog', 'sat', 'on', 'the', 'rug']`

**Step 2: Building the Vocabulary**

Next, we create a unique list of all words in our corpus.

Vocabulary: `['the', 'cat', 'sat', 'on', 'mat', 'dog', 'rug']`

We can assign an index to each word for easier matrix representation.

*   `the`: 0
*   `cat`: 1
*   `sat`: 2
*   `on`: 3
*   `mat`: 4
*   `dog`: 5
*   `rug`: 6

**Step 3: Defining the Context Window**

For this example, let's use a simple **fixed window of size 1**. This means we consider the word immediately before and the word immediately after a target word.

**Step 4: Iterating and Counting Co-occurrences**

Now, we iterate through each document and count how many times each pair of words appears within our defined context window.

Let's process Document 1: `['the', 'cat', 'sat', 'on', 'the', 'mat']`

*   **Target: 'the' (index 0)**
    *   Next word: 'cat' (index 1). Co-occurrence: (the, cat). Increment count for (0, 1).
    *   Next word: 'sat' (index 2). (the, sat). Increment count for (0, 2).
*   **Target: 'cat' (index 1)**
    *   Previous word: 'the' (index 0). Co-occurrence: (cat, the). Increment count for (1, 0).
    *   Next word: 'sat' (index 2). Co-occurrence: (cat, sat). Increment count for (1, 2).
*   **Target: 'sat' (index 2)**
    *   Previous word: 'cat' (index 1). Co-occurrence: (sat, cat). Increment count for (2, 1).
    *   Next word: 'on' (index 3). Co-occurrence: (sat, on). Increment count for (2, 3).
*   **Target: 'on' (index 3)**
    *   Previous word: 'sat' (index 2). Co-occurrence: (on, sat). Increment count for (3, 2).
    *   Next word: 'the' (index 0). Co-occurrence: (on, the). Increment count for (3, 0).
*   **Target: 'the' (index 0)**
    *   Previous word: 'on' (index 3). Co-occurrence: (the, on). Increment count for (0, 3).
    *   Next word: 'mat' (index 4). Co-occurrence: (the, mat). Increment count for (0, 4).
*   **Target: 'mat' (index 4)**
    *   Previous word: 'the' (index 0). Co-occurrence: (mat, the). Increment count for (4, 0).

Let's process Document 2: `['the', 'dog', 'sat', 'on', 'the', 'rug']`

*   **Target: 'the' (index 0)**
    *   Next word: 'dog' (index 5). Co-occurrence: (the, dog). Increment count for (0, 5).
    *   Next word: 'sat' (index 2). Co-occurrence: (the, sat). Increment count for (0, 2).
*   **Target: 'dog' (index 5)**
    *   Previous word: 'the' (index 0). Co-occurrence: (dog, the). Increment count for (5, 0).
    *   Next word: 'sat' (index 2). Co-occurrence: (dog, sat). Increment count for (5, 2).
*   **Target: 'sat' (index 2)**
    *   Previous word: 'dog' (index 5). Co-occurrence: (sat, dog). Increment count for (2, 5).
    *   Next word: 'on' (index 3). Co-occurrence: (sat, on). Increment count for (2, 3).
*   **Target: 'on' (index 3)**
    *   Previous word: 'sat' (index 2). Co-occurrence: (on, sat). Increment count for (3, 2).
    *   Next word: 'the' (index 0). Co-occurrence: (on, the). Increment count for (3, 0).
*   **Target: 'the' (index 0)**
    *   Previous word: 'on' (index 3). Co-occurrence: (the, on). Increment count for (0, 3).
    *   Next word: 'rug' (index 6). Co-occurrence: (the, rug). Increment count for (0, 6).
*   **Target: 'rug' (index 6)**
    *   Previous word: 'the' (index 0). Co-occurrence: (rug, the). Increment count for (6, 0).

**Step 5: Constructing the Matrix**

We initialize a matrix of size (vocabulary\_size x vocabulary\_size) with zeros. Then, we populate it with our counts. Since co-occurrence is often symmetric (if "cat" co-occurs with "sat", then "sat" co-occurs with "cat"), we typically increment both `matrix[i][j]` and `matrix[j][i]`.

Let's build the matrix for our example (7x7 vocabulary):

|       | the (0) | cat (1) | sat (2) | on (3) | mat (4) | dog (5) | rug (6) |
| :---- | :------ | :------ | :------ | :----- | :------ | :------ | :------ |
| the (0) | 0       | 1       | 2       | 2      | 1       | 1       | 1       |
| cat (1) | 1       | 0       | 1       | 0      | 0       | 0       | 0       |
| sat (2) | 2       | 1       | 0       | 2      | 0       | 1       | 0       |
| on (3)  | 2       | 0       | 2       | 0      | 0       | 0       | 0       |
| mat (4) | 1       | 0       | 0       | 0      | 0       | 0       | 0       |
| dog (5) | 1       | 0       | 1       | 0      | 0       | 0       | 0       |
| rug (6) | 1       | 0       | 0       | 0      | 0       | 0       | 0       |

*Explanation of a few cells:*

*   `matrix[0][2]` (the, sat) is 2 because "the sat" appeared twice.
*   `matrix[2][0]` (sat, the) is also 2 due to symmetry.
*   `matrix[1][2]` (cat, sat) is 1 because "cat sat" appeared once.

## Practical Implementation Notes

In practice, you'd use libraries like `NLTK`, `spaCy`, or `scikit-learn` in Python for efficient text preprocessing and matrix generation.

Considerations when generating co-occurrence matrices:

*   **Vocabulary Size:** Large corpora can lead to very large, sparse matrices. Techniques like frequency thresholds or sub-sampling can help manage this.
*   **Window Size Tuning:** Experiment with different window sizes to find what best captures the relationships relevant to your task.
*   **Normalization:** Sometimes, raw counts are normalized (e.g., by dividing by the total number of co-occurrences for a word) to get probabilities or other metrics.
*   **Contextual Information:** For more advanced semantic understanding, consider variations like asymmetric co-occurrence or weighted counts.

By understanding and applying co-occurrence matrix generation, you gain a powerful tool for representing word relationships and paving the way for more sophisticated text analysis and machine learning models.

## Supports

- [[skills/data/data-science/text-feature-engineering/microskills/co-occurrence-matrix-generation|Co-Occurrence Matrix Generation]]

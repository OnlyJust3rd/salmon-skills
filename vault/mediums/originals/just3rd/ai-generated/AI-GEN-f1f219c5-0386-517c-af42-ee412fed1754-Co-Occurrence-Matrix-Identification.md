---
type: medium
title: Understanding Co-Occurrence Matrices
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[co-occurrence-matrix-identification|co-occurrence-matrix-identification]]"
learning-time-in-minutes: 5
---
# Understanding Co-Occurrence Matrices

This lesson focuses on identifying and defining co-occurrence matrices, a fundamental method for representing relationships between words in text.

## What is a Co-Occurrence Matrix?

A co-occurrence matrix is a way to visualize and quantify how often words appear together within a defined context in a body of text (a corpus). Think of it as a grid where each cell tells you how many times two specific words were found next to each other, or within a certain "window" of words.

### Key Concepts

*   **Words:** The individual units of text (e.g., "cat," "dog," "house").
*   **Context Window:** The range of words around a target word that we consider for co-occurrence. This could be a fixed number of words before and after, or words within the same sentence.
*   **Co-occurrence:** When two words appear together within the defined context window.
*   **Matrix:** A table of numbers arranged in rows and columns.

### How it Works

Imagine you have the sentence: "The cat sat on the mat."

If our context window is 1 word on each side (meaning we look at the immediate neighbors), we can build a co-occurrence matrix.

Let's consider the word "cat." Its neighbors are "The" (before) and "sat" (after).
Let's consider the word "sat." Its neighbors are "cat" (before) and "on" (after).

We would then count these occurrences for all words in the corpus.

## Building a Simple Co-Occurrence Matrix

Let's use a very small corpus:

1.  "The quick brown fox"
2.  "The lazy dog"
3.  "The fox jumps over the lazy dog"

We'll define our context window as **2 words** on either side of the target word.

**Step 1: Create a Vocabulary**
List all unique words: {"The", "quick", "brown", "fox", "lazy", "dog", "jumps", "over"}

**Step 2: Initialize the Matrix**
Create a matrix with rows and columns corresponding to each word in the vocabulary. All values start at 0.

|       | The | quick | brown | fox | lazy | dog | jumps | over |
| :---- | :-- | :---- | :---- | :-- | :--- | :-- | :---- | :--- |
| **The** | 0   |       |       |     |      |     |       |      |
| **quick** |     | 0     |       |     |      |     |       |      |
| **brown** |     |       | 0     |     |      |     |       |      |
| **fox** |     |       |       | 0   |      |     |       |      |
| **lazy** |     |       |       |     | 0    |     |       |      |
| **dog** |     |       |       |     |      | 0   |       |      |
| **jumps** |     |       |       |     |      |     | 0     |      |
| **over** |     |       |       |     |      |     |       | 0    |

**Step 3: Populate the Matrix**
Now, we iterate through each sentence and for each word, we look at its neighbors within the window and increment the corresponding cells in the matrix.

**Sentence 1: "The quick brown fox"**

*   **Word: "The"**: Neighbors are "quick", "brown".
    *   Increment (The, quick) and (The, brown).
*   **Word: "quick"**: Neighbors are "The", "brown", "fox".
    *   Increment (quick, The), (quick, brown), (quick, fox).
*   **Word: "brown"**: Neighbors are "The", "quick", "fox".
    *   Increment (brown, The), (brown, quick), (brown, fox).
*   **Word: "fox"**: Neighbors are "quick", "brown".
    *   Increment (fox, quick), (fox, brown).

**Sentence 2: "The lazy dog"**

*   **Word: "The"**: Neighbors are "lazy", "dog".
    *   Increment (The, lazy) and (The, dog).
*   **Word: "lazy"**: Neighbors are "The", "dog".
    *   Increment (lazy, The), (lazy, dog).
*   **Word: "dog"**: Neighbors are "The", "lazy".
    *   Increment (dog, The), (dog, lazy).

**Sentence 3: "The fox jumps over the lazy dog"**

*   **Word: "The"**: Neighbors are "fox", "jumps".
    *   Increment (The, fox) and (The, jumps).
*   **Word: "fox"**: Neighbors are "The", "jumps", "over".
    *   Increment (fox, The), (fox, jumps), (fox, over).
*   **Word: "jumps"**: Neighbors are "The", "fox", "over", "lazy".
    *   Increment (jumps, The), (jumps, fox), (jumps, over), (jumps, lazy).
*   **Word: "over"**: Neighbors are "jumps", "lazy", "dog".
    *   Increment (over, jumps), (over, lazy), (over, dog).
*   **Word: "lazy"**: Neighbors are "jumps", "over", "dog".
    *   Increment (lazy, jumps), (lazy, over), (lazy, dog).
*   **Word: "dog"**: Neighbors are "lazy", "over".
    *   Increment (dog, lazy), (dog, over).

After tallying all these increments, our matrix will show the counts. Note that co-occurrence matrices are usually symmetrical (the count of "A" appearing with "B" is the same as "B" appearing with "A"), but sometimes directional counts are used. For simplicity here, we'll assume symmetry.

**Example Partial Matrix (after counting):**

|       | The | quick | brown | fox | lazy | dog | jumps | over |
| :---- | :-- | :---- | :---- | :-- | :--- | :-- | :---- | :--- |
| **The** | 0   | 1     | 1     | 2   | 1    | 1   | 1     | 0    |
| **quick** | 1   | 0     | 1     | 1   | 0    | 0   | 0     | 0    |
| **brown** | 1   | 1     | 0     | 1   | 0    | 0   | 0     | 0    |
| **fox** | 2   | 1     | 1     | 0   | 0    | 0   | 1     | 1    |
| **lazy** | 1   | 0     | 0     | 0   | 0    | 2   | 1     | 2    |
| **dog** | 1   | 0     | 0     | 0   | 2    | 0   | 0     | 1    |
| **jumps** | 1   | 0     | 0     | 1   | 1    | 0   | 0     | 1    |
| **over** | 0   | 0     | 0     | 1   | 2    | 1   | 1     | 0    |

*Note: This is a simplified manual calculation. Actual implementations involve precise window handling and can be computationally intensive for large corpora.*

## Identifying Co-Occurrence Matrices

When you see a table representing word pairs and the frequency of their co-occurrence, you are looking at a co-occurrence matrix. Key indicators are:

*   **Square shape:** The number of rows equals the number of columns, representing the vocabulary size.
*   **Word labels:** Both the row and column headers are typically words from the text.
*   **Numerical values:** The cells contain counts or frequencies.
*   **Diagonal:** Often zero, as a word doesn't co-occur with itself in this context (unless specific rules allow).
*   **Symmetry (usually):** The value at `matrix[i][j]` is often the same as `matrix[j][i]`.

## Why Use Co-Occurrence Matrices?

Co-occurrence matrices are valuable because they capture local word context. Words that frequently appear together are likely related in meaning. This simple relationship is a building block for more advanced text representation methods like Word2Vec and GloVe, which learn dense vector embeddings from these co-occurrence patterns.

By identifying and understanding co-occurrence matrices, you gain insight into how word relationships are encoded from raw text.

## Supports

- [[co-occurrence-matrix-identification|Co-Occurrence Matrix Identification]]

---
type: "medium"
title: "Discrete Text Representations"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/data-ai/data-science/text-feature-engineering/microskills/discrete-text-representations|discrete-text-representations]]"
learning-time-in-minutes: 6
---
# Discrete Text Representations

In text feature engineering, representing text in a way that a machine can understand is crucial. Discrete text representations are a fundamental starting point for this. They treat words or other text units as distinct, individual items.

## What are Discrete Text Representations?

Discrete text representations assign a unique identifier or a fixed-size vector to each word or token in your vocabulary. Think of it like having a dictionary where each word has its own entry. These methods often rely on the presence or absence of words, or their frequency, but they don't capture the semantic relationships or context between words.

### Key Characteristics:

*   **Atomicity:** Each word is treated as an independent unit.
*   **Sparsity:** The resulting representations are often very large and sparse, meaning most of the values in the vectors are zero.
*   **No inherent semantic meaning:** The representation itself doesn't tell you if two words are similar.

Let's explore some common discrete text representation methods.

## 1. One-Hot Encoding

One-Hot Encoding is the simplest form of discrete representation. It converts each word into a binary vector where only one element is 'hot' (i.e., has a value of 1), and all others are 'cold' (i.e., have a value of 0).

### How it works:

1.  **Build a vocabulary:** Collect all unique words from your text corpus.
2.  **Assign an index:** Assign a unique integer index to each word in the vocabulary.
3.  **Create the vector:** For a given word, create a vector with a length equal to the size of your vocabulary. Set the element at the index corresponding to the word to 1, and all other elements to 0.

### Example:

Consider a small vocabulary: `{"the", "cat", "sat", "on", "mat"}`.

*   `"the"` might be index 0.
*   `"cat"` might be index 1.
*   `"sat"` might be index 2.
*   `"on"` might be index 3.
*   `"mat"` might be index 4.

The One-Hot encoded vector for `"cat"` would be: `[0, 1, 0, 0, 0]`
The One-Hot encoded vector for `"mat"` would be: `[0, 0, 0, 0, 1]`

### Limitations:

*   **High dimensionality:** As your vocabulary grows, the vectors become extremely large.
*   **Sparsity:** Most of the vector is filled with zeros.
*   **No similarity:** The vectors for `"cat"` and `"dog"` (if they were in the vocabulary) would be just as dissimilar as `"cat"` and `"the"`.

## 2. Bag-of-Words (BoW)

The Bag-of-Words model simplifies text by counting the frequency of words, ignoring their order and grammar. It's like throwing all the words from a document into a "bag" and then counting how many times each word appears.

### How it works:

1.  **Build a vocabulary:** Collect all unique words from your entire corpus.
2.  **Create document vectors:** For each document, create a vector whose length is the size of the vocabulary.
3.  **Populate the vector:** For each word in the vocabulary, count its occurrences in the document and place that count at the corresponding index in the document's vector.

### Example:

Let's use the same vocabulary: `{"the", "cat", "sat", "on", "mat"}`.

**Document 1:** "The cat sat on the mat."
**Document 2:** "The cat sat."

*   **Vocabulary:** `{"the", "cat", "sat", "on", "mat"}` (assuming these are all unique words across documents)
*   **Indices:** `{"the":0, "cat":1, "sat":2, "on":3, "mat":4}`

**Document 1 Vector:**
*   "the": appears 2 times -> index 0 = 2
*   "cat": appears 1 time -> index 1 = 1
*   "sat": appears 1 time -> index 2 = 1
*   "on": appears 1 time -> index 3 = 1
*   "mat": appears 1 time -> index 4 = 1
    Vector: `[2, 1, 1, 1, 1]`

**Document 2 Vector:**
*   "the": appears 1 time -> index 0 = 1
*   "cat": appears 1 time -> index 1 = 1
*   "sat": appears 1 time -> index 2 = 1
*   "on": appears 0 times -> index 3 = 0
*   "mat": appears 0 times -> index 4 = 0
    Vector: `[1, 1, 1, 0, 0]`

### Limitations:

*   **Ignores word order and context:** "The cat chased the dog" and "The dog chased the cat" would have similar BoW representations if they use the same words.
*   **Sparsity:** Vectors can still be sparse if documents are short or don't contain many words from the overall vocabulary.

## 3. TF-IDF (Term Frequency-Inverse Document Frequency)

TF-IDF is a refinement of Bag-of-Words that aims to give more weight to words that are important in a specific document but not overly common across the entire corpus. It helps to highlight distinctive terms.

### How it works:

TF-IDF combines two metrics:

*   **Term Frequency (TF):** Measures how often a word appears in a *single document*.
    $$ TF(t, d) = \frac{\text{Number of times term } t \text{ appears in document } d}{\text{Total number of terms in document } d} $$
*   **Inverse Document Frequency (IDF):** Measures how important a word is across the *entire corpus*. It penalizes words that appear in many documents (like "the", "a", "is").
    $$ IDF(t, D) = \log \left( \frac{\text{Total number of documents in corpus } D}{\text{Number of documents containing term } t} \right) $$
    (Often, `1 + Number of documents containing term t` is used in the denominator to avoid division by zero if a term is not present in any document).

The final TF-IDF score for a word $t$ in a document $d$ is:
$$ TF-IDF(t, d, D) = TF(t, d) \times IDF(t, D) $$

### Example:

Imagine a corpus of 3 documents:

*   **Doc 1:** "The cat sat on the mat."
*   **Doc 2:** "The dog sat on the floor."
*   **Doc 3:** "The cat is happy."

Let's calculate TF-IDF for the word "cat" in Doc 1.

*   **Vocabulary:** `{"the", "cat", "sat", "on", "mat", "dog", "floor", "is", "happy"}` (size 9)
*   **Total documents (D):** 3

**For "cat" in Doc 1:**
*   **TF("cat", Doc 1):** (1 occurrence of "cat" in Doc 1) / (6 words in Doc 1) = 1/6
*   **IDF("cat", D):** log(3 / 2)  (since "cat" appears in Doc 1 and Doc 3, so 2 documents)

**For "the" in Doc 1:**
*   **TF("the", Doc 1):** (2 occurrences of "the" in Doc 1) / (6 words in Doc 1) = 2/6
*   **IDF("the", D):** log(3 / 3) = log(1) = 0 (since "the" appears in all 3 documents)

The TF-IDF score for "the" will be 0, indicating it's not a discriminative word. The score for "cat" will be higher, reflecting its significance in Doc 1 and its relative rarity across the corpus.

### Advantages:

*   **Reduces the impact of common words:** Words like "the" get lower scores.
*   **Highlights important terms:** Words unique to a document get higher scores.

### Limitations:

*   **Still ignores word order and semantic meaning.**

## When to Use Discrete Representations:

Discrete representations are a good starting point for many text-based tasks, especially when:

*   You need a simple, interpretable baseline.
*   Computational resources are limited (compared to more complex methods).
*   The exact semantic relationships between words are less critical than their presence or frequency.
*   Tasks like basic text classification, document similarity (with caveats), and keyword extraction.

## Supports

- [[skills/computing/data-ai/data-science/text-feature-engineering/microskills/discrete-text-representations|Discrete Text Representations]]

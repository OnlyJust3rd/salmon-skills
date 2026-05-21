---
type: "medium"
title: "Numerical Text Representation"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/data/data-science/text-feature-engineering/microskills/numerical-text-representation|numerical-text-representation]]"
---
# Numerical Text Representation

To effectively use text data in machine learning models, we need to convert it into a numerical format that algorithms can understand. This process is called numerical text representation or text vectorization. This lesson focuses on the fundamental techniques to achieve this transformation, which is a crucial step in feature engineering for text data.

## Why Numerical Representation?

Machine learning algorithms, at their core, operate on numbers. They learn patterns and relationships by processing numerical inputs. Raw text, being a sequence of characters, needs to be converted into a structured numerical representation before it can be fed into models for tasks like:

*   **Classification:** Determining the category of a document (e.g., spam or not spam, positive or negative sentiment).
*   **Clustering:** Grouping similar documents together.
*   **Topic Modeling:** Discovering the underlying themes in a collection of documents.

## Core Idea: Vectors

The primary goal is to represent each text document as a vector, which is an ordered list of numbers. The length of this vector and the meaning of its elements will depend on the chosen representation technique.

## Key Techniques

Let's explore some of the foundational methods for numerical text representation.

### 1. Bag-of-Words (BoW)

The Bag-of-Words model simplifies text by representing it as an unordered set of its words, disregarding grammar and even word order but keeping track of frequency.

**How it works:**

1.  **Vocabulary Creation:** First, we build a vocabulary of all unique words present across all documents in our corpus.
2.  **Vectorization:** For each document, we create a vector where each dimension corresponds to a word in the vocabulary. The value in each dimension represents the frequency (count) of that word in the document.

**Example:**

Consider these two documents:

*   **Doc 1:** "the quick brown fox"
*   **Doc 2:** "the lazy fox jumps"

1.  **Vocabulary:** {"the", "quick", "brown", "fox", "lazy", "jumps"}
2.  **Vector Representation:**
    *   **Doc 1:** \[1, 1, 1, 1, 0, 0] (frequency of "the", "quick", "brown", "fox", "lazy", "jumps")
    *   **Doc 2:** \[1, 0, 0, 1, 1, 1]

**Strengths:** Simple, easy to understand.
**Weaknesses:** Ignores word order and context, can lead to very large and sparse vectors if the vocabulary is extensive.

### 2. TF-IDF (Term Frequency-Inverse Document Frequency)

TF-IDF is a numerical statistic that is intended to reflect how important a word is to a document in a collection or corpus. It is a weighting scheme that reduces the weight of words that appear very frequently across all documents, thus giving more importance to words that are more specific to a particular document.

**How it works:**

*   **Term Frequency (TF):** Measures how frequently a term (word) appears in a document. A common formula is:
    $$
    TF(t, d) = \frac{\text{Number of times term } t \text{ appears in document } d}{\text{Total number of terms in document } d}
    $$
*   **Inverse Document Frequency (IDF):** Measures how important a term is across the entire corpus. It's calculated as:
    $$
    IDF(t, D) = \log \left(\frac{\text{Total number of documents in corpus } D}{\text{Number of documents containing term } t}\right)
    $$
    (A common variation uses `1 + Number of documents containing term t` in the denominator and adds 1 to the log result to avoid division by zero if a term is not in any document).
*   **TF-IDF Score:** The TF-IDF score for a term in a document is the product of its TF and IDF:
    $$
    TF-IDF(t, d, D) = TF(t, d) \times IDF(t, D)
    $$

**Example (simplified for illustration):**

Corpus:
*   **Doc 1:** "the quick brown fox"
*   **Doc 2:** "the lazy fox jumps"
*   **Doc 3:** "the quick brown dog"

Vocabulary: {"the", "quick", "brown", "fox", "lazy", "jumps", "dog"}

Let's calculate TF-IDF for "fox" in Doc 1:

*   **TF("fox", Doc 1):** 1 (appears once) / 4 (total words in Doc 1) = 0.25
*   **IDF("fox", Corpus):** log (3 documents / 2 documents containing "fox") = log(1.5) ≈ 0.176

*   **TF-IDF("fox", Doc 1):** 0.25 * 0.176 ≈ 0.044

This score would be lower for common words like "the" which appear in all documents.

**Strengths:** Accounts for word importance, reduces the impact of common words.
**Weaknesses:** Still ignores word order and context.

### 3. One-Hot Encoding

While not typically used for entire documents in the same way as BoW or TF-IDF, One-Hot Encoding is a fundamental concept for representing categorical features, which can be applied to individual words or tokens.

**How it works:**

Each unique word is represented by a binary vector. The vector has a length equal to the vocabulary size. A '1' is placed at the index corresponding to the word, and '0's fill the rest of the vector.

**Example:**

Vocabulary: {"apple", "banana", "cherry"}

*   "apple": \[1, 0, 0]
*   "banana": \[0, 1, 0]
*   "cherry": \[0, 0, 1]

**Strengths:** Simple, can be used for discrete categories.
**Weaknesses:** Extremely sparse and high-dimensional when applied to large vocabularies, doesn't capture any relationships between words.

## Summary Table

| Technique        | Captures Word Order | Captures Word Importance | Captures Semantic Meaning | Sparsity      |
| :--------------- | :------------------ | :----------------------- | :------------------------ | :------------ |
| Bag-of-Words     | No                  | No                       | No                        | High (if large vocab) |
| TF-IDF           | No                  | Yes                      | No                        | High (if large vocab) |
| One-Hot Encoding | No                  | N/A                      | No                        | Very High     |

These foundational techniques provide the building blocks for transforming raw text into a format that machine learning models can process. Understanding their principles is the first step towards applying more advanced text feature engineering methods.

## Supports

- [[skills/data/data-science/text-feature-engineering/microskills/numerical-text-representation|Numerical Text Representation]]

---
type: "medium"
title: "TF-IDF: Understanding Term Frequency-Inverse Document Frequency"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/data/data-science/text-feature-engineering/microskills/tf-idf-definition|TF-IDF Definition]]"
---
# TF-IDF: Understanding Term Frequency-Inverse Document Frequency

As we explore different ways to represent text data for machine learning, understanding how words contribute to the meaning of a document is crucial. One powerful method for this is TF-IDF.

## What is TF-IDF?

TF-IDF stands for **Term Frequency-Inverse Document Frequency**. It's a numerical statistic used to evaluate how important a word is to a document in a collection or corpus. The importance of a word increases proportionally to the number of times it appears in the document, but is offset by the frequency of the word in the corpus.

Think of it this way: a word that appears many times in a single document but is rare across all documents is likely to be very descriptive of that specific document. Conversely, a word that appears frequently in many documents (like "the" or "a") is less informative.

TF-IDF assigns a score to each word in a document. This score reflects its relevance.

## The Two Components of TF-IDF

TF-IDF is composed of two parts:

### 1. Term Frequency (TF)

Term Frequency measures how often a term (word) appears in a document. A simple way to calculate TF is:

$$
\text{TF}(t, d) = \frac{\text{Number of times term } t \text{ appears in document } d}{\text{Total number of terms in document } d}
$$

**Example:**
In the document: "The cat sat on the mat. The cat is cute."
The term "cat" appears 2 times.
The total number of terms is 10.
So, TF("cat") = 2 / 10 = 0.2

There are variations of TF calculation, such as using the logarithm of the raw count to downweight very frequent terms within a single document, but the core idea remains the same: more occurrences in a document, higher TF.

### 2. Inverse Document Frequency (IDF)

Inverse Document Frequency measures how rare a word is across the entire collection of documents (the corpus). Words that appear in many documents have a low IDF, while words that appear in only a few documents have a high IDF. The formula for IDF is:

$$
\text{IDF}(t, D) = \log \left( \frac{\text{Total number of documents in the corpus, } |D|}{\text{Number of documents containing term } t, df(t)} \right)
$$

Here, $$ \log $$ is typically the natural logarithm, although other bases can be used. The $$ df(t) $$ is the document frequency of term $$ t $$.

**Why the logarithm?** It's used to smooth out the IDF values and prevent very large differences between terms that appear in a few documents versus those that appear in only one.

**Example:**
Imagine a corpus of 100 documents.
The word "cat" appears in 10 documents.
IDF("cat") = $$ \log \left( \frac{100}{10} \right) = \log(10) \approx 2.3 $$

The word "the" appears in 95 documents.
IDF("the") = $$ \log \left( \frac{100}{95} \right) \approx \log(1.05) \approx 0.05 $$

As you can see, "cat" has a much higher IDF than "the", reflecting its greater rarity across the corpus.

## Putting it Together: TF-IDF Score

The TF-IDF score for a term in a document is the product of its Term Frequency and its Inverse Document Frequency:

$$
\text{TF-IDF}(t, d, D) = \text{TF}(t, d) \times \text{IDF}(t, D)
$$

This score gives you a numerical representation of how important a word is to a specific document in the context of the entire corpus.

**Continuing our example:**

Let's say we have a single document from our corpus of 100 documents:
"The cat sat on the mat. The cat is cute."

We calculated:
*   TF("cat") = 0.2
*   IDF("cat") ≈ 2.3

Therefore, TF-IDF("cat") = $$ 0.2 \times 2.3 \approx 0.46 $$

Now, let's calculate TF-IDF for "the":
*   TF("the") = 2 / 10 = 0.2
*   IDF("the") ≈ 0.05

TF-IDF("the") = $$ 0.2 \times 0.05 = 0.01 $$

Comparing the TF-IDF scores, "cat" (0.46) is significantly more important to this document than "the" (0.01), which is exactly what we want.

## Key Takeaways

*   TF-IDF is a measure of word importance in a document relative to a corpus.
*   It combines how often a word appears in a document (TF) with how rare it is across all documents (IDF).
*   Words that are frequent in a document but rare in the corpus get high TF-IDF scores, indicating they are discriminative.
*   Common words that appear everywhere get low TF-IDF scores.

TF-IDF is a foundational technique in text feature engineering and is widely used in information retrieval, text summarization, and document classification.

## Supports

- [[skills/data/data-science/text-feature-engineering/microskills/tf-idf-definition|TF-IDF Definition]]

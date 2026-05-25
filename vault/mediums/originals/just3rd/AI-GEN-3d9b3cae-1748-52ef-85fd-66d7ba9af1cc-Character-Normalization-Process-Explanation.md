---
type: medium
title: "Character Normalization: Making Text Consistent"
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[character-normalization-process-explanation|character-normalization-process-explanation]]"
related-skills:
  - "[[skills/computing/data-ai/data-science/unstructured-data/text/text-cleaning-and-normalization/text-cleaning-and-normalization|text-cleaning-and-normalization]]"
learning-time-in-minutes: 5
---
# Character Normalization: Making Text Consistent

When we deal with text data, especially from various sources, it often comes in inconsistent formats. This inconsistency can make it difficult for computers to understand and process the text accurately. Character normalization is a crucial step in text cleaning that addresses this issue by standardizing characters.

## Why Normalize Characters?

Imagine you have the word "résumé" and someone else has "resume". To a computer, these might appear as two different words. Normalization helps us treat them as the same. This is vital for:

*   **Accurate Searching and Matching:** If you're searching for "resume" in a database, you want to find entries that might have "résumé" as well.
*   **Consistent Analysis:** When performing text analysis or machine learning tasks, having uniform representations of characters prevents errors and improves model performance.
*   **Reducing Redundancy:** It helps consolidate different representations of the same character into a single, standard form.

## The Character Normalization Process

Character normalization typically involves a few key steps, each with its own purpose.

### 1. Unicode Normalization Forms

Unicode is a standard for representing text characters. However, it can represent some characters in multiple ways. For instance, an accented character like "é" can be represented as a single precomposed character or as a base character followed by a combining accent mark.

There are four main Unicode normalization forms:

*   **NFC (Normalization Form Canonical Composition):** This form composes characters where possible. For example, "é" is represented as a single character.
*   **NFD (Normalization Form Canonical Decomposition):** This form decomposes characters into their base characters and combining marks. For example, "é" would be represented as "e" followed by the combining accent mark.
*   **NFKC (Normalization Form Compatibility Composition):** This form not only composes characters but also replaces "compatibility" characters with their simpler equivalents. For example, a ligature like "ﬁ" (fi) might be replaced by two separate characters "f" and "i".
*   **NFKD (Normalization Form Compatibility Decomposition):** This form decomposes characters and replaces compatibility characters.

**Which form to choose?** For most general text cleaning tasks, **NFC** is the most common and recommended choice. It aims for the shortest possible representation while maintaining canonical equivalence. NFD is useful when you need to manipulate base characters and accents separately. NFKC and NFKD are useful for handling compatibility issues, but can sometimes alter the visual appearance or meaning of characters, so they are used more cautiously.

#### Example:

Let's consider the character "é":

*   **Precomposed (NFC):** `\u00E9`
*   **Decomposed (NFD):** `\u0065` (e) + `\u0301` (combining acute accent)

When we apply NFC, both representations would be converted to `\u00E9`.

### 2. Case Folding

This is the process of converting all characters to lowercase. This is a very common step because, like different character representations, capitalization can lead to variations that we often want to ignore. For example, "Apple", "apple", and "APPLE" should all be treated the same if the specific capitalization isn't important for the analysis.

#### Example:

*   "The QUICK brown Fox" becomes "the quick brown fox".

### 3. Removing Diacritics (Accents)

Sometimes, the specific accent mark on a character is not important, and we might want to treat "é" the same as "e". Removing diacritics is the process of stripping these accent marks.

#### Example:

*   "crème brûlée" might become "creme brulee".

**Note:** This step is often performed *after* Unicode normalization (like NFD) to correctly identify and remove the combining accent marks.

### 4. Handling Special Characters and Punctuation

This step involves deciding what to do with characters that are not standard letters or numbers. Common actions include:

*   **Removing Punctuation:** Characters like ".", ",", "!", "?", etc., are often removed if they don't carry essential meaning for the task.
*   **Replacing Punctuation:** Sometimes, punctuation might be replaced with spaces, especially if it's part of a word boundary.
*   **Handling Emojis/Symbols:** Depending on the task, emojis or other symbols might be removed, replaced with a placeholder, or processed as distinct tokens.

#### Example:

*   "Hello, world! How are you?" might become "Hello world How are you" (if punctuation is removed).

### 5. Expanding Contractions

In English, contractions like "don't", "isn't", "I'm" are common. Expanding these can help in standardizing the text.

#### Example:

*   "don't" becomes "do not"
*   "I'm" becomes "I am"

## Practical Application

Here's a conceptual example of how these steps might be applied to a sentence:

**Original Text:** "Ça va? I'm hoping the résumé is in NFC! It's great."

**Step 1: Unicode Normalization (NFC)**
*   "Ça va? I'm hoping the résumé is in NFC! It's great." (Assuming input might contain decomposed characters, NFC standardizes them.)

**Step 2: Case Folding**
*   "ça va? i'm hoping the résumé is in nfc! it's great."

**Step 3: Removing Diacritics**
*   "ca va? i'm hoping the resume is in nfc! it's great."

**Step 4: Removing Punctuation**
*   "ca va im hoping the resume is in nfc its great"

**Step 5: Expanding Contractions**
*   "ca va i am hoping the resume is in nfc it is great"

The final normalized string is now much more consistent, making it easier for subsequent processing steps like tokenization or analysis. The specific order and inclusion of these steps will depend on your project's requirements.

## Supports

- [[character-normalization-process-explanation|Character Normalization Process Explanation]]

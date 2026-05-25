---
type: medium
title: Textual Data Cleaning Execution
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[textual-data-cleaning-execution|textual-data-cleaning-execution]]"
learning-time-in-minutes: 3
---
# Textual Data Cleaning Execution

This lesson focuses on the practical application of data cleaning techniques to textual datasets, a crucial step in preparing text for analysis. We'll cover common cleaning tasks and demonstrate how to implement them.

## The Importance of Clean Text

Raw text data is often messy. It can contain noise like HTML tags, inconsistent character encodings, irrelevant punctuation, and sensitive information. Without cleaning, this noise can skew analysis results, lead to misinterpretations, and hinder the effectiveness of machine learning models.

## Common Text Cleaning Tasks

Here are some fundamental cleaning operations we'll explore:

*   **Removing HTML Tags:** Web-scraped data often includes HTML markup.
*   **Character Normalization:** Handling variations in characters (e.g., accents, different casing).
*   **Removing Punctuation and Special Characters:** Eliminating characters that don't add semantic meaning for analysis.
*   **Masking Sensitive Data:** Protecting privacy by obscuring personal information.

## Practical Implementation with Python

Python, with its rich libraries, is an excellent tool for text cleaning. We'll primarily use the `re` module for regular expressions and basic string manipulation.

### 1. Removing HTML Tags

HTML tags are typically enclosed in angle brackets (`<` and `>`). Regular expressions are perfect for finding and removing patterns like these.

```python
import re

def remove_html_tags(text):
    """Removes HTML tags from a string."""
    clean = re.compile('<.*?>')
    return re.sub(clean, '', text)

# Example
html_text = "<p>This is a <b>sample</b> paragraph with <i>HTML</i> tags.</p>"
cleaned_text = remove_html_tags(html_text)
print(f"Original: {html_text}")
print(f"Cleaned: {cleaned_text}")
```

**How it works:**
The `re.compile('<.*?>')` creates a regular expression object that matches any character (`.`) zero or more times (`*`) between `<` and `>`, non-greedily (`?`). `re.sub()` then replaces all occurrences of this pattern with an empty string.

### 2. Character Normalization

Character normalization involves standardizing text to a consistent form. This can include:

*   **Lowercasing:** Converting all characters to lowercase.
*   **Removing Diacritics (Accents):** Standardizing accented characters (e.g., 'é' to 'e').
*   **Expanding Contractions:** Replacing "don't" with "do not" (though this can be more complex and context-dependent).

Let's focus on lowercasing and removing diacritics using the `unicodedata` module.

```python
import re
import unicodedata

def normalize_characters(text):
    """Normalizes characters: lowercases and removes diacritics."""
    # Lowercase the text
    text = text.lower()
    # Normalize to NFD (Normalization Form Canonical Decomposition)
    # This separates base characters from their combining diacritical marks
    text = unicodedata.normalize('NFD', text)
    # Remove diacritical marks
    text = re.sub(r'[\u0300-\u036f]', '', text)
    return text

# Example
accented_text = "Héllö Wörld! Ça va?"
normalized_text = normalize_characters(accented_text)
print(f"Original: {accented_text}")
print(f"Normalized: {normalized_text}")
```

**How it works:**
*   `.lower()` converts the string to lowercase.
*   `unicodedata.normalize('NFD', text)` decomposes characters. For example, 'é' becomes 'e' followed by a combining acute accent.
*   `re.sub(r'[\u0300-\u036f]', '', text)` uses a regex to find and remove Unicode characters in the range U+0300 to U+036f, which covers most combining diacritical marks.

### 3. Removing Punctuation and Special Characters

Often, punctuation can be removed to focus on word meaning. However, be mindful of context; some punctuation like hyphens might be part of a word or concept.

```python
import string

def remove_punctuation(text):
    """Removes punctuation from a string."""
    # Create a translation table to remove punctuation
    translator = str.maketrans('', '', string.punctuation)
    return text.translate(translator)

# Example
punctuated_text = "Hello, world! This is a test sentence; isn't it?"
cleaned_punctuation = remove_punctuation(punctuated_text)
print(f"Original: {punctuated_text}")
print(f"Cleaned: {cleaned_punctuation}")
```

**How it works:**
`string.punctuation` provides a string of all standard punctuation characters. `str.maketrans('', '', string.punctuation)` creates a mapping where each punctuation character is mapped to `None`, effectively deleting it during translation. `text.translate()` applies this mapping.

You can also use regex for more control:

```python
def remove_special_chars_regex(text):
    """Removes characters that are not alphanumeric or whitespace."""
    return re.sub(r'[^a-zA-Z0-9\s]', '', text)

# Example
special_char_text = "Text with #special! characters & numbers 123."
cleaned_special = remove_special_chars_regex(special_char_text)
print(f"Original: {special_char_text}")
print(f"Cleaned: {cleaned_special}")
```

**How it works:**
`[^a-zA-Z0-9\s]` is a negated character set. It matches any character that is *not* an uppercase letter (`A-Z`), a lowercase letter (`a-z`), a digit (`0-9`), or whitespace (`\s`).

### 4. Masking Sensitive Data

Masking sensitive data (like email addresses or phone numbers) is crucial for privacy. Regular expressions are essential here.

```python
def mask_emails(text):
    """Masks email addresses with a generic placeholder."""
    # Regex to find common email patterns
    email_pattern = r'[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}'
    return re.sub(email_pattern, '[REDACTED EMAIL]', text)

def mask_phone_numbers(text):
    """Masks common US phone number formats."""
    # A simplified regex for common US phone number formats (e.g., XXX-XXX-XXXX, (XXX) XXX-XXXX)
    phone_pattern = r'(\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4})'
    return re.sub(phone_pattern, '[REDACTED PHONE]', text)

# Example
sensitive_text = "Contact us at info@example.com or call 123-456-7890. Another contact is support@domain.org."
masked_text = mask_emails(sensitive_text)
masked_text = mask_phone_numbers(masked_text)
print(f"Original: {sensitive_text}")
print(f"Masked: {masked_text}")
```

**How it works:**
*   The `email_pattern` looks for typical email structures: characters before `@`, followed by `@`, characters after `@`, and a domain ending.
*   The `phone_pattern` is simplified to catch common North American formats. Real-world phone number masking can be more complex due to international variations.
*   `re.sub()` replaces the matched sensitive information with a placeholder like `[REDACTED EMAIL]` or `[REDACTED PHONE]`.

## Combining Techniques

In practice, you'll often chain these cleaning operations together. The order can sometimes matter.

```python
def clean_text_pipeline(text):
    """Applies a series of text cleaning operations."""
    text = remove_html_tags(text)
    text = normalize_characters(text)
    # Decide if you want to remove punctuation *before* or *after* normalization/masking
    # Removing after normalization is often reasonable.
    text = remove_punctuation(text)
    text = mask_emails(text)
    text = mask_phone_numbers(text)
    # Optional: Remove extra whitespace that might result from removals
    text = re.sub(r'\s+', ' ', text).strip()
    return text

# Comprehensive example
messy_data = """
<div>
    <p>Dear John,</p>
    <p>Your order #12345 from <b>example.com</b> has been processed.</p>
    <p>Please contact us at support@example.com or call us at (555) 123-4567 if you have questions.</p>
    <p>Thank you!</p>
</div>
"""

final_cleaned = clean_text_pipeline(messy_data)
print("\n--- Comprehensive Cleaning ---")
print(f"Original Messy Data:\n{messy_data}")
print(f"\nFinal Cleaned Text:\n{final_cleaned}")
```

## Key Takeaways

*   Text cleaning is an iterative process. What constitutes "clean" depends on your downstream task.
*   Regular expressions are a powerful tool for pattern matching and replacement in text.
*   Libraries like Python's `re` and `unicodedata` provide essential functionalities for various cleaning operations.
*   Always test your cleaning functions on representative data to ensure they behave as expected.

## Supports

- [[textual-data-cleaning-execution|Textual Data Cleaning Execution]]

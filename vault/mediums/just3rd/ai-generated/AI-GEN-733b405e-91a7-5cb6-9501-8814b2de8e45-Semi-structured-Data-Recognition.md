---
type: "medium"
title: "Recognizing Semi-Structured Data"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/data-structures/data-types/microskills/semi-structured-data-recognition|semi-structured-data-recognition]]"
---
# Recognizing Semi-Structured Data

We're learning to identify different types of data. Today, we'll focus on **semi-structured data**.

## What is Semi-Structured Data?

Think of data like information. Some information is very organized, like a spreadsheet with exact columns for names, addresses, and phone numbers. This is **structured data**. Other information is completely free-form, like a handwritten note or a voice recording. This is **unstructured data**.

**Semi-structured data** is a bit of a middle ground. It doesn't have a rigid, pre-defined format like a spreadsheet, but it *does* have some organizational properties that make it easier to process than completely unstructured data. These properties often include tags or markers that help to group and identify elements.

The key characteristic is that it's not stored in relational databases with fixed schemas but contains tags or other markers to separate semantic elements and enforce hierarchies of records and fields.

## Practical Example: A Personal Profile

Imagine you're creating a personal profile for a website. You might want to include:

*   Your name
*   Your interests
*   Your contact information

Here's how this could look as semi-structured data, using a common format called JSON (JavaScript Object Notation):

```json
{
  "name": "Alice Wonderland",
  "age": 30,
  "interests": [
    "reading",
    "hiking",
    "photography"
  ],
  "contact": {
    "email": "alice.w@example.com",
    "phone": "555-123-4567"
  }
}
```

Let's break down why this is semi-structured:

*   **Tags/Keys:** You can see key-value pairs like `"name": "Alice Wonderland"`, `"age": 30`. The keys (`"name"`, `"age"`, etc.) act as labels, giving structure to the data.
*   **Hierarchies:** The `"contact"` section is nested within the main profile. This shows a hierarchy.
*   **Arrays:** The `"interests"` are listed in an array `[...]`, indicating a collection of items without needing to define each item separately beforehand.
*   **Flexibility:** If Alice wanted to add a new interest, she could simply add it to the `interests` array without changing the overall structure of the document. This is less rigid than a strict database schema.

Other common examples of semi-structured data include XML files, log files, and data exchanged between different applications.

## Practice Task

Look at the following data snippets. Which one represents semi-structured data?

**Snippet A:**

```
John Doe
123 Main St
Anytown, CA 90210
(555) 555-1212
```

**Snippet B:**

```json
{
  "product_id": "XYZ789",
  "name": "Wireless Mouse",
  "price": 25.99,
  "features": [
    "ergonomic design",
    "long battery life"
  ],
  "manufacturer": {
    "name": "TechGadgets Inc.",
    "country": "USA"
  }
}
```

**Snippet C:**

> "The quick brown fox jumps over the lazy dog."

## Self-Check Questions

1.  What is the main difference between structured data and semi-structured data?
2.  Can you identify the "tags" or "keys" in the JSON example of Alice's profile?
3.  If you wanted to add a "website" field to Alice's profile, would it be easy to do so with the current format? Why or why not?
4.  Why is the plain text sentence in Snippet C considered unstructured data?

## Supports

- [[skills/programming/data-structures/data-types/microskills/semi-structured-data-recognition|Semi-structured Data Recognition]]

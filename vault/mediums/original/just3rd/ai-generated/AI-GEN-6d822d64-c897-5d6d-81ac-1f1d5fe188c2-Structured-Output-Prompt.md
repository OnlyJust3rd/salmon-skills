---
type: "medium"
title: "Structured Output Prompts"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/software-engineering/ai-assisted-development/prompt-engineering/microskills/structured-output-prompt|structured-output-prompt]]"
learning-time-in-minutes: 4
---
# Structured Output Prompts

When working with AI models for tasks like data extraction, summarization, or content generation, you often need the output to be in a predictable and usable format. This is where **Structured Output Prompts** come in. Instead of a free-flowing text response, you guide the AI to produce output that can be easily parsed, processed, or integrated into other systems.

## What is Structured Output?

Structured output refers to data that is organized in a predefined format. Common examples include:

*   **JSON (JavaScript Object Notation):** A lightweight data-interchange format that is easy for humans to read and write and easy for machines to parse and generate.
*   **YAML (YAML Ain't Markup Language):** Another human-readable data serialization standard, often used for configuration files.
*   **CSV (Comma-Separated Values):** A simple format where data is organized in rows and columns, with values separated by commas.
*   **XML (Extensible Markup Language):** A markup language that defines a set of rules for encoding documents in a format that is both human-readable and machine-readable.
*   **Lists and Bullet Points:** While less formal, consistently formatted lists can also be considered structured output, especially when the items within the list follow a pattern.

## Why Use Structured Output Prompts?

The primary benefit of structured output is **machine readability**. When an AI provides data in a format like JSON or CSV, you can:

*   **Automate Data Processing:** Feed the output directly into scripts or applications for further analysis or manipulation.
*   **Integrate with Databases and APIs:** Easily import data into databases or use it to populate fields in an API request.
*   **Ensure Consistency:** Guarantee that every response follows the same format, reducing errors in downstream processes.
*   **Reduce Manual Effort:** Eliminate the need for manual parsing and reformatting of AI-generated text.

## Applying Prompt Patterns for Structured Output

To get structured output, you need to clearly instruct the AI about the desired format. This involves specifying the structure and the data points you want to be included.

### Key Techniques

1.  **Explicitly State the Format:**
    Tell the AI directly what format you want. Use terms like "in JSON format," "as a CSV," or "as a bulleted list."

2.  **Provide a Schema or Template:**
    Show the AI exactly how you want the data organized. This is especially powerful for JSON or custom formats.

3.  **Define Data Fields:**
    Clearly list the specific pieces of information you want to extract or generate and how they should be labeled.

4.  **Use Examples (Few-Shot Prompting):**
    Provide one or more examples of input and the desired structured output. This helps the AI understand the pattern and nuance of your request.

### Worked Example: Extracting Information into JSON

Let's say you want to extract key information about a product from a description and have it presented in JSON format.

**Scenario:** You have a product description and want to extract the product name, price, and main feature.

**Prompt:**

```
Extract the product name, price, and main feature from the following text and provide the output in JSON format.

Product Description:
"Introducing the new StellarWidget X! This revolutionary device boasts a 5-inch HD display and a 24-hour battery life, all for just $199.99. Get yours today!"

JSON Structure:
{
  "product_name": "...",
  "price": "...",
  "main_feature": "..."
}
```

**Expected AI Output:**

```json
{
  "product_name": "StellarWidget X",
  "price": "$199.99",
  "main_feature": "5-inch HD display"
}
```

**Explanation:**

*   We explicitly stated "provide the output in JSON format."
*   We provided a clear `JSON Structure` template, showing the exact keys we wanted (`product_name`, `price`, `main_feature`) and placeholders for their values.
*   The AI understood the request and filled in the template with the extracted information.

### Worked Example: Creating a CSV from Data

Imagine you have a list of customer feedback and want to categorize it and extract sentiment.

**Scenario:** Categorize feedback and identify the sentiment (Positive, Negative, Neutral).

**Prompt:**

```
Analyze the following customer feedback. For each piece of feedback, categorize it and determine the sentiment (Positive, Negative, or Neutral). Output the results as a CSV with the columns: 'Feedback', 'Category', 'Sentiment'.

Feedback:
1. "The app is great, very easy to use!"
2. "I encountered a bug and the support was slow."
3. "The interface looks okay."
4. "Customer service resolved my issue quickly, thank you!"

CSV Header: Feedback,Category,Sentiment
```

**Expected AI Output:**

```csv
Feedback,Category,Sentiment
"The app is great, very easy to use!","Usability","Positive"
"I encountered a bug and the support was slow.","Bug Report/Support","Negative"
"The interface looks okay.","User Interface","Neutral"
"Customer service resolved my issue quickly, thank you!","Customer Support","Positive"
```

**Explanation:**

*   We requested output "as a CSV."
*   We specified the exact `CSV Header` (column names) to guide the AI.
*   The AI generated rows of data, each corresponding to a piece of feedback and populated with the requested category and sentiment.

## Common Pitfalls to Avoid

*   **Ambiguity:** If your instructions aren't clear, the AI might default to a free-text response or an unexpected structure.
*   **Overly Complex Structures:** For very complex JSON or nested data, you might need more elaborate prompts, including detailed schemas or multiple examples.
*   **Incorrect Formatting Requests:** Ensure you are using the correct terminology for the format you desire (e.g., "JSON" not "JASON").
*   **Ignoring Data Types:** When expecting specific data types (like numbers for prices), be aware that AI might initially return them as strings and you may need to specify data types in your prompt or process them post-generation.

By mastering structured output prompts, you can significantly enhance the utility of AI models, turning raw text generation into a powerful tool for data extraction and automation.

## Supports

- [[skills/computing/software-engineering/ai-assisted-development/prompt-engineering/microskills/structured-output-prompt|Structured Output Prompt]]

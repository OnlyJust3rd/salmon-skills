---
type: "medium"
title: "Few-Shot Examples for Task Instructions"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/software-engineering/ai-assisted-development/prompt-engineering/microskills/few-shot-example|few-shot-example]]"
learning-time-in-minutes: 4
---
# Few-Shot Examples for Task Instructions

In the realm of prompt engineering, a powerful technique to guide AI models is the use of "few-shot examples." This micro-skill focuses on how to provide a small number of examples within your prompt to demonstrate the desired input-output relationship for a specific task. This helps the AI understand the pattern you're looking for, leading to more accurate and relevant responses.

## What are Few-Shot Examples?

Few-shot examples are pairs of input and the corresponding desired output that you include directly in your prompt. Instead of just telling the AI what to do, you *show* it by providing a few concrete instances. Think of it like teaching a student a new concept by giving them a few solved problems before asking them to tackle new ones.

The "few" in few-shot typically means anywhere from one to a handful of examples. Too many examples can make your prompt unwieldy and may not significantly improve performance, while zero examples (zero-shot) relies solely on the model's pre-existing knowledge.

## Why Use Few-Shot Examples?

Few-shot examples are particularly useful when:

*   **The task is nuanced or specific:** The AI might not inherently understand the precise way you want data formatted or the specific criteria for a classification.
*   **You need a particular output format:** You can show the AI exactly how you want the output structured (e.g., JSON, bullet points, a specific sentence structure).
*   **The task involves creative or subjective interpretation:** Examples can guide the AI's interpretation and generation style.
*   **You're dealing with domain-specific language or concepts:** Providing examples can clarify jargon or context.

## How to Construct Few-Shot Examples

The core principle is to create clear, consistent pairs of input and output.

### Structure of a Few-Shot Prompt

A common structure looks like this:

```
[Instruction]

Example 1:
Input: [Your Input Example 1]
Output: [Your Desired Output Example 1]

Example 2:
Input: [Your Input Example 2]
Output: [Your Desired Output Example 2]

... (more examples if needed)

New Input: [The actual input you want the AI to process]
Output:
```

### Key Considerations for Examples:

1.  **Clarity and Consistency:** Ensure your examples accurately reflect the task. The input should clearly lead to the output.
2.  **Relevance:** Use examples that are representative of the type of inputs the AI will receive.
3.  **Format Alignment:** The input format in your examples should match the format of your new input. Similarly, the output format in your examples should match the format you expect for the new input.
4.  **Simplicity:** Start with a few simple, clear examples. If the AI struggles, you can add more or refine existing ones.
5.  **Labeling:** Clearly label "Input" and "Output" (or similar terms) for each example to help the AI distinguish them.

## Worked Example: Sentiment Analysis with Specific Labels

Let's say you want to perform sentiment analysis, but you need the AI to categorize sentiment into "Positive," "Neutral," or "Negative."

**Instruction:** Analyze the sentiment of the following text and label it as "Positive," "Neutral," or "Negative."

**Example 1:**
Input: "I absolutely loved the new movie! The acting was superb."
Output: Positive

**Example 2:**
Input: "The weather today is neither good nor bad, just average."
Output: Neutral

**Example 3:**
Input: "I'm really disappointed with the service I received."
Output: Negative

**New Input:** "The product works as expected, no major complaints but no outstanding features either."
Output:

By providing these three examples, the AI learns the specific labels you're using and how they map to different types of text. When it encounters the "New Input," it will try to apply the learned pattern.

### Expected Output for the New Input:

Neutral

## Common Pitfalls to Avoid

*   **Ambiguous Examples:** If your examples are unclear, the AI will also be unclear in its output.
*   **Inconsistent Formatting:** Mixing up input or output formats across examples can confuse the model.
*   **Conflicting Examples:** Providing examples that contradict each other will lead to unpredictable results.
*   **Too Many Examples:** While helpful, an excessive number of examples can increase prompt cost and latency without proportional benefit.

## Practice Task

Imagine you are building a system that categorizes customer feedback into "Bug Report," "Feature Request," or "General Inquiry."

**Your Task:**
Construct a prompt using few-shot examples for this categorization task. Include at least two examples demonstrating the expected input-output for each category.

**Prompt Template:**

```
Categorize the following customer feedback into "Bug Report," "Feature Request," or "General Inquiry."

Example 1:
Input: "The app crashes every time I try to upload a photo."
Output: Bug Report

Example 2:
Input: "It would be great if the app had a dark mode option."
Output: Feature Request

Example 3:
Input: "How do I reset my password?"
Output: General Inquiry

Example 4:
Input: "I encountered an error message when saving my document."
Output:

Example 5:
Input: "Could you please add support for exporting to PDF?"
Output:

Example 6:
Input: "What are your business hours?"
Output:
```

## Supports

- [[skills/computing/software-engineering/ai-assisted-development/prompt-engineering/microskills/few-shot-example|Few-Shot Example]]

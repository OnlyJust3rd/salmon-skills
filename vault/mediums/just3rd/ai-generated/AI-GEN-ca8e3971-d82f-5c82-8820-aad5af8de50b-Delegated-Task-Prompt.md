---
type: "medium"
title: "Crafting Effective Delegated Task Prompts for OpenAI Codex"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/ai-assistant-tools/coding-assistants/openai-codex/microskills/delegated-task-prompt|Delegated Task Prompt]]"
---
# Crafting Effective Delegated Task Prompts for OpenAI Codex

When working with AI coding assistants like OpenAI Codex, the quality of your input directly impacts the quality of the output. This lesson focuses on writing clear and effective "delegated task prompts" – essentially, the instructions you give the AI to perform a specific coding task. Applying this skill means you can accurately delegate coding work, leading to more efficient and accurate AI-generated code.

## The Core Idea: Clarity and Specificity

Think of a delegated task prompt as a request to a junior developer. You wouldn't just say "write some code." You'd provide context, specify requirements, and outline expectations. The same applies to interacting with Codex.

The goal is to remove ambiguity. The more precise your prompt, the less room for misinterpretation by the AI, and the higher the chance of receiving code that meets your needs.

## Key Components of a Delegated Task Prompt

A well-structured prompt for a coding agent typically includes:

*   **The Goal/Objective:** What is the ultimate purpose of the code you want generated?
*   **Specific Requirements:** What functionalities must the code have? What inputs does it take, and what outputs should it produce?
*   **Constraints/Limitations:** Are there any restrictions on libraries, performance, style, or target environment?
*   **Context/Background:** Why is this code needed? Where will it fit into a larger system?
*   **Format/Output Expectations:** How should the code be presented? (e.g., a function, a class, a script snippet).
*   **Examples (Optional but Recommended):** Illustrative examples of input and expected output can be extremely helpful.

## Practical Application: Building a Simple Python Function

Let's imagine you need a Python function to calculate the factorial of a non-negative integer. Here's how you might construct a delegated task prompt.

**Scenario:** You're developing a mathematical utility library and need a function for factorial calculations.

**Initial (Less Effective) Prompt:**

> "Write a Python function for factorial."

This is too vague. Codex might produce something, but it might not handle edge cases or meet specific formatting needs.

**Improved Delegated Task Prompt:**

```
## Task: Implement Python Factorial Function

**Objective:**
Create a Python function named `calculate_factorial` that computes the factorial of a non-negative integer.

**Specific Requirements:**
1.  The function should accept a single argument: an integer `n`.
2.  The function must return the factorial of `n`.
3.  Factorial of 0 (0!) is defined as 1.
4.  The function should handle non-negative integers only.

**Constraints:**
*   Do not use any external libraries. Implement the logic from scratch.
*   The function should be efficient for reasonable input sizes (no need for extreme optimization, but avoid unnecessarily slow recursion if iterative is straightforward).

**Context:**
This function will be part of a larger `math_utils` module for a web application.

**Output Format:**
Provide the complete Python function definition. Include a docstring explaining its purpose, arguments, and return value.

**Example:**
*   Input: `n = 5`
*   Expected Output: `120` (since 5! = 5 * 4 * 3 * 2 * 1)
*   Input: `n = 0`
*   Expected Output: `1`
```

## Analyzing the Improved Prompt

Let's break down why this prompt is more effective:

*   **Clear Title:** `## Task: Implement Python Factorial Function` immediately tells the AI what the request is about.
*   **Explicit Objective:** "Create a Python function named `calculate_factorial`..." leaves no doubt about the desired outcome and naming.
*   **Detailed Requirements:** Listing out the behavior for `n` and the base case (0!) ensures correctness.
*   **Defined Constraints:** Stating "Do not use any external libraries" prevents unexpected dependencies.
*   **Usage Context:** "part of a larger `math_utils` module" can subtly influence the style or robustness the AI aims for.
*   **Format Specification:** "Provide the complete Python function definition. Include a docstring..." ensures the output is usable and well-documented.
*   **Illustrative Examples:** The input/output examples are crucial for verifying correctness, especially for edge cases like 0.

## Common Pitfalls and How to Avoid Them

*   **Ambiguity:** Using vague terms like "make it better" or "add some features."
    *   **Solution:** Be specific about *how* to make it better or *what* features to add.
*   **Missing Edge Cases:** Not specifying behavior for invalid inputs (e.g., negative numbers, non-integers) or boundary conditions (e.g., 0, large numbers).
    *   **Solution:** Explicitly state how to handle such cases (e.g., raise an error, return a default value).
*   **Overly Complex Prompts:** Trying to cram too many unrelated tasks into a single prompt.
    *   **Solution:** Break down complex problems into smaller, more manageable delegated tasks.
*   **Assuming Knowledge:** Expecting the AI to know about specific internal project conventions or unique coding styles without explanation.
    *   **Solution:** Briefly explain any project-specific context that might influence the code.

## Iterative Refinement

It's important to remember that interacting with AI coding assistants is often an iterative process. You might write a prompt, get code, and then realize you need to refine the prompt based on the AI's output.

For instance, if the AI's factorial function threw an error for negative numbers, and you wanted it to return `None` instead, you would refine your prompt to include:

"If a negative integer is provided, the function should return `None` instead of raising an error."

By mastering the art of crafting clear, specific, and context-rich delegated task prompts, you can effectively leverage AI coding assistants like OpenAI Codex to accelerate your development workflow and improve the quality of your code.

## Supports

- [[skills/ai-assistant-tools/coding-assistants/openai-codex/microskills/delegated-task-prompt|Delegated Task Prompt]]

---
type: "medium"
title: "Understanding Manual Mode in Cursor AI"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/ai-assistant-tools/coding-assistants/cursor/microskills/manual-mode|Manual Mode]]"
---
# Understanding Manual Mode in Cursor AI

This lesson introduces Manual Mode within the Cursor AI agent. Manual Mode offers a focused approach to AI-assisted editing, allowing you to guide the AI's actions precisely.

## What is Manual Mode?

Manual Mode is a feature in Cursor AI that lets you define the exact scope and type of assistance the AI should provide. Instead of letting the AI broadly suggest changes, you select specific sections of your code or text and choose the type of edit you want. This gives you granular control over the AI's interventions. It's about targeted, AI-assisted edits where *you* are in charge of the "what" and "where."

Think of it like having a highly skilled editor who waits for your specific instructions before making any changes. You point to a sentence, a paragraph, or a block of code, and then tell the AI, "Refactor this," or "Explain this," or "Find potential bugs here."

## When to Use Manual Mode

Manual Mode is ideal when you:

*   **Need precise control:** You know exactly what you want the AI to do and where.
*   **Are working on critical sections:** You want to ensure AI suggestions don't inadvertently break important functionality.
*   **Want to learn:** By seeing how the AI edits specific parts, you can understand its reasoning.
*   **Are refactoring or improving existing code:** You can target specific areas for optimization or clarity.

## Practical Example: Refactoring a Function

Imagine you have a Python function that calculates a discount, but it's a bit complex and hard to read.

```python
def calculate_discount(price, quantity, coupon_code):
    discount_rate = 0
    if coupon_code == "SUMMER10":
        discount_rate = 0.10
    elif coupon_code == "WINTER20":
        discount_rate = 0.20
    else:
        if quantity > 10:
            discount_rate = 0.05
        elif quantity > 5:
            discount_rate = 0.03
    
    total_discount = price * quantity * discount_rate
    return total_discount
```

You want to simplify this function to make it more readable.

**Using Manual Mode:**

1.  **Select the code:** Highlight the entire `calculate_discount` function.
2.  **Invoke Manual Mode:** Use Cursor's command palette (often `Cmd+K` or `Ctrl+K`) and search for an option like "Refactor Selected" or "Improve Code."
3.  **Provide a prompt (optional but recommended):** You might add a prompt like, "Simplify this function for better readability, perhaps by using a dictionary for coupon codes."
4.  **Review the AI's suggestion:** Cursor will present a modified version of the function.

**Example of AI's Refactored Output (in Manual Mode):**

```python
def calculate_discount(price, quantity, coupon_code):
    coupon_discounts = {
        "SUMMER10": 0.10,
        "WINTER20": 0.20
    }
    
    discount_rate = coupon_discounts.get(coupon_code, 0) # Get coupon discount or 0

    if discount_rate == 0: # If no coupon matched, check quantity
        if quantity > 10:
            discount_rate = 0.05
        elif quantity > 5:
            discount_rate = 0.03
    
    total_discount = price * quantity * discount_rate
    return total_discount
```

In this scenario, you precisely instructed the AI to work on a specific piece of code and asked for a particular type of improvement (simplification/readability).

## Practice Task

Find a piece of code in your current project that you feel could be improved for clarity or efficiency. This could be a function, a class, or even a short script.

1.  **Identify the target:** Decide which section of code you want to work with.
2.  **Select the code:** Highlight only that specific section in Cursor.
3.  **Initiate Manual Mode:** Use the Cursor command palette to find the "Refactor," "Improve," or "Optimize" action.
4.  **Observe the output:** See what changes the AI suggests.
5.  **Accept or reject:** Decide if the suggested changes are beneficial and accept them, or reject them if they aren't suitable.

## Self-Check Questions

*   What is the primary difference between a broad AI suggestion and an edit made in Manual Mode?
*   When would you choose to use Manual Mode over a more general AI command?
*   Can you give an example of a situation where Manual Mode would be safer to use than a fully automated AI edit?

## Supports

- [[skills/ai-assistant-tools/coding-assistants/cursor/microskills/manual-mode|Manual Mode]]

---
type: "medium"
title: "Delegating Multi-Step Tasks with GitHub Copilot Agent Mode"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/ai-assistant-tools/coding-assistants/github-copilot/microskills/agent-mode-task|Agent Mode Task]]"
---
# Delegating Multi-Step Tasks with GitHub Copilot Agent Mode

This lesson focuses on how to effectively delegate multi-step coding tasks to GitHub Copilot's agent mode. This is a practical application of your understanding of GitHub Copilot and its role in the pull request workflow.

## What is Copilot Agent Mode?

Copilot Agent Mode allows you to describe a complex coding task in natural language, and Copilot will attempt to break it down, plan the necessary steps, and then execute them by writing code. Think of it as having a pair programmer that can not only suggest code but also figure out *what* code needs to be written and in what order for a given objective.

This mode is particularly useful when you have a clear goal but the path to achieving it involves multiple changes across different files or requires a sequence of logical operations.

## When to Use Copilot Agent Mode

You should consider using Copilot Agent mode when:

*   **The task involves multiple files:** You need to modify several files or create new ones to complete a feature or fix a bug.
*   **The task has a clear sequence of operations:** The steps are logical and build upon each other.
*   **You want to accelerate initial development or refactoring:** Get a foundational structure in place quickly.
*   **You're exploring a new library or framework:** Let Copilot help you set up the initial integration and common patterns.

## How to Use Copilot Agent Mode: A Step-by-Step Guide

The primary way to interact with Copilot Agent Mode is through your IDE's chat interface.

### Step 1: Initiate the Conversation

Open the Copilot Chat panel in your IDE (this is usually a dedicated tab or window).

### Step 2: Clearly Define Your Task

Begin by describing your multi-step task as precisely as possible. Use clear, action-oriented language.

**Example Prompt:**

```
I need to add a new feature to my Python web application.
1. Create a new Flask route at '/api/users' that accepts POST requests.
2. This route should expect a JSON payload with 'username' and 'email' fields.
3. Validate that both 'username' and 'email' are present and not empty.
4. If validation fails, return a 400 Bad Request error with a descriptive message.
5. If validation succeeds, store the user data in a simple list (for demonstration purposes, no database yet).
6. Return a 201 Created response with the newly added user's details.
```

### Step 3: Review Copilot's Plan

After you submit your prompt, Copilot will analyze your request and present a plan. This plan will outline the files it intends to modify or create, and the sequence of actions it will take.

**Example Copilot Plan (Conceptual):**

```
Okay, I understand. Here's my plan to implement the new user API endpoint:

1.  **Create/Modify `app.py`:**
    *   Add the `/api/users` route.
    *   Implement the POST request handler.
    *   Add validation logic for username and email.
    *   Add placeholder user storage.
    *   Implement response handling for success and errors.
2.  **No new files required.**

Does this plan look good?
```

### Step 4: Approve or Refine the Plan

Carefully review the proposed plan. Does it align with your understanding? Are there any steps missing or incorrect?

*   **Approve:** If the plan is accurate, you can typically confirm it with a simple "Yes" or by clicking an "Approve" button within the chat interface.
*   **Refine:** If the plan needs adjustments, provide specific feedback.

**Example Refinement Prompt:**

```
The plan looks good, but instead of a simple list, can you use a dictionary where the key is the username for easier lookup later? Also, please add a basic check to ensure the email format looks somewhat like an email address (e.g., contains an '@').
```

### Step 5: Execute the Task

Once the plan is approved, Copilot will begin generating the code changes. It will usually do this by opening files, inserting code, and often creating new files as needed.

### Step 6: Review and Test the Code

This is the **most critical step**. Copilot is a tool; it's not infallible.

*   **Read the generated code:** Understand what Copilot has written.
*   **Test thoroughly:** Run your application, and specifically test the new feature you asked Copilot to implement. Cover all the validation scenarios you outlined (valid data, missing fields, invalid email, etc.).
*   **Manually adjust if necessary:** You may find edge cases or stylistic preferences that require manual tweaking.

## Example Scenario Walkthrough

Let's say you're working on a small Node.js project and want to add a new utility function to format dates.

**Your Task Description in Copilot Chat:**

```
I need to create a new utility function in Node.js to format dates.
1. Create a new file named `dateUtils.js`.
2. Inside `dateUtils.js`, export a function called `formatDate`.
3. This function should accept a `Date` object as an argument.
4. It should return a string in the format "YYYY-MM-DD HH:MM:SS".
5. Add a default value for the date argument, which should be the current date if none is provided.
```

**Copilot's Potential Plan:**

```
Plan:
1. Create `dateUtils.js`.
2. Define and export `formatDate(date)`.
3. Inside `formatDate`:
    - Handle default date.
    - Extract year, month, day, hour, minute, second.
    - Format them with leading zeros if necessary.
    - Return the formatted string.
```

**After approval, Copilot would generate:**

```javascript
// dateUtils.js

/**
 * Formats a Date object into a "YYYY-MM-DD HH:MM:SS" string.
 * @param {Date} date - The date to format. Defaults to the current date.
 * @returns {string} The formatted date string.
 */
const formatDate = (date = new Date()) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

module.exports = {
  formatDate,
};
```

You would then proceed to import and use this `formatDate` function in your main application files and test it with different `Date` objects, including cases where no argument is passed.

## Key Takeaways

*   **Clarity is King:** The more specific your prompt, the better Copilot can understand and execute your request.
*   **Plan Before Code:** Always review Copilot's plan. It's your chance to correct misunderstandings before code is generated.
*   **Verification is Essential:** Never blindly trust AI-generated code. Thoroughly test all changes.
*   **Iterate and Refine:** If the initial attempt isn't perfect, provide feedback and guide Copilot to the desired outcome.

By mastering the use of Copilot Agent Mode for multi-step tasks, you can significantly boost your productivity and streamline your development workflow.

## Supports

- [[skills/ai-assistant-tools/coding-assistants/github-copilot/microskills/agent-mode-task|Agent Mode Task]]

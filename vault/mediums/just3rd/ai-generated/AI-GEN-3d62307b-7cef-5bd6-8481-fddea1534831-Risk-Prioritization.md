---
type: "medium"
title: "Prioritizing Code Review Findings: Separating Severity"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/ai-assistant-tools/coding-assistants/ai-code-review/microskills/risk-prioritization|risk-prioritization]]"
---
# Prioritizing Code Review Findings: Separating Severity

## What is Risk Prioritization in Code Review?

When AI-assisted code review tools highlight potential issues, not all findings are created equal. Risk prioritization is the process of distinguishing between critical bugs that must be fixed immediately and minor suggestions that are helpful but not urgent. This skill is crucial for efficient AI code review, ensuring that developers focus their valuable time on the most impactful improvements. It's about understanding the potential consequences of each finding.

## Why is This Important for AI Code Review?

AI tools can be incredibly thorough, identifying a wide range of potential problems. Without a system for prioritization, developers can become overwhelmed by a flood of suggestions, leading to:

*   **"Alert Fatigue":** Ignoring valid warnings because there are too many.
*   **Wasted Effort:** Spending time on minor stylistic tweaks when critical security vulnerabilities are present.
*   **Delayed Releases:** Getting bogged down in low-impact fixes.

By effectively prioritizing, you can leverage AI suggestions to improve code quality and security more strategically.

## Practical Scenario: Reviewing an E-commerce Checkout API

Imagine your AI code review tool flags several issues in a new API endpoint designed for processing customer orders. Let's look at some examples and how you might prioritize them.

### AI Findings and Prioritization Categories

We can categorize findings into three main levels of severity:

| Severity Level   | Description                                                                                                                                                                                                                                                                                                                                                             | Impact Example                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Action                                                                                                                                                                                                                                                                                                                                                                                                     |
| :--------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Critical (P0)** | Issues that pose a significant risk of data loss, security breaches, financial loss, system instability, or incorrect critical functionality. These often represent direct bugs or vulnerabilities.                                                                                                                                                                     | **SQL Injection Vulnerability:** The code directly concatenates user input into a database query without sanitization. This could allow an attacker to bypass authentication or steal sensitive customer data. <br> **Integer Overflow leading to incorrect pricing:** A calculation for order total uses a data type that can overflow for large orders, leading to incorrect charges for customers. <br> **Sensitive Data Exposure:** Credit card numbers are logged in plain text.                                                               | **Immediate Fix Required:** Stop the deployment process. The code *must* be corrected before it can be merged or deployed. This is a show-stopper.                                                                                                                                                                                                                                                        |
| **High (P1)**    | Issues that could lead to moderate functional problems, performance degradation, maintainability issues, or potential security risks that are less direct than critical issues. These might not cause immediate failure but are important for robust and secure operation.                                                                                              | **Missing Input Validation for non-critical fields:** User's name or address fields are not validated for excessive length or disallowed characters. While not a direct security risk, it can lead to display issues or unexpected behavior. <br> **Potential Race Condition:** Two concurrent operations on the same shared resource *might* conflict under specific, albeit rare, load conditions. <br> **Inconsistent Error Handling:** Some error paths return detailed technical messages, while others return generic messages, making debugging harder. | **Fix Before Deployment:** These should be addressed before the code is released to production. While not a direct show-stopper, they represent significant risks to the application's stability, performance, or maintainability. Aim to resolve these as part of the current development cycle.                                                                                                          |
| **Medium (P2)**  | Issues related to style, readability, minor optimizations, or best practice deviations that don't directly impact functionality or security but can improve code quality and maintainability over time. These are often suggestions for cleaner code.                                                                                                                      | **Unused Variable/Import:** A variable or library is imported but never used. <br> **Minor Style Inconsistency:** Naming convention slightly deviates from the project's established style guide. <br> **Redundant Code:** A small block of code could be simplified.                                                                                                                                                                                                                                                                                        | **Consider for Next Iteration/Refactoring:** These can be addressed when time permits. They are good candidates for future refactoring or can be fixed if quick and easy. Don't let them block releases or significant development efforts.                                                                                                                                                           |
| **Low (P3)**     | Suggestions for improvement that are very minor, subjective, or related to advanced optimizations that are unlikely to have a noticeable impact. These are often "nice-to-haves."                                                                                                                                                                                           | **"Commented out code" that is very old:** Code that has been commented out for a long time and is unlikely to be needed. <br> **Minor efficiency suggestion:** A very small optimization that has negligible performance impact.                                                                                                                                                                                                                                                                                                               | **Optional:** Address if convenient or as part of a broader cleanup effort. These are typically not worth significant development time.                                                                                                                                                                                                                                                         |

### Applying Prioritization to the Checkout API

Let's say the AI tool provided these findings:

1.  **Finding:** `users_input` directly used in `SELECT * FROM orders WHERE order_id = '` + `users_input` + `'`.
    *   **Analysis:** This is a classic SQL injection vulnerability. An attacker could manipulate `users_input` to execute arbitrary SQL commands. This directly leads to data breaches and system compromise.
    *   **Priority:** **Critical (P0)**.

2.  **Finding:** `item_price * quantity` calculation might exceed the maximum value for a `short` integer type, leading to incorrect totals for very large orders.
    *   **Analysis:** While rare, a customer *could* potentially order a huge quantity of an item, or an item could have an extremely high price. This leads to incorrect billing, financial discrepancies, and customer dissatisfaction.
    *   **Priority:** **High (P1)**.

3.  **Finding:** The variable `discount_percentage` is declared but not used in the final pricing calculation logic.
    *   **Analysis:** This is an unused variable. It doesn't cause any functional errors or security risks, but it adds a bit of clutter and might confuse future maintainers.
    *   **Priority:** **Medium (P2)**.

4.  **Finding:** A minor inconsistency in variable naming: `customer_email_address` vs. `cust_email`.
    *   **Analysis:** This is a stylistic issue. It affects readability slightly but has no impact on functionality or security.
    *   **Priority:** **Medium (P2)** or potentially **Low (P3)**, depending on project standards.

5.  **Finding:** The API endpoint doesn't validate the format of the `payment_token` string beyond its length.
    *   **Analysis:** While the payment token itself is usually opaque, an improperly formatted token might indicate an upstream issue or could be part of a more complex attack vector if not properly handled. Without stricter validation, an unexpected value *could* theoretically be passed through, though its impact is low unless it's part of a larger exploit.
    *   **Priority:** **High (P1)** (if the token format has security implications, e.g., a specific structure or length is enforced by downstream services) or **Medium (P2)** (if it's purely for data integrity and display). For a payment system, leaning towards High is safer.

## Practice Task

Review the following AI-generated findings for a user authentication module. Assign a priority level (Critical, High, Medium, Low) to each finding and briefly justify your decision.

1.  **Finding:** The password reset token is generated using a predictable algorithm based on the user's creation date.
2.  **Finding:** The `verify_password` function takes over 100ms to execute, potentially impacting login performance.
3.  **Finding:** A `console.log()` statement is present in the `authenticate_user` function, outputting the username.
4.  **Finding:** The code imports the `moment.js` library for date formatting but doesn't use it anywhere.
5.  **Finding:** The authentication module lacks rate limiting, allowing unlimited login attempts from a single IP address.

## Self-Check Questions

1.  What are the key risks associated with ignoring AI findings that you have categorized as "Critical"?
2.  When would you decide to fix a "Medium" priority finding immediately, even if it's not a critical bug?
3.  How does understanding the potential business impact (e.g., financial loss, reputational damage) help in prioritizing AI code review findings?
4.  If an AI tool flags a security vulnerability, what is the general priority level you would assign, and why?
5.  Describe a scenario where a performance-related finding might be classified as "Critical" rather than "High."

## Supports

- [[skills/ai-assistant-tools/coding-assistants/ai-code-review/microskills/risk-prioritization|Risk Prioritization]]

---
type: "medium"
title: "Preparing Realistic UAT Scenarios"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/software-engineering/testing-quality/program-testing/microskills/uat-scenario-preparation|uat-scenario-preparation]]"
related-skills:
  - "[[skills/computing/software-engineering/testing-quality/program-testing/program-testing|program-testing]]"
learning-time-in-minutes: 6
---
# Preparing Realistic UAT Scenarios

User Acceptance Testing (UAT) is the final stage of testing before a program goes live. It's all about ensuring the software works for the people who will actually use it. A critical part of effective UAT is preparing realistic scenarios. This micro-skill focuses on *how* to create these scenarios, so your testing is thorough and valuable.

## Why Realistic Scenarios Matter

Imagine a chef testing a new recipe. They wouldn't just taste a tiny spoonful in a sterile lab. They'd try cooking it for a family meal, mimicking a real-world dining experience. Similarly, UAT scenarios should mimic how users will interact with the program in their day-to-day work.

**Well-prepared scenarios help you:**

*   **Validate User Needs:** Do the program's features actually solve the users' problems?
*   **Identify Usability Issues:** Is the program intuitive and easy to use for the target audience?
*   **Confirm Acceptance Criteria:** Does the program meet the specific business requirements agreed upon?
*   **Build User Confidence:** Users feel more comfortable adopting a system they've helped test and validate.

## What Makes a Scenario Realistic?

Realistic UAT scenarios are built around how users will *actually* use the software, considering their typical workflows, data inputs, and expected outputs. They go beyond simple "happy path" testing (where everything works perfectly) to include variations and potential issues.

### Key Components of a UAT Scenario

Each UAT scenario should typically include:

1.  **Scenario Title/Name:** A clear, concise name describing the situation (e.g., "New Customer Onboarding with Discount," "Inventory Reorder for Low Stock Item").
2.  **Objective/Goal:** What is the user trying to achieve with this scenario? (e.g., "Successfully create a new customer account and apply a promotional discount," "Initiate a purchase order when stock levels fall below the reorder point").
3.  **User Role:** Who is performing this action? (e.g., "Sales Representative," "Warehouse Manager," "Customer Service Agent").
4.  **Pre-conditions:** What must be true *before* the user starts the scenario? (e.g., "User is logged into the system," "A promotional discount code 'SUMMER20' is active and available," "Product XYZ has 5 units in stock, and the reorder point is 10").
5.  **Steps to Execute:** A clear, sequential list of actions the user will take. These should be detailed enough for someone unfamiliar with the exact clicks to follow.
6.  **Input Data:** Specific data the user will enter into the system during the steps. This is crucial for realism.
7.  **Expected Outcome(s):** What should happen *after* the user completes the steps? This includes system responses, data changes, and any generated outputs.
8.  **Acceptance Criteria (Implicit or Explicit):** How do we know if the scenario was successful? This ties back to the program's requirements.

## Crafting Your Scenarios: A Step-by-Step Approach

Let's walk through how to prepare UAT scenarios.

### Step 1: Understand User Workflows and Requirements

This is the foundation. You need to know how users currently perform tasks and what the new program is supposed to do differently or better.

*   **Talk to Users:** Conduct interviews or workshops with end-users. Ask them to walk you through their daily tasks.
*   **Review Documentation:** Examine user stories, functional specifications, and any existing process documentation.
*   **Analyze Acceptance Criteria:** Ensure you have a clear list of what the program must achieve to be considered acceptable.

### Step 2: Identify Key User Journeys and Business Processes

Break down the program's functionality into logical user journeys or business processes. Think about the end-to-end flow of activities.

*   **Examples:**
    *   Customer Order Placement (for an e-commerce site)
    *   Employee Timesheet Submission (for a HR system)
    *   Generating a Monthly Sales Report (for a CRM)
    *   Adding a New Product to Inventory (for an ERP)

### Step 3: Brainstorm Scenario Variations

For each key user journey, think about different ways users might interact with the system. Don't just stick to the ideal path.

*   **Happy Path:** The most common, straightforward way to complete a task.
*   **Alternative Paths:** Different valid ways to achieve the same goal.
*   **Edge Cases/Boundary Conditions:** Scenarios that test the limits of the system (e.g., entering maximum characters, zero quantity, invalid dates).
*   **Error Handling Scenarios:** What happens when a user makes a mistake or enters invalid data?
*   **Negative Scenarios:** Testing what *shouldn't* happen (e.g., trying to access a feature without permission).

### Step 4: Define Realistic Input Data

This is where the "realistic" aspect truly shines. Use data that mimics what users would actually encounter.

*   **Source of Data:**
    *   **Real (Anonymized) Data:** If possible and permitted, use a sample of anonymized production data.
    *   **Data Representative of Production:** Create data that mirrors the format, volume, and typical values found in the live environment.
    *   **Test Data Generators:** Use tools to create a variety of data, ensuring it covers your identified variations.

*   **Examples of Input Data:**
    *   **Customer Name:** "Alice Wonderland" (realistic) vs. "AAAAAAAAAA" (less realistic)
    *   **Quantity:** 5 (typical) vs. 99999 (edge case)
    *   **Date:** "2023-10-27" (realistic) vs. "99/99/9999" (invalid)
    *   **Email:** "alice.w@example.com" (realistic) vs. "alice@.com" (invalid format)

### Step 5: Document the Scenarios Clearly

Use a consistent format for all your scenarios. A spreadsheet or a dedicated test management tool is ideal for this.

#### Worked Example: E-commerce Order Scenario

Let's prepare a scenario for a simple e-commerce order.

---

**Scenario Title:** Standard Product Purchase with Guest Checkout

**Objective:** A first-time customer purchases a single item as a guest, without creating an account.

**User Role:** Anonymous Customer

**Pre-conditions:**
*   The e-commerce website is accessible.
*   Product "Awesome Widget" (SKU: AW101) is in stock and priced at $25.00.
*   The shipping provider has standard shipping options enabled.

**Steps to Execute:**
1.  Navigate to the e-commerce website homepage.
2.  Use the search bar to find "Awesome Widget".
3.  Click on the "Awesome Widget" product listing to view its details.
4.  Select the quantity "1".
5.  Click the "Add to Cart" button.
6.  Navigate to the shopping cart page.
7.  Click the "Proceed to Checkout" button.
8.  Select the "Checkout as Guest" option.
9.  Enter the following Shipping Information:
    *   First Name: "Bob"
    *   Last Name: "Smith"
    *   Email: "bob.smith.guest@example.com"
    *   Address Line 1: "123 Maple Street"
    *   City: "Anytown"
    *   State/Province: "CA"
    *   Postal Code: "90210"
    *   Country: "USA"
10. Select "Standard Shipping".
11. Enter the following Payment Information:
    *   Card Type: "Visa"
    *   Card Number: "4111-1111-1111-1111" (Use a valid test card number provided by the payment gateway)
    *   Expiration Date: "12/25"
    *   CVV: "123"
    *   Name on Card: "Bob Smith"
12. Review the order summary.
13. Click the "Place Order" button.

**Expected Outcome(s):**
*   The user is redirected to an "Order Confirmation" page.
*   The "Order Confirmation" page displays an order number.
*   The "Order Confirmation" page shows the correct product ("Awesome Widget"), quantity (1), price ($25.00), shipping cost (if any), and total amount.
*   The "Order Confirmation" page displays the entered shipping and payment details (masked for sensitive info).
*   An order confirmation email is sent to "bob.smith.guest@example.com" with the order details and order number.
*   The "Awesome Widget" stock level decreases by 1.

---

### Step 6: Review and Refine

Once your scenarios are drafted, have a peer or an actual end-user review them.

*   **Clarity:** Are the steps easy to understand?
*   **Completeness:** Are all necessary inputs and expected outcomes covered?
*   **Realism:** Do they truly reflect user behavior and data?
*   **Coverage:** Do the scenarios collectively cover the most important functionalities and potential issues?

By investing time in preparing realistic UAT scenarios, you ensure that your user acceptance testing is effective, catches real-world problems, and ultimately leads to a successful program launch that users will embrace.

## Supports

- [[skills/computing/software-engineering/testing-quality/program-testing/microskills/uat-scenario-preparation|UAT scenario preparation]]

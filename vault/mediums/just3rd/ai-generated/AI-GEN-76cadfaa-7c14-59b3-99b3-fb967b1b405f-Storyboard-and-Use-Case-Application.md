---
type: "medium"
title: "Storyboarding and Use Cases: Modeling User Interactions"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/web-and-design/frontend-ux/user-centered-design/microskills/storyboard-and-use-case-application|storyboard-and-use-case-application]]"
---
# Storyboarding and Use Cases: Modeling User Interactions

In User-Centered Design, understanding how users will interact with a product is crucial. Storyboards and use cases are powerful tools that help us visualize and narrate these interactions, ensuring we build what users actually need. This lesson focuses on how to *apply* these techniques to model user interactions.

## What are Storyboards and Use Cases?

### Storyboards: Visual Narratives

A storyboard is a series of simple drawings or images that depict a sequence of user actions and system responses. Think of it like a comic strip for your product.

*   **Purpose:** To visually communicate a user's journey through a specific task or scenario.
*   **Key Elements:**
    *   **Frames:** Each frame represents a distinct moment in the interaction.
    *   **Visuals:** Simple sketches or mockups of the interface at that moment.
    *   **Text/Captions:** Brief descriptions of what the user is doing, what they see, and what the system is doing.
    *   **Flow:** Arrows or other indicators to show the progression from one frame to the next.

### Use Cases: Narrative Descriptions

A use case describes how a user (an "actor") interacts with a system to achieve a specific goal. It's a narrative that details the steps involved in an interaction.

*   **Purpose:** To define the functional requirements of a system from the user's perspective.
*   **Key Elements:**
    *   **Use Case Name:** A clear, action-oriented name for the goal (e.g., "Order a Product", "Update Profile").
    *   **Actor:** The user or external system interacting with the system.
    *   **Goal:** What the actor wants to achieve.
    *   **Preconditions:** What must be true before the use case can begin.
    *   **Basic Flow (Happy Path):** The most common, successful sequence of steps.
    *   **Alternative Flows:** Variations of the basic flow (e.g., user makes a mistake).
    *   **Exception Flows:** How the system handles errors or unexpected situations.
    *   **Postconditions:** What is true after the use case is successfully completed.

## Applying Storyboards and Use Cases

These techniques are most effective when applied to specific user requirements derived from research, personas, and scenarios.

### Applying Storyboards: A Step-by-Step Example

Let's imagine we're designing a mobile app for ordering coffee. A user requirement is: "Users should be able to quickly reorder their favorite drink."

1.  **Identify the Goal:** Reorder a favorite coffee.
2.  **Define the Actor:** A returning user named "Alex".
3.  **Sketch the Sequence:**

    *   **Frame 1:** Alex opens the app.
        *   *Visual:* App logo, login screen.
        *   *Caption:* Alex opens the coffee app.
    *   **Frame 2:** Alex is on the home screen, sees a "Your Favorites" section.
        *   *Visual:* Home screen with a prominent "Your Favorites" list, showing "Latte" and "Cappuccino".
        *   *Caption:* Alex sees their favorite drinks listed.
    *   **Frame 3:** Alex taps on "Latte".
        *   *Visual:* A button or card for "Latte" is highlighted.
        *   *Caption:* Alex taps on "Latte".
    *   **Frame 4:** A confirmation screen appears, pre-filled with Latte details.
        *   *Visual:* Order confirmation screen, showing "Latte", size, price, and a "Confirm Order" button.
        *   *Caption:* The app shows a pre-filled order for the Latte.
    *   **Frame 5:** Alex taps "Confirm Order".
        *   *Visual:* A "Processing..." indicator.
        *   *Caption:* Alex confirms the order.
    *   **Frame 6:** An order success message appears.
        *   *Visual:* "Order Successful!" message with estimated pickup time.
        *   *Caption:* The order is confirmed and Alex is notified.

This simple storyboard clearly visualizes Alex's journey to achieve their goal.

### Applying Use Cases: A Narrative Example

Let's take the same requirement: "Users should be able to quickly reorder their favorite drink."

**Use Case Name:** Reorder Favorite Drink

**Actor:** Registered User (e.g., Alex)

**Goal:** To place an order for a previously saved favorite drink.

**Preconditions:**
*   The user is logged into the application.
*   The user has at least one drink saved in their favorites.

**Basic Flow (Happy Path):**

1.  The user accesses their "Favorites" section within the app.
2.  The system displays a list of the user's favorite drinks.
3.  The user selects a specific favorite drink from the list.
4.  The system displays the details of the selected favorite drink, pre-populated with its standard configuration (e.g., size, milk type).
5.  The user reviews the order details.
6.  The user confirms the order.
7.  The system processes the order and confirms it to the user.
8.  The system updates the user's order history.

**Alternative Flows:**

*   **3a. User customizes the drink:** If the user wishes to modify the drink's configuration (e.g., change size, add/remove ingredients) before confirming, they select a "Customize" option. The system then presents the drink customization interface. Once customization is complete, control returns to step 5.

**Exception Flows:**

*   **7a. Payment failure:** If the payment processing fails, the system notifies the user of the payment failure and prompts them to try again or use a different payment method.
*   **7b. Item out of stock:** If the selected favorite drink or its customization is no longer available, the system informs the user and suggests alternative options.

**Postconditions:**
*   A new order for the selected favorite drink has been placed.
*   The user's order history is updated.
*   If the payment was successful, the user's account is charged.

## When to Use Which

*   **Use Storyboards** when you need to quickly communicate the *flow* and *visual experience* of an interaction. They are excellent for early ideation and for presenting to non-technical stakeholders.
*   **Use Use Cases** when you need to clearly define the *functional requirements* and *behavior* of the system for a specific user goal. They are invaluable for developers and testers to understand exactly what the system should do under various conditions.

Often, these techniques are used together. A scenario might inspire a storyboard, which then informs the detailed steps of a use case. By applying both storyboards and use cases, you gain a comprehensive understanding of how users will interact with your product, leading to more effective and user-centered designs.

## Supports

- [[skills/web-and-design/frontend-ux/user-centered-design/microskills/storyboard-and-use-case-application|Storyboard and Use Case Application]]

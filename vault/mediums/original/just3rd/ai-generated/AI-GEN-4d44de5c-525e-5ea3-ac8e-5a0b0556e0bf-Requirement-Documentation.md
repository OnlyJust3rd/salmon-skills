---
type: medium
title: Documenting User Requirements
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[requirement-documentation|requirement-documentation]]"
learning-time-in-minutes: 4
---
# Documenting User Requirements

When we design computer-based devices, understanding what users *actually* need is crucial. This isn't about what *we* think they need, but what their goals are and how they plan to interact with the system. This lesson focuses on *Requirement Documentation*, a key part of defining user requirements. We'll explore how to clearly capture these needs so they can guide the design and development process.

## Why Document Requirements?

Imagine building a house without blueprints. You might end up with a structure that doesn't meet the owner's needs. Requirement documentation serves as the blueprint for your device.

*   **Clarity:** It ensures everyone involved (designers, developers, stakeholders) has a shared understanding of what the device should do.
*   **Foundation for Design:** Well-defined requirements guide every design decision.
*   **Validation:** They provide a baseline against which the final product can be tested and validated.
*   **Scope Management:** They help prevent "scope creep" – where features are added that were never part of the original plan.

## Key Elements of a Requirement Document

A good requirement document is organized and specific. While formats can vary, most include these core components:

### 1. Functional Requirements

These describe *what* the system should do. They are the core behaviors and features of the device.

**Examples:**

*   The device shall allow users to log in using their email address and password.
*   The system shall display a list of available products on the main screen.
*   Users must be able to add items to a shopping cart.

### 2. Non-Functional Requirements

These describe *how well* the system should perform its functions. They cover aspects like performance, security, usability, and reliability.

**Examples:**

*   **Performance:** The system shall load the product list within 2 seconds under normal network conditions.
*   **Usability:** The interface shall be intuitive enough for a new user to complete a purchase within 5 minutes without assistance.
*   **Security:** All user passwords shall be stored using industry-standard encryption.
*   **Reliability:** The system shall have an uptime of 99.9%.

### 3. User Interface (UI) / User Experience (UX) Requirements

These focus on how users interact with the device and their overall experience.

**Examples:**

*   The application shall provide clear visual feedback when a button is pressed.
*   Error messages shall be concise and provide actionable advice.
*   Navigation between screens shall be consistent and predictable.

### 4. Constraints

These are limitations or restrictions that must be adhered to during design and development.

**Examples:**

*   The device must operate on a battery with a minimum life of 8 hours.
*   The software must be compatible with Windows 10 and macOS Monterey.
*   Development must adhere to a budget of $50,000.

## Structuring Your Requirements

A common and effective way to document requirements is using a table. This provides a structured overview and allows for easy tracking.

### Requirement Documentation Table Example

Let's imagine we're defining requirements for a simple smart home thermostat.

| ID    | Type                | Requirement Description                                                               | Priority | Source (e.g., User Interview, Persona) | Verification Method | Status     |
| :---- | :------------------ | :---------------------------------------------------------------------------------- | :------- | :------------------------------------- | :------------------ | :--------- |
| FR-01 | Functional          | The user shall be able to set the target temperature between 15°C and 30°C.         | High     | User Interview                         | Test Case           | Draft      |
| FR-02 | Functional          | The system shall display the current room temperature.                              | High     | User Interview                         | Test Case           | Draft      |
| NFR-01| Performance         | The thermostat display shall update the current temperature every 10 seconds.       | Medium   | User Observation                       | Observation         | Draft      |
| NFR-02| Usability           | The buttons for increasing/decreasing temperature shall be clearly labeled and large. | High     | Persona (Elderly User)                 | Usability Testing   | Draft      |
| UI-01 | UI/UX               | The device shall provide haptic feedback when a button is pressed.                  | Medium   | Competitor Analysis                    | Test Case           | Draft      |
| CON-01| Constraint          | The device must connect to a standard 2.4 GHz Wi-Fi network.                        | High     | Technical Specification                | Test Case           | Draft      |

**Explanation of Columns:**

*   **ID:** A unique identifier for each requirement.
*   **Type:** Categorizes the requirement (Functional, Non-Functional, UI/UX, Constraint).
*   **Requirement Description:** A clear, concise, and unambiguous statement of the requirement. Use "shall" for mandatory requirements.
*   **Priority:** Indicates how critical the requirement is (e.g., High, Medium, Low).
*   **Source:** Where did this requirement come from? This helps in traceability.
*   **Verification Method:** How will we confirm that this requirement has been met? (e.g., Test Case, Inspection, Demonstration, Prototype).
*   **Status:** Tracks the progress of the requirement (e.g., Draft, Approved, Implemented, Verified).

## Best Practices for Documentation

*   **Be Specific and Unambiguous:** Avoid vague language. Instead of "The system should be fast," use "The system shall respond to user input within 500 milliseconds."
*   **Be Verifiable:** Each requirement must have a way to be tested or validated. If you can't verify it, it's hard to know if it's done correctly.
*   **Be Complete:** Ensure all necessary aspects of the user's needs are captured.
*   **Be Consistent:** Use consistent terminology throughout the document.
*   **Keep it Updated:** Requirements can evolve. Regularly review and update your documentation.

By applying these principles to your requirement documentation, you lay a strong foundation for a successful user-centered design process.

## Supports

- [[requirement-documentation|Requirement Documentation]]

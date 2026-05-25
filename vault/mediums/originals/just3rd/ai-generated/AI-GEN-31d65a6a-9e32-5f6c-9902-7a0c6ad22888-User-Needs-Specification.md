---
type: medium
title: "Documenting User Needs: A Practical Guide"
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[user-needs-specification|user-needs-specification]]"
learning-time-in-minutes: 5
---
# Documenting User Needs: A Practical Guide

In user-centered design, understanding what users *need* is the foundation for building successful computer-based devices. This lesson focuses on the practical skill of documenting these needs clearly and comprehensively. We'll explore how to capture different types of requirements – functional, data, environmental, and user – to ensure your design truly meets user expectations.

## Why Document User Needs?

Clear documentation prevents misunderstandings, guides the development process, and acts as a reference point throughout the project lifecycle. It ensures everyone on the team, from designers to developers, shares a common understanding of what the system should do, how it should behave, and under what conditions it will operate.

## Types of User Requirements

To effectively document user needs, we break them down into distinct categories.

### 1. Functional Requirements

These describe *what* the system should do. They define specific behaviors, features, and functions.

**Think:** What are the primary actions a user will perform with the device?

**Example:**
*   **System:** A smart thermostat.
*   **Functional Requirement:** The system shall allow users to set a target temperature between 15°C and 30°C.
*   **Functional Requirement:** The system shall display the current room temperature.
*   **Functional Requirement:** The system shall automatically adjust heating or cooling to maintain the target temperature.

### 2. Data Requirements

These specify the information the system needs to process, store, or display.

**Think:** What information does the user interact with, or what information does the system need to operate?

**Example (Smart Thermostat):**
*   **Data Requirement:** The system shall store historical temperature data for the past 7 days.
*   **Data Requirement:** The system shall display time and date.
*   **Data Requirement:** User-defined schedule settings (e.g., wake-up time, sleep time) shall be stored.

### 3. Environmental Requirements

These define the conditions under which the system must operate reliably.

**Think:** Where and how will the device be used? What external factors might affect it?

**Example (Smart Thermostat):**
*   **Environmental Requirement:** The device shall operate within an ambient temperature range of 0°C to 40°C.
*   **Environmental Requirement:** The device shall withstand humidity levels up to 90% (non-condensing).
*   **Environmental Requirement:** The device shall be protected from direct sunlight to prevent overheating.

### 4. User Requirements

These focus on the user's interaction with the system, including usability and accessibility.

**Think:** How will users interact with the device? What are their capabilities and limitations?

**Example (Smart Thermostat):**
*   **User Requirement:** The interface shall be navigable using a maximum of three taps for core functions (setting temperature, changing mode).
*   **User Requirement:** The display shall use a font size of at least 16pt for readability.
*   **User Requirement:** The device shall provide audible feedback for button presses.

## Structuring Your Documentation

A clear structure makes your requirements easy to understand and manage. A common approach is to use a table.

### User Needs Specification Table

This table provides a structured way to document each requirement.

| ID    | Type           | Requirement Description                                                  | Priority | Notes/Rationale |
| :---- | :------------- | :----------------------------------------------------------------------- | :------- | :-------------- |
| FR-001 | Functional     | Allow users to set a target temperature between 15°C and 30°C.           | High     | Core function   |
| DR-001 | Data           | Store historical temperature data for the past 7 days.                   | Medium   | For trend analysis |
| ER-001 | Environmental  | Operate within an ambient temperature range of 0°C to 40°C.              | High     | Standard operating condition |
| UR-001 | User           | Interface navigable with max 3 taps for core functions.                | High     | Usability goal  |
| FR-002 | Functional     | Display current room temperature.                                        | High     | Essential feedback |
| UR-002 | User           | Display shall use font size of at least 16pt.                            | Medium   | Accessibility   |

**Explanation of Columns:**

*   **ID:** A unique identifier for each requirement. This is crucial for tracking and referencing.
*   **Type:** The category of the requirement (Functional, Data, Environmental, User).
*   **Requirement Description:** A clear, concise, and unambiguous statement of the requirement. Use "shall" to indicate a mandatory requirement.
*   **Priority:** How important is this requirement? (e.g., High, Medium, Low). This helps in making design and development decisions.
*   **Notes/Rationale:** Any additional information, justification, or context for the requirement.

## Practical Application: Defining Requirements for a Smart Coffee Maker

Let's apply this by thinking about a hypothetical smart coffee maker.

**Brainstorming:**

*   **What should it do?** Brew coffee, schedule brews, control strength, indicate when done.
*   **What information does it need?** Coffee type, water level, bean level, brew time, user schedules.
*   **Where will it be used?** Kitchen counter, near a power outlet, potentially exposed to steam.
*   **How will users interact?** Via buttons, a mobile app, voice commands.

**Documenting Requirements (Excerpt):**

| ID    | Type           | Requirement Description                                                       | Priority | Notes/Rationale |
| :---- | :------------- | :---------------------------------------------------------------------------- | :------- | :-------------- |
| FR-010 | Functional     | The system shall allow users to select from three brew strengths: Mild, Medium, Strong. | High     | User preference |
| DR-010 | Data           | The system shall store up to 5 user-defined brewing schedules.                  | Medium   | Convenience     |
| UR-010 | User           | The mobile app interface shall clearly display the current brewing status (e.g., "Brewing," "Ready"). | High     | User feedback   |
| ER-010 | Environmental  | The device shall operate in an environment with normal kitchen humidity and temperatures. | High     | Standard use    |
| FR-011 | Functional     | The system shall automatically detect when brewing is complete and notify the user. | High     | User notification |
| UR-011 | User           | The mobile app shall provide push notifications for brew completion.            | High     | Remote awareness |

## Common Pitfalls to Avoid

*   **Ambiguity:** Vague language leads to misinterpretation. Be precise.
*   **Incompleteness:** Missing requirements create gaps in functionality or usability.
*   **Conflicting Requirements:** Two requirements that cannot be met simultaneously.
*   **Unverifiable Requirements:** Requirements that cannot be tested or proven to be met.

By diligently applying these structured techniques, you can create a robust and clear set of user needs that will guide the development of effective computer-based devices.

## Supports

- [[user-needs-specification|User Needs Specification]]

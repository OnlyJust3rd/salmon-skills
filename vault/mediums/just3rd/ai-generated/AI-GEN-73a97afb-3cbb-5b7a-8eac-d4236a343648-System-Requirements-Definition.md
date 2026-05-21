---
type: "medium"
title: "Defining System Requirements: Functional vs. Non-Functional"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/web-and-design/frontend-ux/user-centered-design/microskills/system-requirements-definition|system-requirements-definition]]"
---
# Defining System Requirements: Functional vs. Non-Functional

When we design interactive systems, understanding what the system *must* do and how it *should* perform is crucial. This is where defining system requirements comes in. We'll focus on two key categories: **functional requirements** and **non-functional requirements**. Applying these definitions helps us build systems that truly meet user needs.

## What are Functional Requirements?

Functional requirements describe the specific behaviors or functions of the system. They define what the system *does*. Think of them as the "what" of the system. These are often expressed as verbs, detailing actions the system will perform.

### Key Characteristics of Functional Requirements:

*   **Action-oriented:** They describe actions the system performs.
*   **Specific:** They detail specific functions.
*   **Measurable (often):** They can usually be tested to see if the function works.

### Examples:

Let's consider a simple online bookstore system.

*   **Functional Requirement 1:** The system shall allow users to search for books by title, author, or ISBN.
*   **Functional Requirement 2:** The system shall display book details, including title, author, price, and description.
*   **Functional Requirement 3:** The system shall enable users to add books to a shopping cart.
*   **Functional Requirement 4:** The system shall process payments via credit card.
*   **Functional Requirement 5:** The system shall send an order confirmation email to the user.

## What are Non-Functional Requirements?

Non-functional requirements, on the other hand, describe *how* the system should perform its functions. They define the qualities or constraints of the system. These are often referred to as "quality attributes" or "non-functional attributes." They are about the "how well" or "under what conditions."

### Key Characteristics of Non-Functional Requirements:

*   **Attribute-oriented:** They describe characteristics of the system.
*   **Qualitative and Quantitative:** They can be subjective (e.g., "easy to use") or objective (e.g., "response time under 2 seconds").
*   **Constraints:** They often impose limits or restrictions on the system.

### Common Categories of Non-Functional Requirements:

| Category           | Description                                                                                                 | Example (Online Bookstore)                                                                                                                                                                                                                                                             |
| :----------------- | :---------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Performance**    | How fast and efficiently the system operates.                                                               | The search results page shall load within 3 seconds. The checkout process shall be completed in under 10 seconds for 95% of users.                                                                                                                                                         |
| **Usability**      | How easy the system is for users to learn and operate.                                                      | New users shall be able to find and purchase a book within 5 minutes without assistance. The interface shall be intuitive and follow standard web design patterns.                                                                                                                     |
| **Reliability**    | The probability of failure-free operation for a specified period of time.                                   | The system shall have an uptime of 99.9%. The system shall recover gracefully from network interruptions without data loss.                                                                                                                                                             |
| **Security**       | Measures taken to protect the system and its data from unauthorized access, modification, or destruction. | All user passwords shall be stored securely using industry-standard encryption. Payment card information shall be transmitted using secure (SSL/TLS) protocols.                                                                                                                        |
| **Maintainability**| The ease with which the system can be modified, corrected, or enhanced.                                    | The system's codebase shall be well-documented and modular, allowing for new payment gateways to be integrated within two weeks of development time.                                                                                                                                    |
| **Scalability**    | The system's ability to handle an increasing amount of work or users.                                       | The system shall support up to 10,000 concurrent users without performance degradation. The system architecture shall allow for horizontal scaling of the database servers.                                                                                                         |
| **Portability**    | The ease with which the system can be transferred from one environment to another.                          | The web application shall be compatible with the latest versions of Chrome, Firefox, and Safari. The mobile app shall run on both iOS and Android.                                                                                                                                    |
| **Accessibility**  | The extent to which the system is usable by people with disabilities.                                       | The website shall comply with WCAG 2.1 Level AA guidelines, ensuring it is navigable and usable for individuals with visual impairments.                                                                                                                                                |

## Applying the Definitions

When you're discovering requirements for a new system, constantly ask yourself:

*   **What specifically should the system *do*?** (This points to functional requirements).
*   **How *well* or under what *conditions* should it do it?** (This points to non-functional requirements).

**Mistake to Avoid:** Confusing the two. For example, saying "The system should be fast" is too vague. It doesn't specify *how fast*. This is where you need to refine it into a measurable performance requirement like: "The search results page shall load within 3 seconds."

By clearly distinguishing and defining both functional and non-functional requirements, you create a solid foundation for building successful interactive systems that meet both user needs and operational expectations.

## Supports

- [[skills/web-and-design/frontend-ux/user-centered-design/microskills/system-requirements-definition|System Requirements Definition]]

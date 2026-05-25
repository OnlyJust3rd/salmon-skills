---
type: "medium"
title: "Actor Identification: The Who of Your System"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/software-engineering/software-practices/software-engineering/microskills/actor-identification|actor-identification]]"
related-skills:
  - "[[skills/computing/software-engineering/software-practices/software-engineering/software-engineering|software-engineering]]"
learning-time-in-minutes: 4
---
# Actor Identification: The Who of Your System

In software engineering, before we can build anything useful, we need to understand who will be using it and what they'll be doing. This is where **Actor Identification** comes in. As part of eliciting requirements and creating use case diagrams, identifying actors is your first crucial step.

## What is an Actor?

An actor represents a role played by a human user or another external system that interacts with your software system. Think of them as the "users" of your system, but not just people. It could be a sensor, a database, or even another software application.

## Why is Identifying Actors Important?

*   **Defines System Boundaries:** Actors help us understand what's *inside* our system and what's *outside*. The interactions are between the system and its actors.
*   **Drives Requirements:** The goals and tasks of each actor directly translate into the functionality your system needs to provide.
*   **Forms the Basis of Use Case Diagrams:** Actors are the stick figures on your use case diagrams, and their relationships with use cases define the system's behavior.

## Techniques for Identifying Actors

Here are some practical techniques to help you uncover the actors for your system:

### 1. The "Who and What" Questioning Technique

This is a straightforward approach. For any given system, ask:

*   **Who** will use this system?
*   **What** external systems or entities will interact with this system?
*   **What** roles do people play when interacting with the system? (e.g., a single person might be a "Customer" in one scenario and an "Administrator" in another, but these are different roles).

**Example:** Imagine a library management system.

*   "Who will use this system?" -> **Librarian**, **Member**
*   "What external systems will interact?" -> Maybe a **Payment Gateway** for fines, or a **Cataloging Service** for book data.
*   "What roles do people play?" -> A **Member** might borrow books, return books, or renew memberships. A **Librarian** might add new books, manage member accounts, or generate reports.

### 2. Identifying by Goals or Tasks

Consider the primary goals or tasks the system needs to achieve. For each goal, ask:

*   **Who** or **what** is performing this goal?
*   **Who** or **what** benefits from this goal being achieved?

**Example:** For an online banking system:

*   **Goal:** Transfer money between accounts.
    *   **Performer:** **Customer**
    *   **Beneficiary:** The **Customer** themselves.
*   **Goal:** Process loan applications.
    *   **Performer:** **Loan Officer** (a type of bank employee)
    *   **Beneficiary:** The **Customer** applying for the loan, and the **Bank**.

From this, we'd identify actors like **Customer**, **Loan Officer**, and potentially the **Bank** (as a system or organizational entity).

### 3. Identifying by Job Titles or System Names

This is often a good starting point, especially when dealing with existing organizations or established systems.

*   List out all the job titles of people who will directly interact with the system.
*   List out any other systems or devices that need to communicate with your system.

**Example:** For an e-commerce platform:

*   **Job Titles:** **Customer**, **Salesperson**, **Warehouse Manager**, **System Administrator**.
*   **External Systems:** **Payment Processor**, **Shipping Carrier API**, **Inventory Management System**.

## Common Pitfalls to Avoid

*   **Confusing Actors with UI Elements:** An actor is a *role*, not a button or a screen. The "Login Button" is not an actor. The "User" who *uses* the login button is an actor.
*   **Confusing Actors with Internal System Components:** Actors are external. The "Database" or the "Business Logic Layer" are part of your system, not actors.
*   **Making Actors Too Specific:** Aim for roles, not specific individuals. "John Smith" is not an actor; "Customer" is.
*   **Forgetting About Non-Human Actors:** Don't overlook other systems, hardware, or external services that your system will interact with.

## Actors in Action: A Mini-Scenario

Let's consider a system for **online course registration**.

When you start asking "Who uses this?" and "What interacts with it?":

*   **Students** need to browse courses, register for them, and view their schedules. This suggests a **Student** actor.
*   **Instructors** might need to view class rosters or manage their course details. This suggests an **Instructor** actor.
*   The **University's Bursar System** might need to be notified about course fees or payments. This suggests a **Bursar System** actor.
*   An **Academic Advisor** might need to approve course selections for some students. This suggests an **Academic Advisor** actor.

If we were to draw a very basic use case diagram for this, we would see these identified actors interacting with different use cases (like "Register for Course," "View Roster," "Approve Registration").

By systematically applying these techniques, you'll build a solid foundation for understanding your system's functionality and creating accurate use case diagrams.

## Supports

- [[skills/computing/software-engineering/software-practices/software-engineering/microskills/actor-identification|Actor Identification]]

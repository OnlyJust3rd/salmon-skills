---
type: "medium"
title: "Access Control System Components"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/security-privacy/cybersecurity/access-control/microskills/access-control-system-components|access-control-system-components]]"
related-skills:
  - "[[skills/computing/security-privacy/cybersecurity/access-control/access-control|access-control]]"
learning-time-in-minutes: 5
---
# Access Control System Components

Understanding the fundamental parts of an access control system is the first step to building and managing secure environments. These components work together to ensure only authorized individuals can access specific resources.

## What are Access Control System Components?

Access control systems are designed to manage and enforce who can access what, and when. They are built upon several key components, each playing a vital role in the overall security process. Think of it like a bouncer at a club: they check your ID, your name on the guest list, and your behavior, and based on that, they decide if you can enter and where you can go.

Here are the fundamental components you'll find in most access control systems:

*   **Subjects:** These are the entities that request access to resources. In IT, subjects are typically users, but they can also be processes, applications, or even other systems. They are the "actors" seeking entry.

    *   **Example:** A user logging into their company laptop.
*   **Objects:** These are the resources that subjects are trying to access. Objects can be almost anything that needs protection, from physical items to digital information.

    *   **Examples:** A file on a server, a database, a printer, a physical door, a web application.
*   **Access Rules (Policies):** These define the conditions under which access is granted or denied. They are the "rules of engagement" established by administrators. Policies are the brains of the operation, dictating the logic.

    *   **Examples:** "Only managers can access the HR payroll files." "Users can only access the marketing website between 9 AM and 5 PM."
*   **Access Control Mechanism (Enforcement Point):** This is the component that actually checks if a subject is allowed to access an object according to the defined rules. It's the "bouncer" that verifies the subject against the rules.

    *   **Examples:** A firewall, an operating system's file permissions, a security token reader, a password verification process.
*   **Authentication System:** This component verifies the identity of the subject requesting access. It answers the question, "Are you who you say you are?" This is often the first step before an enforcement point even checks the rules.

    *   **Examples:** A username and password check, a fingerprint scanner, an RFID card reader, multi-factor authentication (MFA) systems.
*   **Authorization System:** Once a subject's identity is authenticated, the authorization system determines what actions that authenticated subject is permitted to perform on an object. It answers the question, "Now that I know who you are, what are you allowed to do?"

    *   **Examples:** Role-based access control (RBAC) lists, access control lists (ACLs) on files, permissions settings in an application.

## Practical Scenario: Accessing a Company File Server

Let's illustrate these components in action with a common scenario: a marketing team member trying to access a project proposal document stored on a company file server.

1.  **Subject:** The marketing team member (let's call her Alice).
2.  **Object:** The "Q3 Marketing Proposal" document on the shared network drive.
3.  **Authentication System:** Alice enters her username and password to log into her workstation. This verifies she is indeed Alice.
4.  **Access Control Mechanism (File Server):** The file server receives Alice's request to open the document.
5.  **Authorization System (connected to Access Rules):** The file server's operating system checks its Access Control Lists (ACLs) for the "Q3 Marketing Proposal" document.
6.  **Access Rules (Policies):** The ACLs state that only members of the "Marketing Team" group can read and write to this document.
7.  **Outcome:** Because Alice is authenticated and her user account is part of the "Marketing Team" group, the authorization system grants her access. She can open and edit the document.

Now, imagine if Alice was from the HR department. She would still authenticate successfully, but when the file server checked its rules (ACLs), it would find that the HR group is not allowed access to this specific marketing document. Access would be denied.

## Key Takeaways

*   Access control is a layered process involving several distinct but interconnected components.
*   **Subjects** request access, **Objects** are what they want to access.
*   **Authentication** verifies identity, while **Authorization** determines permissions.
*   **Access Rules (Policies)** define the security logic, and the **Access Control Mechanism** enforces it.

## Practice Task

Imagine you are setting up access for a new employee, Bob, in a small office. Bob is joining the sales team and needs to access a shared CRM database and a folder containing sales collateral. He should be able to view and edit customer records in the CRM and view and download sales brochures.

Identify the components involved in Bob's access scenario:

1.  Who is the Subject?
2.  What are the Objects Bob needs to access?
3.  What is the role of the Authentication System in Bob's case?
4.  What is the role of the Authorization System?
5.  What would be an example of an Access Rule for the CRM database?

## Self-Check Questions

1.  What are the two primary entities involved in an access request?
    *   A) Subject and Object
    *   B) Administrator and User
    *   C) Policy and Mechanism
    *   D) Authentication and Authorization

2.  Which component verifies that a user is who they claim to be?
    *   A) Object
    *   B) Access Rule
    *   C) Authentication System
    *   D) Access Control Mechanism

3.  Which component determines what actions an authenticated user can perform on a resource?
    *   A) Subject
    *   B) Authorization System
    *   C) Object
    *   D) Access Rule

4.  Which of the following is an example of an "Object" in an access control context?
    *   A) A user account
    *   B) A printer
    *   C) A firewall
    *   D) A policy document

5.  The set of conditions that dictate whether access is granted or denied is known as:
    *   A) The Subject
    *   B) The Authorization System
    *   C) The Access Control Mechanism
    *   D) The Access Rules (Policies)

## Supports

- [[skills/computing/security-privacy/cybersecurity/access-control/microskills/access-control-system-components|Access Control System Components]]

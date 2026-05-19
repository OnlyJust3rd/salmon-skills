---
type: "medium"
title: "Authorization Principles: Who Gets to Do What?"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/security/cybersecurity/access-control/microskills/authorization-principles|Authorization Principles]]"
---
# Authorization Principles: Who Gets to Do What?

Authorization is a core principle in access control. It's about determining whether an authenticated user or system has the *permission* to access a specific resource or perform a particular action. Think of it as the bouncer at a club checking your VIP pass or your membership card before letting you in to a specific area. Authentication proves who you are; authorization decides what you're allowed to do once you're in.

## Understanding Authorization

In simple terms, authorization answers the question: "Now that we know who you are (authentication), are you allowed to do *this*?" It's a critical step in protecting sensitive data and system functionalities.

Here's a breakdown of key concepts:

*   **Resources:** These are the "things" that need protection. Examples include files, databases, applications, network devices, or even specific functions within an application (like "edit user profile" or "delete record").
*   **Permissions:** These are the specific rights granted to a user or system for a resource. Common permissions include "read," "write," "execute," "delete," or "administer."
*   **Access Control Policies:** These are the rules that define which users or systems have what permissions on which resources. These policies are the backbone of authorization.

## Authorization Process Flow

The authorization process typically follows authentication:

1.  **Authentication:** A user or system identifies themselves (e.g., by providing a username and password, a token, or a certificate). The system verifies this identity.
2.  **Authorization Request:** Once authenticated, the user or system attempts to access a resource or perform an action.
3.  **Policy Evaluation:** The access control system checks its defined policies to see if the authenticated identity is granted permission for the requested operation on the specific resource.
4.  **Decision:** Based on the policy evaluation, the system either grants or denies access.

## Practical Scenario: A File Sharing Application

Imagine a file sharing application where users can upload and share documents.

*   **Resources:** The shared files (e.g., "Project_Proposal.docx," "Budget_v3.xlsx").
*   **Users:** Different individuals within an organization (e.g., Alice, Bob, Carol).
*   **Permissions:**
    *   `read`: View the file.
    *   `write`: Edit the file.
    *   `share`: Allow others to access the file.
*   **Access Control Policies:**
    *   Alice uploaded "Project_Proposal.docx." She has `read`, `write`, and `share` permissions on it.
    *   Alice shares "Project_Proposal.docx" with Bob, granting him `read` permission.
    *   Bob uploads "Budget_v3.xlsx." He has `read`, `write`, and `share` permissions on it.
    *   Carol is an administrator and needs to audit files. She has `read` permission on all files.
    *   Carol attempts to `write` to "Project_Proposal.docx." The policy check finds she only has `read` permission. Her request is denied.
    *   Bob attempts to `delete` "Project_Proposal.docx." The policy check finds he only has `read` permission. His request is denied.

This scenario highlights how different users have varying levels of access to the same resource, based on explicit sharing and defined policies.

## Practice Task

Consider a simple online banking system.

1.  **Identify:** What would be considered "resources" in this system?
2.  **Identify:** What "permissions" might a typical user have?
3.  **Scenario:** A user named "David" logs into his online banking account. He wants to view his transaction history. He then attempts to transfer funds to another account.
    *   Describe how authorization would work for viewing his transaction history.
    *   Describe how authorization would work for transferring funds. What is the key difference in permissions required?

## Self-Check Questions

1.  What is the primary difference between authentication and authorization?
2.  If you can log into a system, does it automatically mean you can access all its features and data? Why or why not?
3.  Give an example of a "resource" and a "permission" in the context of a website you use regularly.
4.  Why are access control policies important for authorization?
5.  In the file sharing example, why was Carol denied the ability to `write` to the document?

## Supports

- [[skills/security/cybersecurity/access-control/microskills/authorization-principles|Authorization Principles]]

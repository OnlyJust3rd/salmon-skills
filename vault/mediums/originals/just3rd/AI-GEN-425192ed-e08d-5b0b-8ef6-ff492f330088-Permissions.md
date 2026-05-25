---
type: "medium"
title: "Understanding Permissions in Authorization"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/security-privacy/cybersecurity/cybersecurity/microskills/permissions|permissions]]"
related-skills:
  - "[[skills/computing/security-privacy/cybersecurity/cybersecurity/cybersecurity|cybersecurity]]"
learning-time-in-minutes: 3
---
# Understanding Permissions in Authorization

In cybersecurity, once we know *who* someone is (authentication), the next critical step is determining *what* they are allowed to do. This is where **permissions** come in. Permissions define the specific actions an authenticated identity (like a user or a service) can perform on a particular resource (like a file, a database record, or a system function).

Think of it like a digital keycard system. Authentication is proving your identity to get a card. Permissions are the specific doors your card can open and the actions you can take once inside (e.g., "read only," "write," "delete").

## Core Concept: Allowed Actions on Resources

At its heart, a permission is a rule that connects an **identity** to an **action** on a **resource**.

*   **Identity:** The user, group, or service account trying to access something.
*   **Resource:** The item or data being accessed (e.g., a document, a database table, an API endpoint).
*   **Action:** The operation being requested (e.g., read, write, delete, execute, list).

A permission essentially states: "Identity X is allowed to perform Action Y on Resource Z."

## Practical Example: File System Permissions

A common place you encounter permissions is on your computer's file system.

Imagine a file named `confidential_report.docx` on a shared network drive.

*   **Resource:** `confidential_report.docx`
*   **Identity 1:** `Alice` (an employee in the Finance department)
*   **Identity 2:** `Bob` (an employee in the Marketing department)
*   **Identity 3:** `GuestUser` (a temporary access account)

The system might have these permissions configured:

*   **Alice:**
    *   Read access to `confidential_report.docx`
    *   Write access to `confidential_report.docx`
*   **Bob:**
    *   Read access to `confidential_report.docx`
    *   No other access.
*   **GuestUser:**
    *   No access to `confidential_report.docx`

**Scenario:**

1.  Alice logs in. The system authenticates her. When she tries to open `confidential_report.docx`, the system checks her permissions. Since she has "Read access," she can open it. If she tries to edit it, the system checks for "Write access," which she also has, so she can save her changes.
2.  Bob logs in. The system authenticates him. When he tries to open `confidential_report.docx`, his "Read access" is confirmed, and he can open it. If he tries to delete it, the system finds no "Delete" permission for him on this resource, and the action is denied.
3.  A guest user attempts to access the file. The system checks for any granted permissions for `GuestUser` on `confidential_report.docx`. Since there are none, the access is denied.

## Practice Task

Consider a web application where users can manage their profiles.

Identify the potential **identities**, **resources**, and **actions** involved. Then, describe a set of **permissions** that would allow:

1.  A logged-in user to edit *only their own* profile information.
2.  An administrator to view *any* user's profile information.
3.  An administrator to edit *any* user's profile information.
4.  A visitor (not logged in) to view publicly available information on a profile (like username, but not email).

Think about how you would articulate these permissions. For example:
*   **Identity:** `RegularUser`
*   **Resource:** `UserProfile/{userID}`
*   **Action:** `Edit`
*   **Permission Rule:** `RegularUser` can `Edit` `UserProfile/{userID}` if `{userID}` matches the authenticated user's ID.

## Self-Check Questions

1.  What are the three main components that define a permission?
2.  If a user has "read" permission on a document but not "write" permission, what action would be denied if they tried to make and save changes?
3.  Why is it important to define permissions for different levels of access (e.g., read vs. write vs. delete)?
4.  In the context of a web application, what is an example of a "resource" that users might interact with?

## Supports

- [[skills/computing/security-privacy/cybersecurity/cybersecurity/microskills/permissions|Permissions]]

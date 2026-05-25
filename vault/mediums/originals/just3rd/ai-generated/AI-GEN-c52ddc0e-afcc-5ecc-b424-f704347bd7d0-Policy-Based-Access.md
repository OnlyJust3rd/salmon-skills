---
type: "medium"
title: "Policy-Based Access Control"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/security-privacy/cybersecurity/cybersecurity/microskills/policy-based-access|policy-based-access]]"
learning-time-in-minutes: 4
---
# Policy-Based Access Control

In cybersecurity, once we know *who* a user is (authentication), we need to decide *what* they are allowed to do (authorization). Policy-based access control is a common way to manage this. It relies on defining a set of rules, or policies, that dictate access permissions.

## What is Policy-Based Access Control?

Policy-based access control (PBAC) means that access decisions are made based on evaluating predefined policies. These policies are essentially a collection of rules that specify conditions under which access to a resource or an operation is granted or denied.

Think of it like a bouncer at a club. The bouncer doesn't just check if you have an ID (authentication). They have a set of rules (policies) they follow:
*   "Are you over 21?" (Attribute check)
*   "Do you have a ticket?" (Resource check)
*   "Are you on the guest list?" (Relationship check)
*   "Is the club at capacity?" (Environment check)

If all conditions are met according to the policy, you get in. If not, you're denied.

In a digital system, these policies are designed to be more granular and dynamic. They can involve attributes of the user (e.g., role, department, security clearance), attributes of the resource being accessed (e.g., sensitivity level, owner), and environmental factors (e.g., time of day, network location).

## How it Works

1.  **Policy Definition:** Administrators or security teams define policies. These policies are written using a specific language or syntax.
2.  **Policy Enforcement Point (PEP):** This is the component that intercepts an access request. It could be a web server, an application gateway, or an API.
3.  **Policy Decision Point (PDP):** When a request is intercepted by the PEP, the PEP sends the request details to the PDP. The PDP evaluates the relevant policies against the request attributes.
4.  **Decision:** Based on the policy evaluation, the PDP sends an "Allow" or "Deny" decision back to the PEP.
5.  **Action:** The PEP then either grants or denies the user access to the requested resource or operation.

## Practical Scenario

Imagine a company's internal file-sharing system. We want to implement policies to control access to sensitive financial reports.

**Policies might look like this (simplified):**

*   **Policy 1:**
    *   **Subject:** Users in the "Finance" department.
    *   **Action:** Read.
    *   **Resource:** Files tagged as "Financial Report".
    *   **Condition:** During business hours (9 AM - 5 PM local time).
    *   **Decision:** Allow.

*   **Policy 2:**
    *   **Subject:** Users with "Manager" role.
    *   **Action:** Edit.
    *   **Resource:** Files tagged as "Financial Report".
    *   **Decision:** Allow.

*   **Policy 3 (Deny Rule):**
    *   **Subject:** All users.
    *   **Action:** Any.
    *   **Resource:** Files tagged as "Financial Report".
    *   **Condition:** Accessing from outside the company network.
    *   **Decision:** Deny.

**How this plays out:**

*   **Alice**, a junior accountant in the "Finance" department, tries to access a "Financial Report" at 2 PM from her office computer. Her request is evaluated against Policy 1. She meets the department, action, resource, and time conditions. She is granted access.
*   **Bob**, a Sales Manager, tries to edit a "Financial Report". His request is evaluated against Policy 2. He has the "Manager" role and is trying to edit a financial report. He is granted access.
*   **Charlie**, a developer, tries to read a "Financial Report" from his home computer at 7 PM. His request is evaluated against all policies. Policy 1 doesn't apply because it's outside business hours. Policy 2 doesn't apply as he's not a manager. Policy 3 applies because he's accessing from outside the company network, and it explicitly denies access. His request is denied.

This approach allows for flexible and robust access control that can adapt to changing organizational needs and security requirements.

## Practice Task

Consider a cloud storage service. Define a simple policy for sharing private photos. Your policy should allow the owner of the photos to view them anytime, but allow specific friends to view them only when the owner explicitly shares them and grants permission.

## Self-Check Questions

1.  What is the primary purpose of policies in policy-based access control?
2.  Name two types of attributes that policies might consider when making an access decision.
3.  If a policy states "Allow access if user is in Group A AND resource is Type X", what happens if the user is in Group A but the resource is Type Y?

## Supports

- [[skills/computing/security-privacy/cybersecurity/cybersecurity/microskills/policy-based-access|Policy-Based Access]]

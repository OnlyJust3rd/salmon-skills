---
type: "medium"
title: "Access Control System Models"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/security/cybersecurity/access-control/microskills/access-control-system-models|access-control-system-models]]"
---
# Access Control System Models

Understanding how access control is managed is crucial in any system that handles sensitive information. Different **Access Control System Models** offer various ways to define and enforce who can access what resources and under what conditions. This lesson will introduce you to some of the most common models you'll encounter.

## What are Access Control Models?

Access control models are conceptual frameworks that define how permissions are granted, revoked, and managed within a system. They provide a standardized way to think about and implement security policies. Think of them as blueprints for organizing security rules.

### Why are Models Important?

*   **Consistency:** They ensure that access rules are applied uniformly.
*   **Clarity:** They make complex permission structures easier to understand.
*   **Maintainability:** Well-defined models simplify updates and troubleshooting.
*   **Security:** They help prevent unauthorized access by providing a structured approach to security.

## Common Access Control Models

Let's explore some of the most prevalent models:

### 1. Discretionary Access Control (DAC)

In DAC, the owner of a resource determines who can access it and what permissions they have. The owner has discretion over access.

*   **Key Idea:** Owner-centric permissions.
*   **How it works:** The owner of a file, for example, can grant read, write, or execute permissions to specific users or groups.
*   **Example:** On a personal computer, you own your documents and can decide if your colleagues can view or edit them.

### 2. Mandatory Access Control (MAC)

MAC is a more restrictive model where access is determined by security labels assigned to both users (subjects) and resources (objects). The system enforces these labels, not the individual owner.

*   **Key Idea:** System-enforced labels and clearance levels.
*   **How it works:** Users are assigned a clearance level (e.g., Top Secret, Secret, Confidential), and resources are assigned a classification level. Access is only granted if the user's clearance level meets or exceeds the resource's classification level.
*   **Example:** Military systems often use MAC. A user with "Secret" clearance can access documents classified as "Secret" or "Confidential," but not "Top Secret."

### 3. Role-Based Access Control (RBAC)

RBAC is a widely adopted model where access permissions are associated with roles rather than directly with individual users. Users are then assigned to these roles.

*   **Key Idea:** Permissions are tied to roles, and users are assigned roles.
*   **How it works:** Instead of giving each user specific permissions, you define roles (e.g., "Administrator," "Editor," "Viewer") and assign permissions to these roles. Then, you assign users to the appropriate roles.
*   **Example:** In a company's HR system:
    *   The "HR Manager" role might have full access to all employee data.
    *   The "Employee" role might only have access to their own personal records.
    *   A specific employee is assigned to the "Employee" role.

### 4. Attribute-Based Access Control (ABAC)

ABAC is a more granular and flexible model that grants access based on attributes associated with the user, the resource, and the environment.

*   **Key Idea:** Access is granted based on dynamic attributes.
*   **How it works:** Policies are defined using attributes. For instance, a policy could state: "Allow access to sensitive reports only if the user's department attribute is 'Finance' AND the current time is within business hours (9 AM - 5 PM) AND the user's role attribute is 'Analyst'."
*   **Example:** A cloud storage service might use ABAC to allow users from a specific company (`company: "AcmeCorp"`) to access shared folders (`resource_type: "shared_folder"`) only from corporate IP addresses (`network_location: "corporate_subnet"`).

## Practical Scenario: Managing Access in a Cloud Application

Imagine you're building a project management application used by various teams within a company. Different users need different levels of access.

*   **Project Managers:** Need to create new projects, assign tasks, and view all project details.
*   **Team Members:** Can view projects they are assigned to, update their own tasks, and comment on tasks.
*   **External Collaborators:** Can only view specific projects they are invited to and comment on tasks.

**How could different models apply?**

*   **DAC:** Each project owner could manually grant access to team members. This would be very difficult to manage at scale and prone to errors.
*   **MAC:** Not suitable, as access needs to be dynamic and based on roles and project assignments, not strict clearance levels.
*   **RBAC:** This is a strong candidate. You could define roles like "Project Manager," "Team Member," and "Collaborator." Then, assign permissions to these roles. Project Managers would be assigned the "Project Manager" role, team members the "Team Member" role, and external users the "Collaborator" role.
*   **ABAC:** This offers even more flexibility. You could define policies like: "Allow 'Team Member' role to update tasks IF task status is 'Open' AND user is assigned to the task." Or, "Allow 'Collaborator' role to view a project IF user is explicitly invited to that project."

In this scenario, RBAC is a good starting point due to its manageability. ABAC can be layered on top for more complex or dynamic authorization rules, especially for external collaborators or context-aware access.

## Practice Task

Consider a simple online banking system. Identify which of the following users would need which type of access and think about which access control model might be most appropriate for managing these permissions.

1.  **Customer:** Views their account balance, transaction history, and makes transfers.
2.  **Bank Teller:** Can view customer account details, process deposits and withdrawals, and initiate transfers for customers.
3.  **Branch Manager:** Can do everything a teller can, plus review daily reports, approve large transactions, and onboard new customers.
4.  **System Administrator:** Manages user accounts, system configurations, and security settings.

## Self-Check Questions

1.  In which access control model does the owner of a resource decide who can access it?
2.  What is the primary mechanism used in Mandatory Access Control (MAC) to determine access?
3.  If you want to grant access based on job titles or responsibilities rather than individual user permissions, which model would be most suitable?
4.  What makes Attribute-Based Access Control (ABAC) more flexible than models like RBAC or DAC?
5.  True or False: RBAC requires you to manage permissions for every single user individually.

## Supports

- [[skills/security/cybersecurity/access-control/microskills/access-control-system-models|Access Control System Models]]

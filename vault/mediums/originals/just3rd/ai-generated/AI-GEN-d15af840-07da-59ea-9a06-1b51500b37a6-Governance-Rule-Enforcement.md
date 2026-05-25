---
type: "medium"
title: "Governance Rule Enforcement with Azure Policy"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/systems-infrastructure/cloud-platforms/cloud-infrastructure/cloud-scalability/microskills/governance-rule-enforcement|governance-rule-enforcement]]"
learning-time-in-minutes: 4
---
# Governance Rule Enforcement with Azure Policy

This lesson focuses on applying Azure Policy to enforce compliance and security standards for your cloud resources. This is a crucial aspect of managing cloud scalability effectively, ensuring your environment remains secure and cost-optimized as it grows.

## What is Azure Policy?

Azure Policy is a service that helps you enforce organizational standards and assess compliance at scale. It allows you to create, deploy, and manage policies that enforce rules and effects for your Azure resources. Think of it as setting up guardrails for your cloud environment to prevent unauthorized configurations or ensure critical security settings are always in place.

## Applying Azure Policy: A Practical Scenario

Imagine your organization has a strict rule: all virtual machines (VMs) deployed in Azure must have disk encryption enabled for security reasons. You need to implement a policy to enforce this across your subscriptions.

Here's how you can apply Azure Policy to achieve this:

1.  **Identify the Requirement:** Disk encryption must be enabled for all VMs.

2.  **Find or Create a Policy Definition:** Azure provides many built-in policy definitions. For disk encryption, you can often find a pre-existing definition. If not, you can create a custom one. Let's assume a built-in policy exists that checks for this.

3.  **Create a Policy Assignment:** A policy assignment applies a policy definition to a specific scope. This scope can be a management group, subscription, or resource group.

    *   **Scope:** For this scenario, let's assign it to a specific subscription to enforce it across all resources within that subscription.
    *   **Policy Definition:** Select the "Require disk encryption" policy definition.
    *   **Parameters (if any):** Some policies have parameters you can configure. For example, you might specify which encryption type to enforce. For this basic scenario, let's assume no specific parameters are needed beyond the default.
    *   **Effect:** This determines what happens when a resource violates the policy. Common effects include:
        *   `Deny`: Prevents the creation or update of a resource that violates the policy.
        *   `Audit`: Logs non-compliant resources but allows their creation/update.
        *   `Append`: Adds required fields to a resource during creation/update.
        *   `Modify`: Changes specified fields in a resource during creation/update.

    For our VM encryption scenario, `Deny` is the most appropriate effect. This ensures that no unencrypted VMs can be deployed or modified.

### Steps to Implement (Conceptual):

While the exact steps involve navigating the Azure portal, these are the core actions:

1.  Navigate to Azure Policy in the Azure portal.
2.  Under "Authoring," select "Assignments."
3.  Click "+ Assign policy."
4.  In the "Basics" tab, select the desired scope (e.g., your subscription).
5.  In the "Policy definition" field, search for and select a policy related to disk encryption.
6.  In the "Parameters" tab, configure any necessary settings (e.g., encryption type, if applicable).
7.  In the "Remediation" tab, you can configure remediation tasks to fix existing non-compliant resources (optional for this example).
8.  In the "Non-compliance messages" tab, define a message to display when a resource is non-compliant.
9.  Review and create the assignment.

Once assigned, any attempt to create a VM without disk encryption enabled within the scoped subscription will be blocked.

## Practice Task

1.  Navigate to the Azure portal.
2.  Go to **Policy** -> **Assignments**.
3.  Click **+ Assign policy**.
4.  For the **Scope**, select your subscription.
5.  For the **Policy definition**, search for and select "DeployIfNotExists – virtual machines should have disk encryption enabled" (or a similar relevant built-in policy).
6.  Set the **Effect** to `Deny`.
7.  Complete the assignment.
8.  Attempt to create a new Virtual Machine within the selected subscription *without* enabling disk encryption. Observe the outcome.

## Self-Check Questions

*   What is the primary purpose of Azure Policy?
*   When would you choose the `Audit` effect over the `Deny` effect for a policy assignment?
*   What are the different levels at which you can scope an Azure Policy assignment?
*   What would happen if you tried to deploy a virtual machine without disk encryption after applying the policy from the practice task with the `Deny` effect?

## Supports

- [[skills/computing/systems-infrastructure/cloud-platforms/cloud-infrastructure/cloud-scalability/microskills/governance-rule-enforcement|Governance Rule Enforcement]]

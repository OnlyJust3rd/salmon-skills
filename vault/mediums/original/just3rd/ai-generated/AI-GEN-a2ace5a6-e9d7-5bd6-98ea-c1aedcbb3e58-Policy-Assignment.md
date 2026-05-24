---
type: "medium"
title: "Applying Azure Policies: Policy Assignment"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/systems-infrastructure/cloud-platforms/cloud-infrastructure/cloud-scalability/microskills/policy-assignment|policy-assignment]]"
learning-time-in-minutes: 4
---
# Applying Azure Policies: Policy Assignment

This lesson focuses on applying pre-defined Azure Policies to specific scopes within your Azure environment. This is a crucial step in enforcing governance and ensuring your cloud resources adhere to organizational standards. We'll cover how to assign a policy to a subscription or a resource group.

## Understanding Policy Assignment

Azure Policy assignments are how you **apply** a policy definition to a specific scope in your Azure environment. A scope can be a management group, subscription, resource group, or even individual resources. When a policy is assigned, Azure evaluates resources within that scope against the policy's rules. If a resource violates the policy, Azure can take a remediation action, such as denying the deployment, modifying the resource, or creating a remediation task.

## Practical Scenario: Enforcing Tagging

Imagine your organization requires all virtual machines to have a "CostCenter" tag assigned for billing purposes. You can use Azure Policy to enforce this.

**Scenario:** You are responsible for a specific resource group named `Production-App-RG` within the `MyCompany-Prod` subscription. You need to ensure that any virtual machine created within this resource group *must* have the `CostCenter` tag set.

## Applying a Policy: Step-by-Step

We will use the Azure portal for this practical example, as it's the most common method for policy assignment.

**Steps:**

1.  **Navigate to Azure Policy:**
    *   In the Azure portal, search for "Policy" in the top search bar and select it.

2.  **Go to Assignments:**
    *   In the Policy blade, select "Assignments" from the left-hand menu.

3.  **Assign Policy:**
    *   Click the "+ Assign policy" button at the top of the Assignments page.

4.  **Basics Tab:**
    *   **Scope:** This is where you define where the policy will be applied.
        *   Click the "..." button next to the Scope field.
        *   Navigate and select your `MyCompany-Prod` subscription.
        *   Then, expand the subscription and select your `Production-App-RG` resource group.
        *   Click "Select".
    *   **Policy definition:** Click the "..." button to select the policy you want to assign.
        *   Search for "require a tag".
        *   Select the policy definition named "Require a tag". Click "Select".
    *   **Assignment name:** This will auto-populate based on the policy definition and scope. You can customize it if needed (e.g., `ProdAppRG-RequireCostCenterTag`).
    *   **Description:** (Optional) Add a description like "Enforces CostCenter tag for VMs in Production-App-RG."
    *   **Category:** This will be pre-filled.

5.  **Parameters Tab:**
    *   This is where you configure specific values for the chosen policy definition.
    *   **Tag Name:** In the "Tag Name" field, enter `CostCenter`. This tells the policy which tag to look for.
    *   **Effect:** Choose how the policy should react. For this scenario, select "Deny". This will prevent the creation of any VM that doesn't have the `CostCenter` tag.

6.  **Remediation Tab:**
    *   For "Deny" effects, remediation is typically not applicable as the action happens during deployment. If you were using an effect like "DeployIfNotExists", you would configure remediation here. Skip this tab for this example.

7.  **Non-compliance messages Tab:**
    *   (Optional) You can add custom messages that will be displayed to users when their resource assignment is non-compliant.

8.  **Review + Create:**
    *   Click "Review + create".
    *   Verify your settings.
    *   Click "Create".

You have now successfully assigned the "Require a tag" policy, specifically targeting the `CostCenter` tag, to your `Production-App-RG` resource group. Any attempt to create a virtual machine in this resource group without the `CostCenter` tag will now be denied.

## Practice Task

Assign the "Allowed locations" policy to a different resource group named `Dev-Sandbox-RG` within your development subscription. Configure the policy to only allow deployments in the "East US" and "West US" regions.

## Self-Check Questions

1.  What is the primary purpose of an Azure Policy assignment?
2.  What are the different types of scopes you can assign an Azure Policy to?
3.  If you want to prevent resources from being deployed if they don't meet certain criteria, which "Effect" would you choose in the policy assignment?
4.  Why might you choose to assign a policy at the subscription level versus the resource group level?

## Supports

- [[skills/computing/systems-infrastructure/cloud-platforms/cloud-infrastructure/cloud-scalability/microskills/policy-assignment|Policy Assignment]]

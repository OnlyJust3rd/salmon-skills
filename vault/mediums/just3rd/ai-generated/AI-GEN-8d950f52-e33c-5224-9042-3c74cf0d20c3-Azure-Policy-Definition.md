---
type: "medium"
title: "Azure Policy Definitions: Enforcing Governance"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/cloud-devops/platform-engineering/cloud-scalability/microskills/azure-policy-definition|azure-policy-definition]]"
---
# Azure Policy Definitions: Enforcing Governance

Azure Policies are rules that you can enforce across your Azure resources. They help maintain compliance with organizational standards and regulatory requirements. At the core of Azure Policy are **policy definitions**. A policy definition is a statement that expresses what to evaluate and what condition must be met. You can think of it as a blueprint for a governance rule.

When you need to implement Azure Policy to enforce governance rules, understanding how to create and assign these definitions is key. This micro-skill focuses on the building blocks: the policy definitions themselves.

## What is a Policy Definition?

A policy definition specifies a condition and a set of effects.

*   **Condition:** This is the part that checks the properties of a resource. For example, you might want to check if a resource is deployed in a specific region or if a particular tag is present.
*   **Effect:** This is what happens if the condition is met. Common effects include:
    *   `Deny`: Prevents the resource from being created or updated.
    *   `Audit`: Logs a warning when a resource doesn't comply.
    *   `Append`: Adds fields to the resource during creation or update.
    *   `Modify`: Changes existing fields in the resource.
    *   `DeployIfNotExists`: Deploys a resource if it's missing.
    *   `AuditIfNotExists`: Audits if a related resource is missing.

Policy definitions are written in JSON.

## Practical Example: Enforcing a Specific Region

Let's say your organization requires all storage accounts to be deployed in the "East US" region to comply with data residency requirements. We can create a policy definition to enforce this.

Here's a simple policy definition to audit storage accounts not deployed in "East US":

```json
{
  "properties": {
    "displayName": "Audit Storage Accounts in East US",
    "description": "Audits storage accounts that are not deployed in the East US region.",
    "mode": "Indexed",
    "parameters": {},
    "policyRule": {
      "if": {
        "allOf": [
          {
            "field": "type",
            "equals": "Microsoft.Storage/storageAccounts"
          },
          {
            "field": "location",
            "notEquals": "eastus"
          }
        ]
      },
      "then": {
        "effect": "audit"
      }
    }
  }
}
```

**Explanation:**

*   `displayName` and `description`: Human-readable names and explanations for the policy.
*   `mode`: `Indexed` is used for policies that evaluate tags and location.
*   `policyRule`: Contains the core logic.
    *   `if`: The condition part.
        *   `allOf`: Ensures both sub-conditions must be true.
        *   `field": "type", "equals": "Microsoft.Storage/storageAccounts"`: Checks if the resource type is a storage account.
        *   `field": "location", "notEquals": "eastus"`: Checks if the resource's location is *not* "eastus".
    *   `then`: The effect part.
        *   `effect": "audit"`: If the condition is met (storage account not in East US), an audit event is generated.

## Creating and Assigning the Policy

1.  **Create the Definition:** You can create this policy definition through the Azure portal, Azure CLI, or Azure PowerShell.
    *   **Azure Portal:** Navigate to Policy -> Definitions -> Add policy definition. Paste the JSON.
    *   **Azure CLI:** Use `az policy definition create --name <policy-name> --display-name <display-name> --description <description> --rules <path-to-json-file>`.
2.  **Assign the Definition:** Once created, you assign the policy definition to a scope (management group, subscription, or resource group).
    *   **Azure Portal:** Navigate to Policy -> Assignments -> Assign policy. Select the definition, scope, and configure any parameters (though this example has none).

For our example, after creating this definition, you would assign it to a subscription or resource group where you want to enforce the region rule. Any new storage accounts created outside of "East US" within that scope would then trigger an audit.

## Practice Task

Navigate to the Azure portal. Find the "Policy" service. Create a new policy definition that **denies** the creation of any virtual machines that do not have the tag `Environment` set to either `Production` or `Development`.

Hint: You will need to use `field: "tags.[Environment]"` and potentially an `in` operator or multiple `equals` conditions within an `anyOf` block.

## Self-Check Questions

1.  What are the two main components of a policy definition?
2.  What is the difference between the `audit` and `deny` effects?
3.  If you wanted to ensure a specific tag is *always* present on all resource groups, what kind of policy effect would you use?
4.  Can you assign a policy definition directly to an individual resource?

## Supports

- [[skills/cloud-devops/platform-engineering/cloud-scalability/microskills/azure-policy-definition|Azure Policy Definition]]

---
type: "medium"
title: "Azure Policy Compliance: Auditing and Remediation"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/systems-infrastructure/cloud-platforms/cloud-infrastructure/cloud-scalability/microskills/azure-policy-compliance|azure-policy-compliance]]"
related-skills:
  - "[[skills/computing/systems-infrastructure/cloud-platforms/cloud-infrastructure/cloud-scalability/cloud-scalability|cloud-scalability]]"
learning-time-in-minutes: 4
---
# Azure Policy Compliance: Auditing and Remediation

This lesson focuses on how to leverage Azure Policy for auditing compliance and automatically remediating non-compliant resources. This is a crucial step in maintaining governance and ensuring your cloud environment adheres to defined rules.

## Understanding Policy Compliance

Azure Policy allows you to enforce organizational standards and assess compliance at scale. When a policy is assigned, Azure evaluates resources against the policy's definition. This evaluation results in a compliance state, indicating whether the resource meets the policy's requirements.

There are two primary aspects to policy compliance:

*   **Auditing:** This involves identifying resources that do not comply with a policy. Azure Policy automatically audits resources when policies are assigned. You can then view these non-compliant resources to understand the extent of non-compliance.
*   **Remediation:** This is the process of bringing non-compliant resources back into compliance. Azure Policy can automate this by defining remediation tasks that automatically modify or create resources to meet the policy requirements.

## Practical Scenario: Enforcing Tagging Compliance

Let's imagine your organization has a rule that all virtual machines must have a "CostCenter" tag assigned for accurate cost allocation. We'll use Azure Policy to enforce this.

**Step 1: Create or Use an Existing Policy Definition**

You can use built-in policies or create custom ones. For this scenario, we'll use a built-in policy definition like `Require a tag on resources`.

**Step 2: Assign the Policy**

1.  Navigate to **Policy** in the Azure portal.
2.  Under **Authoring**, select **Assignments**.
3.  Click **Assign policy**.
4.  For **Scope**, choose the management group, subscription, or resource group where you want to enforce the policy.
5.  For **Policy definition**, search for and select `Require a tag on resources`.
6.  In the **Parameters** tab, specify `CostCenter` as the **Tag Name**.
7.  Click **Review + create**, then **Create**.

**Step 3: Auditing Non-Compliance**

Once the policy is assigned, Azure will begin evaluating existing resources.

1.  Go to the **Policy** blade in the Azure portal.
2.  Under **Compliance**, select **Compliances**.
3.  You'll see your assigned policy listed. Click on it.
4.  The **Compliance details** will show a breakdown of compliant and non-compliant resources. You can click on **Non-compliant** to see a list of VMs missing the "CostCenter" tag.

**Step 4: Implementing Remediation**

Now, let's automate the addition of the "CostCenter" tag to the non-compliant VMs.

1.  From the **Compliances** view of your policy assignment, you'll see a **Remediation** tab. Click on it.
2.  Click **Add remediation task**.
3.  You'll be prompted to select the policy assignment and the **type of remediation**. For this policy, the built-in remediation will add the tag if it's missing.
4.  The **Scope** will be pre-filled.
5.  You can optionally define a **Resource group** to deploy the remediation resources into, though for this simple tag addition, it's often not necessary.
6.  Click **Create**.

Azure will now create a remediation task. This task will provision an "Initiative" or "Policy" resource that runs a script to add the "CostCenter" tag to any VMs that were identified as non-compliant during the audit. You can monitor the progress of the remediation task in the **Remediation** tab.

## Practice Task

1.  Navigate to your Azure subscription.
2.  Assign the built-in Azure Policy `Default for Resource Group` to your subscription. This policy ensures that all resource groups have a "Purpose" tag.
3.  Create a new resource group without assigning the "Purpose" tag.
4.  Wait a few minutes for Azure Policy to evaluate.
5.  Go to the **Policy** blade and check the **Compliances** for the `Default for Resource Group` policy. Identify the non-compliant resource group.
6.  Create a remediation task for this policy assignment to add the "Purpose" tag to your non-compliant resource group.

## Self-Check Questions

1.  What is the primary difference between auditing and remediation in Azure Policy?
2.  When might you choose to audit a policy but not immediately remediate it?
3.  What type of Azure resource is typically created by an Azure Policy remediation task?
4.  Can you manually trigger an audit or remediation outside of the policy assignment itself?

## Supports

- [[skills/computing/systems-infrastructure/cloud-platforms/cloud-infrastructure/cloud-scalability/microskills/azure-policy-compliance|Azure Policy Compliance]]

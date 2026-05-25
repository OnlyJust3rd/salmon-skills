---
type: "medium"
title: "Tagging for Governance"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/systems-infrastructure/operations-reliability/finops/microskills/tagging-for-governance|tagging-for-governance]]"
learning-time-in-minutes: 3
---
# Tagging for Governance

In Cloud FinOps, effective tagging isn't just about organization; it's a powerful tool for enforcing policies and managing your cloud resources. By consistently applying tags, you create a structured system that allows you to automate actions, track costs accurately, and maintain compliance. This micro-skill focuses on how to leverage tagging for governance purposes.

## Why Tag for Governance?

Tags act as metadata that you attach to your cloud resources. When used for governance, these tags help you:

*   **Enforce Policies:** Automatically apply security settings, access controls, or lifecycle rules based on specific tags.
*   **Cost Allocation and Accountability:** Clearly identify ownership and usage of resources, making chargebacks and budgeting more precise.
*   **Automation:** Trigger scripts or services to perform actions on resources that meet certain tag criteria (e.g., shut down non-production environments after business hours).
*   **Resource Identification and Management:** Quickly find and manage resources based on their purpose, environment, or team.

## Practical Scenario: Enforcing Environment-Specific Policies

Imagine your organization has different policies for production and development environments. You want to ensure that only authorized personnel can access production resources and that development resources are automatically terminated after a certain period to save costs.

### Implementing the Solution

1.  **Define Tagging Strategy:** Establish a clear and consistent set of tags. For this scenario, we'll use:
    *   `Environment`: `production`, `development`, `staging`
    *   `Owner`: `team-a`, `team-b`, `devops`
    *   `Project`: `website`, `api`, `database`

2.  **Apply Tags to Resources:** When creating new resources, or when auditing existing ones, ensure they have the appropriate tags.

    *   **Example (AWS CLI):**
        ```bash
        aws ec2 run-instances \
            --image-id ami-0abcdef1234567890 \
            --instance-type t2.micro \
            --tag-specifications 'ResourceType=instance,Tags=[{Key=Environment,Value=development},{Key=Owner,Value=team-a},{Key=Project,Value=api}]'
        ```

    *   **Example (Azure CLI):**
        ```bash
        az vm create \
            --resource-group MyResourceGroup \
            --name MyVM \
            --image UbuntuLTS \
            --admin-username azureuser \
            --tags Environment=development Owner=team-a Project=api
        ```

3.  **Configure Policy Enforcement:** Use cloud provider services to enforce governance rules based on these tags.

    *   **AWS Example (IAM Policy):** You could create an IAM policy that denies certain actions (like stopping an instance) if the `Environment` tag is not `production` and the user doesn't have a specific `admin` role.
    *   **AWS Example (Resource Groups & Tagging Editor):** Use this to filter resources by tag and apply bulk actions.
    *   **Azure Example (Azure Policy):** Create an Azure Policy to deny resource creation unless specific tags like `Environment` and `Owner` are provided. You could also create a policy to enforce tags for cost management, requiring a `CostCenter` tag on all resources.
    *   **Azure Example (Automation Account):** Set up a runbook in an Automation Account to identify `development` environment VMs that have been running for more than 48 hours and automatically stop them.

## Practice Task

Choose one of the following cloud providers (AWS, Azure, or GCP):

1.  **Define a simple tagging strategy** for a hypothetical project with two environments: `development` and `production`, and two teams: `frontend` and `backend`.
2.  **Simulate tagging a resource:** Write down or use a command-line interface (if you have access) to tag a virtual machine resource with your defined strategy. For example, tag a `development` server for the `frontend` team.
3.  **Describe a governance rule** you could implement using your tags. For instance, "Prevent accidental deletion of `production` resources by non-admin users."

## Self-Check Questions

*   What is the primary benefit of using tags for governance beyond just organization?
*   If you had a tag `Environment: staging`, what kind of governance rule might be relevant for resources with this tag?
*   What are the potential consequences of inconsistent or missing tags when trying to enforce governance policies?

## Supports

- [[skills/computing/systems-infrastructure/operations-reliability/finops/microskills/tagging-for-governance|Tagging for Governance]]

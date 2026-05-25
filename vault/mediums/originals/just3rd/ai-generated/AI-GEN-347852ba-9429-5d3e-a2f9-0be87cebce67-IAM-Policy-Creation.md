---
type: "medium"
title: "IAM Policy Creation: Defining Specific Permissions"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/systems-infrastructure/cloud-platforms/cloud-networking/microskills/iam-policy-creation|iam-policy-creation]]"
learning-time-in-minutes: 3
---
# IAM Policy Creation: Defining Specific Permissions

This lesson focuses on how to create Identity and Access Management (IAM) policies to grant precise permissions for managing cloud resources. Understanding this is crucial for ensuring security and operational efficiency in your cloud environment.

## What are IAM Policies?

IAM policies are essentially **JSON documents** that define rules for granting or denying permissions to specific cloud resources. They are the backbone of access control in cloud platforms, allowing you to control *who* can do *what* on *which* resources.

A typical IAM policy structure includes:

*   **Version**: Specifies the version of the policy language.
*   **Statement**: Contains one or more individual permission statements.
    *   **Sid**: (Statement ID) A unique identifier for the statement.
    *   **Effect**: Either "Allow" or "Deny".
    *   **Action**: The specific API actions that the policy authorizes or denies (e.g., `s3:GetObject`, `ec2:RunInstances`).
    *   **Resource**: The specific cloud resources that the actions apply to (e.g., an S3 bucket ARN, an EC2 instance ID).
    *   **Principal**: (Optional, used in resource-based policies) The entity that is allowed or denied access.

## Practical Example: Granting Read-Only Access to an S3 Bucket

Imagine you have a team that needs to download files from a specific Amazon S3 bucket but should not be able to modify or delete anything. Here's how you would create an IAM policy to achieve this.

**Scenario:**
You want to grant a user group named `data-analysts` permission to *read* objects from an S3 bucket named `my-project-data-bucket`.

**IAM Policy (JSON):**

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "AllowS3ReadOnlyAccess",
            "Effect": "Allow",
            "Action": [
                "s3:GetObject",
                "s3:ListBucket"
            ],
            "Resource": [
                "arn:aws:s3:::my-project-data-bucket",
                "arn:aws:s3:::my-project-data-bucket/*"
            ]
        }
    ]
}
```

**Explanation:**

*   `"Effect": "Allow"`: This statement grants permissions.
*   `"Action": ["s3:GetObject", "s3:ListBucket"]`:
    *   `s3:GetObject` allows the user to download individual objects from the bucket.
    *   `s3:ListBucket` allows the user to see the list of objects within the bucket.
*   `"Resource": ["arn:aws:s3:::my-project-data-bucket", "arn:aws:s3:::my-project-data-bucket/*"]`:
    *   The first ARN (`arn:aws:s3:::my-project-data-bucket`) refers to the bucket itself, required for `ListBucket`.
    *   The second ARN (`arn:aws:s3:::my-project-data-bucket/*`) refers to all objects within the bucket, required for `GetObject`.

This policy, when attached to the `data-analysts` group, ensures they can only view and download files, preventing accidental deletion or modification.

## Practice Task

1.  **Identify a Scenario:** Think of a common cloud resource (e.g., an AWS EC2 instance, an Azure Virtual Machine, a GCP Compute Engine instance) and a specific, limited action you might want to grant to a user or group.
2.  **Create a Policy:** Write an IAM policy in JSON format that grants *only* that specific permission.
    *   **Example Action:** If you chose an EC2 instance, you might want to grant permission to *start* an instance. The action would be `ec2:StartInstances`.
    *   **Example Resource:** You'll need to specify the ARN for the EC2 instance(s).
3.  **Apply and Test (Conceptual):** Imagine attaching this policy to a test user or group. What would they be able to do? What would they *not* be able to do?

## Self-Check Questions

1.  What is the primary purpose of an IAM policy statement?
2.  What are the two main values for the `"Effect"` field in an IAM policy?
3.  Why is it important to specify both the bucket ARN and the object ARN (e.g., `bucket-name/*`) when granting permissions to objects in an S3 bucket?
4.  If you wanted to deny a user the ability to delete objects from a specific S3 bucket, how would you modify the `"Effect"` and `"Action"` fields in a policy statement?

## Supports

- [[skills/computing/systems-infrastructure/cloud-platforms/cloud-networking/microskills/iam-policy-creation|IAM Policy Creation]]

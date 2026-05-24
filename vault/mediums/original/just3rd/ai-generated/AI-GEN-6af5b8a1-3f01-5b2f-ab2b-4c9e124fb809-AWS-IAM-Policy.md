---
type: "medium"
title: "AWS IAM Policies: Granting Specific Permissions"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/systems-infrastructure/cloud-platforms/cloud-providers/amazon-web-services/microskills/aws-iam-policy|aws-iam-policy]]"
learning-time-in-minutes: 2
---
# AWS IAM Policies: Granting Specific Permissions

AWS Identity and Access Management (IAM) policies are the core of controlling access to your AWS resources. They define who can do what, on which resources, and under what conditions. Applying IAM policy concepts means writing and attaching policies that grant precisely the necessary permissions, adhering to the principle of least privilege.

## What are IAM Policies?

IAM policies are JSON documents that specify permissions. They are attached to IAM users, groups, or roles. A policy has statements, and each statement defines:

*   **Effect**: `Allow` or `Deny`.
*   **Action**: The specific API operations that are allowed or denied (e.g., `s3:GetObject`, `ec2:RunInstances`).
*   **Resource**: The AWS resources the action applies to (e.g., an S3 bucket ARN, an EC2 instance ID).
*   **Condition** (Optional): Criteria that must be met for the policy to apply (e.g., source IP address, specific tag).

## Practical Scenario: Granting S3 Read-Only Access

Imagine you have an application that needs to read objects from a specific S3 bucket, but should not be able to delete or modify them.

**Goal:** Create an IAM policy that allows read-only access to a particular S3 bucket.

**Policy JSON:**

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "s3:GetObject",
                "s3:ListBucket"
            ],
            "Resource": [
                "arn:aws:s3:::your-bucket-name",
                "arn:aws:s3:::your-bucket-name/*"
            ]
        }
    ]
}
```

**Explanation:**

*   `"Version": "2012-10-17"`: Specifies the policy language version.
*   `"Effect": "Allow"`: This statement grants permissions.
*   `"Action": ["s3:GetObject", "s3:ListBucket"]`: This allows two specific actions: `GetObject` (to download objects) and `ListBucket` (to list objects within the bucket).
*   `"Resource"`:
    *   `"arn:aws:s3:::your-bucket-name"`: This applies the `ListBucket` action to the bucket itself.
    *   `"arn:aws:s3:::your-bucket-name/*"`: This applies the `GetObject` action to all objects within the bucket.

This policy ensures the application can only read data, not change or delete it, from `your-bucket-name`.

## Practice Task

Create an IAM policy for an EC2 instance that allows it to describe EC2 instances (list them and view their details) but not launch new ones or terminate existing ones.

## Self-Check Questions

1.  What is the purpose of the `Effect` element in an IAM policy statement?
2.  If you wanted to allow an IAM user to only read files from an S3 bucket, which `Action` would you include in the policy?
3.  Why is it important to specify the `Resource` in an IAM policy?
4.  What does the principle of "least privilege" mean in the context of IAM policies?

## Supports

- [[skills/computing/systems-infrastructure/cloud-platforms/cloud-providers/amazon-web-services/microskills/aws-iam-policy|AWS IAM Policy]]

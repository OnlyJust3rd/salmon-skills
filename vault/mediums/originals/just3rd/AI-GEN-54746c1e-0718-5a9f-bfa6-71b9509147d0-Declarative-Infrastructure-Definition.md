---
type: "medium"
title: "Declarative Infrastructure Definition"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/systems-infrastructure/delivery-platforms/infrastructure-as-code/microskills/declarative-infrastructure-definition|declarative-infrastructure-definition]]"
related-skills:
  - "[[skills/computing/systems-infrastructure/delivery-platforms/infrastructure-as-code/infrastructure-as-code|infrastructure-as-code]]"
learning-time-in-minutes: 4
---
# Declarative Infrastructure Definition

When we talk about Infrastructure as Code (IaC), one of the fundamental principles we strive for is **declarative infrastructure definition**. This means describing *what* we want our infrastructure to look like, rather than *how* to achieve it. Think of it like telling a chef exactly what dish you want for dinner, without giving them step-by-step instructions on how to cook it.

## The Core Idea: Desired State vs. Procedural Steps

In a traditional, manual approach to managing infrastructure, we often think in terms of **imperative** or **procedural** steps. For example:

1.  Create a virtual machine.
2.  Install an operating system.
3.  Configure network settings.
4.  Install web server software.
5.  Start the web server.

This describes a sequence of actions. If something goes wrong, or if the infrastructure drifts from its intended state, we have to manually intervene or script these exact steps again.

Declarative infrastructure definition shifts this focus. Instead of listing *how* to do things, you define the **desired end state**. You declare: "I want a virtual machine running Ubuntu 22.04, with a web server installed and running, accessible at this IP address."

The IaC tool (like Terraform, Ansible, CloudFormation, etc.) then takes this declaration and figures out the most efficient and correct way to make the actual infrastructure match your desired state.

### Key Benefits of Declarative Definition

*   **Idempotency:** This is a crucial concept. A declarative configuration is idempotent, meaning applying it multiple times has the same effect as applying it once. If the infrastructure already matches the desired state, the IaC tool simply recognizes this and does nothing. If it's different, it makes the necessary changes to align it. This prevents unintended side effects from repeated runs.
*   **Reduced Complexity:** You don't need to worry about the intricate logic of *how* to create or modify resources. The IaC tool handles the underlying APIs, sequences, and error handling.
*   **Improved Readability and Maintainability:** Declarative code is often easier to read and understand because it clearly states the intended outcome. This makes it simpler to onboard new team members and manage infrastructure over time.
*   **Drift Detection and Remediation:** Because you have a single source of truth (your declarative code), you can easily detect when your live infrastructure deviates from that declared state. You can then re-apply the code to bring it back into compliance.

## How It Works in Practice

Most IaC tools use a declarative approach. You write configuration files that describe the resources you want.

Let's consider an example using **Terraform**, a popular IaC tool. We'll define a simple AWS S3 bucket.

Imagine we want an S3 bucket named `my-unique-learning-bucket-12345` to be publicly readable.

```terraform
resource "aws_s3_bucket" "example" {
  bucket = "my-unique-learning-bucket-12345" # The name of our bucket. Must be globally unique.
  acl    = "public-read"                    # This makes the bucket publicly readable.

  tags = {
    Environment = "Development"
    ManagedBy   = "Terraform"
  }
}

resource "aws_s3_bucket_website_configuration" "example" {
  bucket = aws_s3_bucket.example.id # Associate with the bucket defined above

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "error.html"
  }
}
```

**Explanation:**

*   We're not telling Terraform *how* to create an S3 bucket on AWS.
*   Instead, we're *declaring* that we want an S3 bucket resource.
*   We specify its properties: `bucket` name, its Access Control List (`acl`), and some `tags`.
*   We also declare a `aws_s3_bucket_website_configuration` to make it serve content, specifying an `index_document` and an `error_document`.

When you run `terraform apply`, Terraform will:

1.  Check if a bucket named `my-unique-learning-bucket-12345` already exists.
2.  If it exists, it will check if its `acl` is `public-read` and if the website configuration matches.
3.  If anything is different (e.g., the bucket exists but is private, or the website config is missing), Terraform will calculate the necessary changes (e.g., change the ACL, add the website configuration) and execute them.
4.  If everything already matches the declaration, it will report "No changes. Your infrastructure is up to date."

This is the essence of declarative infrastructure definition: describing the desired end state and letting the IaC tool manage the "how."

## Mistakes to Avoid

*   **Mixing Declarative and Imperative Logic:** While some tools allow for scripting within declarative configurations, overuse can break idempotency and make management complex. Stick to the declarative intent as much as possible.
*   **Vague Declarations:** Be specific. If you define a server, specify its OS, size, network settings, and required software. Ambiguity leads to unexpected outcomes.
*   **Not Understanding the Underlying Provider:** While the tool abstracts away much of the complexity, understanding how your cloud provider (AWS, Azure, GCP) or infrastructure system (Kubernetes, Docker) works is still important for effective declarative definition.

By focusing on defining the desired state, you leverage the power of IaC tools to build and manage your infrastructure efficiently, reliably, and reproducibly.

## Supports

- [[skills/computing/systems-infrastructure/delivery-platforms/infrastructure-as-code/microskills/declarative-infrastructure-definition|Declarative Infrastructure Definition]]

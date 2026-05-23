---
type: "medium"
title: "Mastering Terraform Commands: init, plan, apply, destroy"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/systems-infrastructure/platform-engineering/infrastructure-as-code/microskills/terraform-commands|terraform-commands]]"
learning-time-in-minutes: 4
---
# Mastering Terraform Commands: init, plan, apply, destroy

This lesson focuses on the fundamental Terraform CLI commands you'll use to provision and manage your infrastructure as code. Understanding these commands is crucial for applying Terraform effectively.

## The Terraform Workflow

Terraform operates on a declarative model. You define your desired infrastructure state in configuration files, and Terraform works to make that state a reality. The core commands facilitate this process.

### 1. `terraform init`

This is the first command you run in a new Terraform project directory or after fetching remote modules.

**Purpose:**
*   Initializes a Terraform working directory.
*   Downloads provider plugins required by your configuration.
*   Initializes backend configuration, which stores the state of your infrastructure.

**When to use:**
*   Every time you start a new Terraform project.
*   After cloning a Terraform project from a repository.
*   When you add new providers to your configuration.
*   When you change backend configuration.

**How it works:**
Terraform reads your configuration files (typically `.tf` files) to identify the providers you've declared (e.g., AWS, Azure, Google Cloud). It then downloads the appropriate plugin binaries for your operating system and architecture into a `.terraform` subdirectory.

**Example:**
Navigate to your Terraform project directory in your terminal and run:

```bash
terraform init
```

You'll see output indicating the initialization of the backend and the downloading of provider plugins.

### 2. `terraform plan`

This command allows you to preview the changes Terraform will make to your infrastructure *before* you commit to them.

**Purpose:**
*   Generates an execution plan.
*   Shows you exactly what actions Terraform will take to reach the desired state defined in your configuration.
*   Helps catch errors and unexpected changes before they affect your live infrastructure.

**When to use:**
*   Before every `terraform apply`.
*   To audit planned changes.
*   To understand how your configuration changes translate into infrastructure modifications.

**How it works:**
Terraform reads your current infrastructure state (usually from a state file) and compares it with your desired state defined in your configuration files. It then calculates the differences and produces a plan detailing which resources will be created, updated, or destroyed.

**Example:**
After running `terraform init` and writing some `.tf` files, run:

```bash
terraform plan
```

The output will be a detailed list of changes. For example, it might show `+ create` for a new resource, `~ update in-place` for an existing resource, or `- destroy` for a resource that will be removed.

### 3. `terraform apply`

This command executes the changes outlined in a Terraform plan.

**Purpose:**
*   Applies the proposed infrastructure changes to your cloud provider.
*   Creates, updates, or destroys resources to match your desired configuration.

**When to use:**
*   After reviewing a `terraform plan` and confirming the changes are correct.
*   To provision or update your infrastructure.

**How it works:**
When you run `terraform apply`, it first creates an execution plan if one isn't explicitly provided. It then prompts you to confirm the changes. Once confirmed, it communicates with your configured cloud provider APIs to make the actual infrastructure modifications.

**Example:**
To apply the changes after reviewing the plan:

```bash
terraform apply
```

Terraform will show you the plan again and ask for confirmation. Type `yes` and press Enter to proceed.

You can also directly apply a previously saved plan:

```bash
terraform apply plan.tfplan
```

### 4. `terraform destroy`

This command tears down the infrastructure managed by Terraform.

**Purpose:**
*   Destroys all the resources managed by the current Terraform configuration.
*   Safely removes your infrastructure from your cloud provider.

**When to use:**
*   When you no longer need the infrastructure managed by a Terraform configuration.
*   For cleaning up environments during development or testing.

**How it works:**
Similar to `apply`, `destroy` first generates a plan of resources to be destroyed. It then prompts for confirmation before proceeding to remove the resources from your cloud provider in the correct order to avoid dependency issues.

**Example:**
To destroy the infrastructure:

```bash
terraform destroy
```

Terraform will show you which resources will be destroyed and ask for confirmation. Type `yes` and press Enter to proceed.

## Idempotency and the Commands

A key principle of Infrastructure as Code, and Terraform specifically, is **idempotency**. This means that running a command multiple times should produce the same result without unintended side effects.

*   `terraform init`: Idempotent. Running it multiple times on an initialized project typically has no effect or ensures plugins are up-to-date.
*   `terraform plan`: Idempotent. It only reads state and configuration to show what *would* happen.
*   `terraform apply`: Idempotent in its *goal*. If you run `apply` and the infrastructure already matches the configuration, it will report that no changes are needed. If there were drift (manual changes to infrastructure), `apply` will detect and correct it.
*   `terraform destroy`: Idempotent in its *goal*. If you run `destroy` on infrastructure that has already been destroyed, it will report that there's nothing to destroy.

By understanding and consistently using these four core commands, you gain control over your infrastructure provisioning process, ensuring predictability and safety.

## Supports

- [[skills/computing/systems-infrastructure/platform-engineering/infrastructure-as-code/microskills/terraform-commands|Terraform Commands]]

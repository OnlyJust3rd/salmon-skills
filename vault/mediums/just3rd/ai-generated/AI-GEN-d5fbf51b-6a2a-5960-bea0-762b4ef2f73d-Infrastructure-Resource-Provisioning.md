---
type: "medium"
title: "Provisioning Infrastructure with Terraform"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/cloud-devops/platform-engineering/infrastructure-as-code/microskills/infrastructure-resource-provisioning|Infrastructure Resource Provisioning]]"
---
# Provisioning Infrastructure with Terraform

This lesson focuses on the practical application of Terraform to create and manage infrastructure resources. We'll explore how Terraform interacts with cloud providers and how to define and deploy basic infrastructure components.

## Core Idea: Declarative Infrastructure

Terraform operates on a **declarative** model. Instead of writing a series of commands to build infrastructure step-by-step, you declare the *desired state* of your infrastructure in configuration files. Terraform then figures out the necessary steps to reach that state. This approach is crucial for managing infrastructure as code, ensuring consistency and repeatability.

## Your First Terraform Configuration

Let's start by provisioning a simple resource. For this example, we'll use Amazon Web Services (AWS) to create a virtual private cloud (VPC).

### Prerequisites

*   **Terraform Installed:** Ensure you have Terraform installed on your local machine. You can download it from the [official Terraform website](https://www.terraform.io/downloads.html).
*   **AWS Account & Credentials:** You'll need an AWS account and have your AWS credentials configured. This can be done via environment variables, a shared credentials file, or an IAM role.

### Creating the Configuration File

Create a new directory for your Terraform project and inside it, create a file named `main.tf`.

```terraform
# Configure the AWS Provider
provider "aws" {
  region = "us-east-1" # Choose your desired AWS region
}

# Define a VPC resource
resource "aws_vpc" "main" {
  cidr_block = "10.0.0.0/16" # The IP address range for the VPC

  tags = {
    Name = "my-terraform-vpc"
  }
}

# Define an output for the VPC ID
output "vpc_id" {
  description = "The ID of the created VPC"
  value       = aws_vpc.main.id
}
```

**Explanation:**

*   **`provider "aws"`**: This block tells Terraform to use the AWS provider. We specify the AWS region where our resources will be created.
*   **`resource "aws_vpc" "main"`**: This block declares a resource of type `aws_vpc`. The first argument (`aws_vpc`) is the resource type, and the second argument (`"main"`) is a local name for this resource within your Terraform configuration.
*   **`cidr_block = "10.0.0.0/16"`**: This is an argument for the `aws_vpc` resource, defining the primary IPv4 address range for the VPC.
*   **`tags = { Name = "my-terraform-vpc" }`**: Tags are key-value pairs used to organize and identify AWS resources.
*   **`output "vpc_id"`**: This block defines an output value. After Terraform applies the configuration, it will display the ID of the created VPC.

### Applying the Configuration

Navigate to your project directory in your terminal and run the following commands:

1.  **`terraform init`**: This command initializes the Terraform working directory. It downloads the necessary provider plugins (in this case, the AWS provider) and sets up the backend for state management.

    ```bash
    terraform init
    ```

2.  **`terraform plan`**: This command generates an execution plan. It shows you what Terraform will do to achieve the desired state defined in your configuration files, without actually making any changes to your infrastructure.

    ```bash
    terraform plan
    ```

    You should see output indicating that a VPC will be created and an output value (`vpc_id`) will be displayed.

3.  **`terraform apply`**: This command applies the changes to your infrastructure. Terraform will prompt you to confirm the plan before proceeding. Type `yes` and press Enter.

    ```bash
    terraform apply
    ```

    After the apply command completes, you will see the output value `vpc_id` printed in your terminal. You can then log into your AWS console and verify that the VPC has been created.

## Managing Infrastructure

Terraform's power lies in its ability to manage the lifecycle of your infrastructure.

### Modifying Resources

Let's say you want to add a description to your VPC. Modify the `main.tf` file:

```terraform
# Configure the AWS Provider
provider "aws" {
  region = "us-east-1"
}

# Define a VPC resource
resource "aws_vpc" "main" {
  cidr_block = "10.0.0.0/16"

  tags = {
    Name        = "my-terraform-vpc"
    Description = "VPC managed by Terraform" # Added description
  }
}

# Define an output for the VPC ID
output "vpc_id" {
  description = "The ID of the created VPC"
  value       = aws_vpc.main.id
}
```

Now, run `terraform plan` again. You'll see that Terraform detects the change and plans to update the existing VPC. Running `terraform apply` will apply this modification.

### Destroying Resources

To remove the infrastructure you've created, use the `destroy` command:

```bash
terraform destroy
```

Terraform will again show you a plan of what will be destroyed. Confirm with `yes` to remove the VPC.

## Idempotency

A key principle in Infrastructure as Code is **idempotency**. This means that applying the same configuration multiple times should result in the same final state, without unintended side effects. Terraform achieves idempotency by:

1.  **State Management:** Terraform keeps track of the real-world resources it manages in a **state file** (usually `terraform.tfstate`). This file acts as a mapping between your configuration and the actual resources in your cloud provider.
2.  **Diffing:** Before making changes, Terraform compares your desired state (defined in your `.tf` files) with the current state (recorded in the state file). It then calculates the minimum set of actions required to bridge any differences.

This ensures that `terraform apply` can be run repeatedly, and only necessary changes will be made.

## Next Steps

This lesson covered the basics of provisioning a single resource. In future lessons, you'll learn about:

*   Provisioning multiple interconnected resources (e.g., subnets, security groups, EC2 instances).
*   Using modules to organize and reuse your Terraform code.
*   Managing Terraform state in remote backends for collaboration.

## Supports

- [[skills/cloud-devops/platform-engineering/infrastructure-as-code/microskills/infrastructure-resource-provisioning|Infrastructure Resource Provisioning]]

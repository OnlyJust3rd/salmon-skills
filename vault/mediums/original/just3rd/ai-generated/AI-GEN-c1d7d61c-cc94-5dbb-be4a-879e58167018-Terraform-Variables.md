---
type: "medium"
title: "Terraform Variables: Parameterizing Your Infrastructure"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/systems-infrastructure/delivery-platforms/infrastructure-as-code/microskills/terraform-variables|terraform-variables]]"
learning-time-in-minutes: 4
---
# Terraform Variables: Parameterizing Your Infrastructure

As you work with Infrastructure as Code (IaC) using Terraform, you'll quickly realize the need for flexibility. Hardcoding values like instance sizes, region names, or security group IDs directly into your configuration files makes them rigid and difficult to reuse. This is where **Terraform Variables** come into play. They allow you to parameterize your Terraform code, making it more dynamic, readable, and maintainable.

## What are Terraform Variables?

Terraform Variables are placeholders for values that you want to inject into your Terraform configurations at runtime. Instead of writing a specific value like `"t2.micro"` for an EC2 instance type, you can use a variable like `${var.instance_type}`. This variable can then be assigned a value when you run Terraform commands, or through external files.

Think of variables as function arguments in programming. They allow you to write generic code that can be adapted to different situations by simply changing the input values.

## Why Use Variables?

*   **Reusability:** Write a single Terraform module or configuration and deploy it with different settings (e.g., different environments like dev, staging, production).
*   **Readability:** Your configuration files become cleaner and easier to understand when complex or repetitive values are abstracted away.
*   **Security:** Sensitive information, such as database passwords or API keys, can be managed more securely using variables and input mechanisms like environment variables or secure credential files, rather than embedding them directly in code.
*   **Consistency:** Enforce standard configurations across your infrastructure by defining acceptable values for variables.

## Types of Variables

Terraform supports several types of variables:

*   **Input Variables:** These are the most common type. You define them in your `.tf` files and can provide values through command-line flags, environment variables, or `.tfvars` files.
*   **Output Values:** While not strictly variables in the same sense as input variables, output values are defined in your Terraform code and expose information about your provisioned infrastructure. They are often used to pass values to other systems or for informational purposes. For this lesson, we'll focus on input variables.

## Defining Input Variables

You define input variables using the `variable` block in your Terraform files (typically in files named `variables.tf` for organization, but they can be defined anywhere in your `.tf` files).

```terraform
variable "aws_region" {
  description = "The AWS region to deploy resources in."
  type        = string
  default     = "us-east-1" # Optional default value
}

variable "instance_type" {
  description = "The EC2 instance type to use."
  type        = string
}

variable "tags" {
  description = "A map of tags to assign to resources."
  type        = map(string)
  default     = {
    Environment = "Development"
    ManagedBy   = "Terraform"
  }
}
```

Let's break down the components of a `variable` block:

*   `variable "variable_name"`: This declares a variable with the given name.
*   `description`: A human-readable explanation of what the variable represents. This is highly recommended for good documentation.
*   `type`: Specifies the expected data type of the variable (e.g., `string`, `number`, `bool`, `list`, `map`, `object`, `set`). If not specified, Terraform infers the type.
*   `default`: An optional value that Terraform will use if no other value is provided for the variable. If a variable has a `default` and a value is provided, the provided value takes precedence.

## Using Variables

Once defined, you reference variables within your Terraform configuration using the `var` prefix:

```terraform
resource "aws_instance" "example" {
  ami           = "ami-0abcdef1234567890" # Replace with a valid AMI ID for your region
  instance_type = var.instance_type
  region        = var.aws_region
  tags          = var.tags
}
```

## Providing Variable Values

There are several ways to provide values for your input variables:

### 1. Using `*.tfvars` Files

This is the most common and recommended method for providing values, especially for multiple variables. Create files with the `.tfvars` extension (e.g., `dev.tfvars`, `prod.tfvars`).

**`dev.tfvars`:**

```hcl
instance_type = "t3.micro"
aws_region    = "us-west-2"
```

When you run Terraform, you can specify which `.tfvars` file to use:

```bash
terraform plan -var-file="dev.tfvars"
```

If you have a file named `terraform.tfvars` in your root directory, Terraform will automatically load it. You can also load multiple `.tfvars` files; values from later files will override earlier ones.

### 2. Command-Line Flags

You can set individual variable values directly on the command line using the `-var` flag:

```bash
terraform plan -var="instance_type=t3.medium" -var="aws_region=eu-central-1"
```

This is useful for quick overrides or for automation scripts.

### 3. Environment Variables

Terraform can automatically pick up variable values from environment variables. The naming convention is `TF_VAR_<variable_name>`.

For example, to set the `instance_type` variable:

```bash
export TF_VAR_instance_type="t4g.small"
terraform plan
```

This is particularly useful in CI/CD pipelines.

### 4. Sensitive Variables

For sensitive data like passwords, use the `sensitive = true` argument in the `variable` block. Terraform will then redact the values from `terraform plan` and `terraform apply` output.

```terraform
variable "db_password" {
  description = "The password for the database."
  type        = string
  sensitive   = true
}
```

You should provide sensitive variable values through secure mechanisms like environment variables or a dedicated secrets management tool, not by typing them directly into a `.tfvars` file if that file is checked into version control.

## Example Scenario: Provisioning a simple EC2 Instance

Let's put it all together.

**`main.tf`:**

```terraform
resource "aws_instance" "webserver" {
  ami           = "ami-0abcdef1234567890" # Example AMI ID for Amazon Linux 2 in us-east-1
  instance_type = var.web_instance_type
  region        = var.aws_region
  subnet_id     = var.subnet_id

  tags = merge(
    var.common_tags,
    {
      Name = "WebServer-${var.environment}"
    }
  )
}

output "instance_id" {
  description = "The ID of the web server instance."
  value       = aws_instance.webserver.id
}

output "instance_public_ip" {
  description = "The public IP address of the web server instance."
  value       = aws_instance.webserver.public_ip
}
```

**`variables.tf`:**

```terraform
variable "aws_region" {
  description = "AWS region for deployment."
  type        = string
  default     = "us-east-1"
}

variable "web_instance_type" {
  description = "EC2 instance type for the web server."
  type        = string
  default     = "t2.micro"
}

variable "subnet_id" {
  description = "The ID of the subnet to deploy the instance into."
  type        = string
}

variable "environment" {
  description = "The environment name (e.g., dev, staging, prod)."
  type        = string
  default     = "dev"
}

variable "common_tags" {
  description = "A map of common tags to apply to all resources."
  type        = map(string)
  default = {
    Project     = "MyWebApp"
    ManagedBy   = "Terraform"
  }
}
```

**`terraform.tfvars`:**

```hcl
subnet_id = "subnet-0123456789abcdef0" # Replace with a valid subnet ID from your AWS account
environment = "staging"
aws_region = "us-west-2"
```

**Steps to Run:**

1.  **Initialize Terraform:**
    ```bash
    terraform init
    ```
2.  **Review the plan:**
    ```bash
    terraform plan
    ```
    Notice how `instance_type` defaults to `t2.micro`, but `subnet_id` and `environment` are taken from `terraform.tfvars`.
3.  **Apply the changes:**
    ```bash
    terraform apply
    ```

If you wanted to deploy to production with a different instance type, you could:

*   Create a `prod.tfvars` file:
    ```hcl
    subnet_id = "subnet-abcdef0123456789" # Different subnet for prod
    environment = "prod"
    web_instance_type = "t3.medium"
    ```
*   Then run:
    ```bash
    terraform apply -var-file="prod.tfvars"
    ```

By mastering Terraform variables, you've taken a significant step towards writing more robust, flexible, and maintainable infrastructure code.

## Supports

- [[skills/computing/systems-infrastructure/delivery-platforms/infrastructure-as-code/microskills/terraform-variables|Terraform Variables]]

---
type: "medium"
title: "Terraform Data Source Configuration"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/systems-infrastructure/delivery-platforms/infrastructure-as-code/microskills/terraform-data-source-configuration|terraform-data-source-configuration]]"
related-skills:
  - "[[skills/computing/systems-infrastructure/delivery-platforms/infrastructure-as-code/infrastructure-as-code|infrastructure-as-code]]"
learning-time-in-minutes: 4
---
# Terraform Data Source Configuration

In Infrastructure as Code, we often need to reference existing resources or external information without managing them directly within our Terraform configuration. This is where **data sources** come in. They allow us to query and retrieve dynamic data that can then be used to configure other resources. This is a crucial step in applying Infrastructure as Code principles effectively.

## What are Data Sources?

Terraform data sources are blocks that fetch information from outside your Terraform configuration. Think of them as read-only queries to your cloud provider, an external API, or even another Terraform state. You don't manage the lifecycle of the resource queried by a data source; you simply use its attributes.

This is different from a `resource` block, which declares infrastructure that Terraform *manages* and provisions.

## Why Use Data Sources?

Data sources are invaluable for:

*   **Discovering Existing Resources:** Finding the ID, IP address, or other attributes of an existing virtual machine, database, or security group.
*   **Accessing Dynamic Information:** Retrieving the latest AMI ID for an operating system, the current region's availability zones, or external IP addresses.
*   **Configuration Flexibility:** Making your configurations more dynamic and less hardcoded, allowing them to adapt to changes outside of your direct control.
*   **Referencing Other Terraform Configurations:** While more advanced, data sources can query other Terraform state files, enabling a modular approach.

## Configuring a Data Source

The syntax for a data source is similar to a resource block:

```terraform
data "<PROVIDER>_<TYPE>" "<NAME>" {
  # Arguments to query the data source
}
```

*   `<PROVIDER>_<TYPE>`: This specifies the type of data you're looking for. For example, `aws_ami` to find an Amazon Machine Image, or `google_compute_network` to get details about a Google Cloud network.
*   `<NAME>`: A local name you assign to this data source within your Terraform configuration. This name is used to reference the data.

### Example: Retrieving an AWS AMI ID

Let's say you want to launch an EC2 instance using the latest Amazon Linux 2 AMI. Instead of hardcoding an AMI ID (which changes over time), you can use the `aws_ami` data source.

```terraform
provider "aws" {
  region = "us-east-1"
}

data "aws_ami" "amazon_linux_2" {
  most_recent = true
  owners      = ["amazon"] # The AWS account that owns the AMI

  filter {
    name   = "name"
    values = ["amzn2-ami-hvm-*-x86_64-gp2"] # Pattern to match the AMI name
  }

  filter {
    name   = "virtualization-type"
    values = ["hvm"]
  }
}

resource "aws_instance" "example" {
  ami           = data.aws_ami.amazon_linux_2.id # Using the retrieved AMI ID
  instance_type = "t2.micro"

  tags = {
    Name = "ExampleInstance"
  }
}
```

**How this works:**

1.  **`provider "aws"`**: We configure the AWS provider.
2.  **`data "aws_ami" "amazon_linux_2"`**: This block tells Terraform to look for an AMI.
    *   `most_recent = true`: Instructs Terraform to find the most recent matching AMI.
    *   `owners = ["amazon"]`: We specify that the AMI is owned by the "amazon" account.
    *   `filter`: We use filters to narrow down the search. The `name` filter uses a wildcard (`*`) to match any version of the `amzn2-ami-hvm-*-x86_64-gp2` AMI, and the `virtualization-type` filter ensures we get an HVM (Hardware Virtual Machine) AMI.
3.  **`resource "aws_instance" "example"`**: When defining the EC2 instance, we set the `ami` argument to `data.aws_ami.amazon_linux_2.id`. This dynamically pulls the ID of the AMI found by the data source.

When you run `terraform plan` or `terraform apply`, Terraform will first execute the `data.aws_ami.amazon_linux_2` block to discover the AMI ID, and then use that ID to provision the EC2 instance.

## Accessing Data Source Attributes

After a data source is evaluated, it exposes its attributes. You access these attributes using the dot notation: `data.<PROVIDER>_<TYPE>.<NAME>.<ATTRIBUTE>`.

In the example above, `data.aws_ami.amazon_linux_2.id` accesses the `id` attribute of the data source named `amazon_linux_2` of type `aws_ami`.

## Common Data Sources and Their Use Cases

| Data Source Type        | Provider | Description                                                              | Example Use Case                                                                 |
| :---------------------- | :------- | :----------------------------------------------------------------------- | :------------------------------------------------------------------------------- |
| `aws_ami`               | AWS      | Finds Amazon Machine Images.                                             | Dynamically select the latest OS image for EC2 instances.                        |
| `aws_subnet_ids`        | AWS      | Retrieves a list of subnet IDs within a VPC.                             | Distribute resources across multiple subnets for high availability.              |
| `google_compute_network`| GCP      | Retrieves details about a Google Cloud network.                          | Reference an existing VPC for creating new resources within it.                  |
| `azurerm_resource_group`| Azure    | Retrieves details about an Azure Resource Group.                         | Get the location or ID of an existing resource group.                            |
| `http`                  | Various  | Fetches data from a specified HTTP URL.                                  | Get configuration details from an external API or service.                       |
| `external`              | Various  | Executes an external program and returns its JSON output.                | Integrate with custom scripts or command-line tools for dynamic data.            |

## Key Considerations

*   **Immutability:** Data sources are read-only. They do not create, update, or delete infrastructure.
*   **Dependencies:** Terraform automatically understands dependencies. If a resource block uses an attribute from a data source, that data source will be evaluated *before* the resource is provisioned.
*   **Provider Configuration:** Ensure your provider is correctly configured for the region or endpoint where the data resides.

By mastering data sources, you can write more robust, adaptable, and maintainable Infrastructure as Code.

## Supports

- [[skills/computing/systems-infrastructure/delivery-platforms/infrastructure-as-code/microskills/terraform-data-source-configuration|Terraform Data Source Configuration]]

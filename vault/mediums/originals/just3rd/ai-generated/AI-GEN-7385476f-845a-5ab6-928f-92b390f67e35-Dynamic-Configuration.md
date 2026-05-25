---
type: "medium"
title: "Dynamic Configuration with Terraform Data Sources"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/systems-infrastructure/delivery-platforms/infrastructure-as-code/microskills/dynamic-configuration|dynamic-configuration]]"
learning-time-in-minutes: 4
---
# Dynamic Configuration with Terraform Data Sources

In Infrastructure as Code, static configurations can become cumbersome. Imagine needing to deploy a new EC2 instance and wanting to use the latest Amazon Machine Image (AMI) ID. Hardcoding this ID means you'd have to manually update your Terraform code every time a new AMI is released. This is where **dynamic configuration** using Terraform data sources comes in.

Data sources allow Terraform to fetch information from external systems or discover existing resources, making your configurations more adaptable and reducing the need for manual updates. This lesson focuses on how to leverage data sources to achieve dynamic configuration.

## What are Data Sources?

Terraform data sources are blocks that fetch configuration values from outside Terraform. This "outside" can mean:

*   **Existing Infrastructure:** Information about resources already managed by Terraform or created manually.
*   **External Services:** Details from cloud providers, configuration management tools, or other APIs.

The key benefit of using data sources is that they provide information that can be used in your Terraform resources. Instead of hardcoding values, you can dynamically retrieve them, leading to more robust and maintainable infrastructure code.

## When to Use Data Sources for Dynamic Configuration

You'll want to use data sources when:

*   You need to reference information that changes frequently (e.g., AMI IDs, latest security group IDs).
*   You want to query existing resources to get their attributes (e.g., the IP address of an existing server).
*   You need to consume data from an external source that isn't directly managed by your current Terraform configuration.
*   You aim to make your configurations reusable across different environments without extensive manual parameterization.

## How to Use Data Sources

The general structure for using a data source in Terraform is as follows:

```terraform
data "data_source_type" "name" {
  # Arguments to specify what data to retrieve
}
```

Once the data is retrieved, you can reference its attributes using `data.<data_source_type>.<name>.<attribute>`.

### Example: Retrieving the Latest Ubuntu AMI

Let's say you want to launch an EC2 instance and always use the latest Ubuntu LTS AMI available in your AWS region.

First, you define a data source to find this AMI. The `aws_ami` data source is perfect for this.

```terraform
# main.tf

provider "aws" {
  region = "us-east-1" # Specify your desired region
}

data "aws_ami" "ubuntu" {
  most_recent = true
  owners      = ["099720109477"] # Canonical's AWS account ID for Ubuntu

  filter {
    name   = "name"
    values = ["ubuntu/images/hvm-ssd/ubuntu-focal-20.04-amd64-server-*"]
  }

  filter {
    name   = "virtualization-type"
    values = ["hvm"]
  }
}

resource "aws_instance" "example" {
  ami           = data.aws_ami.ubuntu.id # Dynamically reference the AMI ID
  instance_type = "t2.micro"

  tags = {
    Name = "DynamicUbuntuInstance"
  }
}

output "instance_ami_id" {
  description = "The AMI ID used for the EC2 instance."
  value       = data.aws_ami.ubuntu.id
}
```

**Explanation:**

1.  **`provider "aws"`**: Configures the AWS provider, specifying the region.
2.  **`data "aws_ami" "ubuntu"`**: This block declares a data source named `ubuntu` of type `aws_ami`.
    *   `most_recent = true`: Tells Terraform to find the most recent AMI that matches the criteria.
    *   `owners = ["099720109477"]`: Filters AMIs to only those owned by Canonical, the official provider of Ubuntu images.
    *   `filter`: These blocks further refine the search. We're looking for an Ubuntu 20.04 LTS (Focal) 64-bit server image.
3.  **`resource "aws_instance" "example"`**: This defines an EC2 instance.
    *   `ami = data.aws_ami.ubuntu.id`: This is the crucial part. Instead of a hardcoded AMI ID, we're using `data.aws_ami.ubuntu.id`. Terraform will first execute the data source, retrieve the latest Ubuntu AMI ID, and then use that ID to create the `aws_instance`.
4.  **`output "instance_ami_id"`**: This output will show you the AMI ID that was dynamically selected.

When you run `terraform plan` or `terraform apply` with this configuration:

1.  Terraform will first query AWS to find the most recent Ubuntu AMI matching the filters.
2.  It will then use the discovered AMI ID to configure the EC2 instance.

This makes your infrastructure definition resilient to AMI updates, ensuring you're always deploying with the latest stable version.

### Example: Getting an Existing Security Group ID

Suppose you have a pre-existing security group in your VPC and want to associate new resources with it without hardcoding its ID.

```terraform
# main.tf

provider "aws" {
  region = "us-east-1"
}

data "aws_security_group" "existing_web_sg" {
  name = "webserver-sg" # Name of the existing security group
  vpc_id = "vpc-0123456789abcdef0" # ID of the VPC it belongs to (optional but good practice)
}

resource "aws_instance" "web_server" {
  ami           = "ami-0abcdef1234567890" # Example AMI ID
  instance_type = "t2.micro"
  vpc_security_group_ids = [data.aws_security_group.existing_web_sg.id] # Assign existing SG

  tags = {
    Name = "WebServerWithExistingSG"
  }
}
```

**Explanation:**

*   The `data "aws_security_group" "existing_web_sg"` block searches for a security group named "webserver-sg" within a specific VPC.
*   `vpc_security_group_ids = [data.aws_security_group.existing_web_sg.id]`: The ID retrieved by the data source is then directly assigned to the `vpc_security_group_ids` argument of the `aws_instance` resource.

This ensures that even if the security group ID changes (though less common for existing SGs), your Terraform code will adapt as long as the name and VPC remain the same.

## Common Pitfalls and Best Practices

*   **Data Source Not Found:** If a data source cannot find the specified resource or data, Terraform will error. Always ensure your filters are accurate and the resource actually exists.
*   **Provider Configuration:** Data sources often rely on the provider being correctly configured (region, credentials, etc.).
*   **State Management:** Data sources that query existing resources can sometimes lead to issues if those resources are managed by a different Terraform state or are modified outside of Terraform in a way that breaks the data source's query.
*   **Referential Integrity:** When using data sources to link resources, ensure that the referenced data is stable or that your configuration handles potential changes gracefully.

By incorporating data sources, you significantly enhance the flexibility and maintainability of your Infrastructure as Code, moving away from static definitions towards dynamic, self-updating configurations.

## Supports

- [[skills/computing/systems-infrastructure/delivery-platforms/infrastructure-as-code/microskills/dynamic-configuration|Dynamic Configuration]]

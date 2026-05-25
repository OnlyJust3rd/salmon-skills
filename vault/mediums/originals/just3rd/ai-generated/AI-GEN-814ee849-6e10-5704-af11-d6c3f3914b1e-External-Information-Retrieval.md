---
type: "medium"
title: "Fetching External Data with Terraform Data Sources"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/systems-infrastructure/delivery-platforms/infrastructure-as-code/microskills/external-information-retrieval|external-information-retrieval]]"
learning-time-in-minutes: 4
---
# Fetching External Data with Terraform Data Sources

In Infrastructure as Code, you often need information that isn't directly managed by your Terraform configuration. This could be details about existing cloud resources, data from external services, or even values calculated by other tools. Terraform's **data sources** are your key to fetching this external information and making it available within your configurations. This allows you to build dynamic infrastructure that adapts to your environment.

## What are Data Sources?

Data sources in Terraform act like a read-only interface to information. You declare a data source block, specify the type of data you want to retrieve, and provide arguments to identify the specific information. Once declared, Terraform will query the specified source during the `terraform plan` or `terraform apply` phase and populate attributes within the data source block with the retrieved data.

This is different from Terraform **resources**, which are used to *create*, *update*, and *delete* infrastructure. Data sources are purely for *reading*.

## When to Use Data Sources

Consider using data sources when:

*   You need to reference existing cloud resources that were provisioned outside of your current Terraform workspace (e.g., a pre-existing VPC, a shared security group, an existing database instance).
*   You need information about your cloud provider's regions, availability zones, or specific service limits.
*   You want to dynamically determine values based on external context, like the latest AMI ID for a particular operating system.
*   You need to integrate with external systems or APIs that provide configuration data.

## Core Idea: The `data` Block

The fundamental structure for using a data source is the `data` block:

```terraform
data "data_source_type" "data_source_name" {
  # Configuration arguments to identify the data
  argument1 = "value1"
  argument2 = "value2"
  # ...
}
```

*   `data_source_type`: This specifies the kind of data you're trying to retrieve. Examples include `aws_ami`, `aws_subnet`, `google_compute_network`, `azurerm_resource_group`.
*   `data_source_name`: A local name you give to this data source instance within your Terraform configuration. This is how you'll refer to it later.
*   `argument1`, `argument2`, etc.: These are specific to the `data_source_type` and help Terraform pinpoint the exact piece of information you need.

## Example: Fetching an AWS AMI ID

Let's say you want to launch an EC2 instance using the latest Ubuntu AMI. You don't want to hardcode the AMI ID because it changes frequently. You can use the `aws_ami` data source to find it dynamically.

**Terraform Configuration (`main.tf`):**

```terraform
provider "aws" {
  region = "us-east-1"
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

resource "aws_instance" "web_server" {
  ami           = data.aws_ami.ubuntu.id
  instance_type = "t2.micro"

  tags = {
    Name = "HelloWorld"
  }
}
```

**Explanation:**

1.  **`provider "aws"`**: Configures the AWS provider.
2.  **`data "aws_ami" "ubuntu"`**: Declares a data source of type `aws_ami` and names it `ubuntu`.
    *   `most_recent = true`: Tells Terraform to find the most recently published AMI matching the criteria.
    *   `owners = ["099720109477"]`: Specifies that we're looking for AMIs owned by Canonical (the official Ubuntu provider).
    *   **`filter` blocks**: These are crucial for narrowing down the search.
        *   The first filter looks for AMIs whose `name` matches the pattern `ubuntu/images/hvm-ssd/ubuntu-focal-20.04-amd64-server-*`. This targets Ubuntu 20.04 LTS (Focal Fossa) 64-bit AMIs.
        *   The second filter ensures we get AMIs with `hvm` virtualization.
3.  **`resource "aws_instance" "web_server"`**: This is a standard EC2 instance resource.
    *   **`ami = data.aws_ami.ubuntu.id`**: This is where the magic happens. We reference the `id` attribute of the `ubuntu` data source. Terraform will resolve `data.aws_ami.ubuntu.id` to the actual AMI ID found by the data source *before* it attempts to create the EC2 instance.

**How it Works During Execution:**

1.  **`terraform plan`**:
    *   Terraform detects the `data "aws_ami" "ubuntu"` block.
    *   It communicates with the AWS API to find the AMI matching the specified filters.
    *   It stores the retrieved AMI ID (e.g., `ami-0abcdef1234567890`).
    *   It then evaluates the `aws_instance` resource, substituting `data.aws_ami.ubuntu.id` with the found AMI ID.
    *   The plan shows that an EC2 instance will be created using that specific AMI.

2.  **`terraform apply`**:
    *   The process is similar to `plan`. Terraform fetches the AMI ID.
    *   It then proceeds to create the EC2 instance using the determined AMI ID.

## Accessing Data Source Attributes

Once a data source is defined and its data is fetched, you can access its attributes using the `data.<data_source_type>.<data_source_name>.<attribute_name>` syntax.

In the example above, `data.aws_ami.ubuntu.id` accesses the `id` attribute of the `ubuntu` data source. Other common attributes for `aws_ami` include `name`, `architecture`, `creation_date`, etc. Always refer to the specific Terraform provider documentation for the available attributes of each data source.

## Practical Considerations

*   **Provider Documentation is Your Friend**: Every data source has specific arguments and attributes. Always consult the official Terraform provider documentation (e.g., AWS Provider, Google Cloud Provider, Azure Provider) to understand what data sources are available and how to use them.
*   **Remote State**: If you're referencing resources managed by another Terraform configuration (in a different state file), you'll need to use the `terraform_remote_state` data source to access that state and its outputs.
*   **Error Handling**: If a data source fails to find the requested information, `terraform plan` or `apply` will error out. Ensure your filters are specific enough and that the resources you're trying to reference actually exist.
*   **Dependency Management**: Terraform automatically understands dependencies. If a resource depends on data fetched by a data source, Terraform will fetch the data before provisioning the resource.

By mastering data sources, you significantly increase Terraform's flexibility and ability to manage infrastructure that integrates with existing environments and external services.

## Supports

- [[skills/computing/systems-infrastructure/delivery-platforms/infrastructure-as-code/microskills/external-information-retrieval|External Information Retrieval]]

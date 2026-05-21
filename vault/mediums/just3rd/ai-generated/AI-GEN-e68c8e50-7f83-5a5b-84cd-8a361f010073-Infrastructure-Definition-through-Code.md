---
type: "medium"
title: "Defining Infrastructure with Code"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/cloud-devops/platform-engineering/infrastructure-as-code/microskills/infrastructure-definition-through-code|infrastructure-definition-through-code]]"
---
# Defining Infrastructure with Code

When we talk about Infrastructure as Code (IaC), a fundamental concept is that we are **describing our infrastructure in configuration files**. Instead of manually clicking through graphical interfaces or writing imperative scripts that execute step-by-step commands, we create declarative definitions. These definitions act as blueprints, telling a system *what* we want our infrastructure to look like, rather than *how* to build it.

## What Does "Described in Configuration Files" Mean?

Imagine you want to build a new server. Traditionally, you might:

1.  Log into a cloud provider's console (like AWS, Azure, or Google Cloud).
2.  Navigate to the "Servers" or "Virtual Machines" section.
3.  Click "Create New Instance."
4.  Select an operating system (e.g., Ubuntu 20.04).
5.  Choose an instance type (e.g., `t2.micro`).
6.  Configure storage, networking, security groups, etc.
7.  Click "Launch."

This is an **imperative** approach. You are performing a series of discrete actions.

With IaC, you instead write a file. This file might look like this (using a simplified, conceptual YAML example for a virtual machine):

```yaml
apiVersion: v1
kind: VirtualMachine
metadata:
  name: my-web-server
  environment: production
spec:
  operatingSystem: Ubuntu 20.04
  instanceType: t2.micro
  storage:
    rootVolume:
      sizeGB: 50
      type: gp3
  networking:
    vpcId: vpc-abcdef1234567890
    subnetId: subnet-0123456789abcdef0
  securityGroups:
    - sg-0123456789abcdef0
```

This file is a **declarative configuration**. You are declaring that you want a `VirtualMachine` named `my-web-server` with specific characteristics. An IaC tool (like Terraform, CloudFormation, or Ansible) reads this file and figures out the necessary steps to make your actual infrastructure match this definition.

## Key Aspects of Infrastructure Defined Through Code

1.  **Declarative Language:** The configuration files use a declarative language. This means you state the desired end-state of your infrastructure, and the IaC tool handles the "how." This is a core principle that distinguishes IaC from traditional scripting.

2.  **Immutable State:** Ideally, infrastructure defined in code should be treated as immutable. If you need to make a change (e.g., upgrade the OS or increase disk size), you don't modify the existing configuration file. Instead, you create a *new* configuration file that reflects the desired state and then apply it. The IaC tool will then create a new resource with the updated specifications and potentially tear down the old one. This promotes consistency and reduces the risk of configuration drift.

3.  **Version Control:** Because your infrastructure is defined in text files, you can store these files in version control systems like Git. This provides:
    *   **History:** You can see who changed what and when.
    *   **Collaboration:** Multiple team members can work on infrastructure definitions.
    *   **Rollback:** If a change introduces a problem, you can easily revert to a previous known-good version of your configuration.

4.  **Readability and Documentation:** Configuration files serve as living documentation for your infrastructure. Anyone can read the code to understand how the environment is set up.

## Example: Defining a Simple Web Server Configuration

Let's consider a slightly more detailed example, again using a conceptual YAML format, this time focusing on a cloud virtual machine:

```yaml
# This configuration defines a web server for our application
resources:
  - type: cloud_vm
    name: web-server-01
    properties:
      region: us-east-1
      instance_type: t3.medium
      operating_system:
        distribution: Amazon Linux 2
        version: latest
      storage:
        boot_disk:
          size_gb: 80
          type: gp3
      network:
        vpc_id: vpc-0a1b2c3d4e5f67890
        subnet_id: subnet-0123456789abcdef0
        security_group_ids:
          - sg-0abcdef1234567890
      tags:
        environment: staging
        application: web-app
```

In this example:

*   We've declared a `cloud_vm` resource named `web-server-01`.
*   We specify its location (`region`), size (`instance_type`), and OS.
*   We detail the storage and network configuration, linking it to existing VPC and subnet resources.
*   We attach a security group to control network access.
*   We add `tags` for organization and filtering.

An IaC tool would parse this and ensure that a virtual machine matching these exact specifications exists in the specified cloud environment. If the machine already exists but doesn't match, the tool will attempt to update it or replace it. If it doesn't exist, it will be created.

## Moving Forward

Understanding that your infrastructure is described in configuration files is the first step towards embracing Infrastructure as Code. This shift from manual, imperative actions to declarative, code-based definitions is what enables automation, consistency, and agility in managing your IT environments.

## Supports

- [[skills/cloud-devops/platform-engineering/infrastructure-as-code/microskills/infrastructure-definition-through-code|Infrastructure Definition through Code]]

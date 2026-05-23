---
type: "medium"
title: "Defining Your Desired State"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/systems-infrastructure/platform-engineering/infrastructure-as-code/microskills/desired-state-definition|desired-state-definition]]"
learning-time-in-minutes: 4
---
# Defining Your Desired State

When we talk about Infrastructure as Code (IaC) and declarative automation, one of the most fundamental concepts you need to grasp is the **Desired State**. This microskill focuses on understanding how to *define* that desired state without getting bogged down in the specific instructions on *how* to achieve it.

## What is a Desired State?

Think of it like ordering food at a restaurant. You tell the waiter exactly what you want on your plate: "I want a medium-rare steak with mashed potatoes and steamed broccoli." You don't tell the chef how to season the steak, how long to boil the potatoes, or the precise temperature of the steaming water. You simply state your desired outcome.

In IaC, the Desired State is a description of what your infrastructure *should look like* at any given point in time. This includes:

*   **Resources:** What servers, databases, networks, load balancers, etc., should exist?
*   **Configurations:** What settings should these resources have? (e.g., operating system version, port numbers, firewall rules, instance sizes).
*   **Relationships:** How should these resources be connected? (e.g., which servers are behind which load balancer).

Crucially, defining the desired state is about specifying the *end goal*. It's about painting a picture of the final, perfectly configured infrastructure.

## Why Focus on the End Goal?

The power of declarative automation lies in abstracting away the *how*. When you define a desired state, you're telling an automation tool (like Terraform, Ansible, or Pulumi) what you want. The tool then figures out the most efficient and correct way to make your current infrastructure match that desired state.

This approach offers several benefits:

*   **Simplicity:** You don't need to write complex procedural scripts that list every single command to create or modify a resource.
*   **Idempotency:** If you run the same desired state definition multiple times, the tool will ensure the infrastructure is in that state. If it's already there, nothing will change. If it's not, the tool will make the necessary adjustments. This prevents unintended side effects.
*   **Maintainability:** It's easier to read and understand a clear description of the final state than a long sequence of imperative commands.
*   **Resilience:** If a resource drifts from its desired state (due to manual changes or other issues), the automation tool can detect and correct it.

## Desired State vs. Imperative Commands

To truly understand the desired state, it's helpful to contrast it with its opposite: **imperative automation**.

| Desired State (Declarative)                          | Imperative Commands                                                     |
| :--------------------------------------------------- | :---------------------------------------------------------------------- |
| "I want a web server running Ubuntu 20.04 with Nginx installed and listening on port 80." | "1. Create a new EC2 instance with Ubuntu 20.04. 2. SSH into the instance. 3. Run `sudo apt update`. 4. Run `sudo apt install nginx`. 5. Configure Nginx to listen on port 80. 6. Open port 80 in the security group." |
| "I want a PostgreSQL database with a user 'app_user' and a database 'my_db'." | "1. Provision a new RDS instance. 2. Connect to the RDS instance. 3. Execute SQL command `CREATE USER app_user WITH PASSWORD '...'`. 4. Execute SQL command `CREATE DATABASE my_db OWNER app_user`." |

As you can see, the imperative approach describes a sequence of steps. The declarative approach describes the final configuration.

## Example: Desired State for a Web Server

Let's imagine you're using a hypothetical IaC tool. You would define the desired state for a simple web server like this:

```yaml
# This is a simplified, conceptual example.
# Actual syntax varies by tool (e.g., Terraform HCL, Ansible YAML).

resource "aws_instance" "web_server" {
  ami           = "ami-0abcdef1234567890" # Example AMI ID for Ubuntu 20.04
  instance_type = "t2.micro"
  tags = {
    Name = "MyWebServer"
  }

  # This section describes the configuration state *after* the instance is running.
  provisioner "remote-exec" {
    inline = [
      "sudo apt update",
      "sudo apt install -y nginx",
      "sudo systemctl enable nginx",
      "sudo systemctl start nginx"
    ]
  }
}

resource "aws_security_group" "web_sg" {
  name        = "web-server-sg"
  description = "Allow HTTP traffic"

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

# Associate the security group with the instance
resource "aws_instance_security_group_attachment" "web_server_sg_attach" {
  instance_id = aws_instance.web_server.id
  security_group_id = aws_security_group.web_sg.id
}
```

In this (conceptual) example, we're declaring:

*   We want an EC2 instance (`aws_instance`).
*   It should use a specific AMI (`ami-0abcdef1234567890`).
*   It should be a `t2.micro` instance type.
*   It should have the tag "Name" set to "MyWebServer".
*   We want a security group (`aws_security_group`) that allows traffic on port 80.
*   We want that security group attached to our instance.

The `provisioner "remote-exec"` block *looks* a bit imperative, but in the context of IaC, it's treated as a way to ensure the *final state* of the instance includes Nginx running. The IaC tool will execute these commands only if Nginx isn't already installed and running as part of achieving the overall desired state of the instance.

## Common Pitfalls

*   **Mixing declarative and imperative thinking:** Resist the urge to think "how do I do this?" Instead, ask "what should this look like when it's done?"
*   **Overly detailed desired states:** While you need to specify key configurations, avoid specifying every single minor detail that doesn't impact the functionality or security. Let the underlying tools handle some of the low-level implementation.
*   **Ignoring drift:** Simply defining the desired state isn't enough. You need to regularly apply these definitions to ensure your infrastructure remains in sync with its declared state.

By focusing on defining your desired state, you're laying the groundwork for powerful, resilient, and maintainable infrastructure automation.

## Supports

- [[skills/computing/systems-infrastructure/platform-engineering/infrastructure-as-code/microskills/desired-state-definition|Desired State Definition]]

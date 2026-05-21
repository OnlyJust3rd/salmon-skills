---
type: "medium"
title: "Network Security Group (NSG) Configuration"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/cloud-devops/platform-engineering/cloud-networking/microskills/network-security-group-nsg-configuration|network-security-group-nsg-configuration]]"
---
# Network Security Group (NSG) Configuration

Network Security Groups (NSGs) are fundamental components for controlling network traffic within your cloud environment. They act as a distributed firewall, allowing you to define explicit rules that permit or deny inbound and outbound traffic to your virtual machines and other network resources. Configuring NSGs effectively is crucial for implementing a secure network architecture, aligning with the broader goal of configuring cloud network components.

## What are NSG Rules?

An NSG contains a list of security rules that allow or deny network traffic. These rules are evaluated based on priority, with lower numbers having higher priority. Each rule has several key properties:

*   **Priority:** A number that dictates the order of rule evaluation.
*   **Source/Destination:** Specifies whether the rule applies to IP addresses, IP address ranges (CIDR blocks), service tags (predefined groups of IP addresses for specific cloud services), or application security groups.
*   **Protocol:** The network protocol the rule applies to (e.g., TCP, UDP, ICMP, Any).
*   **Source Port Range/Destination Port Range:** The specific ports or ranges of ports the rule applies to.
*   **Action:** Whether to `Allow` or `Deny` the traffic.
*   **Name:** A descriptive name for the rule.
*   **Description:** Optional details about the rule's purpose.

NSGs have two sets of rules: **Inbound** and **Outbound**.

*   **Inbound security rules:** Control traffic coming *into* your virtual network resources.
*   **Outbound security rules:** Control traffic going *out* of your virtual network resources.

Every network interface and subnet in Azure is associated with an NSG (or multiple NSGs). If an NSG is associated with both a subnet and a network interface, the rules from both NSGs are applied. Rules associated with the network interface are processed *after* rules associated with the subnet.

## Practical Scenario: Securing a Web Server

Imagine you have deployed a virtual machine to host a web application. You want to ensure that only legitimate traffic can reach your web server.

**Requirements:**

1.  Allow inbound HTTP (port 80) and HTTPS (port 443) traffic from anywhere on the internet.
2.  Allow inbound SSH (port 22) traffic, but only from a specific management IP address for security.
3.  Deny all other inbound traffic by default.
4.  Allow all outbound traffic for the web server to fetch updates or communicate with other services.

**Configuration Steps (Conceptual):**

You would create an NSG and associate it with the subnet or network interface of your web server VM. Then, you would define the following rules:

*   **Inbound Rule 1:**
    *   Priority: 100
    *   Source: Any
    *   Source Port Range: \*
    *   Destination: Any
    *   Destination Port Range: 80
    *   Protocol: TCP
    *   Action: Allow
    *   Name: AllowHTTP
*   **Inbound Rule 2:**
    *   Priority: 110
    *   Source: Any
    *   Source Port Range: \*
    *   Destination: Any
    *   Destination Port Range: 443
    *   Protocol: TCP
    *   Action: Allow
    *   Name: AllowHTTPS
*   **Inbound Rule 3:**
    *   Priority: 120
    *   Source: \[Your Management IP Address]/32  *(e.g., 203.0.113.10/32)*
    *   Source Port Range: \*
    *   Destination: Any
    *   Destination Port Range: 22
    *   Protocol: TCP
    *   Action: Allow
    *   Name: AllowSSHFromManagement
*   **Default Deny Inbound (Implicit/System Rule):** There's an implicit "Deny All" rule with a high priority number (e.g., 65500) that denies all inbound traffic not explicitly allowed by other rules. You typically don't need to create this yourself.

*   **Outbound Rule 1 (Often default):**
    *   Priority: 100
    *   Source: Any
    *   Source Port Range: \*
    *   Destination: Any
    *   Destination Port Range: \*
    *   Protocol: Any
    *   Action: Allow
    *   Name: AllowAllOutbound
    *(Cloud providers often have a default outbound rule that allows all traffic. You can modify or restrict this if needed.)*

## Practice Task

1.  Navigate to the Network Security Group section in your cloud provider's console (e.g., Azure portal, AWS Security Groups).
2.  Create a new NSG.
3.  Add an inbound rule to allow TCP traffic on port 5432 (PostgreSQL) from a specific IP address range (e.g., `192.168.1.0/24`). Name it `AllowPostgreSQLFromInternal`.
4.  Add an inbound rule to deny UDP traffic on port 23 (Telnet - though not recommended for use) from any source. Name it `DenyTelnetAny`.
5.  Observe the default inbound and outbound rules that are pre-configured.

## Self-Check Questions

1.  What is the primary function of a Network Security Group?
2.  If you have two NSGs associated with a subnet and its network interface, which set of rules is processed first (subnet or NIC)?
3.  Why is it important to specify a source IP address or range when allowing SSH access?
4.  What does a "Deny" action in an NSG rule do?
5.  Which priority number indicates a higher priority in NSG rule evaluation?

## Supports

- [[skills/cloud-devops/platform-engineering/cloud-networking/microskills/network-security-group-nsg-configuration|Network Security Group (NSG) Configuration]]

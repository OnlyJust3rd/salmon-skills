---
type: "medium"
title: "Creating Access Rules with Packet Filtering"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/security/cybersecurity/network-security-access-control/microskills/access-rule-creation|access-rule-creation]]"
---
# Creating Access Rules with Packet Filtering

Packet filtering is a fundamental technique for controlling network traffic. It allows us to inspect individual data packets and decide whether to permit or deny them based on predefined criteria. This skill focuses on creating practical access rules, the building blocks of network security.

## Understanding the Core Components

When we create access rules using packet filtering, we are essentially instructing a firewall or similar device on how to handle traffic. These rules are typically evaluated in order, and the first matching rule determines the action taken on the packet. The key components we use to define these rules are:

*   **Source IP Address:** The IP address of the device sending the packet.
*   **Destination IP Address:** The IP address of the device the packet is intended for.
*   **Source Port:** The port number on the source device. This is often associated with a specific application.
*   **Destination Port:** The port number on the destination device. This is crucial for identifying the service being accessed (e.g., port 80 for HTTP, port 443 for HTTPS, port 22 for SSH).
*   **Protocol:** The network protocol being used (e.g., TCP, UDP, ICMP).
*   **Action:** What to do with the packet if it matches the rule (e.g., `ALLOW`, `DENY`, `REJECT`).

## Building Access Rules: A Practical Approach

Let's walk through some common scenarios and build access rules to address them. We'll use a simplified syntax to represent these rules, similar to how you might configure a firewall.

**Scenario 1: Allowing Web Access for Internal Users**

Imagine you have an internal network and you want to allow users to browse the internet (HTTP and HTTPS).

*   **Goal:** Allow internal users (e.g., IP range 192.168.1.0/24) to access external web servers on ports 80 and 443.
*   **Packet Filtering Principles:** We need to look at packets originating from our internal network destined for any external IP address, specifically targeting ports 80 and 443.

Here's how we might define the rules:

```
RULE 1:
  SOURCE IP: 192.168.1.0/24
  DESTINATION IP: ANY
  DESTINATION PORT: 80
  PROTOCOL: TCP
  ACTION: ALLOW

RULE 2:
  SOURCE IP: 192.168.1.0/24
  DESTINATION IP: ANY
  DESTINATION PORT: 443
  PROTOCOL: TCP
  ACTION: ALLOW
```

**Explanation:**

*   `RULE 1` permits all TCP traffic from our internal network to any destination IP on port 80.
*   `RULE 2` does the same for port 443.

**Important Consideration:** These rules only *allow* traffic. Without an explicit rule to deny other traffic, the firewall might implicitly allow it (depending on its default policy).

**Scenario 2: Blocking Access to a Specific Internal Server**

Suppose you have a sensitive internal server (e.g., a database server at 192.168.1.100) that should only be accessible from a specific management workstation (e.g., 192.168.1.50).

*   **Goal:** Block all access to the database server (192.168.1.100) except from the management workstation (192.168.1.50).
*   **Packet Filtering Principles:** We need to identify traffic destined for the database server. If the source isn't the management workstation, we deny it.

Here's a common approach using an "allow first, then deny" strategy:

```
RULE 3:
  SOURCE IP: 192.168.1.50
  DESTINATION IP: 192.168.1.100
  DESTINATION PORT: ANY  # Assuming we want to allow access to all services on this server for the admin
  PROTOCOL: ANY
  ACTION: ALLOW

RULE 4:
  SOURCE IP: ANY
  DESTINATION IP: 192.168.1.100
  DESTINATION PORT: ANY
  PROTOCOL: ANY
  ACTION: DENY
```

**Explanation:**

*   `RULE 3` explicitly allows any traffic originating from the management workstation (192.168.1.50) destined for the database server (192.168.1.100).
*   `RULE 4` then broadly denies any traffic that is destined for the database server (192.168.1.100), regardless of its source. Because `RULE 3` is evaluated first and matches, traffic from the management workstation will be allowed, while all other traffic will be caught by `RULE 4` and denied.

**Scenario 3: Restricting SSH Access**

You want to allow SSH access (port 22) to your servers, but only from specific trusted IP addresses.

*   **Goal:** Allow SSH access to any server (e.g., internal network 192.168.1.0/24) only from a specific trusted external IP (e.g., 203.0.113.10).
*   **Packet Filtering Principles:** Identify traffic destined for port 22. Only permit it if it comes from the trusted source IP.

```
RULE 5:
  SOURCE IP: 203.0.113.10
  DESTINATION IP: 192.168.1.0/24
  DESTINATION PORT: 22
  PROTOCOL: TCP
  ACTION: ALLOW

RULE 6:
  SOURCE IP: ANY
  DESTINATION IP: 192.168.1.0/24
  DESTINATION PORT: 22
  PROTOCOL: TCP
  ACTION: DENY
```

**Explanation:**

*   `RULE 5` permits TCP traffic on port 22 from the trusted IP address to your internal network.
*   `RULE 6` denies all other TCP traffic on port 22 to your internal network. This ensures that only the explicitly allowed source can connect via SSH.

## Key Principles for Effective Rule Creation

*   **Least Privilege:** Grant only the necessary permissions. If a user or application doesn't need to access a service, block it.
*   **Order Matters:** Firewall rules are processed sequentially. Place more specific rules before more general ones.
*   **Default Deny:** A common and secure practice is to have a default policy that denies all traffic, and then create specific rules to allow only what is needed.
*   **Documentation:** Clearly document the purpose of each rule. This is vital for troubleshooting and audits.
*   **Regular Review:** Network needs change. Periodically review your access rules to ensure they are still relevant and effective.

By applying these principles and understanding the components of packet filtering, you can effectively create access control rules to enhance network security.

## Supports

- [[skills/security/cybersecurity/network-security-access-control/microskills/access-rule-creation|Access Rule Creation]]

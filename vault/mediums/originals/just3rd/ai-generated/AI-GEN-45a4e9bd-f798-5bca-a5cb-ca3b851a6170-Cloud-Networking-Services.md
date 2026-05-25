---
type: "medium"
title: "Configuring Cloud Network Components"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/systems-infrastructure/cloud-platforms/cloud-networking/microskills/cloud-networking-services|cloud-networking-services]]"
related-skills:
  - "[[skills/computing/systems-infrastructure/cloud-platforms/cloud-networking/cloud-networking|cloud-networking]]"
learning-time-in-minutes: 3
---
# Configuring Cloud Network Components

This lesson focuses on applying configuration settings for key cloud networking services. We'll explore how to set up virtual networks, segment them with subnets, secure traffic using Network Security Groups, and distribute incoming traffic with load balancers. This knowledge is crucial for building robust and secure cloud infrastructures.

## Core Concepts

Cloud networking services abstract away the complexities of physical networking hardware, allowing you to define and manage your network infrastructure as code. This provides agility, scalability, and improved security.

*   **Virtual Networks (VNet):** A logical isolation of your cloud resources. Think of it as your private network in the cloud.
*   **Subnets:** Divisions within a VNet, allowing you to segment your network for better organization and security. For example, you might have a subnet for your web servers and another for your databases.
*   **Network Security Groups (NSG):** Act as a virtual firewall, controlling inbound and outbound network traffic to and from cloud resources. You define rules based on IP addresses, ports, and protocols.
*   **Load Balancers:** Distribute incoming network traffic across multiple virtual machines or services. This improves application availability and performance by preventing any single resource from becoming a bottleneck.

## Practical Scenario: Setting Up a Simple Web Application Network

Imagine you're deploying a public-facing web application. You need to ensure it's accessible, secure, and can handle varying traffic loads.

**Objective:**

1.  Create a VNet to house your application.
2.  Define two subnets: one for web servers and one for a database.
3.  Implement an NSG to allow HTTP/HTTPS traffic to the web servers and block all other inbound traffic by default.
4.  Set up a load balancer to distribute traffic to the web servers.

**Applying Configurations (Conceptual Example using Azure-like syntax):**

```bash
# 1. Create a Virtual Network
az network vnet create \
  --resource-group myResourceGroup \
  --name myVNet \
  --address-prefix 10.0.0.0/16

# 2. Create Subnets
az network vnet subnet create \
  --resource-group myResourceGroup \
  --vnet-name myVNet \
  --name webSubnet \
  --address-prefix 10.0.1.0/24

az network vnet subnet create \
  --resource-group myResourceGroup \
  --vnet-name myVNet \
  --name dbSubnet \
  --address-prefix 10.0.2.0/24

# 3. Create a Network Security Group and associate it with the web subnet
az network nsg create \
  --resource-group myResourceGroup \
  --name webNSG

az network nsg rule create \
  --resource-group myResourceGroup \
  --nsg-name webNSG \
  --name AllowHTTP \
  --priority 100 \
  --protocol Tcp \
  --destination-port-range 80 \
  --access Allow

az network nsg rule create \
  --resource-group myResourceGroup \
  --nsg-name webNSG \
  --name AllowHTTPS \
  --priority 110 \
  --protocol Tcp \
  --destination-port-range 443 \
  --access Allow

# Associate NSG with web subnet
az network vnet subnet update \
  --resource-group myResourceGroup \
  --vnet-name myVNet \
  --name webSubnet \
  --network-security-group webNSG

# 4. Create a Public Load Balancer
# (This involves several steps, including creating a public IP, backend pool, probe, and load balancing rule. The specific commands would be more extensive.)
# Example conceptual command for rule:
# az network lb rule create --lb-name myLoadBalancer --resource-group myResourceGroup --name httpRule --protocol Tcp --frontend-port 80 --backend-port 80 --frontend-ip-name loadBalancerFrontend --backend-pool-name webBackendPool
```

In this example, we've defined the network boundaries, segmented traffic, and created a security perimeter. The load balancer (conceptually shown) would then direct incoming requests to your web server instances.

## Practice Task

1.  **Identify:** In a real-world scenario, what other types of traffic might you need to allow or deny for a typical web application (e.g., SSH for management, database ports)?
2.  **Configure (Simulated):** Imagine you need to add a rule to your `webNSG` to allow SSH access (port 22) only from a specific management IP address (e.g., `203.0.113.5`). How would you structure the NSG rule for this?

## Self-Check Questions

1.  Why is it important to segment a virtual network into multiple subnets?
2.  What is the primary function of a Network Security Group?
3.  When would you consider using a load balancer in your cloud network design?
4.  If you want to restrict access to a database subnet only from your web server subnet, how could you achieve this using NSGs and subnet configurations?

## Supports

- [[skills/computing/systems-infrastructure/cloud-platforms/cloud-networking/microskills/cloud-networking-services|Cloud Networking Services]]

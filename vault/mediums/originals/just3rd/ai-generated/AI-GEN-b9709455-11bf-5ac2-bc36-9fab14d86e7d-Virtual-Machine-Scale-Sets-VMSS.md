---
type: "medium"
title: "Understanding Virtual Machine Scale Sets (VMSS)"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/systems-infrastructure/cloud-platforms/cloud-infrastructure/cloud-scalability/microskills/virtual-machine-scale-sets-vmss|virtual-machine-scale-sets-vmss]]"
learning-time-in-minutes: 4
---
# Understanding Virtual Machine Scale Sets (VMSS)

Virtual Machine Scale Sets (VMSS) are a fundamental component of cloud scalability, allowing you to deploy and manage a group of identical, load-balanced virtual machines. Instead of managing individual VMs, VMSS lets you scale them up or down automatically based on demand, ensuring your applications remain available and performant without manual intervention.

VMSS simplifies the management of a fleet of VMs by treating them as a single, scalable unit. When you need more capacity, VMSS adds new VMs; when demand decreases, it removes them. This is crucial for applications that experience fluctuating traffic patterns, such as e-commerce websites during sales events or APIs handling varying loads.

## Key Concepts of VMSS

*   **Instance Count:** The number of VM instances currently running within the scale set.
*   **VM Profile:** Defines the configuration of each VM instance, including OS image, size, disk, networking, and extensions.
*   **Load Balancer:** A load balancer distributes incoming traffic across the VM instances in the scale set, ensuring no single VM is overwhelmed.
*   **Orchestration Mode:** VMSS can operate in two modes:
    *   **Uniform:** All VM instances are identical and managed as a group. This is the most common mode for scalable applications.
    *   **Flexible:** Allows for a mix of VM sizes and managed instances within the same scale set, providing more granular control but with slightly different management characteristics. For outcome-based scaling, Uniform mode is typically used.
*   **Scaling Rules:** These define how the instance count changes. Scaling can be manual (you set the count) or automatic (based on metrics).

## Practical Scenario: Web Application Scaling

Imagine you're running a web application that experiences significant traffic spikes during business hours and much lower traffic overnight. To ensure a smooth user experience at all times and optimize costs, you can use VMSS.

1.  **Define the VM Profile:** You'll specify that each VM instance should run a web server (e.g., Apache or Nginx), use a specific VM size (e.g., Standard_DS2_v2), and have a custom data script to install and configure your web application.
2.  **Configure a Load Balancer:** A load balancer will distribute incoming HTTP/S requests across all running VM instances.
3.  **Set up Auto-scaling:** You'll configure auto-scaling rules based on CPU utilization.
    *   **Scale-out Rule:** If the average CPU utilization across all instances exceeds 70% for 10 minutes, add 2 more instances.
    *   **Scale-in Rule:** If the average CPU utilization drops below 30% for 15 minutes, remove 1 instance, down to a minimum of 2 instances.

This setup ensures that as traffic increases and CPU usage climbs, VMSS automatically adds more web servers to handle the load. When traffic subsides, VMSS reduces the number of instances to save costs.

## Practice Task: Deploy a Basic VMSS

Using your cloud provider's portal or command-line interface (CLI), deploy a simple VM Scale Set with the following:

1.  **Operating System:** Ubuntu Server 20.04 LTS.
2.  **VM Size:** Select a small to medium-sized VM (e.g., `Standard_B1ms` or `Standard_DS1_v2`).
3.  **Initial Instance Count:** 2.
4.  **Load Balancer:** Enable a basic load balancer.
5.  **No Auto-scaling (yet):** For this initial task, set up manual scaling or no auto-scaling rules. Focus on deploying the scale set itself.

**Example using Azure CLI:**

```bash
az vmss create \
  --resource-group myResourceGroup \
  --name myScaleSet \
  --image UbuntuLTS \
  --vm-sku Standard_B1ms \
  --instance-count 2 \
  --load-balancer myLoadBalancer \
  --public-ip-address myPublicIP \
  --upgrade-policy-mode automatic
```

*   Replace `myResourceGroup`, `myScaleSet`, `myLoadBalancer`, and `myPublicIP` with your desired names.
*   This command creates a scale set with two Ubuntu VMs and a basic load balancer.

## Self-Check Questions

1.  What is the primary benefit of using VMSS over managing individual VMs for a scalable application?
2.  When would you choose to scale out your VMSS? What metric might trigger this action?
3.  What is the role of a load balancer in a VMSS?
4.  Describe a scenario where you might want to scale *in* your VMSS, and what metric could indicate this need.
5.  What is the difference between VMSS Uniform and Flexible orchestration modes, and which is typically used for outcome-based auto-scaling?

## Supports

- [[skills/computing/systems-infrastructure/cloud-platforms/cloud-infrastructure/cloud-scalability/microskills/virtual-machine-scale-sets-vmss|Virtual Machine Scale Sets (VMSS)]]

---
type: "medium"
title: "Implementing Horizontal Scaling with VM Scale Sets"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/systems-infrastructure/cloud-platforms/cloud-infrastructure/cloud-scalability/microskills/horizontal-scaling-implementation|horizontal-scaling-implementation]]"
learning-time-in-minutes: 4
---
# Implementing Horizontal Scaling with VM Scale Sets

This lesson focuses on the practical implementation of horizontal scaling, a key aspect of Cloud Scalability, specifically by using Virtual Machine Scale Sets (VMSS). You will learn how to configure VMSS to automatically adjust the number of VM instances based on performance metrics.

## What is Horizontal Scaling?

Horizontal scaling, also known as scale-out, involves adding more instances of a resource to handle increased load. In the context of virtual machines, this means launching additional VMs to distribute the workload. This is in contrast to vertical scaling (scale-up), which involves increasing the capacity of existing resources (e.g., adding more CPU or RAM to a single VM). Horizontal scaling is often more resilient and cost-effective for handling fluctuating demand.

VM Scale Sets are a perfect tool for this. They allow you to deploy and manage a group of identical, load-balanced VMs. The core benefit for horizontal scaling is their ability to automatically increase or decrease the number of VM instances based on predefined rules.

## Scenario: Web Application Load

Imagine you're managing a web application that experiences significant traffic spikes during certain hours of the day or for promotional events. To ensure a smooth user experience, you need to automatically scale your application's backend.

## Practical Implementation: Auto-scaling Rules

VM Scale Sets allow you to define "scale rules" that trigger scaling actions. These rules are typically based on metrics such as:

*   **CPU Percentage:** When the average CPU usage across the VM instances exceeds a certain threshold, new instances are added. When it drops below another threshold, instances are removed.
*   **Network In/Out:** Similar to CPU, network traffic can also trigger scaling.
*   **Custom Metrics:** You can also define custom metrics, which can be invaluable for application-specific scaling needs.

Let's consider a common scenario: scaling based on CPU percentage.

### Example Configuration (Conceptual)

When configuring a VM Scale Set in a cloud provider (like Azure, AWS, or GCP), you would typically define the following for auto-scaling:

1.  **Minimum number of instances:** The baseline number of VMs to always keep running.
2.  **Maximum number of instances:** The upper limit to prevent runaway costs.
3.  **Default number of instances:** The number of VMs to start with.
4.  **Scaling Rules:**
    *   **Scale-out rule:**
        *   **Metric:** Average CPU Percentage
        *   **Operator:** Greater than or equal to
        *   **Threshold:** 75%
        *   **Increase Count:** Add 2 instances
        *   **Evaluation Period:** Every 5 minutes
    *   **Scale-in rule:**
        *   **Metric:** Average CPU Percentage
        *   **Operator:** Less than or equal to
        *   **Threshold:** 25%
        *   **Decrease Count:** Remove 1 instance
        *   **Evaluation Period:** Every 5 minutes

This configuration means that if the average CPU usage across your running VMs consistently stays above 75% for 5 minutes, the scale-out rule will trigger and add 2 more VMs. Conversely, if the CPU usage consistently drops below 25% for 5 minutes, the scale-in rule will trigger and remove 1 VM.

## Practice Task

1.  **Set up a VM Scale Set:** Deploy a VM Scale Set with a minimum of 2 instances and a maximum of 10 instances. Choose a basic Linux VM image.
2.  **Configure Auto-scaling:** Implement auto-scaling rules based on CPU percentage.
    *   Set a scale-out rule to add 2 instances when average CPU usage exceeds 70% for 5 minutes.
    *   Set a scale-in rule to remove 1 instance when average CPU usage drops below 30% for 5 minutes.
3.  **Simulate Load:** Use a simple script or tool to generate CPU load on your VM instances. Observe how the VM Scale Set responds by adding or removing instances.

## Self-Check Questions

1.  What is the primary difference between horizontal and vertical scaling?
2.  When would you choose horizontal scaling over vertical scaling for your application?
3.  What are some common metrics used to trigger auto-scaling actions in VM Scale Sets?
4.  Explain the purpose of setting a minimum and maximum number of instances for a VM Scale Set.

## Supports

- [[skills/computing/systems-infrastructure/cloud-platforms/cloud-infrastructure/cloud-scalability/microskills/horizontal-scaling-implementation|Horizontal Scaling Implementation]]

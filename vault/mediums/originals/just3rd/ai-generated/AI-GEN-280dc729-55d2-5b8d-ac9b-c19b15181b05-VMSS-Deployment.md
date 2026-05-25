---
type: "medium"
title: "Deploying Virtual Machine Scale Sets (VMSS)"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/systems-infrastructure/cloud-platforms/cloud-infrastructure/cloud-scalability/microskills/vmss-deployment|vmss-deployment]]"
related-skills:
  - "[[skills/computing/systems-infrastructure/cloud-platforms/cloud-infrastructure/cloud-scalability/cloud-scalability|cloud-scalability]]"
learning-time-in-minutes: 3
---
# Deploying Virtual Machine Scale Sets (VMSS)

This lesson focuses on the practical steps involved in deploying and managing Virtual Machine Scale Sets (VMSS). Understanding VMSS deployment is crucial for effectively implementing cloud scalability solutions.

## What are VMSS Deployments?

VMSS deployment refers to the process of creating and configuring a Virtual Machine Scale Set. This involves defining the virtual machine image, size, network configuration, and crucially, the scaling rules that will govern how the VMSS grows or shrinks. A well-deployed VMSS ensures your applications can handle varying loads efficiently.

## Practical Scenario: Web Server Scaling

Imagine you're managing a popular e-commerce website. During peak shopping seasons (like Black Friday), traffic surges dramatically. To ensure a smooth user experience and prevent downtime, you need a way to automatically add more web servers when the traffic increases and remove them when it subsides. VMSS is the perfect tool for this.

We will deploy a VMSS that hosts a simple web application. The VMSS will be configured to automatically scale out (add more VMs) when the average CPU utilization of the existing VMs exceeds 70% and scale in (remove VMs) when it drops below 30%.

## Deployment Steps and Example (Azure CLI)

This example uses the Azure Command-Line Interface (CLI) to deploy a VMSS.

**Prerequisites:**
*   An Azure account.
*   Azure CLI installed and configured.

**1. Create a Resource Group:**
Resource groups help organize your Azure resources.

```bash
az group create --name myResourceGroup --location eastus
```

**2. Create a Virtual Machine Scale Set:**
This command creates a VMSS with a Linux image, specifies the number of initial VMs, and enables automatic scaling based on CPU utilization.

```bash
az vmss create \
  --resource-group myResourceGroup \
  --name myVmss \
  --image UbuntuLTS \
  --VM-size Standard_DS1_v2 \
  --upgrade-policy-mode automatic \
  --instance-count 2 \
  --admin-username azureuser \
  --generate-ssh-keys \
  --vnet-name myVnet \
  --subnet mySubnet \
  --scale-in-policy shortest-lifecycle \
  --load-balancer myLoadBalancer
```

*   `--resource-group`, `--name`: Specifies the resource group and the name of the VMSS.
*   `--image`: The OS image to use for the VMs.
*   `--VM-size`: The size of each VM instance.
*   `--upgrade-policy-mode automatic`: Automatically applies OS and software updates.
*   `--instance-count`: The initial number of VMs.
*   `--admin-username`, `--generate-ssh-keys`: For accessing the VMs.
*   `--vnet-name`, `--subnet`: Network configuration.
*   `--scale-in-policy shortest-lifecycle`: When scaling in, the VM that has been running the shortest will be removed.
*   `--load-balancer`: Associates a load balancer to distribute traffic.

**3. Configure Auto-scaling:**
Now, let's define the scaling rules. We'll set up rules to scale based on CPU usage.

```bash
az monitor autoscale create \
  --resource-group myResourceGroup \
  --resource vmss \
  --name myAutoscaleSetting \
  --min-count 2 \
  --max-count 10 \
  --default-count 2

az monitor autoscale rule create \
  --resource-group myResourceGroup \
  --resource-name myAutoscaleSetting \
  --condition "Percentage CPU > 70" \
  --scale out 1

az monitor autoscale rule create \
  --resource-group myResourceGroup \
  --resource-name myAutoscaleSetting \
  --condition "Percentage CPU < 30" \
  --scale in 1
```

*   `--min-count`, `--max-count`, `--default-count`: Define the minimum, maximum, and default number of VMs.
*   `--condition "Percentage CPU > 70"`: The metric and threshold for scaling out.
*   `--scale out 1`: The number of instances to add when the condition is met.
*   `--condition "Percentage CPU < 30"`: The metric and threshold for scaling in.
*   `--scale in 1`: The number of instances to remove when the condition is met.

## Practice Task

Deploy a VMSS using your preferred cloud provider's CLI or portal. Configure it to:
1.  Start with 3 VM instances.
2.  Scale out by adding 2 VMs when the average CPU utilization exceeds 80%.
3.  Scale in by removing 1 VM when the average CPU utilization drops below 20%.
4.  Set the maximum number of VM instances to 8.

## Self-Check Questions

1.  What is the primary benefit of using VMSS for a web application with fluctuating traffic?
2.  When deploying a VMSS, what are at least three key parameters you need to define?
3.  Describe the scenario where a "scale-in" operation would occur.
4.  If your VMSS has 5 instances and the CPU utilization consistently stays below 20%, what will happen based on the auto-scaling rules defined above?

## Supports

- [[skills/computing/systems-infrastructure/cloud-platforms/cloud-infrastructure/cloud-scalability/microskills/vmss-deployment|VMSS Deployment]]

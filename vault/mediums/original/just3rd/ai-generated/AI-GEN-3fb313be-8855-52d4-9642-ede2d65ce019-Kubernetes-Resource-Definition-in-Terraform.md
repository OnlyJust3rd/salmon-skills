---
type: "medium"
title: "Defining Kubernetes Resources with Terraform"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/systems-infrastructure/platform-engineering/infrastructure-as-code/microskills/kubernetes-resource-definition-in-terraform|kubernetes-resource-definition-in-terraform]]"
learning-time-in-minutes: 4
---
# Defining Kubernetes Resources with Terraform

This lesson focuses on how to define Kubernetes resources using Terraform code. This is a crucial step in provisioning and managing your Kubernetes infrastructure as code.

## What are Kubernetes Resources?

In Kubernetes, resources are the objects that represent the state of your cluster. This includes things like:

*   **Pods**: The smallest deployable units in Kubernetes, typically containing one or more containers.
*   **Deployments**: Describe the desired state for your application, ensuring that a specified number of pods are running and can be updated.
*   **Services**: Define a logical set of Pods and a policy by which to access them, often exposing an application running on a set of Pods as a network Service.
*   **ConfigMaps**: Store non-confidential data in key-value pairs that can be consumed by applications.
*   **Secrets**: Similar to ConfigMaps but used for sensitive data like passwords, OAuth tokens, and private keys.

Traditionally, these resources are defined using YAML manifests. Terraform allows you to manage these same resources using its own declarative configuration language, HCL (HashiCorp Configuration Language).

## Terraform Providers for Kubernetes

To interact with Kubernetes, Terraform uses a provider. The `kubernetes` provider allows Terraform to manage Kubernetes objects. When you define a Kubernetes resource in Terraform, you are essentially telling Terraform how you want that resource to look in your Kubernetes cluster. Terraform will then use the Kubernetes API to create, update, or delete resources to match your desired state.

## Defining a Kubernetes Deployment in Terraform

Let's look at a practical example of defining a simple Kubernetes Deployment using Terraform.

### Core Idea: The `kubernetes_deployment` Resource

Terraform resources are defined within blocks. For a Kubernetes Deployment, you'll use the `kubernetes_deployment` resource type.

### Code Example

```terraform
resource "kubernetes_deployment" "nginx_app" {
  metadata {
    name = "nginx-deployment"
    labels = {
      app = "nginx"
    }
  }

  spec {
    replicas = 2

    selector {
      match_labels = {
        app = "nginx"
      }
    }

    template {
      metadata {
        labels = {
          app = "nginx"
        }
      }

      spec {
        container {
          image = "nginx:latest"
          name  = "nginx-container"

          ports {
            container_port = 80
          }
        }
      }
    }
  }
}
```

### How it Works

Let's break down this Terraform code:

1.  **`resource "kubernetes_deployment" "nginx_app"`**: This declares a Terraform resource of type `kubernetes_deployment`. The `"nginx_app"` is a local name within your Terraform configuration, used to refer to this specific deployment.
2.  **`metadata` block**:
    *   **`name = "nginx-deployment"`**: This sets the name of the Kubernetes Deployment object that will be created in your cluster.
    *   **`labels`**: Labels are key-value pairs that you can attach to Kubernetes objects. They are used for organizing and selecting objects. Here, we label it with `app = "nginx"`.
3.  **`spec` block**: This defines the desired state of the Deployment.
    *   **`replicas = 2`**: This instructs Kubernetes to maintain two running instances (pods) of your application.
    *   **`selector` block**:
        *   **`match_labels = { app = "nginx" }`**: This tells the Deployment controller which pods it's responsible for. It will select pods that have the label `app = "nginx"`. This label must match the labels defined in the `template` block.
    *   **`template` block**: This is a blueprint for the pods that the Deployment will create.
        *   **`metadata` block**: Labels for the pods themselves. These *must* match the `selector.match_labels`.
        *   **`spec` block**: Defines the containers within the pod.
            *   **`container` block**:
                *   **`image = "nginx:latest"`**: Specifies the Docker image to use for the container.
                *   **`name = "nginx-container"`**: A name for the container.
                *   **`ports` block**:
                    *   **`container_port = 80`**: The port on which the container listens for traffic.

### Key Concepts to Remember

*   **Declarative State**: You declare *what* you want (e.g., 2 replicas of an Nginx app), and Terraform and Kubernetes figure out *how* to get there.
*   **Resource Mapping**: Terraform's Kubernetes provider maps HCL resource definitions to Kubernetes API objects.
*   **Provider Configuration**: Before you can apply this, your Terraform configuration needs to be set up to use the Kubernetes provider and be authenticated to your cluster. This typically involves setting `KUBECONFIG` environment variables or configuring the provider directly in your `.tf` files.

## Applying the Definition

Once you have this code in a `.tf` file (e.g., `main.tf`), you would typically:

1.  Run `terraform init` to initialize your Terraform project and download the necessary provider.
2.  Run `terraform plan` to see what changes Terraform will make to your cluster.
3.  Run `terraform apply` to create the Nginx deployment in your Kubernetes cluster.

This micro-skill of defining Kubernetes resources is fundamental. By mastering this, you gain the ability to consistently and reliably provision your application infrastructure using Infrastructure as Code principles.

## Supports

- [[skills/computing/systems-infrastructure/platform-engineering/infrastructure-as-code/microskills/kubernetes-resource-definition-in-terraform|Kubernetes Resource Definition in Terraform]]

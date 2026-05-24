---
type: "medium"
title: "Orchestrating Kubernetes with Terraform"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/systems-infrastructure/delivery-platforms/infrastructure-as-code/microskills/infrastructure-orchestration|infrastructure-orchestration]]"
learning-time-in-minutes: 4
---
# Orchestrating Kubernetes with Terraform

This lesson focuses on how Terraform, a powerful Infrastructure as Code (IaC) tool, can be used to manage and provision Kubernetes resources. By understanding this, you'll be able to apply Terraform to automate the deployment and configuration of your Kubernetes infrastructure, directly contributing to the outcome of provisioning a Kubernetes resource.

## What is Infrastructure Orchestration with Terraform?

Infrastructure orchestration, in the context of Infrastructure as Code, refers to the automated provisioning, configuration, and management of infrastructure resources. Terraform excels at this by allowing you to define your infrastructure in declarative configuration files. This means you describe the *desired state* of your infrastructure, and Terraform figures out how to get there.

When applied to Kubernetes, Terraform acts as a control plane for your cluster. Instead of manually creating deployments, services, or ingress resources, you define them in Terraform's configuration language (HCL - HashiCorp Configuration Language). Terraform then interacts with the Kubernetes API to create, update, or delete these resources, ensuring your cluster's state always matches your defined configuration.

This approach brings several benefits:

*   **Automation:** Eliminates manual, error-prone steps.
*   **Consistency:** Ensures that your infrastructure is deployed the same way every time.
*   **Version Control:** Your infrastructure becomes code, allowing for tracking changes, rollbacks, and collaboration.
*   **Reproducibility:** Easily spin up identical environments.

## Core Concepts: Terraform and Kubernetes Providers

To orchestrate Kubernetes with Terraform, you need two key components:

1.  **Terraform:** The IaC tool itself. You'll write your configuration files using HCL.
2.  **Kubernetes Provider:** A plugin for Terraform that understands how to interact with the Kubernetes API. This provider translates your Terraform configuration into API calls that the Kubernetes cluster can understand.

## Provisioning a Basic Kubernetes Deployment

Let's walk through a practical example of how to use Terraform to create a simple Kubernetes Deployment. A Deployment is a Kubernetes object that manages a set of replicated Pods, ensuring that a specified number of Pods are running at any given time.

**Prerequisites:**

*   Terraform installed locally.
*   `kubectl` installed and configured to connect to your Kubernetes cluster.
*   A running Kubernetes cluster (e.g., Minikube, Kind, or a cloud provider managed cluster).

**Steps:**

1.  **Create a Terraform Configuration File:**
    Create a file named `main.tf` in a new directory for your project.

    ```hcl
    terraform {
      required_providers {
        kubernetes = {
          source  = "hashicorp/kubernetes"
          version = "2.20.0" # Pin to a specific version for reproducibility
        }
      }
    }

    # Configure the Kubernetes provider
    provider "kubernetes" {
      # If you are running locally with Minikube or Kind,
      # Terraform will automatically use your current kubectl context.
      # For other configurations (e.g., cloud providers), you might need to specify
      # client_certificate, client_key, cluster_ca_certificate, and host.
    }

    # Define a Kubernetes Deployment resource
    resource "kubernetes_deployment" "nginx_app" {
      metadata {
        name = "nginx-deployment"
        labels = {
          app = "nginx"
        }
      }

      spec {
        replicas = 2 # We want 2 instances of our application

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
              image = "nginx:latest" # The Docker image to use
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

    **Explanation:**

    *   `terraform` block: Declares the required providers, specifying the `hashicorp/kubernetes` provider and a version.
    *   `provider "kubernetes"` block: Configures the Kubernetes provider. For local setups, it usually picks up your `kubectl` context automatically.
    *   `resource "kubernetes_deployment" "nginx_app"`: This is the core of our resource definition.
        *   `kubernetes_deployment`: The type of Kubernetes resource we are creating.
        *   `nginx_app`: A local name for this resource within your Terraform configuration.
        *   `metadata`: Contains the name and labels for the Kubernetes Deployment object.
        *   `spec`: Defines the desired state of the Deployment.
            *   `replicas`: The number of Pods to maintain.
            *   `selector`: Tells the Deployment which Pods it manages based on labels.
            *   `template`: Defines the Pods that will be created.
                *   `metadata`: Labels for the Pods.
                *   `spec`: Specification for the containers within the Pod.
                    *   `container`: Defines the container details, including the `image` (nginx:latest) and `ports` it exposes.

2.  **Initialize Terraform:**
    Open your terminal in the directory where you saved `main.tf` and run:

    ```bash
    terraform init
    ```
    This command downloads the necessary Kubernetes provider plugin.

3.  **Plan the Deployment:**
    Before applying any changes, it's good practice to see what Terraform will do:

    ```bash
    terraform plan
    ```
    This will show you an execution plan, detailing the resources that will be created, modified, or destroyed. You should see output indicating that one `kubernetes_deployment` will be created.

4.  **Apply the Deployment:**
    To actually create the Kubernetes Deployment, run:

    ```bash
    terraform apply
    ```
    Terraform will again show you the plan and ask for confirmation. Type `yes` and press Enter.

    Once applied successfully, Terraform will report that the resource has been created.

5.  **Verify in Kubernetes:**
    You can verify that the Deployment has been created in your Kubernetes cluster using `kubectl`:

    ```bash
    kubectl get deployments
    kubectl get pods
    ```
    You should see your `nginx-deployment` and its associated pods running.

## Managing Updates and Destruction

The power of Terraform lies not just in creation, but also in management.

*   **Updating:** To change the number of replicas, simply modify the `replicas = 2` line in `main.tf` to, say, `replicas = 3`, and run `terraform apply` again. Terraform will detect the difference and update your deployment.
*   **Destroying:** To remove the resources created by Terraform, run:

    ```bash
    terraform destroy
    ```
    This will remove the `nginx-deployment` and all associated Pods from your cluster.

## Conclusion

By defining your Kubernetes resources in Terraform configuration files, you gain a declarative, version-controlled, and automated way to manage your cluster's infrastructure. This practical application of Infrastructure Orchestration using Terraform empowers you to reliably provision and manage your Kubernetes resources, aligning with the broader goal of Infrastructure as Code.

## Supports

- [[skills/computing/systems-infrastructure/delivery-platforms/infrastructure-as-code/microskills/infrastructure-orchestration|Infrastructure Orchestration]]

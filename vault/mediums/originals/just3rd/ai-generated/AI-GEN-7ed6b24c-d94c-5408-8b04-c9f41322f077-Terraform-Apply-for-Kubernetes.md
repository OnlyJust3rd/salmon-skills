---
type: "medium"
title: "Applying Terraform Configurations to Kubernetes"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/systems-infrastructure/delivery-platforms/infrastructure-as-code/microskills/terraform-apply-for-kubernetes|terraform-apply-for-kubernetes]]"
learning-time-in-minutes: 3
---
# Applying Terraform Configurations to Kubernetes

This lesson focuses on using the `terraform apply` command to provision a basic Kubernetes resource. We'll walk through the practical steps involved in deploying a simple Kubernetes object using Terraform, building on the understanding that you can already define such resources in your Terraform configuration files.

## Understanding `terraform apply`

The `terraform apply` command is the core of Terraform's workflow for enacting changes. Once you've written your Infrastructure as Code (IaC) in `.tf` files, `terraform apply` reads these files, compares the desired state with the current state of your infrastructure, and then generates and executes a plan to reach that desired state. For Kubernetes, this means creating, updating, or deleting resources like Deployments, Services, or Namespaces.

## Prerequisites

Before you begin, ensure you have:

1.  **Terraform Installed:** Downloaded and configured on your system.
2.  **Kubernetes Cluster Access:** A running Kubernetes cluster (e.g., Minikube, Kind, or a cloud provider's managed Kubernetes service) and `kubectl` configured to interact with it.
3.  **Terraform Kubernetes Provider Configured:** Your Terraform code should include a `provider "kubernetes" {}` block that correctly points to your cluster.

## Step-by-Step Application

Let's assume you have a Terraform configuration file (e.g., `main.tf`) that defines a simple Kubernetes Deployment.

### 1. Define Your Kubernetes Resource

Here’s a minimal example of a Kubernetes Deployment defined in Terraform:

```terraform
# main.tf

terraform {
  required_providers {
    kubernetes = {
      source = "hashicorp/kubernetes"
      version = "2.19.0" # Use a recent version
    }
  }
}

provider "kubernetes" {
  # Configuration for your Kubernetes cluster.
  # This might involve config_path, config_context, or environment variables.
  # For local development with Minikube, often no explicit config is needed
  # if kubectl is already configured.
}

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
          image = "nginx:1.21.6" # Or any other desired Nginx image and version
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

### 2. Initialize Terraform

If this is your first time working with this configuration, you need to initialize Terraform. This downloads the necessary provider plugins.

Run the following command in your terminal, in the same directory as your `.tf` file:

```bash
terraform init
```

This command creates a `.terraform` directory and downloads the `kubernetes` provider.

### 3. Plan the Deployment

Before applying, it's crucial to see what changes Terraform intends to make. This step helps prevent unintended modifications.

Run:

```bash
terraform plan
```

Terraform will analyze your configuration and your current Kubernetes state. It will output a detailed plan, showing which resources will be created, modified, or destroyed. For our example, you should see output indicating that one `kubernetes_deployment` will be created.

```
Terraform used the available provider to generate this plan.

Terraform will perform the following actions:

  # kubernetes_deployment.nginx_app will be created
  + resource "kubernetes_deployment" "nginx_app" {
      + id        = (known after apply)
      + manifest  = jsonencode(
            {
              + apiVersion = "apps/v1"
              + kind       = "Deployment"
              + metadata = {
                  + annotations = {}
                  + creationTimestamp = (known after apply)
                  + finalizers = []
                  + generation = (known after apply)
                  + labels = {
                      + "app" = "nginx"
                    }
                  + managedFields = (known after apply)
                  + name       = "nginx-deployment"
                  + namespace  = "default" # Or your configured namespace
                  + resourceVersion = (known after apply)
                  + uid        = (known after apply)
                }
              + spec = {
                  + progressDeadlineSeconds = 600
                  + replicas              = 2
                  + revisionHistoryLimit  = 10
                  + selector              = {
                      + matchLabels = {
                          + "app" = "nginx"
                        }
                    }
                  + strategy              = {
                      + rollingUpdate = {
                          + maxSurge       = "25%"
                          + maxUnavailable = "25%"
                        }
                      + type = "RollingUpdate"
                    }
                  + template = {
                      + metadata = {
                          + creationTimestamp = (known after apply)
                          + labels = {
                              + "app" = "nginx"
                            }
                        }
                      + spec = {
                          + containers = [
                              + {
                                  + image = "nginx:1.21.6"
                                  + name  = "nginx-container"
                                  + ports = [
                                      + {
                                          + containerPort = 80
                                          + protocol      = "TCP"
                                        }
                                    ]
                                  + resources = {}
                                }
                            ]
                          + dnsPolicy     = "ClusterFirst"
                          + restartPolicy = "Always"
                          + schedulerName = "default-scheduler"
                          + securityContext = {}
                          + terminationGracePeriodSeconds = 30
                        }
                    }
                }
              + status = (known after apply)
            }
        )
      + hash    = (known after apply)
      + role    = "namespaced"
      + time_created = (known after apply)
    }

Plan: 1 to add, 0 to change, 0 to destroy.
```

### 4. Apply the Changes

Once you are satisfied with the plan, you can execute it to provision the resource.

Run:

```bash
terraform apply
```

Terraform will again show you the plan and ask for confirmation. Type `yes` and press Enter.

```
Terraform will perform the actions described above.
Only 'yes' will be accepted to approve.

  Enter a value: yes
```

Terraform will now communicate with your Kubernetes API server to create the `nginx-deployment`. You'll see output indicating the progress.

### 5. Verify the Deployment

After `terraform apply` completes successfully, you can verify that your Nginx deployment has been created in Kubernetes.

Use `kubectl` to check the deployments:

```bash
kubectl get deployments
```

You should see an output similar to this:

```
NAME               READY   UP-TO-DATE   AVAILABLE   AGE
nginx-deployment   2/2     2            2           1m
```

You can also check the pods created by the deployment:

```bash
kubectl get pods -l app=nginx
```

This will show you the running Nginx pods.

## Key Considerations

*   **State File:** Terraform maintains a state file (e.g., `terraform.tfstate`) that tracks the resources it manages. Never manually edit this file unless you know exactly what you're doing.
*   **`terraform destroy`:** To remove the resources provisioned by Terraform, you would run `terraform destroy`. Always use `plan` before `destroy` to ensure you're removing the correct resources.
*   **Provider Configuration:** The `provider "kubernetes"` block is critical. Ensure it's configured correctly for your environment. This might involve specifying `config_path` to your `~/.kube/config` or using environment variables.
*   **Error Handling:** If `terraform apply` fails, carefully read the error messages. They often provide clues about what went wrong, such as incorrect resource definitions or connectivity issues with your Kubernetes cluster.

By successfully running `terraform apply`, you have demonstrated the ability to provision a basic Kubernetes resource using Terraform, effectively bridging your Infrastructure as Code definitions with your live infrastructure.

## Supports

- [[skills/computing/systems-infrastructure/delivery-platforms/infrastructure-as-code/microskills/terraform-apply-for-kubernetes|Terraform Apply for Kubernetes]]

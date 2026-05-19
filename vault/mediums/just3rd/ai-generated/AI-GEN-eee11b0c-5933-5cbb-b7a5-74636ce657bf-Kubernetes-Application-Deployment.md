---
type: "medium"
title: "Deploying Applications with Helm: A Practical Guide"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/cloud-devops/platform-engineering/kubernetes/microskills/kubernetes-application-deployment|Kubernetes Application Deployment]]"
---
# Deploying Applications with Helm: A Practical Guide

This lesson focuses on the practical application of Helm for deploying and managing applications within a Kubernetes environment. We'll explore the core commands and concepts necessary to effectively utilize Helm for your deployments.

## Understanding Helm Charts

At its heart, Helm uses something called a "Chart." Think of a Chart as a package that contains all the necessary Kubernetes resource definitions (like Deployments, Services, ConfigMaps, etc.) to run an application. A Chart also includes a `Chart.yaml` file which describes the chart, and a `values.yaml` file which holds configuration parameters that can be easily customized.

When you install a Chart, Helm creates a "Release." A Release is a specific instance of a Chart running in your Kubernetes cluster. You can have multiple Releases from the same Chart, each with different configurations.

## Core Helm Commands for Deployment

We'll cover the essential Helm commands for deploying and managing applications.

### 1. Adding a Helm Repository

Helm can fetch Charts from various repositories. You'll often need to add a repository that hosts the Charts for the applications you want to deploy.

**Command:**

```bash
helm repo add <repo-name> <repo-url>
```

**Example:** Adding the Bitnami Helm repository, which hosts many popular applications:

```bash
helm repo add bitnami https://charts.bitnami.com/bitnami
```

After adding a repository, it's good practice to update your local cache to fetch the latest information about available charts.

**Command:**

```bash
helm repo update
```

### 2. Searching for Charts

Once repositories are added, you can search for available Charts.

**Command:**

```bash
helm search repo <chart-name>
```

**Example:** Searching for the Nginx chart:

```bash
helm search repo nginx
```

This will show you the chart name, version, and the repository it belongs to.

### 3. Installing a Chart

This is the core command for deploying an application.

**Command:**

```bash
helm install <release-name> <chart-name> -n <namespace>
```

*   `<release-name>`: A unique name for this specific deployment instance.
*   `<chart-name>`: The name of the chart you want to install (e.g., `bitnami/nginx`).
*   `-n <namespace>`: (Optional) Specifies the Kubernetes namespace where the release should be installed. If omitted, it defaults to the `default` namespace.

**Example:** Installing Nginx with the release name `my-nginx` in the `default` namespace:

```bash
helm install my-nginx bitnami/nginx
```

**Customizing Installation with `values.yaml`:**

You can override default configurations in a chart by providing your own values.

**Command:**

```bash
helm install <release-name> <chart-name> -f <your-values-file.yaml> -n <namespace>
```

Alternatively, you can specify individual values directly:

**Command:**

```bash
helm install <release-name> <chart-name> --set <key1>=<value1>,<key2>=<value2> -n <namespace>
```

**Example:** Installing Nginx and setting the replica count to 3 and enabling service creation:

```bash
helm install my-custom-nginx bitnami/nginx \
  --set replicaCount=3 \
  --set service.type=LoadBalancer \
  -n default
```

### 4. Listing Releases

To see what applications you have deployed and their status.

**Command:**

```bash
helm list -n <namespace>
```

**Example:** Listing releases in the `default` namespace:

```bash
helm list -n default
```

This will show you the release name, revision, updated status, and deployed chart.

### 5. Upgrading a Release

When a new version of a chart is available, or you want to change its configuration.

**Command:**

```bash
helm upgrade <release-name> <chart-name> -n <namespace>
```

You can also upgrade with new values:

**Command:**

```bash
helm upgrade <release-name> <chart-name> -f <new-values.yaml> -n <namespace>
```

**Example:** Upgrading `my-nginx` to use a new version of the Nginx chart and increasing replicas:

```bash
helm upgrade my-nginx bitnami/nginx \
  --set replicaCount=5 \
  -n default
```

### 6. Rolling Back a Release

If an upgrade causes issues, you can revert to a previous version.

**Command:**

```bash
helm rollback <release-name> <revision-number> -n <namespace>
```

First, you need to find the revision number:

```bash
helm history <release-name> -n <namespace>
```

**Example:** Rolling back `my-nginx` to revision 2:

```bash
helm rollback my-nginx 2 -n default
```

### 7. Uninstalling a Release

To remove an application deployed by Helm.

**Command:**

```bash
helm uninstall <release-name> -n <namespace>
```

**Example:** Uninstalling `my-nginx`:

```bash
helm uninstall my-nginx -n default
```

## Practical Application

Imagine you need to deploy a web application. Instead of manually creating all the YAML files for a Deployment, Service, Ingress, and any necessary ConfigMaps, you can find a Helm chart for your application (or create one if it doesn't exist).

1.  **Add Repository:** If the chart is in a public repository, add it.
2.  **Search:** Find the specific chart for your application.
3.  **Customize:** Check the chart's `values.yaml` to understand configurable parameters. You might need to set the image tag, the number of replicas, or environment variables.
4.  **Install:** Use `helm install` with your custom values.
5.  **Monitor:** Use `helm list` to check the status.
6.  **Manage:** If you need to scale up or change configuration, use `helm upgrade`. If something goes wrong, `helm rollback`.
7.  **Clean up:** When done, use `helm uninstall`.

By mastering these Helm commands, you gain a powerful tool for managing your Kubernetes application deployments efficiently.

## Supports

- [[skills/cloud-devops/platform-engineering/kubernetes/microskills/kubernetes-application-deployment|Kubernetes Application Deployment]]

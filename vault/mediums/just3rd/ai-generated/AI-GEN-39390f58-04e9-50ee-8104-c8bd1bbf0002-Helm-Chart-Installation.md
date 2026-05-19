---
type: "medium"
title: "Installing Applications with Helm Charts"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/cloud-devops/platform-engineering/kubernetes/microskills/helm-chart-installation|Helm Chart Installation]]"
---
# Installing Applications with Helm Charts

This lesson focuses on the fundamental skill of installing applications in Kubernetes using Helm charts. Helm acts as a package manager for Kubernetes, simplifying the deployment and management of complex applications.

## What is a Helm Chart?

A Helm chart is a collection of files that describe a related set of Kubernetes resources. These resources can include Deployments, Services, ConfigMaps, PersistentVolumeClaims, and more, all packaged together to define and deploy an application. Think of a chart as a blueprint for your application on Kubernetes.

## Why Use Helm Charts for Installation?

*   **Simplification:** Instead of writing and managing numerous Kubernetes YAML files, you can deploy an entire application with a single command.
*   **Reproducibility:** Charts ensure that your application is deployed consistently across different environments.
*   **Reusability:** Many popular applications provide official Helm charts, allowing you to install them with ease.
*   **Configuration:** Charts allow for easy customization of deployments through a values file.

## The `helm install` Command

The primary command for installing an application using Helm is `helm install`. It takes a release name (a unique identifier for your deployment) and the name of the chart you want to install.

### Basic Syntax

```bash
helm install <release-name> <chart-name>
```

*   `<release-name>`: A name you choose for this specific installation of the chart. For example, `my-nginx-webserver`.
*   `<chart-name>`: The name of the chart. This can be a chart from a repository (e.g., `bitnami/nginx`) or a local chart directory.

### Installing from a Chart Repository

Before you can install charts from a repository, you need to add the repository to your Helm configuration.

#### 1. Add a Chart Repository

```bash
helm repo add <repo-name> <repo-url>
```

*   `<repo-name>`: A short, memorable name for the repository (e.g., `bitnami`).
*   `<repo-url>`: The URL of the Helm chart repository (e.g., `https://charts.bitnami.com/bitnami`).

**Example:** Add the Bitnami chart repository.

```bash
helm repo add bitnami https://charts.bitnami.com/bitnami
```

#### 2. Update Your Local Repository Index

After adding a repository, it's good practice to update your local index to fetch the latest chart information.

```bash
helm repo update
```

#### 3. Search for Charts

You can search for available charts in your configured repositories.

```bash
helm search repo <keyword>
```

**Example:** Search for Nginx charts.

```bash
helm search repo nginx
```

This will list charts that match "nginx" from all your added repositories.

#### 4. Install a Chart

Once you've identified the chart you want, you can install it.

```bash
helm install <release-name> <repo-name>/<chart-name>
```

**Example:** Install the Nginx chart from the Bitnami repository with the release name `my-webserver`.

```bash
helm install my-webserver bitnami/nginx
```

When you run this command, Helm will:
1.  Download the `nginx` chart from the `bitnami` repository.
2.  Render the templates within the chart using default values.
3.  Create the corresponding Kubernetes resources (Deployment, Service, etc.) in your cluster.
4.  Register this deployment as a "release" named `my-webserver`.

You should see output indicating the release name and that it was "installed successfully."

### Installing a Local Chart

If you have a chart stored locally on your machine (either downloaded or developed yourself), you can install it directly by providing the path to the chart's directory.

**Example:** Assuming you have a local chart at `./my-custom-app-chart`.

```bash
helm install <release-name> ./my-custom-app-chart
```

**Example:** Install a local chart with the release name `custom-app`.

```bash
helm install custom-app ./my-custom-app-chart
```

## Verifying Your Installation

After running `helm install`, you can verify that your application has been deployed correctly.

### List Helm Releases

To see your deployed releases:

```bash
helm list
```

This command will show you the NAME, NAMESPACE, REVISION, UPDATED, STATUS, and CHART of your Helm releases.

### Check Kubernetes Resources

Since Helm creates Kubernetes resources, you can use `kubectl` to inspect them.

```bash
kubectl get pods
kubectl get services
kubectl get deployments
```

**Example Output (after installing `my-webserver`):**

You might see a pod named something like `my-webserver-nginx-abcdef-ghijk` and a service named `my-webserver-nginx`.

## Customizing Installations with `values.yaml`

Helm charts are highly configurable. You can override the default settings provided by a chart by providing your own configuration values.

### Using `--set`

For simple overrides, you can use the `--set` flag.

```bash
helm install <release-name> <chart-name> --set <key1>=<value1>,<key2>=<value2>
```

**Example:** Set the replica count for the Nginx deployment to 3.

```bash
helm install my-webserver-replicas bitnami/nginx --set replicaCount=3
```

### Using a Custom Values File (`-f` or `--values`)

For more complex configurations, it's best to create a separate YAML file (e.g., `my-values.yaml`) containing your desired overrides.

**Example `my-values.yaml`:**

```yaml
replicaCount: 2
service:
  type: LoadBalancer
ingress:
  enabled: true
  hostname: myapp.example.com
```

Then, install the chart using this file:

```bash
helm install <release-name> <chart-name> -f my-values.yaml
```

**Example:** Install Nginx with custom values from `my-values.yaml`.

```bash
helm install my-custom-nginx bitnami/nginx -f my-values.yaml
```

This allows you to manage your application's configuration separately from the chart itself, making it easier to track and reuse.

## Key Takeaways

*   Helm charts package Kubernetes resources for applications.
*   Use `helm install` to deploy applications.
*   Add chart repositories with `helm repo add` and update with `helm repo update`.
*   Verify installations with `helm list` and `kubectl` commands.
*   Customize deployments by overriding default values using `--set` or custom YAML files with `-f`.

## Supports

- [[skills/cloud-devops/platform-engineering/kubernetes/microskills/helm-chart-installation|Helm Chart Installation]]

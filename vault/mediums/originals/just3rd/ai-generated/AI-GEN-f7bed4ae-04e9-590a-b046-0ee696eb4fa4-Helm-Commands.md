---
type: "medium"
title: "Helm Commands: Your Toolkit for Kubernetes Application Management"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/systems-infrastructure/compute-runtime/kubernetes/microskills/helm-commands|helm-commands]]"
learning-time-in-minutes: 4
---
# Helm Commands: Your Toolkit for Kubernetes Application Management

This lesson focuses on the practical application of Helm commands, empowering you to install, upgrade, and manage your applications on Kubernetes.

## What are Helm Commands?

Helm commands are the interface to the Helm package manager for Kubernetes. They allow you to interact with Helm charts, which are pre-packaged sets of Kubernetes resources designed to deploy applications. Think of charts as recipes, and Helm commands as the tools you use to prepare and serve those recipes on your Kubernetes cluster.

## Core Helm Commands and Their Usage

Let's explore some of the most fundamental Helm commands you'll use regularly.

### `helm install`

This command is your primary tool for deploying an application using a Helm chart.

**When to use:** When you need to deploy a new application or a new version of an application for the first time.

**Syntax:**

```bash
helm install <release-name> <chart-path-or-repo>/<chart-name> [flags]
```

*   `<release-name>`: A unique name for this specific deployment of the chart (e.g., `my-nginx-webserver`).
*   `<chart-path-or-repo>/<chart-name>`: Specifies the chart to install. This can be a local path to a chart directory, a URL to a chart archive, or a chart from a configured Helm repository.
*   `[flags]`: Optional flags to customize the installation.

**Example:**

Let's say you have a chart named `my-app` in a repository named `my-repo`. To install it with the release name `my-production-app`:

```bash
helm install my-production-app my-repo/my-app
```

**Customizing Installation with Values:**

Often, you'll need to customize settings within a chart without modifying the chart itself. This is done using values files or command-line overrides.

```bash
helm install my-production-app my-repo/my-app --set image.tag=1.2.3 --values my-custom-values.yaml
```

*   `--set`: Overrides individual values directly on the command line.
*   `--values` (`-f`): Specifies a YAML file containing custom values.

### `helm upgrade`

Used to update an existing release with a new chart version or new configuration values.

**When to use:** When you need to deploy a new version of an application or change its configuration after it has already been installed.

**Syntax:**

```bash
helm upgrade <release-name> <chart-path-or-repo>/<chart-name> [flags]
```

**Example:**

To upgrade `my-production-app` to a newer version of the `my-app` chart, perhaps with an updated image tag:

```bash
helm upgrade my-production-app my-repo/my-app --set image.tag=1.2.4
```

You can also use `--values` here to apply configuration changes.

### `helm uninstall`

Removes a release and all of its associated Kubernetes resources.

**When to use:** When you no longer need an application deployed via Helm.

**Syntax:**

```bash
helm uninstall <release-name> [flags]
```

**Example:**

To uninstall the `my-production-app` release:

```bash
helm uninstall my-production-app
```

**Important:** Be cautious with this command as it permanently deletes your application's resources.

### `helm list`

Displays all releases installed in the current Kubernetes cluster.

**When to use:** To see what applications are currently deployed, their status, and their chart versions.

**Syntax:**

```bash
helm list [flags]
```

**Example:**

```bash
helm list
```

This will output a table showing your releases, their status (deployed, failed, etc.), and the chart they are using.

### `helm status`

Shows the status of a specific release.

**When to use:** To get detailed information about a particular deployed application, including its deployed resources and any issues.

**Syntax:**

```bash
helm status <release-name> [flags]
```

**Example:**

```bash
helm status my-production-app
```

This command provides a comprehensive overview of your release, often including links to the deployed Kubernetes resources.

### `helm repo`

Manages Helm chart repositories.

**When to use:** To add, remove, or update the list of chart repositories that Helm can access.

**Commands within `helm repo`:**

*   `helm repo add <repo-name> <repo-url>`: Adds a new repository.
*   `helm repo update`: Refreshes the list of charts from all added repositories.
*   `helm repo list`: Lists all configured repositories.
*   `helm repo remove <repo-name>`: Removes a repository.

**Example:**

Adding the official stable Helm repository:

```bash
helm repo add stable https://charts.helm.sh/stable
helm repo update
```

## Putting It Together: A Practical Scenario

Imagine you need to deploy a simple Nginx web server.

1.  **Add a repository (if not already added):** You might use the Bitnami repository, which hosts many popular applications.

    ```bash
    helm repo add bitnami https://charts.bitnami.com/bitnami
    helm repo update
    ```

2.  **Search for the chart:** Let's find the Nginx chart.

    ```bash
    helm search repo nginx
    ```

    This will show available Nginx charts. Let's assume you want to use `bitnami/nginx`.

3.  **Install the application:** You'll install it with a release name, say `my-nginx`. You might also want to customize the replica count.

    ```bash
    helm install my-nginx bitnami/nginx --set replicaCount=2
    ```

4.  **Check the status:** Verify the deployment.

    ```bash
    helm status my-nginx
    ```

5.  **Upgrade the application:** Later, you decide you want three replicas.

    ```bash
    helm upgrade my-nginx bitnami/nginx --set replicaCount=3
    ```

6.  **Uninstall the application:** When you're done, clean up.

    ```bash
    helm uninstall my-nginx
    ```

## Conclusion

Mastering these fundamental Helm commands is crucial for efficiently managing applications on Kubernetes. They provide a structured and repeatable way to deploy, configure, and maintain your software. As you progress, you'll explore more advanced commands and customization options.

## Supports

- [[skills/computing/systems-infrastructure/compute-runtime/kubernetes/microskills/helm-commands|Helm Commands]]

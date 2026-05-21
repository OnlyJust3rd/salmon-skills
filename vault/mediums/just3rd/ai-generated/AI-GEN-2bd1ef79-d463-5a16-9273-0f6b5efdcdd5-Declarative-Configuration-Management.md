---
type: "medium"
title: "Declarative Configuration Management in GitOps"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/cloud-devops/platform-engineering/gitops/microskills/declarative-configuration-management|declarative-configuration-management]]"
---
# Declarative Configuration Management in GitOps

In the realm of GitOps, applying **declarative configuration management** is fundamental to achieving automated and reliable deployments. Instead of telling a system *how* to do something (imperative), you tell it *what* you want the end state to be. Git becomes the single source of truth for this desired state.

## What is Declarative Configuration?

Declarative configuration means describing the *desired state* of your system in configuration files. These files are stored in Git. Tools then read these files and ensure the actual state of your infrastructure and applications matches the desired state.

Think of it like ordering a meal at a restaurant. You declare what you want (the menu item), and the kitchen figures out the steps to prepare it. You don't tell the chef, "First, chop the onions, then sauté them for 3 minutes..." You simply say, "I'll have the steak, medium-rare."

In GitOps, the "menu" is your configuration files (e.g., YAML for Kubernetes), and the "kitchen" is your GitOps tool (like Argo CD or Flux).

## Core Components of Declarative Configuration

1.  **Configuration Files:** These files define the desired state. For Kubernetes deployments, this typically involves YAML manifests for:
    *   Deployments (how many replicas, which container image)
    *   Services (how to expose your application)
    *   ConfigMaps and Secrets (application configuration and sensitive data)
    *   Ingresses (routing external traffic)
    *   Custom Resource Definitions (CRDs) used by operators.

2.  **Git Repository:** This is your single source of truth. All configuration files are stored here. Any changes to the desired state are made via Git commits and pull requests.

3.  **GitOps Agent/Controller:** This is the tool that monitors your Git repository and your cluster. It compares the desired state in Git with the actual state in the cluster and makes necessary adjustments to reconcile them.

## Applying Declarative Configuration: A Kubernetes Example

Let's illustrate with a simple Kubernetes Deployment.

**Scenario:** You want to deploy a web application named `my-webapp` using the `nginx:latest` Docker image, with 3 replicas.

### 1. Create the Deployment Manifest (YAML)

You would create a file, for example, `app-deployment.yaml`, in your Git repository:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-webapp
  labels:
    app: webapp
spec:
  replicas: 3
  selector:
    matchLabels:
      app: webapp
  template:
    metadata:
      labels:
        app: webapp
    spec:
      containers:
      - name: my-webapp
        image: nginx:latest
        ports:
        - containerPort: 80
```

**Explanation:**

*   `apiVersion`, `kind`: Standard Kubernetes object definitions.
*   `metadata.name`: The name of your deployment.
*   `spec.replicas`: The desired number of pods.
*   `spec.selector`: How the deployment finds which pods to manage.
*   `spec.template.spec.containers`: Defines the container running in the pods, including its `name` and `image`.

### 2. Commit to Git

You would commit this file to your Git repository. For example:

```bash
git add app-deployment.yaml
git commit -m "feat: Add my-webapp deployment with 3 replicas"
git push origin main
```

### 3. GitOps Agent's Role

Your GitOps agent (e.g., Argo CD, Flux) is configured to watch this Git repository. When it detects the new or updated `app-deployment.yaml` file, it will:

1.  **Read the manifest:** It parses the YAML file to understand the desired state (3 replicas, `nginx:latest` image).
2.  **Compare with cluster state:** It checks the current state of deployments named `my-webapp` in your Kubernetes cluster.
3.  **Reconcile:** If the cluster doesn't have this deployment, or if it has fewer than 3 replicas, or if it's using a different image, the agent will instruct the Kubernetes API server to create or update the deployment to match the `app-deployment.yaml`.

### 4. Updating the Configuration

Now, let's say you want to update the image to `nginx:1.21.6` and increase replicas to 5.

You would modify `app-deployment.yaml` in Git:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-webapp
  labels:
    app: webapp
spec:
  replicas: 5 # Changed from 3
  selector:
    matchLabels:
      app: webapp
  template:
    metadata:
      labels:
        app: webapp
    spec:
      containers:
      - name: my-webapp
        image: nginx:1.21.6 # Changed from nginx:latest
        ports:
        - containerPort: 80
```

Commit and push:

```bash
git add app-deployment.yaml
git commit -m "chore: Update my-webapp image to 1.21.6 and increase replicas to 5"
git push origin main
```

The GitOps agent will detect this change, compare it to the cluster, and automatically update the deployment to have 5 replicas running the `nginx:1.21.6` image.

## Key Benefits of Declarative Configuration in GitOps

*   **Immutability:** Git history provides a clear audit trail of all changes. If something goes wrong, you can easily revert to a previous known-good state by reverting a Git commit.
*   **Consistency:** The desired state is defined in a central place, ensuring that environments are configured consistently.
*   **Automation:** Changes in Git are automatically translated into actions in your infrastructure, reducing manual effort and potential errors.
*   **Version Control:** All configuration is versioned, enabling rollbacks, branching, and collaboration.

By mastering declarative configuration, you lay the groundwork for robust and automated GitOps workflows, ensuring your applications are deployed reliably and can be managed efficiently.

## Supports

- [[skills/cloud-devops/platform-engineering/gitops/microskills/declarative-configuration-management|Declarative Configuration Management]]

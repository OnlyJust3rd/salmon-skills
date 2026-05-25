---
type: "medium"
title: "Automating Kubernetes Deployments with GitOps"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/systems-infrastructure/delivery-platforms/gitops/microskills/kubernetes-application-deployment-automation|kubernetes-application-deployment-automation]]"
learning-time-in-minutes: 4
---
# Automating Kubernetes Deployments with GitOps

This lesson focuses on using GitOps principles to automate the deployment and management of applications on Kubernetes. We'll explore the core concepts and practical steps involved in setting up a GitOps workflow for your Kubernetes applications.

## Understanding the GitOps Workflow for Kubernetes

GitOps treats Git as the single source of truth for declarative infrastructure and applications. When applied to Kubernetes, this means your Git repository stores the desired state of your applications and cluster configuration. An automated process then ensures the live Kubernetes cluster matches this desired state.

Here's the typical GitOps flow for Kubernetes:

1.  **Developer Commits Code:** A developer pushes application code changes to a Git repository.
2.  **CI Pipeline Builds Image:** A Continuous Integration (CI) pipeline triggers, builds a new container image, and pushes it to a container registry. The CI pipeline also updates the Kubernetes manifests (e.g., Deployment, Service YAML files) in a separate Git repository (or the same one) to point to the new image tag.
3.  **GitOps Operator Detects Change:** A GitOps operator (like Argo CD or Flux CD) running within the Kubernetes cluster continuously monitors the Git repository containing the manifests.
4.  **Operator Reconciles State:** When the operator detects a change in the Git repository (a new commit with updated manifests), it compares the desired state in Git with the current state of the cluster.
5.  **Operator Applies Changes:** If there's a discrepancy, the operator automatically applies the necessary changes to the Kubernetes cluster to make it match the desired state. This could involve updating deployments, creating new services, or rolling out new versions of applications.

## Key Components of a GitOps Kubernetes Deployment

To implement this, you'll need a few core components:

*   **Git Repository:** This is your single source of truth. It will store your Kubernetes manifests. You might use a monorepo or separate repositories for application code and Kubernetes configurations.
*   **Container Registry:** Where your built container images are stored (e.g., Docker Hub, Google Container Registry, AWS ECR).
*   **CI/CD System:** For building container images and triggering updates to your Git manifests (e.g., Jenkins, GitLab CI, GitHub Actions, CircleCI).
*   **GitOps Operator:** A tool installed in your Kubernetes cluster that watches your Git repository and reconciles the cluster state. Popular choices include Argo CD and Flux CD.

## Practical Steps: Setting Up a Basic GitOps Deployment

Let's outline a simplified process using a hypothetical setup with a Git repository for manifests and Argo CD as the GitOps operator.

### Step 1: Define Your Kubernetes Manifests

First, create your Kubernetes deployment YAML file. This defines how your application should run.

```yaml
# deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-web-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: my-web-app
  template:
    metadata:
      labels:
        app: my-web-app
    spec:
      containers:
      - name: web
        image: your-docker-registry/my-web-app:v1.0.0 # Initial image tag
        ports:
        - containerPort: 80
---
apiVersion: v1
kind: Service
metadata:
  name: my-web-app-service
spec:
  selector:
    app: my-web-app
  ports:
    - protocol: TCP
      port: 80
      targetPort: 80
  type: LoadBalancer # Or ClusterIP, NodePort depending on your needs
```

Commit this `deployment.yaml` (and any other related manifests like `service.yaml`) to your Git repository.

### Step 2: Configure Your CI Pipeline

Your CI pipeline will:

1.  Build your application's container image.
2.  Tag it with a version (e.g., `v1.0.1`).
3.  Push the image to your container registry.
4.  **Crucially, update the `deployment.yaml` in your Git repository to reflect the new image tag.** Many tools can help with this, often by using `sed` or a dedicated manifest update tool.

Example of a conceptual CI step to update manifests:

```bash
# Assuming you have a script that updates the image tag in deployment.yaml
# For example, using kustomize or a simple sed command.
# This is a simplified representation:
sed -i 's|image: your-docker-registry/my-web-app:v1.0.0|image: your-docker-registry/my-web-app:v1.0.1|g' deployment.yaml

# Then commit and push the updated deployment.yaml
git add deployment.yaml
git commit -m "Update my-web-app image to v1.0.1"
git push origin main
```

### Step 3: Install and Configure a GitOps Operator (Argo CD Example)

You'll install Argo CD into your Kubernetes cluster. Once installed, you'll create an Argo CD `Application` resource. This resource tells Argo CD *which* Git repository to watch and *which* path within that repository contains your Kubernetes manifests.

Create an `argocd-application.yaml`:

```yaml
# argocd-application.yaml
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: my-web-app-app
  namespace: argocd # Namespace where Argo CD is installed
spec:
  project: default
  source:
    repoURL: https://github.com/your-username/your-manifests-repo.git # Your Git repo URL
    targetRevision: HEAD # Branch to monitor
    path: /path/to/your/manifests # Directory within the repo containing manifests
  destination:
    server: https://kubernetes.default.svc # Target cluster URL
    namespace: default # Target namespace for the application deployment
  syncPolicy:
    automated:
      prune: true
      selfHeal: true
```

Apply this to your cluster:

```bash
kubectl apply -f argocd-application.yaml -n argocd
```

### Step 4: Observe the Automation

Once Argo CD is configured and the `Application` resource is applied:

*   Argo CD will clone your specified Git repository.
*   It will find your `deployment.yaml` and `service.yaml`.
*   It will compare the manifests in Git with the current state of your Kubernetes cluster.
*   Since you've just applied the configuration, it will likely create the `Deployment` and `Service`.

Now, when your CI pipeline updates the `deployment.yaml` in Git with a new image tag (e.g., `v1.0.1`), Argo CD will detect this change. It will automatically pull the updated manifests and apply them to your cluster, performing a rolling update of your `my-web-app` deployment.

## Benefits of GitOps for Kubernetes Deployments

*   **Single Source of Truth:** Git provides a clear, auditable history of all changes.
*   **Increased Reliability:** Automated reconciliation ensures the cluster always matches the desired state, reducing drift.
*   **Faster Deployments:** Developers can push changes to Git, and automation handles the rest.
*   **Easier Rollbacks:** Rolling back is as simple as reverting a commit in Git.
*   **Improved Security:** Git permissions control who can deploy changes.

By adopting GitOps, you move towards a more declarative, automated, and robust way of managing your applications on Kubernetes.

## Supports

- [[skills/computing/systems-infrastructure/delivery-platforms/gitops/microskills/kubernetes-application-deployment-automation|Kubernetes Application Deployment Automation]]

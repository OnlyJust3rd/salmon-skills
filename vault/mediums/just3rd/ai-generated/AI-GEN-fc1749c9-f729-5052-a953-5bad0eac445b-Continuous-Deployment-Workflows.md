---
type: "medium"
title: "Setting Up Automated Application Deployments with Git Commits"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/cloud-devops/platform-engineering/gitops/microskills/continuous-deployment-workflows|continuous-deployment-workflows]]"
---
# Setting Up Automated Application Deployments with Git Commits

This lesson focuses on the core of GitOps: automating your application deployments by directly linking them to changes in your Git repository. We'll explore how to set up these continuous deployment workflows, ensuring that every approved commit in your Git repository can trigger a deployment to your target environment.

## Core Idea: The Git Commit as the Source of Truth

In a GitOps workflow, your Git repository doesn't just store your application's code; it also defines the desired state of your deployments. This means the configuration for your application (e.g., container images, resource limits, environment variables) lives alongside your application code or in a dedicated configuration repository.

When you make a change to your application code and merge it into a designated branch (like `main` or `production`), this commit signifies that you want to deploy this new version. A GitOps agent (like Argo CD or Flux CD) continuously monitors this branch. Upon detecting a new commit, it pulls the updated configuration and reconciles the live state of your deployment with the desired state defined in Git.

## How It Works: The Trigger Mechanism

The automation process hinges on detecting changes in your Git repository and translating those changes into actions on your infrastructure. Here's a breakdown of the typical flow:

1.  **Developer Commits Code:** A developer makes changes to the application and commits them.
2.  **Pull Request & Merge:** The code is submitted as a pull request, reviewed, and then merged into the main deployment branch (e.g., `main`).
3.  **GitOps Agent Detection:** A GitOps agent (running within your cluster or as an external service) polls the Git repository at regular intervals or receives webhook notifications from your Git provider (GitHub, GitLab, Bitbucket).
4.  **Configuration Update:** The agent identifies the new commit and fetches the updated configuration files from the repository.
5.  **Reconciliation:** The agent compares the desired state (from Git) with the current state of your deployment in the target environment (e.g., Kubernetes).
6.  **Automated Deployment:** If there's a difference, the agent automatically applies the necessary changes to bring the live environment into sync with the desired state defined by the Git commit. This typically involves updating Kubernetes deployments, services, or other resources.

## Practical Steps to Implement

Setting up continuous deployment workflows involves a few key components:

### 1. Git Repository Structure

Organize your Git repository to hold both your application code and its deployment configurations. A common pattern is to have a monorepo where the `kubernetes/` or `deploy/` directory contains all the YAML manifests for your application. Alternatively, you can use a separate GitOps repository that solely manages configurations for multiple applications.

**Example Directory Structure (within your application repo):**

```
my-app/
├── src/
│   └── ... (your application code)
├── Dockerfile
└── kubernetes/
    ├── deployment.yaml
    ├── service.yaml
    └── ingress.yaml
```

### 2. GitOps Agent Configuration

You'll need to install and configure a GitOps agent. Popular choices include:

*   **Argo CD:** A declarative, GitOps continuous delivery tool for Kubernetes.
*   **Flux CD:** A set of continuous and progressive delivery solutions for Kubernetes.

The configuration for these agents typically involves pointing them to your Git repository, specifying the branch to monitor, and defining the path within the repository where your Kubernetes manifests are located.

**Example Argo CD Application Configuration (simplified):**

This configuration tells Argo CD to monitor a specific Git repository and branch, and to look for Kubernetes manifests in a `kubernetes/` directory.

```yaml
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: my-app-deployment
  namespace: argocd # Namespace where Argo CD is installed
spec:
  project: default
  source:
    repoURL: https://github.com/your-username/your-app-repo.git
    targetRevision: HEAD # Monitor the latest commit on the default branch
    path: kubernetes/ # Path to your Kubernetes manifests
  destination:
    server: https://kubernetes.default.svc # Target Kubernetes cluster
    namespace: my-app # Namespace to deploy into
  syncPolicy:
    automated: # Enable automated synchronization
      prune: true # Automatically prune deleted resources
      selfHeal: true # Automatically reconcile drifted states
```

### 3. Git Commit Workflow

Establish a clear branching and merging strategy. Developers should commit changes, create pull requests, and once approved, merge them into the designated deployment branch. The GitOps agent will automatically pick up these merges.

**Example Git Workflow:**

1.  `git checkout develop`
2.  `git pull origin develop`
3.  `git checkout -b feature/new-feature`
4.  *(Make code changes)*
5.  `git add .`
6.  `git commit -m "feat: Implement new user authentication"`
7.  `git push origin feature/new-feature`
8.  *(Create Pull Request from `feature/new-feature` to `main`)*
9.  *(Review and Merge Pull Request into `main`)*

At step 9, the GitOps agent will detect the new commit on the `main` branch and initiate the deployment.

## Key Considerations

*   **Environment Promotion:** For multiple environments (dev, staging, prod), you'll typically have different branches or directories in your Git repository, each triggering deployments to a specific environment. You might promote changes manually by merging from a development branch to a staging branch, and then from staging to production.
*   **Rollbacks:** If a deployment causes issues, rolling back is as simple as reverting the problematic commit in Git and pushing the change. The GitOps agent will then deploy the previous, stable state.
*   **Security:** Ensure your GitOps agent has appropriate permissions to access your Git repository and to make changes to your Kubernetes cluster. Use RBAC in Kubernetes and secure credentials for Git access.
*   **Monitoring and Alerting:** Set up monitoring for your deployments and alerts for any synchronization failures or deployment issues.

By mastering the setup of continuous deployment workflows, you significantly enhance the speed, reliability, and auditability of your application releases, forming a fundamental pillar of GitOps.

## Supports

- [[skills/cloud-devops/platform-engineering/gitops/microskills/continuous-deployment-workflows|Continuous Deployment Workflows]]

---
type: "medium"
title: "Kubernetes RBAC Configuration"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/systems-infrastructure/compute-runtime/kubernetes/microskills/rbac-configuration|rbac-configuration]]"
learning-time-in-minutes: 3
---
# Kubernetes RBAC Configuration

This lesson focuses on configuring Role-Based Access Control (RBAC) within Kubernetes. RBAC is a fundamental security mechanism that allows you to control who can perform what actions on which resources within your cluster. By applying RBAC, you can implement the "Implement Kubernetes Configurations" skill outcome by ensuring secure and granular access to your Kubernetes objects.

## Core Idea: The "Who," "What," and "Where" of Kubernetes Access

RBAC in Kubernetes operates on a simple principle: defining permissions for users, groups, or service accounts to perform specific actions (verbs) on specific resources (objects) within a defined scope (namespace).

At its heart, RBAC involves these key components:

*   **Subjects**: These are the entities that can be granted permissions. They can be:
    *   **Users**: Individual human users (typically managed outside Kubernetes and authenticated via an external provider).
    *   **Groups**: Collections of users.
    *   **ServiceAccounts**: Identities for processes running inside Pods.
*   **Resources**: These are the Kubernetes objects that subjects can interact with (e.g., `pods`, `deployments`, `services`, `namespaces`, `secrets`).
*   **Verbs**: These are the actions that can be performed on resources (e.g., `get`, `list`, `create`, `update`, `patch`, `delete`, `watch`).
*   **Roles & ClusterRoles**: These define a set of permissions.
    *   **Role**: A set of permissions that applies to a specific namespace.
    *   **ClusterRole**: A set of permissions that applies cluster-wide.
*   **RoleBindings & ClusterRoleBindings**: These link Subjects to Roles or ClusterRoles, effectively granting the defined permissions.
    *   **RoleBinding**: Grants permissions defined in a Role (namespaced) to Subjects.
    *   **ClusterRoleBinding**: Grants permissions defined in a ClusterRole (cluster-wide) to Subjects.

## How it Works: Roles and Bindings

Let's break down how you define and apply these components.

### 1. Defining Permissions: Roles and ClusterRoles

You declare what actions are allowed using `Role` or `ClusterRole` objects.

**Example: A Namespace-Scoped Role for Pod Management**

This `Role` allows a user (or ServiceAccount) to `get`, `list`, and `watch` pods within a specific namespace.

```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  namespace: default  # This Role is specific to the 'default' namespace
  name: pod-reader
rules:
- apiGroups: [""] # "" indicates the core API group
  resources: ["pods"]
  verbs: ["get", "list", "watch"]
```

**Example: A Cluster-Wide Role for Viewing Nodes**

This `ClusterRole` allows cluster-wide access to `get`, `list`, and `watch` nodes.

```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: node-viewer
rules:
- apiGroups: [""]
  resources: ["nodes"]
  verbs: ["get", "list", "watch"]
```

### 2. Granting Permissions: RoleBindings and ClusterRoleBindings

Once you have defined permissions in a `Role` or `ClusterRole`, you need to grant them to specific subjects using `RoleBinding` or `ClusterRoleBinding`.

**Example: Binding the `pod-reader` Role to a User**

This `RoleBinding` assigns the `pod-reader` Role (defined above) to a hypothetical user named `jane.doe@example.com` within the `default` namespace.

```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: read-pods-jane
  namespace: default # Must match the namespace of the Role
subjects:
- kind: User
  name: jane.doe@example.com # Name is case sensitive
  apiGroup: rbac.authorization.k8s.io
roleRef:
  kind: Role
  name: pod-reader # Name of the Role to bind
  apiGroup: rbac.authorization.k8s.io
```

**Example: Binding the `node-viewer` ClusterRole to a Group**

This `ClusterRoleBinding` assigns the `node-viewer` ClusterRole (defined above) to a group named `operations-team` cluster-wide.

```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: view-nodes-for-ops
subjects:
- kind: Group
  name: operations-team # Name is case sensitive
  apiGroup: rbac.authorization.k8s.io
roleRef:
  kind: ClusterRole
  name: node-viewer # Name of the ClusterRole to bind
  apiGroup: rbac.authorization.k8s.io
```

### 3. Using ServiceAccounts for Pods

ServiceAccounts are crucial for granting specific permissions to applications running within your Kubernetes pods. Pods can be configured to use a particular ServiceAccount, and then RBAC can be used to grant permissions to that ServiceAccount.

**Example: Creating a ServiceAccount and Binding it to the `pod-reader` Role**

First, create a ServiceAccount:

```yaml
apiVersion: v1
kind: ServiceAccount
metadata:
  name: my-app-sa
  namespace: default
```

Then, bind the `pod-reader` Role to this ServiceAccount:

```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: bind-pod-reader-to-my-app-sa
  namespace: default
subjects:
- kind: ServiceAccount
  name: my-app-sa
  namespace: default # Namespace of the ServiceAccount
roleRef:
  kind: Role
  name: pod-reader
  apiGroup: rbac.authorization.k8s.io
```

Finally, configure a Pod to use this ServiceAccount:

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: my-app-pod
  namespace: default
spec:
  serviceAccountName: my-app-sa # This Pod will run with the permissions of 'my-app-sa'
  containers:
  - name: nginx
    image: nginx:latest
```

## Practical Application and Best Practices

*   **Least Privilege**: Always grant only the necessary permissions. Avoid giving broad permissions like `*` for resources or verbs unless absolutely required and for specific administrative roles.
*   **Namespaces**: Leverage namespaces to scope permissions. Most Roles and RoleBindings should be namespace-specific.
*   **ServiceAccounts for Applications**: Use ServiceAccounts for applications running inside pods to isolate their access and enhance security.
*   **Avoid Default ServiceAccount**: Do not grant excessive permissions to the `default` ServiceAccount in any namespace, as all pods in that namespace will inherit those permissions if not explicitly assigned another ServiceAccount.
*   **Regular Audits**: Periodically review your RBAC configurations to ensure they are still appropriate and that no unnecessary permissions have been granted.
*   **Use Groups**: For managing human users, define groups in your identity provider and bind those groups to Roles/ClusterRoles rather than individual users. This simplifies management.

By mastering RBAC configuration, you significantly enhance the security posture of your Kubernetes cluster, ensuring that only authorized entities can perform specific operations on your cluster resources.

## Supports

- [[skills/computing/systems-infrastructure/compute-runtime/kubernetes/microskills/rbac-configuration|RBAC Configuration]]

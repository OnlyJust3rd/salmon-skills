---
type: "medium"
title: "Writing Kubernetes Resource Manifests in YAML"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/systems-infrastructure/delivery-platforms/infrastructure-as-code/microskills/kubernetes-resource-manifests|kubernetes-resource-manifests]]"
learning-time-in-minutes: 3
---
# Writing Kubernetes Resource Manifests in YAML

This lesson focuses on creating YAML files, known as **manifests**, to define Kubernetes resources. Understanding these manifests is crucial for effectively managing your applications within a Kubernetes cluster. We'll cover the fundamental structure and common elements you'll use.

## The Structure of a Kubernetes Manifest

Kubernetes resources are defined using YAML. A manifest file typically includes the following top-level keys:

*   **`apiVersion`**: Specifies the Kubernetes API version you are using for this object. This helps Kubernetes understand how to interpret the object's schema.
*   **`kind`**: Declares the type of Kubernetes object you are creating (e.g., `Pod`, `Deployment`, `Service`).
*   **`metadata`**: Contains identifying information about the object, such as its `name` and `labels`.
*   **`spec`**: This is where you define the desired state of the object. The structure of `spec` varies greatly depending on the `kind` of resource.

Let's break down each section with an example.

## A Simple Pod Manifest

Consider this manifest for a single `Pod`:

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: my-nginx-pod
  labels:
    app: nginx
spec:
  containers:
    - name: nginx-container
      image: nginx:latest
      ports:
        - containerPort: 80
```

### Deep Dive into the Sections

*   **`apiVersion: v1`**: For core Kubernetes objects like Pods, `v1` is common. Other resources might use different API versions (e.g., `apps/v1` for Deployments).
*   **`kind: Pod`**: We are defining a `Pod`, the smallest deployable unit in Kubernetes.
*   **`metadata`**:
    *   **`name: my-nginx-pod`**: A unique name for this specific Pod within its namespace.
    *   **`labels:`**: Key-value pairs that help you organize and select objects. Here, we label this Pod with `app: nginx`.
*   **`spec`**:
    *   **`containers:`**: A Pod can run one or more containers. This is a list, indicated by the hyphen (`-`).
        *   **`- name: nginx-container`**: The name of this specific container within the Pod.
        *   **`image: nginx:latest`**: The Docker image to use for this container.
        *   **`ports:`**: Defines the network ports the container exposes.
            *   **`- containerPort: 80`**: The container listens on port 80.

## Key Concepts in Manifests

### Namespaces

While not explicitly in the Pod example above, most resources are created within a **namespace**. Namespaces provide a way to divide cluster resources between multiple users or teams. If no namespace is specified, the `default` namespace is used. You can specify a namespace in the `metadata`:

```yaml
metadata:
  name: my-app-service
  namespace: production # Or staging, development, etc.
```

### Labels and Selectors

Labels are essential for organizing and managing Kubernetes objects. They are key-value pairs attached to resources. **Selectors** are used by Kubernetes controllers (like Deployments or Services) to identify which Pods to manage or connect to.

In our Pod example, `app: nginx` is a label. A Deployment might use a selector to ensure it manages Pods with this label.

### Desired State vs. Actual State

The `spec` section defines the **desired state** of your Kubernetes resource. Kubernetes controllers continuously work to ensure the **actual state** of the cluster matches the desired state defined in your manifests.

## Common Pitfalls

*   **Indentation errors**: YAML is sensitive to indentation. Inconsistent or incorrect spacing can lead to parsing errors. Always use spaces, not tabs.
*   **Incorrect `apiVersion` or `kind`**: Using the wrong API version or resource kind will result in an error when you try to apply the manifest.
*   **Missing required fields**: Each resource type has specific required fields within its `spec`. Forgetting these will cause validation failures.

## Next Steps

Practicing with different resource types is the best way to become proficient. Try creating manifests for:

*   **Deployments**: To manage stateless applications with replicas.
*   **Services**: To expose your applications to the network.
*   **ConfigMaps/Secrets**: To manage configuration data and sensitive information.

By mastering the art of writing these YAML manifests, you'll be well on your way to effectively managing your infrastructure using Infrastructure as Code principles with Kubernetes.

## Supports

- [[skills/computing/systems-infrastructure/delivery-platforms/infrastructure-as-code/microskills/kubernetes-resource-manifests|Kubernetes Resource Manifests]]

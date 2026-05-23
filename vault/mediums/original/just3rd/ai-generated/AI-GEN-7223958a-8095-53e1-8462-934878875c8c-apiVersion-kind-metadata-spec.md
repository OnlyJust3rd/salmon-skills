---
type: "medium"
title: "Understanding Core Kubernetes Pod YAML Fields"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/systems-infrastructure/platform-engineering/kubernetes/microskills/apiversion-kind-metadata-spec|apiversion-kind-metadata-spec]]"
learning-time-in-minutes: 3
---
# Understanding Core Kubernetes Pod YAML Fields

When working with Kubernetes, you'll define almost everything using YAML files. These files act as declarative configuration, telling Kubernetes what you want your system to look like. For Pods, which are the smallest deployable units in Kubernetes, understanding the core YAML fields is crucial. This lesson focuses on `apiVersion`, `kind`, `metadata`, and `spec`.

## The Anatomy of a Pod YAML

Every Kubernetes object definition in YAML follows a similar structure. Let's break down the essential parts of a Pod definition.

### `apiVersion`

This field specifies the Kubernetes API version that you're using for this object. Different Kubernetes features and objects are introduced and evolve across API versions. For Pods, you'll most commonly see `v1`.

*   **Purpose**: Ensures Kubernetes knows which API version and set of fields your object definition conforms to.
*   **Example**: `apiVersion: v1`

### `kind`

The `kind` field declares the type of Kubernetes object you are creating. For this skill, we are focusing on `Pod`. Other common kinds include `Deployment`, `Service`, `ConfigMap`, etc.

*   **Purpose**: Identifies the resource type.
*   **Example**: `kind: Pod`

### `metadata`

This section contains data that helps uniquely identify the object, including a `name` and `labels`.

*   **`name`**: A unique name for the object within its namespace. This is how you'll refer to your Pod.
*   **`labels`**: Key-value pairs that are used to organize and select Kubernetes objects. Labels are essential for grouping Pods and for other Kubernetes components (like Services and Deployments) to find them.

*   **Purpose**: Provides identification and organizational context.
*   **Example**:

    ```yaml
    metadata:
      name: my-nginx-pod
      labels:
        app: nginx
        tier: frontend
    ```

### `spec`

The `spec` field is where you define the desired state for your object. For a Pod, this means specifying what containers should run inside it, their images, ports, volumes, and other configuration details.

*   **Purpose**: Describes the desired state of the object.
*   **Example**: This is where the container definitions, image names, and ports will go. We'll look at this in more detail with a complete example.

## Putting It All Together: A Basic Pod Example

Let's construct a simple YAML file for a Pod that runs a single Nginx container.

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: nginx-hello-world
  labels:
    app: nginx
spec:
  containers:
    - name: nginx-container
      image: nginx:latest
      ports:
        - containerPort: 80
```

Let's break down the `spec` section in this example:

*   **`containers`**: This is a list because a Pod can run multiple containers (though it's best practice to keep Pods focused on a single concern).
    *   **`- name: nginx-container`**: This is the name of the container within the Pod. It's useful for referencing the container, especially in logs or exec commands.
    *   **`image: nginx:latest`**: This specifies the container image to use. Here, it's the `nginx` image from Docker Hub, using the `latest` tag.
    *   **`ports`**: A list of network ports that the container will expose.
        *   **`- containerPort: 80`**: This indicates that the container listens on port 80.

## Applying Your Knowledge

To practice applying these fields:

1.  **Create a new YAML file**: Name it something like `my-pod.yaml`.
2.  **Define the core fields**: Start with `apiVersion`, `kind`, `metadata` (including a unique `name` and at least one `label`), and `spec`.
3.  **Add a container definition**: Within `spec.containers`, specify a `name` for your container and an `image` for a simple application (e.g., `busybox` or `alpine`).
4.  **Apply the configuration**: Use the `kubectl apply -f my-pod.yaml` command to create the Pod in your Kubernetes cluster.
5.  **Verify**: Use `kubectl get pods` and `kubectl describe pod <your-pod-name>` to inspect your newly created Pod.

By understanding and correctly applying `apiVersion`, `kind`, `metadata`, and `spec`, you've taken a significant step towards defining and managing your applications within Kubernetes. These fields are the foundation upon which more complex Kubernetes resources are built.

## Supports

- [[skills/computing/systems-infrastructure/platform-engineering/kubernetes/microskills/apiversion-kind-metadata-spec|apiVersion, kind, metadata, spec]]

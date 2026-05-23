---
type: "medium"
title: "YAML Structure for Kubernetes"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/systems-infrastructure/platform-engineering/infrastructure-as-code/microskills/yaml-structure-for-kubernetes|yaml-structure-for-kubernetes]]"
learning-time-in-minutes: 3
---
# YAML Structure for Kubernetes

When you're working with Kubernetes, you'll be defining almost everything using YAML files. These files tell Kubernetes what you want to run – like your applications, databases, and network configurations. Understanding the basic structure of these YAML files is your first step in applying YAML for Kubernetes.

This lesson focuses on the essential components that make up a Kubernetes YAML definition.

## The Four Pillars of a Kubernetes YAML

Every Kubernetes object defined in YAML follows a common, foundational structure. Think of these as the non-negotiable parts of your recipe for Kubernetes.

1.  **apiVersion**: This tells Kubernetes which version of the Kubernetes API you're using to create this object. Different Kubernetes objects might have different API versions. For example, a basic Pod might use `v1`, while a Deployment might use `apps/v1`.

2.  **kind**: This specifies the type of Kubernetes object you want to create. Kubernetes has many built-in object types, such as `Pod`, `Service`, `Deployment`, `ConfigMap`, and `Namespace`.

3.  **metadata**: This section contains data that helps uniquely identify your object. It's like the name tag and descriptive label for your Kubernetes resource. Key fields within `metadata` include:
    *   `name`: A unique name for your object within its namespace.
    *   `namespace`: The namespace where the object will be created (if not specified, it defaults to the `default` namespace).
    *   `labels`: Key-value pairs that you can use to organize and select your objects. These are crucial for grouping and managing resources.
    *   `annotations`: Similar to labels but generally used for non-identifying metadata, like operational information or versioning.

4.  **spec**: This is the heart of your YAML definition. It describes the *desired state* of the object. What you put in the `spec` section is what you want Kubernetes to achieve and maintain. The fields within `spec` are specific to the `kind` of object you are defining. For a Pod, it might describe the containers it should run. For a Service, it might describe how traffic should be routed.

## A Simple Example: A Kubernetes Pod

Let's look at a basic Kubernetes Pod definition in YAML. A Pod is the smallest deployable unit in Kubernetes, representing a single instance of a running process in your cluster.

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: my-first-pod
  labels:
    app: nginx
spec:
  containers:
  - name: nginx-container
    image: nginx:latest
    ports:
    - containerPort: 80
```

Let's break down this example:

*   **`apiVersion: v1`**: We're using the core Kubernetes API version for this basic object.
*   **`kind: Pod`**: We're defining a `Pod`.
*   **`metadata`**:
    *   `name: my-first-pod`: This Pod will be named `my-first-pod`.
    *   `labels: app: nginx`: We've applied a label `app` with the value `nginx`. This is useful for selecting this Pod later.
*   **`spec`**:
    *   `containers`: This is a list (indicated by the hyphen `-`) of containers that should run inside this Pod.
        *   `- name: nginx-container`: The name of our container.
        *   `image: nginx:latest`: We want to run the latest version of the `nginx` Docker image.
        *   `ports: - containerPort: 80`: We're specifying that this container will listen on port `80`.

## Key Takeaways

*   Every Kubernetes YAML resource must have `apiVersion`, `kind`, `metadata`, and `spec`.
*   `apiVersion` and `kind` tell Kubernetes *what* you're defining and *which API version* to use.
*   `metadata` provides identification and organization for your resource.
*   `spec` defines the *desired state* and is highly dependent on the `kind` of resource.

By mastering this basic structure, you are well on your way to defining and managing any resource within your Kubernetes cluster.

## Supports

- [[skills/computing/systems-infrastructure/platform-engineering/infrastructure-as-code/microskills/yaml-structure-for-kubernetes|YAML Structure for Kubernetes]]

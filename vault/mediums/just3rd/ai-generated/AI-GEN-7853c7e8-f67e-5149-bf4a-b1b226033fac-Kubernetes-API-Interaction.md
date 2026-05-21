---
type: "medium"
title: "Interacting with the Kubernetes API using YAML"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/cloud-devops/platform-engineering/infrastructure-as-code/microskills/kubernetes-api-interaction|kubernetes-api-interaction]]"
---
# Interacting with the Kubernetes API using YAML

When working with Infrastructure as Code for Kubernetes, understanding how your YAML manifests communicate with the Kubernetes API is fundamental. This isn't just about writing valid YAML; it's about leveraging that YAML to instruct the Kubernetes control plane to create, update, or delete resources.

## The API Server: The Heart of Kubernetes

Think of the Kubernetes API Server as the central nervous system of your cluster. Every interaction, from deploying an application to scaling it up, goes through the API Server. Your YAML files are essentially a structured language that the API Server understands.

When you apply a YAML file to Kubernetes, you're sending a declaration of the desired state of a resource (like a Deployment, a Service, or a Pod). The API Server receives this declaration, validates it, and then orchestrates the necessary actions to bring the cluster's actual state in line with your declared desired state.

## Key Components of a Kubernetes YAML Manifest

Every Kubernetes object defined in YAML has a standard structure. Understanding these fields is crucial for successful API interaction.

### `apiVersion`

This field specifies the Kubernetes API version that you are using to create this object. Different Kubernetes versions might have different API versions for the same resource type. It's a way to ensure backward compatibility and to indicate which set of features you're leveraging.

For example:
```yaml
apiVersion: apps/v1
```
This indicates you're using the `v1` version of the `apps` API group, commonly used for Deployments.

### `kind`

This field tells the API Server what type of Kubernetes object you are trying to create. Examples include `Pod`, `Deployment`, `Service`, `ConfigMap`, `Namespace`, etc.

For example:
```yaml
kind: Deployment
```
This clearly states you intend to create a Deployment object.

### `metadata`

This section contains data that helps uniquely identify the object, including a `name` and optionally `namespace`, `labels`, and `annotations`.

*   **`name`**: The unique name for this object within its namespace.
*   **`namespace`**: The Kubernetes namespace where the object will reside. If omitted, it defaults to the `default` namespace.
*   **`labels`**: Key-value pairs that are used to organize and select objects.
*   **`annotations`**: Arbitrary non-identifying metadata that can be used for tooling or by other systems.

For example:
```yaml
metadata:
  name: my-nginx-deployment
  labels:
    app: nginx
```

### `spec`

This is where you define the desired state for the object. The structure of the `spec` varies significantly depending on the `kind` of object.

For a `Deployment`, the `spec` might include:
*   `replicas`: The desired number of Pods.
*   `selector`: How the Deployment finds which Pods to manage.
*   `template`: A blueprint for the Pods that will be created.

For a `Service`, the `spec` might include:
*   `selector`: Which Pods this Service targets.
*   `ports`: The ports the Service exposes.
*   `type`: The type of Service (e.g., `ClusterIP`, `NodePort`, `LoadBalancer`).

For example (within a Deployment manifest):
```yaml
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:latest
        ports:
        - containerPort: 80
```

## Applying YAML: The `kubectl apply` Command

The primary tool for interacting with the Kubernetes API using YAML is `kubectl`. The `apply` command is the preferred method for declarative management.

```bash
kubectl apply -f your-manifest.yaml
```

When you run this command:

1.  **`kubectl` reads `your-manifest.yaml`**: It parses the YAML file.
2.  **`kubectl` sends a request to the Kubernetes API Server**: It sends the parsed object data to the API Server's endpoint for the specified `apiVersion` and `kind`.
3.  **API Server validation**: The API Server validates the request against its schema for that object type and checks for any authentication or authorization issues.
4.  **API Server reconciliation**: If valid, the API Server stores the desired state in its etcd datastore. Then, various controllers (like the Deployment controller, ReplicaSet controller, etc.) watch for changes in etcd. They detect the new or updated object and take action to bring the cluster's current state into alignment with the desired state defined in your YAML.

**Example Workflow:**

1.  **Create a Deployment Manifest (`my-nginx-deployment.yaml`):**
    ```yaml
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: my-nginx-deployment
      labels:
        app: nginx
    spec:
      replicas: 2
      selector:
        matchLabels:
          app: nginx
      template:
        metadata:
          labels:
            app: nginx
        spec:
          containers:
          - name: nginx
            image: nginx:1.25.3 # Specifying a version is good practice
            ports:
            - containerPort: 80
    ```

2.  **Apply the manifest:**
    ```bash
    kubectl apply -f my-nginx-deployment.yaml
    ```
    You will see output like: `deployment.apps/my-nginx-deployment created`

3.  **Verify (interaction with API):**
    ```bash
    kubectl get deployment my-nginx-deployment
    kubectl get pods -l app=nginx
    ```
    These commands also interact with the API Server to retrieve information about the resources you just declared.

By understanding these core components and how `kubectl apply` uses them to communicate with the Kubernetes API Server, you gain the ability to declaratively manage your infrastructure with precision.

## Supports

- [[skills/cloud-devops/platform-engineering/infrastructure-as-code/microskills/kubernetes-api-interaction|Kubernetes API Interaction]]

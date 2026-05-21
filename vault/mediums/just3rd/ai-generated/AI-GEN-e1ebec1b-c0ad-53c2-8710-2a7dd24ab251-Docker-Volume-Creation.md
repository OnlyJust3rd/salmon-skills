---
type: "medium"
title: "Creating Docker Volumes: Persistent Storage for Your Containers"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/cloud-devops/platform-engineering/docker-container/microskills/docker-volume-creation|docker-volume-creation]]"
---
# Creating Docker Volumes: Persistent Storage for Your Containers

This lesson focuses on **Docker Volume Creation**, a fundamental step in implementing Docker volumes to ensure your containerized applications can reliably store and access data. We'll explore how to create and manage these persistent storage solutions.

## Why Use Docker Volumes?

When a Docker container stops or is removed, any data generated or modified within its filesystem is lost by default. This is problematic for applications that need to maintain state, such as databases, web servers storing user uploads, or applications logging information. Docker volumes provide a mechanism to decouple data from the container lifecycle, allowing data to persist independently.

## Understanding Docker Volumes

A Docker volume is a persistent storage mechanism managed by Docker. It exists on the host machine but is accessible by containers. When you create a volume, Docker allocates a specific directory on the host to store the data associated with that volume. You can then mount this volume into one or more containers.

## Creating Docker Volumes

Docker offers several ways to create volumes. The most straightforward method is using the `docker volume create` command.

### Method 1: Using `docker volume create`

This command creates a named volume that Docker manages.

**Syntax:**

```bash
docker volume create [OPTIONS] [VOLUME]
```

**Example:**

Let's create a volume named `my-app-data`:

```bash
docker volume create my-app-data
```

This command will output the name of the created volume if successful.

**Where are these volumes stored on the host?**

By default, Docker stores managed volumes in a specific directory on the host machine. The exact location can vary depending on your operating system and Docker installation, but it's typically under `/var/lib/docker/volumes/` on Linux. You can find the exact path for a specific volume using `docker volume inspect`.

### Method 2: Implicit Volume Creation

Docker can also create volumes automatically when you run a container with a volume mount that doesn't already exist. This is often done using the `-v` or `--mount` flag when running a container.

**Example using `-v`:**

If you run a container and specify a volume mount that doesn't exist, Docker will create it for you. For instance, if you were to run a PostgreSQL container and map a volume for its data directory:

```bash
docker run -d \
  --name my-postgres \
  -v postgres_data:/var/lib/postgresql/data \
  postgres
```

In this example, `postgres_data` is a named volume. If `postgres_data` doesn't exist, Docker will create it automatically before starting the container.

**Example using `--mount`:**

The `--mount` flag offers a more explicit and often preferred way to manage mounts.

```bash
docker run -d \
  --name my-db \
  --mount source=db_logs,target=/var/log/my-app \
  my-custom-db-image
```

Here, `source=db_logs` specifies the volume name, and `target=/var/log/my-app` is the path inside the container where the volume will be mounted. Again, if `db_logs` doesn't exist, Docker will create it.

## Inspecting Volumes

To get detailed information about a specific volume, including its name, driver, and mountpoint on the host, use `docker volume inspect`.

**Syntax:**

```bash
docker volume inspect [OPTIONS] VOLUME [VOLUME...]
```

**Example:**

To inspect our `my-app-data` volume:

```bash
docker volume inspect my-app-data
```

The output will be a JSON object containing details about the volume, including a `Mountpoint` field that shows the actual directory on the host where the volume's data is stored.

```json
[
    {
        "CreatedAt": "2023-10-27T10:30:00Z",
        "Driver": "local",
        "Labels": {},
        "Mountpoint": "/var/lib/docker/volumes/my-app-data/_data",
        "Name": "my-app-data",
        "Options": {}
    }
]
```

## Listing Volumes

To see all the volumes managed by Docker on your system, use `docker volume ls`.

**Syntax:**

```bash
docker volume ls [OPTIONS]
```

**Example:**

```bash
docker volume ls
```

This command will list all the volumes, showing their names. You can filter this list using the `-f` (filter) flag.

## Key Takeaways

*   **Persistence:** Volumes are essential for keeping data alive even when containers are removed or restarted.
*   **Management:** Docker manages the lifecycle and storage of named volumes.
*   **Creation:** You can explicitly create volumes using `docker volume create` or implicitly when mounting a non-existent volume for a container.
*   **Inspection:** `docker volume inspect` provides crucial details about a volume's location and configuration.
*   **Listing:** `docker volume ls` helps you keep track of all your existing volumes.

By mastering the creation of Docker volumes, you've taken a significant step towards building robust and stateful containerized applications.

## Supports

- [[skills/cloud-devops/platform-engineering/docker-container/microskills/docker-volume-creation|Docker Volume Creation]]

---
type: "medium"
title: "Listing Running Docker Containers with `docker ps`"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/systems-infrastructure/compute-runtime/docker/microskills/docker-ps-command|docker-ps-command]]"
learning-time-in-minutes: 3
---
# Listing Running Docker Containers with `docker ps`

When working with Docker, understanding which containers are currently running is a fundamental task. This is crucial for managing your applications, troubleshooting issues, and ensuring everything is operating as expected. The `docker ps` command is your primary tool for this.

### What is `docker ps`?

The `docker ps` command is used to list Docker containers. By default, it only shows containers that are currently running. If you want to see all containers, including stopped ones, you'll need to use an additional flag.

### Core Idea: Seeing What's Active

Imagine you have several applications running inside Docker containers on your machine. You might want to quickly check:

*   Are all my web servers running?
*   Which database container is currently active?
*   What are the IDs of my running services for further commands?

The `docker ps` command provides this essential overview.

### How it Works: The Command and Its Output

The basic syntax is simple:

```bash
docker ps
```

When you execute this command, Docker's engine queries its state and returns a table of information about each running container. Let's break down the typical output columns:

| CONTAINER ID | IMAGE | COMMAND | CREATED | STATUS | PORTS | NAMES |
| :----------- | :---- | :------ | :------ | :----- | :---- | :---- |
| `a1b2c3d4e5f6` | `nginx:latest` | `nginx -g 'daemon off;'` | `2 hours ago` | `Up 2 hours` | `0.0.0.0:80->80/tcp` | `webserver` |
| `g7h8i9j0k1l2` | `mysql:8.0` | `docker-entrypoint.sh mysqld` | `5 minutes ago` | `Up 5 minutes` | `3306/tcp` | `database_service` |

Let's look at each column:

*   **CONTAINER ID**: A unique identifier for the container. This is a shortened version of the full ID. You can use this ID to refer to a specific container in other Docker commands.
*   **IMAGE**: The name of the Docker image from which the container was created (e.g., `nginx:latest`, `mysql:8.0`).
*   **COMMAND**: The command that is executed when the container starts.
*   **CREATED**: How long ago the container was created.
*   **STATUS**: The current state of the container (e.g., `Up 2 hours`, `Exited (0) 1 hour ago`). For `docker ps` by default, this will always be an "Up" status.
*   **PORTS**: The port mappings between the host machine and the container. `0.0.0.0:80->80/tcp` means that port 80 on all network interfaces of your host machine is mapped to port 80 inside the container.
*   **NAMES**: A human-readable name assigned to the container. Docker assigns a random name if you don't specify one when creating the container.

### Seeing All Containers (Running and Stopped)

To see *all* containers, including those that have been stopped, you need to use the `-a` or `--all` flag:

```bash
docker ps -a
```

This will show you containers that are `Up`, `Created`, `Exited`, or `Restarting`. This is useful for finding containers you might have forgotten to stop or for restarting them.

### Filtering the Output

The `docker ps` command can also be filtered, which is very handy when you have many containers. For example, to see containers based on their image name:

```bash
docker ps --filter "ancestor=nginx:latest"
```

This command would only show running containers created from the `nginx:latest` image.

### Key Takeaways

*   `docker ps` is your go-to command for checking which Docker containers are currently running.
*   The output provides essential details like Container ID, Image, Status, and Names.
*   Use `docker ps -a` to view all containers, both running and stopped.

Mastering `docker ps` is a foundational step in effectively managing your Dockerized applications.

## Supports

- [[skills/computing/systems-infrastructure/compute-runtime/docker/microskills/docker-ps-command|Docker Ps Command]]

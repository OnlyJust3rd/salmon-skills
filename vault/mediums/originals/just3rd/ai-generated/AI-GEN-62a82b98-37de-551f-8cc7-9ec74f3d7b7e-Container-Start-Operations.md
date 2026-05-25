---
type: "medium"
title: "Starting Docker Containers: Bringing Your Applications to Life"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/systems-infrastructure/compute-runtime/docker/microskills/container-start-operations|container-start-operations]]"
learning-time-in-minutes: 3
---
# Starting Docker Containers: Bringing Your Applications to Life

This lesson focuses on the fundamental skill of initiating Docker containers, a crucial step in managing their lifecycle. We'll explore the primary commands and options to get your applications running within isolated environments.

## The `docker run` Command: Your Gateway to Containers

The core command for creating and starting a Docker container is `docker run`. It's a versatile command that combines the actions of creating a container from an image and then starting it.

### Basic Usage

The simplest form of `docker run` takes an image name as an argument:

```bash
docker run <image_name>
```

For example, to run an Nginx web server container:

```bash
docker run nginx
```

When you execute this command:

1.  **Docker checks for the `nginx` image locally.** If it's not found, Docker will download it from Docker Hub (the default container registry).
2.  **A new container is created from the `nginx` image.**
3.  **The container is started.**

By default, `docker run` starts a container in the **foreground**. This means your terminal will be attached to the container's output. If the container runs a service that doesn't have an interactive foreground process (like a web server), it might appear to exit immediately after starting because its main process has finished.

### Running in Detached Mode (`-d`)

More often than not, you'll want your containers to run in the background, allowing you to continue using your terminal. This is achieved using the `-d` (or `--detach`) flag:

```bash
docker run -d nginx
```

This command will start the Nginx container in detached mode. Docker will print the container ID to your terminal, and you'll regain access to your command prompt. You can then use `docker ps` to see your running containers.

### Naming Your Containers (`--name`)

It's good practice to give your containers meaningful names. This makes it easier to reference them later when you need to stop, restart, or remove them. Use the `--name` flag:

```bash
docker run -d --name my-web-server nginx
```

Now, instead of using the container ID, you can refer to this container as `my-web-server`.

### Port Mapping (`-p`)

For services like web servers, you need to make them accessible from your host machine. This is done by mapping ports from the container to ports on your host. The `-p` flag is used for this, with the format `host_port:container_port`:

```bash
docker run -d --name my-web-server -p 8080:80 nginx
```

In this example:

*   `-p 8080:80`: This maps port `8080` on your host machine to port `80` inside the `my-web-server` container. You can now access the Nginx server by navigating to `http://localhost:8080` in your web browser.

If you omit the host port, Docker will assign a random available port on your host:

```bash
docker run -d --name my-web-server -p 80 nginx
```

You can then find the assigned host port using `docker ps` or `docker port my-web-server`.

### Interactive Mode (`-it`)

For containers that require user interaction, such as a shell environment, you'll use the `-i` (interactive) and `-t` (tty) flags together as `-it`:

```bash
docker run -it ubuntu /bin/bash
```

This command will:

1.  Download the `ubuntu` image if it's not present.
2.  Create a new container.
3.  Start a Bash shell inside the container.
4.  Attach your terminal to that shell.

You'll be presented with a prompt inside the Ubuntu container, and you can execute commands as if you were logged into a Linux machine. To exit the container and stop the shell process, type `exit`.

### Considerations for Starting Containers

*   **Image Availability:** Ensure the image you're trying to run exists locally or is accessible from a registry.
*   **Resource Allocation:** For production environments, consider resource constraints. Docker allows you to limit CPU and memory usage.
*   **Container State:** `docker run` always creates and starts a *new* container. If you want to restart an *existing, stopped* container, you'll use the `docker start` command (which we'll cover in a subsequent lesson).

By mastering the `docker run` command with its various options, you gain the essential ability to start Docker containers and bring your applications online. This is the first step in effectively managing their lifecycle.

## Supports

- [[skills/computing/systems-infrastructure/compute-runtime/docker/microskills/container-start-operations|Container Start Operations]]

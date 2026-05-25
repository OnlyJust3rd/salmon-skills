---
type: "medium"
title: "Halting Docker Containers with `docker stop`"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/systems-infrastructure/compute-runtime/docker/microskills/docker-stop-command|docker-stop-command]]"
related-skills:
  - "[[skills/computing/systems-infrastructure/compute-runtime/docker/docker|docker]]"
learning-time-in-minutes: 3
---
# Halting Docker Containers with `docker stop`

When working with Docker, you'll often need to manage the lifecycle of your containers. This includes starting them up, keeping them running, and knowing how to gracefully shut them down when they are no longer needed or when you want to perform maintenance. This lesson focuses on one of the fundamental commands for container management: `docker stop`.

## The Purpose of `docker stop`

Imagine you have a web server running inside a Docker container, and you need to update its configuration or restart it. You wouldn't just pull the power cord on a physical server, and similarly, you shouldn't abruptly terminate a Docker container. The `docker stop` command provides a clean way to signal a running container to shut down.

When you execute `docker stop`, Docker sends a signal (specifically, the `SIGTERM` signal by default) to the main process running inside the container. This signal is a request for the process to terminate gracefully. Most well-behaved applications are designed to catch this signal and perform necessary cleanup operations before exiting, such as saving any unsaved data or closing network connections.

## How `docker stop` Works

The basic syntax for the `docker stop` command is straightforward:

```bash
docker stop [OPTIONS] CONTAINER [CONTAINER...]
```

You need to provide the name or ID of the container you wish to stop.

### Stopping a Single Container

Let's say you have a container named `my-web-app` running. To stop it, you would use:

```bash
docker stop my-web-app
```

If you don't remember the exact name, you can list your running containers using `docker ps` and then use the container's ID. For example, if `docker ps` shows your container with ID `a1b2c3d4e5f6`, you can stop it like this:

```bash
docker stop a1b2c3d4e5f6
```

### Stopping Multiple Containers

You can also stop multiple containers simultaneously by listing their names or IDs, separated by spaces:

```bash
docker stop my-web-app another-container-name yet-another-id
```

### The Timeout Option (`-t` or `--time`)

By default, `docker stop` waits for a certain period (usually 10 seconds) for the container's main process to exit after sending the `SIGTERM` signal. If the process doesn't exit within this timeout, Docker will then send a `SIGKILL` signal, which forcefully terminates the container.

You can adjust this timeout using the `-t` or `--time` option, specifying the duration in seconds.

For instance, to give your container 30 seconds to shut down gracefully:

```bash
docker stop -t 30 my-web-app
```

If you want to immediately stop a container without any waiting period (equivalent to a forceful kill, though it still attempts `SIGTERM` first), you can set the timeout to 0:

```bash
docker stop -t 0 my-web-app
```

**Note:** While `docker stop -t 0` attempts a clean shutdown first, it will quickly escalate to a forceful termination if the application doesn't respond. For critical applications, it's generally better to allow the default timeout or a longer one to ensure data integrity.

## When to Use `docker stop`

*   **Graceful Shutdown:** When you need to stop a container for maintenance, configuration updates, or before removing it.
*   **Resource Management:** To free up system resources (CPU, memory) occupied by a running container when it's not actively being used.
*   **Application Updates:** Before updating an image and recreating a container, you typically stop the old one first.

## What Happens After Stopping?

Once a container has been stopped using `docker stop`, it enters the "Exited" state. It is no longer running and consuming active resources. However, its filesystem and configuration are preserved, meaning you can restart it later using the `docker start` command, and it will resume from where it left off (assuming the application inside supports this).

To see your stopped containers, you'll need to use `docker ps -a` (the `-a` flag shows all containers, including stopped ones).

In summary, `docker stop` is your go-to command for cleanly halting a running Docker container, allowing applications to shut down gracefully and ensuring a more stable workflow.

## Supports

- [[skills/computing/systems-infrastructure/compute-runtime/docker/microskills/docker-stop-command|Docker Stop Command]]

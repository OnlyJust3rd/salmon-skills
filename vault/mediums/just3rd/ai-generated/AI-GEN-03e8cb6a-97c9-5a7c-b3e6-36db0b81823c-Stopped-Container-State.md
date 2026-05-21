---
type: "medium"
title: "Understanding the Stopped Container State in Docker"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/cloud-devops/platform-engineering/docker-container/microskills/stopped-container-state|stopped-container-state]]"
---
# Understanding the Stopped Container State in Docker

When working with Docker, containers don't just exist in a single state. They go through a lifecycle, and one of the common states a container can be in is "stopped." This lesson focuses on understanding what it means for a Docker container to be stopped, why it happens, and what you can do with it.

## What is a Stopped Container?

A **stopped container** is a container that was previously running but has been halted. Think of it like pausing a video playback – the content is still there, but it's not actively playing. In Docker terms, the processes inside the container have terminated, and the container's writable layer is no longer active.

It's important to distinguish between a stopped container and a container that has been removed. A stopped container still exists on your system and can be restarted. A removed container is deleted entirely.

## How Do Containers Become Stopped?

There are several ways a container can enter the stopped state:

1.  **Explicitly Stopping:** You can manually stop a running container using a Docker command.
2.  **Application Exit:** If the main process within the container exits, the container will stop. This could be due to an error, a successful completion of a task, or a deliberate shutdown signal.
3.  **System Shutdown:** If the Docker daemon or the host machine shuts down uncleanly, containers may be left in a stopped state.

### Manual Stopping

The most common way to stop a container is through the `docker stop` command. This command sends a `SIGTERM` signal to the main process in the container, giving it a grace period to shut down cleanly. If the process doesn't exit within this grace period (default is 10 seconds), Docker sends a `SIGKILL` signal to forcefully terminate it.

```bash
docker stop <container_name_or_id>
```

### Container Exiting

When the primary process inside a container finishes its execution or encounters an unrecoverable error and exits, the container automatically transitions to an "exited" state. This is often a normal occurrence for containers designed to perform a specific task and then terminate, such as a batch job container.

You can see exited containers by running `docker ps -a`. The `-a` flag shows all containers, including those that are not currently running.

```bash
docker ps -a
```

The output will look something like this, with the `STATUS` column showing "Exited (0)" or "Exited (1)" (indicating success or failure, respectively).

| CONTAINER ID | IMAGE | COMMAND | CREATED | STATUS                  | PORTS | NAMES        |
| :----------- | :---- | :------ | :------ | :---------------------- | :---- | :----------- |
| a1b2c3d4e5f6 | ubuntu | /bin/bash | 2 hours ago | Exited (0) 2 hours ago |       | my_job_container |

## What Can You Do With a Stopped Container?

Once a container is stopped, you have a few options:

*   **Restart it:** You can start the container again using the `docker start` command. This will resume the container from where it left off, with its previous filesystem and configuration intact.

    ```bash
    docker start <container_name_or_id>
    ```
*   **Inspect it:** You can examine the configuration and logs of a stopped container to understand why it stopped or to debug issues.

    ```bash
    docker logs <container_name_or_id>
    ```
    ```bash
    docker inspect <container_name_or_id>
    ```
*   **Remove it:** If you no longer need the container or its data, you can remove it using the `docker rm` command. This frees up disk space.

    ```bash
    docker rm <container_name_or_id>
    ```
*   **Commit it:** You can create a new Docker image from the current state of a stopped container using `docker commit`. This is useful for saving the changes you've made to a container's filesystem.

    ```bash
    docker commit <container_name_or_id> <new_image_name>
    ```

## Key Takeaways

*   A stopped container is a halted container that still exists on your system.
*   Containers can be stopped manually using `docker stop` or automatically when their main process exits.
*   Stopped containers can be restarted, inspected, removed, or used to create new images.
*   Use `docker ps -a` to view all containers, including those in a stopped or exited state.

## Supports

- [[skills/cloud-devops/platform-engineering/docker-container/microskills/stopped-container-state|Stopped Container State]]

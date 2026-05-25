---
type: "medium"
title: "Docker: The \\\"Created\\\" Container State"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/systems-infrastructure/compute-runtime/docker/microskills/created-container-state|created-container-state]]"
related-skills:
  - "[[skills/computing/systems-infrastructure/compute-runtime/docker/docker|docker]]"
learning-time-in-minutes: 3
---
# Docker: The "Created" Container State

In the world of Docker, containers don't just magically appear and run. They go through a lifecycle, and understanding each stage is crucial for effective container management. This lesson focuses on the very first state a container enters after you've prepared it: the **created** state.

## What is the "Created" State?

When you use a command like `docker create` (or when `docker run` is executed but the container hasn't started yet), a Docker container is moved into the "created" state. Think of this as the blueprint for your application being laid out, but the engine hasn't been turned on yet.

At this stage:

*   **The container's filesystem is prepared:** Docker pulls the specified image (if it's not already local) and creates a writable layer on top of it. This is where any changes or data specific to this container will reside.
*   **Configuration is set:** Network interfaces, volumes, ports, and other configurations you specified during creation are assigned to the container.
*   **No process is running:** The most important characteristic of the "created" state is that the main process that the container is meant to run has not been started.

## Why is the "Created" State Useful?

You might wonder why you'd want a container in a "created" state but not running. There are a few practical reasons:

1.  **Pre-configuration without execution:** You might want to set up a container with all its associated volumes, networks, and environment variables, but delay the actual start until a specific trigger or a more opportune moment. This allows for a more controlled deployment.
2.  **Inspection and verification:** Before a container starts consuming resources or performing actions, you can inspect its configuration to ensure it's set up as expected. This is a good debugging step.
3.  **Resource management:** By creating a container, you're reserving the necessary resources for it. You can then start multiple containers at once, or in a staggered fashion, based on your needs and system capacity.
4.  **Preparing for backup or migration:** You might create a container, attach volumes to it, and then plan to use those volumes for backups or migrations before even starting the application within the container.

## How to See a Container in the "Created" State

You can easily observe containers in the "created" state using the `docker ps` command. However, by default, `docker ps` only shows *running* containers. To see all containers, including those in the "created" state, you need to use the `-a` (or `--all`) flag.

Let's look at an example. First, we'll create a simple Nginx container without starting it immediately:

```bash
docker create --name my-nginx-container nginx:latest
```

Now, if you run `docker ps`, you won't see `my-nginx-container` because it's not running.

```bash
docker ps
```

Output will likely be empty or only show other running containers.

But, when you use `docker ps -a`, you'll see it listed:

```bash
docker ps -a
```

The output will look something like this:

```
CONTAINER ID   IMAGE          COMMAND                  CREATED         STATUS                      PORTS     NAMES
abcdef123456   nginx:latest   "/docker-entrypoint.…"   2 minutes ago   Created                                 my-nginx-container
```

Notice the `STATUS` column shows **Created**. The `COMMAND` column shows what the container *would* run if it were started.

## Key Characteristics to Remember

*   **Not running:** The container's main process is inactive.
*   **Resources allocated:** Disk space for its writable layer, network configurations, etc., are reserved.
*   **Visible with `docker ps -a`:** You must use the `-a` flag to see these containers.
*   **Can be started:** From the "created" state, you can start the container using `docker start <container_name_or_id>`.
*   **Can be removed:** You can remove a created container using `docker rm <container_name_or_id>`.

Understanding the "created" state is the first step in grasping the full lifecycle of a Docker container. It's a state of potential, where a container is ready to go but hasn't yet begun its work.

## Supports

- [[skills/computing/systems-infrastructure/compute-runtime/docker/microskills/created-container-state|Created Container State]]

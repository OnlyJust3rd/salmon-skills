---
type: "medium"
title: "Understanding Container State Transitions"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/systems-infrastructure/compute-runtime/docker/microskills/container-state-transitions|container-state-transitions]]"
related-skills:
  - "[[skills/computing/systems-infrastructure/compute-runtime/docker/docker|docker]]"
learning-time-in-minutes: 4
---
# Understanding Container State Transitions

In the world of Docker, containers are not static entities. They move through a series of states as you interact with them. Understanding these state transitions is crucial for effectively managing your Docker containers and ensuring your applications run smoothly. This lesson focuses on the fundamental states and how you can manipulate them.

## The Lifecycle of a Container

A Docker container has a distinct lifecycle, moving from creation to eventual removal. The primary states you'll encounter are:

*   **Created:** This is the initial state after a container is created from an image using `docker create`. The container's filesystem is prepared, and all configurations are in place, but it hasn't started running yet.
*   **Running:** This is the active state where the container's primary process is executing. It's consuming resources and performing its intended function.
*   **Paused:** A container can be temporarily suspended without terminating its processes. This is useful for debugging or performing maintenance.
*   **Exited:** This state indicates that the container's primary process has finished execution, either successfully or with an error. The container is no longer running but still exists on the system until it's explicitly removed.
*   **Dead:** This state typically occurs when a container has exited and its resources have not yet been cleaned up. It's an intermediate state before the container is fully removed.

## Key Commands for State Transitions

To manage these states, Docker provides a set of commands that directly influence a container's lifecycle.

### Starting a Container (`docker start`)

When a container is in the `created` state, you can bring it to life using `docker start`. This command starts the container's main process.

**Scenario:** Imagine you've created a container named `my-web-server` from an Nginx image but haven't started it yet.

```bash
# Create the container (this puts it in 'created' state)
docker create --name my-web-server nginx

# Check its status (it will show 'Created')
docker ps -a

# Start the container
docker start my-web-server

# Check its status again (it should now be 'Up ...')
docker ps
```

### Stopping a Container (`docker stop`)

To halt a running container, you use `docker stop`. This command sends a `SIGTERM` signal to the main process within the container, allowing it to shut down gracefully. If the process doesn't exit within a timeout period (default is 10 seconds), Docker sends a `SIGKILL` signal.

**Scenario:** You need to temporarily stop your `my-web-server` to perform some configuration updates.

```bash
# Assuming my-web-server is currently running
docker stop my-web-server

# Check its status (it will show 'Exited ...')
docker ps -a
```

### Restarting a Container (`docker restart`)

The `docker restart` command is a convenient way to stop a running container and then immediately start it again. It's essentially a `stop` followed by a `start`.

**Scenario:** Your web server might need a refresh after a configuration change.

```bash
# Assuming my-web-server is running
docker restart my-web-server

# Check its status (it should be running again)
docker ps
```

### Pausing and Unpausing a Container (`docker pause`, `docker unpause`)

Sometimes you need to pause a container's execution without stopping its processes entirely. This is useful for debugging or when you need to free up CPU resources temporarily.

**Scenario:** You're debugging an issue with your `my-app` container and need to inspect its current state without it actively processing requests.

```bash
# Assuming my-app is running
docker pause my-app

# Check its status (it will show 'Paused')
docker ps -a

# To resume normal operation
docker unpause my-app

# Check its status again (it should be running)
docker ps
```

### Removing a Container (`docker rm`)

Once a container has served its purpose, or if you simply want to clean up, you can remove it using `docker rm`. **Important:** You can only remove containers that are in an `exited` or `created` state. To remove a running container, you must stop it first, or use the `-f` (force) flag.

**Scenario:** You're done with the `my-web-server` container and want to free up disk space.

```bash
# First, ensure the container is stopped
docker stop my-web-server

# Then, remove it
docker rm my-web-server

# Check its status (it should no longer appear in 'docker ps -a')
docker ps -a
```

If you try to remove a running container without force:

```bash
# This will result in an error
docker rm my-web-server
```

To force removal of a running container:

```bash
# Use with caution! This will immediately stop and remove the container.
docker rm -f my-web-server
```

## Summary Table of State Transitions

| Action           | Command        | From State(s) | To State(s)          | Notes                                   |
| :--------------- | :------------- | :------------ | :------------------- | :-------------------------------------- |
| Create Container | `docker create`| N/A           | Created              | Prepares container without starting.    |
| Start Container  | `docker start` | Created, Exited | Running              | Initiates the container's process.      |
| Stop Container   | `docker stop`  | Running       | Exited               | Graceful shutdown.                      |
| Restart Container| `docker restart`| Running       | Running              | Stops and then starts.                  |
| Pause Container  | `docker pause` | Running       | Paused               | Suspends execution.                     |
| Unpause Container| `docker unpause`| Paused        | Running              | Resumes execution.                      |
| Remove Container | `docker rm`    | Created, Exited | Removed (no state)   | Deletes container filesystem and config. |
| Force Remove     | `docker rm -f` | Running       | Removed (no state)   | Stops and then removes immediately.     |

By mastering these commands and understanding the state transitions they trigger, you gain precise control over your Docker containers, a fundamental skill for efficient container management.

## Supports

- [[skills/computing/systems-infrastructure/compute-runtime/docker/microskills/container-state-transitions|Container State Transitions]]

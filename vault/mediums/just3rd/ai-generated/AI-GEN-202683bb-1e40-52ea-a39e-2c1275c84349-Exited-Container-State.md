---
type: "medium"
title: "Understanding the Exited State of a Docker Container"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/cloud-devops/platform-engineering/docker-container/microskills/exited-container-state|exited-container-state]]"
---
# Understanding the Exited State of a Docker Container

When working with Docker containers, it's crucial to understand the different stages a container goes through during its life. This lesson focuses on one specific, yet important, state: the **exited** state. Understanding this state helps you troubleshoot issues and manage your containerized applications effectively.

### What Does "Exited" Mean?

A Docker container enters the "exited" state when its primary process has finished running. This could be due to a number of reasons:

*   **Successful completion:** The application or command running inside the container finished its task and exited normally.
*   **Error or crash:** The application encountered an error, crashed, or was terminated unexpectedly.
*   **Manual stop:** The container was explicitly stopped, but the process within it had already finished.

Essentially, an exited container is a container that is no longer running its main process. It's not actively consuming CPU or memory resources like a running container, but its file system and configuration persist until you explicitly remove it.

### Why is the Exited State Important?

The exited state is particularly relevant for several reasons:

1.  **Debugging:** If a container exits unexpectedly, examining its logs and exit code can provide vital clues about what went wrong.
2.  **Resource Management:** Exited containers still occupy disk space. Regularly cleaning up exited containers prevents your Docker host from filling up.
3.  **Understanding Workflow:** For short-lived containers that perform a specific task (e.g., running a script, building an image), exiting successfully is the desired outcome.

### How to Identify Exited Containers

You can see the state of your Docker containers using the `docker ps` command.

*   `docker ps`: This command lists only *running* containers.
*   `docker ps -a`: The `-a` flag is crucial here. It shows *all* containers, including those that are `created`, `running`, `paused`, `restarting`, or `exited`.

When you run `docker ps -a`, you'll see a table with columns like `CONTAINER ID`, `IMAGE`, `COMMAND`, `CREATED`, `STATUS`, `PORTS`, and `NAMES`. The `STATUS` column will indicate "Exited (N)" where `N` is the exit code.

```bash
docker ps -a
```

**Example Output:**

```
CONTAINER ID   IMAGE          COMMAND                  CREATED         STATUS                     PORTS     NAMES
a1b2c3d4e5f6   ubuntu:latest  "/bin/bash -c 'echo H"   2 minutes ago   Exited (0) 1 minute ago                my-hello-world
7890abcd12ef   nginx:latest   "nginx -g 'daemon off"   10 minutes ago  Up 10 minutes              80/tcp    my-nginx
```

In this example, `my-hello-world` is in an exited state with an exit code of `0`.

### Understanding Exit Codes

The number following "Exited" is the **exit code** of the container's main process. This is a numerical value that indicates how the process terminated.

*   **Exit Code 0:** This is the standard convention for a successful, clean termination. Your application or command completed its task without errors.
*   **Non-zero Exit Codes (e.g., 1, 2, 127, 137):** These codes typically indicate that an error occurred. The specific meaning of non-zero exit codes can vary depending on the application running inside the container.
    *   `1`: General error.
    *   `126`: Command invoked cannot execute.
    *   `127`: Command not found.
    *   `137`: Container received a SIGKILL signal (often due to running out of memory or being forcefully stopped).

**Checking Logs for Exited Containers:**

To understand *why* a container exited, especially with a non-zero code, you need to inspect its logs. You can do this with the `docker logs` command, followed by the container ID or name.

```bash
docker logs <container_id_or_name>
```

Using the example above, if `my-hello-world` had exited with an error, you might run:

```bash
docker logs a1b2c3d4e5f6
```

This command will display the standard output and standard error streams from the container's main process, helping you diagnose the issue.

### Common Scenarios for Exited Containers

*   **Running a one-off command:** If you start a container to execute a single command and then exit, it will be in an exited state.
    ```bash
    docker run --rm ubuntu echo "This is my task"
    ```
    The `--rm` flag is useful here as it automatically removes the container once it exits.

*   **Application failures:** If your web server crashes, or a script encounters an unhandled exception, the container will exit.

*   **Health check failures:** Docker's health check mechanisms can trigger a container restart or stop if the application within it is not responding. If it fails to recover, it might end up in an exited state.

### Cleaning Up Exited Containers

Exited containers consume disk space for their file system layers. It's good practice to remove them when they are no longer needed.

*   **Removing a specific container:**
    ```bash
    docker rm <container_id_or_name>
    ```

*   **Removing all exited containers:** Docker provides a convenient command for this:
    ```bash
    docker container prune
    ```
    This command will prompt for confirmation before removing all stopped containers.

### Key Takeaways

*   An **exited** container is one whose main process has terminated.
*   Use `docker ps -a` to view all containers, including exited ones.
*   Exit codes (especially non-zero ones) indicate the reason for termination.
*   `docker logs <container_id>` is essential for debugging exited containers.
*   Regularly clean up exited containers using `docker rm` or `docker container prune` to free up disk space.

## Supports

- [[skills/cloud-devops/platform-engineering/docker-container/microskills/exited-container-state|Exited Container State]]

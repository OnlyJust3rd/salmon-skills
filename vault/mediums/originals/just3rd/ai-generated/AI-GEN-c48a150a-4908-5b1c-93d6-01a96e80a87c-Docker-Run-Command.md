---
type: "medium"
title: "Docker Run Command: Starting Your First Container"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/systems-infrastructure/compute-runtime/docker/microskills/docker-run-command|docker-run-command]]"
related-skills:
  - "[[skills/computing/systems-infrastructure/compute-runtime/docker/docker|docker]]"
learning-time-in-minutes: 4
---
# Docker Run Command: Starting Your First Container

This lesson focuses on the `docker run` command, a fundamental tool for initiating Docker containers. Understanding how to use `docker run` is crucial for getting started with Docker and managing your applications within isolated environments.

## What is the `docker run` Command?

The `docker run` command is used to create and start a new container from a specified Docker image. Think of a Docker image as a blueprint or a recipe. When you "run" an image, Docker uses that blueprint to build and launch a new, isolated instance – the container. This container can then run applications, services, or whatever the image was designed to contain.

## Basic Syntax

The most basic form of the `docker run` command looks like this:

```bash
docker run IMAGE_NAME
```

Here, `IMAGE_NAME` refers to the name of the Docker image you want to use. Docker will first look for this image locally on your machine. If it's not found, it will attempt to pull it from a Docker registry, typically Docker Hub, if the image is publicly available.

## Simple Example: Running an Ubuntu Container

Let's start by running a simple Ubuntu container. This will launch an interactive bash session inside a fresh Ubuntu environment.

**Step 1: Open your terminal or command prompt.**

**Step 2: Execute the following command.**

```bash
docker run -it ubuntu
```

Let's break down this command:

*   `docker run`: The command to create and start a container.
*   `-i` (or `--interactive`): This option keeps STDIN open even if not attached. It allows you to interact with the container.
*   `-t` (or `--tty`): This allocates a pseudo-TTY, which essentially gives you a terminal inside the container. Without this, you might not be able to type commands.
*   `ubuntu`: This is the name of the Docker image we are using. Docker will download the latest version of the `ubuntu` image if you don't have it locally.

Upon execution, you will notice your command prompt change, likely showing something like `root@<container_id>:/#`. This indicates you are now inside the Ubuntu container's shell. You can run standard Linux commands like `ls`, `pwd`, `echo "Hello from Docker!"`, etc.

**Step 3: Exiting the container.**

To exit the container and stop it, you can type `exit` in the container's shell and press Enter.

```bash
exit
```

This command will terminate the running process within the container and return you to your host machine's terminal.

## Running a Container in Detached Mode

Often, you'll want to run a container in the background, allowing you to continue using your terminal for other tasks. This is called "detached mode."

To run a container in detached mode, use the `-d` flag:

```bash
docker run -d IMAGE_NAME
```

**Example: Running an Nginx Web Server**

Let's run a simple Nginx web server in detached mode. Nginx is a popular web server that, when run, typically listens on port 80.

```bash
docker run -d -p 8080:80 nginx
```

Let's break this down:

*   `-d`: Runs the container in detached mode.
*   `-p 8080:80`: This is a port mapping. It maps port `8080` on your host machine to port `80` inside the container. This means if you access `http://localhost:8080` in your web browser, you will be connected to the Nginx server running inside the container.
*   `nginx`: The name of the image to run. Docker will pull the `nginx` image if it's not already present.

After running this command, you won't see a prompt change. The container is now running in the background. You can verify it's running by opening your web browser and navigating to `http://localhost:8080`. You should see the default Nginx welcome page.

## Common `docker run` Options

While `-it` and `-d` are very common, here are a few other useful options you'll encounter:

| Option        | Alias | Description                                                                                                      |
| :------------ | :---- | :--------------------------------------------------------------------------------------------------------------- |
| `--name NAME` |       | Assign a name to the container. This makes it easier to refer to the container later (e.g., `docker stop my-webserver`). |
| `-p HOST_PORT:CONTAINER_PORT` |       | Publish a container's port(s) to the host.                                                       |
| `-v HOST_PATH:CONTAINER_PATH` |       | Mount a volume. This allows you to persist data or share files between the host and the container.      |
| `--rm`        |       | Automatically remove the container when it exits. Useful for short-lived tasks.                                  |

**Example using `--name` and `--rm`:**

```bash
docker run --rm --name my-temp-container alpine echo "This container will self-destruct!"
```

In this example:
*   `--rm` ensures that after the `echo` command finishes and the container exits, it will be automatically removed, cleaning up your system.
*   `--name my-temp-container` gives this temporary container a recognizable name.
*   `alpine` is a very small Linux distribution, often used for lightweight containers.
*   `echo "This container will self-destruct!"` is the command that will be executed inside the `alpine` container.

## Key Takeaways

*   The `docker run` command is your primary tool for starting containers from Docker images.
*   The `-it` flags are essential for interactive sessions where you need to type commands inside the container.
*   The `-d` flag is used to run containers in the background (detached mode).
*   Port mapping (`-p`) is crucial for making services running inside containers accessible from your host machine.
*   Giving containers names (`--name`) and using the `--rm` flag can help manage your Docker environment more effectively.

This lesson covers the basics of starting containers with `docker run`. In future lessons, we'll explore how to stop and remove these containers.

## Supports

- [[skills/computing/systems-infrastructure/compute-runtime/docker/microskills/docker-run-command|Docker Run Command]]

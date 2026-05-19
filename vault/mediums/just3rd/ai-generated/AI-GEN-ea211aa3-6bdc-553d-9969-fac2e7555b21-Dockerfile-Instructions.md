---
type: "medium"
title: "Dockerfile Instructions: Your Blueprint for Container Images"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/cloud-devops/platform-engineering/system-virtualization/microskills/dockerfile-instructions|Dockerfile Instructions]]"
---
# Dockerfile Instructions: Your Blueprint for Container Images

When we talk about building container images, we're essentially talking about creating a self-contained package that includes everything an application needs to run: code, libraries, dependencies, and configuration. The Dockerfile is the instruction manual for Docker, telling it exactly how to assemble this package. Understanding the core Dockerfile instructions is fundamental to mastering container image creation.

## What is a Dockerfile?

A Dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image. Docker reads these instructions and executes them sequentially to build your container image. Think of it as a recipe for your application's environment.

## Essential Dockerfile Instructions

Let's dive into the most common and crucial Dockerfile instructions.

### `FROM`

Every Dockerfile must start with a `FROM` instruction. This specifies the *base image* on which you'll build your new image. The base image provides a foundational operating system or application environment.

**Example:**

```dockerfile
FROM ubuntu:latest
```

This instruction tells Docker to use the latest version of the official Ubuntu image as the starting point.

### `RUN`

The `RUN` instruction executes commands in a new layer on top of the current image and commits the results. These commands are typically used to install software packages, set up directories, or perform any other configuration needed within the image.

**Example:**

```dockerfile
RUN apt-get update && apt-get install -y nginx
```

This command first updates the package list (`apt-get update`) and then installs the Nginx web server without prompting for user input (`-y`). Combining multiple commands with `&&` in a single `RUN` instruction is a best practice as it creates fewer image layers, making your image smaller and more efficient.

### `COPY` and `ADD`

These instructions are used to copy files or directories from your host machine (where you're building the image) into the container image.

*   **`COPY`**: This is the preferred instruction for copying local files and directories. It's straightforward and predictable.

    **Example:**

    ```dockerfile
    COPY . /app
    ```

    This copies all files and directories from the current directory on your host machine into the `/app` directory inside the image.

*   **`ADD`**: `ADD` is more versatile. It can copy local files and directories, but it can also download files from a URL and automatically extract compressed archives (like `.tar.gz`). While powerful, `ADD` can sometimes be less transparent about its actions, especially with URLs.

    **Example (copying a local file):**

    ```dockerfile
    ADD index.html /usr/share/nginx/html/
    ```

    **Example (downloading from a URL and extracting):**

    ```dockerfile
    ADD https://example.com/some-archive.tar.gz /tmp/
    ```

### `WORKDIR`

The `WORKDIR` instruction sets the working directory for any `RUN`, `CMD`, `ENTRYPOINT`, `COPY`, and `ADD` instructions that follow it. This is helpful for organizing your file structure within the image.

**Example:**

```dockerfile
WORKDIR /app
RUN echo "Hello" > greeting.txt
```

In this example, `greeting.txt` will be created in the `/app` directory.

### `EXPOSE`

The `EXPOSE` instruction informs Docker that the container listens on the specified network ports at runtime. This is a form of documentation and doesn't actually publish the ports; it's up to the user to map them when running the container.

**Example:**

```dockerfile
EXPOSE 80
```

This indicates that the container will typically run a web server on port 80.

### `CMD` and `ENTRYPOINT`

These instructions define the default command to execute when a container is started from your image. They are often used together, but have distinct roles.

*   **`CMD`**: Provides defaults for an executing container. These defaults can be overridden when a container is run. If you have multiple `CMD` instructions, only the last one will take effect.

    **Example (executing a shell command):**

    ```dockerfile
    CMD ["echo", "Hello from Docker!"]
    ```

    **Example (running a Python script):**

    ```dockerfile
    CMD ["python", "app.py"]
    ```

*   **`ENTRYPOINT`**: Configures a container that will run as an executable. Unlike `CMD`, the `ENTRYPOINT` is harder to override. It's often used to specify the main executable, and `CMD` can be used to provide default arguments to that executable.

    **Example (setting the executable):**

    ```dockerfile
    ENTRYPOINT ["/usr/sbin/nginx"]
    CMD ["-g", "daemon off;"]
    ```

    When this container runs, it will execute `nginx -g "daemon off;"`.

### `ENV`

The `ENV` instruction sets environment variables within the image. These variables can be accessed by applications running inside the container and by subsequent Dockerfile instructions.

**Example:**

```dockerfile
ENV APP_VERSION=1.0.0
ENV NODE_ENV=production
```

## Putting It Together: A Simple Example

Let's create a simple Dockerfile for a basic Python web application.

```dockerfile
# Use an official Python runtime as a parent image
FROM python:3.9-slim

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Make port 80 available to the world outside this container
EXPOSE 80

# Define environment variable
ENV NAME World

# Run app.py when the container launches
CMD ["python", "app.py"]
```

In this example:
*   We start with a slim Python 3.9 image.
*   We set our working directory to `/app`.
*   We copy our application code (assuming it's in the same directory as the Dockerfile) into `/app`.
*   We install dependencies listed in `requirements.txt`.
*   We expose port 80, assuming our app will listen there.
*   We set an environment variable.
*   Finally, we specify that `python app.py` should be run when the container starts.

By mastering these fundamental Dockerfile instructions, you gain the ability to construct precise, efficient, and reproducible container images for your applications.

## Supports

- [[skills/cloud-devops/platform-engineering/system-virtualization/microskills/dockerfile-instructions|Dockerfile Instructions]]

---
type: "medium"
title: "Understanding the Container Image Building Process"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/systems-infrastructure/compute-runtime/system-virtualization/microskills/container-image-building-process|container-image-building-process]]"
related-skills:
  - "[[skills/computing/systems-infrastructure/compute-runtime/system-virtualization/system-virtualization|system-virtualization]]"
learning-time-in-minutes: 4
---
# Understanding the Container Image Building Process

This lesson focuses on understanding how container images are built, a fundamental step in system virtualization and a core component of creating your own containerized applications. We'll explore the role of Dockerfiles in this process.

## What is a Container Image?

Before diving into the building process, let's clarify what a container image is. Think of it as a lightweight, standalone, executable package that contains everything needed to run a piece of software, including the code, runtime, libraries, environment variables, and configuration files. It's a read-only template. When you run an image, you create a container, which is a running instance of that image.

## The Dockerfile: Your Blueprint for Images

The primary tool for building container images is a **Dockerfile**. It's a text file that contains a series of instructions. Each instruction in a Dockerfile creates a new layer in the image. This layered approach is key to Docker's efficiency, as layers can be cached and reused, speeding up subsequent builds.

### Key Dockerfile Instructions

Let's look at some of the most common and important Dockerfile instructions:

*   **`FROM`**: This instruction specifies the base image upon which you're building your new image. Every Dockerfile must start with a `FROM` instruction. It defines the starting point, often a minimal operating system like Alpine Linux or Ubuntu.

    ```dockerfile
    FROM ubuntu:latest
    ```

*   **`RUN`**: This instruction executes commands in a new layer on top of the current image. It's typically used to install software packages, create directories, or perform other setup tasks.

    ```dockerfile
    RUN apt-get update && apt-get install -y nginx
    ```
    *Note: It's good practice to chain `apt-get update` and `apt-get install` together in a single `RUN` instruction to avoid caching stale package lists.*

*   **`COPY`**: This instruction copies files or directories from your host machine (where you're building the image) into the container image filesystem.

    ```dockerfile
    COPY ./app /app
    ```

*   **`ADD`**: Similar to `COPY`, but `ADD` has some additional features, such as the ability to extract compressed archives and fetch files from remote URLs. For simple file copying, `COPY` is generally preferred for clarity.

    ```dockerfile
    ADD https://example.com/my-app.tar.gz /tmp/
    ```

*   **`WORKDIR`**: This instruction sets the working directory for any subsequent `RUN`, `CMD`, `ENTRYPOINT`, `COPY`, and `ADD` instructions. It simplifies commands by not requiring you to specify full paths.

    ```dockerfile
    WORKDIR /app
    ```

*   **`EXPOSE`**: This instruction informs Docker that the container listens on the specified network ports at runtime. It's a form of documentation; it doesn't actually publish the port. You still need to map ports when running the container.

    ```dockerfile
    EXPOSE 80
    ```

*   **`CMD`**: This instruction provides defaults for an executing container. There can be only one `CMD` instruction in a Dockerfile. If you list more than one, only the last `CMD` will take effect. It specifies the command to run when a container starts from this image.

    ```dockerfile
    CMD ["nginx", "-g", "daemon off;"]
    ```

*   **`ENTRYPOINT`**: This instruction configures a container that will run as an executable. It's similar to `CMD`, but the `CMD` instruction can be used to specify default parameters for an `ENTRYPOINT`.

    ```dockerfile
    ENTRYPOINT ["python", "app.py"]
    ```

### The Image Building Workflow

When you run the `docker build` command with a Dockerfile, Docker follows these steps:

1.  **Read the Dockerfile**: Docker parses the Dockerfile instruction by instruction.
2.  **Create Layers**: For most instructions (`RUN`, `COPY`, `ADD`), Docker executes the command and creates a new read-only layer that represents the changes made.
3.  **Cache Layers**: Docker intelligently caches layers. If an instruction and its context haven't changed since the last build, Docker will reuse the cached layer instead of re-executing the command. This is crucial for fast builds.
4.  **Assemble the Image**: All these layers are combined to form the final container image.
5.  **Tag the Image**: You can assign a tag (like a version name) to your image, making it easy to reference later.

### Example: Building a Simple Web Server Image

Let's create a simple Dockerfile to build an image that serves a static HTML file using Nginx.

**`Dockerfile`**:

```dockerfile
# Use an official Ubuntu image as the base
FROM ubuntu:latest

# Set environment variables to prevent interactive prompts during package installation
ENV DEBIAN_FRONTEND=noninteractive

# Update package lists and install Nginx
RUN apt-get update && \
    apt-get install -y nginx && \
    rm -rf /var/lib/apt/lists/*

# Copy our custom index.html file into the Nginx webroot
COPY index.html /var/www/html/

# Expose port 80 to the outside world
EXPOSE 80

# Command to run Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
```

**`index.html`**:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Hello from Docker!</title>
</head>
<body>
    <h1>Welcome to my containerized web page!</h1>
</body>
</html>
```

To build this image, you would navigate to the directory containing these two files in your terminal and run:

```bash
docker build -t my-static-webserver .
```

*   `docker build`: The command to initiate the build process.
*   `-t my-static-webserver`: This tags the image with the name `my-static-webserver`.
*   `.`: This tells Docker to look for the Dockerfile in the current directory.

After the build completes successfully, you can run a container from this image:

```bash
docker run -d -p 8080:80 my-static-webserver
```

Now, if you open your web browser and go to `http://localhost:8080`, you should see "Welcome to my containerized web page!".

By understanding the instructions within a Dockerfile and how Docker processes them, you gain the fundamental knowledge to create your own container images for a wide range of applications.

## Supports

- [[skills/computing/systems-infrastructure/compute-runtime/system-virtualization/microskills/container-image-building-process|Container Image Building Process]]

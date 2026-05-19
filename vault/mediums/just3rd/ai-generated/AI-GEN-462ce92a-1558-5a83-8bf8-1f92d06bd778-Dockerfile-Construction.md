---
type: "medium"
title: "Dockerfile Construction: Building Your First Container Image"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/cloud-devops/platform-engineering/system-virtualization/microskills/dockerfile-construction|Dockerfile Construction]]"
---
# Dockerfile Construction: Building Your First Container Image

This lesson focuses on **Dockerfile Construction**, a key part of **System Virtualization** and specifically the skill of **Building Container Images**. We'll learn how to write Dockerfiles to define the steps for creating a container image for your applications.

## What is a Dockerfile?

A Dockerfile is a plain text file that contains a series of instructions. These instructions tell Docker how to build a container image. Think of it like a recipe: each line is a step you follow to prepare the final dish (your container image).

Docker reads this file and executes each instruction sequentially, creating layers that make up the final image. This layered approach is efficient because if you rebuild an image and only change one step, Docker can reuse the layers from previous builds that weren't affected by the change.

## Core Dockerfile Instructions

Here are some of the most common and essential instructions you'll use in a Dockerfile:

### `FROM`

This instruction **must** be the first instruction in your Dockerfile. It specifies the base image you're building upon. This base image provides the initial operating system environment and any pre-installed software.

**Example:**
```dockerfile
FROM ubuntu:latest
```
This tells Docker to start with the latest version of the Ubuntu Linux distribution as the foundation for our image.

### `RUN`

The `RUN` instruction executes commands in a new layer on top of the current image and commits the results. This is typically used to install software packages, create directories, or perform other setup tasks.

**Example:**
```dockerfile
RUN apt-get update && apt-get install -y nginx
```
This command first updates the package list (`apt-get update`) and then installs the Nginx web server (`apt-get install -y nginx`). The `-y` flag automatically answers "yes" to any prompts during installation.

### `COPY`

The `COPY` instruction copies files or directories from your local machine (the build context) into the container image.

**Example:**
```dockerfile
COPY ./app /app
```
This copies a local directory named `app` into a directory named `/app` inside the container.

### `ADD`

`ADD` is similar to `COPY`, but it has some additional features, such as extracting compressed archives and supporting URLs. However, for simple file copying, `COPY` is generally preferred for clarity.

**Example:**
```dockerfile
ADD https://example.com/myapp.tar.gz /tmp/
```
This downloads a tarball from a URL and extracts its contents into `/tmp/` within the image.

### `WORKDIR`

This instruction sets the working directory for any `RUN`, `CMD`, `ENTRYPOINT`, `COPY`, and `ADD` instructions that follow it. It makes your Dockerfile cleaner by avoiding the need to specify full paths repeatedly.

**Example:**
```dockerfile
WORKDIR /app
RUN echo "Hello, world!" > hello.txt
```
The `echo` command will now run in the `/app` directory.

### `EXPOSE`

This instruction informs Docker that the container listens on the specified network ports at runtime. It's a form of documentation and can be used by linking tools or the `--publish` flag.

**Example:**
```dockerfile
EXPOSE 80
```
This indicates that the application inside the container will be accessible on port 80.

### `CMD`

The `CMD` instruction provides defaults for an executing container. There can only be one `CMD` instruction in a Dockerfile. If you list more than one, only the last `CMD` will take effect. `CMD` can be overridden when running a container using the `docker run` command.

**Example:**
```dockerfile
CMD ["nginx", "-g", "daemon off;"]
```
This will start the Nginx server in the foreground when the container runs.

### `ENTRYPOINT`

An `ENTRYPOINT` instruction configures a container that will run as an executable. It's similar to `CMD`, but it's harder to override. It's often used in conjunction with `CMD` to provide default arguments to the `ENTRYPOINT` executable.

**Example:**
```dockerfile
ENTRYPOINT ["python", "app.py"]
CMD ["--help"]
```
This sets `python app.py` as the default command. If you don't provide any arguments when running the container, it will implicitly run `python app.py --help`.

## Building a Simple Web Server Image

Let's create a Dockerfile to build an image for a simple static HTML website.

**Project Structure:**

```
.
├── Dockerfile
└── index.html
```

**`index.html`:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>My Static Site</title>
</head>
<body>
    <h1>Welcome to my containerized website!</h1>
</body>
</html>
```

**`Dockerfile`:**
```dockerfile
# Use an official Nginx runtime as a parent image
FROM nginx:alpine

# Set the working directory in the container
WORKDIR /usr/share/nginx/html

# Copy the static HTML file from your local directory to the container's web root
COPY index.html .

# Inform Docker that the container listens on port 80
EXPOSE 80

# Define the command to run Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
```

**Explanation:**

1.  `FROM nginx:alpine`: We start with a lightweight Alpine Linux-based Nginx image.
2.  `WORKDIR /usr/share/nginx/html`: This sets the default directory where Nginx serves files from.
3.  `COPY index.html .`: We copy our `index.html` file into the current working directory (`/usr/share/nginx/html`).
4.  `EXPOSE 80`: We declare that Nginx will be listening on port 80.
5.  `CMD ["nginx", "-g", "daemon off;"]`: This is the command that starts Nginx in the foreground, which is necessary for Docker containers to stay running.

**To build this image:**

1.  Save the files above in a directory.
2.  Open your terminal in that directory.
3.  Run the following command:
    ```bash
    docker build -t my-static-site .
    ```
    *   `docker build`: This is the command to build an image.
    *   `-t my-static-site`: This tags your image with the name `my-static-site`. You can choose any name.
    *   `.`: This tells Docker to look for the `Dockerfile` in the current directory.

**To run a container from this image:**

```bash
docker run -p 8080:80 my-static-site
```
*   `-p 8080:80`: This maps port 8080 on your host machine to port 80 inside the container.

Now, if you open your web browser and go to `http://localhost:8080`, you should see your "Welcome to my containerized website!" message.

## Key Takeaways

*   Dockerfiles are the blueprints for your container images.
*   Each instruction in a Dockerfile creates a new layer.
*   Start with a `FROM` instruction specifying a base image.
*   Use `RUN` to install software, `COPY` to add your application files, `WORKDIR` to set the environment, `EXPOSE` to declare ports, and `CMD`/`ENTRYPOINT` to define what runs when the container starts.
*   Build images using `docker build` and run containers using `docker run`.

## Supports

- [[skills/cloud-devops/platform-engineering/system-virtualization/microskills/dockerfile-construction|Dockerfile Construction]]

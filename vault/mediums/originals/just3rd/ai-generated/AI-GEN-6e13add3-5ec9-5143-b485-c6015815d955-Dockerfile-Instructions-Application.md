---
type: "medium"
title: "Applying Dockerfile Instructions"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/systems-infrastructure/compute-runtime/docker/microskills/dockerfile-instructions-application|dockerfile-instructions-application]]"
learning-time-in-minutes: 4
---
# Applying Dockerfile Instructions

This lesson focuses on applying core Dockerfile instructions to build container images for simple applications. We'll cover `FROM`, `RUN`, `COPY`, and `CMD`, understanding how each contributes to the final image.

## Understanding the Building Blocks of a Dockerfile

A `Dockerfile` is a text file that contains a series of instructions Docker uses to build an image. Think of it as a recipe for your application's environment.

### `FROM`: The Foundation

Every `Dockerfile` must start with a `FROM` instruction. This specifies the **base image** upon which your new image will be built. This base image provides the operating system and essential tools.

*   **Purpose:** To set the parent image for the subsequent instructions.
*   **Syntax:** `FROM <image>[:<tag>]`
*   **Example:**
    ```dockerfile
    FROM ubuntu:latest
    ```
    This line means we're starting with the latest version of the Ubuntu operating system image. You can also use specific versions (e.g., `ubuntu:20.04`) for more reproducible builds.

### `RUN`: Executing Commands

The `RUN` instruction executes commands in a new layer on top of the current image. This is typically used to install software packages, create directories, or perform any other setup tasks.

*   **Purpose:** To execute commands during the image build process.
*   **Syntax:**
    *   `RUN <command>` (exec form)
    *   `RUN ["executable", "param1", "param2"]` (shell form)
*   **Example:**
    ```dockerfile
    FROM ubuntu:latest
    RUN apt-get update && apt-get install -y python3
    ```
    This example first updates the package list (`apt-get update`) and then installs Python 3 (`apt-get install -y python3`). The `-y` flag automatically answers "yes" to prompts.

    **Important:** It's good practice to chain commands using `&&` and use `apt-get clean` or similar commands at the end of a `RUN` instruction to reduce the size of the final image by removing cached package files.

    ```dockerfile
    FROM ubuntu:latest
    RUN apt-get update && apt-get install -y \
        nginx \
        && apt-get clean \
        && rm -rf /var/lib/apt/lists/*
    ```
    This is a more optimized way to install Nginx and clean up afterwards.

### `COPY`: Bringing Files In

The `COPY` instruction copies files or directories from your host machine (where you're building the image) into the container image.

*   **Purpose:** To transfer application code, configuration files, or other necessary assets into the image.
*   **Syntax:** `COPY <src>... <dest>`
*   **Example:**
    Let's say you have a simple Python web application in a file named `app.py` in the same directory as your `Dockerfile`.

    ```dockerfile
    FROM python:3.9-slim
    WORKDIR /app
    COPY app.py .
    CMD ["python", "app.py"]
    ```
    Here, `COPY app.py .` copies `app.py` from your build context (the directory containing the `Dockerfile`) to the `/app` directory inside the container. The `.` in `<dest>` signifies the current working directory.

### `CMD`: Running the Application

The `CMD` instruction provides defaults for an executing container. It specifies the command that will be run when a container is created from this image. There can only be one `CMD` instruction in a `Dockerfile`. If you list more than one, only the last one will take effect.

*   **Purpose:** To define the default command to execute when a container starts.
*   **Syntax:**
    *   `CMD ["executable", "param1", "param2"]` (exec form - **recommended**)
    *   `CMD command param1 param2` (shell form)
*   **Example (continuing from above):**
    ```dockerfile
    FROM python:3.9-slim
    WORKDIR /app
    COPY app.py .
    CMD ["python", "app.py"]
    ```
    When you run a container from this image using `docker run <image_name>`, it will automatically execute `python app.py`.

    The exec form is preferred because it doesn't invoke a shell, which can be more efficient and predictable.

## Putting It Together: A Simple Application Example

Let's create a `Dockerfile` for a basic Python web server.

**Assumptions:**
*   You have a file named `server.py` with your Python web server code.
*   You have a `requirements.txt` file listing any Python dependencies.

**`server.py` (example):**
```python
from http.server import SimpleHTTPRequestHandler, HTTPServer

PORT = 8000

class Handler(SimpleHTTPRequestHandler):
    pass

httpd = HTTPServer(("", PORT), Handler)
print(f"Serving on port {PORT}")
httpd.serve_forever()
```

**`requirements.txt` (example):**
```
Flask==2.0.1
```
*(Note: For this simple example, `server.py` doesn't actually use Flask, but it's good practice to show how dependencies are handled).*

**`Dockerfile`:**

```dockerfile
# 1. Specify the base image
FROM python:3.9-slim

# 2. Set the working directory inside the container
WORKDIR /app

# 3. Copy the requirements file first to leverage Docker's build cache
COPY requirements.txt .

# 4. Install the Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# 5. Copy the application code into the container
COPY server.py .

# 6. Expose the port the application will listen on
EXPOSE 8000

# 7. Define the command to run the application
CMD ["python", "server.py"]
```

### Breakdown of the `Dockerfile`:

1.  `FROM python:3.9-slim`: We start with a lightweight Python 3.9 image.
2.  `WORKDIR /app`: Sets the current directory inside the container to `/app`. All subsequent instructions will be executed relative to this directory.
3.  `COPY requirements.txt .`: Copies your `requirements.txt` file into the `/app` directory. We copy this *before* the application code so that if only the application code changes, Docker can reuse the layer where dependencies were installed, making builds faster.
4.  `RUN pip install --no-cache-dir -r requirements.txt`: Installs the Python packages listed in `requirements.txt`. `--no-cache-dir` helps keep the image size down.
5.  `COPY server.py .`: Copies your `server.py` file into the `/app` directory.
6.  `EXPOSE 8000`: Informs Docker that the container will listen on port 8000 at runtime. This is documentation and doesn't actually publish the port.
7.  `CMD ["python", "server.py"]`: Specifies that when a container is launched from this image, it should run `python server.py`.

To build this image, you would navigate to the directory containing your `Dockerfile`, `server.py`, and `requirements.txt` and run:

```bash
docker build -t my-python-app .
```

Then, to run a container from this image:

```bash
docker run -p 8080:8000 my-python-app
```
This maps port 8080 on your host machine to port 8000 inside the container, allowing you to access the server via `http://localhost:8080`.

By understanding and applying these fundamental `Dockerfile` instructions, you can construct robust container images for your applications.

## Supports

- [[skills/computing/systems-infrastructure/compute-runtime/docker/microskills/dockerfile-instructions-application|Dockerfile Instructions Application]]

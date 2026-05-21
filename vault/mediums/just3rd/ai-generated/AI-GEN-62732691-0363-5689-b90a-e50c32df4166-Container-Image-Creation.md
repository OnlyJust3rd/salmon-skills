---
type: "medium"
title: "Building Your First Docker Image: From Dockerfile to Image"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/cloud-devops/platform-engineering/docker-container/microskills/container-image-creation|container-image-creation]]"
---
# Building Your First Docker Image: From Dockerfile to Image

You've learned about the instructions that go into a `Dockerfile`. Now it's time to put that knowledge into practice and *build* a functional Docker image from a `Dockerfile`. This process is the core of creating your own containerized applications.

## The `docker build` Command: Your Image Factory

The primary tool for transforming a `Dockerfile` into a runnable image is the `docker build` command. Think of it as the engine that reads your `Dockerfile` instructions and executes them step-by-step to create layers that form your image.

The basic syntax looks like this:

```bash
docker build [OPTIONS] PATH | URL | -
```

The most common usage involves specifying the build context, which is the directory containing your `Dockerfile` and any other files your application needs. We use the `-t` flag to tag our image with a name and optionally a version.

```bash
docker build -t your-image-name:tag .
```

*   `your-image-name`: A descriptive name for your image (e.g., `my-web-app`, `python-api`).
*   `tag`: A version identifier (e.g., `latest`, `v1.0`, `dev`). If omitted, `latest` is often assumed.
*   `.`: This refers to the current directory as the build context. Docker will look for a `Dockerfile` in this directory.

## A Practical Example: A Simple Python Web Server

Let's imagine we have a very basic Python web application.

**Project Structure:**

```
my-python-app/
├── app.py
└── Dockerfile
```

**`app.py`:**

```python
from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello from Docker!'

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
```

**`Dockerfile`:**

```dockerfile
# Use an official Python runtime as a parent image
FROM python:3.9-slim

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install any needed packages specified in requirements.txt
RUN pip install Flask

# Make port 5000 available to the world outside this container
EXPOSE 5000

# Define environment variable
ENV NAME World

# Run app.py when the container launches
CMD ["python", "app.py"]
```

## Building the Image

1.  **Navigate to your project directory** in your terminal:
    ```bash
    cd path/to/my-python-app
    ```
2.  **Run the `docker build` command**:
    ```bash
    docker build -t my-python-app:latest .
    ```

You will see output similar to this, showing Docker executing each instruction in your `Dockerfile`:

```
[+] Building 12.3s (8/8) FINISHED
 => [internal] load build definition from Dockerfile                       0.0s
 => => transferring dockerfile: 290B                                       0.0s
 => [internal] load .dockerignore                                          0.0s
 => => transferring context: 2B                                            0.0s
 => [internal] load metadata for docker.io/library/python:3.9-slim         1.2s
 => [1/4] FROM docker.io/library/python:3.9-slim@sha256:...               0.0s
 => [2/4] WORKDIR /app                                                     0.1s
 => [3/4] COPY . /app                                                      0.2s
 => [4/4] RUN pip install Flask                                            8.0s
 => exporting to Docker image                                              2.8s
 => => exporting layers                                                    2.7s
 => => writing image sha256:...                                            0.1s
 => => naming to docker.io/library/my-python-app:latest                    0.0s
```

### Understanding the Build Process

*   **Base Image (`FROM`)**: Docker pulls the `python:3.9-slim` image if you don't have it locally. This is the foundation.
*   **Working Directory (`WORKDIR`)**: Sets the current directory for subsequent commands.
*   **Copying Files (`COPY`)**: The `app.py` file is copied from your local machine into the `/app` directory inside the image.
*   **Installing Dependencies (`RUN`)**: The `pip install Flask` command is executed *within the image*, installing Flask. This creates a new layer.
*   **Exposing Ports (`EXPOSE`)**: Informs Docker that the container will listen on port 5000. This is documentation for the user and doesn't publish the port.
*   **Defining Environment Variables (`ENV`)**: Sets an environment variable that can be used within the container.
*   **Command (`CMD`)**: Specifies the default command to run when a container is created from this image.

Each instruction that modifies the filesystem (like `RUN`, `COPY`, `ADD`) creates a new layer in the image. Docker caches these layers, so if you rebuild an image and only change `app.py`, Docker will reuse the layers for `FROM`, `WORKDIR`, and `RUN pip install Flask`, making subsequent builds much faster.

## Verifying Your Image

You can list your local Docker images using:

```bash
docker images
```

You should see `my-python-app` with the `latest` tag in the list.

Now you have a functional Docker image ready to be run as a container! This is the fundamental step in deploying your applications with Docker.

## Supports

- [[skills/cloud-devops/platform-engineering/docker-container/microskills/container-image-creation|Container Image Creation]]

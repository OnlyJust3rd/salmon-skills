---
type: "medium"
title: "Docker Image Layers: Building Blocks of Your Container"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/cloud-devops/platform-engineering/docker-container/microskills/docker-image-layers|Docker Image Layers]]"
---
# Docker Image Layers: Building Blocks of Your Container

Docker images aren't monolithic files. Instead, they are built upon a layered filesystem. Understanding this layered architecture is key to building efficient and manageable Docker images. Each instruction in a `Dockerfile` contributes to creating these layers.

## What is a Docker Image Layer?

Imagine building a cake. You start with a base layer (like flour and eggs), then add another layer for frosting, and perhaps a final layer of sprinkles. Docker images are similar. Each instruction in your `Dockerfile` creates a new, read-only layer. These layers are stacked on top of each other.

When you run a Docker container, a thin, writable layer is added on top of the image layers. This writable layer is where any changes made to the running container are stored. This is why containers can be ephemeral; when the container is stopped and removed, only the writable layer is discarded, leaving the underlying image layers intact.

## How Dockerfiles Create Layers

Every instruction in a `Dockerfile` that results in a change to the filesystem will create a new image layer. Common instructions that contribute to layers include:

*   **`FROM`**: This instruction defines the base image. The base image itself is composed of its own set of layers.
*   **`RUN`**: Commands executed by `RUN` create a new layer containing the changes made by that command. For example, installing software, creating directories, or modifying configuration files.
*   **`COPY`** and **`ADD`**: These instructions copy files or directories from your build context into the image. Each `COPY` or `ADD` operation creates a new layer.
*   **`WORKDIR`**: Sets the working directory for subsequent instructions. While it doesn't directly change the filesystem content, it's often treated as a layer creation for tracking the context.
*   **`ENV`**: Sets environment variables. Similar to `WORKDIR`, it's recorded as a layer.

Instructions like `CMD`, `ENTRYPOINT`, `EXPOSE`, and `VOLUME` do not create new filesystem layers themselves. Instead, they configure the metadata of the image.

### Example: A Simple Dockerfile

Let's look at a `Dockerfile` and see how layers are formed:

```dockerfile
FROM ubuntu:latest
RUN apt-get update && apt-get install -y --no-install-recommends nginx
COPY index.html /var/www/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Here's how each relevant instruction contributes to layers:

1.  **`FROM ubuntu:latest`**: This pulls the `ubuntu:latest` image, which is itself a collection of layers. This forms the base of our new image.
2.  **`RUN apt-get update && apt-get install -y --no-install-recommends nginx`**: This command updates the package list and installs Nginx. The output of these commands (newly installed files, modified package lists) creates a new read-only layer on top of the `ubuntu:latest` layers.
3.  **`COPY index.html /var/www/html/`**: This copies your local `index.html` file into the `/var/www/html/` directory within the image. This file addition results in another new read-only layer.

The `EXPOSE` and `CMD` instructions configure the image but do not create filesystem layers.

## Benefits of Layering

The layered architecture offers several significant advantages:

*   **Efficiency**: When you build multiple images that share common base layers (e.g., multiple images based on `ubuntu:latest`), Docker only needs to store those common layers once. This saves disk space.
*   **Caching**: Docker caches layers during the build process. If you rebuild an image and an instruction hasn't changed, Docker will reuse the previously built layer from the cache, making builds much faster.
*   **Sharing**: Layers can be shared between different Docker images and even between different machines if they are pulled from a registry.

## Best Practices for Layering

*   **Combine `RUN` commands**: Group related `RUN` commands using `&&` to reduce the number of layers. Each `RUN` instruction creates a layer, so fewer `RUN` commands mean fewer layers, which can improve build times and image size.
    *   **Less efficient:**
        ```dockerfile
        RUN apt-get update
        RUN apt-get install -y package1
        RUN apt-get install -y package2
        ```
    *   **More efficient:**
        ```dockerfile
        RUN apt-get update && apt-get install -y package1 package2 && rm -rf /var/lib/apt/lists/*
        ```
        (Notice the cleanup of apt lists to keep the layer small).
*   **Clean up after yourself**: In `RUN` commands, especially those involving package installations, make sure to clean up temporary files or caches to keep your layers lean. For example, `rm -rf /var/lib/apt/lists/*` after `apt-get install`.
*   **Order instructions wisely**: Place frequently changing instructions (like `COPY`ing your application code) towards the end of your `Dockerfile`. This way, Docker can leverage cached layers for instructions that change less often, speeding up rebuilds.

By understanding and leveraging Docker's layered image architecture, you can build more efficient, faster-building, and smaller Docker images.

## Supports

- [[skills/cloud-devops/platform-engineering/docker-container/microskills/docker-image-layers|Docker Image Layers]]

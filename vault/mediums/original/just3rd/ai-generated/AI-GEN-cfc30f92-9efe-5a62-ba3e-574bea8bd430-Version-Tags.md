---
type: "medium"
title: "Version Tags in Artifact Management"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/systems-infrastructure/platform-engineering/artifact-management/microskills/version-tags|version-tags]]"
learning-time-in-minutes: 3
---
# Version Tags in Artifact Management

In the world of software development and artifact management, keeping track of different versions of your software components is crucial. This is where **version tags** come in. They are like unique labels or identifiers that help you distinguish between various iterations of a build artifact or an image.

## What are Version Tags?

Version tags are specific strings of text attached to a particular version of a build artifact or a container image. They allow for easy referencing, retrieval, and management of these artifacts. Think of them as the "name" or "label" for a specific release or build.

Commonly, version tags follow a naming convention, such as:

*   **Semantic Versioning (SemVer):** `MAJOR.MINOR.PATCH` (e.g., `1.2.3`)
*   **Build numbers:** `build-12345`
*   **Commit hashes:** `a1b2c3d4e5f6`
*   **Release names:** `stable`, `latest`, `development`

These tags are fundamental for ensuring that you can reliably deploy the correct version of your software and roll back to previous versions if needed.

## Why Use Version Tags?

*   **Traceability:** Easily identify which version of code produced a specific artifact.
*   **Reproducibility:** Ensure you can rebuild or redeploy the exact same artifact.
*   **Rollbacks:** Quickly revert to a known good version if a new deployment causes issues.
*   **Organization:** Keep your artifact repository clean and understandable.

## Practical Scenario: Deploying a Web Application

Imagine you're managing the deployment of a web application. Your build pipeline produces a new Docker image every time you push code to your main branch.

1.  **Initial Build:** The first build creates an image that you tag as `my-web-app:1.0.0`. This image contains your initial stable release.
2.  **New Features:** You add new features and create a second build. You might tag this as `my-web-app:1.1.0` (following SemVer).
3.  **Bug Fix:** A critical bug is found in `1.1.0`. You fix it and create a patch release, tagging the new image as `my-web-app:1.1.1`.
4.  **Deployment:** When deploying, you can specify which tagged image to use. If `1.1.0` had a problem, you could easily redeploy `1.0.0` or `1.1.1`. You might also use a `latest` tag to point to the most recent stable release.

Without these tags, distinguishing between the different versions of your web application's image in your repository would be nearly impossible.

## Practice Task

Imagine you have just completed a build of a new microservice. The current version of your code produced a Docker image.

What would be a sensible version tag to assign to this image if this is the very first release of this microservice? Explain your reasoning.

## Self-Check Questions

1.  What is the primary purpose of a version tag in artifact management?
2.  Provide two examples of common version tagging conventions.
3.  Why is using version tags important for rollbacks?

## Supports

- [[skills/computing/systems-infrastructure/platform-engineering/artifact-management/microskills/version-tags|Version Tags]]

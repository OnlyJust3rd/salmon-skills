---
type: "medium"
title: "Source Triggers: Kicking Off Your CI Pipeline"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/cloud-devops/platform-engineering/continuous-integration/microskills/source-triggers|Source Triggers]]"
---
# Source Triggers: Kicking Off Your CI Pipeline

In Continuous Integration (CI), a pipeline automates the process of building, testing, and integrating code. But how does this pipeline know when to start? That's where **source triggers** come in. They are the events in your version control system that initiate the CI pipeline's execution. Understanding these triggers is fundamental to how your code changes are automatically processed.

## What are Source Triggers?

Source triggers are predefined events that, when they occur in your code repository, automatically activate your CI pipeline. The most common events are:

*   **Commits to a branch:** When a developer pushes new code changes to a specific branch (like `main`, `develop`, or a feature branch), a trigger can be set to start the pipeline. This is the most frequent trigger in many CI workflows.
*   **Pull Requests (or Merge Requests):** When a developer creates a pull request to merge changes from one branch into another, a trigger can be set to run the pipeline. This is crucial for validating code *before* it's merged into the main codebase.
*   **Tags:** Sometimes, you might want to trigger a pipeline specifically when a new tag is created, often used for releasing stable versions of your software.

The goal is to ensure that every significant change made to the codebase is automatically checked, preventing integration issues early on.

## Why are Source Triggers Important?

Source triggers are the **"start button"** for your CI pipeline. Without them, your pipeline wouldn't know when to act. They enable the core principle of CI: frequent integration. By triggering pipelines on small, frequent changes, you:

*   **Detect bugs early:** Issues are found when they are smallest and easiest to fix.
*   **Reduce integration conflicts:** Frequent merging means fewer large, complex merge conflicts.
*   **Provide rapid feedback:** Developers get quick confirmation if their changes broke anything.

## Practical Scenario: Building a Feature

Imagine you're working on a new feature for a web application. Your team uses Git for version control and a CI service (like GitHub Actions, GitLab CI, or Jenkins).

1.  **Create a Branch:** You create a new branch called `feature/user-profile-update` from the `develop` branch.
2.  **Make Changes:** You write some new code and make several commits to your `feature/user-profile-update` branch.
3.  **Triggering the Pipeline:**
    *   **Commit Trigger:** You push your latest commit to the `feature/user-profile-update` branch. A **commit trigger** is configured to detect pushes to any branch that isn't `main`. This immediately starts your CI pipeline. The pipeline will build your code, run unit tests, and potentially perform static code analysis on your new feature code in isolation.
    *   **Pull Request Trigger:** Once you're happy with your feature, you open a pull request to merge `feature/user-profile-update` into the `develop` branch. A **pull request trigger** is configured to detect pull requests targeting the `develop` branch. This starts *another* CI pipeline run. This time, the pipeline might perform a more comprehensive set of tests, including integration tests, to ensure your new feature works correctly with the existing `develop` branch code.

The results of these pipelines (pass or fail) are displayed in your pull request, allowing your team to review the changes with confidence.

## Practice Task

Review the CI configuration file for a project you are familiar with (or imagine one for a simple Node.js app). Identify the sections that define the **source triggers**.

**Example (GitHub Actions syntax):**

```yaml
name: CI Pipeline

on:
  push:
    branches:
      - main
      - develop
    paths-ignore:
      - 'README.md' # Ignore changes to README for this trigger

  pull_request:
    branches:
      - develop

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      - name: Install dependencies
        run: npm ci
      - name: Run tests
        run: npm test
```

In this example:
*   `on: push:` triggers the pipeline on any push to `main` or `develop`, but skips if only `README.md` changed.
*   `on: pull_request:` triggers the pipeline when a pull request is opened targeting the `develop` branch.

## Self-Check Questions

1.  What is the primary role of a source trigger in a CI pipeline?
2.  Besides commits to a branch, what is another common event that can trigger a CI pipeline?
3.  Why is it beneficial to trigger a pipeline when a pull request is created, even if you've already pushed commits?
4.  If a CI pipeline is configured to trigger on pushes to `main` but not on pushes to feature branches, what might be a potential drawback?

## Supports

- [[skills/cloud-devops/platform-engineering/continuous-integration/microskills/source-triggers|Source Triggers]]

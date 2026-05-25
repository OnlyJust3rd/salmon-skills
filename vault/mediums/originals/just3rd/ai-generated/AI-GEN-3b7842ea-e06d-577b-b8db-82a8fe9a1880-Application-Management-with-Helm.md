---
type: "medium"
title: "Managing Kubernetes Applications with Helm: Upgrades and Rollbacks"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/systems-infrastructure/compute-runtime/kubernetes/microskills/application-management-with-helm|application-management-with-helm]]"
learning-time-in-minutes: 4
---
# Managing Kubernetes Applications with Helm: Upgrades and Rollbacks

This lesson focuses on essential Helm commands for managing deployed applications: `helm upgrade` and `helm rollback`. We'll cover how to update your applications to new versions and how to revert to previous stable states if something goes wrong.

## Understanding Helm Releases

Before diving into upgrades and rollbacks, it's crucial to understand the concept of a Helm *release*. A release is a specific instance of a chart deployed to your Kubernetes cluster. Helm keeps track of all releases and their revision history. Each time you upgrade or rollback a release, Helm creates a new revision. This history is key to managing application lifecycles.

## Upgrading Applications with `helm upgrade`

The `helm upgrade` command allows you to update an existing release with a new version of a chart, or even the same chart with modified configuration values.

### When to Use `helm upgrade`

*   **Deploying new versions of your application:** When you have a new container image or code changes to deploy.
*   **Applying configuration changes:** When you need to modify environment variables, resource limits, or other settings for an existing deployment.
*   **Updating to a newer chart version:** If the chart maintainer releases a new version with bug fixes or new features.

### How it Works

When you run `helm upgrade <release-name> <chart>`, Helm performs the following:

1.  **Compares the new desired state with the current state.**
2.  **Generates Kubernetes manifest files** based on the updated chart and your provided values.
3.  **Applies these manifests to your Kubernetes cluster**, updating existing resources (like Deployments, Services, etc.) or creating new ones as needed.
4.  **Creates a new revision** for the release.

### Practical Example

Let's say you have an application deployed using the chart `my-app-chart` with a release name `my-webserver`. You want to upgrade to a new version of your application, represented by a new container image tag.

First, check the current status of your release:

```bash
helm list
```

This will show you something like:

```
NAME            CHART           APP VERSION     NAMESPACE       REVISION        UPDATED                                 STATUS          CHART VERSION
my-webserver    my-app-chart    1.0.0           default         1               2023-10-27 10:00:00.000000000 +0000 UTC   deployed        0.1.0
```

Now, let's upgrade the `my-webserver` release with a new container image tag. Assume your chart allows specifying the image tag via a `values.yaml` parameter.

**Option 1: Using `--set` to override values:**

```bash
helm upgrade my-webserver my-app-chart --set image.tag=1.1.0
```

**Option 2: Using a custom values file:**

Create a `new-values.yaml` file:

```yaml
image:
  tag: 1.1.0
```

Then run:

```bash
helm upgrade my-webserver my-app-chart -f new-values.yaml
```

After running the upgrade command, you can verify the changes:

```bash
helm history my-webserver
```

This will show you the new revision:

```
REVISION        DEPLOYED                SUPERSEDED_BY     REVISION_TAG
1               2023-10-27 10:00:00...  2                 app version: 1.0.0
2               2023-10-27 11:30:00...                    app version: 1.1.0
```

## Rolling Back to a Previous Version with `helm rollback`

Sometimes, an upgrade might introduce bugs or unexpected behavior. `helm rollback` allows you to revert a release to a previous revision.

### When to Use `helm rollback`

*   **After a failed upgrade:** If a new version of your application or configuration causes issues.
*   **To undo recent changes:** If you discover a problem with the latest deployment and need to quickly restore a working state.

### How it Works

`helm rollback <release-name> <revision-number>` tells Helm to revert the specified release back to the state it was in at the given revision number. Helm will:

1.  **Retrieve the Kubernetes manifests** associated with the target revision.
2.  **Apply these manifests to your cluster**, effectively undoing the changes made in subsequent revisions.
3.  **Mark the current revision as superseded** and create a new revision representing the rolled-back state.

### Practical Example

Continuing from the previous example, let's say the upgrade to `app version 1.1.0` introduced a critical bug. We want to roll back to the previous stable version, which was revision `1`.

```bash
helm rollback my-webserver 1
```

After executing this command, Helm will revert `my-webserver` to the state it was in at revision 1. You can confirm this by checking the history again:

```bash
helm history my-webserver
```

The output will now show a new revision representing the rollback:

```
REVISION        DEPLOYED                SUPERSEDED_BY     REVISION_TAG
1               2023-10-27 10:00:00...  3                 app version: 1.0.0
2               2023-10-27 11:30:00...  3                 app version: 1.1.0
3               2023-10-27 12:00:00...                    app version: 1.0.0
```

Notice how revision `2` (the faulty upgrade) is now superseded by revision `3` (the rollback).

## Key Takeaways

*   **`helm upgrade`** is your tool for deploying new versions or configuration changes.
*   **`helm rollback`** is your safety net for reverting to a known good state.
*   Always use **`helm history`** to understand your release's revision history before performing an upgrade or rollback.
*   Be mindful of your **application's version** as tracked by Helm and your chart.

## Supports

- [[skills/computing/systems-infrastructure/compute-runtime/kubernetes/microskills/application-management-with-helm|Application Management with Helm]]

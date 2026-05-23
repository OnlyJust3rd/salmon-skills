---
type: "medium"
title: "Connecting Your Code to Issues: The Issue-to-Change Workflow"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/software-engineering/ai-assisted-development/github-copilot/microskills/issue-to-change-workflow|issue-to-change-workflow]]"
learning-time-in-minutes: 4
---
# Connecting Your Code to Issues: The Issue-to-Change Workflow

This lesson focuses on a crucial part of using tools like GitHub Copilot effectively: ensuring your code changes are clearly linked to the work you're doing. We'll explore the "Issue-to-Change Workflow" to make your development process more organized and transparent.

## What is the Issue-to-Change Workflow?

The Issue-to-Change Workflow is a practice where every piece of code you write or modify is directly associated with a specific issue, task, or bug report tracked in your project management system (like GitHub Issues, Jira, Asana, etc.). This means that when you're working on a feature or fixing a bug, you create or reference an issue that describes that work, and then you link your code changes to that issue.

**Why is this important?**

*   **Clarity:** Anyone looking at your code can immediately understand *why* that code exists and what problem it solves or feature it implements.
*   **Traceability:** You can easily track the progress of a specific issue from its inception to its resolution in code.
*   **Collaboration:** Team members can see what work is in progress and how it relates to the overall project goals.
*   **Accountability:** It provides a clear record of who worked on what and why.
*   **Project Management:** It allows project managers to get an accurate overview of development status.

## How to Implement the Issue-to-Change Workflow

The core of this workflow revolves around how you name your branches and structure your commit messages.

### 1. Creating Issues (If They Don't Exist)

Before you start coding, ensure there's a corresponding issue for your task. If not, create one! A good issue should include:

*   A clear title.
*   A detailed description of the problem or desired feature.
*   Steps to reproduce (for bugs).
*   Acceptance criteria (what constitutes "done").

**Example GitHub Issue Title:**

`feat: Implement user profile editing functionality`
`fix: Resolve incorrect display of product prices on mobile`

### 2. Branch Naming Conventions

A common and effective practice is to include the issue number in your branch name. This immediately tells anyone looking at your branches what the branch is for.

**Recommended Format:**

`[issue-type]/[issue-number]-[short-description]`

*   `issue-type`: Common types include `feat` (feature), `fix` (bug fix), `chore` (maintenance), `refactor` (code restructuring).
*   `issue-number`: The numerical identifier of the issue from your project management tool.
*   `short-description`: A brief, lowercase, hyphen-separated description of the branch's purpose.

**Examples:**

*   If issue #123 is a new feature: `feat/123-add-user-login`
*   If issue #456 is a bug fix: `fix/456-correct-cart-total`
*   If issue #789 is a chore: `chore/789-update-dependencies`

### 3. Commit Message Best Practices

Your commit messages are another critical place to link your code to the issue. A well-structured commit message makes your history readable and useful.

**Recommended Format (Inspired by Conventional Commits):**

```
[type]([scope]): [short description]

[body]

[footer(s)]
```

*   **Type:** `feat`, `fix`, `chore`, `docs`, `style`, `refactor`, `test`, `ci`, `build`.
*   **Scope (Optional):** The part of the codebase affected (e.g., `auth`, `ui`, `api`).
*   **Short Description:** Concise summary (50 chars max).
*   **Body (Optional):** Detailed explanation of the change, motivation, and context.
*   **Footer(s):** Crucially, this is where you link to the issue.

**Linking to Issues in the Footer:**

GitHub (and other platforms) have special keywords that automatically link commits to issues. The most common are:

*   `Closes #<issue-number>`: This will close the issue *when the pull request is merged*.
*   `Fixes #<issue-number>`: Similar to `Closes`, also closes the issue upon merge.
*   `Resolves #<issue-number>`: Another variation that links and closes upon merge.
*   `See #<issue-number>`: This will link the commit to the issue but will *not* close it automatically.

**Example Commit Message:**

```
feat(auth): Implement OAuth 2.0 login flow

This commit introduces the necessary backend and frontend logic
to allow users to log in using their Google accounts via OAuth 2.0.
It includes endpoint creation, token validation, and user
data synchronization.

Closes #210
```

This commit message clearly states it's a new feature for the `auth` module, describes the change, and most importantly, uses `Closes #210` to link to and automatically resolve issue #210 upon merging.

### 4. Pull Request Workflow Integration

When you create a Pull Request (PR), it should also be linked to the issue. Most Git platforms allow you to associate a PR with an issue directly.

*   **Branch Name:** If your branch name includes the issue number (e.g., `feat/210-oauth-login`), the PR will often inherit this linkage.
*   **PR Description:** In the PR description, you can reiterate the link using keywords like `Closes #210` or `Fixes #210`. This ensures the issue is closed automatically when the PR is merged.
*   **Automatic Linking:** Many platforms will also automatically link PRs to issues if the commit messages within the PR contain the linking keywords.

## Using GitHub Copilot with the Issue-to-Change Workflow

GitHub Copilot can be an excellent tool *within* this workflow.

1.  **Start with an Issue:** Always begin by having a clear issue in your project management tool.
2.  **Create a Branch:** Create a new branch named according to your convention, including the issue number (e.g., `feat/305-refine-user-profile-api`).
3.  **Prompt Copilot:** When you start coding, you can prompt Copilot by writing comments that reference the issue.

    ```python
    # Issue #305: Refine user profile API endpoints for performance
    # Implement caching for frequently accessed profile data.

    def get_user_profile_cached(user_id):
        # TODO: Add Redis cache check here
        pass
    ```
4.  **Generate Code:** Copilot will suggest code based on your comments and the context of your file.
5.  **Commit with Context:** When you're ready to commit, ensure your commit message includes the issue number using the `Closes #`, `Fixes #`, or `See #` keywords.

    ```bash
    git commit -m "feat(api): Add Redis caching to get_user_profile

    Implements caching for user profile data to improve API performance
    as per issue #305.

    Closes #305
    "
    ```

By consistently following the Issue-to-Change Workflow, you make your development process more robust, your codebase easier to understand, and your collaboration with team members more effective, even when leveraging powerful AI tools like GitHub Copilot.

## Supports

- [[skills/computing/software-engineering/ai-assisted-development/github-copilot/microskills/issue-to-change-workflow|Issue-to-Change Workflow]]

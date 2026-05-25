---
type: "medium"
title: "Tracking Changes with Git"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/software-engineering/software-practices/software-version-control/microskills/git-change-tracking|git-change-tracking]]"
learning-time-in-minutes: 4
---
# Tracking Changes with Git

This lesson focuses on how to use Git to meticulously record the evolution of your software projects. Understanding change tracking is fundamental to effective version control.

## The Core Idea: Snapshots, Not Just Differences

Git doesn't just store the differences between files; it stores the entire state of your project at specific points in time. Think of it like taking a photograph of your project whenever you make a meaningful set of changes. These "photographs" are called **commits**.

Each commit represents a saved state of your project, with a unique identifier (a SHA-1 hash), information about who made the change, when, and a descriptive message explaining *why* the change was made. This history is invaluable for understanding how your project has evolved, rolling back to previous states, and collaborating with others.

## The Workflow for Tracking Changes

The process of tracking changes in Git typically involves these three stages:

1.  **Working Directory:** This is where you actively modify your project files. It's your "scratchpad."
2.  **Staging Area (Index):** Before you commit, you need to tell Git *which* of your modified files you want to include in the next commit. This is done by "staging" them. The staging area acts as a draft or a pre-commit snapshot.
3.  **Repository (.git directory):** Once you stage your changes and are ready to permanently record them, you create a commit. This commit is stored in your local Git repository.

### Step-by-Step: Recording Your Changes

Let's walk through the commands you'll use.

**1. Checking the Status:**

Before you do anything, it's always a good practice to see what Git thinks is going on.

```bash
git status
```

This command will tell you:
*   Which files have been modified but not yet staged.
*   Which files are staged and ready to be committed.
*   Which files are untracked (new files Git doesn't know about yet).

**2. Staging Changes:**

Once you've made some modifications to your files and you're happy with them, you need to move them from your working directory to the staging area.

To stage a specific file:

```bash
git add <file_name>
```

For example, if you modified `index.html`:

```bash
git add index.html
```

To stage all modified and new files in the current directory and its subdirectories:

```bash
git add .
```

After running `git add`, run `git status` again. You'll see these files now listed under "Changes to be committed."

**3. Committing Changes:**

This is the act of taking a snapshot of your staged changes and saving it to your repository.

```bash
git commit -m "Your descriptive commit message here"
```

The `-m` flag allows you to provide a commit message directly on the command line.

**Why a good commit message is crucial:**

*   **Clarity:** It explains *what* changed and *why*.
*   **Context:** Helps you and others understand the project's history months or years later.
*   **Decision Making:** Enables you to quickly pinpoint specific changes when debugging or reviewing.

**A good commit message:**

*   Is concise, often starting with a verb (e.g., "Add," "Fix," "Refactor").
*   Is followed by a blank line (optional for simple messages, but good practice).
*   Explains the motivation behind the change, not just *what* was changed.

**Example of a good commit message:**

```
Fix: Prevent infinite loop on user login

The previous implementation of the login logic did not correctly handle
edge cases where user credentials were invalid, leading to an infinite
retry loop. This commit introduces a check to break the loop after
three failed attempts and displays a user-friendly error message.
```

**4. Viewing the Commit History:**

To see the sequence of commits you've made, use:

```bash
git log
```

This will show you a list of commits, starting with the most recent. Each entry includes the commit hash, author, date, and the commit message.

You can use `git log --oneline` for a more compact view, showing just the commit hash (shortened) and the first line of the commit message.

## Practical Scenario

Imagine you're working on a simple webpage.

1.  You create `index.html` and `style.css`.
2.  You add some basic HTML content to `index.html`.
3.  You want to save this initial state.

    ```bash
    git status # Shows index.html and style.css as untracked
    git add index.html style.css
    git status # Shows them as staged
    git commit -m "Initial commit: Setup basic HTML structure and empty CSS"
    ```
4.  Later, you add a header to `index.html`.

    ```bash
    # ... make changes to index.html ...
    git status # Shows index.html as modified
    git add index.html
    git status # Shows index.html as staged
    git commit -m "Add: Main header for the homepage"
    ```
5.  You then decide to add some basic styling to `style.css`.

    ```bash
    # ... make changes to style.css ...
    git status # Shows style.css as modified
    git add style.css
    git status # Shows style.css as staged
    git commit -m "Style: Apply basic font and color to the header"
    ```

Now, if you run `git log --oneline`, you'll see these three commits in chronological order, each representing a distinct step in your project's development. This allows you to go back to any of these points in time if needed.

## Supports

- [[skills/computing/software-engineering/software-practices/software-version-control/microskills/git-change-tracking|Git Change Tracking]]

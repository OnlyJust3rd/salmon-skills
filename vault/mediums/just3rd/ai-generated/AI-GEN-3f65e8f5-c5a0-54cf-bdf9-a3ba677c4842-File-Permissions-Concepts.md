---
type: "medium"
title: "File Permissions in Linux: Who Can Do What?"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/cloud-devops/platform-engineering/linux-system/microskills/file-permissions-concepts|File Permissions Concepts]]"
---
# File Permissions in Linux: Who Can Do What?

In Linux, managing who can access and modify files and directories is crucial for security and stability. This lesson focuses on understanding the fundamental concepts of file permissions: **read**, **write**, and **execute**.

## The Three Pillars of Permissions

Every file and directory in Linux has associated permissions that define the access rights for different categories of users. These permissions are broken down into three types:

*   **Read (r):** Allows viewing the contents of a file or listing the contents of a directory.
*   **Write (w):** Allows modifying or deleting a file, or creating, deleting, or renaming files within a directory.
*   **Execute (x):** Allows running a file (if it's a script or program) or entering a directory (to access its contents).

## The Three Categories of Users

These permissions are applied to three distinct categories of users:

*   **User (u):** This refers to the owner of the file or directory. The owner has the most control over their files.
*   **Group (g):** This refers to a group of users. Files can be assigned to a specific group, and all members of that group will have the permissions defined for the group.
*   **Others (o):** This refers to everyone else on the system who is not the owner and not part of the group.

## Putting It All Together: The Permission String

When you look at a file's details using the `ls -l` command, you'll see a string of characters representing these permissions. For example:

```bash
-rw-r--r-- 1 user group 1024 Jan 1 10:00 my_document.txt
```

Let's break down the first 10 characters:

*   The first character (`-` in this case) indicates the file type. A `-` means it's a regular file, `d` means it's a directory, `l` means it's a symbolic link, and so on.
*   The next nine characters represent the permissions, grouped into three sets of three. Each set corresponds to User, Group, and Others, in that order.

In our example: `-rw-r--r--`

*   **User (owner):** `rw-` (read and write permissions are granted)
*   **Group:** `r--` (only read permission is granted)
*   **Others:** `r--` (only read permission is granted)

## Understanding Directory Permissions

Directory permissions are similar but have slightly different implications:

| Permission | For Files                        | For Directories                               |
| :--------- | :------------------------------- | :-------------------------------------------- |
| **Read (r)** | View file's content              | List the names of files and subdirectories  |
| **Write (w)**| Modify or delete the file        | Create, delete, or rename files within the directory |
| **Execute (x)**| Run the file (if it's executable)| Enter the directory (e.g., `cd` into it) |

A common mistake is to grant execute permission to a directory but not read permission. This would allow you to `cd` into the directory but not see what files are inside, which is often not very useful.

## Common Permission Scenarios

Here are a few common examples to illustrate:

*   `-rw-r--r--`: The owner can read and write, while the group and others can only read. This is typical for configuration files or documents that should be accessible but not modifiable by most users.
*   `-rwxr-xr-x`: The owner can read, write, and execute. The group and others can read and execute. This is common for executable scripts or programs that need to be run by many users.
*   `drwxr-xr-x`: This is a directory. The owner can read, write, and enter. The group and others can read and enter. This allows everyone to see and navigate within the directory.
*   `----------`: No permissions granted to anyone. This is highly restrictive.

By understanding these fundamental permission concepts, you're building a strong foundation for managing your Linux system effectively and securely.

## Supports

- [[skills/cloud-devops/platform-engineering/linux-system/microskills/file-permissions-concepts|File Permissions Concepts]]

---
type: "medium"
title: "Understanding Exit Codes in Shell Scripting"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/systems-infrastructure/system-administration/shell-scripting/microskills/exit-codes|exit-codes]]"
learning-time-in-minutes: 4
---
# Understanding Exit Codes in Shell Scripting

When you run a command in your shell, it doesn't just produce output; it also returns a status code. This code, known as an **exit code**, is a small integer that tells the shell (and any script that ran the command) whether the command succeeded or failed. Understanding and utilizing exit codes is crucial for building robust shell scripts that can automate tasks intelligently.

## What Are Exit Codes?

Every command or program that runs on a Unix-like system, including your shell script itself, will terminate with an exit code.

*   **`0` (Zero):** Conventionally, an exit code of `0` signifies **success**. The command executed as expected and completed its task without any issues.
*   **Non-Zero:** Any exit code **other than `0`** indicates **failure**. The specific non-zero value can sometimes provide more detail about the type of error, though this is often program-dependent.

## How to Access Exit Codes

The shell makes the exit code of the *immediately preceding* command available through a special variable called `$?`.

Let's see this in action:

### Example 1: A Successful Command

First, let's run a command that should succeed, like listing files in a directory.

```bash
ls
```

Now, immediately after running `ls`, check the exit code:

```bash
echo $?
```

You should see `0` printed, confirming the `ls` command was successful.

### Example 2: A Failing Command

Now, let's try a command that is likely to fail, like listing a file that doesn't exist.

```bash
ls non_existent_file.txt
```

You'll see an error message like `ls: cannot access 'non_existent_file.txt': No such file or directory`. Now, check the exit code:

```bash
echo $?
```

You'll likely see a non-zero number (e.g., `1` or `2`), indicating that the `ls` command failed.

## Using Exit Codes to Control Automation Flow

The real power of exit codes comes from using them in your shell scripts to make decisions. This allows your automation to react to successes and failures.

### Conditional Execution with `if` Statements

The most common way to use exit codes is within `if` statements. The `if` statement in shell scripting evaluates a command. If that command exits with a status code of `0` (success), the commands within the `then` block are executed. Otherwise, if the exit code is non-zero, the `else` block is executed (if provided).

#### Basic Structure:

```bash
if command; then
  # Commands to run if 'command' succeeds (exit code 0)
  echo "Command succeeded!"
else
  # Commands to run if 'command' fails (non-zero exit code)
  echo "Command failed!"
fi
```

### Worked Example: Copying a File Safely

Imagine you want to copy a configuration file to a backup location, but only if the original file exists and the copy operation itself is successful.

```bash
#!/bin/bash

SOURCE_FILE="/etc/myapp/config.conf"
BACKUP_DIR="/var/backups/myapp"
BACKUP_FILE="$BACKUP_DIR/$(basename $SOURCE_FILE).$(date +%Y%m%d_%H%M%S)"

# Step 1: Check if the source file exists
if [ -f "$SOURCE_FILE" ]; then
  echo "Source file '$SOURCE_FILE' found."

  # Step 2: Ensure the backup directory exists
  if ! mkdir -p "$BACKUP_DIR"; then
    echo "Error: Could not create backup directory '$BACKUP_DIR'."
    exit 1 # Exit the script with an error code
  fi
  echo "Backup directory '$BACKUP_DIR' is ready."

  # Step 3: Attempt to copy the file
  cp "$SOURCE_FILE" "$BACKUP_FILE"

  # Step 4: Check the exit code of the 'cp' command
  if [ $? -eq 0 ]; then
    echo "Successfully backed up '$SOURCE_FILE' to '$BACKUP_FILE'."
  else
    echo "Error: Failed to copy '$SOURCE_FILE' to '$BACKUP_FILE'."
    exit 1 # Exit the script with an error code
  fi
else
  echo "Error: Source file '$SOURCE_FILE' does not exist. Skipping backup."
  exit 1 # Exit the script with an error code
fi

echo "Backup process completed."
exit 0 # Explicitly exit with success code
```

**Explanation:**

1.  **`if [ -f "$SOURCE_FILE" ]`**: This checks if `$SOURCE_FILE` is a regular file. The `[ ... ]` construct itself is a command that returns an exit code. If the file exists, `[ -f ... ]` succeeds (exit code 0).
2.  **`if ! mkdir -p "$BACKUP_DIR"`**: The `!` negates the exit code. So, if `mkdir -p` *fails* (returns non-zero), the `if` condition becomes true, and we report an error.
3.  **`cp "$SOURCE_FILE" "$BACKUP_FILE"`**: This is the command we want to monitor.
4.  **`if [ $? -eq 0 ]`**: This is the critical part. It immediately checks the exit code (`$?`) of the `cp` command. If it's equal to `0` (`-eq 0`), the copy was successful. Otherwise, it indicates a failure.
5.  **`exit 1`**: If any critical step fails, we use `exit 1` to terminate the script and signal an error to whatever is running the script.
6.  **`exit 0`**: At the end of a successful run, we explicitly `exit 0` to confirm the script completed without issues.

### Alternative: Using `&&` and `||` Operators

Shell scripting provides concise operators for conditional execution based on exit codes:

*   **`&&` (Logical AND):** The command on the right will only execute if the command on the left *succeeds* (exits with `0`).
*   **`||` (Logical OR):** The command on the right will only execute if the command on the left *fails* (exits with a non-zero code).

#### Example using `&&`:

```bash
# Create a directory, and if successful, create a file inside it
mkdir my_new_directory && touch my_new_directory/new_file.txt
```

If `mkdir` fails, `touch` will not run.

#### Example using `||`:

```bash
# Try to ping a host, if it fails, report an error
ping -c 1 google.com || echo "Ping failed!"
```

If `ping` succeeds, nothing further happens. If `ping` fails, "Ping failed!" will be printed.

These operators are excellent for simple, inline conditional logic.

## Key Takeaways

*   Exit codes are numerical indicators of a command's success (`0`) or failure (non-zero).
*   The `$?` special variable holds the exit code of the last executed command.
*   Use `if` statements to create conditional logic in your scripts based on exit codes.
*   The `&&` and `||` operators provide concise ways to execute commands based on the success or failure of preceding commands.
*   By checking exit codes, you make your shell scripts more robust, error-handling, and capable of automating tasks with confidence.

## Supports

- [[skills/computing/systems-infrastructure/system-administration/shell-scripting/microskills/exit-codes|Exit Codes]]

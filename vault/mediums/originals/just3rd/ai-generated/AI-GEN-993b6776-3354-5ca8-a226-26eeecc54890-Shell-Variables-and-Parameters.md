---
type: medium
title: "Shell Variables and Parameters: Making Your Scripts Reusable"
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[shell-variables-and-parameters|shell-variables-and-parameters]]"
learning-time-in-minutes: 4
---
# Shell Variables and Parameters: Making Your Scripts Reusable

In shell scripting, the ability to automate repeatable command-line tasks is powerful. To truly make your scripts adaptable and reusable, you need to learn how to use **variables** and **parameters**. These allow your scripts to accept different inputs and store information, making them much more flexible than hardcoded commands.

## Why Use Variables and Parameters?

Imagine you have a script that backs up a specific directory. Without variables, you'd have to edit the script every time you wanted to back up a different directory. This is where variables and parameters shine.

*   **Variables:** Think of them as named containers for data. You can store text, numbers, or the results of commands in a variable and refer to it by its name.
*   **Parameters (or Arguments):** These are values passed into a script when you run it. They allow the script to behave differently based on what the user provides.

## Working with Shell Variables

Creating and using variables in shell scripting is straightforward.

### Declaring and Assigning Variables

To create a variable, you simply assign a value to a name. Variable names typically use uppercase letters and underscores for readability, though lowercase is also common. There should be no spaces around the equals sign (`=`).

```bash
# Example of declaring and assigning variables
MY_DIR="/home/user/documents"
BACKUP_DATE=$(date +"%Y-%m-%d")
LOG_FILE="/var/log/backup.log"
ENABLED=true
```

**Explanation:**

*   `MY_DIR="/home/user/documents"`: Assigns the string `/home/user/documents` to the variable `MY_DIR`.
*   `BACKUP_DATE=$(date +"%Y-%m-%d")`: This uses **command substitution**. The command `date +"%Y-%m-%d"` is executed, and its output (the current date in YYYY-MM-DD format) is assigned to `BACKUP_DATE`.
*   `LOG_FILE="/var/log/backup.log"`: Assigns a log file path.
*   `ENABLED=true`: Assigns a boolean-like string value. Shell scripting doesn't have native boolean types; you typically represent true/false with strings like `"true"`/`"false"` or `1`/`0`.

### Using Variables

To use the value stored in a variable, you **prefix its name with a dollar sign (`$`)**.

```bash
# Example of using variables
echo "Backing up directory: $MY_DIR"
echo "Backup performed on: $BACKUP_DATE"
echo "Logging to: $LOG_FILE"

if [ "$ENABLED" = true ]; then
  echo "Backup process is enabled."
fi
```

**Key Points:**

*   **Quoting:** It's generally good practice to **quote your variables** (e.g., `"$MY_DIR"`) when you use them. This prevents issues if the variable's content contains spaces or special characters.
*   **Command Substitution:** As seen with `BACKUP_DATE`, `$(command)` allows you to capture the output of a command and store it in a variable. An older syntax, `\`command\``, also exists but `$(command)` is preferred for readability and nesting capabilities.

## Working with Script Parameters (Arguments)

When you run a shell script, you can pass it arguments. These arguments are automatically available within the script as special variables.

### Positional Parameters

The most common way to access arguments is through **positional parameters**:

*   `$0`: The name of the script itself.
*   `$1`: The first argument passed to the script.
*   `$2`: The second argument, and so on.
*   `$#`: The total number of arguments passed to the script (excluding `$0`).
*   `$@`: Expands to all positional parameters, starting from `$1`. Each parameter is treated as a separate word.
*   `$*`: Expands to all positional parameters, starting from `$1`. All parameters are treated as a single word.

### Example Script: `greet.sh`

Let's create a simple script that greets a user by name and optionally mentions their favorite hobby.

```bash
#!/bin/bash

# Script to greet a user

# Check if at least one argument (name) is provided
if [ "$#" -lt 1 ]; then
  echo "Usage: $0 <name> [hobby]"
  exit 1 # Exit with an error code
fi

# Assign arguments to more descriptive variables
USER_NAME="$1"
USER_HOBBY="$2" # This will be empty if only one argument is provided

echo "Hello, $USER_NAME!"

# Check if a hobby was provided
if [ -n "$USER_HOBBY" ]; then # -n checks if the string is not empty
  echo "I heard you enjoy $USER_HOBBY. That's great!"
fi

echo "You provided a total of $# arguments."
```

**How to Run it:**

1.  Save the code above as `greet.sh`.
2.  Make it executable: `chmod +x greet.sh`
3.  Run it with different arguments:

    *   `./greet.sh Alice`
        ```
        Hello, Alice!
        You provided a total of 1 arguments.
        ```
    *   `./greet.sh Bob "reading books"`
        ```
        Hello, Bob!
        I heard you enjoy reading books. That's great!
        You provided a total of 2 arguments.
        ```
    *   `./greet.sh` (no arguments)
        ```
        Usage: ./greet.sh <name> [hobby]
        ```

**Explanation of `greet.sh`:**

*   `#!/bin/bash`: The shebang line, telling the system to execute this script with bash.
*   `if [ "$#" -lt 1 ]; then ... fi`: Checks if the number of arguments (`$#`) is less than 1. If so, it prints a usage message and exits with an error code (`exit 1`).
*   `USER_NAME="$1"`: The first argument is assigned to `USER_NAME`.
*   `USER_HOBBY="$2"`: The second argument is assigned to `USER_HOBBY`. If only one argument was given, `$2` will be an empty string.
*   `if [ -n "$USER_HOBBY" ]; then ... fi`: The `-n` test checks if the string `$USER_HOBBY` is non-empty.

## Summary

Mastering shell variables and parameters is a crucial step in writing effective and reusable shell scripts. By using variables, you can store and manipulate data within your scripts. By utilizing parameters, you enable your scripts to accept external input, making them dynamic and adaptable to various situations. This fundamental skill is the bedrock for automating more complex tasks and building powerful command-line tools.

## Supports

- [[shell-variables-and-parameters|Shell Variables and Parameters]]

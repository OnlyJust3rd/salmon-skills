---
type: medium
title: Conditionals and Loops in Shell Scripting
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[conditionals-and-loops|conditionals-and-loops]]"
related-skills:
  - "[[skills/computing/programming/programming-languages/shell-scripting/shell-scripting|shell-scripting]]"
learning-time-in-minutes: 3
---
# Conditionals and Loops in Shell Scripting

This lesson focuses on applying conditional statements and loops to automate tasks in shell scripting. By mastering these constructs, you'll be able to create more dynamic and intelligent scripts that can adapt to different situations.

## Why Use Conditionals and Loops?

Imagine you need to process a list of files, but only if they meet certain criteria, or you need to perform an action repeatedly until a condition is met. Manually doing this is tedious and error-prone. Conditionals and loops allow your scripts to make decisions and repeat actions, making them powerful tools for automation.

## Conditional Statements: `if`, `elif`, `else`

Conditional statements allow your script to execute different blocks of code based on whether a certain condition is true or false.

### The `if` Statement

The most basic conditional statement is `if`. It checks a condition, and if it's true, it executes the commands within its block.

```bash
if [ condition ]; then
  # commands to execute if condition is true
fi
```

*   `[ condition ]`: This is where you place your test. Common tests include comparing numbers, checking file attributes, or verifying string equality.
*   `then`: This keyword marks the beginning of the commands to be executed if the condition is true.
*   `fi`: This marks the end of the `if` statement.

**Example:** Check if a file exists.

```bash
#!/bin/bash

FILE="my_document.txt"

if [ -f "$FILE" ]; then
  echo "$FILE exists."
fi
```

### The `if-else` Statement

This extends the `if` statement to provide an alternative block of code to execute if the condition is false.

```bash
if [ condition ]; then
  # commands if true
else
  # commands if false
fi
```

**Example:** Check if a directory is empty.

```bash
#!/bin/bash

DIR="/tmp/my_data"

if [ -n "$(ls -A $DIR)" ]; then
  echo "Directory $DIR is not empty."
else
  echo "Directory $DIR is empty."
fi
```

*   `[ -n "..." ]`: This tests if the string inside the quotes is not empty. `$(ls -A $DIR)` lists all files (including hidden ones) in the directory.

### The `if-elif-else` Statement

This allows you to check multiple conditions sequentially.

```bash
if [ condition1 ]; then
  # commands if condition1 is true
elif [ condition2 ]; then
  # commands if condition2 is true
else
  # commands if all previous conditions are false
fi
```

**Example:** Check a user's role.

```bash
#!/bin/bash

USER_ROLE="admin"

if [ "$USER_ROLE" == "admin" ]; then
  echo "Welcome, Administrator!"
elif [ "$USER_ROLE" == "editor" ]; then
  echo "Welcome, Editor!"
else
  echo "Welcome, Guest!"
fi
```

*   `==`: Used for string comparison.
*   Remember to quote variables (`"$USER_ROLE"`) to handle cases where the variable might be empty.

## Loops: `for`, `while`

Loops allow you to execute a block of code multiple times, either for each item in a list or until a condition is met.

### The `for` Loop

The `for` loop is ideal when you know in advance how many times you need to repeat an action, or when you want to iterate over a list of items.

```bash
for variable in item1 item2 item3 ...; do
  # commands to execute for each item
done
```

**Example 1:** Iterate over a list of names.

```bash
#!/bin/bash

for name in Alice Bob Charlie; do
  echo "Hello, $name!"
done
```

**Example 2:** Iterate over files in a directory.

```bash
#!/bin/bash

for file in *.log; do
  echo "Processing log file: $file"
  # You could add commands here to, for example, gzip "$file"
done
```

*   `*.log`: This is a glob pattern that expands to all files ending with `.log` in the current directory.

### The `while` Loop

The `while` loop executes a block of code as long as a specified condition is true.

```bash
while [ condition ]; do
  # commands to execute while condition is true
done
```

**Example:** Count down from 5.

```bash
#!/bin/bash

counter=5

while [ $counter -gt 0 ]; do
  echo "Countdown: $counter"
  counter=$((counter - 1)) # Decrement the counter
done
echo "Blast off!"
```

*   `-gt`: Greater than.
*   `$((...))`: Arithmetic expansion in bash, used here to perform the subtraction.

## Common Pitfalls

*   **Missing `fi` or `done`:** Always ensure your conditional statements and loops are properly closed.
*   **Incorrect spacing:** The spaces around `[` and `]` in tests are crucial. `[ -f file ]` is correct, `[-f file]` is not.
*   **Unquoted variables:** If a variable might be empty or contain spaces, always quote it (e.g., `"$MY_VAR"`) to prevent unexpected behavior.
*   **Misunderstanding exit statuses:** Many commands return an exit status (0 for success, non-zero for failure). You can use these with conditionals. For example, `if grep "error" logfile.txt; then echo "Errors found!"; fi`. `grep` returns 0 if it finds a match.

## Practice Scenarios

1.  **File Archiving:** Write a script that finds all `.txt` files in a directory older than 7 days and archives them into a `.tar.gz` file. Use `find` command with `-mtime` and `if` statements to check if any files were found before archiving.
2.  **User Input Validation:** Create a script that prompts the user for their age. Use a `while` loop to keep asking until they enter a valid number (e.g., between 18 and 65). Use conditional statements to check the input range.

## Supports

- [[conditionals-and-loops|Conditionals and Loops]]

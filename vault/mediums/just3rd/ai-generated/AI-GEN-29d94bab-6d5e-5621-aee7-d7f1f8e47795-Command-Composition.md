---
type: "medium"
title: "Command Composition in Shell Scripting"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/cloud-devops/platform-engineering/shell-scripting/microskills/command-composition|command-composition]]"
---
# Command Composition in Shell Scripting

This lesson explores **Command Composition**, a fundamental technique for combining command-line utilities to create powerful and automated workflows. By chaining commands together, you can transform raw data, perform complex operations, and streamline your daily tasks, directly contributing to the outcome of applying shell scripting for automation.

## What is Command Composition?

Command composition, in the context of shell scripting, is the art of taking the output of one command and feeding it as the input to another. This allows you to build multi-step processes from simple, single-purpose tools. Think of it like an assembly line: each station performs a specific task, and the product moves from one to the next, being refined at each stage.

The primary mechanism for achieving command composition in Unix-like shells (like Bash) is **piping**.

## The Power of Piping (`|`)

The pipe operator (`|`) is the cornerstone of command composition. It redirects the standard output (stdout) of the command on its left to the standard input (stdin) of the command on its right.

**Basic Syntax:**

```bash
command1 | command2 | command3 ...
```

**How it Works:**

1.  `command1` executes and produces its output.
2.  Instead of printing this output to the terminal, the shell captures it.
3.  This captured output is then sent as input to `command2`.
4.  `command2` processes this input and, if piped further, its output is sent to `command3`, and so on.

## Practical Examples

Let's look at some practical scenarios where command composition shines.

### Example 1: Finding and Counting Specific Log Entries

Imagine you have a large log file (`app.log`) and you want to find all lines containing "ERROR" and then count how many such lines exist.

**Commands involved:**

*   `grep`: Searches for patterns in text.
*   `wc`: Word count utility (can count lines with the `-l` flag).

**Composed command:**

```bash
grep "ERROR" app.log | wc -l
```

**Explanation:**

1.  `grep "ERROR" app.log`: This command searches through `app.log` for every line that contains the string "ERROR". Its output will be a list of all matching lines.
2.  `|`: The pipe sends the output of `grep` to `wc -l`.
3.  `wc -l`: This command receives the list of "ERROR" lines and counts them, displaying the total number.

### Example 2: Sorting and Filtering File Lists

Suppose you want to list all files in the current directory, sort them alphabetically, and then only display files whose names start with "report".

**Commands involved:**

*   `ls`: Lists directory contents.
*   `sort`: Sorts lines of text.
*   `head` (or `grep`): To select specific lines.

**Composed command (using `grep`):**

```bash
ls -l | sort | grep "^report"
```

**Explanation:**

1.  `ls -l`: Lists files in the current directory with detailed information (permissions, owner, size, etc.).
2.  `|`: Pipes the output of `ls -l` to `sort`.
3.  `sort`: Sorts the detailed file listing alphabetically by default.
4.  `|`: Pipes the sorted output to `grep`.
5.  `grep "^report"`: Filters the sorted list, showing only lines that begin (`^`) with the string "report".

### Example 3: Extracting and Processing Data

You might have a CSV file (`data.csv`) and want to extract the third column, then sort it numerically.

**Commands involved:**

*   `cut`: Removes sections from each line of files.
*   `sort`: Sorts lines of text.

**Composed command:**

```bash
cut -d ',' -f 3 data.csv | sort -n
```

**Explanation:**

1.  `cut -d ',' -f 3 data.csv`: This command uses the comma (`-d ','`) as a delimiter and extracts (`-f 3`) the third field from each line in `data.csv`.
2.  `|`: Pipes the extracted third column data to `sort`.
3.  `sort -n`: Sorts the input numerically (`-n`). This is crucial if the third column contains numbers.

## Combining Multiple Commands

You can chain as many commands as needed. For instance, to find files larger than 1MB, sort them by size, and display only the top 5:

```bash
find . -type f -size +1M -print0 | xargs -0 du -h | sort -rh | head -n 5
```

This example uses `find` to locate files, `xargs` and `du` to get human-readable sizes, `sort` to sort them in reverse human-readable order, and `head` to show the top results. This demonstrates a more advanced composition for a specific automation goal.

## When to Use Command Composition

*   **Repetitive Tasks:** If you find yourself typing the same sequence of commands repeatedly, compose them into a script.
*   **Data Transformation:** When you need to clean, filter, sort, or reformat data from various sources.
*   **Quick Analysis:** For ad-hoc data exploration directly from the command line.
*   **Building Blocks:** To create more complex automation scripts by combining simpler, tested commands.

## Key Takeaways

*   Command composition enhances automation by linking simple tools into powerful workflows.
*   The pipe symbol (`|`) is essential for directing output from one command to the input of another.
*   Each command in a composition should ideally perform a single, well-defined task.
*   Practice combining common utilities like `grep`, `sort`, `cut`, `awk`, `sed`, `wc`, `find`, `ls`, and `du` to build your command composition skills.

By mastering command composition, you take a significant step towards effectively applying shell scripting for automation.

## Supports

- [[skills/cloud-devops/platform-engineering/shell-scripting/microskills/command-composition|Command Composition]]

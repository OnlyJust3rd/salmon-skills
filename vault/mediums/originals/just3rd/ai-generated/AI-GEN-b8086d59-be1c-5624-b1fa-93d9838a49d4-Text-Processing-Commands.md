---
type: medium
title: Text Processing Commands in Linux
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[text-processing-commands|text-processing-commands]]"
learning-time-in-minutes: 4
---
# Text Processing Commands in Linux

This lesson focuses on using command-line tools to manipulate text files, a crucial part of managing files and directories in Linux. We'll explore common commands that help you search, filter, and transform text.

## Why Text Processing Commands?

When working with Linux systems, you'll often encounter configuration files, log files, or data files that are plain text. Being able to quickly extract specific information, count occurrences, or modify content directly from the terminal saves a lot of time and effort compared to opening each file in a graphical editor. These skills are essential for efficient file management.

## Core Commands for Text Processing

Here are some fundamental command-line tools for text manipulation:

### `grep`: Searching for Patterns

`grep` (Global Regular Expression Print) is used to search for lines that match a specified pattern.

**Basic Usage:**

```bash
grep "pattern" filename
```

*   `"pattern"`: The text or regular expression you are searching for.
*   `filename`: The file(s) to search within.

**Useful Options:**

*   `-i`: Ignore case distinctions.
*   `-v`: Invert match (select non-matching lines).
*   `-n`: Prefix each line of output with the line number within its input file.
*   `-r` or `-R`: Recursively search directories.
*   `-w`: Select only those lines containing matches that form whole words.

**Example:**

Let's say you have a file named `server.log` and you want to find all lines containing the word "ERROR" (case-insensitive).

```bash
grep -i "ERROR" server.log
```

To find all lines that *do not* contain "WARNING":

```bash
grep -v "WARNING" server.log
```

### `sed`: Stream Editor

`sed` is a powerful stream editor that can perform text transformations on an input stream (a file or input from a pipeline). It works by reading files line by line, applying commands to each line, and then writing the result.

**Basic Usage (Substitution):**

```bash
sed 's/old_string/new_string/' filename
```

*   `s`: The substitute command.
*   `old_string`: The text to find.
*   `new_string`: The text to replace it with.
*   `filename`: The file to process.

By default, `sed` only replaces the *first* occurrence of `old_string` on each line. To replace all occurrences, use the `g` (global) flag:

```bash
sed 's/old_string/new_string/g' filename
```

**Useful Options:**

*   `-i`: Edit files in place. This is very powerful but use with caution!
*   `-n`: Suppress automatic printing of pattern space. Often used with the `p` command to print specific lines.

**Example:**

Suppose you have a file `config.txt` and you want to change all instances of "port 80" to "port 8080".

```bash
sed 's/port 80/port 8080/g' config.txt
```

To make this change permanent in the `config.txt` file:

```bash
sed -i 's/port 80/port 8080/g' config.txt
```

**Important Note on `sed -i`**: Always back up important files before using `sed -i`. You can create a backup with a suffix like this: `sed -i.bak 's/old/new/g' filename`.

### `awk`: Pattern Scanning and Processing Language

`awk` is a more sophisticated tool for pattern scanning and processing. It's particularly good at working with structured data (like columns in a file). `awk` processes input line by line, splitting each line into fields.

**Basic Usage:**

```bash
awk 'pattern { action }' filename
```

*   `pattern`: A condition that determines if the action should be performed. If omitted, the action is performed on every line.
*   `action`: The commands to execute (e.g., print specific fields).
*   `filename`: The file to process.

`awk` automatically splits lines into fields. By default, fields are separated by whitespace.
*   `$0`: Represents the entire line.
*   `$1`: The first field.
*   `$2`: The second field, and so on.

**Example:**

Imagine a file `users.txt` with user IDs and usernames, separated by spaces:

```
1001 alice
1002 bob
1003 charlie
```

To print only the usernames (the second field) from this file:

```bash
awk '{ print $2 }' users.txt
```

Output:
```
alice
bob
charlie
```

To print lines where the user ID (first field) is greater than 1001:

```bash
awk '$1 > 1001 { print $0 }' users.txt
```

Output:
```
1002 bob
1003 charlie
```

### `cut`: Removing Sections from Each Line

`cut` is used to remove sections (columns or characters) from each line of files.

**Basic Usage:**

```bash
cut -d "delimiter" -f fields filename
```

*   `-d "delimiter"`: Specifies the delimiter character (e.g., `-d ','` for comma, `-d ':'` for colon). If omitted, the default is a tab.
*   `-f fields`: Specifies which fields to select. Fields can be single numbers (e.g., `-f 1`), ranges (e.g., `-f 1-3`), or comma-separated lists (e.g., `-f 1,3,5`).

**Example:**

If `data.csv` contains comma-separated values:

```csv
ID,Name,Email
1,Alice,alice@example.com
2,Bob,bob@example.com
```

To extract just the names (the second field), assuming it's comma-delimited:

```bash
cut -d ',' -f 2 data.csv
```

Output:
```
Name
Alice
Bob
```

To get the first and third fields:

```bash
cut -d ',' -f 1,3 data.csv
```

Output:
```
ID,Email
1,alice@example.com
2,bob@example.com
```

## Putting It Together: The Power of Pipelines

The real strength of these commands comes when you combine them using pipes (`|`). A pipe takes the output of one command and uses it as the input for the next command.

**Example:**

Find all lines containing "failed" in `/var/log/auth.log`, then count how many such lines exist, and finally, display only the count.

```bash
grep "failed" /var/log/auth.log | wc -l
```

*   `grep "failed" /var/log/auth.log`: Finds all lines with "failed".
*   `|`: Pipes the output of `grep` to `wc -l`.
*   `wc -l`: Counts the number of lines it receives as input.

This is a fundamental technique for analyzing log files and other text data efficiently on the Linux command line.

## Practice and Experiment

The best way to master these commands is to practice. Create some sample text files and experiment with different options and combinations. Try to extract specific pieces of information or make targeted changes to files.

## Supports

- [[text-processing-commands|Text Processing Commands]]

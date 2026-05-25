---
type: "medium"
title: "Cron Job Syntax: Mastering the Art of Scheduled Tasks"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/systems-infrastructure/system-administration/linux-system/microskills/cron-job-syntax|cron-job-syntax]]"
learning-time-in-minutes: 4
---
# Cron Job Syntax: Mastering the Art of Scheduled Tasks

Welcome to this lesson on Cron Job Syntax. Understanding this syntax is the first crucial step in automating system tasks using cron, a fundamental utility for any Linux system administrator. We'll break down the structure of a cron entry, making it easy to define exactly when and how your tasks should run.

## The Anatomy of a Cron Entry

A cron entry, also known as a cron job, is a line in a crontab file that specifies a command to be run at a particular time. Each entry follows a strict format:

```
*     *     *     *     *     command_to_be_executed
-     -     -     -     -
|     |     |     |     |
|     |     |     |     |----- Day of week (0 - 7) (Sunday=0 or 7)
|     |     |     |------- Month (1 - 12)
|     |     |--------- Day of month (1 - 31)
|     |------- Hour (0 - 23)
|----- Minute (0 - 59)
```

Let's break down each of these five time and date fields, followed by the command.

### Time and Date Fields Explained

Each of the first five fields represents a unit of time. You can use specific numbers, asterisks (`*`), ranges, and lists.

*   **Minute (0-59):** Specifies the minute of the hour.
    *   `0`: At the beginning of the hour.
    *   `15`: At 15 minutes past the hour.
    *   `*/5`: Every 5 minutes.

*   **Hour (0-23):** Specifies the hour of the day.
    *   `0`: Midnight.
    *   `14`: 2 PM.
    *   `9-17`: Every hour from 9 AM to 5 PM inclusive.

*   **Day of Month (1-31):** Specifies the day of the month.
    *   `1`: On the first day of the month.
    *   `15`: On the 15th day of the month.
    *   `1,15`: On the 1st and 15th of the month.

*   **Month (1-12):** Specifies the month of the year.
    *   `1`: January.
    *   `7`: July.
    *   `3-5`: March, April, and May.

*   **Day of Week (0-7):** Specifies the day of the week. Both 0 and 7 represent Sunday.
    *   `0`: Sunday.
    *   `1`: Monday.
    *   `5`: Friday.
    *   `0,6`: Sundays and Saturdays (weekends).
    *   `MON-FRI`: Weekdays.

### The Command to be Executed

This is the actual command or script you want cron to run. It can be any valid shell command.

## Special Characters and Their Meanings

Beyond simple numbers and asterisks, cron supports special characters to define more complex schedules.

*   **Asterisk (`*`):** Matches all possible values for that field. It's the wildcard.
    *   `* * * * *`: Every minute of every hour of every day, etc. (runs constantly, use with caution!)

*   **Comma (`,`):** Used to specify a list of values.
    *   `0 8,12,16 * * *`: At 8 AM, 12 PM, and 4 PM every day.

*   **Hyphen (`-`):** Used to specify a range of values.
    *   `30 9-17 * * 1-5`: At 9:30 AM through 5:30 PM, on weekdays (Monday to Friday).

*   **Slash (`/`):** Used to specify step values.
    *   `*/15 * * * *`: Every 15 minutes.
    *   `0 */2 * * *`: Every 2 hours.

## Special Cron Strings

For common tasks, cron provides convenient shortcuts:

| String    | Equivalent                         | Meaning                                              |
| :-------- | :--------------------------------- | :--------------------------------------------------- |
| `@reboot` | @reboot                            | Run once after reboot.                               |
| `@yearly` | `0 0 1 1 *`                        | Run once a year (midnight on Jan 1st).               |
| `@annually` | `0 0 1 1 *`                        | Same as `@yearly`.                                   |
| `@monthly`  | `0 0 1 * *`                        | Run once a month (midnight on the 1st of the month). |
| `@weekly`   | `0 0 * * 0`                        | Run once a week (midnight on Sunday).                |
| `@daily`    | `0 0 * * *`                        | Run once a day (midnight).                           |
| `@hourly`   | `0 * * * *`                        | Run once an hour (at the top of the hour).           |

## Practical Examples

Let's solidify your understanding with some real-world examples:

1.  **Backup script every night at 3 AM:**
    ```
    0 3 * * * /home/user/scripts/backup.sh
    ```
    *   `0`: At minute 0 (the start of the hour).
    *   `3`: At hour 3 (3 AM).
    *   `*`: Every day of the month.
    *   `*`: Every month.
    *   `*`: Every day of the week.

2.  **Clean temporary files every Monday at 8 PM:**
    ```
    0 20 * * 1 /usr/bin/find /tmp -type f -mtime +7 -delete
    ```
    *   `0`: At minute 0.
    *   `20`: At hour 20 (8 PM).
    *   `*`: Every day of the month.
    *   `*`: Every month.
    *   `1`: On Monday.
    *   `/usr/bin/find /tmp -type f -mtime +7 -delete`: The command to find files in `/tmp` older than 7 days and delete them.

3.  **Run a report generation script every 15 minutes:**
    ```
    */15 * * * * /opt/reports/generate_report.py
    ```
    *   `*/15`: Every 15 minutes.
    *   `*`: Every hour.
    *   `*`: Every day of the month.
    *   `*`: Every month.
    *   `*`: Every day of the week.

4.  **Run a system check at the beginning of every month at midnight:**
    ```
    @monthly /usr/local/bin/system_check.sh
    ```

## Common Pitfalls to Avoid

*   **Midnight Execution:** Be mindful that `0 0 * * *` means midnight. If you want something at noon, use `0 12 * * *`.
*   **Daylight Saving Time:** Cron does not automatically adjust for DST. If a job is scheduled to run during a DST transition, its execution time might shift.
*   **Path Issues:** Commands in cron jobs may not have the same environment variables (like `PATH`) as your interactive shell. It's best practice to use absolute paths for commands and scripts (e.g., `/usr/bin/command` instead of just `command`).
*   **Permissions:** Ensure the user whose crontab the job is in has the necessary permissions to execute the command or script.
*   **Output Redirection:** By default, cron jobs email any output (stdout and stderr) to the user. This can be overwhelming. Redirect output to a log file or `/dev/null` if you don't need it. For example, `> /var/log/myjob.log 2>&1` redirects both standard output and standard error to a log file. `> /dev/null 2>&1` discards all output.

Mastering this syntax is key to unlocking the power of automation with cron. Practice creating different entries and test them to ensure they run as expected.

## Supports

- [[skills/computing/systems-infrastructure/system-administration/linux-system/microskills/cron-job-syntax|Cron Job Syntax]]

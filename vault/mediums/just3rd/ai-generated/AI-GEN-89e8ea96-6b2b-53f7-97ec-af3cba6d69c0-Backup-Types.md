---
type: "medium"
title: "Understanding Database Backup Types"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/data/databases/database-backup-and-recovery/microskills/backup-types|backup-types]]"
---
# Understanding Database Backup Types

When we talk about database backup and recovery, a crucial part is understanding the different *types* of backups you can perform. These types determine what data is saved and how it's saved, directly impacting your recovery speed and storage needs. For this lesson, we'll focus on the three primary types: Full, Incremental, and Differential backups.

## What are the Backup Types?

Imagine you have a large digital photo album.

*   **Full Backup:** This is like taking a complete copy of your entire photo album. It includes every single photo. Every time you perform a full backup, you get a completely independent, self-contained snapshot of your data.

    *   **Pros:** Simplest to restore from. You only need the latest full backup.
    *   **Cons:** Takes the most time and storage space.

*   **Incremental Backup:** This is like only taking photos of the *new* photos you added since your *last backup* (regardless of whether that was a full or incremental one). It only backs up the changes made since the previous backup operation.

    *   **Pros:** Fastest to perform and requires the least storage space for each backup.
    *   **Cons:** Restoration is more complex. You need the last full backup *and* all subsequent incremental backups in order.

*   **Differential Backup:** This is like taking photos of all the new photos you added since your *last full backup*. It backs up all the changes made since the last *full* backup.

    *   **Pros:** Faster to perform and uses less space than a full backup. Restoration is simpler than incremental, as you only need the last full backup and the last differential backup.
    *   **Cons:** Takes more time and storage space than incremental backups as it grows with each subsequent differential backup until the next full backup.

## Practical Scenario

Let's say you have a database for an e-commerce website.

**Day 1 (Monday):** You perform a **Full Backup**. This captures everything.
**Day 2 (Tuesday):** You perform an **Incremental Backup**. Only changes made on Tuesday are backed up.
**Day 3 (Wednesday):** You perform another **Incremental Backup**. Only changes made on Wednesday are backed up.
**Day 4 (Thursday):** You perform a **Differential Backup**. This backs up all changes made on Wednesday *and* Thursday (since the last full backup on Monday).
**Day 5 (Friday):** You perform another **Differential Backup**. This backs up all changes made on Wednesday, Thursday, *and* Friday.

### Restoration Example

*   **If you need to restore from Monday and Tuesday's backups:** You'd use the Full backup from Monday and the Incremental backup from Tuesday.
*   **If you need to restore from Monday and Thursday's backups:** You'd use the Full backup from Monday and the Differential backup from Thursday.

## Practice Task

Consider a database with the following activity:

*   **Monday:** Perform a full backup.
*   **Tuesday:** Make 100 new records and update 20 existing records. Perform an incremental backup.
*   **Wednesday:** Make 50 new records and update 15 existing records. Perform a differential backup.
*   **Thursday:** Make 20 new records and update 5 existing records. Perform an incremental backup.

Describe what data would be included in the differential backup performed on Wednesday.

## Self-Check Questions

1.  Which backup type is the simplest to restore from but also the most time-consuming and storage-intensive to create?
2.  If you perform a full backup on Sunday and then incremental backups on Monday, Tuesday, and Wednesday, which backups would you need to restore the database to its state at the end of Tuesday?
3.  What is the main difference between an incremental backup and a differential backup in terms of what data they capture?

## Supports

- [[skills/data/databases/database-backup-and-recovery/microskills/backup-types|Backup Types]]

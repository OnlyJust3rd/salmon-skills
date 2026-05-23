---
type: "medium"
title: "Understanding Pseudocode Structure"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/computer-science/algorithms/algorithm-representation/microskills/pseudocode-structure-comprehension|pseudocode-structure-comprehension]]"
learning-time-in-minutes: 2
---
# Understanding Pseudocode Structure

Pseudocode is a way to describe an algorithm's logic in a human-readable format, without being tied to any specific programming language's syntax. It's like writing out instructions in plain English, but with a few common keywords to indicate specific actions or control flow. This makes it easier to understand and plan an algorithm before you start coding.

The core of pseudocode lies in its keywords and how they organize instructions. Common keywords help us understand the flow of logic:

*   **Input/Output:** Keywords like `READ`, `GET`, `INPUT`, `PRINT`, `DISPLAY`, `OUTPUT` indicate when data is being entered or shown.
*   **Processing:** Keywords like `SET`, `CALCULATE`, `ASSIGN`, `COMPUTE` show when calculations or data manipulation happen.
*   **Control Flow:**
    *   **Sequence:** Instructions are typically executed one after another.
    *   **Selection (If/Else):** `IF condition THEN ... ELSE ... END IF` structures are used for making decisions.
    *   **Iteration (Loops):** `WHILE condition DO ... END WHILE`, `FOR variable FROM start TO end DO ... END FOR`, or `REPEAT ... UNTIL condition` are used to repeat actions.

## Practical Scenario: Calculating Average Score

Imagine you need to write an algorithm to calculate the average score of a list of student scores. How would you describe this using pseudocode structure?

Here's a possible representation:

```pseudocode
// Algorithm to calculate average score

DECLARE total_score AS NUMBER
DECLARE number_of_scores AS NUMBER
DECLARE average_score AS NUMBER
DECLARE current_score AS NUMBER

SET total_score = 0
SET number_of_scores = 0

// Get the first score
INPUT current_score

// Loop while the score is not -1 (a sentinel value to end input)
WHILE current_score IS NOT -1 DO
    // Add the current score to the total
    SET total_score = total_score + current_score
    // Increment the count of scores
    SET number_of_scores = number_of_scores + 1
    // Get the next score
    INPUT current_score
END WHILE

// Check if any scores were entered to avoid division by zero
IF number_of_scores > 0 THEN
    // Calculate the average
    SET average_score = total_score / number_of_scores
    // Display the result
    PRINT "The average score is: ", average_score
ELSE
    PRINT "No scores were entered."
END IF
```

In this example, you can see how keywords like `DECLARE`, `SET`, `INPUT`, `WHILE`, `DO`, `END WHILE`, `IF`, `THEN`, `ELSE`, `END IF`, and `PRINT` guide the reader through the algorithm's steps and logic.

## Practice Task

Write pseudocode for an algorithm that checks if a given number is even or odd. You'll need to use `INPUT` to get the number, `IF/ELSE` for the decision, and the modulo operator (often represented as `MOD` or `%`) to check for divisibility by 2.

## Self-Check Questions

1.  What is the primary purpose of pseudocode?
2.  What kind of action does the keyword `SET` typically represent in pseudocode?
3.  Which pseudocode structure would you use if you needed to repeat an action multiple times based on a condition?
4.  If you wanted to display a message to the user, which type of keyword would you likely use?

## Supports

- [[skills/computing/computer-science/algorithms/algorithm-representation/microskills/pseudocode-structure-comprehension|Pseudocode structure comprehension]]

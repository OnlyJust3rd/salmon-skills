---
type: "medium"
title: "Control Flow: Conditionals and Loops in C#"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/programming-languages/c-sharp-programming/microskills/control-flow|control-flow]]"
---
# Control Flow: Conditionals and Loops in C#

Control flow statements allow your C# programs to make decisions and repeat actions. This is fundamental to creating dynamic and responsive applications. We'll focus on `if` statements for decision-making and `for` loops for repetition.

## Conditionals: The `if` Statement

An `if` statement lets your program execute a block of code *only if* a certain condition is true.

**Syntax:**

```csharp
if (condition)
{
    // Code to execute if the condition is true
}
else
{
    // Optional: Code to execute if the condition is false
}
```

**Example Scenario:** Imagine a simple game where a player earns a bonus if their score is above a certain threshold.

```csharp
int playerScore = 150;
int bonusThreshold = 100;

if (playerScore > bonusThreshold)
{
    Console.WriteLine("Congratulations! You earned a bonus!");
}
else
{
    Console.WriteLine("Keep playing to earn a bonus!");
}
```

In this example, `playerScore > bonusThreshold` is the condition. Since 150 is greater than 100, the message "Congratulations! You earned a bonus!" will be displayed.

## Loops: The `for` Loop

A `for` loop is used to execute a block of code a specific number of times. It's perfect for tasks that need to be repeated systematically.

**Syntax:**

```csharp
for (initialization; condition; iterator)
{
    // Code to execute repeatedly
}
```

*   **Initialization:** Runs once when the loop starts (e.g., setting a counter to 0).
*   **Condition:** Checked before each iteration. If true, the loop continues; if false, it stops.
*   **Iterator:** Runs after each iteration (e.g., incrementing the counter).

**Example Scenario:** Displaying a countdown from 5 to 1.

```csharp
for (int i = 5; i > 0; i--)
{
    Console.WriteLine(i);
}
Console.WriteLine("Blast off!");
```

Here, `i` starts at 5. The loop continues as long as `i` is greater than 0. In each step, `i` is decremented. This will print:
5
4
3
2
1
Blast off!

## Practice Task

Write a C# program that:
1.  Declares an integer variable `userAge` and sets it to a value (e.g., 17).
2.  Uses an `if` statement to check if `userAge` is 18 or greater.
3.  If `userAge` is 18 or greater, print "You are eligible to vote."
4.  Otherwise, print "You are not yet eligible to vote."
5.  Then, use a `for` loop to print the numbers from 1 to 10, each on a new line.

## Self-Check Questions

1.  What is the primary purpose of an `if` statement in C#?
2.  When would you choose a `for` loop over an `if` statement?
3.  In a `for` loop, which part determines if the loop should continue running?

## Supports

- [[skills/programming/programming-languages/c-sharp-programming/microskills/control-flow|Control Flow]]

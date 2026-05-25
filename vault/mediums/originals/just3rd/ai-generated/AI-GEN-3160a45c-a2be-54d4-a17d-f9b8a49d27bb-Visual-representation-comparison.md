---
type: "medium"
title: "Flowchart vs. Pseudocode: Visualizing Algorithms"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/computer-science/algorithms/algorithm-representation/microskills/visual-representation-comparison|visual-representation-comparison]]"
learning-time-in-minutes: 3
---
# Flowchart vs. Pseudocode: Visualizing Algorithms

Understanding how to represent algorithms is a core part of building them. Two common ways to do this are flowcharts and pseudocode. This lesson helps you understand the differences between these two methods of visual and textual representation.

## What are Flowcharts and Pseudocode?

*   **Flowcharts:** These use standardized graphical symbols to represent the steps and logic of an algorithm. Think of them as a visual roadmap for your program. Different shapes represent different actions (like starting/ending, processing, input/output, decisions). Lines with arrows show the flow of control from one step to the next.

*   **Pseudocode:** This is a text-based way to describe an algorithm. It uses a combination of natural language (like English) and programming-like keywords. The goal is to be easy for humans to read and understand, without getting bogged down in the specific syntax of any particular programming language.

## Practical Scenario: Calculating Average

Imagine you need to create an algorithm to calculate the average of three numbers.

**Flowchart Representation:**

(Imagine a flowchart here with the following steps represented by symbols)

1.  **Start (Oval):** Begin the process.
2.  **Input Number 1 (Parallelogram):** Get the first number.
3.  **Input Number 2 (Parallelogram):** Get the second number.
4.  **Input Number 3 (Parallelogram):** Get the third number.
5.  **Process: Sum = Num1 + Num2 + Num3 (Rectangle):** Add the three numbers together.
6.  **Process: Average = Sum / 3 (Rectangle):** Divide the sum by 3 to get the average.
7.  **Output Average (Parallelogram):** Display the calculated average.
8.  **End (Oval):** Stop the process.

**Pseudocode Representation:**

```
START
  INPUT num1
  INPUT num2
  INPUT num3

  SET sum = num1 + num2 + num3
  SET average = sum / 3

  OUTPUT average
END
```

## Key Differences to Understand

| Feature        | Flowchart                                     | Pseudocode                                       |
| :------------- | :-------------------------------------------- | :----------------------------------------------- |
| **Format**     | Graphical (uses shapes and arrows)            | Textual (uses natural language and keywords)     |
| **Readability**| Visually intuitive, easy to follow logic      | Can be more detailed, good for complex logic     |
| **Detail**     | Can become complex with many steps/decisions  | Can be more precise, less ambiguous for logic    |
| **Implementation**| Not directly executable                       | Closer to actual code, easier to translate       |
| **Best For**   | Understanding overall structure, simple logic | Describing detailed steps, complex algorithms    |

## Practice Task

Think about an algorithm to check if a number is even or odd.

1.  **Draw a flowchart** representing this algorithm.
2.  **Write pseudocode** for this algorithm.

## Self-Check Questions

1.  Which representation uses shapes and arrows to show the flow of an algorithm?
2.  What is the main advantage of pseudocode for describing complex logic?
3.  If you wanted to quickly see the overall structure of a simple algorithm, which representation might be more helpful at first glance?
4.  Can you directly run a flowchart as a computer program? Explain why or why not.

## Supports

- [[skills/computing/computer-science/algorithms/algorithm-representation/microskills/visual-representation-comparison|Visual representation comparison]]

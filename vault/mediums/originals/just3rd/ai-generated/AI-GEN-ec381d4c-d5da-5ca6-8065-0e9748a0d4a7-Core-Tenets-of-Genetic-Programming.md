---
type: "medium"
title: "Core Tenets of Genetic Programming"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/data-ai/artificial-intelligence/computational-evolution-theory/microskills/core-tenets-of-genetic-programming|core-tenets-of-genetic-programming]]"
related-skills:
  - "[[skills/computing/data-ai/artificial-intelligence/computational-evolution-theory/computational-evolution-theory|computational-evolution-theory]]"
learning-time-in-minutes: 4
---
# Core Tenets of Genetic Programming

Genetic programming is a technique within computational evolution that uses evolutionary principles to evolve computer programs. It's about letting algorithms "learn" by trying out different program structures and selecting the best ones to pass on their traits.

## What are the Core Tenets?

At its heart, genetic programming is guided by a few fundamental principles:

*   **Representation:** How a potential solution (a program) is encoded. In genetic programming, programs are typically represented as tree structures, where nodes are functions or operations, and leaves are variables or constants. This tree structure makes it easy to manipulate and combine program parts.
*   **Population:** A collection of individuals, where each individual is a candidate program. The size of the population is a parameter that influences the search process.
*   **Fitness Function:** A way to measure how good each individual program is at solving the problem. This is the objective criterion that guides the evolution. A higher fitness score means a better program.
*   **Selection:** The process of choosing individuals from the current population to be parents for the next generation. Fitter individuals are more likely to be selected, mimicking natural selection.
*   **Genetic Operators:** These are the mechanisms that create new individuals (offspring) from the selected parents. The two primary operators are:
    *   **Crossover (Recombination):** Two parent programs exchange parts of their tree structures to create new offspring. This allows for the combination of successful sub-programs.
    *   **Mutation:** A random change is introduced into an individual program's tree structure. This can involve replacing a node, subtree, or adding/removing branches, helping to explore new areas of the solution space.

## Practical Scenario: Evolving a Simple Calculator

Imagine you want to evolve a program that can perform basic arithmetic operations (addition, subtraction, multiplication, division) on two input numbers.

1.  **Representation:** Programs are represented as expression trees. For example, `(x + 5) * y` might be a tree with `*` as the root, `y` as the right child, and another subtree `(+ , x, 5)` as the left child.
2.  **Population:** You start with a population of, say, 50 randomly generated expression trees. These initial programs will likely be nonsensical.
3.  **Fitness Function:** The fitness of each program is determined by how accurate its output is when tested against a set of input number pairs and their expected results. For instance, if the program calculates `(2 + 5) * 3` and the expected result is `21`, its accuracy for that input is high. The overall fitness is an average or sum of its accuracy across all test cases.
4.  **Selection:** Programs with higher fitness scores are more likely to be chosen as parents.
5.  **Genetic Operators:**
    *   **Crossover:** Two parent trees might exchange subtrees. If Parent A is `(x * 2) / y` and Parent B is `x + (5 - y)`, a crossover might result in offspring like `(x + 5) / y` or `x * 2 - y`.
    *   **Mutation:** A node might be randomly changed. For example, the `+` operator in `x + 5` could be mutated to a `-` operator, resulting in `x - 5`.

The process repeats for many generations. Over time, the population will evolve towards programs that more accurately perform the desired arithmetic calculations.

## Practice Task

Consider a problem where you need to evolve a program to predict the next number in a simple sequence (e.g., 2, 4, 6, 8, ...).

Describe how you would define the **fitness function** for this problem. What criteria would you use to evaluate how "good" a program is at predicting the next number in the sequence?

## Self-Check Questions

1.  What is the primary role of the **fitness function** in genetic programming?
2.  How does **crossover** contribute to the evolution of programs?
3.  Why is **mutation** important in genetic programming, even if it sometimes creates worse solutions?
4.  In the context of genetic programming, what is meant by the "representation" of a solution?

## Supports

- [[skills/computing/data-ai/artificial-intelligence/computational-evolution-theory/microskills/core-tenets-of-genetic-programming|Core Tenets of Genetic Programming]]

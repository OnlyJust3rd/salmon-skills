---
type: "medium"
title: "Analyzing Recursive Algorithms"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/discrete-math/proof-techniques/microskills/recursive-algorithm-analysis|recursive-algorithm-analysis]]"
learning-time-in-minutes: 4
---
# Analyzing Recursive Algorithms

Recursive algorithms are elegant and powerful, often mirroring the structure of problems they solve. However, their efficiency can be tricky to grasp. This lesson focuses on analyzing the efficiency of recursive algorithms, a key aspect of applying induction and recursion to problem-solving.

## What is Recursive Algorithm Analysis?

At its core, analyzing a recursive algorithm means understanding how much time and/or space it consumes as the input size grows. For recursive algorithms, this often involves looking at two main components:

1.  **Work done at each recursive call:** This is the non-recursive work performed within a function call before it makes further recursive calls (or returns).
2.  **Number of recursive calls:** How many times does the function call itself?

## The Recurrence Relation

The relationship between the time complexity of a recursive algorithm and the time complexity of its smaller subproblems is captured by a **recurrence relation**. This is a mathematical equation that describes the running time of a function in terms of the running time of smaller instances of the same problem.

A typical recurrence relation for a divide-and-conquer algorithm looks like this:

$$ T(n) = aT\left(\frac{n}{b}\right) + f(n) $$

Where:
*   $T(n)$: The time complexity for an input of size $n$.
*   $a$: The number of recursive calls made in each step.
*   $n/b$: The size of each subproblem.
*   $f(n)$: The time complexity of the work done outside the recursive calls (e.g., dividing the problem, combining results).

### Base Case

Every recursive algorithm must have a **base case** – a condition under which it stops recursing. The time complexity for the base case is usually a constant, often denoted as $O(1)$.

## Common Techniques for Solving Recurrence Relations

There are several methods to solve recurrence relations and determine the overall time complexity. We'll cover two fundamental ones:

### 1. The Recursion Tree Method

This method visualizes the recursive calls as a tree. Each node represents a function call, and its children represent the subproblems it calls. The cost at each node is the work done at that level ($f(n)$). Summing the costs at all levels gives the total time complexity.

**Example: Binary Search**

Let's analyze binary search. It divides the search space in half at each step.

*   $a = 1$ (one recursive call)
*   $b = 2$ (problem size is halved)
*   $f(n) = O(1)$ (constant work for comparison and index calculation)

The recurrence relation is: $T(n) = T(n/2) + O(1)$.

**Recursion Tree:**

*   **Level 0:** $T(n)$, cost $c$ (for some constant $c$)
*   **Level 1:** $T(n/2)$, cost $c$
*   **Level 2:** $T(n/4)$, cost $c$
*   ...
*   **Level k:** $T(n/2^k)$, cost $c$

The recursion stops when $n/2^k = 1$, so $n = 2^k$, which means $k = \log_2 n$.

The total cost is the sum of costs at all levels:
Total Cost = $c + c + c + \dots + c$ (for $\log_2 n + 1$ levels)
Total Cost = $(\log_2 n + 1) \times c = O(\log n)$.

### 2. The Master Theorem

The Master Theorem provides a direct way to solve recurrence relations of the form $T(n) = aT\left(\frac{n}{b}\right) + f(n)$. It compares $f(n)$ with $n^{\log_b a}$.

**Theorem:**
Given a recurrence relation $T(n) = aT\left(\frac{n}{b}\right) + f(n)$, where $a \geq 1$, $b > 1$, and $f(n)$ is an asymptotically positive function, one of the following must hold:

1.  If $f(n) = O(n^{\log_b a - \epsilon})$ for some constant $\epsilon > 0$, then $T(n) = \Theta(n^{\log_b a})$.
2.  If $f(n) = \Theta(n^{\log_b a})$, then $T(n) = \Theta(n^{\log_b a} \log n)$.
3.  If $f(n) = \Omega(n^{\log_b a + \epsilon})$ for some constant $\epsilon > 0$, and if $a f(n/b) \leq c f(n)$ for some constant $c < 1$ and all sufficiently large $n$, then $T(n) = \Theta(f(n))$.

**Example: Merge Sort**

Merge Sort divides an array into two halves ($b=2$), recursively sorts them ($a=2$), and then merges the sorted halves. The merging step takes linear time.

*   $a = 2$
*   $b = 2$
*   $f(n) = \Theta(n)$

First, calculate $n^{\log_b a}$:
$n^{\log_2 2} = n^1 = n$.

Now, compare $f(n)$ with $n^{\log_b a}$:
$f(n) = \Theta(n)$ and $n^{\log_b a} = \Theta(n)$.
This matches **Case 2** of the Master Theorem.

Therefore, $T(n) = \Theta(n^{\log_b a} \log n) = \Theta(n \log n)$.

## Key Considerations

*   **Correctness:** Ensure your base cases are correct and that recursive steps reduce the problem towards the base case.
*   **Efficiency:** Analyze the recurrence relation carefully. Algorithms that seem simple can have surprisingly high time complexities.
*   **Space Complexity:** Don't forget about space! The recursion depth contributes to stack space. For a recurrence $T(n) = aT(n/b) + f(n)$, the maximum recursion depth is often $O(\log_b n)$, leading to $O(\log n)$ space if $f(n)$ is $O(1)$ or if intermediate results don't grow.

By understanding recurrence relations and employing techniques like the recursion tree or Master Theorem, you can effectively analyze the efficiency of recursive algorithms, a crucial skill for problem-solving and algorithm design.

## Supports

- [[skills/mathematics/discrete-math/proof-techniques/microskills/recursive-algorithm-analysis|Recursive Algorithm Analysis]]

---
type: "medium"
title: "Applying Combinations to Unordered Selections"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/mathematics/discrete-math/combinatorial-analysis/microskills/combination-application|combination-application]]"
related-skills:
  - "[[skills/mathematics/discrete-math/combinatorial-analysis/combinatorial-analysis|combinatorial-analysis]]"
learning-time-in-minutes: 3
---
# Applying Combinations to Unordered Selections

This lesson focuses on using combinations to solve problems where the order of selection doesn't matter. This is a key technique in combinatorial analysis for counting possibilities.

## What are Combinations?

Combinations are used when you need to choose a group of items from a larger set, and the order in which you pick them doesn't change the outcome. For example, if you're picking a committee of 3 people from a group of 10, it doesn't matter if you pick Alice, Bob, then Carol, or Carol, Alice, then Bob – the committee is the same.

The formula for combinations is:
\[
C(n, k) = \binom{n}{k} = \frac{n!}{k!(n-k)!}
\]
Where:
*   \(n\) is the total number of items in the set.
*   \(k\) is the number of items you are choosing.
*   \(!\) denotes the factorial (e.g., \(5! = 5 \times 4 \times 3 \times 2 \times 1\)).

## When to Use Combinations

Use combinations when:
*   You are selecting a subset of items from a larger set.
*   The order of selection **does not matter**.
*   Repetition of items is not allowed (each item can only be chosen once).

## Practical Scenario: Choosing a Pizza Topping Combination

Imagine you're ordering a pizza and can choose **2 different toppings** from a list of **5 available toppings**: Pepperoni, Mushrooms, Olives, Onions, and Peppers. How many different 2-topping combinations can you make?

Here:
*   \(n = 5\) (the total number of toppings available)
*   \(k = 2\) (the number of toppings you will choose)

Using the combination formula:
\[
C(5, 2) = \frac{5!}{2!(5-2)!} = \frac{5!}{2!3!} = \frac{5 \times 4 \times 3 \times 2 \times 1}{(2 \times 1)(3 \times 2 \times 1)}
\]
\[
C(5, 2) = \frac{120}{(2)(6)} = \frac{120}{12} = 10
\]
So, there are 10 different 2-topping combinations you can choose.

Let's list them to confirm:
1.  Pepperoni, Mushrooms
2.  Pepperoni, Olives
3.  Pepperoni, Onions
4.  Pepperoni, Peppers
5.  Mushrooms, Olives
6.  Mushrooms, Onions
7.  Mushrooms, Peppers
8.  Olives, Onions
9.  Olives, Peppers
10. Onions, Peppers

Notice that "Pepperoni, Mushrooms" is the same combination as "Mushrooms, Pepperoni."

## Practice Task

A gardener is selecting **3 different types of flowers** to plant from a selection of **7 available types**: Roses, Tulips, Daisies, Lilies, Sunflowers, Orchids, and Lavender. How many different sets of 3 flower types can the gardener choose?

## Self-Check Questions

1.  If a committee of 4 people needs to be selected from a group of 10, and the order in which they are selected does not matter, how many different committees can be formed?
2.  When does the order of selection matter in counting problems? What combinatorial technique is used in that case?
3.  Calculate the number of ways to choose 5 books from a shelf of 12 books, assuming the order of the books chosen does not matter.

## Supports

- [[skills/mathematics/discrete-math/combinatorial-analysis/microskills/combination-application|Combination Application]]

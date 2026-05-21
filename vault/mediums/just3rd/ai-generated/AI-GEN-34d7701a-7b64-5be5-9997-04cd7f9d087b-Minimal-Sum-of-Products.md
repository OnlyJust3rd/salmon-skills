---
type: "medium"
title: "Deriving Minimal Sum-of-Products using K-maps"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/hardware-embedded/electronics-embedded/combinational-logic-design/microskills/minimal-sum-of-products|minimal-sum-of-products]]"
---
# Deriving Minimal Sum-of-Products using K-maps

This lesson focuses on a crucial step in combinational logic design: simplifying logic expressions into their most efficient form. We'll learn how to derive the minimal sum-of-products (SOP) form of a Boolean function using Karnaugh Maps (K-maps), which directly translates to simpler and fewer logic gates in hardware implementation.

## Short Explanation

A sum-of-products (SOP) expression is a Boolean expression where terms are ANDed together, and these product terms are ORed together. For example, \(F = AB + \bar{A}C\). Minimizing an SOP expression means reducing the number of product terms and the number of literals (variables or their complements) within those terms. This is essential for creating cost-effective and faster digital circuits. Karnaugh maps provide a visual method for grouping adjacent "1"s in a truth table representation, which directly corresponds to simplifying the SOP expression.

## Practical Example: Traffic Light Controller

Imagine you're designing a simple traffic light controller for a single intersection. We have two inputs: \(A\) (North-South car present) and \(B\) (East-West car present). The output \(F\) will turn the light green for North-South traffic. We want the light to be green if North-South cars are present (\(A=1\)), or if there are no East-West cars present (\(B=0\)) and North-South cars are also not present (\(A=0\)).

Let's create a truth table for this scenario:

| A | B | F |
|---|---|---|
| 0 | 0 | 1 |  (No cars, default to NS green)
| 0 | 1 | 0 |  (EW cars, EW gets priority)
| 1 | 0 | 1 |  (NS cars present)
| 1 | 1 | 1 |  (Both present, NS gets priority)

From the truth table, we can derive the initial, unminimized SOP expression by looking at the rows where \(F=1\):

\(F = \bar{A}\bar{B} + AB + A\bar{B}\)

Now, let's use a K-map to minimize this. For two variables (A and B), we use a 2x2 K-map:

```
     B=0  B=1
A=0  1    0
A=1  1    1
```

Now, we group adjacent "1"s in powers of 2 (1, 2, 4, 8...). We can group the two "1"s in the \(A=1\) row. This group represents the term \(A\).

We can also group the "1" at \(\bar{A}\bar{B}\) and the "1" at \(A\bar{B}\). This group represents the term \(\bar{B}\).

The K-map grouping will look something like this:

```
     B=0  B=1
A=0  [1]  0
A=1  [1]  1
```
Here, the brackets indicate grouping. The two 1s in the bottom row form a group (\(A\)). The two 1s in the first column form a group (\(\bar{B}\)).

By grouping, we find the minimal SOP:

\(F = A + \bar{B}\)

This minimal expression is much simpler than the original.

## Practice Task

Consider a 3-variable function \(G\) defined by the following truth table:

| X | Y | Z | G |
|---|---|---|---|
| 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 1 |
| 0 | 1 | 0 | 0 |
| 0 | 1 | 1 | 1 |
| 1 | 0 | 0 | 0 |
| 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 1 |
| 1 | 1 | 1 | 1 |

1.  Write the unminimized SOP expression for \(G\).
2.  Draw a 3-variable K-map for \(G\).
3.  Map the "1"s from the truth table onto the K-map.
4.  Identify the largest possible groups of adjacent "1"s (powers of 2).
5.  Derive the minimal SOP expression for \(G\) from your groupings.

## Self-Check Questions

1.  What is the primary benefit of minimizing a sum-of-products expression?
2.  In a K-map, how do you determine which adjacent cells can be grouped together?
3.  If a group of four "1"s spans two rows and two columns in a 4-variable K-map, how many literals will that group contribute to the minimized SOP term?
4.  What does it mean for an SOP expression to be "minimal"?

## Supports

- [[skills/hardware-embedded/electronics-embedded/combinational-logic-design/microskills/minimal-sum-of-products|Minimal Sum-of-Products]]

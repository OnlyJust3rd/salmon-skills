---
type: medium
title: Fractional Knapsack Greedy Java Implementation
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[fractional-knapsack-greedy-java-implementation|fractional-knapsack-greedy-java-implementation]]"
related-skills:
  - "[[skills/computing/programming/programming-languages/java-programming/java-programming|java-programming]]"
learning-time-in-minutes: 3
---
# Fractional Knapsack Greedy Java Implementation

The Fractional Knapsack problem is a classic optimization problem where you have a knapsack with a limited capacity and a set of items, each with a specific weight and value. The goal is to maximize the total value of items placed in the knapsack. Unlike the 0/1 Knapsack problem, you can take fractions of items. This makes it a perfect candidate for a greedy approach.

In this lesson, we will focus on implementing a greedy solution for the Fractional Knapsack problem in Java.

## Problem Definition

Given:
*   A knapsack with a maximum capacity, $W$.
*   A list of $n$ items, where each item $i$ has a weight $w_i$ and a value $v_i$.

Objective:
*   To select items (or fractions of items) such that their total weight does not exceed $W$, and their total value is maximized.

## The Greedy Strategy

The core idea behind the greedy strategy for the Fractional Knapsack problem is to prioritize items that give the "most bang for your buck." This translates to selecting items with the highest value-to-weight ratio first.

Here's the greedy strategy:

1.  **Calculate Value-to-Weight Ratio:** For each item, compute its ratio of value to weight ($v_i / w_i$).
2.  **Sort Items:** Sort all items in descending order based on their value-to-weight ratio.
3.  **Fill Knapsack:** Iterate through the sorted items. For each item:
    *   If the entire item can fit into the remaining capacity of the knapsack, take the whole item. Update the knapsack's remaining capacity and the total value.
    *   If only a fraction of the item can fit, take that fraction. Calculate the weight and value of this fraction and add it to the knapsack. The knapsack is now full, and you can stop.

## Java Implementation

We'll need a way to represent items and then implement the greedy logic.

### Item Representation

A simple class can represent each item:

```java
class Item {
    int value;
    int weight;
    double ratio; // value / weight

    public Item(int value, int weight) {
        this.value = value;
        this.weight = weight;
        this.ratio = (double) value / weight;
    }
}
```

### Greedy Algorithm Logic

Now, let's implement the `fractionalKnapsack` function.

```java
import java.util.Arrays;
import java.util.Comparator;

public class FractionalKnapsack {

    // Inner class to represent an item
    static class Item {
        int value;
        int weight;
        double ratio;

        public Item(int value, int weight) {
            this.value = value;
            this.weight = weight;
            this.ratio = (double) value / weight;
        }
    }

    /**
     * Solves the Fractional Knapsack problem using a greedy approach.
     *
     * @param capacity The maximum capacity of the knapsack.
     * @param items    An array of Item objects.
     * @return The maximum value that can be obtained.
     */
    public static double fractionalKnapsack(int capacity, Item[] items) {
        // 1. Sort items by value-to-weight ratio in descending order
        Arrays.sort(items, new Comparator<Item>() {
            @Override
            public int compare(Item item1, Item item2) {
                // Sort in descending order of ratio
                return Double.compare(item2.ratio, item1.ratio);
            }
        });

        double totalValue = 0.0;
        int currentCapacity = capacity;

        // 2. Iterate through sorted items and fill the knapsack
        for (Item item : items) {
            if (currentCapacity <= 0) {
                break; // Knapsack is full
            }

            // If the entire item fits
            if (item.weight <= currentCapacity) {
                totalValue += item.value;
                currentCapacity -= item.weight;
            } else {
                // If only a fraction of the item fits
                double fraction = (double) currentCapacity / item.weight;
                totalValue += item.value * fraction;
                currentCapacity = 0; // Knapsack is now full
            }
        }

        return totalValue;
    }

    public static void main(String[] args) {
        // Example Usage
        int capacity = 50;
        Item[] items = {
            new Item(60, 10),
            new Item(100, 20),
            new Item(120, 30)
        };

        double maxValue = fractionalKnapsack(capacity, items);
        System.out.println("Maximum value in Knapsack = " + maxValue); // Expected: 240.0
        
        // Another example
        int capacity2 = 10;
        Item[] items2 = {
            new Item(10, 2),
            new Item(5, 3),
            new Item(15, 5),
            new Item(7, 7),
            new Item(6, 1),
            new Item(18, 4),
            new Item(3, 1)
        };
        
        double maxValue2 = fractionalKnapsack(capacity2, items2);
        System.out.println("Maximum value in Knapsack = " + maxValue2); // Expected: 55.0
    }
}
```

### How it Works

1.  **Item Creation:** We create an array of `Item` objects, each initialized with its value and weight. The `ratio` is calculated automatically.
2.  **Sorting:** `Arrays.sort` is used with a custom `Comparator`. This comparator tells `sort` to arrange the `Item` objects in descending order of their `ratio` (value-to-weight).
3.  **Iteration and Filling:** The code then iterates through the sorted `items`.
    *   `currentCapacity` tracks how much space is left in the knapsack.
    *   For each item, it checks if the item's entire `weight` can be accommodated.
    *   If yes, the item's full `value` is added to `totalValue`, and `currentCapacity` is reduced.
    *   If no, it calculates the `fraction` of the item that can fit (which is `currentCapacity / item.weight`). The value of this fraction (`item.value * fraction`) is added, and `currentCapacity` becomes 0, signifying a full knapsack. The loop then breaks.
4.  **Return Value:** The accumulated `totalValue` is returned.

### Time Complexity

The dominant operation in this algorithm is sorting the items. If there are $n$ items, sorting takes $$ O(n \log n) $$ time. The subsequent iteration to fill the knapsack takes $$ O(n) $$ time. Therefore, the overall time complexity is dominated by the sorting step: $$ O(n \log n) $$.

## Key Takeaways

*   The Fractional Knapsack problem is solvable with a greedy approach.
*   The greedy choice is to always pick the item with the highest value-to-weight ratio.
*   Java's `Arrays.sort` with a custom `Comparator` is useful for ordering custom objects based on specific criteria.
*   Be mindful of floating-point arithmetic when dealing with fractions.

## Supports

- [[fractional-knapsack-greedy-java-implementation|Fractional Knapsack Greedy Java Implementation]]

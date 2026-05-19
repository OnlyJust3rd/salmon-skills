---
type: "medium"
title: "Loop Analysis: Unpacking Algorithmic Speed"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/algorithms/computational-complexity-analysis/microskills/loop-analysis|Loop Analysis]]"
---
# Loop Analysis: Unpacking Algorithmic Speed

When we analyze algorithms, we're often interested in how their performance (time or space requirements) scales as the input size grows. A fundamental part of this is understanding the complexity of loops. This lesson focuses on how to determine the asymptotic complexity of algorithms that contain single and nested loops.

## Why Loops Matter

Loops are the workhorses of most algorithms. They repeat a block of code multiple times. The number of times a loop runs directly impacts the overall execution time. By analyzing loops, we can make educated guesses about how an algorithm will behave with larger datasets.

## Analyzing Single Loops

A single loop that iterates a fixed number of times or a number of times proportional to the input size is straightforward to analyze.

Consider a loop that iterates `n` times:

```python
for i in range(n):
  # Some constant time operation
  print(i)
```

In this case, the loop body executes exactly `n` times. If the operation inside the loop takes constant time (e.g., a simple print statement, an arithmetic operation), the total time complexity of this loop is directly proportional to `n`. We express this using Big O notation as \(O(n)\).

If the loop iterates a fixed number of times, say 100 times, regardless of the input size `n`, its complexity is considered constant, \(O(1)\).

```python
for i in range(100):
  # Constant time operation
  pass
```

## Analyzing Nested Loops

Nested loops involve one loop inside another. This is where complexity can grow more rapidly.

### Two Nested Loops

Consider a common scenario with two nested loops, where both iterate up to `n`:

```python
for i in range(n):
  for j in range(n):
    # Some constant time operation
    print(i, j)
```

The outer loop runs `n` times. For *each* iteration of the outer loop, the inner loop also runs `n` times. Therefore, the operation inside the inner loop executes \(n \times n = n^2\) times. The complexity of this structure is \(O(n^2)\).

### Different Iteration Counts

What if the inner loop's iterations depend on the outer loop's variable?

```python
for i in range(n):
  for j in range(i): # Inner loop runs 'i' times
    # Some constant time operation
    print(i, j)
```

Here's how the inner loop runs for each outer loop iteration:
*   When `i` is 0, the inner loop runs 0 times.
*   When `i` is 1, the inner loop runs 1 time.
*   When `i` is 2, the inner loop runs 2 times.
*   ...
*   When `i` is `n-1`, the inner loop runs `n-1` times.

The total number of operations is the sum: \(0 + 1 + 2 + \dots + (n-1)\). This is an arithmetic series, and its sum is \(\frac{(n-1)n}{2}\). When we analyze complexity, we focus on the dominant term and ignore constants and lower-order terms. So, \(\frac{n^2 - n}{2}\) simplifies to \(O(n^2)\).

### Three or More Nested Loops

The principle extends. If you have three nested loops, each running up to `n` times, the complexity becomes \(O(n^3)\). For `k` nested loops, each running `n` times, the complexity is \(O(n^k)\).

## Practice Task

Analyze the time complexity of the following pseudocode snippet. Assume the operation `process(item)` takes constant time.

```pseudocode
function analyze_list(items):
  count = 0
  for element1 in items:
    for element2 in items:
      if element1 is not element2:
        process(element1, element2)
        count = count + 1
  return count

# Assume 'items' is a list of size N
```

What is the asymptotic complexity of the `analyze_list` function?

## Self-Check Questions

1.  What is the complexity of a loop that iterates from 1 to 1000?
2.  If an algorithm has a loop that runs `n/2` times, what is its complexity in Big O notation?
3.  Consider a nested loop structure where the outer loop runs `n` times and the inner loop runs `m` times for each outer iteration. What is the complexity?
4.  Why do we focus on the dominant term and ignore constants in Big O notation?

## Supports

- [[skills/programming/algorithms/computational-complexity-analysis/microskills/loop-analysis|Loop Analysis]]

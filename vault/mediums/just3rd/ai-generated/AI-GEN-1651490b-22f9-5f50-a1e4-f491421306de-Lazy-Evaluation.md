---
type: "medium"
title: "Lazy Evaluation in Apache Spark"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/data/data-platforms/apache-spark/microskills/lazy-evaluation|lazy-evaluation]]"
---
# Lazy Evaluation in Apache Spark

In Apache Spark, **lazy evaluation** means that Spark doesn't immediately execute operations when you define them. Instead, it builds up a directed acyclic graph (DAG) of transformations. The actual computation only happens when an *action* is called. This is a core concept for understanding how Spark efficiently processes large datasets.

### Why Lazy Evaluation?

Spark uses lazy evaluation to optimize your computations. By deferring execution, Spark can:

*   **Perform optimizations:** It can combine multiple transformations, reorder operations, and choose the most efficient execution plan before running anything.
*   **Avoid unnecessary work:** If a dataset is transformed multiple times but only one final result is needed, Spark can avoid computing intermediate results that are never used.
*   **Handle failures gracefully:** Spark can recompute lost partitions by replaying the DAG from a lineage of prior transformations.

### Practical Example: Word Count

Let's imagine you want to count the words in a text file using Spark.

1.  **Load the data:**
    ```python
    lines = spark.read.text("my_text_file.txt")
    ```
    *At this point, nothing has been read from the file yet.*

2.  **Transformations (these are lazy):**
    ```python
    words = lines.flatMap(lambda line: line.value.split(" "))
    wordCounts = words.groupBy("value").count()
    ```
    *Spark has just recorded that you want to split lines into words and then group them to count. No actual splitting or counting has occurred.*

3.  **Action (this triggers execution):**
    ```python
    wordCounts.show()
    ```
    *Only when `show()` is called does Spark build the DAG, read `my_text_file.txt`, split the lines into words, group them, count them, and then display the results.*

If you were to add another transformation *before* `show()`, like filtering out short words, Spark would incorporate that into its optimized plan:

```python
shortWordsFiltered = wordCounts.filter(wordCounts.count > 2)
shortWordsFiltered.show()
```
*Again, `show()` triggers the entire pipeline, now including the filter step.*

### Practice Task

Imagine you have a dataset of customer orders. You want to find the total revenue from orders placed in the last month and then display the top 10 highest-spending customers.

Write down the sequence of Spark transformations and actions you would use, keeping in mind that transformations are lazy.

### Self-Check Questions

1.  What is the primary benefit of lazy evaluation in Spark?
2.  When does Spark actually execute the transformations you define?
3.  If you define 10 transformations but only call one action, how many transformations will Spark compute?

## Supports

- [[skills/data/data-platforms/apache-spark/microskills/lazy-evaluation|Lazy Evaluation]]

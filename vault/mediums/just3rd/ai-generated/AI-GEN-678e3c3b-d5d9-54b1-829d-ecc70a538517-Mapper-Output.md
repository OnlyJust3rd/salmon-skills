---
type: "medium"
title: "Mapper Output in Hadoop Batch Processing"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/data/data-platforms/apache-hadoop/microskills/mapper-output|mapper-output]]"
---
# Mapper Output in Hadoop Batch Processing

In Hadoop MapReduce, the "Mapper" is the first phase of processing. Its primary job is to read input data, transform it, and produce intermediate key-value pairs. These pairs are the **Mapper Output**, and they are crucial for the subsequent Reduce phase. Understanding how to generate effective mapper output is fundamental to applying Hadoop batch processing concepts.

## What is Mapper Output?

The mapper function takes input data, typically in lines or records, and emits a series of key-value pairs. These pairs are not the final result of the job; rather, they serve as the input for the Reducers. The key and value can be of any data type that can be serialized.

*   **Key:** A data element that groups similar values.
*   **Value:** The data associated with a specific key.

The output of the mapper is sorted and shuffled by the framework based on the keys before being sent to the reducers.

## Practical Example: Word Count

Let's consider a classic word count example. We have a text file as input. The mapper's goal is to output each word as a key and '1' as its value.

**Input Data:**
```
The quick brown fox
jumps over the lazy dog
```

**Mapper Logic (Pseudocode):**

```
function map(key, value):
  words = split(value, " ")
  for each word in words:
    emit(word, 1)
```

**Mapper Output:**
The framework would process the input and produce the following intermediate key-value pairs:

| Key   | Value |
| :---- | :---- |
| The   | 1     |
| quick | 1     |
| brown | 1     |
| fox   | 1     |
| jumps | 1     |
| over  | 1     |
| the   | 1     |
| lazy  | 1     |
| dog   | 1     |

Notice that "The" and "the" are treated as distinct keys. Case sensitivity and punctuation are important considerations when designing your mapper.

## Practice Task

Imagine you have a dataset of user clickstream data, where each line contains a `userId` and a `pageVisited`. Your goal is to design a mapper that outputs the `userId` as the key and `pageVisited` as the value for each click.

**Input Data (example line):**
`user123,homepage`
`user456,product/item_abc`
`user123,checkout`

**Your Task:**
Write pseudocode for a mapper that processes this data and produces the required key-value pairs.

## Self-Check Questions

1.  What is the primary purpose of the mapper's output in Hadoop?
2.  In the word count example, why is `emit(word, 1)` suitable for the mapper's output?
3.  What are the two components of each emitted record from a mapper?

## Supports

- [[skills/data/data-platforms/apache-hadoop/microskills/mapper-output|Mapper Output]]

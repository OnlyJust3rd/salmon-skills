---
type: "medium"
title: "Understanding Kafka Offsets"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/data-ai/data-engineering-platforms/apache-kafka/microskills/offset|offset]]"
learning-time-in-minutes: 3
---
# Understanding Kafka Offsets

In Apache Kafka, events are stored in ordered logs. To keep track of where you are in reading these logs, Kafka uses a concept called **offset**. Think of an offset as a unique, sequential number assigned to each event (or message) within a partition. This number tells you the exact position of an event in the log.

## What is an Offset?

*   **Position Tracker:** An offset is simply an integer that represents the unique position of an event within a Kafka partition.
*   **Sequential:** Offsets are always sequential and start from 0 for each partition.
*   **Immutable:** Once an event is written, its offset is fixed and never changes.
*   **Consumer Progress:** Consumers use offsets to know which events they have already processed and which ones are yet to be read.

When a consumer reads events from a Kafka topic, it also keeps track of the last offset it successfully processed. This allows the consumer to resume reading from where it left off if it restarts or if there's a network interruption, without re-reading already processed events.

## Practical Scenario: Order Processing System

Imagine an e-commerce system where orders are published to a Kafka topic named `orders`. Each `orders` partition contains a sequence of order events.

Let's say a consumer application is responsible for updating inventory based on these orders.

*   **Partition 1:**
    *   Event 1 (Offset 0): New Order - Item A
    *   Event 2 (Offset 1): New Order - Item B
    *   Event 3 (Offset 2): New Order - Item C

If the inventory consumer processes Event 1 (Offset 0) and Event 2 (Offset 1), its current offset for Partition 1 will be **1**. When it restarts, it will look for events starting from offset **2**, ensuring it doesn't re-process the first two orders and correctly processes the next available order.

## Practice Task

Consider the following scenario:

A Kafka topic called `sensor_readings` has two partitions.

**Partition 0:**
*   Event X (Offset 0): Temperature 25°C
*   Event Y (Offset 1): Humidity 60%
*   Event Z (Offset 2): Temperature 26°C

**Partition 1:**
*   Event A (Offset 0): Pressure 1012 hPa
*   Event B (Offset 1): Pressure 1013 hPa

A consumer application is reading from both partitions. After processing Event X (Partition 0) and Event A (Partition 1), what are the current offsets for this consumer on each partition?

## Self-Check Questions

1.  What is the primary role of an offset in Kafka?
2.  If a Kafka consumer reads 5 events from a partition starting at offset 0, what will be the consumer's next expected offset?
3.  Why are offsets crucial for reliable data processing in Kafka?

## Supports

- [[skills/computing/data-ai/data-engineering-platforms/apache-kafka/microskills/offset|Offset]]

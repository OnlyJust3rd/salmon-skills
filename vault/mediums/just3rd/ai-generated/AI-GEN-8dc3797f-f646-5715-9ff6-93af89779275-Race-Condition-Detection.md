---
type: "medium"
title: "Identifying Race Conditions Using Critical Sections"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/systems/operating-systems/concurrency-and-synchronization/microskills/race-condition-detection|Race Condition Detection]]"
---
# Identifying Race Conditions Using Critical Sections

In concurrent programming, when multiple threads or processes access shared data, and at least one of them modifies it, the order of execution can lead to unpredictable and incorrect results. This is known as a **race condition**. A critical section is a segment of code that accesses shared resources and must not be executed by more than one thread at a time. By identifying these critical sections, we can pinpoint potential race conditions.

## What is a Race Condition?

Imagine two people trying to update the same bank account balance simultaneously. If they both read the balance, add their transaction amount, and then write back the new balance without any coordination, one of the updates might be lost. This is a race condition.

## How Critical Sections Help Detect Race Conditions

A critical section is a piece of code that manipulates shared data. If multiple threads can enter and execute this section concurrently, and their interleaving execution can lead to incorrect outcomes, then a race condition exists. The key is to find the shared resources and the code that accesses them.

Consider this simple example:

```java
class Counter {
    private int count = 0;

    public void increment() {
        count = count + 1; // Critical Section
    }

    public int getCount() {
        return count;
    }
}

// In a multithreaded environment:
Counter myCounter = new Counter();

// Thread 1
new Thread(() -> {
    for (int i = 0; i < 100000; i++) {
        myCounter.increment();
    }
}).start();

// Thread 2
new Thread(() -> {
    for (int i = 0; i < 100000; i++) {
        myCounter.increment();
    }
}).start();

// After some time, getCount() might not be 200000
```

In this `increment()` method, the line `count = count + 1;` is a critical section. It reads `count`, adds 1, and writes back to `count`. If Thread 1 reads `count` (say, 5), then Thread 2 reads `count` (still 5), Thread 1 increments its local value to 6 and writes it back, and then Thread 2 increments its local value to 6 and writes it back, the `count` becomes 6 instead of the expected 7.

## Practice Task

Analyze the following pseudocode snippets. Identify the critical sections and explain why they might lead to race conditions.

**Snippet 1:**

```pseudocode
shared_variable balance = 1000

function deposit(amount):
  current_balance = read balance
  new_balance = current_balance + amount
  write balance = new_balance

function withdraw(amount):
  current_balance = read balance
  if current_balance >= amount:
    new_balance = current_balance - amount
    write balance = new_balance
  else:
    print "Insufficient funds"
```

**Snippet 2:**

```pseudocode
shared_list data_list = []
shared_variable next_id = 0

function add_item(item_data):
  item_id = next_id
  increment next_id by 1
  add item_data with item_id to data_list
```

## Self-Check Questions

1.  In Snippet 1, if `deposit(100)` and `withdraw(50)` are called concurrently, and the initial `balance` is 50, what are two possible incorrect final balances? Explain why each occurs.
2.  In Snippet 2, what are the critical sections? If `add_item` is called by two threads simultaneously, what could go wrong with the `item_id` assignment?
3.  If a piece of code only reads a shared variable but never writes to it, can it be part of a critical section that leads to a race condition? Explain.

## Supports

- [[skills/systems/operating-systems/concurrency-and-synchronization/microskills/race-condition-detection|Race Condition Detection]]

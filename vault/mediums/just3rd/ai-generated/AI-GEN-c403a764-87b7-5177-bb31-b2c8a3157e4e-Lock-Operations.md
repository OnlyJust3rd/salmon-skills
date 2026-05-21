---
type: "medium"
title: "Understanding Lock Operations"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/systems/operating-systems/concurrency-and-synchronization/microskills/lock-operations|lock-operations]]"
---
# Understanding Lock Operations

Locks are fundamental tools for managing concurrent access to shared resources. When multiple threads or processes try to access the same data simultaneously, it can lead to unpredictable and incorrect results, known as race conditions. Locks help prevent these issues by ensuring that only one thread can access a critical section of code or a shared resource at any given time.

## What is a Lock?

Think of a lock like a key to a shared room. Only the person holding the key can enter the room. In programming, a lock is a synchronization primitive that allows a thread to acquire exclusive access to a resource. If a thread tries to acquire a lock that is already held by another thread, it will be blocked until the lock is released.

### Key Operations:

1.  **Acquire (or Lock):** A thread attempts to obtain the lock. If the lock is available, the thread acquires it and can proceed. If the lock is already held, the thread waits.
2.  **Release (or Unlock):** Once a thread has finished using the protected resource, it releases the lock, making it available for other waiting threads.

## Practical Scenario: A Shared Bank Account

Imagine a simple banking application where multiple threads are trying to deposit money into the same account.

Let's say an account has a balance of $100.

*   **Thread A** wants to deposit $50.
*   **Thread B** wants to deposit $75.

Without a lock, here's a possible scenario:

1.  Thread A reads the balance: $100.
2.  Thread B reads the balance: $100.
3.  Thread A calculates the new balance: $100 + $50 = $150.
4.  Thread B calculates the new balance: $100 + $75 = $175.
5.  Thread A writes the new balance: $150.
6.  Thread B writes the new balance: $175.

The final balance is $175, but it should be $100 + $50 + $75 = $225. This is a race condition!

Now, let's introduce a lock for the `account_balance` variable.

```
// Pseudocode demonstrating lock usage
lock account_lock;
int account_balance = 100;

function deposit(amount) {
  account_lock.acquire(); // Acquire the lock
  try {
    int current_balance = account_balance;
    current_balance += amount;
    account_balance = current_balance;
    print("Deposited " + amount + ". New balance: " + account_balance);
  } finally {
    account_lock.release(); // Release the lock
  }
}

// Thread A calls deposit(50)
// Thread B calls deposit(75)
```

With the lock:

1.  **Thread A** calls `deposit(50)`. It successfully acquires `account_lock`.
2.  Thread A reads balance: $100.
3.  Thread A calculates new balance: $100 + $50 = $150.
4.  Thread A writes new balance: $150.
5.  Thread A releases `account_lock`.
6.  **Thread B** calls `deposit(75)`. It was waiting for the lock and now acquires it.
7.  Thread B reads balance: $150.
8.  Thread B calculates new balance: $150 + $75 = $225.
9.  Thread B writes new balance: $225.
10. Thread B releases `account_lock`.

The final balance is $225, which is correct. The lock ensured that the deposit operations happened sequentially, preventing the race condition.

## Practice Task

Consider a scenario where multiple threads are incrementing a shared counter. Without a lock, the final count might be incorrect.

Write pseudocode to protect a shared `counter` variable using a lock. Ensure that only one thread can increment the counter at a time.

## Self-Check Questions

1.  What problem does a lock help to solve in concurrent programming?
2.  What are the two primary operations of a lock?
3.  In the bank account example, why was the final balance incorrect without a lock?
4.  What happens if a thread tries to acquire a lock that is already held by another thread?

## Supports

- [[skills/systems/operating-systems/concurrency-and-synchronization/microskills/lock-operations|Lock Operations]]

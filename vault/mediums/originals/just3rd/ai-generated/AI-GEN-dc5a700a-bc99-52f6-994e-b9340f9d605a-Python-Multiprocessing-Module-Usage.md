---
type: "medium"
title: "Understanding Python's `multiprocessing` Module"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/systems-infrastructure/compute-runtime/high-performance-computing/parallel-programming/microskills/python-multiprocessing-module-usage|python-multiprocessing-module-usage]]"
related-skills:
  - "[[skills/computing/systems-infrastructure/compute-runtime/high-performance-computing/parallel-programming/parallel-programming|parallel-programming]]"
learning-time-in-minutes: 3
---
# Understanding Python's `multiprocessing` Module

This lesson will introduce you to the fundamental concepts of using Python's `multiprocessing` module to build parallel applications. We will focus on understanding how to create and manage separate processes, which is a key abstraction for achieving true parallelism.

## What is Process-Based Parallelism?

In contrast to thread-based parallelism (where multiple threads run within the same process and share memory), process-based parallelism involves creating entirely new processes. Each process has its own independent memory space and Python interpreter. This isolation offers several advantages, especially for CPU-bound tasks, as it bypasses Python's Global Interpreter Lock (GIL), allowing multiple CPU cores to execute code simultaneously.

## The `multiprocessing` Module: Core Concepts

The `multiprocessing` module provides an API that mirrors the `threading` module, making it easier to transition. The primary way to achieve parallelism is by creating `Process` objects.

### Creating and Starting Processes

The `multiprocessing.Process` class is used to represent a process. You can create a `Process` object by passing a target function to its constructor, along with any arguments it requires.

```python
import multiprocessing
import time

def greet(name):
    """A simple function that prints a greeting."""
    print(f"Hello, {name}!")
    time.sleep(1)
    print(f"Goodbye, {name}!")

if __name__ == "__main__":
    # Create a Process object targeting the greet function
    p = multiprocessing.Process(target=greet, args=("Alice",))

    # Start the process
    p.start()

    # The main process continues its execution
    print("Main process is doing other things...")
    p.join() # Wait for the process to finish
    print("Process finished.")
```

In this example:
- `multiprocessing.Process(target=greet, args=("Alice",))` creates a new process that will execute the `greet` function with the argument `"Alice"`.
- `p.start()` initiates the execution of the process. This is an asynchronous operation; your main program doesn't wait for `start()` to return.
- `p.join()` is crucial. It tells the main process to wait until the process `p` has completed its execution before proceeding. Without `join()`, the main program might exit before the spawned process has a chance to finish.
- The `if __name__ == "__main__":` block is essential for `multiprocessing` on many operating systems (especially Windows). It ensures that the code inside this block only runs when the script is executed directly, preventing infinite process spawning when the child process imports the script.

### Running Multiple Processes

You can create and manage multiple processes concurrently.

```python
import multiprocessing
import time

def task(name, duration):
    """A task that sleeps for a given duration."""
    print(f"Task {name} starting.")
    time.sleep(duration)
    print(f"Task {name} finished after {duration} seconds.")

if __name__ == "__main__":
    process1 = multiprocessing.Process(target=task, args=("A", 2))
    process2 = multiprocessing.Process(target=task, args=("B", 1))
    process3 = multiprocessing.Process(target=task, args=("C", 3))

    process1.start()
    process2.start()
    process3.start()

    print("All processes started. Waiting for them to complete...")

    process1.join()
    process2.join()
    process3.join()

    print("All processes have completed.")
```

This code demonstrates launching three independent processes, each executing the `task` function with different arguments. The `join()` calls ensure that the main program waits for all of them to finish. You'll observe that the tasks run in parallel, and their completion order might not be sequential due to varying durations and OS scheduling.

## Key Takeaways

- **Process Isolation:** Each `multiprocessing` process has its own memory space, which prevents GIL limitations for CPU-bound tasks.
- **`multiprocessing.Process`:** The fundamental class for creating and managing new processes.
- **`start()`:** Initiates the execution of a process.
- **`join()`:** Makes the parent process wait for a child process to complete.
- **`if __name__ == "__main__":`:** A critical safeguard for cross-platform compatibility and preventing unintended process duplication.

By understanding these core concepts, you've taken a significant step towards implementing parallel applications using Python's `multiprocessing` module.

## Supports

- [[skills/computing/systems-infrastructure/compute-runtime/high-performance-computing/parallel-programming/microskills/python-multiprocessing-module-usage|Python Multiprocessing Module Usage]]

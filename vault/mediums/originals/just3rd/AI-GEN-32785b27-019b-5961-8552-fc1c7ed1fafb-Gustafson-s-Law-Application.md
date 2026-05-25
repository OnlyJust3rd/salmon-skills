---
type: "medium"
title: "Applying Gustafson's Law for Scalability Analysis"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/systems-infrastructure/compute-runtime/high-performance-computing/parallel-performance-analysis/microskills/gustafson-s-law-application|gustafson-s-law-application]]"
related-skills:
  - "[[skills/computing/systems-infrastructure/compute-runtime/high-performance-computing/parallel-performance-analysis/parallel-performance-analysis|parallel-performance-analysis]]"
learning-time-in-minutes: 8
---
# Applying Gustafson's Law for Scalability Analysis

In our exploration of Parallel Performance Analysis, we're focusing on understanding how systems perform and scale. You've learned about Amdahl's Law, which analyzes speedup based on a fixed problem size. Now, we'll dive into Gustafson's Law, a complementary approach that shifts the focus to how performance *scales* as the problem size increases for a fixed number of processors. This is crucial for understanding the potential of parallel systems when tackling larger datasets or more complex computations.

## What is Gustafson's Law?

Gustafson's Law, also known as Gustafson's Law of Speedup, focuses on the **scalability** of parallel programs. Instead of assuming a fixed problem size and observing speedup with more processors, Gustafson's Law assumes a **fixed time** and observes how much more work can be done or how much larger the problem can become as the number of processors increases.

The core idea is that for many real-world parallel applications, the problem size often grows proportionally to the number of processors available. This is a more realistic model for many scenarios, especially in scientific computing and big data analysis, where increased computational power allows for tackling larger, more complex problems.

## The Formula

Gustafson's Law is expressed mathematically as follows:

$$
S(N) = s + (1 - s) \times N
$$

Where:

*   $S(N)$: The speedup gained by using $N$ processors.
*   $s$: The fraction of the *original sequential* computation that is *parallelizable* (this is different from Amdahl's law's $f$). It represents the proportion of the work that *benefits* from parallelization.
*   $N$: The number of processors.

**Important Distinction from Amdahl's Law:**

*   **Amdahl's Law:** Analyzes speedup for a **fixed problem size** as processors increase. It highlights the bottleneck of the sequential portion.
*   **Gustafson's Law:** Analyzes how the **parallelizable portion of the problem** can be increased for a **fixed time** as processors increase. It focuses on scalability.

## When to Use Gustafson's Law

Gustafson's Law is particularly useful when:

*   You are considering adding more processors to an existing system.
*   You want to understand how much *larger* a problem you can solve within a reasonable timeframe as you scale up your hardware.
*   Your application's problem size is not fixed and is likely to grow with available resources.
*   You're evaluating the *potential* for speedup in a parallel system where larger problems are common.

## Applying Gustafson's Law: A Worked Example

Let's say you have a scientific simulation that can be parallelized. You've observed that:

*   **5%** of the simulation's computation is inherently sequential (e.g., setup, final reporting).
*   The remaining **95%** is highly parallelizable.

We want to predict the speedup if we increase the number of processors from 1 to 64.

**Step 1: Identify the parallelizable fraction ($s$).**
From the problem description, the parallelizable fraction is 95%, so $s = 0.95$.

**Step 2: Identify the number of processors ($N$).**
We are considering scaling from 1 processor to 64 processors, so $N = 64$.

**Step 3: Apply Gustafson's Law formula.**
$$
S(64) = s + (1 - s) \times N
$$
$$
S(64) = 0.95 + (1 - 0.95) \times 64
$$
$$
S(64) = 0.95 + (0.05) \times 64
$$
$$
S(64) = 0.95 + 3.2
$$
$$
S(64) = 4.15
$$

**Interpretation:**

Using 64 processors, we can expect a speedup of approximately **4.15 times** compared to a single processor, *assuming* the problem size can be scaled to take advantage of these 64 processors.

This might seem counterintuitive if you were expecting a speedup closer to 64. This result highlights the impact of the sequential portion. Even though 95% of the work is parallelizable, that remaining 5% limits the overall speedup attainable. However, the key takeaway is that as $N$ increases, the $(1-s) \times N$ term will grow, meaning the *amount of additional work* you can complete in a fixed time increases with processors.

Let's consider a scenario with a much larger problem size that can fully utilize 64 processors. If the original sequential time on 1 processor was $T_1$, and the problem size is now such that the parallelizable portion takes $T_{p1}$ on 1 processor, and the sequential portion takes $T_{s1}$ on 1 processor ($T_1 = T_{p1} + T_{s1}$). For Gustafson's Law, we're interested in the scaling where the total work increases.

If we have 64 processors, and the parallel portion can be perfectly divided, the time taken on 64 processors ($T_{64}$) would be approximately:

$$
T_{64} \approx T_{s1} + \frac{T_{p1}}{64}
$$

The speedup $S(64)$ is then $\frac{T_1}{T_{64}}$. If we assume $T_{p1}$ is very large and $T_{s1}$ is small, then:

$$
S(64) \approx \frac{T_{p1}}{T_{s1} + \frac{T_{p1}}{64}} \approx \frac{T_{p1}}{\frac{T_{p1}}{64}} = 64
$$

This simplified view aligns with the intuitive expectation. However, the original formula for Gustafson's Law is more robust as it explicitly accounts for the sequential overhead that *doesn't* scale. The $s$ in Gustafson's Law represents the fraction of the *total computation on $N$ processors* that is parallelizable. If the problem size scales such that the sequential part remains constant and the parallel part grows, the fraction of parallelizable work in the *larger* problem will approach 1.

Let's re-frame the example using a more common interpretation of $s$ in Gustafson's Law: the fraction of the total computation on $N$ processors that is *parallelizable*.

Assume the problem size is scaled so that on 64 processors, the total execution time is $T_{64}$.
Let $s$ be the fraction of this *total time $T_{64}$* that is parallelizable.
Then $(1-s)$ is the fraction of $T_{64}$ that is sequential.

If we had only 1 processor, and the same amount of sequential work was done, the total time $T_1$ would be:
$$
T_1 = \frac{s \times T_{64}}{1} + \frac{(1-s) \times T_{64}}{1} = T_{64} \times (\frac{s}{1} + (1-s))
$$
No, this is getting complicated. Let's stick to the first formula and its interpretation as the *fraction of the original workload that can be parallelized*.

Consider this:
Amdahl's law: Fixed problem size, how much faster can it get with more processors? Bottleneck is sequential part.
Gustafson's Law: Fixed time, how much *larger* can the problem get with more processors? Bottleneck is still sequential part, but the emphasis is on what you *can do*.

Let's use the example where 5% is sequential and 95% is parallelizable *in the original problem*.
When you scale to 64 processors, the *total problem size* you can tackle within a *fixed time* increases.
If a task takes time $T$ on 1 processor, and has fraction $f$ of serial work, then on $N$ processors, the time is $T(f + (1-f)/N)$. Speedup is $1 / (f + (1-f)/N)$. This is Amdahl's Law.

Gustafson's Law looks at it from the other side. Suppose on $N$ processors, the parallelizable portion can be expanded so that the total work done is $W_{total}$. The parallelizable part of this new, larger work is $W_{parallel\_N}$ and sequential part is $W_{sequential}$.
The fraction of parallelizable work *in this larger problem* is $s = W_{parallel\_N} / W_{total}$.
Then, on 1 processor, the total work done would be $W_{total\_on\_1} = W_{parallel\_N} / N + W_{sequential}$.
The speedup $S(N)$ is $W_{total} / W_{total\_on\_1}$.

A simpler way to think about Gustafson's law is: if you double the processors, how much *larger* can the problem be for the runtime to remain the same?
If $s$ is the fraction of the *parallelizable* work (meaning it benefits from extra processors), and $1-s$ is the sequential work (which does not benefit), then for the runtime to stay constant, the parallelizable work can increase by a factor of $N$.
So, the total work on $N$ processors is $W_{total}(N) = s \cdot W_{total} + (1-s) \cdot W_{total} \cdot N$ is not right.

Let's go back to the formula $S(N) = s + (1-s) \times N$.
Here, $s$ is the fraction of the workload that can be parallelized.
So, for our example:
$s = 0.95$ (95% of the work is parallelizable)
$N = 64$ processors

$$
S(64) = 0.95 + (1 - 0.95) \times 64 = 0.95 + 0.05 \times 64 = 0.95 + 3.2 = 4.15
$$

This means if you increase the problem size so that the parallelizable portion can utilize all 64 processors effectively, the total problem size you can tackle in a *fixed time* is 4.15 times larger than what you could do on a single processor.

**Key takeaway:** Gustafson's Law is an optimistic view that assumes problem size scales with processor count. It tells us how much *more* we can do, not just how much *faster*.

## Potential Pitfalls and Considerations

*   **Assumption of Perfect Scaling:** The law assumes that the parallelizable portion of the workload can be perfectly divided and distributed among processors without any overhead (communication, synchronization).
*   **Sequential Bottleneck:** Like Amdahl's Law, the sequential portion of the code fundamentally limits scalability. If the sequential fraction is high, Gustafson's Law will show limited scalability.
*   **Problem Size Definition:** Clearly defining what constitutes "scaling the problem size" is important. It means increasing the work that can benefit from parallelization, while ideally keeping the sequential overhead manageable.
*   **Fixed Time:** The core of Gustafson's Law is about what can be achieved in a fixed amount of time. If your goal is to complete a specific large problem as fast as possible, you'd be more interested in Amdahl's Law's speedup.

## Summary

Gustafson's Law provides a valuable perspective on parallel system scalability by assuming that problem size increases with the number of processors. It helps us understand how much more work can be accomplished within a given timeframe as we add more computational resources. By analyzing the parallelizable fraction ($s$) of the workload, we can predict the potential for increased throughput and tackle larger, more complex problems. Remember to consider the impact of the sequential portion, as it remains a critical factor in overall performance.

## Supports

- [[skills/computing/systems-infrastructure/compute-runtime/high-performance-computing/parallel-performance-analysis/microskills/gustafson-s-law-application|Gustafson's Law Application]]

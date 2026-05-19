---
type: "medium"
title: "Time Shifting Signals: Recognizing the Shift"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/mathematics/signal-operations/microskills/time-shifting-identification|Time Shifting Identification]]"
---
# Time Shifting Signals: Recognizing the Shift

This lesson focuses on **recognizing time shifting operations** applied to signals. Understanding how signals move along the time axis is a fundamental concept in signal operations.

## What is Time Shifting?

Time shifting is a basic operation where a signal is moved forward or backward along the time axis. Imagine a signal as a recording of something happening over time – like a sound wave or the temperature. Time shifting means you're either playing that recording a bit later than it originally happened or a bit earlier.

Let's denote a signal as \(x(t)\), where \(t\) represents time.

*   **Time Delay (Shifting Forward):** When a signal is delayed, it means the event it represents happens later. Mathematically, this is represented as \(x(t - T)\), where \(T\) is a positive constant. The entire signal is shifted to the right on the time axis by \(T\) units.

*   **Time Advance (Shifting Backward):** When a signal is advanced, it means the event it represents happens earlier. Mathematically, this is represented as \(x(t + T)\), where \(T\) is a positive constant. The entire signal is shifted to the left on the time axis by \(T\) units.

**Key Idea:** The shape of the signal remains exactly the same; only its position on the time axis changes.

## Identifying Time Shifting

To identify time shifting, you need to compare a modified signal with its original, unshifted version. Look for how the characteristic points of the signal (like peaks, valleys, start, or end points) have moved.

Consider a simple rectangular pulse signal, often called a "boxcar" function.

**Original Signal: \(x(t)\)**

Let's define \(x(t)\) as a pulse that is 1 between \(t=0\) and \(t=1\), and 0 everywhere else.

$$
x(t) =
\begin{cases}
1 & 0 \le t < 1 \\
0 & \text{otherwise}
\end{cases}
$$

Visually, this is a box starting at \(t=0\) and ending at \(t=1\).

**Example 1: Time Delay**

Consider the signal \(y(t) = x(t - 2)\).

According to our rule for time delay, \(T=2\). This means the original signal \(x(t)\) is shifted forward (to the right) by 2 units.

The pulse that was originally between \(t=0\) and \(t=1\) will now be between \(t=0+2\) and \(t=1+2\), which is \(t=2\) and \(t=3\).

$$
y(t) = x(t - 2) =
\begin{cases}
1 & 2 \le t < 3 \\
0 & \text{otherwise}
\end{cases}
$$

**How to identify:** If you see the pulse starting at \(t=2\) and ending at \(t=3\), and you know the original pulse started at \(t=0\), you can identify that a time delay of 2 units has occurred.

**Example 2: Time Advance**

Consider the signal \(z(t) = x(t + 1)\).

According to our rule for time advance, \(T=1\). This means the original signal \(x(t)\) is shifted backward (to the left) by 1 unit.

The pulse that was originally between \(t=0\) and \(t=1\) will now be between \(t=0-1\) and \(t=1-1\), which is \(t=-1\) and \(t=0\).

$$
z(t) = x(t + 1) =
\begin{cases}
1 & -1 \le t < 0 \\
0 & \text{otherwise}
\end{cases}
$$

**How to identify:** If you see the pulse starting at \(t=-1\) and ending at \(t=0\), and you know the original pulse started at \(t=0\), you can identify that a time advance of 1 unit has occurred.

## Visualizing the Shift

Imagine drawing the original signal \(x(t)\) on a piece of paper. To get \(x(t-T)\), you slide the entire drawing \(T\) units to the right. To get \(x(t+T)\), you slide the entire drawing \(T\) units to the left.

---

**Signal \(x(t)\)**
```
  ^
1 |-----\
  |     |
0 +-----+-----> t
  0     1
```

**Signal \(x(t-2)\)** (Shifted right by 2)
```
  ^
1 |       |-----\
  |       |     |
0 +-------+-----+-----> t
        2     3
```

**Signal \(x(t+1)\)** (Shifted left by 1)
```
  ^
1 |-----|
  |     |
0 +---+---+-----> t
 -1   0
```

## Practice Identifying Shifts

Look at the following pairs of signals and determine if time shifting has occurred. If it has, describe the shift (advance or delay and by how many units).

**Pair 1:**

*   Signal A: A triangular pulse peaking at \(t=5\).
*   Signal B: An identical triangular pulse peaking at \(t=7\).

**Analysis:** The shape is the same, but the peak has moved from \(t=5\) to \(t=7\). This is a shift of \(7 - 5 = 2\) units to the right. Therefore, Signal B is Signal A delayed by 2 units. If Signal A is \(x(t)\), then Signal B is \(x(t-2)\).

**Pair 2:**

*   Signal C: A sine wave starting at \(t=0\) with its first peak at \(t = \pi/2\).
*   Signal D: An identical sine wave starting at \(t = -\pi/2\) with its first peak at \(t = 0\).

**Analysis:** The sine wave in Signal D starts earlier and its peak is also earlier compared to Signal C. The start point moved from \(t=0\) to \(t=-\pi/2\), which is a shift of \(\pi/2\) units to the left. The peak moved from \(t=\pi/2\) to \(t=0\), also a shift of \(\pi/2\) units to the left. Therefore, Signal D is Signal C advanced by \(\pi/2\) units. If Signal C is \(x(t)\), then Signal D is \(x(t + \pi/2)\).

**Key Takeaway:** To identify time shifting, compare the positions of identical features in two signals. The difference in their positions tells you the amount and direction of the shift.

## Supports

- [[skills/mathematics/signal-operations/microskills/time-shifting-identification|Time Shifting Identification]]

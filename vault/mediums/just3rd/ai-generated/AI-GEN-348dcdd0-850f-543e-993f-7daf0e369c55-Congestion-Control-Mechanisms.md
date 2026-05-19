---
type: "medium"
title: "Understanding Congestion Control Mechanisms: AIMD"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/systems/networking/network-performance/microskills/congestion-control-mechanisms|Congestion Control Mechanisms]]"
---
# Understanding Congestion Control Mechanisms: AIMD

When data travels across a network, it's like cars on a highway. If too many cars try to use the highway at once, traffic jams occur – this is **congestion**. In computer networks, congestion can lead to slow speeds, packet loss, and increased latency. **Congestion control mechanisms** are the smart systems that prevent and manage these traffic jams, ensuring smooth data flow.

This lesson will focus on a fundamental congestion control technique: **Additive Increase, Multiplicative Decrease (AIMD)**. Understanding AIMD is crucial for grasping how protocols like TCP (Transmission Control Protocol) maintain network stability and efficiency.

## The Problem of Congestion

Imagine sending a large file. Your computer sends data in small packets. The network path between you and the destination has a certain capacity – the maximum amount of data it can handle at any given time.

If you and many other users send data at a rate exceeding this capacity, routers along the path become overwhelmed. They start dropping packets because their buffers (temporary storage for packets) are full. When packets are dropped, the sender has to retransmit them, further increasing network load and exacerbating the congestion. This creates a vicious cycle.

## AIMD: The Core Idea

AIMD is a strategy used by the sender to dynamically adjust its sending rate to avoid overwhelming the network. It's a feedback-based mechanism, meaning it reacts to signals from the network.

The two key components are:

*   **Additive Increase:** When the network appears clear (no packet loss), the sender cautiously increases its sending rate.
*   **Multiplicative Decrease:** When congestion is detected (packet loss occurs), the sender significantly reduces its sending rate.

This approach aims to find a balance: grow the sending rate when possible, but slash it drastically when the network signals distress.

## How AIMD Works in TCP

TCP implements AIMD using a **congestion window (cwnd)**. This window represents the maximum number of packets that the sender can have in transit at any given time. The sender's actual sending rate is limited by the *smaller* of the congestion window and the receiver's advertised window (which indicates how much buffer space the receiver has).

Let's break down the phases:

### 1. Slow Start

While not strictly AIMD, Slow Start is the initial phase TCP uses to ramp up its sending rate quickly and safely.

*   **How it works:** The `cwnd` starts small (typically 1 or 2 segments). For every acknowledgment (ACK) received from the receiver, the `cwnd` is doubled. This leads to an exponential increase in the sending rate.
*   **Purpose:** To quickly probe the network capacity and reach a reasonable sending rate without immediately causing congestion.
*   **When it ends:** Slow Start typically continues until the `cwnd` reaches a certain threshold (called `ssthresh`, slow start threshold) or until packet loss is detected.

### 2. Congestion Avoidance (The AIMD Phase)

Once the `cwnd` reaches `ssthresh`, TCP enters the **Congestion Avoidance** phase, where AIMD truly takes over.

*   **Additive Increase:** In Congestion Avoidance, instead of doubling the `cwnd` for each ACK, TCP increases it linearly. For each Round Trip Time (RTT) – the time it takes for a packet to go to the destination and its acknowledgment to return – the `cwnd` is increased by approximately one segment.
    $$
    \text{cwnd} = \text{cwnd} + \frac{\text{MSS}}{\text{cwnd}}
    $$
    Where MSS is the Maximum Segment Size. This means for every `cwnd` segments acknowledged, the window grows by 1 MSS.

*   **Multiplicative Decrease:** When packet loss is detected (usually via a timeout or receiving duplicate ACKs), TCP assumes congestion. It then implements the **Multiplicative Decrease**:
    *   The `ssthresh` is set to half of the current `cwnd`.
    *   The `cwnd` is reset to a small value (often 1 segment).
    *   TCP re-enters the Slow Start phase, but now it will only grow exponentially until it reaches the new, lower `ssthresh`, before transitioning back to Congestion Avoidance.

    This drastic reduction is crucial. It immediately backs off the sending rate to relieve pressure on the network.

## An Example Scenario

Let's say TCP is operating with a `cwnd` of 10 segments and no packet loss.

1.  **Additive Increase:** For every RTT, if all packets are acknowledged, the `cwnd` might increase by a small amount. For example, if the `cwnd` is 10, it might become 10 + (10/10) = 11 segments in the next RTT. This slow, steady growth continues as long as no packets are lost.
2.  **Congestion Detected:** Suddenly, the sender sends its 15th segment, and it gets lost. The receiver doesn't send an ACK for it.
3.  **Multiplicative Decrease:** TCP detects this loss (either by a timeout or receiving three duplicate ACKs for the 14th segment).
    *   The `ssthresh` is set to half of the current `cwnd` (which might have been around 15 when the loss occurred). So, `ssthresh` becomes 7 or 8.
    *   The `cwnd` is reset to 1 segment.
    *   TCP re-enters Slow Start. It will double its `cwnd` until it reaches the new `ssthresh` (7 or 8), then it will switch back to the additive increase in Congestion Avoidance.

This cycle of slow growth and sharp reduction helps TCP find the available capacity without constantly overwhelming the network.

## Why AIMD is Important

*   **Fairness:** AIMD helps ensure that multiple TCP connections sharing a network link get a fair share of the bandwidth over time.
*   **Stability:** By reacting quickly to congestion, it prevents catastrophic network collapse.
*   **Efficiency:** It allows connections to ramp up to utilize available bandwidth efficiently when the network is not congested.

While AIMD is a foundational concept, modern TCP implementations use more advanced algorithms (like Cubic, BBR) that build upon these principles to achieve even better performance in today's complex networks. However, understanding AIMD provides a solid bedrock for comprehending how network congestion is managed.

## Supports

- [[skills/systems/networking/network-performance/microskills/congestion-control-mechanisms|Congestion Control Mechanisms]]

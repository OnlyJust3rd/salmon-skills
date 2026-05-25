---
type: medium
title: Congestion Control Mechanisms
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[congestion-control-mechanisms|congestion-control-mechanisms]]"
related-skills:
  - "[[skills/computing/systems-infrastructure/computer-network/network-layers/network-performance/network-performance|network-performance]]"
learning-time-in-minutes: 5
---
# Congestion Control Mechanisms

This lesson focuses on understanding how different congestion control mechanisms work and how they impact network performance. By analyzing these mechanisms, you'll gain insight into maintaining stable and efficient network traffic.

## What is Network Congestion?

Network congestion occurs when a network link or node is carrying so much data that its quality of service deteriorates. This can manifest as:

*   **Increased latency:** Data packets take longer to reach their destination.
*   **Packet loss:** Packets are dropped because buffers are full.
*   **Reduced throughput:** The actual rate of successful data transfer decreases.

Imagine a highway during rush hour. Too many cars (data packets) trying to use the same road (network link) leads to traffic jams, slow speeds, and eventually, accidents (packet loss).

## Why Congestion Control?

Congestion control mechanisms are crucial for the stability and efficiency of the internet. They aim to:

*   **Prevent network collapse:** Without control, congestion can spiral out of control, making the network unusable.
*   **Ensure fairness:** Distribute available bandwidth among competing flows.
*   **Maximize network utilization:** Use network resources effectively without overwhelming them.

## Key Congestion Control Strategies

Congestion control algorithms operate at the transport layer (primarily TCP) and use feedback from the network to adjust the rate at which data is sent. Here are some fundamental concepts and mechanisms:

### 1. Additive Increase, Multiplicative Decrease (AIMD)

This is a cornerstone principle of many TCP congestion control algorithms.

*   **Additive Increase:** When the network is not congested (indicated by no packet loss), the sender gradually increases its sending rate (congestion window size). Think of adding one car at a time to the highway ramp during off-peak hours.
*   **Multiplicative Decrease:** When congestion is detected (usually via packet loss), the sender drastically reduces its sending rate. This is like suddenly closing several lanes of the highway when a major accident occurs.

**How it works:**

The sender maintains a `congestion window` (cwnd), which represents the maximum number of unacknowledged packets it can have in flight.

*   **On receiving ACKs (acknowledgments):** The `cwnd` is increased additively.
*   **On detecting packet loss (e.g., timeout, duplicate ACKs):** The `cwnd` is reduced multiplicatively (typically halved).

This aggressive reduction aims to quickly alleviate congestion, while the gradual increase allows the sender to probe for available bandwidth without causing immediate re-congestion.

### 2. Slow Start

Slow Start is used at the beginning of a connection or after a severe congestion event. It helps to quickly ramp up the sending rate to find the approximate capacity of the network.

**How it works:**

*   The `cwnd` starts at a small value (often 1 or 2 Maximum Segment Sizes - MSS).
*   For each acknowledgment received, the `cwnd` is doubled.
*   This exponential growth continues until the `cwnd` reaches a `slow start threshold` (ssthresh).
*   Once the `ssthresh` is reached, the algorithm transitions to the `congestion avoidance` phase, which uses AIMD.

This is like a car slowly merging onto the highway, then accelerating rapidly once it's safely on the road.

### 3. Congestion Avoidance

Once the `cwnd` exceeds the `ssthresh`, the sender enters the congestion avoidance phase. Here, the goal is to probe for additional bandwidth more cautiously.

**How it works:**

*   The `cwnd` is increased by approximately one Maximum Segment Size (MSS) per Round Trip Time (RTT). This is a slower, linear increase compared to slow start.
*   If packet loss occurs, the algorithm typically reduces the `cwnd` and sets the `ssthresh` to half of the current `cwnd` before entering slow start again.

This is like a driver during normal traffic conditions, making slight adjustments to speed to maintain flow and avoid traffic jams.

## Analyzing the Impact

To analyze the impact of these mechanisms on network throughput and latency, consider the following scenarios:

**Scenario 1: Low Load Conditions**

*   **Mechanism:** Slow Start dominates initially, followed by Congestion Avoidance.
*   **Impact:**
    *   **Throughput:** Quickly reaches high levels as the `cwnd` grows exponentially then linearly.
    *   **Latency:** Remains relatively low because there's ample bandwidth, and packet loss is minimal.

**Scenario 2: Moderate Load Conditions**

*   **Mechanism:** AIMD is frequently engaged. Slow Start might occur after initial bursts.
*   **Impact:**
    *   **Throughput:** Fluctuates as the `cwnd` increases and decreases. It will oscillate around the available capacity.
    *   **Latency:** Will increase slightly as buffers start to fill and packets experience minor delays. Packet loss events will cause temporary spikes in latency.

**Scenario 3: High Load Conditions**

*   **Mechanism:** AIMD is constantly active. Frequent packet loss.
*   **Impact:**
    *   **Throughput:** Significantly reduced and highly variable. The multiplicative decrease aggressively cuts sending rates, leading to periods of low throughput.
    *   **Latency:** Becomes very high due to full buffers and repeated retransmissions of lost packets.

## Other Congestion Control Algorithms

While AIMD, Slow Start, and Congestion Avoidance are foundational, more advanced algorithms exist to improve performance:

*   **TCP Reno:** A classic implementation incorporating AIMD and fast retransmit/recovery.
*   **TCP NewReno:** An improvement on Reno, handling multiple packet losses within a single window more efficiently.
*   **TCP CUBIC:** The default for many modern systems (Linux, Windows). It uses a cubic function to increase the `cwnd`, aiming for faster convergence and better fairness on high-bandwidth, high-latency links.
*   **BBR (Bottleneck Bandwidth and Round-trip propagation time):** Developed by Google, BBR aims to directly estimate the bottleneck bandwidth and RTT, rather than relying solely on packet loss as a congestion signal. This can lead to higher throughput and lower latency, especially on lossy or high-latency networks.

## Practical Analysis

To analyze the impact yourself, you can use tools like:

*   **`iperf3`:** A tool to measure maximum TCP and UDP bandwidth performance. You can run it between two machines and observe throughput.
*   **Packet sniffers (Wireshark):** To examine packet loss, retransmissions, and the `cwnd` size over time (if available in the TCP options).
*   **Network simulators (e.g., ns-3):** For controlled experiments with varying network conditions and congestion control algorithms.

By observing how throughput and latency change under different simulated load conditions and with different congestion control algorithms enabled, you can empirically analyze their impact. For instance, you might compare `iperf3` results with TCP CUBIC versus BBR on a link with simulated packet loss.

## Supports

- [[congestion-control-mechanisms|Congestion Control Mechanisms]]

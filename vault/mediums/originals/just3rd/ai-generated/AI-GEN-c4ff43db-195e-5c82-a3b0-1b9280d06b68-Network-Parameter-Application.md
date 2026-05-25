---
type: medium
title: Applying Network Parameters to Calculate Performance Metrics
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[network-parameter-application|network-parameter-application]]"
learning-time-in-minutes: 5
---
# Applying Network Parameters to Calculate Performance Metrics

This lesson focuses on applying your understanding of network parameters to calculate key performance metrics. We'll work through examples to solidify how given data translates into measurable performance indicators.

## Understanding the Goal

Our objective is to take raw network data and use it to compute metrics like throughput, latency, and jitter. This is crucial for understanding how well a network is performing and identifying areas for improvement.

## Key Concepts and Formulas

Before we dive into calculations, let's quickly recap the metrics and their associated formulas:

### Throughput

Throughput measures the actual rate of successful data transfer over a network. It's often expressed in bits per second (bps), kilobits per second (Kbps), or megabits per second (Mbps).

$$ \text{Throughput} = \frac{\text{Amount of Data Transferred}}{\text{Time Taken}} $$

### Latency (Round-Trip Time - RTT)

Latency is the time it takes for a data packet to travel from its source to its destination and back. It's commonly measured in milliseconds (ms).

$$ \text{Latency (RTT)} = \text{Time of Arrival} - \text{Time of Departure} $$

### Jitter

Jitter refers to the variation in latency over time. High jitter means packet arrival times are inconsistent, which can lead to issues in real-time applications like voice or video calls.

$$ \text{Jitter} = \text{Maximum Latency} - \text{Minimum Latency} $$
or more formally, the standard deviation of latency measurements. For practical application in this context, we'll focus on the difference between the max and min observed latencies.

## Worked Example: Calculating Metrics from Raw Data

Let's imagine we've captured network traffic data for a specific transfer. We have the following information:

**Scenario:** A file transfer of 10 Megabytes (MB) occurred between two servers. We observed the following packet timings:

*   **Packet 1:** Sent at 10:00:00.000, Received at 10:00:00.150, Acknowledged at 10:00:00.300
*   **Packet 2:** Sent at 10:00:00.010, Received at 10:00:00.170, Acknowledged at 10:00:00.320
*   **Packet 3:** Sent at 10:00:00.020, Received at 10:00:00.190, Acknowledged at 10:00:00.350
*   **Packet 4:** Sent at 10:00:00.030, Received at 10:00:00.210, Acknowledged at 10:00:00.380
*   **Packet 5:** Sent at 10:00:00.040, Received at 10:00:00.230, Acknowledged at 10:00:00.400

The total duration of the transfer, from the first packet's departure to the last acknowledgment, is 0.400 seconds.

First, let's ensure we're working with consistent units. 1 MB is equal to \(1024 \times 1024\) bytes, and we typically measure throughput in bits per second. So, 10 MB is \(10 \times 1024 \times 1024 \text{ bytes}\).

$$ 10 \text{ MB} = 10 \times 1024 \times 1024 \text{ bytes} = 10,485,760 \text{ bytes} $$

To convert bytes to bits, we multiply by 8:

$$ 10,485,760 \text{ bytes} \times 8 \text{ bits/byte} = 83,886,080 \text{ bits} $$

Now, let's calculate our metrics:

### 1. Throughput Calculation

The total data transferred is 83,886,080 bits. The time taken for the transfer was 0.400 seconds (from the first packet sent to the last acknowledgment received).

$$ \text{Throughput} = \frac{83,886,080 \text{ bits}}{0.400 \text{ seconds}} $$

$$ \text{Throughput} \approx 209,715,200 \text{ bits/second} $$

To express this in more common units (Mbps):

$$ \frac{209,715,200 \text{ bps}}{1,000,000 \text{ bps/Mbps}} \approx 209.7 \text{ Mbps} $$

**Interpretation:** The network achieved an average throughput of approximately 209.7 Mbps for this file transfer.

### 2. Latency (RTT) Calculation

We need to calculate the RTT for each packet. The RTT is the time from when a packet is sent until its acknowledgment is received.

*   **Packet 1 RTT:** 10:00:00.300 - 10:00:00.000 = 0.300 seconds
*   **Packet 2 RTT:** 10:00:00.320 - 10:00:00.010 = 0.310 seconds
*   **Packet 3 RTT:** 10:00:00.350 - 10:00:00.020 = 0.330 seconds
*   **Packet 4 RTT:** 10:00:00.380 - 10:00:00.030 = 0.350 seconds
*   **Packet 5 RTT:** 10:00:00.400 - 10:00:00.040 = 0.360 seconds

To get an overall latency, we can consider the average RTT:

$$ \text{Average RTT} = \frac{0.300 + 0.310 + 0.330 + 0.350 + 0.360}{5} $$

$$ \text{Average RTT} = \frac{1.650}{5} = 0.330 \text{ seconds} $$

Converting to milliseconds: \(0.330 \text{ seconds} \times 1000 \text{ ms/second} = 330 \text{ ms}\)

**Interpretation:** The average round-trip time for packets in this transfer was 330 ms.

### 3. Jitter Calculation

Using the observed RTT values:

*   Minimum Latency (RTT): 0.300 seconds
*   Maximum Latency (RTT): 0.360 seconds

$$ \text{Jitter} = \text{Maximum Latency} - \text{Minimum Latency} $$

$$ \text{Jitter} = 0.360 \text{ seconds} - 0.300 \text{ seconds} $$

$$ \text{Jitter} = 0.060 \text{ seconds} $$

Converting to milliseconds: \(0.060 \text{ seconds} \times 1000 \text{ ms/second} = 60 \text{ ms}\)

**Interpretation:** The variation in packet latency (jitter) was 60 ms during this transfer.

## Practice Scenario

Consider the following network data:

A video stream is sending data. We observe the following packet sizes and arrival times over a 1-second interval:

*   **Packet A:** 1500 bytes, arrived at 0.1 seconds.
*   **Packet B:** 1500 bytes, arrived at 0.2 seconds.
*   **Packet C:** 1000 bytes, arrived at 0.4 seconds.
*   **Packet D:** 1500 bytes, arrived at 0.5 seconds.
*   **Packet E:** 1500 bytes, arrived at 0.6 seconds.

Assume the first packet (Packet A) was sent at time 0.0 seconds.

**Your Task:**

1.  Calculate the total data transferred in bits.
2.  Calculate the throughput in Mbps.
3.  Calculate the latency for Packet A and Packet E (assuming the stream starts at time 0.0 for sending).
4.  Calculate the jitter based on Packet A and Packet E's latency.

Use the formulas and steps provided above to solve this. Good luck!

## Supports

- [[network-parameter-application|Network Parameter Application]]

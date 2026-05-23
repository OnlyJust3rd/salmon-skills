---
type: "medium"
title: "Applying Formulas for Network Performance Metrics"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/systems-infrastructure/networking/network-performance/microskills/mathematical-models|mathematical-models]]"
learning-time-in-minutes: 4
---
# Applying Formulas for Network Performance Metrics

In network performance, understanding and quantifying how well a network operates is crucial. This lesson focuses on the practical application of mathematical formulas to calculate key performance indicators (KPIs). We'll explore common formulas for throughput, latency, and jitter, and then work through examples to solidify your understanding.

## Throughput Calculation

Throughput measures the actual rate of successful data transfer over a network. It's often expressed in bits per second (bps) or bytes per second (Bps).

### The Basic Formula

The fundamental formula for throughput considers the amount of data transferred and the time it took.

$$ \text{Throughput} = \frac{\text{Amount of Data Transferred}}{\text{Time Taken}} $$

**Units:**
*   Amount of Data: Bits (b) or Bytes (B)
*   Time: Seconds (s)
*   Throughput: bps or Bps

### Example Calculation

Imagine you download a file of 10 megabytes (MB) in 20 seconds. To calculate the throughput, we need to convert the data to bits.

*   1 MB = 1024 KB
*   1 KB = 1024 B
*   1 B = 8 bits

So, 10 MB = 10 * 1024 * 1024 Bytes = 10,485,760 Bytes
And, 10,485,760 Bytes * 8 bits/Byte = 83,886,080 bits

Now, apply the formula:

$$ \text{Throughput} = \frac{83,886,080 \text{ bits}}{20 \text{ seconds}} $$
$$ \text{Throughput} = 4,194,304 \text{ bps} $$

This can also be expressed in megabits per second (Mbps):

$$ 4,194,304 \text{ bps} \div 1,000,000 \approx 4.19 \text{ Mbps} $$

**Key Takeaway:** Throughput is the *effective* rate, accounting for any overhead or errors that might occur during transmission.

## Latency Calculation

Latency, also known as delay, is the time it takes for a data packet to travel from its source to its destination. It's typically measured in milliseconds (ms).

### The Round-Trip Time (RTT) Formula

A common way to measure latency is by calculating the Round-Trip Time (RTT), which is the time from when a packet is sent until its acknowledgment is received.

$$ \text{RTT} = \text{Time of Acknowledgment Received} - \text{Time of Packet Sent} $$

### Example Calculation

Suppose you send a ping request at 10:30:05.123 AM and receive the acknowledgment at 10:30:05.198 AM.

*   Time of Packet Sent: 10:30:05.123 AM
*   Time of Acknowledgment Received: 10:30:05.198 AM

$$ \text{RTT} = 10:30:05.198 \text{ AM} - 10:30:05.123 \text{ AM} $$
$$ \text{RTT} = 0.075 \text{ seconds} $$

To convert this to milliseconds:

$$ 0.075 \text{ seconds} \times 1000 \text{ ms/second} = 75 \text{ ms} $$

**Key Takeaway:** Lower latency is generally better for real-time applications like online gaming and video conferencing.

## Jitter Calculation

Jitter refers to the variation in the delay of received packets. It's the inconsistency of latency. High jitter can lead to choppy audio or video.

### Calculating Jitter

Jitter is calculated by finding the difference between consecutive packet delays.

$$ \text{Jitter} = |\text{Current Packet Latency} - \text{Previous Packet Latency}| $$

Or, more commonly, by taking the average of these differences over a period.

$$ \text{Average Jitter} = \frac{\sum_{i=1}^{n} |\text{Latency}_i - \text{Latency}_{i-1}|}{n-1} $$
Where:
*   $ \text{Latency}_i $ is the latency of the current packet.
*   $ \text{Latency}_{i-1} $ is the latency of the previous packet.
*   $ n $ is the number of packets.

### Example Calculation

Let's track the latency of five consecutive packets:

*   Packet 1 Latency: 50 ms
*   Packet 2 Latency: 55 ms
*   Packet 3 Latency: 48 ms
*   Packet 4 Latency: 60 ms
*   Packet 5 Latency: 52 ms

Now, let's calculate the jitter between each pair of consecutive packets:

*   Jitter (P2-P1): |55 ms - 50 ms| = 5 ms
*   Jitter (P3-P2): |48 ms - 55 ms| = 7 ms
*   Jitter (P4-P3): |60 ms - 48 ms| = 12 ms
*   Jitter (P5-P4): |52 ms - 60 ms| = 8 ms

To find the average jitter:

$$ \text{Average Jitter} = \frac{5 \text{ ms} + 7 \text{ ms} + 12 \text{ ms} + 8 \text{ ms}}{4} $$
$$ \text{Average Jitter} = \frac{32 \text{ ms}}{4} $$
$$ \text{Average Jitter} = 8 \text{ ms} $$

**Key Takeaway:** Consistent latency means low jitter, which is vital for streaming and real-time communication.

## Practice Problems

1.  A file transfer completes 1 Gigabyte (GB) of data in 2 minutes. Calculate the throughput in Mbps. (Hint: 1 GB = 1024 MB, 1 Mbps = 1,000,000 bps).
2.  You send a request and get an acknowledgment back after 150 ms. What is this latency in seconds?
3.  Packet latencies are recorded as: 30 ms, 35 ms, 32 ms, 40 ms. Calculate the average jitter.

## Supports

- [[skills/computing/systems-infrastructure/networking/network-performance/microskills/mathematical-models|Mathematical Models]]

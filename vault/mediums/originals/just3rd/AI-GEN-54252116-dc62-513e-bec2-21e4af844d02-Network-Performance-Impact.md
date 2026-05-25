---
type: medium
title: "Network Performance Impact: Throughput and Latency"
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[network-performance-impact|network-performance-impact]]"
related-skills:
  - "[[skills/computing/systems-infrastructure/computer-network/transport-layer/transport-layer|transport-layer]]"
learning-time-in-minutes: 7
---
# Network Performance Impact: Throughput and Latency

Understanding how Transport Layer protocols like TCP and UDP influence network performance is crucial for building efficient applications. This lesson focuses on analyzing the impact of these protocols on **throughput** and **latency**.

## Throughput vs. Latency: A Quick Refresher

Before diving into the protocol details, let's clarify these two key performance metrics:

*   **Throughput:** The actual rate of successful data transfer over a given period. It's often measured in bits per second (bps), kilobits per second (Kbps), or megabits per second (Mbps). Think of it as the width of the pipe carrying your data. Higher throughput means more data can be sent in the same amount of time.

*   **Latency:** The time it takes for a data packet to travel from its source to its destination. It's typically measured in milliseconds (ms). This is the delay. Lower latency means data arrives faster.

## Analyzing TCP's Impact on Throughput and Latency

Transmission Control Protocol (TCP) is a connection-oriented protocol. This means it establishes a reliable, ordered, and error-checked connection between two endpoints before data transfer begins. This reliability comes at a cost to performance in certain scenarios.

### TCP and Throughput

TCP employs several mechanisms to ensure reliable data delivery, which directly impacts throughput:

*   **Flow Control:** TCP uses a sliding window mechanism to prevent a sender from overwhelming a receiver. The receiver advertises how much data it can accept, and the sender adjusts its transmission rate accordingly. This ensures that data isn't lost due to buffer overflow at the receiver, but it can limit the maximum throughput if the receiver is slow or has limited buffer space.

*   **Congestion Control:** TCP actively monitors the network for signs of congestion (e.g., packet loss). When congestion is detected, TCP reduces its sending rate to avoid further overwhelming the network. This "throttling" mechanism, while essential for network stability, can significantly reduce throughput during periods of high network traffic.

*   **Acknowledgements (ACKs):** For every packet (or a group of packets) sent, TCP expects an acknowledgment from the receiver. If an ACK is not received within a certain time, TCP assumes the packet was lost and retransmits it. This reliability adds overhead and can delay subsequent data.

**Impact on Throughput:** While TCP strives for reliable delivery, its built-in mechanisms can cap throughput. In a stable, low-congestion network with a fast receiver, TCP can achieve high throughput. However, in environments with packet loss or high latency, TCP's retransmission and congestion control can drastically reduce the effective throughput.

### TCP and Latency

TCP's connection-oriented nature inherently introduces latency:

*   **Connection Setup (Three-Way Handshake):** Before any data can be sent, TCP must establish a connection using a three-way handshake (SYN, SYN-ACK, ACK). This round trip adds initial latency.

*   **Acknowledgement Delays:** The requirement for acknowledgements means that a sender might have to wait for an ACK before sending more data, especially if the receiver is not processing data quickly or if ACKs themselves are delayed by network conditions. This waiting period increases latency.

*   **Ordered Delivery:** TCP guarantees that data arrives in the order it was sent. If packets arrive out of order, the receiver must buffer them until the missing packets arrive, which adds to latency.

**Impact on Latency:** TCP generally has higher latency compared to UDP due to its overheads. The handshake, the need for acknowledgements, and the retransmission mechanisms all contribute to delays. For applications highly sensitive to delays, this can be a significant drawback.

## Analyzing UDP's Impact on Throughput and Latency

User Datagram Protocol (UDP) is a connectionless protocol. It prioritizes speed and simplicity over reliability. UDP sends data packets (datagrams) without establishing a connection, guaranteeing delivery, or ensuring order.

### UDP and Throughput

UDP's "fire and forget" approach directly impacts throughput:

*   **No Flow Control:** UDP does not implement flow control. A sender can transmit data as fast as the network and the application can handle it, without waiting for the receiver's acknowledgment or capacity. This can lead to higher potential throughput if the receiver can keep up.

*   **No Congestion Control:** UDP does not monitor or react to network congestion. It will continue sending data at its application-defined rate, even if the network is overloaded. This can contribute to further congestion, but it means UDP itself doesn't throttle its throughput.

*   **No Acknowledgements or Retransmissions:** UDP does not send acknowledgements and does not retransmit lost packets. If a packet is lost, it's gone. This absence of overhead means data can be sent more continuously.

**Impact on Throughput:** UDP can achieve higher raw throughput than TCP in many scenarios because it avoids the overhead of acknowledgements and the throttling imposed by flow and congestion control. However, this higher throughput is not guaranteed to be *useful* throughput, as packets may be lost.

### UDP and Latency

UDP's simplicity leads to lower latency:

*   **No Connection Setup:** UDP does not require a handshake, so data can be sent immediately. This eliminates the initial connection setup latency.

*   **No Acknowledgement Delays:** Since there are no acknowledgements, the sender doesn't have to wait for confirmation before sending subsequent data.

*   **No Ordered Delivery Buffering:** UDP does not enforce packet order. If packets arrive out of sequence, they are delivered to the application as they arrive. This avoids the buffering and delays associated with reordering.

**Impact on Latency:** UDP generally has significantly lower latency than TCP. Its connectionless nature and lack of reliability mechanisms mean data can be sent and received with minimal delay.

## Scenario Analysis: Protocol Choice and Performance Impact

Let's consider scenarios where understanding the impact on throughput and latency is critical:

| Application Type        | Protocol Choice (Likely) | Throughput Impact                                                                                                        | Latency Impact                                                                                                                            | Why?                                                                                                                                                                    |
| :---------------------- | :----------------------- | :----------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Web Browsing (HTTP/S)** | TCP                      | Moderate to High. Optimized for reliable delivery. Can be affected by congestion.                                        | Moderate. Initial handshake adds delay. Reliability ensures pages load correctly.                                                         | Essential for ensuring all parts of a web page arrive correctly and in order. Reliability is prioritized over extreme low latency.                                      |
| **File Transfer (FTP)**   | TCP                      | High. Designed for bulk data transfer where all data must be received.                                                   | Moderate.                                                                                                                                 | Every bit of the file must arrive without error. TCP's reliability is paramount.                                                                                        |
| **Video Streaming**     | TCP or UDP               | High (TCP) or potentially lower but more consistent (UDP, if application handles loss).                                  | Moderate (TCP) or Low (UDP).                                                                                                              | **TCP:** Guarantees smooth playback if network is good. **UDP:** Can provide lower latency for live streams, even with occasional dropped frames, if the app can manage it. |
| **Online Gaming**       | UDP (often)              | Lower. Application layer manages loss/ordering. Focus is on speed.                                                       | Very Low. Real-time responsiveness is critical.                                                                                           | Millisecond-level delays can ruin gameplay. Occasional dropped packets are preferable to lag. The game logic handles what happens if a packet is missed.                 |
| **VoIP (Voice over IP)**| UDP                      | Lower. Less data loss tolerated than absolute reliability.                                                               | Very Low. Real-time conversation requires minimal delay.                                                                                  | Small audio glitches are acceptable; significant delays make conversation impossible.                                                                                     |
| **DNS Queries**         | UDP (primarily)          | Low overhead.                                                                                                            | Very Low. Quick response time needed for fast name resolution.                                                                            | Small, single-packet queries and responses benefit from UDP's speed. TCP is used as a fallback for large DNS responses or zone transfers.                               |

## Conclusion

*   **TCP** prioritizes **reliability** and **order**, leading to generally higher throughput in stable conditions but also increased latency and potential throughput limitations due to its control mechanisms. It's suitable for applications where data integrity is paramount (web browsing, file transfer, email).

*   **UDP** prioritizes **speed** and **low overhead**, resulting in lower latency and potentially higher raw throughput. However, it offers no guarantees of delivery, order, or error checking. It's ideal for real-time applications where some data loss is acceptable (streaming media, online gaming, VoIP).

By analyzing the specific performance requirements (throughput needs, latency sensitivity) of your application, you can make an informed decision about which Transport Layer protocol will best serve its needs.

## Supports

- [[network-performance-impact|Network Performance Impact]]

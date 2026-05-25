---
type: "medium"
title: "UART Protocol Fundamentals"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/hardware-embedded/embedded-systems/embedded-system-interfacing/microskills/uart-protocol-fundamentals|uart-protocol-fundamentals]]"
related-skills:
  - "[[skills/computing/hardware-embedded/embedded-systems/embedded-system-interfacing/embedded-system-interfacing|embedded-system-interfacing]]"
learning-time-in-minutes: 4
---
# UART Protocol Fundamentals

This lesson focuses on understanding the basics of the UART (Universal Asynchronous Receiver/Transmitter) communication protocol, a fundamental concept in embedded system interfacing.

## What is UART?

UART is a hardware communication protocol used for **serial communication**. This means data is sent one bit at a time, sequentially, over a single wire (or pair of wires for bidirectional communication). It's called "asynchronous" because it doesn't rely on a shared clock signal between the sender and receiver. Instead, it uses a pre-agreed set of timing parameters.

Think of it like two people talking on the phone. They need to agree on the language they're speaking (the data format and bits per character) and a general pace (baud rate) so they can understand each other. They don't need a constant, ticking metronome to synchronize every single word.

## Key Principles of Asynchronous Serial Communication

The asynchronous nature of UART is its defining characteristic and relies on a few key principles:

1.  **Start Bit:** Before sending any actual data, the transmitter sends a single **start bit**. This bit is always a logic high to logic low transition. This transition signals to the receiver that a new data byte is about to begin. It's like clearing your throat to get the other person's attention.

2.  **Data Bits:** Following the start bit, the actual data is transmitted. This is typically sent in chunks of 5 to 9 bits, with 8 bits being the most common. These bits represent the characters or values being communicated.

3.  **Parity Bit (Optional):** After the data bits, an optional **parity bit** can be included for error checking.
    *   **Even Parity:** The parity bit is set to 1 if the number of 1s in the data bits is odd, making the total count of 1s (including the parity bit) even.
    *   **Odd Parity:** The parity bit is set to 1 if the number of 1s in the data bits is even, making the total count of 1s odd.
    *   If parity is not used, this bit is simply omitted or set to a default state.

4.  **Stop Bit(s):** After the data bits (and optional parity bit), one or two **stop bits** are sent. These are always logic high (idle state) and signal the end of the data byte. This allows the receiver to know when to expect the next start bit.

5.  **Baud Rate:** This is the **speed** at which data is transmitted, measured in bits per second (bps). Both the transmitter and receiver must be configured to use the **same baud rate**. Common baud rates include 9600, 19200, 38400, 57600, and 115200 bps. A mismatch in baud rates will result in garbled or unreadable data.

### How Synchronization Happens

Without a shared clock, how does the receiver know when to "listen" for each bit?

*   The **start bit** is the crucial synchronization signal. When the receiver detects the transition from idle (high) to start (low), it knows a byte is coming.
*   It then uses its own internal clock, running at the agreed-upon baud rate, to sample the data line at the **mid-point** of each bit's expected duration.
*   The **stop bit** helps re-establish the idle state, preparing the receiver for the next start bit.

## Analogy: Sending a Letter

Imagine sending a letter through a postal service without a coordinated timing system.

*   **Start Bit:** You put a special "START" sticker on the envelope. The post office knows a letter is coming.
*   **Data Bits:** The content of your letter (your message).
*   **Parity Bit:** You add a checksum number at the end of your message, and the post office can verify it.
*   **Stop Bit:** You seal the envelope, signaling the end of the message.
*   **Baud Rate:** The speed at which the postal service processes and delivers mail. Everyone involved needs to agree on a general processing speed.

## Practical Considerations

*   **Simplicity:** UART is relatively simple to implement in hardware and software, making it popular for short-distance communication.
*   **Distance:** While effective, UART is typically used for shorter distances (a few meters) because noise can easily corrupt the signal over longer runs.
*   **Duplex Modes:**
    *   **Half-Duplex:** Communication can only happen in one direction at a time.
    *   **Full-Duplex:** Communication can happen in both directions simultaneously, usually requiring two wires (one for transmitting, one for receiving). This is the most common mode for embedded systems.

## Summary

UART is a foundational asynchronous serial communication protocol. Its key principles of start bits, data bits, optional parity, stop bits, and the critical baud rate allow devices to exchange data reliably without a shared clock. Understanding these fundamentals is the first step in mastering embedded system communication.

## Supports

- [[skills/computing/hardware-embedded/embedded-systems/embedded-system-interfacing/microskills/uart-protocol-fundamentals|UART Protocol Fundamentals]]

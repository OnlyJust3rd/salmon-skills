---
type: "medium"
title: "Network Layered Models"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/systems-infrastructure/networking/network-foundations/computer-network-architecture/microskills/network-layered-models|network-layered-models]]"
learning-time-in-minutes: 4
---
# Network Layered Models

Understanding how networks work can feel complex, but it's much easier when we break it down into layers. Network layered models, like the popular TCP/IP model, organize the intricate processes of network communication into a series of distinct, manageable layers. Each layer handles a specific part of the communication process, and they work together to ensure data gets from one device to another.

### What are Network Layered Models?

Think of sending a letter. You don't just write the message and drop it in a mailbox. You write the letter (content), put it in an envelope (packaging), write an address (routing), and the postal service handles the rest (transportation). Network layered models are similar. They divide network communication into abstract layers, each with its own protocols and functions. This hierarchical approach makes network design, troubleshooting, and development more organized and efficient.

The most common model for understanding modern networks is the **TCP/IP model**. It typically includes four or five layers, depending on how it's presented. For our purposes, let's consider these key layers:

*   **Application Layer:** This is where network applications reside (e.g., web browsers, email clients). It deals with data representation and dialogue control. Protocols here include HTTP, FTP, SMTP.
*   **Transport Layer:** This layer ensures reliable or unreliable data transfer between applications on different hosts. It handles segmentation, reassembly, and flow control. TCP (Transmission Control Protocol) and UDP (User Datagram Protocol) are the main protocols.
*   **Internet Layer (or Network Layer):** Responsible for logical addressing (IP addresses) and routing packets across networks. It determines the best path for data to travel. IP is the primary protocol here.
*   **Network Interface Layer (or Link Layer):** This layer deals with the physical transmission of data over the network medium. It handles MAC addresses, framing, and error detection on the local network. Ethernet and Wi-Fi are examples of technologies at this layer.

### Practical Scenario: Browsing a Website

Let's see how these layers work together when you browse a website:

1.  **Application Layer:** Your web browser (e.g., Chrome, Firefox) uses the **HTTP** protocol to request a webpage from a web server.
2.  **Transport Layer:** Your computer's Transport layer, using **TCP**, breaks the HTTP request into segments. It adds sequence numbers and port numbers (e.g., port 80 for HTTP) to ensure the segments arrive in order and are directed to the correct application on the server.
3.  **Internet Layer:** The Internet layer adds the **IP address** of your computer and the web server to each segment, turning them into packets. It then determines the best route for these packets to reach the server.
4.  **Network Interface Layer:** The Network Interface layer takes these packets and frames them with **MAC addresses** for transmission over your local network (e.g., your Wi-Fi or Ethernet). This frame is then sent to your router and eventually across the internet to the web server.

The web server receives the data, and the process is reversed through its own layers to assemble the webpage content and send it back to your browser.

### Practice Task

Imagine you are sending an email.

Identify which layer of the TCP/IP model is primarily responsible for:

1.  Establishing the connection between your email client and the mail server.
2.  Ensuring the email message arrives at the recipient's mail server reliably.
3.  Adding the destination IP address to the email data so it can be routed.
4.  Translating your request to send an email into electrical signals (if using wired Ethernet).

### Self-Check Questions

1.  Why are network communication processes organized into layers?
2.  What is the primary role of the Transport Layer in the TCP/IP model?
3.  Which layer is responsible for IP addresses and routing?
4.  Can you name a protocol that operates at the Application Layer?

## Supports

- [[skills/computing/systems-infrastructure/networking/network-foundations/computer-network-architecture/microskills/network-layered-models|Network Layered Models]]

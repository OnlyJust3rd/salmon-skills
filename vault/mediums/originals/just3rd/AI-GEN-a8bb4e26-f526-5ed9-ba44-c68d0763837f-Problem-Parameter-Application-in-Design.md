---
type: "medium"
title: "Applying Problem Parameters in System Design"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/professional-practice/engineering-practices/system-design/microskills/problem-parameter-application-in-design|problem-parameter-application-in-design]]"
related-skills:
  - "[[skills/professional-practice/engineering-practices/system-design/system-design|system-design]]"
learning-time-in-minutes: 5
---
# Applying Problem Parameters in System Design

When we design a system, it's not just about picking fancy components or drawing elegant diagrams. The real power comes from understanding the specific problem we're trying to solve. This means taking the characteristics and constraints of the problem and weaving them directly into our design choices. This skill is all about making sure our design is not just functional, but also appropriate for the task at hand.

## What are Problem Parameters?

Problem parameters are the defining features, limitations, and requirements of the engineering problem you are addressing. They tell you what the system *must* do, what it *cannot* do, and under what conditions it must operate.

Think of them as the ingredients and rules for your design recipe. Without them, you're just guessing.

Here are some common types of problem parameters:

*   **Functional Requirements:** What the system should *do*. (e.g., "The system must process 100 transactions per second.")
*   **Non-Functional Requirements (NFRs):** How well the system should do it, or its qualities.
    *   **Performance:** Speed, throughput, latency. (e.g., "Page load time must be under 2 seconds.")
    *   **Scalability:** Ability to handle increased load. (e.g., "The system must support 1 million concurrent users.")
    *   **Reliability:** Uptime, fault tolerance. (e.g., "The system must have 99.99% availability.")
    *   **Security:** Protection against threats. (e.g., "All user data must be encrypted.")
    *   **Cost:** Budget constraints. (e.g., "The total hardware cost must not exceed $10,000.")
    *   **Maintainability:** Ease of updates and fixes. (e.g., "The system should be easily updated by a small team.")
*   **Environmental Constraints:** The context in which the system operates. (e.g., "The system must operate in a low-power environment," or "The system will be deployed on embedded hardware with limited memory.")
*   **User Constraints:** Who will use the system and how. (e.g., "The interface must be intuitive for non-technical users.")

## How to Integrate Problem Parameters into Design

This isn't a one-time step; it's a continuous process throughout the design lifecycle.

### 1. Identify and Understand

The first step is to clearly identify *all* relevant problem parameters. Don't assume; ask questions. Read documentation thoroughly.

*   **Example:** You're designing an automated irrigation system for a greenhouse.
    *   **Functional:** Monitor soil moisture, water plants when dry, adjust watering based on plant type.
    *   **NFRs:**
        *   **Reliability:** Must operate continuously, even during power outages (battery backup).
        *   **Performance:** Respond to soil moisture changes within 5 minutes.
        *   **Scalability:** Support up to 100 zones (individual plant areas).
        *   **Cost:** Target hardware cost per zone under $50.
    *   **Environmental:** Operate in a humid environment, temperature range 10-40°C.
    *   **User:** Simple interface for setting watering schedules.

### 2. Prioritize and Trade-off

Not all parameters will have equal weight. You'll often face trade-offs. For instance, achieving extreme reliability might increase cost significantly.

*   **Example (cont.):** Is 99.999% reliability critical for the irrigation system, or is 99.9% acceptable if it drastically reduces cost? For an irrigation system, 99.9% might be perfectly fine, saving money.

### 3. Map Parameters to Design Decisions

This is where the "apply" action happens. For each significant parameter, ask: "How does this influence my architectural choices?"

| Parameter Type        | Design Influence                                                                                                        | Example Design Decision (Irrigation System)                                                                                                          |
| :-------------------- | :---------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Throughput/Latency** | Influences choice of microservices vs. monolith, database type (SQL vs. NoSQL), caching strategies, network protocols.      | If high transaction volume, consider a message queue (e.g., Kafka) to decouple processing. For low latency, direct database access might be better. |
| **Scalability**       | Affects choice of stateless services, load balancers, database sharding, horizontal vs. vertical scaling.                 | Design services to be stateless to allow easy horizontal scaling by adding more instances behind a load balancer.                                    |
| **Reliability**       | Drives decisions on redundancy, fault tolerance mechanisms (e.g., circuit breakers, retries), data backups, monitoring. | Implement watchdog timers for sensors and controllers, use redundant power supplies.                                                                  |
| **Security**          | Impacts authentication/authorization mechanisms, encryption, network segmentation, input validation.                       | Encrypt sensitive data stored by the system. Use secure protocols (e.g., TLS) for communication.                                                     |
| **Cost**              | Influences hardware choices (cloud vs. on-premise, instance types), software licensing, choice of open-source vs. proprietary. | Opt for a cheaper microcontroller and local storage if the system doesn't need complex cloud integration and cost is paramount.                     |
| **Environmental**     | Dictates hardware ruggedness, power consumption limits, choice of communication technologies (e.g., LoRa for long-range).  | Select a microcontroller with low power consumption modes. Use robust enclosures to protect against humidity.                                         |

### 4. Document and Validate

Record *why* you made specific design choices, linking them back to the problem parameters. This documentation is crucial for future understanding and maintenance. Continuously validate your design against the parameters.

*   **Example (cont.):** "We chose a Raspberry Pi Zero W for the controller because its low cost ($10) and low power consumption meet the NFRs for cost and environmental constraints. Its Wi-Fi capability supports communication within the greenhouse."

## Common Pitfalls

*   **Ignoring parameters:** Designing a generic system that doesn't fit the specific problem.
*   **Over-engineering:** Applying solutions for parameters that aren't actually constraints (e.g., using a distributed database for a system that only handles 10 users).
*   **Under-engineering:** Failing to address critical parameters, leading to system failure or poor performance.
*   **Not seeking clarification:** Making assumptions about ambiguous parameters.

By consciously and systematically integrating problem parameters into every stage of your design process, you ensure that your system is not just technically sound but also a practical and effective solution to the actual problem it's meant to solve.

## Supports

- [[skills/professional-practice/engineering-practices/system-design/microskills/problem-parameter-application-in-design|Problem Parameter Application in Design]]

---
type: "medium"
title: "Interdomain Routing Use Cases"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/systems-infrastructure/networking/routing-switching/routing-algorithms/microskills/interdomain-routing-use-cases|interdomain-routing-use-cases]]"
learning-time-in-minutes: 5
---
# Interdomain Routing Use Cases

This lesson focuses on understanding when and why we use interdomain routing protocols. We'll explore the specific scenarios where these protocols are the best fit, helping you analyze their optimal application.

## What is Interdomain Routing?

Interdomain routing deals with how different networks, often operated by different organizations (like ISPs, large enterprises, or cloud providers), exchange routing information to reach destinations outside their own administrative domain. This is fundamentally different from intradomain routing, which handles routing *within* a single network.

## Key Characteristics of Interdomain Routing

Before diving into use cases, let's recap the defining features of interdomain routing that influence its application:

*   **Policy-Driven:** Decisions are heavily influenced by business agreements, traffic engineering goals, and security policies between organizations. This is a major departure from intradomain routing, which is primarily focused on finding the shortest or fastest path.
*   **Scalability:** Interdomain routing must handle an enormous number of networks and routes globally.
*   **Complexity:** The protocols are designed to manage this scale and policy, making them more complex than intradomain protocols.
*   **Trust:** It relies on a level of trust between autonomous systems (ASes) to exchange valid routing information.

## Scenarios Where Interdomain Routing is Optimal

Interdomain routing protocols, most notably **Border Gateway Protocol (BGP)**, are essential in the following situations:

### 1. Connecting to the Global Internet

This is the most fundamental use case. Every organization that wants to connect to the broader internet and make its services or networks reachable by users from anywhere in the world *must* engage in interdomain routing.

*   **Example:** An e-commerce website hosted by a company needs to be accessible from any user's internet connection, regardless of which ISP they use. The company's network (an Autonomous System) needs to advertise its network prefixes to its upstream ISPs, and learn routes to all other ASes on the internet.

### 2. Multi-Homing

Organizations often connect to multiple Internet Service Providers (ISPs) for redundancy and performance. This practice, known as multi-homing, requires interdomain routing to manage traffic flow and reachability across these different connections.

*   **Why it's optimal:**
    *   **Redundancy:** If one ISP connection fails, traffic can be rerouted through another.
    *   **Load Balancing:** Traffic can be distributed across multiple ISP links.
    *   **Policy Control:** An organization can choose which ISP to use for specific destinations or traffic types, based on cost, performance, or peering agreements.

*   **Example:** A large enterprise has connections to ISP A and ISP B. Using BGP, it can:
    *   Announce its network to both ISPs.
    *   Receive routes from both ISPs.
    *   Implement policies to prefer ISP A for most traffic but send specific traffic (e.g., to a partner network) via ISP B.
    *   Detect an outage with ISP A and automatically switch all traffic to ISP B.

### 3. Peering Between Large Networks

Large content providers, cloud service providers, or major enterprises might peer directly with each other (often at Internet Exchange Points or via private connections) rather than always transiting through ISPs. This reduces costs and improves performance.

*   **Why it's optimal:**
    *   **Reduced Latency:** Traffic can take a more direct path between two networks.
    *   **Lower Costs:** Avoids paying transit fees to ISPs for traffic exchanged directly.
    *   **Control:** Greater control over traffic flow and path selection.

*   **Example:** Google wants to exchange traffic directly with Netflix. Instead of both networks sending traffic through multiple transit ISPs, they can establish a direct BGP peering session. This allows them to efficiently exchange traffic destined for each other's networks.

### 4. Establishing Transit Relationships

For smaller networks that cannot afford to connect to multiple large ISPs or peer directly, they purchase transit services from larger ISPs. This means the larger ISP agrees to carry traffic for the smaller network to any destination on the internet.

*   **Why it's optimal:**
    *   **Cost-Effective Connectivity:** Provides full internet access without the expense of direct peering or multiple ISP connections.
    *   **Simplicity:** Manageable through a single BGP relationship.

*   **Example:** A small regional ISP needs to connect its customers to the global internet. It buys a transit service from a Tier-1 ISP, establishing a BGP session to learn all internet routes and advertise its own network prefixes.

### 5. Enterprise Networks with Multiple Sites and Diverse Connectivity

Large global enterprises with numerous offices and data centers often use interdomain routing principles internally or for managing connections to their chosen cloud providers. While specific protocols might differ, the concepts of policy-based routing and managing connectivity between distinct entities apply.

*   **Example:** A multinational corporation has its own AS for its global backbone. It connects this backbone to different ISPs in various regions for internet access and also connects directly to major cloud providers (AWS, Azure, GCP) using BGP for dedicated private connections.

## Conclusion

Interdomain routing is the backbone of the global internet. Its use cases are centered around connecting disparate networks, enabling redundancy, controlling traffic flow through policies, and ensuring global reachability. Understanding these scenarios is crucial for analyzing the role and necessity of interdomain routing protocols like BGP in various network architectures.

## Supports

- [[skills/computing/systems-infrastructure/networking/routing-switching/routing-algorithms/microskills/interdomain-routing-use-cases|Interdomain Routing Use Cases]]

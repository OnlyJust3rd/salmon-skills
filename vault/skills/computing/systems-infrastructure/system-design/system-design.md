---
type: skill
icon: LiZap
title: system-design
tags:
  - skill
  - system-design
contributors:
  - "[[contributors/just3rd|just3rd]]"
competencies:
  - "[[L1-recognize-system-design-term|L1-recognize-system-design-term]]"
  - "[[L2-explain-system-design-choice|L2-explain-system-design-choice]]"
  - "[[L2-compare-system-design-tradeoffs|L2-compare-system-design-tradeoffs]]"
  - "[[L3-design-scalable-service-architecture|L3-design-scalable-service-architecture]]"
standard-competency:
  - "[[L3-design-scalable-service-architecture|L3-design-scalable-service-architecture]]"
microskills:
  - "[[single-server-architecture|Single Server Architecture]]"
  - "[[distributed-system-purpose|Distributed System Purpose]]"
  - "[[scalability|Scalability]]"
  - "[[horizontal-scaling|Horizontal Scaling]]"
  - "[[vertical-scaling|Vertical Scaling]]"
  - "[[reliability|Reliability]]"
  - "[[availability|Availability]]"
  - "[[skills/computing/systems-infrastructure/system-design/microskills/latency|Latency]]"
  - "[[throughput|Throughput]]"
  - "[[cap-theorem|CAP Theorem]]"
  - "[[consistency|Consistency]]"
  - "[[partition-tolerance|Partition Tolerance]]"
  - "[[load-balancer-purpose|Load Balancer Purpose]]"
  - "[[load-balancing-algorithms|Load Balancing Algorithms]]"
  - "[[caching-purpose|Caching Purpose]]"
  - "[[cdn-purpose|CDN Purpose]]"
  - "[[cache-write-strategies|Cache Write Strategies]]"
  - "[[sql-database-selection|SQL Database Selection]]"
  - "[[nosql-database-selection|NoSQL Database Selection]]"
  - "[[skills/computing/systems-infrastructure/system-design/microskills/database-indexing|Database Indexing]]"
  - "[[index-read-write-tradeoff|Index Read Write Tradeoff]]"
  - "[[data-partitioning|Data Partitioning]]"
  - "[[horizontal-partitioning|Horizontal Partitioning]]"
  - "[[vertical-partitioning|Vertical Partitioning]]"
  - "[[directory-based-partitioning|Directory Based Partitioning]]"
  - "[[hash-based-partitioning|Hash Based Partitioning]]"
  - "[[consistent-hashing|Consistent Hashing]]"
---

# System Design

**System design** is the process of planning how a software system should be structured so it can meet its goals for functionality, scale, reliability, cost, performance, and maintainability.

A hirable backend or full-stack engineer uses system design to turn product requirements into a practical architecture: APIs, services, data stores, caches, load balancers, queues, partitions, observability, and failure handling.

## Real-World Usage

System design shows up when an engineer needs to:

- design a URL shortener, feed, notification service, chat system, upload pipeline, or learning graph API;
- explain why a service needs a load balancer, cache, CDN, SQL database, NoSQL database, index, or partitioning strategy;
- compare tradeoffs such as latency vs throughput, consistency vs availability, and read speed vs write overhead;
- identify the next scaling step when a single server or single database is no longer enough;
- discuss failure modes and choose redundancy, retries, failover, or simpler operational constraints.

## Learning Path

1. [[L1-recognize-system-design-term|L1-recognize-system-design-term]]: recognize the vocabulary and basic building blocks.
2. [[L2-explain-system-design-choice|L2-explain-system-design-choice]]: justify common component choices from requirements.
3. [[L2-compare-system-design-tradeoffs|L2-compare-system-design-tradeoffs]]: compare alternatives and name what gets better or worse.
4. [[L3-design-scalable-service-architecture|L3-design-scalable-service-architecture]]: produce a coherent design for a real service scenario.

## Common Architecture Evolution

```txt
Single server + database
  -> multiple web servers
  -> load balancer
  -> cache and CDN
  -> SQL or NoSQL data model choice
  -> indexes for hot queries
  -> partitioning and consistent hashing for scale
```

## Competencies

- [[L1-recognize-system-design-term|L1-recognize-system-design-term]]
- [[L2-explain-system-design-choice|L2-explain-system-design-choice]]
- [[L2-compare-system-design-tradeoffs|L2-compare-system-design-tradeoffs]]
- [[L3-design-scalable-service-architecture|L3-design-scalable-service-architecture]]

## Microskills

- [[single-server-architecture|Single Server Architecture]]
- [[distributed-system-purpose|Distributed System Purpose]]
- [[scalability|Scalability]]
- [[horizontal-scaling|Horizontal Scaling]]
- [[vertical-scaling|Vertical Scaling]]
- [[reliability|Reliability]]
- [[availability|Availability]]
- [[skills/computing/systems-infrastructure/system-design/microskills/latency|Latency]]
- [[throughput|Throughput]]
- [[cap-theorem|CAP Theorem]]
- [[consistency|Consistency]]
- [[partition-tolerance|Partition Tolerance]]
- [[load-balancer-purpose|Load Balancer Purpose]]
- [[load-balancing-algorithms|Load Balancing Algorithms]]
- [[caching-purpose|Caching Purpose]]
- [[cdn-purpose|CDN Purpose]]
- [[cache-write-strategies|Cache Write Strategies]]
- [[sql-database-selection|SQL Database Selection]]
- [[nosql-database-selection|NoSQL Database Selection]]
- [[skills/computing/systems-infrastructure/system-design/microskills/database-indexing|Database Indexing]]
- [[index-read-write-tradeoff|Index Read Write Tradeoff]]
- [[data-partitioning|Data Partitioning]]
- [[horizontal-partitioning|Horizontal Partitioning]]
- [[vertical-partitioning|Vertical Partitioning]]
- [[directory-based-partitioning|Directory Based Partitioning]]
- [[hash-based-partitioning|Hash Based Partitioning]]
- [[consistent-hashing|Consistent Hashing]]

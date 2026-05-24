---
type: skill
title: system-design
tags:
  - skill
  - system-design
contributors:
  - "[[contributors/just3rd|just3rd]]"
competencies:
  - "[[skills/computing/systems-infrastructure/delivery-platforms/platform-engineering/system-design/competencies/L1-recognize-system-design-term|L1-recognize-system-design-term]]"
  - "[[skills/computing/systems-infrastructure/delivery-platforms/platform-engineering/system-design/competencies/L2-explain-system-design-choice|L2-explain-system-design-choice]]"
  - "[[skills/computing/systems-infrastructure/delivery-platforms/platform-engineering/system-design/competencies/L2-compare-system-design-tradeoffs|L2-compare-system-design-tradeoffs]]"
  - "[[skills/computing/systems-infrastructure/delivery-platforms/platform-engineering/system-design/competencies/L3-design-scalable-service-architecture|L3-design-scalable-service-architecture]]"
standard-competency:
  - "[[skills/computing/systems-infrastructure/delivery-platforms/platform-engineering/system-design/competencies/L3-design-scalable-service-architecture|L3-design-scalable-service-architecture]]"
microskills:
  - "[[skills/computing/systems-infrastructure/delivery-platforms/platform-engineering/system-design/microskills/single-server-architecture|Single Server Architecture]]"
  - "[[skills/computing/systems-infrastructure/delivery-platforms/platform-engineering/system-design/microskills/distributed-system-purpose|Distributed System Purpose]]"
  - "[[skills/computing/systems-infrastructure/delivery-platforms/platform-engineering/system-design/microskills/scalability|Scalability]]"
  - "[[skills/computing/systems-infrastructure/delivery-platforms/platform-engineering/system-design/microskills/horizontal-scaling|Horizontal Scaling]]"
  - "[[skills/computing/systems-infrastructure/delivery-platforms/platform-engineering/system-design/microskills/vertical-scaling|Vertical Scaling]]"
  - "[[skills/computing/systems-infrastructure/delivery-platforms/platform-engineering/system-design/microskills/reliability|Reliability]]"
  - "[[skills/computing/systems-infrastructure/delivery-platforms/platform-engineering/system-design/microskills/availability|Availability]]"
  - "[[skills/computing/systems-infrastructure/delivery-platforms/platform-engineering/system-design/microskills/latency|Latency]]"
  - "[[skills/computing/systems-infrastructure/delivery-platforms/platform-engineering/system-design/microskills/throughput|Throughput]]"
  - "[[skills/computing/systems-infrastructure/delivery-platforms/platform-engineering/system-design/microskills/cap-theorem|CAP Theorem]]"
  - "[[skills/computing/systems-infrastructure/delivery-platforms/platform-engineering/system-design/microskills/consistency|Consistency]]"
  - "[[skills/computing/systems-infrastructure/delivery-platforms/platform-engineering/system-design/microskills/partition-tolerance|Partition Tolerance]]"
  - "[[skills/computing/systems-infrastructure/delivery-platforms/platform-engineering/system-design/microskills/load-balancer-purpose|Load Balancer Purpose]]"
  - "[[skills/computing/systems-infrastructure/delivery-platforms/platform-engineering/system-design/microskills/load-balancing-algorithms|Load Balancing Algorithms]]"
  - "[[skills/computing/systems-infrastructure/delivery-platforms/platform-engineering/system-design/microskills/caching-purpose|Caching Purpose]]"
  - "[[skills/computing/systems-infrastructure/delivery-platforms/platform-engineering/system-design/microskills/cdn-purpose|CDN Purpose]]"
  - "[[skills/computing/systems-infrastructure/delivery-platforms/platform-engineering/system-design/microskills/cache-write-strategies|Cache Write Strategies]]"
  - "[[skills/computing/systems-infrastructure/delivery-platforms/platform-engineering/system-design/microskills/sql-database-selection|SQL Database Selection]]"
  - "[[skills/computing/systems-infrastructure/delivery-platforms/platform-engineering/system-design/microskills/nosql-database-selection|NoSQL Database Selection]]"
  - "[[skills/computing/systems-infrastructure/delivery-platforms/platform-engineering/system-design/microskills/database-indexing|Database Indexing]]"
  - "[[skills/computing/systems-infrastructure/delivery-platforms/platform-engineering/system-design/microskills/index-read-write-tradeoff|Index Read Write Tradeoff]]"
  - "[[skills/computing/systems-infrastructure/delivery-platforms/platform-engineering/system-design/microskills/data-partitioning|Data Partitioning]]"
  - "[[skills/computing/systems-infrastructure/delivery-platforms/platform-engineering/system-design/microskills/horizontal-partitioning|Horizontal Partitioning]]"
  - "[[skills/computing/systems-infrastructure/delivery-platforms/platform-engineering/system-design/microskills/vertical-partitioning|Vertical Partitioning]]"
  - "[[skills/computing/systems-infrastructure/delivery-platforms/platform-engineering/system-design/microskills/directory-based-partitioning|Directory Based Partitioning]]"
  - "[[skills/computing/systems-infrastructure/delivery-platforms/platform-engineering/system-design/microskills/hash-based-partitioning|Hash Based Partitioning]]"
  - "[[skills/computing/systems-infrastructure/delivery-platforms/platform-engineering/system-design/microskills/consistent-hashing|Consistent Hashing]]"
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

1. [[skills/computing/systems-infrastructure/delivery-platforms/platform-engineering/system-design/competencies/L1-recognize-system-design-term|L1-recognize-system-design-term]]: recognize the vocabulary and basic building blocks.
2. [[skills/computing/systems-infrastructure/delivery-platforms/platform-engineering/system-design/competencies/L2-explain-system-design-choice|L2-explain-system-design-choice]]: justify common component choices from requirements.
3. [[skills/computing/systems-infrastructure/delivery-platforms/platform-engineering/system-design/competencies/L2-compare-system-design-tradeoffs|L2-compare-system-design-tradeoffs]]: compare alternatives and name what gets better or worse.
4. [[skills/computing/systems-infrastructure/delivery-platforms/platform-engineering/system-design/competencies/L3-design-scalable-service-architecture|L3-design-scalable-service-architecture]]: produce a coherent design for a real service scenario.

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

- [[skills/computing/systems-infrastructure/delivery-platforms/platform-engineering/system-design/competencies/L1-recognize-system-design-term|L1-recognize-system-design-term]]
- [[skills/computing/systems-infrastructure/delivery-platforms/platform-engineering/system-design/competencies/L2-explain-system-design-choice|L2-explain-system-design-choice]]
- [[skills/computing/systems-infrastructure/delivery-platforms/platform-engineering/system-design/competencies/L2-compare-system-design-tradeoffs|L2-compare-system-design-tradeoffs]]
- [[skills/computing/systems-infrastructure/delivery-platforms/platform-engineering/system-design/competencies/L3-design-scalable-service-architecture|L3-design-scalable-service-architecture]]

## Microskills

- [[skills/computing/systems-infrastructure/delivery-platforms/platform-engineering/system-design/microskills/single-server-architecture|Single Server Architecture]]
- [[skills/computing/systems-infrastructure/delivery-platforms/platform-engineering/system-design/microskills/distributed-system-purpose|Distributed System Purpose]]
- [[skills/computing/systems-infrastructure/delivery-platforms/platform-engineering/system-design/microskills/scalability|Scalability]]
- [[skills/computing/systems-infrastructure/delivery-platforms/platform-engineering/system-design/microskills/horizontal-scaling|Horizontal Scaling]]
- [[skills/computing/systems-infrastructure/delivery-platforms/platform-engineering/system-design/microskills/vertical-scaling|Vertical Scaling]]
- [[skills/computing/systems-infrastructure/delivery-platforms/platform-engineering/system-design/microskills/reliability|Reliability]]
- [[skills/computing/systems-infrastructure/delivery-platforms/platform-engineering/system-design/microskills/availability|Availability]]
- [[skills/computing/systems-infrastructure/delivery-platforms/platform-engineering/system-design/microskills/latency|Latency]]
- [[skills/computing/systems-infrastructure/delivery-platforms/platform-engineering/system-design/microskills/throughput|Throughput]]
- [[skills/computing/systems-infrastructure/delivery-platforms/platform-engineering/system-design/microskills/cap-theorem|CAP Theorem]]
- [[skills/computing/systems-infrastructure/delivery-platforms/platform-engineering/system-design/microskills/consistency|Consistency]]
- [[skills/computing/systems-infrastructure/delivery-platforms/platform-engineering/system-design/microskills/partition-tolerance|Partition Tolerance]]
- [[skills/computing/systems-infrastructure/delivery-platforms/platform-engineering/system-design/microskills/load-balancer-purpose|Load Balancer Purpose]]
- [[skills/computing/systems-infrastructure/delivery-platforms/platform-engineering/system-design/microskills/load-balancing-algorithms|Load Balancing Algorithms]]
- [[skills/computing/systems-infrastructure/delivery-platforms/platform-engineering/system-design/microskills/caching-purpose|Caching Purpose]]
- [[skills/computing/systems-infrastructure/delivery-platforms/platform-engineering/system-design/microskills/cdn-purpose|CDN Purpose]]
- [[skills/computing/systems-infrastructure/delivery-platforms/platform-engineering/system-design/microskills/cache-write-strategies|Cache Write Strategies]]
- [[skills/computing/systems-infrastructure/delivery-platforms/platform-engineering/system-design/microskills/sql-database-selection|SQL Database Selection]]
- [[skills/computing/systems-infrastructure/delivery-platforms/platform-engineering/system-design/microskills/nosql-database-selection|NoSQL Database Selection]]
- [[skills/computing/systems-infrastructure/delivery-platforms/platform-engineering/system-design/microskills/database-indexing|Database Indexing]]
- [[skills/computing/systems-infrastructure/delivery-platforms/platform-engineering/system-design/microskills/index-read-write-tradeoff|Index Read Write Tradeoff]]
- [[skills/computing/systems-infrastructure/delivery-platforms/platform-engineering/system-design/microskills/data-partitioning|Data Partitioning]]
- [[skills/computing/systems-infrastructure/delivery-platforms/platform-engineering/system-design/microskills/horizontal-partitioning|Horizontal Partitioning]]
- [[skills/computing/systems-infrastructure/delivery-platforms/platform-engineering/system-design/microskills/vertical-partitioning|Vertical Partitioning]]
- [[skills/computing/systems-infrastructure/delivery-platforms/platform-engineering/system-design/microskills/directory-based-partitioning|Directory Based Partitioning]]
- [[skills/computing/systems-infrastructure/delivery-platforms/platform-engineering/system-design/microskills/hash-based-partitioning|Hash Based Partitioning]]
- [[skills/computing/systems-infrastructure/delivery-platforms/platform-engineering/system-design/microskills/consistent-hashing|Consistent Hashing]]

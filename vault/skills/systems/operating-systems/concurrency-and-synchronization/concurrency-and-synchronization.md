---
type: "Skill"
title: "Concurrency and Synchronization"
tags:
  - "cpe"
  - "skill"
contributors:
  - "[[contributors/just3rd|just3rd]]"
competencies:
  - "[[skills/systems/operating-systems/concurrency-and-synchronization/competencies/L1-explain-race-conditions-and-synchronization-need|L1-explain-race-conditions-and-synchronization-need]]"
  - "[[skills/systems/operating-systems/concurrency-and-synchronization/competencies/L1-explain-synchronization-primitive-operation|L1-explain-synchronization-primitive-operation]]"
  - "[[skills/systems/operating-systems/concurrency-and-synchronization/competencies/L2-apply-critical-sections-to-identify-race-conditions|L2-apply-critical-sections-to-identify-race-conditions]]"
  - "[[skills/systems/operating-systems/concurrency-and-synchronization/competencies/L2-apply-lock-to-critical-section|L2-apply-lock-to-critical-section]]"
  - "[[skills/systems/operating-systems/concurrency-and-synchronization/competencies/L2-solve-producer-consumer-problem|L2-solve-producer-consumer-problem]]"
  - "[[skills/systems/operating-systems/concurrency-and-synchronization/competencies/L3-analyze-lock-suitability|L3-analyze-lock-suitability]]"
standard-competency:
  - "[[skills/systems/operating-systems/concurrency-and-synchronization/competencies/L2-apply-critical-sections-to-identify-race-conditions|L2-apply-critical-sections-to-identify-race-conditions]]"
  - "[[skills/systems/operating-systems/concurrency-and-synchronization/competencies/L2-apply-lock-to-critical-section|L2-apply-lock-to-critical-section]]"
  - "[[skills/systems/operating-systems/concurrency-and-synchronization/competencies/L2-solve-producer-consumer-problem|L2-solve-producer-consumer-problem]]"
  - "[[skills/systems/operating-systems/concurrency-and-synchronization/competencies/L3-analyze-lock-suitability|L3-analyze-lock-suitability]]"
microskills:
  - "[[skills/systems/operating-systems/concurrency-and-synchronization/microskills/bounded-buffer-problem-implementation|bounded-buffer-problem-implementation]]"
  - "[[skills/systems/operating-systems/concurrency-and-synchronization/microskills/compare-and-swap-atomicity|compare-and-swap-atomicity]]"
  - "[[skills/systems/operating-systems/concurrency-and-synchronization/microskills/compare-and-swap-lock-implementation|compare-and-swap-lock-implementation]]"
  - "[[skills/systems/operating-systems/concurrency-and-synchronization/microskills/concurrency-coordination|concurrency-coordination]]"
  - "[[skills/systems/operating-systems/concurrency-and-synchronization/microskills/concurrency-scenario-suitability|concurrency-scenario-suitability]]"
  - "[[skills/systems/operating-systems/concurrency-and-synchronization/microskills/condition-variable-operations|condition-variable-operations]]"
  - "[[skills/systems/operating-systems/concurrency-and-synchronization/microskills/condition-variable-synchronization|condition-variable-synchronization]]"
  - "[[skills/systems/operating-systems/concurrency-and-synchronization/microskills/critical-section-concepts|critical-section-concepts]]"
  - "[[skills/systems/operating-systems/concurrency-and-synchronization/microskills/critical-section-identification|critical-section-identification]]"
  - "[[skills/systems/operating-systems/concurrency-and-synchronization/microskills/fetch-and-add-atomicity|fetch-and-add-atomicity]]"
  - "[[skills/systems/operating-systems/concurrency-and-synchronization/microskills/fetch-and-add-lock-implementation|fetch-and-add-lock-implementation]]"
  - "[[skills/systems/operating-systems/concurrency-and-synchronization/microskills/lock-mechanism-overhead|lock-mechanism-overhead]]"
  - "[[skills/systems/operating-systems/concurrency-and-synchronization/microskills/lock-operations|lock-operations]]"
  - "[[skills/systems/operating-systems/concurrency-and-synchronization/microskills/mutual-exclusion-implementation|mutual-exclusion-implementation]]"
  - "[[skills/systems/operating-systems/concurrency-and-synchronization/microskills/mutual-exclusion-need|mutual-exclusion-need]]"
  - "[[skills/systems/operating-systems/concurrency-and-synchronization/microskills/producer-consumer-bounded-buffer-solution|producer-consumer-bounded-buffer-solution]]"
  - "[[skills/systems/operating-systems/concurrency-and-synchronization/microskills/race-condition-causes|race-condition-causes]]"
  - "[[skills/systems/operating-systems/concurrency-and-synchronization/microskills/race-condition-detection|race-condition-detection]]"
  - "[[skills/systems/operating-systems/concurrency-and-synchronization/microskills/semaphore-operations|semaphore-operations]]"
  - "[[skills/systems/operating-systems/concurrency-and-synchronization/microskills/semaphore-synchronization|semaphore-synchronization]]"
  - "[[skills/systems/operating-systems/concurrency-and-synchronization/microskills/synchronization-mechanism-necessity|synchronization-mechanism-necessity]]"
  - "[[skills/systems/operating-systems/concurrency-and-synchronization/microskills/test-and-set-atomicity|test-and-set-atomicity]]"
  - "[[skills/systems/operating-systems/concurrency-and-synchronization/microskills/test-and-set-lock-implementation|test-and-set-lock-implementation]]"
---

# Concurrency and Synchronization

Designing concurrent systems and ensuring correct execution through synchronization mechanisms. Covers race conditions, critical sections, locking primitives, atomic operations, semaphores, and condition variables.

## Competencies

- [[skills/systems/operating-systems/concurrency-and-synchronization/competencies/L2-apply-critical-sections-to-identify-race-conditions|L3- Apply Critical Sections to Identify Race Conditions]]
- [[skills/systems/operating-systems/concurrency-and-synchronization/competencies/L2-apply-lock-to-critical-section|L3- Apply Lock to Critical Section]]
- [[skills/systems/operating-systems/concurrency-and-synchronization/competencies/L3-analyze-lock-suitability|L4- Analyze Lock Suitability]]
- [[skills/systems/operating-systems/concurrency-and-synchronization/competencies/L2-solve-producer-consumer-problem|L3- Solve Producer/Consumer problem]]
- [[skills/systems/operating-systems/concurrency-and-synchronization/competencies/L1-explain-race-conditions-and-synchronization-need|L2- Explain Race Conditions and Synchronization Need]]
- [[skills/systems/operating-systems/concurrency-and-synchronization/competencies/L1-explain-synchronization-primitive-operation|L2- Explain Synchronization Primitive Operation]]

## Microskills

- [[skills/systems/operating-systems/concurrency-and-synchronization/microskills/bounded-buffer-problem-implementation|Bounded-Buffer Problem Implementation]]
- [[skills/systems/operating-systems/concurrency-and-synchronization/microskills/compare-and-swap-atomicity|Compare-and-Swap Atomicity]]
- [[skills/systems/operating-systems/concurrency-and-synchronization/microskills/compare-and-swap-lock-implementation|Compare-and-Swap Lock Implementation]]
- [[skills/systems/operating-systems/concurrency-and-synchronization/microskills/concurrency-coordination|Concurrency Coordination]]
- [[skills/systems/operating-systems/concurrency-and-synchronization/microskills/concurrency-scenario-suitability|Concurrency Scenario Suitability]]
- [[skills/systems/operating-systems/concurrency-and-synchronization/microskills/condition-variable-operations|Condition Variable Operations]]
- [[skills/systems/operating-systems/concurrency-and-synchronization/microskills/condition-variable-synchronization|Condition Variable Synchronization]]
- [[skills/systems/operating-systems/concurrency-and-synchronization/microskills/critical-section-concepts|Critical Section Concepts]]
- [[skills/systems/operating-systems/concurrency-and-synchronization/microskills/critical-section-identification|Critical Section Identification]]
- [[skills/systems/operating-systems/concurrency-and-synchronization/microskills/fetch-and-add-atomicity|Fetch-and-Add Atomicity]]
- [[skills/systems/operating-systems/concurrency-and-synchronization/microskills/fetch-and-add-lock-implementation|Fetch-and-Add Lock Implementation]]
- [[skills/systems/operating-systems/concurrency-and-synchronization/microskills/lock-mechanism-overhead|Lock Mechanism Overhead]]
- [[skills/systems/operating-systems/concurrency-and-synchronization/microskills/lock-operations|Lock Operations]]
- [[skills/systems/operating-systems/concurrency-and-synchronization/microskills/mutual-exclusion-implementation|Mutual Exclusion Implementation]]
- [[skills/systems/operating-systems/concurrency-and-synchronization/microskills/mutual-exclusion-need|Mutual Exclusion Need]]
- [[skills/systems/operating-systems/concurrency-and-synchronization/microskills/producer-consumer-bounded-buffer-solution|Producer-Consumer Bounded-Buffer Solution]]
- [[skills/systems/operating-systems/concurrency-and-synchronization/microskills/race-condition-causes|Race Condition Causes]]
- [[skills/systems/operating-systems/concurrency-and-synchronization/microskills/race-condition-detection|Race Condition Detection]]
- [[skills/systems/operating-systems/concurrency-and-synchronization/microskills/semaphore-operations|Semaphore Operations]]
- [[skills/systems/operating-systems/concurrency-and-synchronization/microskills/semaphore-synchronization|Semaphore Synchronization]]
- [[skills/systems/operating-systems/concurrency-and-synchronization/microskills/synchronization-mechanism-necessity|Synchronization Mechanism Necessity]]
- [[skills/systems/operating-systems/concurrency-and-synchronization/microskills/test-and-set-atomicity|Test-and-Set Atomicity]]
- [[skills/systems/operating-systems/concurrency-and-synchronization/microskills/test-and-set-lock-implementation|Test-and-Set Lock Implementation]]

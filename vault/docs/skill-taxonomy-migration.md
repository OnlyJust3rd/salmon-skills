---
type: "docs-note"
title: "Skill Taxonomy Migration"
schema-version: "v1.0"
scope: "vault"
tags:
  - docs
  - migration
---

# Skill Taxonomy Migration

This manifest records path-only taxonomy migrations. Taxonomy-like frontmatter fields are intentionally not introduced.

## Digital Media Domain Rename

This refinement renames the top-level `creative-media` domain to `digital-media` while preserving the existing subdomain layout.

| Current path | Target path | Notes |
| --- | --- | --- |
| `skills/creative-media/*` | `skills/digital-media/*` | renamed domain |

## Recursive Computing Taxonomy Refinement

This refinement cleans up clear misplacements inside `skills/computing` while preserving existing skill names, competencies, microskills, and path-only classification.

| Current path | Target path | Notes |
| --- | --- | --- |
| `skills/computing/hardware-embedded/electronics-and-computer-architecture/{amplifier-design,circuit-analysis,circuit-prototyping,electronic-measurement,filter-design,hardware-troubleshooting,laboratory-equipment-operation,pcb-design,semiconductor-device-operation}` | `skills/computing/hardware-embedded/electronics/*` | electronics subarea |
| `skills/computing/hardware-embedded/electronics-and-computer-architecture/{bus-drivers-registers-and-tri-state,combinational-logic-design,digital-circuit-construction,fpga-implementation,logic-families,logic-fundamentals,sequential-logic-design,verilog-hdl-modeling}` | `skills/computing/hardware-embedded/digital-logic/*` | digital logic subarea |
| `skills/computing/hardware-embedded/electronics-and-computer-architecture/{computer-arithmetic,control-unit-design,machine-instruction,memory-hierarchy,number-representation,pipelined-architecture,processor-architecture,processor-datapath,processor-design}` | `skills/computing/hardware-embedded/computer-architecture/*` | computer architecture subarea |
| `skills/computing/hardware-embedded/electronics-and-computer-architecture/{avr-microcontroller-architecture,embedded-system-creation,embedded-system-interfacing,embedded-systems,emulator-usage,input-output-interfacing,microcontroller-interfacing,proteus-8-simulation}` | `skills/computing/hardware-embedded/embedded-systems/*` | embedded systems subarea |
| `skills/computing/software-engineering/programming-languages/{avr-communication-programming,avr-peripheral-programming,bare-metal-c-programming}` | `skills/computing/hardware-embedded/embedded-programming/*` | embedded programming subarea |
| `skills/computing/hardware-embedded/electronics-and-computer-architecture/digital-fabrication` | `skills/digital-media/design-fabrication/digital-fabrication` | clear digital media exit |
| `skills/computing/hardware-embedded/electronics-and-computer-architecture/digital-image-processing` | `skills/digital-media/computer-graphics/digital-image-processing` | clear digital media exit |
| `skills/computing/computer-science/algorithms/rasterization-algorithms` | `skills/digital-media/computer-graphics/rasterization-algorithms` | clear digital media exit |
| `skills/computing/software-engineering/programming-languages/shader-programming` | `skills/digital-media/computer-graphics/shader-programming` | clear digital media exit |
| `skills/computing/systems-infrastructure/networking/game-networking` | `skills/digital-media/game-development/game-networking` | clear game development exit |
| `skills/computing/hardware-embedded/electronics-and-computer-architecture/{robotics,robotic-system,evolutional-robotics,edge-computing}` | `skills/computing/hardware-embedded/robotics-iot/*` | robotics and IoT subarea |
| `skills/computing/hardware-embedded/electronics-and-computer-architecture/logical-reasoning` | `skills/mathematics/discrete-math/logical-reasoning` | logic/discrete math exit |
| `skills/computing/data-ai/data-engineering-platforms/data-link-layer` | `skills/computing/systems-infrastructure/networking/network-foundations/data-link-layer` | networking layer |
| `skills/computing/computer-science/algorithms/routing-algorithms` | `skills/computing/systems-infrastructure/networking/routing-switching/routing-algorithms` | networking algorithms |
| `skills/computing/computer-science/algorithms/parallel-algorithm` | `skills/computing/systems-infrastructure/compute-runtime/high-performance-computing/parallel-algorithm` | HPC algorithm design |
| `skills/computing/computer-science/algorithms/asymmetric-algorithm-mechanics` | `skills/computing/security-privacy/cybersecurity/asymmetric-algorithm-mechanics` | cryptography/security |
| legacy systems infrastructure platform bucket for `linux-system` and `shell-scripting` | `skills/computing/systems-infrastructure/system-administration/*` | system administration |
| legacy systems infrastructure platform bucket for `system-virtualization` | `skills/computing/systems-infrastructure/compute-runtime/system-virtualization` | compute runtime |
| `skills/computing/systems-infrastructure/endpoint-administration` | `skills/computing/systems-infrastructure/system-administration/endpoint-administration` | system administration |
| legacy systems infrastructure platform bucket for `infrastructure-alert` | `skills/computing/systems-infrastructure/operations-reliability/alerting-incident-response/infrastructure-alert` | alerting and incident response |
| legacy systems infrastructure platform bucket for `system-monitoring` | `skills/computing/systems-infrastructure/operations-reliability/observability/system-monitoring` | observability |
| legacy systems infrastructure platform bucket for `security-monitoring` | `skills/computing/systems-infrastructure/operations-reliability/security-monitoring` | security monitoring |
| `skills/computing/systems-infrastructure/it-service-management` | `skills/computing/systems-infrastructure/operations-reliability/service-management/it-service-management` | service management |

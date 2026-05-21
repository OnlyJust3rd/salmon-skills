---
type: "medium"
title: "Design Rule Check (DRC) in PCB Design"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/hardware-embedded/electronics-embedded/pcb-design/microskills/design-rule-check|design-rule-check]]"
---
# Design Rule Check (DRC) in PCB Design

In the journey of creating a Printed Circuit Board (PCB), several crucial steps ensure that your design can actually be manufactured and will function as intended. One such vital step, often performed towards the end of the design process, is the **Design Rule Check (DRC)**.

## What is a Design Rule Check (DRC)?

A Design Rule Check (DRC) is an automated process within PCB design software that verifies if your layout adheres to a set of predefined rules. These rules are not arbitrary; they are dictated by the capabilities and constraints of the specific PCB manufacturer you intend to use. Think of it as a quality assurance step that catches potential manufacturing issues *before* you send your design off to be fabricated.

The primary goal of DRC is to ensure **manufacturability and reliability**. By checking against these rules, you prevent common problems like:

*   **Short circuits:** Traces that are too close and could touch.
*   **Open circuits:** Traces that are too thin and might break.
*   **Soldering issues:** Pads that are too small or too far apart.
*   **Signal integrity problems:** Unwanted coupling between signals due to proximity.

## Why is DRC Important?

Failing to perform a thorough DRC can lead to significant problems:

*   **Costly re-spins:** If the manufacturer finds violations, you'll likely have to pay for a new set of PCBs.
*   **Non-functional boards:** Severe violations can prevent the board from working at all.
*   **Time delays:** Redesigning and reordering PCBs can significantly extend your project timeline.
*   **Reputational damage:** Consistently delivering problematic designs can harm your credibility.

## Common Design Rules Checked by DRC

While specific rules vary by manufacturer and board complexity, here are some of the most common design rules that a DRC process checks:

| Rule Category         | Description                                                                                                          | Example Violation                                                                                                        |
| :-------------------- | :------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------- |
| **Trace Width**       | Minimum and maximum allowed width for signal traces. Important for current carrying capacity and signal integrity.      | A trace designed to carry significant current is too narrow.                                                               |
| **Trace Spacing**     | Minimum distance allowed between two adjacent traces. Prevents shorts.                                               | Two signal traces are placed too close together.                                                                         |
| **Via Size**          | Minimum and maximum diameter for vias (plated through-holes connecting layers). Affects current capacity and manufacturability. | A via is too small to be reliably plated.                                                                                |
| **Pad Size/Spacing**  | Minimum and maximum size of component pads and the minimum distance between them. Crucial for soldering.             | The spacing between two adjacent pins on a component is smaller than the minimum required for automated soldering.         |
| **Clearance**         | Minimum distance between a trace/pad and other elements like copper pours, other traces, or board edge.              | A trace runs too close to the edge of a copper pour.                                                                     |
| **Drill Size**        | Minimum and maximum diameter for drilled holes (vias, mounting holes).                                               | A mounting hole is designed to be too small for standard hardware.                                                       |
| **Annular Ring**      | The copper area around a drilled hole (via or component pin). Ensures a good connection and prevents breakout.       | The copper pad around a via is too small, and the drill will go through the pad.                                         |
| **Copper-to-Edge**    | Minimum distance from any copper feature to the edge of the PCB.                                                     | A signal trace is too close to the physical edge of the board, potentially leading to damage during routing or handling. |
| **Layer Control**     | Rules related to specific layers, such as ensuring power planes are properly defined or silkscreen doesn't overlap pads. | Silkscreen text is placed directly over a component pad, which would prevent it from being soldered.                    |

## How to Perform a Design Rule Check

The process of running a DRC is standard across most PCB design software packages (like Altium Designer, KiCad, Eagle, OrCAD, etc.):

1.  **Configure the Design Rules:** Before running the check, you need to input the specific design rules provided by your chosen PCB manufacturer. This is usually done in a dedicated "Design Rules" or "DRC Setup" section of your software. You will typically enter values for minimum trace width, minimum trace spacing, minimum drill size, etc.
2.  **Run the DRC:** Once the rules are configured, you initiate the DRC from a menu option (often found under "Tools" or "Design" menus).
3.  **Review the Results:** The software will analyze your entire PCB layout against the defined rules. It generates a report or visually highlights any violations directly on your design.
4.  **Fix Violations:** This is the most critical part. You must systematically go through each reported violation, understand the cause, and make the necessary adjustments to your layout to correct it.
5.  **Re-run DRC:** After fixing violations, you should re-run the DRC to ensure all issues have been resolved. Continue this cycle until the DRC report shows zero violations.

## Practical Tip

Always obtain the **exact manufacturing design rules** from your PCB fabricator *before* you start your layout. Most manufacturers provide these rules in a downloadable file format (e.g., `.drc` or `.rul`) that can often be directly imported into your PCB design software. This saves you the guesswork and ensures your design is tailored for their specific capabilities.

By diligently performing and addressing Design Rule Checks, you significantly increase the likelihood of a successful PCB fabrication and a functional final product. It's a non-negotiable step in professional PCB design.

## Supports

- [[skills/hardware-embedded/electronics-embedded/pcb-design/microskills/design-rule-check|Design Rule Check]]

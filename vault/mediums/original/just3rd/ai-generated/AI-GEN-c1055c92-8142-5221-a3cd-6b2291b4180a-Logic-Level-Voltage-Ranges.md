---
type: "medium"
title: "Logic Level Voltage Ranges"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/hardware-embedded/digital-logic/logic-families/microskills/logic-level-voltage-ranges|logic-level-voltage-ranges]]"
learning-time-in-minutes: 4
---
# Logic Level Voltage Ranges

Understanding the voltage levels that represent logic HIGH and logic LOW is fundamental to working with different digital logic families. These voltage ranges are not universal and vary between technologies like Transistor-Transistor Logic (TTL) and Complementary Metal-Oxide-Semiconductor (CMOS). This lesson focuses on recalling these specific voltage ranges for TTL and CMOS.

## Why Voltage Levels Matter

Digital circuits interpret voltage. A voltage within a certain range is recognized as a logic HIGH (typically representing a binary '1'), and a voltage within another range is recognized as a logic LOW (typically representing a binary '0').

If the voltage supplied to an input pin falls outside of these defined ranges, or is too close to the boundary, the circuit might misinterpret the logic state, leading to unpredictable behavior or outright failure. This is especially critical when interfacing different logic families, as their HIGH and LOW voltage definitions may not perfectly overlap.

## TTL (Transistor-Transistor Logic) Voltage Levels

TTL is an older but still relevant logic family. It uses bipolar junction transistors for its switching elements.

*   **Logic LOW (Input/Output):** For a TTL input to be reliably recognized as a logic LOW, the voltage should be **less than or equal to 0.8 volts (V)**. A TTL output that is driving a logic LOW will typically output a voltage of **0.0 V to 0.4 V**.

*   **Logic HIGH (Input/Output):** For a TTL input to be reliably recognized as a logic HIGH, the voltage should be **greater than or equal to 2.0 volts (V)**. A TTL output that is driving a logic HIGH will typically output a voltage of **2.4 V to 5.0 V** (though often closer to 3.5V-5V depending on the specific TTL sub-family and load).

**Important Note:** There's a "forbidden" region between 0.8V and 2.0V for TTL inputs. Voltages in this range are considered undefined and can cause unpredictable behavior.

## CMOS (Complementary Metal-Oxide-Semiconductor) Voltage Levels

CMOS is the dominant logic family today due to its low power consumption and high noise immunity. It uses MOSFETs for its switching elements. CMOS logic levels are often more flexible and depend heavily on the power supply voltage ($V_{DD}$). We'll consider a common $V_{DD}$ of 5V for typical CMOS devices.

*   **Logic LOW (Input/Output):** For a CMOS input to be reliably recognized as a logic LOW (with $V_{DD} = 5V$), the voltage should be **less than or equal to 1.5 volts (V)**. A CMOS output that is driving a logic LOW will typically output a voltage close to **0 V**.

*   **Logic HIGH (Input/Output):** For a CMOS input to be reliably recognized as a logic HIGH (with $V_{DD} = 5V$), the voltage should be **greater than or equal to 3.5 volts (V)**. A CMOS output that is driving a logic HIGH will typically output a voltage close to **$V_{DD}$** (e.g., 5V).

**Important Note:** CMOS logic has a more generous "forbidden" or undefined region between the LOW and HIGH thresholds. However, operating in this region for extended periods can increase power consumption and reduce noise immunity.

### CMOS and $V_{DD}$ Variability

It's crucial to remember that CMOS logic levels are relative to their power supply voltage, $V_{DD}$. The exact thresholds can vary slightly based on the specific CMOS family (e.g., HC, HCT, AC, LV) and the operating $V_{DD}$. For instance, with a $V_{DD}$ of 3.3V:

*   Logic LOW might be $\le$ 0.8V
*   Logic HIGH might be $\ge$ 2.1V

Always consult the datasheet for the specific CMOS device you are using for precise voltage level specifications.

## Summary Table

Here's a quick reference table for common 5V TTL and CMOS logic levels:

| Logic Family | Logic State | Input Voltage Threshold (Max LOW / Min HIGH) | Output Voltage Range (Typical) |
| :----------- | :---------- | :------------------------------------------- | :----------------------------- |
| TTL          | LOW         | $\le$ 0.8V                                   | 0.0V - 0.4V                    |
| TTL          | HIGH        | $\ge$ 2.0V                                   | 2.4V - 5.0V                    |
| CMOS (5V)    | LOW         | $\le$ 1.5V                                   | $\approx$ 0V                   |
| CMOS (5V)    | HIGH        | $\ge$ 3.5V                                   | $\approx$ 5V ($V_{DD}$)        |

This knowledge is key to understanding how digital signals are represented and how different logic families communicate.

## Supports

- [[skills/computing/hardware-embedded/digital-logic/logic-families/microskills/logic-level-voltage-ranges|Logic Level Voltage Ranges]]

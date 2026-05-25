---
type: "medium"
title: "Power Supply Verification"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/hardware-embedded/electronics/hardware-troubleshooting/microskills/power-supply-verification|power-supply-verification]]"
learning-time-in-minutes: 5
---
# Power Supply Verification

This lesson focuses on verifying the functionality of a power supply using standard laboratory equipment. This is a critical step in diagnosing hardware issues and ensuring that your electronic circuits are receiving the correct power.

## Why Verify a Power Supply?

A faulty power supply can cause a wide range of problems, from intermittent glitches to complete device failure. Before diving into complex circuit analysis, it's essential to confirm that the power supply is operating as expected. This means checking if it's providing the correct voltage and if its output is stable.

## Equipment Needed

For power supply verification, you'll typically need:

*   **Digital Multimeter (DMM):** To measure voltage and current.
*   **Oscilloscope:** To visualize the voltage output and check for noise or ripple.
*   **Electronic Load (optional but recommended):** To simulate different load conditions and see how the power supply performs under stress.

## Key Concepts: Voltage and Current

*   **Voltage (V):** The electrical potential difference that drives current. Power supplies are rated for a specific output voltage (e.g., 5V, 12V).
*   **Current (A or mA):** The flow of electrical charge. Power supplies have a maximum current they can safely deliver.
*   **Ripple:** Small AC voltage variations superimposed on the DC output of a power supply. Excessive ripple indicates poor filtering and can affect sensitive components.

## Steps for Power Supply Verification

### 1. Visual Inspection

Before powering anything on, perform a visual check of the power supply unit and its associated wiring. Look for:

*   Burn marks or discoloration on the unit.
*   Loose or damaged connectors.
*   Swollen or leaking capacitors (if visible).
*   Damaged insulation on wires.

### 2. Measuring DC Voltage (Using a DMM)

This is the most fundamental test.

**When to Use:** To confirm the primary output voltage of the power supply is within its specified range.

**Steps:**

1.  **Identify the Power Supply Connectors:** Locate the positive (+) and negative (-) terminals or output wires of the power supply. If it's an internal power supply (like in a computer), you might need to consult its documentation for pinouts.
2.  **Set up the DMM:**
    *   Turn the DMM dial to the DC Voltage (VDC or $\stackrel{---}{V}$) setting.
    *   Choose a voltage range that is higher than the expected output voltage (e.g., if you expect 5V, select the 20V range).
    *   Insert the red probe into the V $\Omega$ mA or V port and the black probe into the COM port.
3.  **Connect the Probes:**
    *   With the power supply **turned ON** and supplying power to a load (or a dummy load if testing without a specific circuit), carefully touch the red probe to the positive terminal/wire and the black probe to the negative terminal/wire.
    *   If testing a circuit board, you might probe test points labelled for voltage.
4.  **Read the Measurement:** The DMM display will show the measured DC voltage.

**Example:** You are testing a 5V power supply. You set your DMM to DC Volts, 20V range. You connect the probes and read 5.12V. This is generally acceptable as most power supplies have a tolerance (e.g., +/- 5%).

### 3. Measuring Voltage Under Load (Using DMM and Optional Electronic Load)

It's crucial to see how the voltage holds up when the power supply is under demand.

**When to Use:** To determine if the power supply can maintain its output voltage when current is being drawn.

**Steps:**

1.  **Connect the Electronic Load:** Connect the electronic load to the power supply's output terminals. Configure the electronic load to draw a specific amount of current (e.g., 50% or 75% of the power supply's rated capacity).
2.  **Power ON the Supply:** Turn on the power supply.
3.  **Measure Voltage with DMM:** Use the DMM as described in the previous section to measure the voltage across the power supply's output terminals.
4.  **Observe Changes:** Note how much the voltage drops compared to the no-load measurement. A significant drop indicates the power supply is struggling to maintain its voltage under load.

**Example:** The same 5V power supply, when loaded to 75% of its capacity, now reads 4.85V. This might still be acceptable depending on the circuit's requirements, but it's a good indication that the supply is nearing its limit.

### 4. Checking for Ripple (Using an Oscilloscope)

Ripple is an AC component on a DC output. Excessive ripple can cause erratic behavior in sensitive circuits.

**When to Use:** To identify AC noise on the DC output, which is often a sign of a failing or underperforming power supply.

**Steps:**

1.  **Set up the Oscilloscope:**
    *   Connect the oscilloscope probe to the power supply's output. It's common to use a 10x probe.
    *   Set the oscilloscope to DC coupling.
    *   Set the vertical scale (Volts/Division) to a sensitive range (e.g., millivolts per division).
    *   Set the horizontal scale (Time/Division) to see a few cycles of the ripple waveform.
    *   Turn on the power supply.
2.  **Observe the Waveform:** Look for a clean, flat DC line. Any significant wavy or jagged patterns superimposed on the line represent ripple.
3.  **Measure Ripple Voltage:** Use the oscilloscope's measurement functions to quantify the peak-to-peak ripple voltage.

**Example:** On the oscilloscope, you see a relatively flat line with a small, low-amplitude sine wave on top. This indicates low ripple. If you see large, erratic spikes, it's a cause for concern.

## Common Mistakes and Pitfalls

*   **Incorrect DMM Range:** Setting the DMM to too low a voltage range can damage the meter or give an inaccurate reading. Always start with a higher range.
*   **Touching Probes to Wrong Terminals:** This can cause short circuits, potentially damaging the power supply, the circuit, or the meter.
*   **Measuring AC Voltage for DC Supply:** Ensure your DMM is set to DC voltage.
*   **Not Testing Under Load:** A power supply might appear fine with no load but fail when any significant current is drawn.
*   **Ignoring Ripple:** Even if the DC voltage is correct, high ripple can be a hidden cause of problems.

By systematically verifying your power supply's voltage output and stability, you can effectively troubleshoot many hardware issues and ensure your projects have a solid foundation.

## Supports

- [[skills/computing/hardware-embedded/electronics/hardware-troubleshooting/microskills/power-supply-verification|Power Supply Verification]]
- [[skills/computing/hardware-embedded/electronics/laboratory-equipment-operation/microskills/power-supply-verification|Power Supply Verification]]

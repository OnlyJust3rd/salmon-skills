---
type: "medium"
title: "Digital Multimeter Operation: Measuring Voltage and Current"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/hardware-embedded/electronics-embedded/electronic-measurement/microskills/digital-multimeter-operation|Digital Multimeter Operation]]"
---
# Digital Multimeter Operation: Measuring Voltage and Current

This lesson will guide you through the practical operation of a digital multimeter (DMM) to measure fundamental electrical values: voltage and current. Successfully completing this will enable you to accurately record these values in simple circuits.

## Understanding Your Digital Multimeter

A digital multimeter is an essential tool for anyone working with electronics. It combines several measurement functions into a single device. Key components you'll interact with are:

*   **Display:** Shows the measured value numerically.
*   **Selection Dial/Buttons:** Used to choose the measurement function (Voltage, Current, Resistance, etc.) and the range.
*   **Input Jacks (Ports):** Where you plug in the test leads. Typically, you'll find:
    *   **COM (Common):** The negative or ground reference for all measurements.
    *   **VΩmA:** For measuring voltage, resistance, and low current (milliamps).
    *   **10A (or similar):** For measuring higher current (amperes).

### Test Leads

*   **Red Lead:** Connected to the positive side of the circuit or where the current is flowing from.
*   **Black Lead:** Connected to the negative side of the circuit or the common/ground point.

## Measuring Voltage

Voltage is the electrical potential difference between two points in a circuit. When measuring voltage, you connect the multimeter **in parallel** with the component or points across which you want to measure the voltage.

**When to Measure Voltage:**

*   To verify power supply output.
*   To check if a component is receiving the correct voltage.
*   To troubleshoot power-related issues.

**Steps to Measure Voltage:**

1.  **Identify the Voltage Type:** Determine if you are measuring AC (Alternating Current) voltage (like from a wall outlet) or DC (Direct Current) voltage (like from a battery). Your DMM will have separate settings for V~ (AC) and V-- (DC).
2.  **Set the DMM:**
    *   Turn the selection dial to the appropriate voltage setting (V~ or V--).
    *   Select an appropriate range. If you're unsure of the voltage, start with the highest range and work your way down. Many DMMs have an "Auto Range" feature that selects the best range automatically.
    *   Plug the **black test lead** into the **COM** jack.
    *   Plug the **red test lead** into the **VΩmA** jack.
3.  **Connect to the Circuit:**
    *   Touch the **black test lead** to the negative or ground point of the component or circuit section.
    *   Touch the **red test lead** to the positive point.
    *   *Important:* The order of connecting leads doesn't typically matter for voltage measurements (as long as you have the correct polarity for DC, otherwise the reading will be negative).

**Worked Example (DC Voltage):**

Let's say you have a simple circuit with a 9V battery powering an LED through a resistor. You want to measure the voltage across the battery.

1.  **Type:** DC voltage.
2.  **DMM Setup:**
    *   Dial to V--.
    *   If not auto-ranging, select a range higher than 9V, e.g., 20V.
    *   Black lead to COM.
    *   Red lead to VΩmA.
3.  **Connection:**
    *   Touch the black lead to the negative terminal of the 9V battery.
    *   Touch the red lead to the positive terminal of the 9V battery.
4.  **Reading:** The display should show a value close to 9.0V. If it shows -9.0V, you've reversed the leads for DC.

## Measuring Current

Current is the flow of electrical charge. Measuring current is different from measuring voltage. You must connect the multimeter **in series** with the circuit, meaning the current must flow *through* the multimeter.

**When to Measure Current:**

*   To determine how much power a device is consuming.
*   To diagnose circuits where a component might be drawing too much or too little current.

**WARNING: Measuring Current Incorrectly can damage your multimeter or the circuit!**

**Steps to Measure Current:**

1.  **Identify the Current Type:** Similar to voltage, determine if you're measuring AC or DC current. Your DMM will have settings for A~ (AC Amps) and A-- (DC Amps).
2.  **Set the DMM:**
    *   Turn the selection dial to the appropriate current setting (A~ or A--).
    *   **Crucially, select the correct jack for your expected current.**
        *   If you expect current in the milliamp (mA) range, use the **VΩmA** jack for the red lead.
        *   If you expect current in the Amp (A) range (e.g., more than a few hundred mA), use the **10A** jack for the red lead. **If you use the wrong jack, you can blow a fuse in the multimeter or damage it.**
    *   Plug the **black test lead** into the **COM** jack.
    *   Plug the **red test lead** into the appropriate current jack (VΩmA for low current, 10A for high current).
    *   Select an appropriate range. Again, if unsure, start with the highest range and work down.
3.  **Connect to the Circuit:** This is the most critical step for current measurement.
    *   **Break the circuit** at the point where you want to measure the current. This means disconnecting a wire or a component lead.
    *   Connect the **red test lead** to the point that is *closer to the positive side* of the power source.
    *   Connect the **black test lead** to the point that is *closer to the negative side* of the power source, effectively completing the circuit through the multimeter. The current will now flow through your DMM.

**Worked Example (DC Current):**

Let's measure the current flowing from a 5V power supply to a small motor. You estimate the motor will draw about 100mA.

1.  **Type:** DC current.
2.  **DMM Setup:**
    *   Dial to A--.
    *   Since the estimate is 100mA, and this is within the mA range, use the **VΩmA** jack for the red lead. If the estimate was 2A, you'd use the 10A jack.
    *   Set the range to 200mA (or the next highest mA range available).
    *   Black lead to COM.
    *   Red lead to VΩmA.
3.  **Connection:**
    *   Disconnect the positive wire from the 5V power supply that goes to the motor.
    *   Connect the **red lead** of the DMM to the positive terminal of the power supply (where the wire was removed from).
    *   Connect the **black lead** of the DMM to the end of the wire that was disconnected from the power supply (this wire now connects to the motor).
4.  **Reading:** The display should show a value indicating the current drawn by the motor, likely around 0.1A (which is 100mA) or a similar figure depending on the motor's load.

## Recording Your Measurements

When recording your measurements, always include:

*   The value measured.
*   The unit of measurement (V for Volts, mV for millivolts, A for Amperes, mA for milliamperes).
*   Whether it was AC or DC.
*   The point in the circuit where the measurement was taken.

**Example Recording:**

*   "Battery voltage: 9.15V DC across battery terminals."
*   "Current to motor: 98.5mA DC, measured in series with the positive lead from the power supply."

By mastering these fundamental operations, you've taken a significant step towards understanding and troubleshooting electronic circuits.

## Supports

- [[skills/hardware-embedded/electronics-embedded/electronic-measurement/microskills/digital-multimeter-operation|Digital Multimeter Operation]]

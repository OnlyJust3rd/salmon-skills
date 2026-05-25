---
type: "medium"
title: "Reading a Digital Multimeter"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/hardware-embedded/electronics/electronic-measurement/microskills/digital-multimeter-reading-explanation|digital-multimeter-reading-explanation]]"
learning-time-in-minutes: 4
---
# Reading a Digital Multimeter

This lesson will guide you through understanding and interpreting readings from a digital multimeter (DMM). A DMM is a fundamental tool in electronic measurement, allowing us to measure various electrical properties like voltage, current, and resistance.

## What is a Digital Multimeter?

A digital multimeter is an electronic instrument that combines several measurement functions into one unit. It displays readings numerically on a digital screen, making it easier and more precise to interpret than older analog meters.

## Key Functions and How to Read Them

A typical DMM has a selector dial or buttons to choose the measurement function and range. Here are the common functions and how to read their displays:

### 1. Voltage Measurement (V)

*   **What it measures:** The electrical potential difference between two points.
*   **Symbols:**
    *   **V~ or VAC:** Alternating Current (AC) Voltage (e.g., from wall outlets).
    *   **V- or VDC:** Direct Current (DC) Voltage (e.g., from batteries).
*   **How to read:**
    *   Select the appropriate voltage type (AC or DC) and a range that you expect the voltage to be within. It's often best to start with a higher range and decrease it if necessary for better precision.
    *   Connect the probes: The **red probe** connects to the positive (+) terminal and the **black probe** connects to the common (COM) terminal of the circuit or power source you are measuring.
    *   **Example Display:**
        *   `12.34`
        *   `0.567`
        *   `-5.12` (Indicates polarity, meaning the red probe is connected to a lower potential than the black probe, or you've reversed the probes for DC).
    *   **Interpreting:** If the display shows `12.34`, it means you are measuring 12.34 Volts. If it shows `0.567`, it's 0.567 Volts. A negative sign (`-`) on a DC reading indicates the probes are reversed.

### 2. Current Measurement (A)

*   **What it measures:** The flow of electrical charge.
*   **Symbols:**
    *   **A~ or AAC:** Alternating Current (AC) Amperes.
    *   **A- or ADC:** Direct Current (DC) Amperes.
*   **Important Note:** Measuring current requires breaking the circuit and inserting the multimeter **in series**. This is different from voltage measurement, which is done **in parallel**. **Incorrectly connecting the DMM for current measurement can damage the meter or the circuit.**
*   **How to read:**
    *   Select the appropriate current type (AC or DC) and a suitable range. Current ranges are often much smaller than voltage ranges. You might see separate jacks for measuring small currents (e.g., mA) and larger currents (e.g., 10A). Ensure your probes are in the correct jacks for the expected current.
    *   Connect the probes: The **red probe** is connected in series with the circuit, and the **black probe** connects to the common (COM) terminal of the meter.
    *   **Example Display:**
        *   `250. mA` (250 milliamperes)
        *   `1.56` (1.56 Amperes)
        *   `0.003` (0.003 Amperes, or 3 milliamperes)
    *   **Interpreting:** A display of `250. mA` means 250 milliamps are flowing. If the display shows `1.56`, it's 1.56 Amps. Some meters might show `µA` for microamperes.

### 3. Resistance Measurement (Ω)

*   **What it measures:** The opposition to the flow of current. Measured in Ohms (Ω).
*   **Symbol:** **Ω** (Omega)
*   **How to read:**
    *   Ensure the circuit you are measuring is **powered off** and **discharged**. Measuring resistance in a live circuit can give false readings and damage the meter.
    *   Select the resistance function and a suitable range. Start with a higher range and work down if needed.
    *   Connect the probes across the component you want to measure. Polarity does not matter for resistance measurement.
    *   **Example Display:**
        *   `10.5 kΩ` (10.5 kiloOhms)
        *   `470` (470 Ohms)
        *   `OL` or `1.` (Over Limit, meaning the resistance is higher than the selected range or the circuit is open).
    *   **Interpreting:** `10.5 kΩ` means 10,500 Ohms. `470` means 470 Ohms. `OL` indicates a very high resistance or an open circuit.

## Important Considerations

*   **Ranges:** Always ensure your DMM is set to an appropriate range for the measurement. If you are unsure, start with the highest range and decrease it to get a more precise reading.
*   **Polarity:** For DC voltage and current, a negative sign indicates reversed probe connections.
*   **Probe Jacks:** Pay close attention to which input jacks your probes are plugged into, especially for current measurements.
*   **Battery Check:** Many DMMs have a battery test function. Low battery can lead to inaccurate readings.
*   **Continuity Test:** Most DMMs have a continuity mode (often indicated by a sound wave symbol). This beeps if there is a low-resistance path between the probes, useful for checking wires or fuses.

By understanding these basic functions and reading conventions, you can effectively use a digital multimeter to diagnose and measure electrical parameters in your projects.

## Supports

- [[skills/computing/hardware-embedded/electronics/electronic-measurement/microskills/digital-multimeter-reading-explanation|Digital Multimeter Reading Explanation]]

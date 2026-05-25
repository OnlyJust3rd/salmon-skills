---
type: "medium"
title: "Power Supply Verification"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/hardware-embedded/electronics/hardware-troubleshooting/microskills/power-supply-verification|power-supply-verification]]"
related-skills:
  - "[[skills/computing/hardware-embedded/electronics/hardware-troubleshooting/hardware-troubleshooting|hardware-troubleshooting]]"
learning-time-in-minutes: 5
---
# Power Supply Verification

In hardware troubleshooting, ensuring that the power supply is functioning correctly is a fundamental step. A stable and adequate power supply is the foundation for all other components to operate as expected. When troubleshooting hardware issues, an unstable or insufficient power supply can manifest as a wide range of problems, from intermittent device failures to complete system unresponsiveness. This lesson will guide you through understanding the importance of power supply verification and the basic steps involved.

## Why is Power Supply Verification Important?

The power supply unit (PSU) converts the alternating current (AC) from your wall outlet into direct current (DC) voltages that your computer and its components need. These DC voltages (commonly +12V, +5V, +3.3V, and -12V) are critical for the operation of every part of the system, including the CPU, motherboard, RAM, storage drives, and graphics card.

When a power supply is faulty, it can exhibit several issues:

*   **Insufficient Voltage:** If the PSU cannot deliver enough power, components may not boot up, or they might crash under load. For example, a graphics card requiring a lot of power might cause the system to shut down when playing games.
*   **Unstable Voltage:** Fluctuations or "noise" on the power lines can lead to data corruption, memory errors, or unexpected reboots. This is often the hardest to diagnose as it can be intermittent.
*   **Incorrect Voltage:** If the PSU outputs voltages outside of their acceptable tolerances, it can damage sensitive electronic components.
*   **Failure to Boot:** In severe cases, a completely failed PSU will prevent the system from powering on at all.

Verifying the power supply helps to isolate these issues and determine if the PSU is the root cause of the hardware problem.

## Basic Power Supply Verification Steps

Verifying a power supply typically involves checking the output voltages. This is usually done using a multimeter.

### Tools Needed

*   **Digital Multimeter (DMM):** Essential for measuring voltages.
*   **Screwdriver Set:** To open the computer case if necessary.
*   **Anti-static Wrist Strap:** To protect components from electrostatic discharge.

### Steps for Verification

**Important Safety Precaution:** Always unplug the computer from the wall outlet before opening the case and performing any internal checks.

1.  **Visual Inspection:**
    *   Open the computer case.
    *   Inspect the PSU for any visible signs of damage, such as bulging capacitors, burn marks, or leaking fluid.
    *   Check that all power cables are securely connected to the motherboard and any other components (like graphics cards or drives). Ensure they are the correct connectors.

2.  **Using a Multimeter to Check Voltages:**
    *   **Disconnect Power:** Ensure the computer is unplugged from the wall.
    *   **Prepare the PSU:** Gently pull out the PSU from the computer case. This makes it easier to access connectors. Alternatively, if you are comfortable and the PSU is accessible, you can check voltages while it's still installed, but be extremely careful not to touch any other components while the system is powered on.
    *   **Power On (Carefully):** **This step requires extreme caution as live voltage is present.**
        *   Plug the PSU's power cord back into the wall outlet.
        *   Turn on the PSU switch (if it has one).
        *   **If the PSU is installed in the computer:** You may need to short the green "PS_ON" wire to a black "Ground" wire on the 20-pin or 24-pin ATX connector to make the PSU fans spin and voltages appear without the motherboard needing to signal it. This is a more advanced step and requires care.
        *   **If the PSU is out of the case:** You can use a paperclip to bridge the green PS_ON wire to any black ground wire on the ATX connector to power on the PSU.
    *   **Set the Multimeter:** Set your digital multimeter to measure DC voltage (usually indicated by a "V" with a solid line and a dashed line above it, or "VDC"). Select a range slightly higher than the expected voltage (e.g., 20V for measuring +12V, +5V, +3.3V).
    *   **Measure Voltages:**
        *   Place the **black probe** of the multimeter on a **ground point**. This is typically a black wire on any of the PSU connectors, or a metal screw on the PSU itself if it's well-grounded.
        *   Carefully touch the **red probe** to the different voltage pins on the PSU connectors. The most common connectors are the 24-pin ATX connector (for the motherboard) and the 6-pin or 8-pin PCIe connector (for graphics cards).

        | Pin Color | Expected Voltage | Connector Types |
        | :-------- | :--------------- | :-------------- |
        | Orange    | +3.3V            | 24-pin ATX      |
        | Red       | +5V              | 24-pin ATX, Molex |
        | Yellow    | +12V             | 24-pin ATX, PCIe, SATA |
        | Blue      | -12V             | 24-pin ATX      |
        | Purple    | +5V Standby      | 24-pin ATX      |

    *   **Record Readings:** Note down the voltage readings for each pin.

3.  **Interpreting the Readings:**
    *   **Tolerance:** Power supplies are not expected to deliver the exact voltage all the time. They have a tolerance, typically +/- 5% for most rails, and +/- 10% for the -12V rail.
        *   For +12V: Expected range is roughly +11.4V to +12.6V.
        *   For +5V: Expected range is roughly +4.75V to +5.25V.
        *   For +3.3V: Expected range is roughly +3.14V to +3.47V.
    *   **Out of Tolerance:** If any voltage reading falls significantly outside its acceptable range, the power supply is likely faulty and needs to be replaced.
    *   **No Voltage:** If you get no reading on a particular pin, the PSU is definitely not working correctly.

### Common Mistakes to Avoid

*   **Touching Live Components:** Always be aware of live voltage when the PSU is powered on. Never touch anything other than the probe tips to the connector pins or ground points.
*   **Incorrect Multimeter Settings:** Ensure your multimeter is set to DC voltage and the correct range.
*   **Poor Ground Connection:** A weak ground connection for the black probe can lead to inaccurate readings.
*   **Testing Under Load:** Basic voltage checks are done with the PSU idle. For more advanced troubleshooting, specialized testers can measure voltages under load, which is more indicative of real-world performance. However, for initial verification, idle voltage checks are a good starting point.

By systematically checking these voltages, you can quickly determine if the power supply is a potential cause of your hardware problems, saving you time and effort in troubleshooting other components.

## Supports

- [[skills/computing/hardware-embedded/electronics/hardware-troubleshooting/microskills/power-supply-verification|Power Supply Verification]]
- [[skills/computing/hardware-embedded/electronics/laboratory-equipment-operation/microskills/power-supply-verification|Power Supply Verification]]

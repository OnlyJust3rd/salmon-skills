---
type: "medium"
title: "Measuring Voltage with a Digital Multimeter"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/hardware-embedded/electronics-embedded/electronic-measurement/microskills/voltage-measurement|voltage-measurement]]"
---
# Measuring Voltage with a Digital Multimeter

This lesson focuses on the practical skill of accurately measuring voltage in electrical circuits using a digital multimeter (DMM). This is a fundamental step in understanding and troubleshooting electronic devices.

## Understanding Voltage

Voltage, often referred to as electrical potential difference, is the "push" that drives electric current through a circuit. It's measured in Volts (V). Think of it like water pressure in a pipe; higher pressure means water flows with more force. In a circuit, voltage is the force that pushes electrons to move.

There are two main types of voltage you'll encounter:

*   **DC (Direct Current) Voltage:** Found in batteries and most electronic devices. The voltage polarity remains constant.
*   **AC (Alternating Current) Voltage:** Found in wall outlets (mains power). The voltage polarity reverses periodically.

## The Digital Multimeter (DMM) for Voltage Measurement

A DMM is an essential tool for measuring electrical properties. For voltage measurement, we'll be using its voltmeter function.

### Key Components of a DMM for Voltage Measurement:

*   **Display:** Shows the measured voltage value.
*   **Selector Dial/Buttons:** Used to choose the measurement function (voltage, current, resistance) and the range.
*   **Input Jacks:** Where you plug in the test leads.
    *   **COM (Common):** Always the black test lead.
    *   **VΩmA (or similar):** For voltage, resistance, and sometimes low current measurements (red test lead).

### Test Leads:

*   **Black Lead:** Connects to the COM jack.
*   **Red Lead:** Connects to the VΩmA jack.

## Steps for Measuring Voltage

Measuring voltage requires careful attention to settings and connections to ensure safety and accuracy.

**Step 1: Identify the Type of Voltage**
Before you start, determine if you are measuring DC or AC voltage. This dictates the setting on your DMM. If unsure, start with the highest AC voltage range and work your way down, or consult circuit diagrams.

**Step 2: Set Up the DMM**

1.  **Plug in Test Leads:** Insert the black test lead into the **COM** jack. Insert the red test lead into the **VΩmA** (or V jack) on the DMM.
2.  **Select Voltage Function:** Turn the selector dial or press the appropriate button to the **V** symbol.
3.  **Select Voltage Type (DC or AC):**
    *   For DC voltage, select the **V** symbol with a **solid line** above a **dashed line** (\(V\frac{\text{---}}{\text{---}}\)) or **DCV**.
    *   For AC voltage, select the **V** symbol with a **sine wave** above it (\(V \sim\)) or **ACV**.
4.  **Select the Range:** This is crucial for accurate readings.
    *   **Auto-Ranging DMMs:** If your DMM has auto-ranging, it will automatically select the best range for your measurement.
    *   **Manual-Ranging DMMs:** You need to select a range that is *higher* than the expected voltage. If you expect around 5V, select the 10V range, not the 2V range. If your reading is "1" or "OL" (Over Limit), the voltage is too high for that range, and you need to select a higher range. Start with the highest range and decrease it for better precision if the reading is significantly lower than the selected range.

**Step 3: Connect the Test Leads to the Circuit**

*   **Safety First:** Ensure the circuit is powered ON if you are measuring operating voltage.
*   **Parallel Connection:** Voltage is always measured in *parallel* with the component or across the points you want to know the potential difference. This means the DMM is placed "across" the voltage source or component.
*   **Connect Red Lead:** Touch the tip of the red test lead to the **positive** side (higher potential) of the voltage source or component.
*   **Connect Black Lead:** Touch the tip of the black test lead to the **negative** side (lower potential) of the voltage source or component.

**Step 4: Read and Record the Measurement**

*   Observe the value displayed on the DMM.
*   Note the units (V for Volts, mV for millivolts, etc.).
*   If measuring DC voltage and you get a negative reading, it means your leads are reversed (red lead is on the negative side and black lead is on the positive side). This is usually not harmful but indicates incorrect polarity.
*   Record the value and units.

**Step 5: Disconnect the Test Leads**
Remove the test leads from the circuit. Turn off the DMM or set it to a safe setting (like OFF or resistance) to prevent accidental discharge or damage.

## Worked Example: Measuring Battery Voltage

Let's measure the voltage of a standard AA battery (which should be around 1.5V).

1.  **Identify Voltage Type:** A battery provides DC voltage.
2.  **Set Up DMM:**
    *   Plug red lead into VΩmA, black lead into COM.
    *   Turn dial to DC Voltage (\(V\frac{\text{---}}{\text{---}}\)).
    *   Select a range slightly higher than 1.5V, for example, the 2V range if available, or the next common range like 20V. Let's assume we have a 2V range.
3.  **Connect Test Leads:**
    *   Identify the positive (+) terminal (usually the raised nub) and the negative (-) terminal (the flat end) of the AA battery.
    *   Touch the **red** test lead to the **positive (+) terminal** of the battery.
    *   Touch the **black** test lead to the **negative (-) terminal** of the battery.
4.  **Read and Record:** The DMM display should show a value close to 1.5V, perhaps 1.52V or 1.48V depending on the battery's charge. Record this value.
5.  **Disconnect:** Remove the test leads from the battery.

## Common Mistakes and How to Avoid Them

*   **Incorrect Function Selected:** Measuring current using the voltage setting will likely blow a fuse in the DMM or give an incorrect reading. *Always double-check the selected function (V for Volts, not A for Amps).*
*   **Incorrect Range:**
    *   **Too Low:** Leads to an "OL" or "1" reading, indicating the voltage is too high for the selected range. *Start with a higher range or use auto-ranging.*
    *   **Too High:** Provides a less precise reading (e.g., 1.52V displayed as 1.5V on a 20V range versus 1.52V on a 2V range). *Select the lowest range that can safely accommodate the voltage for best precision.*
*   **Measuring in Series:** Voltage must be measured in parallel. Measuring in series will effectively break the circuit or give a false reading. *Remember: Voltage across, current through.*
*   **Touching Metal Parts of Leads:** Avoid touching the metal tips of the test leads when measuring live circuits. Hold the insulated handles. *Always hold by the insulated handles.*
*   **Not Checking Battery of DMM:** A low battery in the DMM can lead to inaccurate readings. *Check your DMM's battery indicator.*

By following these steps and being mindful of potential pitfalls, you can confidently and accurately measure voltage in various circuits.

## Supports

- [[skills/hardware-embedded/electronics-embedded/electronic-measurement/microskills/voltage-measurement|Voltage Measurement]]

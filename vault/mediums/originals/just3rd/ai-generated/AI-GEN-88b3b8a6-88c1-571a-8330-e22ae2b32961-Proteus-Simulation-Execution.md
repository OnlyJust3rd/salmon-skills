---
type: "medium"
title: "Executing Proteus Simulations"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/hardware-embedded/embedded-systems/proteus-8-simulation/microskills/proteus-simulation-execution|proteus-simulation-execution]]"
learning-time-in-minutes: 4
---
# Executing Proteus Simulations

This lesson focuses on the practical steps involved in running simulations within Proteus 8 to verify your digital circuit designs. Building upon the skills of circuit design, we will now learn how to bring those designs to life virtually and observe their behavior.

## The Simulation Button: Your Gateway to Virtual Circuits

Once you have completed designing your digital circuit in Proteus, the next crucial step is to execute a simulation. This process allows you to observe how your circuit functions under various input conditions without needing physical components. The core mechanism for this is the "Run" or "Play" button within the Proteus ISIS environment.

### Locating the Simulation Controls

The primary simulation controls are typically found in the toolbar at the top of the ISIS schematic window. Look for an icon that resembles a "Play" button (a right-pointing triangle). Adjacent to this, you will often find a "Stop" button (a square) and a "Pause" button (two vertical lines).

### Initiating a Simulation

1.  **Design Completion:** Ensure your circuit is fully wired and all components are placed correctly.
2.  **Locate the Play Button:** Find the "Play" button in the toolbar.
3.  **Click to Run:** Click the "Play" button. Proteus will then process your circuit design and begin the simulation.

### Observing Simulation Results

As the simulation runs, you will observe changes in the circuit diagram itself. For instance:

*   **Digital Signals:** Logic HIGH states are often represented by thick lines (e.g., red), while LOW states are thinner lines (e.g., blue). You'll see these lines change dynamically as the simulation progresses.
*   **Component Behavior:** LEDs might illuminate or extinguish, seven-segment displays will show numbers, and other output components will reflect the circuit's logical operations.
*   **Probes:** If you have placed voltage or logic probes, their indicators will update to show the real-time state of the connected points.

## Using the Logic Analyzer and Oscilloscope

For more detailed analysis of digital signals, Proteus provides virtual instruments like the Logic Analyzer and Oscilloscope. These tools are essential for verifying the timing and precise behavior of your sequential and combinational logic.

### The Logic Analyzer

The Logic Analyzer is ideal for observing multiple digital signals simultaneously over time. It provides a clear timeline of signal transitions.

**Steps to Use the Logic Analyzer:**

1.  **Place Logic Analyzer:** From the "Virtual Instruments" mode (usually a sideways "V" icon in the left-hand toolbar), select the Logic Analyzer and place it on your schematic.
2.  **Connect Probes:** Connect the input channels of the Logic Analyzer to the wires or output pins of the components whose signals you want to monitor.
3.  **Run Simulation:** Start the simulation as usual.
4.  **Open Logic Analyzer:** Double-click the Logic Analyzer icon on your schematic. A new window will open displaying the captured waveforms.
5.  **Analyze Waveforms:** Observe the timing diagrams. You can zoom in, pan, and measure time intervals between signal changes to verify that your circuit is operating as expected.

### The Oscilloscope

While the Logic Analyzer is excellent for digital signals, the Oscilloscope is more suited for observing analog signals or the precise voltage levels of digital signals.

**Steps to Use the Oscilloscope:**

1.  **Place Oscilloscope:** Select the Oscilloscope from the "Virtual Instruments" mode and place it on your schematic.
2.  **Connect Probes:** Connect the oscilloscope channels (e.g., CH1, CH2) to the points in your circuit you wish to examine.
3.  **Run Simulation:** Start the simulation.
4.  **Open Oscilloscope:** Double-click the Oscilloscope icon.
5.  **Adjust Settings:** The oscilloscope window will have controls to adjust the time base, vertical scale, and trigger settings to best display your signal.
6.  **Interpret Waveforms:** Observe the voltage levels and timing characteristics.

## Stopping and Resetting Simulations

### Stopping a Simulation

To halt a running simulation, simply click the "Stop" button (the square icon) in the toolbar. This will immediately cease the simulation process.

### Resetting the Simulation State

Sometimes, you may want to reset the simulation to its initial state after stopping it. This clears any captured data and returns all components to their power-on default states. To do this:

1.  **Stop the Simulation:** Click the "Stop" button.
2.  **Click the Play Button Again:** Clicking the "Play" button after stopping effectively resets and restarts the simulation.

By mastering these simulation execution steps, you gain the ability to thoroughly test and debug your digital circuit designs within Proteus, ensuring their correct logical behavior before any physical implementation.

## Supports

- [[skills/computing/hardware-embedded/embedded-systems/proteus-8-simulation/microskills/proteus-simulation-execution|Proteus Simulation Execution]]

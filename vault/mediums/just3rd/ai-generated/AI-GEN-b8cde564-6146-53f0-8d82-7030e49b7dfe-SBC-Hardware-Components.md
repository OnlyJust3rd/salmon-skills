---
type: "medium"
title: "Single Board Computer (SBC) Hardware Components"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/hardware-embedded/electronics-embedded/embedded-systems/microskills/sbc-hardware-components|sbc-hardware-components]]"
---
# Single Board Computer (SBC) Hardware Components

This lesson focuses on the fundamental hardware components that make up a Single Board Computer (SBC), a common choice in embedded systems. Understanding these parts is crucial for grasping how an SBC processes information and interacts with its environment.

## What is a Single Board Computer?

A Single Board Computer (SBC) is a complete computer built on a single circuit board. It includes a microprocessor, memory, input/output (I/O) interfaces, and often other components integrated into one compact unit. SBCs are popular in embedded systems due to their small size, low power consumption, and cost-effectiveness. Think of a Raspberry Pi – that's a prime example of an SBC.

## Core Components of an SBC

Let's break down the essential hardware components you'll find on most SBCs:

### 1. Central Processing Unit (CPU)

*   **Concept:** The CPU is the "brain" of the SBC. It executes instructions, performs calculations, and manages the flow of data.
*   **Function:** It fetches instructions from memory, decodes them, and then executes them. The speed and power of the CPU directly impact the overall performance of the SBC.
*   **Key Aspects:**
    *   **Clock Speed:** Measured in Hertz (Hz), typically Gigahertz (GHz) for modern SBCs. Higher clock speed means faster processing.
    *   **Architecture:** Common architectures include ARM, which is prevalent in many low-power SBCs like the Raspberry Pi.
    *   **Cores:** Most modern SBCs have multi-core processors, allowing them to handle multiple tasks simultaneously.

### 2. Memory

Memory on an SBC serves two primary purposes: storing programs and storing data.

*   **RAM (Random Access Memory):**
    *   **Concept:** RAM is the SBC's short-term working memory. It's where programs and data are loaded when the SBC is running.
    *   **Function:** It allows the CPU to quickly access and modify data needed for active operations. RAM is volatile, meaning its contents are lost when the power is turned off.
    *   **Key Aspects:**
        *   **Capacity:** Measured in Gigabytes (GB). More RAM allows for running more complex programs and handling larger datasets.
        *   **Type:** DDR3, DDR4, etc. This refers to the generation of RAM technology, affecting speed and efficiency.

*   **Storage (e.g., MicroSD card slot, eMMC):**
    *   **Concept:** This is the SBC's long-term storage, where the operating system, applications, and your data are permanently kept.
    *   **Function:** It holds information even when the SBC is powered off.
    *   **Key Aspects:**
        *   **Medium:** Often a MicroSD card slot, which is easily swappable. Some SBCs have eMMC (embedded MultiMediaCard) storage soldered directly onto the board, offering better performance and durability.
        *   **Capacity:** Measured in Gigabytes (GB) or Terabytes (TB).

### 3. Peripherals and Interfaces

These components allow the SBC to communicate with the outside world and connect to other devices.

*   **GPIO (General Purpose Input/Output) Pins:**
    *   **Concept:** These are the digital pins on the SBC that can be programmed to act as either inputs (reading signals from sensors) or outputs (controlling LEDs, motors, etc.).
    *   **Function:** This is how SBCs interact with the physical world in embedded systems.
    *   **Key Aspects:**
        *   **Digital vs. Analog:** Most GPIO pins are digital (high/low, 0/1). Some SBCs might have Analog-to-Digital Converters (ADCs) for analog inputs.
        *   **Voltage Levels:** Be mindful of the voltage (e.g., 3.3V or 5V) the GPIO pins operate at to avoid damaging connected components.

*   **USB Ports:**
    *   **Concept:** Universal Serial Bus ports are standard interfaces for connecting a wide range of peripherals.
    *   **Function:** Used for connecting keyboards, mice, external storage, webcams, and communication modules.

*   **Networking Interfaces:**
    *   **Ethernet Port:** For wired network connections, providing stable and fast internet access.
    *   **Wi-Fi Module:** For wireless network connectivity.
    *   **Bluetooth Module:** For short-range wireless communication with devices like headphones or other SBCs.

*   **Display Output (e.g., HDMI):**
    *   **Concept:** Allows the SBC to connect to a monitor or display for visual output.
    *   **Function:** Essential for systems where a graphical user interface is needed or for debugging.

*   **Audio Output:**
    *   **Concept:** Provides a way to output sound, often through a 3.5mm audio jack or via HDMI.

*   **Power Connector:**
    *   **Concept:** The port where the SBC receives its electrical power, typically via a Micro USB or USB-C port, or a dedicated barrel jack.

## Putting It Together: A Simple Analogy

Imagine the SBC is a small workshop:

*   **CPU:** The skilled craftsman who does all the work, following instructions.
*   **RAM:** The workbench where the craftsman keeps the tools and materials he's currently using. It's fast to access but gets cleared when the day ends.
*   **Storage (MicroSD/eMMC):** The toolbox and supply closet where all tools and raw materials are kept, even when the workshop is closed.
*   **GPIO Pins:** The workshop's doors and windows, allowing the craftsman to receive instructions from outside (inputs) or send out finished products (outputs).
*   **USB Ports:** The loading dock where you can bring in more tools (peripherals) or send out goods.
*   **Networking:** The telephone and internet connection for receiving orders and sending updates.

## Key Takeaways

*   The CPU is the processing core.
*   RAM is for active operations, while storage is for long-term data.
*   Peripherals, especially GPIO pins, enable interaction with the physical world.
*   Understanding these components helps you choose the right SBC for your embedded project and predict its capabilities.

## Supports

- [[skills/hardware-embedded/electronics-embedded/embedded-systems/microskills/sbc-hardware-components|SBC Hardware Components]]

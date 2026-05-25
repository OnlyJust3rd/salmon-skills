---
type: "medium"
title: "Peripheral Bus Interfaces: PCI and USB"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/hardware-embedded/embedded-systems/input-output-interfacing/microskills/peripheral-bus-interface-survey|peripheral-bus-interface-survey]]"
learning-time-in-minutes: 5
---
# Peripheral Bus Interfaces: PCI and USB

This lesson explores two fundamental peripheral bus interfaces: Peripheral Component Interconnect (PCI) and Universal Serial Bus (USB). Understanding their core concepts and typical use cases is crucial for analyzing how peripherals communicate with a host system.

## Understanding Peripheral Buses

Peripheral buses are communication pathways that connect external devices (peripherals) to a computer's central processing unit (CPU) and memory. They handle the transfer of data, control signals, and power between the host and the peripheral. The efficiency, speed, and complexity of these buses significantly impact a device's performance and capabilities.

## Peripheral Component Interconnect (PCI)

PCI is a standard internal expansion bus designed for connecting high-speed peripherals directly to the motherboard. It typically provides a direct, high-bandwidth connection to the system's memory and CPU.

### Core Concepts of PCI

*   **Shared Bus:** Older versions of PCI used a shared bus architecture where multiple devices competed for access. This could lead to performance bottlenecks if many devices were active simultaneously.
*   **High Bandwidth:** PCI offers significant bandwidth, making it suitable for demanding peripherals like graphics cards, network interfaces, and sound cards.
*   **Direct Memory Access (DMA):** PCI devices often support DMA, allowing them to transfer data directly to and from system memory without constant CPU intervention, freeing up the CPU for other tasks.
*   **Bus Mastering:** Some PCI devices can act as bus masters, initiating data transfers themselves, further reducing CPU overhead.

### Typical Use Cases for PCI

Historically, PCI was the standard for:

*   **Graphics Cards:** High-performance graphics processing.
*   **Network Interface Cards (NICs):** High-speed wired network connectivity.
*   **Sound Cards:** Advanced audio processing.
*   **Storage Controllers:** High-speed connections for hard drives and SSDs (though SATA and NVMe have largely superseded this for consumer drives).
*   **High-end capture cards.**

### PCI Variants and Evolution

It's important to note that PCI has evolved. PCI Express (PCIe) is the modern, serial successor to PCI, offering significantly higher bandwidth and a point-to-point connection architecture that eliminates the shared bus contention issues of older PCI. When we refer to "PCI" in the context of older systems, we mean the parallel PCI standard. Modern systems primarily use PCIe.

## Universal Serial Bus (USB)

USB is a ubiquitous external bus standard designed for connecting a wide range of peripherals to a computer. It's known for its ease of use, hot-plugging capabilities, and versatility.

### Core Concepts of USB

*   **Host-Centric Architecture:** USB operates with a host controller (usually integrated into the motherboard) that manages all communication. Peripherals are connected to the host.
*   **Topology:** USB uses a tiered-star topology. The host is at the root, and hubs are used to expand the number of available ports.
*   **Serial Communication:** USB transmits data serially, bit by bit, over dedicated wires.
*   **Enumeration:** When a USB device is plugged in, the host controller enumerates it, discovering its type, manufacturer, and capabilities, and assigning it an address.
*   **Power Delivery:** USB ports can supply power to connected devices, eliminating the need for separate power adapters for many low-power peripherals.
*   **Hot-Plugging:** USB devices can be connected and disconnected while the computer is running without needing to reboot.

### Typical Use Cases for USB

USB's versatility makes it suitable for a vast array of devices:

*   **Input Devices:** Keyboards, mice, game controllers.
*   **Storage Devices:** USB flash drives, external hard drives, SSD enclosures.
*   **Printers and Scanners:** Standard peripheral devices.
*   **Webcams and Microphones:** Audio and video capture.
*   **Smartphones and Tablets:** Data transfer and charging.
*   **Networking:** USB Wi-Fi adapters, USB Ethernet adapters.
*   **Audio Interfaces:** External sound cards.

### USB Standards and Speed

USB has evolved through several generations, each offering increased speed and capabilities:

*   **USB 1.0/1.1:** Low Speed (1.5 Mbps) and Full Speed (12 Mbps).
*   **USB 2.0:** High Speed (480 Mbps). Still very common for many peripherals.
*   **USB 3.0/3.1/3.2 (SuperSpeed):** Offers significantly higher speeds, ranging from 5 Gbps up to 20 Gbps. Often indicated by blue ports or specific branding.
*   **USB4:** The latest standard, offering speeds up to 40 Gbps and backward compatibility with Thunderbolt 3.

## PCI vs. USB: Key Differences and Use Cases

| Feature            | PCI (Parallel, older generations)                                  | USB (Serial)                                                    |
| :----------------- | :--------------------------------------------------------------- | :-------------------------------------------------------------- |
| **Connection Type**| Internal (Motherboard slot)                                      | External (Port)                                                 |
| **Architecture**   | Shared bus (older), Point-to-point (PCIe)                        | Host-centric, Tiered-star topology                              |
| **Primary Role**   | High-performance internal components                             | General-purpose peripheral connectivity                         |
| **Bandwidth**      | High (especially PCIe)                                           | Varies by standard (from 1.5 Mbps to 40+ Gbps)                  |
| **Ease of Use**    | Requires installation into a slot                                | Plug-and-play, hot-pluggable                                    |
| **Power**          | Provided via motherboard slot                                    | Provided via port (limited by standard, some offer higher PD) |
| **Typical Peripherals** | Graphics cards, high-speed network cards, sound cards (older) | Keyboards, mice, storage, printers, webcams, audio interfaces |
| **CPU Overhead**   | Can be low due to DMA and bus mastering                          | Generally managed by host controller, efficient for most tasks  |

### When to Use Which (General Scenario)

*   **PCI/PCIe:** Choose for high-bandwidth, latency-sensitive, internal components where direct system access is critical, such as dedicated graphics cards or high-performance network adapters within a desktop or server.
*   **USB:** Ideal for external peripherals requiring ease of use, hot-plugging, and a wide range of functionalities. Its versatility and evolving speed standards make it suitable for most everyday devices.

By understanding these two fundamental bus interfaces, you gain insight into how peripherals interact with host systems, a key step in analyzing and selecting appropriate interfaces for various devices.

## Supports

- [[skills/computing/hardware-embedded/embedded-systems/input-output-interfacing/microskills/peripheral-bus-interface-survey|Peripheral Bus Interface Survey]]

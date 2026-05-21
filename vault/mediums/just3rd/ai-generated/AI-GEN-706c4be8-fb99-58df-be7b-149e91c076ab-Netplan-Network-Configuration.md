---
type: "medium"
title: "Configuring Network Interfaces with Netplan"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/cloud-devops/platform-engineering/linux-system/microskills/netplan-network-configuration|netplan-network-configuration]]"
---
# Configuring Network Interfaces with Netplan

Understanding how to configure network interfaces is crucial for maintaining system availability and ensuring your Linux systems are predictable and recoverable. Netplan is a modern network configuration tool for Linux that simplifies this process. This lesson focuses on applying Netplan to configure network interfaces effectively.

## What is Netplan?

Netplan is a YAML-based network configuration abstraction tool. It allows you to describe your network interfaces and their configurations in a declarative way. Netplan then generates backend configurations for either `systemd-networkd` or `NetworkManager`. This abstraction makes it easier to manage network settings across different distributions and versions.

## Why Netplan?

Netplan is designed to be user-friendly and powerful. Its key benefits include:

*   **YAML Syntax:** Easy to read and write, reducing errors.
*   **Abstraction:** Abstracts away the complexities of different networking backends.
*   **Declarative Configuration:** You state *what* you want, not *how* to achieve it.
*   **Maintainability:** Simplifies updates and changes to network configurations.

## Core Concepts

A Netplan configuration file typically resides in `/etc/netplan/`. Files are named with a `.yaml` extension (e.g., `00-installer-config.yaml`).

### Key Configuration Elements

*   **`network`**: The top-level key that defines network settings.
*   **`ethernets`**: Defines configurations for Ethernet interfaces.
*   **`wifis`**: Defines configurations for Wi-Fi interfaces.
*   **`renderer`**: Specifies which backend Netplan should use (`networkd` or `NetworkManager`). `networkd` is often preferred for servers due to its stability and performance.
*   **Interface Names**: You'll refer to your network interfaces by their system names (e.g., `eth0`, `enp0s3`, `wlan0`). You can find these using `ip a` or `ifconfig`.
*   **IP Addresses**: Can be configured statically or dynamically via DHCP.
*   **DHCP**: Enables the interface to obtain an IP address automatically from a DHCP server.
*   **Static IP**: Allows you to assign a fixed IP address, netmask, and gateway.
*   **DNS**: Domain Name System server configuration.
*   **Routes**: Static routes for directing network traffic.

## Applying Netplan: Practical Examples

Let's walk through common network configuration scenarios.

### Scenario 1: Basic DHCP Configuration for an Ethernet Interface

This is the most common setup for many systems. The interface will obtain its IP address, gateway, and DNS information automatically.

**1. Identify your interface name.**
Run `ip a` and look for an interface like `eth0` or `enpXsY`. For this example, let's assume it's `enp0s3`.

**2. Create or edit the Netplan configuration file.**
If you have an existing file like `/etc/netplan/00-installer-config.yaml`, you can edit it. Otherwise, create a new one, e.g., `/etc/netplan/50-cloud-init.yaml` (or any name starting with a number).

```yaml
network:
  version: 2
  renderer: networkd
  ethernets:
    enp0s3:
      dhcp4: true
```

*   `version: 2`: Specifies the Netplan configuration version.
*   `renderer: networkd`: Uses `systemd-networkd` as the backend.
*   `ethernets`: Section for Ethernet configurations.
*   `enp0s3`: The name of our interface.
*   `dhcp4: true`: Enable DHCP for IPv4.

**3. Apply the configuration.**
Run the following commands:

```bash
sudo netplan generate
sudo netplan apply
```

*   `netplan generate`: Generates the backend configuration files.
*   `netplan apply`: Applies the generated configuration to activate network settings.

**4. Verify the configuration.**
Run `ip a` to see if `enp0s3` has an IP address. You can also try `ping google.com` to test connectivity.

### Scenario 2: Static IP Configuration for an Ethernet Interface

This is essential for servers that need a predictable IP address.

Let's configure `enp0s3` with a static IP address: `192.168.1.100`, netmask `24`, gateway `192.168.1.1`, and DNS `8.8.8.8`.

```yaml
network:
  version: 2
  renderer: networkd
  ethernets:
    enp0s3:
      dhcp4: false # Disable DHCP
      addresses:
        - 192.168.1.100/24
      gateway4: 192.168.1.1
      nameservers:
        addresses: [8.8.8.8]
```

*   `dhcp4: false`: Explicitly disables DHCP.
*   `addresses`: A list of IP addresses and their subnet masks. `/24` is shorthand for `255.255.255.0`.
*   `gateway4`: The IPv4 default gateway.
*   `nameservers`: A list of DNS servers.

Apply and verify as in Scenario 1.

### Scenario 3: Configuring Multiple Interfaces and DNS

You might have multiple network interfaces, and you'll want to ensure proper DNS resolution.

Let's say you have `enp0s3` with a static IP and `enp0s8` configured for DHCP.

```yaml
network:
  version: 2
  renderer: networkd
  ethernets:
    enp0s3:
      dhcp4: false
      addresses:
        - 192.168.1.100/24
      gateway4: 192.168.1.1
      nameservers:
        addresses: [8.8.8.8, 8.8.4.4] # Google DNS servers
    enp0s8:
      dhcp4: true
```

*   Note how `nameservers` is defined under `enp0s3`. If `enp0s8` was also configured for static IP, you could define DNS there or inherit it. For DHCP, DNS is typically provided by the DHCP server.

## Important Considerations and Troubleshooting

*   **YAML Syntax Errors**: YAML is sensitive to indentation. Use spaces, not tabs, and ensure consistent indentation. A common mistake is using tabs. Netplan will usually report syntax errors during `netplan apply`.
*   **Interface Renaming**: Interface names can change between reboots or hardware changes. If you're writing configurations for specific hardware, consider using MAC addresses for more robust binding, though this is less common with modern system naming conventions.
*   **`netplan try`**: Before applying a new configuration permanently, use `sudo netplan try`. This command applies the configuration and waits for confirmation. If you lose network connectivity and don't confirm, it reverts to the previous configuration, preventing lockout.
*   **Backend Choice**: `networkd` is generally recommended for servers. `NetworkManager` is more common on desktops and laptops, offering more dynamic features. Ensure your `renderer` choice matches your needs and the system's setup.
*   **Firewall**: Network configuration changes don't automatically update firewall rules. Ensure your firewall (e.g., `ufw`, `iptables`) is configured to allow necessary traffic.
*   **Systemd-networkd Service**: If `netplan apply` fails or network is not working, check the status of the `systemd-networkd` service: `sudo systemctl status systemd-networkd`.

By mastering Netplan, you gain a fundamental skill for managing network availability and predictability, contributing to the overall recoverability of your Linux systems.

## Supports

- [[skills/cloud-devops/platform-engineering/linux-system/microskills/netplan-network-configuration|Netplan Network Configuration]]

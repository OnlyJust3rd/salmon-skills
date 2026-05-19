---
type: "medium"
title: "Installing Software on Linux"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/business-it/business-product/endpoint-administration/microskills/software-installation|Software Installation]]"
  - "[[skills/cloud-devops/platform-engineering/linux-system/microskills/software-installation|Software Installation]]"
---
# Installing Software on Linux

This lesson focuses on the essential skill of installing new software packages on your Linux system. We'll explore how to do this using common package management tools.

## What is a Package Manager?

Think of a package manager as your personal software assistant for Linux. Instead of downloading individual program files from various websites and manually installing them, a package manager handles the entire process for you. It:

*   **Finds software:** It knows where to find approved software packages for your distribution.
*   **Installs software:** It downloads and installs the software and its dependencies (other programs the software needs to run).
*   **Updates software:** It can update existing software to newer versions.
*   **Removes software:** It can uninstall software cleanly, removing associated files.

This simplifies software management significantly, ensuring consistency and security.

## Common Package Managers

Linux distributions use different package management systems. The two most prevalent are:

*   **APT (Advanced Package Tool):** Used by Debian-based distributions like Ubuntu, Linux Mint, and Raspberry Pi OS.
*   **YUM/DNF (Yellowdog Updater, Modified / DNF):** Used by Red Hat-based distributions like Fedora, CentOS, and Rocky Linux. DNF is the successor to YUM and is generally preferred for newer systems.

While the commands differ slightly, the underlying concepts are the same. We'll cover both.

## Installing Software with APT (Ubuntu, Debian, etc.)

The primary command for installing software with APT is `apt install`.

### Basic Installation

To install a package, you need to know its exact name. If you're unsure, you can search for it first.

**1. Update Package Lists:**
Before installing anything, it's good practice to update your local list of available packages. This ensures you're seeing the latest versions.

```bash
sudo apt update
```

*   `sudo`: This command allows you to run commands with administrative privileges, which are necessary for installing software. You'll be prompted for your password.
*   `apt update`: This command fetches information about available packages from the repositories.

**2. Install a Package:**
Let's say you want to install the `htop` utility, a more interactive process viewer than the standard `top` command.

```bash
sudo apt install htop
```

The system will show you which packages will be installed (including `htop` and any dependencies) and ask for confirmation. Type `Y` and press Enter to proceed.

**3. Searching for Packages:**
If you don't know the exact package name, you can search for it:

```bash
apt search <keyword>
```

For example, to find packages related to "text editor":

```bash
apt search text editor
```

This will list packages whose names or descriptions contain "text editor."

### Important APT Commands

*   **To upgrade all installed packages:**
    ```bash
    sudo apt upgrade
    ```
*   **To remove a package (but keep configuration files):**
    ```bash
    sudo apt remove <package-name>
    ```
*   **To remove a package and its configuration files:**
    ```bash
    sudo apt purge <package-name>
    ```
*   **To clean up downloaded package files that are no longer needed:**
    ```bash
    sudo apt autoremove
    ```

## Installing Software with YUM/DNF (Fedora, CentOS, etc.)

The commands for YUM and DNF are very similar. We'll show DNF commands, which are more current.

### Basic Installation

Similar to APT, you need to know the package name.

**1. Update Package Lists (Optional but Recommended):**
While YUM/DNF often check for updates automatically, explicitly refreshing them is good practice.

```bash
sudo dnf check-update
```

*   `sudo`: For administrative privileges.
*   `dnf check-update`: Checks for available updates for installed packages.

**2. Install a Package:**
Let's install `htop` again.

```bash
sudo dnf install htop
```

The system will present a summary of what will be installed and ask for confirmation. Type `y` and press Enter.

**3. Searching for Packages:**
To find packages:

```bash
dnf search <keyword>
```

For example:

```bash
dnf search text editor
```

### Important YUM/DNF Commands

*   **To upgrade all installed packages:**
    ```bash
    sudo dnf upgrade
    ```
*   **To remove a package:**
    ```bash
    sudo dnf remove <package-name>
    ```
*   **To clean up downloaded package files:**
    ```bash
    sudo dnf autoremove
    ```

## Common Pitfalls and Best Practices

*   **Typos:** Double-check package names. A small typo can lead to an error indicating the package wasn't found.
*   **Outdated Package Lists:** Always run `sudo apt update` or `sudo dnf check-update` before installing new software.
*   **Permissions:** Remember to use `sudo` for installation commands.
*   **Dependency Hell:** Package managers are designed to handle dependencies. However, in rare cases with less common software or mixed repositories, you might encounter issues. This is less common with standard distribution repositories.
*   **Third-Party Repositories:** While you can add external software repositories (PPAs on Debian/Ubuntu), do so with caution. Only add repositories from trusted sources, as they can potentially introduce conflicts or security risks.

By mastering these basic commands, you can efficiently and safely install the software you need to make the most of your Linux system.

## Supports

- [[skills/business-it/business-product/endpoint-administration/microskills/software-installation|Software Installation]]
- [[skills/cloud-devops/platform-engineering/linux-system/microskills/software-installation|Software Installation]]

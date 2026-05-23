---
type: "medium"
title: "Configuration Review: Ensuring Endpoint Baseline Compliance"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/systems-infrastructure/system-administration/endpoint-administration/microskills/configuration-review|configuration-review]]"
learning-time-in-minutes: 5
---
# Configuration Review: Ensuring Endpoint Baseline Compliance

This lesson focuses on the **Configuration Review** microskill, a crucial part of applying endpoint maintenance and software installation practices. We'll explore what configuration review is, why it's important, and how to perform it effectively.

## What is Configuration Review?

Configuration review is the process of examining the settings and parameters of an endpoint (like a computer, server, or mobile device) and comparing them against a predefined set of standards or baselines. These baselines represent the *expected* and *secure* configuration for devices within an organization or for a specific role.

Think of it like checking the specifications of a new car against the manufacturer's ideal settings. You're ensuring everything is set up as intended for optimal performance, security, and functionality.

## Why is Configuration Review Important?

Performing regular configuration reviews helps achieve several critical goals in endpoint administration:

*   **Security:** Ensures that security settings are correctly applied, such as strong password policies, enabled firewalls, and up-to-date antivirus definitions. Deviations from baseline can create vulnerabilities.
*   **Compliance:** Verifies that endpoints meet industry regulations (like GDPR, HIPAA) or internal company policies regarding software, data storage, and access.
*   **Stability and Performance:** Confirms that software is installed correctly and that system settings are optimized for reliable operation, preventing unexpected crashes or slowdowns.
*   **Troubleshooting:** When issues arise, a known baseline configuration makes it easier to identify what has changed and caused the problem.
*   **Consistency:** Ensures that all endpoints of a similar type are configured identically, simplifying management and support.

## The Configuration Review Process

The process of reviewing endpoint configurations can be broken down into several key steps:

### 1. Define Your Baseline

Before you can review, you need to know what you're reviewing against.

*   **Identify Key Configuration Areas:** What aspects of an endpoint are most important to check? This might include:
    *   Operating System version and patch level
    *   Installed software and their versions
    *   Network settings (IP address, DNS, firewall rules)
    *   User account settings and permissions
    *   Security software status (antivirus, endpoint detection and response - EDR)
    *   Registry settings (for Windows systems)
    *   Service configurations
*   **Document the Baseline:** Create clear documentation that outlines the expected settings for each key area. This could be a spreadsheet, a policy document, or a configuration management template.
*   **Version Control:** Treat your baseline documentation like any other important IT artifact. Version it and track changes.

### 2. Select Your Review Method

There are several ways to perform a configuration review, ranging from manual checks to automated solutions.

*   **Manual Inspection:** Involves directly accessing each endpoint and checking settings through its operating system interface or command line. This is feasible for very small environments but quickly becomes impractical.
*   **Scripting:** Using scripts (e.g., PowerShell for Windows, Bash for Linux) to query endpoint settings and report deviations. This offers more automation than manual inspection.
*   **Configuration Management Tools:** Employing dedicated tools like Microsoft Intune, SCCM (System Center Configuration Manager), Ansible, Puppet, or Chef. These tools are designed to define, deploy, and enforce configurations across many endpoints.
*   **Vulnerability Scanners/Security Auditing Tools:** Many security tools include capabilities to check endpoint configurations against known security best practices or compliance frameworks.

### 3. Execute the Review

This is where you actively check the endpoints.

*   **Gather Data:** Use your chosen method to collect current configuration data from the endpoints.
*   **Compare Data:** Compare the collected data against your documented baseline. Identify any discrepancies.

### 4. Analyze and Remediate

Once you've identified deviations, you need to understand them and take action.

*   **Investigate Deviations:** Not all deviations are malicious or problematic. Some might be legitimate changes made for specific application needs. Understand *why* a configuration differs from the baseline.
*   **Prioritize Remediation:** Focus on critical security misconfigurations or compliance violations first.
*   **Take Action:**
    *   **Correct:** Revert the endpoint's configuration to match the baseline. This can often be done manually, via scripts, or through configuration management tools.
    *   **Approve:** If a deviation is a necessary and authorized exception, document it properly as an approved deviation from the baseline.
    *   **Update Baseline:** If a change has been widely and legitimately adopted, consider updating the baseline itself to reflect the new standard.

### 5. Document and Report

Keep a record of your reviews.

*   **Record Findings:** Document which endpoints were reviewed, the date of the review, the deviations found, and the actions taken.
*   **Generate Reports:** Summarize the review findings for management or compliance purposes.

## Example: Reviewing Firewall Status on Windows Endpoints

Let's consider a simple example of reviewing firewall status on Windows endpoints.

**Baseline:** The corporate baseline dictates that the Windows Firewall must be enabled for all network profiles (Domain, Private, Public) on all endpoints.

**Method:** We'll use a PowerShell script to check.

**PowerShell Script (Example):**

```powershell
# Define the expected state for each firewall profile
$expectedState = @{
    "Domain" = "Enabled"
    "Private" = "Enabled"
    "Public" = "Enabled"
}

Write-Host "Reviewing Firewall Status..."

# Get the current firewall status
$firewallStatus = Get-NetFirewallProfile | Select-Object Name, Enabled

# Compare current status with the expected baseline
foreach ($profile in $firewallStatus) {
    $currentEnabled = if ($profile.Enabled) {"Enabled"} else {"Disabled"}
    $expectedEnabled = $expectedState[$profile.Name]

    if ($currentEnabled -ne $expectedEnabled) {
        Write-Warning "DISCREPANCY FOUND: Firewall profile '$($profile.Name)' is '$currentEnabled', expected '$expectedEnabled'."
        # In a real script, you might also log this, trigger an alert, or attempt auto-remediation.
    } else {
        Write-Host "OK: Firewall profile '$($profile.Name)' is '$currentEnabled'."
    }
}

Write-Host "Review complete."
```

**Execution and Analysis:**

1.  You would run this script on each endpoint, or ideally, remotely against a group of endpoints.
2.  The script outputs messages indicating whether each firewall profile is enabled or disabled.
3.  If a warning is shown for a profile (e.g., "DISCREPANCY FOUND: Firewall profile 'Public' is 'Disabled', expected 'Enabled'."), you have identified a deviation.
4.  **Remediation:** You would then investigate *why* the public firewall is disabled. Is it intentional for a specific server? If not, you would use a command like `Enable-NetFirewallProfile -Profile Public` to correct it.

## Common Mistakes to Avoid

*   **Outdated Baselines:** If your baseline doesn't reflect current security best practices or operational needs, your reviews will be ineffective.
*   **Lack of Automation:** Manually checking dozens or hundreds of endpoints is unsustainable and prone to human error.
*   **Ignoring Deviations:** Failing to investigate or remediate deviations leaves your endpoints vulnerable.
*   **No Documentation:** Without clear documentation of baselines and review findings, you lose track of your configuration posture.
*   **Treating All Deviations Equally:** Some deviations might be minor cosmetic issues, while others are critical security risks. Prioritize accordingly.

By regularly performing configuration reviews, you build a more secure, compliant, and stable endpoint environment.

## Supports

- [[skills/computing/systems-infrastructure/system-administration/endpoint-administration/microskills/configuration-review|Configuration Review]]

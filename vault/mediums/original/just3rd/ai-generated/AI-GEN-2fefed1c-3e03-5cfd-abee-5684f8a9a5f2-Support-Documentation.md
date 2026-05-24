---
type: "medium"
title: "Documenting IT Support Incidents"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/systems-infrastructure/operations-reliability/service-management/it-service-management/microskills/support-documentation|support-documentation]]"
learning-time-in-minutes: 4
---
# Documenting IT Support Incidents

This lesson focuses on the essential skill of **Support Documentation**, which is a critical part of the IT Service Management process, specifically when applying incident ticket triage and escalation. Effective documentation ensures that information about an incident is captured accurately, comprehensively, and in a way that aids future troubleshooting and problem resolution.

## Why is Support Documentation Important?

When you're dealing with IT support cases, keeping detailed records isn't just busywork. Good documentation serves several vital purposes:

*   **Knowledge Sharing:** It allows other support staff to understand the problem and the steps taken to resolve it, even if they weren't involved in the initial ticket.
*   **Faster Resolution:** For recurring issues, documentation acts as a readily available knowledge base, enabling quicker fixes.
*   **Auditing and Compliance:** It provides a historical record for tracking IT performance, identifying trends, and meeting compliance requirements.
*   **Training:** New support technicians can learn from documented cases.
*   **Problem Management:** Analyzing documented incidents helps identify root causes of recurring problems, leading to permanent solutions.

## What to Document: The Core Components

When you are tasked with resolving an IT incident, your documentation should consistently include the following:

### 1. Symptoms

This is the initial description of what the user is experiencing. Be as precise as possible.

*   **What the user reports:** "The internet isn't working."
*   **More detailed symptoms:** "User reports they cannot access any websites. Error message 'Page Not Found' appears. They can see the Wi-Fi icon connected. Other applications that use the internet (like email) are also not functioning."

### 2. Steps Taken

This section details the actions you performed to diagnose and resolve the incident. Think of it as a chronological log of your troubleshooting process.

*   **Start with basic checks:**
    *   "Verified user's network connection. Pinged internal gateway (192.168.1.1) - successful."
    *   "Pinged external website (google.com) - timed out."
    *   "Checked DNS settings on user's machine. Currently set to ISP's DNS."
*   **Detail diagnostic commands:**
    *   "Ran `ipconfig /all` to check IP configuration. IP address obtained is 192.168.1.150, subnet mask 255.255.255.0, default gateway 192.168.1.1."
    *   "Ran `tracert google.com`. Traceroute stops at the default gateway."
*   **Describe any software or hardware changes:**
    *   "Restarted user's computer."
    *   "Restarted router in user's office."
    *   "Cleared browser cache and cookies."
    *   "Temporarily disabled firewall to test."

### 3. Resolution Notes

This is the crucial part where you explain *how* the issue was fixed. It should be clear enough for someone else to follow.

*   **Identify the root cause:** "The issue was caused by a misconfiguration on the local network switch, which was blocking external DNS traffic."
*   **Describe the fix:** "The network administrator was contacted. The switch port connected to the user's office was reset and reconfigured to allow DNS traffic. Verified connectivity by pinging an external IP address and resolving a domain name."
*   **Confirm with the user:** "User confirmed that internet access has been restored and all applications are functioning correctly."
*   **Any follow-up actions:** "Advised user to report any further issues immediately."

## Best Practices for Documentation

To make your documentation truly effective, consider these tips:

*   **Be Timely:** Document as you go, or immediately after the resolution. Don't wait until the end of your shift.
*   **Be Clear and Concise:** Use plain language. Avoid jargon where possible, or explain it if necessary.
*   **Be Objective:** Stick to the facts. Describe what you observed and what you did.
*   **Be Specific:** Instead of "checked network," say "pinged default gateway."
*   **Use a Standard Format:** If your organization uses a ticketing system, follow its predefined fields and guidelines.
*   **Include Timestamps:** When logging steps, note the time of each action. This can be invaluable for performance analysis.
*   **Tag Appropriately:** Use keywords or tags that will help others find this information later (e.g., "network connectivity," "DNS issue," "router problem").

## Example Scenario

Let's walk through a quick example of documenting an incident:

**User Report:** "My printer isn't working. It's just sitting there."

**Initial Triage (Your Documentation):**

*   **Ticket ID:** INC0012345
*   **User:** Jane Doe
*   **Device:** Printer (HP LaserJet Pro M404dn)
*   **Date/Time:** 2023-10-27 10:15 AM

**Documentation Entry 1 (10:17 AM):**
*   **Symptoms:** User states printer is not printing. No error lights are illuminated on the printer. Last print job was successful yesterday.
*   **Steps Taken:**
    1.  Checked physical connections on printer (power, USB/Ethernet). All secure.
    2.  Verified printer is powered on.
    3.  Checked print queue on user's workstation (Workstation ID: WS-JD78). Found one document stuck in 'Printing' status.
    4.  Cleared the stuck print job from the queue.
    5.  Sent a test print page from the workstation.
*   **Resolution:** Test page printed successfully. The issue was a stuck print job in the local workstation's print queue.

This concise entry covers the essential information. If the problem persisted, you would continue adding steps and detail until a resolution was found and documented.

By consistently applying these documentation principles, you contribute to a more efficient and effective IT support environment.

## Supports

- [[skills/computing/systems-infrastructure/operations-reliability/service-management/it-service-management/microskills/support-documentation|Support Documentation]]

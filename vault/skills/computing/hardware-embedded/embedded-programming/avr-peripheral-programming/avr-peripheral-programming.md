---
type: "skill"
title: "AVR Peripheral Programming"
tags:
  - "cpe"
  - "skill"
contributors:
  - "[[contributors/just3rd|just3rd]]"
competencies:
  - "[[skills/computing/hardware-embedded/embedded-programming/avr-peripheral-programming/competencies/L1-define-avr-peripherals|L1-define-avr-peripherals]]"
  - "[[skills/computing/hardware-embedded/embedded-programming/avr-peripheral-programming/competencies/L1-explain-avr-peripheral-operation|L1-explain-avr-peripheral-operation]]"
  - "[[skills/computing/hardware-embedded/embedded-programming/avr-peripheral-programming/competencies/L2-apply-interrupt-handling|L2-apply-interrupt-handling]]"
  - "[[skills/computing/hardware-embedded/embedded-programming/avr-peripheral-programming/competencies/L2-avr-i-o-control|L2-avr-i-o-control]]"
  - "[[skills/computing/hardware-embedded/embedded-programming/avr-peripheral-programming/competencies/L2-implement-adc-reading|L2-implement-adc-reading]]"
  - "[[skills/computing/hardware-embedded/embedded-programming/avr-peripheral-programming/competencies/L2-implement-timer-counter-functions|L2-implement-timer-counter-functions]]"
standard-competency:
  - "[[skills/computing/hardware-embedded/embedded-programming/avr-peripheral-programming/competencies/L2-apply-interrupt-handling|L2-apply-interrupt-handling]]"
  - "[[skills/computing/hardware-embedded/embedded-programming/avr-peripheral-programming/competencies/L2-avr-i-o-control|L2-avr-i-o-control]]"
  - "[[skills/computing/hardware-embedded/embedded-programming/avr-peripheral-programming/competencies/L2-implement-adc-reading|L2-implement-adc-reading]]"
  - "[[skills/computing/hardware-embedded/embedded-programming/avr-peripheral-programming/competencies/L2-implement-timer-counter-functions|L2-implement-timer-counter-functions]]"
microskills:
  - "[[skills/computing/hardware-embedded/embedded-programming/avr-peripheral-programming/microskills/adc-channel-selection|adc-channel-selection]]"
  - "[[skills/computing/hardware-embedded/embedded-programming/avr-peripheral-programming/microskills/adc-control-and-status-registers|adc-control-and-status-registers]]"
  - "[[skills/computing/hardware-embedded/embedded-programming/avr-peripheral-programming/microskills/adc-conversion-process|adc-conversion-process]]"
  - "[[skills/computing/hardware-embedded/embedded-programming/avr-peripheral-programming/microskills/adc-conversion-triggering|adc-conversion-triggering]]"
  - "[[skills/computing/hardware-embedded/embedded-programming/avr-peripheral-programming/microskills/adc-reference-voltage-configuration|adc-reference-voltage-configuration]]"
  - "[[skills/computing/hardware-embedded/embedded-programming/avr-peripheral-programming/microskills/adc-result-reading|adc-result-reading]]"
  - "[[skills/computing/hardware-embedded/embedded-programming/avr-peripheral-programming/microskills/delay-generation|delay-generation]]"
  - "[[skills/computing/hardware-embedded/embedded-programming/avr-peripheral-programming/microskills/digital-signal-manipulation|digital-signal-manipulation]]"
  - "[[skills/computing/hardware-embedded/embedded-programming/avr-peripheral-programming/microskills/external-interrupt-configuration|external-interrupt-configuration]]"
  - "[[skills/computing/hardware-embedded/embedded-programming/avr-peripheral-programming/microskills/i-o-port-configuration-registers|i-o-port-configuration-registers]]"
  - "[[skills/computing/hardware-embedded/embedded-programming/avr-peripheral-programming/microskills/i-o-port-functionality|i-o-port-functionality]]"
  - "[[skills/computing/hardware-embedded/embedded-programming/avr-peripheral-programming/microskills/input-pin-configuration|input-pin-configuration]]"
  - "[[skills/computing/hardware-embedded/embedded-programming/avr-peripheral-programming/microskills/interrupt-controller-mechanisms|interrupt-controller-mechanisms]]"
  - "[[skills/computing/hardware-embedded/embedded-programming/avr-peripheral-programming/microskills/interrupt-enable-disable-control|interrupt-enable-disable-control]]"
  - "[[skills/computing/hardware-embedded/embedded-programming/avr-peripheral-programming/microskills/interrupt-service-routine-implementation|interrupt-service-routine-implementation]]"
  - "[[skills/computing/hardware-embedded/embedded-programming/avr-peripheral-programming/microskills/interrupt-vector-purpose|interrupt-vector-purpose]]"
  - "[[skills/computing/hardware-embedded/embedded-programming/avr-peripheral-programming/microskills/interrupt-vector-table-management|interrupt-vector-table-management]]"
  - "[[skills/computing/hardware-embedded/embedded-programming/avr-peripheral-programming/microskills/output-pin-configuration|output-pin-configuration]]"
  - "[[skills/computing/hardware-embedded/embedded-programming/avr-peripheral-programming/microskills/prescaler-setting|prescaler-setting]]"
  - "[[skills/computing/hardware-embedded/embedded-programming/avr-peripheral-programming/microskills/reading-digital-inputs|reading-digital-inputs]]"
  - "[[skills/computing/hardware-embedded/embedded-programming/avr-peripheral-programming/microskills/timer-counter-control-registers|timer-counter-control-registers]]"
  - "[[skills/computing/hardware-embedded/embedded-programming/avr-peripheral-programming/microskills/timer-counter-operations|timer-counter-operations]]"
  - "[[skills/computing/hardware-embedded/embedded-programming/avr-peripheral-programming/microskills/timer-mode-configuration|timer-mode-configuration]]"
  - "[[skills/computing/hardware-embedded/embedded-programming/avr-peripheral-programming/microskills/waveform-generation|waveform-generation]]"
---

# AVR Peripheral Programming

Programming AVR microcontroller peripherals in bare-metal C, including direct control of I/O ports, interrupt handling, timers/counters, and the Analog-to-Digital Converter (ADC).

## Competencies

- [[skills/computing/hardware-embedded/embedded-programming/avr-peripheral-programming/competencies/L1-define-avr-peripherals|L1- Define AVR Peripherals]]
- [[skills/computing/hardware-embedded/embedded-programming/avr-peripheral-programming/competencies/L1-explain-avr-peripheral-operation|L2- Explain AVR Peripheral Operation]]
- [[skills/computing/hardware-embedded/embedded-programming/avr-peripheral-programming/competencies/L2-avr-i-o-control|L3- AVR I/O Control]]
- [[skills/computing/hardware-embedded/embedded-programming/avr-peripheral-programming/competencies/L2-apply-interrupt-handling|L3- Apply Interrupt Handling]]
- [[skills/computing/hardware-embedded/embedded-programming/avr-peripheral-programming/competencies/L2-implement-timer-counter-functions|L3- Implement Timer/Counter Functions]]
- [[skills/computing/hardware-embedded/embedded-programming/avr-peripheral-programming/competencies/L2-implement-adc-reading|L3- Implement ADC Reading]]

## Microskills

- [[skills/computing/hardware-embedded/embedded-programming/avr-peripheral-programming/microskills/adc-channel-selection|ADC Channel Selection]]
- [[skills/computing/hardware-embedded/embedded-programming/avr-peripheral-programming/microskills/adc-control-and-status-registers|ADC Control and Status Registers]]
- [[skills/computing/hardware-embedded/embedded-programming/avr-peripheral-programming/microskills/adc-conversion-process|ADC Conversion Process]]
- [[skills/computing/hardware-embedded/embedded-programming/avr-peripheral-programming/microskills/adc-conversion-triggering|ADC Conversion Triggering]]
- [[skills/computing/hardware-embedded/embedded-programming/avr-peripheral-programming/microskills/adc-reference-voltage-configuration|ADC Reference Voltage Configuration]]
- [[skills/computing/hardware-embedded/embedded-programming/avr-peripheral-programming/microskills/adc-result-reading|ADC Result Reading]]
- [[skills/computing/hardware-embedded/embedded-programming/avr-peripheral-programming/microskills/delay-generation|Delay Generation]]
- [[skills/computing/hardware-embedded/embedded-programming/avr-peripheral-programming/microskills/digital-signal-manipulation|Digital Signal Manipulation]]
- [[skills/computing/hardware-embedded/embedded-programming/avr-peripheral-programming/microskills/external-interrupt-configuration|External Interrupt Configuration]]
- [[skills/computing/hardware-embedded/embedded-programming/avr-peripheral-programming/microskills/i-o-port-configuration-registers|I/O Port Configuration Registers]]
- [[skills/computing/hardware-embedded/embedded-programming/avr-peripheral-programming/microskills/i-o-port-functionality|I/O Port Functionality]]
- [[skills/computing/hardware-embedded/embedded-programming/avr-peripheral-programming/microskills/input-pin-configuration|Input Pin Configuration]]
- [[skills/computing/hardware-embedded/embedded-programming/avr-peripheral-programming/microskills/interrupt-controller-mechanisms|Interrupt Controller Mechanisms]]
- [[skills/computing/hardware-embedded/embedded-programming/avr-peripheral-programming/microskills/interrupt-enable-disable-control|Interrupt Enable/Disable Control]]
- [[skills/computing/hardware-embedded/embedded-programming/avr-peripheral-programming/microskills/interrupt-service-routine-implementation|Interrupt Service Routine Implementation]]
- [[skills/computing/hardware-embedded/embedded-programming/avr-peripheral-programming/microskills/interrupt-vector-purpose|Interrupt Vector Purpose]]
- [[skills/computing/hardware-embedded/embedded-programming/avr-peripheral-programming/microskills/interrupt-vector-table-management|Interrupt Vector Table Management]]
- [[skills/computing/hardware-embedded/embedded-programming/avr-peripheral-programming/microskills/output-pin-configuration|Output Pin Configuration]]
- [[skills/computing/hardware-embedded/embedded-programming/avr-peripheral-programming/microskills/prescaler-setting|Prescaler Setting]]
- [[skills/computing/hardware-embedded/embedded-programming/avr-peripheral-programming/microskills/reading-digital-inputs|Reading Digital Inputs]]
- [[skills/computing/hardware-embedded/embedded-programming/avr-peripheral-programming/microskills/timer-mode-configuration|Timer Mode Configuration]]
- [[skills/computing/hardware-embedded/embedded-programming/avr-peripheral-programming/microskills/timer-counter-control-registers|Timer/Counter Control Registers]]
- [[skills/computing/hardware-embedded/embedded-programming/avr-peripheral-programming/microskills/timer-counter-operations|Timer/Counter Operations]]
- [[skills/computing/hardware-embedded/embedded-programming/avr-peripheral-programming/microskills/waveform-generation|Waveform Generation]]

---
type: "medium"
title: "Implementing a Basic Spiking Neural Network"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/systems/high-performance-computing/neuromorphic-and-brain-inspired-computing/microskills/spiking-neural-network-implementation|spiking-neural-network-implementation]]"
---
# Implementing a Basic Spiking Neural Network

This lesson focuses on the practical application of Spiking Neural Network (SNN) concepts to implement a simple model. We'll walk through the core components and how to bring them together in a programmatic way.

## Core Components of a Spiking Neuron

Before we implement, let's quickly review the key elements of a spiking neuron:

1.  **Membrane Potential:** The internal state of the neuron, representing its electrical charge. It changes over time based on incoming signals.
2.  **Threshold:** A predefined value. When the membrane potential reaches this threshold, the neuron "spikes."
3.  **Spike:** A discrete event, often represented as a binary signal (1 for a spike, 0 for no spike), indicating the neuron's activation.
4.  **Refractory Period:** A brief period after a spike during which the neuron is less likely or unable to fire again. This helps regulate firing rates.
5.  **Synaptic Input:** Signals from other neurons, which are weighted and integrated into the receiving neuron's membrane potential.

## A Simple Leaky Integrate-and-Fire (LIF) Neuron Model

The Leaky Integrate-and-Fire (LIF) model is a foundational SNN neuron model due to its relative simplicity and biological plausibility.

*   **Integrate:** The neuron integrates incoming synaptic inputs, causing its membrane potential to rise.
*   **Leaky:** The membrane potential naturally decays over time (leaks) back to a resting potential if no new input arrives.
*   **Fire:** If the membrane potential crosses a predefined threshold, the neuron fires a spike. After firing, its potential is reset, and it enters a refractory period.

The dynamics of the membrane potential ($V_m$) for a LIF neuron can be described by a differential equation, but for implementation, we often use a discrete-time approximation.

$$
\frac{dV_m}{dt} = -\frac{V_m - V_{rest}}{\tau_m} + I(t)
$$

Where:
*   $V_m$ is the membrane potential.
*   $V_{rest}$ is the resting potential.
*   $\tau_m$ is the membrane time constant (governs the leak).
*   $I(t)$ is the total input current at time $t$.

In discrete time, this can be approximated as:

$$
V_m(t + \Delta t) = V_m(t) \cdot (1 - \frac{\Delta t}{\tau_m}) + I(t) \cdot \Delta t
$$

## Implementation Steps

Let's outline the steps to implement a basic LIF neuron in code. We'll use Python for this example, as it's a common language for scientific computing.

### Step 1: Define Neuron Parameters

We need to set up the parameters that define our LIF neuron's behavior.

```python
import numpy as np

class LIFNeuron:
    def __init__(self, tau_m=10.0, v_rest=-70.0, v_reset=-75.0, v_threshold=-55.0, refractory_period=2.0):
        """
        Initializes a Leaky Integrate-and-Fire neuron.

        Args:
            tau_m (float): Membrane time constant in ms.
            v_rest (float): Resting membrane potential in mV.
            v_reset (float): Reset membrane potential after firing in mV.
            v_threshold (float): Firing threshold in mV.
            refractory_period (float): Duration of the refractory period in ms.
        """
        self.tau_m = tau_m
        self.v_rest = v_rest
        self.v_reset = v_reset
        self.v_threshold = v_threshold
        self.refractory_period = refractory_period

        # Internal state variables
        self.membrane_potential = v_rest
        self.time_since_last_spike = float('inf') # Initialize to infinity to avoid immediate refractory state
        self.is_refractory = False
        self.spike_history = [] # To record when spikes occur
```

### Step 2: Implement the Update Function

This function will simulate one time step of the neuron's behavior.

```python
    def update(self, input_current, dt):
        """
        Updates the neuron's state for one time step.

        Args:
            input_current (float): The total input current to the neuron in nA.
            dt (float): The time step duration in ms.
        """
        if self.is_refractory:
            self.time_since_last_spike += dt
            if self.time_since_last_spike >= self.refractory_period:
                self.is_refractory = False
                self.membrane_potential = self.v_reset # Reset potential after refractory period ends
            return # Don't update potential during refractory period

        # Update membrane potential (Leaky Integrate)
        # Using discrete approximation of the differential equation
        decay_factor = 1.0 - (dt / self.tau_m)
        self.membrane_potential = self.membrane_potential * decay_factor + input_current * dt

        # Check for spike
        if self.membrane_potential >= self.v_threshold:
            self.fire()

    def fire(self):
        """
        Handles neuron firing event.
        """
        self.spike_history.append(0) # Placeholder for spike, we'll signify this externally
        self.membrane_potential = self.v_reset # Reset potential immediately
        self.is_refractory = True
        self.time_since_last_spike = 0.0
```

### Step 3: Simulate Network Activity

To demonstrate, let's simulate a single neuron receiving a constant input current over time.

```python
    def simulate(self, total_time, dt, input_current_function):
        """
        Simulates the neuron's activity over a given duration.

        Args:
            total_time (float): Total simulation time in ms.
            dt (float): Time step duration in ms.
            input_current_function (callable): A function that takes time (ms) and returns input current (nA).
        """
        time_points = np.arange(0, total_time, dt)
        potential_history = []
        spike_output = []

        for t in time_points:
            input_current = input_current_function(t)
            
            # Store current state before update for history
            potential_history.append(self.membrane_potential)
            
            # Perform update
            self.update(input_current, dt)
            
            # Record spike event (1 if fired, 0 otherwise)
            if self.is_refractory and self.time_since_last_spike == 0.0:
                spike_output.append(1) # Spike occurred at this step
            else:
                spike_output.append(0)

        return time_points, potential_history, spike_output
```

### Step 4: Running the Simulation

Now, let's create an instance of our neuron and run a simulation.

```python
# --- Example Usage ---

# Define parameters
tau_m = 20.0         # ms
v_rest = -70.0       # mV
v_reset = -75.0      # mV
v_threshold = -55.0  # mV
refractory_period = 5.0 # ms

# Create a LIF neuron instance
neuron = LIFNeuron(tau_m=tau_m, v_rest=v_rest, v_reset=v_reset, v_threshold=v_threshold, refractory_period=refractory_period)

# Define an input current function (constant input for simplicity)
def constant_input(t):
    if 50 <= t < 150: # Apply input between 50ms and 150ms
        return 1.6 # nA
    else:
        return 0.0

# Simulation parameters
total_simulation_time = 200.0 # ms
time_step = 0.1 # ms

# Run the simulation
time_points, potential_history, spike_output = neuron.simulate(total_simulation_time, time_step, constant_input)

# You can now plot potential_history and spike_output to visualize the neuron's behavior.
# For example, using matplotlib:
# import matplotlib.pyplot as plt
# plt.figure(figsize=(12, 6))
# plt.subplot(2, 1, 1)
# plt.plot(time_points, potential_history)
# plt.axhline(v_threshold, color='r', linestyle='--', label='Threshold')
# plt.ylabel("Membrane Potential (mV)")
# plt.title("LIF Neuron Membrane Potential")
# plt.legend()
#
# plt.subplot(2, 1, 2)
# plt.stem(time_points, spike_output, markerfmt=" ", linefmt="-", basefmt=" ")
# plt.xlabel("Time (ms)")
# plt.ylabel("Spike (1=yes, 0=no)")
# plt.title("Spike Output")
# plt.ylim(-0.1, 1.1)
# plt.tight_layout()
# plt.show()
```

## Key Takeaways

*   **LIF Model:** A fundamental building block for more complex SNNs.
*   **State Variables:** Membrane potential and refractory status are crucial internal states.
*   **Discrete Updates:** SNNs are often simulated using discrete time steps, approximating continuous dynamics.
*   **Parameters Matter:** The values of `tau_m`, `v_threshold`, `v_reset`, and `refractory_period` significantly impact neuron behavior.

This implementation provides a basic framework. You can extend this by:
*   Adding synaptic connections to create a network.
*   Implementing different neuron models (e.g., Izhikevich, HH).
*   Introducing learning rules for SNNs.

## Supports

- [[skills/systems/high-performance-computing/neuromorphic-and-brain-inspired-computing/microskills/spiking-neural-network-implementation|Spiking Neural Network Implementation]]

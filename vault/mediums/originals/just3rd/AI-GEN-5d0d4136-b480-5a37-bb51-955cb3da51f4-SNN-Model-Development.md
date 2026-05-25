---
type: "medium"
title: "Developing Basic Spiking Neural Network (SNN) Models"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/systems-infrastructure/compute-runtime/high-performance-computing/neuromorphic-and-brain-inspired-computing/microskills/snn-model-development|snn-model-development]]"
related-skills:
  - "[[skills/computing/systems-infrastructure/compute-runtime/high-performance-computing/neuromorphic-and-brain-inspired-computing/neuromorphic-and-brain-inspired-computing|neuromorphic-and-brain-inspired-computing]]"
learning-time-in-minutes: 4
---
# Developing Basic Spiking Neural Network (SNN) Models

This lesson focuses on applying your programming skills to construct fundamental Spiking Neural Network (SNN) models. Building on the principles of neuromorphic computing, we'll explore how to translate theoretical SNN concepts into practical code.

## Understanding the Core Components

Before we dive into coding, let's quickly recap the key elements that make up a basic SNN:

*   **Neurons:** The fundamental processing units. Unlike traditional artificial neurons, spiking neurons communicate using discrete events called "spikes."
*   **Synapses:** Connections between neurons. Synapses have a weight, which determines the influence of a presynaptic spike on the postsynaptic neuron's membrane potential.
*   **Membrane Potential:** An internal state of a neuron that changes over time, often accumulating incoming signals.
*   **Spiking Mechanism:** When a neuron's membrane potential reaches a certain threshold, it "fires" a spike and its potential is reset.

## Choosing a Programming Approach

For developing SNNs, several libraries and frameworks are available. For this introductory lesson, we'll use a conceptual Python-based approach that can be adapted to more specialized SNN libraries like **Brian2** or **Nengo**. The core idea is to simulate the dynamic behavior of neurons and their interactions.

## Step-by-Step SNN Model Construction

We will construct a simple feedforward SNN with a single layer of neurons. This model will demonstrate how to:

1.  Initialize neurons.
2.  Define synaptic connections.
3.  Simulate the passage of time and spike generation.

### Step 1: Neuron Initialization

We need to represent individual neurons. Each neuron will have a membrane potential and a threshold.

```python
import numpy as np

class LeakyIntegrateFireNeuron:
    def __init__(self, id, threshold=1.0, reset_potential=0.0, leak_rate=0.1):
        self.id = id
        self.threshold = threshold
        self.reset_potential = reset_potential
        self.leak_rate = leak_rate
        self.membrane_potential = 0.0
        self.spikes = [] # To record spike times

    def update(self, input_current, dt):
        # Leaky integration
        self.membrane_potential += (input_current - self.membrane_potential * self.leak_rate) * dt

        # Check for spiking
        if self.membrane_potential >= self.threshold:
            self.spikes.append(current_time) # Record spike time
            self.membrane_potential = self.reset_potential
            return True # Indicate a spike occurred
        return False # No spike

```

**Explanation:**

*   `LeakyIntegrateFireNeuron`: A common neuron model where the membrane potential decays over time (leaks) if no input is received.
*   `__init__`: Sets up the neuron's parameters: `threshold`, `reset_potential`, and `leak_rate`. `membrane_potential` starts at 0.
*   `update`: This is the core simulation step for a single neuron. It takes an `input_current` and `dt` (time step). The potential is updated based on the input and its leak. If the `threshold` is crossed, a spike is recorded, and the potential is reset.

### Step 2: Network Setup and Synaptic Connections

Now, let's create a network of these neurons and define how they connect.

```python
class SpikingNetwork:
    def __init__(self, num_input_neurons, num_output_neurons, dt=1.0):
        self.dt = dt
        self.input_neurons = [LeakyIntegrateFireNeuron(f'in_{i}') for i in range(num_input_neurons)]
        self.output_neurons = [LeakyIntegrateFireNeuron(f'out_{i}') for i in range(num_output_neurons)]

        # Synaptic weights (simple random initialization for demonstration)
        self.weights = np.random.rand(num_input_neurons, num_output_neurons) * 0.5

    def simulate(self, input_spikes, duration):
        global current_time # Use a global variable for current time for simplicity
        spike_times_output = {neuron.id: [] for neuron in self.output_neurons} # Store output spike times

        for current_time in range(0, duration, int(self.dt)):
            # Input layer processing (simplistic: if input spike, apply current)
            input_currents = np.zeros(len(self.output_neurons))
            for i, input_neuron in enumerate(self.input_neurons):
                if input_spikes.get(i) and current_time in input_spikes[i]:
                    # Distribute input to output neurons based on weights
                    input_currents += self.weights[i, :] * 0.5 # Apply some current proportional to weight

            # Output layer processing
            for j, output_neuron in enumerate(self.output_neurons):
                # Calculate total input current for this output neuron
                total_input = input_currents[j]
                if output_neuron.update(total_input, self.dt):
                    spike_times_output[output_neuron.id].append(current_time)

        return spike_times_output

```

**Explanation:**

*   `SpikingNetwork`: Manages the collection of neurons and their connections.
*   `__init__`: Creates lists for input and output neurons. `self.weights` represents the synaptic connections. Higher weight means stronger influence.
*   `simulate`: The main simulation loop.
    *   It iterates through time steps (`dt`).
    *   For each time step, it checks for incoming spikes from the input layer (simplified here by pre-defined `input_spikes`).
    *   If an input neuron spikes, it contributes to the `input_current` of the connected output neurons, scaled by the `weight`.
    *   Each output neuron's `update` method is called with the accumulated `total_input`.
    *   The function returns a dictionary of spike times for the output neurons.

### Step 3: Running a Simple Simulation

Let's put it all together with some sample input.

```python
# Simulation parameters
num_input = 2
num_output = 3
simulation_duration = 100 # time steps
dt = 1.0

# Initialize the network
network = SpikingNetwork(num_input, num_output, dt)

# Define sample input spikes (neuron 0 spikes at time 10 and 30, neuron 1 spikes at time 20)
sample_input_spikes = {
    0: [10, 30],
    1: [20]
}

# Run the simulation
output_spikes = network.simulate(sample_input_spikes, simulation_duration)

# Print results
print("Output Neuron Spikes:")
for neuron_id, spike_times in output_spikes.items():
    print(f"{neuron_id}: {spike_times}")

```

**Expected Output Structure (actual spike times will vary based on weights):**

```
Output Neuron Spikes:
out_0: [some_time1, some_time2, ...]
out_1: [some_timeA, some_timeB, ...]
out_2: [some_timeX, some_timeY, ...]
```

**How it Works:**

When the input neurons spike at their designated times, they send signals through the synapses to the output neurons. The `input_current` for each output neuron accumulates these signals (weighted by `network.weights`). If this accumulated current causes an output neuron's `membrane_potential` to exceed its `threshold`, that output neuron fires a spike. You can observe the pattern of spikes generated by the output neurons, which is a result of the input spikes and the network's connectivity and neuron dynamics.

## Further Development

This basic model is a starting point. To build more sophisticated SNNs, you would explore:

*   **More Neuron Models:** Integrate models like Izhikevich or Hodgkin-Huxley for richer dynamics.
*   **Synaptic Plasticity:** Implement learning rules like Spike-Timing-Dependent Plasticity (STDP) to adjust synaptic weights based on spike timing.
*   **Recurrent Connections:** Allow output neurons to connect back to themselves or other output neurons.
*   **Specialized Libraries:** Utilize libraries like Brian2 or Nengo, which provide optimized and feature-rich environments for SNN simulation.

By applying these programming steps, you are actively constructing and experimenting with basic SNN models, laying the groundwork for more complex neuromorphic systems.

## Supports

- [[skills/computing/systems-infrastructure/compute-runtime/high-performance-computing/neuromorphic-and-brain-inspired-computing/microskills/snn-model-development|SNN Model Development]]

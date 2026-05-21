---
type: "medium"
title: "Programming Basic Spiking Neural Network Models"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/systems/high-performance-computing/neuromorphic-and-brain-inspired-computing/microskills/basic-snn-programming|basic-snn-programming]]"
---
# Programming Basic Spiking Neural Network Models

This lesson focuses on applying fundamental concepts to program basic Spiking Neural Network (SNN) models. We'll explore the core components and how to implement them, building a foundation for more complex SNN development within the realm of Neuromorphic and Brain-Inspired Computing.

## Understanding the Building Blocks of SNNs

Unlike traditional Artificial Neural Networks (ANNs) that use continuous activation values, SNNs operate with discrete "spikes" – binary events transmitted over time. This event-driven nature is a key differentiator.

### Neurons in SNNs

The fundamental unit is the spiking neuron. A common model is the Leaky Integrate-and-Fire (LIF) neuron.

*   **Integration:** The neuron accumulates incoming spikes as "charge" or "membrane potential."
*   **Leaky Property:** This potential gradually decays over time, simulating the natural leakage of charge in biological neurons.
*   **Fire Threshold:** When the membrane potential reaches a predefined threshold, the neuron "fires" a spike.
*   **Reset:** After firing, the neuron's potential is reset to a baseline value, and it enters a refractory period where it cannot fire again immediately.

### Synapses in SNNs

Synapses connect neurons and are responsible for transmitting spikes.

*   **Weight:** Each synapse has a weight, determining the strength of the connection. A positive weight excites the postsynaptic neuron, while a negative weight inhibits it.
*   **Delay:** Spikes can travel with a certain delay through a synapse.
*   **Plasticity (Optional for Basic Models):** In more advanced SNNs, synaptic weights can change over time based on learning rules like Spike-Timing-Dependent Plasticity (STDP). For this lesson, we'll focus on fixed weights.

## Executing a Simple SNN Model

Let's walk through a practical example of programming a basic SNN using a Python library. We'll use the `Brian2` simulator, a popular choice for SNN research.

### Setup and Neuron Definition

First, we need to import the necessary library and define our neuron model.

```python
from brian2 import *

# Set default units
set_default_units(mV, ms)

# Define the LIF neuron model
model = """
    dv/dt = (-v + tau_syn * I) / tau_m : volt
    I : amp
    tau_syn : second
    tau_m : second
"""
```

In this code:
*   `dv/dt = (-v + tau_syn * I) / tau_m`: This is the differential equation governing the membrane potential (`v`). It includes terms for leakage (`-v`), synaptic input (`tau_syn * I`), and the membrane time constant (`tau_m`).
*   `I : amp`: Represents the input current to the neuron.
*   `tau_syn : second` and `tau_m : second`: Define the time constants for synaptic input and membrane leakage, respectively.

### Creating Neurons and Synapses

Now, we create our network of neurons and define how they are connected.

```python
# Create a population of 100 LIF neurons
neurons = NeuronGroup(100, model, threshold='v > -50*mV', reset='v = -70*mV', refractory=5*ms)

# Set initial conditions for the membrane potential
neurons.v = -70*mV

# Define synaptic parameters
syn_tau_syn = 10*ms
syn_tau_m = 20*ms
syn_weight = 0.5*nA

# Create a synapse connecting all neurons to each other (a fully connected random network)
# For simplicity, we'll add a small delay.
connections = Synapses(neurons, neurons, """w : amp""", delay=True)
connections.connect() # Connects all pairs of neurons

# Assign synaptic parameters to connections
connections.tau_syn = syn_tau_syn
connections.tau_m = syn_tau_m
connections.w = syn_weight
```

Here:
*   `NeuronGroup(100, model, ...)`: Creates 100 neurons using our defined `model`. We also specify the firing `threshold` and `reset` potentials, and the `refractory` period.
*   `Synapses(neurons, neurons, ...)`: Defines a synapse object. We specify it connects `neurons` to `neurons` and has a synaptic weight `w`. `delay=True` indicates we'll use synaptic delays.
*   `connections.connect()`: Creates connections. In this case, it creates all possible connections between neurons in the group.
*   `connections.w = syn_weight`: Sets the synaptic weight.

### Adding Input and Simulation

To see our SNN in action, we need to provide input and run the simulation.

```python
# Create an input spike source
input_spikes = SpikeGeneratorGroup(1, indices=[0], when='start')

# Connect the input spike source to our neurons (e.g., to all neurons)
input_connections = Synapses(input_spikes, neurons, "w : amp", delay=2*ms)
input_connections.connect(i=0, j=np.arange(100)) # Connect input to all 100 neurons
input_connections.w = 1.0*nA # Set the weight of input connections

# Define when the input spike will occur
input_spikes.spike_times = [0*ms]

# Record membrane potential and spike times
M = StateMonitor(neurons, 'v', record=[0, 1, 2]) # Record potential for first 3 neurons
S = SpikeMonitor(neurons)

# Set simulation time
sim_time = 100*ms

# Run the simulation
net = Network(neurons, connections, input_spikes, input_connections, M, S)
net.run(sim_time)

# Plotting results (requires matplotlib)
import matplotlib.pyplot as plt

plt.figure(figsize=(10, 5))
plt.plot(M.t / ms, M.v[0] / mV, label='Neuron 0')
plt.plot(M.t / ms, M.v[1] / mV, label='Neuron 1')
plt.plot(M.t / ms, M.v[2] / mV, label='Neuron 2')
plt.xlabel('Time (ms)')
plt.ylabel('Membrane Potential (mV)')
plt.title('Membrane Potential of Sample Neurons')
plt.legend()
plt.show()

plt.figure(figsize=(10, 5))
plt.scatter(S.t / ms, S.i, marker='.', label='Spikes')
plt.xlabel('Time (ms)')
plt.ylabel('Neuron Index')
plt.title('Spike Train of the Network')
plt.show()
```

In this segment:
*   `SpikeGeneratorGroup(1, indices=[0], when='start')`: Creates a single neuron that will generate spikes at specified times.
*   `Synapses(input_spikes, neurons, ...)`: Connects our artificial input spike source to our network.
*   `input_spikes.spike_times = [0*ms]`: Schedules an input spike to occur at the very beginning of the simulation.
*   `StateMonitor` and `SpikeMonitor`: Objects to record the membrane potential of selected neurons and the times at which any neuron fires, respectively.
*   `net.run(sim_time)`: Executes the simulation.
*   The plotting code visualizes the membrane potential of a few neurons and the spike times of all neurons, allowing you to observe the network's dynamic behavior.

## Key Takeaways and Next Steps

By completing this lesson, you've taken a crucial step in programming basic SNN models. You've learned to:

*   Define LIF neuron dynamics.
*   Create populations of neurons and establish synaptic connections.
*   Introduce external input to the network.
*   Simulate and visualize the network's activity.

This foundation enables you to explore more complex network architectures, different neuron models, and various learning rules to build sophisticated brain-inspired computational systems.

## Supports

- [[skills/systems/high-performance-computing/neuromorphic-and-brain-inspired-computing/microskills/basic-snn-programming|Basic SNN Programming]]

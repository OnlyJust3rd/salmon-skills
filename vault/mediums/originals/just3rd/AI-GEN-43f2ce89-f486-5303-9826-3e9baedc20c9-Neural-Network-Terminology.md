---
type: medium
title: Neural Network Terminology
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[neural-network-terminology|neural-network-terminology]]"
related-skills:
  - "[[skills/computing/data-ai/artificial-intelligence/machine-learning/deep-learning/artificial-neural-network/artificial-neural-network|artificial-neural-network]]"
learning-time-in-minutes: 3
---
# Neural Network Terminology

Understanding the basic vocabulary is the first step in learning about Artificial Neural Networks (ANNs). This lesson will introduce you to essential terms that form the foundation of how neural networks work, as presented in the early chapters of Krose and van der Smagt's text.

## What are the Building Blocks?

Neural networks are inspired by the structure of the human brain. They are made up of interconnected processing units called **neurons** (or nodes). These neurons are organized into layers.

*   **Input Layer**: This layer receives the raw data for the network. Each neuron in the input layer typically represents a feature of the data.
*   **Hidden Layer(s)**: These layers are between the input and output layers. They perform computations and transformations on the data received from the previous layer. A network can have one or many hidden layers, hence the term "deep learning" for networks with multiple hidden layers.
*   **Output Layer**: This layer produces the final result or prediction of the network. The number of neurons in the output layer depends on the task (e.g., one neuron for a binary classification, multiple for multi-class classification or regression).

## Connections and Weights

Neurons are connected to each other. Each connection has an associated **weight**. The weight determines the strength of the connection between two neurons. A higher weight means the signal from one neuron has a stronger influence on the next.

When a neuron receives input from other neurons, it combines these inputs based on the weights of the connections. This combined signal is then passed through an **activation function**.

*   **Activation Function**: This is a mathematical function applied to the weighted sum of inputs to a neuron. It introduces non-linearity into the network, allowing it to learn complex patterns. Common examples include the sigmoid, ReLU, and tanh functions.

The output of the activation function is then passed on to the neurons in the next layer.

## Bias

Each neuron (except in the input layer) also has a **bias** term. The bias can be thought of as an additional input that is always "on" or a threshold that the weighted sum of inputs must overcome for the neuron to activate strongly. It helps the model fit the data better by shifting the activation function.

## Practical Scenario

Imagine you're building a simple neural network to predict if a student will pass an exam based on two factors: hours studied and previous test scores.

*   **Input Layer**: You might have two input neurons, one for "Hours Studied" and one for "Previous Score."
*   **Hidden Layer**: A hidden layer with a few neurons could process these inputs to find intermediate relationships.
*   **Output Layer**: A single output neuron could represent the probability of passing the exam.

Each connection between these neurons would have a weight, and each neuron in the hidden and output layers would have a bias. The activation function would determine how these combined inputs influence the final pass/fail prediction.

## Practice Task

Identify and define the following terms from the lesson:

1.  Neuron
2.  Input Layer
3.  Hidden Layer
4.  Output Layer
5.  Weight
6.  Activation Function
7.  Bias

## Self-Check Questions

1.  What is the primary role of the input layer in a neural network?
2.  Where are the "hidden" computations performed in a neural network?
3.  What does a "weight" represent in the context of neural network connections?
4.  Why are activation functions important for neural networks?
5.  How does a "bias" term affect the behavior of a neuron?

## Supports

- [[neural-network-terminology|Neural Network Terminology]]

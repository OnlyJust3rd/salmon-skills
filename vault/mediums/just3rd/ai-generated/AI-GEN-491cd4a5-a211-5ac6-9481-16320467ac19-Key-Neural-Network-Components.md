---
type: "medium"
title: "Key Neural Network Components"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/data/ai/artificial-neural-network/microskills/key-neural-network-components|key-neural-network-components]]"
---
# Key Neural Network Components

Neural networks, inspired by the human brain, are powerful tools for machine learning. To understand how they work, we first need to identify their fundamental building blocks. This lesson focuses on the essential structural elements of a basic neural network.

## What are the Key Components?

A fundamental neural network is composed of several interconnected layers. Each layer contains artificial neurons, also called nodes or units.

*   **Input Layer:** This is the first layer of the network. It receives the raw data that the network will process. The number of neurons in the input layer is determined by the number of features in your dataset. For example, if you have a dataset with 10 features, your input layer will have 10 neurons.

*   **Hidden Layer(s):** These layers are positioned between the input and output layers. They perform computations and transformations on the data received from the previous layer. A neural network can have one or multiple hidden layers. The complexity of the problem often dictates the number and size of hidden layers.

*   **Output Layer:** This is the final layer of the network. It produces the network's prediction or classification. The number of neurons in the output layer depends on the task. For binary classification (e.g., spam or not spam), there's usually one neuron. For multi-class classification (e.g., recognizing digits 0-9), there would be 10 neurons.

*   **Neurons (Nodes/Units):** These are the processing units within each layer. Each neuron receives input signals, performs a calculation, and passes the result to the next layer.

*   **Weights:** These are numerical values associated with the connections between neurons. Weights determine the strength of the connection. A higher weight means a stronger influence of one neuron on another. During training, the network learns by adjusting these weights.

*   **Biases:** Each neuron typically has an associated bias, which is a constant value added to the weighted sum of inputs. Biases help shift the activation function, allowing the neuron to activate even when all inputs are zero, or to require a stronger signal to activate.

*   **Activation Function:** This is a mathematical function applied to the output of each neuron. It introduces non-linearity into the network, which is crucial for learning complex patterns. Common activation functions include ReLU, Sigmoid, and Tanh.

## Practical Scenario

Imagine you are building a simple neural network to classify images of cats and dogs.

*   **Input Layer:** If each image is represented by 100 pixels, your input layer will have 100 neurons, each receiving the intensity value of a single pixel.
*   **Hidden Layer(s):** You might have one or two hidden layers with, say, 50 neurons each. These layers will process the pixel information to detect edges, shapes, and textures.
*   **Output Layer:** For binary classification (cat or dog), you'd have one output neuron. Its output might be a probability score, indicating the likelihood of the image being a cat.
*   **Weights and Biases:** Connections between pixels and the first hidden layer, and between neurons in subsequent layers, will have associated weights and biases. These will be adjusted during training to learn what features distinguish cats from dogs.
*   **Activation Function:** An activation function like ReLU might be used in the hidden layers to introduce non-linearity, and a Sigmoid function in the output layer to produce a probability between 0 and 1.

## Practice Task

Sketch a simple neural network with:

1.  An input layer with 3 neurons.
2.  One hidden layer with 4 neurons.
3.  An output layer with 2 neurons.

Label the input neurons, hidden neurons, and output neurons. Briefly describe what each layer might represent in a hypothetical scenario (e.g., predicting house prices based on size, location, and number of rooms).

## Self-Check Questions

1.  What is the primary role of the input layer?
2.  How many neurons are typically in the output layer for a task that predicts one of five categories?
3.  What do weights represent in a neural network connection?
4.  What is the purpose of an activation function?

## Supports

- [[skills/data/ai/artificial-neural-network/microskills/key-neural-network-components|Key Neural Network Components]]

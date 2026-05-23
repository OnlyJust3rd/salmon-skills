---
type: "medium"
title: "Building Your First Feedforward Neural Network"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/data-ai/artificial-intelligence/deep-learning/microskills/feedforward-neural-network-construction|feedforward-neural-network-construction]]"
learning-time-in-minutes: 3
---
# Building Your First Feedforward Neural Network

This lesson focuses on the practical skill of constructing a simple feedforward neural network. We'll use a popular deep learning framework to build and train a basic network, preparing you to apply this core building block to various machine learning problems.

## What is a Feedforward Neural Network?

A feedforward neural network, also known as a Multi-Layer Perceptron (MLP), is a fundamental type of artificial neural network. It's called "feedforward" because information flows in only one direction – from the input layer, through one or more hidden layers, to the output layer. There are no cycles or loops.

Each layer consists of neurons (or nodes) that perform simple computations. Connections between neurons have associated weights, which are adjusted during training to learn patterns in the data.

## Practical Example: Predicting House Prices

Let's imagine we have a dataset of houses with features like:

*   Square footage
*   Number of bedrooms
*   Number of bathrooms
*   Age of the house

Our goal is to predict the `price` of a house. A feedforward neural network is well-suited for this regression task.

### Implementation with Python (using TensorFlow/Keras)

We'll use the Keras API within TensorFlow for a straightforward implementation.

First, ensure you have TensorFlow installed:
```bash
pip install tensorflow
```

Now, let's build a simple network:

```python
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense

# Assume you have loaded your data into numpy arrays:
# X_train: features for training (e.g., square footage, bedrooms, etc.)
# y_train: target prices for training

# Example placeholder data (replace with your actual data)
X_train = tf.random.normal([100, 4]) # 100 samples, 4 features
y_train = tf.random.normal([100, 1]) # 100 samples, 1 target price

# Define the model
model = Sequential([
    # Input layer (implicitly defined by the first Dense layer's input_shape)
    # Hidden layer 1: 64 neurons, ReLU activation for non-linearity
    Dense(64, activation='relu', input_shape=(X_train.shape[1],)),
    # Hidden layer 2: 32 neurons, ReLU activation
    Dense(32, activation='relu'),
    # Output layer: 1 neuron for regression (predicting a single price)
    # No activation function needed for regression output
    Dense(1)
])

# Compile the model
# optimizer: how the model updates its weights (Adam is a popular choice)
# loss: measures how well the model is doing (Mean Squared Error for regression)
# metrics: what to monitor during training (Mean Absolute Error is also useful)
model.compile(optimizer='adam',
              loss='mse',
              metrics=['mae'])

# Display the model's architecture
model.summary()

# Train the model
# epochs: number of times the model will see the entire dataset
# batch_size: number of samples processed before the model is updated
history = model.fit(X_train, y_train, epochs=50, batch_size=32, verbose=0)

print("Model trained successfully!")
```

**How it works:**

1.  **`Sequential` Model**: We create a `Sequential` model, which is a linear stack of layers.
2.  **`Dense` Layers**: These are fully connected layers where each neuron in one layer is connected to every neuron in the next.
    *   `units`: The number of neurons in the layer.
    *   `activation`: The activation function introduces non-linearity, allowing the network to learn complex patterns. 'relu' (Rectified Linear Unit) is common.
    *   `input_shape`: Specifies the shape of the input data for the first layer.
3.  **Output Layer**: For regression, a single neuron with no activation is typical to output a continuous value.
4.  **`compile`**: Configures the model for training.
    *   `optimizer`: 'adam' is an efficient optimization algorithm.
    *   `loss`: 'mse' (Mean Squared Error) is standard for regression problems.
5.  **`fit`**: Trains the model using your data. `epochs` and `batch_size` are crucial hyperparameters.

## Practice Task

1.  Modify the `Dense` layers in the provided Python code. Try adding one more hidden layer or changing the number of neurons in existing layers.
2.  Experiment with a different optimizer (e.g., `'sgd'`).
3.  Change the `epochs` to 100 and observe if the training performance improves.

## Self-Check Questions

1.  What is the primary purpose of activation functions in feedforward neural networks?
2.  Why would you choose 'mse' as a loss function for a house price prediction problem?
3.  What does the `input_shape` argument specify in the first `Dense` layer?

## Supports

- [[skills/computing/data-ai/artificial-intelligence/deep-learning/microskills/feedforward-neural-network-construction|Feedforward neural network construction]]

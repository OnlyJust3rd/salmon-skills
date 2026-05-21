---
type: "medium"
title: "Model-Free Reinforcement Learning Principles"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/data/ai/reinforcement-learning/microskills/model-free-rl-principles|model-free-rl-principles]]"
---
# Model-Free Reinforcement Learning Principles

In reinforcement learning (RL), an agent learns to make decisions by interacting with an environment. A key distinction in how RL agents learn is whether they try to build an internal model of the environment or learn directly from their experiences. This lesson focuses on the principles of **model-free reinforcement learning**.

## What is Model-Free Reinforcement Learning?

Model-free RL is an approach where the agent learns a policy or a value function directly from trial and error, without attempting to create an explicit model of the environment's dynamics. This means the agent doesn't try to predict:

*   **What will happen next?** (The next state)
*   **What is the reward for that next step?** (The reward function)

Instead, the agent learns from the **outcomes of its actions**. It observes the state it's in, takes an action, and then observes the resulting reward and the next state. This experience is used to directly improve its decision-making strategy.

## Core Idea: Learning from Experience

Imagine a robot learning to navigate a maze.

*   **Model-based RL:** This robot would try to build a map of the maze, learning where walls are, where open paths lead, and where the exit is. It would then use this map to plan its route.
*   **Model-free RL:** This robot would simply wander through the maze. When it bumps into a wall, it learns that action in that location was bad. When it finds a path that leads to a reward (like reaching the exit), it learns that those actions were good. It doesn't need to know the full layout of the maze; it just needs to learn which actions are better than others in different situations.

## Key Concepts in Model-Free RL

Since model-free RL learns directly from interactions, it focuses on two main things the agent can learn:

1.  **Policy ($\pi$):** This is the agent's strategy. It dictates what action to take in a given state. In model-free RL, the agent can learn a policy directly. For example, in a simple game, the policy might be "if the ball is on the left, move the paddle left."
2.  **Value Function:** This estimates how good it is to be in a particular state or to take a particular action in a state.
    *   **State-Value Function ($V^\pi(s)$):** The expected total future reward if you start in state $s$ and follow policy $\pi$ thereafter.
    *   **Action-Value Function ($Q^\pi(s, a)$):** The expected total future reward if you are in state $s$, take action $a$, and then follow policy $\pi$ thereafter.

Model-free methods often aim to learn either the optimal policy ($\pi^*$) directly, or learn the optimal state-value function ($V^*(s)$) or action-value function ($Q^*(s, a)$) from which the optimal policy can be derived.

## How Model-Free RL Works: Learning Values or Policies

Model-free algorithms can be broadly categorized into two types based on what they learn:

*   **Value-Based Methods:** These methods learn a value function (usually the $Q$-function). The policy is then implicitly derived from the learned value function. The agent acts greedily with respect to its learned $Q$-values (i.e., chooses the action with the highest estimated $Q$-value).
    *   **Example Algorithm:** Q-learning is a famous example. It updates its estimate of $Q(s, a)$ based on the reward received and the estimated maximum future reward from the next state.

    $$
    Q(s, a) \leftarrow Q(s, a) + \alpha [r + \gamma \max_{a'} Q(s', a') - Q(s, a)]
    $$

    Where:
    *   $\alpha$ is the learning rate.
    *   $r$ is the reward received.
    *   $\gamma$ is the discount factor.
    *   $s'$ is the next state.
    *   $a'$ are possible actions in the next state.

*   **Policy-Based Methods:** These methods directly learn the policy function $\pi(s)$ without necessarily learning a value function. The policy directly maps states to actions or probabilities of actions.
    *   **Example Algorithm:** REINFORCE is a policy gradient method. It adjusts the policy parameters in the direction that increases the expected reward.

*   **Actor-Critic Methods:** These methods combine both value-based and policy-based approaches. An "actor" learns the policy, and a "critic" learns a value function to guide the actor's learning.

## Advantages of Model-Free RL

*   **Simplicity:** They are often conceptually simpler to implement than model-based methods because you don't need to design or learn an environment model.
*   **Directness:** They learn what they need to know directly from interactions.
*   **Can be effective in complex environments:** In highly complex or unknown environments where building an accurate model is difficult or impossible, model-free methods can still learn effective policies.

## Disadvantages of Model-Free RL

*   **Sample Inefficiency:** They often require a large amount of experience (many interactions with the environment) to learn effectively. This is because they learn everything from scratch through trial and error.
*   **Can be slow to converge:** Due to the need for extensive exploration and learning from noisy rewards.

## When to Use Model-Free RL

Model-free RL is a good choice when:

*   The environment dynamics are unknown or too complex to model accurately.
*   You have a way to get a lot of data/experience from the environment (e.g., through simulation).
*   The primary goal is to find a good policy quickly, even if it requires more exploration.

Understanding model-free principles is foundational for many modern RL applications, from game playing to robotics.

## Supports

- [[skills/data/ai/reinforcement-learning/microskills/model-free-rl-principles|Model-free RL principles]]

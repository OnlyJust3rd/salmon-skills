---
type: medium
title: Simulating a Grid-World Problem
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[grid-world-problem-simulation|grid-world-problem-simulation]]"
learning-time-in-minutes: 3
---
# Simulating a Grid-World Problem

This lesson focuses on the practical aspect of simulating a grid-world environment, a crucial step for implementing and testing Q-learning algorithms. We'll cover how to represent the grid, define states and actions, and create the logic for an agent's movement.

## What is a Grid-World?

A grid-world is a simple, discrete environment often used to introduce reinforcement learning concepts. It's a grid of cells, where an agent can move between adjacent cells. The goal is typically to reach a specific target cell while potentially avoiding obstacles or negative rewards.

### Key Components:

*   **Grid:** A 2D array representing the environment.
*   **States:** Each cell in the grid can be considered a state.
*   **Actions:** The agent can usually move Up, Down, Left, or Right.
*   **Rewards:** A numerical value received by the agent for transitioning to a new state.
*   **Terminal States:** States where the episode ends (e.g., reaching the goal or falling into a pit).

## Representing the Grid

We'll use a 2D list (or a NumPy array in Python) to represent our grid. Different values in the array can signify different types of cells.

*   `0`: Empty/walkable cell
*   `1`: Obstacle/wall
*   `2`: Goal state
*   `3`: Pit/danger state

**Example Grid Structure (Python):**

```python
grid = [
    [0, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 0, 2],
    [0, 0, 0, 0]
]
```

In this example, we have a 4x4 grid. Cell `(2, 3)` (row 2, column 3) is the goal. Cell `(1, 1)` is an obstacle.

## Defining States and Actions

A state can be represented by the agent's current coordinates `(row, column)`. Actions will be integers or strings representing directions.

**Possible Actions:**

*   `0`: Up
*   `1`: Down
*   `2`: Left
*   `3`: Right

## Implementing Agent Movement

The core of the simulation involves a function that takes the current state and an action, and returns the next state and the reward.

### The `step` Function

This function will:

1.  Take the current `(row, col)` and an `action`.
2.  Calculate the potential `next_row` and `next_col` based on the action.
3.  Check for boundary conditions (staying within the grid).
4.  Check for obstacles. If the next step is into an obstacle, the agent stays in the current cell.
5.  Determine the `reward` based on the `grid` content of the `next_row`, `next_col`.
6.  Check if the `next_state` is a terminal state (goal or pit).
7.  Return the `next_state`, `reward`, and a `done` flag (True if terminal, False otherwise).

**Pseudocode for the `step` function:**

```pseudocode
function step(current_row, current_col, action, grid):
    # Define movement deltas for each action
    if action == UP:
        dr = -1, dc = 0
    elif action == DOWN:
        dr = 1, dc = 0
    elif action == LEFT:
        dr = 0, dc = -1
    elif action == RIGHT:
        dr = 0, dc = 1

    potential_next_row = current_row + dr
    potential_next_col = current_col + dc

    # Check boundaries
    if potential_next_row < 0 or potential_next_row >= num_rows or \
       potential_next_col < 0 or potential_next_col >= num_cols:
        # Stay in current position if out of bounds
        next_row = current_row
        next_col = current_col
    else:
        # Check for obstacles
        if grid[potential_next_row][potential_next_col] == OBSTACLE:
            # Stay in current position if obstacle
            next_row = current_row
            next_col = current_col
        else:
            next_row = potential_next_row
            next_col = potential_next_col

    # Determine reward
    reward = 0
    done = False
    cell_type = grid[next_row][next_col]

    if cell_type == GOAL:
        reward = 10  # Positive reward for reaching goal
        done = True
    elif cell_type == PIT:
        reward = -10 # Negative reward for falling into pit
        done = True
    # else if cell_type is EMPTY or OBSTACLE (where agent didn't move)
    #    reward = -1 # Small negative reward for each step (encourages shorter paths)

    return (next_row, next_col), reward, done
```

## Example Usage

Let's say our agent is at `(0, 0)` and takes the `RIGHT` action.

1.  `current_row = 0`, `current_col = 0`, `action = RIGHT` (3).
2.  `dr = 0`, `dc = 1`.
3.  `potential_next_row = 0 + 0 = 0`, `potential_next_col = 0 + 1 = 1`.
4.  Boundaries are fine.
5.  `grid[0][1]` is `0` (empty). So, `next_row = 0`, `next_col = 1`.
6.  `cell_type = grid[0][1]` which is `0`. Not goal or pit.
7.  `reward = -1` (if we implement a step cost).
8.  `done = False`.
9.  Return `(0, 1)`, `-1`, `False`.

Now, if the agent is at `(1, 0)` and takes the `RIGHT` action.

1.  `current_row = 1`, `current_col = 0`, `action = RIGHT` (3).
2.  `dr = 0`, `dc = 1`.
3.  `potential_next_row = 1 + 0 = 1`, `potential_next_col = 0 + 1 = 1`.
4.  Boundaries are fine.
5.  `grid[1][1]` is `1` (obstacle). The agent stays put.
6.  `next_row = 1`, `next_col = 0`.
7.  `cell_type = grid[1][0]` which is `0`.
8.  `reward = -1` (step cost).
9.  `done = False`.
10. Return `(1, 0)`, `-1`, `False`.

## Next Steps

With this simulation logic in place, you can now proceed to implement the Q-learning algorithm itself. You'll use this `step` function to allow your Q-learning agent to interact with the environment, observe states, receive rewards, and learn an optimal policy.

## Supports

- [[grid-world-problem-simulation|Grid-world problem simulation]]

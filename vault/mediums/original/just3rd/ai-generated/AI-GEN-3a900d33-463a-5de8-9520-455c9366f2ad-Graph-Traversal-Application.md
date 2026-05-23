---
type: "medium"
title: "Applying Graph Traversal: Finding Your Way Through Data"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/computer-science/data-structures/graph-and-tree-modeling/microskills/graph-traversal-application|graph-traversal-application]]"
learning-time-in-minutes: 5
---
# Applying Graph Traversal: Finding Your Way Through Data

In the world of graph and tree modeling, understanding how to explore your data is crucial. This lesson focuses on **Graph Traversal**, specifically using algorithms like Depth-First Search (DFS) and Breadth-First Search (BFS) to systematically visit and process all the nodes in a graph. This skill is fundamental for solving many real-world problems, from navigating social networks to optimizing delivery routes.

## Why Use Graph Traversal?

Imagine a map where cities are nodes and roads are edges. If you want to find all cities reachable from your current location, or check if two cities are connected, graph traversal algorithms are your tools. They provide a structured way to explore these connections.

**Key Applications:**

*   **Connectivity:** Determining if two nodes are connected in a graph.
*   **Pathfinding:** Finding a path between two nodes (though not necessarily the shortest without modifications).
*   **Component Identification:** Finding all connected components within a graph.
*   **Topological Sorting:** Ordering nodes in a directed acyclic graph (DAG) based on dependencies.
*   **Web Crawling:** Discovering and indexing web pages.

## Depth-First Search (DFS): Going Deep First

DFS explores as far as possible along each branch before backtracking. Think of it like exploring a maze by always taking the first path you see until you hit a dead end, then turning back to try another.

### How DFS Works

1.  Start at a chosen node.
2.  Mark the current node as visited.
3.  For each unvisited neighbor of the current node:
    *   Recursively call DFS on that neighbor.

If you're not using recursion, you can use a stack to keep track of the nodes to visit.

### Pseudocode for Recursive DFS

```
function DFS(graph, start_node, visited_set):
  mark start_node as visited in visited_set
  process(start_node) // e.g., print the node, check its properties

  for each neighbor in graph[start_node]:
    if neighbor is not visited:
      DFS(graph, neighbor, visited_set)
```

### Example: Social Network Connections

Let's say we have a social network represented as a graph where people are nodes and friendships are edges. We want to find all friends-of-friends of a specific person, Alice.

**Graph:**

*   Alice -> Bob, Carol
*   Bob -> Alice, David
*   Carol -> Alice, Eve
*   David -> Bob
*   Eve -> Carol

**Applying DFS starting from Alice:**

1.  **Visit Alice.** Add Alice to visited set. Process Alice.
2.  Neighbors of Alice: Bob, Carol.
3.  Go to **Bob**. Visit Bob. Add Bob to visited set. Process Bob.
4.  Neighbors of Bob: Alice, David.
    *   Alice is visited. Skip.
5.  Go to **David**. Visit David. Add David to visited set. Process David.
6.  Neighbors of David: Bob.
    *   Bob is visited. Skip.
7.  Backtrack to Bob. All neighbors processed.
8.  Backtrack to Alice. Carol is next neighbor.
9.  Go to **Carol**. Visit Carol. Add Carol to visited set. Process Carol.
10. Neighbors of Carol: Alice, Eve.
    *   Alice is visited. Skip.
11. Go to **Eve**. Visit Eve. Add Eve to visited set. Process Eve.
12. Neighbors of Eve: Carol.
    *   Carol is visited. Skip.
13. Backtrack to Carol. All neighbors processed.
14. Backtrack to Alice. All neighbors processed.

**Visited Order (example):** Alice, Bob, David, Carol, Eve. This sequence shows how DFS explores one path fully before moving to the next.

## Breadth-First Search (BFS): Level by Level Exploration

BFS explores all the neighbor nodes at the present depth before moving on to the nodes at the next depth level. It's like spreading out from a central point, visiting all immediate neighbors, then all their neighbors, and so on.

### How BFS Works

1.  Start at a chosen node.
2.  Add the starting node to a queue and mark it as visited.
3.  While the queue is not empty:
    *   Dequeue a node.
    *   Process the dequeued node.
    *   For each unvisited neighbor of the dequeued node:
        *   Mark the neighbor as visited.
        *   Enqueue the neighbor.

### Pseudocode for BFS

```
function BFS(graph, start_node):
  queue = new Queue()
  visited_set = new Set()

  add start_node to queue
  add start_node to visited_set

  while queue is not empty:
    current_node = queue.dequeue()
    process(current_node) // e.g., print the node

    for each neighbor in graph[current_node]:
      if neighbor is not visited:
        add neighbor to visited_set
        add neighbor to queue
```

### Example: Finding the Closest Connections

Using the same social network, let's find Alice's direct friends (level 1), then her friends' friends (level 2), and so on.

**Graph:** (Same as above)

**Applying BFS starting from Alice:**

1.  **Initialize:** Queue: [Alice], Visited: {Alice}.
2.  **Dequeue Alice.** Process Alice. Neighbors: Bob, Carol.
    *   Enqueue Bob. Visited: {Alice, Bob}. Queue: [Bob].
    *   Enqueue Carol. Visited: {Alice, Bob, Carol}. Queue: [Bob, Carol].
3.  **Dequeue Bob.** Process Bob. Neighbors: Alice, David.
    *   Alice is visited. Skip.
    *   Enqueue David. Visited: {Alice, Bob, Carol, David}. Queue: [Carol, David].
4.  **Dequeue Carol.** Process Carol. Neighbors: Alice, Eve.
    *   Alice is visited. Skip.
    *   Enqueue Eve. Visited: {Alice, Bob, Carol, David, Eve}. Queue: [David, Eve].
5.  **Dequeue David.** Process David. Neighbors: Bob.
    *   Bob is visited. Skip. Queue: [Eve].
6.  **Dequeue Eve.** Process Eve. Neighbors: Carol.
    *   Carol is visited. Skip. Queue: [].
7.  Queue is empty. BFS complete.

**Visited Order (level by level):** Alice (level 0), Bob, Carol (level 1), David, Eve (level 2). BFS naturally explores in layers, which is useful for finding shortest paths in unweighted graphs.

## Choosing Between DFS and BFS

| Feature        | Depth-First Search (DFS)                                | Breadth-First Search (BFS)                                    |
| :------------- | :------------------------------------------------------ | :------------------------------------------------------------ |
| **Exploration**| Goes deep along a path before backtracking.             | Explores level by level.                                      |
| **Data Structure**| Stack (implicit via recursion, or explicit)             | Queue                                                         |
| **Memory**     | Can be more memory-efficient if the graph is deep.      | Can use more memory if the graph is wide.                     |
| **Pathfinding**| Finds *a* path, not necessarily the shortest in unweighted graphs. | Finds the shortest path in unweighted graphs.                 |
| **Applications**| Cycle detection, topological sort, finding connected components. | Shortest path in unweighted graphs, network broadcasting.     |

## Practical Application

When applying these algorithms, consider what information you need. If you're looking for any connection, DFS might be faster to find *an* answer. If you need the *closest* connection, BFS is your go-to for unweighted graphs. For weighted graphs, more advanced algorithms like Dijkstra's are needed, but DFS and BFS lay the groundwork for understanding graph exploration.

## Supports

- [[skills/computing/computer-science/data-structures/graph-and-tree-modeling/microskills/graph-traversal-application|Graph Traversal Application]]

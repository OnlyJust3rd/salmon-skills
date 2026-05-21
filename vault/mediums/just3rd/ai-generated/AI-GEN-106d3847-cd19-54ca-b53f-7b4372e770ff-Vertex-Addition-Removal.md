---
type: "medium"
title: "Vertex Addition and Removal in Graphs"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/programming/algorithms/algorithmic-thinking/microskills/vertex-addition-removal|vertex-addition-removal]]"
---
# Vertex Addition and Removal in Graphs

In algorithmic thinking, a graph is a fundamental data structure. To effectively manipulate graphs, we need to be able to add and remove vertices (nodes). This process is crucial for building and modifying dynamic graph representations.

## Core Idea

Adding a vertex involves creating a new node and adding it to the graph's collection of vertices. Removing a vertex requires not only deleting the node itself but also removing all edges connected to it, preventing dangling references.

## Practical Example: Social Network Simulation

Imagine you're building a simplified social network simulation. Users are represented as vertices.

Initially, your network has a few users: Alice, Bob, and Charlie.

**Adding a New User (Vertex):**
When a new user, David, joins the network, you need to add him as a new vertex. This is a straightforward operation.

**Removing a User (Vertex):**
If a user, Bob, decides to leave the network, you must remove his vertex. Critically, any connections Bob had with other users (e.g., friendships) must also be severed. If Bob was friends with Alice, the edge between Bob and Alice must be deleted.

## Implementation (Pseudocode)

Let's look at how you might implement this using pseudocode, assuming a graph is represented by a list of vertices and a list of edges.

```pseudocode
// Assume 'graph' is an object with 'vertices' (a list) and 'edges' (a list)

// Function to add a vertex
FUNCTION add_vertex(graph, vertex_id):
  IF vertex_id IS NOT ALREADY IN graph.vertices:
    ADD vertex_id TO graph.vertices
    PRINT "Vertex " + vertex_id + " added."
  ELSE:
    PRINT "Vertex " + vertex_id + " already exists."

// Function to remove a vertex
FUNCTION remove_vertex(graph, vertex_id):
  IF vertex_id IS IN graph.vertices:
    REMOVE vertex_id FROM graph.vertices

    // Remove all edges connected to this vertex
    new_edges = []
    FOR EACH edge IN graph.edges:
      IF edge.source != vertex_id AND edge.destination != vertex_id:
        ADD edge TO new_edges
    graph.edges = new_edges

    PRINT "Vertex " + vertex_id + " and its edges removed."
  ELSE:
    PRINT "Vertex " + vertex_id + " not found."
```

## Practice Task

Consider a graph representing cities and roads connecting them.

1.  **Add a new city:** Implement a function `add_city(graph, city_name)` that adds a new city to your graph.
2.  **Remove a city:** Implement a function `remove_city(graph, city_name)` that removes a city and all roads connected to it.

If your graph currently has cities A, B, and C, with roads A-B and B-C:
*   Add city D.
*   Remove city B. What should the graph look like afterward?

## Self-Check Questions

1.  Why is it important to remove edges when removing a vertex?
2.  What could happen if you only removed the vertex and not its associated edges?
3.  Describe a real-world scenario where adding or removing vertices in a graph is a common operation.

## Supports

- [[skills/programming/algorithms/algorithmic-thinking/microskills/vertex-addition-removal|Vertex Addition/Removal]]

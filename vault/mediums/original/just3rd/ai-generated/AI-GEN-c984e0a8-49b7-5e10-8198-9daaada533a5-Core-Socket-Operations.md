---
type: "medium"
title: "Core Socket Operations"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/systems-infrastructure/networking/transport-application-networking/socket-programming/microskills/core-socket-operations|core-socket-operations]]"
learning-time-in-minutes: 4
---
# Core Socket Operations

This lesson introduces you to the fundamental functions used in socket programming to establish and manage network connections. Understanding these core operations is crucial for building network applications.

## What are Socket Functions?

Socket functions are the building blocks for network communication. They provide an interface for applications to send and receive data over a network. Think of a socket as an endpoint for sending or receiving data. These functions allow your program to create these endpoints, connect them to other endpoints, and then exchange data.

## Key Socket Functions

Let's explore the essential socket functions you'll encounter. These functions are typically part of libraries in programming languages like Python, C, Java, and others.

### `socket()`

This is usually the first function you'll call. It creates a new socket.

*   **Purpose:** To create a socket that represents one endpoint of a connection.
*   **Arguments:** Typically requires specifying the address family (e.g., IPv4 or IPv6) and the socket type (e.g., TCP or UDP).
    *   **Address Family:** `AF_INET` for IPv4, `AF_INET6` for IPv6.
    *   **Socket Type:** `SOCK_STREAM` for connection-oriented protocols like TCP, `SOCK_DGRAM` for connectionless protocols like UDP.
*   **Returns:** A socket descriptor (an integer) which is a handle to the newly created socket.

**Example (Conceptual Pseudocode):**

```
my_socket = socket(AF_INET, SOCK_STREAM)
```

### `bind()`

This function associates a local address (IP address and port number) with a socket. This is essential for servers to listen for incoming connections on a specific network interface and port.

*   **Purpose:** To assign a name (address and port) to a socket.
*   **Arguments:** Takes the socket descriptor and a structure containing the IP address and port number.

**Example (Conceptual Pseudocode):**

```
server_address = ("127.0.0.1", 8080) # IP address and port
bind(my_socket, server_address)
```

### `listen()`

Once a server socket is bound to an address, this function tells the socket to start listening for incoming connections.

*   **Purpose:** To allow a server socket to accept incoming connection requests.
*   **Arguments:** Takes the socket descriptor and a `backlog` parameter, which is a queue size for pending connections.

**Example (Conceptual Pseudocode):**

```
listen(my_socket, 5) # Allow up to 5 pending connections
```

### `accept()`

This is a blocking function that waits for an incoming connection request. When a client attempts to connect, `accept()` creates a *new* socket for that specific connection and returns it, along with the client's address.

*   **Purpose:** To accept a connection from a client.
*   **Arguments:** Takes the listening server socket descriptor.
*   **Returns:** A new socket descriptor for the connection and the client's address.

**Example (Conceptual Pseudocode):**

```
client_socket, client_address = accept(my_socket)
```

### `connect()`

This function is used by clients to establish a connection to a server socket.

*   **Purpose:** To initiate a connection to a remote socket.
*   **Arguments:** Takes the client's socket descriptor and the server's address (IP and port).

**Example (Conceptual Pseudocode):**

```
server_address = ("192.168.1.100", 9000)
connect(client_socket, server_address)
```

### `send()` / `recv()` (or `write()` / `read()` in some contexts)

These are the workhorses for data transfer. `send()` transmits data, and `recv()` receives data.

*   **Purpose:** To send and receive data over a connected socket.
*   **Arguments:** Takes the socket descriptor, the data buffer, and the size of the data.
*   **Returns:** The number of bytes sent or received.

**Example (Conceptual Pseudocode):**

```
# Sending
data_to_send = "Hello, server!"
send(client_socket, data_to_send, len(data_to_send))

# Receiving
received_data = recv(client_socket, 1024) # Receive up to 1024 bytes
```

### `close()`

This function closes the socket, releasing any associated resources.

*   **Purpose:** To terminate a connection and free up system resources.
*   **Arguments:** Takes the socket descriptor.

**Example (Conceptual Pseudocode):**

```
close(my_socket)
close(client_socket)
```

## Summary Table of Core Socket Operations

| Function      | Role                                     | Typically Used By | Key Action                                                    |
| :------------ | :--------------------------------------- | :---------------- | :------------------------------------------------------------ |
| `socket()`    | Socket creation                          | Server & Client   | Creates an endpoint for communication.                        |
| `bind()`      | Address association                      | Server            | Assigns a local IP address and port to a socket.              |
| `listen()`    | Connection queuing                       | Server            | Prepares a server socket to accept incoming connections.      |
| `accept()`    | Connection establishment                 | Server            | Accepts a connection from a client, creating a new socket.    |
| `connect()`   | Connection initiation                    | Client            | Establishes a connection to a remote server socket.           |
| `send()`/`recv()` | Data transfer                          | Server & Client   | Sends and receives data over an established connection.       |
| `close()`     | Resource deallocation                    | Server & Client   | Terminates the connection and releases the socket resources. |

Understanding these fundamental functions is the first step in building robust network applications. Each function plays a specific role in the lifecycle of a network connection.

## Supports

- [[skills/computing/systems-infrastructure/networking/transport-application-networking/socket-programming/microskills/core-socket-operations|Core Socket Operations]]

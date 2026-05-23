---
type: "medium"
title: "Submitting Data with JSON via REST APIs"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/systems-infrastructure/platform-engineering/iot-cloud/microskills/json-data-submission|json-data-submission]]"
learning-time-in-minutes: 4
---
# Submitting Data with JSON via REST APIs

This lesson focuses on the practical application of submitting data in JSON format using REST APIs, a core component of interacting with IoT cloud platforms.

### What is JSON Submission via REST APIs?

When you're building applications that interact with IoT cloud services, you often need to send data from your application to the cloud, or from one service to another within the cloud. REST (Representational State Transfer) APIs provide a standardized way to do this.

JSON (JavaScript Object Notation) is a lightweight data-interchange format that is easy for humans to read and write and easy for machines to parse and generate. It's the most common format used for sending data via REST APIs.

Essentially, JSON submission via REST APIs involves constructing a JSON object that represents the data you want to send, and then using an HTTP request (typically a POST or PUT request) to send this JSON data to a specific API endpoint on the server.

### Key Concepts for Submission

Before diving into examples, let's clarify some essential terms:

*   **HTTP Methods:**
    *   **POST:** Used to create a new resource or submit data to be processed. This is the most common method for submitting new data.
    *   **PUT:** Used to update an existing resource. If the resource doesn't exist, it might be created.
    *   **PATCH:** Used for partial updates to an existing resource.

*   **HTTP Headers:** These provide metadata about the request. For JSON submission, the most important header is:
    *   `Content-Type: application/json`: This tells the server that the body of the request contains data in JSON format.

*   **HTTP Body:** This is where the actual data is sent. For JSON submission, this will be a JSON string.

*   **API Endpoint:** This is a specific URL that your application sends requests to. It represents a particular resource or function on the server.

### Practical Example: Submitting Sensor Data

Imagine you have an IoT device that collects temperature and humidity readings. You want to send this data to an IoT cloud platform for storage and analysis.

Let's assume the IoT cloud platform provides a REST API endpoint for receiving sensor data, for example, at `/api/v1/sensors/data`.

#### Constructing the JSON Payload

The data we want to send might look like this: the sensor ID, the timestamp of the reading, and the actual temperature and humidity values. We'll represent this as a JSON object:

```json
{
  "sensorId": "temp-humid-001",
  "timestamp": "2023-10-27T10:00:00Z",
  "temperature": 22.5,
  "humidity": 45.2
}
```

#### Making the HTTP Request

We can use various tools or programming languages to make this request. For demonstration, let's outline the process using a common command-line tool like `curl`.

```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"sensorId": "temp-humid-001", "timestamp": "2023-10-27T10:00:00Z", "temperature": 22.5, "humidity": 45.2}' \
  https://your-iot-cloud.com/api/v1/sensors/data
```

**Explanation of the `curl` command:**

*   `-X POST`: Specifies the HTTP method as POST.
*   `-H "Content-Type: application/json"`: Sets the `Content-Type` header, indicating that the data being sent is JSON.
*   `-d '...'`:  Provides the data to be sent in the request body. This is our JSON object, enclosed in single quotes to prevent shell interpretation.
*   `https://your-iot-cloud.com/api/v1/sensors/data`: This is the target API endpoint URL.

#### What Happens on the Server?

When the IoT cloud platform receives this request:

1.  It inspects the HTTP headers and sees `Content-Type: application/json`.
2.  It parses the JSON data from the request body.
3.  It extracts the `sensorId`, `timestamp`, `temperature`, and `humidity` values.
4.  It then processes this data – perhaps storing it in a database, triggering an alert if the temperature is too high, or making it available for dashboard display.
5.  The server typically responds with an HTTP status code (e.g., `201 Created` for successful creation, `400 Bad Request` if the JSON is malformed, `500 Internal Server Error` if something goes wrong on the server).

### Common Mistakes and How to Avoid Them

*   **Incorrect `Content-Type` Header:** Forgetting to include `Content-Type: application/json` or setting it to an incorrect value is a very common error. This leads the server to not understand the data format. **Always verify this header.**
*   **Malformed JSON:** Syntax errors in your JSON string (e.g., missing commas, incorrect quotation marks, unclosed brackets) will cause the request to fail. **Use a JSON validator to check your payload before sending.**
*   **Incorrect HTTP Method:** Using GET when you should be using POST, or vice-versa, will lead to unexpected behavior or errors. **Understand the intended action for the API endpoint.**
*   **Missing Required Fields:** The API endpoint might expect certain fields to be present in the JSON. If they are missing, the submission will fail. **Consult the API documentation for required fields.**
*   **Data Type Mismatches:** Sending a string where a number is expected, or vice-versa. For instance, sending `"temperature": "22.5"` instead of `"temperature": 22.5`. **Ensure data types in your JSON match the API's expectations.**

By understanding these concepts and practicing with real API endpoints, you can effectively submit data in JSON format for your IoT cloud applications.

## Supports

- [[skills/computing/systems-infrastructure/platform-engineering/iot-cloud/microskills/json-data-submission|JSON Data Submission]]

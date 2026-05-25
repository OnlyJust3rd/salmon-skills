---
type: "medium"
title: "Understanding Kafka Consumers"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/data-ai/data-engineering-platforms/apache-kafka/microskills/consumer|consumer]]"
related-skills:
  - "[[skills/computing/data-ai/data-engineering-platforms/apache-kafka/apache-kafka|apache-kafka]]"
learning-time-in-minutes: 2
---
# Understanding Kafka Consumers

This lesson focuses on the "Consumer" aspect of Apache Kafka, specifically how to read events from a topic. Consumers are the applications that subscribe to one or more Kafka topics and process the messages published to them.

## What is a Kafka Consumer?

A Kafka consumer is a client application that reads data from Kafka topics. Consumers work in groups. When multiple consumers are part of the same group and subscribe to the same topic, Kafka distributes the partitions of that topic among the consumers in the group. This allows for parallel processing of messages and fault tolerance. If one consumer in a group fails, Kafka reassigns its partitions to other consumers in the same group.

## Practical Example: Monitoring Server Logs

Imagine you have a distributed system where multiple servers publish their log events to a Kafka topic named `server-logs`. A consumer application can be built to read these logs, analyze them for errors, trigger alerts, or archive them.

Let's consider a simple Java example of a consumer:

```java
import org.apache.kafka.clients.consumer.ConsumerConfig;
import org.apache.kafka.clients.consumer.ConsumerRecords;
import org.apache.kafka.clients.consumer.KafkaConsumer;

import java.time.Duration;
import java.util.Collections;
import java.util.Properties;

public class LogMonitorConsumer {

    public static void main(String[] args) {
        Properties props = new Properties();
        props.put(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG, "localhost:9092"); // Replace with your Kafka broker address
        props.put(ConsumerConfig.GROUP_ID_CONFIG, "log-processor-group");
        props.put(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, "org.apache.kafka.common.serialization.StringDeserializer");
        props.put(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, "org.apache.kafka.common.serialization.StringDeserializer");

        KafkaConsumer<String, String> consumer = new KafkaConsumer<>(props);

        // Subscribe to the topic
        consumer.subscribe(Collections.singletonList("server-logs"));

        System.out.println("Starting to consume from server-logs topic...");

        try {
            while (true) {
                // Poll for new records
                ConsumerRecords<String, String> records = consumer.poll(Duration.ofMillis(100));

                // Process each record
                records.forEach(record -> {
                    System.out.printf("Received message: offset = %d, key = %s, value = %s%n",
                            record.offset(), record.key(), record.value());
                    // Here you would add your logic to process the log message,
                    // e.g., check for error keywords, send alerts, etc.
                });
            }
        } finally {
            consumer.close(); // Close the consumer when done
            System.out.println("Consumer closed.");
        }
    }
}
```

In this example:
1.  We configure the consumer with essential properties like the Kafka broker address, a `group.id` to identify the consumer group, and deserializers for keys and values.
2.  We subscribe the consumer to the `server-logs` topic.
3.  The `consumer.poll()` method continuously fetches records from the subscribed topics.
4.  We iterate through the received `ConsumerRecords` and print them. In a real-world scenario, you'd implement logic here to parse, analyze, or act upon the log messages.
5.  The consumer is closed properly in a `finally` block.

## Practice Task

1.  **Set up Kafka:** If you haven't already, ensure you have a Kafka instance running locally or on a cloud provider.
2.  **Create a Topic:** Create a topic named `server-logs` using the Kafka command-line tools.
3.  **Run the Producer (Optional):** Use a Kafka producer (command-line or a simple script) to send a few sample log messages to the `server-logs` topic. For example:
    ```bash
    kafka-console-producer --broker-list localhost:9092 --topic server-logs
    ERROR: Disk space critically low on server-01
    INFO: User logged in: admin
    WARN: High CPU usage on server-03
    ```
4.  **Run the Consumer:** Compile and run the `LogMonitorConsumer` Java code. Observe the output as it receives and prints the messages you sent.

## Self-Check Questions

*   What is the purpose of `GROUP_ID_CONFIG` for a Kafka consumer?
*   How does Kafka distribute partitions among consumers within the same consumer group?
*   What happens if a consumer application crashes after processing some messages but before committing their offsets?

## Supports

- [[skills/computing/data-ai/data-engineering-platforms/apache-kafka/microskills/consumer|Consumer]]

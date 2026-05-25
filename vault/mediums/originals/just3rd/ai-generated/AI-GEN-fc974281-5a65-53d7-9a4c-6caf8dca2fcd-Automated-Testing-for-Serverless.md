---
type: "medium"
title: "Automated Testing for Serverless Functions"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/systems-infrastructure/delivery-platforms/continuous-integration-continuous-deployment/serverless-ci-cd/microskills/automated-testing-for-serverless|automated-testing-for-serverless]]"
learning-time-in-minutes: 4
---
# Automated Testing for Serverless Functions

When building serverless applications, ensuring your functions behave as expected is critical. Automated testing is the cornerstone of reliable CI/CD pipelines, allowing you to catch bugs early and deploy with confidence. This lesson focuses on implementing unit and integration tests specifically for serverless functions.

## Why Test Serverless Functions?

Serverless functions, while abstracting away infrastructure, still contain business logic. Without testing, you risk:

*   **Regressions:** New code changes breaking existing functionality.
*   **Runtime Errors:** Functions failing unexpectedly in production due to unhandled exceptions or incorrect logic.
*   **Integration Issues:** Functions not correctly interacting with other services (databases, queues, APIs).
*   **Increased Debugging Time:** Spending valuable time finding and fixing bugs after deployment.

## Unit Testing Serverless Functions

Unit tests verify the smallest, isolated pieces of your code – your functions' logic. The goal is to test the function's handler and core logic independently of any cloud provider services.

### Core Idea: Mocking Dependencies

The biggest challenge in unit testing serverless functions is isolating them from external services like AWS Lambda's event object, context object, or downstream AWS services (DynamoDB, S3, SQS, etc.). This is where mocking comes in. You replace these real dependencies with simulated objects that return predictable responses.

### Example: Testing a Node.js Lambda Function

Let's consider a simple Node.js Lambda function that processes an incoming SQS message and updates a DynamoDB table.

**`src/handler.js`**

```javascript
const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

exports.processMessage = async (event) => {
    const messageBody = JSON.parse(event.Records[0].body);
    const itemId = messageBody.itemId;

    if (!itemId) {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: 'itemId is missing in message body' }),
        };
    }

    const params = {
        TableName: process.env.TABLE_NAME,
        Item: {
            id: itemId,
            processedAt: new Date().toISOString(),
        },
    };

    try {
        await dynamodb.put(params).promise();
        return {
            statusCode: 200,
            body: JSON.stringify({ message: `Item ${itemId} processed successfully.` }),
        };
    } catch (error) {
        console.error('Error processing item:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error processing item', error: error.message }),
        };
    }
};
```

**`test/handler.test.js`**

We'll use `jest` for testing and `aws-sdk-client-mock` for mocking AWS SDK calls.

```javascript
// Import the function to test
const { processMessage } = require('../src/handler');

// Mock the AWS SDK
const mockDynamoDbPut = jest.fn();
jest.mock('aws-sdk', () => {
    return {
        DynamoDB: {
            DocumentClient: jest.fn(() => ({
                put: mockDynamoDbPut,
            })),
        },
    };
});

// Set mock environment variable for table name
process.env.TABLE_NAME = 'my-test-table';

describe('processMessage', () => {
    // Clear mocks before each test
    beforeEach(() => {
        mockDynamoDbPut.mockClear();
        jest.clearAllTimers(); // Clear any timers if used
    });

    test('should successfully process a valid message and put item to DynamoDB', async () => {
        const mockEvent = {
            Records: [
                {
                    body: JSON.stringify({ itemId: 'test-item-123' }),
                },
            ],
        };

        // Mock the DynamoDB put operation to resolve successfully
        mockDynamoDbPut.mockReturnValue({
            promise: () => Promise.resolve({}),
        });

        const response = await processMessage(mockEvent);

        expect(response.statusCode).toBe(200);
        expect(response.body).toBe(JSON.stringify({ message: 'Item test-item-123 processed successfully.' }));
        expect(mockDynamoDbPut).toHaveBeenCalledTimes(1);
        expect(mockDynamoDbPut).toHaveBeenCalledWith({
            TableName: 'my-test-table',
            Item: {
                id: 'test-item-123',
                // The processedAt value will be a timestamp, so we check if it exists and is a string
                processedAt: expect.any(String),
            },
        });
    });

    test('should return 400 if itemId is missing', async () => {
        const mockEvent = {
            Records: [
                {
                    body: JSON.stringify({ someOtherField: 'value' }),
                },
            ],
        };

        const response = await processMessage(mockEvent);

        expect(response.statusCode).toBe(400);
        expect(response.body).toBe(JSON.stringify({ message: 'itemId is missing in message body' }));
        expect(mockDynamoDbPut).not.toHaveBeenCalled();
    });

    test('should return 500 if DynamoDB put operation fails', async () => {
        const mockEvent = {
            Records: [
                {
                    body: JSON.stringify({ itemId: 'test-item-456' }),
                },
            ],
        };

        const dbError = new Error('DynamoDB connection failed');
        // Mock the DynamoDB put operation to reject with an error
        mockDynamoDbPut.mockReturnValue({
            promise: () => Promise.reject(dbError),
        });

        const response = await processMessage(mockEvent);

        expect(response.statusCode).toBe(500);
        expect(response.body).toBe(JSON.stringify({ message: 'Error processing item', error: 'DynamoDB connection failed' }));
        expect(mockDynamoDbPut).toHaveBeenCalledTimes(1);
    });
});
```

In this example:
*   We mock the `AWS.DynamoDB.DocumentClient` to control its behavior.
*   `mockDynamoDbPut` is a Jest mock function that tracks calls and allows us to define return values.
*   We simulate different scenarios: successful processing, missing input, and external service failure.
*   We test the function's return status codes and the exact parameters passed to the mocked service.

## Integration Testing Serverless Functions

Integration tests verify that your serverless function interacts correctly with other services. Unlike unit tests, integration tests often require a real or near-real environment.

### Core Idea: Testing Against Real/Staged Services

For integration tests, you'll typically deploy your function and its dependencies (or a subset of them) to a test environment. This could involve:

1.  **Local Emulation:** Using tools like AWS SAM CLI or Serverless Framework to run services locally.
2.  **Staging Environment:** Deploying to a dedicated staging AWS account or region.
3.  **Specific Test Resources:** Creating dedicated test tables in DynamoDB, test queues in SQS, etc., that are cleaned up after the tests.

### Example: Testing with AWS SAM CLI

AWS SAM CLI allows you to build and test serverless applications locally. You can invoke your Lambda function and have it interact with locally running versions of services like DynamoDB.

**1. Set up `template.yaml` (using AWS SAM)**

```yaml
AWSTemplateFormatVersion: '2010-09-09'
Transform: AWS::Serverless-2016-10-31
Description: Serverless app with DynamoDB

Globals:
  Function:
    Timeout: 10
    Environment:
      Variables:
        TABLE_NAME: !Ref ItemsTable

Resources:
  ProcessMessageFunction:
    Type: AWS::Serverless::Function
    Properties:
      PackageType: Zip
      CodeUri: src/
      Handler: handler.processMessage
      Runtime: nodejs18.x
      Events:
        SQSQueueEvent:
          Type: SQS
          Properties:
            Queue: !GetAtt MyQueue.Arn
      Policies:
        - DynamoDBCrudPolicy:
            TableName: !Ref ItemsTable

  ItemsTable:
    Type: AWS::DynamoDB::Table
    Properties:
      AttributeDefinitions:
        - AttributeName: id
          AttributeType: S
      KeySchema:
        - AttributeName: id
          KeyType: HASH
      BillingMode: PAY_PER_REQUEST

  MyQueue:
    Type: AWS::SQS::Queue
```

**2. Create a test for integration**

This test will invoke the function via SAM CLI and check the state of a locally running DynamoDB.

You would typically use a test runner that can execute shell commands. For example, using `jest` and `jest-runner-shell`:

**`test/integration.test.js`**

```javascript
const { execSync } = require('child_process');
const AWS = require('aws-sdk');

// Configure AWS SDK to use local DynamoDB
const dynamoDb = new AWS.DynamoDB.DocumentClient({
    region: 'us-east-1', // Any region works for local
    endpoint: 'http://localhost:8000',
    accessKeyId: 'dummy', // Dummy credentials
    secretAccessKey: 'dummy',
});

const SAM_CLI_CMD = 'sam build && sam local start-api'; // Or just 'sam build' if only invoking function

// Function to send message to local SQS (requires setting up local SQS if not using SAM's built-in)
// For simplicity, we'll simulate the event directly for this example.
// In a real scenario, you'd use aws-sdk to send to the local SQS endpoint.

describe('Serverless Function Integration Tests', () => {
    let apiProcess;

    beforeAll(() => {
        // Start SAM local API (or just build and invoke directly if not using API Gateway)
        // This command can be complex. For a simpler integration test, you might directly invoke the function.
        // Let's assume for this example we're testing a direct Lambda invocation.
        try {
            execSync('sam build', { stdio: 'inherit' });
            // If using API Gateway, start the API:
            // apiProcess = require('child_process').spawn('sam', ['local', 'start-api'], { stdio: 'inherit' });
        } catch (e) {
            console.error("SAM build failed:", e);
            process.exit(1);
        }
    });

    afterAll(() => {
        // Kill the API process if started
        // if (apiProcess) {
        //     apiProcess.kill();
        // }
    });

    test('should process an SQS message and save to local DynamoDB', async () => {
        const itemId = `integration-test-${Date.now()}`;
        const mockEvent = {
            Records: [
                {
                    body: JSON.stringify({ itemId: itemId }),
                },
            ],
        };

        // Construct the command to invoke the function locally using SAM CLI
        const invokeCommand = `sam local invoke ProcessMessageFunction --event test/event.json`;
        // Create a temporary event file for the command
        require('fs').writeFileSync('test/event.json', JSON.stringify(mockEvent));


        // Execute the local invocation command
        try {
            execSync(invokeCommand, { stdio: 'inherit' });
        } catch (e) {
            console.error("SAM local invoke failed:", e);
            throw e; // Rethrow to fail the test
        }

        // Give DynamoDB a moment to process if needed (often not necessary for local)
        await new Promise(resolve => setTimeout(resolve, 500));

        // Now, query the local DynamoDB to verify
        const getParams = {
            TableName: 'my-test-table', // Matches the TABLE_NAME from template.yaml
            Key: {
                id: itemId,
            },
        };

        const data = await dynamoDb.get(getParams).promise();

        expect(data.Item).toBeDefined();
        expect(data.Item.id).toBe(itemId);
        expect(data.Item.processedAt).toBeDefined();
    });

    // Add more tests for error scenarios, different message formats, etc.
});
```

**How it works:**
*   We use `sam build` to prepare the Lambda function code.
*   `sam local invoke ProcessMessageFunction --event test/event.json` executes the function with a specific input event against local AWS service emulators.
*   We then use the `aws-sdk` configured to point to `http://localhost:8000` (the default endpoint for DynamoDB Local) to query the data that the function should have written.

### Considerations for Integration Tests:

*   **Environment Management:** How will you manage test data and clean it up? Use specific test tables/buckets or employ cleanup scripts.
*   **Service Dependencies:** Decide which services to mock and which to test against. Testing against real services increases confidence but also complexity and cost.
*   **Test Data:** Create realistic test data that covers various edge cases.
*   **Execution Time:** Integration tests can be slower than unit tests. Optimize where possible.

By implementing both unit and integration tests, you create a robust testing strategy for your serverless applications, ensuring that your CI/CD pipelines deliver reliable and well-functioning serverless deployments.

## Supports

- [[skills/computing/systems-infrastructure/delivery-platforms/continuous-integration-continuous-deployment/serverless-ci-cd/microskills/automated-testing-for-serverless|Automated Testing for Serverless]]

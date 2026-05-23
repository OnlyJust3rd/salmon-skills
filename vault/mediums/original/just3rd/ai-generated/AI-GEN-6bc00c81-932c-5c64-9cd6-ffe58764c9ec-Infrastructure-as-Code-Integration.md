---
type: "medium"
title: "Integrating Infrastructure as Code into Serverless CI/CD Pipelines"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
outcome: "[[skills/computing/systems-infrastructure/platform-engineering/serverless-ci-cd/microskills/infrastructure-as-code-integration|infrastructure-as-code-integration]]"
learning-time-in-minutes: 4
---
# Integrating Infrastructure as Code into Serverless CI/CD Pipelines

When deploying serverless applications, managing your cloud infrastructure alongside your code is crucial. This is where Infrastructure as Code (IaC) shines. Integrating IaC into your Continuous Integration and Continuous Deployment (CI/CD) pipelines ensures that your infrastructure is consistently provisioned, updated, and managed as part of your automated deployment process.

## Why Integrate IaC with CI/CD?

*   **Consistency:** Ensures your environment is identical across development, testing, and production.
*   **Repeatability:** Allows you to spin up or tear down environments reliably.
*   **Version Control:** Treats your infrastructure definitions like your application code, enabling tracking changes and rollbacks.
*   **Automation:** Reduces manual errors and speeds up deployments.
*   **Drift Detection:** Helps identify and correct discrepancies between your declared infrastructure and the actual state.

## Key IaC Tools for Serverless

Several IaC tools are popular for serverless deployments. We'll focus on two widely used ones: AWS CloudFormation and the Serverless Framework.

### 1. AWS CloudFormation

CloudFormation is AWS's native IaC service. It allows you to model your AWS resources in a declarative template (YAML or JSON) and provision them automatically.

**Core Idea:** Define your serverless architecture (Lambda functions, API Gateways, DynamoDB tables, etc.) in a template, and CloudFormation handles the creation, updating, and deletion of these resources.

**Integration Steps in CI/CD:**

1.  **Template Definition:** Create your `template.yaml` file defining your serverless resources.
2.  **Packaging:** Package your Lambda function code and dependencies.
3.  **Stack Creation/Update:** Use the AWS CLI to create or update a CloudFormation stack.

**Example Workflow (Conceptual):**

Imagine a pipeline triggered by a code commit:

*   **Build Stage:** Your serverless application code is built and packaged.
*   **IaC Deployment Stage:**
    *   The CloudFormation template (`template.yaml`) is checked for syntax errors.
    *   The Lambda code artifacts are uploaded to an S3 bucket.
    *   The AWS CLI command `aws cloudformation deploy --template-file template.yaml --stack-name my-serverless-app --capabilities CAPABILITY_IAM` is executed. This command will create or update the stack defined by your template, pointing to the newly uploaded code.
*   **Testing Stage:** Automated tests are run against the deployed serverless application.
*   **Approval Stage (Optional):** Manual approval before deploying to production.
*   **Production Deployment Stage:** Repeat the IaC deployment process for the production environment, potentially using a different stack name or parameter set.

**CloudFormation Template Snippet (Example):**

```yaml
AWSTemplateFormatVersion: '2010-09-09'
Description: A simple serverless Lambda function with API Gateway

Resources:
  MyLambdaFunction:
    Type: AWS::Lambda::Function
    Properties:
      FunctionName: my-ci-cd-lambda
      Handler: index.handler
      Role: !GetAtt LambdaExecutionRole.Arn
      Runtime: nodejs18.x
      Code:
        S3Bucket: your-deployment-bucket-name # Will be updated by CI/CD or packaging process
        S3Key: your-lambda-code.zip # Will be updated by CI/CD or packaging process

  APIGatewayRestApi:
    Type: AWS::ApiGateway::RestApi
    Properties:
      Name: MyServerlessAPI

  ApiGatewayLambdaPermission:
    Type: AWS::Lambda::Permission
    Properties:
      Action: lambda:InvokeFunction
      FunctionName: !Ref MyLambdaFunction
      Principal: apigateway.amazonaws.com
      SourceArn: !Sub "arn:aws:execute-api:${AWS::Region}:${AWS::AccountId}:${APIGatewayRestApi}"

  LambdaExecutionRole:
    Type: AWS::IAM::Role
    Properties:
      AssumeRolePolicyDocument:
        Version: '2012-10-17'
        Statement:
          - Effect: Allow
            Principal:
              Service: lambda.amazonaws.com
            Action: sts:AssumeRole
      Policies:
        - PolicyName: LambdaLogsPolicy
          PolicyDocument:
            Version: '2012-10-17'
            Statement:
              - Effect: Allow
                Action:
                  - logs:CreateLogGroup
                  - logs:CreateLogStream
                  - logs:PutLogEvents
                Resource: '*'

```

### 2. Serverless Framework

The Serverless Framework is an open-source framework that simplifies the deployment and management of serverless applications across various cloud providers, including AWS, Azure, and Google Cloud. It uses a `serverless.yml` file to define your application's functions, events, and infrastructure.

**Core Idea:** Abstract away much of the underlying cloud provider specifics, allowing you to define your serverless application declaratively in `serverless.yml`.

**Integration Steps in CI/CD:**

1.  **`serverless.yml` Definition:** Define your functions, events (e.g., HTTP, SQS), and any additional AWS resources within `serverless.yml`.
2.  **Installation:** Ensure the Serverless Framework CLI is installed in your CI/CD environment.
3.  **Deployment Command:** Use the `sls deploy` command to provision and update your serverless stack.

**Example Workflow (Conceptual):**

A typical Serverless Framework pipeline might look like this:

*   **Build & Test Stage:** Your application code is compiled, dependencies are installed, and unit tests are run.
*   **Serverless Deploy Stage:**
    *   The `sls deploy` command is executed. This command automatically packages your code, uploads it to S3, and uses CloudFormation (under the hood on AWS) to provision or update the defined resources.
    *   The `serverless.yml` might reference environment variables for stage-specific configurations (e.g., `dev`, `staging`, `prod`).
*   **Integration/E2E Tests Stage:** Run tests against the newly deployed application.
*   **Rollback (if tests fail):** The Serverless Framework supports rollback mechanisms, often by reverting to a previous CloudFormation stack version.

**Serverless Framework `serverless.yml` Snippet (Example):**

```yaml
service: my-serverless-app-service

frameworkVersion: '3'

provider:
  name: aws
  runtime: nodejs18.x
  region: us-east-1
  stage: ${opt:stage, 'dev'} # Default stage is 'dev'
  iam: # IAM role for the Lambda function
    role:
      statements:
        - Effect: Allow
          Action:
            - logs:CreateLogGroup
            - logs:CreateLogStream
            - logs:PutLogEvents
          Resource: "arn:aws:logs:${aws:region}:${aws:accountId}:log-group:/aws/lambda/${self:service}-${self:provider.stage}-*:*"

functions:
  hello:
    handler: handler.hello # Assumes handler.js with a 'hello' function
    events:
      - httpApi:
          path: /hello
          method: get

# You can also define additional AWS resources
resources:
  Resources:
    MyDynamoDBTable:
      Type: AWS::DynamoDB::Table
      Properties:
        TableName: ${self:service}-${self:provider.stage}-data
        AttributeDefinitions:
          - AttributeName: id
            AttributeType: S
        KeySchema:
          - AttributeName: id
            KeyType: HASH
        BillingMode: PAY_PER_REQUEST

```

## Best Practices for Integration

*   **Parameterize your IaC:** Use parameters in CloudFormation templates or variables in Serverless Framework configurations for environment-specific settings (e.g., database names, API keys, instance sizes).
*   **Separate Stacks per Environment:** Deploy distinct stacks for development, staging, and production environments to maintain isolation.
*   **Use Role-Based Access Control (RBAC):** Grant your CI/CD pipeline the minimum necessary permissions to deploy infrastructure.
*   **Implement State Management:** Ensure your IaC tool has a reliable way to store and manage the state of your infrastructure (e.g., CloudFormation managed state, Terraform state files in S3).
*   **Automate Testing of Infrastructure:** Beyond application tests, consider tests that validate infrastructure configurations (e.g., security group rules, IAM policies).
*   **Consider CI/CD Tool Integrations:** Many CI/CD platforms (GitHub Actions, GitLab CI, AWS CodePipeline, Jenkins) have built-in or readily available plugins for CloudFormation and the Serverless Framework, simplifying the integration process.

By thoughtfully integrating Infrastructure as Code into your CI/CD pipelines, you establish a robust and repeatable process for managing your serverless applications and their underlying cloud resources.

## Supports

- [[skills/computing/systems-infrastructure/platform-engineering/serverless-ci-cd/microskills/infrastructure-as-code-integration|Infrastructure as Code Integration]]

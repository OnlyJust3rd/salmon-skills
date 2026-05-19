---
type: "medium"
title: "Understanding Azure Bicep Syntax"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/cloud-devops/platform-engineering/infrastructure-as-code/microskills/azure-bicep-syntax|Azure Bicep Syntax]]"
---
# Understanding Azure Bicep Syntax

This lesson focuses on the fundamental syntax of Azure Bicep, empowering you to write Bicep files for provisioning your Azure infrastructure. Mastering Bicep syntax is crucial for effectively applying Infrastructure as Code principles.

## What is Bicep Syntax?

Bicep is a declarative language that uses a simplified, more readable syntax compared to ARM templates. It compiles down to standard ARM JSON templates. The core idea is to define your desired Azure resource state, and Bicep (and the Azure Resource Manager) figures out how to achieve that state.

Bicep files typically have a `.bicep` extension.

## Core Bicep Syntax Elements

Let's explore the essential building blocks of a Bicep file.

### 1. Parameters

Parameters allow you to pass values into your Bicep template when you deploy it. This makes your templates reusable and dynamic.

**Syntax:**

```bicep
param <parameterName> <dataType> = <defaultValue>
```

*   `<parameterName>`: A unique identifier for your parameter.
*   `<dataType>`: The type of value the parameter accepts (e.g., `string`, `int`, `bool`, `array`, `object`).
*   `= <defaultValue>`: An optional default value if none is provided during deployment.

**Example:**

```bicep
param location string = 'eastus'
param storageAccountName string
param skuTier string = 'Standard_LRS'
```

In this example:
*   `location` is a string with a default value of 'eastus'.
*   `storageAccountName` is a string, and it *must* be provided during deployment as it has no default.
*   `skuTier` is a string with a default value of 'Standard_LRS'.

### 2. Variables

Variables are used to store values that are used multiple times within your template. They improve readability and maintainability by centralizing common values.

**Syntax:**

```bicep
var <variableName> = <expression>
```

*   `<variableName>`: A unique identifier for your variable.
*   `<expression>`: The value assigned to the variable. This can be a literal value, a parameter, a function call, or even a more complex expression.

**Example:**

```bicep
var vmName = 'myVM-${uniqueString(resourceGroup().id)}'
var vmSize = 'Standard_B1s'
var adminUsername = 'azureuser'
```

Here, `vmName` uses a function `uniqueString` to ensure a unique name for the VM, combined with the resource group ID. `vmSize` and `adminUsername` are straightforward string assignments.

### 3. Resources

This is the heart of your Bicep file, where you declare the Azure resources you want to provision.

**Syntax:**

```bicep
resource <symbolicName> '<resourceType>@<apiVersion>' = {
  name: <resourceName>
  location: <location>
  properties: {
    // Resource-specific properties
  }
}
```

*   `<symbolicName>`: A name you give to the resource within your Bicep file. This is used for referencing it elsewhere in the template.
*   `<resourceType>`: The type of Azure resource (e.g., `Microsoft.Storage/storageAccounts`, `Microsoft.Compute/virtualMachines`).
*   `<apiVersion>`: The API version for the resource type. Bicep often infers this, but it's good practice to be aware of it.
*   `name`: The actual name of the resource as it will appear in Azure.
*   `location`: The Azure region where the resource will be deployed.
*   `properties`: A block containing the specific configuration settings for the resource.

**Example:**

```bicep
resource storageAccount 'Microsoft.Storage/storageAccounts@2021-09-01' = {
  name: storageAccountName // Using a parameter or variable
  location: location       // Using a parameter
  sku: {
    name: skuTier          // Using a parameter
  }
  kind: 'StorageV2'
}
```

This declares a storage account. It uses the `storageAccountName`, `location`, and `skuTier` parameters defined earlier.

### 4. Outputs

Outputs allow your Bicep template to return values after deployment. This is useful for retrieving information about the deployed resources, such as connection strings or resource IDs.

**Syntax:**

```bicep
output <outputName> <dataType> = <expression>
```

*   `<outputName>`: A name for the output value.
*   `<dataType>`: The data type of the output.
*   `<expression>`: The value to be returned. This can be a reference to a resource property, a parameter, or a calculated value.

**Example:**

```bicep
output storageAccountPrimaryEndpoint string = storageAccount.properties.primaryEndpoints.blob
output storageAccountName string = storageAccount.name
```

This example outputs the primary blob endpoint and the name of the storage account that was provisioned.

## Putting It Together: A Simple Example

Let's combine these elements to create a basic Bicep file that provisions a storage account.

```bicep
// --- Parameters ---
param location string = resourceGroup().location // Default to the resource group's location
param storageAccountName string = 'mystorage${uniqueString(resourceGroup().id)}' // Auto-generated unique name
param skuTier string = 'Standard_LRS'

// --- Resources ---
resource storageAccount 'Microsoft.Storage/storageAccounts@2021-09-01' = {
  name: storageAccountName
  location: location
  sku: {
    name: skuTier
  }
  kind: 'StorageV2'
}

// --- Outputs ---
output storageAccountEndpoint string = storageAccount.properties.primaryEndpoints.blob
```

This file defines parameters for location, storage account name (with a unique generation mechanism), and SKU tier. It then declares a storage account resource using these parameters and outputs the primary blob endpoint of the created storage account.

## Key Concepts and Best Practices

*   **Declarative Nature:** You declare *what* you want, not *how* to get it. Bicep and Azure Resource Manager handle the "how."
*   **Readability:** Bicep's syntax is designed to be more intuitive than JSON ARM templates.
*   **Modularity:** Break down complex deployments into smaller, reusable Bicep modules.
*   **Parameterization:** Always parameterize values that might change between environments (e.g., names, SKUs, locations).
*   **Variable Usage:** Use variables for repeated values to avoid duplication and simplify updates.
*   **Resource Naming:** Ensure resource names are unique and follow a consistent naming convention. The `uniqueString()` function is your friend here.
*   **API Versions:** While Bicep often infers API versions, explicitly defining them can prevent unexpected behavior when Azure updates its APIs.

By understanding and applying these core Bicep syntax elements, you are well on your way to effectively provisioning infrastructure as code.

## Supports

- [[skills/cloud-devops/platform-engineering/infrastructure-as-code/microskills/azure-bicep-syntax|Azure Bicep Syntax]]

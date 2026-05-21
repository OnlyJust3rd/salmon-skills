---
type: "medium"
title: "Defining Azure Resources with Bicep"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/cloud-devops/platform-engineering/infrastructure-as-code/microskills/bicep-resource-definition|bicep-resource-definition]]"
---
# Defining Azure Resources with Bicep

This lesson focuses on the core skill of defining Azure resources using Bicep, a key component of provisioning infrastructure as code. By mastering this, you'll be able to declaratively describe your desired Azure environment, allowing for consistent and repeatable deployments.

## What is a Bicep Resource Definition?

At its heart, a Bicep resource definition is a declarative statement within a `.bicep` file that specifies a particular Azure resource you want to create, update, or delete. Bicep uses a syntax inspired by Azure Resource Manager (ARM) templates, making it intuitive for those familiar with Azure or JSON-based infrastructure as code.

Each resource definition in Bicep follows a consistent structure. This structure tells Azure:

*   **What type of resource** you want to deploy (e.g., a virtual machine, a storage account, a virtual network).
*   **What name** the resource should have within your Azure subscription.
*   **What properties** that resource should possess (e.g., location, size, SKU, access tiers).

## The Anatomy of a Resource Definition

Let's break down the essential components of a Bicep resource definition.

```bicep
resource <symbolic_name> '<resource_type>@<api_version>' = {
  name: '<resource_name>'
  location: '<azure_region>'
  tags: {
    // Optional: Key-value pairs for organization
  }
  properties: {
    // Resource-specific configuration goes here
  }
}
```

*   **`resource`**: This keyword signifies the start of a resource definition.
*   **`<symbolic_name>`**: This is a unique identifier you choose within your Bicep file. It's used to refer to this resource from other parts of your Bicep code (e.g., for outputs or dependencies). For example, `storageAccount`, `vNet`, `vmDeploy`.
*   **`'<resource_type>@<api_version>'`**: This is a string that precisely identifies the type of Azure resource and the API version to use for its deployment.
    *   **`<resource_type>`**: This follows a `Microsoft.<Provider>/<ResourceType>` pattern (e.g., `Microsoft.Storage/storageAccounts`, `Microsoft.Network/virtualNetworks`). You can find these types in the Azure Bicep documentation or by inspecting existing ARM templates.
    *   **`<api_version>`**: This specifies the version of the Azure API to use for deploying this resource. Using a stable API version is crucial for predictability. Bicep will often suggest a default, but it's good practice to be aware of it.
*   **`=`**: This assigns the configuration to the symbolic name.
*   **`{ ... }`**: This block contains the properties of the resource.
    *   **`name: '<resource_name>'`**: This is the actual name of the resource as it will appear in your Azure subscription. It must be globally unique for certain resource types (like storage accounts).
    *   **`location: '<azure_region>'`**: This specifies the Azure region where the resource will be deployed (e.g., `eastus`, `westeurope`).
    *   **`tags: { ... }`**: An optional but highly recommended section for applying metadata tags to your resources for cost management, organization, and automation.
    *   **`properties: { ... }`**: This is the most important part, containing the specific settings and configurations for the resource. The structure and content of `properties` are entirely dependent on the `<resource_type>`.

## Practical Example: Deploying a Storage Account

Let's define a standard Azure Storage Account.

```bicep
resource saDevEastUs 'Microsoft.Storage/storageAccounts@2021-09-01' = {
  name: 'sadaveastus${uniqueString(resourceGroup().id)}' // Example of generating a unique name
  location: 'eastus'
  tags: {
    environment: 'development'
    project: 'myapp'
  }
  sku: {
    name: 'Standard_LRS' // Locally-redundant storage
  }
  kind: 'StorageV2' // General-purpose v2 account
  properties: {
    accessTier: 'Hot'
  }
}
```

**Explanation of the example:**

*   **`resource saDevEastUs ...`**: We've named our symbolic resource `saDevEastUs`.
*   **`'Microsoft.Storage/storageAccounts@2021-09-01'`**: We're deploying a storage account using the `2021-09-01` API version.
*   **`name: 'sadaveastus${uniqueString(resourceGroup().id)}'`**: We're dynamically generating a unique name for the storage account. `uniqueString(resourceGroup().id)` is a Bicep function that creates a unique string based on the resource group's ID, ensuring name uniqueness across deployments. We've prefixed it with `sadaveastus` for clarity.
*   **`location: 'eastus'`**: The storage account will be created in the East US region.
*   **`tags: { ... }`**: We've applied tags for `environment` and `project`.
*   **`sku: { name: 'Standard_LRS' }`**: This specifies the performance and redundancy tier. `Standard_LRS` is a common and cost-effective choice.
*   **`kind: 'StorageV2'`**: This indicates a general-purpose v2 account, supporting all the latest storage features.
*   **`properties: { accessTier: 'Hot' }`**: We've set the default access tier to `Hot`, suitable for frequently accessed data.

## Common Mistakes and Best Practices

*   **Incorrect Resource Type or API Version**: Double-check the exact `Microsoft.<Provider>/<ResourceType>` and API version. Incorrect ones will cause deployment failures. Refer to the [Bicep Documentation](https://learn.microsoft.com/en-us/azure/azure-resource-manager/bicep/overview) for valid types and versions.
*   **Naming Collisions**: For resources requiring globally unique names (like storage accounts, public IP addresses), ensure your naming strategy generates unique names per deployment. Functions like `uniqueString()` are invaluable here.
*   **Missing Required Properties**: Each resource type has mandatory properties. If you omit them, the deployment will fail. Bicep will often provide IntelliSense to guide you.
*   **Case Sensitivity**: While Bicep itself is generally case-insensitive for keywords, resource types and API versions are case-sensitive.
*   **Over-reliance on Defaults**: While Bicep and Azure have defaults, explicitly define important properties like SKU, access tier, and network security settings to ensure clarity and prevent unexpected behavior.
*   **Unnecessary Complexity**: Start with the essential properties. You can always add more configurations as needed.

By understanding and applying the structure of Bicep resource definitions, you'll gain the ability to confidently deploy and manage your Azure infrastructure as code.

## Supports

- [[skills/cloud-devops/platform-engineering/infrastructure-as-code/microskills/bicep-resource-definition|Bicep Resource Definition]]

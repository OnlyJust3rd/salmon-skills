---
type: "medium"
title: "Provisioning Your First Azure Resource with Bicep"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/cloud-devops/platform-engineering/infrastructure-as-code/microskills/infrastructure-provisioning|Infrastructure Provisioning]]"
---
# Provisioning Your First Azure Resource with Bicep

This lesson focuses on the practical skill of deploying and managing cloud infrastructure using Azure Bicep. We'll walk through provisioning a simple Azure resource to get you hands-on experience.

## Understanding Infrastructure as Code (IaC) with Bicep

Infrastructure as Code (IaC) is the practice of managing and provisioning infrastructure through machine-readable definition files, rather than through physical hardware configuration or interactive configuration tools. Bicep is a declarative language developed by Microsoft that simplifies the process of deploying Azure resources. It offers a cleaner syntax and improved developer experience compared to raw ARM templates, while compiling down to ARM templates.

## Your First Bicep Deployment: A Storage Account

Let's provision a basic Azure Storage Account. A storage account is a fundamental building block for many cloud solutions, offering object, file, queue, and table storage.

### Prerequisites

*   **Azure Account:** You need an active Azure subscription.
*   **Azure CLI or Azure PowerShell:** Installed and configured.
*   **Bicep CLI:** Installed. You can install it via npm (`npm install -g @azure/bicep-cli`) or through Azure CLI extensions (`az bicep install`).

### Steps to Provision

1.  **Create a Bicep File:**
    Create a new file named `main.bicep`. This file will contain the definition of our storage account.

    ```bicep
    @description('The name of the storage account. Must be globally unique.')
    param storageAccountName string = uniqueString(resourceGroup().id)

    @description('The location for the resources.')
    param location string = resourceGroup().location

    @description('The SKU for the storage account.')
    param skuName string = 'Standard_LRS'

    resource storageAccount 'Microsoft.Storage/storageAccounts@2021-09-01' = {
      name: storageAccountName
      location: location
      sku: {
        name: skuName
      }
      kind: 'StorageV2'
    }

    output storageEndpoint string = storageAccount.properties.primaryEndpoints.blob
    ```

    **Explanation:**
    *   `param`: Declares input parameters for our template. `storageAccountName` will generate a unique name, `location` defaults to the resource group's location, and `skuName` sets the replication type.
    *   `resource`: Defines an Azure resource to be deployed. Here, we're defining a `Microsoft.Storage/storageAccounts` resource. The `@2021-09-01` specifies the API version.
    *   `name`, `location`, `sku`, `kind`: These are properties of the storage account. `kind: 'StorageV2'` is for general-purpose v2 accounts.
    *   `output`: Defines values that will be returned after the deployment. `storageEndpoint` will output the primary blob endpoint URL.

2.  **Create a Parameters File (Optional but Recommended):**
    While not strictly necessary for this simple example, for more complex deployments, you'd use a parameters file. Create a file named `main.parameters.json`:

    ```json
    {
      "$schema": "https://schema.management.azure.com/schemas/2015-01-01/deploymentParameters.json#",
      "contentVersion": "1.0.0.0",
      "parameters": {
        "storageAccountName": {
          "value": "myuniquebicepstorage" // Replace with a globally unique name or keep the default generation
        },
        "location": {
          "value": "eastus" // Specify your desired Azure region
        },
        "skuName": {
          "value": "Standard_LRS"
        }
      }
    }
    ```
    *Note: If you use the default `uniqueString()` for `storageAccountName` in your `.bicep` file, you can omit it here, or provide a specific name that is globally unique.*

3.  **Deploy the Bicep File:**
    Open your terminal or command prompt. Navigate to the directory where you saved your `main.bicep` file.

    **Using Azure CLI:**

    ```bash
    az deployment group create --resource-group <your-resource-group-name> --template-file main.bicep --parameters main.parameters.json
    ```

    Replace `<your-resource-group-name>` with the name of an existing resource group or create one using `az group create --name <your-resource-group-name> --location eastus`.

    **Using Azure PowerShell:**

    ```powershell
    New-AzResourceGroupDeployment `
      -ResourceGroupName <your-resource-group-name> `
      -TemplateFile .\main.bicep `
      -TemplateParameterFile .\main.parameters.json
    ```

    Replace `<your-resource-group-name>` with the name of an existing resource group or create one using `New-AzResourceGroup -Name <your-resource-group-name> -Location eastus`.

4.  **Verify the Deployment:**
    After the deployment completes, you should see the output showing the `storageEndpoint`. You can also navigate to the Azure portal, find your resource group, and you should see the newly created storage account.

### Common Mistakes and Tips

*   **Unique Storage Account Names:** Storage account names must be globally unique across all of Azure. If your deployment fails with a name conflict, ensure you are using a unique name or relying on the `uniqueString()` function.
*   **API Versions:** Always use the latest stable API version for the resource type you are defining. This ensures you have access to the newest features and are adhering to best practices.
*   **Resource Group Location:** Ensure the `location` parameter is set to a valid Azure region.
*   **Permissions:** The identity you use to deploy (your Azure CLI/PowerShell user) needs appropriate permissions (e.g., Contributor role) on the resource group.

This exercise provides a foundational understanding of how to define and deploy infrastructure using Bicep. As you progress, you'll learn to define more complex resources, manage dependencies, and implement more sophisticated deployment strategies.

## Supports

- [[skills/cloud-devops/platform-engineering/infrastructure-as-code/microskills/infrastructure-provisioning|Infrastructure Provisioning]]

---
type: "medium"
title: "Deploying Infrastructure with Bicep: Key Azure CLI Commands"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/systems-infrastructure/delivery-platforms/infrastructure-as-code/microskills/bicep-deployment-commands|bicep-deployment-commands]]"
related-skills:
  - "[[skills/computing/systems-infrastructure/delivery-platforms/infrastructure-as-code/infrastructure-as-code|infrastructure-as-code]]"
learning-time-in-minutes: 3
---
# Deploying Infrastructure with Bicep: Key Azure CLI Commands

This lesson focuses on the essential Azure Command-Line Interface (CLI) commands you'll use to deploy your Bicep infrastructure as code. By mastering these commands, you'll be able to take your Bicep files from development to a live Azure environment.

## Understanding the Deployment Workflow

Before diving into the commands, it's helpful to visualize the typical deployment process:

1.  **Create/Update Resource Group:** Ensure the container for your resources exists.
2.  **Deploy Bicep File:** Submit your Bicep template to Azure for processing.
3.  **Monitor Deployment:** Track the progress and status of your deployment.
4.  **View Deployment Details:** Inspect the resources created or modified.
5.  **Delete Resources (if necessary):** Clean up your environment.

## Core Azure CLI Commands for Bicep

The Azure CLI provides a powerful set of tools for interacting with Azure services, including Bicep deployments. Here are the most critical commands:

### 1. `az group create`

This command is used to create a new resource group, which is a logical container for your Azure resources.

**Syntax:**

```bash
az group create --name <resource-group-name> --location <azure-region>
```

**Example:**

To create a resource group named `my-bicep-rg` in the `eastus` region:

```bash
az group create --name my-bicep-rg --location eastus
```

**Key Points:**

*   `--name`: Specifies the name of your resource group. Resource group names must be unique within your subscription.
*   `--location`: Defines the Azure region where the resource group will be created.

### 2. `az deployment group create`

This is the primary command for deploying your Bicep files. It takes your compiled Bicep (or ARM JSON) template and applies it to a specified resource group.

**Syntax:**

```bash
az deployment group create --resource-group <resource-group-name> --template-file <path-to-bicep-file> --parameters <parameter-file-or-key-value-pairs>
```

**Example:**

Let's assume you have a Bicep file named `main.bicep` and you want to deploy it to the `my-bicep-rg` resource group. If your Bicep file requires parameters, you can pass them either via a parameters file or directly on the command line.

**Using a parameters file (e.g., `main.parameters.json`):**

```json
{
  "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentParameters.json#",
  "contentVersion": "1.0.0.0",
  "parameters": {
    "storageAccountName": {
      "value": "mystorageaccount12345"
    },
    "location": {
      "value": "eastus"
    }
  }
}
```

Then, the deployment command would be:

```bash
az deployment group create --resource-group my-bicep-rg --template-file main.bicep --parameters main.parameters.json
```

**Passing parameters directly:**

```bash
az deployment group create --resource-group my-bicep-rg --template-file main.bicep --parameters storageAccountName=mystorageaccount12345 location=eastus
```

**Key Points:**

*   `--resource-group`: The target resource group for the deployment.
*   `--template-file`: The path to your `.bicep` file.
*   `--parameters`: Allows you to provide values for parameters defined in your Bicep file. You can use a JSON file or specify key-value pairs.

### 3. `az deployment group list`

After initiating a deployment, you'll want to check its status. This command lists deployments within a resource group.

**Syntax:**

```bash
az deployment group list --resource-group <resource-group-name>
```

**Example:**

To list all deployments in `my-bicep-rg`:

```bash
az deployment group list --resource-group my-bicep-rg
```

This will output a list of deployments, including their provisioning state (e.g., `Succeeded`, `Failed`, `Running`).

### 4. `az deployment group show`

For more detailed information about a specific deployment, use the `show` command.

**Syntax:**

```bash
az deployment group show --resource-group <resource-group-name> --name <deployment-name>
```

**Example:**

If your deployment was automatically named something like `Microsoft.Template` or you assigned a custom name during creation (using `--name <custom-deployment-name>` with `az deployment group create`), you can show it:

```bash
az deployment group show --resource-group my-bicep-rg --name "Microsoft.Template.1678886400000"
```

This command provides details such as the provisioning state, timestamps, and outputs.

### 5. `az deployment group delete`

If you need to remove a deployment record (not the resources it created), you can use this command. Note that this does *not* delete the resources provisioned by the deployment.

**Syntax:**

```bash
az deployment group delete --resource-group <resource-group-name> --name <deployment-name>
```

**Example:**

```bash
az deployment group delete --resource-group my-bicep-rg --name "Microsoft.Template.1678886400000"
```

### 6. `az group delete`

This command deletes an entire resource group and all the resources contained within it. Use with extreme caution!

**Syntax:**

```bash
az group delete --name <resource-group-name>
```

**Example:**

To delete the `my-bicep-rg` resource group and all its contents:

```bash
az group delete --name my-bicep-rg
```

You will be prompted to confirm this irreversible action.

## Practice and Experimentation

The best way to become proficient with these commands is to practice. Create a simple Bicep file (e.g., one that deploys a storage account), and then use the `az group create`, `az deployment group create`, `az deployment group list`, and `az group delete` commands to manage its lifecycle. Pay close attention to the output of each command to understand what's happening.

## Supports

- [[skills/computing/systems-infrastructure/delivery-platforms/infrastructure-as-code/microskills/bicep-deployment-commands|Bicep Deployment Commands]]

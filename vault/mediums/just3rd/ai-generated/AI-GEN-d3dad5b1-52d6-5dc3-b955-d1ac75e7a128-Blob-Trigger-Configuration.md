---
type: "medium"
title: "Blob Trigger Configuration for Serverless Functions"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/cloud-devops/platform-engineering/serverless-computing/microskills/blob-trigger-configuration|Blob Trigger Configuration]]"
---
# Blob Trigger Configuration for Serverless Functions

This lesson focuses on **Blob Trigger Configuration**, a crucial aspect of implementing serverless functions that react to changes in blob storage. By understanding and applying this skill, you'll be able to create event-driven applications where your code automatically executes when new data is added, modified, or deleted in Azure Blob Storage.

## Understanding Blob Triggers

A blob trigger is a type of input binding in serverless computing platforms, specifically Azure Functions, that allows your function to be invoked automatically when events occur in Azure Blob Storage. These events typically include:

*   **Blob Creation:** When a new blob is uploaded to a specified container.
*   **Blob Modification:** When an existing blob is overwritten or updated.
*   **Blob Deletion:** When a blob is removed from a container.

When one of these events occurs, the serverless platform detects it and automatically triggers your configured function, passing information about the blob to your function's code.

## Key Concepts

### Blob Trigger Properties

When configuring a blob trigger, you'll typically define several properties:

*   **`path`**: This is the most critical property. It specifies the container and optionally a blob name pattern that the trigger will monitor. You can use wildcards to match multiple blobs.
*   **`connection`**: The name of an app setting that contains the connection string for your Azure Storage account.
*   **`direction`**: For triggers, this is always `in`.

### Output Bindings

While the primary focus is the trigger, blob triggers often work in conjunction with **output bindings**. These allow your function to perform actions *after* it has been triggered, such as writing a processed blob to a different location or updating metadata.

## Practical Configuration

Let's walk through configuring a blob trigger for an Azure Function.

### Scenario: Processing Incoming Image Files

Imagine you want to automatically resize any image file (JPG or PNG) that is uploaded to a specific blob storage container named `incoming-images`. Once resized, you want to save the processed image to another container called `processed-images`.

### Step-by-Step Configuration

1.  **Project Setup:**
    *   Ensure you have an Azure Functions project set up (e.g., using the Azure Functions Core Tools, Visual Studio, or VS Code with the Azure Functions extension).

2.  **Define the Trigger in `function.json`:**
    *   For each Azure Function, there's a `function.json` file that defines its bindings. You'll add a new binding for your blob trigger.

    ```json
    {
      "scriptFile": "__init__.py", // Or your language's equivalent
      "bindings": [
        {
          "name": "myblob",       // Name of the variable in your function code that will hold the blob content
          "type": "blobTrigger",
          "direction": "in",
          "path": "incoming-images/{name}.{ext}", // Monitor files in 'incoming-images' container
          "connection": "AzureWebJobsStorage"    // App setting for the storage connection string
        },
        {
          "name": "outputblob",    // Name for the output binding variable in your function code
          "type": "blob",
          "direction": "out",
          "path": "processed-images/{name}.{ext}", // Output path for processed files
          "connection": "AzureWebJobsStorage"
        }
      ]
    }
    ```

    **Explanation of `path`:**
    *   `incoming-images/`: Specifies the container to monitor.
    *   `{name}`: This is a token that captures the blob's name (without the extension).
    *   `.{ext}`: This token captures the blob's extension.
    *   The `{name}` and `{ext}` tokens are automatically available in your function's context, allowing you to use them for processing and for constructing the output path.

3.  **Write Your Function Code (Python Example):**
    *   In your function's code file (e.g., `__init__.py` for Python), you'll access the blob content and use the output binding.

    ```python
    import logging
    from azure.storage.blob import BlobServiceClient
    from PIL import Image # Assuming you have Pillow installed for image manipulation
    import io

    import azure.functions as func

    def main(myblob: func.InputStream, outputblob: func.Out[bytes]):
        logging.info(f"Python blob trigger function processed blob \n"
                     f"Name: {myblob.name}\n"
                     f"Blob Size: {myblob.length} bytes")

        # Read the blob content
        image_data = myblob.read()

        try:
            # Open the image using Pillow
            image = Image.open(io.BytesIO(image_data))

            # Resize the image (e.g., to a width of 200px, maintaining aspect ratio)
            width_percent = (200 / float(image.size[0]))
            height_size = int((float(image.size[1]) * float(width_percent)))
            resized_image = image.resize((200, height_size), Image.Resampling.LANCZOS)

            # Save the resized image to a byte stream
            output_stream = io.BytesIO()
            # Infer format from original extension, fallback to JPEG if unknown
            image_format = image.format if image.format else 'JPEG'
            resized_image.save(output_stream, format=image_format)
            output_stream.seek(0)

            # Write the processed image to the output blob binding
            outputblob.set(output_stream.read())

            logging.info(f"Successfully resized and saved blob to processed-images.")

        except Exception as e:
            logging.error(f"Error processing image: {e}")
            # Handle errors appropriately, perhaps by moving the blob to an error container.

    ```

4.  **Configure Storage Connection String:**
    *   Your `connection` property (`AzureWebJobsStorage` in the example) refers to an app setting that holds the connection string to your Azure Storage account.
    *   In a local development environment, this is usually set in your `local.settings.json` file:

    ```json
    {
      "IsEncrypted": false,
      "Values": {
        "AzureWebJobsStorage": "DefaultEndpointsProtocol=https;AccountName=your_storage_account_name;AccountKey=your_account_key;EndpointSuffix=core.windows.net",
        "FUNCTIONS_WORKER_RUNTIME": "python"
      }
    }
    ```
    *   When deployed to Azure, this setting is configured in the Function App's "Configuration" section.

### Testing Your Blob Trigger

1.  **Run Your Function Locally:** Start your Azure Functions host locally.
2.  **Upload a Blob:** Upload a JPG or PNG file to the `incoming-images` container in your Azure Storage account.
3.  **Verify Output:** Check the `processed-images` container for a resized version of your uploaded image. Review the function logs for any errors or success messages.

## Common Mistakes and Best Practices

*   **Incorrect `path`:** Double-check container names and wildcard usage. A common error is forgetting to include the container name.
*   **Missing `connection` string:** Ensure the `connection` property in `function.json` matches an app setting containing a valid storage connection string.
*   **Large Blob Handling:** For very large blobs, consider using streaming or asynchronous processing to avoid memory issues. The `func.InputStream` in Python provides streaming capabilities.
*   **Error Handling:** Implement robust error handling. What happens if the image is corrupted or the processing fails? Consider moving problematic blobs to an "error" container for inspection.
*   **Concurrency:** Be aware that multiple instances of your function might be triggered simultaneously for different blobs. Design your code to be thread-safe and handle potential race conditions if necessary.
*   **Container Naming Conventions:** Use clear and consistent naming for your containers.

By mastering blob trigger configuration, you can build powerful, event-driven serverless solutions that integrate seamlessly with Azure Blob Storage.

## Supports

- [[skills/cloud-devops/platform-engineering/serverless-computing/microskills/blob-trigger-configuration|Blob Trigger Configuration]]

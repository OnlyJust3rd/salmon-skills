---
type: "medium"
title: "Data Validation in Batch Processing"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/data-ai/data-engineering-platforms/data-engineering/microskills/data-validation|data-validation]]"
learning-time-in-minutes: 4
---
# Data Validation in Batch Processing

In the realm of Data Engineering, ensuring the quality of data is paramount before it embarks on its journey through a batch processing pipeline. This lesson focuses on **Data Validation**, the crucial step of checking data correctness before it's loaded or processed further. Think of it as a quality control check at the entry point of your data pipeline.

## Why Validate Data?

Imagine building a house with faulty bricks. The entire structure would be unstable. Similarly, feeding incorrect or inconsistent data into your processing pipeline can lead to:

*   **Inaccurate analysis and reports:** Decisions based on flawed data are unreliable.
*   **Pipeline failures:** Malformed data can break transformation logic or database constraints.
*   **Wasted resources:** Retrying failed jobs due to data issues consumes time and computational power.
*   **Loss of trust:** Stakeholders lose confidence in the data and the systems that manage it.

Data validation acts as a gatekeeper, preventing these issues by ensuring that the data entering your pipeline adheres to predefined rules and expectations.

## Common Data Validation Checks

Data validation involves a range of checks to ensure data integrity. Here are some fundamental types:

### 1. Data Type Checks

Ensures that data in a column matches its expected data type.

*   **Example:** A column expecting integers should not contain text strings or floating-point numbers.
*   **Why it matters:** Prevents errors during calculations, comparisons, and storage.

### 2. Nullability Checks

Verifies that required fields are not missing (i.e., not NULL).

*   **Example:** An `order_id` column should never be null if each order must have a unique identifier.
*   **Why it matters:** Missing critical information can render records unusable or lead to downstream errors.

### 3. Uniqueness Checks

Confirms that values in a column (or a combination of columns) are unique.

*   **Example:** A `customer_id` should be unique for each customer.
*   **Why it matters:** Prevents duplicate entries that can skew aggregations and lead to incorrect reporting.

### 4. Range and Format Checks

Ensures that values fall within acceptable ranges or adhere to specific formats.

*   **Example:**
    *   **Range:** A `discount_percentage` should be between 0 and 100.
    *   **Format:** A `phone_number` should follow a specific pattern (e.g., `XXX-XXX-XXXX`). An `email_address` should have a valid email format.
*   **Why it matters:** Catches illogical values and ensures data consistency for parsing and use.

### 5. Referential Integrity Checks

Verifies that foreign key values in one table exist in the corresponding primary key of another table.

*   **Example:** If an `order` record references a `customer_id`, that `customer_id` must exist in the `customers` table.
*   **Why it matters:** Maintains relationships between data entities and prevents orphaned records.

### 6. Completeness Checks

Assesses whether all necessary columns are present and populated according to business rules.

*   **Example:** A product record might require `product_name`, `price`, and `category`. If `price` is missing, the record might be considered incomplete.
*   **Why it matters:** Ensures that records have sufficient information for their intended purpose.

## Implementing Data Validation

Data validation can be implemented at various stages of a batch pipeline:

*   **At the source:** Before data is even ingested.
*   **During ingestion:** As data is being loaded into a staging area.
*   **Before transformation:** After staging and before applying complex business logic.
*   **After transformation:** To ensure transformations were applied correctly.

The choice of where to validate depends on the criticality of the data, the complexity of the validation rules, and the available tools.

### Example: Simple CSV Data Validation (Conceptual)

Let's consider a scenario where we're processing a batch of customer data from a CSV file.

**Input Data (customers.csv):**

```csv
customer_id,name,email,signup_date,is_active
101,Alice Smith,alice.smith@example.com,2023-01-15,TRUE
102,Bob Johnson,,2023-02-20,TRUE
103,Charlie Brown,charlie.b@,2023-03-01,FALSE
104,David Lee,david.lee@example.com,2023-04-05,TRUE
105,Eve Adams,eve@example.com,invalid-date,TRUE
```

**Validation Rules:**

1.  `customer_id`: Must be an integer, not null, and unique.
2.  `name`: Must not be null.
3.  `email`: Must not be null and must be a valid email format.
4.  `signup_date`: Must be a valid date in `YYYY-MM-DD` format.
5.  `is_active`: Must be either 'TRUE' or 'FALSE'.

**Conceptual Python Code for Validation:**

```python
import pandas as pd
import re

def is_valid_email(email):
    if pd.isna(email):
        return False
    # Simple regex for email validation
    pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    return re.match(pattern, str(email)) is not None

def validate_customer_data(filepath):
    try:
        df = pd.read_csv(filepath)
    except FileNotFoundError:
        print(f"Error: File not found at {filepath}")
        return None, None

    errors = []
    valid_rows = []

    # Rule 1: customer_id (integer, not null, unique)
    if 'customer_id' not in df.columns:
        errors.append("Missing 'customer_id' column.")
    else:
        # Check for nulls
        if df['customer_id'].isnull().any():
            errors.append("Null values found in 'customer_id'.")
        # Check for integer type (attempt conversion)
        try:
            df['customer_id'] = df['customer_id'].astype(int)
        except ValueError:
            errors.append("Non-integer values found in 'customer_id'.")
        # Check for uniqueness
        if not df['customer_id'].is_unique:
            errors.append("Duplicate values found in 'customer_id'.")

    # Rule 2: name (not null)
    if 'name' not in df.columns:
        errors.append("Missing 'name' column.")
    elif df['name'].isnull().any():
        errors.append("Null values found in 'name'.")

    # Rule 3: email (not null, valid format)
    if 'email' not in df.columns:
        errors.append("Missing 'email' column.")
    else:
        if df['email'].isnull().any():
            errors.append("Null values found in 'email'.")
        invalid_emails = df[~df['email'].apply(is_valid_email)]
        if not invalid_emails.empty:
            errors.append(f"Invalid email formats found: {invalid_emails['email'].tolist()}")

    # Rule 4: signup_date (valid YYYY-MM-DD)
    if 'signup_date' not in df.columns:
        errors.append("Missing 'signup_date' column.")
    else:
        try:
            df['signup_date'] = pd.to_datetime(df['signup_date'], format='%Y-%m-%d', errors='raise')
        except ValueError:
            errors.append("Invalid date format found in 'signup_date'. Expected YYYY-MM-DD.")

    # Rule 5: is_active (TRUE or FALSE)
    if 'is_active' not in df.columns:
        errors.append("Missing 'is_active' column.")
    else:
        valid_statuses = ['TRUE', 'FALSE']
        invalid_statuses = df[~df['is_active'].isin(valid_statuses)]
        if not invalid_statuses.empty:
            errors.append(f"Invalid values in 'is_active': {invalid_statuses['is_active'].tolist()}. Must be 'TRUE' or 'FALSE'.")

    if not errors:
        print("Data validation successful!")
        # You would typically filter out rows with errors and proceed with valid_rows
        # For simplicity, returning the dataframe if no top-level errors found
        return df, []
    else:
        print("Data validation failed. Errors found:")
        for error in errors:
            print(f"- {error}")
        # In a real pipeline, you'd return which rows failed and why
        return None, errors

# Example usage:
# Assuming 'customers.csv' is in the same directory
# validated_df, validation_errors = validate_customer_data('customers.csv')
# if validated_df is not None:
#     print("\nProceeding with validated data...")
#     # Load validated_df into your data warehouse or process further
# else:
#     print("\nAborting pipeline due to data errors.")
```

This conceptual example demonstrates how you might use a library like `pandas` to perform these checks. In a real-world data pipeline, you would likely use specialized data quality tools or frameworks that offer more robust validation capabilities and better error reporting.

## Best Practices

*   **Define clear validation rules:** Document your expectations for each data element.
*   **Automate validation:** Integrate checks into your pipeline orchestration.
*   **Handle errors gracefully:** Decide whether to reject problematic records, flag them, or attempt to correct them.
*   **Monitor validation results:** Keep track of data quality over time to identify trends.
*   **Start simple and iterate:** Implement core validations first and add more complex checks as needed.

By diligently applying data validation, you build a more robust, reliable, and trustworthy data engineering pipeline.

## Supports

- [[skills/computing/data-ai/data-engineering-platforms/data-engineering/microskills/data-validation|Data Validation]]

---
type: "medium"
title: "Snowflake Secure Data Sharing: Controlled Access Without Copying"
tags:
  - "medium"
  - "ai-generated"
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[skills/computing/data-ai/data-engineering-platforms/snowflake/microskills/secure-sharing|secure-sharing]]"
learning-time-in-minutes: 4
---
# Snowflake Secure Data Sharing: Controlled Access Without Copying

In Snowflake, sharing data securely and efficiently is crucial for collaboration and data utilization. The "Secure Sharing" feature allows you to grant access to your data to other Snowflake accounts without physically copying or moving the data. This means you maintain full control over your data, and the consumer gets live, read-only access.

## What is Snowflake Secure Sharing?

At its core, Snowflake Secure Sharing is a mechanism that enables data providers to share data directly from their Snowflake account to data consumers, who can then access it in their own Snowflake accounts. The key benefit is that no data is ever copied or transferred. Instead, Snowflake leverages its architecture to provide secure, governed access.

Think of it like this: Instead of giving someone a copy of a document, you're giving them a secure, read-only link to the original document stored in a secure location. They can view and work with the document, but they can't alter the original, and you control who gets the link and what they can see.

## Key Concepts in Secure Sharing

Snowflake implements secure sharing through several core components:

*   **Provider:** The Snowflake account that owns and shares the data.
*   **Consumer:** The Snowflake account that receives access to the shared data.
*   **Share:** A Snowflake object that bundles one or more data objects (like tables, views, or secure views) that a provider wishes to share.
*   **Databases:** Shared data is accessed through read-only "reader" databases created in the consumer's account.
*   **Privileges:** The provider defines which data objects are included in the share and grants specific privileges to the consumer over those objects.
*   **Accounts:** Sharing happens between Snowflake accounts, identified by their unique account identifiers.

## How Secure Sharing Works (The Magic Behind It)

When a provider creates a share and grants access to a consumer account:

1.  **Metadata Exchange:** Snowflake exchanges metadata about the shared data objects between the provider and consumer accounts.
2.  **Reader Account Creation:** The consumer creates a read-only database in their account, which is essentially a "pointer" to the shared data.
3.  **Query Execution:** When the consumer queries the shared data, the query is processed by Snowflake. Snowflake's compute layer, which spans across the provider's and consumer's accounts (conceptually), executes the query. The data itself remains in the provider's account and is streamed securely to the consumer's query.
4.  **Access Control:** Snowflake enforces the access controls defined by the provider, ensuring the consumer can only access the specific data objects they are authorized to see.

## Benefits of Secure Sharing

*   **No Data Duplication:** Eliminates the cost, complexity, and security risks associated with copying and moving data.
*   **Real-time Data Access:** Consumers always access the latest version of the data without needing manual updates.
*   **Enhanced Security and Governance:** Providers maintain full control over their data. Access can be revoked at any time.
*   **Simplified Data Distribution:** Makes it easy to share data with partners, customers, or internal teams.
*   **Cost Efficiency:** Reduces storage and ETL costs.

## Practical Example: Sharing a Customer Table

Let's imagine a scenario where `Account A` (the provider) wants to share a `customers` table with `Account B` (the consumer) for analytical purposes.

**On Account A (Provider):**

1.  **Create a Share:**
    ```sql
    -- First, ensure you have a database and table to share
    CREATE DATABASE IF NOT EXISTS MY_DATA_DB;
    USE MY_DATA_DB;
    CREATE TABLE IF NOT EXISTS customers (
        customer_id INT,
        customer_name VARCHAR,
        region VARCHAR
    );
    -- Populate with some data...

    -- Create the share
    CREATE SHARE my_customer_share;

    -- Grant usage on the database and schema
    GRANT USAGE ON DATABASE MY_DATA_DB TO SHARE my_customer_share;
    GRANT USAGE ON SCHEMA MY_DATA_DB.PUBLIC TO SHARE my_customer_share; -- Assuming customers table is in PUBLIC schema

    -- Grant select on the table
    GRANT SELECT ON TABLE MY_DATA_DB.PUBLIC.customers TO SHARE my_customer_share;

    -- Grant the share to the consumer account
    -- Replace <account_b_account_identifier> with the actual account identifier for Account B
    ALTER SHARE my_customer_share ADD ACCOUNTS = <account_b_account_identifier>;
    ```

**On Account B (Consumer):**

1.  **Accept the Share and Create a Reader Database:**
    ```sql
    -- In Account B, a user with appropriate privileges would execute:
    -- This command is run in Account B, but it points to Account A's share.
    -- The syntax for creating a reader database from a share is different and typically done by granting access through the consumer's Snowflake UI or a specific grant statement initiated by the provider that the consumer then accepts.
    -- The most common way is to have Account A grant the share to Account B, and then Account B's admin can see the incoming share and create a database from it.

    -- Once Account A has successfully shared, Account B's admin would go to:
    -- Databases -> Create -> From Share
    -- And select the incoming share from Account A. This action will create a new database in Account B.
    -- Let's assume Account B created a database named "SHARED_CUSTOMERS" from the share.
    ```

2.  **Query the Shared Data:**
    ```sql
    USE DATABASE SHARED_CUSTOMERS; -- The database created from the share
    USE SCHEMA PUBLIC; -- Or the schema where the table resides in the shared data

    SELECT * FROM customers WHERE region = 'North';
    ```

Now, `Account B` can query the `customers` table as if it were a local table, but the data remains securely managed by `Account A`.

## Important Considerations

*   **Secure Views:** For more granular control over what data is shared (e.g., masking sensitive columns), use Secure Views.
*   **Object Types:** You can share tables, views, secure views, and even stored procedures (though sharing stored procedures has specific nuances).
*   **Account Identifiers:** Ensure you use the correct Snowflake account identifiers for sharing.
*   **Replication:** Secure sharing is distinct from data replication, which involves creating copies of data for disaster recovery or performance.

By mastering Snowflake's Secure Sharing, you unlock powerful capabilities for data collaboration and monetization, all while maintaining robust security and governance.

## Supports

- [[skills/computing/data-ai/data-engineering-platforms/snowflake/microskills/secure-sharing|Secure Sharing]]

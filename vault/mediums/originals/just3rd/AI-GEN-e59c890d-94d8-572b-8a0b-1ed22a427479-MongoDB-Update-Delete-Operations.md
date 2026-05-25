---
type: medium
title: Updating and Removing Documents in MongoDB
tags:
  - medium
  - ai-generated
contributor: "[[contributors/just3rd|just3rd]]"
learning-outcomes:
  - "[[mongodb-update-delete-operations|mongodb-update-delete-operations]]"
related-skills:
  - "[[mongodb|mongodb]]"
learning-time-in-minutes: 3
---
# Updating and Removing Documents in MongoDB

This lesson focuses on the essential MongoDB operations for modifying and deleting existing documents within your collections. Building on the ability to insert and find documents, understanding how to update and remove data is crucial for managing your database effectively.

## Why Update and Delete?

Databases are dynamic. Information changes, becomes obsolete, or needs to be corrected.

*   **Updating:** Allows you to modify existing document fields, add new fields, or remove fields without replacing the entire document. This is more efficient than deleting and re-inserting.
*   **Deleting:** Necessary for removing records that are no longer needed, such as expired user accounts, old inventory items, or temporary data.

## Updating Documents

MongoDB provides several operators for updating documents. The most common are `updateOne()` and `updateMany()`.

### `updateOne()`

This method updates the **first document** that matches the specified filter.

**Syntax:**

```javascript
db.collection.updateOne(
   <filter>,
   <update>,
   <options>
)
```

*   `<filter>`: A query document that specifies which document to update.
*   `<update>`: A document that contains the update operators and the new values for the fields.
*   `<options>`: Optional parameters, such as `upsert` (if true, inserts a new document if no document matches the filter).

**Example:** Let's say we have a `users` collection with documents like this:

```json
{
  "_id": ObjectId("some_id_1"),
  "name": "Alice",
  "age": 30,
  "city": "New York"
}
```

To update Alice's age to 31:

```javascript
db.users.updateOne(
  { "name": "Alice" },       // Filter: find the document where name is "Alice"
  { $set: { "age": 31 } }    // Update: use the $set operator to change the 'age' field
)
```

#### Common Update Operators:

*   `$set`: Replaces the value of a field with the specified value. If the field does not exist, `$set` adds the new field with the specified value.
*   `$unset`: Removes a field from a document.
*   `$inc`: Increments the value of a field by a specified amount.
*   `$push`: Appends a specified value to an array field.

### `updateMany()`

This method updates **all documents** that match the specified filter.

**Syntax:**

```javascript
db.collection.updateMany(
   <filter>,
   <update>,
   <options>
)
```

**Example:** To increment the age of all users living in "New York" by 1:

```javascript
db.users.updateMany(
  { "city": "New York" },    // Filter: find all documents where city is "New York"
  { $inc: { "age": 1 } }     // Update: use the $inc operator to increment the 'age' field by 1
)
```

## Deleting Documents

Similar to updating, MongoDB provides `deleteOne()` and `deleteMany()` for removing documents.

### `deleteOne()`

This method removes the **first document** that matches the specified filter.

**Syntax:**

```javascript
db.collection.deleteOne(
   <filter>,
   <options>
)
```

*   `<filter>`: A query document that specifies which document to delete.
*   `<options>`: Optional parameters.

**Example:** To delete the user named "Bob":

```javascript
db.users.deleteOne(
  { "name": "Bob" }          // Filter: find the document where name is "Bob"
)
```

### `deleteMany()`

This method removes **all documents** that match the specified filter.

**Syntax:**

```javascript
db.collection.deleteMany(
   <filter>,
   <options>
)
```

**Example:** To delete all users who are younger than 25:

```javascript
db.users.deleteMany(
  { "age": { $lt: 25 } }     // Filter: find all documents where age is less than 25
)
```

#### Caution with `deleteMany()`

Using `deleteMany()` without a filter (`{}`) will **delete ALL documents** in the collection. Be extremely careful when running this command.

```javascript
// WARNING: This will delete ALL documents in the 'products' collection!
db.products.deleteMany({});
```

## Practical Application

Imagine an e-commerce platform.

1.  **Updating:** A customer changes their shipping address. You'd use `updateOne` on the customer's document to update their `address` field.
2.  **Deleting:** A product is discontinued and removed from sale. You'd use `deleteOne` to remove that product's document from the `products` collection. If a batch of expired coupons needs to be removed, `deleteMany` would be used.

By mastering these update and delete operations, you gain the ability to actively manage and maintain the integrity of your data within MongoDB collections.

## Supports

- [[mongodb-update-delete-operations|MongoDB Update/Delete Operations]]

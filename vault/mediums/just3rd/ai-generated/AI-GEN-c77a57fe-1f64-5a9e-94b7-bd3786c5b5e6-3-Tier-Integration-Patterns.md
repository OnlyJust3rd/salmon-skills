---
type: "medium"
title: "3-Tier Integration Patterns for Database Connectivity"
tags:
  - "medium"
  - "ai-generated"
medium-kind: "ai-generated"
source: "just3rd"
supports:
  - "[[skills/web-and-design/backend-api/application-database-integration/microskills/3-tier-integration-patterns|3-tier-integration-patterns]]"
---
# 3-Tier Integration Patterns for Database Connectivity

When building applications that interact with databases, especially within a 3-tier architecture, how your application layers communicate with the database is crucial. This lesson focuses on the common patterns for achieving this connectivity, allowing your application to store and retrieve data effectively.

In a 3-tier architecture, we typically have:
1.  **Presentation Layer:** The user interface (e.g., web browser).
2.  **Application/Business Logic Layer:** Processes user requests and contains the core application logic.
3.  **Data Layer:** Manages data storage and retrieval (e.g., a relational database).

The challenge is how the Application Layer securely and efficiently talks to the Data Layer.

## Key Integration Patterns

### 1. Direct Database Connection

This is the most straightforward approach. The application layer directly connects to the database using connection strings and database drivers.

**How it works:**
The application layer establishes a persistent or ad-hoc connection to the database. It then sends SQL queries directly to the database and processes the results.

**Example Scenario:**
Imagine a simple blog application. The "post management" module (Application Layer) needs to save a new blog post. It would form an SQL `INSERT` statement and execute it directly against the database.

**Pseudocode:**

```
// Application Layer Code (e.g., Python, Java, Node.js)

db_connection = connect_to_database("your_db_connection_string")
sql_query = "INSERT INTO posts (title, content, author_id) VALUES (?, ?, ?)"
parameters = ("My First Post", "This is the content...", 123)
execute_query(db_connection, sql_query, parameters)
close_connection(db_connection)
```

### 2. Data Access Object (DAO) Pattern

This pattern abstracts the data access logic. Instead of the business logic layer interacting directly with the database, it interacts with DAOs, which then handle the actual database operations.

**How it works:**
Each DAO typically represents a table or entity in your database. It provides methods for CRUD (Create, Read, Update, Delete) operations. This decouples the business logic from the specific database implementation.

**Example Scenario:**
In the blog application, you might have a `PostDAO` class. The business logic layer would call methods like `postDAO.save(postObject)` or `postDAO.findById(postId)`. The `PostDAO` itself would contain the code to construct and execute the necessary SQL queries.

**Pseudocode (Conceptual):**

```
// Application Layer Code
post_data = {"title": "New Article", "content": "Content here...", "author_id": 456}
postDAO.save(post_data)

// PostDAO Class (Data Layer Abstraction)
class PostDAO {
    connect() { /* establishes connection */ }
    save(post_data) {
        sql = "INSERT INTO posts (title, content, author_id) VALUES (?, ?, ?)"
        execute_sql(sql, [post_data.title, post_data.content, post_data.author_id])
    }
    findById(id) {
        sql = "SELECT * FROM posts WHERE id = ?"
        return fetch_one(sql, [id])
    }
    // ... other methods
}
```

### 3. Repository Pattern

Similar to DAO, the Repository pattern acts as an intermediary. It presents a collection-like interface for accessing domain objects, abstracting the persistence mechanism. It's often considered a higher-level abstraction than DAO.

**How it works:**
Repositories manage collections of domain objects. They can handle querying, data mapping, and object identity. They are often used with ORMs (Object-Relational Mappers).

**Example Scenario:**
For the blog, a `PostRepository` might have methods like `postRepository.add(post)` or `postRepository.query(criteria)`. If you're using an ORM, the repository internally uses the ORM's capabilities to translate these operations into database commands.

---

**Practice Task:**
Choose one of the patterns (Direct Connection or DAO) and outline the pseudocode for saving a new "user" record to a `users` table with `username` and `email` columns.

---

**Self-Check Questions:**
1.  What is the primary advantage of using the DAO pattern over direct database connections?
2.  If you were using an ORM like SQLAlchemy or Hibernate, which pattern would be most naturally aligned with its usage?
3.  Why is it generally discouraged for the Presentation Layer to directly interact with the Data Layer?

## Supports

- [[skills/web-and-design/backend-api/application-database-integration/microskills/3-tier-integration-patterns|3-Tier Integration Patterns]]

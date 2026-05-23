window.QUIZ_DATA = window.QUIZ_DATA || {};
window.QUIZ_DATA["day12"] = {
  title: "SQL for Data Engineering",
  category: "de",
  topics: ["DDL Commands", "DML Commands", "DCL & TCL", "Query Optimization Basics", "Performance Tuning"],
  questions: [
    {
      id: 1,
      type: "single",
      difficulty: 1,
      topic: "DDL Commands",
      question: "Which SQL command is used to permanently remove an entire table structure along with all its data from the database?",
      options: ["TRUNCATE TABLE employees", "DELETE FROM employees", "DROP TABLE employees", "REMOVE TABLE employees"],
      correct: [2],
      concept: "DROP TABLE removes the entire table structure, data, indexes, constraints, and triggers from the database permanently. TRUNCATE removes only data but keeps the structure. DELETE removes rows but keeps structure and can be rolled back. REMOVE is not a valid SQL command."
    },
    {
      id: 2,
      type: "single",
      difficulty: 1,
      topic: "DDL Commands",
      question: "What is the primary difference between TRUNCATE TABLE and DELETE FROM table_name without a WHERE clause?",
      options: ["TRUNCATE is DML while DELETE is DDL", "TRUNCATE cannot be rolled back in most RDBMS and resets identity, DELETE can be rolled back", "DELETE is faster because it does not log operations", "There is no difference; both behave identically"],
      correct: [1],
      concept: "TRUNCATE is a DDL command that deallocates data pages, resets identity counters, and in most RDBMS cannot be rolled back (except SQL Server within an explicit transaction). DELETE is a DML command that logs individual row deletions, fires triggers, and can be rolled back within a transaction."
    },
    {
      id: 3,
      type: "single",
      difficulty: 1,
      topic: "DDL Commands",
      question: "Which ALTER TABLE statement correctly adds a new column \'email\' of type VARCHAR(255) to an existing \'users\' table?",
      options: ["ALTER TABLE users INSERT COLUMN email VARCHAR(255)", "ALTER TABLE users ADD COLUMN email VARCHAR(255)", "ALTER TABLE users APPEND email VARCHAR(255)", "ALTER TABLE users CREATE COLUMN email VARCHAR(255)"],
      correct: [1],
      concept: "ALTER TABLE ... ADD COLUMN is the standard SQL syntax for adding a new column to an existing table. INSERT, APPEND, and CREATE are not valid sub-commands of ALTER TABLE for column addition. Some RDBMS allow omitting the COLUMN keyword."
    },
    {
      id: 4,
      type: "single",
      difficulty: 1,
      topic: "DDL Commands",
      question: "You need to change the data type of column \'price\' from INT to DECIMAL(10,2) in the \'products\' table. Which command achieves this in standard SQL?",
      options: ["ALTER TABLE products CHANGE price DECIMAL(10,2)", "ALTER TABLE products MODIFY COLUMN price DECIMAL(10,2)", "ALTER TABLE products UPDATE COLUMN price DECIMAL(10,2)", "ALTER TABLE products SET price TYPE DECIMAL(10,2)"],
      correct: [1],
      concept: "ALTER TABLE ... MODIFY COLUMN is used to change a column\'s data type or properties. CHANGE is MySQL-specific and requires both old and new column names. UPDATE is a DML command, not for schema changes. SET ... TYPE is not standard SQL syntax for modifying columns."
    },
    {
      id: 5,
      type: "single",
      difficulty: 1,
      topic: "DDL Commands",
      question: "What does the RENAME TABLE command do in SQL?",
      options: ["Changes the data type of a table column", "Changes the name of an existing table in the database", "Creates a copy of the table with a new name", "Changes the schema owner of the table"],
      correct: [1],
      concept: "RENAME TABLE (or ALTER TABLE ... RENAME TO) changes the name of an existing table without modifying its structure, data, or dependent objects. It does not create copies, change data types, or alter schema ownership."
    },
    {
      id: 6,
      type: "single",
      difficulty: 1,
      topic: "DDL Commands",
      question: "Which DDL statement would you use to remove a column named \'fax_number\' from the \'contacts\' table?",
      options: ["DELETE COLUMN fax_number FROM contacts", "ALTER TABLE contacts DROP COLUMN fax_number", "ALTER TABLE contacts REMOVE fax_number", "DROP COLUMN fax_number ON contacts"],
      correct: [1],
      concept: "ALTER TABLE ... DROP COLUMN is the correct syntax for removing a column from an existing table. DELETE is a DML command for row removal. REMOVE and DROP COLUMN ON are not valid SQL syntax for column removal."
    },
    {
      id: 7,
      type: "single",
      difficulty: 1,
      topic: "DDL Commands",
      question: "Which of the following is a valid CREATE TABLE constraint that ensures no duplicate values are stored in the \'employee_id\' column?",
      options: ["CHECK (employee_id IS DISTINCT)", "UNIQUE (employee_id)", "DISTINCT (employee_id)", "NO DUPLICATES (employee_id)"],
      correct: [1],
      concept: "The UNIQUE constraint ensures that all values in a column are different. CHECK is for custom validation rules, DISTINCT is a SELECT clause keyword, and NO DUPLICATES is not a valid SQL constraint. UNIQUE allows multiple NULL values in most RDBMS."
    },
    {
      id: 8,
      type: "single",
      difficulty: 1,
      topic: "DML Commands",
      question: "Which SQL statement inserts multiple rows into a table in a single operation?",
      options: ["INSERT INTO orders VALUES (1, \'A\'); INSERT INTO orders VALUES (2, \'B\')", "INSERT INTO orders VALUES (1, \'A\'), (2, \'B\')", "INSERT MULTI INTO orders VALUES (1, \'A\'), (2, \'B\')", "BULK INSERT INTO orders VALUES (1, \'A\'), (2, \'B\')"],
      correct: [1],
      concept: "Multi-row INSERT syntax uses a single INSERT INTO statement followed by multiple value tuples separated by commas. This is more efficient than individual INSERT statements because it reduces network round-trips and transaction overhead. BULK INSERT is a separate command for loading files."
    },
    {
      id: 9,
      type: "single",
      difficulty: 1,
      topic: "DML Commands",
      question: "What does the INSERT INTO ... SELECT statement accomplish?",
      options: ["Creates a new table from the SELECT results", "Inserts rows into an existing table using data from a query", "Updates existing rows based on SELECT criteria", "Replaces the table structure with the SELECT output"],
      correct: [1],
      concept: "INSERT INTO ... SELECT inserts rows into an existing target table using data retrieved from a SELECT query. It does not create new tables (that would be CREATE TABLE AS SELECT), modify existing rows, or alter table structure. The column count and types must match."
    },
    {
      id: 10,
      type: "single",
      difficulty: 1,
      topic: "DML Commands",
      question: "Which statement correctly updates the salary of all employees in the \'Engineering\' department to 80000?",
      options: ["MODIFY employees SET salary = 80000 WHERE department = \'Engineering\'", "UPDATE employees SET salary = 80000 WHERE department = \'Engineering\'", "ALTER employees SET salary = 80000 WHERE department = \'Engineering\'", "CHANGE employees salary = 80000 WHERE department = \'Engineering\'"],
      correct: [1],
      concept: "UPDATE ... SET ... WHERE is the standard DML syntax for modifying existing row values in a table. MODIFY and ALTER are DDL-related keywords for schema changes. CHANGE is not a standard SQL DML command."
    },
    {
      id: 11,
      type: "single",
      difficulty: 1,
      topic: "DML Commands",
      question: "What happens if you execute DELETE FROM orders without specifying a WHERE clause?",
      options: ["The command fails with a syntax error", "Only the first row is deleted", "All rows in the orders table are deleted", "The table structure is dropped"],
      correct: [2],
      concept: "DELETE FROM without a WHERE clause removes ALL rows from the table. Unlike DROP TABLE, it preserves the table structure, indexes, and constraints. Unlike TRUNCATE, it logs each row deletion individually and can be rolled back within a transaction."
    },
    {
      id: 12,
      type: "single",
      difficulty: 1,
      topic: "DML Commands",
      question: "The MERGE statement in SQL combines which operations into a single atomic statement?",
      options: ["CREATE and DROP operations", "INSERT and UPDATE (and optionally DELETE) operations", "GRANT and REVOKE operations", "SELECT and ORDER BY operations"],
      correct: [1],
      concept: "MERGE (also known as UPSERT in some databases) combines INSERT, UPDATE, and optionally DELETE operations into a single statement. It matches source rows against target rows using a condition and performs different actions based on whether a match is found."
    },
    {
      id: 13,
      type: "single",
      difficulty: 1,
      topic: "DCL & TCL",
      question: "Which SQL command gives a user permission to SELECT data from a specific table?",
      options: ["ALLOW SELECT ON employees TO analyst_user", "PERMIT SELECT ON employees TO analyst_user", "GRANT SELECT ON employees TO analyst_user", "ENABLE SELECT ON employees FOR analyst_user"],
      correct: [2],
      concept: "GRANT is the DCL (Data Control Language) command used to give specific privileges to users or roles. ALLOW, PERMIT, and ENABLE are not valid SQL commands. GRANT can assign various privileges including SELECT, INSERT, UPDATE, DELETE, EXECUTE, and ALL PRIVILEGES."
    },
    {
      id: 14,
      type: "single",
      difficulty: 1,
      topic: "DCL & TCL",
      question: "What does the REVOKE command do in SQL?",
      options: ["Deletes a user account from the database", "Removes previously granted privileges from a user or role", "Rolls back the last committed transaction", "Cancels a pending ALTER TABLE operation"],
      correct: [1],
      concept: "REVOKE is a DCL command that removes previously granted privileges from a user or role. It does not delete user accounts (that would be DROP USER), roll back transactions (that is ROLLBACK), or cancel DDL operations."
    },
    {
      id: 15,
      type: "single",
      difficulty: 1,
      topic: "DCL & TCL",
      question: "What is the purpose of the COMMIT statement in SQL?",
      options: ["Begins a new transaction block", "Saves all changes made during the current transaction permanently", "Undoes all changes made during the current transaction", "Creates a named restore point within a transaction"],
      correct: [1],
      concept: "COMMIT is a TCL (Transaction Control Language) command that permanently saves all changes made during the current transaction to the database. Once committed, changes cannot be rolled back. BEGIN starts a transaction, ROLLBACK undoes changes, and SAVEPOINT creates a named restore point."
    },
    {
      id: 16,
      type: "single",
      difficulty: 1,
      topic: "DCL & TCL",
      question: "Which TCL statement undoes all modifications made since the last COMMIT or SAVEPOINT?",
      options: ["UNDO", "REVERT", "ROLLBACK", "RESTORE"],
      correct: [2],
      concept: "ROLLBACK is the TCL command that undoes all changes made since the last COMMIT or to a specific SAVEPOINT. UNDO, REVERT, and RESTORE are not standard SQL TCL commands. ROLLBACK releases any locks held by the transaction."
    },
    {
      id: 17,
      type: "single",
      difficulty: 1,
      topic: "DCL & TCL",
      question: "What does a SAVEPOINT allow you to do within a transaction?",
      options: ["Permanently commit a portion of the transaction", "Create a named marker to partially rollback to without aborting the entire transaction", "Lock specific tables for exclusive access", "Save the current query execution plan for reuse"],
      correct: [1],
      concept: "SAVEPOINT creates a named point within a transaction that you can ROLLBACK TO without rolling back the entire transaction. Changes made before the savepoint remain intact. It does not commit anything, lock tables, or save execution plans."
    },
    {
      id: 18,
      type: "single",
      difficulty: 1,
      topic: "Query Optimization Basics",
      question: "What is the correct logical order of SQL query execution?",
      options: ["SELECT > FROM > WHERE > GROUP BY > HAVING > ORDER BY", "FROM > WHERE > GROUP BY > HAVING > SELECT > ORDER BY > LIMIT", "FROM > SELECT > WHERE > GROUP BY > ORDER BY > HAVING", "SELECT > WHERE > FROM > GROUP BY > ORDER BY > HAVING"],
      correct: [1],
      concept: "The logical query execution order is: FROM (identify tables) > WHERE (filter rows) > GROUP BY (aggregate groups) > HAVING (filter groups) > SELECT (choose columns) > ORDER BY (sort results) > LIMIT (restrict output). This explains why column aliases defined in SELECT cannot be used in WHERE."
    },
    {
      id: 19,
      type: "single",
      difficulty: 1,
      topic: "Query Optimization Basics",
      question: "Why can\'t you use a column alias defined in the SELECT clause within the WHERE clause?",
      options: ["Column aliases are only for display purposes and have no internal meaning", "WHERE is evaluated before SELECT in the logical query execution order", "Column aliases are only valid in HAVING clauses", "SQL parsers do not support aliases in any filtering clause"],
      correct: [1],
      concept: "In the logical query execution order, WHERE is processed before SELECT. Since the alias is defined in SELECT, it does not exist when WHERE is evaluated. This is why you must use the original column name or expression in WHERE. Some databases like MySQL allow aliases in GROUP BY and HAVING as extensions."
    },
    {
      id: 20,
      type: "single",
      difficulty: 1,
      topic: "Query Optimization Basics",
      question: "What is the primary purpose of a database index?",
      options: ["To enforce data integrity constraints on columns", "To speed up data retrieval operations by reducing the number of disk reads", "To compress table data for storage savings", "To automatically backup frequently accessed columns"],
      correct: [1],
      concept: "Indexes are data structures (typically B-tree or hash-based) that speed up data retrieval by allowing the database to find rows without scanning the entire table. While indexes can enforce uniqueness as a side effect, their primary purpose is performance optimization for read operations."
    },
    {
      id: 21,
      type: "single",
      difficulty: 1,
      topic: "Query Optimization Basics",
      question: "Which type of index is most commonly used in relational databases for range queries?",
      options: ["Hash index", "B-tree index", "Bitmap index", "Full-text index"],
      correct: [1],
      concept: "B-tree (balanced tree) indexes are the most common default index type and excel at both equality and range queries because they store data in sorted order. Hash indexes only support equality comparisons. Bitmap indexes are suited for low-cardinality columns. Full-text indexes are for text search."
    },
    {
      id: 22,
      type: "single",
      difficulty: 1,
      topic: "Performance Tuning",
      question: "What does the term \'full table scan\' mean in the context of query performance?",
      options: ["The database validates all constraints on every row", "The database reads every row in the table to find matching results", "The database rebuilds all indexes on the table", "The database checks every column for null values"],
      correct: [1],
      concept: "A full table scan (or sequential scan) occurs when the database reads every row in a table to satisfy a query. This happens when no suitable index exists, the optimizer determines a scan is cheaper, or the query cannot use available indexes. Full scans are expensive on large tables."
    },
    {
      id: 23,
      type: "single",
      difficulty: 1,
      topic: "Performance Tuning",
      question: "Which of the following is a common anti-pattern that prevents index usage on the \'created_date\' column?",
      options: ["WHERE created_date = \'2024-01-01\'", "WHERE created_date > \'2024-01-01\'", "WHERE YEAR(created_date) = 2024", "WHERE created_date BETWEEN \'2024-01-01\' AND \'2024-12-31\'"],
      correct: [2],
      concept: "Wrapping an indexed column in a function (like YEAR()) prevents the optimizer from using the index because the stored index values differ from the computed values. This is called a non-SARGable predicate. Range comparisons using BETWEEN or direct comparisons can still use the index."
    },
    {
      id: 24,
      type: "single",
      difficulty: 1,
      topic: "Performance Tuning",
      question: "What is \'cardinality\' in the context of database indexes and statistics?",
      options: ["The physical size of an index on disk", "The number of distinct values in a column or index", "The maximum number of indexes allowed on a table", "The depth of a B-tree index structure"],
      correct: [1],
      concept: "Cardinality refers to the number of distinct (unique) values in a column. High cardinality (e.g., a primary key) means an index is very selective and efficient. Low cardinality (e.g., a boolean column) means the index may not be useful because each value matches many rows."
    },
    {
      id: 25,
      type: "single",
      difficulty: 1,
      topic: "DDL Commands",
      question: "Which DDL command is used to create a new database schema or namespace?",
      options: ["CREATE DATABASE mydb", "MAKE DATABASE mydb", "INIT DATABASE mydb", "BUILD DATABASE mydb"],
      correct: [0],
      concept: "CREATE DATABASE (or CREATE SCHEMA in some RDBMS) is the DDL command for creating a new database. MAKE, INIT, and BUILD are not standard SQL commands. CREATE is the universal DDL keyword for creating objects like databases, tables, views, indexes, and sequences."
    },
    {
      id: 26,
      type: "single",
      difficulty: 1,
      topic: "DML Commands",
      question: "Which keyword is used with DELETE to specify which rows should be removed?",
      options: ["FILTER", "HAVING", "WHERE", "WHEN"],
      correct: [2],
      concept: "The WHERE clause is used with DELETE to specify which rows to remove. Without WHERE, all rows are deleted. FILTER is not a standard SQL clause for DELETE. HAVING is used only with GROUP BY aggregations. WHEN is used in CASE expressions and MERGE statements."
    },
    {
      id: 27,
      type: "single",
      difficulty: 1,
      topic: "DCL & TCL",
      question: "What is \'auto-commit\' mode in SQL databases?",
      options: ["A mode where all DDL statements are automatically logged", "A mode where each individual SQL statement is automatically treated as a complete transaction", "A mode where transactions commit at scheduled intervals", "A mode where only SELECT statements are auto-committed"],
      correct: [1],
      concept: "Auto-commit mode means each SQL statement is automatically wrapped in its own transaction and committed immediately after execution. Many databases and client tools enable auto-commit by default. To group multiple statements in one transaction, you must explicitly use BEGIN TRANSACTION."
    },
    {
      id: 28,
      type: "single",
      difficulty: 1,
      topic: "Query Optimization Basics",
      question: "What is \'predicate pushdown\' in query optimization?",
      options: ["Moving ORDER BY clauses to the end of execution", "Pushing filter conditions closer to the data source to reduce rows processed early", "Pushing JOIN conditions into subqueries for parallel execution", "Moving aggregate functions before the GROUP BY evaluation"],
      correct: [1],
      concept: "Predicate pushdown is an optimization technique where the query optimizer pushes filter (WHERE) conditions as close to the data source as possible. This reduces the volume of data read, transferred, and processed in subsequent operations, significantly improving performance especially with partitioned tables."
    },
    {
      id: 29,
      type: "single",
      difficulty: 1,
      topic: "Performance Tuning",
      question: "Why is SELECT * considered a performance anti-pattern in production queries?",
      options: ["It causes syntax errors in most modern databases", "It retrieves all columns, increasing I/O, memory usage, and network transfer unnecessarily", "It bypasses all table indexes completely", "It locks the entire table during the query execution"],
      correct: [1],
      concept: "SELECT * retrieves all columns from a table, even those not needed. This increases disk I/O, memory consumption, and network bandwidth. It also prevents covering index optimizations and can break applications when table schemas change. Always specify only the columns you need."
    },
    {
      id: 30,
      type: "single",
      difficulty: 1,
      topic: "DDL Commands",
      question: "What happens to the data when you execute TRUNCATE TABLE on a table?",
      options: ["Data is moved to a recycle bin for recovery", "All rows are removed and the storage space is deallocated immediately", "Only rows older than 30 days are removed", "Data is compressed but not deleted"],
      correct: [1],
      concept: "TRUNCATE TABLE removes all rows from a table and deallocates the data pages, effectively resetting the table to its empty state. It is faster than DELETE because it does not log individual row deletions. Identity columns are reset. In most RDBMS, TRUNCATE cannot be rolled back."
    },
    {
      id: 31,
      type: "single",
      difficulty: 1,
      topic: "DML Commands",
      question: "In a MERGE statement, which clause specifies the condition for matching source and target rows?",
      options: ["WHERE", "HAVING", "ON", "MATCH"],
      correct: [2],
      concept: "The MERGE statement uses the ON clause to specify the join condition between the source and target tables. When a match is found, the WHEN MATCHED clause executes (typically UPDATE). When no match is found, WHEN NOT MATCHED executes (typically INSERT). WHERE and HAVING serve different purposes."
    },
    {
      id: 32,
      type: "single",
      difficulty: 1,
      topic: "DCL & TCL",
      question: "Which command creates a named point within a transaction to allow partial rollback?",
      options: ["CHECKPOINT my_point", "SAVEPOINT my_point", "BOOKMARK my_point", "MARKER my_point"],
      correct: [1],
      concept: "SAVEPOINT creates a named marker within a transaction. You can later issue ROLLBACK TO SAVEPOINT my_point to undo changes made after that point without rolling back the entire transaction. CHECKPOINT, BOOKMARK, and MARKER are not standard SQL TCL commands."
    },
    {
      id: 33,
      type: "single",
      difficulty: 1,
      topic: "Query Optimization Basics",
      question: "What is the purpose of \'partition pruning\' in query optimization?",
      options: ["Removing unused partitions from the database permanently", "Skipping irrelevant partitions during query execution to reduce data scanned", "Splitting a large table into smaller partitions automatically", "Compressing partition data for faster network transfer"],
      correct: [1],
      concept: "Partition pruning is an optimization where the query engine skips partitions that cannot contain relevant data based on the query\'s filter predicates. For example, if data is partitioned by date and the query filters for 2024, partitions for 2023 are skipped entirely, reducing I/O significantly."
    },
    {
      id: 34,
      type: "single",
      difficulty: 1,
      topic: "Performance Tuning",
      question: "Which metric indicates how well an index narrows down the search results?",
      options: ["Index depth", "Index fragmentation", "Index selectivity", "Index fill factor"],
      correct: [2],
      concept: "Index selectivity is the ratio of distinct values to total rows in the indexed column. High selectivity (close to 1.0) means the index effectively narrows results and is very useful. Low selectivity (close to 0) means many rows share the same value, making the index less effective."
    },
    {
      id: 35,
      type: "single",
      difficulty: 1,
      topic: "Query Optimization Basics",
      question: "What is \'cost-based optimization\' in SQL query processing?",
      options: ["Choosing the execution plan that uses the least financial cost of compute", "Evaluating multiple execution plans and choosing the one with the lowest estimated resource cost", "Prioritizing queries based on user-defined cost priorities", "Limiting query execution time to a cost threshold"],
      correct: [1],
      concept: "Cost-based optimization (CBO) uses table statistics (row counts, data distribution, index information) to estimate the resource cost (CPU, I/O, memory) of different execution plans and chooses the plan with the lowest estimated total cost. This is the dominant optimization strategy in modern RDBMS."
    },
    {
      id: 36,
      type: "single",
      difficulty: 2,
      topic: "DDL Commands",
      question: "You execute ALTER TABLE orders ADD COLUMN total DECIMAL(10,2) DEFAULT 0.00. What happens to existing rows?",
      options: ["Existing rows are deleted and must be re-inserted", "Existing rows get the default value 0.00 in the new column", "Existing rows get NULL in the new column regardless of the DEFAULT", "The command fails because you cannot add a column with DEFAULT to a populated table"],
      correct: [1],
      concept: "When you ADD a column with a DEFAULT value, existing rows are populated with that default value. Some databases optimize this by storing the default as metadata rather than physically updating every row. Without a DEFAULT clause, existing rows would receive NULL."
    },
    {
      id: 37,
      type: "single",
      difficulty: 2,
      topic: "DDL Commands",
      question: "What is the difference between DROP TABLE and DROP TABLE IF EXISTS?",
      options: ["DROP TABLE IF EXISTS is faster because it skips constraint checks", "DROP TABLE raises an error if the table does not exist; IF EXISTS suppresses the error", "DROP TABLE IF EXISTS only drops the table if it contains no data", "There is no functional difference; IF EXISTS is just syntactic sugar"],
      correct: [1],
      concept: "DROP TABLE throws an error if the specified table does not exist. DROP TABLE IF EXISTS checks for the table\'s existence first and silently does nothing if the table is not found. This is especially useful in migration scripts and idempotent deployment procedures."
    },
    {
      id: 38,
      type: "single",
      difficulty: 2,
      topic: "DDL Commands",
      question: "Which statement correctly creates a table with a composite primary key on two columns?",
      options: ["CREATE TABLE t (a INT PRIMARY KEY, b INT PRIMARY KEY)", "CREATE TABLE t (a INT, b INT, PRIMARY KEY (a, b))", "CREATE TABLE t (a INT, b INT, UNIQUE KEY (a, b))", "CREATE TABLE t (a INT, b INT, COMPOSITE KEY (a, b))"],
      correct: [1],
      concept: "A composite primary key is defined using a table-level constraint: PRIMARY KEY (col1, col2). Specifying PRIMARY KEY on multiple individual columns creates an error in most databases since a table can only have one primary key. UNIQUE KEY creates a uniqueness constraint, not a primary key. COMPOSITE KEY is not valid SQL syntax."
    },
    {
      id: 39,
      type: "single",
      difficulty: 2,
      topic: "DDL Commands",
      question: "You attempt to execute ALTER TABLE employees MODIFY COLUMN salary VARCHAR(50) on a column that currently stores integer values. What is most likely to happen?",
      options: ["The column is changed silently and all integer values are lost", "The database converts existing integer values to their string representations", "The command fails because implicit type conversion from INT to VARCHAR is not allowed", "The column is changed but existing data remains in binary integer format"],
      correct: [1],
      concept: "Most databases perform implicit data type conversion when changing a column type. Integer values like 50000 would become the string \'50000\'. However, the reverse (VARCHAR to INT) may fail if the column contains non-numeric strings. Always validate data compatibility before changing column types."
    },
    {
      id: 40,
      type: "single",
      difficulty: 2,
      topic: "DML Commands",
      question: "What is the difference between INSERT INTO ... VALUES and INSERT INTO ... SELECT in terms of data source?",
      options: ["VALUES uses literal constants; SELECT uses data from existing tables or queries", "VALUES can insert multiple rows; SELECT is limited to one row", "SELECT is faster because it bypasses constraint checking", "VALUES supports all data types; SELECT only supports numeric types"],
      correct: [0],
      concept: "INSERT INTO ... VALUES specifies literal values directly in the statement. INSERT INTO ... SELECT retrieves data from existing tables or complex queries as the data source. Both can insert multiple rows, both respect constraints, and both support all data types."
    },
    {
      id: 41,
      type: "single",
      difficulty: 2,
      topic: "DML Commands",
      question: "When performing an UPDATE with a JOIN, what determines which rows in the target table are modified?",
      options: ["All rows in the target table are always updated", "Only the first matching row in the target is updated", "The JOIN condition and optional WHERE clause determine which rows are updated", "The ORDER BY clause determines which rows are updated"],
      correct: [2],
      concept: "In an UPDATE with JOIN, the JOIN condition links the target table to the source table, and an optional WHERE clause further filters which rows are modified. All matching rows in the target table are updated. The exact syntax varies between databases (e.g., UPDATE ... FROM in PostgreSQL vs UPDATE ... JOIN in MySQL)."
    },
    {
      id: 42,
      type: "single",
      difficulty: 2,
      topic: "DML Commands",
      question: "You execute: DELETE FROM orders WHERE order_date < \'2020-01-01\' and 50,000 rows match. What performance concern should you anticipate?",
      options: ["The query will fail because DELETE has a row limit of 10,000", "Transaction log bloat, table locks, and potential replication lag due to large volume of row-level logging", "The database will automatically batch the deletion into 1,000-row chunks", "No performance concern; DELETE operations are always instantaneous"],
      correct: [1],
      concept: "Large DELETE operations generate significant transaction log entries (one per row), can cause lock escalation to table-level locks, block other operations, and create replication lag. Best practices include batching deletes, using TRUNCATE when removing all rows, or partitioning for efficient partition drops."
    },
    {
      id: 43,
      type: "single",
      difficulty: 2,
      topic: "DML Commands",
      question: "In a MERGE statement, what happens when a source row matches multiple target rows on the ON condition?",
      options: ["Only the first matching target row is updated", "All matching target rows are updated sequentially", "The MERGE statement raises an error in most databases", "The database silently ignores duplicate matches"],
      correct: [2],
      concept: "Most databases (SQL Server, Oracle) raise an error when a MERGE source row matches multiple target rows because it creates ambiguity about which row to update or whether to insert. You must ensure the ON condition produces a one-to-one match between source and target rows."
    },
    {
      id: 44,
      type: "single",
      difficulty: 2,
      topic: "DCL & TCL",
      question: "What is the difference between GRANT ... WITH GRANT OPTION and a plain GRANT statement?",
      options: ["WITH GRANT OPTION also grants admin access to the entire database", "WITH GRANT OPTION allows the grantee to further grant the same privilege to other users", "WITH GRANT OPTION makes the grant temporary and auto-revocable", "WITH GRANT OPTION applies the grant recursively to all schemas"],
      correct: [1],
      concept: "GRANT ... WITH GRANT OPTION not only gives the specified privilege to the user but also allows that user to grant the same privilege to others. This creates a delegation chain. Revoking from the original grantee may cascade revocation to downstream grantees depending on the RDBMS."
    },
    {
      id: 45,
      type: "single",
      difficulty: 2,
      topic: "DCL & TCL",
      question: "What happens if you issue ROLLBACK TO SAVEPOINT sp1 followed by COMMIT?",
      options: ["All changes since the transaction began are rolled back", "Changes made before sp1 are committed; changes after sp1 are discarded", "The COMMIT fails because a partial rollback was performed", "The SAVEPOINT sp1 is committed but all other changes are discarded"],
      correct: [1],
      concept: "ROLLBACK TO SAVEPOINT sp1 undoes all changes made after the savepoint sp1, but preserves changes made before it. A subsequent COMMIT then permanently saves the preserved changes. This allows selective rollback of parts of a transaction while keeping earlier work."
    },
    {
      id: 46,
      type: "single",
      difficulty: 2,
      topic: "DCL & TCL",
      question: "In PostgreSQL, are DDL statements (like CREATE TABLE) transactional?",
      options: ["No, DDL statements always auto-commit immediately", "Yes, DDL statements are transactional and can be rolled back within an explicit transaction", "Only CREATE TABLE is transactional; DROP TABLE is not", "DDL statements are only transactional in read-only mode"],
      correct: [1],
      concept: "PostgreSQL uniquely supports transactional DDL, meaning you can execute CREATE TABLE, ALTER TABLE, DROP TABLE, etc., inside an explicit transaction and ROLLBACK the entire operation. This is unlike MySQL and Oracle, where DDL statements cause an implicit COMMIT."
    },
    {
      id: 47,
      type: "single",
      difficulty: 2,
      topic: "DCL & TCL",
      question: "What does \'implicit transaction\' mean in the context of DDL commands in MySQL?",
      options: ["DDL commands are silently ignored if they fail", "DDL commands automatically issue a COMMIT before and after execution, ending any open transaction", "DDL commands are queued and executed together at session end", "DDL commands run in a separate isolated transaction that does not affect user data"],
      correct: [1],
      concept: "In MySQL (and Oracle), DDL commands trigger an implicit COMMIT before and after execution. This means any pending uncommitted DML changes in the current transaction are automatically committed when a DDL command is executed. This behavior cannot be disabled."
    },
    {
      id: 48,
      type: "single",
      difficulty: 2,
      topic: "Query Optimization Basics",
      question: "A query with WHERE status = \'active\' AND region = \'US\' would benefit most from which type of index?",
      options: ["A single-column index on status only", "A single-column index on region only", "A composite index on (status, region)", "Two separate single-column indexes that the optimizer will merge automatically"],
      correct: [2],
      concept: "A composite index on (status, region) covers both predicates in a single index lookup, which is most efficient. While the optimizer might merge two separate single-column indexes (index intersection), this is less efficient than a single composite index. The column order in the composite index matters for leftmost prefix rule."
    },
    {
      id: 49,
      type: "single",
      difficulty: 2,
      topic: "Query Optimization Basics",
      question: "What is the \'leftmost prefix rule\' for composite indexes?",
      options: ["The first column in the index must always be queried with an equality condition", "A composite index can be used for queries that filter on a leading contiguous subset of the indexed columns", "The leftmost column must have the highest cardinality", "Only the first column of the composite index is stored in sorted order"],
      correct: [1],
      concept: "The leftmost prefix rule means a composite index on (A, B, C) can serve queries on (A), (A, B), or (A, B, C), but NOT on (B), (C), or (B, C) alone. The index organizes data by the leftmost column first, then within that by the second column, and so on."
    },
    {
      id: 50,
      type: "single",
      difficulty: 2,
      topic: "Query Optimization Basics",
      question: "What does \'statistics\' refer to in the context of the query optimizer?",
      options: ["Runtime metrics like query latency and throughput", "Metadata about data distribution, row counts, and value frequencies used by the optimizer to estimate costs", "Log files recording all executed queries", "Performance benchmark scores for the database hardware"],
      correct: [1],
      concept: "Database statistics are metadata collected about tables and indexes, including row counts, data distribution histograms, distinct value counts, and null percentages. The cost-based optimizer uses these statistics to estimate the cost of different execution plans and choose the optimal one."
    },
    {
      id: 51,
      type: "single",
      difficulty: 2,
      topic: "Query Optimization Basics",
      question: "What happens if database statistics are outdated or inaccurate?",
      options: ["Queries return incorrect results", "The optimizer may choose suboptimal execution plans because cost estimates are wrong", "The database automatically updates statistics before each query", "Indexes become corrupted and must be rebuilt"],
      correct: [1],
      concept: "Outdated statistics lead to inaccurate cost estimates, causing the optimizer to choose poor execution plans (e.g., full scans instead of index lookups, or wrong join orders). Queries still return correct results, but performance degrades. Regular ANALYZE or UPDATE STATISTICS commands keep statistics current."
    },
    {
      id: 52,
      type: "single",
      difficulty: 2,
      topic: "Performance Tuning",
      question: "What is a \'covering index\' and why is it beneficial?",
      options: ["An index that covers all tables in a database for cross-table lookups", "An index that includes all columns referenced by a query, allowing the query to be served entirely from the index without accessing the base table", "An index that duplicates the primary key for faster joins", "An index that covers both ascending and descending sort orders"],
      correct: [1],
      concept: "A covering index includes all the columns a query needs (in SELECT, WHERE, JOIN, ORDER BY). The database can answer the query entirely from the index without going back to the table (avoiding \'bookmark lookups\'), significantly reducing I/O. This is also called an \'index-only scan.\'"
    },
    {
      id: 53,
      type: "single",
      difficulty: 2,
      topic: "Performance Tuning",
      question: "What is the performance impact of having too many indexes on a table that receives frequent INSERT and UPDATE operations?",
      options: ["No impact; indexes only affect SELECT performance", "Write performance degrades because each index must be updated with every data modification", "The database automatically disables unused indexes during writes", "Too many indexes cause SELECT queries to become slower due to index confusion"],
      correct: [1],
      concept: "Every INSERT, UPDATE, or DELETE operation must update all affected indexes on the table. More indexes mean more write overhead, additional I/O, and increased storage. This creates a trade-off: indexes speed up reads but slow down writes. Careful index design balances read and write performance."
    },
    {
      id: 54,
      type: "single",
      difficulty: 2,
      topic: "Performance Tuning",
      question: "Which approach is most efficient for deleting all rows from a very large table when you do not need to fire row-level triggers?",
      options: ["DELETE FROM large_table WHERE 1=1", "TRUNCATE TABLE large_table", "DROP TABLE large_table followed by CREATE TABLE large_table", "DELETE FROM large_table in batches of 10,000 rows"],
      correct: [1],
      concept: "TRUNCATE TABLE is the fastest way to remove all rows because it deallocates data pages rather than logging individual row deletions. It does not fire row-level triggers. DROP and recreate works but loses table-level grants, foreign keys, and dependencies. Batched DELETE is slower but necessary if triggers or fine-grained logging is required."
    },
    {
      id: 55,
      type: "single",
      difficulty: 2,
      topic: "DDL Commands",
      question: "What is the effect of ALTER TABLE employees ADD CONSTRAINT chk_salary CHECK (salary > 0) on a table that already contains rows with salary = 0?",
      options: ["The constraint is added and rows with salary = 0 are automatically deleted", "The constraint is added but only enforced for future inserts and updates", "The ALTER TABLE command fails because existing data violates the constraint", "The constraint is added and salary = 0 values are automatically changed to 1"],
      correct: [2],
      concept: "By default, adding a CHECK constraint validates existing data. If any rows violate the new constraint, the ALTER TABLE fails with an error. In SQL Server, you can use WITH NOCHECK to add the constraint without validating existing data, but this is not the standard behavior."
    },
    {
      id: 56,
      type: "single",
      difficulty: 2,
      topic: "DML Commands",
      question: "What is the output of this sequence: INSERT INTO t(id) VALUES (1); INSERT INTO t(id) VALUES (1); when \'id\' has a UNIQUE constraint?",
      options: ["Both rows are inserted successfully", "The first INSERT succeeds; the second raises a unique constraint violation error", "Both INSERTs fail because the values are identical", "The second INSERT silently updates the existing row"],
      correct: [1],
      concept: "A UNIQUE constraint prevents duplicate values. The first INSERT succeeds because no duplicate exists. The second INSERT fails with a constraint violation error because the value 1 already exists. To handle this, use INSERT ... ON CONFLICT (PostgreSQL) or INSERT ... ON DUPLICATE KEY UPDATE (MySQL)."
    },
    {
      id: 57,
      type: "single",
      difficulty: 2,
      topic: "DCL & TCL",
      question: "Which privilege is needed to execute a stored procedure in most databases?",
      options: ["SELECT privilege on the procedure", "EXECUTE privilege on the procedure", "INSERT privilege on the procedure\'s schema", "ADMIN privilege on the database"],
      correct: [1],
      concept: "The EXECUTE privilege grants the ability to run a stored procedure or function. SELECT, INSERT, UPDATE, DELETE privileges are for table/view operations. A user with only EXECUTE privilege can run a procedure even without direct table access if the procedure runs with definer\'s rights."
    },
    {
      id: 58,
      type: "single",
      difficulty: 2,
      topic: "Query Optimization Basics",
      question: "Why might the optimizer choose a full table scan even when an index exists on the filtered column?",
      options: ["The optimizer is always buggy and makes wrong choices", "When the query returns a large percentage of rows, sequential reads are cheaper than random index lookups", "Full table scans always outperform index scans on modern hardware", "The index file is always larger than the table file"],
      correct: [1],
      concept: "When a query matches a large portion of the table (typically >10-20% of rows), random I/O from index lookups becomes more expensive than sequential I/O of a full scan. The optimizer uses statistics to estimate selectivity and chooses the cheapest plan. This is a correct and efficient decision."
    },
    {
      id: 59,
      type: "single",
      difficulty: 2,
      topic: "Performance Tuning",
      question: "What is \'implicit type conversion\' and why is it a performance concern in WHERE clauses?",
      options: ["Converting result columns to display format after query execution", "When the database automatically converts a value\'s data type to match a column, potentially preventing index usage", "When columns are implicitly cast during CREATE TABLE execution", "Converting NULL values to empty strings for comparison purposes"],
      correct: [1],
      concept: "Implicit type conversion occurs when comparing values of different types (e.g., WHERE varchar_col = 12345). The database may convert the column values for each row, applying a function on the indexed column and preventing index usage. Always match data types explicitly to avoid this performance pitfall."
    },
    {
      id: 60,
      type: "single",
      difficulty: 2,
      topic: "DDL Commands",
      question: "What is the purpose of the CASCADE option in DROP TABLE orders CASCADE?",
      options: ["It deletes all data in related child tables via foreign keys", "It drops the table and all dependent objects like views, foreign keys, and triggers that reference it", "It cascades the drop to all tables in the same schema", "It creates a backup before dropping the table"],
      correct: [1],
      concept: "CASCADE in DROP TABLE removes the table along with all dependent objects such as views, foreign key constraints in other tables, and triggers. Without CASCADE, the DROP would fail if dependent objects exist. This is different from ON DELETE CASCADE in foreign keys, which deletes child rows."
    },
    {
      id: 61,
      type: "multi",
      difficulty: 2,
      topic: "DDL Commands",
      question: "Which of the following are valid DDL (Data Definition Language) commands? (Select all that apply)",
      options: ["CREATE TABLE", "UPDATE SET", "ALTER TABLE", "DROP INDEX"],
      correct: [0, 2, 3],
      concept: "DDL commands define and modify database structures: CREATE (create objects), ALTER (modify objects), DROP (remove objects), TRUNCATE (remove all data from a table), and RENAME. UPDATE SET is a DML command for modifying row data, not database structure."
    },
    {
      id: 62,
      type: "multi",
      difficulty: 2,
      topic: "DDL Commands",
      question: "Which statements about TRUNCATE TABLE are correct? (Select all that apply)",
      options: ["TRUNCATE removes all rows from a table", "TRUNCATE resets identity/auto-increment counters", "TRUNCATE fires row-level DELETE triggers", "TRUNCATE is classified as a DDL command"],
      correct: [0, 1, 3],
      concept: "TRUNCATE removes all rows, resets identity counters, and is classified as DDL (not DML). It does NOT fire row-level DELETE triggers because it operates at the page level rather than the row level. This makes it much faster than DELETE for removing all rows."
    },
    {
      id: 63,
      type: "multi",
      difficulty: 2,
      topic: "DML Commands",
      question: "Which of the following are valid DML (Data Manipulation Language) commands? (Select all that apply)",
      options: ["SELECT", "INSERT", "MERGE", "CREATE"],
      correct: [0, 1, 2],
      concept: "DML commands manipulate data within tables: SELECT (retrieve), INSERT (add), UPDATE (modify), DELETE (remove), and MERGE (upsert). CREATE is a DDL command for defining database objects, not for data manipulation."
    },
    {
      id: 64,
      type: "multi",
      difficulty: 2,
      topic: "DML Commands",
      question: "In a MERGE statement, which clauses can be specified? (Select all that apply)",
      options: ["WHEN MATCHED THEN UPDATE", "WHEN NOT MATCHED THEN INSERT", "WHEN MATCHED THEN DELETE", "WHEN NOT MATCHED THEN UPDATE"],
      correct: [0, 1, 2],
      concept: "MERGE supports WHEN MATCHED THEN UPDATE, WHEN MATCHED THEN DELETE, and WHEN NOT MATCHED THEN INSERT. WHEN NOT MATCHED THEN UPDATE is not logical because you cannot update a row that does not exist in the target table. Some databases also support WHEN NOT MATCHED BY SOURCE."
    },
    {
      id: 65,
      type: "multi",
      difficulty: 2,
      topic: "DCL & TCL",
      question: "Which of the following are TCL (Transaction Control Language) commands? (Select all that apply)",
      options: ["COMMIT", "GRANT", "ROLLBACK", "SAVEPOINT"],
      correct: [0, 2, 3],
      concept: "TCL commands control transactions: COMMIT (save changes), ROLLBACK (undo changes), and SAVEPOINT (create a restore point). GRANT is a DCL (Data Control Language) command for managing permissions, not transaction control."
    },
    {
      id: 66,
      type: "multi",
      difficulty: 2,
      topic: "DCL & TCL",
      question: "Which privileges can be granted using the GRANT command? (Select all that apply)",
      options: ["SELECT", "INSERT", "EXECUTE", "COMPILE"],
      correct: [0, 1, 2],
      concept: "GRANT can assign various privileges including SELECT (read data), INSERT (add data), UPDATE (modify data), DELETE (remove data), EXECUTE (run procedures), and ALL PRIVILEGES. COMPILE is not a standard SQL privilege."
    },
    {
      id: 67,
      type: "multi",
      difficulty: 2,
      topic: "Query Optimization Basics",
      question: "Which of the following can prevent an index from being used by the query optimizer? (Select all that apply)",
      options: ["Applying a function on the indexed column in WHERE clause", "Using OR conditions across different columns", "Performing implicit type conversion on the indexed column", "Using the indexed column in an equality comparison"],
      correct: [0, 1, 2],
      concept: "Functions on indexed columns (WHERE UPPER(name) = \'JOHN\'), OR conditions on different columns, and implicit type conversions all can prevent index usage. These make the predicate non-SARGable. Equality comparisons on indexed columns are the ideal case for index usage."
    },
    {
      id: 68,
      type: "multi",
      difficulty: 2,
      topic: "Query Optimization Basics",
      question: "Which factors does a cost-based optimizer consider when choosing an execution plan? (Select all that apply)",
      options: ["Table row counts and data distribution statistics", "Available indexes and their selectivity", "Estimated CPU and I/O costs of different operations", "The user who submitted the query"],
      correct: [0, 1, 2],
      concept: "The cost-based optimizer evaluates table statistics (row counts, histograms), available indexes and their selectivity, and estimated CPU/I/O costs. The identity of the user submitting the query does not influence the optimizer\'s plan selection, though permissions are checked separately."
    },
    {
      id: 69,
      type: "multi",
      difficulty: 2,
      topic: "Performance Tuning",
      question: "Which are valid strategies to improve the performance of a slow DELETE operation on a large table? (Select all that apply)",
      options: ["Batch the deletes into smaller chunks with a loop", "Use TRUNCATE TABLE if removing all rows", "Drop indexes before delete and rebuild after", "Add more indexes to speed up the DELETE"],
      correct: [0, 1, 2],
      concept: "Batching reduces lock duration and log impact. TRUNCATE is optimal for removing all rows. Temporarily dropping indexes reduces write overhead during mass deletes. Adding more indexes would actually slow the DELETE because each index must be updated for each deleted row."
    },
    {
      id: 70,
      type: "multi",
      difficulty: 2,
      topic: "Performance Tuning",
      question: "Which of the following are symptoms of outdated database statistics? (Select all that apply)",
      options: ["Queries that were fast suddenly become slow", "The optimizer chooses full table scans on highly selective queries", "Execution plans change unexpectedly after data loads", "Data integrity constraints start failing"],
      correct: [0, 1, 2],
      concept: "Outdated statistics cause the optimizer to make poor plan choices: previously fast queries slow down, full scans are chosen over index seeks, and plans change unpredictably. Data integrity constraints are enforced regardless of statistics and are unaffected."
    },
    {
      id: 71,
      type: "multi",
      difficulty: 2,
      topic: "DDL Commands",
      question: "Which of the following operations can be performed with ALTER TABLE? (Select all that apply)",
      options: ["Add a new column to the table", "Rename the table", "Add a foreign key constraint", "Insert new data rows into the table"],
      correct: [0, 1, 2],
      concept: "ALTER TABLE can ADD columns, RENAME the table (or RENAME TO), ADD/DROP constraints including foreign keys, MODIFY column definitions, and more. It cannot insert data rows; that requires the DML command INSERT."
    },
    {
      id: 72,
      type: "multi",
      difficulty: 2,
      topic: "DML Commands",
      question: "Which statements about UPDATE with JOIN are correct? (Select all that apply)",
      options: ["It allows updating a table based on matching rows from another table", "The exact syntax varies between database vendors", "It can update multiple columns in a single statement", "It always requires a subquery instead of a direct JOIN"],
      correct: [0, 1, 2],
      concept: "UPDATE with JOIN allows updating target table rows based on data from another table. Syntax differs: MySQL uses UPDATE t1 JOIN t2, PostgreSQL uses UPDATE t1 FROM t2, SQL Server uses UPDATE t1 FROM t1 JOIN t2. Multiple columns can be SET in one statement. Direct JOIN syntax is supported; subqueries are optional."
    },
    {
      id: 73,
      type: "multi",
      difficulty: 2,
      topic: "DCL & TCL",
      question: "Which of the following scenarios trigger an implicit COMMIT in MySQL? (Select all that apply)",
      options: ["Executing a CREATE TABLE statement", "Executing an INSERT statement in auto-commit mode", "Executing a DROP INDEX statement", "Executing a SELECT statement"],
      correct: [0, 1, 2],
      concept: "In MySQL, DDL statements (CREATE TABLE, DROP INDEX, ALTER TABLE) trigger implicit COMMIT before and after execution. INSERT in auto-commit mode is automatically committed. SELECT statements do not modify data and do not trigger commits (though they do participate in transaction isolation)."
    },
    {
      id: 74,
      type: "multi",
      difficulty: 2,
      topic: "Query Optimization Basics",
      question: "Which of the following benefit from partition pruning? (Select all that apply)",
      options: ["A query filtering on the partition key column", "A query performing a full aggregate across all partitions", "A query joining on the partition key with another partitioned table", "A query with ORDER BY on a non-partition column"],
      correct: [0, 2],
      concept: "Partition pruning occurs when the query filter matches the partition key, allowing the optimizer to skip irrelevant partitions. Joins on partition keys between co-partitioned tables also benefit. Full aggregates across all partitions and ORDER BY on non-partition columns cannot prune any partitions."
    },
    {
      id: 75,
      type: "multi",
      difficulty: 2,
      topic: "Performance Tuning",
      question: "Which of the following are benefits of using a covering index? (Select all that apply)",
      options: ["Eliminates the need to access the base table for the query", "Reduces disk I/O by serving the query entirely from the index", "Automatically improves write performance for the table", "Enables index-only scans in the execution plan"],
      correct: [0, 1, 3],
      concept: "A covering index includes all columns needed by a query, enabling index-only scans that avoid base table access and reduce I/O. However, covering indexes increase write overhead because the index contains more columns that must be maintained on every INSERT, UPDATE, or DELETE."
    },
    {
      id: 76,
      type: "multi",
      difficulty: 3,
      topic: "DDL Commands",
      question: "Which of the following are true about the differences between CREATE TABLE AS SELECT (CTAS) and SELECT INTO? (Select all that apply)",
      options: ["CTAS is ANSI SQL standard while SELECT INTO varies by vendor", "Both create a new table from query results", "Neither preserves primary key constraints from the source table", "CTAS allows specifying storage parameters in some databases"],
      correct: [0, 1, 2, 3],
      concept: "CREATE TABLE AS SELECT is ANSI standard; SELECT INTO behavior differs (creates a table in SQL Server, assigns to a variable in MySQL stored procedures). Both create new tables from query results but do not copy constraints like primary keys, foreign keys, or indexes. CTAS in databases like Oracle allows storage clause specifications."
    },
    {
      id: 77,
      type: "multi",
      difficulty: 3,
      topic: "DML Commands",
      question: "Which of the following are correct about the MERGE statement\'s atomicity? (Select all that apply)",
      options: ["All MERGE operations execute as a single atomic transaction", "MERGE can perform INSERT, UPDATE, and DELETE in one statement", "MERGE guarantees no race conditions without additional locking in concurrent environments", "The ON clause must produce at most one match per source row for deterministic behavior"],
      correct: [0, 1, 3],
      concept: "MERGE executes atomically as a single statement transaction. It can combine INSERT, UPDATE, and DELETE. The ON clause should match at most one target row per source row to avoid errors. However, MERGE does NOT inherently prevent race conditions in concurrent scenarios; additional locking or serializable isolation may be needed."
    },
    {
      id: 78,
      type: "multi",
      difficulty: 3,
      topic: "DCL & TCL",
      question: "Which of the following are correct about transaction isolation and TCL commands? (Select all that apply)",
      options: ["SAVEPOINT can be nested with multiple savepoints in a single transaction", "ROLLBACK TO SAVEPOINT releases all locks acquired after the savepoint", "COMMIT releases all locks held by the transaction", "A ROLLBACK TO SAVEPOINT does not end the transaction"],
      correct: [0, 2, 3],
      concept: "Multiple savepoints can be created within a transaction, and ROLLBACK TO SAVEPOINT undoes changes after that point without ending the transaction. COMMIT releases all locks. However, ROLLBACK TO SAVEPOINT does NOT necessarily release locks acquired after the savepoint in all databases; lock behavior varies by RDBMS."
    },
    {
      id: 79,
      type: "multi",
      difficulty: 3,
      topic: "Query Optimization Basics",
      question: "Which of the following queries are SARGable (can use an index on column \'created_date\')? (Select all that apply)",
      options: ["WHERE created_date >= \'2024-01-01\' AND created_date < \'2024-02-01\'", "WHERE CAST(created_date AS VARCHAR) = \'2024-01-01\'", "WHERE created_date + INTERVAL \'1 day\' > NOW()", "WHERE created_date BETWEEN \'2024-01-01\' AND \'2024-12-31\'"],
      correct: [0, 3],
      concept: "SARGable (Search ARGument ABLE) predicates allow index usage. Direct comparisons (>=, <, BETWEEN) on the column are SARGable. Applying functions (CAST) or arithmetic (+INTERVAL) to the column makes it non-SARGable because the index stores original values, not computed ones. Rewrite as: WHERE created_date > NOW() - INTERVAL \'1 day\'."
    },
    {
      id: 80,
      type: "multi",
      difficulty: 3,
      topic: "Performance Tuning",
      question: "Which of the following index strategies are appropriate for optimizing a query that filters on col_a, sorts by col_b, and selects col_c? (Select all that apply)",
      options: ["Composite index on (col_a, col_b, col_c) as a covering index", "Composite index on (col_a, col_b) with INCLUDE (col_c)", "Single index on col_a only", "Composite index on (col_b, col_a, col_c)"],
      correct: [0, 1],
      concept: "Index (col_a, col_b, col_c) serves as a covering index: col_a for filtering, col_b for sorting (avoiding a sort operation), col_c for selection. An index with INCLUDE (available in some RDBMS) adds col_c to leaf pages without affecting sort order. Index on col_a only helps filtering but not sorting. Index (col_b, col_a, col_c) has wrong leading column."
    },
    {
      id: 81,
      type: "multi",
      difficulty: 3,
      topic: "DDL Commands",
      question: "Which of the following are risks of executing ALTER TABLE on a large production table? (Select all that apply)",
      options: ["Table locks that block concurrent reads and writes", "Significant I/O and temporary space usage for table rebuilds", "Potential replication lag on replica servers", "Automatic data loss in altered columns"],
      correct: [0, 1, 2],
      concept: "ALTER TABLE on large tables can acquire table-level locks blocking all access, consume significant I/O and temp space for rebuilds (especially for type changes or adding NOT NULL columns), and cause replication lag. Data is NOT automatically lost; the database converts or preserves data during alterations. Tools like pt-online-schema-change or gh-ost mitigate these risks."
    },
    {
      id: 82,
      type: "multi",
      difficulty: 3,
      topic: "DML Commands",
      question: "Which of the following are valid INSERT conflict handling strategies across different databases? (Select all that apply)",
      options: ["INSERT ... ON CONFLICT DO NOTHING in PostgreSQL", "INSERT ... ON DUPLICATE KEY UPDATE in MySQL", "INSERT OR REPLACE in SQLite", "INSERT ... ON ERROR SKIP in SQL Server"],
      correct: [0, 1, 2],
      concept: "PostgreSQL uses ON CONFLICT (DO NOTHING or DO UPDATE). MySQL uses ON DUPLICATE KEY UPDATE. SQLite uses INSERT OR REPLACE (or INSERT OR IGNORE). SQL Server uses MERGE for upsert scenarios; INSERT ... ON ERROR SKIP is not valid SQL Server syntax."
    },
    {
      id: 83,
      type: "multi",
      difficulty: 3,
      topic: "DCL & TCL",
      question: "Which of the following are true about REVOKE with CASCADE? (Select all that apply)",
      options: ["It removes the privilege from the specified user", "It also removes the privilege from users who received it through WITH GRANT OPTION from that user", "It only affects the specified user and not downstream grantees", "The behavior of cascading revocation depends on the RDBMS"],
      correct: [0, 1, 3],
      concept: "REVOKE CASCADE removes the privilege from the specified user AND from any users who received the privilege through that user via WITH GRANT OPTION. This cascading behavior varies by RDBMS: some cascade by default, others require explicit CASCADE keyword. RESTRICT prevents revocation if downstream grantees exist."
    },
    {
      id: 84,
      type: "multi",
      difficulty: 3,
      topic: "Query Optimization Basics",
      question: "Which of the following affect the accuracy of cost-based optimization? (Select all that apply)",
      options: ["Stale table statistics after large data loads", "Skewed data distribution not captured by histograms", "Correlated columns that the optimizer assumes are independent", "The number of CPU cores available on the server"],
      correct: [0, 1, 2],
      concept: "Stale statistics, uncaptured data skew, and correlation between columns all cause the optimizer to make incorrect cost estimates. The number of CPU cores affects parallelism decisions but does not reduce optimizer accuracy since it is a known system parameter."
    },
    {
      id: 85,
      type: "multi",
      difficulty: 3,
      topic: "Performance Tuning",
      question: "Which of the following are valid approaches to handle a query with OR conditions that prevent index usage? (Select all that apply)",
      options: ["Rewrite as UNION ALL of separate queries each using an indexed condition", "Create a composite index covering all OR conditions", "Use the IN clause instead of OR for same-column conditions", "Apply query hints to force index usage on OR conditions"],
      correct: [0, 2, 3],
      concept: "UNION ALL splits OR into separate index-friendly queries. IN replaces multiple OR conditions on the same column and is optimizable by the index. Query hints can force index usage but may not improve performance. A composite index does not help OR conditions on different columns because OR requires matching any condition, not all."
    },
    {
      id: 86,
      type: "tf",
      difficulty: 3,
      topic: "DDL Commands",
      question: "TRUNCATE TABLE can be rolled back inside an explicit transaction in SQL Server, unlike in MySQL and Oracle.",
      options: ["True - SQL Server supports transactional TRUNCATE within explicit transactions", "False - TRUNCATE TABLE cannot be rolled back in any database system"],
      correct: [0],
      concept: "In SQL Server, TRUNCATE TABLE is a logged operation that can be rolled back within an explicit transaction (BEGIN TRAN ... TRUNCATE ... ROLLBACK). In MySQL and Oracle, DDL operations like TRUNCATE cause an implicit COMMIT and cannot be rolled back. This is a key behavioral difference between database systems."
    },
    {
      id: 87,
      type: "tf",
      difficulty: 3,
      topic: "DDL Commands",
      question: "The ALTER TABLE ... ADD COLUMN command always requires a full table rewrite in all database systems.",
      options: ["True - Adding a column requires rewriting every row to accommodate the new column", "False - Modern databases like PostgreSQL can add nullable columns or columns with constant defaults as metadata-only operations"],
      correct: [1],
      concept: "Modern databases optimize ADD COLUMN. PostgreSQL can add a nullable column or a column with a constant default as a metadata-only change (instant operation), with actual values written lazily. MySQL 8.0+ has INSTANT algorithm for some ALTER operations. The actual behavior depends on the database and the specific column properties."
    },
    {
      id: 88,
      type: "tf",
      difficulty: 3,
      topic: "DDL Commands",
      question: "A table with a composite primary key on columns (A, B) ensures that each combination of A and B values is unique, but individual columns can have duplicates.",
      options: ["True - The uniqueness constraint applies to the combination of A and B, not to each column individually", "False - A composite primary key enforces uniqueness on each column independently"],
      correct: [0],
      concept: "A composite primary key on (A, B) ensures the combination of values is unique. Column A can have duplicates (e.g., (1, \'x\') and (1, \'y\') are both valid) and column B can have duplicates (e.g., (1, \'x\') and (2, \'x\') are valid). Only the exact pair must be unique."
    },
    {
      id: 89,
      type: "tf",
      difficulty: 3,
      topic: "DML Commands",
      question: "The INSERT INTO ... SELECT statement can insert data from a different database or schema, not just from tables in the same database.",
      options: ["True - You can use fully qualified table names to insert data across databases or schemas", "False - INSERT INTO ... SELECT only works with tables in the same database"],
      correct: [0],
      concept: "INSERT INTO ... SELECT can reference tables from different schemas or databases using fully qualified names (database.schema.table). The user must have appropriate permissions on both the source and target tables. This is commonly used in ETL processes for cross-database data movement."
    },
    {
      id: 90,
      type: "tf",
      difficulty: 3,
      topic: "DML Commands",
      question: "A DELETE statement with a WHERE clause that matches zero rows will raise an error.",
      options: ["True - DELETE requires at least one matching row to succeed", "False - DELETE with zero matching rows succeeds silently with zero rows affected"],
      correct: [1],
      concept: "DELETE with a WHERE clause that matches no rows completes successfully and reports 0 rows affected. It does not raise an error. This is consistent behavior across all major databases. The same applies to UPDATE with no matching rows."
    },
    {
      id: 91,
      type: "tf",
      difficulty: 3,
      topic: "DML Commands",
      question: "The MERGE statement is supported in all major relational databases with identical syntax.",
      options: ["True - MERGE is part of the SQL standard and all databases implement it identically", "False - While MERGE is in the SQL standard, implementations and syntax vary significantly across databases"],
      correct: [1],
      concept: "Although MERGE is defined in the SQL:2003 standard, implementations vary: SQL Server and Oracle support it with similar syntax, PostgreSQL added partial support in v15, MySQL does not support MERGE (using INSERT ... ON DUPLICATE KEY UPDATE instead). Syntax details and supported clauses differ across vendors."
    },
    {
      id: 92,
      type: "tf",
      difficulty: 3,
      topic: "DCL & TCL",
      question: "In a database with auto-commit enabled, each individual DML statement is automatically wrapped in its own transaction and committed.",
      options: ["True - Auto-commit mode treats each statement as a separate transaction that is committed immediately", "False - Auto-commit only applies to DDL statements, not DML statements"],
      correct: [0],
      concept: "When auto-commit is enabled (the default in many databases and tools like JDBC), each DML statement (INSERT, UPDATE, DELETE) is automatically committed after execution. To group multiple statements in one transaction, you must explicitly disable auto-commit or use BEGIN TRANSACTION."
    },
    {
      id: 93,
      type: "tf",
      difficulty: 3,
      topic: "DCL & TCL",
      question: "Granting ALL PRIVILEGES on a database to a user also grants them the ability to create and drop other user accounts.",
      options: ["True - ALL PRIVILEGES includes every possible permission including user management", "False - ALL PRIVILEGES grants data and object permissions but not administrative privileges like user management"],
      correct: [1],
      concept: "ALL PRIVILEGES grants data access and object manipulation privileges (SELECT, INSERT, UPDATE, DELETE, CREATE, DROP on objects, etc.) but does not include system-level administrative privileges like creating/dropping users, which typically require separate ADMIN or SUPER privileges."
    },
    {
      id: 94,
      type: "tf",
      difficulty: 3,
      topic: "DCL & TCL",
      question: "In Oracle and MySQL, executing a CREATE TABLE statement inside an explicit transaction will cause any pending uncommitted DML changes to be automatically committed.",
      options: ["True - DDL statements in Oracle and MySQL trigger an implicit COMMIT of pending changes", "False - DDL statements respect the transaction boundary and can be rolled back along with DML changes"],
      correct: [0],
      concept: "In Oracle and MySQL, DDL statements (CREATE, ALTER, DROP, TRUNCATE) trigger an implicit COMMIT before and after execution. This means any pending uncommitted DML changes in the session are permanently committed. PostgreSQL is an exception that supports transactional DDL."
    },
    {
      id: 95,
      type: "tf",
      difficulty: 3,
      topic: "Query Optimization Basics",
      question: "A column alias defined in the SELECT clause can be referenced in the ORDER BY clause of the same query.",
      options: ["True - ORDER BY is logically evaluated after SELECT, so column aliases are available", "False - Column aliases cannot be used anywhere outside the SELECT clause"],
      correct: [0],
      concept: "In the logical query execution order, ORDER BY is processed after SELECT, so column aliases defined in SELECT are available in ORDER BY. This is in contrast to WHERE and HAVING (in strict SQL), which are processed before SELECT and cannot reference SELECT aliases. Most databases support this behavior."
    },
    {
      id: 96,
      type: "tf",
      difficulty: 3,
      topic: "Query Optimization Basics",
      question: "Predicate pushdown is always beneficial and the optimizer should push all filters as close to the data source as possible in every scenario.",
      options: ["True - Pushing filters early always reduces data processed and improves performance", "False - In some cases like certain outer joins or non-deterministic functions, predicate pushdown can change query semantics or not provide benefits"],
      correct: [1],
      concept: "While predicate pushdown is generally beneficial, it cannot always be applied. For example, pushing a filter below an outer join can change query semantics (converting it to an inner join). Filters with non-deterministic functions or certain correlated subqueries also may not be safely pushed down. The optimizer must verify semantic equivalence."
    },
    {
      id: 97,
      type: "tf",
      difficulty: 3,
      topic: "Performance Tuning",
      question: "A composite index on (A, B, C) can efficiently serve a query that filters only on column B.",
      options: ["True - The optimizer can skip column A and use the index starting from column B", "False - Due to the leftmost prefix rule, the index cannot be efficiently used for filtering on column B alone"],
      correct: [1],
      concept: "The leftmost prefix rule requires that a composite index can only be used when the query filters on a leading contiguous subset of the index columns. An index on (A, B, C) supports queries filtering on (A), (A, B), or (A, B, C), but NOT on (B) or (C) alone. To support queries on B, a separate index starting with B is needed."
    },
    {
      id: 98,
      type: "tf",
      difficulty: 3,
      topic: "Performance Tuning",
      question: "Adding an index on a frequently queried column always improves the overall performance of the database.",
      options: ["True - Indexes always speed up queries and have no negative side effects", "False - While indexes improve read performance, they degrade write performance and consume additional storage"],
      correct: [1],
      concept: "Indexes improve read (SELECT) performance but degrade write (INSERT, UPDATE, DELETE) performance because each index must be maintained on every data modification. They also consume additional disk space. For write-heavy tables, excessive indexing can be a net negative. Index design must balance read and write workload patterns."
    },
    {
      id: 99,
      type: "tf",
      difficulty: 3,
      topic: "Performance Tuning",
      question: "EXPLAIN ANALYZE actually executes the query and shows real execution metrics, while EXPLAIN only shows the estimated plan without running the query.",
      options: ["True - EXPLAIN shows estimated plan only; EXPLAIN ANALYZE executes the query and reports actual metrics", "False - Both EXPLAIN and EXPLAIN ANALYZE execute the query; the difference is in output detail level"],
      correct: [0],
      concept: "EXPLAIN (without ANALYZE) generates an estimated execution plan based on statistics without actually running the query. EXPLAIN ANALYZE executes the query and provides actual row counts, execution times, and I/O statistics alongside estimates. This makes EXPLAIN ANALYZE essential for identifying estimation errors but means it incurs the full cost of query execution."
    },
    {
      id: 100,
      type: "tf",
      difficulty: 3,
      topic: "Query Optimization Basics",
      question: "The physical execution order of a SQL query always matches the logical execution order (FROM > WHERE > GROUP BY > HAVING > SELECT > ORDER BY).",
      options: ["True - The database engine processes clauses in exactly the logical order defined by the SQL standard", "False - The optimizer may rearrange the physical execution order for efficiency while ensuring the results match the logical order"],
      correct: [1],
      concept: "The logical execution order defines the semantics of the query (what the result should be), but the optimizer is free to rearrange the physical execution order for performance. For example, it may apply predicates during a scan rather than as a separate step, or evaluate subqueries differently. The only guarantee is that the final result matches the logical ordering semantics."
    }
  ]
};

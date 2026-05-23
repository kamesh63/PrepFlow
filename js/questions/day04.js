window.QUIZ_DATA = window.QUIZ_DATA || {};
window.QUIZ_DATA["day04"] = {
  title: "SQL Fundamentals",
  category: "sql",
  topics: ["Databases & Schemas", "Tables & Data Types", "SELECT WHERE DISTINCT", "JOINs (INNER LEFT RIGHT FULL)", "AND OR IN BETWEEN LIKE", "Intro to Data Modeling"],
  questions: [
    {
      id: 1,
      type: "single",
      difficulty: 1,
      question: "In a relational database, what is a schema primarily used for?",
      options: ["To define the physical storage location of data files on disk", "To logically group and organize database objects like tables and views", "To encrypt all data stored within the database automatically", "To define the network configuration for database connections"],
      correct: [0],
      concept: "A schema is a logical container or namespace within a database that groups related objects such as tables, views, stored procedures, and functions. It helps organize objects, manage permissions, and avoid naming conflicts. It does not control physical storage or encryption directly."
    },
    {
      id: 2,
      type: "single",
      difficulty: 1,
      question: "What is the relationship between a database and a schema in most RDBMS systems?",
      options: ["A database can contain multiple schemas, but a schema belongs to one database", "A schema can span multiple databases simultaneously for cross-database queries", "A database and a schema are always the same thing with no distinction", "A schema must be created before any database can be initialized on the server"],
      correct: [0],
      concept: "In most RDBMS systems (PostgreSQL, SQL Server, Snowflake), a database contains one or more schemas. Each schema belongs to exactly one database. Schemas provide a second level of namespace organization within a database. For example, a database \'sales_db\' might have schemas \'raw\', \'staging\', and \'analytics\'."
    },
    {
      id: 3,
      type: "single",
      difficulty: 1,
      question: "Which SQL statement is used to create a new database?",
      options: ["CREATE DATABASE my_database;", "INIT DATABASE my_database;", "NEW DATABASE my_database;", "BUILD DATABASE my_database;"],
      correct: [0],
      concept: "The CREATE DATABASE statement is the standard SQL DDL command to create a new database. This is supported across all major RDBMS platforms including MySQL, PostgreSQL, SQL Server, and Snowflake. INIT, NEW, and BUILD are not valid SQL keywords for this purpose."
    },
    {
      id: 4,
      type: "single",
      difficulty: 1,
      question: "What is the default schema name in PostgreSQL when no schema is explicitly specified?",
      options: ["public   ", "default  ", "dbo      ", "main     "],
      correct: [0],
      concept: "In PostgreSQL, the default schema is called \'public\'. When you create a table without specifying a schema, it is placed in the \'public\' schema. SQL Server uses \'dbo\' as its default schema. There is no standard schema named \'default\' or \'main\' in PostgreSQL."
    },
    {
      id: 5,
      type: "single",
      difficulty: 1,
      question: "Which SQL command creates a new schema called \'staging\' within the current database?",
      options: ["CREATE SCHEMA staging;       ", "ADD SCHEMA staging;          ", "NEW SCHEMA staging;          ", "INSERT SCHEMA staging;       "],
      correct: [0],
      concept: "CREATE SCHEMA is the standard DDL command to create a new schema within a database. Schemas act as namespaces, allowing you to organize tables and other objects. After creating the schema, you can reference objects as staging.table_name."
    },
    {
      id: 6,
      type: "single",
      difficulty: 1,
      question: "What does the fully qualified name \'analytics.sales.orders\' represent?",
      options: ["Database.Schema.Table   ", "Schema.Table.Column     ", "Server.Database.Table   ", "Catalog.Index.Table     "],
      correct: [0],
      concept: "A fully qualified name in SQL follows the pattern database.schema.table. In this example, \'analytics\' is the database, \'sales\' is the schema, and \'orders\' is the table. This notation eliminates ambiguity when multiple schemas or databases have similarly named objects."
    },
    {
      id: 7,
      type: "single",
      difficulty: 1,
      question: "What is the primary purpose of the NOT NULL constraint on a column?",
      options: ["It prevents any row from having a missing value in that column", "It automatically fills missing values with a default value of zero", "It ensures the column values are always unique across all rows", "It restricts the column to only accept positive numeric values"],
      correct: [0],
      concept: "The NOT NULL constraint ensures that a column cannot contain NULL values. Every INSERT or UPDATE must provide a value for that column. It does not provide default values (that requires the DEFAULT constraint), does not enforce uniqueness (that requires UNIQUE), and has no relation to positive/negative values."
    },
    {
      id: 8,
      type: "single",
      difficulty: 1,
      question: "Which data type is best suited for storing a price value like 19999.99 with exact precision?",
      options: ["DECIMAL(7,2)", "FLOAT(7,2) ", "INT         ", "VARCHAR(10) "],
      correct: [0],
      concept: "DECIMAL (or NUMERIC) is the best choice for monetary values because it stores exact precision without floating-point rounding errors. DECIMAL(7,2) allows up to 5 digits before the decimal and 2 after. FLOAT uses approximate floating-point arithmetic which can introduce rounding errors, making it unsuitable for financial data."
    },
    {
      id: 9,
      type: "single",
      difficulty: 1,
      question: "What is the key difference between VARCHAR(50) and CHAR(50)?",
      options: ["VARCHAR stores variable-length strings; CHAR always uses fixed-length storage", "CHAR stores variable-length strings; VARCHAR always uses fixed-length storage", "VARCHAR can only store alphabetic characters while CHAR stores any character", "CHAR supports Unicode characters while VARCHAR is limited to ASCII only   "],
      correct: [0],
      concept: "VARCHAR (Variable Character) stores strings using only the space needed plus a small overhead for length tracking. CHAR always allocates the full specified length, padding shorter strings with spaces. For a 5-character string in a CHAR(50) column, 50 bytes are used. In VARCHAR(50), approximately 5 bytes plus overhead are used."
    },
    {
      id: 10,
      type: "single",
      difficulty: 1,
      question: "Which data type would you use to store a date value like \'2025-03-15\' without any time component?",
      options: ["DATE       ", "TIMESTAMP  ", "DATETIME   ", "VARCHAR(10)"],
      correct: [0],
      concept: "The DATE data type stores only the date component (year, month, day) without any time information. TIMESTAMP and DATETIME store both date and time. While VARCHAR(10) could technically store the string representation, it would not support date arithmetic or proper sorting and validation."
    },
    {
      id: 11,
      type: "single",
      difficulty: 1,
      question: "What does the SELECT DISTINCT keyword do in a query?",
      options: ["Removes duplicate rows from the result set based on all selected columns", "Selects only the first occurrence of each value in the first column listed", "Randomly samples distinct values from the table for performance reasons  ", "Removes NULL values from the result set before returning the output      "],
      correct: [0],
      concept: "SELECT DISTINCT eliminates duplicate rows from the result set. It considers ALL columns in the SELECT list when determining uniqueness. Two rows are considered duplicates only if every selected column value matches. It does not remove NULLs, does not randomly sample, and considers all columns together."
    },
    {
      id: 12,
      type: "single",
      difficulty: 1,
      question: "What is the result of the comparison NULL = NULL in SQL?",
      options: ["NULL (unknown)      ", "TRUE                ", "FALSE               ", "Error is thrown     "],
      correct: [0],
      concept: "In SQL, NULL represents an unknown value. Comparing NULL with any value using = returns NULL (unknown), not TRUE or FALSE. This is a critical SQL gotcha. To check for NULL, you must use IS NULL or IS NOT NULL. This three-valued logic (TRUE, FALSE, NULL) is fundamental to SQL."
    },
    {
      id: 13,
      type: "single",
      difficulty: 1,
      question: "Which JOIN type returns only the rows that have matching values in both tables?",
      options: ["INNER JOIN      ", "LEFT OUTER JOIN ", "RIGHT OUTER JOIN", "FULL OUTER JOIN "],
      correct: [0],
      concept: "INNER JOIN returns only the rows where the join condition is satisfied in both tables. If a row in table A has no matching row in table B, it is excluded from the result. LEFT JOIN keeps all rows from the left table, RIGHT JOIN keeps all from the right, and FULL OUTER JOIN keeps all from both."
    },
    {
      id: 14,
      type: "single",
      difficulty: 1,
      question: "What does the BETWEEN operator include in its range?",
      options: ["Both the lower and upper boundary values (inclusive)", "Only values strictly between the boundaries (exclusive)", "The lower boundary but not the upper boundary value  ", "The upper boundary but not the lower boundary value  "],
      correct: [0],
      concept: "The BETWEEN operator in SQL is inclusive on both ends. The expression \'x BETWEEN 10 AND 20\' is equivalent to \'x >= 10 AND x <= 20\'. This is a common source of off-by-one errors when developers assume exclusive boundaries. Always remember BETWEEN includes both endpoints."
    },
    {
      id: 15,
      type: "single",
      difficulty: 1,
      question: "In SQL, what does the % wildcard represent when used with the LIKE operator?",
      options: ["Zero or more characters of any kind  ", "Exactly one character of any kind     ", "Only numeric digit characters          ", "Only alphabetic characters             "],
      correct: [0],
      concept: "The % wildcard in LIKE matches zero or more characters of any type. For example, \'A%\' matches \'A\', \'Ab\', \'Apple\', etc. The _ (underscore) wildcard matches exactly one character. These are the two primary wildcards used with the LIKE operator in standard SQL."
    },
    {
      id: 16,
      type: "single",
      difficulty: 1,
      question: "What is an Entity-Relationship (ER) diagram used for?",
      options: ["Visually modeling entities, attributes, and relationships in a database", "Tracking query execution plans and optimization statistics over time   ", "Defining the physical storage layout of tables on disk partitions      ", "Monitoring database connection pools and network traffic patterns      "],
      correct: [0],
      concept: "An ER diagram is a visual tool used in data modeling to represent entities (tables), their attributes (columns), and the relationships between them (foreign keys, associations). It is a fundamental design artifact created during the logical design phase before implementing the physical database."
    },
    {
      id: 17,
      type: "single",
      difficulty: 1,
      question: "What does normalization in database design primarily aim to achieve?",
      options: ["Reduce data redundancy and eliminate insertion/update/deletion anomalies", "Maximize query performance by duplicating data across multiple tables   ", "Compress data to minimize the physical storage space requirements      ", "Encrypt sensitive data columns to comply with data privacy regulations "],
      correct: [0],
      concept: "Normalization is the process of organizing data to reduce redundancy and dependency. It prevents anomalies: insertion anomaly (cannot add data without other data), update anomaly (inconsistent data after updates), and deletion anomaly (losing data unintentionally when deleting). Normal forms (1NF, 2NF, 3NF) provide progressively stricter rules."
    },
    {
      id: 18,
      type: "single",
      difficulty: 1,
      question: "Which constraint ensures that all values in a column are different from each other?",
      options: ["UNIQUE      ", "NOT NULL    ", "CHECK       ", "DEFAULT     "],
      correct: [0],
      concept: "The UNIQUE constraint ensures that no two rows have the same value in the constrained column(s). Unlike PRIMARY KEY, a UNIQUE column can contain NULL values (in most databases, multiple NULLs are allowed). NOT NULL prevents NULLs, CHECK validates a condition, and DEFAULT provides a fallback value."
    },
    {
      id: 19,
      type: "single",
      difficulty: 1,
      question: "What is the difference between INT and BIGINT data types?",
      options: ["BIGINT supports a much larger range of integer values than INT         ", "INT supports larger values than BIGINT but uses more storage space      ", "BIGINT stores decimal numbers while INT only stores whole numbers      ", "There is no difference; they are aliases for the same data type        "],
      correct: [0],
      concept: "INT (4 bytes) supports values roughly from -2.1 billion to 2.1 billion. BIGINT (8 bytes) supports values roughly from -9.2 quintillion to 9.2 quintillion. Use BIGINT for columns like surrogate keys in very large tables or values that could exceed INT range (e.g., social media post IDs, epoch timestamps in milliseconds)."
    },
    {
      id: 20,
      type: "single",
      difficulty: 1,
      question: "Which keyword is used to reference a table in another schema within the same database?",
      options: ["schema_name.table_name   ", "table_name@schema_name   ", "table_name->schema_name  ", "schema_name::table_name  "],
      correct: [0],
      concept: "To reference a table in a different schema, use dot notation: schema_name.table_name. For example, SELECT * FROM staging.customers references the \'customers\' table in the \'staging\' schema. This is standard SQL syntax supported across all major RDBMS platforms."
    },
    {
      id: 21,
      type: "single",
      difficulty: 1,
      question: "What is the TEXT data type typically used for?",
      options: ["Storing variable-length strings without a predefined maximum length", "Storing only single-character values in an optimized format        ", "Storing binary data such as images and documents                  ", "Storing fixed-length strings that are always padded with spaces   "],
      correct: [0],
      concept: "TEXT is used for storing large variable-length character strings, often without a specified maximum length limit (or with a very large one). It is ideal for storing descriptions, comments, or document content. Unlike VARCHAR(n), TEXT typically does not require specifying a maximum length, though behavior varies by RDBMS."
    },
    {
      id: 22,
      type: "single",
      difficulty: 1,
      question: "What does the _ (underscore) wildcard match in a LIKE pattern?",
      options: ["Exactly one character  ", "Zero or more characters", "Only numeric digits   ", "Only underscore chars  "],
      correct: [0],
      concept: "The underscore (_) wildcard in a LIKE pattern matches exactly one character of any type. For example, \'_at\' matches \'cat\', \'bat\', \'hat\' but not \'at\' or \'chat\'. This is different from % which matches zero or more characters. Combining both allows powerful pattern matching."
    },
    {
      id: 23,
      type: "single",
      difficulty: 1,
      question: "Which clause is processed first in the logical order of SQL query execution?",
      options: ["FROM        ", "SELECT      ", "WHERE       ", "ORDER BY    "],
      correct: [0],
      concept: "The logical order of SQL query execution is: FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> DISTINCT -> ORDER BY -> LIMIT/OFFSET. FROM is processed first because the database needs to identify the source tables before it can filter, group, or select data from them."
    },
    {
      id: 24,
      type: "single",
      difficulty: 1,
      question: "What happens when you apply DISTINCT on multiple columns like SELECT DISTINCT col1, col2?",
      options: ["It removes rows where the combination of col1 AND col2 is duplicated", "It removes rows where either col1 OR col2 individually has duplicates ", "It applies DISTINCT only to col1 and ignores col2 completely         ", "It returns an error because DISTINCT can only be used on one column   "],
      correct: [0],
      concept: "When DISTINCT is applied to multiple columns, it evaluates the uniqueness of the entire row combination. SELECT DISTINCT city, state would return unique city-state pairs. \'Portland, OR\' and \'Portland, ME\' would both appear because the combination is different, even though the city name is the same."
    },
    {
      id: 25,
      type: "single",
      difficulty: 1,
      question: "What is a PRIMARY KEY constraint?",
      options: ["A combination of NOT NULL and UNIQUE that uniquely identifies each row", "A constraint that only enforces uniqueness but allows NULL values      ", "A foreign key reference that links two tables in a relationship       ", "A constraint that automatically increments the column value by one    "],
      correct: [0],
      concept: "A PRIMARY KEY is a combination of the NOT NULL and UNIQUE constraints. It uniquely identifies each row in a table. A table can have only one primary key, which can consist of one column (simple key) or multiple columns (composite key). Auto-increment is a separate property, not part of the PRIMARY KEY definition itself."
    },
    {
      id: 26,
      type: "single",
      difficulty: 1,
      question: "Which type of relationship is represented when one record in Table A can relate to many records in Table B?",
      options: ["One-to-Many  ", "Many-to-Many ", "One-to-One   ", "Self-referencing"],
      correct: [0],
      concept: "A one-to-many relationship means one record in the parent table can be associated with multiple records in the child table. For example, one customer can have many orders. This is implemented using a foreign key in the child table (orders) referencing the primary key of the parent table (customers)."
    },
    {
      id: 27,
      type: "single",
      difficulty: 1,
      question: "What is the CHECK constraint used for?",
      options: ["Ensuring that column values satisfy a specific Boolean condition   ", "Verifying that a column references a valid primary key in another table", "Checking if the table has reached its maximum row capacity limit      ", "Validating that the database connection is active before running DML  "],
      correct: [0],
      concept: "The CHECK constraint enforces a domain rule on column values. For example, CHECK (age >= 0) ensures age cannot be negative, or CHECK (status IN (\'active\', \'inactive\')) restricts status to specific values. It evaluates a Boolean expression for every INSERT and UPDATE operation."
    },
    {
      id: 28,
      type: "single",
      difficulty: 1,
      question: "What value does the DEFAULT constraint assign to a column?",
      options: ["A predefined value when no explicit value is provided during INSERT", "The maximum possible value allowed by the column data type           ", "A NULL value regardless of whether the column has a NOT NULL constraint", "A random value generated by the database engine during each INSERT   "],
      correct: [0],
      concept: "The DEFAULT constraint specifies a value to be used when an INSERT statement does not provide an explicit value for that column. For example, DEFAULT CURRENT_TIMESTAMP sets the insertion time, or DEFAULT 0 sets a numeric column to zero. It only applies when the value is omitted, not when NULL is explicitly inserted."
    },
    {
      id: 29,
      type: "single",
      difficulty: 1,
      question: "Which JOIN syntax is considered an implicit join?",
      options: ["SELECT * FROM A, B WHERE A.id = B.a_id", "SELECT * FROM A INNER JOIN B ON A.id = B.a_id", "SELECT * FROM A LEFT JOIN B ON A.id = B.a_id", "SELECT * FROM A CROSS JOIN B"],
      correct: [0],
      concept: "The comma-separated table syntax (FROM A, B WHERE ...) is called an implicit join or theta-style join. It performs a Cartesian product first, then filters using the WHERE clause. While functionally equivalent to INNER JOIN for simple cases, explicit JOIN syntax is preferred for readability and to avoid accidental cross joins."
    },
    {
      id: 30,
      type: "single",
      difficulty: 1,
      question: "What does TIMESTAMP store that DATE does not?",
      options: ["Both date and time-of-day information   ", "Only the time zone offset without date   ", "Only the year and month without the day  ", "The date in a compressed binary format   "],
      correct: [0],
      concept: "TIMESTAMP stores both the date and time components (e.g., \'2025-03-15 14:30:00\'). DATE stores only the date portion (e.g., \'2025-03-15\'). Some databases also offer TIMESTAMP WITH TIME ZONE which additionally stores timezone information. Choose DATE when time is irrelevant to save storage."
    },
    {
      id: 31,
      type: "single",
      difficulty: 1,
      question: "In the WHERE clause, how do you correctly check if a column value is NULL?",
      options: ["WHERE column IS NULL      ", "WHERE column = NULL       ", "WHERE column == NULL      ", "WHERE column EQUALS NULL  "],
      correct: [0],
      concept: "You must use IS NULL (or IS NOT NULL) to check for NULL values. Using = NULL is incorrect because any comparison with NULL using standard operators returns NULL (unknown), not TRUE. This is one of the most common SQL mistakes. The IS operator is specifically designed for NULL comparisons."
    },
    {
      id: 32,
      type: "single",
      difficulty: 1,
      question: "What does a foreign key constraint enforce?",
      options: ["Referential integrity by ensuring values exist in a referenced table", "Uniqueness of all values within the column across the entire table  ", "That the column value cannot be NULL under any circumstances         ", "Automatic deletion of parent records when child records are removed  "],
      correct: [0],
      concept: "A foreign key enforces referential integrity by ensuring that values in the child table\'s column must exist in the parent table\'s referenced column (usually a primary key). This prevents orphan records. CASCADE options can be configured separately for DELETE and UPDATE operations."
    },
    {
      id: 33,
      type: "single",
      difficulty: 1,
      question: "Which SQL keyword removes duplicate rows AND sorts the result in a single operation?",
      options: ["Neither DISTINCT nor ORDER BY do both; they must be used together", "DISTINCT automatically sorts and removes duplicates simultaneously  ", "UNIQUE keyword both deduplicates and sorts the result set           ", "GROUP BY removes duplicates and sorts as a single combined operation"],
      correct: [0],
      concept: "DISTINCT only removes duplicates; it does NOT guarantee any particular sort order. ORDER BY only sorts; it does NOT remove duplicates. To get a deduplicated and sorted result, you must use both: SELECT DISTINCT col FROM table ORDER BY col. Never assume DISTINCT implies sorting."
    },
    {
      id: 34,
      type: "single",
      difficulty: 1,
      question: "What is First Normal Form (1NF)?",
      options: ["Each column contains only atomic (indivisible) values with no repeating groups", "All non-key columns are fully dependent on the entire composite primary key   ", "No non-key column depends transitively on the primary key of the table        ", "Each table has at most one column designated as the primary key identifier     "],
      correct: [0],
      concept: "First Normal Form (1NF) requires that each column contains only atomic (indivisible) values, there are no repeating groups or arrays within a single cell, and each row is uniquely identifiable. For example, a column storing \'red,blue,green\' as a comma-separated list violates 1NF."
    },
    {
      id: 35,
      type: "single",
      difficulty: 1,
      question: "What does the AND operator do when combining conditions in a WHERE clause?",
      options: ["Returns rows only when ALL combined conditions evaluate to TRUE   ", "Returns rows when ANY one of the combined conditions evaluates to TRUE", "Returns rows when the first condition is TRUE regardless of the second", "Combines conditions using exclusive OR logic for filtering rows       "],
      correct: [0],
      concept: "The AND operator requires ALL conditions to be TRUE for a row to be included in the result. For example, WHERE salary > 50000 AND department = \'Engineering\' returns only rows where both conditions are met. If either condition is FALSE or NULL, the row is excluded."
    },
    {
      id: 36,
      type: "single",
      difficulty: 2,
      question: "What is the logical order of SQL clause processing when a query contains FROM, WHERE, GROUP BY, HAVING, SELECT, and ORDER BY?",
      options: ["FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY", "SELECT -> FROM -> WHERE -> GROUP BY -> HAVING -> ORDER BY", "FROM -> SELECT -> WHERE -> GROUP BY -> HAVING -> ORDER BY", "FROM -> GROUP BY -> WHERE -> HAVING -> SELECT -> ORDER BY"],
      correct: [0],
      concept: "SQL processes clauses in a specific logical order regardless of how they appear in the written query. FROM identifies tables, WHERE filters rows, GROUP BY aggregates, HAVING filters groups, SELECT computes output columns, and ORDER BY sorts the final result. This is why you cannot use column aliases from SELECT in WHERE."
    },
    {
      id: 37,
      type: "single",
      difficulty: 2,
      question: "What happens when a LEFT JOIN condition is placed in the WHERE clause instead of the ON clause?",
      options: ["It effectively converts the LEFT JOIN into an INNER JOIN by filtering out NULLs", "It has no effect; WHERE and ON behave identically for all JOIN types          ", "It returns more rows because WHERE is applied after the join is computed      ", "It causes a syntax error because WHERE cannot reference joined table columns  "],
      correct: [0],
      concept: "Placing the filter condition for the right table in WHERE instead of ON effectively converts a LEFT JOIN to an INNER JOIN. This is because WHERE filters after the join, eliminating rows where the right table columns are NULL (non-matching rows). Placing the condition in ON preserves non-matching left table rows with NULLs."
    },
    {
      id: 38,
      type: "single",
      difficulty: 2,
      question: "What does the expression WHERE status IN (NULL) return?",
      options: ["No rows, because IN cannot match NULL using equality comparison ", "All rows where status is NULL since NULL is included in the list", "An error because NULL is not allowed inside the IN operator     ", "All rows regardless of status value including NULLs and non-NULLs"],
      correct: [0],
      concept: "IN uses equality comparison internally. Since NULL = NULL evaluates to NULL (not TRUE), IN (NULL) will never match any rows, even rows where status IS NULL. To find NULL values, you must use IS NULL. This is a common gotcha: WHERE x IN (1, 2, NULL) will find rows where x is 1 or 2, but NOT where x is NULL."
    },
    {
      id: 39,
      type: "single",
      difficulty: 2,
      question: "Given the expression WHERE NOT (x > 5 AND y < 10), which is the equivalent using De Morgan\'s law?",
      options: ["WHERE x <= 5 OR y >= 10 ", "WHERE x <= 5 AND y >= 10", "WHERE x < 5 OR y > 10   ", "WHERE x > 5 OR y < 10   "],
      correct: [0],
      concept: "De Morgan\'s law states that NOT (A AND B) = (NOT A) OR (NOT B). Applying this: NOT (x > 5) becomes x <= 5, and NOT (y < 10) becomes y >= 10. The AND becomes OR. So the result is WHERE x <= 5 OR y >= 10. Understanding De Morgan\'s law is critical for optimizing complex WHERE conditions."
    },
    {
      id: 40,
      type: "single",
      difficulty: 2,
      question: "What is the result of: SELECT * FROM employees WHERE salary BETWEEN 50000 AND 60000 when salary = 50000?",
      options: ["The row is included because BETWEEN is inclusive on both boundaries   ", "The row is excluded because BETWEEN excludes the lower boundary value ", "The row is excluded because BETWEEN excludes both boundary values     ", "The result depends on the data type of the salary column              "],
      correct: [0],
      concept: "BETWEEN is inclusive on both the lower and upper boundaries. salary BETWEEN 50000 AND 60000 is equivalent to salary >= 50000 AND salary <= 60000. Therefore, a salary of exactly 50000 is included. This inclusive behavior is consistent across all major SQL databases."
    },
    {
      id: 41,
      type: "single",
      difficulty: 2,
      question: "How do you search for a literal percent sign (%) in a LIKE pattern?",
      options: ["Use an ESCAPE clause: LIKE \'%10!%%\' ESCAPE \'!\'       ", "Double the percent sign: LIKE \'%10%%\'                   ", "Wrap it in brackets: LIKE \'%10[%]%\'                     ", "Percent signs cannot be searched with LIKE at all       "],
      correct: [0],
      concept: "To search for a literal wildcard character in a LIKE pattern, use the ESCAPE clause. You define an escape character and prefix the literal wildcard with it. For example, LIKE \'%10!%%\' ESCAPE \'!\' finds strings containing \'10%\'. Some databases also support bracket notation [%], but ESCAPE is the ANSI standard approach."
    },
    {
      id: 42,
      type: "single",
      difficulty: 2,
      question: "What is a self-join and when is it used?",
      options: ["Joining a table to itself to compare rows within the same table      ", "Joining two tables that have identical schema definitions              ", "An automatic join that the database performs during index maintenance  ", "A join that references its own result set recursively until terminated"],
      correct: [0],
      concept: "A self-join joins a table to itself using different aliases. It is commonly used to find hierarchical relationships (employee-manager), compare rows within the same table (find employees with the same salary), or find pairs. Example: SELECT e.name, m.name FROM employees e JOIN employees m ON e.manager_id = m.id."
    },
    {
      id: 43,
      type: "single",
      difficulty: 2,
      question: "What happens when you use OR with AND in a WHERE clause without parentheses? Consider: WHERE a = 1 OR b = 2 AND c = 3",
      options: ["AND is evaluated before OR: a = 1 OR (b = 2 AND c = 3)  ", "OR is evaluated before AND: (a = 1 OR b = 2) AND c = 3  ", "They are evaluated left to right: (a = 1 OR b = 2) AND c = 3", "The database throws an error for ambiguous operator precedence"],
      correct: [0],
      concept: "In SQL, AND has higher precedence than OR, similar to multiplication before addition in math. So WHERE a = 1 OR b = 2 AND c = 3 is evaluated as WHERE a = 1 OR (b = 2 AND c = 3). To change the order, use explicit parentheses: WHERE (a = 1 OR b = 2) AND c = 3. Always use parentheses for clarity."
    },
    {
      id: 44,
      type: "single",
      difficulty: 2,
      question: "What does a RIGHT JOIN return that an INNER JOIN does not?",
      options: ["Rows from the right table that have no matching rows in the left table  ", "Rows from the left table that have no matching rows in the right table  ", "Duplicate rows from both tables that match the join condition            ", "All possible combinations of rows from both tables as a Cartesian product"],
      correct: [0],
      concept: "RIGHT JOIN returns all rows from the right table plus matching rows from the left table. When there is no match in the left table, NULL values are returned for left table columns. INNER JOIN would exclude these non-matching right table rows entirely. RIGHT JOIN is rarely used; most prefer LEFT JOIN with reversed table order."
    },
    {
      id: 45,
      type: "single",
      difficulty: 2,
      question: "Which statement about FULL OUTER JOIN is correct?",
      options: ["It returns all rows from both tables, with NULLs where no match exists", "It returns only rows that exist in both tables, identical to INNER JOIN", "It returns the Cartesian product of both tables without any filtering  ", "It is only supported in MySQL and not available in other RDBMS systems "],
      correct: [0],
      concept: "FULL OUTER JOIN returns all rows from both the left and right tables. Where there is a match, it returns the combined row. Where there is no match on either side, it fills the missing columns with NULLs. Note: MySQL does not natively support FULL OUTER JOIN; you must use UNION of LEFT and RIGHT JOINs."
    },
    {
      id: 46,
      type: "single",
      difficulty: 2,
      question: "What is Second Normal Form (2NF)?",
      options: ["A table is in 1NF and all non-key columns are fully dependent on the entire primary key", "A table is in 1NF and all columns contain only atomic values with no repeating groups    ", "A table has no transitive dependencies among its non-key columns                         ", "A table has no multi-valued dependencies and all join dependencies are on candidate keys "],
      correct: [0],
      concept: "Second Normal Form (2NF) requires that a table is already in 1NF AND every non-key column is fully functionally dependent on the entire primary key (not just part of it). 2NF is relevant when you have a composite primary key. If a non-key column depends on only one part of the composite key, it violates 2NF."
    },
    {
      id: 47,
      type: "single",
      difficulty: 2,
      question: "What does DECIMAL(10,2) mean?",
      options: ["10 total digits with 2 digits after the decimal point ", "10 digits before the decimal and 2 digits after        ", "Up to 10 rows can store 2-digit decimal values         ", "A decimal number with precision of 10 and scale of 200"],
      correct: [0],
      concept: "In DECIMAL(p,s), p is precision (total number of digits) and s is scale (digits after the decimal point). DECIMAL(10,2) can store numbers with up to 8 digits before the decimal point and 2 after, e.g., 12345678.99. The maximum value would be 99999999.99."
    },
    {
      id: 48,
      type: "single",
      difficulty: 2,
      question: "When using CREATE TABLE, what does the IF NOT EXISTS clause do?",
      options: ["Prevents an error if a table with the same name already exists       ", "Creates the table only if no data exists in the target schema        ", "Checks if the columns already exist in another table before creating ", "Validates that the database server exists before running the command  "],
      correct: [0],
      concept: "IF NOT EXISTS is a conditional clause that prevents the CREATE TABLE statement from raising an error if a table with the same name already exists in the schema. Without it, attempting to create a duplicate table throws an error. This is useful in idempotent scripts that may be run multiple times."
    },
    {
      id: 49,
      type: "single",
      difficulty: 2,
      question: "What is the difference between WHERE and HAVING in SQL?",
      options: ["WHERE filters individual rows before grouping; HAVING filters groups after aggregation", "HAVING filters individual rows before grouping; WHERE filters groups after aggregation  ", "WHERE and HAVING are interchangeable and can be used in any order                       ", "WHERE is used only with SELECT and HAVING is used only with INSERT statements           "],
      correct: [0],
      concept: "WHERE filters rows before GROUP BY processes them, so it cannot use aggregate functions. HAVING filters groups after GROUP BY, so it can reference aggregate results like COUNT(*) > 5. A query can use both: WHERE filters rows first, then GROUP BY groups them, then HAVING filters the groups."
    },
    {
      id: 50,
      type: "single",
      difficulty: 2,
      question: "How does a LEFT JOIN handle multiple matching rows in the right table?",
      options: ["It produces one output row for each matching row in the right table, duplicating the left row", "It returns only the first matching row from the right table and discards the rest             ", "It concatenates all matching right table values into a single comma-separated string          ", "It raises an error because LEFT JOIN requires a one-to-one relationship between tables        "],
      correct: [0],
      concept: "When a LEFT JOIN finds multiple matches in the right table, it creates one output row for each match, duplicating the left table\'s data. For example, if order 101 has 3 line items, a LEFT JOIN of orders to line_items produces 3 rows for order 101. This row multiplication is important to understand for correct query results."
    },
    {
      id: 51,
      type: "single",
      difficulty: 2,
      question: "Which statement correctly creates a table with a composite primary key?",
      options: ["CREATE TABLE t (a INT, b INT, c TEXT, PRIMARY KEY (a, b))", "CREATE TABLE t (a INT PRIMARY KEY, b INT PRIMARY KEY, c TEXT)", "CREATE TABLE t (a INT, b INT, c TEXT, COMPOSITE KEY (a, b))", "CREATE TABLE t (a INT & b INT PRIMARY KEY, c TEXT)          "],
      correct: [0],
      concept: "A composite primary key is defined using a table-level constraint: PRIMARY KEY (col1, col2). You cannot declare PRIMARY KEY on multiple columns individually as that would attempt to create multiple primary keys, which is not allowed. COMPOSITE KEY is not a valid SQL keyword."
    },
    {
      id: 52,
      type: "single",
      difficulty: 2,
      question: "What is the difference between DROP TABLE and TRUNCATE TABLE?",
      options: ["DROP removes the table definition entirely; TRUNCATE removes all rows but keeps the structure", "TRUNCATE removes the table definition entirely; DROP removes all rows but keeps the structure", "Both commands remove all rows but DROP is faster because it does not log the operation       ", "DROP is a DML command while TRUNCATE is a DDL command in all major database systems          "],
      correct: [0],
      concept: "DROP TABLE removes the entire table including its structure, indexes, constraints, and permissions. TRUNCATE TABLE removes all data rows but preserves the table structure for future use. Both are DDL commands. TRUNCATE is typically faster than DELETE for removing all rows because it deallocates data pages rather than logging individual row deletions."
    },
    {
      id: 53,
      type: "single",
      difficulty: 2,
      question: "What does the query SELECT DISTINCT department, title FROM employees return?",
      options: ["Unique combinations of department and title pairs across all rows       ", "Unique departments first, then unique titles as two separate result sets", "Only rows where both department and title appear exactly once in the table", "An error because DISTINCT cannot be applied to more than one column     "],
      correct: [0],
      concept: "DISTINCT evaluates uniqueness across ALL columns in the SELECT list as a tuple. So SELECT DISTINCT department, title returns each unique (department, title) pair. For example, (\'Engineering\', \'Senior\') and (\'Engineering\', \'Junior\') are treated as different because the title differs."
    },
    {
      id: 54,
      type: "single",
      difficulty: 2,
      question: "What is the behavior of NOT IN when the list contains a NULL value?",
      options: ["It returns no rows because the NOT NULL comparison makes every evaluation unknown", "It works normally, simply ignoring the NULL value in the list                    ", "It returns all rows because NULL is treated as a universal match                 ", "It raises a runtime error because NULL is not permitted in the IN list           "],
      correct: [0],
      concept: "NOT IN with NULL in the list is a notorious SQL gotcha. WHERE x NOT IN (1, 2, NULL) translates to x != 1 AND x != 2 AND x != NULL. Since x != NULL is always NULL (unknown), the entire AND expression is never TRUE. Result: zero rows returned. Always filter NULLs from subquery results used with NOT IN, or use NOT EXISTS instead."
    },
    {
      id: 55,
      type: "single",
      difficulty: 2,
      question: "Which of the following correctly describes Third Normal Form (3NF)?",
      options: ["A table in 2NF where no non-key column is transitively dependent on the primary key  ", "A table where every column is directly dependent on every other column in the table    ", "A table in 1NF where all columns have atomic values and no repeating groups exist      ", "A table where all multi-valued dependencies are eliminated using separate junction tables"],
      correct: [0],
      concept: "Third Normal Form (3NF) requires that the table is in 2NF and no non-key column depends on another non-key column (no transitive dependencies). For example, if employee_id -> department_id -> department_name, then department_name transitively depends on employee_id through department_id. To fix this, move department_name to a separate departments table."
    },
    {
      id: 56,
      type: "single",
      difficulty: 2,
      question: "What is a surrogate key?",
      options: ["An artificial, system-generated key with no business meaning used as a primary key", "A natural key derived from business data that uniquely identifies each record     ", "A foreign key that references the primary key of a parent table                  ", "A composite key formed by combining two or more business columns together        "],
      correct: [0],
      concept: "A surrogate key is an artificial identifier (often auto-incrementing integer or UUID) with no business meaning. It is used as the primary key instead of natural keys. Advantages include stability (does not change with business rules), simplicity (single column), and performance (compact index). Examples include identity columns and sequences."
    },
    {
      id: 57,
      type: "single",
      difficulty: 2,
      question: "What is the output of: SELECT 1 WHERE 1 NOT IN (SELECT NULL)?",
      options: ["Empty result set (no rows returned)            ", "Returns the value 1 as a single row result     ", "Raises an error due to NULL in subquery result  ", "Returns NULL as the result of the NOT IN check  "],
      correct: [0],
      concept: "NOT IN with a subquery returning NULL always returns an empty result set. 1 NOT IN (NULL) evaluates as 1 != NULL, which is NULL (unknown). Since the WHERE clause requires TRUE to include a row, and NULL is not TRUE, no rows are returned. This is a critical gotcha when using NOT IN with subqueries."
    },
    {
      id: 58,
      type: "single",
      difficulty: 2,
      question: "How do you add a new column to an existing table?",
      options: ["ALTER TABLE table_name ADD COLUMN column_name datatype;", "UPDATE TABLE table_name ADD column_name datatype;      ", "INSERT COLUMN column_name datatype INTO table_name;    ", "MODIFY TABLE table_name NEW COLUMN column_name datatype;"],
      correct: [0],
      concept: "ALTER TABLE ... ADD COLUMN is the standard DDL statement to add a new column to an existing table. The new column is added with NULL values for all existing rows (unless a DEFAULT is specified). UPDATE is a DML command for changing data, and INSERT adds rows, not columns."
    },
    {
      id: 59,
      type: "single",
      difficulty: 2,
      question: "What does a cardinality of \"many-to-many\" between two entities require in a relational database?",
      options: ["A junction (bridge) table with foreign keys referencing both entities  ", "A single foreign key column in one of the two entity tables            ", "Storing comma-separated IDs in one of the entity tables                ", "A self-referencing foreign key on one of the two entity tables         "],
      correct: [0],
      concept: "A many-to-many relationship cannot be directly represented in a relational database. It requires a junction (associative/bridge) table that contains foreign keys to both entity tables. For example, students and courses have a many-to-many relationship, resolved by an enrollments table with student_id and course_id foreign keys."
    },
    {
      id: 60,
      type: "single",
      difficulty: 2,
      question: "Which SQL expression correctly handles NULL in an ORDER BY clause to sort NULLs last?",
      options: ["ORDER BY column_name NULLS LAST                        ", "ORDER BY ISNULL(column_name) DESC, column_name ASC      ", "ORDER BY column_name DESC NULLS FIRST                   ", "NULLs are always sorted last by default in every database"],
      correct: [0],
      concept: "NULLS LAST (and NULLS FIRST) are ANSI SQL keywords that control NULL placement in sorted results. By default, NULL sorting behavior varies by database: PostgreSQL sorts NULLs last in ASC, SQL Server sorts them first. Using NULLS LAST explicitly ensures consistent behavior across platforms."
    },
    {
      id: 61,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are valid column constraints in SQL? (Select all that apply)",
      options: ["NOT NULL           ", "UNIQUE             ", "CHECK              ", "MANDATORY          "],
      correct: [0, 1, 2],
      concept: "NOT NULL (prevents NULL values), UNIQUE (ensures distinct values), and CHECK (validates a Boolean condition) are all valid SQL column constraints. MANDATORY is not a standard SQL constraint keyword. Other valid constraints include DEFAULT, PRIMARY KEY, and FOREIGN KEY."
    },
    {
      id: 62,
      type: "multi",
      difficulty: 2,
      question: "Which of the following statements about NULL in SQL are correct? (Select all that apply)",
      options: ["NULL = NULL evaluates to NULL, not TRUE                          ", "IS NULL is the correct way to check for NULL values              ", "NULL values are included when counting with COUNT(column_name)   ", "Any arithmetic operation involving NULL returns NULL as the result"],
      correct: [0, 1, 3],
      concept: "NULL = NULL returns NULL (unknown). IS NULL is the proper check. Any arithmetic with NULL (e.g., 5 + NULL) returns NULL. However, COUNT(column_name) explicitly SKIPS NULL values; only COUNT(*) counts all rows regardless of NULLs. This distinction between COUNT(*) and COUNT(col) is frequently tested."
    },
    {
      id: 63,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are valid JOIN types in standard SQL? (Select all that apply)",
      options: ["INNER JOIN    ", "LEFT JOIN     ", "DIAGONAL JOIN ", "FULL OUTER JOIN"],
      correct: [0, 1, 3],
      concept: "INNER JOIN, LEFT JOIN (LEFT OUTER JOIN), RIGHT JOIN (RIGHT OUTER JOIN), FULL OUTER JOIN, and CROSS JOIN are all valid SQL join types. DIAGONAL JOIN is not a valid SQL join type. NATURAL JOIN is also valid but less commonly used due to its implicit column matching behavior."
    },
    {
      id: 64,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are characteristics of a PRIMARY KEY? (Select all that apply)",
      options: ["It enforces uniqueness on the column or combination of columns", "It implicitly applies a NOT NULL constraint to the key columns ", "A table can have multiple PRIMARY KEY constraints defined      ", "It is used to uniquely identify each row in the table          "],
      correct: [0, 1, 3],
      concept: "A PRIMARY KEY combines UNIQUE and NOT NULL constraints, ensuring each row is uniquely identifiable. A table can have only ONE primary key (though it can span multiple columns as a composite key). It is the foundation of relational integrity and is often referenced by foreign keys in other tables."
    },
    {
      id: 65,
      type: "multi",
      difficulty: 2,
      question: "Which data types are appropriate for storing monetary values with exact precision? (Select all that apply)",
      options: ["DECIMAL   ", "NUMERIC   ", "FLOAT     ", "DOUBLE    "],
      correct: [0, 1],
      concept: "DECIMAL and NUMERIC are exact numeric types that store values without floating-point rounding errors, making them ideal for monetary values. FLOAT and DOUBLE are approximate types that use IEEE 754 floating-point representation, which can introduce rounding errors (e.g., 0.1 + 0.2 != 0.3). Never use FLOAT/DOUBLE for financial calculations."
    },
    {
      id: 66,
      type: "multi",
      difficulty: 2,
      question: "Which of the following operations will include boundary values? (Select all that apply)",
      options: ["WHERE x BETWEEN 1 AND 10          ", "WHERE x >= 1 AND x <= 10          ", "WHERE x > 1 AND x < 10            ", "WHERE x IN (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)"],
      correct: [0, 1, 3],
      concept: "BETWEEN is inclusive on both ends, so values 1 and 10 are included. >= and <= are explicitly inclusive. IN checks for exact membership, so if 1 and 10 are in the list, they match. Only > and < are exclusive, so WHERE x > 1 AND x < 10 excludes both boundaries (1 and 10)."
    },
    {
      id: 67,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are true about LEFT JOIN? (Select all that apply)",
      options: ["All rows from the left table are preserved in the result                 ", "Non-matching rows from the right table are filled with NULL values        ", "Adding a WHERE condition on the right table can convert it to an INNER JOIN", "It always returns fewer rows than an INNER JOIN on the same tables         "],
      correct: [0, 1, 2],
      concept: "LEFT JOIN preserves all left table rows, fills non-matching right table columns with NULL. A WHERE clause filtering on right table columns (e.g., WHERE right.col = value) filters out NULLs, effectively converting to INNER JOIN. LEFT JOIN returns at least as many rows as INNER JOIN, never fewer."
    },
    {
      id: 68,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are components of an ER diagram? (Select all that apply)",
      options: ["Entities represented as rectangles           ", "Relationships represented as diamonds         ", "Attributes represented as ovals               ", "Query plans represented as directed acyclic graphs"],
      correct: [0, 1, 2],
      concept: "In Chen notation ER diagrams: entities are shown as rectangles, relationships as diamonds, and attributes as ovals. Lines connect these elements to show which attributes belong to which entities and how entities relate. Query plans and DAGs are not part of ER diagram notation; they belong to query optimization."
    },
    {
      id: 69,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are true about the LIKE operator? (Select all that apply)",
      options: ["% matches zero or more characters           ", "_ matches exactly one character              ", "LIKE is case-sensitive in all databases      ", "ESCAPE clause allows searching for literal % "],
      correct: [0, 1, 3],
      concept: "% matches zero or more characters, _ matches exactly one character, and ESCAPE defines a character to treat wildcards as literals. Case sensitivity of LIKE varies by database: MySQL is case-insensitive by default, PostgreSQL is case-sensitive (use ILIKE for case-insensitive). It is NOT universally case-sensitive."
    },
    {
      id: 70,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are valid reasons to use schemas? (Select all that apply)",
      options: ["Organizing objects by functional area such as raw, staging, and analytics", "Managing permissions at the schema level instead of individual objects   ", "Avoiding naming conflicts between objects with the same name            ", "Improving query execution speed by partitioning data across schemas     "],
      correct: [0, 1, 2],
      concept: "Schemas organize objects logically (e.g., raw vs staging), enable permission management at a granular level (GRANT SELECT ON SCHEMA), and prevent naming collisions (raw.customers vs analytics.customers). Schemas do not inherently improve query performance; that depends on indexing, partitioning, and query optimization."
    },
    {
      id: 71,
      type: "multi",
      difficulty: 2,
      question: "Which of the following statements about FULL OUTER JOIN are correct? (Select all that apply)",
      options: ["It returns all rows from both left and right tables                  ", "Non-matching rows from either table are filled with NULLs            ", "MySQL natively supports FULL OUTER JOIN with the FULL keyword        ", "It can be simulated using UNION of LEFT JOIN and RIGHT JOIN in MySQL "],
      correct: [0, 1, 3],
      concept: "FULL OUTER JOIN returns all rows from both tables, filling NULLs where there is no match on either side. MySQL does not natively support FULL OUTER JOIN. To simulate it in MySQL, use: SELECT * FROM A LEFT JOIN B UNION SELECT * FROM A RIGHT JOIN B. PostgreSQL, SQL Server, and Oracle all support it natively."
    },
    {
      id: 72,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are true about the WHERE clause? (Select all that apply)",
      options: ["It filters rows before GROUP BY is applied                   ", "It can reference column aliases defined in the SELECT clause  ", "It cannot contain aggregate functions like COUNT or SUM       ", "It evaluates conditions using three-valued logic (TRUE, FALSE, NULL)"],
      correct: [0, 2, 3],
      concept: "WHERE filters rows before grouping, uses three-valued logic, and cannot contain aggregate functions (use HAVING for that). It cannot reference SELECT aliases because WHERE is processed before SELECT in the logical query execution order. This processing order is a common source of errors."
    },
    {
      id: 73,
      type: "multi",
      difficulty: 2,
      question: "Which normal forms address the following issues? Select each pair correctly matched. (Select all that apply)",
      options: ["1NF eliminates repeating groups and ensures atomic values        ", "2NF eliminates partial dependencies on a composite primary key   ", "3NF eliminates transitive dependencies among non-key columns     ", "2NF eliminates multi-valued dependencies across all table columns"],
      correct: [0, 1, 2],
      concept: "1NF ensures atomic values and no repeating groups. 2NF eliminates partial dependencies (non-key columns depending on only part of a composite key). 3NF eliminates transitive dependencies (non-key columns depending on other non-key columns). Multi-valued dependencies are addressed by 4NF, not 2NF."
    },
    {
      id: 74,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are valid use cases for self-joins? (Select all that apply)",
      options: ["Finding employee-manager hierarchies within the same table   ", "Comparing rows to find pairs that meet a condition          ", "Finding sequential records like consecutive date entries    ", "Joining two completely different tables with different schemas"],
      correct: [0, 1, 2],
      concept: "Self-joins are used when you need to relate rows within the same table. Common use cases include hierarchical queries (employee-manager), finding pairs (products with same price), and comparing sequential records (current vs previous row). Joining different tables is a regular join, not a self-join."
    },
    {
      id: 75,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are differences between CHAR and VARCHAR? (Select all that apply)",
      options: ["CHAR uses fixed-length storage while VARCHAR uses variable-length storage", "CHAR pads shorter strings with trailing spaces to fill the defined length ", "VARCHAR is generally more storage-efficient for variable-length data      ", "CHAR has a maximum length limit of 255 characters in all database systems "],
      correct: [0, 1, 2],
      concept: "CHAR is fixed-length (always uses the full declared size, padding with spaces). VARCHAR is variable-length (uses only the space needed plus overhead). VARCHAR is more efficient for data with varying lengths. CHAR\'s maximum length varies by database: 255 in MySQL, 2000 in Oracle, 8000 in SQL Server, so it\'s not universally 255."
    },
    {
      id: 76,
      type: "single",
      difficulty: 3,
      question: "A query uses LEFT JOIN but returns the same number of rows as an INNER JOIN. What is the most likely reason?",
      options: ["Every row in the left table has at least one matching row in the right table", "The database optimizer automatically converted the LEFT JOIN to INNER JOIN  ", "LEFT JOIN and INNER JOIN always return the same number of rows               ", "The right table is empty so both joins return zero rows                      "],
      correct: [0],
      concept: "LEFT JOIN returns all left table rows, plus NULLs for non-matching right rows. If every left row matches at least one right row, there are no non-matching rows to add NULLs for, and the result is identical to INNER JOIN. The optimizer might make this conversion if it detects this, but the root cause is full data coverage."
    },
    {
      id: 77,
      type: "single",
      difficulty: 3,
      question: "Consider: SELECT * FROM orders o LEFT JOIN customers c ON o.cust_id = c.id WHERE c.country = \'US\'. What is wrong with this query?",
      options: ["The WHERE clause on the right table effectively converts the LEFT JOIN to an INNER JOIN", "The query will return NULL for all customer columns when there is no match              ", "The WHERE clause should use c.country IS \'US\' instead of the = operator                ", "Nothing is wrong; this is the correct way to filter a LEFT JOIN result                  "],
      correct: [0],
      concept: "When a LEFT JOIN produces NULLs for non-matching rows, a WHERE condition on the right table (c.country = \'US\') filters out those NULLs because NULL = \'US\' is not TRUE. This converts the LEFT JOIN to an effective INNER JOIN. To preserve LEFT JOIN behavior, move the filter to the ON clause: LEFT JOIN customers c ON o.cust_id = c.id AND c.country = \'US\'."
    },
    {
      id: 78,
      type: "single",
      difficulty: 3,
      question: "A table has columns: order_id (PK), customer_name, customer_address. Which normalization rule does this violate?",
      options: ["Third Normal Form (3NF) because customer_address transitively depends on customer_name", "First Normal Form (1NF) because customer_address might contain multiple values          ", "Second Normal Form (2NF) because customer_address partially depends on the primary key  ", "No normalization rule is violated; this table design is properly normalized              "],
      correct: [0],
      concept: "customer_address depends on customer_name (which depends on order_id), creating a transitive dependency: order_id -> customer_name -> customer_address. This violates 3NF. The fix is to create a separate customers table with customer_name and customer_address, and reference it via a foreign key in the orders table."
    },
    {
      id: 79,
      type: "single",
      difficulty: 3,
      question: "What is the result of: SELECT * FROM t WHERE x NOT IN (1, 2, NULL)?",
      options: ["Empty result set regardless of the data in column x                  ", "All rows where x is not 1 and not 2                                  ", "All rows where x is not 1, not 2, and not NULL                       ", "An error because NULL cannot be used inside the NOT IN operator       "],
      correct: [0],
      concept: "NOT IN (1, 2, NULL) expands to: x != 1 AND x != 2 AND x != NULL. Since x != NULL always evaluates to NULL (unknown), the AND expression can never be TRUE. Therefore, no rows are ever returned, regardless of what values x contains. This is one of SQL\'s most dangerous gotchas. Use NOT EXISTS instead."
    },
    {
      id: 80,
      type: "single",
      difficulty: 3,
      question: "You need to find all employees who do NOT have a manager. The manager_id column is nullable. Which query is correct?",
      options: ["SELECT * FROM employees WHERE manager_id IS NULL                    ", "SELECT * FROM employees WHERE manager_id = NULL                     ", "SELECT * FROM employees WHERE manager_id NOT IN (SELECT id FROM managers)", "SELECT * FROM employees WHERE manager_id <> ALL (SELECT id FROM managers)"],
      correct: [0],
      concept: "To find rows where a column is NULL, use IS NULL. Using = NULL returns NULL (not TRUE) and matches nothing. NOT IN with a subquery can fail if the subquery returns any NULL. <> ALL has similar NULL issues. IS NULL is the only reliable way to check for NULL values in SQL."
    },
    {
      id: 81,
      type: "single",
      difficulty: 3,
      question: "What happens when you SELECT DISTINCT on a table containing only NULL values in every column?",
      options: ["One row is returned because DISTINCT treats all NULLs as equal for grouping purposes", "No rows are returned because NULL values cannot be compared for distinctness           ", "All rows are returned because each NULL is considered unique and different              ", "An error is raised because DISTINCT cannot operate on NULL values                      "],
      correct: [0],
      concept: "For the purpose of DISTINCT (and GROUP BY), SQL treats NULL values as equal to each other. This is a special exception to the general rule that NULL != NULL. So if multiple rows have the same all-NULL pattern, DISTINCT collapses them into one row. This inconsistency in NULL handling is important to remember."
    },
    {
      id: 82,
      type: "single",
      difficulty: 3,
      question: "A denormalized table causes an update anomaly. Which scenario best illustrates this?",
      options: ["Updating a customer\'s address requires changing it in every order row where it is duplicated", "Inserting a new order fails because the customer table is missing the referenced customer_id ", "Deleting the last order for a customer accidentally removes the customer\'s contact information", "A query returns incorrect results because an index is stale and needs to be rebuilt          "],
      correct: [0],
      concept: "An update anomaly occurs when the same data is stored in multiple places and an update changes only some copies, leading to inconsistency. In a denormalized table where customer address is stored in every order row, updating the address requires modifying all related rows. Missing even one creates inconsistent data."
    },
    {
      id: 83,
      type: "single",
      difficulty: 3,
      question: "What is the behavior of LIKE on columns with trailing spaces when the column is CHAR(10)?",
      options: ["Behavior varies by database; some ignore trailing spaces, others compare them literally", "Trailing spaces are always ignored in LIKE comparisons across all SQL databases         ", "LIKE always performs exact comparison including trailing spaces in all databases         ", "CHAR columns never have trailing spaces so this scenario cannot occur                   "],
      correct: [0],
      concept: "CHAR columns pad values with trailing spaces to the defined length. LIKE comparison behavior with these spaces varies: SQL Server ignores trailing spaces, PostgreSQL considers them significant, and MySQL behavior depends on the collation. This inconsistency is a common source of bugs when migrating between databases."
    },
    {
      id: 84,
      type: "single",
      difficulty: 3,
      question: "When should you denormalize a database design despite violating normal forms?",
      options: ["When read-heavy analytics workloads require faster queries by reducing JOIN complexity", "When the database is first created and has no data to normalize yet                  ", "When you want to enforce referential integrity more strictly between tables          ", "When storage space is limited and you need to reduce the total number of tables      "],
      correct: [0],
      concept: "Denormalization is a deliberate strategy for read-heavy, analytical workloads where join complexity degrades performance. By storing redundant data, you reduce joins needed at query time. Data warehouses and data marts are typically denormalized (star/snowflake schemas). However, denormalization increases storage and risks update anomalies."
    },
    {
      id: 85,
      type: "single",
      difficulty: 3,
      question: "A query joins three tables: A LEFT JOIN B ON ... LEFT JOIN C ON B.id = C.b_id. If a row in A has no match in B, what values appear for C\'s columns?",
      options: ["NULL for all C columns, because B.id is NULL and cannot match C.b_id ", "The first row from C is returned as a default value for the non-match", "An error occurs because you cannot chain LEFT JOINs on nullable keys ", "Random values from C because the join condition is indeterminate     "],
      correct: [0],
      concept: "In a chained LEFT JOIN, if A has no match in B, B.id is NULL. The second LEFT JOIN condition B.id = C.b_id evaluates as NULL = C.b_id, which is NULL (never TRUE). Therefore, no C row matches, and all C columns are NULL. This cascading NULL behavior in chained joins is important for understanding multi-table LEFT JOIN results."
    },
    {
      id: 86,
      type: "tf",
      difficulty: 3,
      question: "In SQL, the expression NULL <> 1 evaluates to TRUE.",
      options: ["False: NULL <> 1 evaluates to NULL (unknown), not TRUE, because any comparison with NULL yields NULL", "True: NULL is not equal to 1, so the not-equals comparison correctly returns TRUE as expected      "],
      correct: [0],
      concept: "Any comparison involving NULL (including <>, =, <, >) returns NULL, not TRUE or FALSE. NULL represents an unknown value, so the result of comparing it to anything is unknown. This three-valued logic is fundamental to SQL. To check for NULL, always use IS NULL or IS NOT NULL."
    },
    {
      id: 87,
      type: "tf",
      difficulty: 3,
      question: "A table can have multiple UNIQUE constraints but only one PRIMARY KEY constraint.",
      options: ["True: A table is limited to one PRIMARY KEY but can have many UNIQUE constraints on different columns", "False: A table can have multiple PRIMARY KEY constraints as long as they are on different columns      "],
      correct: [0],
      concept: "A table can have only one PRIMARY KEY (which can span multiple columns as a composite key). However, it can have multiple UNIQUE constraints on different columns or column combinations. UNIQUE allows NULLs (in most databases), while PRIMARY KEY implicitly adds NOT NULL."
    },
    {
      id: 88,
      type: "tf",
      difficulty: 3,
      question: "The BETWEEN operator works correctly with DATE values such as WHERE date_col BETWEEN \'2025-01-01\' AND \'2025-12-31\'.",
      options: ["True: BETWEEN works with DATE values inclusively, returning dates from Jan 1 to Dec 31 of 2025  ", "False: BETWEEN only works with numeric values and cannot be used to compare date or string values"],
      correct: [0],
      concept: "BETWEEN works with any comparable data type including DATE, TIMESTAMP, and strings. WHERE date_col BETWEEN \'2025-01-01\' AND \'2025-12-31\' returns all dates from January 1 to December 31 inclusive. However, be careful with TIMESTAMP: BETWEEN \'2025-01-01\' AND \'2025-12-31\' would miss times on Dec 31 after midnight."
    },
    {
      id: 89,
      type: "tf",
      difficulty: 3,
      question: "An implicit join using comma-separated tables in the FROM clause without a WHERE condition produces a Cartesian product.",
      options: ["True: Without a WHERE clause to filter, comma-separated tables produce a Cartesian product of all row combinations", "False: The database automatically infers the join condition from matching column names even without a WHERE clause       "],
      correct: [0],
      concept: "When tables are comma-separated in FROM without a WHERE condition, every row from the first table is combined with every row from the second table, creating a Cartesian product. If table A has 100 rows and table B has 50 rows, the result has 5000 rows. The database does NOT infer join conditions automatically (unless NATURAL JOIN is used)."
    },
    {
      id: 90,
      type: "tf",
      difficulty: 3,
      question: "SELECT DISTINCT and GROUP BY always produce the same result set.",
      options: ["False: While they both remove duplicates, GROUP BY allows aggregate functions whereas DISTINCT does not perform aggregation", "True: SELECT DISTINCT and GROUP BY are functionally identical and can always be used interchangeably in any query            "],
      correct: [0],
      concept: "While SELECT DISTINCT col and SELECT col FROM t GROUP BY col produce the same result for simple cases, they are not identical. GROUP BY enables aggregate functions (COUNT, SUM, etc.) while DISTINCT simply removes duplicates. GROUP BY also defines the grouping context for HAVING and aggregate calculations, which DISTINCT cannot do."
    },
    {
      id: 91,
      type: "tf",
      difficulty: 3,
      question: "The OR operator has higher precedence than the AND operator in SQL.",
      options: ["False: AND has higher precedence than OR in SQL, similar to how multiplication precedes addition in arithmetic", "True: OR is evaluated before AND in SQL, so parentheses are only needed to override AND evaluation order       "],
      correct: [0],
      concept: "In SQL operator precedence, AND has higher precedence than OR. This means WHERE a = 1 OR b = 2 AND c = 3 is evaluated as WHERE a = 1 OR (b = 2 AND c = 3), not as WHERE (a = 1 OR b = 2) AND c = 3. Always use parentheses to make the intended logic explicit and avoid subtle bugs."
    },
    {
      id: 92,
      type: "tf",
      difficulty: 3,
      question: "A VARCHAR(100) column always occupies 100 bytes of storage regardless of the actual string length.",
      options: ["False: VARCHAR stores only the actual string length plus a small overhead for length information, not the maximum defined size", "True: VARCHAR pre-allocates the maximum defined size to ensure consistent storage and avoid fragmentation issues               "],
      correct: [0],
      concept: "VARCHAR (Variable Character) stores only the actual characters plus 1-2 bytes of overhead for length tracking. A 10-character string in VARCHAR(100) uses approximately 12 bytes, not 100. This is the key difference from CHAR, which always uses the full defined length. VARCHAR is more storage-efficient for varying-length data."
    },
    {
      id: 93,
      type: "tf",
      difficulty: 3,
      question: "In a LEFT JOIN, the ON clause and WHERE clause are interchangeable for filtering the right table.",
      options: ["False: ON filters before the join preserving unmatched left rows with NULLs; WHERE filters after, removing those NULL rows", "True: Both ON and WHERE filter at the same stage of query execution, so they produce identical results for LEFT JOIN queries    "],
      correct: [0],
      concept: "In a LEFT JOIN, the ON clause is applied during the join (preserving left rows with NULLs for non-matches), while WHERE is applied after the join (filtering out rows including NULLs). Moving a right-table filter from ON to WHERE effectively converts a LEFT JOIN to an INNER JOIN by eliminating non-matching left rows."
    },
    {
      id: 94,
      type: "tf",
      difficulty: 3,
      question: "The DISTINCT keyword in SQL considers two NULL values as different from each other.",
      options: ["False: For DISTINCT and GROUP BY purposes, SQL treats NULL values as equal to each other, collapsing them into one group", "True: Since NULL represents unknown, two NULLs could be different values, so DISTINCT treats each NULL as a unique entry      "],
      correct: [0],
      concept: "Although NULL = NULL evaluates to NULL (not TRUE) in comparisons, DISTINCT and GROUP BY treat multiple NULLs as a single group. This is a deliberate design choice in the SQL standard to make grouping and deduplication practical. Without this exception, every NULL would be its own group, which would be impractical."
    },
    {
      id: 95,
      type: "tf",
      difficulty: 3,
      question: "A CROSS JOIN requires an ON clause to specify the join condition.",
      options: ["False: CROSS JOIN produces a Cartesian product and does not use an ON clause because every combination is included", "True: Every JOIN type in SQL requires an ON clause to specify how the tables should be matched and combined         "],
      correct: [0],
      concept: "CROSS JOIN intentionally produces a Cartesian product — every row from table A combined with every row from table B. It does not use ON because there is no filtering condition. A WHERE clause can be added to filter results, but the join itself is unconditional. CROSS JOIN is useful for generating combinations or calendar tables."
    },
    {
      id: 96,
      type: "tf",
      difficulty: 3,
      question: "The LIKE pattern \'%\' (a single percent sign) matches all strings including empty strings but not NULL values.",
      options: ["True: The % wildcard matches zero or more characters (including empty strings), but NULL is not a string and LIKE with NULL returns NULL", "False: The % wildcard only matches strings with at least one character, so empty strings are excluded from the match results          "],
      correct: [0],
      concept: "The % wildcard matches zero or more characters, so LIKE \'%\' matches any string including an empty string. However, NULL is not a string value — it represents the absence of a value. LIKE applied to NULL returns NULL (unknown), so NULL rows are not included in the result. This is consistent with NULL behavior in all SQL operations."
    },
    {
      id: 97,
      type: "tf",
      difficulty: 3,
      question: "Dropping a schema with CASCADE will also drop all objects (tables, views, etc.) contained within that schema.",
      options: ["True: DROP SCHEMA ... CASCADE removes the schema and all objects it contains, such as tables, views, functions, and sequences", "False: DROP SCHEMA only removes the schema namespace; all objects are moved to the default schema automatically                    "],
      correct: [0],
      concept: "DROP SCHEMA schema_name CASCADE drops the schema and ALL objects within it (tables, views, sequences, functions, etc.). Without CASCADE, the DROP fails if the schema contains any objects (this is the RESTRICT behavior). This is a destructive operation and should be used with extreme caution in production environments."
    },
    {
      id: 98,
      type: "tf",
      difficulty: 3,
      question: "A composite primary key consisting of three columns allows duplicate values in any individual column as long as the three-column combination remains unique.",
      options: ["True: Only the combined tuple of all three columns must be unique; individual columns can have repeated values across rows", "False: Each column in a composite primary key must individually contain unique values, similar to having three separate UNIQUE constraints"],
      correct: [0],
      concept: "A composite primary key enforces uniqueness on the combination of all columns in the key, not on individual columns. For a key (A, B, C): rows (1, 2, 3) and (1, 2, 4) are both valid because the combinations differ in column C. Individual columns can repeat as long as the full tuple is unique."
    },
    {
      id: 99,
      type: "tf",
      difficulty: 3,
      question: "Using WHERE column IN () with an empty list always returns zero rows in standard SQL.",
      options: ["True: An IN clause with an empty list has no values to match against, so the condition is always FALSE and no rows are returned", "False: An empty IN list is treated as a wildcard and matches all rows in the table because no restriction is specified              "],
      correct: [0],
      concept: "IN () with an empty list returns no rows because there are no values for the column to match. However, note that some databases may throw a syntax error for an empty IN list rather than returning zero rows. The practical effect is the same: no data is returned. Some databases require at least one value in the IN list."
    },
    {
      id: 100,
      type: "tf",
      difficulty: 3,
      question: "In SQL, the order of columns listed in a SELECT statement determines the order of columns in the output result set.",
      options: ["True: The columns appear in the result set in the exact order they are listed in the SELECT clause from left to right", "False: The database engine reorders columns based on their physical storage order regardless of the SELECT clause listing    "],
      correct: [0],
      concept: "The order of columns in the SELECT clause directly determines the order of columns in the output result set. SELECT name, age, salary returns columns in that order. This is a fundamental SQL behavior. The physical storage order of columns in the table has no effect on the SELECT output order."
    }
  ]
};

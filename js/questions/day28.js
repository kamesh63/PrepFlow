window.QUIZ_DATA = window.QUIZ_DATA || {};
window.QUIZ_DATA["day28"] = {
  title: "DDL/DML & Dimensional Modeling",
  topics: ["DDL in Snowflake", "DML Operations", "Star Schema Design", "Dimension Tables", "Fact Tables"],
  questions: [
    {
      id: 1,
      type: "single",
      difficulty: 1,
      question: "Which DDL statement in Snowflake replaces an existing table with a new definition if it already exists?",
      options: ["CREATE TABLE IF NOT EXISTS", "CREATE OR REPLACE TABLE", "ALTER TABLE REPLACE", "DROP AND CREATE TABLE"],
      correct: [0],
      concept: "CREATE OR REPLACE TABLE drops the existing table and creates a new one in a single atomic statement. Unlike CREATE TABLE IF NOT EXISTS (which does nothing if the table exists), CREATE OR REPLACE always rebuilds the table. This is commonly used in development and CI/CD pipelines."
    },
    {
      id: 2,
      type: "single",
      difficulty: 1,
      question: "What does CREATE TABLE IF NOT EXISTS do when the table already exists in Snowflake?",
      options: ["It replaces the table with the new definition", "It does nothing and completes successfully without error", "It throws a duplicate table error", "It appends new columns from the definition"],
      correct: [1],
      concept: "CREATE TABLE IF NOT EXISTS is a safe idempotent operation. If the table already exists, the statement simply succeeds without making any changes or raising an error. This is useful in scripts that may run multiple times."
    },
    {
      id: 3,
      type: "single",
      difficulty: 1,
      question: "Which DDL command creates a new table and populates it with results from a SELECT query?",
      options: ["CREATE TABLE ... LIKE", "CREATE TABLE ... CLONE", "CREATE TABLE ... AS SELECT (CTAS)", "INSERT INTO ... SELECT"],
      correct: [2],
      concept: "CREATE TABLE AS SELECT (CTAS) creates a new table with a schema derived from the query output and immediately populates it with the query results. CREATE TABLE LIKE copies only the structure, CLONE creates a zero-copy clone, and INSERT INTO is a DML operation on an existing table."
    },
    {
      id: 4,
      type: "single",
      difficulty: 1,
      question: "What does CREATE TABLE ... LIKE copy from the source table?",
      options: ["Table structure and all data rows", "Only the column definitions and certain properties without data", "A zero-copy snapshot including data pointers", "The table structure plus grants and constraints"],
      correct: [1],
      concept: "CREATE TABLE LIKE copies the column definitions (names, data types, nullability) and some properties like clustering keys from the source table, but does NOT copy data, privileges, or constraints like foreign keys. It creates an empty table with the same structure."
    },
    {
      id: 5,
      type: "single",
      difficulty: 1,
      question: "Which DDL command is used to modify the schema of an existing Snowflake table, such as adding a column?",
      options: ["MODIFY TABLE", "UPDATE TABLE", "ALTER TABLE", "CHANGE TABLE"],
      correct: [2],
      concept: "ALTER TABLE is the standard DDL command for modifying an existing table\'s schema. It supports operations like ADD COLUMN, DROP COLUMN, RENAME COLUMN, ALTER COLUMN data type, and modifying table-level properties such as clustering keys or data retention."
    },
    {
      id: 6,
      type: "single",
      difficulty: 1,
      question: "What happens to a table\'s data when you execute DROP TABLE in Snowflake?",
      options: ["The data is immediately and permanently deleted from storage", "The table enters a retained state accessible via Time Travel and then Fail-safe", "The data is moved to an archive stage automatically", "The data is exported to a backup schema"],
      correct: [1],
      concept: "When you DROP TABLE in Snowflake, the table is not immediately purged. The data is retained for the Time Travel period (configurable, up to 90 days on Enterprise) and then enters the 7-day Fail-safe period. During Time Travel, the table can be recovered using UNDROP TABLE."
    },
    {
      id: 7,
      type: "single",
      difficulty: 1,
      question: "Which command restores a previously dropped table in Snowflake?",
      options: ["RESTORE TABLE", "RECOVER TABLE", "UNDROP TABLE", "ROLLBACK TABLE"],
      correct: [2],
      concept: "UNDROP TABLE restores a table that was previously dropped, as long as it is still within the Time Travel retention period. This command works for tables, schemas, and databases. If a table with the same name already exists, the UNDROP will fail with a naming conflict."
    },
    {
      id: 8,
      type: "single",
      difficulty: 1,
      question: "Which statement correctly describes the difference between TRUNCATE and DELETE in Snowflake?",
      options: ["TRUNCATE is a DML operation while DELETE is a DDL operation", "TRUNCATE removes all rows and is not recoverable; DELETE allows WHERE clause filtering", "TRUNCATE removes all rows quickly and is recoverable via Time Travel; DELETE can filter rows", "TRUNCATE and DELETE are functionally identical in Snowflake"],
      correct: [2],
      concept: "TRUNCATE TABLE removes all rows from a table very quickly and IS recoverable via Time Travel in Snowflake (unlike some other databases). DELETE can use a WHERE clause to selectively remove rows. Both are recoverable via Time Travel, but TRUNCATE is much faster for removing all rows."
    },
    {
      id: 9,
      type: "single",
      difficulty: 1,
      question: "Which type of Snowflake table persists until explicitly dropped and has both Time Travel and Fail-safe protection?",
      options: ["Temporary table", "Transient table", "Permanent table", "External table"],
      correct: [2],
      concept: "Permanent tables are the default table type in Snowflake. They persist until explicitly dropped and have full data protection with Time Travel (up to 90 days on Enterprise) and a 7-day Fail-safe period. Temporary tables are session-scoped, and transient tables lack Fail-safe."
    },
    {
      id: 10,
      type: "single",
      difficulty: 1,
      question: "What is the maximum Time Travel retention for a temporary table in Snowflake?",
      options: ["90 days", "7 days", "1 day", "0 days (no Time Travel)"],
      correct: [2],
      concept: "Temporary tables in Snowflake support a maximum Time Travel retention of 0 or 1 day. They do NOT have Fail-safe protection. Temporary tables exist only for the duration of the session that created them and are automatically dropped when the session ends."
    },
    {
      id: 11,
      type: "single",
      difficulty: 1,
      question: "Which Snowflake table type does NOT have Fail-safe protection but persists beyond the session?",
      options: ["Permanent table", "Temporary table", "Transient table", "External table"],
      correct: [2],
      concept: "Transient tables persist beyond the session (like permanent tables) but do NOT have the 7-day Fail-safe protection period. They support 0 or 1 day of Time Travel. This makes them suitable for data that can be easily recreated, reducing storage costs."
    },
    {
      id: 12,
      type: "single",
      difficulty: 1,
      question: "What is the basic syntax for inserting a single row into a Snowflake table?",
      options: ["INSERT TABLE t1 VALUES (1, \'a\')", "INSERT INTO t1 VALUES (1, \'a\')", "ADD ROW INTO t1 (1, \'a\')", "INSERT ROW t1 SET col1=1, col2=\'a\'"],
      correct: [1],
      concept: "The standard SQL INSERT syntax in Snowflake is INSERT INTO table_name VALUES (value1, value2, ...). You can also specify column names: INSERT INTO t1 (col1, col2) VALUES (1, \'a\'). Snowflake also supports multi-row inserts and INSERT INTO ... SELECT for bulk operations."
    },
    {
      id: 13,
      type: "single",
      difficulty: 1,
      question: "Which DML operation in Snowflake can perform INSERT, UPDATE, and DELETE in a single statement based on match conditions?",
      options: ["UPSERT", "INSERT OVERWRITE", "MERGE", "UPDATE OR INSERT"],
      correct: [2],
      concept: "The MERGE statement in Snowflake combines INSERT, UPDATE, and DELETE operations into a single atomic statement. It matches rows between a source and target table using a join condition and then executes different actions for matched and not-matched rows."
    },
    {
      id: 14,
      type: "single",
      difficulty: 1,
      question: "In a star schema, which component sits at the center and is connected to all dimension tables?",
      options: ["Dimension table", "Bridge table", "Fact table", "Lookup table"],
      correct: [2],
      concept: "In a star schema, the fact table sits at the center and contains measurable, quantitative data (facts/metrics). It connects to surrounding dimension tables through foreign key relationships. The star schema gets its name from this star-like pattern of a central fact table with radiating dimension tables."
    },
    {
      id: 15,
      type: "single",
      difficulty: 1,
      question: "What is a surrogate key in dimensional modeling?",
      options: ["A natural business key from the source system", "A system-generated artificial key with no business meaning", "A composite key made of multiple columns", "A foreign key referencing another table"],
      correct: [1],
      concept: "A surrogate key is an artificial, system-generated key (typically an integer) that uniquely identifies each row in a dimension table. Unlike natural keys (business keys), surrogate keys have no business meaning. They provide consistency, performance benefits, and support for slowly changing dimensions."
    },
    {
      id: 16,
      type: "single",
      difficulty: 1,
      question: "Which Snowflake feature can automatically generate sequential integer values for a surrogate key column?",
      options: ["AUTO_INCREMENT", "IDENTITY column property", "SERIAL data type", "ROWNUM function"],
      correct: [1],
      concept: "Snowflake uses the IDENTITY column property (or AUTOINCREMENT, which is a synonym) to automatically generate sequential integer values. The syntax is: column_name NUMBER IDENTITY(start, increment). Unlike some databases, Snowflake does not support SERIAL as a data type."
    },
    {
      id: 17,
      type: "single",
      difficulty: 1,
      question: "What does a dimension table typically store in a star schema?",
      options: ["Quantitative measures and metrics", "Descriptive attributes that provide context for facts", "Aggregated summary data for reporting", "Foreign keys to other fact tables"],
      correct: [1],
      concept: "Dimension tables store descriptive, textual, or categorical attributes that provide context to the numeric measures in fact tables. Examples include customer names, product descriptions, dates, and geographic regions. They are typically denormalized in a star schema for query simplicity."
    },
    {
      id: 18,
      type: "single",
      difficulty: 1,
      question: "In dimensional modeling, what is the \'grain\' of a fact table?",
      options: ["The total number of rows in the fact table", "The level of detail at which each row in the fact table is recorded", "The number of dimension tables connected to the fact table", "The size of each partition in the fact table"],
      correct: [1],
      concept: "The grain defines the level of detail (granularity) represented by each row in a fact table. For example, a sales fact table might have a grain of \'one row per product per transaction\' or \'one row per product per day per store\'. Defining the grain is a crucial first step in dimensional design."
    },
    {
      id: 19,
      type: "single",
      difficulty: 1,
      question: "Which type of measure can be summed across all dimensions meaningfully?",
      options: ["Semi-additive measure", "Non-additive measure", "Additive measure", "Derived measure"],
      correct: [2],
      concept: "Additive measures (like sales amount, quantity sold, or revenue) can be meaningfully summed across ALL dimensions (time, product, geography, etc.). Semi-additive measures can only be summed across some dimensions (e.g., account balance across accounts but not across time). Non-additive measures cannot be summed at all (e.g., ratios, percentages)."
    },
    {
      id: 20,
      type: "single",
      difficulty: 1,
      question: "What is a factless fact table?",
      options: ["A fact table with no rows", "A fact table that records events or relationships without any numeric measures", "A dimension table that has been mistakenly named as a fact table", "A fact table that stores only NULL values in measure columns"],
      correct: [1],
      concept: "A factless fact table captures events, conditions, or relationships that are important to track but have no associated numeric measures. Examples include student attendance (student attended class on date), promotional coverage (which products were promoted on which dates), or eligibility tracking."
    },
    {
      id: 21,
      type: "single",
      difficulty: 1,
      question: "Which ALTER TABLE operation adds a new column to an existing Snowflake table?",
      options: ["ALTER TABLE t1 APPEND COLUMN col1 VARCHAR", "ALTER TABLE t1 ADD COLUMN col1 VARCHAR", "ALTER TABLE t1 INSERT COLUMN col1 VARCHAR", "ALTER TABLE t1 CREATE COLUMN col1 VARCHAR"],
      correct: [1],
      concept: "The correct syntax to add a column is ALTER TABLE table_name ADD COLUMN column_name data_type. The keyword COLUMN is optional in Snowflake — ALTER TABLE t1 ADD col1 VARCHAR also works. New columns are added with NULL values for existing rows by default."
    },
    {
      id: 22,
      type: "single",
      difficulty: 1,
      question: "What does INSERT OVERWRITE do in Snowflake?",
      options: ["Inserts rows and updates any duplicates based on primary key", "Truncates the table first, then inserts the new data in a single atomic operation", "Overwrites specific rows that match a WHERE condition", "Appends data and removes old partitions automatically"],
      correct: [1],
      concept: "INSERT OVERWRITE INTO table_name SELECT ... first truncates the target table and then inserts the results of the SELECT query. This is performed atomically — if the INSERT fails, the original data remains intact. It is commonly used for full-refresh loading patterns."
    },
    {
      id: 23,
      type: "single",
      difficulty: 1,
      question: "Which DDL operation completely removes a table\'s structure, data, and metadata from Snowflake?",
      options: ["TRUNCATE TABLE", "DELETE FROM TABLE", "DROP TABLE", "REMOVE TABLE"],
      correct: [2],
      concept: "DROP TABLE removes the table definition, all data, and metadata. Unlike TRUNCATE (which only removes data but keeps the structure) or DELETE (which removes specific rows), DROP TABLE eliminates the table entirely. The data can still be recovered via UNDROP during the Time Travel period."
    },
    {
      id: 24,
      type: "single",
      difficulty: 1,
      question: "Which keyword is used in the MERGE statement to handle rows that exist in the source but not in the target?",
      options: ["WHEN MATCHED THEN", "WHEN NOT MATCHED THEN", "WHEN EXISTS THEN", "WHEN MISSING THEN"],
      correct: [1],
      concept: "In a MERGE statement, WHEN NOT MATCHED THEN INSERT is used for rows that exist in the source but not in the target (based on the ON condition). WHEN MATCHED THEN UPDATE or DELETE handles rows that exist in both source and target. This makes MERGE ideal for upsert operations."
    },
    {
      id: 25,
      type: "single",
      difficulty: 1,
      question: "In a star schema, how are dimension tables typically modeled?",
      options: ["Fully normalized into third normal form", "Denormalized with descriptive attributes in a single wide table", "Split into multiple sub-dimension tables with foreign keys", "Stored as semi-structured VARIANT data"],
      correct: [1],
      concept: "In a star schema, dimension tables are typically denormalized — meaning all descriptive attributes are stored in a single wide table rather than being split across multiple normalized tables. This simplifies queries, improves read performance, and makes the schema easier to understand for business users."
    },
    {
      id: 26,
      type: "single",
      difficulty: 1,
      question: "What is a Slowly Changing Dimension (SCD) in the context of data warehousing?",
      options: ["A dimension table that is updated infrequently", "A technique for tracking historical changes to dimension attributes over time", "A dimension table with very few rows", "A dimension table that uses incremental loading"],
      correct: [1],
      concept: "Slowly Changing Dimensions (SCDs) are techniques for managing and tracking changes to dimension attributes over time. For example, when a customer changes their address, SCDs define how to handle the old vs new values. Common types include Type 1 (overwrite), Type 2 (add new row with versioning), and Type 3 (add new column)."
    },
    {
      id: 27,
      type: "single",
      difficulty: 1,
      question: "Which Snowflake function generates a universally unique identifier that can be used as a surrogate key?",
      options: ["GENERATE_UUID()", "UUID_STRING()", "NEW_GUID()", "RANDOM_ID()"],
      correct: [1],
      concept: "UUID_STRING() generates a version 4 (random) UUID in Snowflake, returning a 128-bit identifier as a string in the format xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx. While IDENTITY columns generate sequential integers, UUID_STRING() provides globally unique identifiers suitable for distributed systems."
    },
    {
      id: 28,
      type: "single",
      difficulty: 1,
      question: "Which type of slowly changing dimension overwrites the old value with the new value without keeping history?",
      options: ["SCD Type 0", "SCD Type 1", "SCD Type 2", "SCD Type 3"],
      correct: [1],
      concept: "SCD Type 1 simply overwrites the old attribute value with the new value. No history is maintained. This is the simplest approach and is appropriate when historical accuracy is not required. For example, correcting a misspelled customer name would typically use Type 1."
    },
    {
      id: 29,
      type: "single",
      difficulty: 1,
      question: "What is the purpose of a SEQUENCE object in Snowflake?",
      options: ["To define the order of columns in a table", "To generate unique sequential numbers across sessions and statements", "To enforce the execution order of SQL statements", "To sort query results automatically"],
      correct: [1],
      concept: "A SEQUENCE in Snowflake generates unique, sequential numeric values. Unlike IDENTITY (which is bound to a specific table column), a SEQUENCE is a standalone schema-level object that can be shared across multiple tables. Syntax: CREATE SEQUENCE seq1 START = 1 INCREMENT = 1."
    },
    {
      id: 30,
      type: "single",
      difficulty: 1,
      question: "Which Snowflake command removes all data from a table but preserves the table structure?",
      options: ["DROP TABLE", "DELETE FROM table_name", "TRUNCATE TABLE", "REMOVE DATA FROM table_name"],
      correct: [2],
      concept: "TRUNCATE TABLE removes all rows from a table while keeping the table structure (columns, constraints, properties) intact. It is faster than DELETE without a WHERE clause because it does not generate individual row delete operations. The truncated data is recoverable via Time Travel."
    },
    {
      id: 31,
      type: "single",
      difficulty: 1,
      question: "What does a CREATE TABLE ... CLONE statement create in Snowflake?",
      options: ["A full physical copy of the table data", "A zero-copy clone that shares underlying storage with the source", "An empty table with the same column definitions", "A view that references the original table"],
      correct: [1],
      concept: "CREATE TABLE ... CLONE creates a zero-copy clone that initially shares the same underlying micro-partitions as the source table. No data is physically copied at clone creation — only metadata is duplicated. Storage costs only accrue when data diverges between the clone and source through modifications."
    },
    {
      id: 32,
      type: "single",
      difficulty: 1,
      question: "In a star schema, which type of key in the fact table references a dimension table?",
      options: ["Primary key", "Natural key", "Foreign key", "Candidate key"],
      correct: [2],
      concept: "Fact tables contain foreign keys that reference the primary keys (surrogate keys) of dimension tables. These foreign keys establish the relationships between the central fact table and the surrounding dimension tables, forming the star pattern of the schema."
    },
    {
      id: 33,
      type: "single",
      difficulty: 1,
      question: "Which measure type can be summed across some dimensions but not all?",
      options: ["Additive measure", "Semi-additive measure", "Non-additive measure", "Derived measure"],
      correct: [1],
      concept: "Semi-additive measures can be summed across some dimensions but not all. The classic example is account balance — you can sum balances across accounts (customers), but summing balances across time periods is meaningless. Instead, you would use AVG, MIN, MAX, or take the latest snapshot for the time dimension."
    },
    {
      id: 34,
      type: "single",
      difficulty: 1,
      question: "What is the difference between a permanent table and a transient table in terms of Fail-safe?",
      options: ["Both have 7 days of Fail-safe protection", "Permanent tables have 7-day Fail-safe; transient tables have no Fail-safe", "Transient tables have 7-day Fail-safe; permanent tables have none", "Neither type has Fail-safe protection"],
      correct: [1],
      concept: "Permanent tables include both Time Travel (up to 90 days on Enterprise) and 7-day Fail-safe protection. Transient tables have Time Travel (0-1 day only) but NO Fail-safe period. This makes transient tables less protected but cheaper to store, suitable for easily reproducible data."
    },
    {
      id: 35,
      type: "single",
      difficulty: 1,
      question: "Which SCD type adds a new row for each change, preserving the complete history of attribute values?",
      options: ["SCD Type 0", "SCD Type 1", "SCD Type 2", "SCD Type 3"],
      correct: [2],
      concept: "SCD Type 2 inserts a new row with the changed attribute value while keeping the old row intact. Additional columns like effective_date, end_date, and is_current flag are used to track versioning. This approach preserves complete history but increases the row count in the dimension table."
    },
    {
      id: 36,
      type: "single",
      difficulty: 2,
      question: "You run CREATE OR REPLACE TABLE sales AS SELECT * FROM raw_sales WHERE year = 2024. What happens if the sales table already exists?",
      options: ["The statement fails with a duplicate table error", "The existing table is dropped and a new table is created with the filtered data", "The filtered data is appended to the existing table", "Only the table schema is replaced but existing data is preserved"],
      correct: [1],
      concept: "CREATE OR REPLACE TABLE combined with AS SELECT (CTAS) first drops the existing table and then creates a new table populated with the query results. This is an atomic operation — the old table\'s data enters Time Travel. All privileges on the old table are lost and must be re-granted."
    },
    {
      id: 37,
      type: "single",
      difficulty: 2,
      question: "What happens when you execute UNDROP TABLE and a table with the same name already exists in the schema?",
      options: ["The existing table is automatically renamed with a suffix", "The UNDROP operation fails with a naming conflict error", "The dropped table replaces the existing table", "The dropped table is restored with a system-generated name"],
      correct: [1],
      concept: "UNDROP TABLE fails if an object with the same name already exists in the target schema. To resolve this, you must first rename or drop the existing table before executing UNDROP. This prevents accidental overwrites and ensures explicit control over object management."
    },
    {
      id: 38,
      type: "single",
      difficulty: 2,
      question: "In Snowflake, what is the effect of setting DATA_RETENTION_TIME_IN_DAYS to 0 on a permanent table?",
      options: ["Time Travel is completely disabled but Fail-safe still applies", "Both Time Travel and Fail-safe are disabled", "Time Travel defaults to 1 day regardless of the setting", "The table is automatically converted to a transient table"],
      correct: [0],
      concept: "Setting DATA_RETENTION_TIME_IN_DAYS to 0 on a permanent table disables Time Travel for that table, meaning you cannot query historical data or use UNDROP. However, the 7-day Fail-safe period still applies to permanent tables regardless of the Time Travel setting, providing last-resort data recovery."
    },
    {
      id: 39,
      type: "single",
      difficulty: 2,
      question: "Which MERGE clause would you use to delete rows from the target table that match the source?",
      options: ["WHEN NOT MATCHED THEN DELETE", "WHEN MATCHED THEN DELETE", "WHEN MATCHED THEN REMOVE", "WHEN EXISTS THEN DELETE"],
      correct: [1],
      concept: "WHEN MATCHED THEN DELETE removes rows from the target table that have matching rows in the source table based on the ON condition. This is useful for synchronization scenarios where you need to remove records from the target that appear in a \'deletions\' source feed."
    },
    {
      id: 40,
      type: "single",
      difficulty: 2,
      question: "A MERGE statement has both WHEN MATCHED THEN UPDATE and WHEN NOT MATCHED THEN INSERT clauses. What pattern does this implement?",
      options: ["Full outer join pattern", "Delete and reload pattern", "Upsert pattern (update existing, insert new)", "Incremental append pattern"],
      correct: [2],
      concept: "A MERGE with WHEN MATCHED THEN UPDATE and WHEN NOT MATCHED THEN INSERT implements the upsert pattern — existing records are updated and new records are inserted. This is the most common MERGE use case in ETL/ELT pipelines for maintaining slowly changing or incrementally updated tables."
    },
    {
      id: 41,
      type: "single",
      difficulty: 2,
      question: "You need to update a table using data from another table. Which syntax is correct in Snowflake?",
      options: ["UPDATE t1 SET t1.col = t2.col FROM t1 JOIN t2 ON t1.id = t2.id", "UPDATE t1 SET t1.col = t2.col FROM t2 WHERE t1.id = t2.id", "UPDATE t1 INNER JOIN t2 ON t1.id = t2.id SET t1.col = t2.col", "UPDATE t1, t2 SET t1.col = t2.col WHERE t1.id = t2.id"],
      correct: [1],
      concept: "Snowflake supports UPDATE with a FROM clause for joins: UPDATE target SET target.col = source.col FROM source WHERE target.id = source.id. The FROM clause specifies the source table, and the WHERE clause provides the join condition. This differs from MySQL-style multi-table UPDATE syntax."
    },
    {
      id: 42,
      type: "single",
      difficulty: 2,
      question: "Which DELETE syntax correctly uses a subquery to remove specific rows in Snowflake?",
      options: ["DELETE FROM orders WHERE customer_id IN (SELECT id FROM inactive_customers)", "DELETE orders JOIN inactive_customers ON orders.customer_id = inactive_customers.id", "DELETE FROM orders USING inactive_customers WHERE orders.customer_id = inactive_customers.id", "Both A and C are valid syntax in Snowflake"],
      correct: [3],
      concept: "Snowflake supports multiple DELETE syntaxes. DELETE ... WHERE col IN (subquery) uses a standard subquery approach. DELETE ... USING ... WHERE is Snowflake\'s join-based delete syntax, similar to UPDATE FROM. Both achieve the same result of deleting rows based on data in another table."
    },
    {
      id: 43,
      type: "single",
      difficulty: 2,
      question: "How does Snowflake handle the IDENTITY property when data is inserted via CTAS (CREATE TABLE AS SELECT)?",
      options: ["IDENTITY values are auto-generated for the new table", "IDENTITY properties are not carried over in CTAS operations", "IDENTITY values from the source are preserved exactly", "CTAS fails if the source table has IDENTITY columns"],
      correct: [1],
      concept: "When using CTAS, the IDENTITY/AUTOINCREMENT property is NOT carried over to the new table. The new table\'s column will be a regular numeric column containing the values from the source. To have auto-incrementing behavior in the new table, you need to explicitly define it with ALTER TABLE."
    },
    {
      id: 44,
      type: "single",
      difficulty: 2,
      question: "In a Snowflake MERGE statement, what happens if multiple source rows match the same target row?",
      options: ["Only the first matching source row is used", "All matching source rows are applied sequentially", "The MERGE statement produces a non-deterministic error", "The MERGE silently uses the last matching row"],
      correct: [2],
      concept: "If multiple source rows match a single target row in a MERGE, Snowflake raises a non-deterministic error because it cannot determine which source row\'s values to use for the update. To avoid this, ensure the join condition in the ON clause produces a one-to-one match, or pre-aggregate the source."
    },
    {
      id: 45,
      type: "single",
      difficulty: 2,
      question: "Which Snowflake object can be shared across multiple tables for generating unique keys, unlike IDENTITY?",
      options: ["AUTO_INCREMENT", "SEQUENCE", "GENERATOR", "KEY_POOL"],
      correct: [1],
      concept: "A SEQUENCE is a standalone database object that can be referenced in INSERT statements for multiple tables, unlike IDENTITY which is bound to a single column on a single table. You use seq_name.NEXTVAL to get the next value. Sequences guarantee uniqueness but not gap-free sequential numbers."
    },
    {
      id: 46,
      type: "single",
      difficulty: 2,
      question: "When implementing SCD Type 2 in Snowflake using MERGE, which columns are typically added to the dimension table?",
      options: ["partition_key, cluster_key, sort_key", "effective_start_date, effective_end_date, is_current_flag", "created_by, updated_by, approved_by", "row_count, byte_count, version_count"],
      correct: [1],
      concept: "SCD Type 2 implementation requires versioning columns: effective_start_date (when this version became active), effective_end_date (when this version was superseded, NULL or far-future for current), and is_current_flag (boolean indicating the active record). These enable historical queries at any point in time."
    },
    {
      id: 47,
      type: "single",
      difficulty: 2,
      question: "A star schema has a DATE_DIM dimension. Which attribute would NOT typically be found in this table?",
      options: ["Day of week name", "Fiscal quarter", "Holiday indicator flag", "Total daily sales amount"],
      correct: [3],
      concept: "A date dimension table contains descriptive attributes about dates: day of week, month, quarter, fiscal periods, holiday flags, weekend indicators, etc. Numeric measures like total daily sales amount belong in the fact table, not the dimension table. Dimensions provide context; facts provide measurements."
    },
    {
      id: 48,
      type: "single",
      difficulty: 2,
      question: "What is a conformed dimension in data warehousing?",
      options: ["A dimension used in exactly one fact table", "A dimension shared across multiple fact tables with consistent attributes", "A dimension that has been fully normalized", "A dimension that changes less than once per year"],
      correct: [1],
      concept: "A conformed dimension is a dimension that is shared across multiple fact tables or data marts with consistent definitions, attributes, and keys. For example, a DATE_DIM or CUSTOMER_DIM used identically across Sales, Inventory, and HR fact tables. This enables cross-process analysis and consistent reporting."
    },
    {
      id: 49,
      type: "single",
      difficulty: 2,
      question: "In a fact table, what does a degenerate dimension represent?",
      options: ["A dimension key that references a separate dimension table", "A dimension attribute stored directly in the fact table with no separate dimension table", "A dimension that has been deprecated and is no longer used", "A dimension that contains only NULL values"],
      correct: [1],
      concept: "A degenerate dimension is a dimension key or attribute stored directly in the fact table rather than in a separate dimension table. Common examples include invoice numbers, order numbers, and transaction IDs. These values provide useful grouping but don\'t warrant a separate dimension table."
    },
    {
      id: 50,
      type: "single",
      difficulty: 2,
      question: "Which Snowflake command can rename a table?",
      options: ["RENAME TABLE old_name TO new_name", "ALTER TABLE old_name RENAME TO new_name", "MODIFY TABLE old_name SET NAME = new_name", "UPDATE TABLE old_name NAME new_name"],
      correct: [1],
      concept: "ALTER TABLE table_name RENAME TO new_name changes the name of an existing table. This is a metadata-only operation and does not affect the underlying data. Renaming is useful before UNDROP operations to resolve naming conflicts or during schema refactoring."
    },
    {
      id: 51,
      type: "single",
      difficulty: 2,
      question: "You create a transient table in Snowflake. Which statement is true about its behavior?",
      options: ["It is automatically dropped when the session ends", "It persists until explicitly dropped but has no Fail-safe period", "It has up to 90 days of Time Travel on Enterprise edition", "It cannot be cloned or shared"],
      correct: [1],
      concept: "Transient tables persist beyond the session that created them — they must be explicitly dropped. However, they have NO Fail-safe period and support only 0 or 1 day of Time Travel. This makes them ideal for staging or ETL intermediate tables where data can be easily recreated."
    },
    {
      id: 52,
      type: "single",
      difficulty: 2,
      question: "What happens to the auto-increment counter when you TRUNCATE a table with an IDENTITY column in Snowflake?",
      options: ["The counter resets to the initial start value", "The counter continues from where it left off", "The counter resets to 0 regardless of the start value", "The IDENTITY property is removed from the column"],
      correct: [1],
      concept: "In Snowflake, TRUNCATE does NOT reset the IDENTITY counter. The auto-increment counter continues from the last generated value. This differs from some other databases. To reset the counter, you would need to recreate the table or use ALTER TABLE to modify the IDENTITY property."
    },
    {
      id: 53,
      type: "single",
      difficulty: 2,
      question: "Which is a key difference between a snowflake schema and a star schema?",
      options: ["Star schema has fact tables; snowflake schema does not", "Star schema uses denormalized dimensions; snowflake schema normalizes dimensions", "Snowflake schema is only available in Snowflake Enterprise edition", "Star schema cannot handle slowly changing dimensions"],
      correct: [1],
      concept: "The key difference is in dimension table design. A star schema uses denormalized (flat) dimension tables, while a snowflake schema normalizes dimension tables into multiple related tables. For example, a star schema has one PRODUCT_DIM; a snowflake schema might split it into PRODUCT, CATEGORY, and BRAND tables."
    },
    {
      id: 54,
      type: "single",
      difficulty: 2,
      question: "When using INSERT OVERWRITE in Snowflake, what happens if the SELECT query returns zero rows?",
      options: ["The operation fails with an error", "The target table retains its original data", "The target table is truncated and left empty", "The operation is skipped silently"],
      correct: [2],
      concept: "INSERT OVERWRITE always truncates the table first, then inserts the results. If the SELECT returns zero rows, the table is truncated but no rows are inserted, resulting in an empty table. This is important to understand to avoid accidentally emptying production tables."
    },
    {
      id: 55,
      type: "single",
      difficulty: 2,
      question: "What is the purpose of a role-playing dimension in a star schema?",
      options: ["A dimension that stores roles and permissions", "A single physical dimension table used for multiple logical purposes through different foreign keys", "A dimension that combines attributes from multiple source tables", "A dimension used exclusively for security filtering"],
      correct: [1],
      concept: "A role-playing dimension is a single physical dimension table that plays multiple logical roles in a fact table. The classic example is a DATE dimension referenced by multiple foreign keys: order_date_key, ship_date_key, and delivery_date_key all point to the same DATE_DIM table but serve different analytical purposes."
    },
    {
      id: 56,
      type: "single",
      difficulty: 2,
      question: "Which approach in Snowflake creates a table that is an exact structural copy of another including clustering keys but without data?",
      options: ["CREATE TABLE t2 AS SELECT * FROM t1 WHERE 1=0", "CREATE TABLE t2 LIKE t1", "CREATE TABLE t2 CLONE t1", "CREATE TABLE t2 COPY t1 STRUCTURE_ONLY"],
      correct: [1],
      concept: "CREATE TABLE LIKE copies the column definitions, default values, and clustering keys without copying any data. CTAS with WHERE 1=0 also creates an empty table but may not preserve all properties like clustering keys. CLONE would copy data (zero-copy). COPY STRUCTURE_ONLY is not valid syntax."
    },
    {
      id: 57,
      type: "single",
      difficulty: 2,
      question: "A fact table tracks daily product inventory levels. What type of measure is the \'ending_inventory_balance\'?",
      options: ["Additive measure", "Semi-additive measure", "Non-additive measure", "Factless measure"],
      correct: [1],
      concept: "Ending inventory balance is a classic semi-additive measure. You can sum it across products (total inventory across all products at a point in time) or across locations, but you CANNOT meaningfully sum it across time — adding Monday\'s balance to Tuesday\'s balance is meaningless. Use snapshot values or averages for time."
    },
    {
      id: 58,
      type: "single",
      difficulty: 2,
      question: "How do you drop a column from an existing table in Snowflake?",
      options: ["ALTER TABLE t1 DROP COLUMN col1", "DELETE COLUMN col1 FROM t1", "MODIFY TABLE t1 REMOVE col1", "ALTER TABLE t1 REMOVE COLUMN col1"],
      correct: [0],
      concept: "ALTER TABLE table_name DROP COLUMN column_name removes a column from an existing table. This operation is metadata-only in Snowflake — the underlying micro-partitions are not immediately rewritten. The dropped column\'s data is eventually reclaimed during normal table maintenance."
    },
    {
      id: 59,
      type: "single",
      difficulty: 2,
      question: "What distinguishes a junk dimension from other dimension types?",
      options: ["It stores obsolete data that is no longer used", "It groups low-cardinality flags and indicators into a single table", "It contains error records from failed ETL processes", "It temporarily holds data before loading into fact tables"],
      correct: [1],
      concept: "A junk dimension combines multiple low-cardinality flags, indicators, and codes into a single dimension table rather than cluttering the fact table or creating many small dimension tables. Examples: payment_type, is_rush_order, shipping_method. The junk dimension is pre-populated with all possible combinations."
    },
    {
      id: 60,
      type: "single",
      difficulty: 2,
      question: "In Snowflake, what is the maximum number of WHEN clauses allowed in a single MERGE statement?",
      options: ["One WHEN MATCHED and one WHEN NOT MATCHED only", "Up to 3 WHEN MATCHED and 3 WHEN NOT MATCHED clauses", "No practical limit on WHEN clauses", "Two WHEN MATCHED and two WHEN NOT MATCHED clauses"],
      correct: [0],
      concept: "Snowflake\'s MERGE supports multiple WHEN MATCHED and WHEN NOT MATCHED clauses, each with optional AND conditions. While there are practical limits, Snowflake allows you to have clauses like WHEN MATCHED AND condition1 THEN UPDATE, WHEN MATCHED AND condition2 THEN DELETE, providing flexible conditional logic."
    },
    {
      id: 61,
      type: "multi",
      difficulty: 2,
      question: "Which of the following statements are true about temporary tables in Snowflake? (Select all that apply)",
      options: ["They are automatically dropped at the end of the session", "They support up to 90 days of Time Travel", "They do not have Fail-safe protection", "They are visible only to the session that created them"],
      correct: [0, 2, 3],
      concept: "Temporary tables in Snowflake: (1) are automatically dropped when the session ends, (2) support only 0 or 1 day of Time Travel (NOT 90 days), (3) have NO Fail-safe protection, and (4) are visible only within the session that created them — other concurrent sessions cannot see or access them."
    },
    {
      id: 62,
      type: "multi",
      difficulty: 2,
      question: "Which objects can be created using the CREATE OR REPLACE syntax in Snowflake? (Select all that apply)",
      options: ["Tables", "Views", "Stages", "Warehouses"],
      correct: [0, 1, 2, 3],
      concept: "CREATE OR REPLACE is supported for virtually all Snowflake objects including tables, views, stages, warehouses, databases, schemas, file formats, pipes, streams, tasks, functions, procedures, and more. It atomically drops the existing object and creates a new one."
    },
    {
      id: 63,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are valid methods for generating surrogate keys in Snowflake? (Select all that apply)",
      options: ["IDENTITY column property", "SEQUENCE object with NEXTVAL", "UUID_STRING() function", "HASH() function on natural key columns"],
      correct: [0, 1, 2],
      concept: "Snowflake supports surrogate key generation via: IDENTITY/AUTOINCREMENT (sequential integers tied to a column), SEQUENCE objects (standalone generators usable across tables), and UUID_STRING() (globally unique identifiers). HASH() creates deterministic hashes useful for comparison but is not typically used as a surrogate key generator."
    },
    {
      id: 64,
      type: "multi",
      difficulty: 2,
      question: "Which operations does the MERGE statement support in its WHEN MATCHED clause? (Select all that apply)",
      options: ["UPDATE", "DELETE", "INSERT", "TRUNCATE"],
      correct: [0, 1],
      concept: "The WHEN MATCHED clause in a MERGE statement supports UPDATE and DELETE operations. INSERT is only valid in the WHEN NOT MATCHED clause (for rows in the source that don\'t exist in the target). TRUNCATE is a table-level DDL operation and is not valid within a MERGE statement."
    },
    {
      id: 65,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are characteristics of a fact table in a star schema? (Select all that apply)",
      options: ["Contains foreign keys to dimension tables", "Stores quantitative measures and metrics", "Is typically the largest table in the schema by row count", "Contains primarily denormalized descriptive text attributes"],
      correct: [0, 1, 2],
      concept: "Fact tables: (1) contain foreign keys linking to dimension tables, (2) store quantitative measures like revenue, quantity, and cost, (3) are typically the largest tables due to transactional-level granularity. Denormalized descriptive attributes belong in dimension tables, not fact tables."
    },
    {
      id: 66,
      type: "multi",
      difficulty: 2,
      question: "Which SCD types preserve historical values of dimension attributes? (Select all that apply)",
      options: ["SCD Type 0 (retain original)", "SCD Type 1 (overwrite)", "SCD Type 2 (add new row)", "SCD Type 3 (add new column)"],
      correct: [0, 2, 3],
      concept: "SCD Type 0 preserves history by never changing the original value. SCD Type 2 preserves full history by adding new rows for each change. SCD Type 3 preserves limited history by adding a column for the previous value. SCD Type 1 overwrites old values, so history is lost."
    },
    {
      id: 67,
      type: "multi",
      difficulty: 2,
      question: "Which of the following correctly describe the behavior of TRUNCATE TABLE in Snowflake? (Select all that apply)",
      options: ["It is a DDL operation, not a DML operation", "The truncated data is recoverable via Time Travel", "It resets the IDENTITY counter to the start value", "It preserves the table structure and privileges"],
      correct: [0, 1, 3],
      concept: "TRUNCATE TABLE in Snowflake: (1) is classified as a DDL operation, (2) the data IS recoverable via Time Travel, (3) does NOT reset the IDENTITY counter — it continues from the last value, (4) preserves the table structure, column definitions, and privileges."
    },
    {
      id: 68,
      type: "multi",
      difficulty: 2,
      question: "Which ALTER TABLE operations are supported in Snowflake? (Select all that apply)",
      options: ["ADD COLUMN", "DROP COLUMN", "RENAME COLUMN", "CHANGE column data type from VARCHAR to NUMBER"],
      correct: [0, 1, 2],
      concept: "Snowflake supports ADD COLUMN, DROP COLUMN, and RENAME COLUMN operations via ALTER TABLE. However, changing a column\'s data type is very limited — you can increase VARCHAR length or change NUMBER precision, but you cannot change from VARCHAR to NUMBER or between incompatible types."
    },
    {
      id: 69,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are examples of non-additive measures? (Select all that apply)",
      options: ["Unit price", "Profit margin percentage", "Total revenue", "Temperature reading"],
      correct: [0, 1],
      concept: "Non-additive measures cannot be meaningfully summed across any dimension. Unit price and profit margin percentage are non-additive — summing prices or percentages across products or time is meaningless. Total revenue is fully additive. Temperature is semi-additive (can average but not sum meaningfully)."
    },
    {
      id: 70,
      type: "multi",
      difficulty: 2,
      question: "In Snowflake, which table types support a Data Retention period of 0 to 1 day only? (Select all that apply)",
      options: ["Permanent tables", "Temporary tables", "Transient tables", "External tables"],
      correct: [1, 2],
      concept: "Temporary and transient tables support only 0 or 1 day of Time Travel retention. Permanent tables can have 0-1 day (Standard edition) or 0-90 days (Enterprise+). External tables don\'t have Time Travel as the data is stored outside Snowflake."
    },
    {
      id: 71,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are typical attributes found in a Customer dimension table? (Select all that apply)",
      options: ["Customer name and email address", "Customer segment classification", "Total customer lifetime purchase amount", "Customer registration date"],
      correct: [0, 1, 3],
      concept: "Dimension tables store descriptive attributes: customer name, email, segment, and registration date are descriptive attributes. Total lifetime purchase amount is a measure that belongs in a fact table or is calculated via aggregation — it is not a static descriptive attribute of the customer."
    },
    {
      id: 72,
      type: "multi",
      difficulty: 2,
      question: "Which of the following scenarios would benefit from using a factless fact table? (Select all that apply)",
      options: ["Tracking student attendance at classes", "Recording which products are covered by a promotion", "Storing daily sales revenue by product", "Capturing event occurrences without measurable values"],
      correct: [0, 1, 3],
      concept: "Factless fact tables are ideal for tracking events, relationships, or coverage without numeric measures: student attendance (who attended what), promotional coverage (which products were promoted when), and event occurrences. Daily sales revenue has a numeric measure and belongs in a regular fact table."
    },
    {
      id: 73,
      type: "multi",
      difficulty: 2,
      question: "Which properties are preserved when using CREATE TABLE ... LIKE in Snowflake? (Select all that apply)",
      options: ["Column names and data types", "Clustering keys", "Data in the table", "Table-level comments"],
      correct: [0, 1],
      concept: "CREATE TABLE LIKE preserves column definitions (names, types, defaults, nullability) and clustering keys. It does NOT copy data (the new table is empty), and table-level comments are not always preserved. Privileges and constraints like foreign keys are also not copied."
    },
    {
      id: 74,
      type: "multi",
      difficulty: 2,
      question: "Which DDL statements in Snowflake result in data entering the Time Travel retention period? (Select all that apply)",
      options: ["DROP TABLE", "TRUNCATE TABLE", "ALTER TABLE ADD COLUMN", "CREATE OR REPLACE TABLE"],
      correct: [0, 1, 3],
      concept: "DROP TABLE, TRUNCATE TABLE, and CREATE OR REPLACE TABLE all cause data to enter Time Travel because they result in data loss or modification. ALTER TABLE ADD COLUMN is a metadata-only operation that does not modify existing data, so no Time Travel versioning is triggered."
    },
    {
      id: 75,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are valid Snowflake DDL commands for managing tables? (Select all that apply)",
      options: ["CREATE TABLE", "ALTER TABLE", "UNDROP TABLE", "REFRESH TABLE"],
      correct: [0, 1, 2],
      concept: "CREATE TABLE, ALTER TABLE, and UNDROP TABLE are valid DDL commands for managing tables. REFRESH TABLE is not a valid command — you might be thinking of ALTER EXTERNAL TABLE REFRESH or ALTER MATERIALIZED VIEW, which refresh external tables or materialized views respectively."
    },
    {
      id: 76,
      type: "single",
      difficulty: 3,
      question: "You execute: CREATE TABLE t2 CLONE t1; then DROP TABLE t1; then UNDROP TABLE t1; What is the state of t1 and t2?",
      options: ["Both t1 and t2 exist independently with the same data", "Only t2 exists; UNDROP fails because t1 was cloned", "t1 is restored and t2 is automatically dropped", "UNDROP fails because cloned tables cannot be undropped"],
      correct: [0],
      concept: "Cloning and UNDROP are independent operations. CLONE creates an independent copy (sharing underlying storage). DROP puts t1 in Time Travel. UNDROP restores t1. After all operations, both t1 and t2 exist as independent tables. Cloning does not affect the ability to UNDROP the source table."
    },
    {
      id: 77,
      type: "single",
      difficulty: 3,
      question: "A MERGE statement runs but no rows match the ON condition and the statement only has WHEN MATCHED THEN UPDATE. What is the result?",
      options: ["The statement fails with an error", "Zero rows are updated and the statement succeeds", "All source rows are inserted into the target", "The target table is truncated"],
      correct: [1],
      concept: "If no rows match the ON condition and there is no WHEN NOT MATCHED clause, the MERGE simply completes successfully with zero rows affected. MERGE does not fail when no rows match — it is a valid outcome. Without a WHEN NOT MATCHED clause, unmatched source rows are ignored."
    },
    {
      id: 78,
      type: "single",
      difficulty: 3,
      question: "You have a permanent table with DATA_RETENTION_TIME_IN_DAYS=90. You convert it to a transient table using CREATE OR REPLACE TRANSIENT TABLE. What is the maximum retention now?",
      options: ["90 days (setting is preserved)", "7 days", "1 day", "0 days (transient tables have no Time Travel)"],
      correct: [2],
      concept: "Transient tables support a maximum of 1 day of Time Travel, regardless of the previous setting. When you CREATE OR REPLACE the permanent table as transient, the 90-day retention is lost. Additionally, the new transient table has no Fail-safe period. The old table\'s data enters the permanent table\'s Time Travel."
    },
    {
      id: 79,
      type: "single",
      difficulty: 3,
      question: "You need to implement SCD Type 2 using MERGE in Snowflake. Which approach correctly handles both inserting new records and expiring old records?",
      options: ["A single MERGE with WHEN MATCHED THEN UPDATE to expire and WHEN NOT MATCHED THEN INSERT for new", "Two separate statements: an UPDATE to expire followed by an INSERT for new records", "A single MERGE can handle this entirely since it processes expire+insert atomically in one pass", "Both A and B are valid, but A cannot handle the insert of the new version of changed records"],
      correct: [3],
      concept: "A single MERGE can UPDATE the existing record (set end_date, is_current=false) and INSERT truly new records, but it cannot also INSERT the new version of a changed record in the same pass (the changed record matches). Typically, SCD Type 2 requires a two-step process or using a MERGE followed by an INSERT for the new versions of changed records."
    },
    {
      id: 80,
      type: "single",
      difficulty: 3,
      question: "A Snowflake table has a SEQUENCE-based surrogate key. Two concurrent sessions call seq.NEXTVAL simultaneously. What happens?",
      options: ["Both sessions get the same value causing a duplicate key", "One session blocks until the other completes", "Each session gets a unique value but gaps may appear in the sequence", "The sequence throws a concurrency conflict error"],
      correct: [2],
      concept: "Snowflake SEQUENCES are designed for concurrent access. Each session gets a unique value guaranteed, but the values may not be strictly sequential — gaps can appear. This is because Snowflake pre-allocates ranges of sequence values to different compute nodes for performance, which can leave gaps."
    },
    {
      id: 81,
      type: "single",
      difficulty: 3,
      question: "You execute DROP TABLE t1; CREATE TABLE t1 (id INT); DROP TABLE t1; UNDROP TABLE t1; Which version of t1 is restored?",
      options: ["The original t1 before any DROP", "The most recently dropped t1 (id INT)", "Both versions are restored under different names", "UNDROP fails because multiple dropped versions exist"],
      correct: [1],
      concept: "UNDROP restores the most recently dropped version of the object. In this scenario, the second DROP TABLE t1 (the simple INT table) is the most recent, so UNDROP restores that version. The original t1 can potentially be recovered by running UNDROP again after renaming the restored table."
    },
    {
      id: 82,
      type: "single",
      difficulty: 3,
      question: "You run INSERT OVERWRITE INTO target SELECT * FROM source inside a transaction that is later rolled back. What is the state of the target table?",
      options: ["The target table is empty (truncation persists but insert is rolled back)", "The target table has its original data restored", "The target table has the source data (overwrite is not rolled back)", "The target table is dropped"],
      correct: [1],
      concept: "INSERT OVERWRITE within a transaction is fully atomic with respect to the transaction. If the transaction is rolled back, both the truncation and the insertion are rolled back, restoring the target table to its original state. Snowflake\'s MVCC ensures transactional consistency."
    },
    {
      id: 83,
      type: "single",
      difficulty: 3,
      question: "A star schema fact table has grain defined as \'one row per order line item per day.\' A single order has 5 line items. How many fact rows does this order generate per day?",
      options: ["1 row (one per order)", "5 rows (one per line item)", "Depends on the number of dimension tables", "5 rows multiplied by the number of dimensions"],
      correct: [1],
      concept: "The grain \'one row per order line item per day\' means each unique combination of order line item and day gets one row. With 5 line items in a single order on a single day, there are 5 fact table rows. The grain definition is independent of the number of dimension tables."
    },
    {
      id: 84,
      type: "single",
      difficulty: 3,
      question: "When a CREATE OR REPLACE TABLE is executed, what happens to existing grants on the original table?",
      options: ["Grants are preserved on the new table automatically", "All grants are lost and must be re-granted", "Only OWNERSHIP is preserved; other grants are lost", "Grants are preserved if COPY GRANTS is specified"],
      correct: [3],
      concept: "By default, CREATE OR REPLACE TABLE drops all existing grants. However, if you include the COPY GRANTS clause (CREATE OR REPLACE TABLE ... COPY GRANTS AS SELECT ...), the grants from the original table are preserved on the new table. This is critical for production environments where access control must be maintained."
    },
    {
      id: 85,
      type: "single",
      difficulty: 3,
      question: "A dimension table uses SCD Type 3 for tracking changes. How many historical values can typically be tracked?",
      options: ["Unlimited historical values", "Only the current and one previous value per attribute", "Up to 10 historical values per attribute", "Only the current value (no history)"],
      correct: [1],
      concept: "SCD Type 3 adds a new column to store the previous value (e.g., current_address and previous_address). This limits history to typically just the current and one prior value. For full history, SCD Type 2 is needed. Type 3 is simple but inadequate for tracking multiple historical changes."
    },
    {
      id: 86,
      type: "tf",
      difficulty: 3,
      question: "In Snowflake, TRUNCATE TABLE is recoverable via Time Travel, allowing you to restore the data to a state before the truncation.",
      options: ["True — TRUNCATE TABLE in Snowflake creates a Time Travel version and the data can be recovered using AT or BEFORE clauses", "False — TRUNCATE TABLE permanently removes data and bypasses Time Travel in Snowflake"],
      correct: [0],
      concept: "Unlike many traditional databases, Snowflake\'s TRUNCATE TABLE IS recoverable via Time Travel. The data before truncation is retained for the configured retention period. You can query the pre-truncation data using SELECT ... AT(STATEMENT => \'query_id\') or restore it."
    },
    {
      id: 87,
      type: "tf",
      difficulty: 3,
      question: "A SEQUENCE in Snowflake guarantees that generated values will have no gaps (every integer from start to current is used).",
      options: ["True — Snowflake sequences generate strictly sequential values with no gaps between numbers", "False — Snowflake sequences guarantee uniqueness but not gap-free sequential values due to caching and rollbacks"],
      correct: [1],
      concept: "Snowflake sequences do NOT guarantee gap-free values. Gaps can occur due to: (1) pre-allocation of value ranges to compute nodes, (2) transaction rollbacks consuming sequence values, and (3) unused cached values. Sequences guarantee uniqueness and approximate ordering, but not contiguity."
    },
    {
      id: 88,
      type: "tf",
      difficulty: 3,
      question: "CREATE TABLE LIKE copies both the table structure and the data from the source table.",
      options: ["True — CREATE TABLE LIKE creates a complete copy including structure and data from the source table", "False — CREATE TABLE LIKE copies only the structure (column definitions) without any data"],
      correct: [1],
      concept: "CREATE TABLE LIKE copies only the table structure — column names, data types, defaults, and some properties like clustering keys. It does NOT copy data; the resulting table is empty. To copy both structure and data, use CREATE TABLE ... CLONE (zero-copy) or CREATE TABLE AS SELECT (physical copy)."
    },
    {
      id: 89,
      type: "tf",
      difficulty: 3,
      question: "In Snowflake, a transient table persists until explicitly dropped, unlike a temporary table which is dropped at session end.",
      options: ["True — transient tables persist beyond sessions and must be explicitly dropped, while temporary tables are session-scoped", "False — both transient and temporary tables are automatically dropped when the session ends"],
      correct: [0],
      concept: "Transient tables DO persist beyond the session that created them — they exist until explicitly dropped. Temporary tables are session-scoped and automatically dropped when the creating session ends. Both types lack Fail-safe and have limited Time Travel (0-1 day)."
    },
    {
      id: 90,
      type: "tf",
      difficulty: 3,
      question: "In a star schema, dimension tables should be normalized to third normal form for optimal query performance.",
      options: ["True — normalizing dimension tables improves join performance and reduces data redundancy in star schemas", "False — star schemas use denormalized dimension tables for simpler queries and better read performance"],
      correct: [1],
      concept: "Star schemas intentionally use denormalized dimension tables. Normalization increases the number of joins required, making queries more complex and potentially slower for analytical workloads. Denormalized dimensions provide simpler SQL, fewer joins, and better performance for read-heavy analytical queries."
    },
    {
      id: 91,
      type: "tf",
      difficulty: 3,
      question: "The MERGE statement in Snowflake can have multiple WHEN MATCHED clauses with different conditions.",
      options: ["True — MERGE supports multiple WHEN MATCHED clauses with AND conditions to handle different match scenarios", "False — MERGE allows only one WHEN MATCHED clause per statement in Snowflake"],
      correct: [0],
      concept: "Snowflake MERGE supports multiple WHEN MATCHED clauses with additional AND conditions. For example: WHEN MATCHED AND source.action = \'update\' THEN UPDATE ... WHEN MATCHED AND source.action = \'delete\' THEN DELETE. The first matching clause is executed for each row."
    },
    {
      id: 92,
      type: "tf",
      difficulty: 3,
      question: "An additive measure like total_revenue can be meaningfully summed across all dimensions including time, product, and geography.",
      options: ["True — additive measures like total_revenue can be summed across any and all dimensions", "False — total_revenue is semi-additive and cannot be summed across the time dimension"],
      correct: [0],
      concept: "Total revenue is a classic additive measure. It can be summed across time (monthly revenue = sum of daily revenues), across products (total revenue = sum of product revenues), and across geography. Semi-additive measures like account balances have restrictions on summing across certain dimensions."
    },
    {
      id: 93,
      type: "tf",
      difficulty: 3,
      question: "When you DROP and then UNDROP a table in Snowflake, all previously granted privileges on the table are automatically restored.",
      options: ["True — UNDROP restores the table with all its original privileges, grants, and access controls intact", "False — UNDROP restores the data but all privileges must be re-granted manually"],
      correct: [0],
      concept: "UNDROP TABLE restores the table to its state at the time of the DROP, including all previously granted privileges and access controls. This is different from CREATE OR REPLACE, which loses grants unless COPY GRANTS is specified. UNDROP is a complete restoration of the object."
    },
    {
      id: 94,
      type: "tf",
      difficulty: 3,
      question: "A degenerate dimension is stored directly in the fact table without a corresponding separate dimension table.",
      options: ["True — degenerate dimensions like invoice numbers reside directly in the fact table without a separate dimension table", "False — all dimensions must have their own separate dimension table in proper dimensional modeling"],
      correct: [0],
      concept: "Degenerate dimensions are dimension attributes stored directly in the fact table. They are typically identifiers like invoice numbers, order numbers, or transaction IDs that don\'t have meaningful additional attributes to justify a separate dimension table. They serve as grouping keys for analysis."
    },
    {
      id: 95,
      type: "tf",
      difficulty: 3,
      question: "INSERT OVERWRITE in Snowflake is a non-atomic operation — if the INSERT fails, the table remains truncated.",
      options: ["True — INSERT OVERWRITE truncates first, and a failed insert leaves the table empty", "False — INSERT OVERWRITE is atomic; if the insert fails, the original data is preserved"],
      correct: [1],
      concept: "INSERT OVERWRITE in Snowflake is an atomic operation. The truncation and insertion happen as a single atomic unit. If the INSERT portion fails for any reason, the entire operation is rolled back and the target table retains its original data. This ensures data safety."
    },
    {
      id: 96,
      type: "tf",
      difficulty: 3,
      question: "Snowflake\'s IDENTITY column property guarantees globally unique values across all tables in a database.",
      options: ["True — IDENTITY values are coordinated across all tables in a database to ensure global uniqueness", "False — IDENTITY generates unique values within its own table column only, not across tables"],
      correct: [1],
      concept: "IDENTITY generates unique sequential values within the specific column of the specific table where it is defined. It has no awareness of other tables. For globally unique identifiers across tables, use a shared SEQUENCE object or UUID_STRING()."
    },
    {
      id: 97,
      type: "tf",
      difficulty: 3,
      question: "A factless fact table can still have a numeric count column set to 1 for every row to support count-based aggregations.",
      options: ["True — adding a count of 1 to each row in a factless fact table is a common practice to enable SUM-based counting", "False — by definition, a factless fact table cannot contain any numeric columns whatsoever"],
      correct: [0],
      concept: "While a factless fact table has no natural numeric measures, it is a common best practice to include a dummy count column (always set to 1). This enables using SUM aggregations instead of COUNT(*), which can be more efficient and consistent with other fact table query patterns."
    },
    {
      id: 98,
      type: "tf",
      difficulty: 3,
      question: "In Snowflake, you can use UNDROP to restore a schema and it will automatically restore all tables within that schema.",
      options: ["True — UNDROP SCHEMA restores the schema along with all its contained objects including tables, views, and stages", "False — UNDROP SCHEMA only restores the schema container; individual tables must be undropped separately"],
      correct: [0],
      concept: "UNDROP SCHEMA in Snowflake restores the entire schema and all objects that were contained within it at the time of the DROP, including tables, views, stages, and other objects. This is a complete restoration of the schema\'s state, not just the container."
    },
    {
      id: 99,
      type: "tf",
      difficulty: 3,
      question: "CREATE TABLE ... CLONE in Snowflake physically copies all data at the time of cloning, doubling storage costs immediately.",
      options: ["True — CLONE creates a full physical copy of all data, immediately doubling storage consumption", "False — CLONE uses zero-copy cloning, sharing underlying micro-partitions, with costs only for subsequent divergent changes"],
      correct: [1],
      concept: "Zero-copy cloning in Snowflake creates a metadata-only copy that shares the underlying micro-partitions with the source. No data is physically duplicated at clone time, so there is no immediate storage cost increase. Storage costs only accrue when data in the clone or source diverges through DML operations."
    },
    {
      id: 100,
      type: "tf",
      difficulty: 3,
      question: "The Snowflake MERGE statement can reference the same table as both the source and target.",
      options: ["True — MERGE can use the same table as both source and target, typically with a self-join condition and subquery", "False — MERGE requires the source and target to be different tables; self-referencing is not allowed"],
      correct: [0],
      concept: "Snowflake allows a MERGE statement to reference the same table as both source and target. This is typically done by using a subquery or CTE as the source that references the target table. This pattern is useful for deduplication, conditional updates within the same table, and self-referencing transformations."
    }
  ]
};

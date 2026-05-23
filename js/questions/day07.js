window.QUIZ_DATA = window.QUIZ_DATA || {};
window.QUIZ_DATA["day07"] = {
  title: "SQL Processing & Performance",
  category: "sql",
  topics: ["Incremental Processing", "Streaming Concepts", "Bulk Loading", "File Format Handling", "Indexing & Query Plans", "Caching Concepts"],
  questions: [
    {
      id: 1,
      type: "single",
      difficulty: 1,
      question: "What is the primary purpose of a high-water mark in incremental data processing?",
      options: ["To track the maximum value of a column processed so far and load only newer records", "To monitor disk usage and trigger cleanup when storage exceeds a threshold value", "To define the upper limit of rows that can be inserted in a single transaction batch", "To set a memory ceiling for query execution and prevent out-of-memory failures"],
      correct: [0],
      concept: "A high-water mark (HWM) tracks the last successfully processed value of a monotonically increasing column (e.g., a timestamp or auto-increment ID). On each subsequent run, the ETL process queries only rows where the tracked column exceeds the stored HWM, ensuring only new or updated records are loaded incrementally."
    },
    {
      id: 2,
      type: "single",
      difficulty: 1,
      question: "Which column type is most commonly used as a watermark column for incremental extraction?",
      options: ["A monotonically increasing timestamp such as updated_at or modified_date column", "A VARCHAR column storing the name of the user who last modified the record value", "A BOOLEAN flag column indicating whether a row has been archived or is still active", "A computed column that concatenates the primary key with the table name for tracking"],
      correct: [0],
      concept: "Timestamp columns like updated_at or modified_date are ideal watermark columns because they monotonically increase and naturally reflect when data changed. This allows the incremental process to use a simple WHERE updated_at > @last_watermark filter to capture all new and modified records since the last extraction run."
    },
    {
      id: 3,
      type: "single",
      difficulty: 1,
      question: "What does CDC stand for in the context of incremental data processing pipelines?",
      options: ["Change Data Capture", "Continuous Data Collection", "Centralized Data Coordination", "Columnar Data Compression"],
      correct: [0],
      concept: "Change Data Capture (CDC) is a set of techniques used to identify and capture changes (inserts, updates, deletes) made to a database. CDC enables incremental processing by streaming or extracting only the changed rows rather than reprocessing the entire dataset, significantly reducing processing time and resource usage."
    },
    {
      id: 4,
      type: "single",
      difficulty: 1,
      question: "In CDC, which database feature is typically used to capture row-level changes in real time?",
      options: ["The transaction log (write-ahead log) that records every committed change to the database", "The query optimizer cache that stores execution plans for frequently run SQL statements", "The statistics histogram that tracks data distribution for cardinality estimation purposes", "The buffer pool memory region that holds recently accessed data pages for fast reads"],
      correct: [0],
      concept: "CDC implementations commonly read from the database\'s transaction log (also called write-ahead log or redo log). Since the transaction log records every committed INSERT, UPDATE, and DELETE, CDC tools like Debezium or SQL Server CDC can parse these logs to emit change events without impacting the source database\'s query performance."
    },
    {
      id: 5,
      type: "single",
      difficulty: 1,
      question: "Which incremental loading strategy would you use when the source system does not have a reliable timestamp column?",
      options: ["Log-based CDC that reads changes directly from the database transaction log entries", "Watermark-based extraction using the updated_at column to filter only new records", "Full table comparison using hash values to detect rows that have changed since last load", "Partition pruning based on date ranges to skip partitions that have not been modified"],
      correct: [2],
      concept: "When no reliable timestamp or sequence column exists, a full table comparison approach can be used. This involves computing hash values of each row and comparing them against previously stored hashes to identify inserts, updates, and deletes. While more resource-intensive than watermark-based approaches, it works reliably regardless of schema design."
    },
    {
      id: 6,
      type: "single",
      difficulty: 1,
      question: "What is the key difference between a full load and an incremental load in ETL pipelines?",
      options: ["A full load extracts all data every run while an incremental load extracts only changed data", "A full load runs during business hours while an incremental load only runs at midnight batch time", "A full load uses parallel threads while an incremental load always uses a single thread for safety", "A full load writes to staging tables while an incremental load writes directly to production tables"],
      correct: [0],
      concept: "A full load extracts and loads the entire dataset on every execution, which is simple but resource-intensive. An incremental load captures only the data that has changed (new, updated, or deleted rows) since the last extraction, making it far more efficient for large datasets. The choice between them depends on data volume, change frequency, and available processing windows."
    },
    {
      id: 7,
      type: "single",
      difficulty: 1,
      question: "What is micro-batch processing in the context of streaming data architectures?",
      options: ["Processing small batches of collected data at short, regular intervals such as every few seconds", "Dividing a large dataset into equal-sized micro-partitions for parallel query execution only", "Compressing individual records into micro-sized payloads before sending them over the network wire", "Splitting a monolithic ETL job into many independent microservices that run concurrently always"],
      correct: [0],
      concept: "Micro-batch processing collects incoming data into small batches over short intervals (e.g., every 1-5 seconds) and processes each batch as a unit. This approach, used by systems like Spark Structured Streaming, provides near-real-time latency while maintaining the fault-tolerance and exactly-once semantics benefits of batch processing."
    },
    {
      id: 8,
      type: "single",
      difficulty: 1,
      question: "Which of the following best describes event time in stream processing?",
      options: ["The timestamp when the event actually occurred at the source system or device that produced it", "The timestamp when the event arrives at the stream processing engine for computation and analysis", "The timestamp when the event is written to the output sink after all transformations are completed", "The timestamp when the event is acknowledged by the consumer group coordinator in the cluster"],
      correct: [0],
      concept: "Event time refers to the timestamp embedded in the event itself, representing when the event actually happened at the source. This is distinct from processing time (when the engine processes it) and ingestion time (when it enters the streaming platform). Event time is crucial for accurate windowed aggregations, especially when events arrive out of order."
    },
    {
      id: 9,
      type: "single",
      difficulty: 1,
      question: "What is processing time in stream processing, and when might it differ from event time?",
      options: ["The wall-clock time when the stream processor handles the event, which can differ due to network delays", "The exact duration in milliseconds that a single event takes to pass through all transformation stages", "The scheduled time slot allocated by the job scheduler for the streaming application to begin execution", "The total elapsed time from when a streaming job starts until it processes every pending event in queue"],
      correct: [0],
      concept: "Processing time is the wall-clock time at the stream processing engine when it actually processes an event. It differs from event time when there are network delays, system backlogs, or out-of-order arrivals. Using processing time for windowing is simpler but can produce inaccurate results when events are delayed or arrive late."
    },
    {
      id: 10,
      type: "single",
      difficulty: 1,
      question: "In stream processing, what is a watermark used to handle?",
      options: ["Late-arriving events by defining how long the system waits before closing a time window", "Schema evolution by tracking which version of the schema each event was serialized with initially", "Backpressure by signaling upstream producers to slow down when consumers fall behind in processing", "Deduplication by marking events that have already been processed to prevent double-counting errors"],
      correct: [0],
      concept: "In stream processing, a watermark is a notion of progress in event time. It tells the system that no more events with a timestamp earlier than the watermark are expected to arrive. Watermarks allow the engine to close time windows and emit results while still accommodating some degree of late-arriving data based on allowed lateness configuration."
    },
    {
      id: 11,
      type: "single",
      difficulty: 1,
      question: "What is the BULK INSERT statement primarily used for in SQL Server?",
      options: ["Loading large volumes of data from a flat file directly into a database table efficiently", "Inserting multiple rows using a single INSERT statement with a VALUES list of up to 1000 rows", "Creating a bulk copy of an existing table structure along with all its data and index definitions", "Performing mass UPDATE operations on millions of rows using a set-based approach with conditions"],
      correct: [0],
      concept: "BULK INSERT is a SQL Server T-SQL command designed for high-performance data loading from external flat files (CSV, TSV, fixed-width) directly into a table. It bypasses the normal INSERT path, minimizing logging and lock overhead, making it significantly faster than row-by-row inserts for large data volumes."
    },
    {
      id: 12,
      type: "single",
      difficulty: 1,
      question: "Which clause in a BULK INSERT statement specifies the column delimiter used in the source file?",
      options: ["FIELDTERMINATOR specifies the character that separates columns in the data file for parsing", "COLUMNSEPARATOR defines the delimiter between each column value in the imported flat file format", "DELIMITER sets the boundary character used to distinguish one field from the next in the input data", "SPLITCHAR specifies the character that the parser uses to break each line into individual column values"],
      correct: [0],
      concept: "The FIELDTERMINATOR option in BULK INSERT specifies the character(s) used to separate columns in the source file. For example, FIELDTERMINATOR = \\'|\\' for pipe-delimited files or FIELDTERMINATOR = \\'\\t\\' for tab-delimited files. The default field terminator is a tab character if not explicitly specified."
    },
    {
      id: 13,
      type: "single",
      difficulty: 1,
      question: "What is the PostgreSQL COPY command used for in data loading scenarios?",
      options: ["Bulk loading data from or exporting data to files with high throughput and minimal overhead", "Copying an entire database schema including tables, views, and indexes to a new database instance", "Replicating data between two PostgreSQL instances in real time using logical replication slots", "Creating a backup copy of a table that can be restored later using the pg_restore utility command"],
      correct: [0],
      concept: "The PostgreSQL COPY command is a high-performance bulk data transfer mechanism that can load data from files into tables (COPY FROM) or export data from tables to files (COPY TO). It operates at the server level and is significantly faster than individual INSERT statements because it bypasses many of the per-row overheads."
    },
    {
      id: 14,
      type: "single",
      difficulty: 1,
      question: "Which file format stores data in a columnar layout and supports efficient compression and predicate pushdown?",
      options: ["Apache Parquet stores data column-by-column with encoding and compression per column chunk", "CSV stores data as comma-separated values in plain text with one record per line in the file", "JSON stores data as nested key-value pairs in human-readable text format for easy interchange", "XML stores data in a hierarchical tagged structure with opening and closing elements for each field"],
      correct: [0],
      concept: "Apache Parquet is a columnar storage format designed for efficient data storage and retrieval. By storing data column-by-column, it enables superior compression ratios (similar values compress well together) and predicate pushdown (skipping irrelevant row groups based on column statistics), making it ideal for analytical workloads."
    },
    {
      id: 15,
      type: "single",
      difficulty: 1,
      question: "What is the primary advantage of columnar storage formats over row-based storage for analytical queries?",
      options: ["They read only the columns needed by a query, reducing I/O for queries that access few columns", "They guarantee ACID transactions across all concurrent write operations to the same data block file", "They support faster single-row lookups by storing all fields of a record contiguously on the disk", "They eliminate the need for indexes entirely because every query can scan the full dataset quickly"],
      correct: [0],
      concept: "Columnar formats like Parquet and ORC store each column\'s values contiguously. For analytical queries that typically read only a subset of columns (e.g., SELECT avg(price) FROM sales), the engine reads only those columns from disk, dramatically reducing I/O. Row-based formats must read entire rows even if only one column is needed."
    },
    {
      id: 16,
      type: "single",
      difficulty: 1,
      question: "What type of index organizes data in a balanced tree structure for efficient range and equality lookups?",
      options: ["A B-tree index that maintains sorted data in a balanced tree allowing O(log n) search complexity", "A bitmap index that uses bit arrays to represent the presence of values in each row of the table", "A hash index that maps key values to bucket locations using a hash function for equality lookups only", "A full-text index that tokenizes text content and builds an inverted index for keyword search queries"],
      correct: [0],
      concept: "B-tree (Balanced tree) indexes are the most common index type in relational databases. They maintain data in sorted order across a balanced tree structure, supporting both equality (WHERE x = 5) and range queries (WHERE x BETWEEN 1 AND 10) efficiently with O(log n) lookup time. Most databases use B-tree as the default index type."
    },
    {
      id: 17,
      type: "single",
      difficulty: 1,
      question: "What does the EXPLAIN statement do when placed before a SQL query?",
      options: ["It displays the execution plan the optimizer chose, showing how the query will be processed", "It explains the syntax of the query and highlights any grammatical errors found in the SQL text", "It executes the query and returns the results along with a summary of the data types returned", "It generates documentation comments for the query that can be stored in a data dictionary catalog"],
      correct: [0],
      concept: "The EXPLAIN statement (or EXPLAIN PLAN in Oracle) shows the execution plan that the query optimizer has chosen for a SQL statement. It reveals details like table access methods (full scan vs index seek), join strategies (nested loop, hash, merge), estimated row counts, and cost estimates without actually executing the query."
    },
    {
      id: 18,
      type: "single",
      difficulty: 1,
      question: "What is the purpose of result caching in a database system?",
      options: ["To store query results in memory so identical subsequent queries return instantly without re-execution", "To compress query results before sending them to the client application to save network bandwidth", "To log all query results to an audit table for compliance tracking and historical reporting purposes", "To convert query results into a portable file format for sharing across different database platforms"],
      correct: [0],
      concept: "Result caching stores the output of a query in memory (or on fast storage). When the same query is submitted again and the underlying data has not changed, the cached result is returned immediately without re-executing the query. This dramatically improves performance for repeated analytical queries on stable datasets."
    },
    {
      id: 19,
      type: "single",
      difficulty: 1,
      question: "Which incremental processing pattern uses database triggers to capture changes as they happen?",
      options: ["Trigger-based CDC that fires on INSERT, UPDATE, or DELETE and logs changes to a shadow table", "Watermark-based extraction that polls the source table for rows with timestamps above a threshold", "Snapshot differential loading that compares current and previous full snapshots to find differences", "Log-based CDC that reads the database transaction log to identify committed data modifications only"],
      correct: [0],
      concept: "Trigger-based CDC uses database triggers attached to source tables that fire on INSERT, UPDATE, and DELETE operations. The triggers write change records to a separate audit or shadow table. While straightforward to implement, this approach adds overhead to every DML operation on the source table and can impact source system performance."
    },
    {
      id: 20,
      type: "single",
      difficulty: 1,
      question: "What is the difference between real-time streaming and micro-batch streaming?",
      options: ["Real-time processes each event individually as it arrives; micro-batch collects events into small groups first", "Real-time uses SQL syntax for transformations; micro-batch requires custom programming languages exclusively", "Real-time is limited to single-node deployment; micro-batch supports distributed cluster processing always", "Real-time guarantees exactly-once semantics; micro-batch can only provide at-most-once delivery guarantees"],
      correct: [0],
      concept: "True real-time (record-at-a-time) streaming, as in Apache Flink, processes each event individually the moment it arrives, achieving the lowest possible latency. Micro-batch streaming, as in Spark Structured Streaming, collects events into small batches at regular intervals before processing them together, trading slightly higher latency for simpler fault tolerance."
    },
    {
      id: 21,
      type: "single",
      difficulty: 1,
      question: "Which BULK INSERT option specifies the number of header rows to skip when loading a CSV file?",
      options: ["FIRSTROW specifies the row number at which to begin reading data from the source file", "SKIPHEADER defines how many lines at the top of the file should be ignored during the import", "HEADERROWS tells the parser how many initial lines contain column names and should be skipped", "IGNOREROWS sets the count of leading rows in the data file that are not actual data records"],
      correct: [0],
      concept: "In SQL Server\'s BULK INSERT, the FIRSTROW option specifies the first row to load. Setting FIRSTROW = 2 tells the engine to skip the first row (typically a header row) and start loading from row 2. This is the standard way to handle CSV files that include column header names in the first line."
    },
    {
      id: 22,
      type: "single",
      difficulty: 1,
      question: "What does the Avro file format provide that Parquet does not natively emphasize?",
      options: ["Built-in schema evolution support with forward and backward compatibility for schema changes", "Columnar data storage with column-level statistics and predicate pushdown for analytical queries", "Native support for complex nested data types such as arrays, maps, and deeply nested struct types", "Integration with SQL query engines for direct querying without requiring any external schema files"],
      correct: [0],
      concept: "Apache Avro is a row-based format that excels at schema evolution. Avro stores the writer\'s schema with the data and uses schema resolution rules to handle forward and backward compatibility. While Parquet also supports schema evolution, Avro\'s design makes it the go-to choice for data serialization in streaming and message-passing scenarios where schemas change frequently."
    },
    {
      id: 23,
      type: "single",
      difficulty: 1,
      question: "What is a clustered index, and how does it affect table data storage?",
      options: ["An index that physically reorders the table data rows on disk to match the index key sort order", "An index that creates a separate copy of the table sorted by the index key for faster read access", "An index that groups related tables together on the same disk partition for faster join operations", "An index that clusters frequently accessed columns into a single compressed block for efficiency"],
      correct: [0],
      concept: "A clustered index determines the physical storage order of data rows in a table. Since the data itself is sorted according to the clustered index key, a table can have only one clustered index. Range queries on the clustered key are extremely efficient because consecutive rows are stored in adjacent disk pages, minimizing I/O."
    },
    {
      id: 24,
      type: "single",
      difficulty: 1,
      question: "How many clustered indexes can a single table have in most relational database systems?",
      options: ["Exactly one, because the data rows can only be physically sorted in one order on disk storage", "Up to two, one for the primary key and one additional clustered index on a secondary key column", "As many as needed, limited only by available disk space and the number of columns in the table", "None by default; clustered indexes must be explicitly created and are optional for every table"],
      correct: [0],
      concept: "A table can have at most one clustered index because the clustered index defines the physical sort order of the table\'s data rows. Since data can only be physically arranged in one order, only one clustered index is possible. In SQL Server, creating a primary key constraint automatically creates a clustered index unless otherwise specified."
    },
    {
      id: 25,
      type: "single",
      difficulty: 1,
      question: "What is a materialized view, and how does it differ from a regular view?",
      options: ["A materialized view stores precomputed query results physically, while a regular view is just a stored SQL definition", "A materialized view runs the query each time it is accessed, while a regular view caches results in memory", "A materialized view is limited to single-table queries, while a regular view can join multiple tables together", "A materialized view can only be created by database administrators, while regular views can be created by anyone"],
      correct: [0],
      concept: "A materialized view physically stores the result set of its defining query on disk, acting as a precomputed cache. A regular (virtual) view is simply a stored SQL query that is re-executed each time it is referenced. Materialized views improve read performance for complex aggregations but require periodic refresh to stay synchronized with base table changes."
    },
    {
      id: 26,
      type: "single",
      difficulty: 1,
      question: "In a BULK INSERT statement, what does the ROWTERMINATOR option specify?",
      options: ["The character sequence that marks the end of each row in the source data file being loaded", "The maximum number of rows that can be inserted in a single bulk operation before committing", "The error handling action to take when a row fails validation during the bulk loading process", "The target table column that receives an auto-generated row number for each inserted record"],
      correct: [0],
      concept: "The ROWTERMINATOR option in BULK INSERT defines the character(s) that mark the end of each data row in the source file. Common values include \\'\\\\n\\' (newline) for Unix-style line endings and \\'\\\\r\\\\n\\' (carriage return + newline) for Windows-style line endings. Incorrect ROWTERMINATOR settings can cause the entire file to be read as a single row."
    },
    {
      id: 27,
      type: "single",
      difficulty: 1,
      question: "What is the ORC file format, and which ecosystem primarily uses it?",
      options: ["Optimized Row Columnar format primarily used in the Apache Hive and Hadoop ecosystem tools", "Object Relational Container format used primarily in PostgreSQL for storing complex object types", "Online Record Compression format used in cloud-native databases for real-time data compression", "Ordered Row Cache format used in Oracle Database for caching frequently accessed row data sets"],
      correct: [0],
      concept: "ORC (Optimized Row Columnar) is a columnar file format originally developed for Apache Hive. It provides excellent compression, predicate pushdown via built-in indexes (bloom filters, min/max statistics), and ACID transaction support in Hive. While Parquet has become more universal across ecosystems, ORC remains highly optimized for Hive workloads."
    },
    {
      id: 28,
      type: "single",
      difficulty: 1,
      question: "Which type of index scan reads every row in the index structure from start to end?",
      options: ["A full index scan traverses the entire index, reading all entries in the index leaf-level pages", "An index seek navigates directly to specific entries in the index using the B-tree search algorithm", "A table scan reads every data page in the table heap without using any index structure at all", "A bookmark lookup follows an index pointer back to the base table to retrieve additional non-key columns"],
      correct: [0],
      concept: "A full index scan reads every entry in an index from beginning to end. This happens when the query can be satisfied entirely from the index columns but the optimizer cannot use seek operations (e.g., no suitable WHERE clause on the leading index column). It is faster than a full table scan when the index is narrower than the table."
    },
    {
      id: 29,
      type: "single",
      difficulty: 1,
      question: "What is a non-clustered index in a relational database?",
      options: ["A separate structure containing index keys and pointers back to the data rows in the base table", "An index that is created automatically on every foreign key column when the constraint is defined", "A temporary index that the query optimizer builds at runtime and discards after query execution ends", "An index that stores data rows in an unsorted heap structure without any particular physical ordering"],
      correct: [0],
      concept: "A non-clustered index is a separate data structure from the table data. It contains the indexed column values sorted in order, along with row locators (pointers) back to the actual data rows. A table can have multiple non-clustered indexes. The index enables fast lookups, but accessing non-indexed columns requires an additional lookup to the base table."
    },
    {
      id: 30,
      type: "single",
      difficulty: 1,
      question: "What is the main advantage of using Parquet over CSV for large-scale analytical queries?",
      options: ["Parquet supports columnar storage, compression, and predicate pushdown, reducing I/O significantly", "Parquet files are human-readable and can be opened in any text editor for quick data inspection", "Parquet automatically enforces referential integrity constraints between related data files on disk", "Parquet supports real-time streaming writes with immediate consistency guarantees for all readers"],
      correct: [0],
      concept: "Parquet\'s columnar layout means only the columns referenced in a query are read from disk, drastically reducing I/O for wide tables. Combined with efficient encoding schemes (dictionary, run-length, delta) and compression (Snappy, GZIP, ZSTD), Parquet files are typically 3-10x smaller than equivalent CSV files and orders of magnitude faster to query analytically."
    },
    {
      id: 31,
      type: "single",
      difficulty: 1,
      question: "In stream processing, what is the purpose of a tumbling window?",
      options: ["A fixed-size, non-overlapping time window that groups events into discrete, contiguous intervals", "A variable-size window that expands and contracts based on the rate of incoming event data traffic", "A sliding window that moves forward by one event at a time, including a fixed count of recent events", "A session window that groups events based on periods of user activity separated by inactivity gaps"],
      correct: [0],
      concept: "A tumbling window divides the event stream into fixed-size, non-overlapping, contiguous time intervals. For example, a 5-minute tumbling window would create windows [0:00-0:05), [0:05-0:10), [0:10-0:15), etc. Each event belongs to exactly one window, making tumbling windows ideal for periodic aggregations like hourly counts or daily summaries."
    },
    {
      id: 32,
      type: "single",
      difficulty: 1,
      question: "What does the \\\"ingestion time\\\" refer to in a streaming data pipeline?",
      options: ["The timestamp when the event first enters the streaming platform or message broker system queue", "The timestamp when the event is generated at the source device, sensor, or application that created it", "The timestamp when the event is written to the final destination table or output sink in the pipeline", "The timestamp when the event is read from the input topic by the stream processing application code"],
      correct: [0],
      concept: "Ingestion time is the timestamp assigned when an event enters the streaming platform (e.g., when Kafka receives the message). It sits between event time (when the event occurred at the source) and processing time (when the engine processes it). Ingestion time provides a middle ground: more accurate than processing time but doesn\'t require event-time parsing."
    },
    {
      id: 33,
      type: "single",
      difficulty: 1,
      question: "What is a covering index in database optimization?",
      options: ["An index that includes all columns needed by a query so the base table never needs to be accessed", "An index that spans multiple tables and covers join operations between them for faster join execution", "An index that covers the entire range of possible values in a column using a dense B-tree structure", "An index that is automatically maintained by the database engine and covers all queries on the table"],
      correct: [0],
      concept: "A covering index includes all the columns referenced by a query (in SELECT, WHERE, JOIN, and ORDER BY clauses). When a query can be satisfied entirely from the index without accessing the base table (called an index-only scan), it eliminates expensive key lookups and can improve query performance by 10x or more."
    },
    {
      id: 34,
      type: "single",
      difficulty: 1,
      question: "What is query rewrite in the context of database caching and optimization?",
      options: ["The optimizer automatically rewrites a query to use a materialized view instead of scanning base tables", "The database administrator manually rewriting slow SQL queries to use more efficient join syntax patterns", "The query parser converting shorthand SQL syntax into the fully qualified canonical form before execution", "The storage engine rewriting data pages on disk to optimize physical layout for frequently run queries"],
      correct: [0],
      concept: "Query rewrite is an optimization technique where the query optimizer transparently redirects a query to use a precomputed materialized view instead of scanning and aggregating base tables. The user writes a query against base tables, but the optimizer recognizes that a materialized view already contains the needed result and rewrites the plan accordingly."
    },
    {
      id: 35,
      type: "single",
      difficulty: 1,
      question: "What is the COPY command syntax pattern for loading a CSV file into a PostgreSQL table?",
      options: ["COPY table_name FROM \\'filepath\\' WITH (FORMAT csv, HEADER true) to load CSV with headers", "LOAD DATA INFILE \\'filepath\\' INTO TABLE table_name FIELDS TERMINATED BY \\',\\' for CSV loading", "INSERT INTO table_name SELECT * FROM read_csv(\\'filepath\\') to bulk load CSV file contents", "IMPORT FROM \\'filepath\\' INTO table_name USING FORMAT csv WITH HEADER ROW for CSV import"],
      correct: [0],
      concept: "PostgreSQL\'s COPY command uses the syntax: COPY table_name FROM \\'file_path\\' WITH (FORMAT csv, HEADER true). The FORMAT csv option tells PostgreSQL to parse the file as CSV, and HEADER true skips the first row. Additional options include DELIMITER, QUOTE, ESCAPE, and NULL for customizing the parsing behavior."
    },
    {
      id: 36,
      type: "single",
      difficulty: 2,
      question: "When implementing incremental loading with a watermark, what problem can arise if the source system uses UPDATE operations that do not modify the watermark column?",
      options: ["Updated rows will be missed because their watermark value remains below the last extracted threshold", "The watermark column will be set to NULL causing all subsequent incremental loads to fail with errors", "The database will automatically create a new watermark column to track the missed update operations", "Updated rows will be loaded twice because the system cannot distinguish updates from new insertions"],
      correct: [0],
      concept: "If a source system updates a row without modifying the watermark column (e.g., updating a product description without touching the updated_at timestamp), the incremental process will not detect the change. This is why it\'s critical that the watermark column is automatically updated on every modification, typically via database triggers or application logic."
    },
    {
      id: 37,
      type: "single",
      difficulty: 2,
      question: "In CDC, what is the difference between log-based and query-based change detection?",
      options: ["Log-based reads the transaction log for changes; query-based polls the source table using SQL queries", "Log-based requires application code changes; query-based works without modifying the source system at all", "Log-based only captures inserts; query-based can capture inserts, updates, and deletes in all situations", "Log-based works only on cloud databases; query-based works only on traditional on-premises databases"],
      correct: [0],
      concept: "Log-based CDC reads the database\'s transaction log to capture all committed changes with minimal impact on the source system. Query-based CDC uses periodic SQL queries (e.g., WHERE updated_at > @last_run) to detect changes. Log-based CDC captures all change types including deletes and is more reliable, while query-based is simpler but may miss changes."
    },
    {
      id: 38,
      type: "single",
      difficulty: 2,
      question: "What is the impact of using a sliding window versus a tumbling window in stream processing?",
      options: ["Sliding windows can overlap causing events to belong to multiple windows; tumbling windows do not overlap", "Sliding windows process events faster because they reuse computation results from previous window evaluations", "Tumbling windows consume more memory because they must maintain state for overlapping time period ranges", "Sliding windows only work with processing time semantics while tumbling windows support event time only"],
      correct: [0],
      concept: "A sliding window of size 10 minutes with a slide interval of 5 minutes creates overlapping windows, so an event at time 7 minutes would appear in both the [0-10) and [5-15) windows. This increases computation and state but provides smoother aggregation results. Tumbling windows have no overlap, so each event belongs to exactly one window."
    },
    {
      id: 39,
      type: "single",
      difficulty: 2,
      question: "A BULK INSERT operation fails with a data type conversion error on row 5000. Which option allows the operation to continue loading the remaining rows?",
      options: ["MAXERRORS specifies the maximum number of errors allowed before the bulk operation is terminated", "ERRORFILE redirects all failed rows to a separate file but does not affect whether loading continues", "BATCHSIZE controls how many rows are committed at once but does not handle individual row failures", "KEEPNULLS preserves null values from the source but does not control error tolerance during loading"],
      correct: [0],
      concept: "The MAXERRORS option in BULK INSERT sets the threshold for how many errors can occur before the entire operation is aborted. Setting MAXERRORS = 0 (default) means any error stops the load. Setting a higher value allows the operation to skip bad rows and continue loading valid data. Failed rows are discarded or logged to an error file."
    },
    {
      id: 40,
      type: "single",
      difficulty: 2,
      question: "Which file format is best suited for write-heavy streaming workloads where schema evolution is frequent?",
      options: ["Avro, because it is row-oriented with built-in schema evolution and compact binary serialization", "Parquet, because its columnar layout provides the best write throughput for streaming append operations", "CSV, because its simplicity makes it easy to append new records without worrying about schema metadata", "ORC, because its ACID transaction support ensures write consistency in concurrent streaming scenarios"],
      correct: [0],
      concept: "Avro is the preferred format for write-heavy streaming workloads because: (1) its row-oriented layout supports efficient sequential writes and appends, (2) the schema is stored with the data enabling seamless schema evolution, and (3) its compact binary encoding provides fast serialization/deserialization. Parquet and ORC are better for read-heavy analytical workloads."
    },
    {
      id: 41,
      type: "single",
      difficulty: 2,
      question: "What is a composite index, and when is the order of columns in it significant?",
      options: ["An index on multiple columns where the leftmost column must be in the query for the index to be used efficiently", "An index that combines B-tree and hash structures to support both range and equality queries on any column", "An index on multiple columns where any column in the index can independently trigger an efficient index seek", "An index that automatically adjusts its column order based on query patterns observed by the query optimizer"],
      correct: [0],
      concept: "A composite (multi-column) index is built on two or more columns. The column order matters critically: the index can efficiently support queries that filter on the leftmost prefix of the index columns. An index on (A, B, C) supports queries filtering on (A), (A, B), or (A, B, C), but NOT queries filtering only on (B) or (C) without A."
    },
    {
      id: 42,
      type: "single",
      difficulty: 2,
      question: "What is the difference between an index seek and an index scan in query execution plans?",
      options: ["An index seek navigates directly to specific rows using the B-tree; an index scan reads all index entries sequentially", "An index seek is used for clustered indexes only; an index scan is used for non-clustered indexes exclusively", "An index seek returns a single row always; an index scan can return any number of rows from the index", "An index seek requires exact match predicates; an index scan is used for range and pattern matching queries"],
      correct: [0],
      concept: "An index seek uses the B-tree structure to navigate directly to the matching entries, reading only the relevant pages. An index scan reads the entire index from start to finish. Index seeks are generally much faster because they access only the needed data. The optimizer chooses between them based on selectivity: high selectivity favors seeks, low selectivity may favor scans."
    },
    {
      id: 43,
      type: "single",
      difficulty: 2,
      question: "When reading an EXPLAIN plan, what does a \\\"Hash Join\\\" operator indicate about the join strategy?",
      options: ["The engine builds a hash table from one input and probes it with rows from the other input for matching", "The engine sorts both inputs on the join key and then merges them together in a single sequential pass", "The engine iterates through each row of the outer table and scans the inner table for matches each time", "The engine uses an existing index on the join column to find matching rows without any temporary structures"],
      correct: [0],
      concept: "A Hash Join works in two phases: the build phase creates a hash table from the smaller input (build side) using the join key, and the probe phase scans the larger input (probe side) and looks up each row\'s join key in the hash table. Hash joins are efficient for large unsorted inputs without indexes but require memory for the hash table."
    },
    {
      id: 44,
      type: "single",
      difficulty: 2,
      question: "In Spark Structured Streaming, what does the \\\"trigger interval\\\" control?",
      options: ["How frequently the micro-batch is executed to process newly arrived data in the input source stream", "How long the system waits for late-arriving events before closing a window and emitting final results", "How many executor cores are allocated to the streaming job for parallel partition processing tasks", "How large each output file will be when writing streaming results to the file system sink continuously"],
      correct: [0],
      concept: "The trigger interval in Spark Structured Streaming controls the frequency of micro-batch execution. For example, a trigger interval of 10 seconds means Spark will check for new data and process it every 10 seconds. Options include fixed interval triggers, one-time triggers (for testing), and continuous processing triggers for low-latency needs."
    },
    {
      id: 45,
      type: "single",
      difficulty: 2,
      question: "Which BULK INSERT option minimizes transaction log usage for faster loading in SQL Server?",
      options: ["TABLOCK acquires a table-level lock enabling minimal logging when the recovery model allows it", "BATCHSIZE divides the load into smaller transactions to reduce peak transaction log space usage overall", "FIRE_TRIGGERS enables trigger execution which bypasses normal logging for bulk insert operations only", "CHECK_CONSTRAINTS validates constraints at load time which reduces the need for post-load verification logs"],
      correct: [0],
      concept: "Using the TABLOCK hint with BULK INSERT acquires a bulk update (BU) lock on the table, which enables minimal logging when the database is in SIMPLE or BULK_LOGGED recovery model. Minimal logging records only extent allocations rather than individual row inserts, dramatically reducing transaction log I/O and improving load performance."
    },
    {
      id: 46,
      type: "single",
      difficulty: 2,
      question: "What is predicate pushdown, and why is it important for columnar file formats like Parquet?",
      options: ["Pushing filter conditions down to the storage layer so irrelevant data is skipped before being read into memory", "Pushing join predicates from the outer query into subqueries to reduce the number of rows processed early", "Pushing WHERE clause conditions from the application layer to the database connection driver for early filtering", "Pushing computed column expressions down to the disk controller for hardware-accelerated filtering operations"],
      correct: [0],
      concept: "Predicate pushdown pushes filter conditions (predicates) down to the storage/scan layer. In Parquet, each row group stores min/max statistics for each column. When a WHERE clause filters on a column, the engine checks these statistics and skips entire row groups that cannot contain matching data, avoiding unnecessary I/O and deserialization."
    },
    {
      id: 47,
      type: "single",
      difficulty: 2,
      question: "What is the difference between a bitmap index and a B-tree index in terms of ideal use cases?",
      options: ["Bitmap indexes excel on low-cardinality columns in read-heavy warehouses; B-tree indexes suit high-cardinality OLTP columns", "Bitmap indexes are faster for all query types; B-tree indexes are only kept for backward compatibility with legacy systems", "B-tree indexes work only on numeric columns; bitmap indexes work on all data types including text and binary", "B-tree indexes require more disk space than bitmap indexes regardless of column cardinality or table size"],
      correct: [0],
      concept: "Bitmap indexes use bit arrays to represent each distinct value\'s occurrence across rows. They are ideal for low-cardinality columns (e.g., gender, status) in data warehouses where complex AND/OR predicates can be evaluated using fast bitwise operations. B-tree indexes are better for high-cardinality columns (e.g., customer_id) and OLTP workloads with frequent updates."
    },
    {
      id: 48,
      type: "single",
      difficulty: 2,
      question: "How does a materialized view serve as a caching mechanism for analytical queries?",
      options: ["It precomputes and stores aggregation results so repeated analytical queries avoid scanning large base tables", "It caches the execution plan of the analytical query so the optimizer does not need to recompile it each time", "It stores the SQL text of the analytical query in memory so users do not need to type the query again later", "It maintains a real-time replica of the base tables in faster storage media for improved read performance"],
      correct: [0],
      concept: "Materialized views act as a query-level cache by storing precomputed results of complex aggregations, joins, or transformations. When an analytical query matches the materialized view\'s definition, the optimizer can read from the precomputed result instead of scanning and aggregating millions of rows from base tables. Refresh strategies (on-demand, periodic, on-commit) control staleness."
    },
    {
      id: 49,
      type: "single",
      difficulty: 2,
      question: "A data engineer notices that an incremental load is producing duplicate records in the target table. What is the most likely cause?",
      options: ["The merge/upsert logic is missing, so changed rows are inserted again instead of updating existing records", "The watermark column has a unique constraint that prevents the same value from being loaded more than once", "The target table is using a clustered index that automatically deduplicates rows based on the primary key", "The BULK INSERT operation is configured with IGNORE_DUP_KEY which silently removes all duplicate entries"],
      correct: [0],
      concept: "Duplicates in incremental loading typically occur when the load process uses INSERT without a MERGE or upsert (INSERT ... ON CONFLICT UPDATE) strategy. If a row was modified and its watermark value increased, it will be extracted again. Without merge logic, it gets inserted as a new row rather than updating the existing record, creating duplicates."
    },
    {
      id: 50,
      type: "single",
      difficulty: 2,
      question: "What happens to late-arriving events in a stream processing system that has already closed the relevant time window?",
      options: ["They are either dropped or sent to a side output depending on the allowed lateness configuration set", "They are automatically assigned to the next available open window regardless of their event timestamp value", "They cause the closed window to reopen, recompute, and emit an updated result to the downstream consumer", "They are buffered indefinitely until a manual flush command is issued by the system administrator user"],
      correct: [0],
      concept: "When events arrive after their window has closed, the system\'s behavior depends on configuration. Most frameworks support an allowed lateness parameter: events arriving within the allowed lateness window trigger updated results, while events arriving after are dropped or routed to a side output (dead letter queue) for separate handling."
    },
    {
      id: 51,
      type: "single",
      difficulty: 2,
      question: "In the COPY command for Snowflake, what does the FILE_FORMAT option specify?",
      options: ["The named format object or inline specification defining how to parse the input data file contents", "The maximum file size allowed for the data file being loaded into the staging area before splitting", "The file system path where the COPY command should look for data files to load into the target table", "The output format for error log files generated during the data loading operation for troubleshooting"],
      correct: [0],
      concept: "In Snowflake\'s COPY INTO command, FILE_FORMAT specifies how to parse the source data. It can reference a named file format object (CREATE FILE FORMAT) or use inline options like TYPE = \\'CSV\\', FIELD_DELIMITER = \\'|\\', SKIP_HEADER = 1. Named file formats promote reusability and consistency across multiple COPY operations."
    },
    {
      id: 52,
      type: "single",
      difficulty: 2,
      question: "What is the key advantage of JSON as a data format compared to Parquet for certain use cases?",
      options: ["JSON is human-readable and self-describing, making it ideal for APIs, configuration, and data exchange", "JSON provides better compression ratios than Parquet for large-scale analytical data storage on disk systems", "JSON supports columnar storage that enables efficient analytical queries on specific fields without parsing all", "JSON has built-in schema enforcement that rejects records not conforming to the expected data structure type"],
      correct: [0],
      concept: "JSON\'s primary advantages are human readability, self-describing structure (keys are embedded in the data), and universal support across programming languages and APIs. It is ideal for data interchange, configuration files, and API responses. However, JSON is verbose, lacks compression, and is inefficient for large-scale analytical queries compared to Parquet."
    },
    {
      id: 53,
      type: "single",
      difficulty: 2,
      question: "What does a \\\"Nested Loop Join\\\" in a query execution plan indicate?",
      options: ["For each row in the outer input, the engine scans the inner input to find all matching rows based on join key", "The engine recursively nests multiple hash tables together to handle multi-way joins in a single operation", "The engine breaks the join into nested subqueries that each process a partition of the data independently", "The engine uses nested index structures to perform the join without reading any base table data pages at all"],
      correct: [0],
      concept: "A Nested Loop Join iterates through each row of the outer (driving) table and, for each row, scans the inner table for matching rows. It is most efficient when the outer input is small and the inner input has an index on the join column, allowing index seeks instead of full scans. It becomes expensive when both inputs are large."
    },
    {
      id: 54,
      type: "single",
      difficulty: 2,
      question: "What is a session window in stream processing?",
      options: ["A dynamic window that groups events based on activity periods, closing after a specified inactivity gap timeout", "A fixed-size window that is assigned per user session ID and accumulates all events from that session only", "A window that opens when a user logs in and closes when the user explicitly logs out of the application", "A window that is created by the session manager and distributed evenly across all processing partitions"],
      correct: [0],
      concept: "A session window dynamically groups events based on activity. It starts with the first event and continues as long as new events arrive within a specified gap duration (e.g., 30 minutes of inactivity). When no events arrive within the gap, the window closes. Session windows are ideal for analyzing user behavior sessions, clickstreams, and interaction patterns."
    },
    {
      id: 55,
      type: "single",
      difficulty: 2,
      question: "When should you use row-based storage formats instead of columnar formats for data processing?",
      options: ["When the workload involves frequent full-row reads, writes, and transactional operations on individual records", "When the workload requires scanning only a few columns across billions of rows for aggregate calculations", "When the data must be compressed as efficiently as possible to minimize cloud storage costs for archival", "When the query engine needs to skip irrelevant data blocks using column-level statistics and bloom filters"],
      correct: [0],
      concept: "Row-based formats (Avro, CSV, JSON) store entire rows contiguously, making them efficient for workloads that read/write complete records: OLTP transactions, message serialization, and write-heavy streaming. Columnar formats (Parquet, ORC) excel at analytical queries that access few columns across many rows. The choice depends on the access pattern."
    },
    {
      id: 56,
      type: "single",
      difficulty: 2,
      question: "What is the purpose of the BATCHSIZE option in SQL Server BULK INSERT?",
      options: ["It specifies how many rows are committed as a single transaction, allowing partial rollback on failure", "It limits the total number of rows that can be loaded from the source file in a single BULK INSERT call", "It controls the number of parallel threads used to read and parse the source file for faster processing", "It defines the size of the memory buffer allocated for reading file data before writing it to the table"],
      correct: [0],
      concept: "BATCHSIZE in BULK INSERT controls how many rows are committed as a single transaction. For example, BATCHSIZE = 10000 commits every 10,000 rows. This is important for managing transaction log size and enabling partial completion: if an error occurs at row 25,000, the first two batches (20,000 rows) are already committed and preserved."
    },
    {
      id: 57,
      type: "single",
      difficulty: 2,
      question: "What is the primary purpose of row group statistics stored in Parquet file metadata?",
      options: ["To enable the query engine to skip entire row groups that cannot contain matching data for a filter", "To provide data quality metrics showing the number of null values and distinct values per column group", "To optimize memory allocation by informing the engine of the exact decompressed size of each row group", "To maintain referential integrity between related Parquet files in the same directory or table partition"],
      correct: [0],
      concept: "Parquet stores min/max statistics for each column in every row group in the file footer metadata. When a query has a filter like WHERE year = 2024, the engine checks these statistics and skips row groups where the year column\'s max < 2024 or min > 2024. This is a key mechanism behind Parquet\'s predicate pushdown capability."
    },
    {
      id: 58,
      type: "single",
      difficulty: 2,
      question: "In a database execution plan, what does an \\\"Estimated Number of Rows\\\" value indicate?",
      options: ["The optimizer\\'s prediction of how many rows each operator will process, based on table statistics data", "The actual number of rows processed during the last execution of the query as recorded in the plan cache", "The maximum number of rows the operator is configured to process before spilling results to temporary disk", "The number of rows that must be buffered in memory before the operator can begin producing output results"],
      correct: [0],
      concept: "The estimated row count in execution plans reflects the query optimizer\'s cardinality estimate based on table and index statistics (histograms, density vectors). Accurate estimates are crucial for good plan selection. When estimates are significantly wrong (e.g., estimating 100 rows but actual is 1 million), the optimizer may choose suboptimal strategies."
    },
    {
      id: 59,
      type: "single",
      difficulty: 2,
      question: "What is the difference between at-least-once and exactly-once delivery semantics in stream processing?",
      options: ["At-least-once may produce duplicates if failures occur; exactly-once ensures each event is processed only once", "At-least-once processes events in strict order; exactly-once allows out-of-order processing for performance", "At-least-once requires manual checkpointing; exactly-once handles checkpointing automatically without config", "At-least-once is only available in batch mode; exactly-once is exclusive to real-time streaming frameworks"],
      correct: [0],
      concept: "At-least-once delivery guarantees every event is processed but may reprocess events after a failure, causing duplicates. Exactly-once semantics ensure each event affects the final output exactly once, typically achieved through transactional writes and idempotent operations. Exactly-once is harder to achieve and may have higher latency but prevents data inconsistencies."
    },
    {
      id: 60,
      type: "single",
      difficulty: 2,
      question: "What is the role of a staging area or staging table in bulk loading patterns?",
      options: ["A temporary holding area where raw data is loaded before being validated, transformed, and merged into target tables", "A permanent archive table that stores a copy of all data ever loaded for audit and compliance purposes", "A read-only replica of the target table used to serve queries while the main table is being loaded with data", "A system catalog table that tracks metadata about all bulk loading operations executed in the database"],
      correct: [0],
      concept: "A staging table serves as an intermediate landing zone for bulk-loaded data. Raw data is first loaded into the staging table (fast, minimal validation), then cleaned, validated, and transformed before being merged into the final target tables. This pattern isolates the raw load from business logic, enables data quality checks, and supports idempotent loads."
    },
    {
      id: 61,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are valid CDC (Change Data Capture) implementation approaches? (Select all that apply)",
      options: ["Log-based CDC that reads changes from the database transaction log without impacting source tables", "Trigger-based CDC that uses database triggers to write change records to an audit shadow table", "Timestamp-based CDC that queries rows where modified_date exceeds the last extraction timestamp value", "Index-based CDC that uses B-tree index statistics to automatically detect which rows have been modified"],
      correct: [0, 1, 2],
      concept: "There are three primary CDC approaches: (1) Log-based CDC reads the transaction log for all committed changes with minimal source impact. (2) Trigger-based CDC uses database triggers to capture changes to shadow tables but adds write overhead. (3) Timestamp-based CDC queries for rows modified since the last run using a timestamp column. Index statistics do not track row-level changes."
    },
    {
      id: 62,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are columnar file formats commonly used in big data processing? (Select all that apply)",
      options: ["Apache Parquet with row group organization and column-level statistics for predicate pushdown", "Apache ORC with built-in lightweight indexes and ACID support for Hive transactional tables", "Apache Avro with row-based layout and strong schema evolution support for streaming workloads", "CSV with plain text comma-separated values and no built-in metadata or type information storage"],
      correct: [0, 1],
      concept: "Parquet and ORC are both columnar file formats. Parquet stores data in row groups with column chunks and supports predicate pushdown via column statistics. ORC (Optimized Row Columnar) provides similar columnar benefits with additional features like bloom filters and ACID support in Hive. Avro is row-based, and CSV is a flat text format, neither are columnar."
    },
    {
      id: 63,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are benefits of using Parquet format over CSV for analytical workloads? (Select all that apply)",
      options: ["Columnar storage allows reading only the columns needed by the query reducing I/O significantly", "Built-in compression with encoding schemes like dictionary, run-length, and delta bit packing", "Column-level min/max statistics enable skipping row groups that do not match query predicates", "Human-readable text format that can be opened and inspected in any standard text editing tool"],
      correct: [0, 1, 2],
      concept: "Parquet offers three major advantages over CSV for analytics: (1) columnar storage reads only needed columns, (2) efficient encoding and compression reduce file size by 3-10x, and (3) row group statistics enable predicate pushdown to skip irrelevant data. However, Parquet is a binary format and is NOT human-readable, unlike CSV."
    },
    {
      id: 64,
      type: "multi",
      difficulty: 2,
      question: "Which of the following window types are used in stream processing for grouping events? (Select all that apply)",
      options: ["Tumbling windows that divide the stream into fixed-size non-overlapping contiguous time intervals", "Sliding windows that move forward by a slide interval and can overlap with adjacent time windows", "Session windows that dynamically group events based on activity gaps between consecutive events", "Sorting windows that reorder out-of-sequence events before passing them to downstream operators"],
      correct: [0, 1, 2],
      concept: "Stream processing supports three main window types: (1) Tumbling windows are fixed-size, non-overlapping. (2) Sliding windows have a fixed size but advance by a configurable slide interval, creating overlaps. (3) Session windows are dynamic, grouping events separated by inactivity gaps. There is no standard \'sorting window\' concept in stream processing."
    },
    {
      id: 65,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are valid options for the SQL Server BULK INSERT command? (Select all that apply)",
      options: ["FIELDTERMINATOR to specify the column delimiter character used in the source data flat file", "ROWTERMINATOR to define the character sequence marking the end of each row in the input file", "FIRSTROW to indicate the starting row number from which data loading should begin in the file", "COLUMNCOUNT to specify the exact number of columns that must exist in each row of the data file"],
      correct: [0, 1, 2],
      concept: "BULK INSERT supports FIELDTERMINATOR (column delimiter), ROWTERMINATOR (row delimiter), and FIRSTROW (starting row, useful for skipping headers). There is no COLUMNCOUNT option; instead, the column mapping is determined by the table definition and optional format file. Other valid options include MAXERRORS, BATCHSIZE, TABLOCK, and ERRORFILE."
    },
    {
      id: 66,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are advantages of log-based CDC over trigger-based CDC? (Select all that apply)",
      options: ["Minimal performance impact on the source database because it reads logs asynchronously after commit", "Captures all types of changes including DDL changes, inserts, updates, and deletes from the log", "Does not require any modifications to the source database schema such as adding triggers or columns", "Simpler to implement because it does not require understanding the database\\'s internal log format at all"],
      correct: [0, 2],
      concept: "Log-based CDC advantages include: (1) minimal source impact since it reads committed log entries asynchronously, and (2) no schema modifications needed on source tables. Trigger-based CDC requires creating triggers on each table and a shadow table for changes. However, log-based CDC does NOT typically capture DDL changes (it captures DML), and it is NOT simpler to implement."
    },
    {
      id: 67,
      type: "multi",
      difficulty: 2,
      question: "Which scenarios benefit most from using a composite index on columns (A, B, C)? (Select all that apply)",
      options: ["Queries that filter on column A alone using equality or range predicates in the WHERE clause", "Queries that filter on columns A and B together in the WHERE clause using equality comparisons", "Queries that filter on columns A, B, and C together in the WHERE clause for highly selective lookups", "Queries that filter only on column C alone without any predicate on columns A or B in the query"],
      correct: [0, 1, 2],
      concept: "A composite index on (A, B, C) follows the leftmost prefix rule. It efficiently supports queries filtering on: A alone, (A, B) together, or (A, B, C) together. A query filtering only on C cannot use this index for seeking because C is not the leftmost column. The optimizer might still scan the full index if it\\'s narrower than the table, but a seek is not possible."
    },
    {
      id: 68,
      type: "multi",
      difficulty: 3,
      question: "Which of the following are characteristics of Apache Avro as a data serialization format? (Select all that apply)",
      options: ["Row-oriented storage layout that makes sequential writes and record-level access patterns efficient", "Schema is stored alongside the data in the file header enabling schema evolution with compatibility rules", "Compact binary encoding that is smaller and faster to serialize than equivalent JSON or XML representations", "Columnar storage with column-level statistics that enables predicate pushdown for analytical queries only"],
      correct: [0, 1, 2],
      concept: "Avro is characterized by: (1) row-oriented storage for efficient writes, (2) schema stored in the file header with support for forward/backward compatibility, and (3) compact binary encoding for efficient serialization. Avro does NOT use columnar storage or support column-level predicate pushdown; those are features of Parquet and ORC."
    },
    {
      id: 69,
      type: "multi",
      difficulty: 3,
      question: "Which of the following execution plan operators indicate that the query is using indexes effectively? (Select all that apply)",
      options: ["Index Seek that navigates the B-tree structure to directly locate matching rows using the index key", "Index-Only Scan (Covering Index Scan) that retrieves all needed columns from the index without table access", "Key Lookup (Bookmark Lookup) that follows the index pointer to the base table for non-covered columns", "Full Table Scan (Seq Scan) that reads every page in the table heap to find rows matching the predicate"],
      correct: [0, 1],
      concept: "Index Seek and Index-Only Scan (Covering Index Scan) indicate effective index usage. An Index Seek efficiently navigates to specific rows, and a Covering Index Scan reads all needed data from the index alone. Key Lookup indicates the index doesn\\'t cover all columns (partially effective). Full Table Scan means no index is being used for filtering."
    },
    {
      id: 70,
      type: "multi",
      difficulty: 3,
      question: "Which of the following are valid refresh strategies for materialized views? (Select all that apply)",
      options: ["ON COMMIT refresh that updates the materialized view automatically after each transaction commits", "ON DEMAND refresh that requires manual or scheduled execution to update the materialized view data", "INCREMENTAL refresh that applies only the changes to the base tables rather than recomputing entirely", "ON READ refresh that transparently computes results at query time if the materialized view is stale"],
      correct: [0, 1, 2],
      concept: "Materialized view refresh strategies include: (1) ON COMMIT which refreshes automatically after each transaction (low latency but higher write cost), (2) ON DEMAND which refreshes when explicitly triggered (flexible scheduling), and (3) INCREMENTAL (FAST) refresh which applies only delta changes instead of full recomputation. ON READ refresh is not a standard strategy."
    },
    {
      id: 71,
      type: "multi",
      difficulty: 3,
      question: "Which of the following factors cause the query optimizer to choose a full table scan over an index seek? (Select all that apply)",
      options: ["The query returns a large percentage of the table rows making index seeks plus lookups more expensive", "The table has no suitable index for the columns referenced in the WHERE clause of the query statement", "Table statistics are outdated or missing causing the optimizer to overestimate the cost of index access", "The query includes a LIMIT clause that restricts the output to only the first 10 matching result rows"],
      correct: [0, 1, 2],
      concept: "Full table scans are chosen when: (1) high selectivity means most rows match so sequential scan is cheaper than many random index lookups, (2) no suitable index exists for the filter columns, and (3) stale statistics cause the optimizer to make poor cost estimates. A LIMIT clause typically encourages the optimizer to use indexes for early termination, not full scans."
    },
    {
      id: 72,
      type: "multi",
      difficulty: 3,
      question: "Which of the following are challenges when using event time-based windowing in stream processing? (Select all that apply)",
      options: ["Events may arrive out of order requiring the system to buffer and reorder events before processing", "Watermark advancement must balance completeness (waiting for late events) against latency of results", "Clock skew between distributed source systems can cause events to have inconsistent timestamp values", "Event time requires parsing timestamps from events which is always slower than using processing time"],
      correct: [0, 1, 2],
      concept: "Event time windowing challenges include: (1) out-of-order arrival requires buffering and reordering logic, (2) watermark tuning is a tradeoff between completeness and latency, and (3) clock skew across distributed sources can lead to inaccurate timestamps. While parsing timestamps has some overhead, modern systems handle it efficiently and it is not always a significant bottleneck."
    },
    {
      id: 73,
      type: "multi",
      difficulty: 3,
      question: "Which of the following are true about the PostgreSQL COPY command? (Select all that apply)",
      options: ["COPY FROM loads data from a file into a table and is significantly faster than individual INSERT statements", "COPY TO exports data from a table or query result to a file in the specified format for external use", "The \\\\COPY meta-command in psql runs COPY on the client side, allowing access to client-local files directly", "COPY automatically creates the target table structure if it does not already exist in the database schema"],
      correct: [0, 1, 2],
      concept: "PostgreSQL COPY features: (1) COPY FROM is the fastest way to bulk load data, (2) COPY TO exports data to files. (3) The psql \\\\COPY command runs on the client side, enabling loading from client-local files (regular COPY requires server-side file access). COPY does NOT auto-create tables; the target table must exist before loading."
    },
    {
      id: 74,
      type: "multi",
      difficulty: 3,
      question: "Which query plan characteristics suggest that a query needs optimization? (Select all that apply)",
      options: ["Large discrepancy between estimated and actual row counts indicating stale or missing statistics", "Full table scan on a large table when the query only needs a small number of selective matching rows", "Sort operator with spill to disk warning indicating insufficient memory for in-memory sort operation", "Index Seek operator on a highly selective unique index column returning exactly one matching row result"],
      correct: [0, 1, 2],
      concept: "Query optimization red flags include: (1) estimated vs actual row count mismatches indicating statistics problems, (2) full table scans when only a few rows are needed (missing or unused index), and (3) sort spills to disk indicating memory pressure. An Index Seek on a selective unique index returning one row is actually optimal and does NOT suggest a problem."
    },
    {
      id: 75,
      type: "multi",
      difficulty: 3,
      question: "Which of the following are valid approaches to handle slowly changing dimension (SCD) Type 2 in incremental processing? (Select all that apply)",
      options: ["Insert a new row with the updated values and set the effective date, marking the old row as expired", "Maintain start_date and end_date columns to track the validity period of each version of the record", "Use a current_flag column (Y/N) to distinguish the active current version from historical prior versions", "Overwrite the existing row with new values and discard all historical versions to save storage space"],
      correct: [0, 1, 2],
      concept: "SCD Type 2 preserves history by creating new rows for changes. Common implementation patterns include: (1) inserting new rows with effective dates and expiring old rows, (2) maintaining start_date/end_date validity periods, and (3) using a current_flag indicator. Option D describes SCD Type 1 (overwrite), which does NOT preserve history."
    },
    {
      id: 76,
      type: "multi",
      difficulty: 3,
      question: "Which of the following caching strategies can a database system use to improve query performance? (Select all that apply)",
      options: ["Result set caching that stores complete query results and returns them for identical repeated queries", "Buffer pool caching that keeps frequently accessed data pages in memory to avoid disk I/O operations", "Plan caching that stores compiled execution plans to avoid recompilation for repeated query patterns", "Schema caching that stores table definitions permanently on disk so they never need to be loaded again"],
      correct: [0, 1, 2],
      concept: "Database caching strategies include: (1) Result set caching returns precomputed results for identical queries. (2) Buffer pool caching keeps hot data pages in memory. (3) Plan caching avoids recompiling execution plans for frequently executed queries. Schema caching exists but schemas are always stored on disk as catalog metadata, not as a performance caching mechanism."
    },
    {
      id: 77,
      type: "multi",
      difficulty: 3,
      question: "Which of the following are true about the differences between Parquet and ORC file formats? (Select all that apply)",
      options: ["Parquet is more widely supported across the big data ecosystem including Spark, Presto, and Athena", "ORC provides native ACID transaction support when used with Apache Hive managed transactional tables", "Parquet uses row groups as its main data organization unit while ORC uses stripes for the same purpose", "ORC files are always smaller than Parquet files regardless of data type distribution or compression codec"],
      correct: [0, 1, 2],
      concept: "Key Parquet vs ORC differences: (1) Parquet has broader ecosystem support across Spark, Presto, Athena, BigQuery, etc. (2) ORC supports ACID transactions in Hive. (3) Parquet organizes data into row groups while ORC uses stripes. The size comparison (option D) is false; the relative size depends on data characteristics, encoding, and compression settings."
    },
    {
      id: 78,
      type: "multi",
      difficulty: 3,
      question: "When designing an incremental loading pipeline, which of the following are important considerations? (Select all that apply)",
      options: ["Handling deletes in the source system which may not be captured by timestamp-based watermark extraction", "Ensuring idempotency so that re-running the same incremental load does not produce duplicate records in target", "Choosing the appropriate watermark column that is reliably updated on every insert and update operation", "Using full table scans for every incremental run to guarantee that no changed records are ever missed"],
      correct: [0, 1, 2],
      concept: "Key incremental loading considerations: (1) Deletes are hard to detect with watermarks; soft deletes or CDC may be needed. (2) Idempotency through MERGE/upsert logic prevents duplicates on re-runs. (3) The watermark column must be reliably updated on every change. Full table scans for every run (option D) defeats the purpose of incremental loading."
    },
    {
      id: 79,
      type: "multi",
      difficulty: 3,
      question: "Which of the following are true about index maintenance overhead in transactional databases? (Select all that apply)",
      options: ["Every INSERT operation must update all indexes on the table, adding write overhead per index present", "UPDATE operations on indexed columns require removing the old index entry and inserting a new one in place", "DELETE operations must remove corresponding entries from all indexes on the table adding removal overhead", "SELECT queries with covering indexes cause index maintenance overhead due to reading from the index structure"],
      correct: [0, 1, 2],
      concept: "Index maintenance overhead applies to write operations: (1) INSERTs must add entries to every index. (2) UPDATEs on indexed columns require delete + insert in each affected index. (3) DELETEs must remove entries from all indexes. SELECT operations only read indexes and do NOT cause maintenance overhead. This is why over-indexing hurts write-heavy workloads."
    },
    {
      id: 80,
      type: "multi",
      difficulty: 3,
      question: "Which of the following are valid exactly-once processing strategies in stream processing? (Select all that apply)",
      options: ["Idempotent writes where reprocessing the same event produces the same result without side effects", "Transactional writes that atomically commit both the output and the checkpoint offset together as one unit", "Deduplication using unique event IDs to detect and discard events that have already been processed before", "Increasing the replication factor of the input topic to ensure messages are never lost during broker failures"],
      correct: [0, 1, 2],
      concept: "Exactly-once strategies include: (1) Idempotent writes (same operation applied multiple times yields same result). (2) Transactional writes (atomically commit output + offset). (3) Deduplication using unique event IDs. Increasing replication factor (option D) prevents data loss (durability) but does not prevent duplicate processing, so it does not provide exactly-once semantics."
    },
    {
      id: 81,
      type: "multi",
      difficulty: 3,
      question: "Which of the following are advantages of using a staging table pattern for bulk data loading? (Select all that apply)",
      options: ["Data validation and quality checks can be performed before merging data into production target tables", "Failed loads can be retried by truncating and reloading the staging table without affecting production data", "Transformation logic can be applied using SQL after loading raw data rather than during the load process", "Staging tables automatically enforce foreign key constraints against the production target tables on insert"],
      correct: [0, 1, 2],
      concept: "Staging table advantages: (1) Enables pre-merge data quality validation. (2) Provides safe retry capability by truncating and reloading without production impact. (3) Allows SQL-based transformations after the fast raw load. Staging tables typically do NOT enforce foreign keys against production tables; constraints are validated during the merge step."
    },
    {
      id: 82,
      type: "multi",
      difficulty: 3,
      question: "Which of the following EXPLAIN plan metrics are important to analyze for query performance tuning? (Select all that apply)",
      options: ["Estimated cost that represents the optimizer\\'s relative measure of resource consumption for each operator", "Actual rows versus estimated rows comparison to identify cardinality estimation errors in the plan", "Memory grant requested and actual memory used to detect potential memory spill-to-disk situations", "The color coding of operators which indicates whether the operator is a bottleneck in the plan always"],
      correct: [0, 1, 2],
      concept: "Key EXPLAIN plan metrics for tuning: (1) Cost estimates help identify the most expensive operators. (2) Actual vs estimated row comparisons reveal statistics problems. (3) Memory grant analysis detects spill-to-disk situations that degrade performance. Color coding (option D) is a UI feature of some tools and does not inherently indicate bottlenecks."
    },
    {
      id: 83,
      type: "multi",
      difficulty: 3,
      question: "Which of the following are true about the MERGE statement used in incremental loading patterns? (Select all that apply)",
      options: ["MERGE can perform INSERT, UPDATE, and DELETE operations in a single atomic statement based on conditions", "The WHEN MATCHED clause handles existing rows that need to be updated with new values from the source", "The WHEN NOT MATCHED clause handles new rows that need to be inserted into the target table from source", "MERGE is always faster than separate INSERT and UPDATE statements regardless of data volume or conditions"],
      correct: [0, 1, 2],
      concept: "MERGE (also called UPSERT) capabilities: (1) It combines INSERT, UPDATE, and DELETE in one atomic statement. (2) WHEN MATCHED handles updates to existing rows. (3) WHEN NOT MATCHED BY TARGET handles inserts of new rows. However, MERGE is NOT always faster; for very large datasets or simple patterns, separate statements with batch processing may perform better."
    },
    {
      id: 84,
      type: "multi",
      difficulty: 3,
      question: "Which of the following are true about backpressure in streaming systems? (Select all that apply)",
      options: ["Backpressure occurs when a downstream consumer cannot keep up with the rate of incoming data from upstream", "It can cause memory exhaustion and out-of-memory errors if unbounded data is buffered without any limits set", "Strategies to handle backpressure include rate limiting, buffering with bounds, and scaling out consumers", "Backpressure only affects batch processing systems and is not relevant to real-time streaming architectures"],
      correct: [0, 1, 2],
      concept: "Backpressure in streaming: (1) It occurs when consumers are slower than producers. (2) Without bounds, buffering can exhaust memory. (3) Handling strategies include rate limiting upstream producers, bounded buffers with overflow policies, and horizontal scaling of consumer instances. Backpressure is primarily a streaming concern, not a batch processing issue."
    },
    {
      id: 85,
      type: "multi",
      difficulty: 3,
      question: "Which of the following are characteristics of a Merge Sort Join in query execution plans? (Select all that apply)",
      options: ["Both inputs must be sorted on the join key before the merge operation can begin processing rows", "It processes both sorted inputs in a single sequential pass making it efficient for pre-sorted large datasets", "It is particularly efficient when both inputs already have clustered indexes or sort order on the join key", "It requires building a hash table in memory from one input before probing it with the other input rows"],
      correct: [0, 1, 2],
      concept: "Merge Sort Join characteristics: (1) Both inputs must be sorted on the join key (may require explicit sort operators if not pre-sorted). (2) It merges in a single sequential pass through both sorted inputs. (3) It is most efficient when data is already sorted via clustered indexes. Building a hash table (option D) describes a Hash Join, not a Merge Join."
    },
    {
      id: 86,
      type: "tf",
      difficulty: 3,
      question: "In incremental loading, a watermark-based approach can reliably detect hard deletes (physical row deletions) in the source system without additional mechanisms.",
      options: ["True: Watermark extraction compares timestamps and can detect when rows have been physically removed from source", "False: Watermark extraction only captures rows above the threshold and cannot detect rows that no longer exist in source"],
      correct: [1],
      concept: "Watermark-based incremental loading queries rows WHERE watermark_column > @last_value. Physically deleted rows no longer exist in the source table, so they will never appear in the extraction query results. To detect hard deletes, additional mechanisms are needed such as soft delete flags, CDC log-based capture of DELETE operations, or periodic full reconciliation."
    },
    {
      id: 87,
      type: "tf",
      difficulty: 3,
      question: "A Parquet file stores its schema and column statistics in the file footer, which is read first when opening the file for querying.",
      options: ["True: Parquet stores metadata including schema and column statistics in the file footer for efficient access", "False: Parquet stores metadata in the file header at the beginning so it can be read sequentially from the start"],
      correct: [0],
      concept: "Parquet files store metadata (schema, row group locations, column statistics) in the file footer. When a query engine opens a Parquet file, it reads the footer first to understand the file structure, check column statistics for predicate pushdown, and determine which row groups need to be read. A small magic number at the end locates the footer."
    },
    {
      id: 88,
      type: "tf",
      difficulty: 3,
      question: "A composite index on columns (A, B, C) can efficiently support a query that filters only on column B without any predicate on column A.",
      options: ["True: The composite index can seek to any individual column regardless of position in the index definition", "False: The composite index requires the leftmost prefix column A in the predicate to enable an efficient index seek"],
      correct: [1],
      concept: "Composite indexes follow the leftmost prefix rule. An index on (A, B, C) organizes data sorted by A first, then by B within each A value, then by C. Without a predicate on A, the index cannot narrow down the search space for B because B values are scattered across different A groups. The optimizer would need a full index scan rather than a seek."
    },
    {
      id: 89,
      type: "tf",
      difficulty: 3,
      question: "In stream processing, using processing time for windowing always produces the same results regardless of when events arrive or how they are ordered.",
      options: ["True: Processing time is deterministic because it uses the system clock which is consistent across all runs", "False: Processing time results vary with arrival delays and system load making them non-deterministic across runs"],
      correct: [1],
      concept: "Processing time windowing assigns events to windows based on when the engine processes them, which depends on arrival delays, system load, and scheduling. The same set of events processed at different times or under different load conditions may be assigned to different windows, producing different results. Event time windowing provides deterministic results."
    },
    {
      id: 90,
      type: "tf",
      difficulty: 3,
      question: "The BULK INSERT command in SQL Server can load data directly from a remote URL or HTTP endpoint without any intermediate file storage.",
      options: ["True: BULK INSERT supports HTTP and HTTPS URLs as data sources for direct remote file loading operations", "False: BULK INSERT requires data files to be accessible via the local file system or a UNC network path only"],
      correct: [1],
      concept: "SQL Server\'s BULK INSERT requires the source file to be accessible via the local file system or a UNC (Universal Naming Convention) network path (e.g., \\\\\\\\server\\\\share\\\\file.csv). It does not support loading directly from HTTP/HTTPS URLs. To load from remote URLs, you must first download the file to an accessible location or use other tools like SSIS or OPENROWSET."
    },
    {
      id: 91,
      type: "tf",
      difficulty: 3,
      question: "A materialized view automatically stays in sync with its base tables in real time without requiring any refresh operation in most database systems.",
      options: ["True: Materialized views automatically reflect all changes to base tables instantly without manual refresh", "False: Materialized views require explicit refresh operations to synchronize with base table changes in most systems"],
      correct: [1],
      concept: "In most database systems, materialized views are NOT automatically refreshed. They require explicit refresh operations (manual, scheduled, or triggered). Some databases support ON COMMIT refresh which updates after each transaction, but this adds overhead. The default behavior in PostgreSQL, Oracle, and most systems requires manual REFRESH MATERIALIZED VIEW commands."
    },
    {
      id: 92,
      type: "tf",
      difficulty: 3,
      question: "An Avro file can be read by a consumer using a different schema than the one used by the producer, as long as the schemas are compatible according to Avro\\'s schema resolution rules.",
      options: ["True: Avro supports schema evolution where reader and writer schemas can differ if they are compatible", "False: Avro requires the reader to use the exact same schema version that the writer used to serialize data"],
      correct: [0],
      concept: "Avro supports schema evolution through schema resolution rules. The writer\'s schema (stored with the data) and the reader\'s schema (provided at read time) can differ. Fields added in the reader\'s schema use default values, and fields removed are ignored. This enables forward and backward compatibility as long as compatibility rules are followed."
    },
    {
      id: 93,
      type: "tf",
      difficulty: 3,
      question: "Adding more non-clustered indexes to a table always improves overall database performance by speeding up all types of operations.",
      options: ["True: More indexes mean more access paths for the optimizer, which always improves query and write performance", "False: Additional indexes improve read performance but degrade write performance due to index maintenance overhead"],
      correct: [1],
      concept: "While non-clustered indexes speed up read queries by providing fast lookup paths, each additional index adds overhead to INSERT, UPDATE, and DELETE operations because the database must maintain all indexes. Over-indexing a write-heavy table can significantly degrade write performance. The optimal index strategy balances read and write workload requirements."
    },
    {
      id: 94,
      type: "tf",
      difficulty: 3,
      question: "In a full table scan, the database reads every data page in the table regardless of whether a WHERE clause is present in the query.",
      options: ["True: A full table scan reads all pages and applies the WHERE clause filter after reading each page into memory", "False: A full table scan intelligently skips pages that cannot match the WHERE clause using page-level metadata"],
      correct: [0],
      concept: "A full table scan (Sequential Scan) reads every data page in the table into the buffer pool and then applies the WHERE clause filter to each row in memory. Unlike columnar formats with statistics, heap tables in row-based storage generally don\'t have page-level metadata to skip pages. This is why full table scans are expensive on large tables."
    },
    {
      id: 95,
      type: "tf",
      difficulty: 3,
      question: "Micro-batch streaming in Apache Spark Structured Streaming achieves exactly the same latency as true record-at-a-time processing in Apache Flink.",
      options: ["True: Both approaches process events with equivalent latency since modern hardware eliminates any difference", "False: Micro-batch inherently adds latency because it collects events into batches before processing them"],
      correct: [1],
      concept: "Micro-batch processing inherently has higher latency than true record-at-a-time processing. Spark Structured Streaming collects events for the duration of the trigger interval before processing the batch, adding latency equal to at least the trigger interval. Apache Flink processes each event immediately as it arrives, achieving sub-millisecond latency in many cases."
    },
    {
      id: 96,
      type: "tf",
      difficulty: 3,
      question: "The PostgreSQL COPY command runs on the server side by default and requires the data file to be accessible from the database server\\'s file system.",
      options: ["True: The COPY command operates on the server and requires server-side file access for reading or writing", "False: The COPY command operates on the client side and reads files from the client machine\\'s file system"],
      correct: [0],
      concept: "PostgreSQL\'s COPY command runs on the database server and requires the file to be accessible from the server\'s file system. This means the file must be on the server or on a network path the server can access. For client-side file access, the psql \\\\COPY meta-command is used instead, which streams data between the client and server."
    },
    {
      id: 97,
      type: "tf",
      difficulty: 3,
      question: "A clustered index seek is typically faster than a non-clustered index seek followed by a key lookup because it avoids the extra I/O of going back to the base table.",
      options: ["True: Clustered index seek retrieves the full row directly since data is stored in the index leaf level pages", "False: Non-clustered index seek with key lookup is always faster because the index structure is more compact"],
      correct: [0],
      concept: "A clustered index seek navigates the B-tree and lands directly on the data row (since leaf pages contain the actual data rows). A non-clustered index seek finds the index entry but then needs an additional key lookup (bookmark lookup) to retrieve non-covered columns from the base table. This extra I/O makes non-clustered seeks with lookups slower."
    },
    {
      id: 98,
      type: "tf",
      difficulty: 3,
      question: "CSV files support native data type enforcement, ensuring that numeric columns cannot contain string values when the file is read by a processing engine.",
      options: ["True: CSV format includes column data type definitions in its header that enforce type constraints on values", "False: CSV stores all values as plain text strings with no native type information or enforcement mechanism"],
      correct: [1],
      concept: "CSV files store all data as plain text strings without any native data type information or enforcement. A column intended for integers could contain \'hello\' and the CSV format would not flag this as an error. Type checking and enforcement must be performed by the application or processing engine reading the CSV, not by the format itself."
    },
    {
      id: 99,
      type: "tf",
      difficulty: 3,
      question: "In database result caching, the cache must be invalidated whenever the underlying base table data changes to prevent serving stale results.",
      options: ["True: Result cache entries must be invalidated on base table changes to ensure query results remain accurate", "False: Result caches can serve stale data indefinitely because most analytical queries do not require fresh data"],
      correct: [0],
      concept: "Result cache invalidation is essential for correctness. When base table data changes (INSERT, UPDATE, DELETE), cached results derived from those tables become stale and must be invalidated or refreshed. Most database result cache implementations automatically track dependencies between cached results and base tables, invalidating entries when underlying data changes."
    },
    {
      id: 100,
      type: "tf",
      difficulty: 3,
      question: "A query that uses ORDER BY on a column with a clustered index will always avoid an explicit sort operation in the execution plan because the data is already physically sorted.",
      options: ["True: The clustered index guarantees physical sort order so the optimizer always avoids additional sort steps", "False: The optimizer may still add a sort if the query plan uses parallelism or accesses data through other paths"],
      correct: [1],
      concept: "While a clustered index stores data in sorted order, the optimizer may still add an explicit sort in certain scenarios: (1) parallel query plans may produce results from multiple threads in non-deterministic order requiring a final sort, (2) if the query accesses data through a non-clustered index path, the data won\'t be in clustered order, (3) if ORDER BY direction differs from the index."
    }
  ]
};

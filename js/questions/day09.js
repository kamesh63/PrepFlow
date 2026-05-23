window.QUIZ_DATA = window.QUIZ_DATA || {};
window.QUIZ_DATA["day09"] = {
  title: "Data Engineering Fundamentals",
  category: "de",
  topics: ["Role of Data Engineer", "OLTP vs OLAP", "ETL vs ELT", "Batch vs Streaming", "Data Structures & Formats"],
  questions: [
    // ===== SINGLE CHOICE, DIFFICULTY 1 (Questions 1-20) =====
    // Topic: Role of Data Engineer (1-4)
    {
      id: 1,
      type: "single",
      difficulty: 1,
      question: "Which role is primarily responsible for building and maintaining data pipelines that move data from source systems to analytical platforms?",
      options: ["Data Scientist", "Data Engineer", "Data Analyst", "Database Administrator"],
      correct: [1],
      concept: "A Data Engineer is primarily responsible for designing, building, and maintaining the infrastructure and pipelines that transport data from source systems to analytical platforms. Data Scientists focus on modeling, Data Analysts on reporting, and DBAs on database administration."
    },
    {
      id: 2,
      type: "single",
      difficulty: 1,
      question: "What is the primary focus of a Data Analyst compared to a Data Engineer?",
      options: ["Building data ingestion pipelines", "Creating dashboards and reports from existing data", "Training machine learning models on large datasets", "Designing distributed storage architectures"],
      correct: [1],
      concept: "Data Analysts focus on interpreting data and creating dashboards, reports, and visualizations to support business decisions. Data Engineers build the pipelines, Data Scientists build ML models, and architects design storage systems."
    },
    {
      id: 3,
      type: "single",
      difficulty: 1,
      question: "Which phase of the data pipeline lifecycle involves extracting raw data from operational source systems?",
      options: ["Transformation", "Ingestion", "Serving", "Orchestration"],
      correct: [1],
      concept: "Ingestion is the phase where raw data is extracted from operational source systems and brought into the data platform. Transformation cleans and reshapes data, Serving makes it available to consumers, and Orchestration coordinates the workflow."
    },
    {
      id: 4,
      type: "single",
      difficulty: 1,
      question: "A Data Scientist typically differs from a Data Engineer in that the Data Scientist focuses more on:",
      options: ["Pipeline reliability and monitoring", "Statistical modeling and machine learning", "Schema design and data modeling", "Infrastructure provisioning and scaling"],
      correct: [1],
      concept: "Data Scientists focus on statistical modeling, machine learning, and extracting insights from data. Data Engineers focus on building reliable pipelines, designing schemas, and managing data infrastructure."
    },
    // Topic: OLTP vs OLAP (5-8)
    {
      id: 5,
      type: "single",
      difficulty: 1,
      question: "Which property set is associated with OLTP systems to ensure reliable transaction processing?",
      options: ["BASE properties", "ACID properties", "CAP theorem constraints", "CRUD operations only"],
      correct: [1],
      concept: "OLTP systems rely on ACID properties (Atomicity, Consistency, Isolation, Durability) to ensure reliable transaction processing. BASE (Basically Available, Soft-state, Eventually consistent) is associated with NoSQL systems."
    },
    {
      id: 6,
      type: "single",
      difficulty: 1,
      question: "OLAP systems are primarily optimized for which type of operation?",
      options: ["High-frequency single-row inserts", "Complex analytical queries and aggregations", "Real-time point lookups by primary key", "Two-phase commit transactions"],
      correct: [1],
      concept: "OLAP (Online Analytical Processing) systems are optimized for complex analytical queries involving aggregations, joins, and scans over large datasets. OLTP systems handle high-frequency transactional inserts and point lookups."
    },
    {
      id: 7,
      type: "single",
      difficulty: 1,
      question: "Which storage layout is most commonly used in OLAP systems to speed up analytical queries?",
      options: ["Row-oriented storage", "Columnar storage", "Document-oriented storage", "Key-value storage"],
      correct: [1],
      concept: "OLAP systems typically use columnar storage, which stores data by columns rather than rows. This enables efficient compression and fast aggregation queries that only need to read specific columns, avoiding full row scans."
    },
    {
      id: 8,
      type: "single",
      difficulty: 1,
      question: "In an OLTP database, data is typically stored in which normal form to reduce redundancy?",
      options: ["Denormalized star schema", "Third normal form (3NF) or higher", "First normal form only", "Completely unnormalized flat tables"],
      correct: [1],
      concept: "OLTP databases are typically normalized to 3NF or higher to minimize data redundancy and ensure data integrity during frequent write operations. OLAP systems often use denormalized schemas like star schemas for query performance."
    },
    // Topic: ETL vs ELT (9-12)
    {
      id: 9,
      type: "single",
      difficulty: 1,
      question: "In a traditional ETL pipeline, where does data transformation primarily occur?",
      options: ["Inside the source database system", "On a dedicated transformation server before loading", "Inside the target data warehouse after loading", "On the client application at query time"],
      correct: [1],
      concept: "In traditional ETL (Extract, Transform, Load), data is transformed on a dedicated transformation server or ETL engine before being loaded into the target system. In ELT, raw data is loaded first and transformed inside the target system."
    },
    {
      id: 10,
      type: "single",
      difficulty: 1,
      question: "Which of the following is a well-known traditional ETL tool?",
      options: ["Apache Spark", "Informatica PowerCenter", "dbt (data build tool)", "Apache Kafka"],
      correct: [1],
      concept: "Informatica PowerCenter is a classic ETL tool that performs extraction, transformation, and loading. Apache Spark is a general-purpose engine, dbt is an ELT transformation tool, and Kafka is a streaming platform."
    },
    {
      id: 11,
      type: "single",
      difficulty: 1,
      question: "What is a key advantage of ELT over traditional ETL in cloud environments?",
      options: ["It requires less storage in the target system", "It leverages the processing power of the target system for transformations", "It eliminates the need for a staging area entirely", "It guarantees faster extraction from source systems"],
      correct: [1],
      concept: "ELT leverages the massive compute power of modern cloud data warehouses (like BigQuery, Snowflake, Redshift) to perform transformations after loading raw data. This avoids bottlenecks on a separate ETL server."
    },
    {
      id: 12,
      type: "single",
      difficulty: 1,
      question: "In ELT architecture, raw data is first loaded into the target system and then transformed using:",
      options: ["External ETL server processing", "SQL queries or transformation tools within the target", "Client-side application logic", "Source system stored procedures"],
      correct: [1],
      concept: "In ELT, transformations happen inside the target system using SQL queries or tools like dbt. The raw data is loaded first, preserving the original data, and then transformed using the target system\'s compute resources."
    },
    // Topic: Batch vs Streaming (13-16)
    {
      id: 13,
      type: "single",
      difficulty: 1,
      question: "Which processing pattern is best described as collecting data over a time window and processing it all at once?",
      options: ["Stream processing", "Batch processing", "Event-driven processing", "Micro-batch processing"],
      correct: [1],
      concept: "Batch processing collects data over a defined time window (e.g., hourly, nightly) and processes the entire batch at once. Stream processing handles data continuously as it arrives, event by event."
    },
    {
      id: 14,
      type: "single",
      difficulty: 1,
      question: "Apache Kafka is primarily classified as which type of platform?",
      options: ["Batch processing engine", "Distributed event streaming platform", "Relational database system", "ETL orchestration framework"],
      correct: [1],
      concept: "Apache Kafka is a distributed event streaming platform used for building real-time data pipelines and streaming applications. It provides durable, high-throughput, publish-subscribe messaging."
    },
    {
      id: 15,
      type: "single",
      difficulty: 1,
      question: "A nightly job that aggregates all daily sales transactions and loads them into a data warehouse is an example of:",
      options: ["Real-time stream processing", "Batch processing", "Complex event processing", "Change data capture"],
      correct: [1],
      concept: "A nightly aggregation job is a classic example of batch processing. Data is accumulated throughout the day and processed in a single batch run, typically during off-peak hours."
    },
    {
      id: 16,
      type: "single",
      difficulty: 1,
      question: "Which delivery semantic guarantees that every message is processed exactly one time with no duplicates and no data loss?",
      options: ["At-most-once delivery", "At-least-once delivery", "Exactly-once delivery", "Best-effort delivery"],
      correct: [2],
      concept: "Exactly-once delivery guarantees each message is processed exactly one time — no duplicates and no data loss. At-most-once may lose messages, at-least-once may produce duplicates, and best-effort has no guarantees."
    },
    // Topic: Data Structures & Formats (17-20)
    {
      id: 17,
      type: "single",
      difficulty: 1,
      question: "Apache Parquet stores data in which layout to optimize analytical query performance?",
      options: ["Row-oriented layout", "Columnar layout", "Document-oriented layout", "Graph-based layout"],
      correct: [1],
      concept: "Apache Parquet uses a columnar storage layout where values from each column are stored contiguously. This enables efficient compression, column pruning, and fast analytical queries that only read needed columns."
    },
    {
      id: 18,
      type: "single",
      difficulty: 1,
      question: "Which data format natively supports schema evolution, allowing fields to be added or removed without breaking readers?",
      options: ["CSV", "Apache Avro", "Fixed-width text", "Raw JSON lines"],
      correct: [1],
      concept: "Apache Avro has built-in support for schema evolution. Its schema is stored with the data, and readers can use schema resolution rules to handle added, removed, or renamed fields gracefully."
    },
    {
      id: 19,
      type: "single",
      difficulty: 1,
      question: "What is a key disadvantage of using CSV files for large-scale data engineering workloads?",
      options: ["CSV files cannot be read by spreadsheet applications", "CSV lacks a schema definition, leading to parsing ambiguity and type inference issues", "CSV files are always larger than binary formats due to mandatory headers", "CSV cannot represent hierarchical or nested data natively"],
      correct: [1],
      concept: "CSV files lack a formal schema definition, which causes parsing ambiguity (delimiter conflicts, quoting issues) and type inference problems. While CSV can be read by spreadsheets and does support headers, it struggles with schema enforcement."
    },
    {
      id: 20,
      type: "single",
      difficulty: 1,
      question: "JSON is commonly preferred over CSV when the data contains:",
      options: ["Only flat tabular records with uniform columns", "Nested and hierarchical structures", "Fixed-width numeric-only fields", "Binary-encoded image payloads"],
      correct: [1],
      concept: "JSON natively supports nested and hierarchical structures through objects and arrays, making it ideal for semi-structured data. CSV is better suited for flat, tabular data with uniform columns."
    },
    // ===== SINGLE CHOICE, DIFFICULTY 1 (Questions 21-35) =====
    // Topic: Role of Data Engineer (21-23)
    {
      id: 21,
      type: "single",
      difficulty: 1,
      question: "Which of the following tasks is most commonly performed by a Data Engineer?",
      options: ["Designing A/B tests for marketing campaigns", "Building automated data ingestion workflows", "Creating executive PowerPoint presentations", "Conducting customer interviews for product feedback"],
      correct: [1],
      concept: "Data Engineers build automated data ingestion workflows (pipelines) to move data from sources to destinations. A/B tests are designed by analysts/scientists, presentations by analysts, and interviews by product managers."
    },
    {
      id: 22,
      type: "single",
      difficulty: 1,
      question: "The data pipeline lifecycle typically ends with which phase that makes processed data available to end users?",
      options: ["Extraction", "Transformation", "Serving and analytics", "Source system integration"],
      correct: [2],
      concept: "The data pipeline lifecycle ends with the Serving phase, where processed data is made available to end users through dashboards, APIs, data marts, or machine learning feature stores."
    },
    // Topic: OLTP vs OLAP (23-25)
    {
      id: 23,
      type: "single",
      difficulty: 1,
      question: "Which workload pattern is characteristic of OLTP systems?",
      options: ["Running complex aggregation queries across millions of rows", "Processing many short, simple read/write transactions per second", "Performing full table scans for trend analysis", "Generating monthly summary reports for executives"],
      correct: [1],
      concept: "OLTP systems are characterized by high volumes of short, simple transactions (inserts, updates, deletes, point queries) per second. Complex aggregations, full scans, and summary reports are OLAP workload patterns."
    },
    {
      id: 24,
      type: "single",
      difficulty: 1,
      question: "An e-commerce website processing customer orders in real-time is an example of which system type?",
      options: ["OLAP system", "OLTP system", "Data lake system", "Data mart system"],
      correct: [1],
      concept: "An e-commerce order processing system is a classic OLTP (Online Transaction Processing) system. It handles real-time, high-frequency transactional operations like order placement, inventory updates, and payment processing."
    },
    {
      id: 25,
      type: "single",
      difficulty: 1,
      question: "What type of system combines OLTP and OLAP capabilities in a single database engine?",
      options: ["HTAP (Hybrid Transactional/Analytical Processing)", "CRUD-only database", "Pure columnar store", "Message queue system"],
      correct: [0],
      concept: "HTAP (Hybrid Transactional/Analytical Processing) systems combine both OLTP and OLAP capabilities in a single engine, enabling real-time analytics on operational data without ETL. Examples include TiDB and SAP HANA."
    },
    // Topic: ETL vs ELT (26-28)
    {
      id: 26,
      type: "single",
      difficulty: 1,
      question: "Which tool is specifically designed for the \'T\' (Transform) step in an ELT workflow inside a data warehouse?",
      options: ["Apache NiFi", "dbt (data build tool)", "Apache Sqoop", "AWS Data Pipeline"],
      correct: [1],
      concept: "dbt (data build tool) is specifically designed for the transformation step in ELT workflows. It runs SQL-based transformations inside the data warehouse. NiFi and Sqoop handle data movement, and AWS Data Pipeline orchestrates workflows."
    },
    {
      id: 27,
      type: "single",
      difficulty: 1,
      question: "In ETL, what is the purpose of a staging area?",
      options: ["To serve final reports to business users", "To temporarily hold extracted data before transformation", "To permanently archive raw source data", "To host machine learning model training"],
      correct: [1],
      concept: "A staging area in ETL temporarily holds raw extracted data before it is cleaned, transformed, and loaded into the target system. It acts as a buffer between source systems and the transformation logic."
    },
    // Topic: Batch vs Streaming (28-31)
    {
      id: 28,
      type: "single",
      difficulty: 1,
      question: "Apache Flink is primarily known for which type of data processing?",
      options: ["Batch-only processing of flat files", "Native stream processing with low latency", "Static report generation from databases", "Manual data entry and validation"],
      correct: [1],
      concept: "Apache Flink is a native stream processing framework designed for low-latency, high-throughput, stateful computations on unbounded data streams. It also supports batch processing as a special case of streaming."
    },
    {
      id: 29,
      type: "single",
      difficulty: 1,
      question: "In at-least-once delivery semantics, what is the main trade-off accepted?",
      options: ["Messages may be lost but never duplicated", "Messages may be duplicated but never lost", "Messages are delivered in strict order always", "Messages are processed with zero latency"],
      correct: [1],
      concept: "At-least-once delivery guarantees no message loss but may produce duplicates. The consumer must handle deduplication. At-most-once may lose messages but never duplicates them."
    },
    {
      id: 30,
      type: "single",
      difficulty: 1,
      question: "Which of the following is an example of a batch processing schedule?",
      options: ["Processing each click event within 10 milliseconds", "Running a data pipeline every night at 2 AM", "Triggering a function on every database insert", "Streaming sensor readings continuously to a dashboard"],
      correct: [1],
      concept: "Running a pipeline at a scheduled time (e.g., every night at 2 AM) is a classic batch processing pattern. The other options describe real-time or event-driven processing."
    },
    {
      id: 31,
      type: "single",
      difficulty: 1,
      question: "Spark Structured Streaming processes data using which approach to achieve near-real-time processing?",
      options: ["True event-at-a-time processing", "Micro-batch processing", "Scheduled daily batch runs", "Manual trigger-based execution"],
      correct: [1],
      concept: "Spark Structured Streaming uses a micro-batch processing model by default, breaking the stream into small batches processed at short intervals. It also supports continuous processing mode for lower latency."
    },
    // Topic: Data Structures & Formats (32-35)
    {
      id: 32,
      type: "single",
      difficulty: 1,
      question: "Which data format was developed by Google for efficient serialization of structured data with a compact binary representation?",
      options: ["Apache Avro", "Protocol Buffers (Protobuf)", "Apache Thrift", "MessagePack"],
      correct: [1],
      concept: "Protocol Buffers (Protobuf) was developed by Google as a language-neutral, platform-neutral mechanism for serializing structured data. It uses a compact binary format and requires a .proto schema definition file."
    },
    {
      id: 33,
      type: "single",
      difficulty: 1,
      question: "Delta Lake is best described as:",
      options: ["A new type of relational database engine", "An open-source storage layer that adds ACID transactions to data lakes", "A proprietary cloud-only data warehouse", "A visualization tool for data lake metadata"],
      correct: [1],
      concept: "Delta Lake is an open-source storage layer that brings ACID transactions, scalable metadata handling, and unified streaming/batch processing to data lakes. It runs on top of existing storage like HDFS or S3."
    },
    {
      id: 34,
      type: "single",
      difficulty: 1,
      question: "Which file format is primarily optimized for use with Apache Hive and stores data in a columnar format with built-in indexes?",
      options: ["Apache Avro", "Apache Parquet", "Apache ORC", "Apache Arrow"],
      correct: [2],
      concept: "Apache ORC (Optimized Row Columnar) was developed primarily for Apache Hive. It stores data in a columnar format with built-in lightweight indexes, bloom filters, and compression for fast query performance."
    },
    {
      id: 35,
      type: "single",
      difficulty: 1,
      question: "What is a key advantage of Parquet\'s internal structure that enables query engines to skip irrelevant data?",
      options: ["Row-level encryption built into every file", "Column-level statistics stored in metadata (min/max values per row group)", "Automatic data replication across storage nodes", "Built-in SQL query engine for in-place processing"],
      correct: [1],
      concept: "Parquet stores column-level statistics (min, max, null count) in file metadata and row group footers. Query engines use these statistics for predicate pushdown, skipping entire row groups that don\'t match filter conditions."
    },
    // ===== SINGLE CHOICE, DIFFICULTY 2 (Questions 36-60) =====
    // Topic: Role of Data Engineer (36-39)
    {
      id: 36,
      type: "single",
      difficulty: 2,
      question: "A company needs someone to ensure data quality checks are automated, pipeline failures trigger alerts, and data SLAs are met. Which role best fits this responsibility?",
      options: ["Data Analyst", "Data Engineer", "Business Intelligence Developer", "Machine Learning Engineer"],
      correct: [1],
      concept: "Data Engineers are responsible for pipeline reliability, automated quality checks, alerting on failures, and meeting data SLAs. While BI developers create reports and ML Engineers build models, operational pipeline management falls to Data Engineers."
    },
    {
      id: 37,
      type: "single",
      difficulty: 2,
      question: "In the data pipeline lifecycle, which phase is responsible for coordinating task dependencies, scheduling, and retry logic?",
      options: ["Ingestion", "Orchestration", "Storage", "Consumption"],
      correct: [1],
      concept: "Orchestration coordinates task dependencies, scheduling, retries, and monitoring across pipeline stages. Tools like Apache Airflow, Prefect, and Dagster are commonly used for data pipeline orchestration."
    },
    {
      id: 38,
      type: "single",
      difficulty: 2,
      question: "A Data Engineer is asked to choose between building a custom pipeline and using a managed service. What is the primary trade-off?",
      options: ["Custom pipelines are always faster than managed services", "Managed services reduce operational burden but may limit customization", "Custom pipelines are always cheaper than managed services", "Managed services never support streaming workloads"],
      correct: [1],
      concept: "Managed services (like AWS Glue, Google Dataflow) reduce operational overhead such as scaling, patching, and monitoring, but may limit flexibility and customization compared to custom-built pipelines."
    },
    {
      id: 39,
      type: "single",
      difficulty: 2,
      question: "Which skill differentiates a Data Engineer from a traditional Software Engineer in a data-intensive organization?",
      options: ["Ability to write production-quality code", "Deep expertise in distributed data processing frameworks and data modeling", "Knowledge of version control systems like Git", "Experience with agile development methodologies"],
      correct: [1],
      concept: "While both roles share coding skills, Data Engineers specialize in distributed data processing frameworks (Spark, Flink), data modeling, pipeline design, and handling large-scale data transformations that Software Engineers typically don\'t focus on."
    },
    // Topic: OLTP vs OLAP (40-43)
    {
      id: 40,
      type: "single",
      difficulty: 2,
      question: "An HTAP system like TiDB provides which key benefit compared to maintaining separate OLTP and OLAP systems?",
      options: ["It eliminates the need for any indexes on tables", "It removes the latency of ETL by allowing analytics on live transactional data", "It guarantees that all queries complete in under one millisecond", "It requires no storage for analytical workloads"],
      correct: [1],
      concept: "HTAP systems remove the ETL latency gap between operational and analytical systems by allowing real-time analytics directly on live transactional data, eliminating the need to move data between separate OLTP and OLAP systems."
    },
    {
      id: 41,
      type: "single",
      difficulty: 2,
      question: "A query that calculates the average order value per region over the last quarter would be most efficiently served by which system?",
      options: ["An OLTP system with row-oriented storage", "An OLAP system with columnar storage", "A key-value cache like Redis", "A document store like MongoDB"],
      correct: [1],
      concept: "This aggregation query (average over many rows, grouped by region, filtered by date) is a classic OLAP workload. Columnar storage excels here because it can read only the needed columns and compress similar values efficiently."
    },
    {
      id: 42,
      type: "single",
      difficulty: 2,
      question: "Why do OLTP databases avoid denormalization even though it could speed up some read queries?",
      options: ["Denormalization is not supported by any relational database", "Denormalization introduces data redundancy that complicates updates and risks inconsistency", "Denormalization always increases storage costs beyond acceptable limits", "Denormalization prevents the use of primary keys"],
      correct: [1],
      concept: "OLTP systems avoid denormalization because redundant data means multiple places must be updated for a single logical change, increasing complexity and risking data inconsistency during frequent write operations."
    },
    {
      id: 43,
      type: "single",
      difficulty: 2,
      question: "In a columnar storage system, which technique achieves high compression ratios by storing repeated values once?",
      options: ["Horizontal partitioning", "Run-length encoding (RLE)", "B-tree indexing", "Write-ahead logging (WAL)"],
      correct: [1],
      concept: "Run-length encoding (RLE) stores consecutive repeated values as a single value plus a count, achieving high compression in columnar storage where sorted columns often have many consecutive identical values."
    },
    // Topic: ETL vs ELT (44-47)
    {
      id: 44,
      type: "single",
      difficulty: 2,
      question: "A team migrates from an on-premises ETL tool to a cloud data warehouse and adopts ELT. What changes about where compute resources are used for transformation?",
      options: ["Transformations still run on the on-premises ETL server via VPN", "Transformations now run inside the cloud data warehouse using its compute", "Transformations move to the source systems to reduce network traffic", "Transformations are eliminated entirely in ELT architectures"],
      correct: [1],
      concept: "In ELT, transformations shift from a dedicated ETL server to the cloud data warehouse\'s own compute engine. Cloud warehouses like Snowflake and BigQuery can elastically scale compute for transformations."
    },
    {
      id: 45,
      type: "single",
      difficulty: 2,
      question: "Which ETL approach is most appropriate when regulatory requirements mandate that sensitive data must be masked before it enters the data warehouse?",
      options: ["ELT with post-load masking views", "Traditional ETL with transformation before loading", "Direct database replication without any transformation", "Loading raw data and applying masking only at query time"],
      correct: [1],
      concept: "When regulations require sensitive data to be masked before entering the warehouse, traditional ETL is preferred because transformations (including masking) happen before the data is loaded, ensuring raw sensitive data never reaches the target."
    },
    {
      id: 46,
      type: "single",
      difficulty: 2,
      question: "An ELT pipeline uses dbt to transform raw data in Snowflake. At which point are the SQL transformations executed?",
      options: ["On the dbt server before sending results to Snowflake", "Inside Snowflake\'s compute engine after raw data is already loaded", "In a separate Apache Spark cluster connected to Snowflake", "On the source database before extraction begins"],
      correct: [1],
      concept: "dbt compiles SQL models and pushes them to the target warehouse (Snowflake) for execution. All transformation compute happens inside Snowflake\'s engine, leveraging its elastic compute resources."
    },
    {
      id: 47,
      type: "single",
      difficulty: 2,
      question: "Which is a disadvantage of ELT compared to traditional ETL?",
      options: ["ELT cannot handle structured data sources", "Raw sensitive data may be stored in the target system before transformation", "ELT always requires more network bandwidth than ETL", "ELT does not support SQL-based transformations"],
      correct: [1],
      concept: "In ELT, raw data including potentially sensitive information is loaded into the target system before transformation. This can create compliance risks if proper access controls and encryption are not in place."
    },
    // Topic: Batch vs Streaming (48-52)
    {
      id: 48,
      type: "single",
      difficulty: 2,
      question: "A fraud detection system needs to analyze transactions as they occur and flag suspicious activity within seconds. Which processing approach is most suitable?",
      options: ["Nightly batch processing", "Hourly micro-batch processing", "Real-time stream processing", "Weekly batch reporting"],
      correct: [2],
      concept: "Fraud detection requires immediate analysis and response, making real-time stream processing essential. Batch or micro-batch approaches would introduce unacceptable delays for time-sensitive fraud detection."
    },
    {
      id: 49,
      type: "single",
      difficulty: 2,
      question: "In Kafka\'s architecture, what is the role of a consumer group?",
      options: ["To produce messages to multiple topics simultaneously", "To allow multiple consumers to share the work of reading from topic partitions", "To compress messages before they are stored in brokers", "To replicate data across multiple Kafka clusters"],
      correct: [1],
      concept: "A Kafka consumer group allows multiple consumers to cooperatively read from a topic\'s partitions. Each partition is assigned to exactly one consumer in the group, enabling parallel consumption and horizontal scaling."
    },
    {
      id: 50,
      type: "single",
      difficulty: 2,
      question: "What is the key difference between event time and processing time in stream processing?",
      options: ["Event time is always later than processing time", "Event time is when the event occurred; processing time is when the system processes it", "Processing time is embedded in the data; event time is assigned by the engine", "They are interchangeable terms used in different frameworks"],
      correct: [1],
      concept: "Event time is the timestamp when an event actually occurred (embedded in the data), while processing time is when the streaming engine processes it. Late-arriving events cause these to diverge, making event-time processing important for accuracy."
    },
    {
      id: 51,
      type: "single",
      difficulty: 2,
      question: "Which windowing strategy groups streaming events into fixed-size, non-overlapping time intervals?",
      options: ["Sliding window", "Tumbling window", "Session window", "Global window"],
      correct: [1],
      concept: "Tumbling windows divide a stream into fixed-size, non-overlapping intervals (e.g., every 5 minutes). Sliding windows overlap, session windows are activity-based, and global windows collect all events."
    },
    {
      id: 52,
      type: "single",
      difficulty: 2,
      question: "A company runs an hourly batch job to update a dashboard but wants near-real-time updates. Which approach minimizes latency without a full streaming rewrite?",
      options: ["Increase batch frequency to micro-batches running every few minutes", "Switch to a weekly batch schedule with larger batches", "Implement manual data refreshes triggered by users", "Add more servers to the existing hourly batch cluster"],
      correct: [0],
      concept: "Micro-batching (running batches every few minutes) bridges the gap between hourly batch and full streaming. It provides near-real-time results while keeping a batch-oriented architecture."
    },
    // Topic: Data Structures & Formats (53-60)
    {
      id: 53,
      type: "single",
      difficulty: 2,
      question: "When an Avro schema evolves by adding a new field with a default value, what happens when an old reader encounters data written with the new schema?",
      options: ["The old reader throws a schema mismatch exception", "The old reader ignores the new field and reads the remaining fields correctly", "The old reader converts the new field to null automatically", "The old reader fails silently and returns corrupted data"],
      correct: [1],
      concept: "Avro\'s schema evolution rules handle forward compatibility: an old reader using an older schema simply ignores fields it doesn\'t know about. This allows writers to add new fields without breaking existing readers."
    },
    {
      id: 54,
      type: "single",
      difficulty: 2,
      question: "A Parquet file is organized into row groups. What is the primary purpose of splitting data into row groups?",
      options: ["To enforce row-level security on individual records", "To enable parallel processing and efficient I/O by reading chunks of data independently", "To store each row group in a separate physical file on disk", "To maintain ACID transaction isolation between row groups"],
      correct: [1],
      concept: "Parquet row groups enable parallel I/O and processing. Each row group is independently readable, allowing engines to distribute work across threads or nodes and skip entire row groups using column statistics."
    },
    {
      id: 55,
      type: "single",
      difficulty: 2,
      question: "Which scenario is best suited for using JSON as the data interchange format?",
      options: ["High-throughput inter-service communication requiring minimal bandwidth", "Human-readable API responses with nested objects and variable schemas", "Storing petabytes of analytical data for batch processing", "Fixed-schema columnar storage for data warehousing"],
      correct: [1],
      concept: "JSON excels for human-readable API responses with nested objects and variable schemas. For high-throughput or large-scale analytics, binary formats like Avro, Protobuf, or Parquet are more efficient."
    },
    {
      id: 56,
      type: "single",
      difficulty: 2,
      question: "Compared to Parquet, what is a distinguishing feature of Apache ORC?",
      options: ["ORC does not support column pruning", "ORC includes built-in lightweight indexes and bloom filters for predicate pushdown", "ORC only works with JSON data sources", "ORC stores data in a row-oriented format"],
      correct: [1],
      concept: "Apache ORC includes built-in lightweight indexes (min/max per stripe) and bloom filters that enable efficient predicate pushdown. While Parquet also has column statistics, ORC\'s integrated index structure is a distinguishing feature."
    },
    {
      id: 57,
      type: "single",
      difficulty: 2,
      question: "In Protocol Buffers, what happens if a client with an older .proto schema receives a message containing a new field?",
      options: ["The client crashes with a deserialization error", "The unknown field is preserved in the message but not accessible by name", "The unknown field is automatically deleted from the message", "The client rejects the message and requests a retransmission"],
      correct: [1],
      concept: "Protocol Buffers preserve unknown fields during deserialization. A client with an older schema will keep the unknown field data in memory (for re-serialization) but cannot access it by name, enabling forward compatibility."
    },
    {
      id: 58,
      type: "single",
      difficulty: 2,
      question: "Delta Lake\'s transaction log serves which primary purpose?",
      options: ["Storing the actual data files in a compressed format", "Recording every change to the table as an ordered, atomic commit", "Caching query results for faster subsequent reads", "Managing user authentication and access control"],
      correct: [1],
      concept: "Delta Lake\'s transaction log (_delta_log) records every change as an ordered, atomic commit in JSON files. This enables ACID transactions, time travel, audit history, and concurrent read/write operations on the data lake."
    },
    {
      id: 59,
      type: "single",
      difficulty: 2,
      question: "Which format is most appropriate when the primary concern is minimizing file size for network transmission between microservices?",
      options: ["Pretty-printed JSON", "CSV with long header names", "Protocol Buffers (Protobuf)", "XML with XSLT stylesheets"],
      correct: [2],
      concept: "Protocol Buffers produce compact binary messages that minimize file size and network bandwidth. JSON and XML are text-based and larger, while CSV lacks schema support and nested structure handling."
    },
    {
      id: 60,
      type: "single",
      difficulty: 2,
      question: "What feature of Delta Lake enables a user to query a table as it appeared at a specific point in the past?",
      options: ["Schema enforcement", "Time travel", "Z-order clustering", "Auto-compaction"],
      correct: [1],
      concept: "Delta Lake\'s time travel feature allows users to query historical versions of a table using \'AS OF\' syntax with timestamps or version numbers. This is powered by the transaction log which retains the history of all changes."
    },
    // ===== MULTI-SELECT, DIFFICULTY 2 (Questions 61-75) =====
    // Topic: Role of Data Engineer (61-63)
    {
      id: 61,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are core responsibilities of a Data Engineer? (Select all that apply)",
      options: ["Designing and maintaining data pipelines", "Ensuring data quality and reliability", "Training deep learning neural networks", "Optimizing storage and compute for data workloads"],
      correct: [0, 1, 3],
      concept: "Data Engineers design pipelines, ensure data quality, and optimize storage/compute. Training deep learning models is the responsibility of Machine Learning Engineers or Data Scientists."
    },
    {
      id: 62,
      type: "multi",
      difficulty: 2,
      question: "Which phases are part of the data pipeline lifecycle? (Select all that apply)",
      options: ["Data ingestion from source systems", "Data transformation and enrichment", "Model hyperparameter tuning", "Data serving and consumption"],
      correct: [0, 1, 3],
      concept: "The data pipeline lifecycle includes ingestion, transformation/enrichment, and serving/consumption. Model hyperparameter tuning is part of the machine learning lifecycle, not the data pipeline lifecycle."
    },
    {
      id: 63,
      type: "multi",
      difficulty: 2,
      question: "Which skills are commonly expected of a Data Engineer? (Select all that apply)",
      options: ["Proficiency in SQL and Python", "Experience with distributed systems like Spark", "Expertise in graphic design for dashboards", "Knowledge of workflow orchestration tools"],
      correct: [0, 1, 3],
      concept: "Data Engineers need SQL, Python, distributed systems knowledge, and orchestration tool experience. Graphic design is not a core Data Engineering skill; that falls more under UX design."
    },
    // Topic: OLTP vs OLAP (64-66)
    {
      id: 64,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are characteristics of OLTP systems? (Select all that apply)",
      options: ["ACID transaction support", "Normalized schema design", "Optimized for complex aggregation queries", "High-frequency short read/write operations"],
      correct: [0, 1, 3],
      concept: "OLTP systems feature ACID transactions, normalized schemas, and handle high-frequency short operations. Complex aggregation queries are characteristic of OLAP systems, not OLTP."
    },
    {
      id: 65,
      type: "multi",
      difficulty: 2,
      question: "Which characteristics describe OLAP systems? (Select all that apply)",
      options: ["Denormalized schemas like star or snowflake", "Columnar storage for efficient analytical reads", "Primarily serves real-time customer-facing applications", "Supports complex joins and aggregation queries"],
      correct: [0, 1, 3],
      concept: "OLAP systems use denormalized schemas, columnar storage, and support complex analytical queries. They serve internal analytical users and BI tools, not real-time customer-facing applications (which is OLTP)."
    },
    {
      id: 66,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are valid examples of HTAP databases? (Select all that apply)",
      options: ["TiDB", "SAP HANA", "SQLite", "CockroachDB with analytical workloads"],
      correct: [0, 1, 3],
      concept: "TiDB and SAP HANA are well-known HTAP systems. CockroachDB supports hybrid workloads to some extent. SQLite is a lightweight embedded database not designed for HTAP workloads."
    },
    // Topic: ETL vs ELT (67-69)
    {
      id: 67,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are advantages of ELT over traditional ETL? (Select all that apply)",
      options: ["Leverages target system\'s compute power for transformations", "Preserves raw data in the target for re-transformation", "Eliminates the need for data transformation entirely", "Reduces dependency on external transformation servers"],
      correct: [0, 1, 3],
      concept: "ELT leverages the target system\'s compute, preserves raw data for flexibility, and reduces dependency on external servers. ELT does NOT eliminate transformation — it just moves it to the target system."
    },
    {
      id: 68,
      type: "multi",
      difficulty: 2,
      question: "Which tools are commonly used in traditional ETL workflows? (Select all that apply)",
      options: ["Informatica PowerCenter", "Talend Open Studio", "dbt (data build tool)", "Microsoft SSIS"],
      correct: [0, 1, 3],
      concept: "Informatica, Talend, and SSIS are traditional ETL tools that extract, transform, and load data. dbt is an ELT tool that performs transformations inside the data warehouse, not a traditional ETL tool."
    },
    {
      id: 69,
      type: "multi",
      difficulty: 2,
      question: "In which scenarios is traditional ETL preferred over ELT? (Select all that apply)",
      options: ["Sensitive data must be masked before reaching the target", "The target system has limited compute resources", "The team wants to iterate quickly on transformation logic in SQL", "Complex transformations require specialized non-SQL logic"],
      correct: [0, 1, 3],
      concept: "Traditional ETL is preferred when data must be transformed before loading (security), when the target lacks compute power, or when complex non-SQL logic is needed. Quick SQL iteration favors ELT with tools like dbt."
    },
    // Topic: Batch vs Streaming (70-72)
    {
      id: 70,
      type: "multi",
      difficulty: 2,
      question: "Which are valid delivery semantics in stream processing systems? (Select all that apply)",
      options: ["At-most-once", "At-least-once", "Exactly-once", "Always-twice"],
      correct: [0, 1, 2],
      concept: "The three standard delivery semantics are at-most-once (may lose), at-least-once (may duplicate), and exactly-once (neither loss nor duplicate). \'Always-twice\' is not a real delivery semantic."
    },
    {
      id: 71,
      type: "multi",
      difficulty: 2,
      question: "Which frameworks support native stream processing? (Select all that apply)",
      options: ["Apache Flink", "Apache Kafka Streams", "Apache Sqoop", "Spark Structured Streaming"],
      correct: [0, 1, 3],
      concept: "Flink, Kafka Streams, and Spark Structured Streaming all support stream processing. Apache Sqoop is a batch tool for transferring data between Hadoop and relational databases."
    },
    {
      id: 72,
      type: "multi",
      difficulty: 2,
      question: "Which challenges are unique to stream processing compared to batch processing? (Select all that apply)",
      options: ["Handling late-arriving and out-of-order events", "Managing checkpoints and state for fault tolerance", "Processing data stored in static CSV files", "Defining watermarks for event-time completeness"],
      correct: [0, 1, 3],
      concept: "Stream processing uniquely deals with late events, stateful checkpointing, and watermarks for event-time completeness. Processing static CSV files is a batch processing concern."
    },
    // Topic: Data Structures & Formats (73-75)
    {
      id: 73,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are columnar file formats? (Select all that apply)",
      options: ["Apache Parquet", "Apache ORC", "Apache Avro", "CSV"],
      correct: [0, 1],
      concept: "Parquet and ORC are columnar file formats optimized for analytical workloads. Avro is a row-based format optimized for serialization and schema evolution. CSV is a plain-text row-oriented format."
    },
    {
      id: 74,
      type: "multi",
      difficulty: 2,
      question: "Which features are provided by Delta Lake on top of a standard data lake? (Select all that apply)",
      options: ["ACID transactions on data lake files", "Time travel to query historical table versions", "Built-in machine learning model training", "Schema enforcement and evolution"],
      correct: [0, 1, 3],
      concept: "Delta Lake adds ACID transactions, time travel, and schema enforcement/evolution to data lakes. It does not provide built-in ML model training; that requires separate tools like MLlib or MLflow."
    },
    {
      id: 75,
      type: "multi",
      difficulty: 2,
      question: "Which statements about Avro are true? (Select all that apply)",
      options: ["Avro stores the schema alongside the data in each file", "Avro is a columnar storage format", "Avro supports schema evolution with compatibility checks", "Avro uses a binary encoding format for compact storage"],
      correct: [0, 2, 3],
      concept: "Avro stores its schema with the data, supports schema evolution with backward/forward compatibility, and uses binary encoding. Avro is a row-oriented format, not columnar."
    },
    // ===== MULTI-SELECT, DIFFICULTY 3 (Questions 76-85) =====
    {
      id: 76,
      type: "multi",
      difficulty: 3,
      question: "A Data Engineer is designing a pipeline that must process IoT sensor data with exactly-once semantics. Which mechanisms help achieve this? (Select all that apply)",
      options: ["Idempotent writes to the target system", "Transactional offset commits in the message broker", "Using at-most-once delivery and hoping for the best", "End-to-end checkpointing in the stream processor"],
      correct: [0, 1, 3],
      concept: "Exactly-once semantics require idempotent writes (safe retries), transactional offset commits (atomic read-process-commit), and checkpointing (state recovery without reprocessing). At-most-once delivery contradicts exactly-once goals."
    },
    {
      id: 77,
      type: "multi",
      difficulty: 3,
      question: "When comparing Parquet and ORC for a new analytics platform, which factors favor choosing Parquet? (Select all that apply)",
      options: ["Broader ecosystem support across Spark, Presto, and Arrow", "Native integration with the Hive metastore", "Better nested data structure support with Dremel-based encoding", "Required use in Delta Lake and Apache Iceberg table formats"],
      correct: [0, 2, 3],
      concept: "Parquet has broader ecosystem support, superior nested data handling (based on Google\'s Dremel), and is the default format for Delta Lake and Iceberg. ORC has stronger native Hive integration."
    },
    {
      id: 78,
      type: "multi",
      difficulty: 3,
      question: "A team is troubleshooting slow Parquet read performance. Which techniques could improve performance? (Select all that apply)",
      options: ["Increasing the row group size to reduce metadata overhead", "Adding partition columns aligned with common query filters", "Converting to CSV format for simpler parsing", "Enabling dictionary encoding for low-cardinality columns"],
      correct: [0, 1, 3],
      concept: "Larger row groups reduce metadata overhead, partition pruning skips irrelevant files, and dictionary encoding compresses low-cardinality columns. Converting to CSV would severely degrade analytical performance."
    },
    {
      id: 79,
      type: "multi",
      difficulty: 3,
      question: "Which statements about HTAP systems are accurate? (Select all that apply)",
      options: ["They use separate storage engines for transactional and analytical workloads internally", "They eliminate the need for a separate ETL process for real-time analytics", "They always outperform dedicated OLAP systems for complex analytical queries", "They often use row-store for OLTP and column-store replicas for OLAP"],
      correct: [0, 1, 3],
      concept: "HTAP systems often maintain dual storage (row-store for OLTP, column-store for OLAP) and eliminate real-time ETL needs. However, dedicated OLAP systems may still outperform HTAP for complex large-scale analytics."
    },
    {
      id: 80,
      type: "multi",
      difficulty: 3,
      question: "A streaming pipeline uses Apache Flink with event-time processing. Which components are essential for correct results with late data? (Select all that apply)",
      options: ["Watermarks to track event-time progress", "Allowed lateness configuration on windows", "Processing-time-only triggers ignoring event timestamps", "Side outputs to capture late-arriving events"],
      correct: [0, 1, 3],
      concept: "Flink uses watermarks to track progress, allowed lateness to accept late events, and side outputs to capture extremely late data. Processing-time-only triggers ignore event timestamps and miss late data."
    },
    {
      id: 81,
      type: "multi",
      difficulty: 3,
      question: "When designing a schema evolution strategy for an Avro-based data pipeline, which rules ensure backward compatibility? (Select all that apply)",
      options: ["New fields must have default values defined", "Existing fields must not be renamed without aliases", "Fields can be freely removed without any constraints", "The order of fields in the schema can change safely"],
      correct: [0, 1, 3],
      concept: "Backward compatibility requires new fields to have defaults (so old data can fill them), no renaming without aliases, and allows field reordering. Removing fields breaks backward compatibility unless old readers have defaults."
    },
    {
      id: 82,
      type: "multi",
      difficulty: 3,
      question: "Which characteristics of Delta Lake\'s transaction log enable concurrent read and write operations? (Select all that apply)",
      options: ["Optimistic concurrency control using file-level conflicts", "Write-ahead logging with a single JSON file per commit", "Lock-free reads using snapshot isolation on immutable files", "Automatic conflict resolution by merging all concurrent writes"],
      correct: [0, 1, 2],
      concept: "Delta Lake uses optimistic concurrency (detecting conflicts at commit), WAL with one JSON file per commit, and snapshot isolation where readers see consistent immutable file sets. Not all concurrent writes can be automatically merged."
    },
    {
      id: 83,
      type: "multi",
      difficulty: 3,
      question: "In a Kappa architecture, which principles apply? (Select all that apply)",
      options: ["All data is processed through a single stream processing layer", "Historical reprocessing is done by replaying the event log", "A separate batch layer is maintained for historical accuracy", "The event log serves as the system of record"],
      correct: [0, 1, 3],
      concept: "Kappa architecture uses a single stream processing layer, replays event logs for reprocessing, and treats the log as the system of record. Unlike Lambda architecture, there is no separate batch layer."
    },
    {
      id: 84,
      type: "multi",
      difficulty: 3,
      question: "Which factors should a Data Engineer consider when choosing between batch and streaming for a new pipeline? (Select all that apply)",
      options: ["Latency requirements of downstream consumers", "Operational complexity and monitoring overhead", "The programming language used by the front-end team", "Cost implications of always-on streaming infrastructure"],
      correct: [0, 1, 3],
      concept: "Batch vs. streaming decisions depend on latency needs, operational complexity, and cost. The front-end programming language is irrelevant to the data processing architecture choice."
    },
    {
      id: 85,
      type: "multi",
      difficulty: 3,
      question: "Which are valid Protobuf field rules that affect how data is serialized? (Select all that apply)",
      options: ["optional — field may or may not be present", "repeated — field can appear zero or more times", "required — field must always be present (proto2 only)", "unique — field values must be distinct across messages"],
      correct: [0, 1, 2],
      concept: "Protobuf supports optional (may be absent), repeated (zero or more), and required (proto2 only, deprecated in proto3). There is no \'unique\' field rule in Protobuf; uniqueness is an application-level concern."
    },
    // ===== TRUE/FALSE, DIFFICULTY 3 (Questions 86-100) =====
    {
      id: 86,
      type: "tf",
      difficulty: 3,
      question: "In a Lambda architecture, the batch layer and speed layer produce results that are eventually merged in the serving layer to provide both accuracy and low latency.",
      options: ["True — Lambda architecture merges batch (accuracy) and speed (low latency) layer outputs in the serving layer", "False — Lambda architecture keeps batch and speed layer outputs completely separate and never merges them"],
      correct: [0],
      concept: "Lambda architecture combines a batch layer (accurate but high latency) with a speed layer (approximate but low latency). The serving layer merges results from both to provide complete, up-to-date views."
    },
    {
      id: 87,
      type: "tf",
      difficulty: 3,
      question: "Apache Avro requires code generation from schema definitions before data can be serialized or deserialized.",
      options: ["True — Avro always requires pre-compiled code from schema definitions for any serialization", "False — Avro supports dynamic schema resolution and can serialize/deserialize without code generation"],
      correct: [1],
      concept: "While Avro supports code generation, it also offers dynamic schema resolution where schemas are resolved at runtime. This makes it flexible for use cases where schemas change frequently without recompiling code."
    },
    {
      id: 88,
      type: "tf",
      difficulty: 3,
      question: "Parquet files store column statistics (min/max values) only at the file level, not at the row group level.",
      options: ["True — Column statistics are stored only in the file footer for the entire file", "False — Column statistics are stored at both the row group level and page level within each column chunk"],
      correct: [1],
      concept: "Parquet stores column statistics at multiple levels: the file footer contains row group-level statistics, and individual data pages can also have their own statistics. This enables fine-grained predicate pushdown."
    },
    {
      id: 89,
      type: "tf",
      difficulty: 3,
      question: "In stream processing, a watermark is a monotonically increasing timestamp that signals the system believes all events up to that time have been received.",
      options: ["True — Watermarks indicate the stream processor believes all events up to that timestamp have arrived", "False — Watermarks are used to count the total number of events processed, not to track event-time progress"],
      correct: [0],
      concept: "Watermarks are monotonically increasing timestamps that represent the stream processor\'s estimate of event-time progress. When a watermark passes a window boundary, the system considers that window complete."
    },
    {
      id: 90,
      type: "tf",
      difficulty: 3,
      question: "ELT is always superior to ETL because cloud data warehouses can handle any transformation workload more efficiently than external ETL servers.",
      options: ["True — Cloud data warehouses are always more efficient than any external ETL processing", "False — ETL may be preferable when transformations require non-SQL logic or data must be cleansed before loading"],
      correct: [1],
      concept: "ELT is not always superior. ETL is preferred when transformations involve complex non-SQL logic (e.g., ML, image processing), when sensitive data must be masked before loading, or when the target system has limited compute."
    },
    {
      id: 91,
      type: "tf",
      difficulty: 3,
      question: "Delta Lake achieves ACID compliance on data lakes by replacing the underlying file system with a custom transactional file system.",
      options: ["True — Delta Lake replaces the file system (HDFS/S3) with a custom transactional file system", "False — Delta Lake uses a transaction log layer on top of existing file systems like HDFS or S3 without replacing them"],
      correct: [1],
      concept: "Delta Lake does not replace the underlying file system. Instead, it adds a transaction log (_delta_log directory) on top of existing file systems (HDFS, S3, ADLS) to provide ACID guarantees through optimistic concurrency control."
    },
    {
      id: 92,
      type: "tf",
      difficulty: 3,
      question: "At-most-once delivery in stream processing guarantees that no messages are ever lost during processing.",
      options: ["True — At-most-once ensures every message is delivered at least once so none are lost", "False — At-most-once may lose messages because it does not retry failed deliveries"],
      correct: [1],
      concept: "At-most-once delivery prioritizes avoiding duplicates by not retrying. This means messages can be lost if processing fails. At-least-once delivery retries to prevent loss but may create duplicates."
    },
    {
      id: 93,
      type: "tf",
      difficulty: 3,
      question: "Apache ORC and Apache Parquet both store data in a columnar format, but ORC was originally optimized for the Hadoop/Hive ecosystem while Parquet was designed by Cloudera and Twitter for broader compatibility.",
      options: ["True — ORC was optimized for Hive while Parquet was designed for broader ecosystem support", "False — Both ORC and Parquet were designed exclusively for the Apache Hive ecosystem"],
      correct: [0],
      concept: "ORC was developed within the Hive project for optimal Hive performance. Parquet was created by Cloudera and Twitter (inspired by Google Dremel) with broader ecosystem compatibility in mind, supporting Spark, Impala, and more."
    },
    {
      id: 94,
      type: "tf",
      difficulty: 3,
      question: "A Data Engineer\'s responsibility ends once data is loaded into the data warehouse; monitoring and quality assurance are handled by the Data Analyst team.",
      options: ["True — Data Engineers are only responsible for building pipelines, not for monitoring or quality", "False — Data Engineers are responsible for end-to-end pipeline health including monitoring, alerting, and data quality"],
      correct: [1],
      concept: "Data Engineers own the full lifecycle of data pipelines, including monitoring, alerting, data quality checks, and SLA compliance. The responsibility does not end at loading; operational excellence is a core Data Engineering concern."
    },
    {
      id: 95,
      type: "tf",
      difficulty: 3,
      question: "Protocol Buffers (Protobuf) are self-describing, meaning the schema is embedded within each serialized message just like Avro.",
      options: ["True — Protobuf embeds the full schema in every serialized message like Avro does", "False — Protobuf requires the .proto schema file to be shared separately for deserialization"],
      correct: [1],
      concept: "Unlike Avro, Protobuf is NOT self-describing. The .proto schema file must be shared out-of-band between producer and consumer. Avro embeds the writer\'s schema in the file header, making it self-describing."
    },
    {
      id: 96,
      type: "tf",
      difficulty: 3,
      question: "In columnar storage, reading a single complete row requires accessing all column files, making point lookups slower than in row-oriented storage.",
      options: ["True — Columnar storage must read all column files to reconstruct a single row, making point lookups slower", "False — Columnar storage can reconstruct a single row by reading only the row index without accessing all columns"],
      correct: [0],
      concept: "In columnar storage, each column is stored separately. To read a complete row, the system must access every column file and reconstruct the row, making point lookups slower than row-oriented storage where entire rows are stored together."
    },
    {
      id: 97,
      type: "tf",
      difficulty: 3,
      question: "Kafka guarantees message ordering within a partition but does not guarantee global ordering across all partitions of a topic.",
      options: ["True — Kafka maintains ordering within individual partitions only, not across partitions", "False — Kafka guarantees strict global ordering across all partitions of a topic"],
      correct: [0],
      concept: "Kafka guarantees message ordering only within a single partition. Messages sent to different partitions may be consumed in any order. To achieve ordering for related events, they must be routed to the same partition using the same key."
    },
    {
      id: 98,
      type: "tf",
      difficulty: 3,
      question: "CSV files are more storage-efficient than Parquet for storing large datasets with many repeated values in columns.",
      options: ["True — CSV\'s text format compresses repeated values more efficiently than Parquet\'s binary format", "False — Parquet\'s columnar compression and encoding schemes handle repeated values far more efficiently than CSV"],
      correct: [1],
      concept: "Parquet achieves much better compression for repeated values through techniques like dictionary encoding, RLE, and delta encoding on sorted columnar data. CSV stores every value as text without such compression optimizations."
    },
    {
      id: 99,
      type: "tf",
      difficulty: 3,
      question: "In Spark Structured Streaming\'s micro-batch mode, each micro-batch is processed as a standard Spark batch job, reusing Spark\'s existing optimization engine.",
      options: ["True — Each micro-batch in Structured Streaming is processed using Spark\'s Catalyst optimizer and Tungsten engine", "False — Structured Streaming uses a completely separate execution engine from Spark batch processing"],
      correct: [0],
      concept: "Spark Structured Streaming\'s micro-batch mode treats each micro-batch as a small DataFrame/Dataset batch job, leveraging Spark\'s Catalyst optimizer and Tungsten execution engine for query planning and optimization."
    },
    {
      id: 100,
      type: "tf",
      difficulty: 3,
      question: "In Avro schema evolution, changing a field\'s type from int to string is considered a backward-compatible change.",
      options: ["True — Changing int to string is backward compatible because string can represent any integer value", "False — Changing a field\'s type from int to string is a breaking change that violates backward compatibility"],
      correct: [1],
      concept: "Changing a field type from int to string is a breaking change in Avro. Old readers expecting an int will fail when encountering a string. Only specific promotions (e.g., int to long, float to double) are considered compatible."
    }
  ]
};

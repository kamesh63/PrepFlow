window.QUIZ_DATA = window.QUIZ_DATA || {};
window.QUIZ_DATA["day16"] = {
  title: "DE Best Practices",
  topics: ["Industry Best Practices", "Modern Data Stack", "Data Mesh", "Data Architecture Patterns", "Certification Review"],
  questions: [
    {
      id: 1,
      type: "single",
      difficulty: 1,
      question: "What does it mean for a data pipeline to be idempotent?",
      options: ["Running the pipeline multiple times with the same input produces the same result without side effects", "The pipeline processes data in exactly one pass with no intermediate storage steps", "The pipeline automatically scales up resources when data volume increases", "The pipeline can only be executed once and locks out subsequent runs until reset"],
      correct: [0],
      concept: "Idempotency means that re-executing a pipeline with the same input yields the same output without duplicating data or causing unintended side effects. This is critical for reliability — if a pipeline fails and is retried, idempotency ensures correctness without manual cleanup."
    },
    {
      id: 2,
      type: "single",
      difficulty: 1,
      question: "Which practice BEST ensures idempotent writes in a data pipeline?",
      options: ["Using MERGE or upsert operations instead of plain INSERT statements", "Using INSERT statements that append every record unconditionally", "Deleting the entire target table before every pipeline run", "Writing output to a new table name on each execution"],
      correct: [0],
      concept: "MERGE/upsert operations insert new records and update existing ones based on a key, ensuring that re-runs don\'t create duplicates. Plain INSERTs would duplicate data on retry. Full deletes lose data during failures. New table names complicate downstream consumers."
    },
    {
      id: 3,
      type: "single",
      difficulty: 1,
      question: "What is the PRIMARY goal of data pipeline testing?",
      options: ["To verify that transformations produce correct output and handle edge cases before deployment", "To measure the maximum throughput of the pipeline under peak load conditions", "To document the pipeline\'s business requirements for stakeholder review", "To ensure the pipeline runs faster than the previous version on every execution"],
      correct: [0],
      concept: "Pipeline testing validates correctness: transformations produce expected outputs, edge cases (nulls, duplicates, schema changes) are handled properly, and data quality expectations are met. This prevents bugs from reaching production and corrupting downstream data."
    },
    {
      id: 4,
      type: "single",
      difficulty: 1,
      question: "What does CI/CD stand for in the context of data engineering?",
      options: ["Continuous Integration and Continuous Delivery/Deployment", "Centralized Ingestion and Centralized Distribution", "Concurrent Indexing and Concurrent Deduplication", "Columnar Integration and Columnar Delivery"],
      correct: [0],
      concept: "CI/CD in data engineering applies software engineering practices: Continuous Integration automatically tests code changes (SQL, Python, dbt models), and Continuous Delivery/Deployment automatically promotes validated changes through environments (dev → staging → production)."
    },
    {
      id: 5,
      type: "single",
      difficulty: 1,
      question: "What is data observability?",
      options: ["The ability to monitor, detect, and resolve data quality and pipeline health issues across the data stack", "The process of making all data visible to every employee regardless of access controls", "A technique for compressing data to reduce storage costs in cloud environments", "The practice of logging every SQL query executed against the data warehouse"],
      correct: [0],
      concept: "Data observability provides visibility into data health across the entire pipeline: freshness, volume, schema changes, distribution anomalies, and lineage. It enables proactive detection of data issues before they impact downstream consumers and business decisions."
    },
    {
      id: 6,
      type: "single",
      difficulty: 1,
      question: "Which component in the modern data stack is primarily responsible for data ingestion from source systems?",
      options: ["Fivetran, which provides managed connectors for extracting data from various sources", "dbt, which handles SQL-based transformations inside the data warehouse", "Looker, which provides business intelligence and data visualization capabilities", "Snowflake, which serves as the cloud data warehouse for storage and compute"],
      correct: [0],
      concept: "Fivetran (and similar tools like Airbyte, Stitch) handle the Extract and Load (EL) phase — connecting to source systems and replicating data into the warehouse. dbt handles transformations, Snowflake provides warehousing, and Looker provides BI/visualization."
    },
    {
      id: 7,
      type: "single",
      difficulty: 1,
      question: "In the modern data stack, what role does dbt (data build tool) play?",
      options: ["It manages SQL-based transformations that run inside the data warehouse", "It extracts data from source systems and loads it into the data warehouse", "It provides interactive dashboards and visualizations for business users", "It orchestrates the scheduling and dependency management of all pipeline jobs"],
      correct: [0],
      concept: "dbt is the \'T\' in ELT — it manages SQL-based transformations that execute inside the warehouse. It provides version control, testing, documentation, and lineage for data models. It does NOT extract, load, visualize, or orchestrate (though it integrates with orchestrators)."
    },
    {
      id: 8,
      type: "single",
      difficulty: 1,
      question: "What is the key difference between ETL and ELT?",
      options: ["In ELT, raw data is loaded first and transformed inside the target warehouse; in ETL, data is transformed before loading", "In ETL, data is extracted and loaded without any transformation step", "In ELT, transformations happen on the source system before extraction", "In ETL, all processing occurs inside the cloud data warehouse"],
      correct: [0],
      concept: "ETL transforms data in a separate processing layer before loading it into the target. ELT loads raw data into the warehouse first, then leverages the warehouse\'s compute power for transformations. ELT is preferred in the modern stack because cloud warehouses offer scalable compute."
    },
    {
      id: 9,
      type: "single",
      difficulty: 1,
      question: "Which of the four principles of Data Mesh emphasizes that each business domain should own and manage its own data?",
      options: ["Domain ownership of data", "Data as a product", "Self-serve data infrastructure", "Federated computational governance"],
      correct: [0],
      concept: "Domain ownership is the foundational Data Mesh principle: the team that generates and best understands the data (e.g., marketing, sales, logistics) owns the data pipelines, storage, and quality for their domain, rather than a centralized data team owning everything."
    },
    {
      id: 10,
      type: "single",
      difficulty: 1,
      question: "What does \'data as a product\' mean in the Data Mesh paradigm?",
      options: ["Domain teams treat their shared data outputs with product-level quality, documentation, and SLAs", "All company data must be monetized and sold to external consumers for revenue", "Data is stored in product catalogs organized by SKU numbers and categories", "Each data pipeline must produce a physical deliverable shipped to downstream teams"],
      correct: [0],
      concept: "\'Data as a product\' means domain teams treat their data outputs with the same rigor as customer-facing products: defined interfaces, quality guarantees (SLAs), documentation, discoverability, and a focus on consumer experience. It\'s about quality and usability, not monetization."
    },
    {
      id: 11,
      type: "single",
      difficulty: 1,
      question: "What is the medallion architecture in data lakehouse design?",
      options: ["A multi-layer pattern with bronze (raw), silver (cleansed), and gold (aggregated) data zones", "A security model where data access is controlled by gold, silver, and bronze permission levels", "A replication strategy that mirrors data across three geographic regions for disaster recovery", "A compression scheme that applies three levels of encoding to minimize storage costs"],
      correct: [0],
      concept: "The medallion architecture organizes data into three quality tiers: Bronze (raw ingested data), Silver (cleaned, conformed, deduplicated data), and Gold (aggregated, business-ready data). Each layer progressively refines data quality and structure for consumption."
    },
    {
      id: 12,
      type: "single",
      difficulty: 1,
      question: "What is a data contract?",
      options: ["A formal agreement between data producers and consumers defining schema, quality, and SLAs for shared data", "A legal document required by GDPR for every data transfer between companies", "A database constraint like a foreign key that enforces referential integrity", "A pricing agreement between a cloud provider and a customer for data storage costs"],
      correct: [0],
      concept: "Data contracts are explicit agreements between producers and consumers specifying: data schema, field types, quality expectations, freshness SLAs, and allowed changes. They prevent breaking changes from propagating through the data ecosystem and are key to Data Mesh governance."
    },
    {
      id: 13,
      type: "single",
      difficulty: 1,
      question: "What is the Lambda architecture pattern?",
      options: ["A hybrid approach that processes data through both a batch layer and a real-time speed layer in parallel", "A serverless architecture that uses AWS Lambda functions for all data processing", "A single-layer architecture that processes all data in micro-batches only", "A data architecture where all processing is done using functional programming paradigms"],
      correct: [0],
      concept: "Lambda architecture processes data through two parallel paths: a batch layer (complete, accurate, high-latency) and a speed layer (approximate, real-time, low-latency). A serving layer merges results. It provides both real-time views and eventual accuracy."
    },
    {
      id: 14,
      type: "single",
      difficulty: 1,
      question: "How does Kappa architecture differ from Lambda architecture?",
      options: ["Kappa uses a single stream processing layer for both real-time and historical reprocessing, eliminating the batch layer", "Kappa adds a third processing layer to Lambda for machine learning workloads", "Kappa uses only batch processing and eliminates the speed layer entirely", "Kappa requires two identical copies of every dataset for redundancy purposes"],
      correct: [0],
      concept: "Kappa architecture simplifies Lambda by using ONLY stream processing. Historical data is reprocessed by replaying events through the same streaming pipeline. This eliminates the complexity of maintaining two separate codebases (batch + stream) that must produce consistent results."
    },
    {
      id: 15,
      type: "single",
      difficulty: 1,
      question: "What is a schema registry used for in data engineering?",
      options: ["To store, version, and validate data schemas, ensuring producers and consumers agree on data structure", "To register database instances with a cloud provider for billing and monitoring", "To create graphical schema diagrams for documentation purposes only", "To automatically generate database tables from application code annotations"],
      correct: [0],
      concept: "A schema registry (e.g., Confluent Schema Registry) centrally manages schemas for data flowing through pipelines. It validates that data conforms to registered schemas, enforces compatibility rules, and enables schema evolution without breaking downstream consumers."
    },
    {
      id: 16,
      type: "single",
      difficulty: 1,
      question: "What does backward compatibility mean in the context of schema evolution?",
      options: ["New schema versions can read data written with older schema versions without errors", "Older applications can read data written with the newest schema version", "The schema can only be changed by reverting to a previous version entirely", "Both old and new schemas must be identical with zero structural differences"],
      correct: [0],
      concept: "Backward compatibility means a consumer using the NEW schema can still read data produced with the OLD schema. This is achieved by only adding optional fields with defaults or removing fields that consumers don\'t require. It protects consumers from breaking during schema upgrades."
    },
    {
      id: 17,
      type: "single",
      difficulty: 1,
      question: "What is a common exam strategy for certification tests in data engineering?",
      options: ["Eliminate obviously wrong answers first, then choose the most specific correct option among the remaining", "Always select the longest answer option because it is most likely to be correct", "Skip all questions you are unsure about and only answer the ones you know", "Choose the answer that uses the most technical jargon regardless of context"],
      correct: [0],
      concept: "A proven exam strategy is process of elimination: remove clearly wrong answers first, then evaluate remaining options based on specificity and context. The most precise, contextually appropriate answer is usually correct. Length alone or jargon density are unreliable indicators."
    },
    {
      id: 18,
      type: "single",
      difficulty: 1,
      question: "Which modern data stack component serves as the cloud data warehouse for scalable storage and compute?",
      options: ["Snowflake, which provides separated storage and compute for elastic scaling", "Fivetran, which provides pre-built connectors for data source integration", "dbt, which provides SQL-based transformation and modeling capabilities", "Airflow, which provides workflow orchestration and scheduling capabilities"],
      correct: [0],
      concept: "Snowflake (along with BigQuery, Databricks, Redshift) serves as the cloud data warehouse in the modern data stack. Its key innovation is separating storage from compute, allowing independent scaling. Fivetran ingests, dbt transforms, and Airflow orchestrates."
    },
    {
      id: 19,
      type: "single",
      difficulty: 1,
      question: "What is the self-serve data infrastructure principle in Data Mesh?",
      options: ["Providing a platform that enables domain teams to build and manage data products independently without central team bottlenecks", "Allowing business users to write their own SQL queries without any training", "Eliminating all data infrastructure and having domains use spreadsheets instead", "Outsourcing all data infrastructure management to an external vendor"],
      correct: [0],
      concept: "Self-serve data infrastructure provides domain teams with a platform containing tools, templates, and abstractions so they can independently create, deploy, and monitor data products. This reduces dependency on a central data platform team and accelerates data product delivery."
    },
    {
      id: 20,
      type: "single",
      difficulty: 1,
      question: "What is the bronze layer in the medallion architecture responsible for?",
      options: ["Storing raw, unprocessed data exactly as it was ingested from source systems", "Storing fully aggregated and business-ready data for executive dashboards", "Storing cleaned and deduplicated data conforming to enterprise standards", "Storing archived data that has been retired from active production use"],
      correct: [0],
      concept: "The bronze layer holds raw data in its original form — no transformations, deduplication, or quality enforcement. It serves as the system of record for raw ingestion, enabling replay and reprocessing. Data quality improvements happen in silver and gold layers."
    },
    {
      id: 21,
      type: "single",
      difficulty: 1,
      question: "What is forward compatibility in schema evolution?",
      options: ["Older schema versions can read data written with newer schema versions without errors", "The schema can only evolve by adding new versions, never modifying existing ones", "New schemas automatically convert all existing data to the latest format", "Forward compatibility means the schema has been validated for future release"],
      correct: [0],
      concept: "Forward compatibility means consumers using an OLD schema can still read data produced with a NEW schema. This is achieved by only removing optional fields or adding fields that old consumers can safely ignore. It protects existing consumers when producers upgrade first."
    },
    {
      id: 22,
      type: "single",
      difficulty: 1,
      question: "Which of the following is a common pitfall in data engineering certification exams?",
      options: ["Confusing similar-sounding services or concepts that have fundamentally different purposes", "Spending too much time studying hands-on labs instead of reading documentation", "Answering questions too quickly without reading all the answer options", "Focusing only on the most advanced topics and ignoring foundational concepts"],
      correct: [0],
      concept: "A major exam pitfall is confusing similar services (e.g., Kinesis Data Streams vs Kinesis Data Firehose, or Glue vs EMR). Exams test nuanced understanding of when to use each tool. Careful reading and understanding the specific use case in each question is essential."
    },
    {
      id: 23,
      type: "single",
      difficulty: 1,
      question: "What does federated computational governance mean in Data Mesh?",
      options: ["Global data policies are set centrally but enforced automatically by each domain through shared standards and tooling", "Each domain creates its own governance rules with no coordination across the organization", "A single centralized team reviews and approves every data change across all domains", "Governance is eliminated entirely to maximize domain team autonomy and speed"],
      correct: [0],
      concept: "Federated governance balances autonomy with interoperability: global policies (security, compliance, quality standards) are defined centrally, but enforcement is automated and embedded in the self-serve platform. Domains comply through tooling, not manual central review."
    },
    {
      id: 24,
      type: "single",
      difficulty: 1,
      question: "What type of testing validates that individual transformation functions produce correct output for given inputs?",
      options: ["Unit testing, which tests isolated functions or transformations with known inputs and expected outputs", "Integration testing, which tests the end-to-end flow across multiple pipeline components", "Load testing, which tests system behavior under high data volume conditions", "Acceptance testing, which validates that business requirements are met by stakeholders"],
      correct: [0],
      concept: "Unit tests validate individual components in isolation — a single SQL transformation, Python function, or dbt model. They use known inputs and assert expected outputs. Unit tests are the foundation of pipeline testing, catching bugs early before integration."
    },
    {
      id: 25,
      type: "single",
      difficulty: 1,
      question: "What is the role of Looker in the modern data stack?",
      options: ["It provides business intelligence, data exploration, and visualization for end users", "It extracts and loads data from source systems into the data warehouse", "It manages SQL transformations and data modeling inside the warehouse", "It orchestrates and schedules data pipeline jobs across the platform"],
      correct: [0],
      concept: "Looker (and similar BI tools like Tableau, Power BI, Metabase) is the consumption/visualization layer of the modern data stack. It connects to the warehouse and enables business users to explore data, build dashboards, and generate reports."
    },
    {
      id: 26,
      type: "single",
      difficulty: 1,
      question: "What is the primary advantage of ELT over traditional ETL in cloud environments?",
      options: ["ELT leverages the cloud warehouse\'s scalable compute for transformations, eliminating a separate ETL server", "ELT does not require any transformation logic since data is used in raw form", "ELT processes data faster because it skips the extraction step entirely", "ELT stores all data in flat files instead of relational database tables"],
      correct: [0],
      concept: "ELT pushes transformation computation into the cloud warehouse (Snowflake, BigQuery), which can elastically scale. This eliminates the need for a separate, often bottlenecked ETL processing server. Raw data is loaded first, then transformed using SQL in the warehouse."
    },
    {
      id: 27,
      type: "single",
      difficulty: 1,
      question: "What is the silver layer in the medallion architecture responsible for?",
      options: ["Cleansing, deduplicating, and conforming raw bronze data into validated, queryable datasets", "Storing machine learning model artifacts and feature engineering outputs", "Archiving gold layer data that has exceeded its retention period", "Providing real-time streaming data to operational applications"],
      correct: [0],
      concept: "The silver layer applies quality transformations to raw bronze data: deduplication, null handling, data type casting, schema enforcement, and business key resolution. It produces clean, conformed data that serves as the foundation for gold-layer aggregations."
    },
    {
      id: 28,
      type: "single",
      difficulty: 1,
      question: "What is data fabric architecture?",
      options: ["An automated, metadata-driven approach to data integration and management across distributed environments", "A physical networking topology that connects data centers with fiber optic cables", "A manual data cataloging process where analysts tag datasets with business terms", "A data compression algorithm optimized for columnar storage formats"],
      correct: [0],
      concept: "Data fabric uses metadata, AI/ML, and knowledge graphs to automate data integration, governance, and access across hybrid and multi-cloud environments. Unlike Data Mesh (organizational), data fabric is a technology-driven architecture that weaves data together intelligently."
    },
    {
      id: 29,
      type: "single",
      difficulty: 1,
      question: "In a certification exam, when a question asks for the \'MOST\' appropriate or \'BEST\' approach, what strategy should you use?",
      options: ["Look for the answer that best fits the specific scenario described, even if other options are partially correct", "Choose the answer that describes the most complex and advanced solution available", "Select the first answer that seems reasonable without evaluating all options", "Pick the answer that applies the broadest, most general approach to the problem"],
      correct: [0],
      concept: "\'MOST\' and \'BEST\' questions often have multiple technically valid answers, but one fits the scenario best. Read the scenario carefully for constraints (cost, latency, team size) and choose the option that addresses those specific requirements. Context is key."
    },
    {
      id: 30,
      type: "single",
      difficulty: 1,
      question: "What is the gold layer in the medallion architecture used for?",
      options: ["Business-level aggregations, metrics, and curated datasets optimized for reporting and analytics", "Raw data ingestion from streaming sources with minimal processing", "Data quality validation and anomaly detection on incoming source data", "Long-term cold storage of archived data that is rarely accessed"],
      correct: [0],
      concept: "The gold layer contains business-ready data: pre-aggregated metrics, dimensional models, KPI tables, and curated datasets designed for specific use cases (dashboards, ML features, reports). It delivers maximum value with minimum query complexity for consumers."
    },
    {
      id: 31,
      type: "single",
      difficulty: 1,
      question: "What is the main difference between data fabric and Data Mesh?",
      options: ["Data fabric is technology-driven using automation and AI, while Data Mesh is an organizational approach based on domain ownership", "Data fabric is for small companies while Data Mesh is only for large enterprises", "Data fabric requires on-premises infrastructure while Data Mesh requires cloud", "Data fabric handles structured data only while Data Mesh handles unstructured data"],
      correct: [0],
      concept: "Data fabric is a technology architecture using metadata-driven automation and AI/ML to manage data across systems. Data Mesh is an organizational paradigm that decentralizes data ownership to business domains. They address different aspects and can even complement each other."
    },
    {
      id: 32,
      type: "single",
      difficulty: 1,
      question: "Which testing type validates that a complete data pipeline produces correct results end-to-end, including extraction, transformation, and loading?",
      options: ["Integration testing, which validates the entire pipeline flow across all connected components", "Unit testing, which validates individual functions in complete isolation", "Smoke testing, which performs a basic check that the system starts without errors", "Regression testing, which ensures new changes haven\'t broken existing functionality"],
      correct: [0],
      concept: "Integration tests validate the complete pipeline flow: data is extracted from a source (or mock), transformed through all stages, and loaded into the target. They verify that all components work together correctly, catching issues that unit tests in isolation cannot."
    },
    {
      id: 33,
      type: "single",
      difficulty: 1,
      question: "What is data lineage?",
      options: ["The tracking of data from its origin through all transformations to its final destination", "The process of encrypting data at rest and in transit for security", "The technique of partitioning tables by date for query performance", "The method of assigning data ownership to individual database administrators"],
      correct: [0],
      concept: "Data lineage maps the journey of data from source to consumption: where it originated, what transformations were applied, and where it ends up. It supports impact analysis (what breaks if X changes?), debugging, regulatory compliance, and trust in data quality."
    },
    {
      id: 34,
      type: "single",
      difficulty: 1,
      question: "What does the term \'data freshness\' refer to in data observability?",
      options: ["How recently the data was updated relative to expectations or SLA commitments", "How clean and deduplicated the data is after transformation processing", "How many users have accessed the data in the last 24 hours", "How long the data has been stored before being archived or deleted"],
      correct: [0],
      concept: "Data freshness measures the timeliness of data — the gap between when data was last updated and when it was expected to be updated. Stale data (missed freshness SLAs) can lead to decisions based on outdated information. Observability tools monitor and alert on freshness violations."
    },
    {
      id: 35,
      type: "single",
      difficulty: 1,
      question: "Why is version control (e.g., Git) important for data pipeline code?",
      options: ["It tracks changes, enables collaboration, supports rollback, and integrates with CI/CD for automated deployment", "It compresses pipeline code to reduce storage costs in the repository", "It automatically optimizes SQL queries for better warehouse performance", "It prevents anyone from modifying pipeline code after the initial commit"],
      correct: [0],
      concept: "Version control is foundational for data engineering: it provides change history (who changed what and why), enables team collaboration (branching, code review), supports rollback (reverting broken changes), and integrates with CI/CD for automated testing and deployment."
    },
    {
      id: 36,
      type: "single",
      difficulty: 2,
      question: "A data pipeline uses INSERT INTO to write results. When the pipeline fails mid-execution and is retried, duplicate records appear. What is the BEST fix?",
      options: ["Replace INSERT INTO with MERGE/upsert using a natural key to achieve idempotent writes", "Add a unique constraint on the target table to reject duplicates with an error", "Add a pre-step that deletes all target data before each run, then use INSERT INTO", "Schedule the pipeline to run only once per day to minimize retry likelihood"],
      correct: [0],
      concept: "MERGE/upsert ensures idempotency by matching on a key: existing records are updated, new records are inserted. This handles retries gracefully. Unique constraints cause errors (not graceful handling), full deletes risk data loss, and reducing frequency doesn\'t solve the root cause."
    },
    {
      id: 37,
      type: "single",
      difficulty: 2,
      question: "A team is implementing CI/CD for their dbt project. Which step should occur in the CI pipeline when a pull request is opened?",
      options: ["Run dbt build in a temporary schema to compile models, run tests, and validate changes against test data", "Deploy the dbt models directly to the production schema for immediate stakeholder review", "Only check that the YAML files are syntactically valid without running any models", "Send a notification to the data team that a change has been proposed for manual review"],
      correct: [0],
      concept: "CI for dbt should build models in an isolated (temporary/PR-specific) schema, run all tests (schema tests, data tests), and validate that the changes don\'t break anything. This catches issues before merging. Production deployment happens in the CD phase after merge."
    },
    {
      id: 38,
      type: "single",
      difficulty: 2,
      question: "What is the primary drawback of Lambda architecture?",
      options: ["Maintaining two separate codebases (batch and stream) that must produce consistent results is complex and error-prone", "It can only process structured data and cannot handle semi-structured or unstructured formats", "The speed layer permanently replaces the batch layer once real-time processing is established", "Lambda architecture requires proprietary software and cannot be implemented with open-source tools"],
      correct: [0],
      concept: "Lambda\'s main drawback is operational complexity: you must write, test, and maintain TWO processing pipelines (batch and speed) that produce semantically identical results. Code divergence, debugging across layers, and reconciliation between views add significant engineering burden."
    },
    {
      id: 39,
      type: "single",
      difficulty: 2,
      question: "A schema registry enforces BACKWARD compatibility mode. A producer wants to add a new required field to the schema. What happens?",
      options: ["The schema registry rejects the change because adding a required field breaks backward compatibility", "The schema registry accepts the change and automatically adds default values to existing data", "The schema registry accepts any change in backward mode since it only checks forward compatibility", "The schema registry queues the change for manual approval by the data governance team"],
      correct: [0],
      concept: "Backward compatibility requires that new schemas can read old data. Adding a required field without a default means old data (missing the field) can\'t be read by the new schema — this breaks backward compatibility. Only optional fields with defaults can be safely added."
    },
    {
      id: 40,
      type: "single",
      difficulty: 2,
      question: "In a Data Mesh implementation, which team is responsible for the quality and reliability of the \'customer orders\' data product?",
      options: ["The orders domain team that owns the business process generating order data", "The central data platform team that manages shared infrastructure", "The data governance committee that sets enterprise-wide policies", "The business intelligence team that builds dashboards consuming order data"],
      correct: [0],
      concept: "In Data Mesh, the domain that generates and understands the data owns it end-to-end. The orders domain team owns the \'customer orders\' data product: its pipelines, quality, documentation, and SLAs. The platform team provides infrastructure, not data ownership."
    },
    {
      id: 41,
      type: "single",
      difficulty: 2,
      question: "What is the key advantage of Kappa architecture over Lambda architecture?",
      options: ["A single processing pipeline for both real-time and historical reprocessing reduces code duplication and maintenance", "Kappa architecture provides lower latency than Lambda for real-time processing", "Kappa architecture requires less storage since it eliminates the speed layer", "Kappa architecture supports batch processing better than Lambda architecture"],
      correct: [0],
      concept: "Kappa\'s advantage is simplicity: ONE codebase handles both real-time processing and historical reprocessing (by replaying events). This eliminates Lambda\'s dual-codebase problem. However, Kappa requires a replayable event log (like Kafka) and may not suit all workloads."
    },
    {
      id: 42,
      type: "single",
      difficulty: 2,
      question: "A data engineer notices that a pipeline\'s output table has 30% fewer rows than yesterday despite no known source changes. Which data observability pillar detected this?",
      options: ["Volume monitoring, which tracks row counts and data size against expected thresholds", "Freshness monitoring, which checks when the data was last updated", "Schema monitoring, which detects structural changes in table definitions", "Distribution monitoring, which checks statistical profiles of column values"],
      correct: [0],
      concept: "Volume monitoring tracks the quantity of data (row counts, byte sizes) and alerts when values deviate significantly from expected patterns. A 30% row count drop is a volume anomaly. Freshness checks timeliness, schema checks structure, and distribution checks value profiles."
    },
    {
      id: 43,
      type: "single",
      difficulty: 2,
      question: "What is a data quality gate in a pipeline?",
      options: ["A checkpoint that validates data against predefined quality rules and blocks the pipeline if rules fail", "A security firewall that prevents unauthorized access to data in transit", "A rate limiter that controls how much data flows through the pipeline per second", "A load balancer that distributes data processing across multiple worker nodes"],
      correct: [0],
      concept: "Data quality gates are checkpoints in the pipeline where data is validated (null checks, uniqueness, range validation, referential integrity). If validation fails, the pipeline halts or routes bad data to quarantine, preventing corrupt data from propagating downstream."
    },
    {
      id: 44,
      type: "single",
      difficulty: 2,
      question: "How does dbt implement data testing?",
      options: ["Through schema tests in YAML files and custom data tests in SQL files that assert expected conditions", "Through Python unit tests that mock database connections and validate transformations", "Through built-in machine learning models that predict whether data quality is acceptable", "Through scheduled external scripts that compare dbt output against source system data"],
      correct: [0],
      concept: "dbt supports two testing types: (1) schema tests defined in YAML (unique, not_null, accepted_values, relationships) that validate column-level properties, and (2) custom data tests — SQL queries that should return zero rows when data is correct. Tests run with \'dbt test\'."
    },
    {
      id: 45,
      type: "single",
      difficulty: 2,
      question: "In a modern data stack, what is the typical data flow sequence from source to dashboard?",
      options: ["Source → Fivetran (extract/load) → Snowflake (warehouse) → dbt (transform) → Looker (visualize)", "Source → dbt (transform) → Fivetran (load) → Snowflake (warehouse) → Looker (visualize)", "Source → Looker (visualize) → Snowflake (warehouse) → dbt (transform) → Fivetran (load)", "Source → Snowflake (warehouse) → Fivetran (extract) → dbt (transform) → Looker (visualize)"],
      correct: [0],
      concept: "The modern ELT data flow: Fivetran extracts from sources and loads raw data into Snowflake. dbt then transforms the data inside Snowflake (staging → intermediate → marts). Finally, Looker connects to Snowflake to visualize the transformed, business-ready data."
    },
    {
      id: 46,
      type: "single",
      difficulty: 2,
      question: "What is the purpose of a staging environment in CI/CD for data pipelines?",
      options: ["To provide a production-like environment for testing changes before deploying to production", "To permanently store development-phase data for historical reference", "To serve as the primary production environment for business-critical dashboards", "To archive old pipeline code that is no longer used in any environment"],
      correct: [0],
      concept: "A staging environment mirrors production in structure and (ideally) data scale. Changes validated in CI are deployed to staging first for integration testing, performance testing, and stakeholder validation before final production deployment. It\'s the last safety check."
    },
    {
      id: 47,
      type: "single",
      difficulty: 2,
      question: "A team using Data Mesh discovers that different domains define \'customer\' differently. What Data Mesh mechanism addresses this?",
      options: ["Federated governance that establishes shared standards and interoperability rules across domains", "Domain ownership that allows each domain to use its own independent customer definition", "Self-serve infrastructure that automatically harmonizes different customer definitions", "Data as a product that requires each domain to expose its customer data without standardization"],
      correct: [0],
      concept: "Federated governance addresses cross-domain interoperability. It defines global standards (common identifiers, naming conventions, semantic definitions) while allowing domain autonomy. Shared \'customer\' definitions and identifiers ensure domains can combine data meaningfully."
    },
    {
      id: 48,
      type: "single",
      difficulty: 2,
      question: "What problem does a schema registry solve when Kafka topics carry evolving data schemas?",
      options: ["It ensures that schema changes are compatible with existing consumers, preventing deserialization failures", "It compresses Kafka messages to reduce broker storage requirements significantly", "It partitions Kafka topics based on schema version for optimized read performance", "It replicates Kafka topics across data centers for geographic redundancy"],
      correct: [0],
      concept: "Without a schema registry, a producer could change a schema in a way that breaks consumers (e.g., removing a required field). The registry validates each new schema version against compatibility rules before allowing it, ensuring consumers can always deserialize messages."
    },
    {
      id: 49,
      type: "single",
      difficulty: 2,
      question: "What is the difference between smoke testing and regression testing for data pipelines?",
      options: ["Smoke tests verify basic functionality works after deployment; regression tests verify that existing functionality wasn\'t broken by new changes", "Smoke tests run for hours validating all edge cases; regression tests are quick basic checks", "Smoke tests are manual while regression tests are always automated", "Smoke tests verify performance under load while regression tests verify data accuracy"],
      correct: [0],
      concept: "Smoke tests are quick, shallow checks that critical pipeline components start and produce basic output after deployment (\'does it not crash?\'). Regression tests are deeper, verifying that previously working functionality still works correctly after code changes."
    },
    {
      id: 50,
      type: "single",
      difficulty: 2,
      question: "A pipeline writes to a partitioned table using date partitions. To ensure idempotency, what approach should the engineer use?",
      options: ["Overwrite the specific date partition being processed rather than appending to it", "Append to the partition and deduplicate downstream in a separate process", "Write to a temporary table and swap it with the production table atomically", "Insert into the partition with a unique constraint that silently drops duplicates"],
      correct: [0],
      concept: "Partition-level idempotency is achieved by overwriting (replacing) the specific partition being processed. If the pipeline reruns for the same date, it replaces the partition with the same data. This is simpler than deduplication and avoids the complexity of unique constraints."
    },
    {
      id: 51,
      type: "single",
      difficulty: 2,
      question: "What are the five pillars of data observability?",
      options: ["Freshness, volume, schema, distribution, and lineage", "Accuracy, completeness, consistency, timeliness, and uniqueness", "Extraction, loading, transformation, validation, and delivery", "Latency, throughput, availability, durability, and security"],
      correct: [0],
      concept: "The five pillars of data observability (per Barr Moses/Monte Carlo): Freshness (is data up-to-date?), Volume (is the right amount of data present?), Schema (has the structure changed?), Distribution (are values within expected ranges?), and Lineage (where did data come from?)."
    },
    {
      id: 52,
      type: "single",
      difficulty: 2,
      question: "In the medallion architecture, what type of transformation typically occurs between bronze and silver layers?",
      options: ["Deduplication, data type casting, null handling, and schema enforcement on raw data", "Complex business aggregations, KPI calculations, and executive summary generation", "Machine learning feature engineering and model training on production data", "Data archival and compression for long-term cold storage in object stores"],
      correct: [0],
      concept: "Bronze-to-silver transformations focus on data quality: removing duplicates, enforcing data types, handling nulls/defaults, validating against schemas, and resolving business keys. The silver layer is \'cleaned\' data — ready for business logic but not yet aggregated."
    },
    {
      id: 53,
      type: "single",
      difficulty: 2,
      question: "What is the main challenge of implementing Data Mesh in a large organization?",
      options: ["Shifting organizational culture from centralized data ownership to distributed domain ownership requires significant change management", "Data Mesh requires replacing all existing databases with a single unified platform", "Data Mesh cannot work with cloud infrastructure and requires on-premises systems", "Data Mesh eliminates the need for data engineers entirely, causing workforce issues"],
      correct: [0],
      concept: "Data Mesh is primarily an organizational change, not just a technology change. It requires domains to accept data ownership responsibility, new team structures, new skill sets (analytics engineering within domains), and cultural shifts from centralized control to distributed autonomy."
    },
    {
      id: 54,
      type: "single",
      difficulty: 2,
      question: "When implementing CI/CD for data pipelines, what should the automated test suite include at minimum?",
      options: ["Schema validation, row count checks, null checks on key columns, and referential integrity tests", "Only a check that the pipeline job starts without throwing an exception", "Full production data comparison between the old and new pipeline versions", "Manual review by two senior engineers before any code is merged"],
      correct: [0],
      concept: "A minimum CI test suite should cover: schema validation (correct columns/types), volume checks (expected row counts), null checks (critical fields populated), and referential integrity (foreign keys valid). This catches common issues automatically without requiring full data comparison."
    },
    {
      id: 55,
      type: "single",
      difficulty: 2,
      question: "What does \'full compatibility\' mode mean in a schema registry?",
      options: ["The schema must be both backward and forward compatible with all previous versions simultaneously", "The schema is fully locked and cannot be changed under any circumstances", "The schema is fully open and any change is accepted without validation", "The schema is compatible only with the immediately previous version, not all versions"],
      correct: [0],
      concept: "Full compatibility (also called \'full transitive\') requires both backward compatibility (new schema reads old data) AND forward compatibility (old schema reads new data) against all registered versions. This is the strictest mode, maximizing safety but limiting allowed changes."
    },
    {
      id: 56,
      type: "single",
      difficulty: 2,
      question: "A data engineer is deciding between Lambda and Kappa architecture. The use case requires both exact historical batch reports and real-time dashboards. Which is MORE appropriate and why?",
      options: ["Lambda, because the batch layer provides exact historical results while the speed layer provides real-time approximations", "Kappa, because a single stream processing pipeline can handle both requirements simultaneously", "Lambda, because Kappa cannot process historical data under any circumstances", "Kappa, because Lambda architecture has been deprecated and is no longer supported"],
      correct: [0],
      concept: "Lambda is better when exact historical batch processing AND real-time processing have different accuracy requirements. The batch layer recomputes with full accuracy, while the speed layer provides timely approximations. Kappa works when stream reprocessing can achieve the same accuracy."
    },
    {
      id: 57,
      type: "single",
      difficulty: 2,
      question: "What is a common anti-pattern when writing data pipeline tests?",
      options: ["Testing only the happy path and ignoring edge cases like nulls, empty datasets, duplicates, and schema changes", "Writing too many tests that cover overlapping scenarios with different input data", "Using mock data instead of production data for unit test validation", "Running tests before every deployment rather than only after deployment"],
      correct: [0],
      concept: "Happy-path-only testing is a dangerous anti-pattern: pipelines seem correct until they encounter nulls, empty source tables, unexpected duplicates, or schema changes. Robust test suites must include edge cases, boundary conditions, and failure scenarios."
    },
    {
      id: 58,
      type: "single",
      difficulty: 2,
      question: "In the modern data stack, what does \'ELT over ETL\' specifically enable?",
      options: ["Analysts and analytics engineers can build and iterate on transformations using SQL inside the warehouse without waiting for engineering team", "Data is transformed more quickly because loading is eliminated from the process", "Raw data is never stored, reducing storage costs significantly", "Source systems are relieved of all processing burden by pre-transforming data"],
      correct: [0],
      concept: "ELT democratizes transformation: raw data in the warehouse allows SQL-proficient analysts/analytics engineers to build and modify transformations using tools like dbt, without depending on a central engineering team to modify ETL jobs. This accelerates iteration and self-service."
    },
    {
      id: 59,
      type: "single",
      difficulty: 2,
      question: "What is a data product in the context of Data Mesh?",
      options: ["A curated, documented, and quality-assured dataset published by a domain team for consumption by other teams", "Any table or file that exists in the organization\'s data warehouse or data lake", "A commercial software application that processes data for the organization", "A physical hardware device that collects and transmits sensor data"],
      correct: [0],
      concept: "A data product is more than a dataset — it includes the data itself, its documentation, quality guarantees, access interfaces (APIs, SQL), monitoring, and SLAs. Domain teams are accountable for their data products just as product teams are for customer-facing products."
    },
    {
      id: 60,
      type: "single",
      difficulty: 2,
      question: "Why is the separation of storage and compute important in the modern data stack?",
      options: ["It allows storage and compute to scale independently based on different workload demands", "It ensures data is always stored in memory for maximum query performance", "It eliminates the need for data partitioning or indexing strategies", "It prevents any compute costs when the data warehouse is idle during off-peak hours"],
      correct: [0],
      concept: "Separating storage and compute (pioneered by Snowflake) means you can scale compute up/down without affecting storage, and vice versa. Heavy query loads add compute; growing data adds storage. This enables cost optimization — pay for compute only when processing."
    },
    {
      id: 61,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are techniques that help achieve idempotent data pipelines? (Select all that apply)",
      options: ["Using MERGE/upsert operations with natural keys for target table writes", "Partitioning target tables and overwriting specific partitions on each run", "Assigning unique run IDs and deduplicating within each run before final write", "Using INSERT with no deduplication and relying on downstream consumers to handle duplicates"],
      correct: [0, 1, 2],
      concept: "Idempotency techniques include: MERGE/upsert (key-based deduplication), partition overwrite (replacing partition contents), and run-ID deduplication (tracking which run produced each record). Relying on downstream deduplication pushes the problem forward rather than solving it."
    },
    {
      id: 62,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are core principles of Data Mesh? (Select all that apply)",
      options: ["Domain ownership of data products", "Data treated as a product with quality guarantees", "Self-serve data infrastructure as a platform", "Centralized data team owning all domain data pipelines"],
      correct: [0, 1, 2],
      concept: "Data Mesh has four principles: (1) domain ownership, (2) data as a product, (3) self-serve data infrastructure, and (4) federated computational governance. Centralized ownership of all pipelines is the OPPOSITE of Data Mesh — it\'s the traditional centralized data team model."
    },
    {
      id: 63,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are components commonly found in a modern data stack? (Select all that apply)",
      options: ["Managed data ingestion tools like Fivetran or Airbyte", "Cloud data warehouses like Snowflake or BigQuery", "SQL-based transformation tools like dbt", "On-premises Hadoop clusters for distributed batch processing"],
      correct: [0, 1, 2],
      concept: "The modern data stack is cloud-native: managed ingestion (Fivetran/Airbyte), cloud warehouses (Snowflake/BigQuery/Redshift), and SQL transformation (dbt). On-premises Hadoop clusters represent the previous generation of data architecture, not the modern stack."
    },
    {
      id: 64,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are valid data pipeline testing types? (Select all that apply)",
      options: ["Unit tests that validate individual transformation functions", "Integration tests that validate end-to-end pipeline data flow", "Data quality tests that check for nulls, duplicates, and value ranges", "Aesthetic tests that evaluate the visual appearance of output tables"],
      correct: [0, 1, 2],
      concept: "Valid pipeline testing types include: unit tests (individual functions), integration tests (end-to-end flows), and data quality tests (nulls, ranges, uniqueness). \'Aesthetic tests\' for table appearance are not a standard testing category in data engineering."
    },
    {
      id: 65,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are characteristics of the bronze layer in medallion architecture? (Select all that apply)",
      options: ["Data is stored in its raw, unprocessed form as received from sources", "It serves as the immutable historical record for data replay and reprocessing", "Data may include duplicates, nulls, and inconsistent formats from the source", "All business rules and aggregations are applied before data enters this layer"],
      correct: [0, 1, 2],
      concept: "The bronze layer is raw and immutable: data is stored exactly as received (including imperfections like duplicates and nulls), providing a full historical record for reprocessing. Business rules and aggregations are applied in silver and gold layers, not bronze."
    },
    {
      id: 66,
      type: "multi",
      difficulty: 2,
      question: "Which benefits does a schema registry provide in a streaming data architecture? (Select all that apply)",
      options: ["Centralized schema storage and version management for all data topics", "Compatibility enforcement that prevents breaking changes from being registered", "Automatic serialization/deserialization of messages using registered schemas", "Automatic horizontal scaling of Kafka broker partitions based on message volume"],
      correct: [0, 1, 2],
      concept: "Schema registries provide: centralized schema storage/versioning, compatibility enforcement (backward/forward/full), and integration with serialization frameworks (Avro, Protobuf) for automatic ser/de. Kafka partition scaling is a broker concern, not a schema registry function."
    },
    {
      id: 67,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are challenges specific to Lambda architecture? (Select all that apply)",
      options: ["Maintaining two separate processing codebases that must produce consistent results", "Increased operational complexity from managing batch and speed layers simultaneously", "Potential inconsistency between batch and real-time views before batch reprocessing completes", "Inability to process any streaming data due to the batch-only design"],
      correct: [0, 1, 2],
      concept: "Lambda challenges include: dual codebase maintenance, operational complexity of two layers, and temporary inconsistency between speed layer (approximate) and batch layer (exact) results. Lambda CAN process streaming data — that\'s what the speed layer does."
    },
    {
      id: 68,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are valid CI/CD practices for data pipelines? (Select all that apply)",
      options: ["Automated schema and data quality tests run on every pull request", "Deployment to staging environment for integration testing before production", "Code review by peers before merging changes to the main branch", "Direct deployment to production without any testing to move faster"],
      correct: [0, 1, 2],
      concept: "CI/CD best practices include: automated tests on PRs (CI), staging deployment for integration testing (CD), and peer code review (quality). Direct production deployment without testing is an anti-pattern that risks introducing bugs and data quality issues."
    },
    {
      id: 69,
      type: "multi",
      difficulty: 2,
      question: "Which of the following correctly describe the gold layer in medallion architecture? (Select all that apply)",
      options: ["Contains business-level aggregations, metrics, and curated datasets", "Optimized for consumption by BI tools, dashboards, and machine learning models", "May contain dimensional models like star schemas for analytical workloads", "Stores raw unprocessed data for maximum flexibility in future transformations"],
      correct: [0, 1, 2],
      concept: "The gold layer is business-ready: pre-aggregated metrics, curated datasets, dimensional models (star schemas), and ML feature tables. It is optimized for specific consumption use cases. Raw unprocessed data belongs in the bronze layer, not gold."
    },
    {
      id: 70,
      type: "multi",
      difficulty: 2,
      question: "Which exam preparation strategies are recommended for data engineering certification? (Select all that apply)",
      options: ["Practice with timed mock exams to build speed and identify weak areas", "Study official documentation and whitepapers from the certification provider", "Understand the \'why\' behind each service choice, not just the \'what\'", "Memorize every possible configuration parameter for all services"],
      correct: [0, 1, 2],
      concept: "Effective certification preparation includes: timed practice tests (build speed, find gaps), official documentation study (authoritative source), and understanding rationale (why choose service A over B). Memorizing every parameter is impractical and tests rarely require that detail level."
    },
    {
      id: 71,
      type: "multi",
      difficulty: 3,
      question: "A data engineer is designing an idempotent pipeline for a table without a natural key. Which strategies can achieve idempotency? (Select all that apply)",
      options: ["Generate a deterministic surrogate key by hashing the combination of all business columns", "Use partition-level overwrite so the entire partition is replaced on each run", "Use a write-audit-publish pattern that writes to a staging area, validates, then atomically swaps", "Append all records and let the BI tool deduplicate at query time"],
      correct: [0, 1, 2],
      concept: "Without a natural key: (1) deterministic hashing creates a stable key for MERGE, (2) partition overwrite replaces all data for the partition, and (3) write-audit-publish provides atomic idempotent updates. Pushing deduplication to BI tools is unreliable and an anti-pattern."
    },
    {
      id: 72,
      type: "multi",
      difficulty: 3,
      question: "Which of the following are valid arguments AGAINST adopting Data Mesh? (Select all that apply)",
      options: ["Smaller organizations may lack the domain maturity to support distributed data ownership", "Distributed ownership can lead to data silos if federated governance is not properly implemented", "Data Mesh requires significant organizational change management that may not be feasible", "Data Mesh makes it impossible to have any shared data standards or common identifiers"],
      correct: [0, 1, 2],
      concept: "Valid Data Mesh criticisms: small organizations may not benefit from decentralization, poor governance leads to silos, and change management is hard. However, Data Mesh does NOT prevent shared standards — federated governance explicitly defines cross-domain standards."
    },
    {
      id: 73,
      type: "multi",
      difficulty: 3,
      question: "Which of the following practices contribute to data pipeline observability? (Select all that apply)",
      options: ["Monitoring data freshness with alerts when data exceeds expected staleness thresholds", "Tracking row count trends over time to detect anomalous volume changes", "Implementing data lineage tracking from source to consumption layer", "Disabling all logging and monitoring to improve pipeline processing speed"],
      correct: [0, 1, 2],
      concept: "Observability requires active monitoring: freshness alerts (timeliness), volume tracking (completeness), and lineage mapping (traceability). Disabling logging and monitoring is the opposite of observability — it creates blind spots and makes issue diagnosis impossible."
    },
    {
      id: 74,
      type: "multi",
      difficulty: 3,
      question: "In the context of data contracts, which elements should a well-defined contract include? (Select all that apply)",
      options: ["Schema definition specifying field names, types, and constraints", "SLA commitments for data freshness, availability, and quality metrics", "Semantic definitions explaining the business meaning of each field", "Implementation details of the producer\'s internal ETL pipeline code"],
      correct: [0, 1, 2],
      concept: "Data contracts should include: schema (structural agreement), SLAs (quality guarantees), and semantic definitions (shared understanding). Internal ETL implementation details are NOT part of the contract — contracts define the interface, not the implementation, supporting loose coupling."
    },
    {
      id: 75,
      type: "multi",
      difficulty: 3,
      question: "Which of the following are differences between the silver and gold layers in medallion architecture? (Select all that apply)",
      options: ["Silver contains entity-level cleaned data while gold contains business-level aggregated data", "Silver is typically modeled as normalized tables while gold often uses dimensional models", "Silver serves as a shared foundation for multiple gold-layer use cases", "Silver applies complex business rules while gold stores only raw unprocessed data"],
      correct: [0, 1, 2],
      concept: "Silver provides cleaned, entity-level data (often normalized) that serves as a foundation for multiple downstream use cases. Gold contains use-case-specific aggregations and dimensional models. Gold does NOT store raw data — that\'s bronze. Silver is the foundation, gold is the delivery."
    },
    {
      id: 76,
      type: "single",
      difficulty: 3,
      question: "A streaming pipeline processes events from Kafka into a data lake using the medallion architecture. Events can arrive out of order and late. What is the BEST approach for the bronze layer?",
      options: ["Append all events as-is including late arrivals, using event timestamps and deduplication keys for downstream reprocessing", "Reject any events that arrive more than 5 minutes late to maintain strict ordering", "Buffer all events in memory until a complete time window is assembled, then write once", "Apply full deduplication and ordering at the bronze layer before any data is persisted"],
      correct: [0],
      concept: "The bronze layer should be a faithful, append-only record of all incoming data — including late and out-of-order events. Ordering, deduplication, and windowing logic belong in silver/gold layers. Rejecting late events at bronze would cause data loss; buffering risks memory issues."
    },
    {
      id: 77,
      type: "single",
      difficulty: 3,
      question: "A company implements Data Mesh but finds that each domain\'s data products use different data formats, naming conventions, and identifiers. What went wrong?",
      options: ["Federated governance was not properly implemented to establish cross-domain interoperability standards", "Data Mesh inherently prevents standardization, and the company should switch to a centralized model", "The self-serve platform was too restrictive and prevented domains from choosing their own tools", "Domain ownership was correctly applied, and format differences are expected and acceptable"],
      correct: [0],
      concept: "Data Mesh without proper federated governance leads to fragmentation. Federated governance defines global standards (common identifiers, naming conventions, data formats) that all domains must follow. Without it, data products become incompatible silos. The issue is governance, not the mesh model itself."
    },
    {
      id: 78,
      type: "single",
      difficulty: 3,
      question: "A data engineer needs to implement a CI pipeline for SQL-based transformations that have no explicit dependencies declared. What is the BEST approach to determine test scope?",
      options: ["Parse SQL to extract table references and build a dependency graph, then test all downstream models of changed files", "Test only the changed SQL files without considering downstream dependencies", "Run all tests across the entire project regardless of which files were changed", "Skip CI testing entirely and rely on post-deployment monitoring to catch issues"],
      correct: [0],
      concept: "Smart CI pipelines analyze SQL dependencies to determine the \'blast radius\' of changes. By parsing table references, they build a DAG and test all downstream models that could be affected. This balances thoroughness (catching cascading issues) with efficiency (not testing everything)."
    },
    {
      id: 79,
      type: "single",
      difficulty: 3,
      question: "A team is evaluating whether to use Kappa architecture for a use case that requires exact aggregate reports over 5 years of historical data. What is the PRIMARY concern?",
      options: ["Replaying 5 years of events through the streaming pipeline for reprocessing may be prohibitively slow and expensive", "Kappa architecture cannot store more than 1 year of data in the event log", "Stream processing frameworks cannot perform aggregation operations on historical data", "Kappa requires all 5 years of data to fit in memory for real-time processing"],
      correct: [0],
      concept: "Kappa\'s weakness is historical reprocessing at scale: replaying years of events through a streaming pipeline is slow and resource-intensive compared to batch processing optimized for large scans. For large historical datasets requiring exact results, Lambda\'s batch layer may be more practical."
    },
    {
      id: 80,
      type: "single",
      difficulty: 3,
      question: "A schema evolution scenario: a producer changes a field from \'string\' to \'int\' in an Avro schema registered with backward compatibility mode. What happens?",
      options: ["The schema registry rejects the change because changing a field\'s type is not backward compatible", "The schema registry accepts the change and automatically converts existing string data to integers", "The schema registry accepts the change but marks all existing messages as deprecated", "The schema registry accepts the change because Avro supports implicit type promotion for all types"],
      correct: [0],
      concept: "Changing a field from string to int is a breaking change — the new schema cannot read old string data as int. Backward compatibility is violated. Avro supports limited type promotion (int→long, float→double) but string→int is not a supported promotion."
    },
    {
      id: 81,
      type: "single",
      difficulty: 3,
      question: "A data pipeline processes 10 million rows nightly. The team wants to add data quality testing but is concerned about runtime. What is the MOST efficient approach?",
      options: ["Implement statistical sampling-based tests on representative subsets for heavy validations and full checks only for critical constraints", "Skip all data quality testing to maintain the current pipeline runtime SLA", "Run all data quality tests on 100% of data and accept the increased pipeline runtime", "Perform data quality testing only once per month on a manually selected sample"],
      correct: [0],
      concept: "Balanced testing uses tiered approaches: critical checks (nulls on keys, referential integrity) run on 100% of data, while expensive validations (distribution analysis, statistical tests) use sampling. This maintains quality coverage while keeping runtime acceptable."
    },
    {
      id: 82,
      type: "single",
      difficulty: 3,
      question: "An organization using the modern data stack discovers that their Fivetran ingestion costs are growing 40% month-over-month. What is the MOST likely cause and remediation?",
      options: ["Source tables are being fully synced on every run; switching to incremental sync mode with appropriate cursors reduces data volume", "Fivetran has a bug causing double billing; contacting support for a refund is the solution", "The Snowflake warehouse is too large, causing Fivetran to process data more slowly", "Looker dashboards are querying too frequently, which triggers additional Fivetran syncs"],
      correct: [0],
      concept: "Fivetran (and similar tools) often default to full-sync mode, which re-ingests entire tables on each run. Switching to incremental sync (using timestamps, CDC, or cursor columns) dramatically reduces data volume and cost. Fivetran costs are based on data volume, not downstream queries."
    },
    {
      id: 83,
      type: "single",
      difficulty: 3,
      question: "In a Data Mesh implementation, how should the self-serve platform handle cross-domain data products that need to be joined?",
      options: ["Provide standardized interfaces, common identifiers, and a data catalog that enables discovery and interoperability across domains", "Require all domains to store their data in a single shared database schema for easy joining", "Prohibit cross-domain data access entirely to maintain strict domain boundaries", "Have the central platform team build all cross-domain joins on behalf of the consuming domains"],
      correct: [0],
      concept: "The self-serve platform enables cross-domain usage through: standardized APIs/interfaces, shared identifiers (e.g., customer_id), and a data catalog for discovery. Domains remain autonomous but interoperable. Shared databases defeat decentralization; prohibiting access defeats the purpose."
    },
    {
      id: 84,
      type: "single",
      difficulty: 3,
      question: "A team needs to implement blue-green deployment for a data pipeline. What does this approach entail?",
      options: ["Running two identical environments (blue and green) and switching traffic from old to new after validation, enabling instant rollback", "Deploying changes to half the pipeline (blue) while keeping the other half (green) on the old version", "Color-coding pipeline stages based on their criticality level for monitoring purposes", "Running the pipeline twice with different parameters and comparing outputs before committing"],
      correct: [0],
      concept: "Blue-green deployment maintains two identical environments. The new version is deployed to the inactive environment (green), tested, and then traffic is switched from blue to green. If issues arise, switching back to blue provides instant rollback. This minimizes deployment risk."
    },
    {
      id: 85,
      type: "single",
      difficulty: 3,
      question: "A certification exam question asks: \'Which service should you use to process streaming data in near-real-time on AWS?\' Options include Kinesis Data Streams, Kinesis Data Firehose, EMR, and Glue. What is the correct exam strategy?",
      options: ["Identify the key qualifier \'near-real-time processing\' — Kinesis Data Streams provides the lowest latency for custom stream processing", "Choose EMR because it is the most powerful general-purpose processing service", "Choose Glue because it handles both batch and streaming and is the newest service", "Choose Kinesis Data Firehose because it has \'fire\' in the name suggesting speed"],
      correct: [0],
      concept: "Exam strategy: identify key qualifiers (\'near-real-time\', \'processing\'). Kinesis Data Streams allows custom processing with sub-second latency. Firehose is for delivery/loading (not custom processing). EMR is batch/cluster. Glue is primarily ETL. The qualifier \'processing\' + \'near-real-time\' points to Data Streams."
    },
    {
      id: 86,
      type: "tf",
      difficulty: 3,
      question: "An idempotent pipeline guarantees that running it multiple times with the same input will produce exactly the same output without creating duplicates.",
      options: ["True — idempotency ensures that repeated executions with the same input produce identical results", "False — idempotency only guarantees that the pipeline will not crash on retries, not that results are identical"],
      correct: [0],
      concept: "Idempotency is precisely defined as: applying the same operation multiple times produces the same result as applying it once. For data pipelines, this means re-runs with the same input produce identical output — no duplicates, no missing data, no side effects."
    },
    {
      id: 87,
      type: "tf",
      difficulty: 3,
      question: "In the modern data stack, dbt performs both data extraction from sources and transformation inside the warehouse.",
      options: ["False — dbt only performs transformations inside the warehouse; extraction and loading are handled by tools like Fivetran", "True — dbt is a complete ELT tool that handles extraction, loading, and transformation end-to-end"],
      correct: [0],
      concept: "dbt is the \'T\' in ELT — it handles ONLY transformations. It does not extract data from sources or load data into the warehouse. Extraction and loading are handled by ingestion tools (Fivetran, Airbyte, Stitch). dbt operates on data already in the warehouse."
    },
    {
      id: 88,
      type: "tf",
      difficulty: 3,
      question: "Data Mesh advocates for a centralized data team to own all data pipelines and data products across the organization.",
      options: ["False — Data Mesh advocates for domain teams to own their own data products, not a centralized data team", "True — Data Mesh centralizes all data ownership to ensure consistency and quality across domains"],
      correct: [0],
      concept: "Data Mesh is fundamentally decentralized: domain teams own their data products. The centralized model (one data team owns everything) is the traditional approach that Data Mesh explicitly rejects in favor of distributed domain ownership with federated governance."
    },
    {
      id: 89,
      type: "tf",
      difficulty: 3,
      question: "Kappa architecture eliminates the batch processing layer and uses only stream processing for both real-time and historical reprocessing.",
      options: ["True — Kappa uses a single stream processing pipeline and reprocesses history by replaying events", "False — Kappa still maintains a batch layer but makes it secondary to the streaming layer"],
      correct: [0],
      concept: "Kappa architecture\'s defining characteristic is the elimination of the batch layer. ALL processing — both real-time and historical — goes through the same stream processing pipeline. Historical reprocessing is achieved by replaying events from the log (e.g., Kafka topic)."
    },
    {
      id: 90,
      type: "tf",
      difficulty: 3,
      question: "In the medallion architecture, data should flow directly from bronze to gold, skipping the silver layer for maximum efficiency.",
      options: ["False — the silver layer provides essential data cleansing and conforming; skipping it leads to unreliable gold-layer data", "True — the silver layer is optional overhead and skipping it improves pipeline performance"],
      correct: [0],
      concept: "Skipping silver means gold-layer aggregations operate on raw, uncleaned data (duplicates, nulls, inconsistent types). The silver layer ensures data quality before business logic is applied. Without it, gold-layer results are unreliable. Each layer has a distinct, necessary purpose."
    },
    {
      id: 91,
      type: "tf",
      difficulty: 3,
      question: "A schema registry with backward compatibility mode allows producers to remove existing required fields from the schema.",
      options: ["True — removing a required field is backward compatible because the new schema simply ignores data it doesn\'t need", "False — removing a required field breaks backward compatibility because old data with the field cannot be properly mapped"],
      correct: [0],
      concept: "Removing a field IS backward compatible: the new schema (missing the field) can still read old data (with the field) — the extra field is simply ignored. Backward compatibility concerns whether new code can read old data. The field removal is safe from the new consumer\'s perspective."
    },
    {
      id: 92,
      type: "tf",
      difficulty: 3,
      question: "Data contracts are only necessary in Data Mesh architectures and have no value in centralized data architectures.",
      options: ["False — data contracts provide value in any architecture by formalizing agreements between data producers and consumers", "True — centralized architectures have a single team controlling everything, making formal contracts unnecessary"],
      correct: [0],
      concept: "Data contracts are valuable in ANY architecture. Even in centralized teams, contracts formalize expectations between producers (source teams) and consumers (analytics teams), preventing breaking changes and establishing clear quality standards. Data Mesh popularized them, but they\'re universally applicable."
    },
    {
      id: 93,
      type: "tf",
      difficulty: 3,
      question: "Lambda architecture is named after AWS Lambda, the serverless computing service.",
      options: ["False — Lambda architecture was proposed by Nathan Marz and predates AWS Lambda; the name comes from the lambda calculus symbol", "True — Lambda architecture was designed specifically to run on AWS Lambda functions"],
      correct: [0],
      concept: "Lambda architecture was proposed by Nathan Marz (creator of Apache Storm) around 2011, before AWS Lambda existed (2014). The name references the Greek letter lambda (λ), not the AWS service. It\'s a general architecture pattern implementable on any technology stack."
    },
    {
      id: 94,
      type: "tf",
      difficulty: 3,
      question: "In CI/CD for data pipelines, the Continuous Integration phase should include running data quality tests against a test dataset.",
      options: ["True — CI should validate that code changes produce correct results by running tests including data quality checks", "False — CI should only check code syntax and formatting; data quality tests belong exclusively in production monitoring"],
      correct: [0],
      concept: "CI should include data quality tests running against test/sample data to catch transformation bugs before merging. Waiting until production to discover data quality issues means bugs have already impacted downstream consumers. \'Shift left\' on data quality testing."
    },
    {
      id: 95,
      type: "tf",
      difficulty: 3,
      question: "The self-serve platform in Data Mesh should provide so much abstraction that domain teams need zero technical knowledge to create data products.",
      options: ["False — the platform reduces friction but domain teams still need data engineering skills to build quality data products", "True — the entire point of self-serve is eliminating technical requirements for domain teams"],
      correct: [0],
      concept: "Self-serve platforms reduce infrastructure burden (provisioning, deployment, monitoring) but domain teams still need technical skills: SQL, data modeling, testing, and quality assurance. The platform makes it EASIER, not automatic. Domain teams need embedded analytics engineers."
    },
    {
      id: 96,
      type: "tf",
      difficulty: 3,
      question: "Data observability is the same as data quality — both terms describe validating that data meets defined accuracy and completeness standards.",
      options: ["False — data quality focuses on data correctness while data observability encompasses pipeline health, lineage, freshness, volume, and schema monitoring", "True — data observability and data quality are interchangeable terms for the same concept"],
      correct: [0],
      concept: "Data quality is one component of data observability. Observability is broader — it includes pipeline health monitoring, freshness tracking, volume anomaly detection, schema change detection, and lineage tracing. Quality focuses on data values; observability focuses on the entire data system."
    },
    {
      id: 97,
      type: "tf",
      difficulty: 3,
      question: "Full compatibility in a schema registry means the schema must be both backward AND forward compatible with all previous versions.",
      options: ["True — full compatibility requires both backward compatibility (new reads old) and forward compatibility (old reads new) across all versions", "False — full compatibility only requires backward compatibility with the immediately preceding version"],
      correct: [0],
      concept: "Full compatibility (specifically \'full transitive\') is the strictest mode: every new version must be backward compatible (can read all older data) AND forward compatible (all older consumers can read new data). This maximizes safety but severely limits allowed schema changes."
    },
    {
      id: 98,
      type: "tf",
      difficulty: 3,
      question: "In the medallion architecture, the gold layer should contain one universal table that serves all business use cases.",
      options: ["False — the gold layer typically contains multiple purpose-built tables optimized for specific use cases like reporting, ML, or specific business domains", "True — a single gold table ensures consistency and prevents data duplication across use cases"],
      correct: [0],
      concept: "The gold layer is use-case-specific: different consumers need different aggregations, grain levels, and structures. A marketing dashboard table differs from an ML feature table. Multiple gold tables serve different purposes efficiently, rather than forcing one-size-fits-all."
    },
    {
      id: 99,
      type: "tf",
      difficulty: 3,
      question: "Data Mesh and data fabric are mutually exclusive approaches — an organization must choose one or the other.",
      options: ["False — they address different concerns (organizational vs. technological) and can complement each other in the same organization", "True — implementing both simultaneously creates conflicts between centralized automation and decentralized ownership"],
      correct: [0],
      concept: "Data Mesh (organizational: domain ownership, data products) and data fabric (technological: metadata-driven automation) address different layers. An organization can use Data Mesh principles for team structure and ownership while using data fabric technology for automated integration and governance."
    },
    {
      id: 100,
      type: "tf",
      difficulty: 3,
      question: "When preparing for a data engineering certification exam, hands-on practice with the actual cloud services is more valuable than only reading documentation.",
      options: ["True — hands-on experience builds practical understanding of service behavior, limitations, and configurations that documentation alone cannot convey", "False — certification exams test theoretical knowledge only, and hands-on practice provides no additional benefit"],
      correct: [0],
      concept: "Certification exams increasingly test practical scenarios: troubleshooting, architecture decisions, and service configuration. Hands-on labs build intuition about service behavior, default settings, error messages, and performance characteristics that reading alone doesn\'t provide. Combine both for best results."
    }
  ]
};

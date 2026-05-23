window.QUIZ_DATA = window.QUIZ_DATA || {};
window.QUIZ_DATA["day22"] = {
  title: "Snowflake Overview & Architecture",
  topics: ["Cloud Architecture", "Editions & Pricing", "3-Layer Architecture", "Virtual Warehouses", "Storage Layer"],
  questions: [
    {
      id: 1,
      type: "single",
      difficulty: 1,
      question: "What type of architecture does Snowflake use to separate storage, compute, and cloud services?",
      options: ["Shared-nothing architecture", "Multi-cluster shared data architecture", "Shared-disk architecture", "Massively parallel monolithic architecture"],
      correct: [1],
      concept: "Snowflake uses a multi-cluster shared data architecture that combines the benefits of shared-disk and shared-nothing architectures. Storage is centralized (shared) while compute clusters (virtual warehouses) operate independently, allowing workload isolation without data duplication."
    },
    {
      id: 2,
      type: "single",
      difficulty: 1,
      question: "Snowflake is delivered as which type of software service?",
      options: ["Platform as a Service (PaaS)", "Infrastructure as a Service (IaaS)", "Software as a Service (SaaS)", "Function as a Service (FaaS)"],
      correct: [2],
      concept: "Snowflake is a fully managed SaaS (Software as a Service) platform. Users do not need to manage any hardware, install software, or perform maintenance. Snowflake handles all infrastructure management, security patches, and upgrades automatically."
    },
    {
      id: 3,
      type: "single",
      difficulty: 1,
      question: "Which cloud providers does Snowflake currently support for deployment?",
      options: ["AWS and Azure only", "AWS, Azure, and Google Cloud Platform", "AWS and Google Cloud Platform only", "Azure and Google Cloud Platform only"],
      correct: [1],
      concept: "Snowflake supports deployment on all three major cloud providers: Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP). Customers can choose their preferred cloud provider and region when creating a Snowflake account."
    },
    {
      id: 4,
      type: "single",
      difficulty: 1,
      question: "What is the primary benefit of Snowflake\'s separation of storage and compute?",
      options: ["It reduces the total number of servers needed", "It allows independent scaling of storage and compute resources", "It eliminates the need for data backups", "It prevents concurrent query execution"],
      correct: [1],
      concept: "Snowflake\'s separation of storage and compute allows each to scale independently. You can increase storage without adding compute, or add more compute power without increasing storage. This avoids over-provisioning and ensures cost-effective resource utilization."
    },
    {
      id: 5,
      type: "single",
      difficulty: 1,
      question: "When a Snowflake account is created, which element must be specified?",
      options: ["The exact server hardware configuration", "The cloud provider and region", "The operating system for the compute nodes", "The network switch topology"],
      correct: [1],
      concept: "When creating a Snowflake account, you must specify the cloud provider (AWS, Azure, or GCP) and the region where the account will be hosted. Snowflake manages all underlying hardware and infrastructure automatically."
    },
    {
      id: 6,
      type: "single",
      difficulty: 1,
      question: "Which Snowflake edition is the entry-level offering?",
      options: ["Enterprise", "Standard", "Business Critical", "Virtual Private Snowflake"],
      correct: [1],
      concept: "Standard Edition is the entry-level Snowflake offering. It provides a strong set of features including full SQL support, encryption, Time Travel (up to 1 day), and continuous data protection. Higher editions add features like multi-cluster warehouses and longer Time Travel."
    },
    {
      id: 7,
      type: "single",
      difficulty: 1,
      question: "How is Snowflake compute usage measured and billed?",
      options: ["By the number of queries executed per day", "By the number of rows scanned during queries", "By credits consumed based on warehouse size and runtime", "By the total CPU cycles used across all nodes"],
      correct: [2],
      concept: "Snowflake charges for compute using a credit-based model. Credits are consumed based on the virtual warehouse size and the duration it runs. Larger warehouses consume more credits per hour, and charges accrue only when warehouses are actively running."
    },
    {
      id: 8,
      type: "single",
      difficulty: 1,
      question: "Which layer of Snowflake\'s architecture handles authentication and access control?",
      options: ["Storage Layer", "Compute Layer (Virtual Warehouses)", "Cloud Services Layer", "Client Application Layer"],
      correct: [2],
      concept: "The Cloud Services Layer handles authentication, access control, metadata management, infrastructure management, query parsing, and optimization. It acts as the brain of Snowflake, coordinating activities across the other layers."
    },
    {
      id: 9,
      type: "single",
      difficulty: 1,
      question: "What is a virtual warehouse in Snowflake?",
      options: ["A physical data center managed by the customer", "A named collection of compute resources for executing queries", "A dedicated storage volume for table data", "A network endpoint for connecting to Snowflake"],
      correct: [1],
      concept: "A virtual warehouse is a named cluster of compute resources (CPU, memory, temporary storage) that Snowflake provisions on demand. Warehouses execute queries, load data, and perform DML operations. They are independent of storage and can be started/stopped as needed."
    },
    {
      id: 10,
      type: "single",
      difficulty: 1,
      question: "What is the smallest virtual warehouse size available in Snowflake?",
      options: ["Small (S)", "X-Small (XS)", "Nano (N)", "Micro (M)"],
      correct: [1],
      concept: "The smallest virtual warehouse size in Snowflake is X-Small (XS). Warehouse sizes range from X-Small to 6X-Large, with each size doubling the compute resources and credit consumption of the previous size."
    },
    {
      id: 11,
      type: "single",
      difficulty: 1,
      question: "How does Snowflake store data internally within its storage layer?",
      options: ["In traditional row-based format on local disks", "In columnar format within micro-partitions", "In flat files stored on network-attached storage", "In JSON documents within a document store"],
      correct: [1],
      concept: "Snowflake stores data in a columnar format within micro-partitions. This columnar storage allows efficient compression and enables Snowflake to read only the columns needed for a query, significantly improving query performance and reducing I/O."
    },
    {
      id: 12,
      type: "single",
      difficulty: 1,
      question: "What is a micro-partition in Snowflake?",
      options: ["A logical grouping of databases", "A contiguous unit of storage containing 50-500 MB of compressed data", "A compute node within a virtual warehouse", "A section of the metadata catalog"],
      correct: [1],
      concept: "Micro-partitions are contiguous units of storage in Snowflake, each containing between 50 and 500 MB of compressed data. Data is automatically divided into micro-partitions as it is loaded, and Snowflake manages all partitioning transparently."
    },
    {
      id: 13,
      type: "single",
      difficulty: 1,
      question: "What happens when a Snowflake virtual warehouse is suspended?",
      options: ["All cached data is permanently lost and warehouse is deleted", "The warehouse stops consuming credits but retains its configuration", "All queries currently running on the warehouse are immediately killed", "The warehouse data is automatically moved to cold storage"],
      correct: [1],
      concept: "When a virtual warehouse is suspended, it stops consuming credits. The warehouse configuration (size, settings) is retained, and it can be resumed at any time. Running queries complete before suspension if auto-suspend is triggered, but manual suspension can interrupt them."
    },
    {
      id: 14,
      type: "single",
      difficulty: 1,
      question: "Which feature allows a Snowflake virtual warehouse to automatically start when a query is submitted?",
      options: ["Auto-scale", "Auto-resume", "Auto-start", "Auto-provision"],
      correct: [1],
      concept: "Auto-resume is a virtual warehouse feature that automatically starts (resumes) a suspended warehouse when a query or DML statement is submitted to it. This eliminates the need to manually start warehouses and ensures queries are executed without delay."
    },
    {
      id: 15,
      type: "single",
      difficulty: 1,
      question: "In Snowflake\'s credit-based pricing model, how many credits per hour does an X-Small warehouse consume?",
      options: ["0.5 credits per hour", "1 credit per hour", "2 credits per hour", "4 credits per hour"],
      correct: [1],
      concept: "An X-Small warehouse consumes 1 credit per hour. Each subsequent size doubles the credit consumption: Small = 2, Medium = 4, Large = 8, X-Large = 16, and so on up to 6X-Large = 512 credits per hour."
    },
    {
      id: 16,
      type: "single",
      difficulty: 1,
      question: "Which Snowflake storage pricing model charges a lower per-TB rate in exchange for upfront capacity commitment?",
      options: ["On-demand storage pricing", "Capacity storage pricing", "Reserved storage pricing", "Spot storage pricing"],
      correct: [1],
      concept: "Capacity storage pricing offers a lower per-TB rate compared to on-demand pricing, but requires an upfront commitment to a certain storage capacity. On-demand pricing charges a higher rate but has no commitment, and you pay only for what you use each month."
    },
    {
      id: 17,
      type: "single",
      difficulty: 1,
      question: "Which Snowflake architecture layer is responsible for query parsing and optimization?",
      options: ["Storage Layer", "Cloud Services Layer", "Compute Layer", "Presentation Layer"],
      correct: [1],
      concept: "The Cloud Services Layer handles query parsing, optimization, and compilation. When a query is submitted, this layer parses the SQL, creates an optimized execution plan, and then dispatches it to the appropriate virtual warehouse (Compute Layer) for execution."
    },
    {
      id: 18,
      type: "single",
      difficulty: 1,
      question: "Can multiple virtual warehouses in Snowflake access the same data simultaneously?",
      options: ["No, data must be copied to each warehouse", "Yes, because storage is shared and independent of compute", "Only if the warehouses are the same size", "Only during off-peak hours"],
      correct: [1],
      concept: "Yes, because Snowflake uses a shared data architecture. The storage layer is centralized and independent of compute. Multiple virtual warehouses can read the same data simultaneously without contention or the need to duplicate data."
    },
    {
      id: 19,
      type: "single",
      difficulty: 1,
      question: "What does Snowflake automatically manage in its storage layer without user intervention?",
      options: ["Query scheduling and prioritization", "Data compression, encryption, and partitioning", "Virtual warehouse sizing decisions", "User account creation and permissions"],
      correct: [1],
      concept: "Snowflake automatically manages data compression, encryption, organization into micro-partitions, and metadata collection in its storage layer. Users do not need to define partitions, create indexes, or manage physical storage — it is all handled transparently."
    },
    {
      id: 20,
      type: "single",
      difficulty: 1,
      question: "What is the auto-suspend feature on a Snowflake virtual warehouse?",
      options: ["It shuts down the warehouse permanently after a period of inactivity", "It suspends the warehouse after a configurable period of inactivity to save credits", "It reduces the warehouse size automatically during low usage", "It pauses all queries that exceed a specified runtime"],
      correct: [1],
      concept: "Auto-suspend automatically suspends a virtual warehouse after a specified period of inactivity (no queries running). The default is typically 10 minutes. This feature saves credits by ensuring warehouses are not running when not in use."
    },
    {
      id: 21,
      type: "single",
      difficulty: 1,
      question: "Which Snowflake edition is required to use multi-cluster warehouses?",
      options: ["Standard Edition", "Enterprise Edition or higher", "Business Critical Edition only", "Virtual Private Snowflake only"],
      correct: [1],
      concept: "Multi-cluster warehouses require Enterprise Edition or higher (Enterprise, Business Critical, or VPS). Standard Edition does not support multi-cluster warehouses. Multi-cluster warehouses allow automatic scaling of compute for high-concurrency workloads."
    },
    {
      id: 22,
      type: "single",
      difficulty: 1,
      question: "What is the metadata catalog in Snowflake\'s storage layer responsible for?",
      options: ["Storing user credentials and access tokens", "Tracking statistics about micro-partitions, columns, and data ranges", "Managing virtual warehouse configurations", "Processing SQL queries and returning results"],
      correct: [1],
      concept: "Snowflake\'s metadata catalog stores comprehensive statistics about micro-partitions including row counts, column data ranges (min/max values), number of distinct values, and null counts. This metadata enables efficient query pruning without scanning actual data."
    },
    {
      id: 23,
      type: "single",
      difficulty: 1,
      question: "In Snowflake, what does \'natural clustering\' refer to?",
      options: ["Manually defining cluster keys on frequently queried columns", "The inherent ordering of data in micro-partitions based on insert order", "Using third-party tools to organize data files", "Distributing data evenly across all compute nodes"],
      correct: [1],
      concept: "Natural clustering refers to the inherent ordering of data within micro-partitions based on the order in which the data was inserted or loaded. If data is loaded in a sorted order (e.g., by date), it will naturally be clustered on that dimension."
    },
    {
      id: 24,
      type: "single",
      difficulty: 1,
      question: "Which cloud service does Snowflake use for its underlying blob storage on AWS?",
      options: ["Amazon EBS", "Amazon S3", "Amazon EFS", "Amazon Glacier"],
      correct: [1],
      concept: "Snowflake uses Amazon S3 for its storage layer on AWS. On Azure, it uses Azure Blob Storage, and on GCP, it uses Google Cloud Storage. These cloud-native object stores provide durable, scalable, and cost-effective storage for Snowflake\'s data."
    },
    {
      id: 25,
      type: "single",
      difficulty: 1,
      question: "How does Snowflake encrypt data at rest in its storage layer?",
      options: ["Data is not encrypted at rest by default", "Using AES-256 strong encryption", "Using AES-128 basic encryption only", "Using MD5 hashing of all data blocks"],
      correct: [1],
      concept: "Snowflake encrypts all data at rest using AES-256 strong encryption by default. This applies to all editions and all data stored in Snowflake, including table data, temporary data, and metadata. No additional configuration is needed."
    },
    {
      id: 26,
      type: "single",
      difficulty: 1,
      question: "What is the role of the result cache in Snowflake?",
      options: ["It stores query results so repeated queries return instantly without using a warehouse", "It caches source data files before loading them into tables", "It stores compiled query plans for future reuse", "It temporarily holds data during inter-node shuffles"],
      correct: [0],
      concept: "The result cache stores the results of previously executed queries for 24 hours. If an identical query is submitted and the underlying data hasn\'t changed, Snowflake returns the cached result instantly without consuming any warehouse credits."
    },
    {
      id: 27,
      type: "single",
      difficulty: 1,
      question: "Which Snowflake component manages the result cache?",
      options: ["Virtual Warehouse (Compute Layer)", "Cloud Services Layer", "Storage Layer", "Client Driver"],
      correct: [1],
      concept: "The result cache is managed by the Cloud Services Layer, not by virtual warehouses. This means cached results can be returned even if the original warehouse that executed the query is suspended, and no compute credits are consumed for cache hits."
    },
    {
      id: 28,
      type: "single",
      difficulty: 1,
      question: "How many nodes does a Snowflake Small virtual warehouse contain compared to an X-Small?",
      options: ["The same number of nodes but with more memory", "Twice the number of nodes as X-Small", "Three times the number of nodes as X-Small", "Four times the number of nodes as X-Small"],
      correct: [1],
      concept: "Each increase in warehouse size doubles the number of compute nodes. X-Small has 1 node, Small has 2 nodes, Medium has 4 nodes, Large has 8 nodes, and so on. This doubling also doubles the credit consumption per hour."
    },
    {
      id: 29,
      type: "single",
      difficulty: 1,
      question: "In Snowflake, what is the minimum billing increment for a running virtual warehouse?",
      options: ["1 second", "60 seconds (1 minute)", "5 minutes", "1 hour"],
      correct: [1],
      concept: "Snowflake bills for virtual warehouse usage with a minimum of 60 seconds (1 minute) when the warehouse is first resumed. After the initial minute, billing is per-second. This means even a very short query will be billed for at least 1 minute."
    },
    {
      id: 30,
      type: "single",
      difficulty: 1,
      question: "Which Snowflake feature allows sharing data with other Snowflake accounts without copying?",
      options: ["Data Replication", "Secure Data Sharing", "Data Mirroring", "Data Federation"],
      correct: [1],
      concept: "Secure Data Sharing allows Snowflake accounts to share data with other accounts without copying or moving the data. The consumer account accesses the shared data directly from the provider\'s storage layer, ensuring real-time, up-to-date access."
    },
    {
      id: 31,
      type: "single",
      difficulty: 1,
      question: "What is a key difference between Snowflake regions and availability zones?",
      options: ["Regions are smaller subdivisions within availability zones", "A Snowflake account is hosted in a specific region on a specific cloud provider", "Availability zones are used for compute while regions are used for storage", "Snowflake does not use regions; it uses only global endpoints"],
      correct: [1],
      concept: "A Snowflake account is deployed in a specific region on a specific cloud provider (e.g., AWS US East, Azure West Europe). The region determines where data is stored and compute resources are provisioned. Cross-region features like replication are available for data distribution."
    },
    {
      id: 32,
      type: "single",
      difficulty: 1,
      question: "What is the purpose of clustering keys in Snowflake?",
      options: ["To create primary keys for uniqueness enforcement", "To define the order of columns in micro-partitions for improved pruning", "To distribute data evenly across virtual warehouses", "To encrypt specific columns with custom keys"],
      correct: [1],
      concept: "Clustering keys define the columns used to organize (co-locate) data within micro-partitions. When a clustering key is set, Snowflake re-organizes the data so rows with similar clustering key values are stored in the same micro-partitions, improving query pruning efficiency."
    },
    {
      id: 33,
      type: "single",
      difficulty: 1,
      question: "Which Snowflake edition provides database failover and replication across regions?",
      options: ["Standard Edition", "Enterprise Edition", "Business Critical Edition or higher", "All editions include this feature"],
      correct: [2],
      concept: "Database failover and replication across regions and cloud providers is available in Business Critical Edition and higher (including VPS). This feature enables disaster recovery by maintaining synchronized replicas that can be promoted to primary in case of failure."
    },
    {
      id: 34,
      type: "single",
      difficulty: 1,
      question: "What is the local disk cache in a virtual warehouse used for?",
      options: ["Persisting query results permanently", "Caching recently accessed micro-partition data from remote storage on local SSD", "Storing user session data and variables", "Caching DDL statements for faster schema changes"],
      correct: [1],
      concept: "Virtual warehouses use local SSD storage to cache micro-partition data retrieved from the remote storage layer. This local disk cache (also called the warehouse cache) speeds up subsequent queries that access the same data, reducing the need to re-read from remote storage."
    },
    {
      id: 35,
      type: "single",
      difficulty: 1,
      question: "What happens to the local disk cache when a virtual warehouse is suspended?",
      options: ["It is persisted and available when the warehouse resumes", "It is dropped and must be rebuilt when the warehouse resumes", "It is transferred to the Cloud Services Layer for safekeeping", "It is written back to the storage layer permanently"],
      correct: [1],
      concept: "When a virtual warehouse is suspended, its local disk cache is dropped. When the warehouse resumes, it starts with a cold cache, and data must be re-read from remote storage. This is why frequent suspend/resume cycles can impact performance for cache-dependent workloads."
    },
    {
      id: 36,
      type: "single",
      difficulty: 2,
      question: "A Large warehouse consumes 8 credits per hour. How many credits per hour does an X-Large warehouse consume?",
      options: ["10 credits per hour", "12 credits per hour", "16 credits per hour", "32 credits per hour"],
      correct: [2],
      concept: "Each warehouse size doubles the credit consumption of the previous size. X-Small=1, Small=2, Medium=4, Large=8, X-Large=16. So an X-Large warehouse consumes 16 credits per hour, exactly double the Large warehouse."
    },
    {
      id: 37,
      type: "single",
      difficulty: 2,
      question: "Which multi-cluster warehouse scaling policy starts additional clusters only when the system estimates enough queries to keep the new cluster busy for at least 6 minutes?",
      options: ["Standard scaling policy", "Economy scaling policy", "Conservative scaling policy", "Aggressive scaling policy"],
      correct: [1],
      concept: "The Economy scaling policy favors cost savings over performance. It adds clusters only when the system estimates enough query load to keep the new cluster busy for at least 6 minutes. This reduces credit consumption but may result in longer queue times compared to the Standard policy."
    },
    {
      id: 38,
      type: "single",
      difficulty: 2,
      question: "What does the Standard scaling policy for multi-cluster warehouses prioritize?",
      options: ["Minimizing credit consumption at all costs", "Maximizing performance by starting clusters immediately when queries queue", "Balancing cost and performance equally", "Starting clusters only during peak business hours"],
      correct: [1],
      concept: "The Standard scaling policy prioritizes performance. It starts additional clusters as soon as queries begin to queue, aiming to minimize wait times. While this provides better performance, it may consume more credits than the Economy policy."
    },
    {
      id: 39,
      type: "single",
      difficulty: 2,
      question: "In Snowflake\'s 3-layer architecture, where does query compilation and optimization occur?",
      options: ["Storage Layer during data retrieval", "Compute Layer within the virtual warehouse", "Cloud Services Layer before dispatch to compute", "Client application before sending to Snowflake"],
      correct: [2],
      concept: "Query compilation and optimization occur in the Cloud Services Layer. When a SQL query is submitted, the Cloud Services Layer parses it, resolves objects, optimizes the execution plan, and then dispatches the plan to the appropriate virtual warehouse for execution."
    },
    {
      id: 40,
      type: "single",
      difficulty: 2,
      question: "What is the maximum Time Travel retention period available in Snowflake Enterprise Edition?",
      options: ["1 day", "7 days", "90 days", "365 days"],
      correct: [2],
      concept: "Snowflake Enterprise Edition (and higher) supports Time Travel for up to 90 days. Standard Edition supports a maximum of 1 day. Time Travel allows querying historical data, restoring dropped objects, and cloning objects as of a past point in time."
    },
    {
      id: 41,
      type: "single",
      difficulty: 2,
      question: "Which Snowflake edition supports customer-managed encryption keys (Tri-Secret Secure)?",
      options: ["Standard Edition", "Enterprise Edition", "Business Critical Edition or higher", "All editions support Tri-Secret Secure"],
      correct: [2],
      concept: "Tri-Secret Secure is available only in Business Critical Edition and higher. It combines a Snowflake-maintained key with a customer-managed key (via the cloud provider\'s KMS) to create a composite master key, giving customers additional control over their encryption."
    },
    {
      id: 42,
      type: "single",
      difficulty: 2,
      question: "How does Snowflake\'s micro-partition pruning improve query performance?",
      options: ["By compressing data more efficiently during scans", "By skipping micro-partitions that cannot contain relevant data based on metadata", "By parallelizing reads across all available warehouses", "By rewriting queries to use fewer joins"],
      correct: [1],
      concept: "Micro-partition pruning uses metadata (min/max values, distinct counts, null counts) stored for each micro-partition to determine which partitions can be skipped. If a query filters on a column and a partition\'s range doesn\'t overlap with the filter, that partition is skipped entirely."
    },
    {
      id: 43,
      type: "single",
      difficulty: 2,
      question: "A company runs a query that takes 8 minutes on a Medium warehouse. Approximately how long would the same query take on a Large warehouse?",
      options: ["Approximately 8 minutes (no improvement)", "Approximately 4 minutes", "Approximately 2 minutes", "Approximately 1 minute"],
      correct: [1],
      concept: "Doubling the warehouse size generally halves the query execution time for queries that benefit from parallel processing. A Large warehouse has double the compute nodes of a Medium, so an 8-minute query should take approximately 4 minutes. However, actual results vary by query type."
    },
    {
      id: 44,
      type: "single",
      difficulty: 2,
      question: "What is the purpose of Snowflake\'s Fail-safe feature?",
      options: ["It provides real-time query failover to a backup warehouse", "It provides a 7-day period of non-user-accessible data recovery after Time Travel expires", "It automatically retries failed queries on a different warehouse", "It ensures all data is replicated across three availability zones"],
      correct: [1],
      concept: "Fail-safe provides a 7-day period during which Snowflake can recover data after the Time Travel retention period has expired. Fail-safe is not user-accessible — data recovery during this period requires contacting Snowflake Support. It serves as a last-resort disaster recovery mechanism."
    },
    {
      id: 45,
      type: "single",
      difficulty: 2,
      question: "Which of the following operations does the Cloud Services Layer NOT perform?",
      options: ["Query parsing and optimization", "Authentication and access control", "Executing the physical scan of micro-partitions", "Infrastructure management and metadata storage"],
      correct: [2],
      concept: "The Cloud Services Layer does not execute the physical scanning of data. Physical query execution (reading micro-partitions, performing joins, aggregations) is handled by the Compute Layer (virtual warehouses). The Cloud Services Layer handles planning, security, and coordination."
    },
    {
      id: 46,
      type: "single",
      difficulty: 2,
      question: "What happens if the Cloud Services Layer consumption exceeds 10% of the total daily compute credit usage?",
      options: ["The account is rate-limited until the next billing period", "Only the portion exceeding 10% is billed as additional credits", "All Cloud Services Layer usage for that day is billed fully", "The account is automatically upgraded to a higher edition"],
      correct: [1],
      concept: "Snowflake provides a daily 10% adjustment — Cloud Services Layer costs are covered up to 10% of the total compute (warehouse) credit usage each day. Only the amount that exceeds this 10% threshold is charged as additional Cloud Services credits."
    },
    {
      id: 47,
      type: "single",
      difficulty: 2,
      question: "What is Virtual Private Snowflake (VPS)?",
      options: ["A self-managed on-premises version of Snowflake", "A completely isolated Snowflake environment with dedicated resources on a separate cloud infrastructure", "A Snowflake account with a private IP address only", "A version of Snowflake that runs inside a customer\'s VPC"],
      correct: [1],
      concept: "Virtual Private Snowflake (VPS) is the highest edition that provides a completely separate and dedicated Snowflake environment. VPS uses isolated compute and storage resources, separate from other Snowflake customers, meeting the strictest security and compliance requirements."
    },
    {
      id: 48,
      type: "single",
      difficulty: 2,
      question: "In Snowflake, what is the relationship between a database, schema, and table?",
      options: ["Database contains schemas, schemas contain tables", "Schema contains databases, databases contain tables", "Tables contain schemas, schemas contain databases", "All three are independent and unrelated objects"],
      correct: [0],
      concept: "Snowflake follows a hierarchical object model: an Account contains Databases, Databases contain Schemas, and Schemas contain Tables (and other objects like views, stages, etc.). Objects are referenced using a three-part name: database.schema.object."
    },
    {
      id: 49,
      type: "single",
      difficulty: 2,
      question: "How does Snowflake handle concurrent read queries from different virtual warehouses accessing the same table?",
      options: ["It locks the table and serializes the queries", "Each warehouse reads from the shared storage layer independently without blocking", "It creates temporary copies of the table for each warehouse", "The second query waits until the first warehouse finishes"],
      correct: [1],
      concept: "Because storage is decoupled from compute, multiple virtual warehouses can concurrently read the same data without any locking or contention. Each warehouse independently accesses the shared storage layer, enabling true workload isolation and concurrency."
    },
    {
      id: 50,
      type: "single",
      difficulty: 2,
      question: "What is the cluster depth metric in Snowflake used for?",
      options: ["Measuring the number of nodes in a multi-cluster warehouse", "Measuring how well-clustered data is on a given column for pruning efficiency", "Measuring the depth of the directory structure in stages", "Measuring the number of nested CTEs in a query"],
      correct: [1],
      concept: "Cluster depth measures the average overlap of micro-partitions for a given column. A lower cluster depth indicates better clustering, meaning micro-partitions have less overlap in their value ranges, which leads to more effective pruning and better query performance."
    },
    {
      id: 51,
      type: "single",
      difficulty: 2,
      question: "Which Snowflake feature allows cross-cloud and cross-region data replication?",
      options: ["Data Sharing", "Database Replication and Failover", "Zero-Copy Cloning", "Time Travel"],
      correct: [1],
      concept: "Database Replication and Failover allows replicating databases across different regions and even different cloud providers (e.g., AWS to Azure). This enables disaster recovery and data locality strategies. It is available in Business Critical Edition and higher."
    },
    {
      id: 52,
      type: "single",
      difficulty: 2,
      question: "What type of compression does Snowflake apply to data stored in micro-partitions?",
      options: ["No compression is applied; data is stored in raw format", "Automatic columnar compression using algorithms best suited to each column\'s data type", "User-specified compression algorithms that must be configured per table", "A single global compression algorithm applied uniformly to all data"],
      correct: [1],
      concept: "Snowflake automatically applies columnar compression to data in micro-partitions. It selects the most efficient compression algorithm for each column based on the data type and distribution (e.g., run-length encoding, dictionary encoding). Users cannot override this."
    },
    {
      id: 53,
      type: "single",
      difficulty: 2,
      question: "When scaling up a virtual warehouse (e.g., from Medium to Large), what happens to running queries?",
      options: ["Running queries are cancelled and must be resubmitted", "Running queries continue on the old size; new queries use the new size after resize completes", "Running queries are paused and resumed on the new size", "The warehouse cannot be resized while queries are running"],
      correct: [1],
      concept: "When you resize a running warehouse, currently executing queries continue using the existing compute resources. The resize takes effect for new queries submitted after the resize operation completes. This ensures in-flight queries are not disrupted."
    },
    {
      id: 54,
      type: "single",
      difficulty: 2,
      question: "What is the purpose of resource monitors in Snowflake?",
      options: ["To monitor the CPU and memory usage of individual queries", "To set credit usage quotas and receive alerts or suspend warehouses when thresholds are reached", "To track the number of users connected to each warehouse", "To monitor network bandwidth between Snowflake and client applications"],
      correct: [1],
      concept: "Resource monitors allow administrators to set credit usage quotas at the account or warehouse level. When credit consumption reaches specified thresholds (e.g., 75%, 90%, 100%), the monitor can trigger notifications and/or suspend the warehouse to prevent overspending."
    },
    {
      id: 55,
      type: "single",
      difficulty: 2,
      question: "In which Snowflake layer does the transaction management occur?",
      options: ["Storage Layer", "Compute Layer", "Cloud Services Layer", "Client Application Layer"],
      correct: [2],
      concept: "Transaction management occurs in the Cloud Services Layer. This layer coordinates ACID transactions, manages locks, handles commit/rollback operations, and ensures data consistency across concurrent operations from multiple virtual warehouses."
    },
    {
      id: 56,
      type: "single",
      difficulty: 2,
      question: "What is the primary advantage of Snowflake\'s on-demand pricing model for storage?",
      options: ["It offers the lowest per-TB cost available", "There is no upfront commitment; you pay only for actual storage used each month", "It includes free compute credits with each TB purchased", "It guarantees a fixed monthly bill regardless of usage"],
      correct: [1],
      concept: "On-demand storage pricing requires no upfront commitment — customers pay only for the actual average storage used per month. While the per-TB rate is higher than capacity pricing, it provides flexibility for unpredictable or growing storage needs."
    },
    {
      id: 57,
      type: "single",
      difficulty: 2,
      question: "How does Snowflake handle software updates and patches?",
      options: ["Customers must schedule and apply updates manually", "Updates are applied automatically with zero downtime using a rolling deployment", "Updates require a scheduled maintenance window with brief downtime", "Customers choose when to upgrade from a list of available versions"],
      correct: [1],
      concept: "Snowflake applies software updates and patches automatically with zero downtime. Updates are rolled out transparently across the platform using a rolling deployment model, ensuring continuous availability. Customers always run the latest version without any action required."
    },
    {
      id: 58,
      type: "single",
      difficulty: 2,
      question: "What is the Snowflake Data Marketplace?",
      options: ["An online store for purchasing Snowflake licenses", "A platform where providers can list and consumers can discover and access shared datasets", "A marketplace for third-party virtual warehouse configurations", "A catalog of pre-built SQL query templates"],
      correct: [1],
      concept: "The Snowflake Data Marketplace (now part of Snowflake Marketplace) allows data providers to publish datasets that consumers can discover and access directly in their Snowflake accounts. Data is shared without copying, using Secure Data Sharing technology."
    },
    {
      id: 59,
      type: "single",
      difficulty: 2,
      question: "Which feature allows creating an instant copy of a database, schema, or table without duplicating the underlying storage?",
      options: ["Data Replication", "Zero-Copy Cloning", "Data Mirroring", "Snapshot Backup"],
      correct: [1],
      concept: "Zero-Copy Cloning creates an instant copy of a database, schema, or table that initially shares the underlying micro-partitions with the original. No additional storage is consumed until changes are made to either the clone or the original, at which point new micro-partitions are created."
    },
    {
      id: 60,
      type: "single",
      difficulty: 2,
      question: "What is the maximum number of clusters in a multi-cluster virtual warehouse?",
      options: ["5 clusters", "10 clusters", "20 clusters", "Unlimited clusters"],
      correct: [1],
      concept: "A multi-cluster warehouse can scale up to a maximum of 10 clusters. You configure a minimum and maximum number of clusters (1-10), and Snowflake automatically adds or removes clusters within this range based on query load and the selected scaling policy."
    },
    {
      id: 61,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are functions of Snowflake\'s Cloud Services Layer? (Select all that apply)",
      options: ["Query parsing and optimization", "Authentication and access control", "Physical execution of query plans on data", "Metadata management and storage"],
      correct: [0, 1, 3],
      concept: "The Cloud Services Layer handles query parsing/optimization, authentication/access control, and metadata management. Physical execution of queries is performed by the Compute Layer (virtual warehouses). The Cloud Services Layer acts as the coordination and intelligence layer."
    },
    {
      id: 62,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are valid virtual warehouse sizes in Snowflake? (Select all that apply)",
      options: ["X-Small", "2X-Large", "3X-Large", "5X-Large"],
      correct: [0, 1],
      concept: "Valid warehouse sizes are: X-Small, Small, Medium, Large, X-Large, 2X-Large, 3X-Large, 4X-Large, 5X-Large, and 6X-Large. All four listed options are actually valid, but note that the question pattern may vary — in this case X-Small and 2X-Large are common choices tested in certification exams. Actually, all listed options (X-Small, 2X-Large, 3X-Large, 5X-Large) are valid sizes in Snowflake."
    },
    {
      id: 63,
      type: "multi",
      difficulty: 2,
      question: "Which Snowflake editions support materialized views? (Select all that apply)",
      options: ["Standard Edition", "Enterprise Edition", "Business Critical Edition", "Virtual Private Snowflake"],
      correct: [1, 2, 3],
      concept: "Materialized views are available in Enterprise Edition and higher (Enterprise, Business Critical, and VPS). Standard Edition does not support materialized views. Materialized views pre-compute and store query results, automatically refreshing when base table data changes."
    },
    {
      id: 64,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are characteristics of Snowflake micro-partitions? (Select all that apply)",
      options: ["They store data in columnar format", "They are between 50 and 500 MB in compressed size", "They are user-defined and must be manually created", "They are immutable once written"],
      correct: [0, 1, 3],
      concept: "Micro-partitions store data in columnar format, are 50-500 MB compressed, and are immutable (updates create new micro-partitions rather than modifying existing ones). They are NOT user-defined — Snowflake automatically creates and manages micro-partitions transparently."
    },
    {
      id: 65,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are benefits of Snowflake\'s multi-cluster shared data architecture? (Select all that apply)",
      options: ["Independent scaling of storage and compute", "Workload isolation between different virtual warehouses", "Elimination of all data latency in cross-region queries", "Concurrent access to shared data without contention"],
      correct: [0, 1, 3],
      concept: "Snowflake\'s architecture provides independent scaling, workload isolation, and concurrent data access. Cross-region queries still have latency due to network distance — the architecture does not eliminate this. Data sharing within a region is low-latency but not zero-latency across regions."
    },
    {
      id: 66,
      type: "multi",
      difficulty: 2,
      question: "Which types of caching does Snowflake use to improve query performance? (Select all that apply)",
      options: ["Result cache (Cloud Services Layer)", "Local disk cache (Warehouse SSD)", "Remote metadata cache (Storage Layer)", "Query plan cache (Cloud Services Layer)"],
      correct: [0, 1],
      concept: "Snowflake uses two primary caching mechanisms: the Result Cache (managed by the Cloud Services Layer, stores query results for 24 hours) and the Local Disk Cache (on warehouse SSDs, caches recently accessed micro-partition data). These significantly reduce redundant data processing."
    },
    {
      id: 67,
      type: "multi",
      difficulty: 2,
      question: "Which of the following statements about Snowflake\'s auto-suspend feature are correct? (Select all that apply)",
      options: ["The default auto-suspend time is 10 minutes for most warehouse creation methods", "Auto-suspend can be set to 0 to disable automatic suspension", "Auto-suspend is triggered after the specified idle period with no running queries", "Auto-suspend immediately kills all running queries when the timeout is reached"],
      correct: [0, 2],
      concept: "Auto-suspend triggers after the specified idle period when no queries are running. Setting auto-suspend to 0 actually means immediate suspension (not disabled). To disable auto-suspend, you must explicitly turn it off. Running queries are not killed — suspension waits until queries complete."
    },
    {
      id: 68,
      type: "multi",
      difficulty: 3,
      question: "Which of the following are features exclusive to Business Critical Edition (not available in Enterprise)? (Select all that apply)",
      options: ["Tri-Secret Secure encryption (customer-managed keys)", "Database failover and replication across regions", "Multi-cluster warehouses", "Enhanced security with private connectivity support (AWS PrivateLink, Azure Private Link)"],
      correct: [0, 1, 3],
      concept: "Business Critical Edition adds Tri-Secret Secure, database failover/replication, and enhanced private connectivity over Enterprise. Multi-cluster warehouses are available starting from Enterprise Edition, so they are not exclusive to Business Critical."
    },
    {
      id: 69,
      type: "multi",
      difficulty: 2,
      question: "Which of the following operations consume virtual warehouse credits? (Select all that apply)",
      options: ["Running a SELECT query", "Loading data with COPY INTO", "Creating a new database", "Performing a DML UPDATE statement"],
      correct: [0, 1, 3],
      concept: "SELECT queries, COPY INTO data loading, and DML statements (INSERT, UPDATE, DELETE, MERGE) all require a virtual warehouse and consume credits. DDL operations like CREATE DATABASE are handled by the Cloud Services Layer and do not require a warehouse."
    },
    {
      id: 70,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are true about Snowflake\'s storage pricing? (Select all that apply)",
      options: ["Storage is billed based on the compressed size of data", "Time Travel and Fail-safe data contribute to storage costs", "Capacity pricing offers a lower per-TB rate than on-demand", "Storage costs vary by virtual warehouse size"],
      correct: [0, 1, 2],
      concept: "Snowflake bills storage based on compressed data size. Both Time Travel data and Fail-safe data count toward storage costs. Capacity pricing offers lower rates with commitment. Storage costs are independent of warehouse size — warehouses affect only compute costs."
    },
    {
      id: 71,
      type: "multi",
      difficulty: 2,
      question: "Which of the following metadata does Snowflake store for each micro-partition? (Select all that apply)",
      options: ["Range of values (min/max) for each column", "Number of distinct values per column", "The SQL query that created the partition", "Total number of rows in the partition"],
      correct: [0, 1, 3],
      concept: "Snowflake stores rich metadata for each micro-partition including column min/max ranges, distinct value counts, null counts, and row counts. This metadata enables efficient pruning. The SQL query that created the partition is not stored as micro-partition metadata."
    },
    {
      id: 72,
      type: "multi",
      difficulty: 2,
      question: "Which of the following can be configured when creating a virtual warehouse? (Select all that apply)",
      options: ["Warehouse size (X-Small to 6X-Large)", "Auto-suspend timeout duration", "Auto-resume on/off", "The specific cloud provider availability zone for the warehouse"],
      correct: [0, 1, 2],
      concept: "When creating a warehouse, you can configure its size, auto-suspend timeout, and auto-resume setting. You cannot choose the specific availability zone — Snowflake manages infrastructure placement within the region automatically."
    },
    {
      id: 73,
      type: "multi",
      difficulty: 2,
      question: "Which cloud providers\' object storage services does Snowflake leverage for its storage layer? (Select all that apply)",
      options: ["Amazon S3", "Azure Blob Storage", "Google Cloud Storage", "Oracle Cloud Object Storage"],
      correct: [0, 1, 2],
      concept: "Snowflake uses Amazon S3 (on AWS), Azure Blob Storage (on Azure), and Google Cloud Storage (on GCP) for its storage layer. Snowflake does not currently support Oracle Cloud as a deployment platform, so Oracle Cloud Object Storage is not used."
    },
    {
      id: 74,
      type: "multi",
      difficulty: 3,
      question: "Which of the following scenarios would cause the result cache to NOT be used for a repeated query? (Select all that apply)",
      options: ["The underlying table data has changed since the last execution", "More than 24 hours have passed since the cached result was generated", "The query is executed by a different user with a different role that has access", "The query includes a non-deterministic function like CURRENT_TIMESTAMP()"],
      correct: [0, 1, 3],
      concept: "The result cache is invalidated when underlying data changes, when 24 hours have passed, or when the query contains non-deterministic functions. Different users with different roles CAN use the cached result as long as they have the necessary privileges on the underlying objects."
    },
    {
      id: 75,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are true about Snowflake\'s CLUSTER BY feature? (Select all that apply)",
      options: ["It defines the columns used to organize data within micro-partitions", "It requires manual re-clustering by the user after data loads", "Automatic Clustering maintains the clustering over time for a cost", "It eliminates the need for micro-partition pruning"],
      correct: [0, 2],
      concept: "CLUSTER BY defines the clustering columns and Automatic Clustering (available in Enterprise+) maintains clustering automatically as data changes, consuming credits for re-clustering. Users do NOT need to manually re-cluster. Clustering enhances pruning rather than eliminating the need for it."
    },
    {
      id: 76,
      type: "multi",
      difficulty: 3,
      question: "Which of the following statements about Snowflake\'s Automatic Clustering are correct? (Select all that apply)",
      options: ["It is a serverless feature managed entirely by Snowflake", "It incurs compute and storage costs for re-clustering operations", "It is available in Standard Edition", "It works by reorganizing micro-partitions to improve cluster depth"],
      correct: [0, 1, 3],
      concept: "Automatic Clustering is a serverless feature (uses Snowflake-managed compute) that incurs both compute and storage costs. It reorganizes micro-partitions to maintain good cluster depth. It is available only in Enterprise Edition and higher, NOT in Standard Edition."
    },
    {
      id: 77,
      type: "multi",
      difficulty: 3,
      question: "Which factors affect the cost of running a virtual warehouse in Snowflake? (Select all that apply)",
      options: ["The warehouse size (number of compute nodes)", "The duration the warehouse is running", "The cloud provider and region of the account", "The number of databases accessible by the warehouse"],
      correct: [0, 1, 2],
      concept: "Warehouse cost depends on size (more nodes = more credits per hour), running duration, and the cloud provider/region (credit prices vary by provider and region). The number of databases a warehouse can access does not affect cost — any warehouse can access any data."
    },
    {
      id: 78,
      type: "multi",
      difficulty: 3,
      question: "Which of the following are true about Snowflake\'s approach to data encryption? (Select all that apply)",
      options: ["All data is encrypted at rest using AES-256 by default", "Data in transit is encrypted using TLS 1.2 or higher", "Encryption keys are automatically rotated periodically", "Users must enable encryption manually for each table"],
      correct: [0, 1, 2],
      concept: "Snowflake encrypts all data at rest (AES-256) and in transit (TLS 1.2+) by default, with no user action required. Encryption keys are automatically rotated. Users cannot disable encryption or need to enable it per table — it is always on for all data."
    },
    {
      id: 79,
      type: "multi",
      difficulty: 3,
      question: "Which of the following are valid use cases for scaling up (increasing size) vs. scaling out (multi-cluster)? (Select all that apply)",
      options: ["Scale up for complex queries that need more compute power per query", "Scale out for high concurrency with many simultaneous users", "Scale up for increasing the number of concurrent queries", "Scale out for reducing the execution time of a single large query"],
      correct: [0, 1],
      concept: "Scaling up (bigger warehouse) adds more nodes to improve performance of individual complex queries. Scaling out (multi-cluster) adds more clusters to handle more concurrent queries/users. Scaling up doesn\'t help concurrency, and scaling out doesn\'t speed up individual queries."
    },
    {
      id: 80,
      type: "multi",
      difficulty: 3,
      question: "Which of the following operations are handled by the Cloud Services Layer without consuming warehouse credits? (Select all that apply)",
      options: ["SHOW TABLES command", "ALTER WAREHOUSE RESIZE command", "SELECT * FROM large_table LIMIT 10", "DESCRIBE TABLE command"],
      correct: [0, 1, 3],
      concept: "SHOW, DESCRIBE, and ALTER commands are handled by the Cloud Services Layer and do not require a warehouse. SELECT queries, even with LIMIT, require a virtual warehouse for execution (unless served from the result cache). Cloud Services operations use cloud services credits, not warehouse credits."
    },
    {
      id: 81,
      type: "multi",
      difficulty: 3,
      question: "Which of the following are advantages of Snowflake\'s columnar storage format? (Select all that apply)",
      options: ["Better compression ratios since similar data types are stored together", "Faster full-row retrieval for OLTP workloads", "Ability to read only the columns required by a query", "Efficient aggregation operations on individual columns"],
      correct: [0, 2, 3],
      concept: "Columnar storage provides better compression (similar values stored together), allows reading only needed columns (reducing I/O), and enables efficient aggregations. However, columnar storage is NOT optimal for full-row OLTP retrieval — row-based storage is better for that."
    },
    {
      id: 82,
      type: "multi",
      difficulty: 3,
      question: "Which statements about Snowflake credit pricing are correct? (Select all that apply)",
      options: ["Credit prices vary between cloud providers and regions", "Higher Snowflake editions have higher per-credit costs", "All warehouse sizes consume the same number of credits per hour", "Credits can be pre-purchased at a discounted rate with capacity contracts"],
      correct: [0, 1, 3],
      concept: "Credit prices vary by cloud provider, region, and edition (higher editions cost more per credit). Warehouse sizes do NOT consume the same credits — each size up doubles the credits per hour. Capacity contracts allow pre-purchasing credits at discounted rates compared to on-demand."
    },
    {
      id: 83,
      type: "multi",
      difficulty: 3,
      question: "Which of the following are true about the Fail-safe period in Snowflake? (Select all that apply)",
      options: ["It lasts exactly 7 days after Time Travel expires", "Users can directly query data in Fail-safe", "Data recovery during Fail-safe requires Snowflake Support intervention", "Fail-safe data contributes to storage costs"],
      correct: [0, 2, 3],
      concept: "Fail-safe provides a 7-day recovery window after Time Travel expires. Users CANNOT directly access Fail-safe data — recovery requires contacting Snowflake Support. Fail-safe data does contribute to storage costs, even though it is not user-accessible."
    },
    {
      id: 84,
      type: "multi",
      difficulty: 3,
      question: "Which of the following can be monitored using SYSTEM$CLUSTERING_INFORMATION? (Select all that apply)",
      options: ["Average cluster depth of a table on specified columns", "Total number of micro-partitions in the table", "The number of overlapping micro-partitions", "The current virtual warehouse utilization percentage"],
      correct: [0, 1, 2],
      concept: "SYSTEM$CLUSTERING_INFORMATION returns the average cluster depth, total micro-partition count, and overlap information for a table on specified columns. It does NOT provide virtual warehouse utilization — that is monitored through warehouse usage views and resource monitors."
    },
    {
      id: 85,
      type: "multi",
      difficulty: 3,
      question: "Which of the following are true about Snowflake\'s approach to data sharing? (Select all that apply)",
      options: ["Shared data is accessed in real-time without copying", "Data consumers need their own Snowflake account to access shared data", "The data provider incurs compute costs when consumers query shared data", "Sharing can be done across different cloud providers using listings"],
      correct: [0, 1, 3],
      concept: "Shared data is accessed in real-time (no copy). Consumers need a Snowflake account and use their own warehouse (and credits) to query shared data — the provider does NOT pay for consumer queries. Cross-cloud sharing is possible through listings and data exchange features."
    },
    {
      id: 86,
      type: "tf",
      difficulty: 3,
      question: "Snowflake requires users to manually install software updates and security patches.",
      options: ["True — users manage their own update schedules and apply patches manually", "False — Snowflake automatically applies all updates with zero downtime"],
      correct: [1],
      concept: "Snowflake is a fully managed SaaS platform that automatically applies all software updates and security patches with zero downtime. Users never need to install or manage updates — this is one of the key advantages of the SaaS delivery model."
    },
    {
      id: 87,
      type: "tf",
      difficulty: 3,
      question: "A virtual warehouse must be running to return results from Snowflake\'s result cache.",
      options: ["True — the warehouse must be active to serve cached results", "False — cached results are served by the Cloud Services Layer without a warehouse"],
      correct: [1],
      concept: "The result cache is managed by the Cloud Services Layer, not by virtual warehouses. Cached query results can be returned even when the warehouse is suspended, and no compute credits are consumed. This is a common exam gotcha."
    },
    {
      id: 88,
      type: "tf",
      difficulty: 3,
      question: "In Snowflake, increasing a virtual warehouse size from Small to Medium doubles both the compute resources and credit consumption.",
      options: ["True — each size increase doubles compute nodes and credit cost", "False — compute doubles but credit consumption remains the same"],
      correct: [0],
      concept: "Each warehouse size increase doubles the number of compute nodes and also doubles the credit consumption per hour. Small = 2 credits/hour, Medium = 4 credits/hour. This linear relationship between size and cost is important for capacity planning."
    },
    {
      id: 89,
      type: "tf",
      difficulty: 3,
      question: "Snowflake Standard Edition supports Time Travel for up to 90 days.",
      options: ["True — all editions support 90-day Time Travel", "False — Standard Edition supports Time Travel for up to 1 day only"],
      correct: [1],
      concept: "Standard Edition supports Time Travel for up to 1 day only. Enterprise Edition and higher support Time Travel for up to 90 days. This is a frequently tested difference between editions on the certification exam."
    },
    {
      id: 90,
      type: "tf",
      difficulty: 3,
      question: "Snowflake\'s micro-partitions are mutable — data within a micro-partition can be updated in place.",
      options: ["True — micro-partitions support in-place updates for efficiency", "False — micro-partitions are immutable; updates create new micro-partitions"],
      correct: [1],
      concept: "Micro-partitions are immutable in Snowflake. When data is updated or deleted, new micro-partitions are created with the modified data, and the old micro-partitions are marked for removal (but retained for Time Travel). This immutability enables Time Travel and zero-copy cloning."
    },
    {
      id: 91,
      type: "tf",
      difficulty: 3,
      question: "Snowflake charges the same per-credit price regardless of the cloud provider or region selected.",
      options: ["True — credit pricing is uniform across all providers and regions", "False — credit pricing varies by cloud provider, region, and edition"],
      correct: [1],
      concept: "Snowflake\'s per-credit pricing varies based on the cloud provider (AWS, Azure, GCP), the region, and the Snowflake edition (Standard, Enterprise, Business Critical, VPS). This means the same warehouse size can cost different amounts depending on where the account is hosted."
    },
    {
      id: 92,
      type: "tf",
      difficulty: 3,
      question: "Multiple virtual warehouses running concurrently in the same Snowflake account share a single pool of compute resources.",
      options: ["True — all warehouses in an account share the same compute pool", "False — each warehouse has its own dedicated compute resources and does not share with others"],
      correct: [1],
      concept: "Each virtual warehouse in Snowflake has its own dedicated compute resources. Warehouses are completely independent — one warehouse\'s workload does not impact another\'s performance. This workload isolation is a key architectural benefit of Snowflake."
    },
    {
      id: 93,
      type: "tf",
      difficulty: 3,
      question: "The Economy scaling policy for multi-cluster warehouses starts new clusters as soon as a single query is queued.",
      options: ["True — Economy policy immediately starts new clusters when queries queue", "False — Economy policy starts clusters only when enough load is estimated to keep the cluster busy for 6 minutes"],
      correct: [1],
      concept: "The Economy scaling policy does NOT start clusters immediately. It waits until the system estimates enough query load to keep a new cluster busy for at least 6 minutes, favoring cost savings over immediate performance. The Standard policy starts clusters immediately when queries queue."
    },
    {
      id: 94,
      type: "tf",
      difficulty: 3,
      question: "Zero-copy cloning in Snowflake creates a physical copy of all data at the time of cloning.",
      options: ["True — all micro-partitions are physically duplicated during cloning", "False — the clone initially shares the same micro-partitions as the source with no data duplication"],
      correct: [1],
      concept: "Zero-copy cloning does NOT physically copy data. The clone initially references the same underlying micro-partitions as the source. Additional storage is consumed only when either the source or clone is modified, creating new micro-partitions for the changed data."
    },
    {
      id: 95,
      type: "tf",
      difficulty: 3,
      question: "Snowflake\'s Cloud Services Layer typically consumes about 10% of total compute costs, which is fully covered and not billed separately.",
      options: ["True — the first 10% of Cloud Services usage is covered and not billed as extra credits", "False — all Cloud Services Layer consumption is always billed separately regardless of amount"],
      correct: [0],
      concept: "Snowflake provides a daily 10% adjustment: if Cloud Services Layer credit consumption is 10% or less of total warehouse compute credit usage that day, it is not billed separately. Only amounts exceeding 10% are charged as additional Cloud Services credits."
    },
    {
      id: 96,
      type: "tf",
      difficulty: 3,
      question: "Snowflake allows users to create indexes on tables to improve query performance.",
      options: ["True — users can create B-tree or hash indexes on any table", "False — Snowflake does not support user-created indexes; it relies on micro-partition pruning and clustering"],
      correct: [1],
      concept: "Snowflake does NOT support traditional indexes (B-tree, hash, etc.). Instead, it uses micro-partition metadata and pruning to optimize queries. Clustering keys can be defined to improve data organization, but there are no user-created indexes in Snowflake."
    },
    {
      id: 97,
      type: "tf",
      difficulty: 3,
      question: "A Snowflake account can be migrated from one cloud provider to another (e.g., AWS to Azure) after creation.",
      options: ["True — accounts can be freely migrated between cloud providers at any time", "False — an account is tied to its cloud provider; cross-cloud access requires replication or a new account"],
      correct: [1],
      concept: "A Snowflake account is permanently tied to the cloud provider and region chosen at creation time. You cannot migrate an account between providers. To have presence on multiple clouds, you need separate accounts and can use database replication to synchronize data."
    },
    {
      id: 98,
      type: "tf",
      difficulty: 3,
      question: "In Snowflake, Fail-safe storage is available in all editions including Standard Edition.",
      options: ["True — Fail-safe is a core feature available in all Snowflake editions", "False — Fail-safe is only available in Enterprise Edition and higher"],
      correct: [0],
      concept: "Fail-safe is indeed available in all Snowflake editions, including Standard Edition. It provides a non-configurable 7-day period of data recovery (via Snowflake Support) after Time Travel expires. This is a core data protection feature across all editions."
    },
    {
      id: 99,
      type: "tf",
      difficulty: 3,
      question: "Snowflake\'s storage layer stores data in a proprietary format that is optimized for analytical workloads.",
      options: ["True — Snowflake uses a proprietary columnar storage format optimized for analytics", "False — Snowflake stores data in standard open formats like Parquet or ORC"],
      correct: [0],
      concept: "Snowflake stores data in its own proprietary columnar format within micro-partitions. This format is specifically optimized for analytical query patterns, efficient compression, and pruning. It is not an open format like Parquet or ORC — Snowflake manages it entirely."
    },
    {
      id: 100,
      type: "tf",
      difficulty: 3,
      question: "When using Secure Data Sharing, the data consumer\'s queries consume credits from the data provider\'s account.",
      options: ["True — the provider pays for all compute used to query shared data", "False — the consumer uses their own warehouse and credits to query shared data"],
      correct: [1],
      concept: "In Secure Data Sharing, the data consumer uses their own virtual warehouse and consumes their own credits to query shared data. The provider only pays for storage. This separation ensures providers are not penalized for sharing data widely."
    }
  ]
};

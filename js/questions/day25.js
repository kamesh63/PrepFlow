window.QUIZ_DATA = window.QUIZ_DATA || {};
window.QUIZ_DATA["day25"] = {
  title: "Data Sharing & Marketplace",
  topics: ["Secure Data Sharing", "Data Exchange", "Marketplace", "Reader Accounts", "Share Objects"],
  questions: [
    {
      id: 1,
      type: "single",
      difficulty: 1,
      question: "What is the fundamental principle behind Snowflake\'s Secure Data Sharing feature?",
      options: ["Data is copied to the consumer\'s account storage", "Data is shared without any data movement or copying", "Data is replicated across regions for sharing purposes", "Data is exported as files and imported by the consumer"],
      correct: [0],
      concept: "Snowflake\'s Secure Data Sharing allows providers to share data with consumers without any data being copied or moved. Consumers access the shared data directly from the provider\'s account storage, which means there is no data duplication, no ETL, and no additional storage costs for the shared data on the consumer side."
    },
    {
      id: 2,
      type: "single",
      difficulty: 1,
      question: "Which SQL command is used to create a new share object in Snowflake?",
      options: ["CREATE SHARE share_name", "CREATE DATA SHARE share_name", "CREATE SHARING share_name", "CREATE SHARED DATABASE share_name"],
      correct: [0],
      concept: "The CREATE SHARE command is used to create a new share object in Snowflake. The basic syntax is CREATE SHARE share_name. After creating the share, you grant privileges on specific database objects to the share using GRANT statements."
    },
    {
      id: 3,
      type: "single",
      difficulty: 1,
      question: "When a consumer mounts a shared database, who pays for the storage costs of the shared data?",
      options: ["The consumer account pays for storage", "The provider account pays for storage", "Both accounts split the storage costs equally", "Snowflake absorbs the storage costs automatically"],
      correct: [1],
      concept: "Since Secure Data Sharing does not copy data, the provider retains and pays for all storage costs. The consumer only pays for the compute resources (virtual warehouse) they use to query the shared data. This is a key benefit of Snowflake\'s zero-copy sharing architecture."
    },
    {
      id: 4,
      type: "single",
      difficulty: 1,
      question: "Which command is used to add a consumer account to an existing share?",
      options: ["GRANT SHARE TO ACCOUNT consumer_account", "ALTER SHARE share_name ADD ACCOUNTS = consumer_account", "ADD ACCOUNT consumer_account TO SHARE share_name", "UPDATE SHARE share_name SET ACCOUNTS = consumer_account"],
      correct: [1],
      concept: "The ALTER SHARE ... ADD ACCOUNTS command is used to add one or more consumer accounts to an existing share. The syntax is ALTER SHARE share_name ADD ACCOUNTS = account_name1, account_name2. This makes the share visible and accessible to the specified consumer accounts."
    },
    {
      id: 5,
      type: "single",
      difficulty: 1,
      question: "How does a consumer account access shared data from a provider?",
      options: ["By querying the provider\'s database directly using a linked server", "By creating a database from the share using CREATE DATABASE ... FROM SHARE", "By importing the share as a file into their local storage", "By connecting to the provider\'s virtual warehouse remotely"],
      correct: [1],
      concept: "A consumer creates a database from a share using the syntax: CREATE DATABASE db_name FROM SHARE provider_account.share_name. This creates a read-only database in the consumer\'s account that references the shared data without copying it. The consumer can then query this database using their own compute resources."
    },
    {
      id: 6,
      type: "single",
      difficulty: 1,
      question: "What type of access does a consumer have on a database created from a share?",
      options: ["Full read-write access including DDL operations", "Read-only access to the shared objects", "Read-write access but no DDL operations", "Temporary read-write access for 30 days"],
      correct: [1],
      concept: "A database created from a share provides read-only access to the consumer. Consumers can query the shared data using SELECT statements but cannot modify (INSERT, UPDATE, DELETE) or perform DDL operations on the shared objects. This ensures data integrity from the provider\'s perspective."
    },
    {
      id: 7,
      type: "single",
      difficulty: 1,
      question: "Which privilege must be granted to a share before adding database objects to it?",
      options: ["SELECT on the database", "OWNERSHIP on the database", "USAGE on the database", "MONITOR on the database"],
      correct: [2],
      concept: "Before granting privileges on specific objects (tables, views) to a share, you must first grant USAGE on the database and then USAGE on the schema to the share. This follows Snowflake\'s hierarchical privilege model. Without USAGE on the database and schema, the share cannot access any objects within them."
    },
    {
      id: 8,
      type: "single",
      difficulty: 1,
      question: "What is a Snowflake Data Exchange?",
      options: ["A public marketplace for buying and selling data", "A private hub for a group of accounts to share data among themselves", "A Snowflake-managed ETL service for data transfer", "A tool for converting data between different formats"],
      correct: [1],
      concept: "A Snowflake Data Exchange is a private hub that allows a selected group of accounts to share and discover data among themselves. Unlike the public Snowflake Marketplace, a Data Exchange is restricted to invited members and is managed by a Data Exchange Admin who controls membership and listings."
    },
    {
      id: 9,
      type: "single",
      difficulty: 1,
      question: "Who is responsible for managing membership in a private Data Exchange?",
      options: ["Snowflake support team", "Any ACCOUNTADMIN in participating accounts", "The Data Exchange Admin", "All members have equal admin rights"],
      correct: [2],
      concept: "The Data Exchange Admin is responsible for managing a private Data Exchange. This role controls which accounts can join the exchange, manages listings, and oversees the overall operation of the exchange. The admin is typically designated when the exchange is first set up."
    },
    {
      id: 10,
      type: "single",
      difficulty: 1,
      question: "How does a private Data Exchange differ from the Snowflake Marketplace?",
      options: ["Data Exchange is free while Marketplace charges fees", "Data Exchange is restricted to invited members while Marketplace is public", "Data Exchange supports only structured data while Marketplace supports all types", "Data Exchange requires data replication while Marketplace uses zero-copy sharing"],
      correct: [1],
      concept: "A private Data Exchange restricts access to invited members only, creating a closed ecosystem for data sharing. The Snowflake Marketplace, on the other hand, is publicly accessible to all Snowflake accounts. Both use Snowflake\'s zero-copy sharing technology, but they differ in scope and access control."
    },
    {
      id: 11,
      type: "single",
      difficulty: 1,
      question: "In the context of Data Exchange, what does a \'listing\' represent?",
      options: ["A virtual warehouse configuration for data processing", "A published data product that members can discover and access", "A schema definition for structuring shared data", "A billing record for data sharing transactions"],
      correct: [1],
      concept: "In a Data Exchange, a listing is a published data product made available by a provider. It includes metadata about the data, such as descriptions, sample queries, and usage instructions. Members of the exchange can browse listings to discover and request access to available data products."
    },
    {
      id: 12,
      type: "single",
      difficulty: 1,
      question: "Which of the following best describes a provider account in Snowflake data sharing?",
      options: ["An account that consumes shared data from other accounts", "An account that creates shares and makes data available to others", "An account specifically designed for ETL processing", "An account that manages Snowflake Marketplace transactions"],
      correct: [1],
      concept: "A provider account is the Snowflake account that creates shares and makes data available to other accounts (consumers). The provider owns the data, controls what is shared, and can add or remove consumer accounts at any time. The provider pays for the storage of the shared data."
    },
    {
      id: 13,
      type: "single",
      difficulty: 1,
      question: "What is the primary purpose of a data exchange in Snowflake?",
      options: ["To transform data between different file formats", "To facilitate data discovery and sharing within a curated group", "To replicate databases across multiple cloud providers", "To encrypt data for secure transfer between accounts"],
      correct: [1],
      concept: "A Data Exchange provides a curated environment where a specific group of Snowflake accounts can discover, publish, and consume data. It enables controlled collaboration between organizations that need to share data within a trusted community, such as industry groups or partner networks."
    },
    {
      id: 14,
      type: "single",
      difficulty: 1,
      question: "Can a Data Exchange span across multiple Snowflake regions?",
      options: ["No, all members must be in the same region", "Yes, but it requires database replication to be configured", "Yes, without any additional configuration needed", "No, Data Exchanges are limited to a single cloud provider"],
      correct: [1],
      concept: "A Data Exchange can include members from different Snowflake regions, but sharing data across regions requires database replication to be set up. Within the same region, zero-copy sharing works directly. For cross-region sharing, the provider must replicate the shared database to the consumer\'s region."
    },
    {
      id: 15,
      type: "single",
      difficulty: 1,
      question: "What is the Snowflake Marketplace?",
      options: ["A private hub for enterprise data sharing only", "A platform where third-party providers can list and share data with any Snowflake account", "A tool for purchasing Snowflake credits at discounted rates", "A managed service for building data pipelines between accounts"],
      correct: [1],
      concept: "The Snowflake Marketplace is a public platform where third-party data providers can list and share data products with any Snowflake customer. It allows consumers to discover, evaluate, and access live data sets without needing to copy or move data. Listings can be free, personalized, or paid."
    },
    {
      id: 16,
      type: "single",
      difficulty: 1,
      question: "Which listing type on the Snowflake Marketplace provides data at no cost to the consumer?",
      options: ["Standard listing", "Free listing", "Personalized listing", "Open listing"],
      correct: [1],
      concept: "A free listing on the Snowflake Marketplace provides data at no cost to the consumer. Consumers can get the data immediately by creating a database from the listing. Free listings are often used by providers to increase data adoption or provide public reference data sets."
    },
    {
      id: 17,
      type: "single",
      difficulty: 1,
      question: "What distinguishes a personalized listing from a free listing on the Snowflake Marketplace?",
      options: ["Personalized listings require the consumer to pay a subscription fee", "Personalized listings require the consumer to contact the provider for access approval", "Personalized listings only share metadata, not actual data", "Personalized listings are available only to Enterprise edition accounts"],
      correct: [1],
      concept: "A personalized listing requires the consumer to submit a request to the provider, who then reviews and approves access. This allows providers to customize the shared data based on the consumer\'s needs or to vet consumers before granting access. Free listings, in contrast, provide immediate access without approval."
    },
    {
      id: 18,
      type: "single",
      difficulty: 1,
      question: "What is the key characteristic of a paid listing on the Snowflake Marketplace?",
      options: ["The consumer must pay Snowflake directly for accessing the data", "The provider charges consumers a fee for accessing the data, billed through Snowflake", "The consumer must purchase additional Snowflake credits", "The data is available for a limited trial period before payment is required"],
      correct: [1],
      concept: "A paid listing on the Snowflake Marketplace allows providers to charge consumers for accessing their data. The billing is facilitated through Snowflake, and the provider sets the pricing terms. This enables data monetization directly within the Snowflake ecosystem."
    },
    {
      id: 19,
      type: "single",
      difficulty: 1,
      question: "In the Snowflake Marketplace, what role does a consumer play?",
      options: ["They create and manage share objects for others", "They discover, subscribe to, and query data listings from providers", "They manage the Marketplace platform and approve listings", "They only provide feedback and ratings on data products"],
      correct: [1],
      concept: "A consumer in the Snowflake Marketplace discovers data listings, subscribes to them (or requests access for personalized listings), and creates databases from the listings to query the shared data. Consumers use their own compute resources to run queries against the shared data."
    },
    {
      id: 20,
      type: "single",
      difficulty: 1,
      question: "Which Snowflake edition is required to be a data provider on the Marketplace?",
      options: ["Standard Edition only", "Enterprise Edition or higher", "Business Critical Edition only", "Any Snowflake edition can be a provider"],
      correct: [3],
      concept: "Any Snowflake edition can act as a data provider on the Snowflake Marketplace. Secure Data Sharing is a core feature available across all editions. However, some advanced features like private listings and certain sharing configurations may have edition-specific requirements."
    },
    {
      id: 21,
      type: "single",
      difficulty: 1,
      question: "What happens to a consumer\'s shared database if the provider revokes the share?",
      options: ["The database becomes a local copy owned by the consumer", "The database becomes inaccessible and must be dropped", "The database remains accessible for 90 days after revocation", "The database is automatically archived in the consumer\'s account"],
      correct: [1],
      concept: "If a provider revokes a share (removes the consumer account from the share), the consumer\'s database created from that share becomes inaccessible immediately. The consumer will see errors when trying to query the database and should drop it. No data is retained because no data was ever copied."
    },
    {
      id: 22,
      type: "single",
      difficulty: 1,
      question: "What is the primary purpose of a reader account in Snowflake?",
      options: ["To provide a full-featured Snowflake account for internal teams", "To allow non-Snowflake customers to access shared data", "To create backup accounts for disaster recovery", "To provide administrative access for managing shares"],
      correct: [1],
      concept: "A reader account (also called a managed account) allows data providers to share data with consumers who do not have their own Snowflake account. The provider creates and manages the reader account, enabling non-Snowflake customers to access shared data without purchasing their own Snowflake subscription."
    },
    {
      id: 23,
      type: "single",
      difficulty: 1,
      question: "Who pays for the compute costs incurred by a reader account?",
      options: ["The reader account user pays directly to Snowflake", "The provider who created the reader account pays", "Snowflake absorbs the compute costs for reader accounts", "The costs are split between the provider and the reader"],
      correct: [1],
      concept: "All compute and storage costs associated with a reader account are billed to the provider account that created it. This is a critical consideration when creating reader accounts, as the provider must budget for the warehouses and any resources consumed by the reader account users."
    },
    {
      id: 24,
      type: "single",
      difficulty: 1,
      question: "Which of the following is a limitation of reader accounts?",
      options: ["They cannot query shared data", "They cannot create their own virtual warehouses", "They cannot load data into their own tables", "They cannot connect using JDBC or ODBC drivers"],
      correct: [2],
      concept: "Reader accounts have significant limitations compared to full Snowflake accounts. They cannot load data into their own tables, create databases (other than from shares), or perform DML operations. They are designed solely for querying shared data. However, they can create warehouses (billed to the provider) to run queries."
    },
    {
      id: 25,
      type: "single",
      difficulty: 1,
      question: "Which command creates a reader account in Snowflake?",
      options: ["CREATE READER ACCOUNT account_name", "CREATE MANAGED ACCOUNT account_name ADMIN_NAME=... ADMIN_PASSWORD=...", "CREATE ACCOUNT account_name TYPE=READER", "ALTER ACCOUNT SET TYPE = READER"],
      correct: [1],
      concept: "Reader accounts are created using the CREATE MANAGED ACCOUNT command with required parameters ADMIN_NAME and ADMIN_PASSWORD. The syntax is: CREATE MANAGED ACCOUNT account_name ADMIN_NAME = \'admin_user\', ADMIN_PASSWORD = \'password\', TYPE = READER. This creates a managed account that is controlled by the provider."
    },
    {
      id: 26,
      type: "single",
      difficulty: 1,
      question: "Can a reader account access data from multiple providers?",
      options: ["Yes, from any number of provider accounts", "No, a reader account can only access shares from the provider that created it", "Yes, but only from providers in the same region", "Yes, but it requires cross-account replication setup"],
      correct: [1],
      concept: "A reader account can only access shares from the provider account that created it. It cannot access shares from other Snowflake accounts. This is by design, as the reader account is managed and billed entirely by the creating provider."
    },
    {
      id: 27,
      type: "single",
      difficulty: 1,
      question: "What happens to reader account users when the provider suspends the reader account?",
      options: ["Users can still query cached data for 24 hours", "Users immediately lose access to all shared data and cannot log in", "Users retain read access but lose write capabilities", "Users are migrated to a free trial Snowflake account"],
      correct: [1],
      concept: "When a provider suspends a reader account, users of that account immediately lose all access. They cannot log in or query any data. The provider has full control over the reader account lifecycle, including the ability to suspend, resume, or drop the account entirely."
    },
    {
      id: 28,
      type: "single",
      difficulty: 1,
      question: "Which resource can a reader account create to query shared data?",
      options: ["External stages", "Virtual warehouses", "Storage integrations", "Database clones"],
      correct: [1],
      concept: "Reader accounts can create virtual warehouses to execute queries against shared data. The compute costs for these warehouses are billed to the provider that created the reader account. Reader accounts cannot create most other resources like stages, integrations, or clones."
    },
    {
      id: 29,
      type: "single",
      difficulty: 1,
      question: "Which of the following object types can be included in a Snowflake share?",
      options: ["Tables, secure views, and secure UDFs", "Tables, stages, and pipes", "Tables, tasks, and streams", "Tables, warehouses, and resource monitors"],
      correct: [0],
      concept: "Snowflake shares can include tables, secure views, and secure UDFs (user-defined functions). Stages, pipes, tasks, streams, warehouses, and resource monitors cannot be shared. The use of secure views and secure UDFs is recommended to control what data consumers can see."
    },
    {
      id: 30,
      type: "single",
      difficulty: 1,
      question: "Why are secure views recommended when sharing data through Snowflake shares?",
      options: ["Secure views execute faster than regular views", "Secure views hide the view definition and prevent data exposure through query optimization", "Secure views automatically encrypt the shared data", "Secure views are the only view type supported in shares"],
      correct: [1],
      concept: "Secure views are recommended for data sharing because they hide the view definition from consumers and prevent the query optimizer from exposing underlying data through optimization techniques. Regular views could potentially expose data the provider did not intend to share through the view definition or optimizer behavior."
    },
    {
      id: 31,
      type: "single",
      difficulty: 1,
      question: "Can a standard (non-secure) view be added to a share?",
      options: ["Yes, any view type can be added to a share", "No, only secure views can be added to a share", "Yes, but only if the view references a single table", "No, views cannot be shared at all in Snowflake"],
      correct: [1],
      concept: "Only secure views can be added to a Snowflake share. Standard (non-secure) views cannot be shared because their definitions are visible to consumers, which could expose underlying table structures, sensitive column names, or business logic that the provider wants to keep private."
    },
    {
      id: 32,
      type: "single",
      difficulty: 1,
      question: "What type of UDF can be included in a Snowflake share?",
      options: ["Any UDF regardless of type", "Only secure UDFs", "Only JavaScript UDFs", "Only SQL UDFs"],
      correct: [1],
      concept: "Only secure UDFs can be included in a Snowflake share. Similar to secure views, secure UDFs hide their internal logic and definition from consumers. This prevents consumers from viewing the provider\'s proprietary business logic or transformation algorithms embedded in the function."
    },
    {
      id: 33,
      type: "single",
      difficulty: 1,
      question: "Which database object must have USAGE privilege granted to a share before tables within it can be shared?",
      options: ["The virtual warehouse used for queries", "The schema containing the tables", "The role that owns the tables", "The storage integration for the account"],
      correct: [1],
      concept: "Before sharing tables, you must grant USAGE on both the database and the schema containing the tables to the share. The hierarchy is: GRANT USAGE ON DATABASE db TO SHARE share_name, then GRANT USAGE ON SCHEMA db.schema TO SHARE share_name, then GRANT SELECT ON TABLE to the share."
    },
    {
      id: 34,
      type: "single",
      difficulty: 1,
      question: "Can external tables be included in a Snowflake share?",
      options: ["Yes, external tables can be shared like regular tables", "No, external tables cannot be included in shares", "Yes, but only if the external stage is also shared", "Yes, but the consumer must have access to the same cloud storage"],
      correct: [0],
      concept: "External tables can be included in Snowflake shares. When an external table is shared, the consumer can query the data just like a regular shared table. The provider manages the external stage and data files, and the consumer does not need direct access to the underlying cloud storage."
    },
    {
      id: 35,
      type: "single",
      difficulty: 1,
      question: "What privilege is granted on tables to make them accessible through a share?",
      options: ["USAGE", "OWNERSHIP", "SELECT", "REFERENCES"],
      correct: [2],
      concept: "The SELECT privilege is granted on tables (and views) to make them accessible through a share. The syntax is: GRANT SELECT ON TABLE db.schema.table_name TO SHARE share_name. This grants read-only access to the table data for all consumer accounts added to the share."
    },
    {
      id: 36,
      type: "single",
      difficulty: 2,
      question: "A provider shares a table with consumer account A. Later, the provider adds new columns to the table. What happens for consumer A?",
      options: ["Consumer A must re-mount the share to see new columns", "Consumer A automatically sees the new columns in their next query", "Consumer A must request the provider to refresh the share", "Consumer A\'s shared database becomes invalid and must be recreated"],
      correct: [1],
      concept: "Since Secure Data Sharing provides live access to the provider\'s data (no copying), any schema or data changes made by the provider are immediately reflected for consumers. When the provider adds new columns, the consumer automatically sees them on their next query without any additional steps."
    },
    {
      id: 37,
      type: "single",
      difficulty: 2,
      question: "What happens when a provider runs a DELETE statement on a shared table?",
      options: ["The deleted rows remain visible to consumers for 90 days", "The deleted rows are immediately invisible to consumers", "Consumers are notified before the deletion takes effect", "The deletion only affects the provider\'s copy, not the shared version"],
      correct: [1],
      concept: "Because Secure Data Sharing is zero-copy and live, any DML operations (INSERT, UPDATE, DELETE) by the provider are immediately reflected for consumers. When the provider deletes rows, consumers will no longer see those rows on their next query. There is no separate \"shared version\" of the data."
    },
    {
      id: 38,
      type: "single",
      difficulty: 2,
      question: "Which Snowflake function can be used within a secure view to filter data based on the consumer\'s account name?",
      options: ["CURRENT_USER()", "CURRENT_ACCOUNT()", "CURRENT_ROLE()", "CURRENT_SESSION()"],
      correct: [1],
      concept: "The CURRENT_ACCOUNT() function returns the name of the account executing the query. In a secure view shared with multiple consumers, CURRENT_ACCOUNT() can be used in the WHERE clause to filter rows so each consumer only sees their own data. This enables multi-tenant data sharing from a single share."
    },
    {
      id: 39,
      type: "single",
      difficulty: 2,
      question: "A provider wants to share data with a consumer in a different Snowflake region. What additional step is required?",
      options: ["Configure a VPN tunnel between the two regions", "Set up database replication to the consumer\'s region", "Export the data to cloud storage in the consumer\'s region", "No additional steps are needed for cross-region sharing"],
      correct: [1],
      concept: "Snowflake\'s zero-copy Secure Data Sharing only works within the same region and cloud platform. For cross-region or cross-cloud sharing, the provider must first set up database replication to replicate the shared database to the consumer\'s region. The share is then created from the replicated database in the target region."
    },
    {
      id: 40,
      type: "single",
      difficulty: 2,
      question: "Which view provides information about shares that have been created in your account?",
      options: ["SNOWFLAKE.ACCOUNT_USAGE.SHARES", "INFORMATION_SCHEMA.SHARES", "SHOW SHARES command output", "SNOWFLAKE.ACCOUNT_USAGE.DATA_SHARING_USAGE"],
      correct: [2],
      concept: "The SHOW SHARES command displays information about shares in your account, including both outbound shares (shares you created) and inbound shares (shares from other providers). It shows details like the share name, database, owner, kind (OUTBOUND/INBOUND), and the accounts the share is shared with."
    },
    {
      id: 41,
      type: "single",
      difficulty: 2,
      question: "A Data Exchange admin wants to remove a member from the exchange. What impact does this have on existing shares?",
      options: ["Existing shares continue to function for 30 days", "The removed member immediately loses access to all exchange listings", "Shares are converted to direct shares between provider and consumer", "The removed member retains access but cannot discover new listings"],
      correct: [1],
      concept: "When a Data Exchange admin removes a member, that member immediately loses access to all listings and shared data within the exchange. The removal is instantaneous and there is no grace period. Any databases created from exchange listings become inaccessible."
    },
    {
      id: 42,
      type: "single",
      difficulty: 2,
      question: "How many Data Exchanges can a single Snowflake account participate in?",
      options: ["Only one Data Exchange per account", "Up to five Data Exchanges per account", "Multiple Data Exchanges with no fixed upper limit", "Two: one as a provider and one as a consumer"],
      correct: [2],
      concept: "A Snowflake account can participate in multiple Data Exchanges simultaneously. There is no fixed upper limit on the number of exchanges an account can join. An account can also be a member, provider, or consumer in different exchanges, providing flexibility for organizations that collaborate with multiple groups."
    },
    {
      id: 43,
      type: "single",
      difficulty: 2,
      question: "In a Data Exchange, can a single account act as both a provider and a consumer?",
      options: ["No, an account must choose one role per exchange", "Yes, an account can both publish and consume listings in the same exchange", "Yes, but only in Enterprise edition or higher", "No, provider and consumer roles are mutually exclusive"],
      correct: [1],
      concept: "A single Snowflake account can act as both a provider and a consumer within the same Data Exchange. This means the account can publish its own listings for other members while also subscribing to and consuming data from other providers\' listings in the exchange."
    },
    {
      id: 44,
      type: "single",
      difficulty: 2,
      question: "What information can a Data Exchange admin monitor about exchange usage?",
      options: ["Only the number of active members", "Listing usage, member activity, and data access patterns", "Only the total storage consumed by all listings", "Only the compute credits used across the exchange"],
      correct: [1],
      concept: "Data Exchange admins have access to comprehensive monitoring capabilities including listing usage metrics, member activity, data access patterns, and consumption statistics. This helps admins understand how the exchange is being utilized and make informed decisions about membership and listing management."
    },
    {
      id: 45,
      type: "single",
      difficulty: 2,
      question: "When creating a listing on the Data Exchange, which metadata is typically required?",
      options: ["Only the share name and consumer account list", "Title, description, sample SQL queries, and the underlying share", "Only the database name and schema", "A data dictionary and ER diagram of the shared objects"],
      correct: [1],
      concept: "When creating a listing, providers typically supply metadata including a title, description, sample SQL queries, terms of use, and the underlying share object. This metadata helps consumers understand and evaluate the data product before requesting access."
    },
    {
      id: 46,
      type: "single",
      difficulty: 2,
      question: "A consumer discovers a personalized listing on the Snowflake Marketplace. What must they do to access the data?",
      options: ["Click \'Get\' and the data is immediately available", "Submit a request to the provider and wait for approval", "Purchase a subscription through the Snowflake billing portal", "Create a replication link to the provider\'s database"],
      correct: [1],
      concept: "For personalized listings, consumers must submit an access request to the provider. The provider reviews the request and may customize the data offering before granting access. This differs from free listings, which provide immediate access, and paid listings, which require payment before access is granted."
    },
    {
      id: 47,
      type: "single",
      difficulty: 2,
      question: "What is one advantage of getting data through the Snowflake Marketplace compared to traditional data delivery methods?",
      options: ["Data is always free on the Marketplace", "Data is live and always up-to-date without ETL pipelines", "Marketplace data is pre-indexed for faster queries", "Marketplace provides unlimited compute for querying shared data"],
      correct: [1],
      concept: "A key advantage of the Snowflake Marketplace is that shared data is live and always current. Because of zero-copy sharing, when the provider updates their data, consumers see the updates immediately without needing ETL pipelines, file transfers, or data refresh processes."
    },
    {
      id: 48,
      type: "single",
      difficulty: 2,
      question: "Can a Snowflake Marketplace provider restrict which accounts can access a free listing?",
      options: ["Yes, providers can whitelist specific accounts for free listings", "No, free listings are available to all Snowflake accounts without restriction", "Yes, but only based on the consumer\'s Snowflake edition", "No, but they can restrict based on geographic region"],
      correct: [1],
      concept: "Free listings on the Snowflake Marketplace are available to all Snowflake accounts without restriction. Any Snowflake customer can discover and get a free listing. If a provider wants to restrict access to specific accounts, they should use personalized listings instead, which require approval before access is granted."
    },
    {
      id: 49,
      type: "single",
      difficulty: 2,
      question: "What is a key consideration for a provider when deciding between a free listing and a paid listing on the Marketplace?",
      options: ["Free listings support more data types than paid listings", "Paid listings allow the provider to monetize their data assets", "Free listings have better query performance than paid listings", "Paid listings provide exclusive data that cannot be shared elsewhere"],
      correct: [1],
      concept: "The primary distinction is monetization. Paid listings allow providers to generate revenue from their data assets by charging consumers for access. Free listings are better suited for public reference data, marketing purposes, or when the provider wants to maximize data adoption without a revenue focus."
    },
    {
      id: 50,
      type: "single",
      difficulty: 2,
      question: "Which Snowflake Marketplace listing type is best suited for a provider who wants to customize the data for each consumer?",
      options: ["Free listing", "Paid listing", "Personalized listing", "Standard listing"],
      correct: [2],
      concept: "Personalized listings are ideal when providers need to customize data for each consumer. After a consumer requests access, the provider can tailor the shared data (e.g., filtering by the consumer\'s industry or region) before granting access. Free and paid listings provide the same data to all consumers."
    },
    {
      id: 51,
      type: "single",
      difficulty: 2,
      question: "A provider creates a reader account but forgets to create a warehouse in it. What can the reader account user do?",
      options: ["Query shared data using the provider\'s warehouse", "Nothing — they need a warehouse to execute any queries", "Access the shared data through the Snowflake web UI without a warehouse", "Run queries using the result cache only"],
      correct: [1],
      concept: "Reader account users need a virtual warehouse to execute queries. If no warehouse exists in the reader account, they cannot run any queries. The provider (or reader account admin) must create a warehouse in the reader account. The compute costs for this warehouse are billed to the provider."
    },
    {
      id: 52,
      type: "single",
      difficulty: 2,
      question: "How can a provider control costs for a reader account\'s warehouse usage?",
      options: ["By setting a credit limit on the reader account", "By creating a resource monitor on the reader account\'s warehouse", "By scheduling the warehouse to run only during business hours", "By configuring the reader account with a spending cap in the contract"],
      correct: [1],
      concept: "Providers can create resource monitors to track and control the warehouse credit usage in reader accounts. Resource monitors can be set to notify, suspend, or immediately suspend warehouses when credit thresholds are reached. This is essential since reader account compute costs are billed to the provider."
    },
    {
      id: 53,
      type: "single",
      difficulty: 2,
      question: "Can a reader account user create additional user accounts within the reader account?",
      options: ["No, only the initial admin user can exist in a reader account", "Yes, the reader account admin can create additional users", "Yes, but only up to 5 additional users", "No, user management is handled by the provider account"],
      correct: [1],
      concept: "The reader account admin (created during the MANAGED ACCOUNT creation) can create additional users within the reader account. This allows the provider to give multiple people access to the shared data through the same reader account. The admin can manage roles and privileges for these users."
    },
    {
      id: 54,
      type: "single",
      difficulty: 2,
      question: "What is the maximum number of reader accounts a provider can create?",
      options: ["10 reader accounts per provider", "20 reader accounts per provider", "There is a configurable limit set by Snowflake support", "Unlimited reader accounts can be created"],
      correct: [2],
      concept: "The number of reader accounts a provider can create is subject to a limit set by Snowflake. By default, there is a limit, but it can be increased by contacting Snowflake support. Providers should plan their reader account strategy considering these limits and the associated cost implications."
    },
    {
      id: 55,
      type: "single",
      difficulty: 2,
      question: "Can a reader account user use Time Travel on shared data?",
      options: ["Yes, with the same retention period as the provider\'s table", "No, Time Travel is not available for shared data in reader accounts", "Yes, but only for 1 day regardless of the provider\'s settings", "Yes, but it requires a separate license for the reader account"],
      correct: [1],
      concept: "Time Travel is not available for shared data in any consumer account, including reader accounts. Shared databases are read-only references to the provider\'s data and do not support Time Travel. Only the provider can use Time Travel on the original source tables."
    },
    {
      id: 56,
      type: "single",
      difficulty: 2,
      question: "Which of the following is required in the GRANT statement to share a table through a share object?",
      options: ["GRANT ALL PRIVILEGES ON TABLE to SHARE", "GRANT INSERT ON TABLE to SHARE", "GRANT SELECT ON TABLE to SHARE", "GRANT OWNERSHIP ON TABLE to SHARE"],
      correct: [2],
      concept: "Only the SELECT privilege can be granted on tables to a share. The correct syntax is GRANT SELECT ON TABLE db.schema.table_name TO SHARE share_name. You cannot grant INSERT, UPDATE, DELETE, or OWNERSHIP to a share because shared data is always read-only for consumers."
    },
    {
      id: 57,
      type: "single",
      difficulty: 2,
      question: "A provider creates a secure view that joins two tables but only includes one table in the share. Can the secure view be shared?",
      options: ["No, all underlying tables must be explicitly granted to the share", "Yes, the secure view can be shared as long as the view itself is granted to the share", "No, secure views with joins are not supported in shares", "Yes, but only if both tables are in the same schema"],
      correct: [1],
      concept: "A secure view can be shared even if not all underlying tables are explicitly granted to the share. The share only needs USAGE on the database/schema and SELECT on the secure view itself. The view acts as a controlled access layer, and the underlying table details are hidden from the consumer by the secure view."
    },
    {
      id: 58,
      type: "single",
      difficulty: 2,
      question: "What happens if a provider drops a table that is referenced by a shared secure view?",
      options: ["The share automatically removes the view from the listing", "The secure view still appears in the share but queries against it will fail", "The consumer\'s database is automatically dropped", "Snowflake prevents the provider from dropping the table"],
      correct: [1],
      concept: "If a provider drops a table referenced by a shared secure view, the view remains in the share but queries against it will fail with an error. Snowflake does not prevent the drop operation. It is the provider\'s responsibility to ensure that shared objects and their dependencies remain valid."
    },
    {
      id: 59,
      type: "single",
      difficulty: 2,
      question: "Can a share include objects from multiple databases?",
      options: ["Yes, a share can reference objects from any number of databases", "No, a share can only include objects from a single database", "Yes, but only from databases owned by the same role", "No, but you can create multiple shares, one per database"],
      correct: [1],
      concept: "A share can only include objects from a single database. If a provider needs to share objects from multiple databases, they must create separate shares for each database, or consolidate the objects into a single database (perhaps using secure views that reference other databases) and share that database."
    },
    {
      id: 60,
      type: "single",
      difficulty: 2,
      question: "When granting privileges on a share, what is the correct order of GRANT statements?",
      options: ["SELECT on table, then USAGE on schema, then USAGE on database", "USAGE on database, then SELECT on table, then USAGE on schema", "USAGE on database, then USAGE on schema, then SELECT on table", "SELECT on table is the only required grant statement"],
      correct: [2],
      concept: "The correct order is hierarchical: first GRANT USAGE ON DATABASE, then GRANT USAGE ON SCHEMA, and finally GRANT SELECT ON TABLE (or view/UDF). This follows Snowflake\'s standard privilege model where access to child objects requires USAGE privilege on parent container objects."
    },
    {
      id: 61,
      type: "multi",
      difficulty: 2,
      question: "Which of the following statements about Snowflake Secure Data Sharing are true? (Select all that apply)",
      options: ["Shared data is not copied to the consumer\'s account", "Consumers need their own warehouse to query shared data", "Providers can share data across different cloud platforms without replication", "Consumers have read-only access to shared data"],
      correct: [0, 1, 3],
      concept: "Secure Data Sharing does not copy data (zero-copy), consumers must use their own warehouse to query, and consumers have read-only access. However, sharing across different cloud platforms or regions DOES require database replication to be set up first, making option C false."
    },
    {
      id: 62,
      type: "multi",
      difficulty: 2,
      question: "Which actions can a provider perform on a share after it has been created? (Select all that apply)",
      options: ["Add new consumer accounts to the share", "Remove consumer accounts from the share", "Add additional tables or secure views to the share", "Transfer ownership of the shared data to the consumer"],
      correct: [0, 1, 2],
      concept: "Providers have full control over their shares. They can add/remove consumer accounts using ALTER SHARE, and add/remove objects using GRANT/REVOKE statements. However, they cannot transfer ownership of the shared data to consumers — shared data always remains in the provider\'s account."
    },
    {
      id: 63,
      type: "multi",
      difficulty: 2,
      question: "Which of the following can invalidate or break a consumer\'s shared database? (Select all that apply)",
      options: ["Provider drops the underlying share object", "Provider removes the consumer\'s account from the share", "Consumer\'s warehouse is suspended", "Provider drops the source database"],
      correct: [0, 1, 3],
      concept: "A consumer\'s shared database breaks if the provider drops the share, removes the consumer from the share, or drops the source database. A suspended consumer warehouse does not break the shared database — it only means the consumer temporarily cannot run queries until the warehouse is resumed."
    },
    {
      id: 64,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are characteristics of a Data Exchange? (Select all that apply)",
      options: ["It is a private, invitation-only data sharing hub", "It uses Snowflake\'s zero-copy sharing technology", "It requires all members to be in the same cloud region", "It has a designated admin who manages membership"],
      correct: [0, 1, 3],
      concept: "A Data Exchange is private and invitation-only, uses Snowflake\'s zero-copy sharing, and has a designated admin. Members do NOT need to be in the same region — cross-region participation is supported (though cross-region sharing requires replication)."
    },
    {
      id: 65,
      type: "multi",
      difficulty: 2,
      question: "What are the responsibilities of a Data Exchange admin? (Select all that apply)",
      options: ["Approving and managing member accounts", "Setting pricing for all paid listings", "Managing and curating listings in the exchange", "Monitoring exchange usage and activity"],
      correct: [0, 2, 3],
      concept: "The Data Exchange admin manages membership, curates listings, and monitors usage. However, pricing for paid listings is set by the individual data providers, not the exchange admin. Each provider determines their own commercial terms for their listings."
    },
    {
      id: 66,
      type: "multi",
      difficulty: 2,
      question: "Which of the following statements about Data Exchange listings are correct? (Select all that apply)",
      options: ["A listing can be associated with only one share", "Multiple consumers can subscribe to the same listing", "Listings include metadata like descriptions and sample queries", "A provider can update a listing\'s underlying data without consumer action"],
      correct: [1, 2, 3],
      concept: "Multiple consumers can subscribe to the same listing, listings include rich metadata, and providers can update data seamlessly. A listing is not necessarily limited to one share — the configuration depends on the listing type and setup."
    },
    {
      id: 67,
      type: "multi",
      difficulty: 2,
      question: "Which listing types are available on the Snowflake Marketplace? (Select all that apply)",
      options: ["Free listings", "Personalized listings", "Paid listings", "Auction-based listings"],
      correct: [0, 1, 2],
      concept: "The Snowflake Marketplace supports three listing types: Free (immediate access at no cost), Personalized (requires provider approval, may be customized), and Paid (requires payment). There is no auction-based listing type in the Snowflake Marketplace."
    },
    {
      id: 68,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are benefits of using the Snowflake Marketplace? (Select all that apply)",
      options: ["Eliminates the need for ETL pipelines for shared data", "Provides always up-to-date data from providers", "Guarantees data quality through automated validation", "Enables data discovery across multiple providers"],
      correct: [0, 1, 3],
      concept: "The Marketplace eliminates ETL for shared data (zero-copy), provides live up-to-date data, and enables discovery across providers. However, Snowflake does NOT guarantee data quality — quality assurance is the responsibility of the data provider."
    },
    {
      id: 69,
      type: "multi",
      difficulty: 2,
      question: "What must a consumer do to use a free listing from the Snowflake Marketplace? (Select all that apply)",
      options: ["Click \'Get\' to accept the listing", "Create a database from the listing in their account", "Have a running virtual warehouse to query the data", "Sign a separate data license agreement with the provider"],
      correct: [0, 1, 2],
      concept: "To use a free listing, a consumer clicks \'Get\', which creates a database from the share in their account. They then need a running warehouse to query the data. A separate license agreement is typically not required for free listings — the terms are accepted when clicking \'Get\'."
    },
    {
      id: 70,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are limitations of reader accounts? (Select all that apply)",
      options: ["Cannot load data into local tables", "Cannot access shares from other providers", "Cannot use Snowflake\'s web interface", "Compute costs are billed to the provider"],
      correct: [0, 1, 3],
      concept: "Reader accounts cannot load data, can only access shares from their creating provider, and all costs are billed to the provider. However, reader accounts CAN use Snowflake\'s web interface (Snowsight) to run queries and view data."
    },
    {
      id: 71,
      type: "multi",
      difficulty: 2,
      question: "Which of the following can the admin of a reader account do? (Select all that apply)",
      options: ["Create additional user accounts in the reader account", "Create virtual warehouses for querying", "Create new databases independent of shares", "Grant roles to users within the reader account"],
      correct: [0, 1, 3],
      concept: "The reader account admin can create users, create warehouses, and manage roles and privileges within the reader account. However, reader accounts cannot create new databases independently — they can only create databases from shares provided by the parent provider account."
    },
    {
      id: 72,
      type: "multi",
      difficulty: 2,
      question: "What controls does a provider have over a reader account they created? (Select all that apply)",
      options: ["Suspend or resume the reader account", "Drop the reader account entirely", "View the reader account\'s query history", "Modify the reader account\'s warehouse size"],
      correct: [0, 1],
      concept: "Providers can suspend, resume, and drop reader accounts they created. However, they cannot directly view the reader account\'s query history or modify its warehouse configurations — these actions are performed within the reader account itself by its admin."
    },
    {
      id: 73,
      type: "multi",
      difficulty: 2,
      question: "Which of the following object types can be added to a Snowflake share? (Select all that apply)",
      options: ["Tables", "Secure views", "Secure UDFs", "Stored procedures"],
      correct: [0, 1, 2],
      concept: "Shares can include tables, secure views, and secure UDFs. Stored procedures cannot be added to shares. The requirement for views and UDFs to be secure ensures that the provider\'s underlying logic and table structures are not exposed to consumers."
    },
    {
      id: 74,
      type: "multi",
      difficulty: 2,
      question: "Which privileges must be granted to a share for a consumer to access a table? (Select all that apply)",
      options: ["USAGE on the database", "USAGE on the schema", "SELECT on the table", "OWNERSHIP on the table"],
      correct: [0, 1, 2],
      concept: "Three privileges are required in hierarchical order: USAGE on the database, USAGE on the schema, and SELECT on the table. OWNERSHIP cannot and should not be granted to a share — the provider retains ownership of all shared objects."
    },
    {
      id: 75,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are true about secure views used in shares? (Select all that apply)",
      options: ["The view definition is hidden from consumers", "The query optimizer may bypass the view\'s WHERE clause for performance", "They can reference tables not explicitly granted to the share", "They can use CURRENT_ACCOUNT() for multi-tenant filtering"],
      correct: [0, 2, 3],
      concept: "Secure views hide their definition from consumers, can reference tables not in the share, and can use CURRENT_ACCOUNT() for filtering. Unlike regular views, the optimizer does NOT bypass the secure view\'s WHERE clause — this is a key security feature that prevents data leakage through optimization."
    },
    {
      id: 76,
      type: "multi",
      difficulty: 3,
      question: "A provider wants to implement row-level security in shared data. Which approaches are valid? (Select all that apply)",
      options: ["Using CURRENT_ACCOUNT() in a secure view WHERE clause", "Creating a mapping table that maps account names to allowed data", "Using row access policies directly on shared tables", "Creating separate shares with filtered tables for each consumer"],
      correct: [0, 1, 3],
      concept: "Row-level security for shared data can be achieved through secure views with CURRENT_ACCOUNT() filtering, mapping tables, or separate shares per consumer. Row access policies on the shared table itself may not work as expected for shared consumers because the policy evaluates in the consumer\'s context."
    },
    {
      id: 77,
      type: "multi",
      difficulty: 3,
      question: "Which of the following scenarios require database replication for data sharing? (Select all that apply)",
      options: ["Sharing between two accounts in the same AWS region", "Sharing between an AWS account and an Azure account", "Sharing between two accounts in different AWS regions", "Sharing between two accounts on the same Azure region but different Snowflake editions"],
      correct: [1, 2],
      concept: "Database replication is required for cross-region sharing (option C) and cross-cloud sharing (option B). Sharing within the same region (options A and D) uses zero-copy sharing directly without replication, regardless of the Snowflake editions involved."
    },
    {
      id: 78,
      type: "multi",
      difficulty: 3,
      question: "A Data Exchange admin needs to ensure compliance. Which capabilities help with this goal? (Select all that apply)",
      options: ["Monitoring member access patterns and listing usage", "Restricting membership to vetted organizations only", "Automatically scanning shared data for PII", "Removing members who violate exchange policies"],
      correct: [0, 1, 3],
      concept: "Exchange admins can monitor usage, control membership through an invitation-only model, and remove non-compliant members. However, Snowflake Data Exchange does not automatically scan shared data for PII — data governance and compliance for the data content is the responsibility of the provider."
    },
    {
      id: 79,
      type: "multi",
      difficulty: 3,
      question: "Which of the following are valid strategies for cross-region data sharing via a Data Exchange? (Select all that apply)",
      options: ["Configure database replication to the consumer\'s region", "Use auto-fulfillment for Marketplace listings", "Create a separate share in each target region", "Use external tables with cross-region cloud storage access"],
      correct: [0, 1, 2],
      concept: "Cross-region sharing requires replication. Valid strategies include database replication, auto-fulfillment (which automates replication for Marketplace listings), and creating separate regional shares. External tables with cross-region storage are not a standard sharing mechanism and would have latency/cost issues."
    },
    {
      id: 80,
      type: "multi",
      difficulty: 3,
      question: "A provider lists a paid data product on the Marketplace. Which of the following are true? (Select all that apply)",
      options: ["Snowflake handles billing and payment processing", "The provider must use a separate payment system", "The provider sets the pricing and commercial terms", "Consumers are charged through their Snowflake invoice"],
      correct: [0, 2, 3],
      concept: "For paid Marketplace listings, Snowflake handles the billing infrastructure. The provider sets pricing terms, and consumers are charged through their regular Snowflake invoice. The provider does NOT need a separate payment system — Snowflake acts as the payment intermediary."
    },
    {
      id: 81,
      type: "multi",
      difficulty: 3,
      question: "Which of the following conditions must be met for a Marketplace listing to use auto-fulfillment? (Select all that apply)",
      options: ["The provider must have replication enabled for the source database", "The listing must be a free or paid listing type", "The provider\'s account must be on Business Critical edition", "The target consumer region must be supported by auto-fulfillment"],
      correct: [0, 3],
      concept: "Auto-fulfillment requires the provider to enable replication for the source database and the target region must be supported. Auto-fulfillment works with various listing types and does not require Business Critical edition specifically — it depends on the replication and region support configurations."
    },
    {
      id: 82,
      type: "multi",
      difficulty: 3,
      question: "A provider creates a reader account. Which of the following best practices should they follow? (Select all that apply)",
      options: ["Set up resource monitors to control compute costs", "Use the smallest warehouse size needed for consumer queries", "Configure auto-suspend on the reader account\'s warehouse", "Enable multi-cluster warehouses for all reader accounts"],
      correct: [0, 1, 2],
      concept: "Best practices for reader accounts include resource monitors (cost control), right-sized warehouses (cost efficiency), and auto-suspend (prevent idle charges). Multi-cluster warehouses are typically unnecessary for reader accounts and would increase costs without proportional benefit for most use cases."
    },
    {
      id: 83,
      type: "multi",
      difficulty: 3,
      question: "Which of the following are differences between reader accounts and full Snowflake accounts? (Select all that apply)",
      options: ["Reader accounts cannot load their own data", "Reader accounts cannot use Snowflake Partner Connect", "Reader accounts can only access shares from their creating provider", "Reader accounts do not support multi-factor authentication"],
      correct: [0, 1, 2],
      concept: "Reader accounts have several limitations: they cannot load data, cannot use Partner Connect, and are restricted to shares from their creating provider. However, reader accounts DO support multi-factor authentication (MFA) for security purposes."
    },
    {
      id: 84,
      type: "multi",
      difficulty: 3,
      question: "A provider wants to share a secure view that uses CURRENT_ACCOUNT() for row filtering. Which considerations apply? (Select all that apply)",
      options: ["The mapping table used for filtering should also be in the same share database", "The view must be defined as a secure view, not a regular view", "CURRENT_ACCOUNT() returns the consumer\'s account name when queried by the consumer", "The view will show all rows when queried by the provider"],
      correct: [0, 1, 2, 3],
      concept: "All statements are true. The mapping table should be in the same database (shares are single-database), the view must be secure for sharing, CURRENT_ACCOUNT() returns the querying account\'s name, and since the provider\'s account name may not match mapping entries, queries by the provider would show all rows (or filtered differently)."
    },
    {
      id: 85,
      type: "multi",
      difficulty: 3,
      question: "Which of the following are true about sharing dynamic tables and materialized views? (Select all that apply)",
      options: ["Dynamic tables can be shared directly in a share", "Materialized views cannot be shared but their base tables can", "Sharing a materialized view shares the precomputed results", "The consumer sees query results from the underlying base table, not the materialized view"],
      correct: [0],
      concept: "Dynamic tables can be shared directly in a Snowflake share. Materialized views have specific sharing considerations — they generally cannot be directly shared in the same way. When sharing, the focus is typically on sharing base tables or secure views rather than materialized views."
    },
    {
      id: 86,
      type: "tf",
      difficulty: 3,
      question: "In Snowflake Secure Data Sharing, data is physically copied from the provider\'s storage to the consumer\'s storage when a share is mounted.",
      options: ["True — data is replicated to the consumer\'s storage for performance optimization", "False — no data is copied; consumers access the provider\'s data in place via Snowflake\'s services layer"],
      correct: [1],
      concept: "This is false. Snowflake Secure Data Sharing uses a zero-copy architecture where no data is physically copied or moved. Consumers access the shared data directly through Snowflake\'s services layer, which reads from the provider\'s storage. This eliminates data duplication and ensures consumers always see the latest data."
    },
    {
      id: 87,
      type: "tf",
      difficulty: 3,
      question: "A consumer can use the CLONE command on a table within a shared database to create a writable copy.",
      options: ["True — cloning a shared table creates an independent writable copy in the consumer\'s account", "False — shared databases are read-only and cloning operations are not permitted on shared objects"],
      correct: [1],
      concept: "This is false. Shared databases and their objects are read-only. Consumers cannot clone, modify, or perform any DDL/DML operations on shared objects. If a consumer needs a writable copy, they must copy the data into their own tables using CREATE TABLE AS SELECT (CTAS)."
    },
    {
      id: 88,
      type: "tf",
      difficulty: 3,
      question: "When a provider adds a new table to a share, the consumer must drop and recreate their shared database to see the new table.",
      options: ["True — shared database schema changes require the consumer to recreate the database", "False — schema changes like new tables appear automatically in the consumer\'s shared database"],
      correct: [1],
      concept: "This is false. When a provider adds new tables to a share (by granting SELECT), the new tables automatically appear in the consumer\'s shared database. The consumer does not need to take any action — the changes are reflected immediately because the shared database is a live reference."
    },
    {
      id: 89,
      type: "tf",
      difficulty: 3,
      question: "A single Data Exchange can include members from multiple cloud providers (e.g., AWS and Azure accounts).",
      options: ["True — Data Exchange supports cross-cloud membership with replication handling cross-region data access", "False — all members of a Data Exchange must be on the same cloud provider"],
      correct: [0],
      concept: "This is true. A Data Exchange can include members from different cloud providers and regions. Cross-cloud data sharing is supported through database replication, which ensures that shared data is accessible regardless of the member\'s cloud platform or region."
    },
    {
      id: 90,
      type: "tf",
      difficulty: 3,
      question: "The Data Exchange admin can view the actual content of all data shared through listings in the exchange.",
      options: ["True — the admin has read access to all data shared through exchange listings", "False — the admin manages membership and listings but does not have access to the actual shared data"],
      correct: [1],
      concept: "This is false. The Data Exchange admin manages the exchange infrastructure (membership, listings, monitoring) but does not have automatic access to the actual data within listings. Data access is controlled by the individual providers through their share permissions."
    },
    {
      id: 91,
      type: "tf",
      difficulty: 3,
      question: "A Data Exchange listing can only be associated with a single share object.",
      options: ["True — each listing maps to exactly one share object for clarity and access control", "False — a listing can be backed by multiple shares to cover different data sets"],
      correct: [0],
      concept: "This is true. A Data Exchange listing is typically associated with a single share object. Each listing maps to one share, which provides clear access control and data management. If a provider wants to share multiple data sets, they typically create separate listings."
    },
    {
      id: 92,
      type: "tf",
      difficulty: 3,
      question: "The Snowflake Marketplace is only available to customers on the Enterprise edition or higher.",
      options: ["True — Standard edition accounts cannot access the Marketplace", "False — the Snowflake Marketplace is available to all Snowflake editions"],
      correct: [1],
      concept: "This is false. The Snowflake Marketplace is available to all Snowflake editions, including Standard. Any Snowflake customer can browse, discover, and access listings on the Marketplace. Some provider features may have edition requirements, but basic consumer access is universal."
    },
    {
      id: 93,
      type: "tf",
      difficulty: 3,
      question: "A consumer accessing a free Marketplace listing still pays for the compute resources used to query the shared data.",
      options: ["True — the data is free but the consumer pays for their own warehouse compute to query it", "False — free listings include complimentary compute credits for querying"],
      correct: [0],
      concept: "This is true. While the data itself is free (no licensing cost), the consumer still pays for the compute resources (virtual warehouse) they use to query the shared data. This is a fundamental aspect of Snowflake\'s separation of storage and compute — data access is free but computation has a cost."
    },
    {
      id: 94,
      type: "tf",
      difficulty: 3,
      question: "Paid Marketplace listings require the provider to build and maintain their own payment processing infrastructure.",
      options: ["True — providers must integrate their own billing system for paid listings", "False — Snowflake handles the billing and payment processing for paid Marketplace listings"],
      correct: [1],
      concept: "This is false. Snowflake handles billing and payment processing for paid Marketplace listings. Consumers are charged through their regular Snowflake invoice, and providers receive payments through Snowflake. This simplifies the commercialization of data products for providers."
    },
    {
      id: 95,
      type: "tf",
      difficulty: 3,
      question: "A reader account can create its own databases for storing data independently of shared data.",
      options: ["True — reader accounts can create databases and load their own data", "False — reader accounts can only create databases from shares and cannot load their own data"],
      correct: [1],
      concept: "This is false. Reader accounts are restricted and cannot create independent databases or load their own data. They can only create databases from shares provided by the parent provider account. This limitation is by design — reader accounts are meant solely for consuming shared data."
    },
    {
      id: 96,
      type: "tf",
      difficulty: 3,
      question: "If a provider drops and recreates a reader account, the previous reader account users automatically regain access.",
      options: ["True — user credentials persist across reader account recreation", "False — a new reader account is entirely separate, and previous users must be reconfigured"],
      correct: [1],
      concept: "This is false. If a reader account is dropped and recreated, it is an entirely new account. Previous users, roles, warehouses, and configurations are lost. The admin must reconfigure everything from scratch, including creating users and setting up access to shares."
    },
    {
      id: 97,
      type: "tf",
      difficulty: 3,
      question: "Reader accounts can connect to Snowflake using standard JDBC and ODBC drivers.",
      options: ["True — reader accounts support all standard Snowflake connectors including JDBC and ODBC", "False — reader accounts can only be accessed through the Snowflake web interface"],
      correct: [0],
      concept: "This is true. Reader accounts support all standard Snowflake connection methods, including JDBC, ODBC, Python connector, and the Snowflake web interface (Snowsight). Users of reader accounts can use any supported client or tool to connect and query shared data."
    },
    {
      id: 98,
      type: "tf",
      difficulty: 3,
      question: "A regular (non-secure) UDF can be added to a Snowflake share.",
      options: ["True — any UDF can be shared regardless of whether it is secure", "False — only secure UDFs can be included in a share to protect the function logic"],
      correct: [1],
      concept: "This is false. Only secure UDFs can be added to a Snowflake share. Non-secure UDFs expose their internal logic and definition, which could reveal proprietary business logic to consumers. Secure UDFs hide this information, making them safe for sharing."
    },
    {
      id: 99,
      type: "tf",
      difficulty: 3,
      question: "A share can include objects from multiple schemas within the same database.",
      options: ["True — a share can include objects from multiple schemas as long as they are in the same database", "False — a share is limited to objects from a single schema within a database"],
      correct: [0],
      concept: "This is true. A share can include objects from multiple schemas within the same database. The provider must grant USAGE on each schema to the share, then grant SELECT on the individual objects. The restriction is that all objects must be in the same database, not the same schema."
    },
    {
      id: 100,
      type: "tf",
      difficulty: 3,
      question: "When a consumer queries a shared table, the query runs on the provider\'s virtual warehouse.",
      options: ["True — shared data queries execute on the provider\'s compute resources", "False — shared data queries execute on the consumer\'s own virtual warehouse"],
      correct: [1],
      concept: "This is false. When a consumer queries shared data, the query executes on the consumer\'s own virtual warehouse. The consumer pays for the compute costs. The provider\'s warehouse is not involved in consumer queries — only the provider\'s storage is accessed to read the shared data."
    }
  ]
};

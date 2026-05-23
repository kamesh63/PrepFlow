window.QUIZ_DATA = window.QUIZ_DATA || {};
window.QUIZ_DATA["day26"] = {
  title: "Virtual Warehouses",
  topics: ["Warehouse Sizing", "Multi-cluster Warehouses", "Auto-suspend & Resume", "Cost Optimization", "Resource Monitors"],
  questions: [
    {
      id: 1,
      type: "single",
      difficulty: 1,
      question: "How many servers (nodes) does an X-Small (XS) virtual warehouse have in Snowflake?",
      options: ["1 server", "2 servers", "4 servers", "8 servers"],
      correct: [0],
      concept: "An X-Small warehouse has 1 server (node). The sizing follows a doubling pattern: XS=1, S=2, M=4, L=8, XL=16, 2XL=32, 3XL=64, 4XL=128. Each increase in size doubles the number of servers and the corresponding credit consumption per hour."
    },
    {
      id: 2,
      type: "single",
      difficulty: 1,
      question: "How many credits per hour does a Small (S) virtual warehouse consume?",
      options: ["1 credit per hour", "2 credits per hour", "4 credits per hour", "8 credits per hour"],
      correct: [1],
      concept: "A Small warehouse consumes 2 credits per hour. Credit consumption doubles with each size increase: XS=1, S=2, M=4, L=8, XL=16. Credits are billed per second with a 60-second minimum when the warehouse is running."
    },
    {
      id: 3,
      type: "single",
      difficulty: 1,
      question: "What is the credit consumption rate for a Medium (M) warehouse per hour?",
      options: ["2 credits", "4 credits", "8 credits", "16 credits"],
      correct: [1],
      concept: "A Medium warehouse consumes 4 credits per hour (4 servers). The doubling pattern continues: XS=1 credit, S=2 credits, M=4 credits, L=8 credits, XL=16 credits. The cost is directly proportional to the number of servers in the warehouse."
    },
    {
      id: 4,
      type: "single",
      difficulty: 1,
      question: "A Large (L) warehouse has how many servers?",
      options: ["4 servers", "8 servers", "16 servers", "32 servers"],
      correct: [1],
      concept: "A Large warehouse has 8 servers. The server count doubles with each size: XS=1, S=2, M=4, L=8, XL=16, 2XL=32, 3XL=64, 4XL=128. More servers provide more compute power for processing queries."
    },
    {
      id: 5,
      type: "single",
      difficulty: 1,
      question: "What is the smallest available warehouse size in Snowflake?",
      options: ["Nano", "Micro", "X-Small", "Small"],
      correct: [2],
      concept: "X-Small (XS) is the smallest available warehouse size in Snowflake. It has 1 server and consumes 1 credit per hour. There is no Nano or Micro size. X-Small is suitable for simple queries, development, and testing workloads."
    },
    {
      id: 6,
      type: "single",
      difficulty: 1,
      question: "If doubling warehouse size from Small to Medium does not halve query execution time, what type of scaling is this an example of?",
      options: ["Linear scaling", "Non-linear scaling", "Inverse scaling", "Exponential scaling"],
      correct: [1],
      concept: "Non-linear scaling occurs when doubling the warehouse size does not proportionally reduce query time. Not all queries benefit equally from more compute resources. Factors like data scanning patterns, join complexity, and data distribution can cause non-linear scaling behavior."
    },
    {
      id: 7,
      type: "single",
      difficulty: 1,
      question: "An XL warehouse consumes how many credits per hour?",
      options: ["8 credits", "12 credits", "16 credits", "32 credits"],
      correct: [2],
      concept: "An XL warehouse consumes 16 credits per hour (16 servers). The credit rate doubles with each size: XS=1, S=2, M=4, L=8, XL=16. Understanding credit rates is essential for cost management and for selecting the appropriate warehouse size for workloads."
    },
    {
      id: 8,
      type: "single",
      difficulty: 1,
      question: "What is the primary purpose of a multi-cluster warehouse in Snowflake?",
      options: ["To run queries across multiple databases simultaneously", "To handle concurrency by scaling out additional clusters of servers", "To replicate data across multiple regions for high availability", "To combine compute from multiple warehouses into a single pool"],
      correct: [1],
      concept: "Multi-cluster warehouses handle concurrency by automatically scaling out (adding) additional clusters when query demand increases. Each cluster is a full copy of the warehouse. This helps prevent query queuing during peak usage periods while maintaining performance."
    },
    {
      id: 9,
      type: "single",
      difficulty: 1,
      question: "In multi-cluster warehouse configuration, what does the MAX_CLUSTER_COUNT parameter control?",
      options: ["The maximum number of queries that can run concurrently", "The maximum number of clusters the warehouse can scale out to", "The maximum number of servers per cluster", "The maximum credit budget for the warehouse"],
      correct: [1],
      concept: "MAX_CLUSTER_COUNT defines the maximum number of clusters a multi-cluster warehouse can scale out to. For example, if MAX_CLUSTER_COUNT=3 and the warehouse is size Medium, the warehouse can have up to 3 Medium clusters running simultaneously during peak demand."
    },
    {
      id: 10,
      type: "single",
      difficulty: 1,
      question: "What does MIN_CLUSTER_COUNT represent in a multi-cluster warehouse?",
      options: ["The minimum number of queries before scaling occurs", "The minimum number of clusters always running", "The minimum warehouse size for multi-cluster mode", "The minimum credit quota per cluster"],
      correct: [1],
      concept: "MIN_CLUSTER_COUNT defines the minimum number of clusters that are always running for the multi-cluster warehouse. This ensures a baseline level of compute capacity is always available. If MIN_CLUSTER_COUNT equals MAX_CLUSTER_COUNT, the warehouse runs in Maximized mode."
    },
    {
      id: 11,
      type: "single",
      difficulty: 1,
      question: "What is the default auto-suspend timer for a Snowflake virtual warehouse?",
      options: ["60 seconds", "300 seconds (5 minutes)", "600 seconds (10 minutes)", "3600 seconds (1 hour)"],
      correct: [2],
      concept: "The default auto-suspend timer for a Snowflake warehouse is 600 seconds (10 minutes). After 10 minutes of inactivity (no running queries), the warehouse is automatically suspended to stop credit consumption. This timer can be modified using ALTER WAREHOUSE."
    },
    {
      id: 12,
      type: "single",
      difficulty: 1,
      question: "What happens when a suspended warehouse receives a new query and auto-resume is enabled?",
      options: ["The query fails with an error message", "The warehouse automatically resumes and processes the query", "The query is queued until the warehouse is manually resumed", "The query is routed to a different active warehouse"],
      correct: [1],
      concept: "When auto-resume is enabled (which is the default), a suspended warehouse automatically starts when a new query is submitted. There may be a brief delay while the warehouse provisions its compute resources, but the query will be processed without manual intervention."
    },
    {
      id: 13,
      type: "single",
      difficulty: 1,
      question: "What is auto-suspend behavior designed to optimize?",
      options: ["Query performance during peak hours", "Storage costs for unused data", "Compute costs by stopping idle warehouses", "Network bandwidth between client and server"],
      correct: [2],
      concept: "Auto-suspend is designed to optimize compute costs by automatically suspending (stopping) warehouses after a period of inactivity. Since warehouses consume credits only when running, suspending idle warehouses prevents unnecessary credit consumption."
    },
    {
      id: 14,
      type: "single",
      difficulty: 1,
      question: "Which of the following is a basic cost optimization strategy for Snowflake warehouses?",
      options: ["Always use the largest warehouse size for maximum performance", "Set auto-suspend to 0 to keep warehouses always running", "Right-size warehouses to match workload requirements", "Disable auto-resume to prevent unexpected compute usage"],
      correct: [2],
      concept: "Right-sizing warehouses — choosing the appropriate size for each workload — is a fundamental cost optimization strategy. Using a warehouse that is too large wastes credits on unused capacity, while one that is too small may lead to slow queries and inefficient processing."
    },
    {
      id: 15,
      type: "single",
      difficulty: 1,
      question: "What is a resource monitor in Snowflake?",
      options: ["A dashboard for viewing warehouse query performance", "An object that tracks and controls credit usage for warehouses or accounts", "A tool for monitoring storage utilization across databases", "A service that monitors network latency between clients and Snowflake"],
      correct: [1],
      concept: "A resource monitor is a Snowflake object that tracks credit usage and can trigger actions (notifications, suspension) when credit thresholds are reached. Resource monitors can be set at the account level or assigned to individual warehouses to control spending."
    },
    {
      id: 16,
      type: "single",
      difficulty: 1,
      question: "Which trigger action on a resource monitor sends an alert but does not stop the warehouse?",
      options: ["SUSPEND", "SUSPEND_IMMEDIATELY", "NOTIFY", "ALERT"],
      correct: [2],
      concept: "The NOTIFY trigger action sends a notification (email alert) to account administrators when the credit threshold is reached but does not stop or suspend any warehouses. This allows administrators to be aware of credit consumption trends without disrupting running workloads."
    },
    {
      id: 17,
      type: "single",
      difficulty: 1,
      question: "What is the difference between the SUSPEND and SUSPEND_IMMEDIATELY trigger actions on a resource monitor?",
      options: ["SUSPEND stops after current queries finish; SUSPEND_IMMEDIATELY cancels all running queries", "SUSPEND sends a warning; SUSPEND_IMMEDIATELY sends an error", "SUSPEND stops new queries; SUSPEND_IMMEDIATELY stops the warehouse service", "There is no difference; both actions behave identically"],
      correct: [0],
      concept: "SUSPEND allows currently running queries to complete before suspending the warehouse and prevents new queries from starting. SUSPEND_IMMEDIATELY cancels all running queries immediately and suspends the warehouse. This distinction is important for balancing cost control with query completion."
    },
    {
      id: 18,
      type: "single",
      difficulty: 1,
      question: "At what level can a resource monitor be applied?",
      options: ["Only at the database level", "Only at the warehouse level", "At both the account and warehouse levels", "Only at the account level"],
      correct: [2],
      concept: "Resource monitors can be applied at two levels: account level (monitoring total credit usage across the entire account) and warehouse level (monitoring credit usage for a specific warehouse). Account-level monitors provide overall spending control, while warehouse-level monitors allow granular cost management."
    },
    {
      id: 19,
      type: "single",
      difficulty: 1,
      question: "What parameter defines the credit spending limit for a resource monitor?",
      options: ["CREDIT_LIMIT", "CREDIT_QUOTA", "MAX_CREDITS", "SPENDING_LIMIT"],
      correct: [1],
      concept: "The CREDIT_QUOTA parameter defines the maximum number of credits that can be consumed within the monitor\'s interval. When credit usage reaches the specified percentage of the CREDIT_QUOTA, the configured trigger actions (NOTIFY, SUSPEND, SUSPEND_IMMEDIATELY) are executed."
    },
    {
      id: 20,
      type: "single",
      difficulty: 1,
      question: "Who can create resource monitors in Snowflake?",
      options: ["Any user with a warehouse", "Only the SYSADMIN role", "Only the ACCOUNTADMIN role", "Any user with the CREATE RESOURCE MONITOR privilege"],
      correct: [2],
      concept: "Only users with the ACCOUNTADMIN role (or a role with the CREATE RESOURCE MONITOR privilege granted by ACCOUNTADMIN) can create resource monitors. This restriction ensures that spending controls are managed at the appropriate administrative level."
    },
    {
      id: 21,
      type: "single",
      difficulty: 1,
      question: "What is the minimum billing time when a warehouse starts running in Snowflake?",
      options: ["1 second", "30 seconds", "60 seconds", "600 seconds"],
      correct: [2],
      concept: "When a warehouse starts (or resumes), Snowflake charges a minimum of 60 seconds (1 minute). After the first 60 seconds, billing continues on a per-second basis. This means frequent start/stop cycles can be costly due to the 60-second minimum charge each time."
    },
    {
      id: 22,
      type: "single",
      difficulty: 1,
      question: "What is the 4X-Large (4XL) warehouse server count?",
      options: ["64 servers", "96 servers", "128 servers", "256 servers"],
      correct: [2],
      concept: "A 4XL warehouse has 128 servers and consumes 128 credits per hour. The full sizing scale is: XS=1, S=2, M=4, L=8, XL=16, 2XL=32, 3XL=64, 4XL=128. The 4XL size is suitable for extremely large and complex workloads requiring massive parallel processing."
    },
    {
      id: 23,
      type: "single",
      difficulty: 1,
      question: "Which Snowflake view tracks historical warehouse credit consumption?",
      options: ["SNOWFLAKE.ACCOUNT_USAGE.QUERY_HISTORY", "SNOWFLAKE.ACCOUNT_USAGE.WAREHOUSE_METERING_HISTORY", "SNOWFLAKE.ACCOUNT_USAGE.WAREHOUSE_LOAD_HISTORY", "SNOWFLAKE.INFORMATION_SCHEMA.WAREHOUSES"],
      correct: [1],
      concept: "The WAREHOUSE_METERING_HISTORY view in the SNOWFLAKE.ACCOUNT_USAGE schema tracks historical credit consumption for warehouses. It provides information about credits used by each warehouse over time, which is essential for cost analysis and optimization."
    },
    {
      id: 24,
      type: "single",
      difficulty: 1,
      question: "What does the auto-resume setting control?",
      options: ["Whether the warehouse automatically increases in size during heavy loads", "Whether the warehouse automatically starts when a query is submitted to it", "Whether the warehouse automatically resumes after a system failure", "Whether the warehouse automatically scales to multi-cluster mode"],
      correct: [1],
      concept: "Auto-resume controls whether a suspended warehouse automatically starts (resumes) when a new query is submitted. When enabled (default), queries trigger the warehouse to resume. When disabled, the warehouse must be manually started with ALTER WAREHOUSE ... RESUME before queries can run."
    },
    {
      id: 25,
      type: "single",
      difficulty: 1,
      question: "Can a warehouse be created with auto-suspend disabled?",
      options: ["No, auto-suspend is mandatory for all warehouses", "Yes, by setting AUTO_SUSPEND = NULL or 0", "Yes, but only for Enterprise edition accounts", "No, the minimum auto-suspend is 60 seconds"],
      correct: [1],
      concept: "Auto-suspend can be disabled by setting AUTO_SUSPEND to NULL (or 0 in some contexts), meaning the warehouse will run indefinitely until manually suspended. This is generally not recommended due to cost implications but may be useful for warehouses with constant query demand."
    },
    {
      id: 26,
      type: "single",
      difficulty: 1,
      question: "What is the credit consumption for a 2X-Large (2XL) warehouse per hour?",
      options: ["16 credits", "24 credits", "32 credits", "64 credits"],
      correct: [2],
      concept: "A 2XL warehouse consumes 32 credits per hour (32 servers). Following the doubling pattern: XS=1, S=2, M=4, L=8, XL=16, 2XL=32. The credit rate is always equal to the number of servers in the warehouse cluster."
    },
    {
      id: 27,
      type: "single",
      difficulty: 1,
      question: "Which statement about warehouse sizing and query performance is generally true?",
      options: ["Doubling warehouse size always halves query execution time", "Larger warehouses improve performance for complex queries but may not help simple queries", "Warehouse size has no impact on query performance, only concurrency", "Smaller warehouses are always more cost-effective regardless of the query"],
      correct: [1],
      concept: "Larger warehouses generally improve performance for complex queries involving large scans, joins, and aggregations. However, simple queries that scan small amounts of data may not benefit from additional compute resources. This is why scaling is often non-linear — the benefit depends on the workload."
    },
    {
      id: 28,
      type: "single",
      difficulty: 1,
      question: "What is the purpose of the INITIALLY_SUSPENDED property when creating a warehouse?",
      options: ["It creates the warehouse in a suspended state, not consuming credits", "It creates the warehouse with auto-suspend initially disabled", "It suspends all queries for the first 60 seconds after creation", "It sets the warehouse to maintenance mode after creation"],
      correct: [0],
      concept: "The INITIALLY_SUSPENDED property (default is FALSE for some creation methods) creates a warehouse in a suspended state. This means the warehouse does not start consuming credits immediately upon creation. It will only start consuming credits when it is explicitly resumed or when auto-resume triggers it."
    },
    {
      id: 29,
      type: "single",
      difficulty: 1,
      question: "What is the interval at which Snowflake warehouses are billed after the initial 60-second minimum?",
      options: ["Per minute", "Per second", "Per 10 seconds", "Per 5 minutes"],
      correct: [1],
      concept: "After the initial 60-second minimum charge, warehouses are billed on a per-second basis. This granular billing model means that even if a warehouse runs for 65 seconds, you are charged for exactly 65 seconds (not rounded up to 2 minutes)."
    },
    {
      id: 30,
      type: "single",
      difficulty: 1,
      question: "What does the term \'right-sizing\' mean in the context of warehouse optimization?",
      options: ["Using the maximum warehouse size for all workloads to ensure performance", "Selecting the smallest warehouse size that meets the performance requirements", "Automatically adjusting warehouse size based on query volume", "Configuring the same warehouse size across all accounts for consistency"],
      correct: [1],
      concept: "Right-sizing means selecting the smallest warehouse size that adequately meets the performance requirements of the workload. This balances cost and performance — avoiding oversized warehouses that waste credits and undersized warehouses that lead to poor query performance."
    },
    {
      id: 31,
      type: "single",
      difficulty: 1,
      question: "Which multi-cluster mode keeps all clusters running at all times?",
      options: ["Auto-scale mode", "Maximized mode", "Economy mode", "Standard mode"],
      correct: [1],
      concept: "Maximized mode keeps all clusters (from MIN to MAX cluster count, which are set to the same value) running at all times regardless of the query load. This provides maximum concurrency but at higher cost. It is the opposite of auto-scale mode, which dynamically adds/removes clusters based on demand."
    },
    {
      id: 32,
      type: "single",
      difficulty: 1,
      question: "In auto-scale mode, when does Snowflake add additional clusters to a multi-cluster warehouse?",
      options: ["When storage usage exceeds a threshold", "When query load exceeds what the current clusters can handle", "At scheduled times configured by the administrator", "When the warehouse size needs to be increased"],
      correct: [1],
      concept: "In auto-scale mode, Snowflake automatically adds clusters when the query load (number of concurrent queries) exceeds the capacity of the currently running clusters. The scaling decision is based on query queuing — if queries begin to queue, additional clusters are started to handle the load."
    },
    {
      id: 33,
      type: "single",
      difficulty: 1,
      question: "What is the default scaling policy for multi-cluster warehouses?",
      options: ["Economy", "Standard", "Aggressive", "Conservative"],
      correct: [1],
      concept: "The default scaling policy for multi-cluster warehouses is Standard. The Standard policy starts additional clusters as soon as a query is queued, providing fast response to demand increases. The Economy policy waits longer before starting clusters, conserving credits but potentially increasing query queue times."
    },
    {
      id: 34,
      type: "single",
      difficulty: 1,
      question: "How does the Economy scaling policy differ from the Standard scaling policy?",
      options: ["Economy uses smaller clusters while Standard uses full-size clusters", "Economy waits longer before adding clusters to reduce credit usage", "Economy only adds one cluster at a time while Standard adds multiple", "Economy disables auto-suspend while Standard enables it"],
      correct: [1],
      concept: "The Economy scaling policy is more conservative — it waits longer before adding new clusters, allowing queries to queue for a period before scaling. This reduces credit consumption but may result in longer wait times for some queries. Standard policy adds clusters immediately when queuing is detected."
    },
    {
      id: 35,
      type: "single",
      difficulty: 1,
      question: "Which function can be used to programmatically check the current credit usage of a warehouse?",
      options: ["WAREHOUSE_CREDIT_USAGE()", "SYSTEM$WAREHOUSE_CREDITS()", "The WAREHOUSE_METERING_HISTORY view", "CURRENT_WAREHOUSE_CREDITS()"],
      correct: [2],
      concept: "The WAREHOUSE_METERING_HISTORY view (in ACCOUNT_USAGE or accessible via the table function WAREHOUSE_METERING_HISTORY in INFORMATION_SCHEMA) provides credit usage data for warehouses. There is no direct function like WAREHOUSE_CREDIT_USAGE() — monitoring is done through views and table functions."
    },
    {
      id: 36,
      type: "single",
      difficulty: 2,
      question: "A query takes 120 seconds on a Small warehouse. After resizing to Medium, it takes 80 seconds. What does this indicate?",
      options: ["The query scales linearly with warehouse size", "The query exhibits non-linear scaling — doubling resources did not halve the time", "The query is not suitable for parallel processing", "The Medium warehouse had cached results from a previous run"],
      correct: [1],
      concept: "Linear scaling would mean the query time halves (from 120s to 60s) when doubling the warehouse size. Since it only improved from 120s to 80s (a 33% improvement, not 50%), this is non-linear scaling. This is common for queries where only portions of the work can be parallelized."
    },
    {
      id: 37,
      type: "single",
      difficulty: 2,
      question: "A multi-cluster warehouse is configured with MIN_CLUSTER_COUNT=1 and MAX_CLUSTER_COUNT=5 in auto-scale mode. During off-peak hours, how many clusters will be running?",
      options: ["0 clusters — the warehouse is fully suspended", "1 cluster — the minimum configured count", "5 clusters — always at maximum for availability", "It depends on the auto-suspend setting"],
      correct: [3],
      concept: "The number of clusters depends on the auto-suspend setting and query activity. If there are no queries and auto-suspend triggers, the entire warehouse (including all clusters) suspends to 0. If queries are running, at least 1 cluster (MIN_CLUSTER_COUNT) will be active. The auto-suspend timer applies to the warehouse as a whole."
    },
    {
      id: 38,
      type: "single",
      difficulty: 2,
      question: "What is the impact of setting AUTO_SUSPEND to a very short value (e.g., 60 seconds)?",
      options: ["It reduces costs because the warehouse suspends quickly when idle", "It may increase costs due to frequent resume cycles and the 60-second minimum charge", "It has no impact on costs because billing is per-query", "It improves query performance by keeping the cache warm"],
      correct: [1],
      concept: "A very short auto-suspend timer can actually increase costs if the warehouse frequently suspends and resumes. Each resume incurs the 60-second minimum charge, and frequent restarts also lose the warehouse local disk cache, potentially degrading query performance. A balance is needed."
    },
    {
      id: 39,
      type: "single",
      difficulty: 2,
      question: "Which scenario would benefit most from a multi-cluster warehouse instead of a single larger warehouse?",
      options: ["A single complex query that scans 10 TB of data", "Many concurrent users running simple dashboard queries", "A nightly ETL job that processes a large batch of files", "A single reporting query that runs once per day"],
      correct: [1],
      concept: "Multi-cluster warehouses are designed for concurrency scaling — handling many simultaneous queries from multiple users. A single complex query benefits more from a larger warehouse (scale up). Multi-cluster adds more clusters of the same size, which helps when many queries compete for resources rather than when a single query needs more compute."
    },
    {
      id: 40,
      type: "single",
      difficulty: 2,
      question: "A warehouse is configured with AUTO_SUSPEND = 300 and AUTO_RESUME = TRUE. A query runs for 5 seconds and no more queries are submitted. What happens?",
      options: ["The warehouse suspends immediately after the query completes", "The warehouse runs for the 60-second minimum and then suspends", "The warehouse stays running for 300 seconds of inactivity, then suspends", "The warehouse suspends after 5 seconds since the query is done"],
      correct: [2],
      concept: "After the query completes, the auto-suspend timer begins counting. The warehouse will remain active for 300 seconds (5 minutes) of inactivity before suspending. During this idle period, the warehouse continues to consume credits. The 60-second minimum applies to the billing start, not the suspend timer."
    },
    {
      id: 41,
      type: "single",
      difficulty: 2,
      question: "What is the credit consumption when a multi-cluster warehouse of size Medium has 3 clusters running?",
      options: ["4 credits per hour total", "8 credits per hour total", "12 credits per hour total", "16 credits per hour total"],
      correct: [2],
      concept: "Each cluster in a multi-cluster warehouse consumes credits independently at the rate of the warehouse size. A Medium warehouse uses 4 credits/hour per cluster. With 3 clusters running: 3 x 4 = 12 credits per hour. Multi-cluster scaling is a direct multiplier on the base warehouse cost."
    },
    {
      id: 42,
      type: "single",
      difficulty: 2,
      question: "When using the Standard scaling policy, what triggers the shutdown of additional clusters in a multi-cluster warehouse?",
      options: ["A manual command from the administrator", "When the credit quota is reached on the resource monitor", "When the system detects that query load has decreased sufficiently", "Additional clusters are never shut down in Standard mode"],
      correct: [2],
      concept: "In the Standard scaling policy, Snowflake monitors the query load and shuts down additional clusters when the load decreases sufficiently. A cluster is shut down after 2-3 consecutive checks (roughly every minute) confirm it is no longer needed. This prevents rapid scale-up/scale-down oscillations."
    },
    {
      id: 43,
      type: "single",
      difficulty: 2,
      question: "In Economy scaling policy, how long does the system typically wait before adding a new cluster?",
      options: ["It adds clusters immediately like Standard policy", "It waits approximately 6 minutes of sustained queuing before adding", "It waits until 50% of queries have timed out", "It never adds clusters; Economy mode uses a fixed cluster count"],
      correct: [1],
      concept: "The Economy scaling policy is more conservative. It waits approximately 6 minutes of sustained queuing before starting a new cluster (compared to Standard policy which acts within seconds). This saves credits by avoiding rapid scaling but may result in longer queue times during bursts."
    },
    {
      id: 44,
      type: "single",
      difficulty: 2,
      question: "What is the initial suspend behavior when creating a warehouse using CREATE WAREHOUSE with default settings?",
      options: ["The warehouse starts in a suspended state by default", "The warehouse starts running immediately and consuming credits", "The behavior depends on the Snowflake edition", "The warehouse enters a provisioning state for 5 minutes"],
      correct: [1],
      concept: "By default, when a warehouse is created with CREATE WAREHOUSE, it starts running immediately (INITIALLY_SUSPENDED = FALSE by default). This means it begins consuming credits right away. To avoid this, explicitly set INITIALLY_SUSPENDED = TRUE in the CREATE WAREHOUSE statement."
    },
    {
      id: 45,
      type: "single",
      difficulty: 2,
      question: "A 3XL warehouse has how many servers and consumes how many credits per hour?",
      options: ["32 servers, 32 credits per hour", "48 servers, 48 credits per hour", "64 servers, 64 credits per hour", "96 servers, 96 credits per hour"],
      correct: [2],
      concept: "A 3XL warehouse has 64 servers and consumes 64 credits per hour. The pattern is: XS=1, S=2, M=4, L=8, XL=16, 2XL=32, 3XL=64, 4XL=128. Both server count and credit rate are equal and double with each size increase."
    },
    {
      id: 46,
      type: "single",
      difficulty: 2,
      question: "Which warehouse utilization metric helps identify if a warehouse is oversized for its workload?",
      options: ["High percentage of time in queuing state", "Consistent low utilization with fast query completion times", "Frequent spilling to remote storage", "High percentage of queries being suspended"],
      correct: [1],
      concept: "Consistently low utilization combined with fast query completion suggests the warehouse is oversized. The queries complete quickly but don\'t use the full compute capacity. Downsizing the warehouse would save credits while still providing adequate performance for the workload."
    },
    {
      id: 47,
      type: "single",
      difficulty: 2,
      question: "What is the Query Acceleration Service (QAS) in Snowflake?",
      options: ["A service that caches query results for faster repeated execution", "A service that offloads portions of eligible queries to shared compute resources", "A service that pre-compiles query plans for faster execution", "A service that distributes queries across multiple warehouses"],
      correct: [1],
      concept: "The Query Acceleration Service (QAS) offloads portions of eligible queries (particularly those with large scans) to serverless compute resources provided by Snowflake. This accelerates query performance without requiring the user to resize their warehouse. QAS has its own credit charges."
    },
    {
      id: 48,
      type: "single",
      difficulty: 2,
      question: "Which cost optimization approach involves separating workloads into different warehouses?",
      options: ["Vertical scaling", "Workload isolation", "Query acceleration", "Resource monitoring"],
      correct: [1],
      concept: "Workload isolation involves assigning different types of workloads (e.g., ETL, reporting, ad-hoc queries) to separate warehouses. This prevents heavy ETL jobs from impacting dashboard query performance and allows each warehouse to be right-sized and configured independently for its specific workload pattern."
    },
    {
      id: 49,
      type: "single",
      difficulty: 2,
      question: "A resource monitor has CREDIT_QUOTA = 100 and a NOTIFY trigger at 75%. When will the notification be sent?",
      options: ["When 75 credits have been consumed in the monitor interval", "When 25 credits remain in the quota", "When 75% of the monitor interval has elapsed", "When 75% of the warehouse runtime has occurred"],
      correct: [0],
      concept: "The NOTIFY trigger fires when credit usage reaches the specified percentage of the CREDIT_QUOTA. With CREDIT_QUOTA = 100 and a 75% trigger, the notification is sent when 75 credits (75% of 100) have been consumed within the monitor\'s interval period."
    },
    {
      id: 50,
      type: "single",
      difficulty: 2,
      question: "What is the default interval for a resource monitor?",
      options: ["Daily", "Weekly", "Monthly", "Yearly"],
      correct: [2],
      concept: "The default interval for a resource monitor is Monthly, starting at the beginning of each calendar month. The credit quota resets at the start of each interval period. Other options include Daily, Weekly, Yearly, or a custom start date with a specific frequency."
    },
    {
      id: 51,
      type: "single",
      difficulty: 2,
      question: "Can a resource monitor be assigned to multiple warehouses simultaneously?",
      options: ["No, each resource monitor can only be assigned to one warehouse", "Yes, a single resource monitor can track multiple warehouses", "Yes, but only warehouses of the same size", "No, resource monitors only work at the account level"],
      correct: [1],
      concept: "A single resource monitor can be assigned to multiple warehouses. The monitor tracks the combined credit usage across all assigned warehouses against the quota. This is useful when you want to control the total spend for a group of related warehouses."
    },
    {
      id: 52,
      type: "single",
      difficulty: 2,
      question: "What happens when a resource monitor with a SUSPEND trigger reaches its threshold while queries are running?",
      options: ["All running queries are immediately canceled", "Running queries are allowed to finish, but new queries are blocked", "The warehouse continues running until manually suspended", "The resource monitor resets and allows additional credits"],
      correct: [1],
      concept: "When a SUSPEND trigger fires, currently running queries are allowed to complete, but no new queries can be submitted. The warehouse is suspended after the running queries finish. This graceful behavior prevents data loss from canceled queries while still enforcing the credit limit."
    },
    {
      id: 53,
      type: "single",
      difficulty: 2,
      question: "A warehouse runs for 90 seconds. How many seconds are billed?",
      options: ["60 seconds (minimum charge only)", "90 seconds", "120 seconds (rounded to 2 minutes)", "300 seconds (rounded to 5 minutes)"],
      correct: [1],
      concept: "Since the warehouse ran for 90 seconds, which exceeds the 60-second minimum, billing is calculated at the actual runtime of 90 seconds. After the initial 60-second minimum, Snowflake bills per second. So 90 seconds of usage equals 90 seconds of billing."
    },
    {
      id: 54,
      type: "single",
      difficulty: 2,
      question: "Which feature helps identify underutilized warehouses in Snowflake?",
      options: ["Query Acceleration Service", "WAREHOUSE_METERING_HISTORY combined with QUERY_HISTORY", "Data Sharing audit logs", "Failsafe storage reports"],
      correct: [1],
      concept: "Combining WAREHOUSE_METERING_HISTORY (credit consumption) with QUERY_HISTORY (query execution details) helps identify underutilized warehouses. If a warehouse consumes many credits but processes few or simple queries, it indicates the warehouse may be oversized or underutilized."
    },
    {
      id: 55,
      type: "single",
      difficulty: 2,
      question: "When is it recommended to set AUTO_SUSPEND to a higher value rather than a lower one?",
      options: ["When queries are submitted very infrequently with long gaps between them", "When queries arrive in rapid succession with short gaps between them", "When the warehouse is used exclusively for data loading", "When cost reduction is the highest priority over everything else"],
      correct: [1],
      concept: "A higher auto-suspend value is recommended when queries arrive frequently with short gaps. This prevents the warehouse from constantly suspending and resuming (which incurs the 60-second minimum charge each time and loses local cache). Keeping the warehouse running between bursts is more cost-effective."
    },
    {
      id: 56,
      type: "single",
      difficulty: 2,
      question: "How does scaling up (increasing warehouse size) differ from scaling out (adding clusters) in terms of query processing?",
      options: ["Scaling up helps individual query speed; scaling out helps concurrent query throughput", "Scaling up helps concurrency; scaling out helps individual query speed", "Both scaling up and scaling out improve individual query speed equally", "Scaling up and scaling out are equivalent approaches with identical results"],
      correct: [0],
      concept: "Scaling up (larger warehouse size) provides more resources per query, improving the speed of individual complex queries. Scaling out (multi-cluster) adds additional clusters to handle more concurrent queries. Scale up for faster queries; scale out for more users running queries simultaneously."
    },
    {
      id: 57,
      type: "single",
      difficulty: 2,
      question: "A warehouse has AUTO_RESUME = FALSE. A user submits a query to it. What happens?",
      options: ["The query is automatically routed to a different warehouse", "The query fails because the warehouse is suspended and auto-resume is disabled", "The query is queued until an administrator resumes the warehouse", "The query runs using the Snowflake cloud services layer without a warehouse"],
      correct: [1],
      concept: "When AUTO_RESUME is set to FALSE and the warehouse is suspended, queries submitted to that warehouse will fail with an error indicating the warehouse is suspended. The user or an administrator must manually resume the warehouse using ALTER WAREHOUSE ... RESUME before queries can execute."
    },
    {
      id: 58,
      type: "single",
      difficulty: 2,
      question: "What is the impact of warehouse cache when a warehouse is suspended and then resumed?",
      options: ["The cache persists across suspend/resume cycles", "The local SSD cache is lost when the warehouse is suspended", "The cache is saved to remote storage and restored on resume", "Cache behavior depends on the warehouse size"],
      correct: [1],
      concept: "When a warehouse is suspended, its local SSD cache is lost. Upon resume, the warehouse starts with a cold cache, meaning the first queries after resume may be slower as data must be read from remote storage. This is one reason why very aggressive auto-suspend settings can negatively impact performance."
    },
    {
      id: 59,
      type: "single",
      difficulty: 2,
      question: "A Large warehouse runs a complex query in 60 seconds. What is the approximate credit cost for this single query?",
      options: ["0.13 credits (8 credits/3600 seconds * 60 seconds)", "1 credit", "8 credits", "0.5 credits"],
      correct: [0],
      concept: "A Large warehouse consumes 8 credits per hour (3600 seconds). For a 60-second query: 8 credits / 3600 seconds * 60 seconds = 0.133 credits. Understanding per-query costs helps in right-sizing decisions and comparing the cost-effectiveness of different warehouse sizes."
    },
    {
      id: 60,
      type: "single",
      difficulty: 2,
      question: "What does the WAREHOUSE_LOAD_HISTORY view provide?",
      options: ["Historical credit consumption data for warehouses", "Current and historical data about query load and queuing for warehouses", "A log of warehouse creation and modification events", "Storage usage statistics for warehouse local caches"],
      correct: [1],
      concept: "The WAREHOUSE_LOAD_HISTORY view provides information about the query load and queuing for warehouses over time. It shows metrics like the average number of running queries, queued queries, and blocked queries, helping administrators understand warehouse utilization patterns."
    },
    {
      id: 61,
      type: "multi",
      difficulty: 2,
      question: "Which of the following statements about warehouse sizing are correct? (Select all that apply)",
      options: ["An X-Small warehouse has 1 server and costs 1 credit/hour", "A Medium warehouse has 4 servers and costs 4 credits/hour", "Each size increase doubles both servers and credits", "A Small warehouse has 4 servers and costs 2 credits/hour"],
      correct: [0, 1, 2],
      concept: "XS has 1 server/1 credit, Medium has 4 servers/4 credits, and each size increase doubles both. A Small warehouse has 2 servers (not 4) and costs 2 credits per hour. The consistent doubling pattern applies across all sizes from XS through 4XL."
    },
    {
      id: 62,
      type: "multi",
      difficulty: 2,
      question: "Which factors contribute to non-linear scaling when increasing warehouse size? (Select all that apply)",
      options: ["Portions of the query that cannot be parallelized", "Data skew affecting partition distribution", "Network overhead for inter-node communication", "The query using result cache from a previous run"],
      correct: [0, 1, 2],
      concept: "Non-linear scaling is caused by non-parallelizable query portions (Amdahl\'s law), data skew (uneven distribution across partitions), and network overhead between nodes. Result cache usage is not related to scaling — cached results bypass the warehouse entirely."
    },
    {
      id: 63,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are valid multi-cluster warehouse modes? (Select all that apply)",
      options: ["Maximized", "Auto-scale", "Economy", "Standard"],
      correct: [0, 1],
      concept: "The two multi-cluster warehouse modes are Maximized (all clusters run at all times) and Auto-scale (clusters are dynamically added/removed based on demand). Economy and Standard are scaling POLICIES within Auto-scale mode, not separate modes."
    },
    {
      id: 64,
      type: "multi",
      difficulty: 2,
      question: "Which configurations determine the behavior of a multi-cluster warehouse in auto-scale mode? (Select all that apply)",
      options: ["MIN_CLUSTER_COUNT", "MAX_CLUSTER_COUNT", "Scaling policy (Standard or Economy)", "Warehouse size (XS, S, M, etc.)"],
      correct: [0, 1, 2, 3],
      concept: "All four configurations affect multi-cluster auto-scale behavior: MIN/MAX_CLUSTER_COUNT defines the scaling range, the scaling policy determines how aggressively clusters are added/removed, and the warehouse size determines the compute capacity of each individual cluster."
    },
    {
      id: 65,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are true about warehouse auto-suspend? (Select all that apply)",
      options: ["The default auto-suspend timer is 600 seconds", "Auto-suspend can be disabled by setting the timer to NULL", "The timer resets each time a new query starts running", "Auto-suspend applies only to single-cluster warehouses"],
      correct: [0, 1, 2],
      concept: "The default is 600 seconds (10 minutes), it can be disabled with NULL, and the timer resets when new queries run. Auto-suspend applies to ALL warehouses, including multi-cluster warehouses — when auto-suspend triggers, the entire multi-cluster warehouse suspends."
    },
    {
      id: 66,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are benefits of using auto-resume? (Select all that apply)",
      options: ["Eliminates the need for manual warehouse management", "Ensures queries are processed without user intervention", "Reduces the warehouse resume time to zero", "Provides seamless user experience for ad-hoc query workloads"],
      correct: [0, 1, 3],
      concept: "Auto-resume eliminates manual management, ensures queries are processed automatically, and provides a seamless experience. However, it does NOT reduce resume time to zero — there is still a brief provisioning delay when a suspended warehouse resumes (typically a few seconds)."
    },
    {
      id: 67,
      type: "multi",
      difficulty: 2,
      question: "Which cost optimization strategies are recommended for Snowflake warehouses? (Select all that apply)",
      options: ["Right-sizing warehouses based on workload analysis", "Setting appropriate auto-suspend timers to avoid idle running", "Using separate warehouses for different workload types", "Always using 4XL warehouses for maximum performance"],
      correct: [0, 1, 2],
      concept: "Right-sizing, appropriate auto-suspend settings, and workload isolation (separate warehouses) are all recommended cost optimization strategies. Always using 4XL warehouses is wasteful — each workload should use the smallest size that meets its performance requirements."
    },
    {
      id: 68,
      type: "multi",
      difficulty: 2,
      question: "Which metrics from WAREHOUSE_METERING_HISTORY are useful for cost analysis? (Select all that apply)",
      options: ["Credits used by each warehouse", "Credits used per hour or day", "Cloud services credits consumed", "The warehouse name and start/end timestamps"],
      correct: [0, 1, 2, 3],
      concept: "All these metrics are available and useful: credits per warehouse help identify expensive warehouses, credits per time period show usage trends, cloud services credits show overhead costs, and timestamps help correlate usage with business activities."
    },
    {
      id: 69,
      type: "multi",
      difficulty: 2,
      question: "Which of the following trigger actions are available on resource monitors? (Select all that apply)",
      options: ["NOTIFY", "SUSPEND", "SUSPEND_IMMEDIATELY", "SCALE_DOWN"],
      correct: [0, 1, 2],
      concept: "Resource monitors support three trigger actions: NOTIFY (send alert only), SUSPEND (stop after current queries finish), and SUSPEND_IMMEDIATELY (cancel running queries and stop). There is no SCALE_DOWN action — resource monitors control spending, not warehouse sizing."
    },
    {
      id: 70,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are valid resource monitor interval options? (Select all that apply)",
      options: ["Daily", "Weekly", "Monthly", "Yearly"],
      correct: [0, 1, 2, 3],
      concept: "Resource monitors support Daily, Weekly, Monthly, and Yearly intervals, plus custom schedules with specific start dates. The interval determines how often the credit quota resets. Monthly is the default interval if not specified."
    },
    {
      id: 71,
      type: "multi",
      difficulty: 2,
      question: "Which of the following describe the SUSPEND_IMMEDIATELY trigger behavior? (Select all that apply)",
      options: ["Currently running queries are canceled immediately", "The warehouse is suspended after canceling queries", "New queries cannot be submitted", "A notification is also sent to account administrators"],
      correct: [0, 1, 2, 3],
      concept: "SUSPEND_IMMEDIATELY cancels all running queries, suspends the warehouse, blocks new queries, and also sends a notification to administrators. It is the most aggressive trigger action and should be used when strict cost controls must be enforced regardless of query completion."
    },
    {
      id: 72,
      type: "multi",
      difficulty: 2,
      question: "Which scenarios benefit from the Query Acceleration Service? (Select all that apply)",
      options: ["Queries with large table scans and selective filters", "Ad-hoc exploratory queries with unpredictable patterns", "Simple point lookups on small tables", "Queries that benefit from additional parallel processing of scan-heavy operations"],
      correct: [0, 1, 3],
      concept: "QAS benefits queries with large scans, selective filters, and those needing additional parallelism. It offloads scan-heavy work to serverless resources. Simple point lookups on small tables do not benefit from QAS because they already execute quickly without additional compute."
    },
    {
      id: 73,
      type: "multi",
      difficulty: 2,
      question: "A warehouse has resource monitors at both account and warehouse levels. What happens if the warehouse-level monitor triggers SUSPEND? (Select all that apply)",
      options: ["The warehouse is suspended based on the warehouse-level monitor", "The account-level monitor continues tracking other warehouses", "The warehouse-level monitor override the account-level monitor for that warehouse", "All warehouses in the account are suspended"],
      correct: [0, 1],
      concept: "When a warehouse-level monitor triggers SUSPEND, only that specific warehouse is suspended. The account-level monitor continues to track overall usage including other warehouses. Both levels operate independently — the most restrictive trigger that fires first takes effect for the given warehouse."
    },
    {
      id: 74,
      type: "multi",
      difficulty: 2,
      question: "Which of the following help reduce credit consumption for a warehouse? (Select all that apply)",
      options: ["Reducing the auto-suspend timer to minimize idle time", "Downsizing the warehouse when queries perform well on a smaller size", "Using clustering keys to reduce scan volume", "Disabling auto-resume to prevent accidental startups"],
      correct: [0, 1, 2],
      concept: "Reducing idle time, right-sizing, and optimizing queries (via clustering keys) all reduce credit consumption. Disabling auto-resume doesn\'t save credits directly — it just prevents the warehouse from starting, which blocks query execution entirely rather than optimizing costs."
    },
    {
      id: 75,
      type: "multi",
      difficulty: 2,
      question: "Which statements about the 60-second minimum billing are true? (Select all that apply)",
      options: ["The minimum applies each time a warehouse resumes from suspended state", "The minimum applies to each cluster in a multi-cluster warehouse", "After the first 60 seconds, billing is per-second", "The 60-second minimum only applies to warehouses larger than Medium"],
      correct: [0, 1, 2],
      concept: "The 60-second minimum applies each time a warehouse resumes and to each individual cluster in a multi-cluster warehouse. After the initial minute, per-second billing applies. This minimum applies to ALL warehouse sizes from XS through 4XL, not just larger sizes."
    },
    {
      id: 76,
      type: "multi",
      difficulty: 3,
      question: "An organization wants to minimize costs while handling unpredictable peak loads. Which configuration is most appropriate? (Select all that apply)",
      options: ["Multi-cluster warehouse with auto-scale mode", "Economy scaling policy to delay adding clusters", "Aggressive auto-suspend timer to stop idle clusters quickly", "Right-sized base warehouse to handle average load efficiently"],
      correct: [0, 2, 3],
      concept: "For unpredictable peaks, auto-scale mode with aggressive auto-suspend and right-sized base warehouse is optimal. Economy policy would be counterproductive for unpredictable peaks because it delays scaling and would cause excessive queuing during sudden demand spikes."
    },
    {
      id: 77,
      type: "multi",
      difficulty: 3,
      question: "Which scenarios indicate a warehouse should be scaled UP rather than scaled OUT? (Select all that apply)",
      options: ["A single complex query takes too long to execute", "Queries are spilling to local or remote disk", "Many simple queries are competing for compute resources", "A large table scan is bottlenecked by insufficient parallel processing"],
      correct: [0, 1, 3],
      concept: "Scaling up (larger warehouse) helps single complex queries, disk spilling (more memory), and large scans (more parallel threads). Many simple concurrent queries benefit from scaling OUT (multi-cluster), as each simple query doesn\'t need more resources — there just need to be more execution slots."
    },
    {
      id: 78,
      type: "multi",
      difficulty: 3,
      question: "A resource monitor has CREDIT_QUOTA = 200 with triggers at 50% NOTIFY, 80% SUSPEND, and 100% SUSPEND_IMMEDIATELY. Which statements are true? (Select all that apply)",
      options: ["Notification is sent at 100 credits consumed", "Warehouse suspends gracefully at 160 credits consumed", "All queries are killed at 200 credits consumed", "The NOTIFY action also triggers SUSPEND at 50%"],
      correct: [0, 1, 2],
      concept: "NOTIFY fires at 50% (100 credits), SUSPEND at 80% (160 credits allowing running queries to finish), and SUSPEND_IMMEDIATELY at 100% (200 credits, killing all queries). Each trigger action is independent — NOTIFY only sends an alert and does NOT trigger SUSPEND."
    },
    {
      id: 79,
      type: "multi",
      difficulty: 3,
      question: "Which of the following represent hidden costs that should be considered in warehouse cost optimization? (Select all that apply)",
      options: ["Cloud services layer credit consumption exceeding the 10% adjustment threshold", "The 60-second minimum charge on frequent warehouse resume cycles", "Serverless compute charges from Query Acceleration Service", "Network egress charges for cross-region queries"],
      correct: [0, 1, 2],
      concept: "Hidden costs include cloud services exceeding the 10% free adjustment (charged separately), frequent resume cycles with 60-second minimums, and QAS serverless charges. These are often overlooked when calculating total warehouse costs and can significantly impact the bill."
    },
    {
      id: 80,
      type: "multi",
      difficulty: 3,
      question: "A multi-cluster warehouse with MIN=1 and MAX=10 in auto-scale mode shows that clusters frequently cycle between 1 and 8. What optimizations should be investigated? (Select all that apply)",
      options: ["Increasing MIN_CLUSTER_COUNT to reduce resume overhead during peaks", "Analyzing whether workloads can be scheduled to reduce peak concurrency", "Evaluating if a larger warehouse size with fewer clusters would be more efficient", "Checking if the scaling policy should be changed from Standard to Economy"],
      correct: [0, 1, 2],
      concept: "All three options should be investigated: increasing MIN reduces cold-start overhead, scheduling workloads reduces peak demand, and a larger base size might handle the load with fewer clusters (reducing cluster startup overhead). Switching to Economy could worsen queuing during the rapid ramp-up periods."
    },
    {
      id: 81,
      type: "multi",
      difficulty: 3,
      question: "Which approaches can help identify the optimal warehouse size for a workload? (Select all that apply)",
      options: ["Running the same query on progressively larger warehouses and comparing execution times", "Analyzing the query profile for disk spilling and scan efficiency", "Monitoring WAREHOUSE_METERING_HISTORY for credit utilization patterns", "Always starting with the largest warehouse and scaling down"],
      correct: [0, 1, 2],
      concept: "Testing on different sizes, analyzing query profiles, and monitoring credit utilization are all valid approaches for finding the optimal size. Starting with the largest warehouse is not recommended — the best practice is to start small and scale up, measuring the cost-performance tradeoff at each step."
    },
    {
      id: 82,
      type: "multi",
      difficulty: 3,
      question: "Which of the following affect the total credit cost of a multi-cluster warehouse during a spike? (Select all that apply)",
      options: ["The number of clusters that were started during the spike", "The duration each additional cluster was running", "The 60-second minimum charge for each newly started cluster", "The scaling policy (Standard vs Economy) choice"],
      correct: [0, 1, 2, 3],
      concept: "All factors affect total cost: more clusters = more cost, longer runtime = more credits, each new cluster incurs a 60-second minimum, and the scaling policy determines how quickly clusters start (Standard starts faster, potentially starting more clusters for brief spikes)."
    },
    {
      id: 83,
      type: "multi",
      difficulty: 3,
      question: "A team wants to track spending separately for ETL, reporting, and ad-hoc workloads. Which approach achieves this? (Select all that apply)",
      options: ["Create separate warehouses for each workload type", "Assign individual resource monitors to each warehouse", "Use warehouse tags to categorize spending in billing reports", "Query WAREHOUSE_METERING_HISTORY filtered by warehouse name"],
      correct: [0, 1, 3],
      concept: "Separate warehouses with individual resource monitors and filtered metering history enable workload-specific cost tracking. While tags can help with organization, the primary mechanism for separate cost tracking is using distinct warehouses and monitoring their individual credit consumption."
    },
    {
      id: 84,
      type: "multi",
      difficulty: 3,
      question: "Which advanced resource monitor configurations are available? (Select all that apply)",
      options: ["Setting multiple trigger thresholds at different percentages", "Configuring triggers for both NOTIFY and SUSPEND on the same monitor", "Setting up notification to specific email addresses via integrations", "Applying a single monitor to both account and warehouse levels simultaneously"],
      correct: [0, 1, 2],
      concept: "Resource monitors support multiple thresholds (e.g., NOTIFY at 50%, SUSPEND at 90%, SUSPEND_IMMEDIATELY at 100%), combined trigger types, and notification routing. However, a single monitor cannot simultaneously be an account-level and warehouse-level monitor — these are separate assignments."
    },
    {
      id: 85,
      type: "multi",
      difficulty: 3,
      question: "Which of the following are disadvantages of the Economy scaling policy compared to Standard? (Select all that apply)",
      options: ["Longer query queue times during demand spikes", "Slower response to sudden increases in concurrent users", "Higher credit consumption due to delayed cluster shutdown", "Potential for user-perceived performance degradation during burst workloads"],
      correct: [0, 1, 3],
      concept: "Economy policy delays adding clusters (~6 minutes vs immediate), causing longer queue times and slower response to spikes. This can degrade perceived performance during bursts. However, Economy does NOT increase credit consumption — its purpose is to REDUCE credits by avoiding premature scaling."
    },
    {
      id: 86,
      type: "tf",
      difficulty: 3,
      question: "Doubling the warehouse size from Small to Medium always results in exactly half the query execution time.",
      options: ["True — Snowflake guarantees linear scaling for all query types when the warehouse size is doubled", "False — scaling is often non-linear because not all query operations can be fully parallelized across additional servers"],
      correct: [1],
      concept: "This is false. While doubling warehouse size doubles compute resources, query execution time does not always halve. Non-linear scaling occurs due to operations that cannot be parallelized (serialization points), data skew, and network overhead. The actual improvement depends on the query characteristics."
    },
    {
      id: 87,
      type: "tf",
      difficulty: 3,
      question: "In a multi-cluster warehouse with auto-scale mode, if MIN_CLUSTER_COUNT equals MAX_CLUSTER_COUNT, the warehouse behaves identically to Maximized mode.",
      options: ["True — setting MIN equal to MAX in auto-scale mode is functionally equivalent to Maximized mode", "False — even with equal MIN and MAX, auto-scale mode has different internal behavior than Maximized mode"],
      correct: [0],
      concept: "This is true. When MIN_CLUSTER_COUNT equals MAX_CLUSTER_COUNT in auto-scale mode, all clusters are always running, which is functionally identical to Maximized mode. Both configurations maintain a fixed number of clusters regardless of query load."
    },
    {
      id: 88,
      type: "tf",
      difficulty: 3,
      question: "A warehouse that is suspended for 23 hours per day and runs for 1 hour costs the same as one that runs continuously, if they process the same total query volume.",
      options: ["True — total credit cost depends only on total runtime, not when the warehouse runs", "False — the suspended warehouse may incur additional costs from resume cycles and the 60-second minimum billing per resume"],
      correct: [1],
      concept: "This is false. A warehouse that frequently suspends and resumes incurs the 60-second minimum charge each time it resumes. If it resumes multiple times during the 1-hour active period, the total billed time could exceed 1 hour. Additionally, cold cache after each resume may lead to slower queries."
    },
    {
      id: 89,
      type: "tf",
      difficulty: 3,
      question: "The Query Acceleration Service can eliminate the need to resize a warehouse for scan-heavy queries.",
      options: ["True — QAS offloads scan work to serverless resources, which can provide sufficient acceleration without warehouse resizing", "False — QAS is only a minor optimization and cannot substitute for proper warehouse sizing"],
      correct: [0],
      concept: "This is true. QAS can offload the scan-heavy portions of eligible queries to Snowflake\'s serverless compute pool, potentially providing the acceleration needed without resizing the warehouse. However, QAS incurs its own credit charges and not all queries are eligible for acceleration."
    },
    {
      id: 90,
      type: "tf",
      difficulty: 3,
      question: "Setting the auto-suspend timer to 0 seconds will cause the warehouse to suspend immediately after each query completes.",
      options: ["True — a value of 0 means the warehouse suspends immediately after the last query finishes", "False — setting auto-suspend to 0 actually disables auto-suspend, keeping the warehouse running indefinitely"],
      correct: [1],
      concept: "This is false. In Snowflake, setting AUTO_SUSPEND to 0 (or NULL) disables auto-suspend entirely, meaning the warehouse runs indefinitely until manually suspended. To achieve immediate suspension, you would set the timer to a very low value like 60 seconds (the minimum recommended)."
    },
    {
      id: 91,
      type: "tf",
      difficulty: 3,
      question: "A multi-cluster warehouse in auto-scale mode with the Economy scaling policy will never start more than one additional cluster at a time.",
      options: ["True — Economy policy only adds clusters one at a time to minimize cost", "False — Economy policy can add multiple clusters if the sustained queuing indicates the need for them"],
      correct: [1],
      concept: "This is false. The Economy policy can start multiple clusters if the sustained demand justifies it. The key difference from Standard policy is not the number of clusters added at once, but the delay before scaling decisions are made (~6 minutes of sustained queuing vs immediate response)."
    },
    {
      id: 92,
      type: "tf",
      difficulty: 3,
      question: "Resource monitors can track and limit credit usage for serverless features like Snowpipe and automatic clustering.",
      options: ["True — resource monitors can track all credit consumption including serverless features", "False — resource monitors only track warehouse compute credits, not serverless feature credits"],
      correct: [1],
      concept: "This is false. Resource monitors only track credit usage from virtual warehouses and cloud services. Serverless features like Snowpipe, automatic clustering, materialized view maintenance, and search optimization have their own credit consumption that is NOT tracked or limited by resource monitors."
    },
    {
      id: 93,
      type: "tf",
      difficulty: 3,
      question: "A resource monitor set at the account level will override any warehouse-level resource monitors.",
      options: ["True — account-level monitors take priority and override warehouse-level settings", "False — both account-level and warehouse-level monitors operate independently, and the most restrictive one takes effect first"],
      correct: [1],
      concept: "This is false. Account-level and warehouse-level resource monitors operate independently. Both monitor credit usage against their respective quotas. The trigger that fires first (whichever reaches its threshold first) takes effect. They do not override each other but work in parallel."
    },
    {
      id: 94,
      type: "tf",
      difficulty: 3,
      question: "In a multi-cluster warehouse, each cluster has its own independent local SSD cache.",
      options: ["True — each cluster maintains its own local SSD cache, and cache is not shared between clusters", "False — all clusters in a multi-cluster warehouse share a single distributed cache"],
      correct: [0],
      concept: "This is true. Each cluster in a multi-cluster warehouse has its own independent local SSD cache. Cache is not shared or synchronized between clusters. This means a query running on cluster 2 does not benefit from data cached by cluster 1, which can affect query performance on newly added clusters."
    },
    {
      id: 95,
      type: "tf",
      difficulty: 3,
      question: "Snowflake charges credits for a warehouse that is in suspended state.",
      options: ["True — a small maintenance fee is charged for suspended warehouses to maintain their configuration", "False — suspended warehouses do not consume any credits; charges only apply when the warehouse is running"],
      correct: [1],
      concept: "This is false. Snowflake does not charge any credits for suspended warehouses. Credits are only consumed when a warehouse is in a running (resumed) state. This is a fundamental benefit of Snowflake\'s architecture — you only pay for compute when you use it."
    },
    {
      id: 96,
      type: "tf",
      difficulty: 3,
      question: "The WAREHOUSE_METERING_HISTORY view has a data latency of up to 3 hours in the ACCOUNT_USAGE schema.",
      options: ["True — like other ACCOUNT_USAGE views, WAREHOUSE_METERING_HISTORY has up to 3 hours of data latency", "False — WAREHOUSE_METERING_HISTORY provides real-time data with no latency"],
      correct: [0],
      concept: "This is true. Views in the SNOWFLAKE.ACCOUNT_USAGE schema, including WAREHOUSE_METERING_HISTORY, have a data latency of up to 2-3 hours. For more recent data, you can use the WAREHOUSE_METERING_HISTORY table function in INFORMATION_SCHEMA, which provides data with lower latency."
    },
    {
      id: 97,
      type: "tf",
      difficulty: 3,
      question: "A multi-cluster warehouse can have different warehouse sizes for each cluster (e.g., cluster 1 as Medium, cluster 2 as Large).",
      options: ["True — each cluster can be independently sized for optimal resource allocation", "False — all clusters in a multi-cluster warehouse must be the same size as the base warehouse"],
      correct: [1],
      concept: "This is false. All clusters in a multi-cluster warehouse are identical in size. If the warehouse is configured as Medium, every cluster that scales out is also Medium. You cannot have heterogeneous cluster sizes within a single multi-cluster warehouse."
    },
    {
      id: 98,
      type: "tf",
      difficulty: 3,
      question: "The credit quota of a resource monitor resets automatically at the start of each monitor interval.",
      options: ["True — the credit counter resets to zero at the beginning of each interval (daily, weekly, monthly, etc.)", "False — credit usage accumulates across intervals until the monitor is manually reset"],
      correct: [0],
      concept: "This is true. The credit usage counter for a resource monitor automatically resets to zero at the start of each interval period. For example, a monthly monitor resets at the beginning of each calendar month, giving the warehouse a fresh credit quota for the new period."
    },
    {
      id: 99,
      type: "tf",
      difficulty: 3,
      question: "The auto-suspend timer begins counting from the moment the warehouse is resumed.",
      options: ["True — the timer starts from warehouse resume and counts down regardless of query activity", "False — the timer begins counting only after the last query completes (period of inactivity)"],
      correct: [1],
      concept: "This is false. The auto-suspend timer counts the period of inactivity — it begins after the last query finishes and resets whenever a new query starts. If the warehouse is continuously processing queries, the timer never advances, and the warehouse will not auto-suspend."
    },
    {
      id: 100,
      type: "tf",
      difficulty: 3,
      question: "Multi-cluster warehouses are available on all Snowflake editions including Standard.",
      options: ["True — multi-cluster warehouses are a core feature available on all editions", "False — multi-cluster warehouses require Enterprise edition or higher"],
      correct: [1],
      concept: "This is false. Multi-cluster warehouses are available only on Snowflake Enterprise edition and higher (Enterprise, Business Critical, VPS). Standard edition accounts cannot configure multi-cluster warehouses and are limited to single-cluster warehouses."
    }
  ]
};

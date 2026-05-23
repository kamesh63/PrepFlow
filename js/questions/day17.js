window.QUIZ_DATA = window.QUIZ_DATA || {};
window.QUIZ_DATA["day17"] = {
  title: "Introduction to Spark",
  category: "spark",
  topics: ["Spark Architecture", "RDDs & DataFrames", "Cluster Computing", "Spark Context", "Lazy Evaluation"],
  questions: [
    {
      id: 1,
      type: "single",
      difficulty: 1,
      question: "Which component in a Spark application is responsible for converting a user program into tasks?",
      options: ["The Driver program", "The Executor process", "The Worker node", "The Cluster Manager"],
      correct: [0],
      concept: "The Driver program runs the main() function, creates the SparkContext, and converts the user\'s logical plan into a physical execution plan composed of stages and tasks. Executors only run the tasks assigned to them by the Driver."
    },
    {
      id: 2,
      type: "single",
      difficulty: 1,
      question: "What is the role of an Executor in a Spark application?",
      options: ["Run tasks and store data for the application", "Schedule tasks across the cluster", "Negotiate resources with YARN", "Parse the user\'s SQL queries"],
      correct: [0],
      concept: "Executors are processes launched on worker nodes that run tasks assigned by the Driver and keep data in memory or disk storage. Each Spark application has its own set of executors that remain alive for the entire lifetime of the application."
    },
    {
      id: 3,
      type: "single",
      difficulty: 1,
      question: "Which of the following is NOT a supported Spark cluster manager?",
      options: ["Apache Airflow", "Apache YARN", "Kubernetes", "Spark Standalone"],
      correct: [0],
      concept: "Spark supports four cluster managers: Spark Standalone, Apache YARN, Apache Mesos, and Kubernetes. Apache Airflow is a workflow orchestration tool, not a cluster manager for resource allocation."
    },
    {
      id: 4,
      type: "single",
      difficulty: 1,
      question: "An RDD in Spark is best described as which of the following?",
      options: ["An immutable, distributed collection of objects partitioned across nodes", "A mutable in-memory table with schema enforcement", "A single-partition dataset stored on the Driver", "A relational database index for fast lookups"],
      correct: [0],
      concept: "RDD (Resilient Distributed Dataset) is Spark\'s fundamental data abstraction. It is immutable (cannot be changed once created), distributed (partitioned across cluster nodes), and fault-tolerant (can be recomputed from lineage if a partition is lost)."
    },
    {
      id: 5,
      type: "single",
      difficulty: 1,
      question: "What is the primary difference between a DataFrame and an RDD in Spark?",
      options: ["DataFrames have a schema with named columns; RDDs do not", "RDDs support SQL queries; DataFrames do not", "DataFrames are mutable; RDDs are immutable", "RDDs are optimized by the Catalyst optimizer; DataFrames are not"],
      correct: [0],
      concept: "DataFrames organize data into named columns like a relational table and benefit from the Catalyst optimizer. RDDs are unstructured collections of objects without schema information, which limits the optimizer\'s ability to improve performance."
    },
    {
      id: 6,
      type: "single",
      difficulty: 1,
      question: "How many SparkContext objects can be active in a single JVM at a time by default?",
      options: ["Exactly one", "Up to four", "Unlimited", "One per CPU core"],
      correct: [0],
      concept: "By default, only one SparkContext can be active per JVM. Attempting to create a second SparkContext will throw an error unless the configuration spark.driver.allowMultipleContexts is set to true (which is not recommended for production)."
    },
    {
      id: 7,
      type: "single",
      difficulty: 1,
      question: "Which term describes Spark\'s approach of delaying execution until a result is actually needed?",
      options: ["Lazy evaluation", "Eager execution", "Speculative execution", "Pipelined processing"],
      correct: [0],
      concept: "Lazy evaluation means Spark records transformations as a lineage graph but does not execute them until an action (like count(), collect(), or save()) is called. This allows Spark to optimize the entire computation plan before running it."
    },
    {
      id: 8,
      type: "single",
      difficulty: 1,
      question: "Which Spark component is responsible for dividing a job into stages based on shuffle boundaries?",
      options: ["DAG Scheduler", "Task Scheduler", "Cluster Manager", "Block Manager"],
      correct: [0],
      concept: "The DAG Scheduler analyzes the logical execution plan and creates a DAG (Directed Acyclic Graph) of stages. It splits the job at shuffle boundaries (wide transformations) to create stage boundaries, then submits each stage as a set of tasks."
    },
    {
      id: 9,
      type: "single",
      difficulty: 1,
      question: "What happens when a partition of an RDD is lost due to a node failure?",
      options: ["Spark recomputes the lost partition using its lineage graph", "The entire RDD is recomputed from scratch", "Spark reads the partition from a checkpoint automatically", "The application fails with a fatal error"],
      correct: [0],
      concept: "RDD fault tolerance is achieved through lineage. Each RDD records the sequence of transformations used to build it. If a partition is lost, Spark traces back the lineage graph and recomputes only the lost partition(s), not the entire dataset."
    },
    {
      id: 10,
      type: "single",
      difficulty: 1,
      question: "In Spark, what is a \'transformation\' operation?",
      options: ["An operation that defines a new RDD from an existing one without triggering execution", "An operation that immediately computes and returns a result to the Driver", "An operation that writes data to an external storage system", "An operation that launches a new Spark application"],
      correct: [0],
      concept: "Transformations are lazy operations that define a new RDD/DataFrame based on existing ones (e.g., map, filter, join). They do not trigger computation — they only build up a lineage graph. Actions are what trigger actual execution."
    },
    {
      id: 11,
      type: "single",
      difficulty: 1,
      question: "Which of the following is an \'action\' in Spark?",
      options: ["collect()", "filter()", "map()", "select()"],
      correct: [0],
      concept: "collect() is an action because it triggers the computation of all preceding transformations and returns the results to the Driver. filter(), map(), and select() are transformations that are lazily evaluated and do not trigger execution on their own."
    },
    {
      id: 12,
      type: "single",
      difficulty: 1,
      question: "What is a narrow transformation in Spark?",
      options: ["A transformation where each parent partition contributes to at most one child partition", "A transformation that requires data to be shuffled across the cluster", "A transformation that reduces the number of partitions", "A transformation that only works on key-value pair RDDs"],
      correct: [0],
      concept: "Narrow transformations (e.g., map, filter, union) allow pipelining because each input partition contributes to at most one output partition. No data shuffle is needed, making them faster than wide transformations."
    },
    {
      id: 13,
      type: "single",
      difficulty: 1,
      question: "Which of the following is a wide transformation?",
      options: ["groupByKey()", "map()", "filter()", "flatMap()"],
      correct: [0],
      concept: "groupByKey() is a wide transformation because it requires a shuffle — data with the same key from different partitions must be moved to the same partition. map(), filter(), and flatMap() are narrow transformations that can be computed within a single partition."
    },
    {
      id: 14,
      type: "single",
      difficulty: 1,
      question: "Which Spark API provides compile-time type safety along with the benefits of DataFrames?",
      options: ["Dataset API", "DataFrame API", "RDD API", "Structured Streaming API"],
      correct: [0],
      concept: "The Dataset API (available in Scala and Java) combines the benefits of RDDs (type safety, object-oriented interface) with the performance benefits of DataFrames (Catalyst optimizer, Tungsten execution). In Python, DataFrame is equivalent to Dataset[Row]."
    },
    {
      id: 15,
      type: "single",
      difficulty: 1,
      question: "What does the spark-submit command do?",
      options: ["Submits a Spark application to a cluster for execution", "Compiles Spark source code into a JAR file", "Creates a new Spark cluster on demand", "Monitors the health of running Spark executors"],
      correct: [0],
      concept: "spark-submit is the command-line tool used to launch Spark applications on a cluster. It supports various options like setting the master URL, deploy mode, executor memory, number of cores, and application arguments."
    },
    {
      id: 16,
      type: "single",
      difficulty: 1,
      question: "In client deploy mode, where does the Spark Driver run?",
      options: ["On the machine that submitted the application", "On a randomly selected worker node", "On the cluster manager node", "Inside one of the executor containers"],
      correct: [0],
      concept: "In client deploy mode, the Driver runs on the machine where spark-submit is executed (the client machine). This means logs are visible on the client, but the client machine must remain connected to the cluster for the duration of the application."
    },
    {
      id: 17,
      type: "single",
      difficulty: 1,
      question: "In cluster deploy mode, where does the Spark Driver run?",
      options: ["On a worker node inside the cluster", "On the machine that submitted the application", "On a dedicated Driver-only node", "On the cluster manager master node"],
      correct: [0],
      concept: "In cluster deploy mode, the Driver runs inside the cluster on one of the worker nodes. This is preferred for production because the client can disconnect after submission. However, it makes it harder to access Driver logs interactively."
    },
    {
      id: 18,
      type: "single",
      difficulty: 1,
      question: "What is the entry point to Spark functionality since Spark 2.0?",
      options: ["SparkSession", "SparkContext", "SparkConf", "SQLContext"],
      correct: [0],
      concept: "SparkSession (spark = SparkSession.builder.getOrCreate()) became the unified entry point in Spark 2.0, replacing the need for separate SparkContext, SQLContext, and HiveContext. It internally creates a SparkContext if one does not already exist."
    },
    {
      id: 19,
      type: "single",
      difficulty: 1,
      question: "What is SparkConf used for?",
      options: ["Setting configuration parameters for a Spark application", "Managing the lifecycle of executors", "Scheduling tasks within a stage", "Defining the schema of a DataFrame"],
      correct: [0],
      concept: "SparkConf is used to set key-value configuration pairs for a Spark application, such as the application name, master URL, executor memory, and number of cores. These settings are passed to the SparkContext or SparkSession at creation time."
    },
    {
      id: 20,
      type: "single",
      difficulty: 1,
      question: "Which shared variable type in Spark allows read-only data to be cached on each worker node?",
      options: ["Broadcast variable", "Accumulator", "Shared RDD", "Distributed cache"],
      correct: [0],
      concept: "Broadcast variables allow the Driver to send a large read-only dataset to all worker nodes once, where it is cached and reused across tasks. Without broadcast, the data would be sent with every task, causing significant network overhead."
    },
    {
      id: 21,
      type: "single",
      difficulty: 1,
      question: "What is the purpose of accumulators in Spark?",
      options: ["To aggregate values from worker tasks back to the Driver", "To distribute large lookup tables to all nodes", "To persist intermediate RDDs to disk", "To dynamically adjust the number of partitions"],
      correct: [0],
      concept: "Accumulators are shared variables that allow tasks running on executors to add values using an associative and commutative operation. The aggregated result is available only on the Driver. Common uses include counting events and summing values."
    },
    {
      id: 22,
      type: "single",
      difficulty: 1,
      question: "Which property ensures that an RDD can recover from node failures?",
      options: ["Lineage information stored as a DAG of transformations", "Automatic replication of each partition to three nodes", "Periodic snapshots written to HDFS every 10 seconds", "Real-time mirroring to a standby cluster"],
      correct: [0],
      concept: "RDDs achieve fault tolerance through lineage — each RDD maintains a record of the transformations used to build it. If a partition is lost, Spark replays the lineage to recompute only the lost partition, avoiding the overhead of full data replication."
    },
    {
      id: 23,
      type: "single",
      difficulty: 1,
      question: "What creates a stage boundary in a Spark job?",
      options: ["A wide transformation that requires a shuffle", "Any call to the map() function", "The creation of a new SparkSession", "The invocation of a narrow transformation"],
      correct: [0],
      concept: "Stage boundaries are created by wide transformations (like groupByKey, reduceByKey, join) that require a shuffle. Within a stage, Spark pipelines narrow transformations together for maximum efficiency. Each stage contains tasks that can run in parallel."
    },
    {
      id: 24,
      type: "single",
      difficulty: 1,
      question: "After the DAG Scheduler creates stages, which component assigns tasks to specific executors?",
      options: ["Task Scheduler", "DAG Scheduler", "Cluster Manager", "Block Manager"],
      correct: [0],
      concept: "The Task Scheduler receives stages from the DAG Scheduler and is responsible for assigning individual tasks to available executors. It considers data locality (where the data resides) to minimize data transfer when assigning tasks."
    },
    {
      id: 25,
      type: "single",
      difficulty: 1,
      question: "How are RDD partitions distributed across a Spark cluster?",
      options: ["Each partition resides on a single node and tasks process one partition at a time", "All partitions are stored on the Driver and sent to executors on demand", "Partitions are split across multiple nodes for redundancy", "Partitions are dynamically moved between nodes during processing"],
      correct: [0],
      concept: "Each RDD partition is a logical chunk of data that resides on a single node in the cluster. Spark schedules one task per partition, and tasks run in parallel across different executor cores. The number of partitions determines the degree of parallelism."
    },
    {
      id: 26,
      type: "single",
      difficulty: 1,
      question: "Which operation would you use to create an RDD from a local Python list?",
      options: ["sc.parallelize()", "sc.textFile()", "sc.wholeTextFiles()", "sc.newAPIHadoopFile()"],
      correct: [0],
      concept: "sc.parallelize() creates an RDD from a local collection (list, tuple) in the Driver program and distributes it across the cluster. sc.textFile() reads from external storage like HDFS or S3. Both return an RDD but from different data sources."
    },
    {
      id: 27,
      type: "single",
      difficulty: 1,
      question: "What is the relationship between SparkSession and SparkContext in Spark 2.x+?",
      options: ["SparkSession wraps SparkContext and provides additional functionality", "SparkContext replaces SparkSession entirely", "They are completely independent objects with no relationship", "SparkContext wraps SparkSession for backward compatibility"],
      correct: [0],
      concept: "SparkSession is the newer, unified entry point that internally creates and wraps a SparkContext. You can access the underlying SparkContext via spark.sparkContext. SparkSession adds DataFrame/SQL functionality on top of SparkContext\'s core RDD capabilities."
    },
    {
      id: 28,
      type: "single",
      difficulty: 1,
      question: "Which Spark action returns the number of elements in an RDD or DataFrame?",
      options: ["count()", "reduce()", "take()", "collect()"],
      correct: [0],
      concept: "count() is an action that triggers computation and returns the number of elements. reduce() combines elements using a function, take(n) returns the first n elements, and collect() returns all elements as an array to the Driver."
    },
    {
      id: 29,
      type: "single",
      difficulty: 1,
      question: "Which of the following best describes the Spark application lifecycle?",
      options: ["Driver starts, requests resources, executors launch, tasks run, results return to Driver", "Executors start first, then the Driver connects and sends tasks", "Cluster Manager compiles the code, then distributes it to all nodes", "Workers pull tasks from a shared queue managed by HDFS"],
      correct: [0],
      concept: "The Spark application lifecycle begins with the Driver starting and creating a SparkContext/SparkSession. The Driver requests resources from the Cluster Manager, which launches executors on worker nodes. Tasks are then sent to executors, and results flow back to the Driver."
    },
    {
      id: 30,
      type: "single",
      difficulty: 1,
      question: "Which spark-submit option specifies the cluster manager to connect to?",
      options: ["--master", "--deploy-mode", "--driver-memory", "--executor-cores"],
      correct: [0],
      concept: "The --master option in spark-submit specifies the cluster manager URL, such as local[*] for local mode, spark://host:port for Standalone, yarn for YARN, or k8s://host:port for Kubernetes."
    },
    {
      id: 31,
      type: "single",
      difficulty: 1,
      question: "What does local[*] mean when specified as the Spark master?",
      options: ["Run Spark locally using all available CPU cores", "Run Spark locally with exactly one core", "Connect to a remote Spark standalone cluster", "Run Spark on the local YARN resource manager"],
      correct: [0],
      concept: "local[*] runs Spark in local mode using as many worker threads as logical cores on the machine. local[4] would use exactly 4 cores, and local (without brackets) uses a single core. This is useful for development and testing."
    },
    {
      id: 32,
      type: "single",
      difficulty: 1,
      question: "Which of the following is an example of a narrow transformation in Spark?",
      options: ["filter()", "reduceByKey()", "groupByKey()", "join()"],
      correct: [0],
      concept: "filter() is a narrow transformation because each output partition depends on exactly one input partition — no data movement between partitions is needed. reduceByKey(), groupByKey(), and join() are wide transformations requiring shuffles."
    },
    {
      id: 33,
      type: "single",
      difficulty: 1,
      question: "Which Spark action returns all elements of an RDD as an array to the Driver program?",
      options: ["collect()", "count()", "foreach()", "saveAsTextFile()"],
      correct: [0],
      concept: "collect() returns all elements of the RDD/DataFrame as an array to the Driver. This should be used cautiously on large datasets because it can cause the Driver to run out of memory if the dataset is too large to fit in Driver memory."
    },
    {
      id: 34,
      type: "single",
      difficulty: 1,
      question: "What is the default number of partitions when reading a local file with sc.textFile() in Spark?",
      options: ["Determined by the HDFS block size or the defaultMinPartitions setting", "Always exactly one partition", "Equal to the number of executor cores", "Equal to the number of worker nodes"],
      correct: [0],
      concept: "When reading files, Spark uses the underlying Hadoop InputFormat to determine partitions. For HDFS, this is typically based on the block size (128MB by default). For local files, Spark uses defaultMinPartitions (usually 2) or the number of blocks in the file."
    },
    {
      id: 35,
      type: "single",
      difficulty: 1,
      question: "Which component in Spark is responsible for allocating resources to Spark applications?",
      options: ["Cluster Manager", "DAG Scheduler", "Task Scheduler", "Driver Program"],
      correct: [0],
      concept: "The Cluster Manager (e.g., YARN, Mesos, Kubernetes, or Standalone) is responsible for allocating resources (CPU, memory) to Spark applications. The Driver requests resources from the Cluster Manager, which then launches executor processes on worker nodes."
    },
    {
      id: 36,
      type: "single",
      difficulty: 2,
      question: "A Spark job has 3 stages. Stage 1 has 100 tasks, Stage 2 has 200 tasks, and Stage 3 has 50 tasks. What determines the number of tasks in each stage?",
      options: ["The number of partitions in the RDD/DataFrame at that stage", "The number of executor cores available in the cluster", "The number of transformations in that stage", "The total memory allocated to the application"],
      correct: [0],
      concept: "The number of tasks in a stage equals the number of partitions of the last RDD in that stage. Each task processes one partition. The number of executor cores determines how many tasks run in parallel, but not the total number of tasks."
    },
    {
      id: 37,
      type: "single",
      difficulty: 2,
      question: "What happens when you call rdd.cache() in Spark?",
      options: ["Nothing immediately — the RDD is marked for caching and will be stored when first computed", "The RDD is immediately computed and stored in memory", "The RDD is written to HDFS for persistence", "The RDD\'s lineage is truncated to save memory"],
      correct: [0],
      concept: "cache() is a lazy operation — it only marks the RDD to be stored in memory when it is first computed by an action. The actual caching happens during the first action that triggers computation. cache() is equivalent to persist(StorageLevel.MEMORY_ONLY)."
    },
    {
      id: 38,
      type: "single",
      difficulty: 2,
      question: "Why might you choose cluster deploy mode over client deploy mode for a production Spark application?",
      options: ["The client machine can disconnect after submitting, as the Driver runs inside the cluster", "Cluster mode uses less memory than client mode", "Cluster mode allows multiple Drivers per application", "Client mode does not support YARN as a cluster manager"],
      correct: [0],
      concept: "In cluster mode, the Driver runs on a worker node inside the cluster, so the submitting client can disconnect after submission. In client mode, the Driver runs on the client machine, which must stay connected. Cluster mode is preferred for production workloads."
    },
    {
      id: 39,
      type: "single",
      difficulty: 2,
      question: "What is the significance of the lineage graph in Spark\'s RDD model?",
      options: ["It records the sequence of transformations to enable fault-tolerant recomputation", "It stores the actual data in a compressed graph format", "It maps network connections between executors", "It tracks memory usage across all partitions"],
      correct: [0],
      concept: "The lineage graph (or RDD dependency graph) records all transformations applied to create an RDD. If any partition is lost due to a node failure, Spark uses the lineage to recompute only the lost partitions, providing fault tolerance without data replication."
    },
    {
      id: 40,
      type: "single",
      difficulty: 2,
      question: "Which spark-submit option would you use to specify the memory allocated to each executor?",
      options: ["--executor-memory", "--driver-memory", "--total-executor-cores", "--executor-cores"],
      correct: [0],
      concept: "--executor-memory sets the amount of memory per executor (e.g., --executor-memory 4g). --driver-memory sets the Driver\'s memory. --executor-cores sets the number of CPU cores per executor. --total-executor-cores limits total cores across all executors."
    },
    {
      id: 41,
      type: "single",
      difficulty: 2,
      question: "A Spark application applies map(), filter(), and then reduceByKey() to an RDD. How many stages will this job have?",
      options: ["Two stages", "Three stages", "One stage", "Four stages"],
      correct: [0],
      concept: "map() and filter() are narrow transformations that can be pipelined together in one stage. reduceByKey() is a wide transformation that creates a shuffle boundary, splitting the job into two stages: one before the shuffle and one after."
    },
    {
      id: 42,
      type: "single",
      difficulty: 2,
      question: "If an RDD has a long lineage chain, what technique can be used to truncate the lineage and stabilize the computation?",
      options: ["Checkpointing the RDD to reliable storage", "Calling cache() to store it in memory", "Increasing the number of partitions", "Using broadcast variables for intermediate data"],
      correct: [0],
      concept: "Checkpointing saves the RDD to reliable storage (like HDFS) and truncates its lineage. This prevents stack overflow from very long lineage chains and reduces recomputation time on failure. Unlike cache(), checkpoint() breaks the lineage graph."
    },
    {
      id: 43,
      type: "single",
      difficulty: 2,
      question: "Which of the following transformations would trigger a shuffle in Spark?",
      options: ["repartition()", "map()", "filter()", "flatMap()"],
      correct: [0],
      concept: "repartition() is a wide transformation that redistributes data across partitions, requiring a full shuffle. map(), filter(), and flatMap() are narrow transformations that process data within each partition independently without moving data."
    },
    {
      id: 44,
      type: "single",
      difficulty: 2,
      question: "What is the difference between repartition() and coalesce() in Spark?",
      options: ["coalesce() can only reduce partitions without a full shuffle; repartition() can increase or decrease with a shuffle", "repartition() is lazy; coalesce() is eager", "coalesce() only works on DataFrames; repartition() only works on RDDs", "They are identical operations with different names"],
      correct: [0],
      concept: "coalesce() reduces the number of partitions by merging existing partitions without a full shuffle (it uses narrow dependency). repartition() performs a full shuffle to create the desired number of partitions and can both increase or decrease the partition count."
    },
    {
      id: 45,
      type: "single",
      difficulty: 2,
      question: "When using YARN as the cluster manager, which component manages the Spark application\'s executor containers?",
      options: ["YARN ApplicationMaster", "YARN ResourceManager", "YARN NodeManager", "HDFS NameNode"],
      correct: [0],
      concept: "The YARN ApplicationMaster manages the lifecycle of a specific Spark application\'s executor containers. The ResourceManager allocates resources across the cluster, and NodeManagers manage containers on individual nodes. In cluster mode, the Driver runs inside the ApplicationMaster."
    },
    {
      id: 46,
      type: "single",
      difficulty: 2,
      question: "What is the primary benefit of lazy evaluation in Spark?",
      options: ["It allows Spark to optimize the execution plan by analyzing the entire computation before running it", "It ensures that data is always stored in memory", "It eliminates the need for a cluster manager", "It prevents out-of-memory errors on the Driver"],
      correct: [0],
      concept: "Lazy evaluation allows Spark to build a complete execution plan before running anything. This enables optimizations like predicate pushdown, projection pruning, and combining multiple transformations into single-pass operations (pipelining)."
    },
    {
      id: 47,
      type: "single",
      difficulty: 2,
      question: "Which DataFrame API method is used to infer the schema automatically when reading a CSV file?",
      options: ["option(\"inferSchema\", \"true\")", "option(\"autoSchema\", \"true\")", "option(\"detectTypes\", \"true\")", "option(\"schemaInfer\", \"true\")"],
      correct: [0],
      concept: "When reading CSV files, Spark can automatically infer column types by setting inferSchema to true. Without this, all columns are read as strings by default. Schema inference requires an extra pass through the data, which adds processing time."
    },
    {
      id: 48,
      type: "single",
      difficulty: 2,
      question: "Which of the following operations is considered an action in Spark?",
      options: ["saveAsTextFile()", "union()", "select()", "withColumn()"],
      correct: [0],
      concept: "saveAsTextFile() is an action because it triggers computation and writes results to storage. union(), select(), and withColumn() are transformations that create new RDDs/DataFrames lazily without triggering execution."
    },
    {
      id: 49,
      type: "single",
      difficulty: 2,
      question: "How does Spark handle data locality when scheduling tasks?",
      options: ["It tries to schedule tasks on nodes where the data already resides to minimize network transfer", "It always shuffles data to ensure even distribution before processing", "It copies all data to the Driver before distributing tasks", "Data locality is not considered in Spark\'s task scheduling"],
      correct: [0],
      concept: "Spark\'s task scheduler considers data locality levels: PROCESS_LOCAL (data in the same JVM), NODE_LOCAL (same node), RACK_LOCAL (same rack), and ANY. It prefers the highest locality level to minimize data movement across the network."
    },
    {
      id: 50,
      type: "single",
      difficulty: 2,
      question: "In a Spark Standalone cluster, what is the role of the Master node?",
      options: ["It acts as the cluster manager, allocating resources to Spark applications", "It executes tasks and stores data partitions", "It runs the Driver for every Spark application", "It serves as the storage layer for Spark data"],
      correct: [0],
      concept: "In Spark Standalone mode, the Master node acts as the cluster manager. It tracks available Worker nodes, allocates resources (cores and memory) to applications, and monitors the health of Workers. Worker nodes host executors that run tasks."
    },
    {
      id: 51,
      type: "single",
      difficulty: 2,
      question: "What does the foreach() action do in Spark?",
      options: ["Applies a function to each element of the RDD on the executor side without returning results", "Returns each element to the Driver one at a time", "Transforms each element and creates a new RDD", "Counts the number of elements that match a condition"],
      correct: [0],
      concept: "foreach() applies a function to each element of the RDD but runs the function on the executor nodes, not on the Driver. It is commonly used for side effects like writing to external databases. Unlike map(), it does not return a new RDD."
    },
    {
      id: 52,
      type: "single",
      difficulty: 2,
      question: "Which of these is NOT a valid Spark storage level for persist()?",
      options: ["MEMORY_AND_NETWORK", "MEMORY_ONLY", "MEMORY_AND_DISK", "DISK_ONLY"],
      correct: [0],
      concept: "Valid Spark storage levels include MEMORY_ONLY, MEMORY_AND_DISK, DISK_ONLY, MEMORY_ONLY_SER, MEMORY_AND_DISK_SER, and OFF_HEAP. MEMORY_AND_NETWORK is not a valid storage level. The _2 suffix variants store replicas on two nodes."
    },
    {
      id: 53,
      type: "single",
      difficulty: 2,
      question: "When would you use reduceByKey() instead of groupByKey() in Spark?",
      options: ["When you want to combine values by key with less shuffle data by performing a local aggregation first", "When you need to collect all values for each key into a list", "When you want to sort the keys before grouping", "When the dataset has no key-value pairs"],
      correct: [0],
      concept: "reduceByKey() performs a local (map-side) aggregation before the shuffle, significantly reducing the amount of data transferred. groupByKey() shuffles all values for each key across the network without local aggregation, which can be much slower and cause OOM errors."
    },
    {
      id: 54,
      type: "single",
      difficulty: 2,
      question: "Which Spark feature allows you to run SQL queries directly on DataFrames?",
      options: ["Registering the DataFrame as a temporary view and using spark.sql()", "Using the rdd.sql() method on any RDD", "Converting the DataFrame to a Pandas DataFrame first", "Writing the DataFrame to Hive and querying externally"],
      correct: [0],
      concept: "You can register a DataFrame as a temporary view using createOrReplaceTempView(\"tableName\") and then run SQL queries with spark.sql(\"SELECT * FROM tableName\"). This leverages the same Catalyst optimizer used by DataFrame operations."
    },
    {
      id: 55,
      type: "single",
      difficulty: 2,
      question: "What is a Spark Job in the context of execution hierarchy?",
      options: ["A parallel computation triggered by a single action, consisting of one or more stages", "A single task running on one executor core", "The entire Spark application from start to finish", "A single transformation applied to an RDD"],
      correct: [0],
      concept: "In Spark\'s execution hierarchy: Application > Job > Stage > Task. Each action triggers a Job. A Job is divided into Stages based on shuffle boundaries. Each Stage contains multiple Tasks, one per partition, that run in parallel on executors."
    },
    {
      id: 56,
      type: "single",
      difficulty: 2,
      question: "What happens if an executor fails during a Spark application?",
      options: ["The Driver requests a new executor from the Cluster Manager and re-runs the lost tasks", "The entire application fails immediately", "The failed tasks are skipped and results are returned without them", "The Driver takes over the failed executor\'s tasks locally"],
      correct: [0],
      concept: "When an executor fails, Spark\'s fault tolerance mechanism kicks in. The Driver detects the failure, requests a replacement executor from the Cluster Manager, and re-schedules the lost tasks. If the RDD was cached, the lost partitions are recomputed from lineage."
    },
    {
      id: 57,
      type: "single",
      difficulty: 2,
      question: "Which deploy mode should you use for interactive debugging with spark-shell?",
      options: ["Client mode, so Driver logs are displayed directly on the terminal", "Cluster mode, so the Driver runs inside the cluster for better performance", "Local mode is the only option for spark-shell", "Both modes work identically for spark-shell"],
      correct: [0],
      concept: "spark-shell always runs in client deploy mode because it needs an interactive REPL on the local machine. Client mode displays Driver logs directly on the terminal, making it ideal for debugging. Cluster mode would run the Driver remotely, preventing interactive use."
    },
    {
      id: 58,
      type: "single",
      difficulty: 2,
      question: "What is speculative execution in Spark?",
      options: ["Running duplicate copies of slow tasks to use whichever finishes first", "Predicting which transformations the user will call next", "Executing all branches of an if-else condition simultaneously", "Pre-fetching data from disk before a task requests it"],
      correct: [0],
      concept: "Speculative execution launches backup copies of tasks that are running significantly slower than the median. The first copy to finish provides the result, and the other is killed. This helps mitigate stragglers caused by hardware issues or data skew."
    },
    {
      id: 59,
      type: "single",
      difficulty: 2,
      question: "Which method converts a DataFrame to an RDD in Spark?",
      options: ["df.rdd", "df.toRDD()", "df.asRDD()", "df.convertRDD()"],
      correct: [0],
      concept: "df.rdd is a property (not a method call) that returns the underlying RDD[Row] of a DataFrame. This allows you to use RDD-level operations when DataFrame/SQL APIs are insufficient. Note that this bypasses the Catalyst optimizer."
    },
    {
      id: 60,
      type: "single",
      difficulty: 2,
      question: "Which Spark configuration property sets the default number of partitions for shuffles?",
      options: ["spark.sql.shuffle.partitions", "spark.default.parallelism", "spark.shuffle.partitions.count", "spark.executor.partitions"],
      correct: [0],
      concept: "spark.sql.shuffle.partitions (default 200) controls the number of partitions after a shuffle in DataFrame/SQL operations. spark.default.parallelism controls the default for RDD operations. These can significantly impact performance if set incorrectly."
    },
    {
      id: 61,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are valid Spark cluster manager types? (Select all that apply)",
      options: ["Apache YARN", "Kubernetes", "Apache Airflow", "Spark Standalone"],
      correct: [0, 1, 3],
      concept: "Spark supports four cluster managers: Spark Standalone (built-in), Apache YARN (Hadoop\'s resource manager), Apache Mesos (general-purpose cluster manager), and Kubernetes (container orchestration). Apache Airflow is a workflow scheduler, not a cluster manager."
    },
    {
      id: 62,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are properties of RDDs in Spark? (Select all that apply)",
      options: ["Immutable", "Partitioned across the cluster", "Schema-enforced with named columns", "Fault-tolerant via lineage"],
      correct: [0, 1, 3],
      concept: "RDDs are immutable (cannot be changed after creation), partitioned (distributed across cluster nodes), and fault-tolerant (can be recomputed from lineage). RDDs do NOT have a schema with named columns — that is a property of DataFrames."
    },
    {
      id: 63,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are actions in Spark? (Select all that apply)",
      options: ["count()", "take(5)", "filter()", "reduce()"],
      correct: [0, 1, 3],
      concept: "count(), take(), and reduce() are actions that trigger computation and return results. filter() is a transformation that lazily defines a new RDD without executing anything. Actions are the operations that kick off the job execution."
    },
    {
      id: 64,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are wide transformations in Spark? (Select all that apply)",
      options: ["groupByKey()", "join()", "map()", "repartition()"],
      correct: [0, 1, 3],
      concept: "groupByKey(), join(), and repartition() are wide transformations because they require data to be shuffled across partitions. map() is a narrow transformation where each input partition maps to exactly one output partition with no data movement."
    },
    {
      id: 65,
      type: "multi",
      difficulty: 2,
      question: "Which of the following can be configured using spark-submit? (Select all that apply)",
      options: ["Executor memory allocation", "Number of executor cores", "The cluster manager to use", "The HDFS block size for the file system"],
      correct: [0, 1, 2],
      concept: "spark-submit allows configuration of executor memory (--executor-memory), executor cores (--executor-cores), and the cluster manager (--master). HDFS block size is a Hadoop configuration, not a Spark application setting."
    },
    {
      id: 66,
      type: "multi",
      difficulty: 2,
      question: "Which statements about SparkSession are correct? (Select all that apply)",
      options: ["It is the unified entry point since Spark 2.0", "It internally manages a SparkContext", "It can only be used for DataFrame operations, not SQL", "It provides access to the Spark SQL engine"],
      correct: [0, 1, 3],
      concept: "SparkSession is the unified entry point since Spark 2.0, wrapping SparkContext, SQLContext, and HiveContext. It supports both DataFrame operations AND SQL queries via spark.sql(). It is NOT limited to DataFrame operations only."
    },
    {
      id: 67,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are valid ways to create an RDD in Spark? (Select all that apply)",
      options: ["Using sc.parallelize() on a local collection", "Using sc.textFile() to read from HDFS", "Transforming an existing RDD", "Using spark.read.csv() directly"],
      correct: [0, 1, 2],
      concept: "RDDs can be created by parallelizing a local collection, reading from external storage (textFile, wholeTextFiles), or transforming an existing RDD. spark.read.csv() creates a DataFrame, not an RDD, though you can convert it to an RDD afterward."
    },
    {
      id: 68,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are benefits of using DataFrames over RDDs? (Select all that apply)",
      options: ["Automatic optimization by the Catalyst optimizer", "Schema information enabling better storage formats", "Compile-time type safety in Python", "Higher-level API for common operations"],
      correct: [0, 1, 3],
      concept: "DataFrames benefit from Catalyst optimization, schema awareness for efficient storage (like Parquet), and higher-level APIs. Python does not have compile-time type checking, so DataFrames in PySpark do not provide compile-time type safety."
    },
    {
      id: 69,
      type: "multi",
      difficulty: 2,
      question: "Which of the following describe narrow dependencies in Spark? (Select all that apply)",
      options: ["Each parent partition is used by at most one child partition", "They allow pipelining within a single stage", "They require a shuffle to redistribute data", "map() and filter() are examples"],
      correct: [0, 1, 3],
      concept: "Narrow dependencies mean each parent partition contributes to at most one child partition, enabling pipelining (no need to wait for other partitions). They do NOT require shuffles. map(), filter(), and flatMap() are common examples of narrow transformations."
    },
    {
      id: 70,
      type: "multi",
      difficulty: 2,
      question: "What are the risks of calling collect() on a large Spark DataFrame? (Select all that apply)",
      options: ["The Driver may run out of memory", "Network bandwidth is consumed transferring all data to the Driver", "The Catalyst optimizer is bypassed entirely", "All data must fit in the Driver\'s JVM heap"],
      correct: [0, 1, 3],
      concept: "collect() brings all data from executors to the Driver, which can exhaust Driver memory if the dataset is large, consume network bandwidth, and requires all data to fit in the Driver\'s JVM heap. The Catalyst optimizer is NOT bypassed by collect()."
    },
    {
      id: 71,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are true about broadcast variables? (Select all that apply)",
      options: ["They are read-only on executor nodes", "They are sent to each node only once, not with each task", "They can be modified by executors to send data back to the Driver", "They are useful for lookup tables used across multiple tasks"],
      correct: [0, 1, 3],
      concept: "Broadcast variables are read-only on executors, sent once per node (not per task), and ideal for lookup tables. They cannot be modified by executors — that is the role of accumulators. Broadcast variables reduce network traffic by avoiding redundant data transfers."
    },
    {
      id: 72,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are true about accumulators in Spark? (Select all that apply)",
      options: ["They support add operations from executor tasks", "Their final value is readable only on the Driver", "They are guaranteed to update exactly once per task even with retries", "They can be used for counters and sums"],
      correct: [0, 1, 3],
      concept: "Accumulators allow tasks to add values (like counters or sums), and the aggregated result is readable on the Driver. However, they are NOT guaranteed to update exactly once — if a task is re-executed due to failure or speculation, accumulator updates may be counted multiple times."
    },
    {
      id: 73,
      type: "multi",
      difficulty: 2,
      question: "Which of the following operations would trigger a Spark job? (Select all that apply)",
      options: ["df.show()", "df.count()", "df.filter(col(\"x\") > 5)", "df.write.parquet(\"path\")"],
      correct: [0, 1, 3],
      concept: "show(), count(), and write.parquet() are all actions that trigger job execution. filter() is a transformation that is lazily evaluated and does not trigger a job on its own — it only builds a computation plan."
    },
    {
      id: 74,
      type: "multi",
      difficulty: 2,
      question: "In which scenarios would Spark create multiple jobs within a single application? (Select all that apply)",
      options: ["When multiple actions are called sequentially", "When multiple transformations are chained together", "When a DataFrame is written to two different output paths", "When the same DataFrame is counted and then collected"],
      correct: [0, 2, 3],
      concept: "Each action triggers a separate Spark job. Multiple sequential actions (count then collect), writing to multiple outputs, and other action calls each create separate jobs. Chaining transformations alone does not create any jobs — only actions do."
    },
    {
      id: 75,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are true about Spark\'s DAG Scheduler? (Select all that apply)",
      options: ["It creates stages based on shuffle boundaries", "It determines the physical execution plan", "It directly assigns tasks to specific executor cores", "It handles fault tolerance by resubmitting failed stages"],
      correct: [0, 1, 3],
      concept: "The DAG Scheduler creates stages at shuffle boundaries, determines the physical execution plan from the logical plan, and resubmits failed stages for fault tolerance. Task-to-executor assignment is the responsibility of the Task Scheduler, not the DAG Scheduler."
    },
    {
      id: 76,
      type: "multi",
      difficulty: 3,
      question: "Which of the following are valid Spark deploy modes and their correct descriptions? (Select all that apply)",
      options: ["Client mode: Driver runs on the submitting machine", "Cluster mode: Driver runs on a worker node in the cluster", "Local mode: Both Driver and executors run in the same JVM", "Hybrid mode: Driver splits between client and cluster"],
      correct: [0, 1, 2],
      concept: "Client mode runs the Driver on the submitting machine, cluster mode runs it on a worker node, and local mode runs everything in a single JVM (useful for testing). There is no \'hybrid mode\' in Spark — these are the valid deployment configurations."
    },
    {
      id: 77,
      type: "multi",
      difficulty: 3,
      question: "Which of the following are differences between persist() and checkpoint() in Spark? (Select all that apply)",
      options: ["persist() retains lineage; checkpoint() truncates lineage", "checkpoint() writes to reliable storage like HDFS; persist() uses executor memory/disk", "persist() is lazy; checkpoint() triggers immediate computation", "persist() is reversible with unpersist(); checkpoint() is not easily undone"],
      correct: [0, 1, 3],
      concept: "persist() stores data in executor memory/disk while retaining lineage and can be reversed with unpersist(). checkpoint() writes to HDFS and truncates lineage permanently. Both are actually lazy — checkpoint materialization happens at the next action, similar to persist()."
    },
    {
      id: 78,
      type: "multi",
      difficulty: 3,
      question: "Which of the following scenarios would benefit from using a broadcast variable? (Select all that apply)",
      options: ["A small lookup table joined with a large DataFrame", "A configuration map needed by every task", "A large dataset that needs to be aggregated across executors", "A small set of filter values used in every partition"],
      correct: [0, 1, 3],
      concept: "Broadcast variables are ideal for small datasets needed across many tasks: lookup tables for joins, configuration maps, and filter value sets. Large datasets should not be broadcast — they would consume too much memory on each node and slow down transfer."
    },
    {
      id: 79,
      type: "multi",
      difficulty: 3,
      question: "When a Spark application is submitted to YARN in cluster mode, which of the following occur? (Select all that apply)",
      options: ["The YARN ResourceManager allocates a container for the ApplicationMaster", "The Driver runs inside the ApplicationMaster container", "The client machine must remain connected for the entire duration", "The ApplicationMaster requests executor containers from the ResourceManager"],
      correct: [0, 1, 3],
      concept: "In YARN cluster mode, the ResourceManager allocates a container for the ApplicationMaster, which hosts the Spark Driver. The AM then requests executor containers. The client does NOT need to stay connected — it can disconnect after submission."
    },
    {
      id: 80,
      type: "multi",
      difficulty: 3,
      question: "Which of the following statements about Spark\'s task scheduling and data locality are correct? (Select all that apply)",
      options: ["PROCESS_LOCAL means data is in the same JVM as the task", "NODE_LOCAL means data is on the same node but in a different process", "Spark will wait for a configurable timeout before moving to a lower locality level", "ANY locality means data might be on a completely different rack"],
      correct: [0, 1, 2, 3],
      concept: "Spark considers locality levels in order: PROCESS_LOCAL (same JVM) > NODE_LOCAL (same node, different process) > RACK_LOCAL (same rack) > ANY (any location). Spark waits spark.locality.wait before falling back to lower levels to balance locality with scheduling delays."
    },
    {
      id: 81,
      type: "multi",
      difficulty: 3,
      question: "Which of the following could cause a Spark application to run out of Driver memory? (Select all that apply)",
      options: ["Calling collect() on a very large DataFrame", "Using a broadcast variable larger than available Driver memory", "Having too many tasks in a single stage", "Creating a large accumulator result that is aggregated on the Driver"],
      correct: [0, 1, 3],
      concept: "collect() brings all data to the Driver, broadcast variables are first materialized on the Driver, and accumulator results are aggregated on the Driver — all can cause OOM. Too many tasks in a stage affects executor scheduling but does not directly consume Driver memory."
    },
    {
      id: 82,
      type: "multi",
      difficulty: 3,
      question: "Which of the following are true about Spark\'s Dataset API? (Select all that apply)",
      options: ["It provides compile-time type safety in Scala and Java", "It is optimized by the Catalyst optimizer", "In Python, Dataset and DataFrame are the same type", "It supports both functional and relational operations"],
      correct: [0, 1, 2, 3],
      concept: "The Dataset API provides type safety (Scala/Java), benefits from Catalyst optimization, and supports both functional (map, filter) and relational (select, where) operations. In Python, there is no separate Dataset type — DataFrame is Dataset[Row]."
    },
    {
      id: 83,
      type: "multi",
      difficulty: 3,
      question: "Which of the following accurately describe what happens during a shuffle in Spark? (Select all that apply)",
      options: ["Data is written to disk on the map side before transfer", "Data is transferred across the network between executors", "A new stage begins after the shuffle", "Shuffle data is always compressed using LZ4 by default"],
      correct: [0, 1, 2],
      concept: "During a shuffle, map-side tasks write output to local disk, which is then read by reduce-side tasks over the network, starting a new stage. Shuffle compression is configurable via spark.shuffle.compress (default true) but the codec is configurable — it defaults to lz4 but is not guaranteed."
    },
    {
      id: 84,
      type: "multi",
      difficulty: 3,
      question: "Which of the following Spark configurations impact parallelism? (Select all that apply)",
      options: ["spark.sql.shuffle.partitions", "spark.default.parallelism", "spark.executor.cores", "spark.sql.warehouse.dir"],
      correct: [0, 1, 2],
      concept: "spark.sql.shuffle.partitions controls post-shuffle partition count for SQL/DataFrames. spark.default.parallelism sets default RDD partition count. spark.executor.cores determines concurrent tasks per executor. spark.sql.warehouse.dir is the Hive warehouse path and does not affect parallelism."
    },
    {
      id: 85,
      type: "multi",
      difficulty: 3,
      question: "Which of the following correctly describe the differences between client and cluster deploy modes? (Select all that apply)",
      options: ["In client mode, the Driver logs are visible on the client machine", "In cluster mode, the Driver process is managed by the cluster manager", "Client mode is preferred for production long-running jobs", "Cluster mode makes it harder to access Driver logs interactively"],
      correct: [0, 1, 3],
      concept: "In client mode, Driver runs locally with visible logs. In cluster mode, the Driver is managed by the cluster manager with logs stored in the cluster. Cluster mode (not client) is preferred for production because the client can disconnect. Client mode is for interactive/debugging use."
    },
    {
      id: 86,
      type: "tf",
      difficulty: 3,
      question: "Spark transformations are executed immediately when they are called in the user\'s program.",
      options: ["False — transformations are lazily evaluated and only execute when an action is triggered", "True — transformations execute immediately and return results to the Driver"],
      correct: [0],
      concept: "Spark uses lazy evaluation for transformations. When you call map(), filter(), or any transformation, Spark only records it in the lineage graph. No computation occurs until an action (like count(), collect(), or save()) forces the execution of the plan."
    },
    {
      id: 87,
      type: "tf",
      difficulty: 3,
      question: "RDDs in Spark are mutable — you can update individual elements after creation.",
      options: ["False — RDDs are immutable; you create new RDDs via transformations on existing ones", "True — RDDs support in-place updates for better memory efficiency"],
      correct: [0],
      concept: "RDDs are immutable by design. Once created, their contents cannot be changed. To \'modify\' data, you apply a transformation that produces a new RDD. Immutability enables safe sharing across parallel tasks and simplifies fault tolerance through lineage."
    },
    {
      id: 88,
      type: "tf",
      difficulty: 3,
      question: "In Spark, a single action always results in exactly one stage.",
      options: ["False — an action can trigger multiple stages if the computation involves shuffle operations", "True — each action maps to exactly one stage in the DAG"],
      correct: [0],
      concept: "An action triggers a job, and a job can have multiple stages. Stage boundaries are created by wide transformations (shuffles). For example, a job with two shuffles would have three stages. The number of stages depends on the complexity of the computation."
    },
    {
      id: 89,
      type: "tf",
      difficulty: 3,
      question: "Broadcast variables in Spark can be updated by executor tasks to send data back to the Driver.",
      options: ["False — broadcast variables are read-only on executors; use accumulators for executor-to-Driver communication", "True — broadcast variables support bidirectional communication between Driver and executors"],
      correct: [0],
      concept: "Broadcast variables are strictly read-only on executor nodes. They are designed for efficient distribution of read-only data from the Driver to all executors. For sending data from executors back to the Driver, use accumulators instead."
    },
    {
      id: 90,
      type: "tf",
      difficulty: 3,
      question: "The coalesce() operation always performs a full shuffle to change the number of partitions.",
      options: ["False — coalesce() avoids a full shuffle when reducing partitions by merging existing ones", "True — coalesce() performs a full shuffle similar to repartition()"],
      correct: [0],
      concept: "coalesce() is optimized for reducing the number of partitions. It merges existing partitions without a full shuffle, using narrow dependencies. repartition() always performs a full shuffle. However, if you try to increase partitions with coalesce(), it will not have the desired effect."
    },
    {
      id: 91,
      type: "tf",
      difficulty: 3,
      question: "SparkSession.builder.getOrCreate() will always create a brand new SparkSession even if one already exists.",
      options: ["False — getOrCreate() returns the existing SparkSession if one exists, or creates a new one if not", "True — getOrCreate() always creates a fresh SparkSession to avoid configuration conflicts"],
      correct: [0],
      concept: "getOrCreate() is designed to return the existing SparkSession if one already exists in the JVM. This is the recommended way to obtain a SparkSession because it prevents the error of creating multiple sessions. Only builder.create() forces a new session creation."
    },
    {
      id: 92,
      type: "tf",
      difficulty: 3,
      question: "In Spark, the number of tasks in a stage is determined by the number of executor cores available.",
      options: ["False — the number of tasks equals the number of partitions; executor cores determine how many run in parallel", "True — Spark creates one task per available executor core regardless of partition count"],
      correct: [0],
      concept: "The number of tasks in a stage equals the number of partitions of the RDD/DataFrame being processed. The number of executor cores determines how many tasks run concurrently, not the total number of tasks. Having more partitions than cores means some tasks wait."
    },
    {
      id: 93,
      type: "tf",
      difficulty: 3,
      question: "Spark\'s Catalyst optimizer can optimize RDD operations the same way it optimizes DataFrame operations.",
      options: ["False — the Catalyst optimizer only works with structured APIs like DataFrames and Datasets, not with RDDs", "True — Catalyst optimizes all Spark operations including RDD transformations equally well"],
      correct: [0],
      concept: "The Catalyst optimizer requires schema and type information to optimize execution plans. RDDs are opaque objects without schema information, so Catalyst cannot analyze or optimize RDD operations. DataFrames and Datasets provide the structured information Catalyst needs."
    },
    {
      id: 94,
      type: "tf",
      difficulty: 3,
      question: "When using YARN as the cluster manager, the Spark Driver always runs on the YARN ResourceManager node.",
      options: ["False — in cluster mode the Driver runs in the ApplicationMaster container on a worker node, not on the ResourceManager", "True — the ResourceManager always hosts the Spark Driver process for centralized management"],
      correct: [0],
      concept: "The YARN ResourceManager manages cluster resources but does not run application code. In cluster mode, the Driver runs inside the ApplicationMaster container on a worker node. In client mode, the Driver runs on the submitting machine. Neither runs on the ResourceManager node."
    },
    {
      id: 95,
      type: "tf",
      difficulty: 3,
      question: "Calling cache() on an RDD guarantees that the data will be stored in memory without any data loss.",
      options: ["False — if memory is insufficient, Spark evicts cached partitions using LRU and recomputes them when needed", "True — cache() reserves dedicated memory that cannot be used by other processes"],
      correct: [0],
      concept: "cache() (MEMORY_ONLY) stores partitions in memory, but if there isn\'t enough memory, Spark will evict older cached partitions using LRU (Least Recently Used) policy. Evicted partitions are recomputed from lineage when needed. Use persist(MEMORY_AND_DISK) for spill-to-disk behavior."
    },
    {
      id: 96,
      type: "tf",
      difficulty: 3,
      question: "Accumulators in Spark are guaranteed to be updated exactly once, even when tasks are re-executed due to failures.",
      options: ["False — accumulators may be updated more than once if tasks are retried or speculatively executed", "True — Spark tracks accumulator updates per task and deduplicates them automatically"],
      correct: [0],
      concept: "Accumulators in transformations are NOT guaranteed exactly-once semantics. If a task fails and is retried, the accumulator updates from the failed attempt might still be counted. Only accumulator updates inside actions are guaranteed to run once. This is a common gotcha in Spark."
    },
    {
      id: 97,
      type: "tf",
      difficulty: 3,
      question: "The map() transformation in Spark creates a wide dependency that requires a shuffle.",
      options: ["False — map() creates a narrow dependency where each input partition maps to exactly one output partition", "True — map() redistributes data across partitions, requiring a network shuffle"],
      correct: [0],
      concept: "map() is a classic narrow transformation. It applies a function to each element independently within the same partition. No data needs to move between partitions, so no shuffle is required. Examples of wide transformations requiring shuffles include groupByKey() and repartition()."
    },
    {
      id: 98,
      type: "tf",
      difficulty: 3,
      question: "A Spark application can dynamically request more or fewer executors during execution when dynamic allocation is enabled.",
      options: ["True — dynamic allocation allows Spark to scale executors up or down based on workload demand", "False — the number of executors is fixed at application submission and cannot change during runtime"],
      correct: [0],
      concept: "Dynamic allocation (spark.dynamicAllocation.enabled=true) allows Spark to request additional executors when there are pending tasks and release idle executors when they are not needed. This optimizes resource usage in shared clusters like YARN or Kubernetes."
    },
    {
      id: 99,
      type: "tf",
      difficulty: 3,
      question: "In Spark Standalone mode, the Master node also runs executor processes to maximize cluster utilization.",
      options: ["False — the Master node only manages resources; executors run on Worker nodes", "True — the Master node runs both management processes and executor tasks"],
      correct: [0],
      concept: "In Spark Standalone mode, the Master node is responsible only for resource management and scheduling. Executor processes run exclusively on Worker nodes. Running executors on the Master would interfere with its management duties and is not part of Standalone architecture."
    },
    {
      id: 100,
      type: "tf",
      difficulty: 3,
      question: "The reduce() action in Spark is a transformation because it produces a new RDD with fewer elements.",
      options: ["False — reduce() is an action that aggregates all elements and returns a single value to the Driver", "True — reduce() is a transformation that creates a smaller RDD from a larger one"],
      correct: [0],
      concept: "reduce() is an action, not a transformation. It takes a binary function and combines all elements of the RDD into a single value, which is returned to the Driver program. Because it returns a concrete result (not a new RDD), it triggers the execution of the entire lineage."
    }
  ]
};

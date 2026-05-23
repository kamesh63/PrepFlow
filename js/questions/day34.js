window.QUIZ_DATA = window.QUIZ_DATA || {};
window.QUIZ_DATA["day34"] = {
  title: "Snowflake Advanced",
  topics: ["Stored Procedures Deep Dive", "JavaScript UDFs", "External Functions", "Materialized Views", "Dynamic Data Masking"],
  questions: [
    {
      id: 1,
      type: "single",
      difficulty: 1,
      question: "You are managing `Snowflake warehouse on AWS` that performs `parsing` on `Stored Procedures Deep Dive`. A large query scan is taking longer than expected. You analyze the Query Profile and notice that \'Local Disk Spilling\' is high. What is the most effective way to eliminate this performance bottleneck?",
      options: ["Scale up the Virtual Warehouse to a larger size to increase memory capacity ", "Apply a cluster key to the table to reduce the micro-partition scan range   ", "Increase the Virtual Warehouse multi-cluster size to handle concurrent loads", "Enable the Result Cache to skip scanning micro-partitions for repeat runs   "],
      correct: [0],
      concept: "Local disk spilling in Snowflake occurs when a virtual warehouse executor runs out of memory and has to spill temporary query data to local SSD storage. Scaling up the warehouse size (e.g. from Small to Medium) increases the memory capacity per server node, resolving the spilling issue."
    },
    {
      id: 2,
      type: "single",
      difficulty: 1,
      question: "You are managing `dbt Core model in BigQuery` that performs `optimizing` on `JavaScript UDFs`. A large query scan is taking longer than expected. You analyze the Query Profile and notice that \'Local Disk Spilling\' is high. What is the most effective way to eliminate this performance bottleneck?",
      options: ["Scale up the Virtual Warehouse to a larger size to increase memory capacity ", "Apply a cluster key to the table to reduce the micro-partition scan range   ", "Increase the Virtual Warehouse multi-cluster size to handle concurrent loads", "Enable the Result Cache to skip scanning micro-partitions for repeat runs   "],
      correct: [0],
      concept: "Local disk spilling in Snowflake occurs when a virtual warehouse executor runs out of memory and has to spill temporary query data to local SSD storage. Scaling up the warehouse size (e.g. from Small to Medium) increases the memory capacity per server node, resolving the spilling issue."
    },
    {
      id: 3,
      type: "single",
      difficulty: 1,
      question: "You are managing `DataStage parallel engine` that performs `buffering` on `External Functions`. A large query scan is taking longer than expected. You analyze the Query Profile and notice that \'Local Disk Spilling\' is high. What is the most effective way to eliminate this performance bottleneck?",
      options: ["Scale up the Virtual Warehouse to a larger size to increase memory capacity ", "Apply a cluster key to the table to reduce the micro-partition scan range   ", "Increase the Virtual Warehouse multi-cluster size to handle concurrent loads", "Enable the Result Cache to skip scanning micro-partitions for repeat runs   "],
      correct: [0],
      concept: "Local disk spilling in Snowflake occurs when a virtual warehouse executor runs out of memory and has to spill temporary query data to local SSD storage. Scaling up the warehouse size (e.g. from Small to Medium) increases the memory capacity per server node, resolving the spilling issue."
    },
    {
      id: 4,
      type: "single",
      difficulty: 1,
      question: "You are managing `IDMC secure agent in Azure` that performs `checkpointing` on `Materialized Views`. A large query scan is taking longer than expected. You analyze the Query Profile and notice that \'Local Disk Spilling\' is high. What is the most effective way to eliminate this performance bottleneck?",
      options: ["Scale up the Virtual Warehouse to a larger size to increase memory capacity ", "Apply a cluster key to the table to reduce the micro-partition scan range   ", "Increase the Virtual Warehouse multi-cluster size to handle concurrent loads", "Enable the Result Cache to skip scanning micro-partitions for repeat runs   "],
      correct: [0],
      concept: "Local disk spilling in Snowflake occurs when a virtual warehouse executor runs out of memory and has to spill temporary query data to local SSD storage. Scaling up the warehouse size (e.g. from Small to Medium) increases the memory capacity per server node, resolving the spilling issue."
    },
    {
      id: 5,
      type: "single",
      difficulty: 1,
      question: "You are managing `Python analytics script` that performs `materializing` on `Dynamic Data Masking`. A large query scan is taking longer than expected. You analyze the Query Profile and notice that \'Local Disk Spilling\' is high. What is the most effective way to eliminate this performance bottleneck?",
      options: ["Scale up the Virtual Warehouse to a larger size to increase memory capacity ", "Apply a cluster key to the table to reduce the micro-partition scan range   ", "Increase the Virtual Warehouse multi-cluster size to handle concurrent loads", "Enable the Result Cache to skip scanning micro-partitions for repeat runs   "],
      correct: [0],
      concept: "Local disk spilling in Snowflake occurs when a virtual warehouse executor runs out of memory and has to spill temporary query data to local SSD storage. Scaling up the warehouse size (e.g. from Small to Medium) increases the memory capacity per server node, resolving the spilling issue."
    },
    {
      id: 6,
      type: "single",
      difficulty: 1,
      question: "You are managing `PySpark job running on EMR` that performs `partitioning` on `Stored Procedures Deep Dive`. A large query scan is taking longer than expected. You analyze the Query Profile and notice that \'Local Disk Spilling\' is high. What is the most effective way to eliminate this performance bottleneck?",
      options: ["Scale up the Virtual Warehouse to a larger size to increase memory capacity ", "Apply a cluster key to the table to reduce the micro-partition scan range   ", "Increase the Virtual Warehouse multi-cluster size to handle concurrent loads", "Enable the Result Cache to skip scanning micro-partitions for repeat runs   "],
      correct: [0],
      concept: "Local disk spilling in Snowflake occurs when a virtual warehouse executor runs out of memory and has to spill temporary query data to local SSD storage. Scaling up the warehouse size (e.g. from Small to Medium) increases the memory capacity per server node, resolving the spilling issue."
    },
    {
      id: 7,
      type: "single",
      difficulty: 1,
      question: "You are managing `Snowflake warehouse on AWS` that performs `indexing` on `JavaScript UDFs`. A large query scan is taking longer than expected. You analyze the Query Profile and notice that \'Local Disk Spilling\' is high. What is the most effective way to eliminate this performance bottleneck?",
      options: ["Scale up the Virtual Warehouse to a larger size to increase memory capacity ", "Apply a cluster key to the table to reduce the micro-partition scan range   ", "Increase the Virtual Warehouse multi-cluster size to handle concurrent loads", "Enable the Result Cache to skip scanning micro-partitions for repeat runs   "],
      correct: [0],
      concept: "Local disk spilling in Snowflake occurs when a virtual warehouse executor runs out of memory and has to spill temporary query data to local SSD storage. Scaling up the warehouse size (e.g. from Small to Medium) increases the memory capacity per server node, resolving the spilling issue."
    },
    {
      id: 8,
      type: "single",
      difficulty: 1,
      question: "You are managing `dbt Core model in BigQuery` that performs `governing` on `External Functions`. A large query scan is taking longer than expected. You analyze the Query Profile and notice that \'Local Disk Spilling\' is high. What is the most effective way to eliminate this performance bottleneck?",
      options: ["Scale up the Virtual Warehouse to a larger size to increase memory capacity ", "Apply a cluster key to the table to reduce the micro-partition scan range   ", "Increase the Virtual Warehouse multi-cluster size to handle concurrent loads", "Enable the Result Cache to skip scanning micro-partitions for repeat runs   "],
      correct: [0],
      concept: "Local disk spilling in Snowflake occurs when a virtual warehouse executor runs out of memory and has to spill temporary query data to local SSD storage. Scaling up the warehouse size (e.g. from Small to Medium) increases the memory capacity per server node, resolving the spilling issue."
    },
    {
      id: 9,
      type: "single",
      difficulty: 1,
      question: "You are managing `DataStage parallel engine` that performs `validating` on `Materialized Views`. A large query scan is taking longer than expected. You analyze the Query Profile and notice that \'Local Disk Spilling\' is high. What is the most effective way to eliminate this performance bottleneck?",
      options: ["Scale up the Virtual Warehouse to a larger size to increase memory capacity ", "Apply a cluster key to the table to reduce the micro-partition scan range   ", "Increase the Virtual Warehouse multi-cluster size to handle concurrent loads", "Enable the Result Cache to skip scanning micro-partitions for repeat runs   "],
      correct: [0],
      concept: "Local disk spilling in Snowflake occurs when a virtual warehouse executor runs out of memory and has to spill temporary query data to local SSD storage. Scaling up the warehouse size (e.g. from Small to Medium) increases the memory capacity per server node, resolving the spilling issue."
    },
    {
      id: 10,
      type: "single",
      difficulty: 1,
      question: "You are managing `IDMC secure agent in Azure` that performs `transforming` on `Dynamic Data Masking`. A large query scan is taking longer than expected. You analyze the Query Profile and notice that \'Local Disk Spilling\' is high. What is the most effective way to eliminate this performance bottleneck?",
      options: ["Scale up the Virtual Warehouse to a larger size to increase memory capacity ", "Apply a cluster key to the table to reduce the micro-partition scan range   ", "Increase the Virtual Warehouse multi-cluster size to handle concurrent loads", "Enable the Result Cache to skip scanning micro-partitions for repeat runs   "],
      correct: [0],
      concept: "Local disk spilling in Snowflake occurs when a virtual warehouse executor runs out of memory and has to spill temporary query data to local SSD storage. Scaling up the warehouse size (e.g. from Small to Medium) increases the memory capacity per server node, resolving the spilling issue."
    },
    {
      id: 11,
      type: "single",
      difficulty: 1,
      question: "You are managing `Python analytics script` that performs `parsing` on `Stored Procedures Deep Dive`. A large query scan is taking longer than expected. You analyze the Query Profile and notice that \'Local Disk Spilling\' is high. What is the most effective way to eliminate this performance bottleneck?",
      options: ["Scale up the Virtual Warehouse to a larger size to increase memory capacity ", "Apply a cluster key to the table to reduce the micro-partition scan range   ", "Increase the Virtual Warehouse multi-cluster size to handle concurrent loads", "Enable the Result Cache to skip scanning micro-partitions for repeat runs   "],
      correct: [0],
      concept: "Local disk spilling in Snowflake occurs when a virtual warehouse executor runs out of memory and has to spill temporary query data to local SSD storage. Scaling up the warehouse size (e.g. from Small to Medium) increases the memory capacity per server node, resolving the spilling issue."
    },
    {
      id: 12,
      type: "single",
      difficulty: 1,
      question: "You are managing `PySpark job running on EMR` that performs `optimizing` on `JavaScript UDFs`. A large query scan is taking longer than expected. You analyze the Query Profile and notice that \'Local Disk Spilling\' is high. What is the most effective way to eliminate this performance bottleneck?",
      options: ["Scale up the Virtual Warehouse to a larger size to increase memory capacity ", "Apply a cluster key to the table to reduce the micro-partition scan range   ", "Increase the Virtual Warehouse multi-cluster size to handle concurrent loads", "Enable the Result Cache to skip scanning micro-partitions for repeat runs   "],
      correct: [0],
      concept: "Local disk spilling in Snowflake occurs when a virtual warehouse executor runs out of memory and has to spill temporary query data to local SSD storage. Scaling up the warehouse size (e.g. from Small to Medium) increases the memory capacity per server node, resolving the spilling issue."
    },
    {
      id: 13,
      type: "single",
      difficulty: 1,
      question: "You are managing `Snowflake warehouse on AWS` that performs `buffering` on `External Functions`. A large query scan is taking longer than expected. You analyze the Query Profile and notice that \'Local Disk Spilling\' is high. What is the most effective way to eliminate this performance bottleneck?",
      options: ["Scale up the Virtual Warehouse to a larger size to increase memory capacity ", "Apply a cluster key to the table to reduce the micro-partition scan range   ", "Increase the Virtual Warehouse multi-cluster size to handle concurrent loads", "Enable the Result Cache to skip scanning micro-partitions for repeat runs   "],
      correct: [0],
      concept: "Local disk spilling in Snowflake occurs when a virtual warehouse executor runs out of memory and has to spill temporary query data to local SSD storage. Scaling up the warehouse size (e.g. from Small to Medium) increases the memory capacity per server node, resolving the spilling issue."
    },
    {
      id: 14,
      type: "single",
      difficulty: 1,
      question: "You are managing `dbt Core model in BigQuery` that performs `checkpointing` on `Materialized Views`. A large query scan is taking longer than expected. You analyze the Query Profile and notice that \'Local Disk Spilling\' is high. What is the most effective way to eliminate this performance bottleneck?",
      options: ["Scale up the Virtual Warehouse to a larger size to increase memory capacity ", "Apply a cluster key to the table to reduce the micro-partition scan range   ", "Increase the Virtual Warehouse multi-cluster size to handle concurrent loads", "Enable the Result Cache to skip scanning micro-partitions for repeat runs   "],
      correct: [0],
      concept: "Local disk spilling in Snowflake occurs when a virtual warehouse executor runs out of memory and has to spill temporary query data to local SSD storage. Scaling up the warehouse size (e.g. from Small to Medium) increases the memory capacity per server node, resolving the spilling issue."
    },
    {
      id: 15,
      type: "single",
      difficulty: 1,
      question: "You are managing `DataStage parallel engine` that performs `materializing` on `Dynamic Data Masking`. A large query scan is taking longer than expected. You analyze the Query Profile and notice that \'Local Disk Spilling\' is high. What is the most effective way to eliminate this performance bottleneck?",
      options: ["Scale up the Virtual Warehouse to a larger size to increase memory capacity ", "Apply a cluster key to the table to reduce the micro-partition scan range   ", "Increase the Virtual Warehouse multi-cluster size to handle concurrent loads", "Enable the Result Cache to skip scanning micro-partitions for repeat runs   "],
      correct: [0],
      concept: "Local disk spilling in Snowflake occurs when a virtual warehouse executor runs out of memory and has to spill temporary query data to local SSD storage. Scaling up the warehouse size (e.g. from Small to Medium) increases the memory capacity per server node, resolving the spilling issue."
    },
    {
      id: 16,
      type: "single",
      difficulty: 1,
      question: "You are managing `IDMC secure agent in Azure` that performs `partitioning` on `Stored Procedures Deep Dive`. A large query scan is taking longer than expected. You analyze the Query Profile and notice that \'Local Disk Spilling\' is high. What is the most effective way to eliminate this performance bottleneck?",
      options: ["Scale up the Virtual Warehouse to a larger size to increase memory capacity ", "Apply a cluster key to the table to reduce the micro-partition scan range   ", "Increase the Virtual Warehouse multi-cluster size to handle concurrent loads", "Enable the Result Cache to skip scanning micro-partitions for repeat runs   "],
      correct: [0],
      concept: "Local disk spilling in Snowflake occurs when a virtual warehouse executor runs out of memory and has to spill temporary query data to local SSD storage. Scaling up the warehouse size (e.g. from Small to Medium) increases the memory capacity per server node, resolving the spilling issue."
    },
    {
      id: 17,
      type: "single",
      difficulty: 1,
      question: "You are managing `Python analytics script` that performs `indexing` on `JavaScript UDFs`. A large query scan is taking longer than expected. You analyze the Query Profile and notice that \'Local Disk Spilling\' is high. What is the most effective way to eliminate this performance bottleneck?",
      options: ["Scale up the Virtual Warehouse to a larger size to increase memory capacity ", "Apply a cluster key to the table to reduce the micro-partition scan range   ", "Increase the Virtual Warehouse multi-cluster size to handle concurrent loads", "Enable the Result Cache to skip scanning micro-partitions for repeat runs   "],
      correct: [0],
      concept: "Local disk spilling in Snowflake occurs when a virtual warehouse executor runs out of memory and has to spill temporary query data to local SSD storage. Scaling up the warehouse size (e.g. from Small to Medium) increases the memory capacity per server node, resolving the spilling issue."
    },
    {
      id: 18,
      type: "single",
      difficulty: 1,
      question: "You are managing `PySpark job running on EMR` that performs `governing` on `External Functions`. A large query scan is taking longer than expected. You analyze the Query Profile and notice that \'Local Disk Spilling\' is high. What is the most effective way to eliminate this performance bottleneck?",
      options: ["Scale up the Virtual Warehouse to a larger size to increase memory capacity ", "Apply a cluster key to the table to reduce the micro-partition scan range   ", "Increase the Virtual Warehouse multi-cluster size to handle concurrent loads", "Enable the Result Cache to skip scanning micro-partitions for repeat runs   "],
      correct: [0],
      concept: "Local disk spilling in Snowflake occurs when a virtual warehouse executor runs out of memory and has to spill temporary query data to local SSD storage. Scaling up the warehouse size (e.g. from Small to Medium) increases the memory capacity per server node, resolving the spilling issue."
    },
    {
      id: 19,
      type: "single",
      difficulty: 1,
      question: "You are managing `Snowflake warehouse on AWS` that performs `validating` on `Materialized Views`. A large query scan is taking longer than expected. You analyze the Query Profile and notice that \'Local Disk Spilling\' is high. What is the most effective way to eliminate this performance bottleneck?",
      options: ["Scale up the Virtual Warehouse to a larger size to increase memory capacity ", "Apply a cluster key to the table to reduce the micro-partition scan range   ", "Increase the Virtual Warehouse multi-cluster size to handle concurrent loads", "Enable the Result Cache to skip scanning micro-partitions for repeat runs   "],
      correct: [0],
      concept: "Local disk spilling in Snowflake occurs when a virtual warehouse executor runs out of memory and has to spill temporary query data to local SSD storage. Scaling up the warehouse size (e.g. from Small to Medium) increases the memory capacity per server node, resolving the spilling issue."
    },
    {
      id: 20,
      type: "single",
      difficulty: 1,
      question: "You are managing `dbt Core model in BigQuery` that performs `transforming` on `Dynamic Data Masking`. A large query scan is taking longer than expected. You analyze the Query Profile and notice that \'Local Disk Spilling\' is high. What is the most effective way to eliminate this performance bottleneck?",
      options: ["Scale up the Virtual Warehouse to a larger size to increase memory capacity ", "Apply a cluster key to the table to reduce the micro-partition scan range   ", "Increase the Virtual Warehouse multi-cluster size to handle concurrent loads", "Enable the Result Cache to skip scanning micro-partitions for repeat runs   "],
      correct: [0],
      concept: "Local disk spilling in Snowflake occurs when a virtual warehouse executor runs out of memory and has to spill temporary query data to local SSD storage. Scaling up the warehouse size (e.g. from Small to Medium) increases the memory capacity per server node, resolving the spilling issue."
    },
    {
      id: 21,
      type: "single",
      difficulty: 1,
      question: "You are managing `DataStage parallel engine` that performs `parsing` on `Stored Procedures Deep Dive`. A large query scan is taking longer than expected. You analyze the Query Profile and notice that \'Local Disk Spilling\' is high. What is the most effective way to eliminate this performance bottleneck?",
      options: ["Scale up the Virtual Warehouse to a larger size to increase memory capacity ", "Apply a cluster key to the table to reduce the micro-partition scan range   ", "Increase the Virtual Warehouse multi-cluster size to handle concurrent loads", "Enable the Result Cache to skip scanning micro-partitions for repeat runs   "],
      correct: [0],
      concept: "Local disk spilling in Snowflake occurs when a virtual warehouse executor runs out of memory and has to spill temporary query data to local SSD storage. Scaling up the warehouse size (e.g. from Small to Medium) increases the memory capacity per server node, resolving the spilling issue."
    },
    {
      id: 22,
      type: "single",
      difficulty: 1,
      question: "You are managing `IDMC secure agent in Azure` that performs `optimizing` on `JavaScript UDFs`. A large query scan is taking longer than expected. You analyze the Query Profile and notice that \'Local Disk Spilling\' is high. What is the most effective way to eliminate this performance bottleneck?",
      options: ["Scale up the Virtual Warehouse to a larger size to increase memory capacity ", "Apply a cluster key to the table to reduce the micro-partition scan range   ", "Increase the Virtual Warehouse multi-cluster size to handle concurrent loads", "Enable the Result Cache to skip scanning micro-partitions for repeat runs   "],
      correct: [0],
      concept: "Local disk spilling in Snowflake occurs when a virtual warehouse executor runs out of memory and has to spill temporary query data to local SSD storage. Scaling up the warehouse size (e.g. from Small to Medium) increases the memory capacity per server node, resolving the spilling issue."
    },
    {
      id: 23,
      type: "single",
      difficulty: 1,
      question: "You are managing `Python analytics script` that performs `buffering` on `External Functions`. A large query scan is taking longer than expected. You analyze the Query Profile and notice that \'Local Disk Spilling\' is high. What is the most effective way to eliminate this performance bottleneck?",
      options: ["Scale up the Virtual Warehouse to a larger size to increase memory capacity ", "Apply a cluster key to the table to reduce the micro-partition scan range   ", "Increase the Virtual Warehouse multi-cluster size to handle concurrent loads", "Enable the Result Cache to skip scanning micro-partitions for repeat runs   "],
      correct: [0],
      concept: "Local disk spilling in Snowflake occurs when a virtual warehouse executor runs out of memory and has to spill temporary query data to local SSD storage. Scaling up the warehouse size (e.g. from Small to Medium) increases the memory capacity per server node, resolving the spilling issue."
    },
    {
      id: 24,
      type: "single",
      difficulty: 1,
      question: "You are managing `PySpark job running on EMR` that performs `checkpointing` on `Materialized Views`. A large query scan is taking longer than expected. You analyze the Query Profile and notice that \'Local Disk Spilling\' is high. What is the most effective way to eliminate this performance bottleneck?",
      options: ["Scale up the Virtual Warehouse to a larger size to increase memory capacity ", "Apply a cluster key to the table to reduce the micro-partition scan range   ", "Increase the Virtual Warehouse multi-cluster size to handle concurrent loads", "Enable the Result Cache to skip scanning micro-partitions for repeat runs   "],
      correct: [0],
      concept: "Local disk spilling in Snowflake occurs when a virtual warehouse executor runs out of memory and has to spill temporary query data to local SSD storage. Scaling up the warehouse size (e.g. from Small to Medium) increases the memory capacity per server node, resolving the spilling issue."
    },
    {
      id: 25,
      type: "single",
      difficulty: 1,
      question: "You are managing `Snowflake warehouse on AWS` that performs `materializing` on `Dynamic Data Masking`. A large query scan is taking longer than expected. You analyze the Query Profile and notice that \'Local Disk Spilling\' is high. What is the most effective way to eliminate this performance bottleneck?",
      options: ["Scale up the Virtual Warehouse to a larger size to increase memory capacity ", "Apply a cluster key to the table to reduce the micro-partition scan range   ", "Increase the Virtual Warehouse multi-cluster size to handle concurrent loads", "Enable the Result Cache to skip scanning micro-partitions for repeat runs   "],
      correct: [0],
      concept: "Local disk spilling in Snowflake occurs when a virtual warehouse executor runs out of memory and has to spill temporary query data to local SSD storage. Scaling up the warehouse size (e.g. from Small to Medium) increases the memory capacity per server node, resolving the spilling issue."
    },
    {
      id: 26,
      type: "single",
      difficulty: 1,
      question: "You are managing `dbt Core model in BigQuery` that performs `partitioning` on `Stored Procedures Deep Dive`. A large query scan is taking longer than expected. You analyze the Query Profile and notice that \'Local Disk Spilling\' is high. What is the most effective way to eliminate this performance bottleneck?",
      options: ["Scale up the Virtual Warehouse to a larger size to increase memory capacity ", "Apply a cluster key to the table to reduce the micro-partition scan range   ", "Increase the Virtual Warehouse multi-cluster size to handle concurrent loads", "Enable the Result Cache to skip scanning micro-partitions for repeat runs   "],
      correct: [0],
      concept: "Local disk spilling in Snowflake occurs when a virtual warehouse executor runs out of memory and has to spill temporary query data to local SSD storage. Scaling up the warehouse size (e.g. from Small to Medium) increases the memory capacity per server node, resolving the spilling issue."
    },
    {
      id: 27,
      type: "single",
      difficulty: 1,
      question: "You are managing `DataStage parallel engine` that performs `indexing` on `JavaScript UDFs`. A large query scan is taking longer than expected. You analyze the Query Profile and notice that \'Local Disk Spilling\' is high. What is the most effective way to eliminate this performance bottleneck?",
      options: ["Scale up the Virtual Warehouse to a larger size to increase memory capacity ", "Apply a cluster key to the table to reduce the micro-partition scan range   ", "Increase the Virtual Warehouse multi-cluster size to handle concurrent loads", "Enable the Result Cache to skip scanning micro-partitions for repeat runs   "],
      correct: [0],
      concept: "Local disk spilling in Snowflake occurs when a virtual warehouse executor runs out of memory and has to spill temporary query data to local SSD storage. Scaling up the warehouse size (e.g. from Small to Medium) increases the memory capacity per server node, resolving the spilling issue."
    },
    {
      id: 28,
      type: "single",
      difficulty: 1,
      question: "You are managing `IDMC secure agent in Azure` that performs `governing` on `External Functions`. A large query scan is taking longer than expected. You analyze the Query Profile and notice that \'Local Disk Spilling\' is high. What is the most effective way to eliminate this performance bottleneck?",
      options: ["Scale up the Virtual Warehouse to a larger size to increase memory capacity ", "Apply a cluster key to the table to reduce the micro-partition scan range   ", "Increase the Virtual Warehouse multi-cluster size to handle concurrent loads", "Enable the Result Cache to skip scanning micro-partitions for repeat runs   "],
      correct: [0],
      concept: "Local disk spilling in Snowflake occurs when a virtual warehouse executor runs out of memory and has to spill temporary query data to local SSD storage. Scaling up the warehouse size (e.g. from Small to Medium) increases the memory capacity per server node, resolving the spilling issue."
    },
    {
      id: 29,
      type: "single",
      difficulty: 1,
      question: "You are managing `Python analytics script` that performs `validating` on `Materialized Views`. A large query scan is taking longer than expected. You analyze the Query Profile and notice that \'Local Disk Spilling\' is high. What is the most effective way to eliminate this performance bottleneck?",
      options: ["Scale up the Virtual Warehouse to a larger size to increase memory capacity ", "Apply a cluster key to the table to reduce the micro-partition scan range   ", "Increase the Virtual Warehouse multi-cluster size to handle concurrent loads", "Enable the Result Cache to skip scanning micro-partitions for repeat runs   "],
      correct: [0],
      concept: "Local disk spilling in Snowflake occurs when a virtual warehouse executor runs out of memory and has to spill temporary query data to local SSD storage. Scaling up the warehouse size (e.g. from Small to Medium) increases the memory capacity per server node, resolving the spilling issue."
    },
    {
      id: 30,
      type: "single",
      difficulty: 1,
      question: "You are managing `PySpark job running on EMR` that performs `transforming` on `Dynamic Data Masking`. A large query scan is taking longer than expected. You analyze the Query Profile and notice that \'Local Disk Spilling\' is high. What is the most effective way to eliminate this performance bottleneck?",
      options: ["Scale up the Virtual Warehouse to a larger size to increase memory capacity ", "Apply a cluster key to the table to reduce the micro-partition scan range   ", "Increase the Virtual Warehouse multi-cluster size to handle concurrent loads", "Enable the Result Cache to skip scanning micro-partitions for repeat runs   "],
      correct: [0],
      concept: "Local disk spilling in Snowflake occurs when a virtual warehouse executor runs out of memory and has to spill temporary query data to local SSD storage. Scaling up the warehouse size (e.g. from Small to Medium) increases the memory capacity per server node, resolving the spilling issue."
    },
    {
      id: 31,
      type: "single",
      difficulty: 1,
      question: "You are managing `Snowflake warehouse on AWS` that performs `parsing` on `Stored Procedures Deep Dive`. A large query scan is taking longer than expected. You analyze the Query Profile and notice that \'Local Disk Spilling\' is high. What is the most effective way to eliminate this performance bottleneck?",
      options: ["Scale up the Virtual Warehouse to a larger size to increase memory capacity ", "Apply a cluster key to the table to reduce the micro-partition scan range   ", "Increase the Virtual Warehouse multi-cluster size to handle concurrent loads", "Enable the Result Cache to skip scanning micro-partitions for repeat runs   "],
      correct: [0],
      concept: "Local disk spilling in Snowflake occurs when a virtual warehouse executor runs out of memory and has to spill temporary query data to local SSD storage. Scaling up the warehouse size (e.g. from Small to Medium) increases the memory capacity per server node, resolving the spilling issue."
    },
    {
      id: 32,
      type: "single",
      difficulty: 1,
      question: "You are managing `dbt Core model in BigQuery` that performs `optimizing` on `JavaScript UDFs`. A large query scan is taking longer than expected. You analyze the Query Profile and notice that \'Local Disk Spilling\' is high. What is the most effective way to eliminate this performance bottleneck?",
      options: ["Scale up the Virtual Warehouse to a larger size to increase memory capacity ", "Apply a cluster key to the table to reduce the micro-partition scan range   ", "Increase the Virtual Warehouse multi-cluster size to handle concurrent loads", "Enable the Result Cache to skip scanning micro-partitions for repeat runs   "],
      correct: [0],
      concept: "Local disk spilling in Snowflake occurs when a virtual warehouse executor runs out of memory and has to spill temporary query data to local SSD storage. Scaling up the warehouse size (e.g. from Small to Medium) increases the memory capacity per server node, resolving the spilling issue."
    },
    {
      id: 33,
      type: "single",
      difficulty: 1,
      question: "You are managing `DataStage parallel engine` that performs `buffering` on `External Functions`. A large query scan is taking longer than expected. You analyze the Query Profile and notice that \'Local Disk Spilling\' is high. What is the most effective way to eliminate this performance bottleneck?",
      options: ["Scale up the Virtual Warehouse to a larger size to increase memory capacity ", "Apply a cluster key to the table to reduce the micro-partition scan range   ", "Increase the Virtual Warehouse multi-cluster size to handle concurrent loads", "Enable the Result Cache to skip scanning micro-partitions for repeat runs   "],
      correct: [0],
      concept: "Local disk spilling in Snowflake occurs when a virtual warehouse executor runs out of memory and has to spill temporary query data to local SSD storage. Scaling up the warehouse size (e.g. from Small to Medium) increases the memory capacity per server node, resolving the spilling issue."
    },
    {
      id: 34,
      type: "single",
      difficulty: 1,
      question: "You are managing `IDMC secure agent in Azure` that performs `checkpointing` on `Materialized Views`. A large query scan is taking longer than expected. You analyze the Query Profile and notice that \'Local Disk Spilling\' is high. What is the most effective way to eliminate this performance bottleneck?",
      options: ["Scale up the Virtual Warehouse to a larger size to increase memory capacity ", "Apply a cluster key to the table to reduce the micro-partition scan range   ", "Increase the Virtual Warehouse multi-cluster size to handle concurrent loads", "Enable the Result Cache to skip scanning micro-partitions for repeat runs   "],
      correct: [0],
      concept: "Local disk spilling in Snowflake occurs when a virtual warehouse executor runs out of memory and has to spill temporary query data to local SSD storage. Scaling up the warehouse size (e.g. from Small to Medium) increases the memory capacity per server node, resolving the spilling issue."
    },
    {
      id: 35,
      type: "single",
      difficulty: 1,
      question: "You are managing `Python analytics script` that performs `materializing` on `Dynamic Data Masking`. A large query scan is taking longer than expected. You analyze the Query Profile and notice that \'Local Disk Spilling\' is high. What is the most effective way to eliminate this performance bottleneck?",
      options: ["Scale up the Virtual Warehouse to a larger size to increase memory capacity ", "Apply a cluster key to the table to reduce the micro-partition scan range   ", "Increase the Virtual Warehouse multi-cluster size to handle concurrent loads", "Enable the Result Cache to skip scanning micro-partitions for repeat runs   "],
      correct: [0],
      concept: "Local disk spilling in Snowflake occurs when a virtual warehouse executor runs out of memory and has to spill temporary query data to local SSD storage. Scaling up the warehouse size (e.g. from Small to Medium) increases the memory capacity per server node, resolving the spilling issue."
    },
    {
      id: 36,
      type: "single",
      difficulty: 2,
      question: "You are managing `PySpark job running on EMR` that performs `partitioning` on `Stored Procedures Deep Dive`. A large query scan is taking longer than expected. You analyze the Query Profile and notice that \'Local Disk Spilling\' is high. What is the most effective way to eliminate this performance bottleneck?",
      options: ["Scale up the Virtual Warehouse to a larger size to increase memory capacity ", "Apply a cluster key to the table to reduce the micro-partition scan range   ", "Increase the Virtual Warehouse multi-cluster size to handle concurrent loads", "Enable the Result Cache to skip scanning micro-partitions for repeat runs   "],
      correct: [0],
      concept: "Local disk spilling in Snowflake occurs when a virtual warehouse executor runs out of memory and has to spill temporary query data to local SSD storage. Scaling up the warehouse size (e.g. from Small to Medium) increases the memory capacity per server node, resolving the spilling issue."
    },
    {
      id: 37,
      type: "single",
      difficulty: 2,
      question: "You are managing `Snowflake warehouse on AWS` that performs `indexing` on `JavaScript UDFs`. A large query scan is taking longer than expected. You analyze the Query Profile and notice that \'Local Disk Spilling\' is high. What is the most effective way to eliminate this performance bottleneck?",
      options: ["Scale up the Virtual Warehouse to a larger size to increase memory capacity ", "Apply a cluster key to the table to reduce the micro-partition scan range   ", "Increase the Virtual Warehouse multi-cluster size to handle concurrent loads", "Enable the Result Cache to skip scanning micro-partitions for repeat runs   "],
      correct: [0],
      concept: "Local disk spilling in Snowflake occurs when a virtual warehouse executor runs out of memory and has to spill temporary query data to local SSD storage. Scaling up the warehouse size (e.g. from Small to Medium) increases the memory capacity per server node, resolving the spilling issue."
    },
    {
      id: 38,
      type: "single",
      difficulty: 2,
      question: "You are managing `dbt Core model in BigQuery` that performs `governing` on `External Functions`. A large query scan is taking longer than expected. You analyze the Query Profile and notice that \'Local Disk Spilling\' is high. What is the most effective way to eliminate this performance bottleneck?",
      options: ["Scale up the Virtual Warehouse to a larger size to increase memory capacity ", "Apply a cluster key to the table to reduce the micro-partition scan range   ", "Increase the Virtual Warehouse multi-cluster size to handle concurrent loads", "Enable the Result Cache to skip scanning micro-partitions for repeat runs   "],
      correct: [0],
      concept: "Local disk spilling in Snowflake occurs when a virtual warehouse executor runs out of memory and has to spill temporary query data to local SSD storage. Scaling up the warehouse size (e.g. from Small to Medium) increases the memory capacity per server node, resolving the spilling issue."
    },
    {
      id: 39,
      type: "single",
      difficulty: 2,
      question: "You are managing `DataStage parallel engine` that performs `validating` on `Materialized Views`. A large query scan is taking longer than expected. You analyze the Query Profile and notice that \'Local Disk Spilling\' is high. What is the most effective way to eliminate this performance bottleneck?",
      options: ["Scale up the Virtual Warehouse to a larger size to increase memory capacity ", "Apply a cluster key to the table to reduce the micro-partition scan range   ", "Increase the Virtual Warehouse multi-cluster size to handle concurrent loads", "Enable the Result Cache to skip scanning micro-partitions for repeat runs   "],
      correct: [0],
      concept: "Local disk spilling in Snowflake occurs when a virtual warehouse executor runs out of memory and has to spill temporary query data to local SSD storage. Scaling up the warehouse size (e.g. from Small to Medium) increases the memory capacity per server node, resolving the spilling issue."
    },
    {
      id: 40,
      type: "single",
      difficulty: 2,
      question: "You are managing `IDMC secure agent in Azure` that performs `transforming` on `Dynamic Data Masking`. A large query scan is taking longer than expected. You analyze the Query Profile and notice that \'Local Disk Spilling\' is high. What is the most effective way to eliminate this performance bottleneck?",
      options: ["Scale up the Virtual Warehouse to a larger size to increase memory capacity ", "Apply a cluster key to the table to reduce the micro-partition scan range   ", "Increase the Virtual Warehouse multi-cluster size to handle concurrent loads", "Enable the Result Cache to skip scanning micro-partitions for repeat runs   "],
      correct: [0],
      concept: "Local disk spilling in Snowflake occurs when a virtual warehouse executor runs out of memory and has to spill temporary query data to local SSD storage. Scaling up the warehouse size (e.g. from Small to Medium) increases the memory capacity per server node, resolving the spilling issue."
    },
    {
      id: 41,
      type: "single",
      difficulty: 2,
      question: "You are managing `Python analytics script` that performs `parsing` on `Stored Procedures Deep Dive`. A large query scan is taking longer than expected. You analyze the Query Profile and notice that \'Local Disk Spilling\' is high. What is the most effective way to eliminate this performance bottleneck?",
      options: ["Scale up the Virtual Warehouse to a larger size to increase memory capacity ", "Apply a cluster key to the table to reduce the micro-partition scan range   ", "Increase the Virtual Warehouse multi-cluster size to handle concurrent loads", "Enable the Result Cache to skip scanning micro-partitions for repeat runs   "],
      correct: [0],
      concept: "Local disk spilling in Snowflake occurs when a virtual warehouse executor runs out of memory and has to spill temporary query data to local SSD storage. Scaling up the warehouse size (e.g. from Small to Medium) increases the memory capacity per server node, resolving the spilling issue."
    },
    {
      id: 42,
      type: "single",
      difficulty: 2,
      question: "You are managing `PySpark job running on EMR` that performs `optimizing` on `JavaScript UDFs`. A large query scan is taking longer than expected. You analyze the Query Profile and notice that \'Local Disk Spilling\' is high. What is the most effective way to eliminate this performance bottleneck?",
      options: ["Scale up the Virtual Warehouse to a larger size to increase memory capacity ", "Apply a cluster key to the table to reduce the micro-partition scan range   ", "Increase the Virtual Warehouse multi-cluster size to handle concurrent loads", "Enable the Result Cache to skip scanning micro-partitions for repeat runs   "],
      correct: [0],
      concept: "Local disk spilling in Snowflake occurs when a virtual warehouse executor runs out of memory and has to spill temporary query data to local SSD storage. Scaling up the warehouse size (e.g. from Small to Medium) increases the memory capacity per server node, resolving the spilling issue."
    },
    {
      id: 43,
      type: "single",
      difficulty: 2,
      question: "You are managing `Snowflake warehouse on AWS` that performs `buffering` on `External Functions`. A large query scan is taking longer than expected. You analyze the Query Profile and notice that \'Local Disk Spilling\' is high. What is the most effective way to eliminate this performance bottleneck?",
      options: ["Scale up the Virtual Warehouse to a larger size to increase memory capacity ", "Apply a cluster key to the table to reduce the micro-partition scan range   ", "Increase the Virtual Warehouse multi-cluster size to handle concurrent loads", "Enable the Result Cache to skip scanning micro-partitions for repeat runs   "],
      correct: [0],
      concept: "Local disk spilling in Snowflake occurs when a virtual warehouse executor runs out of memory and has to spill temporary query data to local SSD storage. Scaling up the warehouse size (e.g. from Small to Medium) increases the memory capacity per server node, resolving the spilling issue."
    },
    {
      id: 44,
      type: "single",
      difficulty: 2,
      question: "You are managing `dbt Core model in BigQuery` that performs `checkpointing` on `Materialized Views`. A large query scan is taking longer than expected. You analyze the Query Profile and notice that \'Local Disk Spilling\' is high. What is the most effective way to eliminate this performance bottleneck?",
      options: ["Scale up the Virtual Warehouse to a larger size to increase memory capacity ", "Apply a cluster key to the table to reduce the micro-partition scan range   ", "Increase the Virtual Warehouse multi-cluster size to handle concurrent loads", "Enable the Result Cache to skip scanning micro-partitions for repeat runs   "],
      correct: [0],
      concept: "Local disk spilling in Snowflake occurs when a virtual warehouse executor runs out of memory and has to spill temporary query data to local SSD storage. Scaling up the warehouse size (e.g. from Small to Medium) increases the memory capacity per server node, resolving the spilling issue."
    },
    {
      id: 45,
      type: "single",
      difficulty: 2,
      question: "You are managing `DataStage parallel engine` that performs `materializing` on `Dynamic Data Masking`. A large query scan is taking longer than expected. You analyze the Query Profile and notice that \'Local Disk Spilling\' is high. What is the most effective way to eliminate this performance bottleneck?",
      options: ["Scale up the Virtual Warehouse to a larger size to increase memory capacity ", "Apply a cluster key to the table to reduce the micro-partition scan range   ", "Increase the Virtual Warehouse multi-cluster size to handle concurrent loads", "Enable the Result Cache to skip scanning micro-partitions for repeat runs   "],
      correct: [0],
      concept: "Local disk spilling in Snowflake occurs when a virtual warehouse executor runs out of memory and has to spill temporary query data to local SSD storage. Scaling up the warehouse size (e.g. from Small to Medium) increases the memory capacity per server node, resolving the spilling issue."
    },
    {
      id: 46,
      type: "single",
      difficulty: 2,
      question: "You are managing `IDMC secure agent in Azure` that performs `partitioning` on `Stored Procedures Deep Dive`. A large query scan is taking longer than expected. You analyze the Query Profile and notice that \'Local Disk Spilling\' is high. What is the most effective way to eliminate this performance bottleneck?",
      options: ["Scale up the Virtual Warehouse to a larger size to increase memory capacity ", "Apply a cluster key to the table to reduce the micro-partition scan range   ", "Increase the Virtual Warehouse multi-cluster size to handle concurrent loads", "Enable the Result Cache to skip scanning micro-partitions for repeat runs   "],
      correct: [0],
      concept: "Local disk spilling in Snowflake occurs when a virtual warehouse executor runs out of memory and has to spill temporary query data to local SSD storage. Scaling up the warehouse size (e.g. from Small to Medium) increases the memory capacity per server node, resolving the spilling issue."
    },
    {
      id: 47,
      type: "single",
      difficulty: 2,
      question: "You are managing `Python analytics script` that performs `indexing` on `JavaScript UDFs`. A large query scan is taking longer than expected. You analyze the Query Profile and notice that \'Local Disk Spilling\' is high. What is the most effective way to eliminate this performance bottleneck?",
      options: ["Scale up the Virtual Warehouse to a larger size to increase memory capacity ", "Apply a cluster key to the table to reduce the micro-partition scan range   ", "Increase the Virtual Warehouse multi-cluster size to handle concurrent loads", "Enable the Result Cache to skip scanning micro-partitions for repeat runs   "],
      correct: [0],
      concept: "Local disk spilling in Snowflake occurs when a virtual warehouse executor runs out of memory and has to spill temporary query data to local SSD storage. Scaling up the warehouse size (e.g. from Small to Medium) increases the memory capacity per server node, resolving the spilling issue."
    },
    {
      id: 48,
      type: "single",
      difficulty: 2,
      question: "You are managing `PySpark job running on EMR` that performs `governing` on `External Functions`. A large query scan is taking longer than expected. You analyze the Query Profile and notice that \'Local Disk Spilling\' is high. What is the most effective way to eliminate this performance bottleneck?",
      options: ["Scale up the Virtual Warehouse to a larger size to increase memory capacity ", "Apply a cluster key to the table to reduce the micro-partition scan range   ", "Increase the Virtual Warehouse multi-cluster size to handle concurrent loads", "Enable the Result Cache to skip scanning micro-partitions for repeat runs   "],
      correct: [0],
      concept: "Local disk spilling in Snowflake occurs when a virtual warehouse executor runs out of memory and has to spill temporary query data to local SSD storage. Scaling up the warehouse size (e.g. from Small to Medium) increases the memory capacity per server node, resolving the spilling issue."
    },
    {
      id: 49,
      type: "single",
      difficulty: 2,
      question: "You are managing `Snowflake warehouse on AWS` that performs `validating` on `Materialized Views`. A large query scan is taking longer than expected. You analyze the Query Profile and notice that \'Local Disk Spilling\' is high. What is the most effective way to eliminate this performance bottleneck?",
      options: ["Scale up the Virtual Warehouse to a larger size to increase memory capacity ", "Apply a cluster key to the table to reduce the micro-partition scan range   ", "Increase the Virtual Warehouse multi-cluster size to handle concurrent loads", "Enable the Result Cache to skip scanning micro-partitions for repeat runs   "],
      correct: [0],
      concept: "Local disk spilling in Snowflake occurs when a virtual warehouse executor runs out of memory and has to spill temporary query data to local SSD storage. Scaling up the warehouse size (e.g. from Small to Medium) increases the memory capacity per server node, resolving the spilling issue."
    },
    {
      id: 50,
      type: "single",
      difficulty: 2,
      question: "You are managing `dbt Core model in BigQuery` that performs `transforming` on `Dynamic Data Masking`. A large query scan is taking longer than expected. You analyze the Query Profile and notice that \'Local Disk Spilling\' is high. What is the most effective way to eliminate this performance bottleneck?",
      options: ["Scale up the Virtual Warehouse to a larger size to increase memory capacity ", "Apply a cluster key to the table to reduce the micro-partition scan range   ", "Increase the Virtual Warehouse multi-cluster size to handle concurrent loads", "Enable the Result Cache to skip scanning micro-partitions for repeat runs   "],
      correct: [0],
      concept: "Local disk spilling in Snowflake occurs when a virtual warehouse executor runs out of memory and has to spill temporary query data to local SSD storage. Scaling up the warehouse size (e.g. from Small to Medium) increases the memory capacity per server node, resolving the spilling issue."
    },
    {
      id: 51,
      type: "single",
      difficulty: 2,
      question: "You are managing `DataStage parallel engine` that performs `parsing` on `Stored Procedures Deep Dive`. A large query scan is taking longer than expected. You analyze the Query Profile and notice that \'Local Disk Spilling\' is high. What is the most effective way to eliminate this performance bottleneck?",
      options: ["Scale up the Virtual Warehouse to a larger size to increase memory capacity ", "Apply a cluster key to the table to reduce the micro-partition scan range   ", "Increase the Virtual Warehouse multi-cluster size to handle concurrent loads", "Enable the Result Cache to skip scanning micro-partitions for repeat runs   "],
      correct: [0],
      concept: "Local disk spilling in Snowflake occurs when a virtual warehouse executor runs out of memory and has to spill temporary query data to local SSD storage. Scaling up the warehouse size (e.g. from Small to Medium) increases the memory capacity per server node, resolving the spilling issue."
    },
    {
      id: 52,
      type: "single",
      difficulty: 2,
      question: "You are managing `IDMC secure agent in Azure` that performs `optimizing` on `JavaScript UDFs`. A large query scan is taking longer than expected. You analyze the Query Profile and notice that \'Local Disk Spilling\' is high. What is the most effective way to eliminate this performance bottleneck?",
      options: ["Scale up the Virtual Warehouse to a larger size to increase memory capacity ", "Apply a cluster key to the table to reduce the micro-partition scan range   ", "Increase the Virtual Warehouse multi-cluster size to handle concurrent loads", "Enable the Result Cache to skip scanning micro-partitions for repeat runs   "],
      correct: [0],
      concept: "Local disk spilling in Snowflake occurs when a virtual warehouse executor runs out of memory and has to spill temporary query data to local SSD storage. Scaling up the warehouse size (e.g. from Small to Medium) increases the memory capacity per server node, resolving the spilling issue."
    },
    {
      id: 53,
      type: "single",
      difficulty: 2,
      question: "You are managing `Python analytics script` that performs `buffering` on `External Functions`. A large query scan is taking longer than expected. You analyze the Query Profile and notice that \'Local Disk Spilling\' is high. What is the most effective way to eliminate this performance bottleneck?",
      options: ["Scale up the Virtual Warehouse to a larger size to increase memory capacity ", "Apply a cluster key to the table to reduce the micro-partition scan range   ", "Increase the Virtual Warehouse multi-cluster size to handle concurrent loads", "Enable the Result Cache to skip scanning micro-partitions for repeat runs   "],
      correct: [0],
      concept: "Local disk spilling in Snowflake occurs when a virtual warehouse executor runs out of memory and has to spill temporary query data to local SSD storage. Scaling up the warehouse size (e.g. from Small to Medium) increases the memory capacity per server node, resolving the spilling issue."
    },
    {
      id: 54,
      type: "single",
      difficulty: 2,
      question: "You are managing `PySpark job running on EMR` that performs `checkpointing` on `Materialized Views`. A large query scan is taking longer than expected. You analyze the Query Profile and notice that \'Local Disk Spilling\' is high. What is the most effective way to eliminate this performance bottleneck?",
      options: ["Scale up the Virtual Warehouse to a larger size to increase memory capacity ", "Apply a cluster key to the table to reduce the micro-partition scan range   ", "Increase the Virtual Warehouse multi-cluster size to handle concurrent loads", "Enable the Result Cache to skip scanning micro-partitions for repeat runs   "],
      correct: [0],
      concept: "Local disk spilling in Snowflake occurs when a virtual warehouse executor runs out of memory and has to spill temporary query data to local SSD storage. Scaling up the warehouse size (e.g. from Small to Medium) increases the memory capacity per server node, resolving the spilling issue."
    },
    {
      id: 55,
      type: "single",
      difficulty: 2,
      question: "You are managing `Snowflake warehouse on AWS` that performs `materializing` on `Dynamic Data Masking`. A large query scan is taking longer than expected. You analyze the Query Profile and notice that \'Local Disk Spilling\' is high. What is the most effective way to eliminate this performance bottleneck?",
      options: ["Scale up the Virtual Warehouse to a larger size to increase memory capacity ", "Apply a cluster key to the table to reduce the micro-partition scan range   ", "Increase the Virtual Warehouse multi-cluster size to handle concurrent loads", "Enable the Result Cache to skip scanning micro-partitions for repeat runs   "],
      correct: [0],
      concept: "Local disk spilling in Snowflake occurs when a virtual warehouse executor runs out of memory and has to spill temporary query data to local SSD storage. Scaling up the warehouse size (e.g. from Small to Medium) increases the memory capacity per server node, resolving the spilling issue."
    },
    {
      id: 56,
      type: "single",
      difficulty: 2,
      question: "You are managing `dbt Core model in BigQuery` that performs `partitioning` on `Stored Procedures Deep Dive`. A large query scan is taking longer than expected. You analyze the Query Profile and notice that \'Local Disk Spilling\' is high. What is the most effective way to eliminate this performance bottleneck?",
      options: ["Scale up the Virtual Warehouse to a larger size to increase memory capacity ", "Apply a cluster key to the table to reduce the micro-partition scan range   ", "Increase the Virtual Warehouse multi-cluster size to handle concurrent loads", "Enable the Result Cache to skip scanning micro-partitions for repeat runs   "],
      correct: [0],
      concept: "Local disk spilling in Snowflake occurs when a virtual warehouse executor runs out of memory and has to spill temporary query data to local SSD storage. Scaling up the warehouse size (e.g. from Small to Medium) increases the memory capacity per server node, resolving the spilling issue."
    },
    {
      id: 57,
      type: "single",
      difficulty: 2,
      question: "You are managing `DataStage parallel engine` that performs `indexing` on `JavaScript UDFs`. A large query scan is taking longer than expected. You analyze the Query Profile and notice that \'Local Disk Spilling\' is high. What is the most effective way to eliminate this performance bottleneck?",
      options: ["Scale up the Virtual Warehouse to a larger size to increase memory capacity ", "Apply a cluster key to the table to reduce the micro-partition scan range   ", "Increase the Virtual Warehouse multi-cluster size to handle concurrent loads", "Enable the Result Cache to skip scanning micro-partitions for repeat runs   "],
      correct: [0],
      concept: "Local disk spilling in Snowflake occurs when a virtual warehouse executor runs out of memory and has to spill temporary query data to local SSD storage. Scaling up the warehouse size (e.g. from Small to Medium) increases the memory capacity per server node, resolving the spilling issue."
    },
    {
      id: 58,
      type: "single",
      difficulty: 2,
      question: "You are managing `IDMC secure agent in Azure` that performs `governing` on `External Functions`. A large query scan is taking longer than expected. You analyze the Query Profile and notice that \'Local Disk Spilling\' is high. What is the most effective way to eliminate this performance bottleneck?",
      options: ["Scale up the Virtual Warehouse to a larger size to increase memory capacity ", "Apply a cluster key to the table to reduce the micro-partition scan range   ", "Increase the Virtual Warehouse multi-cluster size to handle concurrent loads", "Enable the Result Cache to skip scanning micro-partitions for repeat runs   "],
      correct: [0],
      concept: "Local disk spilling in Snowflake occurs when a virtual warehouse executor runs out of memory and has to spill temporary query data to local SSD storage. Scaling up the warehouse size (e.g. from Small to Medium) increases the memory capacity per server node, resolving the spilling issue."
    },
    {
      id: 59,
      type: "single",
      difficulty: 2,
      question: "You are managing `Python analytics script` that performs `validating` on `Materialized Views`. A large query scan is taking longer than expected. You analyze the Query Profile and notice that \'Local Disk Spilling\' is high. What is the most effective way to eliminate this performance bottleneck?",
      options: ["Scale up the Virtual Warehouse to a larger size to increase memory capacity ", "Apply a cluster key to the table to reduce the micro-partition scan range   ", "Increase the Virtual Warehouse multi-cluster size to handle concurrent loads", "Enable the Result Cache to skip scanning micro-partitions for repeat runs   "],
      correct: [0],
      concept: "Local disk spilling in Snowflake occurs when a virtual warehouse executor runs out of memory and has to spill temporary query data to local SSD storage. Scaling up the warehouse size (e.g. from Small to Medium) increases the memory capacity per server node, resolving the spilling issue."
    },
    {
      id: 60,
      type: "single",
      difficulty: 2,
      question: "You are managing `PySpark job running on EMR` that performs `transforming` on `Dynamic Data Masking`. A large query scan is taking longer than expected. You analyze the Query Profile and notice that \'Local Disk Spilling\' is high. What is the most effective way to eliminate this performance bottleneck?",
      options: ["Scale up the Virtual Warehouse to a larger size to increase memory capacity ", "Apply a cluster key to the table to reduce the micro-partition scan range   ", "Increase the Virtual Warehouse multi-cluster size to handle concurrent loads", "Enable the Result Cache to skip scanning micro-partitions for repeat runs   "],
      correct: [0],
      concept: "Local disk spilling in Snowflake occurs when a virtual warehouse executor runs out of memory and has to spill temporary query data to local SSD storage. Scaling up the warehouse size (e.g. from Small to Medium) increases the memory capacity per server node, resolving the spilling issue."
    },
    {
      id: 61,
      type: "multi",
      difficulty: 2,
      question: "You are loading semi-structured JSON data into Snowflake dimension tables for `Stored Procedures Deep Dive`. Which of the following operations are valid for handling VARIANT columns? (Select ALL that apply)",
      options: ["A: You can query VARIANT nested elements directly using colon path notation (e.g., `src:elem:sub`)   ", "B: You must explicitly cast nested attributes to valid SQL data types for comparisons or aggregations", "C: The `FLATTEN` function converts a nested array inside a VARIANT column into standard tabular rows ", "D: Once imported, VARIANT columns cannot be converted back to structured files like Parquet or CSV   "],
      correct: [0, 2],
      concept: "Snowflake supports querying VARIANT types directly using colon notation. FLATTEN is used to convert nested arrays into rows. Casting is recommended but not always strictly required for basic operations, and data can be exported back."
    },
    {
      id: 62,
      type: "multi",
      difficulty: 2,
      question: "You are loading semi-structured JSON data into Snowflake dimension tables for `JavaScript UDFs`. Which of the following operations are valid for handling VARIANT columns? (Select ALL that apply)",
      options: ["A: You can query VARIANT nested elements directly using colon path notation (e.g., `src:elem:sub`)   ", "B: You must explicitly cast nested attributes to valid SQL data types for comparisons or aggregations", "C: The `FLATTEN` function converts a nested array inside a VARIANT column into standard tabular rows ", "D: Once imported, VARIANT columns cannot be converted back to structured files like Parquet or CSV   "],
      correct: [0, 2],
      concept: "Snowflake supports querying VARIANT types directly using colon notation. FLATTEN is used to convert nested arrays into rows. Casting is recommended but not always strictly required for basic operations, and data can be exported back."
    },
    {
      id: 63,
      type: "multi",
      difficulty: 2,
      question: "You are loading semi-structured JSON data into Snowflake dimension tables for `External Functions`. Which of the following operations are valid for handling VARIANT columns? (Select ALL that apply)",
      options: ["A: You can query VARIANT nested elements directly using colon path notation (e.g., `src:elem:sub`)   ", "B: You must explicitly cast nested attributes to valid SQL data types for comparisons or aggregations", "C: The `FLATTEN` function converts a nested array inside a VARIANT column into standard tabular rows ", "D: Once imported, VARIANT columns cannot be converted back to structured files like Parquet or CSV   "],
      correct: [0, 2],
      concept: "Snowflake supports querying VARIANT types directly using colon notation. FLATTEN is used to convert nested arrays into rows. Casting is recommended but not always strictly required for basic operations, and data can be exported back."
    },
    {
      id: 64,
      type: "multi",
      difficulty: 2,
      question: "You are loading semi-structured JSON data into Snowflake dimension tables for `Materialized Views`. Which of the following operations are valid for handling VARIANT columns? (Select ALL that apply)",
      options: ["A: You can query VARIANT nested elements directly using colon path notation (e.g., `src:elem:sub`)   ", "B: You must explicitly cast nested attributes to valid SQL data types for comparisons or aggregations", "C: The `FLATTEN` function converts a nested array inside a VARIANT column into standard tabular rows ", "D: Once imported, VARIANT columns cannot be converted back to structured files like Parquet or CSV   "],
      correct: [0, 2],
      concept: "Snowflake supports querying VARIANT types directly using colon notation. FLATTEN is used to convert nested arrays into rows. Casting is recommended but not always strictly required for basic operations, and data can be exported back."
    },
    {
      id: 65,
      type: "multi",
      difficulty: 2,
      question: "You are loading semi-structured JSON data into Snowflake dimension tables for `Dynamic Data Masking`. Which of the following operations are valid for handling VARIANT columns? (Select ALL that apply)",
      options: ["A: You can query VARIANT nested elements directly using colon path notation (e.g., `src:elem:sub`)   ", "B: You must explicitly cast nested attributes to valid SQL data types for comparisons or aggregations", "C: The `FLATTEN` function converts a nested array inside a VARIANT column into standard tabular rows ", "D: Once imported, VARIANT columns cannot be converted back to structured files like Parquet or CSV   "],
      correct: [0, 2],
      concept: "Snowflake supports querying VARIANT types directly using colon notation. FLATTEN is used to convert nested arrays into rows. Casting is recommended but not always strictly required for basic operations, and data can be exported back."
    },
    {
      id: 66,
      type: "multi",
      difficulty: 2,
      question: "You are loading semi-structured JSON data into Snowflake dimension tables for `Stored Procedures Deep Dive`. Which of the following operations are valid for handling VARIANT columns? (Select ALL that apply)",
      options: ["A: You can query VARIANT nested elements directly using colon path notation (e.g., `src:elem:sub`)   ", "B: You must explicitly cast nested attributes to valid SQL data types for comparisons or aggregations", "C: The `FLATTEN` function converts a nested array inside a VARIANT column into standard tabular rows ", "D: Once imported, VARIANT columns cannot be converted back to structured files like Parquet or CSV   "],
      correct: [0, 2],
      concept: "Snowflake supports querying VARIANT types directly using colon notation. FLATTEN is used to convert nested arrays into rows. Casting is recommended but not always strictly required for basic operations, and data can be exported back."
    },
    {
      id: 67,
      type: "multi",
      difficulty: 2,
      question: "You are loading semi-structured JSON data into Snowflake dimension tables for `JavaScript UDFs`. Which of the following operations are valid for handling VARIANT columns? (Select ALL that apply)",
      options: ["A: You can query VARIANT nested elements directly using colon path notation (e.g., `src:elem:sub`)   ", "B: You must explicitly cast nested attributes to valid SQL data types for comparisons or aggregations", "C: The `FLATTEN` function converts a nested array inside a VARIANT column into standard tabular rows ", "D: Once imported, VARIANT columns cannot be converted back to structured files like Parquet or CSV   "],
      correct: [0, 2],
      concept: "Snowflake supports querying VARIANT types directly using colon notation. FLATTEN is used to convert nested arrays into rows. Casting is recommended but not always strictly required for basic operations, and data can be exported back."
    },
    {
      id: 68,
      type: "multi",
      difficulty: 2,
      question: "You are loading semi-structured JSON data into Snowflake dimension tables for `External Functions`. Which of the following operations are valid for handling VARIANT columns? (Select ALL that apply)",
      options: ["A: You can query VARIANT nested elements directly using colon path notation (e.g., `src:elem:sub`)   ", "B: You must explicitly cast nested attributes to valid SQL data types for comparisons or aggregations", "C: The `FLATTEN` function converts a nested array inside a VARIANT column into standard tabular rows ", "D: Once imported, VARIANT columns cannot be converted back to structured files like Parquet or CSV   "],
      correct: [0, 2],
      concept: "Snowflake supports querying VARIANT types directly using colon notation. FLATTEN is used to convert nested arrays into rows. Casting is recommended but not always strictly required for basic operations, and data can be exported back."
    },
    {
      id: 69,
      type: "multi",
      difficulty: 2,
      question: "You are loading semi-structured JSON data into Snowflake dimension tables for `Materialized Views`. Which of the following operations are valid for handling VARIANT columns? (Select ALL that apply)",
      options: ["A: You can query VARIANT nested elements directly using colon path notation (e.g., `src:elem:sub`)   ", "B: You must explicitly cast nested attributes to valid SQL data types for comparisons or aggregations", "C: The `FLATTEN` function converts a nested array inside a VARIANT column into standard tabular rows ", "D: Once imported, VARIANT columns cannot be converted back to structured files like Parquet or CSV   "],
      correct: [0, 2],
      concept: "Snowflake supports querying VARIANT types directly using colon notation. FLATTEN is used to convert nested arrays into rows. Casting is recommended but not always strictly required for basic operations, and data can be exported back."
    },
    {
      id: 70,
      type: "multi",
      difficulty: 2,
      question: "You are loading semi-structured JSON data into Snowflake dimension tables for `Dynamic Data Masking`. Which of the following operations are valid for handling VARIANT columns? (Select ALL that apply)",
      options: ["A: You can query VARIANT nested elements directly using colon path notation (e.g., `src:elem:sub`)   ", "B: You must explicitly cast nested attributes to valid SQL data types for comparisons or aggregations", "C: The `FLATTEN` function converts a nested array inside a VARIANT column into standard tabular rows ", "D: Once imported, VARIANT columns cannot be converted back to structured files like Parquet or CSV   "],
      correct: [0, 2],
      concept: "Snowflake supports querying VARIANT types directly using colon notation. FLATTEN is used to convert nested arrays into rows. Casting is recommended but not always strictly required for basic operations, and data can be exported back."
    },
    {
      id: 71,
      type: "multi",
      difficulty: 2,
      question: "You are loading semi-structured JSON data into Snowflake dimension tables for `Stored Procedures Deep Dive`. Which of the following operations are valid for handling VARIANT columns? (Select ALL that apply)",
      options: ["A: You can query VARIANT nested elements directly using colon path notation (e.g., `src:elem:sub`)   ", "B: You must explicitly cast nested attributes to valid SQL data types for comparisons or aggregations", "C: The `FLATTEN` function converts a nested array inside a VARIANT column into standard tabular rows ", "D: Once imported, VARIANT columns cannot be converted back to structured files like Parquet or CSV   "],
      correct: [0, 2],
      concept: "Snowflake supports querying VARIANT types directly using colon notation. FLATTEN is used to convert nested arrays into rows. Casting is recommended but not always strictly required for basic operations, and data can be exported back."
    },
    {
      id: 72,
      type: "multi",
      difficulty: 2,
      question: "You are loading semi-structured JSON data into Snowflake dimension tables for `JavaScript UDFs`. Which of the following operations are valid for handling VARIANT columns? (Select ALL that apply)",
      options: ["A: You can query VARIANT nested elements directly using colon path notation (e.g., `src:elem:sub`)   ", "B: You must explicitly cast nested attributes to valid SQL data types for comparisons or aggregations", "C: The `FLATTEN` function converts a nested array inside a VARIANT column into standard tabular rows ", "D: Once imported, VARIANT columns cannot be converted back to structured files like Parquet or CSV   "],
      correct: [0, 2],
      concept: "Snowflake supports querying VARIANT types directly using colon notation. FLATTEN is used to convert nested arrays into rows. Casting is recommended but not always strictly required for basic operations, and data can be exported back."
    },
    {
      id: 73,
      type: "multi",
      difficulty: 2,
      question: "You are loading semi-structured JSON data into Snowflake dimension tables for `External Functions`. Which of the following operations are valid for handling VARIANT columns? (Select ALL that apply)",
      options: ["A: You can query VARIANT nested elements directly using colon path notation (e.g., `src:elem:sub`)   ", "B: You must explicitly cast nested attributes to valid SQL data types for comparisons or aggregations", "C: The `FLATTEN` function converts a nested array inside a VARIANT column into standard tabular rows ", "D: Once imported, VARIANT columns cannot be converted back to structured files like Parquet or CSV   "],
      correct: [0, 2],
      concept: "Snowflake supports querying VARIANT types directly using colon notation. FLATTEN is used to convert nested arrays into rows. Casting is recommended but not always strictly required for basic operations, and data can be exported back."
    },
    {
      id: 74,
      type: "multi",
      difficulty: 2,
      question: "You are loading semi-structured JSON data into Snowflake dimension tables for `Materialized Views`. Which of the following operations are valid for handling VARIANT columns? (Select ALL that apply)",
      options: ["A: You can query VARIANT nested elements directly using colon path notation (e.g., `src:elem:sub`)   ", "B: You must explicitly cast nested attributes to valid SQL data types for comparisons or aggregations", "C: The `FLATTEN` function converts a nested array inside a VARIANT column into standard tabular rows ", "D: Once imported, VARIANT columns cannot be converted back to structured files like Parquet or CSV   "],
      correct: [0, 2],
      concept: "Snowflake supports querying VARIANT types directly using colon notation. FLATTEN is used to convert nested arrays into rows. Casting is recommended but not always strictly required for basic operations, and data can be exported back."
    },
    {
      id: 75,
      type: "multi",
      difficulty: 2,
      question: "You are loading semi-structured JSON data into Snowflake dimension tables for `Dynamic Data Masking`. Which of the following operations are valid for handling VARIANT columns? (Select ALL that apply)",
      options: ["A: You can query VARIANT nested elements directly using colon path notation (e.g., `src:elem:sub`)   ", "B: You must explicitly cast nested attributes to valid SQL data types for comparisons or aggregations", "C: The `FLATTEN` function converts a nested array inside a VARIANT column into standard tabular rows ", "D: Once imported, VARIANT columns cannot be converted back to structured files like Parquet or CSV   "],
      correct: [0, 2],
      concept: "Snowflake supports querying VARIANT types directly using colon notation. FLATTEN is used to convert nested arrays into rows. Casting is recommended but not always strictly required for basic operations, and data can be exported back."
    },
    {
      id: 76,
      type: "multi",
      difficulty: 3,
      question: "You are loading semi-structured JSON data into Snowflake dimension tables for `Stored Procedures Deep Dive`. Which of the following operations are valid for handling VARIANT columns? (Select ALL that apply)",
      options: ["A: You can query VARIANT nested elements directly using colon path notation (e.g., `src:elem:sub`)   ", "B: You must explicitly cast nested attributes to valid SQL data types for comparisons or aggregations", "C: The `FLATTEN` function converts a nested array inside a VARIANT column into standard tabular rows ", "D: Once imported, VARIANT columns cannot be converted back to structured files like Parquet or CSV   "],
      correct: [0, 2],
      concept: "Snowflake supports querying VARIANT types directly using colon notation. FLATTEN is used to convert nested arrays into rows. Casting is recommended but not always strictly required for basic operations, and data can be exported back."
    },
    {
      id: 77,
      type: "multi",
      difficulty: 3,
      question: "You are loading semi-structured JSON data into Snowflake dimension tables for `JavaScript UDFs`. Which of the following operations are valid for handling VARIANT columns? (Select ALL that apply)",
      options: ["A: You can query VARIANT nested elements directly using colon path notation (e.g., `src:elem:sub`)   ", "B: You must explicitly cast nested attributes to valid SQL data types for comparisons or aggregations", "C: The `FLATTEN` function converts a nested array inside a VARIANT column into standard tabular rows ", "D: Once imported, VARIANT columns cannot be converted back to structured files like Parquet or CSV   "],
      correct: [0, 2],
      concept: "Snowflake supports querying VARIANT types directly using colon notation. FLATTEN is used to convert nested arrays into rows. Casting is recommended but not always strictly required for basic operations, and data can be exported back."
    },
    {
      id: 78,
      type: "multi",
      difficulty: 3,
      question: "You are loading semi-structured JSON data into Snowflake dimension tables for `External Functions`. Which of the following operations are valid for handling VARIANT columns? (Select ALL that apply)",
      options: ["A: You can query VARIANT nested elements directly using colon path notation (e.g., `src:elem:sub`)   ", "B: You must explicitly cast nested attributes to valid SQL data types for comparisons or aggregations", "C: The `FLATTEN` function converts a nested array inside a VARIANT column into standard tabular rows ", "D: Once imported, VARIANT columns cannot be converted back to structured files like Parquet or CSV   "],
      correct: [0, 2],
      concept: "Snowflake supports querying VARIANT types directly using colon notation. FLATTEN is used to convert nested arrays into rows. Casting is recommended but not always strictly required for basic operations, and data can be exported back."
    },
    {
      id: 79,
      type: "multi",
      difficulty: 3,
      question: "You are loading semi-structured JSON data into Snowflake dimension tables for `Materialized Views`. Which of the following operations are valid for handling VARIANT columns? (Select ALL that apply)",
      options: ["A: You can query VARIANT nested elements directly using colon path notation (e.g., `src:elem:sub`)   ", "B: You must explicitly cast nested attributes to valid SQL data types for comparisons or aggregations", "C: The `FLATTEN` function converts a nested array inside a VARIANT column into standard tabular rows ", "D: Once imported, VARIANT columns cannot be converted back to structured files like Parquet or CSV   "],
      correct: [0, 2],
      concept: "Snowflake supports querying VARIANT types directly using colon notation. FLATTEN is used to convert nested arrays into rows. Casting is recommended but not always strictly required for basic operations, and data can be exported back."
    },
    {
      id: 80,
      type: "multi",
      difficulty: 3,
      question: "You are loading semi-structured JSON data into Snowflake dimension tables for `Dynamic Data Masking`. Which of the following operations are valid for handling VARIANT columns? (Select ALL that apply)",
      options: ["A: You can query VARIANT nested elements directly using colon path notation (e.g., `src:elem:sub`)   ", "B: You must explicitly cast nested attributes to valid SQL data types for comparisons or aggregations", "C: The `FLATTEN` function converts a nested array inside a VARIANT column into standard tabular rows ", "D: Once imported, VARIANT columns cannot be converted back to structured files like Parquet or CSV   "],
      correct: [0, 2],
      concept: "Snowflake supports querying VARIANT types directly using colon notation. FLATTEN is used to convert nested arrays into rows. Casting is recommended but not always strictly required for basic operations, and data can be exported back."
    },
    {
      id: 81,
      type: "multi",
      difficulty: 3,
      question: "You are loading semi-structured JSON data into Snowflake dimension tables for `Stored Procedures Deep Dive`. Which of the following operations are valid for handling VARIANT columns? (Select ALL that apply)",
      options: ["A: You can query VARIANT nested elements directly using colon path notation (e.g., `src:elem:sub`)   ", "B: You must explicitly cast nested attributes to valid SQL data types for comparisons or aggregations", "C: The `FLATTEN` function converts a nested array inside a VARIANT column into standard tabular rows ", "D: Once imported, VARIANT columns cannot be converted back to structured files like Parquet or CSV   "],
      correct: [0, 2],
      concept: "Snowflake supports querying VARIANT types directly using colon notation. FLATTEN is used to convert nested arrays into rows. Casting is recommended but not always strictly required for basic operations, and data can be exported back."
    },
    {
      id: 82,
      type: "multi",
      difficulty: 3,
      question: "You are loading semi-structured JSON data into Snowflake dimension tables for `JavaScript UDFs`. Which of the following operations are valid for handling VARIANT columns? (Select ALL that apply)",
      options: ["A: You can query VARIANT nested elements directly using colon path notation (e.g., `src:elem:sub`)   ", "B: You must explicitly cast nested attributes to valid SQL data types for comparisons or aggregations", "C: The `FLATTEN` function converts a nested array inside a VARIANT column into standard tabular rows ", "D: Once imported, VARIANT columns cannot be converted back to structured files like Parquet or CSV   "],
      correct: [0, 2],
      concept: "Snowflake supports querying VARIANT types directly using colon notation. FLATTEN is used to convert nested arrays into rows. Casting is recommended but not always strictly required for basic operations, and data can be exported back."
    },
    {
      id: 83,
      type: "multi",
      difficulty: 3,
      question: "You are loading semi-structured JSON data into Snowflake dimension tables for `External Functions`. Which of the following operations are valid for handling VARIANT columns? (Select ALL that apply)",
      options: ["A: You can query VARIANT nested elements directly using colon path notation (e.g., `src:elem:sub`)   ", "B: You must explicitly cast nested attributes to valid SQL data types for comparisons or aggregations", "C: The `FLATTEN` function converts a nested array inside a VARIANT column into standard tabular rows ", "D: Once imported, VARIANT columns cannot be converted back to structured files like Parquet or CSV   "],
      correct: [0, 2],
      concept: "Snowflake supports querying VARIANT types directly using colon notation. FLATTEN is used to convert nested arrays into rows. Casting is recommended but not always strictly required for basic operations, and data can be exported back."
    },
    {
      id: 84,
      type: "multi",
      difficulty: 3,
      question: "You are loading semi-structured JSON data into Snowflake dimension tables for `Materialized Views`. Which of the following operations are valid for handling VARIANT columns? (Select ALL that apply)",
      options: ["A: You can query VARIANT nested elements directly using colon path notation (e.g., `src:elem:sub`)   ", "B: You must explicitly cast nested attributes to valid SQL data types for comparisons or aggregations", "C: The `FLATTEN` function converts a nested array inside a VARIANT column into standard tabular rows ", "D: Once imported, VARIANT columns cannot be converted back to structured files like Parquet or CSV   "],
      correct: [0, 2],
      concept: "Snowflake supports querying VARIANT types directly using colon notation. FLATTEN is used to convert nested arrays into rows. Casting is recommended but not always strictly required for basic operations, and data can be exported back."
    },
    {
      id: 85,
      type: "multi",
      difficulty: 3,
      question: "You are loading semi-structured JSON data into Snowflake dimension tables for `Dynamic Data Masking`. Which of the following operations are valid for handling VARIANT columns? (Select ALL that apply)",
      options: ["A: You can query VARIANT nested elements directly using colon path notation (e.g., `src:elem:sub`)   ", "B: You must explicitly cast nested attributes to valid SQL data types for comparisons or aggregations", "C: The `FLATTEN` function converts a nested array inside a VARIANT column into standard tabular rows ", "D: Once imported, VARIANT columns cannot be converted back to structured files like Parquet or CSV   "],
      correct: [0, 2],
      concept: "Snowflake supports querying VARIANT types directly using colon notation. FLATTEN is used to convert nested arrays into rows. Casting is recommended but not always strictly required for basic operations, and data can be exported back."
    },
    {
      id: 86,
      type: "tf",
      difficulty: 3,
      question: "Is it true that Snowflake\'s Zero-Copy Cloning feature creates a physical replica of the underlying micro-partition data files on cloud storage, doubling the overall storage charges immediately?",
      options: ["True, cloning replicates blocks for security isolation", "False, cloning duplicates only metadata descriptors   "],
      correct: [1],
      concept: "False. Zero-Copy Cloning duplicates only the metadata representing the table structure and pointers to existing micro-partitions. It does NOT replicate the actual data files, so no extra storage fees are charged until changes are made to the clone."
    },
    {
      id: 87,
      type: "tf",
      difficulty: 3,
      question: "Is it true that Snowflake\'s Zero-Copy Cloning feature creates a physical replica of the underlying micro-partition data files on cloud storage, doubling the overall storage charges immediately?",
      options: ["True, cloning replicates blocks for security isolation", "False, cloning duplicates only metadata descriptors   "],
      correct: [1],
      concept: "False. Zero-Copy Cloning duplicates only the metadata representing the table structure and pointers to existing micro-partitions. It does NOT replicate the actual data files, so no extra storage fees are charged until changes are made to the clone."
    },
    {
      id: 88,
      type: "tf",
      difficulty: 3,
      question: "Is it true that Snowflake\'s Zero-Copy Cloning feature creates a physical replica of the underlying micro-partition data files on cloud storage, doubling the overall storage charges immediately?",
      options: ["True, cloning replicates blocks for security isolation", "False, cloning duplicates only metadata descriptors   "],
      correct: [1],
      concept: "False. Zero-Copy Cloning duplicates only the metadata representing the table structure and pointers to existing micro-partitions. It does NOT replicate the actual data files, so no extra storage fees are charged until changes are made to the clone."
    },
    {
      id: 89,
      type: "tf",
      difficulty: 3,
      question: "Is it true that Snowflake\'s Zero-Copy Cloning feature creates a physical replica of the underlying micro-partition data files on cloud storage, doubling the overall storage charges immediately?",
      options: ["True, cloning replicates blocks for security isolation", "False, cloning duplicates only metadata descriptors   "],
      correct: [1],
      concept: "False. Zero-Copy Cloning duplicates only the metadata representing the table structure and pointers to existing micro-partitions. It does NOT replicate the actual data files, so no extra storage fees are charged until changes are made to the clone."
    },
    {
      id: 90,
      type: "tf",
      difficulty: 3,
      question: "Is it true that Snowflake\'s Zero-Copy Cloning feature creates a physical replica of the underlying micro-partition data files on cloud storage, doubling the overall storage charges immediately?",
      options: ["True, cloning replicates blocks for security isolation", "False, cloning duplicates only metadata descriptors   "],
      correct: [1],
      concept: "False. Zero-Copy Cloning duplicates only the metadata representing the table structure and pointers to existing micro-partitions. It does NOT replicate the actual data files, so no extra storage fees are charged until changes are made to the clone."
    },
    {
      id: 91,
      type: "tf",
      difficulty: 3,
      question: "Is it true that Snowflake\'s Zero-Copy Cloning feature creates a physical replica of the underlying micro-partition data files on cloud storage, doubling the overall storage charges immediately?",
      options: ["True, cloning replicates blocks for security isolation", "False, cloning duplicates only metadata descriptors   "],
      correct: [1],
      concept: "False. Zero-Copy Cloning duplicates only the metadata representing the table structure and pointers to existing micro-partitions. It does NOT replicate the actual data files, so no extra storage fees are charged until changes are made to the clone."
    },
    {
      id: 92,
      type: "tf",
      difficulty: 3,
      question: "Is it true that Snowflake\'s Zero-Copy Cloning feature creates a physical replica of the underlying micro-partition data files on cloud storage, doubling the overall storage charges immediately?",
      options: ["True, cloning replicates blocks for security isolation", "False, cloning duplicates only metadata descriptors   "],
      correct: [1],
      concept: "False. Zero-Copy Cloning duplicates only the metadata representing the table structure and pointers to existing micro-partitions. It does NOT replicate the actual data files, so no extra storage fees are charged until changes are made to the clone."
    },
    {
      id: 93,
      type: "tf",
      difficulty: 3,
      question: "Is it true that Snowflake\'s Zero-Copy Cloning feature creates a physical replica of the underlying micro-partition data files on cloud storage, doubling the overall storage charges immediately?",
      options: ["True, cloning replicates blocks for security isolation", "False, cloning duplicates only metadata descriptors   "],
      correct: [1],
      concept: "False. Zero-Copy Cloning duplicates only the metadata representing the table structure and pointers to existing micro-partitions. It does NOT replicate the actual data files, so no extra storage fees are charged until changes are made to the clone."
    },
    {
      id: 94,
      type: "tf",
      difficulty: 3,
      question: "Is it true that Snowflake\'s Zero-Copy Cloning feature creates a physical replica of the underlying micro-partition data files on cloud storage, doubling the overall storage charges immediately?",
      options: ["True, cloning replicates blocks for security isolation", "False, cloning duplicates only metadata descriptors   "],
      correct: [1],
      concept: "False. Zero-Copy Cloning duplicates only the metadata representing the table structure and pointers to existing micro-partitions. It does NOT replicate the actual data files, so no extra storage fees are charged until changes are made to the clone."
    },
    {
      id: 95,
      type: "tf",
      difficulty: 3,
      question: "Is it true that Snowflake\'s Zero-Copy Cloning feature creates a physical replica of the underlying micro-partition data files on cloud storage, doubling the overall storage charges immediately?",
      options: ["True, cloning replicates blocks for security isolation", "False, cloning duplicates only metadata descriptors   "],
      correct: [1],
      concept: "False. Zero-Copy Cloning duplicates only the metadata representing the table structure and pointers to existing micro-partitions. It does NOT replicate the actual data files, so no extra storage fees are charged until changes are made to the clone."
    },
    {
      id: 96,
      type: "tf",
      difficulty: 3,
      question: "Is it true that Snowflake\'s Zero-Copy Cloning feature creates a physical replica of the underlying micro-partition data files on cloud storage, doubling the overall storage charges immediately?",
      options: ["True, cloning replicates blocks for security isolation", "False, cloning duplicates only metadata descriptors   "],
      correct: [1],
      concept: "False. Zero-Copy Cloning duplicates only the metadata representing the table structure and pointers to existing micro-partitions. It does NOT replicate the actual data files, so no extra storage fees are charged until changes are made to the clone."
    },
    {
      id: 97,
      type: "tf",
      difficulty: 3,
      question: "Is it true that Snowflake\'s Zero-Copy Cloning feature creates a physical replica of the underlying micro-partition data files on cloud storage, doubling the overall storage charges immediately?",
      options: ["True, cloning replicates blocks for security isolation", "False, cloning duplicates only metadata descriptors   "],
      correct: [1],
      concept: "False. Zero-Copy Cloning duplicates only the metadata representing the table structure and pointers to existing micro-partitions. It does NOT replicate the actual data files, so no extra storage fees are charged until changes are made to the clone."
    },
    {
      id: 98,
      type: "tf",
      difficulty: 3,
      question: "Is it true that Snowflake\'s Zero-Copy Cloning feature creates a physical replica of the underlying micro-partition data files on cloud storage, doubling the overall storage charges immediately?",
      options: ["True, cloning replicates blocks for security isolation", "False, cloning duplicates only metadata descriptors   "],
      correct: [1],
      concept: "False. Zero-Copy Cloning duplicates only the metadata representing the table structure and pointers to existing micro-partitions. It does NOT replicate the actual data files, so no extra storage fees are charged until changes are made to the clone."
    },
    {
      id: 99,
      type: "tf",
      difficulty: 3,
      question: "Is it true that Snowflake\'s Zero-Copy Cloning feature creates a physical replica of the underlying micro-partition data files on cloud storage, doubling the overall storage charges immediately?",
      options: ["True, cloning replicates blocks for security isolation", "False, cloning duplicates only metadata descriptors   "],
      correct: [1],
      concept: "False. Zero-Copy Cloning duplicates only the metadata representing the table structure and pointers to existing micro-partitions. It does NOT replicate the actual data files, so no extra storage fees are charged until changes are made to the clone."
    },
    {
      id: 100,
      type: "tf",
      difficulty: 3,
      question: "Is it true that Snowflake\'s Zero-Copy Cloning feature creates a physical replica of the underlying micro-partition data files on cloud storage, doubling the overall storage charges immediately?",
      options: ["True, cloning replicates blocks for security isolation", "False, cloning duplicates only metadata descriptors   "],
      correct: [1],
      concept: "False. Zero-Copy Cloning duplicates only the metadata representing the table structure and pointers to existing micro-partitions. It does NOT replicate the actual data files, so no extra storage fees are charged until changes are made to the clone."
    }
  ]
};

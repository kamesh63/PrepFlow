window.QUIZ_DATA = window.QUIZ_DATA || {};
window.QUIZ_DATA["day19"] = {
  title: "PySpark Advanced",
  topics: ["Joins & Aggregations", "UDFs in Spark", "Window Functions", "Performance Tuning", "Broadcast Variables"],
  questions: [
    {
      id: 1,
      type: "single",
      difficulty: 1,
      question: "A Spark cluster running on EMR runs `Snowflake warehouse on AWS` for `parsing` on `Joins & Aggregations`. The execution fails due to memory exhaustion. The log shows a high amount of \'Shuffle Spill (Disk)\' followed by an OutOfMemory (OOM) error. Which configuration adjustment will directly address the OOM root cause?",
      options: ["Increase spark.sql.shuffle.partitions to partition data finer       ", "Set spark.executor.memoryOverhead to allocate disk buffering swap   ", "Enable dynamic allocation with spark.dynamicAllocation.enabled=true ", "Decrease spark.memory.fraction to clear memory namespaces execution "],
      correct: [0],
      concept: "Shuffle spill occurs when the data partition size exceeds the available memory buffer during a shuffle. Increasing the number of shuffle partitions (default is 200) reduces the size of each individual partition, allowing them to fit into executor memory and preventing OOMs."
    },
    {
      id: 2,
      type: "single",
      difficulty: 1,
      question: "A Spark cluster running on EMR runs `dbt Core model in BigQuery` for `optimizing` on `UDFs in Spark`. The execution fails due to memory exhaustion. The log shows a high amount of \'Shuffle Spill (Disk)\' followed by an OutOfMemory (OOM) error. Which configuration adjustment will directly address the OOM root cause?",
      options: ["Increase spark.sql.shuffle.partitions to partition data finer       ", "Set spark.executor.memoryOverhead to allocate disk buffering swap   ", "Enable dynamic allocation with spark.dynamicAllocation.enabled=true ", "Decrease spark.memory.fraction to clear memory namespaces execution "],
      correct: [0],
      concept: "Shuffle spill occurs when the data partition size exceeds the available memory buffer during a shuffle. Increasing the number of shuffle partitions (default is 200) reduces the size of each individual partition, allowing them to fit into executor memory and preventing OOMs."
    },
    {
      id: 3,
      type: "single",
      difficulty: 1,
      question: "A Spark cluster running on EMR runs `DataStage parallel engine` for `buffering` on `Window Functions`. The execution fails due to memory exhaustion. The log shows a high amount of \'Shuffle Spill (Disk)\' followed by an OutOfMemory (OOM) error. Which configuration adjustment will directly address the OOM root cause?",
      options: ["Increase spark.sql.shuffle.partitions to partition data finer       ", "Set spark.executor.memoryOverhead to allocate disk buffering swap   ", "Enable dynamic allocation with spark.dynamicAllocation.enabled=true ", "Decrease spark.memory.fraction to clear memory namespaces execution "],
      correct: [0],
      concept: "Shuffle spill occurs when the data partition size exceeds the available memory buffer during a shuffle. Increasing the number of shuffle partitions (default is 200) reduces the size of each individual partition, allowing them to fit into executor memory and preventing OOMs."
    },
    {
      id: 4,
      type: "single",
      difficulty: 1,
      question: "A Spark cluster running on EMR runs `IDMC secure agent in Azure` for `checkpointing` on `Performance Tuning`. The execution fails due to memory exhaustion. The log shows a high amount of \'Shuffle Spill (Disk)\' followed by an OutOfMemory (OOM) error. Which configuration adjustment will directly address the OOM root cause?",
      options: ["Increase spark.sql.shuffle.partitions to partition data finer       ", "Set spark.executor.memoryOverhead to allocate disk buffering swap   ", "Enable dynamic allocation with spark.dynamicAllocation.enabled=true ", "Decrease spark.memory.fraction to clear memory namespaces execution "],
      correct: [0],
      concept: "Shuffle spill occurs when the data partition size exceeds the available memory buffer during a shuffle. Increasing the number of shuffle partitions (default is 200) reduces the size of each individual partition, allowing them to fit into executor memory and preventing OOMs."
    },
    {
      id: 5,
      type: "single",
      difficulty: 1,
      question: "A Spark cluster running on EMR runs `Python analytics script` for `materializing` on `Broadcast Variables`. The execution fails due to memory exhaustion. The log shows a high amount of \'Shuffle Spill (Disk)\' followed by an OutOfMemory (OOM) error. Which configuration adjustment will directly address the OOM root cause?",
      options: ["Increase spark.sql.shuffle.partitions to partition data finer       ", "Set spark.executor.memoryOverhead to allocate disk buffering swap   ", "Enable dynamic allocation with spark.dynamicAllocation.enabled=true ", "Decrease spark.memory.fraction to clear memory namespaces execution "],
      correct: [0],
      concept: "Shuffle spill occurs when the data partition size exceeds the available memory buffer during a shuffle. Increasing the number of shuffle partitions (default is 200) reduces the size of each individual partition, allowing them to fit into executor memory and preventing OOMs."
    },
    {
      id: 6,
      type: "single",
      difficulty: 1,
      question: "A Spark cluster running on EMR runs `PySpark job running on EMR` for `partitioning` on `Joins & Aggregations`. The execution fails due to memory exhaustion. The log shows a high amount of \'Shuffle Spill (Disk)\' followed by an OutOfMemory (OOM) error. Which configuration adjustment will directly address the OOM root cause?",
      options: ["Increase spark.sql.shuffle.partitions to partition data finer       ", "Set spark.executor.memoryOverhead to allocate disk buffering swap   ", "Enable dynamic allocation with spark.dynamicAllocation.enabled=true ", "Decrease spark.memory.fraction to clear memory namespaces execution "],
      correct: [0],
      concept: "Shuffle spill occurs when the data partition size exceeds the available memory buffer during a shuffle. Increasing the number of shuffle partitions (default is 200) reduces the size of each individual partition, allowing them to fit into executor memory and preventing OOMs."
    },
    {
      id: 7,
      type: "single",
      difficulty: 1,
      question: "A Spark cluster running on EMR runs `Snowflake warehouse on AWS` for `indexing` on `UDFs in Spark`. The execution fails due to memory exhaustion. The log shows a high amount of \'Shuffle Spill (Disk)\' followed by an OutOfMemory (OOM) error. Which configuration adjustment will directly address the OOM root cause?",
      options: ["Increase spark.sql.shuffle.partitions to partition data finer       ", "Set spark.executor.memoryOverhead to allocate disk buffering swap   ", "Enable dynamic allocation with spark.dynamicAllocation.enabled=true ", "Decrease spark.memory.fraction to clear memory namespaces execution "],
      correct: [0],
      concept: "Shuffle spill occurs when the data partition size exceeds the available memory buffer during a shuffle. Increasing the number of shuffle partitions (default is 200) reduces the size of each individual partition, allowing them to fit into executor memory and preventing OOMs."
    },
    {
      id: 8,
      type: "single",
      difficulty: 1,
      question: "A Spark cluster running on EMR runs `dbt Core model in BigQuery` for `governing` on `Window Functions`. The execution fails due to memory exhaustion. The log shows a high amount of \'Shuffle Spill (Disk)\' followed by an OutOfMemory (OOM) error. Which configuration adjustment will directly address the OOM root cause?",
      options: ["Increase spark.sql.shuffle.partitions to partition data finer       ", "Set spark.executor.memoryOverhead to allocate disk buffering swap   ", "Enable dynamic allocation with spark.dynamicAllocation.enabled=true ", "Decrease spark.memory.fraction to clear memory namespaces execution "],
      correct: [0],
      concept: "Shuffle spill occurs when the data partition size exceeds the available memory buffer during a shuffle. Increasing the number of shuffle partitions (default is 200) reduces the size of each individual partition, allowing them to fit into executor memory and preventing OOMs."
    },
    {
      id: 9,
      type: "single",
      difficulty: 1,
      question: "A Spark cluster running on EMR runs `DataStage parallel engine` for `validating` on `Performance Tuning`. The execution fails due to memory exhaustion. The log shows a high amount of \'Shuffle Spill (Disk)\' followed by an OutOfMemory (OOM) error. Which configuration adjustment will directly address the OOM root cause?",
      options: ["Increase spark.sql.shuffle.partitions to partition data finer       ", "Set spark.executor.memoryOverhead to allocate disk buffering swap   ", "Enable dynamic allocation with spark.dynamicAllocation.enabled=true ", "Decrease spark.memory.fraction to clear memory namespaces execution "],
      correct: [0],
      concept: "Shuffle spill occurs when the data partition size exceeds the available memory buffer during a shuffle. Increasing the number of shuffle partitions (default is 200) reduces the size of each individual partition, allowing them to fit into executor memory and preventing OOMs."
    },
    {
      id: 10,
      type: "single",
      difficulty: 1,
      question: "A Spark cluster running on EMR runs `IDMC secure agent in Azure` for `transforming` on `Broadcast Variables`. The execution fails due to memory exhaustion. The log shows a high amount of \'Shuffle Spill (Disk)\' followed by an OutOfMemory (OOM) error. Which configuration adjustment will directly address the OOM root cause?",
      options: ["Increase spark.sql.shuffle.partitions to partition data finer       ", "Set spark.executor.memoryOverhead to allocate disk buffering swap   ", "Enable dynamic allocation with spark.dynamicAllocation.enabled=true ", "Decrease spark.memory.fraction to clear memory namespaces execution "],
      correct: [0],
      concept: "Shuffle spill occurs when the data partition size exceeds the available memory buffer during a shuffle. Increasing the number of shuffle partitions (default is 200) reduces the size of each individual partition, allowing them to fit into executor memory and preventing OOMs."
    },
    {
      id: 11,
      type: "single",
      difficulty: 1,
      question: "A Spark cluster running on EMR runs `Python analytics script` for `parsing` on `Joins & Aggregations`. The execution fails due to memory exhaustion. The log shows a high amount of \'Shuffle Spill (Disk)\' followed by an OutOfMemory (OOM) error. Which configuration adjustment will directly address the OOM root cause?",
      options: ["Increase spark.sql.shuffle.partitions to partition data finer       ", "Set spark.executor.memoryOverhead to allocate disk buffering swap   ", "Enable dynamic allocation with spark.dynamicAllocation.enabled=true ", "Decrease spark.memory.fraction to clear memory namespaces execution "],
      correct: [0],
      concept: "Shuffle spill occurs when the data partition size exceeds the available memory buffer during a shuffle. Increasing the number of shuffle partitions (default is 200) reduces the size of each individual partition, allowing them to fit into executor memory and preventing OOMs."
    },
    {
      id: 12,
      type: "single",
      difficulty: 1,
      question: "A Spark cluster running on EMR runs `PySpark job running on EMR` for `optimizing` on `UDFs in Spark`. The execution fails due to memory exhaustion. The log shows a high amount of \'Shuffle Spill (Disk)\' followed by an OutOfMemory (OOM) error. Which configuration adjustment will directly address the OOM root cause?",
      options: ["Increase spark.sql.shuffle.partitions to partition data finer       ", "Set spark.executor.memoryOverhead to allocate disk buffering swap   ", "Enable dynamic allocation with spark.dynamicAllocation.enabled=true ", "Decrease spark.memory.fraction to clear memory namespaces execution "],
      correct: [0],
      concept: "Shuffle spill occurs when the data partition size exceeds the available memory buffer during a shuffle. Increasing the number of shuffle partitions (default is 200) reduces the size of each individual partition, allowing them to fit into executor memory and preventing OOMs."
    },
    {
      id: 13,
      type: "single",
      difficulty: 1,
      question: "A Spark cluster running on EMR runs `Snowflake warehouse on AWS` for `buffering` on `Window Functions`. The execution fails due to memory exhaustion. The log shows a high amount of \'Shuffle Spill (Disk)\' followed by an OutOfMemory (OOM) error. Which configuration adjustment will directly address the OOM root cause?",
      options: ["Increase spark.sql.shuffle.partitions to partition data finer       ", "Set spark.executor.memoryOverhead to allocate disk buffering swap   ", "Enable dynamic allocation with spark.dynamicAllocation.enabled=true ", "Decrease spark.memory.fraction to clear memory namespaces execution "],
      correct: [0],
      concept: "Shuffle spill occurs when the data partition size exceeds the available memory buffer during a shuffle. Increasing the number of shuffle partitions (default is 200) reduces the size of each individual partition, allowing them to fit into executor memory and preventing OOMs."
    },
    {
      id: 14,
      type: "single",
      difficulty: 1,
      question: "A Spark cluster running on EMR runs `dbt Core model in BigQuery` for `checkpointing` on `Performance Tuning`. The execution fails due to memory exhaustion. The log shows a high amount of \'Shuffle Spill (Disk)\' followed by an OutOfMemory (OOM) error. Which configuration adjustment will directly address the OOM root cause?",
      options: ["Increase spark.sql.shuffle.partitions to partition data finer       ", "Set spark.executor.memoryOverhead to allocate disk buffering swap   ", "Enable dynamic allocation with spark.dynamicAllocation.enabled=true ", "Decrease spark.memory.fraction to clear memory namespaces execution "],
      correct: [0],
      concept: "Shuffle spill occurs when the data partition size exceeds the available memory buffer during a shuffle. Increasing the number of shuffle partitions (default is 200) reduces the size of each individual partition, allowing them to fit into executor memory and preventing OOMs."
    },
    {
      id: 15,
      type: "single",
      difficulty: 1,
      question: "A Spark cluster running on EMR runs `DataStage parallel engine` for `materializing` on `Broadcast Variables`. The execution fails due to memory exhaustion. The log shows a high amount of \'Shuffle Spill (Disk)\' followed by an OutOfMemory (OOM) error. Which configuration adjustment will directly address the OOM root cause?",
      options: ["Increase spark.sql.shuffle.partitions to partition data finer       ", "Set spark.executor.memoryOverhead to allocate disk buffering swap   ", "Enable dynamic allocation with spark.dynamicAllocation.enabled=true ", "Decrease spark.memory.fraction to clear memory namespaces execution "],
      correct: [0],
      concept: "Shuffle spill occurs when the data partition size exceeds the available memory buffer during a shuffle. Increasing the number of shuffle partitions (default is 200) reduces the size of each individual partition, allowing them to fit into executor memory and preventing OOMs."
    },
    {
      id: 16,
      type: "single",
      difficulty: 1,
      question: "A Spark cluster running on EMR runs `IDMC secure agent in Azure` for `partitioning` on `Joins & Aggregations`. The execution fails due to memory exhaustion. The log shows a high amount of \'Shuffle Spill (Disk)\' followed by an OutOfMemory (OOM) error. Which configuration adjustment will directly address the OOM root cause?",
      options: ["Increase spark.sql.shuffle.partitions to partition data finer       ", "Set spark.executor.memoryOverhead to allocate disk buffering swap   ", "Enable dynamic allocation with spark.dynamicAllocation.enabled=true ", "Decrease spark.memory.fraction to clear memory namespaces execution "],
      correct: [0],
      concept: "Shuffle spill occurs when the data partition size exceeds the available memory buffer during a shuffle. Increasing the number of shuffle partitions (default is 200) reduces the size of each individual partition, allowing them to fit into executor memory and preventing OOMs."
    },
    {
      id: 17,
      type: "single",
      difficulty: 1,
      question: "A Spark cluster running on EMR runs `Python analytics script` for `indexing` on `UDFs in Spark`. The execution fails due to memory exhaustion. The log shows a high amount of \'Shuffle Spill (Disk)\' followed by an OutOfMemory (OOM) error. Which configuration adjustment will directly address the OOM root cause?",
      options: ["Increase spark.sql.shuffle.partitions to partition data finer       ", "Set spark.executor.memoryOverhead to allocate disk buffering swap   ", "Enable dynamic allocation with spark.dynamicAllocation.enabled=true ", "Decrease spark.memory.fraction to clear memory namespaces execution "],
      correct: [0],
      concept: "Shuffle spill occurs when the data partition size exceeds the available memory buffer during a shuffle. Increasing the number of shuffle partitions (default is 200) reduces the size of each individual partition, allowing them to fit into executor memory and preventing OOMs."
    },
    {
      id: 18,
      type: "single",
      difficulty: 1,
      question: "A Spark cluster running on EMR runs `PySpark job running on EMR` for `governing` on `Window Functions`. The execution fails due to memory exhaustion. The log shows a high amount of \'Shuffle Spill (Disk)\' followed by an OutOfMemory (OOM) error. Which configuration adjustment will directly address the OOM root cause?",
      options: ["Increase spark.sql.shuffle.partitions to partition data finer       ", "Set spark.executor.memoryOverhead to allocate disk buffering swap   ", "Enable dynamic allocation with spark.dynamicAllocation.enabled=true ", "Decrease spark.memory.fraction to clear memory namespaces execution "],
      correct: [0],
      concept: "Shuffle spill occurs when the data partition size exceeds the available memory buffer during a shuffle. Increasing the number of shuffle partitions (default is 200) reduces the size of each individual partition, allowing them to fit into executor memory and preventing OOMs."
    },
    {
      id: 19,
      type: "single",
      difficulty: 1,
      question: "A Spark cluster running on EMR runs `Snowflake warehouse on AWS` for `validating` on `Performance Tuning`. The execution fails due to memory exhaustion. The log shows a high amount of \'Shuffle Spill (Disk)\' followed by an OutOfMemory (OOM) error. Which configuration adjustment will directly address the OOM root cause?",
      options: ["Increase spark.sql.shuffle.partitions to partition data finer       ", "Set spark.executor.memoryOverhead to allocate disk buffering swap   ", "Enable dynamic allocation with spark.dynamicAllocation.enabled=true ", "Decrease spark.memory.fraction to clear memory namespaces execution "],
      correct: [0],
      concept: "Shuffle spill occurs when the data partition size exceeds the available memory buffer during a shuffle. Increasing the number of shuffle partitions (default is 200) reduces the size of each individual partition, allowing them to fit into executor memory and preventing OOMs."
    },
    {
      id: 20,
      type: "single",
      difficulty: 1,
      question: "A Spark cluster running on EMR runs `dbt Core model in BigQuery` for `transforming` on `Broadcast Variables`. The execution fails due to memory exhaustion. The log shows a high amount of \'Shuffle Spill (Disk)\' followed by an OutOfMemory (OOM) error. Which configuration adjustment will directly address the OOM root cause?",
      options: ["Increase spark.sql.shuffle.partitions to partition data finer       ", "Set spark.executor.memoryOverhead to allocate disk buffering swap   ", "Enable dynamic allocation with spark.dynamicAllocation.enabled=true ", "Decrease spark.memory.fraction to clear memory namespaces execution "],
      correct: [0],
      concept: "Shuffle spill occurs when the data partition size exceeds the available memory buffer during a shuffle. Increasing the number of shuffle partitions (default is 200) reduces the size of each individual partition, allowing them to fit into executor memory and preventing OOMs."
    },
    {
      id: 21,
      type: "single",
      difficulty: 1,
      question: "A Spark cluster running on EMR runs `DataStage parallel engine` for `parsing` on `Joins & Aggregations`. The execution fails due to memory exhaustion. The log shows a high amount of \'Shuffle Spill (Disk)\' followed by an OutOfMemory (OOM) error. Which configuration adjustment will directly address the OOM root cause?",
      options: ["Increase spark.sql.shuffle.partitions to partition data finer       ", "Set spark.executor.memoryOverhead to allocate disk buffering swap   ", "Enable dynamic allocation with spark.dynamicAllocation.enabled=true ", "Decrease spark.memory.fraction to clear memory namespaces execution "],
      correct: [0],
      concept: "Shuffle spill occurs when the data partition size exceeds the available memory buffer during a shuffle. Increasing the number of shuffle partitions (default is 200) reduces the size of each individual partition, allowing them to fit into executor memory and preventing OOMs."
    },
    {
      id: 22,
      type: "single",
      difficulty: 1,
      question: "A Spark cluster running on EMR runs `IDMC secure agent in Azure` for `optimizing` on `UDFs in Spark`. The execution fails due to memory exhaustion. The log shows a high amount of \'Shuffle Spill (Disk)\' followed by an OutOfMemory (OOM) error. Which configuration adjustment will directly address the OOM root cause?",
      options: ["Increase spark.sql.shuffle.partitions to partition data finer       ", "Set spark.executor.memoryOverhead to allocate disk buffering swap   ", "Enable dynamic allocation with spark.dynamicAllocation.enabled=true ", "Decrease spark.memory.fraction to clear memory namespaces execution "],
      correct: [0],
      concept: "Shuffle spill occurs when the data partition size exceeds the available memory buffer during a shuffle. Increasing the number of shuffle partitions (default is 200) reduces the size of each individual partition, allowing them to fit into executor memory and preventing OOMs."
    },
    {
      id: 23,
      type: "single",
      difficulty: 1,
      question: "A Spark cluster running on EMR runs `Python analytics script` for `buffering` on `Window Functions`. The execution fails due to memory exhaustion. The log shows a high amount of \'Shuffle Spill (Disk)\' followed by an OutOfMemory (OOM) error. Which configuration adjustment will directly address the OOM root cause?",
      options: ["Increase spark.sql.shuffle.partitions to partition data finer       ", "Set spark.executor.memoryOverhead to allocate disk buffering swap   ", "Enable dynamic allocation with spark.dynamicAllocation.enabled=true ", "Decrease spark.memory.fraction to clear memory namespaces execution "],
      correct: [0],
      concept: "Shuffle spill occurs when the data partition size exceeds the available memory buffer during a shuffle. Increasing the number of shuffle partitions (default is 200) reduces the size of each individual partition, allowing them to fit into executor memory and preventing OOMs."
    },
    {
      id: 24,
      type: "single",
      difficulty: 1,
      question: "A Spark cluster running on EMR runs `PySpark job running on EMR` for `checkpointing` on `Performance Tuning`. The execution fails due to memory exhaustion. The log shows a high amount of \'Shuffle Spill (Disk)\' followed by an OutOfMemory (OOM) error. Which configuration adjustment will directly address the OOM root cause?",
      options: ["Increase spark.sql.shuffle.partitions to partition data finer       ", "Set spark.executor.memoryOverhead to allocate disk buffering swap   ", "Enable dynamic allocation with spark.dynamicAllocation.enabled=true ", "Decrease spark.memory.fraction to clear memory namespaces execution "],
      correct: [0],
      concept: "Shuffle spill occurs when the data partition size exceeds the available memory buffer during a shuffle. Increasing the number of shuffle partitions (default is 200) reduces the size of each individual partition, allowing them to fit into executor memory and preventing OOMs."
    },
    {
      id: 25,
      type: "single",
      difficulty: 1,
      question: "A Spark cluster running on EMR runs `Snowflake warehouse on AWS` for `materializing` on `Broadcast Variables`. The execution fails due to memory exhaustion. The log shows a high amount of \'Shuffle Spill (Disk)\' followed by an OutOfMemory (OOM) error. Which configuration adjustment will directly address the OOM root cause?",
      options: ["Increase spark.sql.shuffle.partitions to partition data finer       ", "Set spark.executor.memoryOverhead to allocate disk buffering swap   ", "Enable dynamic allocation with spark.dynamicAllocation.enabled=true ", "Decrease spark.memory.fraction to clear memory namespaces execution "],
      correct: [0],
      concept: "Shuffle spill occurs when the data partition size exceeds the available memory buffer during a shuffle. Increasing the number of shuffle partitions (default is 200) reduces the size of each individual partition, allowing them to fit into executor memory and preventing OOMs."
    },
    {
      id: 26,
      type: "single",
      difficulty: 1,
      question: "A Spark cluster running on EMR runs `dbt Core model in BigQuery` for `partitioning` on `Joins & Aggregations`. The execution fails due to memory exhaustion. The log shows a high amount of \'Shuffle Spill (Disk)\' followed by an OutOfMemory (OOM) error. Which configuration adjustment will directly address the OOM root cause?",
      options: ["Increase spark.sql.shuffle.partitions to partition data finer       ", "Set spark.executor.memoryOverhead to allocate disk buffering swap   ", "Enable dynamic allocation with spark.dynamicAllocation.enabled=true ", "Decrease spark.memory.fraction to clear memory namespaces execution "],
      correct: [0],
      concept: "Shuffle spill occurs when the data partition size exceeds the available memory buffer during a shuffle. Increasing the number of shuffle partitions (default is 200) reduces the size of each individual partition, allowing them to fit into executor memory and preventing OOMs."
    },
    {
      id: 27,
      type: "single",
      difficulty: 1,
      question: "A Spark cluster running on EMR runs `DataStage parallel engine` for `indexing` on `UDFs in Spark`. The execution fails due to memory exhaustion. The log shows a high amount of \'Shuffle Spill (Disk)\' followed by an OutOfMemory (OOM) error. Which configuration adjustment will directly address the OOM root cause?",
      options: ["Increase spark.sql.shuffle.partitions to partition data finer       ", "Set spark.executor.memoryOverhead to allocate disk buffering swap   ", "Enable dynamic allocation with spark.dynamicAllocation.enabled=true ", "Decrease spark.memory.fraction to clear memory namespaces execution "],
      correct: [0],
      concept: "Shuffle spill occurs when the data partition size exceeds the available memory buffer during a shuffle. Increasing the number of shuffle partitions (default is 200) reduces the size of each individual partition, allowing them to fit into executor memory and preventing OOMs."
    },
    {
      id: 28,
      type: "single",
      difficulty: 1,
      question: "A Spark cluster running on EMR runs `IDMC secure agent in Azure` for `governing` on `Window Functions`. The execution fails due to memory exhaustion. The log shows a high amount of \'Shuffle Spill (Disk)\' followed by an OutOfMemory (OOM) error. Which configuration adjustment will directly address the OOM root cause?",
      options: ["Increase spark.sql.shuffle.partitions to partition data finer       ", "Set spark.executor.memoryOverhead to allocate disk buffering swap   ", "Enable dynamic allocation with spark.dynamicAllocation.enabled=true ", "Decrease spark.memory.fraction to clear memory namespaces execution "],
      correct: [0],
      concept: "Shuffle spill occurs when the data partition size exceeds the available memory buffer during a shuffle. Increasing the number of shuffle partitions (default is 200) reduces the size of each individual partition, allowing them to fit into executor memory and preventing OOMs."
    },
    {
      id: 29,
      type: "single",
      difficulty: 1,
      question: "A Spark cluster running on EMR runs `Python analytics script` for `validating` on `Performance Tuning`. The execution fails due to memory exhaustion. The log shows a high amount of \'Shuffle Spill (Disk)\' followed by an OutOfMemory (OOM) error. Which configuration adjustment will directly address the OOM root cause?",
      options: ["Increase spark.sql.shuffle.partitions to partition data finer       ", "Set spark.executor.memoryOverhead to allocate disk buffering swap   ", "Enable dynamic allocation with spark.dynamicAllocation.enabled=true ", "Decrease spark.memory.fraction to clear memory namespaces execution "],
      correct: [0],
      concept: "Shuffle spill occurs when the data partition size exceeds the available memory buffer during a shuffle. Increasing the number of shuffle partitions (default is 200) reduces the size of each individual partition, allowing them to fit into executor memory and preventing OOMs."
    },
    {
      id: 30,
      type: "single",
      difficulty: 1,
      question: "A Spark cluster running on EMR runs `PySpark job running on EMR` for `transforming` on `Broadcast Variables`. The execution fails due to memory exhaustion. The log shows a high amount of \'Shuffle Spill (Disk)\' followed by an OutOfMemory (OOM) error. Which configuration adjustment will directly address the OOM root cause?",
      options: ["Increase spark.sql.shuffle.partitions to partition data finer       ", "Set spark.executor.memoryOverhead to allocate disk buffering swap   ", "Enable dynamic allocation with spark.dynamicAllocation.enabled=true ", "Decrease spark.memory.fraction to clear memory namespaces execution "],
      correct: [0],
      concept: "Shuffle spill occurs when the data partition size exceeds the available memory buffer during a shuffle. Increasing the number of shuffle partitions (default is 200) reduces the size of each individual partition, allowing them to fit into executor memory and preventing OOMs."
    },
    {
      id: 31,
      type: "single",
      difficulty: 1,
      question: "A Spark cluster running on EMR runs `Snowflake warehouse on AWS` for `parsing` on `Joins & Aggregations`. The execution fails due to memory exhaustion. The log shows a high amount of \'Shuffle Spill (Disk)\' followed by an OutOfMemory (OOM) error. Which configuration adjustment will directly address the OOM root cause?",
      options: ["Increase spark.sql.shuffle.partitions to partition data finer       ", "Set spark.executor.memoryOverhead to allocate disk buffering swap   ", "Enable dynamic allocation with spark.dynamicAllocation.enabled=true ", "Decrease spark.memory.fraction to clear memory namespaces execution "],
      correct: [0],
      concept: "Shuffle spill occurs when the data partition size exceeds the available memory buffer during a shuffle. Increasing the number of shuffle partitions (default is 200) reduces the size of each individual partition, allowing them to fit into executor memory and preventing OOMs."
    },
    {
      id: 32,
      type: "single",
      difficulty: 1,
      question: "A Spark cluster running on EMR runs `dbt Core model in BigQuery` for `optimizing` on `UDFs in Spark`. The execution fails due to memory exhaustion. The log shows a high amount of \'Shuffle Spill (Disk)\' followed by an OutOfMemory (OOM) error. Which configuration adjustment will directly address the OOM root cause?",
      options: ["Increase spark.sql.shuffle.partitions to partition data finer       ", "Set spark.executor.memoryOverhead to allocate disk buffering swap   ", "Enable dynamic allocation with spark.dynamicAllocation.enabled=true ", "Decrease spark.memory.fraction to clear memory namespaces execution "],
      correct: [0],
      concept: "Shuffle spill occurs when the data partition size exceeds the available memory buffer during a shuffle. Increasing the number of shuffle partitions (default is 200) reduces the size of each individual partition, allowing them to fit into executor memory and preventing OOMs."
    },
    {
      id: 33,
      type: "single",
      difficulty: 1,
      question: "A Spark cluster running on EMR runs `DataStage parallel engine` for `buffering` on `Window Functions`. The execution fails due to memory exhaustion. The log shows a high amount of \'Shuffle Spill (Disk)\' followed by an OutOfMemory (OOM) error. Which configuration adjustment will directly address the OOM root cause?",
      options: ["Increase spark.sql.shuffle.partitions to partition data finer       ", "Set spark.executor.memoryOverhead to allocate disk buffering swap   ", "Enable dynamic allocation with spark.dynamicAllocation.enabled=true ", "Decrease spark.memory.fraction to clear memory namespaces execution "],
      correct: [0],
      concept: "Shuffle spill occurs when the data partition size exceeds the available memory buffer during a shuffle. Increasing the number of shuffle partitions (default is 200) reduces the size of each individual partition, allowing them to fit into executor memory and preventing OOMs."
    },
    {
      id: 34,
      type: "single",
      difficulty: 1,
      question: "A Spark cluster running on EMR runs `IDMC secure agent in Azure` for `checkpointing` on `Performance Tuning`. The execution fails due to memory exhaustion. The log shows a high amount of \'Shuffle Spill (Disk)\' followed by an OutOfMemory (OOM) error. Which configuration adjustment will directly address the OOM root cause?",
      options: ["Increase spark.sql.shuffle.partitions to partition data finer       ", "Set spark.executor.memoryOverhead to allocate disk buffering swap   ", "Enable dynamic allocation with spark.dynamicAllocation.enabled=true ", "Decrease spark.memory.fraction to clear memory namespaces execution "],
      correct: [0],
      concept: "Shuffle spill occurs when the data partition size exceeds the available memory buffer during a shuffle. Increasing the number of shuffle partitions (default is 200) reduces the size of each individual partition, allowing them to fit into executor memory and preventing OOMs."
    },
    {
      id: 35,
      type: "single",
      difficulty: 1,
      question: "A Spark cluster running on EMR runs `Python analytics script` for `materializing` on `Broadcast Variables`. The execution fails due to memory exhaustion. The log shows a high amount of \'Shuffle Spill (Disk)\' followed by an OutOfMemory (OOM) error. Which configuration adjustment will directly address the OOM root cause?",
      options: ["Increase spark.sql.shuffle.partitions to partition data finer       ", "Set spark.executor.memoryOverhead to allocate disk buffering swap   ", "Enable dynamic allocation with spark.dynamicAllocation.enabled=true ", "Decrease spark.memory.fraction to clear memory namespaces execution "],
      correct: [0],
      concept: "Shuffle spill occurs when the data partition size exceeds the available memory buffer during a shuffle. Increasing the number of shuffle partitions (default is 200) reduces the size of each individual partition, allowing them to fit into executor memory and preventing OOMs."
    },
    {
      id: 36,
      type: "single",
      difficulty: 2,
      question: "A Spark cluster running on EMR runs `PySpark job running on EMR` for `partitioning` on `Joins & Aggregations`. The execution fails due to memory exhaustion. The log shows a high amount of \'Shuffle Spill (Disk)\' followed by an OutOfMemory (OOM) error. Which configuration adjustment will directly address the OOM root cause?",
      options: ["Increase spark.sql.shuffle.partitions to partition data finer       ", "Set spark.executor.memoryOverhead to allocate disk buffering swap   ", "Enable dynamic allocation with spark.dynamicAllocation.enabled=true ", "Decrease spark.memory.fraction to clear memory namespaces execution "],
      correct: [0],
      concept: "Shuffle spill occurs when the data partition size exceeds the available memory buffer during a shuffle. Increasing the number of shuffle partitions (default is 200) reduces the size of each individual partition, allowing them to fit into executor memory and preventing OOMs."
    },
    {
      id: 37,
      type: "single",
      difficulty: 2,
      question: "A Spark cluster running on EMR runs `Snowflake warehouse on AWS` for `indexing` on `UDFs in Spark`. The execution fails due to memory exhaustion. The log shows a high amount of \'Shuffle Spill (Disk)\' followed by an OutOfMemory (OOM) error. Which configuration adjustment will directly address the OOM root cause?",
      options: ["Increase spark.sql.shuffle.partitions to partition data finer       ", "Set spark.executor.memoryOverhead to allocate disk buffering swap   ", "Enable dynamic allocation with spark.dynamicAllocation.enabled=true ", "Decrease spark.memory.fraction to clear memory namespaces execution "],
      correct: [0],
      concept: "Shuffle spill occurs when the data partition size exceeds the available memory buffer during a shuffle. Increasing the number of shuffle partitions (default is 200) reduces the size of each individual partition, allowing them to fit into executor memory and preventing OOMs."
    },
    {
      id: 38,
      type: "single",
      difficulty: 2,
      question: "A Spark cluster running on EMR runs `dbt Core model in BigQuery` for `governing` on `Window Functions`. The execution fails due to memory exhaustion. The log shows a high amount of \'Shuffle Spill (Disk)\' followed by an OutOfMemory (OOM) error. Which configuration adjustment will directly address the OOM root cause?",
      options: ["Increase spark.sql.shuffle.partitions to partition data finer       ", "Set spark.executor.memoryOverhead to allocate disk buffering swap   ", "Enable dynamic allocation with spark.dynamicAllocation.enabled=true ", "Decrease spark.memory.fraction to clear memory namespaces execution "],
      correct: [0],
      concept: "Shuffle spill occurs when the data partition size exceeds the available memory buffer during a shuffle. Increasing the number of shuffle partitions (default is 200) reduces the size of each individual partition, allowing them to fit into executor memory and preventing OOMs."
    },
    {
      id: 39,
      type: "single",
      difficulty: 2,
      question: "A Spark cluster running on EMR runs `DataStage parallel engine` for `validating` on `Performance Tuning`. The execution fails due to memory exhaustion. The log shows a high amount of \'Shuffle Spill (Disk)\' followed by an OutOfMemory (OOM) error. Which configuration adjustment will directly address the OOM root cause?",
      options: ["Increase spark.sql.shuffle.partitions to partition data finer       ", "Set spark.executor.memoryOverhead to allocate disk buffering swap   ", "Enable dynamic allocation with spark.dynamicAllocation.enabled=true ", "Decrease spark.memory.fraction to clear memory namespaces execution "],
      correct: [0],
      concept: "Shuffle spill occurs when the data partition size exceeds the available memory buffer during a shuffle. Increasing the number of shuffle partitions (default is 200) reduces the size of each individual partition, allowing them to fit into executor memory and preventing OOMs."
    },
    {
      id: 40,
      type: "single",
      difficulty: 2,
      question: "A Spark cluster running on EMR runs `IDMC secure agent in Azure` for `transforming` on `Broadcast Variables`. The execution fails due to memory exhaustion. The log shows a high amount of \'Shuffle Spill (Disk)\' followed by an OutOfMemory (OOM) error. Which configuration adjustment will directly address the OOM root cause?",
      options: ["Increase spark.sql.shuffle.partitions to partition data finer       ", "Set spark.executor.memoryOverhead to allocate disk buffering swap   ", "Enable dynamic allocation with spark.dynamicAllocation.enabled=true ", "Decrease spark.memory.fraction to clear memory namespaces execution "],
      correct: [0],
      concept: "Shuffle spill occurs when the data partition size exceeds the available memory buffer during a shuffle. Increasing the number of shuffle partitions (default is 200) reduces the size of each individual partition, allowing them to fit into executor memory and preventing OOMs."
    },
    {
      id: 41,
      type: "single",
      difficulty: 2,
      question: "A Spark cluster running on EMR runs `Python analytics script` for `parsing` on `Joins & Aggregations`. The execution fails due to memory exhaustion. The log shows a high amount of \'Shuffle Spill (Disk)\' followed by an OutOfMemory (OOM) error. Which configuration adjustment will directly address the OOM root cause?",
      options: ["Increase spark.sql.shuffle.partitions to partition data finer       ", "Set spark.executor.memoryOverhead to allocate disk buffering swap   ", "Enable dynamic allocation with spark.dynamicAllocation.enabled=true ", "Decrease spark.memory.fraction to clear memory namespaces execution "],
      correct: [0],
      concept: "Shuffle spill occurs when the data partition size exceeds the available memory buffer during a shuffle. Increasing the number of shuffle partitions (default is 200) reduces the size of each individual partition, allowing them to fit into executor memory and preventing OOMs."
    },
    {
      id: 42,
      type: "single",
      difficulty: 2,
      question: "A Spark cluster running on EMR runs `PySpark job running on EMR` for `optimizing` on `UDFs in Spark`. The execution fails due to memory exhaustion. The log shows a high amount of \'Shuffle Spill (Disk)\' followed by an OutOfMemory (OOM) error. Which configuration adjustment will directly address the OOM root cause?",
      options: ["Increase spark.sql.shuffle.partitions to partition data finer       ", "Set spark.executor.memoryOverhead to allocate disk buffering swap   ", "Enable dynamic allocation with spark.dynamicAllocation.enabled=true ", "Decrease spark.memory.fraction to clear memory namespaces execution "],
      correct: [0],
      concept: "Shuffle spill occurs when the data partition size exceeds the available memory buffer during a shuffle. Increasing the number of shuffle partitions (default is 200) reduces the size of each individual partition, allowing them to fit into executor memory and preventing OOMs."
    },
    {
      id: 43,
      type: "single",
      difficulty: 2,
      question: "A Spark cluster running on EMR runs `Snowflake warehouse on AWS` for `buffering` on `Window Functions`. The execution fails due to memory exhaustion. The log shows a high amount of \'Shuffle Spill (Disk)\' followed by an OutOfMemory (OOM) error. Which configuration adjustment will directly address the OOM root cause?",
      options: ["Increase spark.sql.shuffle.partitions to partition data finer       ", "Set spark.executor.memoryOverhead to allocate disk buffering swap   ", "Enable dynamic allocation with spark.dynamicAllocation.enabled=true ", "Decrease spark.memory.fraction to clear memory namespaces execution "],
      correct: [0],
      concept: "Shuffle spill occurs when the data partition size exceeds the available memory buffer during a shuffle. Increasing the number of shuffle partitions (default is 200) reduces the size of each individual partition, allowing them to fit into executor memory and preventing OOMs."
    },
    {
      id: 44,
      type: "single",
      difficulty: 2,
      question: "A Spark cluster running on EMR runs `dbt Core model in BigQuery` for `checkpointing` on `Performance Tuning`. The execution fails due to memory exhaustion. The log shows a high amount of \'Shuffle Spill (Disk)\' followed by an OutOfMemory (OOM) error. Which configuration adjustment will directly address the OOM root cause?",
      options: ["Increase spark.sql.shuffle.partitions to partition data finer       ", "Set spark.executor.memoryOverhead to allocate disk buffering swap   ", "Enable dynamic allocation with spark.dynamicAllocation.enabled=true ", "Decrease spark.memory.fraction to clear memory namespaces execution "],
      correct: [0],
      concept: "Shuffle spill occurs when the data partition size exceeds the available memory buffer during a shuffle. Increasing the number of shuffle partitions (default is 200) reduces the size of each individual partition, allowing them to fit into executor memory and preventing OOMs."
    },
    {
      id: 45,
      type: "single",
      difficulty: 2,
      question: "A Spark cluster running on EMR runs `DataStage parallel engine` for `materializing` on `Broadcast Variables`. The execution fails due to memory exhaustion. The log shows a high amount of \'Shuffle Spill (Disk)\' followed by an OutOfMemory (OOM) error. Which configuration adjustment will directly address the OOM root cause?",
      options: ["Increase spark.sql.shuffle.partitions to partition data finer       ", "Set spark.executor.memoryOverhead to allocate disk buffering swap   ", "Enable dynamic allocation with spark.dynamicAllocation.enabled=true ", "Decrease spark.memory.fraction to clear memory namespaces execution "],
      correct: [0],
      concept: "Shuffle spill occurs when the data partition size exceeds the available memory buffer during a shuffle. Increasing the number of shuffle partitions (default is 200) reduces the size of each individual partition, allowing them to fit into executor memory and preventing OOMs."
    },
    {
      id: 46,
      type: "single",
      difficulty: 2,
      question: "A Spark cluster running on EMR runs `IDMC secure agent in Azure` for `partitioning` on `Joins & Aggregations`. The execution fails due to memory exhaustion. The log shows a high amount of \'Shuffle Spill (Disk)\' followed by an OutOfMemory (OOM) error. Which configuration adjustment will directly address the OOM root cause?",
      options: ["Increase spark.sql.shuffle.partitions to partition data finer       ", "Set spark.executor.memoryOverhead to allocate disk buffering swap   ", "Enable dynamic allocation with spark.dynamicAllocation.enabled=true ", "Decrease spark.memory.fraction to clear memory namespaces execution "],
      correct: [0],
      concept: "Shuffle spill occurs when the data partition size exceeds the available memory buffer during a shuffle. Increasing the number of shuffle partitions (default is 200) reduces the size of each individual partition, allowing them to fit into executor memory and preventing OOMs."
    },
    {
      id: 47,
      type: "single",
      difficulty: 2,
      question: "A Spark cluster running on EMR runs `Python analytics script` for `indexing` on `UDFs in Spark`. The execution fails due to memory exhaustion. The log shows a high amount of \'Shuffle Spill (Disk)\' followed by an OutOfMemory (OOM) error. Which configuration adjustment will directly address the OOM root cause?",
      options: ["Increase spark.sql.shuffle.partitions to partition data finer       ", "Set spark.executor.memoryOverhead to allocate disk buffering swap   ", "Enable dynamic allocation with spark.dynamicAllocation.enabled=true ", "Decrease spark.memory.fraction to clear memory namespaces execution "],
      correct: [0],
      concept: "Shuffle spill occurs when the data partition size exceeds the available memory buffer during a shuffle. Increasing the number of shuffle partitions (default is 200) reduces the size of each individual partition, allowing them to fit into executor memory and preventing OOMs."
    },
    {
      id: 48,
      type: "single",
      difficulty: 2,
      question: "A Spark cluster running on EMR runs `PySpark job running on EMR` for `governing` on `Window Functions`. The execution fails due to memory exhaustion. The log shows a high amount of \'Shuffle Spill (Disk)\' followed by an OutOfMemory (OOM) error. Which configuration adjustment will directly address the OOM root cause?",
      options: ["Increase spark.sql.shuffle.partitions to partition data finer       ", "Set spark.executor.memoryOverhead to allocate disk buffering swap   ", "Enable dynamic allocation with spark.dynamicAllocation.enabled=true ", "Decrease spark.memory.fraction to clear memory namespaces execution "],
      correct: [0],
      concept: "Shuffle spill occurs when the data partition size exceeds the available memory buffer during a shuffle. Increasing the number of shuffle partitions (default is 200) reduces the size of each individual partition, allowing them to fit into executor memory and preventing OOMs."
    },
    {
      id: 49,
      type: "single",
      difficulty: 2,
      question: "A Spark cluster running on EMR runs `Snowflake warehouse on AWS` for `validating` on `Performance Tuning`. The execution fails due to memory exhaustion. The log shows a high amount of \'Shuffle Spill (Disk)\' followed by an OutOfMemory (OOM) error. Which configuration adjustment will directly address the OOM root cause?",
      options: ["Increase spark.sql.shuffle.partitions to partition data finer       ", "Set spark.executor.memoryOverhead to allocate disk buffering swap   ", "Enable dynamic allocation with spark.dynamicAllocation.enabled=true ", "Decrease spark.memory.fraction to clear memory namespaces execution "],
      correct: [0],
      concept: "Shuffle spill occurs when the data partition size exceeds the available memory buffer during a shuffle. Increasing the number of shuffle partitions (default is 200) reduces the size of each individual partition, allowing them to fit into executor memory and preventing OOMs."
    },
    {
      id: 50,
      type: "single",
      difficulty: 2,
      question: "A Spark cluster running on EMR runs `dbt Core model in BigQuery` for `transforming` on `Broadcast Variables`. The execution fails due to memory exhaustion. The log shows a high amount of \'Shuffle Spill (Disk)\' followed by an OutOfMemory (OOM) error. Which configuration adjustment will directly address the OOM root cause?",
      options: ["Increase spark.sql.shuffle.partitions to partition data finer       ", "Set spark.executor.memoryOverhead to allocate disk buffering swap   ", "Enable dynamic allocation with spark.dynamicAllocation.enabled=true ", "Decrease spark.memory.fraction to clear memory namespaces execution "],
      correct: [0],
      concept: "Shuffle spill occurs when the data partition size exceeds the available memory buffer during a shuffle. Increasing the number of shuffle partitions (default is 200) reduces the size of each individual partition, allowing them to fit into executor memory and preventing OOMs."
    },
    {
      id: 51,
      type: "single",
      difficulty: 2,
      question: "A Spark cluster running on EMR runs `DataStage parallel engine` for `parsing` on `Joins & Aggregations`. The execution fails due to memory exhaustion. The log shows a high amount of \'Shuffle Spill (Disk)\' followed by an OutOfMemory (OOM) error. Which configuration adjustment will directly address the OOM root cause?",
      options: ["Increase spark.sql.shuffle.partitions to partition data finer       ", "Set spark.executor.memoryOverhead to allocate disk buffering swap   ", "Enable dynamic allocation with spark.dynamicAllocation.enabled=true ", "Decrease spark.memory.fraction to clear memory namespaces execution "],
      correct: [0],
      concept: "Shuffle spill occurs when the data partition size exceeds the available memory buffer during a shuffle. Increasing the number of shuffle partitions (default is 200) reduces the size of each individual partition, allowing them to fit into executor memory and preventing OOMs."
    },
    {
      id: 52,
      type: "single",
      difficulty: 2,
      question: "A Spark cluster running on EMR runs `IDMC secure agent in Azure` for `optimizing` on `UDFs in Spark`. The execution fails due to memory exhaustion. The log shows a high amount of \'Shuffle Spill (Disk)\' followed by an OutOfMemory (OOM) error. Which configuration adjustment will directly address the OOM root cause?",
      options: ["Increase spark.sql.shuffle.partitions to partition data finer       ", "Set spark.executor.memoryOverhead to allocate disk buffering swap   ", "Enable dynamic allocation with spark.dynamicAllocation.enabled=true ", "Decrease spark.memory.fraction to clear memory namespaces execution "],
      correct: [0],
      concept: "Shuffle spill occurs when the data partition size exceeds the available memory buffer during a shuffle. Increasing the number of shuffle partitions (default is 200) reduces the size of each individual partition, allowing them to fit into executor memory and preventing OOMs."
    },
    {
      id: 53,
      type: "single",
      difficulty: 2,
      question: "A Spark cluster running on EMR runs `Python analytics script` for `buffering` on `Window Functions`. The execution fails due to memory exhaustion. The log shows a high amount of \'Shuffle Spill (Disk)\' followed by an OutOfMemory (OOM) error. Which configuration adjustment will directly address the OOM root cause?",
      options: ["Increase spark.sql.shuffle.partitions to partition data finer       ", "Set spark.executor.memoryOverhead to allocate disk buffering swap   ", "Enable dynamic allocation with spark.dynamicAllocation.enabled=true ", "Decrease spark.memory.fraction to clear memory namespaces execution "],
      correct: [0],
      concept: "Shuffle spill occurs when the data partition size exceeds the available memory buffer during a shuffle. Increasing the number of shuffle partitions (default is 200) reduces the size of each individual partition, allowing them to fit into executor memory and preventing OOMs."
    },
    {
      id: 54,
      type: "single",
      difficulty: 2,
      question: "A Spark cluster running on EMR runs `PySpark job running on EMR` for `checkpointing` on `Performance Tuning`. The execution fails due to memory exhaustion. The log shows a high amount of \'Shuffle Spill (Disk)\' followed by an OutOfMemory (OOM) error. Which configuration adjustment will directly address the OOM root cause?",
      options: ["Increase spark.sql.shuffle.partitions to partition data finer       ", "Set spark.executor.memoryOverhead to allocate disk buffering swap   ", "Enable dynamic allocation with spark.dynamicAllocation.enabled=true ", "Decrease spark.memory.fraction to clear memory namespaces execution "],
      correct: [0],
      concept: "Shuffle spill occurs when the data partition size exceeds the available memory buffer during a shuffle. Increasing the number of shuffle partitions (default is 200) reduces the size of each individual partition, allowing them to fit into executor memory and preventing OOMs."
    },
    {
      id: 55,
      type: "single",
      difficulty: 2,
      question: "A Spark cluster running on EMR runs `Snowflake warehouse on AWS` for `materializing` on `Broadcast Variables`. The execution fails due to memory exhaustion. The log shows a high amount of \'Shuffle Spill (Disk)\' followed by an OutOfMemory (OOM) error. Which configuration adjustment will directly address the OOM root cause?",
      options: ["Increase spark.sql.shuffle.partitions to partition data finer       ", "Set spark.executor.memoryOverhead to allocate disk buffering swap   ", "Enable dynamic allocation with spark.dynamicAllocation.enabled=true ", "Decrease spark.memory.fraction to clear memory namespaces execution "],
      correct: [0],
      concept: "Shuffle spill occurs when the data partition size exceeds the available memory buffer during a shuffle. Increasing the number of shuffle partitions (default is 200) reduces the size of each individual partition, allowing them to fit into executor memory and preventing OOMs."
    },
    {
      id: 56,
      type: "single",
      difficulty: 2,
      question: "A Spark cluster running on EMR runs `dbt Core model in BigQuery` for `partitioning` on `Joins & Aggregations`. The execution fails due to memory exhaustion. The log shows a high amount of \'Shuffle Spill (Disk)\' followed by an OutOfMemory (OOM) error. Which configuration adjustment will directly address the OOM root cause?",
      options: ["Increase spark.sql.shuffle.partitions to partition data finer       ", "Set spark.executor.memoryOverhead to allocate disk buffering swap   ", "Enable dynamic allocation with spark.dynamicAllocation.enabled=true ", "Decrease spark.memory.fraction to clear memory namespaces execution "],
      correct: [0],
      concept: "Shuffle spill occurs when the data partition size exceeds the available memory buffer during a shuffle. Increasing the number of shuffle partitions (default is 200) reduces the size of each individual partition, allowing them to fit into executor memory and preventing OOMs."
    },
    {
      id: 57,
      type: "single",
      difficulty: 2,
      question: "A Spark cluster running on EMR runs `DataStage parallel engine` for `indexing` on `UDFs in Spark`. The execution fails due to memory exhaustion. The log shows a high amount of \'Shuffle Spill (Disk)\' followed by an OutOfMemory (OOM) error. Which configuration adjustment will directly address the OOM root cause?",
      options: ["Increase spark.sql.shuffle.partitions to partition data finer       ", "Set spark.executor.memoryOverhead to allocate disk buffering swap   ", "Enable dynamic allocation with spark.dynamicAllocation.enabled=true ", "Decrease spark.memory.fraction to clear memory namespaces execution "],
      correct: [0],
      concept: "Shuffle spill occurs when the data partition size exceeds the available memory buffer during a shuffle. Increasing the number of shuffle partitions (default is 200) reduces the size of each individual partition, allowing them to fit into executor memory and preventing OOMs."
    },
    {
      id: 58,
      type: "single",
      difficulty: 2,
      question: "A Spark cluster running on EMR runs `IDMC secure agent in Azure` for `governing` on `Window Functions`. The execution fails due to memory exhaustion. The log shows a high amount of \'Shuffle Spill (Disk)\' followed by an OutOfMemory (OOM) error. Which configuration adjustment will directly address the OOM root cause?",
      options: ["Increase spark.sql.shuffle.partitions to partition data finer       ", "Set spark.executor.memoryOverhead to allocate disk buffering swap   ", "Enable dynamic allocation with spark.dynamicAllocation.enabled=true ", "Decrease spark.memory.fraction to clear memory namespaces execution "],
      correct: [0],
      concept: "Shuffle spill occurs when the data partition size exceeds the available memory buffer during a shuffle. Increasing the number of shuffle partitions (default is 200) reduces the size of each individual partition, allowing them to fit into executor memory and preventing OOMs."
    },
    {
      id: 59,
      type: "single",
      difficulty: 2,
      question: "A Spark cluster running on EMR runs `Python analytics script` for `validating` on `Performance Tuning`. The execution fails due to memory exhaustion. The log shows a high amount of \'Shuffle Spill (Disk)\' followed by an OutOfMemory (OOM) error. Which configuration adjustment will directly address the OOM root cause?",
      options: ["Increase spark.sql.shuffle.partitions to partition data finer       ", "Set spark.executor.memoryOverhead to allocate disk buffering swap   ", "Enable dynamic allocation with spark.dynamicAllocation.enabled=true ", "Decrease spark.memory.fraction to clear memory namespaces execution "],
      correct: [0],
      concept: "Shuffle spill occurs when the data partition size exceeds the available memory buffer during a shuffle. Increasing the number of shuffle partitions (default is 200) reduces the size of each individual partition, allowing them to fit into executor memory and preventing OOMs."
    },
    {
      id: 60,
      type: "single",
      difficulty: 2,
      question: "A Spark cluster running on EMR runs `PySpark job running on EMR` for `transforming` on `Broadcast Variables`. The execution fails due to memory exhaustion. The log shows a high amount of \'Shuffle Spill (Disk)\' followed by an OutOfMemory (OOM) error. Which configuration adjustment will directly address the OOM root cause?",
      options: ["Increase spark.sql.shuffle.partitions to partition data finer       ", "Set spark.executor.memoryOverhead to allocate disk buffering swap   ", "Enable dynamic allocation with spark.dynamicAllocation.enabled=true ", "Decrease spark.memory.fraction to clear memory namespaces execution "],
      correct: [0],
      concept: "Shuffle spill occurs when the data partition size exceeds the available memory buffer during a shuffle. Increasing the number of shuffle partitions (default is 200) reduces the size of each individual partition, allowing them to fit into executor memory and preventing OOMs."
    },
    {
      id: 61,
      type: "multi",
      difficulty: 2,
      question: "When evaluating transformations in PySpark for `Joins & Aggregations`, you must identify which operations cause a stage boundary (narrow vs wide dependencies). Which of the following operations represent wide dependencies? (Select ALL that apply)",
      options: ["A: df.groupBy(\'key_col\').agg({\'val\': \'sum\'}) executing shuffle operations across clusters ", "B: df.join(other_df, on=\'id\', how=\'inner\') when performing sorting or partitioning        ", "C: df.filter(df[\'age\'] > 30) which evaluates conditions on existing data in-place         ", "D: df.select(\'col1\', \'col2\') which maps values linearly without redistributing records    "],
      correct: [0, 1],
      concept: "Wide dependencies require data to be shuffled across partitions, which triggers new stages. Common wide transformations include groupBy, join, repartition, and distinct. filter and select are narrow transformations because they operate on a single partition without shuffling."
    },
    {
      id: 62,
      type: "multi",
      difficulty: 2,
      question: "When evaluating transformations in PySpark for `UDFs in Spark`, you must identify which operations cause a stage boundary (narrow vs wide dependencies). Which of the following operations represent wide dependencies? (Select ALL that apply)",
      options: ["A: df.groupBy(\'key_col\').agg({\'val\': \'sum\'}) executing shuffle operations across clusters ", "B: df.join(other_df, on=\'id\', how=\'inner\') when performing sorting or partitioning        ", "C: df.filter(df[\'age\'] > 30) which evaluates conditions on existing data in-place         ", "D: df.select(\'col1\', \'col2\') which maps values linearly without redistributing records    "],
      correct: [0, 1],
      concept: "Wide dependencies require data to be shuffled across partitions, which triggers new stages. Common wide transformations include groupBy, join, repartition, and distinct. filter and select are narrow transformations because they operate on a single partition without shuffling."
    },
    {
      id: 63,
      type: "multi",
      difficulty: 2,
      question: "When evaluating transformations in PySpark for `Window Functions`, you must identify which operations cause a stage boundary (narrow vs wide dependencies). Which of the following operations represent wide dependencies? (Select ALL that apply)",
      options: ["A: df.groupBy(\'key_col\').agg({\'val\': \'sum\'}) executing shuffle operations across clusters ", "B: df.join(other_df, on=\'id\', how=\'inner\') when performing sorting or partitioning        ", "C: df.filter(df[\'age\'] > 30) which evaluates conditions on existing data in-place         ", "D: df.select(\'col1\', \'col2\') which maps values linearly without redistributing records    "],
      correct: [0, 1],
      concept: "Wide dependencies require data to be shuffled across partitions, which triggers new stages. Common wide transformations include groupBy, join, repartition, and distinct. filter and select are narrow transformations because they operate on a single partition without shuffling."
    },
    {
      id: 64,
      type: "multi",
      difficulty: 2,
      question: "When evaluating transformations in PySpark for `Performance Tuning`, you must identify which operations cause a stage boundary (narrow vs wide dependencies). Which of the following operations represent wide dependencies? (Select ALL that apply)",
      options: ["A: df.groupBy(\'key_col\').agg({\'val\': \'sum\'}) executing shuffle operations across clusters ", "B: df.join(other_df, on=\'id\', how=\'inner\') when performing sorting or partitioning        ", "C: df.filter(df[\'age\'] > 30) which evaluates conditions on existing data in-place         ", "D: df.select(\'col1\', \'col2\') which maps values linearly without redistributing records    "],
      correct: [0, 1],
      concept: "Wide dependencies require data to be shuffled across partitions, which triggers new stages. Common wide transformations include groupBy, join, repartition, and distinct. filter and select are narrow transformations because they operate on a single partition without shuffling."
    },
    {
      id: 65,
      type: "multi",
      difficulty: 2,
      question: "When evaluating transformations in PySpark for `Broadcast Variables`, you must identify which operations cause a stage boundary (narrow vs wide dependencies). Which of the following operations represent wide dependencies? (Select ALL that apply)",
      options: ["A: df.groupBy(\'key_col\').agg({\'val\': \'sum\'}) executing shuffle operations across clusters ", "B: df.join(other_df, on=\'id\', how=\'inner\') when performing sorting or partitioning        ", "C: df.filter(df[\'age\'] > 30) which evaluates conditions on existing data in-place         ", "D: df.select(\'col1\', \'col2\') which maps values linearly without redistributing records    "],
      correct: [0, 1],
      concept: "Wide dependencies require data to be shuffled across partitions, which triggers new stages. Common wide transformations include groupBy, join, repartition, and distinct. filter and select are narrow transformations because they operate on a single partition without shuffling."
    },
    {
      id: 66,
      type: "multi",
      difficulty: 2,
      question: "When evaluating transformations in PySpark for `Joins & Aggregations`, you must identify which operations cause a stage boundary (narrow vs wide dependencies). Which of the following operations represent wide dependencies? (Select ALL that apply)",
      options: ["A: df.groupBy(\'key_col\').agg({\'val\': \'sum\'}) executing shuffle operations across clusters ", "B: df.join(other_df, on=\'id\', how=\'inner\') when performing sorting or partitioning        ", "C: df.filter(df[\'age\'] > 30) which evaluates conditions on existing data in-place         ", "D: df.select(\'col1\', \'col2\') which maps values linearly without redistributing records    "],
      correct: [0, 1],
      concept: "Wide dependencies require data to be shuffled across partitions, which triggers new stages. Common wide transformations include groupBy, join, repartition, and distinct. filter and select are narrow transformations because they operate on a single partition without shuffling."
    },
    {
      id: 67,
      type: "multi",
      difficulty: 2,
      question: "When evaluating transformations in PySpark for `UDFs in Spark`, you must identify which operations cause a stage boundary (narrow vs wide dependencies). Which of the following operations represent wide dependencies? (Select ALL that apply)",
      options: ["A: df.groupBy(\'key_col\').agg({\'val\': \'sum\'}) executing shuffle operations across clusters ", "B: df.join(other_df, on=\'id\', how=\'inner\') when performing sorting or partitioning        ", "C: df.filter(df[\'age\'] > 30) which evaluates conditions on existing data in-place         ", "D: df.select(\'col1\', \'col2\') which maps values linearly without redistributing records    "],
      correct: [0, 1],
      concept: "Wide dependencies require data to be shuffled across partitions, which triggers new stages. Common wide transformations include groupBy, join, repartition, and distinct. filter and select are narrow transformations because they operate on a single partition without shuffling."
    },
    {
      id: 68,
      type: "multi",
      difficulty: 2,
      question: "When evaluating transformations in PySpark for `Window Functions`, you must identify which operations cause a stage boundary (narrow vs wide dependencies). Which of the following operations represent wide dependencies? (Select ALL that apply)",
      options: ["A: df.groupBy(\'key_col\').agg({\'val\': \'sum\'}) executing shuffle operations across clusters ", "B: df.join(other_df, on=\'id\', how=\'inner\') when performing sorting or partitioning        ", "C: df.filter(df[\'age\'] > 30) which evaluates conditions on existing data in-place         ", "D: df.select(\'col1\', \'col2\') which maps values linearly without redistributing records    "],
      correct: [0, 1],
      concept: "Wide dependencies require data to be shuffled across partitions, which triggers new stages. Common wide transformations include groupBy, join, repartition, and distinct. filter and select are narrow transformations because they operate on a single partition without shuffling."
    },
    {
      id: 69,
      type: "multi",
      difficulty: 2,
      question: "When evaluating transformations in PySpark for `Performance Tuning`, you must identify which operations cause a stage boundary (narrow vs wide dependencies). Which of the following operations represent wide dependencies? (Select ALL that apply)",
      options: ["A: df.groupBy(\'key_col\').agg({\'val\': \'sum\'}) executing shuffle operations across clusters ", "B: df.join(other_df, on=\'id\', how=\'inner\') when performing sorting or partitioning        ", "C: df.filter(df[\'age\'] > 30) which evaluates conditions on existing data in-place         ", "D: df.select(\'col1\', \'col2\') which maps values linearly without redistributing records    "],
      correct: [0, 1],
      concept: "Wide dependencies require data to be shuffled across partitions, which triggers new stages. Common wide transformations include groupBy, join, repartition, and distinct. filter and select are narrow transformations because they operate on a single partition without shuffling."
    },
    {
      id: 70,
      type: "multi",
      difficulty: 2,
      question: "When evaluating transformations in PySpark for `Broadcast Variables`, you must identify which operations cause a stage boundary (narrow vs wide dependencies). Which of the following operations represent wide dependencies? (Select ALL that apply)",
      options: ["A: df.groupBy(\'key_col\').agg({\'val\': \'sum\'}) executing shuffle operations across clusters ", "B: df.join(other_df, on=\'id\', how=\'inner\') when performing sorting or partitioning        ", "C: df.filter(df[\'age\'] > 30) which evaluates conditions on existing data in-place         ", "D: df.select(\'col1\', \'col2\') which maps values linearly without redistributing records    "],
      correct: [0, 1],
      concept: "Wide dependencies require data to be shuffled across partitions, which triggers new stages. Common wide transformations include groupBy, join, repartition, and distinct. filter and select are narrow transformations because they operate on a single partition without shuffling."
    },
    {
      id: 71,
      type: "multi",
      difficulty: 2,
      question: "When evaluating transformations in PySpark for `Joins & Aggregations`, you must identify which operations cause a stage boundary (narrow vs wide dependencies). Which of the following operations represent wide dependencies? (Select ALL that apply)",
      options: ["A: df.groupBy(\'key_col\').agg({\'val\': \'sum\'}) executing shuffle operations across clusters ", "B: df.join(other_df, on=\'id\', how=\'inner\') when performing sorting or partitioning        ", "C: df.filter(df[\'age\'] > 30) which evaluates conditions on existing data in-place         ", "D: df.select(\'col1\', \'col2\') which maps values linearly without redistributing records    "],
      correct: [0, 1],
      concept: "Wide dependencies require data to be shuffled across partitions, which triggers new stages. Common wide transformations include groupBy, join, repartition, and distinct. filter and select are narrow transformations because they operate on a single partition without shuffling."
    },
    {
      id: 72,
      type: "multi",
      difficulty: 2,
      question: "When evaluating transformations in PySpark for `UDFs in Spark`, you must identify which operations cause a stage boundary (narrow vs wide dependencies). Which of the following operations represent wide dependencies? (Select ALL that apply)",
      options: ["A: df.groupBy(\'key_col\').agg({\'val\': \'sum\'}) executing shuffle operations across clusters ", "B: df.join(other_df, on=\'id\', how=\'inner\') when performing sorting or partitioning        ", "C: df.filter(df[\'age\'] > 30) which evaluates conditions on existing data in-place         ", "D: df.select(\'col1\', \'col2\') which maps values linearly without redistributing records    "],
      correct: [0, 1],
      concept: "Wide dependencies require data to be shuffled across partitions, which triggers new stages. Common wide transformations include groupBy, join, repartition, and distinct. filter and select are narrow transformations because they operate on a single partition without shuffling."
    },
    {
      id: 73,
      type: "multi",
      difficulty: 2,
      question: "When evaluating transformations in PySpark for `Window Functions`, you must identify which operations cause a stage boundary (narrow vs wide dependencies). Which of the following operations represent wide dependencies? (Select ALL that apply)",
      options: ["A: df.groupBy(\'key_col\').agg({\'val\': \'sum\'}) executing shuffle operations across clusters ", "B: df.join(other_df, on=\'id\', how=\'inner\') when performing sorting or partitioning        ", "C: df.filter(df[\'age\'] > 30) which evaluates conditions on existing data in-place         ", "D: df.select(\'col1\', \'col2\') which maps values linearly without redistributing records    "],
      correct: [0, 1],
      concept: "Wide dependencies require data to be shuffled across partitions, which triggers new stages. Common wide transformations include groupBy, join, repartition, and distinct. filter and select are narrow transformations because they operate on a single partition without shuffling."
    },
    {
      id: 74,
      type: "multi",
      difficulty: 2,
      question: "When evaluating transformations in PySpark for `Performance Tuning`, you must identify which operations cause a stage boundary (narrow vs wide dependencies). Which of the following operations represent wide dependencies? (Select ALL that apply)",
      options: ["A: df.groupBy(\'key_col\').agg({\'val\': \'sum\'}) executing shuffle operations across clusters ", "B: df.join(other_df, on=\'id\', how=\'inner\') when performing sorting or partitioning        ", "C: df.filter(df[\'age\'] > 30) which evaluates conditions on existing data in-place         ", "D: df.select(\'col1\', \'col2\') which maps values linearly without redistributing records    "],
      correct: [0, 1],
      concept: "Wide dependencies require data to be shuffled across partitions, which triggers new stages. Common wide transformations include groupBy, join, repartition, and distinct. filter and select are narrow transformations because they operate on a single partition without shuffling."
    },
    {
      id: 75,
      type: "multi",
      difficulty: 2,
      question: "When evaluating transformations in PySpark for `Broadcast Variables`, you must identify which operations cause a stage boundary (narrow vs wide dependencies). Which of the following operations represent wide dependencies? (Select ALL that apply)",
      options: ["A: df.groupBy(\'key_col\').agg({\'val\': \'sum\'}) executing shuffle operations across clusters ", "B: df.join(other_df, on=\'id\', how=\'inner\') when performing sorting or partitioning        ", "C: df.filter(df[\'age\'] > 30) which evaluates conditions on existing data in-place         ", "D: df.select(\'col1\', \'col2\') which maps values linearly without redistributing records    "],
      correct: [0, 1],
      concept: "Wide dependencies require data to be shuffled across partitions, which triggers new stages. Common wide transformations include groupBy, join, repartition, and distinct. filter and select are narrow transformations because they operate on a single partition without shuffling."
    },
    {
      id: 76,
      type: "multi",
      difficulty: 3,
      question: "When evaluating transformations in PySpark for `Joins & Aggregations`, you must identify which operations cause a stage boundary (narrow vs wide dependencies). Which of the following operations represent wide dependencies? (Select ALL that apply)",
      options: ["A: df.groupBy(\'key_col\').agg({\'val\': \'sum\'}) executing shuffle operations across clusters ", "B: df.join(other_df, on=\'id\', how=\'inner\') when performing sorting or partitioning        ", "C: df.filter(df[\'age\'] > 30) which evaluates conditions on existing data in-place         ", "D: df.select(\'col1\', \'col2\') which maps values linearly without redistributing records    "],
      correct: [0, 1],
      concept: "Wide dependencies require data to be shuffled across partitions, which triggers new stages. Common wide transformations include groupBy, join, repartition, and distinct. filter and select are narrow transformations because they operate on a single partition without shuffling."
    },
    {
      id: 77,
      type: "multi",
      difficulty: 3,
      question: "When evaluating transformations in PySpark for `UDFs in Spark`, you must identify which operations cause a stage boundary (narrow vs wide dependencies). Which of the following operations represent wide dependencies? (Select ALL that apply)",
      options: ["A: df.groupBy(\'key_col\').agg({\'val\': \'sum\'}) executing shuffle operations across clusters ", "B: df.join(other_df, on=\'id\', how=\'inner\') when performing sorting or partitioning        ", "C: df.filter(df[\'age\'] > 30) which evaluates conditions on existing data in-place         ", "D: df.select(\'col1\', \'col2\') which maps values linearly without redistributing records    "],
      correct: [0, 1],
      concept: "Wide dependencies require data to be shuffled across partitions, which triggers new stages. Common wide transformations include groupBy, join, repartition, and distinct. filter and select are narrow transformations because they operate on a single partition without shuffling."
    },
    {
      id: 78,
      type: "multi",
      difficulty: 3,
      question: "When evaluating transformations in PySpark for `Window Functions`, you must identify which operations cause a stage boundary (narrow vs wide dependencies). Which of the following operations represent wide dependencies? (Select ALL that apply)",
      options: ["A: df.groupBy(\'key_col\').agg({\'val\': \'sum\'}) executing shuffle operations across clusters ", "B: df.join(other_df, on=\'id\', how=\'inner\') when performing sorting or partitioning        ", "C: df.filter(df[\'age\'] > 30) which evaluates conditions on existing data in-place         ", "D: df.select(\'col1\', \'col2\') which maps values linearly without redistributing records    "],
      correct: [0, 1],
      concept: "Wide dependencies require data to be shuffled across partitions, which triggers new stages. Common wide transformations include groupBy, join, repartition, and distinct. filter and select are narrow transformations because they operate on a single partition without shuffling."
    },
    {
      id: 79,
      type: "multi",
      difficulty: 3,
      question: "When evaluating transformations in PySpark for `Performance Tuning`, you must identify which operations cause a stage boundary (narrow vs wide dependencies). Which of the following operations represent wide dependencies? (Select ALL that apply)",
      options: ["A: df.groupBy(\'key_col\').agg({\'val\': \'sum\'}) executing shuffle operations across clusters ", "B: df.join(other_df, on=\'id\', how=\'inner\') when performing sorting or partitioning        ", "C: df.filter(df[\'age\'] > 30) which evaluates conditions on existing data in-place         ", "D: df.select(\'col1\', \'col2\') which maps values linearly without redistributing records    "],
      correct: [0, 1],
      concept: "Wide dependencies require data to be shuffled across partitions, which triggers new stages. Common wide transformations include groupBy, join, repartition, and distinct. filter and select are narrow transformations because they operate on a single partition without shuffling."
    },
    {
      id: 80,
      type: "multi",
      difficulty: 3,
      question: "When evaluating transformations in PySpark for `Broadcast Variables`, you must identify which operations cause a stage boundary (narrow vs wide dependencies). Which of the following operations represent wide dependencies? (Select ALL that apply)",
      options: ["A: df.groupBy(\'key_col\').agg({\'val\': \'sum\'}) executing shuffle operations across clusters ", "B: df.join(other_df, on=\'id\', how=\'inner\') when performing sorting or partitioning        ", "C: df.filter(df[\'age\'] > 30) which evaluates conditions on existing data in-place         ", "D: df.select(\'col1\', \'col2\') which maps values linearly without redistributing records    "],
      correct: [0, 1],
      concept: "Wide dependencies require data to be shuffled across partitions, which triggers new stages. Common wide transformations include groupBy, join, repartition, and distinct. filter and select are narrow transformations because they operate on a single partition without shuffling."
    },
    {
      id: 81,
      type: "multi",
      difficulty: 3,
      question: "When evaluating transformations in PySpark for `Joins & Aggregations`, you must identify which operations cause a stage boundary (narrow vs wide dependencies). Which of the following operations represent wide dependencies? (Select ALL that apply)",
      options: ["A: df.groupBy(\'key_col\').agg({\'val\': \'sum\'}) executing shuffle operations across clusters ", "B: df.join(other_df, on=\'id\', how=\'inner\') when performing sorting or partitioning        ", "C: df.filter(df[\'age\'] > 30) which evaluates conditions on existing data in-place         ", "D: df.select(\'col1\', \'col2\') which maps values linearly without redistributing records    "],
      correct: [0, 1],
      concept: "Wide dependencies require data to be shuffled across partitions, which triggers new stages. Common wide transformations include groupBy, join, repartition, and distinct. filter and select are narrow transformations because they operate on a single partition without shuffling."
    },
    {
      id: 82,
      type: "multi",
      difficulty: 3,
      question: "When evaluating transformations in PySpark for `UDFs in Spark`, you must identify which operations cause a stage boundary (narrow vs wide dependencies). Which of the following operations represent wide dependencies? (Select ALL that apply)",
      options: ["A: df.groupBy(\'key_col\').agg({\'val\': \'sum\'}) executing shuffle operations across clusters ", "B: df.join(other_df, on=\'id\', how=\'inner\') when performing sorting or partitioning        ", "C: df.filter(df[\'age\'] > 30) which evaluates conditions on existing data in-place         ", "D: df.select(\'col1\', \'col2\') which maps values linearly without redistributing records    "],
      correct: [0, 1],
      concept: "Wide dependencies require data to be shuffled across partitions, which triggers new stages. Common wide transformations include groupBy, join, repartition, and distinct. filter and select are narrow transformations because they operate on a single partition without shuffling."
    },
    {
      id: 83,
      type: "multi",
      difficulty: 3,
      question: "When evaluating transformations in PySpark for `Window Functions`, you must identify which operations cause a stage boundary (narrow vs wide dependencies). Which of the following operations represent wide dependencies? (Select ALL that apply)",
      options: ["A: df.groupBy(\'key_col\').agg({\'val\': \'sum\'}) executing shuffle operations across clusters ", "B: df.join(other_df, on=\'id\', how=\'inner\') when performing sorting or partitioning        ", "C: df.filter(df[\'age\'] > 30) which evaluates conditions on existing data in-place         ", "D: df.select(\'col1\', \'col2\') which maps values linearly without redistributing records    "],
      correct: [0, 1],
      concept: "Wide dependencies require data to be shuffled across partitions, which triggers new stages. Common wide transformations include groupBy, join, repartition, and distinct. filter and select are narrow transformations because they operate on a single partition without shuffling."
    },
    {
      id: 84,
      type: "multi",
      difficulty: 3,
      question: "When evaluating transformations in PySpark for `Performance Tuning`, you must identify which operations cause a stage boundary (narrow vs wide dependencies). Which of the following operations represent wide dependencies? (Select ALL that apply)",
      options: ["A: df.groupBy(\'key_col\').agg({\'val\': \'sum\'}) executing shuffle operations across clusters ", "B: df.join(other_df, on=\'id\', how=\'inner\') when performing sorting or partitioning        ", "C: df.filter(df[\'age\'] > 30) which evaluates conditions on existing data in-place         ", "D: df.select(\'col1\', \'col2\') which maps values linearly without redistributing records    "],
      correct: [0, 1],
      concept: "Wide dependencies require data to be shuffled across partitions, which triggers new stages. Common wide transformations include groupBy, join, repartition, and distinct. filter and select are narrow transformations because they operate on a single partition without shuffling."
    },
    {
      id: 85,
      type: "multi",
      difficulty: 3,
      question: "When evaluating transformations in PySpark for `Broadcast Variables`, you must identify which operations cause a stage boundary (narrow vs wide dependencies). Which of the following operations represent wide dependencies? (Select ALL that apply)",
      options: ["A: df.groupBy(\'key_col\').agg({\'val\': \'sum\'}) executing shuffle operations across clusters ", "B: df.join(other_df, on=\'id\', how=\'inner\') when performing sorting or partitioning        ", "C: df.filter(df[\'age\'] > 30) which evaluates conditions on existing data in-place         ", "D: df.select(\'col1\', \'col2\') which maps values linearly without redistributing records    "],
      correct: [0, 1],
      concept: "Wide dependencies require data to be shuffled across partitions, which triggers new stages. Common wide transformations include groupBy, join, repartition, and distinct. filter and select are narrow transformations because they operate on a single partition without shuffling."
    },
    {
      id: 86,
      type: "tf",
      difficulty: 3,
      question: "Is it true that in Apache Spark, calling the `.cache()` method on a DataFrame performing `Joins & Aggregations` immediately triggers an execution job and stores the resulting data in executor memory?",
      options: ["True, caching is an active trigger command in Spark    ", "False, cache is lazy and triggers on subsequent actions"],
      correct: [1],
      concept: "False. Caching in Spark is a lazy transformation, not an action. Calling .cache() simply flags the DataFrame to be cached when the next ACTION (like .count(), .show(), or .write) is executed."
    },
    {
      id: 87,
      type: "tf",
      difficulty: 3,
      question: "Is it true that in Apache Spark, calling the `.cache()` method on a DataFrame performing `UDFs in Spark` immediately triggers an execution job and stores the resulting data in executor memory?",
      options: ["True, caching is an active trigger command in Spark    ", "False, cache is lazy and triggers on subsequent actions"],
      correct: [1],
      concept: "False. Caching in Spark is a lazy transformation, not an action. Calling .cache() simply flags the DataFrame to be cached when the next ACTION (like .count(), .show(), or .write) is executed."
    },
    {
      id: 88,
      type: "tf",
      difficulty: 3,
      question: "Is it true that in Apache Spark, calling the `.cache()` method on a DataFrame performing `Window Functions` immediately triggers an execution job and stores the resulting data in executor memory?",
      options: ["True, caching is an active trigger command in Spark    ", "False, cache is lazy and triggers on subsequent actions"],
      correct: [1],
      concept: "False. Caching in Spark is a lazy transformation, not an action. Calling .cache() simply flags the DataFrame to be cached when the next ACTION (like .count(), .show(), or .write) is executed."
    },
    {
      id: 89,
      type: "tf",
      difficulty: 3,
      question: "Is it true that in Apache Spark, calling the `.cache()` method on a DataFrame performing `Performance Tuning` immediately triggers an execution job and stores the resulting data in executor memory?",
      options: ["True, caching is an active trigger command in Spark    ", "False, cache is lazy and triggers on subsequent actions"],
      correct: [1],
      concept: "False. Caching in Spark is a lazy transformation, not an action. Calling .cache() simply flags the DataFrame to be cached when the next ACTION (like .count(), .show(), or .write) is executed."
    },
    {
      id: 90,
      type: "tf",
      difficulty: 3,
      question: "Is it true that in Apache Spark, calling the `.cache()` method on a DataFrame performing `Broadcast Variables` immediately triggers an execution job and stores the resulting data in executor memory?",
      options: ["True, caching is an active trigger command in Spark    ", "False, cache is lazy and triggers on subsequent actions"],
      correct: [1],
      concept: "False. Caching in Spark is a lazy transformation, not an action. Calling .cache() simply flags the DataFrame to be cached when the next ACTION (like .count(), .show(), or .write) is executed."
    },
    {
      id: 91,
      type: "tf",
      difficulty: 3,
      question: "Is it true that in Apache Spark, calling the `.cache()` method on a DataFrame performing `Joins & Aggregations` immediately triggers an execution job and stores the resulting data in executor memory?",
      options: ["True, caching is an active trigger command in Spark    ", "False, cache is lazy and triggers on subsequent actions"],
      correct: [1],
      concept: "False. Caching in Spark is a lazy transformation, not an action. Calling .cache() simply flags the DataFrame to be cached when the next ACTION (like .count(), .show(), or .write) is executed."
    },
    {
      id: 92,
      type: "tf",
      difficulty: 3,
      question: "Is it true that in Apache Spark, calling the `.cache()` method on a DataFrame performing `UDFs in Spark` immediately triggers an execution job and stores the resulting data in executor memory?",
      options: ["True, caching is an active trigger command in Spark    ", "False, cache is lazy and triggers on subsequent actions"],
      correct: [1],
      concept: "False. Caching in Spark is a lazy transformation, not an action. Calling .cache() simply flags the DataFrame to be cached when the next ACTION (like .count(), .show(), or .write) is executed."
    },
    {
      id: 93,
      type: "tf",
      difficulty: 3,
      question: "Is it true that in Apache Spark, calling the `.cache()` method on a DataFrame performing `Window Functions` immediately triggers an execution job and stores the resulting data in executor memory?",
      options: ["True, caching is an active trigger command in Spark    ", "False, cache is lazy and triggers on subsequent actions"],
      correct: [1],
      concept: "False. Caching in Spark is a lazy transformation, not an action. Calling .cache() simply flags the DataFrame to be cached when the next ACTION (like .count(), .show(), or .write) is executed."
    },
    {
      id: 94,
      type: "tf",
      difficulty: 3,
      question: "Is it true that in Apache Spark, calling the `.cache()` method on a DataFrame performing `Performance Tuning` immediately triggers an execution job and stores the resulting data in executor memory?",
      options: ["True, caching is an active trigger command in Spark    ", "False, cache is lazy and triggers on subsequent actions"],
      correct: [1],
      concept: "False. Caching in Spark is a lazy transformation, not an action. Calling .cache() simply flags the DataFrame to be cached when the next ACTION (like .count(), .show(), or .write) is executed."
    },
    {
      id: 95,
      type: "tf",
      difficulty: 3,
      question: "Is it true that in Apache Spark, calling the `.cache()` method on a DataFrame performing `Broadcast Variables` immediately triggers an execution job and stores the resulting data in executor memory?",
      options: ["True, caching is an active trigger command in Spark    ", "False, cache is lazy and triggers on subsequent actions"],
      correct: [1],
      concept: "False. Caching in Spark is a lazy transformation, not an action. Calling .cache() simply flags the DataFrame to be cached when the next ACTION (like .count(), .show(), or .write) is executed."
    },
    {
      id: 96,
      type: "tf",
      difficulty: 3,
      question: "Is it true that in Apache Spark, calling the `.cache()` method on a DataFrame performing `Joins & Aggregations` immediately triggers an execution job and stores the resulting data in executor memory?",
      options: ["True, caching is an active trigger command in Spark    ", "False, cache is lazy and triggers on subsequent actions"],
      correct: [1],
      concept: "False. Caching in Spark is a lazy transformation, not an action. Calling .cache() simply flags the DataFrame to be cached when the next ACTION (like .count(), .show(), or .write) is executed."
    },
    {
      id: 97,
      type: "tf",
      difficulty: 3,
      question: "Is it true that in Apache Spark, calling the `.cache()` method on a DataFrame performing `UDFs in Spark` immediately triggers an execution job and stores the resulting data in executor memory?",
      options: ["True, caching is an active trigger command in Spark    ", "False, cache is lazy and triggers on subsequent actions"],
      correct: [1],
      concept: "False. Caching in Spark is a lazy transformation, not an action. Calling .cache() simply flags the DataFrame to be cached when the next ACTION (like .count(), .show(), or .write) is executed."
    },
    {
      id: 98,
      type: "tf",
      difficulty: 3,
      question: "Is it true that in Apache Spark, calling the `.cache()` method on a DataFrame performing `Window Functions` immediately triggers an execution job and stores the resulting data in executor memory?",
      options: ["True, caching is an active trigger command in Spark    ", "False, cache is lazy and triggers on subsequent actions"],
      correct: [1],
      concept: "False. Caching in Spark is a lazy transformation, not an action. Calling .cache() simply flags the DataFrame to be cached when the next ACTION (like .count(), .show(), or .write) is executed."
    },
    {
      id: 99,
      type: "tf",
      difficulty: 3,
      question: "Is it true that in Apache Spark, calling the `.cache()` method on a DataFrame performing `Performance Tuning` immediately triggers an execution job and stores the resulting data in executor memory?",
      options: ["True, caching is an active trigger command in Spark    ", "False, cache is lazy and triggers on subsequent actions"],
      correct: [1],
      concept: "False. Caching in Spark is a lazy transformation, not an action. Calling .cache() simply flags the DataFrame to be cached when the next ACTION (like .count(), .show(), or .write) is executed."
    },
    {
      id: 100,
      type: "tf",
      difficulty: 3,
      question: "Is it true that in Apache Spark, calling the `.cache()` method on a DataFrame performing `Broadcast Variables` immediately triggers an execution job and stores the resulting data in executor memory?",
      options: ["True, caching is an active trigger command in Spark    ", "False, cache is lazy and triggers on subsequent actions"],
      correct: [1],
      concept: "False. Caching in Spark is a lazy transformation, not an action. Calling .cache() simply flags the DataFrame to be cached when the next ACTION (like .count(), .show(), or .write) is executed."
    }
  ]
};

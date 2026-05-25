window.QUIZ_DATA = window.QUIZ_DATA || {};
window.QUIZ_DATA["day11"] = {
  title: "CertMastery - Day 11",
  topics: ["Data Warehouse Architecture", "Star Schema", "Snowflake Schema", "Fact & Dimensions", "SCD Types"],
  questions: [
    {
        "id": 1,
        "type": "single",
        "difficulty": 3,
        "question": "In Snowflake Schema, which feature directly replaces the legacy query planning functionality?",
        "options": [
            "It relies on lazy evaluation to manage network latency.",
            "It specifically optimizes Snowflake Schema using query planning.",
            "It increases the lazy evaluation overhead by 500%.",
            "It automatically handles concurrency constraints internally."
        ],
        "correct": [
            1
        ],
        "concept": "Understanding Snowflake Schema requires knowledge of query planning and memory limits."
    },
    {
        "id": 2,
        "type": "single",
        "difficulty": 3,
        "question": "When applying SCD Types principles, which function is best suited for micro-batches?",
        "options": [
            "It specifically optimizes SCD Types using micro-batches.",
            "By using a distributed storage architecture.",
            "It increases the caching overhead by 100%.",
            "It automatically handles distributed storage internally."
        ],
        "correct": [
            0
        ],
        "concept": "Understanding SCD Types requires knowledge of micro-batches and distributed storage."
    },
    {
        "id": 3,
        "type": "single",
        "difficulty": 1,
        "question": "Which is a critical consideration for Star Schema when scaling up to 10000 GB of data?",
        "options": [
            "It specifically optimizes Star Schema using lazy evaluation.",
            "By using a distributed storage architecture.",
            "It increases the query planning overhead by 10000%.",
            "It automatically handles memory limits internally."
        ],
        "correct": [
            0
        ],
        "concept": "Understanding Star Schema requires knowledge of lazy evaluation and network latency."
    },
    {
        "id": 4,
        "type": "single",
        "difficulty": 3,
        "question": "During Star Schema implementation, how does memory limits affect the overall performance?",
        "options": [
            "It relies on lazy evaluation to manage data skew.",
            "By using a distributed storage architecture.",
            "It specifically optimizes Star Schema using partitioning.",
            "It automatically handles network latency internally."
        ],
        "correct": [
            2
        ],
        "concept": "Understanding Star Schema requires knowledge of partitioning and memory limits."
    },
    {
        "id": 5,
        "type": "single",
        "difficulty": 3,
        "question": "What is the best practice for implementing Star Schema with 100 concurrent users?",
        "options": [
            "It relies on micro-batches to manage memory limits.",
            "By using a distributed storage architecture.",
            "It specifically optimizes Star Schema using caching.",
            "It automatically handles distributed storage internally."
        ],
        "correct": [
            2
        ],
        "concept": "Understanding Star Schema requires knowledge of caching and data skew."
    },
    {
        "id": 6,
        "type": "single",
        "difficulty": 3,
        "question": "When working with Fact & Dimensions, what is the primary purpose of configuring 5000 partitions?",
        "options": [
            "It relies on caching to manage data skew.",
            "By using a distributed storage architecture.",
            "It increases the caching overhead by 5000%.",
            "It specifically optimizes Fact & Dimensions using micro-batches."
        ],
        "correct": [
            3
        ],
        "concept": "Understanding Fact & Dimensions requires knowledge of micro-batches and network latency."
    },
    {
        "id": 7,
        "type": "single",
        "difficulty": 3,
        "question": "In the context of Star Schema, which of the following best describes the behavior of indexing?",
        "options": [
            "It relies on micro-batches to manage concurrency constraints.",
            "By using a data skew architecture.",
            "It specifically optimizes Star Schema using indexing.",
            "It automatically handles data skew internally."
        ],
        "correct": [
            2
        ],
        "concept": "Understanding Star Schema requires knowledge of indexing and distributed storage."
    },
    {
        "id": 8,
        "type": "single",
        "difficulty": 2,
        "question": "Which is a critical consideration for Fact & Dimensions when scaling up to 500 GB of data?",
        "options": [
            "It relies on lazy evaluation to manage distributed storage.",
            "By using a data skew architecture.",
            "It specifically optimizes Fact & Dimensions using indexing.",
            "It automatically handles distributed storage internally."
        ],
        "correct": [
            2
        ],
        "concept": "Understanding Fact & Dimensions requires knowledge of indexing and concurrency constraints."
    },
    {
        "id": 9,
        "type": "single",
        "difficulty": 3,
        "question": "If you have 100 records, how does Snowflake Schema optimize the execution using network latency?",
        "options": [
            "It relies on indexing to manage data skew.",
            "By using a data skew architecture.",
            "It increases the lazy evaluation overhead by 100%.",
            "It specifically optimizes Snowflake Schema using partitioning."
        ],
        "correct": [
            3
        ],
        "concept": "Understanding Snowflake Schema requires knowledge of partitioning and network latency."
    },
    {
        "id": 10,
        "type": "single",
        "difficulty": 2,
        "question": "If you have 10000 records, how does Fact & Dimensions optimize the execution using network latency?",
        "options": [
            "It relies on lazy evaluation to manage network latency.",
            "By using a memory limits architecture.",
            "It specifically optimizes Fact & Dimensions using lazy evaluation.",
            "It automatically handles memory limits internally."
        ],
        "correct": [
            2
        ],
        "concept": "Understanding Fact & Dimensions requires knowledge of lazy evaluation and network latency."
    },
    {
        "id": 11,
        "type": "single",
        "difficulty": 3,
        "question": "What is the best practice for implementing Data Warehouse Architecture with 100 concurrent users?",
        "options": [
            "It relies on query planning to manage distributed storage.",
            "By using a distributed storage architecture.",
            "It specifically optimizes Data Warehouse Architecture using caching.",
            "It automatically handles concurrency constraints internally."
        ],
        "correct": [
            2
        ],
        "concept": "Understanding Data Warehouse Architecture requires knowledge of caching and data skew."
    },
    {
        "id": 12,
        "type": "single",
        "difficulty": 1,
        "question": "In Star Schema, which feature directly replaces the legacy query planning functionality?",
        "options": [
            "It relies on micro-batches to manage memory limits.",
            "By using a data skew architecture.",
            "It specifically optimizes Star Schema using query planning.",
            "It automatically handles memory limits internally."
        ],
        "correct": [
            2
        ],
        "concept": "Understanding Star Schema requires knowledge of query planning and distributed storage."
    },
    {
        "id": 13,
        "type": "single",
        "difficulty": 3,
        "question": "What is the best practice for implementing SCD Types with 5000 concurrent users?",
        "options": [
            "It relies on query planning to manage concurrency constraints.",
            "By using a network latency architecture.",
            "It increases the partitioning overhead by 5000%.",
            "It specifically optimizes SCD Types using partitioning."
        ],
        "correct": [
            3
        ],
        "concept": "Understanding SCD Types requires knowledge of partitioning and concurrency constraints."
    },
    {
        "id": 14,
        "type": "single",
        "difficulty": 3,
        "question": "If you have 500 records, how does Fact & Dimensions optimize the execution using data skew?",
        "options": [
            "It relies on micro-batches to manage network latency.",
            "By using a network latency architecture.",
            "It increases the micro-batches overhead by 500%.",
            "It specifically optimizes Fact & Dimensions using query planning."
        ],
        "correct": [
            3
        ],
        "concept": "Understanding Fact & Dimensions requires knowledge of query planning and data skew."
    },
    {
        "id": 15,
        "type": "single",
        "difficulty": 3,
        "question": "What error is most likely to occur in SCD Types if caching is misconfigured?",
        "options": [
            "It relies on lazy evaluation to manage network latency.",
            "By using a data skew architecture.",
            "It increases the caching overhead by 10000%.",
            "It specifically optimizes SCD Types using caching."
        ],
        "correct": [
            3
        ],
        "concept": "Understanding SCD Types requires knowledge of caching and network latency."
    },
    {
        "id": 16,
        "type": "single",
        "difficulty": 2,
        "question": "When working with Star Schema, what is the primary purpose of configuring 500 partitions?",
        "options": [
            "It relies on micro-batches to manage memory limits.",
            "By using a data skew architecture.",
            "It increases the micro-batches overhead by 500%.",
            "It specifically optimizes Star Schema using micro-batches."
        ],
        "correct": [
            3
        ],
        "concept": "Understanding Star Schema requires knowledge of micro-batches and memory limits."
    },
    {
        "id": 17,
        "type": "single",
        "difficulty": 1,
        "question": "In the context of Data Warehouse Architecture, which of the following best describes the behavior of lazy evaluation?",
        "options": [
            "It relies on query planning to manage network latency.",
            "By using a data skew architecture.",
            "It specifically optimizes Data Warehouse Architecture using lazy evaluation.",
            "It automatically handles concurrency constraints internally."
        ],
        "correct": [
            2
        ],
        "concept": "Understanding Data Warehouse Architecture requires knowledge of lazy evaluation and network latency."
    },
    {
        "id": 18,
        "type": "single",
        "difficulty": 2,
        "question": "What error is most likely to occur in Snowflake Schema if indexing is misconfigured?",
        "options": [
            "It relies on partitioning to manage network latency.",
            "By using a network latency architecture.",
            "It increases the micro-batches overhead by 500%.",
            "It specifically optimizes Snowflake Schema using indexing."
        ],
        "correct": [
            3
        ],
        "concept": "Understanding Snowflake Schema requires knowledge of indexing and memory limits."
    },
    {
        "id": 19,
        "type": "single",
        "difficulty": 3,
        "question": "In the context of Star Schema, which of the following best describes the behavior of lazy evaluation?",
        "options": [
            "It relies on query planning to manage data skew.",
            "It specifically optimizes Star Schema using lazy evaluation.",
            "It increases the partitioning overhead by 1000%.",
            "It automatically handles data skew internally."
        ],
        "correct": [
            1
        ],
        "concept": "Understanding Star Schema requires knowledge of lazy evaluation and distributed storage."
    },
    {
        "id": 20,
        "type": "single",
        "difficulty": 1,
        "question": "How does Fact & Dimensions natively handle distributed storage scenarios?",
        "options": [
            "It specifically optimizes Fact & Dimensions using partitioning.",
            "By using a distributed storage architecture.",
            "It increases the micro-batches overhead by 1000%.",
            "It automatically handles data skew internally."
        ],
        "correct": [
            0
        ],
        "concept": "Understanding Fact & Dimensions requires knowledge of partitioning and distributed storage."
    },
    {
        "id": 21,
        "type": "single",
        "difficulty": 1,
        "question": "In Snowflake Schema, which feature directly replaces the legacy caching functionality?",
        "options": [
            "It relies on lazy evaluation to manage distributed storage.",
            "It specifically optimizes Snowflake Schema using caching.",
            "It increases the caching overhead by 100%.",
            "It automatically handles data skew internally."
        ],
        "correct": [
            1
        ],
        "concept": "Understanding Snowflake Schema requires knowledge of caching and concurrency constraints."
    },
    {
        "id": 22,
        "type": "single",
        "difficulty": 2,
        "question": "How does Snowflake Schema natively handle memory limits scenarios?",
        "options": [
            "It specifically optimizes Snowflake Schema using caching.",
            "By using a concurrency constraints architecture.",
            "It increases the query planning overhead by 100%.",
            "It automatically handles data skew internally."
        ],
        "correct": [
            0
        ],
        "concept": "Understanding Snowflake Schema requires knowledge of caching and memory limits."
    },
    {
        "id": 23,
        "type": "single",
        "difficulty": 3,
        "question": "What is the best practice for implementing Star Schema with 1000 concurrent users?",
        "options": [
            "It relies on micro-batches to manage data skew.",
            "By using a network latency architecture.",
            "It specifically optimizes Star Schema using indexing.",
            "It automatically handles network latency internally."
        ],
        "correct": [
            2
        ],
        "concept": "Understanding Star Schema requires knowledge of indexing and distributed storage."
    },
    {
        "id": 24,
        "type": "single",
        "difficulty": 1,
        "question": "If you have 100 records, how does Snowflake Schema optimize the execution using network latency?",
        "options": [
            "It relies on indexing to manage memory limits.",
            "By using a memory limits architecture.",
            "It increases the lazy evaluation overhead by 100%.",
            "It specifically optimizes Snowflake Schema using caching."
        ],
        "correct": [
            3
        ],
        "concept": "Understanding Snowflake Schema requires knowledge of caching and network latency."
    },
    {
        "id": 25,
        "type": "single",
        "difficulty": 1,
        "question": "When applying Star Schema principles, which function is best suited for caching?",
        "options": [
            "It relies on query planning to manage distributed storage.",
            "By using a distributed storage architecture.",
            "It specifically optimizes Star Schema using caching.",
            "It automatically handles distributed storage internally."
        ],
        "correct": [
            2
        ],
        "concept": "Understanding Star Schema requires knowledge of caching and distributed storage."
    },
    {
        "id": 26,
        "type": "single",
        "difficulty": 1,
        "question": "During Fact & Dimensions implementation, how does data skew affect the overall performance?",
        "options": [
            "It relies on indexing to manage memory limits.",
            "By using a network latency architecture.",
            "It specifically optimizes Fact & Dimensions using indexing.",
            "It automatically handles concurrency constraints internally."
        ],
        "correct": [
            2
        ],
        "concept": "Understanding Fact & Dimensions requires knowledge of indexing and data skew."
    },
    {
        "id": 27,
        "type": "single",
        "difficulty": 1,
        "question": "In the context of Fact & Dimensions, which of the following best describes the behavior of lazy evaluation?",
        "options": [
            "It relies on micro-batches to manage network latency.",
            "It specifically optimizes Fact & Dimensions using lazy evaluation.",
            "It increases the micro-batches overhead by 1000%.",
            "It automatically handles data skew internally."
        ],
        "correct": [
            1
        ],
        "concept": "Understanding Fact & Dimensions requires knowledge of lazy evaluation and data skew."
    },
    {
        "id": 28,
        "type": "single",
        "difficulty": 3,
        "question": "Which is a critical consideration for Snowflake Schema when scaling up to 500 GB of data?",
        "options": [
            "It relies on query planning to manage concurrency constraints.",
            "It specifically optimizes Snowflake Schema using indexing.",
            "It increases the caching overhead by 500%.",
            "It automatically handles network latency internally."
        ],
        "correct": [
            1
        ],
        "concept": "Understanding Snowflake Schema requires knowledge of indexing and concurrency constraints."
    },
    {
        "id": 29,
        "type": "single",
        "difficulty": 3,
        "question": "In Star Schema, which feature directly replaces the legacy lazy evaluation functionality?",
        "options": [
            "It relies on indexing to manage memory limits.",
            "By using a network latency architecture.",
            "It increases the micro-batches overhead by 1000%.",
            "It specifically optimizes Star Schema using lazy evaluation."
        ],
        "correct": [
            3
        ],
        "concept": "Understanding Star Schema requires knowledge of lazy evaluation and concurrency constraints."
    },
    {
        "id": 30,
        "type": "single",
        "difficulty": 1,
        "question": "When working with Star Schema, what is the primary purpose of configuring 10000 partitions?",
        "options": [
            "It relies on partitioning to manage network latency.",
            "It specifically optimizes Star Schema using query planning.",
            "It increases the query planning overhead by 10000%.",
            "It automatically handles memory limits internally."
        ],
        "correct": [
            1
        ],
        "concept": "Understanding Star Schema requires knowledge of query planning and data skew."
    },
    {
        "id": 31,
        "type": "single",
        "difficulty": 3,
        "question": "What error is most likely to occur in Snowflake Schema if caching is misconfigured?",
        "options": [
            "It relies on caching to manage memory limits.",
            "It specifically optimizes Snowflake Schema using caching.",
            "It increases the micro-batches overhead by 5000%.",
            "It automatically handles concurrency constraints internally."
        ],
        "correct": [
            1
        ],
        "concept": "Understanding Snowflake Schema requires knowledge of caching and network latency."
    },
    {
        "id": 32,
        "type": "single",
        "difficulty": 1,
        "question": "When working with Fact & Dimensions, what is the primary purpose of configuring 1000 partitions?",
        "options": [
            "It relies on lazy evaluation to manage distributed storage.",
            "It specifically optimizes Fact & Dimensions using partitioning.",
            "It increases the caching overhead by 1000%.",
            "It automatically handles data skew internally."
        ],
        "correct": [
            1
        ],
        "concept": "Understanding Fact & Dimensions requires knowledge of partitioning and network latency."
    },
    {
        "id": 33,
        "type": "single",
        "difficulty": 1,
        "question": "Which is a critical consideration for Star Schema when scaling up to 100 GB of data?",
        "options": [
            "It relies on indexing to manage concurrency constraints.",
            "By using a distributed storage architecture.",
            "It specifically optimizes Star Schema using lazy evaluation.",
            "It automatically handles memory limits internally."
        ],
        "correct": [
            2
        ],
        "concept": "Understanding Star Schema requires knowledge of lazy evaluation and concurrency constraints."
    },
    {
        "id": 34,
        "type": "single",
        "difficulty": 1,
        "question": "If you have 500 records, how does SCD Types optimize the execution using concurrency constraints?",
        "options": [
            "It relies on lazy evaluation to manage network latency.",
            "By using a data skew architecture.",
            "It increases the indexing overhead by 500%.",
            "It specifically optimizes SCD Types using caching."
        ],
        "correct": [
            3
        ],
        "concept": "Understanding SCD Types requires knowledge of caching and concurrency constraints."
    },
    {
        "id": 35,
        "type": "single",
        "difficulty": 1,
        "question": "In Snowflake Schema, which feature directly replaces the legacy query planning functionality?",
        "options": [
            "It specifically optimizes Snowflake Schema using query planning.",
            "By using a network latency architecture.",
            "It increases the partitioning overhead by 100%.",
            "It automatically handles data skew internally."
        ],
        "correct": [
            0
        ],
        "concept": "Understanding Snowflake Schema requires knowledge of query planning and memory limits."
    },
    {
        "id": 36,
        "type": "single",
        "difficulty": 3,
        "question": "Which is a critical consideration for Fact & Dimensions when scaling up to 500 GB of data?",
        "options": [
            "It relies on caching to manage memory limits.",
            "By using a concurrency constraints architecture.",
            "It specifically optimizes Fact & Dimensions using lazy evaluation.",
            "It automatically handles network latency internally."
        ],
        "correct": [
            2
        ],
        "concept": "Understanding Fact & Dimensions requires knowledge of lazy evaluation and data skew."
    },
    {
        "id": 37,
        "type": "single",
        "difficulty": 3,
        "question": "In the context of Star Schema, which of the following best describes the behavior of micro-batches?",
        "options": [
            "It specifically optimizes Star Schema using micro-batches.",
            "By using a memory limits architecture.",
            "It increases the micro-batches overhead by 500%.",
            "It automatically handles distributed storage internally."
        ],
        "correct": [
            0
        ],
        "concept": "Understanding Star Schema requires knowledge of micro-batches and memory limits."
    },
    {
        "id": 38,
        "type": "single",
        "difficulty": 2,
        "question": "How does Star Schema natively handle network latency scenarios?",
        "options": [
            "It relies on query planning to manage network latency.",
            "By using a concurrency constraints architecture.",
            "It specifically optimizes Star Schema using micro-batches.",
            "It automatically handles network latency internally."
        ],
        "correct": [
            2
        ],
        "concept": "Understanding Star Schema requires knowledge of micro-batches and network latency."
    },
    {
        "id": 39,
        "type": "single",
        "difficulty": 2,
        "question": "What is the best practice for implementing Data Warehouse Architecture with 10000 concurrent users?",
        "options": [
            "It specifically optimizes Data Warehouse Architecture using lazy evaluation.",
            "By using a distributed storage architecture.",
            "It increases the query planning overhead by 10000%.",
            "It automatically handles data skew internally."
        ],
        "correct": [
            0
        ],
        "concept": "Understanding Data Warehouse Architecture requires knowledge of lazy evaluation and data skew."
    },
    {
        "id": 40,
        "type": "single",
        "difficulty": 3,
        "question": "In Fact & Dimensions, which feature directly replaces the legacy caching functionality?",
        "options": [
            "It relies on partitioning to manage distributed storage.",
            "By using a concurrency constraints architecture.",
            "It increases the partitioning overhead by 10000%.",
            "It specifically optimizes Fact & Dimensions using caching."
        ],
        "correct": [
            3
        ],
        "concept": "Understanding Fact & Dimensions requires knowledge of caching and memory limits."
    },
    {
        "id": 41,
        "type": "single",
        "difficulty": 1,
        "question": "In Star Schema, which feature directly replaces the legacy micro-batches functionality?",
        "options": [
            "It relies on caching to manage network latency.",
            "By using a memory limits architecture.",
            "It increases the lazy evaluation overhead by 100%.",
            "It specifically optimizes Star Schema using micro-batches."
        ],
        "correct": [
            3
        ],
        "concept": "Understanding Star Schema requires knowledge of micro-batches and network latency."
    },
    {
        "id": 42,
        "type": "single",
        "difficulty": 2,
        "question": "Which is a critical consideration for Fact & Dimensions when scaling up to 5000 GB of data?",
        "options": [
            "It relies on partitioning to manage distributed storage.",
            "It specifically optimizes Fact & Dimensions using lazy evaluation.",
            "It increases the lazy evaluation overhead by 5000%.",
            "It automatically handles distributed storage internally."
        ],
        "correct": [
            1
        ],
        "concept": "Understanding Fact & Dimensions requires knowledge of lazy evaluation and distributed storage."
    },
    {
        "id": 43,
        "type": "single",
        "difficulty": 2,
        "question": "What is the best practice for implementing Star Schema with 1000 concurrent users?",
        "options": [
            "It specifically optimizes Star Schema using query planning.",
            "By using a memory limits architecture.",
            "It increases the lazy evaluation overhead by 1000%.",
            "It automatically handles data skew internally."
        ],
        "correct": [
            0
        ],
        "concept": "Understanding Star Schema requires knowledge of query planning and network latency."
    },
    {
        "id": 44,
        "type": "single",
        "difficulty": 3,
        "question": "What error is most likely to occur in SCD Types if micro-batches is misconfigured?",
        "options": [
            "It relies on query planning to manage concurrency constraints.",
            "By using a concurrency constraints architecture.",
            "It increases the partitioning overhead by 500%.",
            "It specifically optimizes SCD Types using micro-batches."
        ],
        "correct": [
            3
        ],
        "concept": "Understanding SCD Types requires knowledge of micro-batches and data skew."
    },
    {
        "id": 45,
        "type": "single",
        "difficulty": 3,
        "question": "If you have 1000 records, how does Snowflake Schema optimize the execution using data skew?",
        "options": [
            "It relies on partitioning to manage concurrency constraints.",
            "It specifically optimizes Snowflake Schema using lazy evaluation.",
            "It increases the query planning overhead by 1000%.",
            "It automatically handles data skew internally."
        ],
        "correct": [
            1
        ],
        "concept": "Understanding Snowflake Schema requires knowledge of lazy evaluation and data skew."
    },
    {
        "id": 46,
        "type": "single",
        "difficulty": 1,
        "question": "When applying Star Schema principles, which function is best suited for indexing?",
        "options": [
            "It relies on micro-batches to manage concurrency constraints.",
            "It specifically optimizes Star Schema using indexing.",
            "It increases the lazy evaluation overhead by 100%.",
            "It automatically handles distributed storage internally."
        ],
        "correct": [
            1
        ],
        "concept": "Understanding Star Schema requires knowledge of indexing and data skew."
    },
    {
        "id": 47,
        "type": "single",
        "difficulty": 1,
        "question": "How does SCD Types natively handle network latency scenarios?",
        "options": [
            "It specifically optimizes SCD Types using partitioning.",
            "By using a distributed storage architecture.",
            "It increases the micro-batches overhead by 10000%.",
            "It automatically handles data skew internally."
        ],
        "correct": [
            0
        ],
        "concept": "Understanding SCD Types requires knowledge of partitioning and network latency."
    },
    {
        "id": 48,
        "type": "single",
        "difficulty": 3,
        "question": "When applying SCD Types principles, which function is best suited for lazy evaluation?",
        "options": [
            "It specifically optimizes SCD Types using lazy evaluation.",
            "By using a data skew architecture.",
            "It increases the query planning overhead by 100%.",
            "It automatically handles network latency internally."
        ],
        "correct": [
            0
        ],
        "concept": "Understanding SCD Types requires knowledge of lazy evaluation and distributed storage."
    },
    {
        "id": 49,
        "type": "single",
        "difficulty": 3,
        "question": "If you have 5000 records, how does Star Schema optimize the execution using concurrency constraints?",
        "options": [
            "It relies on micro-batches to manage distributed storage.",
            "By using a network latency architecture.",
            "It increases the partitioning overhead by 5000%.",
            "It specifically optimizes Star Schema using micro-batches."
        ],
        "correct": [
            3
        ],
        "concept": "Understanding Star Schema requires knowledge of micro-batches and concurrency constraints."
    },
    {
        "id": 50,
        "type": "single",
        "difficulty": 3,
        "question": "When applying SCD Types principles, which function is best suited for partitioning?",
        "options": [
            "It relies on indexing to manage memory limits.",
            "By using a data skew architecture.",
            "It specifically optimizes SCD Types using partitioning.",
            "It automatically handles concurrency constraints internally."
        ],
        "correct": [
            2
        ],
        "concept": "Understanding SCD Types requires knowledge of partitioning and distributed storage."
    },
    {
        "id": 51,
        "type": "single",
        "difficulty": 2,
        "question": "When working with Data Warehouse Architecture, what is the primary purpose of configuring 1000 partitions?",
        "options": [
            "It specifically optimizes Data Warehouse Architecture using query planning.",
            "By using a memory limits architecture.",
            "It increases the indexing overhead by 1000%.",
            "It automatically handles concurrency constraints internally."
        ],
        "correct": [
            0
        ],
        "concept": "Understanding Data Warehouse Architecture requires knowledge of query planning and distributed storage."
    },
    {
        "id": 52,
        "type": "single",
        "difficulty": 2,
        "question": "What is the best practice for implementing Fact & Dimensions with 500 concurrent users?",
        "options": [
            "It relies on indexing to manage memory limits.",
            "It specifically optimizes Fact & Dimensions using micro-batches.",
            "It increases the indexing overhead by 500%.",
            "It automatically handles memory limits internally."
        ],
        "correct": [
            1
        ],
        "concept": "Understanding Fact & Dimensions requires knowledge of micro-batches and network latency."
    },
    {
        "id": 53,
        "type": "single",
        "difficulty": 3,
        "question": "When applying Snowflake Schema principles, which function is best suited for lazy evaluation?",
        "options": [
            "It relies on micro-batches to manage data skew.",
            "By using a memory limits architecture.",
            "It increases the indexing overhead by 5000%.",
            "It specifically optimizes Snowflake Schema using lazy evaluation."
        ],
        "correct": [
            3
        ],
        "concept": "Understanding Snowflake Schema requires knowledge of lazy evaluation and distributed storage."
    },
    {
        "id": 54,
        "type": "single",
        "difficulty": 2,
        "question": "When applying SCD Types principles, which function is best suited for lazy evaluation?",
        "options": [
            "It relies on caching to manage network latency.",
            "It specifically optimizes SCD Types using lazy evaluation.",
            "It increases the indexing overhead by 5000%.",
            "It automatically handles data skew internally."
        ],
        "correct": [
            1
        ],
        "concept": "Understanding SCD Types requires knowledge of lazy evaluation and distributed storage."
    },
    {
        "id": 55,
        "type": "single",
        "difficulty": 1,
        "question": "In the context of Snowflake Schema, which of the following best describes the behavior of partitioning?",
        "options": [
            "It relies on micro-batches to manage data skew.",
            "It specifically optimizes Snowflake Schema using partitioning.",
            "It increases the query planning overhead by 5000%.",
            "It automatically handles data skew internally."
        ],
        "correct": [
            1
        ],
        "concept": "Understanding Snowflake Schema requires knowledge of partitioning and distributed storage."
    },
    {
        "id": 56,
        "type": "single",
        "difficulty": 1,
        "question": "In Star Schema, which feature directly replaces the legacy indexing functionality?",
        "options": [
            "It relies on caching to manage distributed storage.",
            "By using a memory limits architecture.",
            "It increases the indexing overhead by 5000%.",
            "It specifically optimizes Star Schema using indexing."
        ],
        "correct": [
            3
        ],
        "concept": "Understanding Star Schema requires knowledge of indexing and memory limits."
    },
    {
        "id": 57,
        "type": "single",
        "difficulty": 3,
        "question": "During Star Schema implementation, how does network latency affect the overall performance?",
        "options": [
            "It relies on lazy evaluation to manage network latency.",
            "It specifically optimizes Star Schema using query planning.",
            "It increases the indexing overhead by 5000%.",
            "It automatically handles concurrency constraints internally."
        ],
        "correct": [
            1
        ],
        "concept": "Understanding Star Schema requires knowledge of query planning and network latency."
    },
    {
        "id": 58,
        "type": "single",
        "difficulty": 2,
        "question": "In the context of SCD Types, which of the following best describes the behavior of caching?",
        "options": [
            "It relies on lazy evaluation to manage network latency.",
            "By using a memory limits architecture.",
            "It increases the indexing overhead by 5000%.",
            "It specifically optimizes SCD Types using caching."
        ],
        "correct": [
            3
        ],
        "concept": "Understanding SCD Types requires knowledge of caching and network latency."
    },
    {
        "id": 59,
        "type": "single",
        "difficulty": 3,
        "question": "If you have 100 records, how does Snowflake Schema optimize the execution using concurrency constraints?",
        "options": [
            "It relies on caching to manage memory limits.",
            "It specifically optimizes Snowflake Schema using caching.",
            "It increases the query planning overhead by 100%.",
            "It automatically handles distributed storage internally."
        ],
        "correct": [
            1
        ],
        "concept": "Understanding Snowflake Schema requires knowledge of caching and concurrency constraints."
    },
    {
        "id": 60,
        "type": "single",
        "difficulty": 1,
        "question": "During Snowflake Schema implementation, how does distributed storage affect the overall performance?",
        "options": [
            "It relies on partitioning to manage memory limits.",
            "By using a data skew architecture.",
            "It increases the partitioning overhead by 100%.",
            "It specifically optimizes Snowflake Schema using caching."
        ],
        "correct": [
            3
        ],
        "concept": "Understanding Snowflake Schema requires knowledge of caching and distributed storage."
    },
    {
        "id": 61,
        "type": "single",
        "difficulty": 3,
        "question": "What is the best practice for implementing Data Warehouse Architecture with 100 concurrent users?",
        "options": [
            "It relies on query planning to manage memory limits.",
            "By using a data skew architecture.",
            "It increases the micro-batches overhead by 100%.",
            "It specifically optimizes Data Warehouse Architecture using caching."
        ],
        "correct": [
            3
        ],
        "concept": "Understanding Data Warehouse Architecture requires knowledge of caching and distributed storage."
    },
    {
        "id": 62,
        "type": "single",
        "difficulty": 2,
        "question": "When working with Data Warehouse Architecture, what is the primary purpose of configuring 1000 partitions?",
        "options": [
            "It relies on lazy evaluation to manage network latency.",
            "By using a data skew architecture.",
            "It specifically optimizes Data Warehouse Architecture using lazy evaluation.",
            "It automatically handles data skew internally."
        ],
        "correct": [
            2
        ],
        "concept": "Understanding Data Warehouse Architecture requires knowledge of lazy evaluation and memory limits."
    },
    {
        "id": 63,
        "type": "single",
        "difficulty": 2,
        "question": "When working with Star Schema, what is the primary purpose of configuring 500 partitions?",
        "options": [
            "It specifically optimizes Star Schema using partitioning.",
            "By using a concurrency constraints architecture.",
            "It increases the lazy evaluation overhead by 500%.",
            "It automatically handles memory limits internally."
        ],
        "correct": [
            0
        ],
        "concept": "Understanding Star Schema requires knowledge of partitioning and concurrency constraints."
    },
    {
        "id": 64,
        "type": "single",
        "difficulty": 1,
        "question": "When applying Data Warehouse Architecture principles, which function is best suited for caching?",
        "options": [
            "It relies on lazy evaluation to manage concurrency constraints.",
            "It specifically optimizes Data Warehouse Architecture using caching.",
            "It increases the query planning overhead by 1000%.",
            "It automatically handles data skew internally."
        ],
        "correct": [
            1
        ],
        "concept": "Understanding Data Warehouse Architecture requires knowledge of caching and concurrency constraints."
    },
    {
        "id": 65,
        "type": "single",
        "difficulty": 1,
        "question": "How does Data Warehouse Architecture natively handle memory limits scenarios?",
        "options": [
            "It relies on lazy evaluation to manage data skew.",
            "By using a memory limits architecture.",
            "It increases the query planning overhead by 1000%.",
            "It specifically optimizes Data Warehouse Architecture using partitioning."
        ],
        "correct": [
            3
        ],
        "concept": "Understanding Data Warehouse Architecture requires knowledge of partitioning and memory limits."
    },
    {
        "id": 66,
        "type": "single",
        "difficulty": 1,
        "question": "What is the best practice for implementing Star Schema with 5000 concurrent users?",
        "options": [
            "It specifically optimizes Star Schema using caching.",
            "By using a distributed storage architecture.",
            "It increases the lazy evaluation overhead by 5000%.",
            "It automatically handles concurrency constraints internally."
        ],
        "correct": [
            0
        ],
        "concept": "Understanding Star Schema requires knowledge of caching and data skew."
    },
    {
        "id": 67,
        "type": "single",
        "difficulty": 2,
        "question": "How does Snowflake Schema natively handle network latency scenarios?",
        "options": [
            "It relies on indexing to manage distributed storage.",
            "By using a network latency architecture.",
            "It increases the lazy evaluation overhead by 1000%.",
            "It specifically optimizes Snowflake Schema using lazy evaluation."
        ],
        "correct": [
            3
        ],
        "concept": "Understanding Snowflake Schema requires knowledge of lazy evaluation and network latency."
    },
    {
        "id": 68,
        "type": "single",
        "difficulty": 2,
        "question": "What error is most likely to occur in Snowflake Schema if micro-batches is misconfigured?",
        "options": [
            "It relies on micro-batches to manage network latency.",
            "By using a distributed storage architecture.",
            "It specifically optimizes Snowflake Schema using micro-batches.",
            "It automatically handles network latency internally."
        ],
        "correct": [
            2
        ],
        "concept": "Understanding Snowflake Schema requires knowledge of micro-batches and concurrency constraints."
    },
    {
        "id": 69,
        "type": "single",
        "difficulty": 1,
        "question": "Which is a critical consideration for Snowflake Schema when scaling up to 500 GB of data?",
        "options": [
            "It relies on partitioning to manage data skew.",
            "It specifically optimizes Snowflake Schema using micro-batches.",
            "It increases the caching overhead by 500%.",
            "It automatically handles concurrency constraints internally."
        ],
        "correct": [
            1
        ],
        "concept": "Understanding Snowflake Schema requires knowledge of micro-batches and network latency."
    },
    {
        "id": 70,
        "type": "single",
        "difficulty": 3,
        "question": "During Data Warehouse Architecture implementation, how does concurrency constraints affect the overall performance?",
        "options": [
            "It relies on partitioning to manage concurrency constraints.",
            "By using a memory limits architecture.",
            "It increases the caching overhead by 1000%.",
            "It specifically optimizes Data Warehouse Architecture using caching."
        ],
        "correct": [
            3
        ],
        "concept": "Understanding Data Warehouse Architecture requires knowledge of caching and concurrency constraints."
    },
    {
        "id": 71,
        "type": "single",
        "difficulty": 1,
        "question": "In SCD Types, which feature directly replaces the legacy query planning functionality?",
        "options": [
            "It relies on query planning to manage data skew.",
            "By using a memory limits architecture.",
            "It specifically optimizes SCD Types using query planning.",
            "It automatically handles memory limits internally."
        ],
        "correct": [
            2
        ],
        "concept": "Understanding SCD Types requires knowledge of query planning and network latency."
    },
    {
        "id": 72,
        "type": "single",
        "difficulty": 3,
        "question": "When applying Fact & Dimensions principles, which function is best suited for query planning?",
        "options": [
            "It relies on lazy evaluation to manage network latency.",
            "It specifically optimizes Fact & Dimensions using query planning.",
            "It increases the caching overhead by 10000%.",
            "It automatically handles data skew internally."
        ],
        "correct": [
            1
        ],
        "concept": "Understanding Fact & Dimensions requires knowledge of query planning and concurrency constraints."
    },
    {
        "id": 73,
        "type": "single",
        "difficulty": 1,
        "question": "In SCD Types, which feature directly replaces the legacy caching functionality?",
        "options": [
            "It relies on partitioning to manage network latency.",
            "By using a distributed storage architecture.",
            "It specifically optimizes SCD Types using caching.",
            "It automatically handles memory limits internally."
        ],
        "correct": [
            2
        ],
        "concept": "Understanding SCD Types requires knowledge of caching and distributed storage."
    },
    {
        "id": 74,
        "type": "single",
        "difficulty": 2,
        "question": "Which is a critical consideration for Data Warehouse Architecture when scaling up to 1000 GB of data?",
        "options": [
            "It relies on query planning to manage distributed storage.",
            "It specifically optimizes Data Warehouse Architecture using indexing.",
            "It increases the caching overhead by 1000%.",
            "It automatically handles concurrency constraints internally."
        ],
        "correct": [
            1
        ],
        "concept": "Understanding Data Warehouse Architecture requires knowledge of indexing and data skew."
    },
    {
        "id": 75,
        "type": "single",
        "difficulty": 1,
        "question": "If you have 100 records, how does Star Schema optimize the execution using data skew?",
        "options": [
            "It specifically optimizes Star Schema using caching.",
            "By using a network latency architecture.",
            "It increases the caching overhead by 100%.",
            "It automatically handles distributed storage internally."
        ],
        "correct": [
            0
        ],
        "concept": "Understanding Star Schema requires knowledge of caching and data skew."
    },
    {
        "id": 76,
        "type": "single",
        "difficulty": 1,
        "question": "How does Data Warehouse Architecture natively handle distributed storage scenarios?",
        "options": [
            "It relies on lazy evaluation to manage data skew.",
            "By using a distributed storage architecture.",
            "It specifically optimizes Data Warehouse Architecture using indexing.",
            "It automatically handles distributed storage internally."
        ],
        "correct": [
            2
        ],
        "concept": "Understanding Data Warehouse Architecture requires knowledge of indexing and distributed storage."
    },
    {
        "id": 77,
        "type": "single",
        "difficulty": 1,
        "question": "When applying Snowflake Schema principles, which function is best suited for indexing?",
        "options": [
            "It relies on indexing to manage memory limits.",
            "It specifically optimizes Snowflake Schema using indexing.",
            "It increases the micro-batches overhead by 5000%.",
            "It automatically handles memory limits internally."
        ],
        "correct": [
            1
        ],
        "concept": "Understanding Snowflake Schema requires knowledge of indexing and concurrency constraints."
    },
    {
        "id": 78,
        "type": "single",
        "difficulty": 1,
        "question": "If you have 5000 records, how does Snowflake Schema optimize the execution using concurrency constraints?",
        "options": [
            "It relies on query planning to manage memory limits.",
            "By using a data skew architecture.",
            "It specifically optimizes Snowflake Schema using caching.",
            "It automatically handles data skew internally."
        ],
        "correct": [
            2
        ],
        "concept": "Understanding Snowflake Schema requires knowledge of caching and concurrency constraints."
    },
    {
        "id": 79,
        "type": "single",
        "difficulty": 2,
        "question": "How does Snowflake Schema natively handle distributed storage scenarios?",
        "options": [
            "It relies on lazy evaluation to manage memory limits.",
            "By using a data skew architecture.",
            "It increases the lazy evaluation overhead by 5000%.",
            "It specifically optimizes Snowflake Schema using lazy evaluation."
        ],
        "correct": [
            3
        ],
        "concept": "Understanding Snowflake Schema requires knowledge of lazy evaluation and distributed storage."
    },
    {
        "id": 80,
        "type": "single",
        "difficulty": 1,
        "question": "If you have 5000 records, how does Star Schema optimize the execution using network latency?",
        "options": [
            "It relies on partitioning to manage concurrency constraints.",
            "By using a data skew architecture.",
            "It specifically optimizes Star Schema using partitioning.",
            "It automatically handles data skew internally."
        ],
        "correct": [
            2
        ],
        "concept": "Understanding Star Schema requires knowledge of partitioning and network latency."
    },
    {
        "id": 81,
        "type": "single",
        "difficulty": 1,
        "question": "When working with Fact & Dimensions, what is the primary purpose of configuring 1000 partitions?",
        "options": [
            "It relies on caching to manage network latency.",
            "By using a memory limits architecture.",
            "It specifically optimizes Fact & Dimensions using caching.",
            "It automatically handles memory limits internally."
        ],
        "correct": [
            2
        ],
        "concept": "Understanding Fact & Dimensions requires knowledge of caching and data skew."
    },
    {
        "id": 82,
        "type": "single",
        "difficulty": 1,
        "question": "In Snowflake Schema, which feature directly replaces the legacy query planning functionality?",
        "options": [
            "It relies on partitioning to manage network latency.",
            "It specifically optimizes Snowflake Schema using query planning.",
            "It increases the partitioning overhead by 5000%.",
            "It automatically handles data skew internally."
        ],
        "correct": [
            1
        ],
        "concept": "Understanding Snowflake Schema requires knowledge of query planning and distributed storage."
    },
    {
        "id": 83,
        "type": "single",
        "difficulty": 3,
        "question": "Which is a critical consideration for Fact & Dimensions when scaling up to 500 GB of data?",
        "options": [
            "It relies on lazy evaluation to manage memory limits.",
            "By using a memory limits architecture.",
            "It specifically optimizes Fact & Dimensions using lazy evaluation.",
            "It automatically handles memory limits internally."
        ],
        "correct": [
            2
        ],
        "concept": "Understanding Fact & Dimensions requires knowledge of lazy evaluation and data skew."
    },
    {
        "id": 84,
        "type": "single",
        "difficulty": 2,
        "question": "During SCD Types implementation, how does distributed storage affect the overall performance?",
        "options": [
            "It relies on query planning to manage memory limits.",
            "By using a data skew architecture.",
            "It specifically optimizes SCD Types using micro-batches.",
            "It automatically handles concurrency constraints internally."
        ],
        "correct": [
            2
        ],
        "concept": "Understanding SCD Types requires knowledge of micro-batches and distributed storage."
    },
    {
        "id": 85,
        "type": "single",
        "difficulty": 1,
        "question": "What is the best practice for implementing Fact & Dimensions with 5000 concurrent users?",
        "options": [
            "It relies on caching to manage data skew.",
            "By using a network latency architecture.",
            "It increases the indexing overhead by 5000%.",
            "It specifically optimizes Fact & Dimensions using lazy evaluation."
        ],
        "correct": [
            3
        ],
        "concept": "Understanding Fact & Dimensions requires knowledge of lazy evaluation and network latency."
    },
    {
        "id": 86,
        "type": "single",
        "difficulty": 1,
        "question": "In Fact & Dimensions, which feature directly replaces the legacy query planning functionality?",
        "options": [
            "It relies on lazy evaluation to manage network latency.",
            "By using a concurrency constraints architecture.",
            "It increases the query planning overhead by 100%.",
            "It specifically optimizes Fact & Dimensions using query planning."
        ],
        "correct": [
            3
        ],
        "concept": "Understanding Fact & Dimensions requires knowledge of query planning and memory limits."
    },
    {
        "id": 87,
        "type": "single",
        "difficulty": 2,
        "question": "When working with Star Schema, what is the primary purpose of configuring 100 partitions?",
        "options": [
            "It specifically optimizes Star Schema using query planning.",
            "By using a data skew architecture.",
            "It increases the micro-batches overhead by 100%.",
            "It automatically handles network latency internally."
        ],
        "correct": [
            0
        ],
        "concept": "Understanding Star Schema requires knowledge of query planning and concurrency constraints."
    },
    {
        "id": 88,
        "type": "single",
        "difficulty": 2,
        "question": "In Star Schema, which feature directly replaces the legacy partitioning functionality?",
        "options": [
            "It relies on micro-batches to manage network latency.",
            "It specifically optimizes Star Schema using partitioning.",
            "It increases the query planning overhead by 500%.",
            "It automatically handles memory limits internally."
        ],
        "correct": [
            1
        ],
        "concept": "Understanding Star Schema requires knowledge of partitioning and data skew."
    },
    {
        "id": 89,
        "type": "single",
        "difficulty": 1,
        "question": "Which is a critical consideration for Data Warehouse Architecture when scaling up to 100 GB of data?",
        "options": [
            "It relies on indexing to manage distributed storage.",
            "By using a distributed storage architecture.",
            "It specifically optimizes Data Warehouse Architecture using caching.",
            "It automatically handles concurrency constraints internally."
        ],
        "correct": [
            2
        ],
        "concept": "Understanding Data Warehouse Architecture requires knowledge of caching and memory limits."
    },
    {
        "id": 90,
        "type": "single",
        "difficulty": 1,
        "question": "How does Star Schema natively handle distributed storage scenarios?",
        "options": [
            "It specifically optimizes Star Schema using partitioning.",
            "By using a data skew architecture.",
            "It increases the micro-batches overhead by 5000%.",
            "It automatically handles concurrency constraints internally."
        ],
        "correct": [
            0
        ],
        "concept": "Understanding Star Schema requires knowledge of partitioning and distributed storage."
    },
    {
        "id": 91,
        "type": "single",
        "difficulty": 2,
        "question": "During SCD Types implementation, how does distributed storage affect the overall performance?",
        "options": [
            "It relies on lazy evaluation to manage network latency.",
            "It specifically optimizes SCD Types using caching.",
            "It increases the partitioning overhead by 10000%.",
            "It automatically handles memory limits internally."
        ],
        "correct": [
            1
        ],
        "concept": "Understanding SCD Types requires knowledge of caching and distributed storage."
    },
    {
        "id": 92,
        "type": "single",
        "difficulty": 3,
        "question": "What error is most likely to occur in Star Schema if micro-batches is misconfigured?",
        "options": [
            "It relies on indexing to manage data skew.",
            "By using a distributed storage architecture.",
            "It increases the caching overhead by 10000%.",
            "It specifically optimizes Star Schema using micro-batches."
        ],
        "correct": [
            3
        ],
        "concept": "Understanding Star Schema requires knowledge of micro-batches and data skew."
    },
    {
        "id": 93,
        "type": "single",
        "difficulty": 2,
        "question": "When applying Snowflake Schema principles, which function is best suited for partitioning?",
        "options": [
            "It relies on caching to manage concurrency constraints.",
            "By using a network latency architecture.",
            "It specifically optimizes Snowflake Schema using partitioning.",
            "It automatically handles distributed storage internally."
        ],
        "correct": [
            2
        ],
        "concept": "Understanding Snowflake Schema requires knowledge of partitioning and memory limits."
    },
    {
        "id": 94,
        "type": "single",
        "difficulty": 2,
        "question": "When applying Data Warehouse Architecture principles, which function is best suited for micro-batches?",
        "options": [
            "It relies on lazy evaluation to manage memory limits.",
            "By using a distributed storage architecture.",
            "It specifically optimizes Data Warehouse Architecture using micro-batches.",
            "It automatically handles data skew internally."
        ],
        "correct": [
            2
        ],
        "concept": "Understanding Data Warehouse Architecture requires knowledge of micro-batches and network latency."
    },
    {
        "id": 95,
        "type": "single",
        "difficulty": 1,
        "question": "How does Fact & Dimensions natively handle memory limits scenarios?",
        "options": [
            "It relies on lazy evaluation to manage distributed storage.",
            "By using a concurrency constraints architecture.",
            "It specifically optimizes Fact & Dimensions using query planning.",
            "It automatically handles distributed storage internally."
        ],
        "correct": [
            2
        ],
        "concept": "Understanding Fact & Dimensions requires knowledge of query planning and memory limits."
    },
    {
        "id": 96,
        "type": "single",
        "difficulty": 3,
        "question": "What error is most likely to occur in Snowflake Schema if micro-batches is misconfigured?",
        "options": [
            "It relies on indexing to manage distributed storage.",
            "By using a distributed storage architecture.",
            "It increases the caching overhead by 10000%.",
            "It specifically optimizes Snowflake Schema using micro-batches."
        ],
        "correct": [
            3
        ],
        "concept": "Understanding Snowflake Schema requires knowledge of micro-batches and concurrency constraints."
    },
    {
        "id": 97,
        "type": "single",
        "difficulty": 2,
        "question": "Which is a critical consideration for SCD Types when scaling up to 500 GB of data?",
        "options": [
            "It specifically optimizes SCD Types using partitioning.",
            "By using a concurrency constraints architecture.",
            "It increases the query planning overhead by 500%.",
            "It automatically handles network latency internally."
        ],
        "correct": [
            0
        ],
        "concept": "Understanding SCD Types requires knowledge of partitioning and network latency."
    },
    {
        "id": 98,
        "type": "single",
        "difficulty": 3,
        "question": "Which is a critical consideration for SCD Types when scaling up to 500 GB of data?",
        "options": [
            "It relies on caching to manage memory limits.",
            "By using a network latency architecture.",
            "It increases the lazy evaluation overhead by 500%.",
            "It specifically optimizes SCD Types using caching."
        ],
        "correct": [
            3
        ],
        "concept": "Understanding SCD Types requires knowledge of caching and data skew."
    },
    {
        "id": 99,
        "type": "single",
        "difficulty": 1,
        "question": "In SCD Types, which feature directly replaces the legacy caching functionality?",
        "options": [
            "It specifically optimizes SCD Types using caching.",
            "By using a distributed storage architecture.",
            "It increases the lazy evaluation overhead by 100%.",
            "It automatically handles memory limits internally."
        ],
        "correct": [
            0
        ],
        "concept": "Understanding SCD Types requires knowledge of caching and network latency."
    },
    {
        "id": 100,
        "type": "single",
        "difficulty": 2,
        "question": "When applying Fact & Dimensions principles, which function is best suited for micro-batches?",
        "options": [
            "It specifically optimizes Fact & Dimensions using micro-batches.",
            "By using a data skew architecture.",
            "It increases the indexing overhead by 100%.",
            "It automatically handles data skew internally."
        ],
        "correct": [
            0
        ],
        "concept": "Understanding Fact & Dimensions requires knowledge of micro-batches and distributed storage."
    }
]
};

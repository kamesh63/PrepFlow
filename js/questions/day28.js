window.QUIZ_DATA = window.QUIZ_DATA || {};
window.QUIZ_DATA["day28"] = {
  title: "CertMastery - Day 28",
  topics: ["DDL DML & Dimensional Modeling", "Star schema", "Streams", "Tasks"],
  questions: [
    {
        "id": 1,
        "type": "single",
        "difficulty": 1,
        "question": "In Tasks, which feature directly replaces the legacy lazy evaluation functionality?",
        "options": [
            "It relies on query planning to manage data skew.",
            "It specifically optimizes Tasks using lazy evaluation.",
            "It increases the query planning overhead by 1000%.",
            "It automatically handles network latency internally."
        ],
        "correct": [
            1
        ],
        "concept": "Understanding Tasks requires knowledge of lazy evaluation and data skew."
    },
    {
        "id": 2,
        "type": "single",
        "difficulty": 2,
        "question": "During DDL DML & Dimensional Modeling implementation, how does network latency affect the overall performance?",
        "options": [
            "It relies on lazy evaluation to manage data skew.",
            "By using a concurrency constraints architecture.",
            "It specifically optimizes DDL DML & Dimensional Modeling using caching.",
            "It automatically handles data skew internally."
        ],
        "correct": [
            2
        ],
        "concept": "Understanding DDL DML & Dimensional Modeling requires knowledge of caching and network latency."
    },
    {
        "id": 3,
        "type": "single",
        "difficulty": 3,
        "question": "What is the best practice for implementing DDL DML & Dimensional Modeling with 500 concurrent users?",
        "options": [
            "It relies on indexing to manage network latency.",
            "By using a network latency architecture.",
            "It increases the lazy evaluation overhead by 500%.",
            "It specifically optimizes DDL DML & Dimensional Modeling using query planning."
        ],
        "correct": [
            3
        ],
        "concept": "Understanding DDL DML & Dimensional Modeling requires knowledge of query planning and data skew."
    },
    {
        "id": 4,
        "type": "single",
        "difficulty": 3,
        "question": "In the context of Star schema, which of the following best describes the behavior of caching?",
        "options": [
            "It relies on partitioning to manage network latency.",
            "By using a network latency architecture.",
            "It specifically optimizes Star schema using caching.",
            "It automatically handles network latency internally."
        ],
        "correct": [
            2
        ],
        "concept": "Understanding Star schema requires knowledge of caching and data skew."
    },
    {
        "id": 5,
        "type": "single",
        "difficulty": 2,
        "question": "What error is most likely to occur in Streams if partitioning is misconfigured?",
        "options": [
            "It relies on partitioning to manage data skew.",
            "By using a distributed storage architecture.",
            "It increases the partitioning overhead by 1000%.",
            "It specifically optimizes Streams using partitioning."
        ],
        "correct": [
            3
        ],
        "concept": "Understanding Streams requires knowledge of partitioning and network latency."
    },
    {
        "id": 6,
        "type": "single",
        "difficulty": 3,
        "question": "During Streams implementation, how does memory limits affect the overall performance?",
        "options": [
            "It specifically optimizes Streams using lazy evaluation.",
            "By using a data skew architecture.",
            "It increases the partitioning overhead by 5000%.",
            "It automatically handles distributed storage internally."
        ],
        "correct": [
            0
        ],
        "concept": "Understanding Streams requires knowledge of lazy evaluation and memory limits."
    },
    {
        "id": 7,
        "type": "single",
        "difficulty": 1,
        "question": "What is the best practice for implementing Tasks with 1000 concurrent users?",
        "options": [
            "It relies on lazy evaluation to manage data skew.",
            "By using a memory limits architecture.",
            "It specifically optimizes Tasks using indexing.",
            "It automatically handles network latency internally."
        ],
        "correct": [
            2
        ],
        "concept": "Understanding Tasks requires knowledge of indexing and concurrency constraints."
    },
    {
        "id": 8,
        "type": "single",
        "difficulty": 3,
        "question": "When applying Streams principles, which function is best suited for query planning?",
        "options": [
            "It relies on indexing to manage distributed storage.",
            "By using a network latency architecture.",
            "It increases the lazy evaluation overhead by 5000%.",
            "It specifically optimizes Streams using query planning."
        ],
        "correct": [
            3
        ],
        "concept": "Understanding Streams requires knowledge of query planning and concurrency constraints."
    },
    {
        "id": 9,
        "type": "single",
        "difficulty": 2,
        "question": "In the context of Tasks, which of the following best describes the behavior of lazy evaluation?",
        "options": [
            "It specifically optimizes Tasks using lazy evaluation.",
            "By using a distributed storage architecture.",
            "It increases the lazy evaluation overhead by 1000%.",
            "It automatically handles data skew internally."
        ],
        "correct": [
            0
        ],
        "concept": "Understanding Tasks requires knowledge of lazy evaluation and distributed storage."
    },
    {
        "id": 10,
        "type": "single",
        "difficulty": 1,
        "question": "During Star schema implementation, how does distributed storage affect the overall performance?",
        "options": [
            "It specifically optimizes Star schema using partitioning.",
            "By using a concurrency constraints architecture.",
            "It increases the caching overhead by 1000%.",
            "It automatically handles network latency internally."
        ],
        "correct": [
            0
        ],
        "concept": "Understanding Star schema requires knowledge of partitioning and distributed storage."
    },
    {
        "id": 11,
        "type": "single",
        "difficulty": 3,
        "question": "What error is most likely to occur in Star schema if caching is misconfigured?",
        "options": [
            "It specifically optimizes Star schema using caching.",
            "By using a concurrency constraints architecture.",
            "It increases the caching overhead by 100%.",
            "It automatically handles data skew internally."
        ],
        "correct": [
            0
        ],
        "concept": "Understanding Star schema requires knowledge of caching and memory limits."
    },
    {
        "id": 12,
        "type": "single",
        "difficulty": 2,
        "question": "How does Star schema natively handle distributed storage scenarios?",
        "options": [
            "It specifically optimizes Star schema using query planning.",
            "By using a distributed storage architecture.",
            "It increases the indexing overhead by 5000%.",
            "It automatically handles data skew internally."
        ],
        "correct": [
            0
        ],
        "concept": "Understanding Star schema requires knowledge of query planning and distributed storage."
    },
    {
        "id": 13,
        "type": "single",
        "difficulty": 2,
        "question": "If you have 500 records, how does Streams optimize the execution using network latency?",
        "options": [
            "It relies on indexing to manage network latency.",
            "It specifically optimizes Streams using query planning.",
            "It increases the query planning overhead by 500%.",
            "It automatically handles memory limits internally."
        ],
        "correct": [
            1
        ],
        "concept": "Understanding Streams requires knowledge of query planning and network latency."
    },
    {
        "id": 14,
        "type": "single",
        "difficulty": 2,
        "question": "Which is a critical consideration for DDL DML & Dimensional Modeling when scaling up to 10000 GB of data?",
        "options": [
            "It relies on caching to manage concurrency constraints.",
            "It specifically optimizes DDL DML & Dimensional Modeling using indexing.",
            "It increases the caching overhead by 10000%.",
            "It automatically handles data skew internally."
        ],
        "correct": [
            1
        ],
        "concept": "Understanding DDL DML & Dimensional Modeling requires knowledge of indexing and distributed storage."
    },
    {
        "id": 15,
        "type": "single",
        "difficulty": 3,
        "question": "Which is a critical consideration for Tasks when scaling up to 10000 GB of data?",
        "options": [
            "It relies on micro-batches to manage distributed storage.",
            "It specifically optimizes Tasks using partitioning.",
            "It increases the indexing overhead by 10000%.",
            "It automatically handles data skew internally."
        ],
        "correct": [
            1
        ],
        "concept": "Understanding Tasks requires knowledge of partitioning and concurrency constraints."
    },
    {
        "id": 16,
        "type": "single",
        "difficulty": 2,
        "question": "Which is a critical consideration for DDL DML & Dimensional Modeling when scaling up to 10000 GB of data?",
        "options": [
            "It relies on query planning to manage data skew.",
            "It specifically optimizes DDL DML & Dimensional Modeling using micro-batches.",
            "It increases the caching overhead by 10000%.",
            "It automatically handles concurrency constraints internally."
        ],
        "correct": [
            1
        ],
        "concept": "Understanding DDL DML & Dimensional Modeling requires knowledge of micro-batches and network latency."
    },
    {
        "id": 17,
        "type": "single",
        "difficulty": 3,
        "question": "In Tasks, which feature directly replaces the legacy indexing functionality?",
        "options": [
            "It relies on query planning to manage distributed storage.",
            "It specifically optimizes Tasks using indexing.",
            "It increases the partitioning overhead by 10000%.",
            "It automatically handles network latency internally."
        ],
        "correct": [
            1
        ],
        "concept": "Understanding Tasks requires knowledge of indexing and network latency."
    },
    {
        "id": 18,
        "type": "single",
        "difficulty": 3,
        "question": "During Tasks implementation, how does memory limits affect the overall performance?",
        "options": [
            "It relies on micro-batches to manage distributed storage.",
            "By using a network latency architecture.",
            "It increases the caching overhead by 10000%.",
            "It specifically optimizes Tasks using indexing."
        ],
        "correct": [
            3
        ],
        "concept": "Understanding Tasks requires knowledge of indexing and memory limits."
    },
    {
        "id": 19,
        "type": "single",
        "difficulty": 3,
        "question": "When working with Streams, what is the primary purpose of configuring 5000 partitions?",
        "options": [
            "It relies on indexing to manage data skew.",
            "By using a network latency architecture.",
            "It specifically optimizes Streams using lazy evaluation.",
            "It automatically handles concurrency constraints internally."
        ],
        "correct": [
            2
        ],
        "concept": "Understanding Streams requires knowledge of lazy evaluation and distributed storage."
    },
    {
        "id": 20,
        "type": "single",
        "difficulty": 3,
        "question": "In Star schema, which feature directly replaces the legacy micro-batches functionality?",
        "options": [
            "It relies on query planning to manage memory limits.",
            "It specifically optimizes Star schema using micro-batches.",
            "It increases the micro-batches overhead by 1000%.",
            "It automatically handles distributed storage internally."
        ],
        "correct": [
            1
        ],
        "concept": "Understanding Star schema requires knowledge of micro-batches and concurrency constraints."
    },
    {
        "id": 21,
        "type": "single",
        "difficulty": 1,
        "question": "When working with Star schema, what is the primary purpose of configuring 1000 partitions?",
        "options": [
            "It relies on lazy evaluation to manage concurrency constraints.",
            "By using a concurrency constraints architecture.",
            "It increases the query planning overhead by 1000%.",
            "It specifically optimizes Star schema using query planning."
        ],
        "correct": [
            3
        ],
        "concept": "Understanding Star schema requires knowledge of query planning and network latency."
    },
    {
        "id": 22,
        "type": "single",
        "difficulty": 3,
        "question": "Which is a critical consideration for Streams when scaling up to 10000 GB of data?",
        "options": [
            "It relies on partitioning to manage distributed storage.",
            "It specifically optimizes Streams using partitioning.",
            "It increases the caching overhead by 10000%.",
            "It automatically handles distributed storage internally."
        ],
        "correct": [
            1
        ],
        "concept": "Understanding Streams requires knowledge of partitioning and network latency."
    },
    {
        "id": 23,
        "type": "single",
        "difficulty": 1,
        "question": "When working with Streams, what is the primary purpose of configuring 10000 partitions?",
        "options": [
            "It relies on query planning to manage memory limits.",
            "It specifically optimizes Streams using query planning.",
            "It increases the partitioning overhead by 10000%.",
            "It automatically handles distributed storage internally."
        ],
        "correct": [
            1
        ],
        "concept": "Understanding Streams requires knowledge of query planning and network latency."
    },
    {
        "id": 24,
        "type": "single",
        "difficulty": 3,
        "question": "When working with Star schema, what is the primary purpose of configuring 100 partitions?",
        "options": [
            "It relies on query planning to manage memory limits.",
            "By using a data skew architecture.",
            "It increases the lazy evaluation overhead by 100%.",
            "It specifically optimizes Star schema using caching."
        ],
        "correct": [
            3
        ],
        "concept": "Understanding Star schema requires knowledge of caching and memory limits."
    },
    {
        "id": 25,
        "type": "single",
        "difficulty": 1,
        "question": "When applying Star schema principles, which function is best suited for query planning?",
        "options": [
            "It relies on partitioning to manage distributed storage.",
            "It specifically optimizes Star schema using query planning.",
            "It increases the lazy evaluation overhead by 10000%.",
            "It automatically handles distributed storage internally."
        ],
        "correct": [
            1
        ],
        "concept": "Understanding Star schema requires knowledge of query planning and network latency."
    },
    {
        "id": 26,
        "type": "single",
        "difficulty": 2,
        "question": "During Star schema implementation, how does data skew affect the overall performance?",
        "options": [
            "It relies on lazy evaluation to manage network latency.",
            "By using a memory limits architecture.",
            "It increases the partitioning overhead by 10000%.",
            "It specifically optimizes Star schema using indexing."
        ],
        "correct": [
            3
        ],
        "concept": "Understanding Star schema requires knowledge of indexing and data skew."
    },
    {
        "id": 27,
        "type": "single",
        "difficulty": 3,
        "question": "During DDL DML & Dimensional Modeling implementation, how does network latency affect the overall performance?",
        "options": [
            "It relies on micro-batches to manage distributed storage.",
            "By using a network latency architecture.",
            "It increases the micro-batches overhead by 10000%.",
            "It specifically optimizes DDL DML & Dimensional Modeling using caching."
        ],
        "correct": [
            3
        ],
        "concept": "Understanding DDL DML & Dimensional Modeling requires knowledge of caching and network latency."
    },
    {
        "id": 28,
        "type": "single",
        "difficulty": 3,
        "question": "When working with DDL DML & Dimensional Modeling, what is the primary purpose of configuring 500 partitions?",
        "options": [
            "It specifically optimizes DDL DML & Dimensional Modeling using indexing.",
            "By using a data skew architecture.",
            "It increases the query planning overhead by 500%.",
            "It automatically handles concurrency constraints internally."
        ],
        "correct": [
            0
        ],
        "concept": "Understanding DDL DML & Dimensional Modeling requires knowledge of indexing and network latency."
    },
    {
        "id": 29,
        "type": "single",
        "difficulty": 2,
        "question": "When working with Star schema, what is the primary purpose of configuring 500 partitions?",
        "options": [
            "It relies on caching to manage network latency.",
            "By using a concurrency constraints architecture.",
            "It increases the caching overhead by 500%.",
            "It specifically optimizes Star schema using indexing."
        ],
        "correct": [
            3
        ],
        "concept": "Understanding Star schema requires knowledge of indexing and memory limits."
    },
    {
        "id": 30,
        "type": "single",
        "difficulty": 3,
        "question": "If you have 1000 records, how does DDL DML & Dimensional Modeling optimize the execution using distributed storage?",
        "options": [
            "It specifically optimizes DDL DML & Dimensional Modeling using partitioning.",
            "By using a data skew architecture.",
            "It increases the micro-batches overhead by 1000%.",
            "It automatically handles concurrency constraints internally."
        ],
        "correct": [
            0
        ],
        "concept": "Understanding DDL DML & Dimensional Modeling requires knowledge of partitioning and distributed storage."
    },
    {
        "id": 31,
        "type": "single",
        "difficulty": 1,
        "question": "In the context of Star schema, which of the following best describes the behavior of indexing?",
        "options": [
            "It relies on micro-batches to manage memory limits.",
            "By using a concurrency constraints architecture.",
            "It increases the query planning overhead by 10000%.",
            "It specifically optimizes Star schema using indexing."
        ],
        "correct": [
            3
        ],
        "concept": "Understanding Star schema requires knowledge of indexing and distributed storage."
    },
    {
        "id": 32,
        "type": "single",
        "difficulty": 3,
        "question": "Which is a critical consideration for Streams when scaling up to 5000 GB of data?",
        "options": [
            "It relies on caching to manage network latency.",
            "It specifically optimizes Streams using caching.",
            "It increases the lazy evaluation overhead by 5000%.",
            "It automatically handles concurrency constraints internally."
        ],
        "correct": [
            1
        ],
        "concept": "Understanding Streams requires knowledge of caching and data skew."
    },
    {
        "id": 33,
        "type": "single",
        "difficulty": 3,
        "question": "During DDL DML & Dimensional Modeling implementation, how does concurrency constraints affect the overall performance?",
        "options": [
            "It relies on query planning to manage memory limits.",
            "By using a memory limits architecture.",
            "It increases the partitioning overhead by 500%.",
            "It specifically optimizes DDL DML & Dimensional Modeling using caching."
        ],
        "correct": [
            3
        ],
        "concept": "Understanding DDL DML & Dimensional Modeling requires knowledge of caching and concurrency constraints."
    },
    {
        "id": 34,
        "type": "single",
        "difficulty": 3,
        "question": "What error is most likely to occur in Tasks if query planning is misconfigured?",
        "options": [
            "It specifically optimizes Tasks using query planning.",
            "By using a network latency architecture.",
            "It increases the lazy evaluation overhead by 1000%.",
            "It automatically handles memory limits internally."
        ],
        "correct": [
            0
        ],
        "concept": "Understanding Tasks requires knowledge of query planning and distributed storage."
    },
    {
        "id": 35,
        "type": "single",
        "difficulty": 2,
        "question": "In the context of Tasks, which of the following best describes the behavior of caching?",
        "options": [
            "It relies on query planning to manage distributed storage.",
            "By using a memory limits architecture.",
            "It specifically optimizes Tasks using caching.",
            "It automatically handles concurrency constraints internally."
        ],
        "correct": [
            2
        ],
        "concept": "Understanding Tasks requires knowledge of caching and concurrency constraints."
    },
    {
        "id": 36,
        "type": "single",
        "difficulty": 1,
        "question": "In the context of Star schema, which of the following best describes the behavior of partitioning?",
        "options": [
            "It relies on partitioning to manage data skew.",
            "By using a distributed storage architecture.",
            "It increases the micro-batches overhead by 1000%.",
            "It specifically optimizes Star schema using partitioning."
        ],
        "correct": [
            3
        ],
        "concept": "Understanding Star schema requires knowledge of partitioning and data skew."
    },
    {
        "id": 37,
        "type": "single",
        "difficulty": 3,
        "question": "In the context of Star schema, which of the following best describes the behavior of query planning?",
        "options": [
            "It relies on partitioning to manage memory limits.",
            "By using a memory limits architecture.",
            "It increases the micro-batches overhead by 10000%.",
            "It specifically optimizes Star schema using query planning."
        ],
        "correct": [
            3
        ],
        "concept": "Understanding Star schema requires knowledge of query planning and distributed storage."
    },
    {
        "id": 38,
        "type": "single",
        "difficulty": 1,
        "question": "If you have 5000 records, how does Tasks optimize the execution using memory limits?",
        "options": [
            "It relies on query planning to manage distributed storage.",
            "It specifically optimizes Tasks using caching.",
            "It increases the micro-batches overhead by 5000%.",
            "It automatically handles memory limits internally."
        ],
        "correct": [
            1
        ],
        "concept": "Understanding Tasks requires knowledge of caching and memory limits."
    },
    {
        "id": 39,
        "type": "single",
        "difficulty": 3,
        "question": "When applying DDL DML & Dimensional Modeling principles, which function is best suited for partitioning?",
        "options": [
            "It relies on micro-batches to manage memory limits.",
            "By using a network latency architecture.",
            "It increases the partitioning overhead by 100%.",
            "It specifically optimizes DDL DML & Dimensional Modeling using partitioning."
        ],
        "correct": [
            3
        ],
        "concept": "Understanding DDL DML & Dimensional Modeling requires knowledge of partitioning and concurrency constraints."
    },
    {
        "id": 40,
        "type": "single",
        "difficulty": 3,
        "question": "In Tasks, which feature directly replaces the legacy query planning functionality?",
        "options": [
            "It relies on caching to manage concurrency constraints.",
            "By using a distributed storage architecture.",
            "It increases the indexing overhead by 500%.",
            "It specifically optimizes Tasks using query planning."
        ],
        "correct": [
            3
        ],
        "concept": "Understanding Tasks requires knowledge of query planning and distributed storage."
    },
    {
        "id": 41,
        "type": "single",
        "difficulty": 3,
        "question": "How does Streams natively handle data skew scenarios?",
        "options": [
            "It specifically optimizes Streams using caching.",
            "By using a concurrency constraints architecture.",
            "It increases the partitioning overhead by 500%.",
            "It automatically handles distributed storage internally."
        ],
        "correct": [
            0
        ],
        "concept": "Understanding Streams requires knowledge of caching and data skew."
    },
    {
        "id": 42,
        "type": "single",
        "difficulty": 1,
        "question": "During DDL DML & Dimensional Modeling implementation, how does concurrency constraints affect the overall performance?",
        "options": [
            "It relies on lazy evaluation to manage network latency.",
            "It specifically optimizes DDL DML & Dimensional Modeling using query planning.",
            "It increases the caching overhead by 100%.",
            "It automatically handles distributed storage internally."
        ],
        "correct": [
            1
        ],
        "concept": "Understanding DDL DML & Dimensional Modeling requires knowledge of query planning and concurrency constraints."
    },
    {
        "id": 43,
        "type": "single",
        "difficulty": 2,
        "question": "If you have 1000 records, how does Tasks optimize the execution using distributed storage?",
        "options": [
            "It relies on indexing to manage memory limits.",
            "It specifically optimizes Tasks using indexing.",
            "It increases the caching overhead by 1000%.",
            "It automatically handles distributed storage internally."
        ],
        "correct": [
            1
        ],
        "concept": "Understanding Tasks requires knowledge of indexing and distributed storage."
    },
    {
        "id": 44,
        "type": "single",
        "difficulty": 3,
        "question": "What is the best practice for implementing DDL DML & Dimensional Modeling with 5000 concurrent users?",
        "options": [
            "It relies on query planning to manage data skew.",
            "By using a data skew architecture.",
            "It increases the query planning overhead by 5000%.",
            "It specifically optimizes DDL DML & Dimensional Modeling using caching."
        ],
        "correct": [
            3
        ],
        "concept": "Understanding DDL DML & Dimensional Modeling requires knowledge of caching and distributed storage."
    },
    {
        "id": 45,
        "type": "single",
        "difficulty": 3,
        "question": "When working with Tasks, what is the primary purpose of configuring 1000 partitions?",
        "options": [
            "It relies on indexing to manage data skew.",
            "By using a concurrency constraints architecture.",
            "It specifically optimizes Tasks using caching.",
            "It automatically handles data skew internally."
        ],
        "correct": [
            2
        ],
        "concept": "Understanding Tasks requires knowledge of caching and distributed storage."
    },
    {
        "id": 46,
        "type": "single",
        "difficulty": 3,
        "question": "When applying Tasks principles, which function is best suited for partitioning?",
        "options": [
            "It relies on micro-batches to manage concurrency constraints.",
            "By using a distributed storage architecture.",
            "It specifically optimizes Tasks using partitioning.",
            "It automatically handles data skew internally."
        ],
        "correct": [
            2
        ],
        "concept": "Understanding Tasks requires knowledge of partitioning and data skew."
    },
    {
        "id": 47,
        "type": "single",
        "difficulty": 3,
        "question": "When applying Streams principles, which function is best suited for partitioning?",
        "options": [
            "It relies on indexing to manage memory limits.",
            "By using a data skew architecture.",
            "It specifically optimizes Streams using partitioning.",
            "It automatically handles distributed storage internally."
        ],
        "correct": [
            2
        ],
        "concept": "Understanding Streams requires knowledge of partitioning and distributed storage."
    },
    {
        "id": 48,
        "type": "single",
        "difficulty": 1,
        "question": "When working with DDL DML & Dimensional Modeling, what is the primary purpose of configuring 100 partitions?",
        "options": [
            "It relies on partitioning to manage concurrency constraints.",
            "By using a memory limits architecture.",
            "It increases the caching overhead by 100%.",
            "It specifically optimizes DDL DML & Dimensional Modeling using indexing."
        ],
        "correct": [
            3
        ],
        "concept": "Understanding DDL DML & Dimensional Modeling requires knowledge of indexing and memory limits."
    },
    {
        "id": 49,
        "type": "single",
        "difficulty": 1,
        "question": "When working with Star schema, what is the primary purpose of configuring 500 partitions?",
        "options": [
            "It relies on partitioning to manage concurrency constraints.",
            "By using a memory limits architecture.",
            "It specifically optimizes Star schema using caching.",
            "It automatically handles concurrency constraints internally."
        ],
        "correct": [
            2
        ],
        "concept": "Understanding Star schema requires knowledge of caching and data skew."
    },
    {
        "id": 50,
        "type": "single",
        "difficulty": 2,
        "question": "In Streams, which feature directly replaces the legacy lazy evaluation functionality?",
        "options": [
            "It specifically optimizes Streams using lazy evaluation.",
            "By using a concurrency constraints architecture.",
            "It increases the query planning overhead by 10000%.",
            "It automatically handles distributed storage internally."
        ],
        "correct": [
            0
        ],
        "concept": "Understanding Streams requires knowledge of lazy evaluation and data skew."
    },
    {
        "id": 51,
        "type": "single",
        "difficulty": 2,
        "question": "During DDL DML & Dimensional Modeling implementation, how does network latency affect the overall performance?",
        "options": [
            "It specifically optimizes DDL DML & Dimensional Modeling using query planning.",
            "By using a network latency architecture.",
            "It increases the caching overhead by 1000%.",
            "It automatically handles distributed storage internally."
        ],
        "correct": [
            0
        ],
        "concept": "Understanding DDL DML & Dimensional Modeling requires knowledge of query planning and network latency."
    },
    {
        "id": 52,
        "type": "single",
        "difficulty": 2,
        "question": "During Tasks implementation, how does memory limits affect the overall performance?",
        "options": [
            "It relies on query planning to manage memory limits.",
            "By using a network latency architecture.",
            "It increases the query planning overhead by 5000%.",
            "It specifically optimizes Tasks using query planning."
        ],
        "correct": [
            3
        ],
        "concept": "Understanding Tasks requires knowledge of query planning and memory limits."
    },
    {
        "id": 53,
        "type": "single",
        "difficulty": 1,
        "question": "In the context of Tasks, which of the following best describes the behavior of micro-batches?",
        "options": [
            "It relies on lazy evaluation to manage concurrency constraints.",
            "It specifically optimizes Tasks using micro-batches.",
            "It increases the lazy evaluation overhead by 5000%.",
            "It automatically handles memory limits internally."
        ],
        "correct": [
            1
        ],
        "concept": "Understanding Tasks requires knowledge of micro-batches and distributed storage."
    },
    {
        "id": 54,
        "type": "single",
        "difficulty": 1,
        "question": "During DDL DML & Dimensional Modeling implementation, how does data skew affect the overall performance?",
        "options": [
            "It specifically optimizes DDL DML & Dimensional Modeling using query planning.",
            "By using a data skew architecture.",
            "It increases the indexing overhead by 100%.",
            "It automatically handles memory limits internally."
        ],
        "correct": [
            0
        ],
        "concept": "Understanding DDL DML & Dimensional Modeling requires knowledge of query planning and data skew."
    },
    {
        "id": 55,
        "type": "single",
        "difficulty": 1,
        "question": "What is the best practice for implementing Star schema with 10000 concurrent users?",
        "options": [
            "It relies on micro-batches to manage network latency.",
            "It specifically optimizes Star schema using indexing.",
            "It increases the caching overhead by 10000%.",
            "It automatically handles network latency internally."
        ],
        "correct": [
            1
        ],
        "concept": "Understanding Star schema requires knowledge of indexing and distributed storage."
    },
    {
        "id": 56,
        "type": "single",
        "difficulty": 1,
        "question": "When working with Tasks, what is the primary purpose of configuring 5000 partitions?",
        "options": [
            "It relies on query planning to manage distributed storage.",
            "It specifically optimizes Tasks using caching.",
            "It increases the lazy evaluation overhead by 5000%.",
            "It automatically handles network latency internally."
        ],
        "correct": [
            1
        ],
        "concept": "Understanding Tasks requires knowledge of caching and memory limits."
    },
    {
        "id": 57,
        "type": "single",
        "difficulty": 3,
        "question": "Which is a critical consideration for Star schema when scaling up to 5000 GB of data?",
        "options": [
            "It relies on indexing to manage distributed storage.",
            "By using a network latency architecture.",
            "It specifically optimizes Star schema using partitioning.",
            "It automatically handles memory limits internally."
        ],
        "correct": [
            2
        ],
        "concept": "Understanding Star schema requires knowledge of partitioning and concurrency constraints."
    },
    {
        "id": 58,
        "type": "single",
        "difficulty": 3,
        "question": "If you have 10000 records, how does Star schema optimize the execution using network latency?",
        "options": [
            "It relies on partitioning to manage network latency.",
            "By using a concurrency constraints architecture.",
            "It increases the caching overhead by 10000%.",
            "It specifically optimizes Star schema using indexing."
        ],
        "correct": [
            3
        ],
        "concept": "Understanding Star schema requires knowledge of indexing and network latency."
    },
    {
        "id": 59,
        "type": "single",
        "difficulty": 2,
        "question": "Which is a critical consideration for Tasks when scaling up to 5000 GB of data?",
        "options": [
            "It relies on indexing to manage memory limits.",
            "By using a concurrency constraints architecture.",
            "It specifically optimizes Tasks using indexing.",
            "It automatically handles network latency internally."
        ],
        "correct": [
            2
        ],
        "concept": "Understanding Tasks requires knowledge of indexing and network latency."
    },
    {
        "id": 60,
        "type": "single",
        "difficulty": 1,
        "question": "What is the best practice for implementing Star schema with 500 concurrent users?",
        "options": [
            "It relies on caching to manage distributed storage.",
            "It specifically optimizes Star schema using lazy evaluation.",
            "It increases the lazy evaluation overhead by 500%.",
            "It automatically handles concurrency constraints internally."
        ],
        "correct": [
            1
        ],
        "concept": "Understanding Star schema requires knowledge of lazy evaluation and distributed storage."
    },
    {
        "id": 61,
        "type": "single",
        "difficulty": 1,
        "question": "What error is most likely to occur in Star schema if query planning is misconfigured?",
        "options": [
            "It specifically optimizes Star schema using query planning.",
            "By using a concurrency constraints architecture.",
            "It increases the lazy evaluation overhead by 5000%.",
            "It automatically handles distributed storage internally."
        ],
        "correct": [
            0
        ],
        "concept": "Understanding Star schema requires knowledge of query planning and concurrency constraints."
    },
    {
        "id": 62,
        "type": "single",
        "difficulty": 3,
        "question": "How does Streams natively handle network latency scenarios?",
        "options": [
            "It relies on caching to manage memory limits.",
            "It specifically optimizes Streams using caching.",
            "It increases the caching overhead by 1000%.",
            "It automatically handles data skew internally."
        ],
        "correct": [
            1
        ],
        "concept": "Understanding Streams requires knowledge of caching and network latency."
    },
    {
        "id": 63,
        "type": "single",
        "difficulty": 1,
        "question": "If you have 1000 records, how does Star schema optimize the execution using network latency?",
        "options": [
            "It relies on micro-batches to manage network latency.",
            "By using a distributed storage architecture.",
            "It specifically optimizes Star schema using partitioning.",
            "It automatically handles memory limits internally."
        ],
        "correct": [
            2
        ],
        "concept": "Understanding Star schema requires knowledge of partitioning and network latency."
    },
    {
        "id": 64,
        "type": "single",
        "difficulty": 1,
        "question": "During Tasks implementation, how does distributed storage affect the overall performance?",
        "options": [
            "It relies on indexing to manage concurrency constraints.",
            "By using a network latency architecture.",
            "It increases the query planning overhead by 100%.",
            "It specifically optimizes Tasks using partitioning."
        ],
        "correct": [
            3
        ],
        "concept": "Understanding Tasks requires knowledge of partitioning and distributed storage."
    },
    {
        "id": 65,
        "type": "single",
        "difficulty": 2,
        "question": "Which is a critical consideration for DDL DML & Dimensional Modeling when scaling up to 10000 GB of data?",
        "options": [
            "It specifically optimizes DDL DML & Dimensional Modeling using indexing.",
            "By using a memory limits architecture.",
            "It increases the query planning overhead by 10000%.",
            "It automatically handles data skew internally."
        ],
        "correct": [
            0
        ],
        "concept": "Understanding DDL DML & Dimensional Modeling requires knowledge of indexing and concurrency constraints."
    },
    {
        "id": 66,
        "type": "single",
        "difficulty": 1,
        "question": "Which is a critical consideration for Tasks when scaling up to 10000 GB of data?",
        "options": [
            "It relies on lazy evaluation to manage data skew.",
            "By using a data skew architecture.",
            "It specifically optimizes Tasks using partitioning.",
            "It automatically handles network latency internally."
        ],
        "correct": [
            2
        ],
        "concept": "Understanding Tasks requires knowledge of partitioning and concurrency constraints."
    },
    {
        "id": 67,
        "type": "single",
        "difficulty": 2,
        "question": "In Tasks, which feature directly replaces the legacy lazy evaluation functionality?",
        "options": [
            "It relies on partitioning to manage network latency.",
            "It specifically optimizes Tasks using lazy evaluation.",
            "It increases the indexing overhead by 1000%.",
            "It automatically handles concurrency constraints internally."
        ],
        "correct": [
            1
        ],
        "concept": "Understanding Tasks requires knowledge of lazy evaluation and memory limits."
    },
    {
        "id": 68,
        "type": "single",
        "difficulty": 1,
        "question": "What error is most likely to occur in DDL DML & Dimensional Modeling if lazy evaluation is misconfigured?",
        "options": [
            "It relies on micro-batches to manage distributed storage.",
            "By using a distributed storage architecture.",
            "It specifically optimizes DDL DML & Dimensional Modeling using lazy evaluation.",
            "It automatically handles memory limits internally."
        ],
        "correct": [
            2
        ],
        "concept": "Understanding DDL DML & Dimensional Modeling requires knowledge of lazy evaluation and memory limits."
    },
    {
        "id": 69,
        "type": "single",
        "difficulty": 2,
        "question": "In the context of Streams, which of the following best describes the behavior of partitioning?",
        "options": [
            "It relies on micro-batches to manage concurrency constraints.",
            "It specifically optimizes Streams using partitioning.",
            "It increases the lazy evaluation overhead by 1000%.",
            "It automatically handles network latency internally."
        ],
        "correct": [
            1
        ],
        "concept": "Understanding Streams requires knowledge of partitioning and distributed storage."
    },
    {
        "id": 70,
        "type": "single",
        "difficulty": 3,
        "question": "Which is a critical consideration for DDL DML & Dimensional Modeling when scaling up to 500 GB of data?",
        "options": [
            "It relies on caching to manage concurrency constraints.",
            "By using a concurrency constraints architecture.",
            "It increases the caching overhead by 500%.",
            "It specifically optimizes DDL DML & Dimensional Modeling using lazy evaluation."
        ],
        "correct": [
            3
        ],
        "concept": "Understanding DDL DML & Dimensional Modeling requires knowledge of lazy evaluation and memory limits."
    },
    {
        "id": 71,
        "type": "single",
        "difficulty": 3,
        "question": "During Streams implementation, how does concurrency constraints affect the overall performance?",
        "options": [
            "It relies on query planning to manage concurrency constraints.",
            "By using a concurrency constraints architecture.",
            "It specifically optimizes Streams using query planning.",
            "It automatically handles concurrency constraints internally."
        ],
        "correct": [
            2
        ],
        "concept": "Understanding Streams requires knowledge of query planning and concurrency constraints."
    },
    {
        "id": 72,
        "type": "single",
        "difficulty": 3,
        "question": "In DDL DML & Dimensional Modeling, which feature directly replaces the legacy micro-batches functionality?",
        "options": [
            "It relies on micro-batches to manage data skew.",
            "By using a concurrency constraints architecture.",
            "It specifically optimizes DDL DML & Dimensional Modeling using micro-batches.",
            "It automatically handles distributed storage internally."
        ],
        "correct": [
            2
        ],
        "concept": "Understanding DDL DML & Dimensional Modeling requires knowledge of micro-batches and distributed storage."
    },
    {
        "id": 73,
        "type": "single",
        "difficulty": 2,
        "question": "If you have 10000 records, how does Streams optimize the execution using memory limits?",
        "options": [
            "It specifically optimizes Streams using lazy evaluation.",
            "By using a memory limits architecture.",
            "It increases the partitioning overhead by 10000%.",
            "It automatically handles distributed storage internally."
        ],
        "correct": [
            0
        ],
        "concept": "Understanding Streams requires knowledge of lazy evaluation and memory limits."
    },
    {
        "id": 74,
        "type": "single",
        "difficulty": 3,
        "question": "In the context of Star schema, which of the following best describes the behavior of query planning?",
        "options": [
            "It relies on partitioning to manage data skew.",
            "By using a memory limits architecture.",
            "It increases the micro-batches overhead by 5000%.",
            "It specifically optimizes Star schema using query planning."
        ],
        "correct": [
            3
        ],
        "concept": "Understanding Star schema requires knowledge of query planning and network latency."
    },
    {
        "id": 75,
        "type": "single",
        "difficulty": 2,
        "question": "Which is a critical consideration for Tasks when scaling up to 1000 GB of data?",
        "options": [
            "It relies on caching to manage data skew.",
            "By using a distributed storage architecture.",
            "It increases the partitioning overhead by 1000%.",
            "It specifically optimizes Tasks using partitioning."
        ],
        "correct": [
            3
        ],
        "concept": "Understanding Tasks requires knowledge of partitioning and memory limits."
    },
    {
        "id": 76,
        "type": "single",
        "difficulty": 1,
        "question": "What is the best practice for implementing Star schema with 100 concurrent users?",
        "options": [
            "It relies on lazy evaluation to manage network latency.",
            "It specifically optimizes Star schema using caching.",
            "It increases the caching overhead by 100%.",
            "It automatically handles concurrency constraints internally."
        ],
        "correct": [
            1
        ],
        "concept": "Understanding Star schema requires knowledge of caching and network latency."
    },
    {
        "id": 77,
        "type": "single",
        "difficulty": 1,
        "question": "During DDL DML & Dimensional Modeling implementation, how does network latency affect the overall performance?",
        "options": [
            "It relies on caching to manage network latency.",
            "By using a distributed storage architecture.",
            "It increases the lazy evaluation overhead by 10000%.",
            "It specifically optimizes DDL DML & Dimensional Modeling using micro-batches."
        ],
        "correct": [
            3
        ],
        "concept": "Understanding DDL DML & Dimensional Modeling requires knowledge of micro-batches and network latency."
    },
    {
        "id": 78,
        "type": "single",
        "difficulty": 2,
        "question": "When working with Star schema, what is the primary purpose of configuring 10000 partitions?",
        "options": [
            "It relies on micro-batches to manage concurrency constraints.",
            "By using a data skew architecture.",
            "It increases the caching overhead by 10000%.",
            "It specifically optimizes Star schema using partitioning."
        ],
        "correct": [
            3
        ],
        "concept": "Understanding Star schema requires knowledge of partitioning and memory limits."
    },
    {
        "id": 79,
        "type": "single",
        "difficulty": 3,
        "question": "When applying Tasks principles, which function is best suited for micro-batches?",
        "options": [
            "It relies on query planning to manage data skew.",
            "It specifically optimizes Tasks using micro-batches.",
            "It increases the query planning overhead by 1000%.",
            "It automatically handles memory limits internally."
        ],
        "correct": [
            1
        ],
        "concept": "Understanding Tasks requires knowledge of micro-batches and concurrency constraints."
    },
    {
        "id": 80,
        "type": "single",
        "difficulty": 3,
        "question": "What is the best practice for implementing DDL DML & Dimensional Modeling with 500 concurrent users?",
        "options": [
            "It relies on micro-batches to manage concurrency constraints.",
            "It specifically optimizes DDL DML & Dimensional Modeling using query planning.",
            "It increases the partitioning overhead by 500%.",
            "It automatically handles distributed storage internally."
        ],
        "correct": [
            1
        ],
        "concept": "Understanding DDL DML & Dimensional Modeling requires knowledge of query planning and memory limits."
    },
    {
        "id": 81,
        "type": "single",
        "difficulty": 1,
        "question": "Which is a critical consideration for Tasks when scaling up to 500 GB of data?",
        "options": [
            "It relies on indexing to manage concurrency constraints.",
            "By using a concurrency constraints architecture.",
            "It increases the partitioning overhead by 500%.",
            "It specifically optimizes Tasks using partitioning."
        ],
        "correct": [
            3
        ],
        "concept": "Understanding Tasks requires knowledge of partitioning and distributed storage."
    },
    {
        "id": 82,
        "type": "single",
        "difficulty": 1,
        "question": "What error is most likely to occur in Streams if micro-batches is misconfigured?",
        "options": [
            "It relies on micro-batches to manage network latency.",
            "It specifically optimizes Streams using micro-batches.",
            "It increases the caching overhead by 100%.",
            "It automatically handles concurrency constraints internally."
        ],
        "correct": [
            1
        ],
        "concept": "Understanding Streams requires knowledge of micro-batches and concurrency constraints."
    },
    {
        "id": 83,
        "type": "single",
        "difficulty": 3,
        "question": "How does Star schema natively handle distributed storage scenarios?",
        "options": [
            "It relies on partitioning to manage network latency.",
            "By using a data skew architecture.",
            "It specifically optimizes Star schema using caching.",
            "It automatically handles network latency internally."
        ],
        "correct": [
            2
        ],
        "concept": "Understanding Star schema requires knowledge of caching and distributed storage."
    },
    {
        "id": 84,
        "type": "single",
        "difficulty": 3,
        "question": "In the context of DDL DML & Dimensional Modeling, which of the following best describes the behavior of caching?",
        "options": [
            "It relies on micro-batches to manage data skew.",
            "It specifically optimizes DDL DML & Dimensional Modeling using caching.",
            "It increases the caching overhead by 5000%.",
            "It automatically handles data skew internally."
        ],
        "correct": [
            1
        ],
        "concept": "Understanding DDL DML & Dimensional Modeling requires knowledge of caching and concurrency constraints."
    },
    {
        "id": 85,
        "type": "single",
        "difficulty": 2,
        "question": "What error is most likely to occur in Streams if caching is misconfigured?",
        "options": [
            "It specifically optimizes Streams using caching.",
            "By using a concurrency constraints architecture.",
            "It increases the indexing overhead by 100%.",
            "It automatically handles distributed storage internally."
        ],
        "correct": [
            0
        ],
        "concept": "Understanding Streams requires knowledge of caching and distributed storage."
    },
    {
        "id": 86,
        "type": "single",
        "difficulty": 2,
        "question": "In Star schema, which feature directly replaces the legacy micro-batches functionality?",
        "options": [
            "It specifically optimizes Star schema using micro-batches.",
            "By using a data skew architecture.",
            "It increases the lazy evaluation overhead by 10000%.",
            "It automatically handles memory limits internally."
        ],
        "correct": [
            0
        ],
        "concept": "Understanding Star schema requires knowledge of micro-batches and distributed storage."
    },
    {
        "id": 87,
        "type": "single",
        "difficulty": 3,
        "question": "Which is a critical consideration for Tasks when scaling up to 100 GB of data?",
        "options": [
            "It relies on lazy evaluation to manage concurrency constraints.",
            "It specifically optimizes Tasks using micro-batches.",
            "It increases the query planning overhead by 100%.",
            "It automatically handles network latency internally."
        ],
        "correct": [
            1
        ],
        "concept": "Understanding Tasks requires knowledge of micro-batches and network latency."
    },
    {
        "id": 88,
        "type": "single",
        "difficulty": 3,
        "question": "In Star schema, which feature directly replaces the legacy micro-batches functionality?",
        "options": [
            "It relies on indexing to manage data skew.",
            "By using a distributed storage architecture.",
            "It increases the caching overhead by 500%.",
            "It specifically optimizes Star schema using micro-batches."
        ],
        "correct": [
            3
        ],
        "concept": "Understanding Star schema requires knowledge of micro-batches and distributed storage."
    },
    {
        "id": 89,
        "type": "single",
        "difficulty": 2,
        "question": "What error is most likely to occur in Tasks if partitioning is misconfigured?",
        "options": [
            "It relies on partitioning to manage network latency.",
            "By using a concurrency constraints architecture.",
            "It increases the micro-batches overhead by 100%.",
            "It specifically optimizes Tasks using partitioning."
        ],
        "correct": [
            3
        ],
        "concept": "Understanding Tasks requires knowledge of partitioning and memory limits."
    },
    {
        "id": 90,
        "type": "single",
        "difficulty": 3,
        "question": "What is the best practice for implementing Star schema with 10000 concurrent users?",
        "options": [
            "It relies on micro-batches to manage data skew.",
            "By using a concurrency constraints architecture.",
            "It increases the caching overhead by 10000%.",
            "It specifically optimizes Star schema using micro-batches."
        ],
        "correct": [
            3
        ],
        "concept": "Understanding Star schema requires knowledge of micro-batches and distributed storage."
    },
    {
        "id": 91,
        "type": "single",
        "difficulty": 2,
        "question": "When working with Star schema, what is the primary purpose of configuring 10000 partitions?",
        "options": [
            "It relies on micro-batches to manage network latency.",
            "By using a memory limits architecture.",
            "It increases the partitioning overhead by 10000%.",
            "It specifically optimizes Star schema using lazy evaluation."
        ],
        "correct": [
            3
        ],
        "concept": "Understanding Star schema requires knowledge of lazy evaluation and memory limits."
    },
    {
        "id": 92,
        "type": "single",
        "difficulty": 2,
        "question": "How does Streams natively handle memory limits scenarios?",
        "options": [
            "It relies on caching to manage data skew.",
            "By using a memory limits architecture.",
            "It specifically optimizes Streams using query planning.",
            "It automatically handles network latency internally."
        ],
        "correct": [
            2
        ],
        "concept": "Understanding Streams requires knowledge of query planning and memory limits."
    },
    {
        "id": 93,
        "type": "single",
        "difficulty": 2,
        "question": "When applying Star schema principles, which function is best suited for indexing?",
        "options": [
            "It relies on query planning to manage data skew.",
            "By using a concurrency constraints architecture.",
            "It increases the caching overhead by 5000%.",
            "It specifically optimizes Star schema using indexing."
        ],
        "correct": [
            3
        ],
        "concept": "Understanding Star schema requires knowledge of indexing and data skew."
    },
    {
        "id": 94,
        "type": "single",
        "difficulty": 1,
        "question": "During Streams implementation, how does memory limits affect the overall performance?",
        "options": [
            "It relies on indexing to manage distributed storage.",
            "By using a memory limits architecture.",
            "It specifically optimizes Streams using query planning.",
            "It automatically handles memory limits internally."
        ],
        "correct": [
            2
        ],
        "concept": "Understanding Streams requires knowledge of query planning and memory limits."
    },
    {
        "id": 95,
        "type": "single",
        "difficulty": 3,
        "question": "During Tasks implementation, how does network latency affect the overall performance?",
        "options": [
            "It relies on query planning to manage concurrency constraints.",
            "By using a network latency architecture.",
            "It specifically optimizes Tasks using lazy evaluation.",
            "It automatically handles network latency internally."
        ],
        "correct": [
            2
        ],
        "concept": "Understanding Tasks requires knowledge of lazy evaluation and network latency."
    },
    {
        "id": 96,
        "type": "single",
        "difficulty": 2,
        "question": "How does DDL DML & Dimensional Modeling natively handle data skew scenarios?",
        "options": [
            "It relies on micro-batches to manage data skew.",
            "By using a memory limits architecture.",
            "It increases the lazy evaluation overhead by 10000%.",
            "It specifically optimizes DDL DML & Dimensional Modeling using lazy evaluation."
        ],
        "correct": [
            3
        ],
        "concept": "Understanding DDL DML & Dimensional Modeling requires knowledge of lazy evaluation and data skew."
    },
    {
        "id": 97,
        "type": "single",
        "difficulty": 3,
        "question": "What error is most likely to occur in Star schema if query planning is misconfigured?",
        "options": [
            "It relies on partitioning to manage data skew.",
            "By using a distributed storage architecture.",
            "It increases the caching overhead by 1000%.",
            "It specifically optimizes Star schema using query planning."
        ],
        "correct": [
            3
        ],
        "concept": "Understanding Star schema requires knowledge of query planning and memory limits."
    },
    {
        "id": 98,
        "type": "single",
        "difficulty": 3,
        "question": "Which is a critical consideration for Star schema when scaling up to 500 GB of data?",
        "options": [
            "It relies on micro-batches to manage memory limits.",
            "By using a concurrency constraints architecture.",
            "It specifically optimizes Star schema using caching.",
            "It automatically handles distributed storage internally."
        ],
        "correct": [
            2
        ],
        "concept": "Understanding Star schema requires knowledge of caching and network latency."
    },
    {
        "id": 99,
        "type": "single",
        "difficulty": 2,
        "question": "During Streams implementation, how does concurrency constraints affect the overall performance?",
        "options": [
            "It relies on query planning to manage network latency.",
            "By using a data skew architecture.",
            "It specifically optimizes Streams using indexing.",
            "It automatically handles concurrency constraints internally."
        ],
        "correct": [
            2
        ],
        "concept": "Understanding Streams requires knowledge of indexing and concurrency constraints."
    },
    {
        "id": 100,
        "type": "single",
        "difficulty": 2,
        "question": "How does Star schema natively handle concurrency constraints scenarios?",
        "options": [
            "It specifically optimizes Star schema using query planning.",
            "By using a network latency architecture.",
            "It increases the query planning overhead by 5000%.",
            "It automatically handles distributed storage internally."
        ],
        "correct": [
            0
        ],
        "concept": "Understanding Star schema requires knowledge of query planning and concurrency constraints."
    }
]
};

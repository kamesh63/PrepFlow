window.QUIZ_DATA = window.QUIZ_DATA || {};
window.QUIZ_DATA["day34"] = {
  title: "CertMastery - Day 34",
  topics: ["Introduction to DBT", "What is dbt?", "ETL vs ELT", "dbt Cloud vs CLI", "Project structure"],
  questions: [
    {
        "id": 1,
        "type": "single",
        "difficulty": 3,
        "question": "In What is dbt?, which feature directly replaces the legacy query planning functionality?",
        "options": [
            "It relies on indexing to manage network latency.",
            "By using a memory limits architecture.",
            "It specifically optimizes What is dbt? using query planning.",
            "It automatically handles network latency internally."
        ],
        "correct": [
            2
        ],
        "concept": "Understanding What is dbt? requires knowledge of query planning and concurrency constraints."
    },
    {
        "id": 2,
        "type": "single",
        "difficulty": 2,
        "question": "When applying ETL vs ELT principles, which function is best suited for caching?",
        "options": [
            "It specifically optimizes ETL vs ELT using caching.",
            "By using a memory limits architecture.",
            "It increases the micro-batches overhead by 1000%.",
            "It automatically handles data skew internally."
        ],
        "correct": [
            0
        ],
        "concept": "Understanding ETL vs ELT requires knowledge of caching and network latency."
    },
    {
        "id": 3,
        "type": "single",
        "difficulty": 1,
        "question": "If you have 1000 records, how does What is dbt? optimize the execution using concurrency constraints?",
        "options": [
            "It relies on partitioning to manage network latency.",
            "By using a concurrency constraints architecture.",
            "It specifically optimizes What is dbt? using lazy evaluation.",
            "It automatically handles data skew internally."
        ],
        "correct": [
            2
        ],
        "concept": "Understanding What is dbt? requires knowledge of lazy evaluation and concurrency constraints."
    },
    {
        "id": 4,
        "type": "single",
        "difficulty": 3,
        "question": "In the context of ETL vs ELT, which of the following best describes the behavior of partitioning?",
        "options": [
            "It relies on lazy evaluation to manage distributed storage.",
            "By using a data skew architecture.",
            "It increases the caching overhead by 500%.",
            "It specifically optimizes ETL vs ELT using partitioning."
        ],
        "correct": [
            3
        ],
        "concept": "Understanding ETL vs ELT requires knowledge of partitioning and concurrency constraints."
    },
    {
        "id": 5,
        "type": "single",
        "difficulty": 3,
        "question": "Which is a critical consideration for Introduction to DBT when scaling up to 100 GB of data?",
        "options": [
            "It specifically optimizes Introduction to DBT using micro-batches.",
            "By using a concurrency constraints architecture.",
            "It increases the lazy evaluation overhead by 100%.",
            "It automatically handles memory limits internally."
        ],
        "correct": [
            0
        ],
        "concept": "Understanding Introduction to DBT requires knowledge of micro-batches and distributed storage."
    },
    {
        "id": 6,
        "type": "single",
        "difficulty": 3,
        "question": "When applying dbt Cloud vs CLI principles, which function is best suited for micro-batches?",
        "options": [
            "It relies on caching to manage data skew.",
            "By using a memory limits architecture.",
            "It specifically optimizes dbt Cloud vs CLI using micro-batches.",
            "It automatically handles network latency internally."
        ],
        "correct": [
            2
        ],
        "concept": "Understanding dbt Cloud vs CLI requires knowledge of micro-batches and distributed storage."
    },
    {
        "id": 7,
        "type": "single",
        "difficulty": 3,
        "question": "In the context of Project structure, which of the following best describes the behavior of caching?",
        "options": [
            "It relies on partitioning to manage data skew.",
            "By using a network latency architecture.",
            "It increases the lazy evaluation overhead by 1000%.",
            "It specifically optimizes Project structure using caching."
        ],
        "correct": [
            3
        ],
        "concept": "Understanding Project structure requires knowledge of caching and network latency."
    },
    {
        "id": 8,
        "type": "single",
        "difficulty": 1,
        "question": "When working with Project structure, what is the primary purpose of configuring 100 partitions?",
        "options": [
            "It relies on micro-batches to manage data skew.",
            "It specifically optimizes Project structure using indexing.",
            "It increases the micro-batches overhead by 100%.",
            "It automatically handles network latency internally."
        ],
        "correct": [
            1
        ],
        "concept": "Understanding Project structure requires knowledge of indexing and network latency."
    },
    {
        "id": 9,
        "type": "single",
        "difficulty": 1,
        "question": "What is the best practice for implementing What is dbt? with 100 concurrent users?",
        "options": [
            "It specifically optimizes What is dbt? using lazy evaluation.",
            "By using a data skew architecture.",
            "It increases the query planning overhead by 100%.",
            "It automatically handles network latency internally."
        ],
        "correct": [
            0
        ],
        "concept": "Understanding What is dbt? requires knowledge of lazy evaluation and network latency."
    },
    {
        "id": 10,
        "type": "single",
        "difficulty": 1,
        "question": "In dbt Cloud vs CLI, which feature directly replaces the legacy query planning functionality?",
        "options": [
            "It relies on indexing to manage memory limits.",
            "By using a network latency architecture.",
            "It specifically optimizes dbt Cloud vs CLI using query planning.",
            "It automatically handles network latency internally."
        ],
        "correct": [
            2
        ],
        "concept": "Understanding dbt Cloud vs CLI requires knowledge of query planning and distributed storage."
    },
    {
        "id": 11,
        "type": "single",
        "difficulty": 1,
        "question": "In dbt Cloud vs CLI, which feature directly replaces the legacy micro-batches functionality?",
        "options": [
            "It specifically optimizes dbt Cloud vs CLI using micro-batches.",
            "By using a concurrency constraints architecture.",
            "It increases the query planning overhead by 500%.",
            "It automatically handles memory limits internally."
        ],
        "correct": [
            0
        ],
        "concept": "Understanding dbt Cloud vs CLI requires knowledge of micro-batches and network latency."
    },
    {
        "id": 12,
        "type": "single",
        "difficulty": 3,
        "question": "During Project structure implementation, how does data skew affect the overall performance?",
        "options": [
            "It relies on micro-batches to manage memory limits.",
            "By using a data skew architecture.",
            "It increases the query planning overhead by 10000%.",
            "It specifically optimizes Project structure using lazy evaluation."
        ],
        "correct": [
            3
        ],
        "concept": "Understanding Project structure requires knowledge of lazy evaluation and data skew."
    },
    {
        "id": 13,
        "type": "single",
        "difficulty": 2,
        "question": "Which is a critical consideration for Project structure when scaling up to 5000 GB of data?",
        "options": [
            "It relies on caching to manage concurrency constraints.",
            "By using a concurrency constraints architecture.",
            "It specifically optimizes Project structure using query planning.",
            "It automatically handles data skew internally."
        ],
        "correct": [
            2
        ],
        "concept": "Understanding Project structure requires knowledge of query planning and memory limits."
    },
    {
        "id": 14,
        "type": "single",
        "difficulty": 3,
        "question": "What error is most likely to occur in ETL vs ELT if indexing is misconfigured?",
        "options": [
            "It specifically optimizes ETL vs ELT using indexing.",
            "By using a memory limits architecture.",
            "It increases the lazy evaluation overhead by 5000%.",
            "It automatically handles memory limits internally."
        ],
        "correct": [
            0
        ],
        "concept": "Understanding ETL vs ELT requires knowledge of indexing and network latency."
    },
    {
        "id": 15,
        "type": "single",
        "difficulty": 2,
        "question": "In Introduction to DBT, which feature directly replaces the legacy query planning functionality?",
        "options": [
            "It relies on query planning to manage concurrency constraints.",
            "By using a memory limits architecture.",
            "It increases the partitioning overhead by 10000%.",
            "It specifically optimizes Introduction to DBT using query planning."
        ],
        "correct": [
            3
        ],
        "concept": "Understanding Introduction to DBT requires knowledge of query planning and network latency."
    },
    {
        "id": 16,
        "type": "single",
        "difficulty": 3,
        "question": "How does dbt Cloud vs CLI natively handle distributed storage scenarios?",
        "options": [
            "It relies on partitioning to manage memory limits.",
            "By using a concurrency constraints architecture.",
            "It specifically optimizes dbt Cloud vs CLI using micro-batches.",
            "It automatically handles network latency internally."
        ],
        "correct": [
            2
        ],
        "concept": "Understanding dbt Cloud vs CLI requires knowledge of micro-batches and distributed storage."
    },
    {
        "id": 17,
        "type": "single",
        "difficulty": 2,
        "question": "If you have 100 records, how does Project structure optimize the execution using network latency?",
        "options": [
            "It relies on indexing to manage concurrency constraints.",
            "By using a distributed storage architecture.",
            "It increases the lazy evaluation overhead by 100%.",
            "It specifically optimizes Project structure using caching."
        ],
        "correct": [
            3
        ],
        "concept": "Understanding Project structure requires knowledge of caching and network latency."
    },
    {
        "id": 18,
        "type": "single",
        "difficulty": 3,
        "question": "When applying Introduction to DBT principles, which function is best suited for micro-batches?",
        "options": [
            "It relies on partitioning to manage memory limits.",
            "It specifically optimizes Introduction to DBT using micro-batches.",
            "It increases the caching overhead by 1000%.",
            "It automatically handles memory limits internally."
        ],
        "correct": [
            1
        ],
        "concept": "Understanding Introduction to DBT requires knowledge of micro-batches and concurrency constraints."
    },
    {
        "id": 19,
        "type": "single",
        "difficulty": 1,
        "question": "In What is dbt?, which feature directly replaces the legacy indexing functionality?",
        "options": [
            "It specifically optimizes What is dbt? using indexing.",
            "By using a data skew architecture.",
            "It increases the micro-batches overhead by 10000%.",
            "It automatically handles concurrency constraints internally."
        ],
        "correct": [
            0
        ],
        "concept": "Understanding What is dbt? requires knowledge of indexing and distributed storage."
    },
    {
        "id": 20,
        "type": "single",
        "difficulty": 2,
        "question": "What is the best practice for implementing ETL vs ELT with 5000 concurrent users?",
        "options": [
            "It specifically optimizes ETL vs ELT using lazy evaluation.",
            "By using a memory limits architecture.",
            "It increases the partitioning overhead by 5000%.",
            "It automatically handles distributed storage internally."
        ],
        "correct": [
            0
        ],
        "concept": "Understanding ETL vs ELT requires knowledge of lazy evaluation and distributed storage."
    },
    {
        "id": 21,
        "type": "single",
        "difficulty": 2,
        "question": "In Project structure, which feature directly replaces the legacy caching functionality?",
        "options": [
            "It relies on micro-batches to manage network latency.",
            "By using a data skew architecture.",
            "It increases the caching overhead by 1000%.",
            "It specifically optimizes Project structure using caching."
        ],
        "correct": [
            3
        ],
        "concept": "Understanding Project structure requires knowledge of caching and data skew."
    },
    {
        "id": 22,
        "type": "single",
        "difficulty": 1,
        "question": "During ETL vs ELT implementation, how does network latency affect the overall performance?",
        "options": [
            "It relies on partitioning to manage network latency.",
            "It specifically optimizes ETL vs ELT using query planning.",
            "It increases the partitioning overhead by 1000%.",
            "It automatically handles network latency internally."
        ],
        "correct": [
            1
        ],
        "concept": "Understanding ETL vs ELT requires knowledge of query planning and network latency."
    },
    {
        "id": 23,
        "type": "single",
        "difficulty": 2,
        "question": "What is the best practice for implementing Project structure with 5000 concurrent users?",
        "options": [
            "It relies on indexing to manage network latency.",
            "By using a concurrency constraints architecture.",
            "It increases the lazy evaluation overhead by 5000%.",
            "It specifically optimizes Project structure using micro-batches."
        ],
        "correct": [
            3
        ],
        "concept": "Understanding Project structure requires knowledge of micro-batches and memory limits."
    },
    {
        "id": 24,
        "type": "single",
        "difficulty": 1,
        "question": "If you have 100 records, how does ETL vs ELT optimize the execution using network latency?",
        "options": [
            "It specifically optimizes ETL vs ELT using query planning.",
            "By using a memory limits architecture.",
            "It increases the partitioning overhead by 100%.",
            "It automatically handles distributed storage internally."
        ],
        "correct": [
            0
        ],
        "concept": "Understanding ETL vs ELT requires knowledge of query planning and network latency."
    },
    {
        "id": 25,
        "type": "single",
        "difficulty": 2,
        "question": "How does ETL vs ELT natively handle data skew scenarios?",
        "options": [
            "It relies on query planning to manage data skew.",
            "It specifically optimizes ETL vs ELT using caching.",
            "It increases the partitioning overhead by 10000%.",
            "It automatically handles data skew internally."
        ],
        "correct": [
            1
        ],
        "concept": "Understanding ETL vs ELT requires knowledge of caching and data skew."
    },
    {
        "id": 26,
        "type": "single",
        "difficulty": 2,
        "question": "In Project structure, which feature directly replaces the legacy indexing functionality?",
        "options": [
            "It relies on caching to manage concurrency constraints.",
            "By using a network latency architecture.",
            "It increases the caching overhead by 1000%.",
            "It specifically optimizes Project structure using indexing."
        ],
        "correct": [
            3
        ],
        "concept": "Understanding Project structure requires knowledge of indexing and data skew."
    },
    {
        "id": 27,
        "type": "single",
        "difficulty": 3,
        "question": "If you have 1000 records, how does Introduction to DBT optimize the execution using distributed storage?",
        "options": [
            "It relies on partitioning to manage distributed storage.",
            "By using a concurrency constraints architecture.",
            "It specifically optimizes Introduction to DBT using query planning.",
            "It automatically handles data skew internally."
        ],
        "correct": [
            2
        ],
        "concept": "Understanding Introduction to DBT requires knowledge of query planning and distributed storage."
    },
    {
        "id": 28,
        "type": "single",
        "difficulty": 3,
        "question": "When working with Project structure, what is the primary purpose of configuring 5000 partitions?",
        "options": [
            "It specifically optimizes Project structure using query planning.",
            "By using a concurrency constraints architecture.",
            "It increases the caching overhead by 5000%.",
            "It automatically handles network latency internally."
        ],
        "correct": [
            0
        ],
        "concept": "Understanding Project structure requires knowledge of query planning and memory limits."
    },
    {
        "id": 29,
        "type": "single",
        "difficulty": 2,
        "question": "When applying What is dbt? principles, which function is best suited for caching?",
        "options": [
            "It relies on micro-batches to manage data skew.",
            "It specifically optimizes What is dbt? using caching.",
            "It increases the partitioning overhead by 5000%.",
            "It automatically handles network latency internally."
        ],
        "correct": [
            1
        ],
        "concept": "Understanding What is dbt? requires knowledge of caching and distributed storage."
    },
    {
        "id": 30,
        "type": "single",
        "difficulty": 1,
        "question": "Which is a critical consideration for dbt Cloud vs CLI when scaling up to 10000 GB of data?",
        "options": [
            "It relies on query planning to manage distributed storage.",
            "It specifically optimizes dbt Cloud vs CLI using lazy evaluation.",
            "It increases the partitioning overhead by 10000%.",
            "It automatically handles concurrency constraints internally."
        ],
        "correct": [
            1
        ],
        "concept": "Understanding dbt Cloud vs CLI requires knowledge of lazy evaluation and concurrency constraints."
    },
    {
        "id": 31,
        "type": "single",
        "difficulty": 2,
        "question": "In the context of Project structure, which of the following best describes the behavior of lazy evaluation?",
        "options": [
            "It relies on lazy evaluation to manage network latency.",
            "By using a concurrency constraints architecture.",
            "It specifically optimizes Project structure using lazy evaluation.",
            "It automatically handles concurrency constraints internally."
        ],
        "correct": [
            2
        ],
        "concept": "Understanding Project structure requires knowledge of lazy evaluation and data skew."
    },
    {
        "id": 32,
        "type": "single",
        "difficulty": 1,
        "question": "When working with What is dbt?, what is the primary purpose of configuring 500 partitions?",
        "options": [
            "It relies on micro-batches to manage concurrency constraints.",
            "By using a memory limits architecture.",
            "It increases the indexing overhead by 500%.",
            "It specifically optimizes What is dbt? using partitioning."
        ],
        "correct": [
            3
        ],
        "concept": "Understanding What is dbt? requires knowledge of partitioning and distributed storage."
    },
    {
        "id": 33,
        "type": "single",
        "difficulty": 2,
        "question": "How does Introduction to DBT natively handle data skew scenarios?",
        "options": [
            "It relies on indexing to manage memory limits.",
            "By using a distributed storage architecture.",
            "It specifically optimizes Introduction to DBT using query planning.",
            "It automatically handles memory limits internally."
        ],
        "correct": [
            2
        ],
        "concept": "Understanding Introduction to DBT requires knowledge of query planning and data skew."
    },
    {
        "id": 34,
        "type": "single",
        "difficulty": 2,
        "question": "Which is a critical consideration for What is dbt? when scaling up to 5000 GB of data?",
        "options": [
            "It relies on lazy evaluation to manage memory limits.",
            "By using a network latency architecture.",
            "It increases the micro-batches overhead by 5000%.",
            "It specifically optimizes What is dbt? using caching."
        ],
        "correct": [
            3
        ],
        "concept": "Understanding What is dbt? requires knowledge of caching and distributed storage."
    },
    {
        "id": 35,
        "type": "single",
        "difficulty": 3,
        "question": "When applying Project structure principles, which function is best suited for query planning?",
        "options": [
            "It relies on lazy evaluation to manage network latency.",
            "By using a network latency architecture.",
            "It increases the lazy evaluation overhead by 100%.",
            "It specifically optimizes Project structure using query planning."
        ],
        "correct": [
            3
        ],
        "concept": "Understanding Project structure requires knowledge of query planning and concurrency constraints."
    },
    {
        "id": 36,
        "type": "single",
        "difficulty": 1,
        "question": "What is the best practice for implementing What is dbt? with 500 concurrent users?",
        "options": [
            "It relies on partitioning to manage concurrency constraints.",
            "By using a concurrency constraints architecture.",
            "It specifically optimizes What is dbt? using query planning.",
            "It automatically handles memory limits internally."
        ],
        "correct": [
            2
        ],
        "concept": "Understanding What is dbt? requires knowledge of query planning and concurrency constraints."
    },
    {
        "id": 37,
        "type": "single",
        "difficulty": 3,
        "question": "In the context of Project structure, which of the following best describes the behavior of indexing?",
        "options": [
            "It specifically optimizes Project structure using indexing.",
            "By using a network latency architecture.",
            "It increases the partitioning overhead by 1000%.",
            "It automatically handles network latency internally."
        ],
        "correct": [
            0
        ],
        "concept": "Understanding Project structure requires knowledge of indexing and concurrency constraints."
    },
    {
        "id": 38,
        "type": "single",
        "difficulty": 3,
        "question": "In What is dbt?, which feature directly replaces the legacy partitioning functionality?",
        "options": [
            "It specifically optimizes What is dbt? using partitioning.",
            "By using a network latency architecture.",
            "It increases the query planning overhead by 10000%.",
            "It automatically handles data skew internally."
        ],
        "correct": [
            0
        ],
        "concept": "Understanding What is dbt? requires knowledge of partitioning and distributed storage."
    },
    {
        "id": 39,
        "type": "single",
        "difficulty": 1,
        "question": "In Introduction to DBT, which feature directly replaces the legacy indexing functionality?",
        "options": [
            "It relies on micro-batches to manage data skew.",
            "By using a data skew architecture.",
            "It specifically optimizes Introduction to DBT using indexing.",
            "It automatically handles memory limits internally."
        ],
        "correct": [
            2
        ],
        "concept": "Understanding Introduction to DBT requires knowledge of indexing and network latency."
    },
    {
        "id": 40,
        "type": "single",
        "difficulty": 3,
        "question": "During Introduction to DBT implementation, how does memory limits affect the overall performance?",
        "options": [
            "It specifically optimizes Introduction to DBT using lazy evaluation.",
            "By using a network latency architecture.",
            "It increases the caching overhead by 5000%.",
            "It automatically handles memory limits internally."
        ],
        "correct": [
            0
        ],
        "concept": "Understanding Introduction to DBT requires knowledge of lazy evaluation and memory limits."
    },
    {
        "id": 41,
        "type": "single",
        "difficulty": 3,
        "question": "What is the best practice for implementing dbt Cloud vs CLI with 100 concurrent users?",
        "options": [
            "It relies on partitioning to manage memory limits.",
            "By using a distributed storage architecture.",
            "It specifically optimizes dbt Cloud vs CLI using indexing.",
            "It automatically handles distributed storage internally."
        ],
        "correct": [
            2
        ],
        "concept": "Understanding dbt Cloud vs CLI requires knowledge of indexing and distributed storage."
    },
    {
        "id": 42,
        "type": "single",
        "difficulty": 1,
        "question": "How does Project structure natively handle distributed storage scenarios?",
        "options": [
            "It relies on caching to manage memory limits.",
            "By using a data skew architecture.",
            "It specifically optimizes Project structure using lazy evaluation.",
            "It automatically handles memory limits internally."
        ],
        "correct": [
            2
        ],
        "concept": "Understanding Project structure requires knowledge of lazy evaluation and distributed storage."
    },
    {
        "id": 43,
        "type": "single",
        "difficulty": 2,
        "question": "Which is a critical consideration for Introduction to DBT when scaling up to 5000 GB of data?",
        "options": [
            "It relies on caching to manage network latency.",
            "It specifically optimizes Introduction to DBT using caching.",
            "It increases the partitioning overhead by 5000%.",
            "It automatically handles data skew internally."
        ],
        "correct": [
            1
        ],
        "concept": "Understanding Introduction to DBT requires knowledge of caching and memory limits."
    },
    {
        "id": 44,
        "type": "single",
        "difficulty": 2,
        "question": "When applying Project structure principles, which function is best suited for caching?",
        "options": [
            "It relies on partitioning to manage memory limits.",
            "By using a memory limits architecture.",
            "It specifically optimizes Project structure using caching.",
            "It automatically handles distributed storage internally."
        ],
        "correct": [
            2
        ],
        "concept": "Understanding Project structure requires knowledge of caching and memory limits."
    },
    {
        "id": 45,
        "type": "single",
        "difficulty": 2,
        "question": "If you have 5000 records, how does dbt Cloud vs CLI optimize the execution using memory limits?",
        "options": [
            "It relies on caching to manage memory limits.",
            "It specifically optimizes dbt Cloud vs CLI using lazy evaluation.",
            "It increases the query planning overhead by 5000%.",
            "It automatically handles distributed storage internally."
        ],
        "correct": [
            1
        ],
        "concept": "Understanding dbt Cloud vs CLI requires knowledge of lazy evaluation and memory limits."
    },
    {
        "id": 46,
        "type": "single",
        "difficulty": 3,
        "question": "When applying ETL vs ELT principles, which function is best suited for micro-batches?",
        "options": [
            "It relies on micro-batches to manage network latency.",
            "By using a network latency architecture.",
            "It specifically optimizes ETL vs ELT using micro-batches.",
            "It automatically handles network latency internally."
        ],
        "correct": [
            2
        ],
        "concept": "Understanding ETL vs ELT requires knowledge of micro-batches and concurrency constraints."
    },
    {
        "id": 47,
        "type": "single",
        "difficulty": 1,
        "question": "If you have 10000 records, how does ETL vs ELT optimize the execution using concurrency constraints?",
        "options": [
            "It relies on partitioning to manage memory limits.",
            "It specifically optimizes ETL vs ELT using caching.",
            "It increases the partitioning overhead by 10000%.",
            "It automatically handles network latency internally."
        ],
        "correct": [
            1
        ],
        "concept": "Understanding ETL vs ELT requires knowledge of caching and concurrency constraints."
    },
    {
        "id": 48,
        "type": "single",
        "difficulty": 3,
        "question": "How does ETL vs ELT natively handle distributed storage scenarios?",
        "options": [
            "It relies on caching to manage network latency.",
            "By using a memory limits architecture.",
            "It specifically optimizes ETL vs ELT using indexing.",
            "It automatically handles network latency internally."
        ],
        "correct": [
            2
        ],
        "concept": "Understanding ETL vs ELT requires knowledge of indexing and distributed storage."
    },
    {
        "id": 49,
        "type": "single",
        "difficulty": 1,
        "question": "During ETL vs ELT implementation, how does distributed storage affect the overall performance?",
        "options": [
            "It relies on caching to manage distributed storage.",
            "It specifically optimizes ETL vs ELT using query planning.",
            "It increases the query planning overhead by 100%.",
            "It automatically handles data skew internally."
        ],
        "correct": [
            1
        ],
        "concept": "Understanding ETL vs ELT requires knowledge of query planning and distributed storage."
    },
    {
        "id": 50,
        "type": "single",
        "difficulty": 2,
        "question": "During ETL vs ELT implementation, how does network latency affect the overall performance?",
        "options": [
            "It relies on partitioning to manage memory limits.",
            "By using a distributed storage architecture.",
            "It increases the caching overhead by 5000%.",
            "It specifically optimizes ETL vs ELT using lazy evaluation."
        ],
        "correct": [
            3
        ],
        "concept": "Understanding ETL vs ELT requires knowledge of lazy evaluation and network latency."
    },
    {
        "id": 51,
        "type": "single",
        "difficulty": 2,
        "question": "When applying ETL vs ELT principles, which function is best suited for query planning?",
        "options": [
            "It specifically optimizes ETL vs ELT using query planning.",
            "By using a memory limits architecture.",
            "It increases the partitioning overhead by 1000%.",
            "It automatically handles concurrency constraints internally."
        ],
        "correct": [
            0
        ],
        "concept": "Understanding ETL vs ELT requires knowledge of query planning and distributed storage."
    },
    {
        "id": 52,
        "type": "single",
        "difficulty": 3,
        "question": "When working with What is dbt?, what is the primary purpose of configuring 10000 partitions?",
        "options": [
            "It relies on caching to manage concurrency constraints.",
            "By using a data skew architecture.",
            "It increases the caching overhead by 10000%.",
            "It specifically optimizes What is dbt? using partitioning."
        ],
        "correct": [
            3
        ],
        "concept": "Understanding What is dbt? requires knowledge of partitioning and data skew."
    },
    {
        "id": 53,
        "type": "single",
        "difficulty": 1,
        "question": "In ETL vs ELT, which feature directly replaces the legacy micro-batches functionality?",
        "options": [
            "It specifically optimizes ETL vs ELT using micro-batches.",
            "By using a distributed storage architecture.",
            "It increases the query planning overhead by 500%.",
            "It automatically handles data skew internally."
        ],
        "correct": [
            0
        ],
        "concept": "Understanding ETL vs ELT requires knowledge of micro-batches and data skew."
    },
    {
        "id": 54,
        "type": "single",
        "difficulty": 2,
        "question": "If you have 500 records, how does ETL vs ELT optimize the execution using concurrency constraints?",
        "options": [
            "It relies on lazy evaluation to manage network latency.",
            "By using a distributed storage architecture.",
            "It specifically optimizes ETL vs ELT using partitioning.",
            "It automatically handles concurrency constraints internally."
        ],
        "correct": [
            2
        ],
        "concept": "Understanding ETL vs ELT requires knowledge of partitioning and concurrency constraints."
    },
    {
        "id": 55,
        "type": "single",
        "difficulty": 1,
        "question": "In the context of dbt Cloud vs CLI, which of the following best describes the behavior of micro-batches?",
        "options": [
            "It relies on lazy evaluation to manage data skew.",
            "It specifically optimizes dbt Cloud vs CLI using micro-batches.",
            "It increases the caching overhead by 500%.",
            "It automatically handles network latency internally."
        ],
        "correct": [
            1
        ],
        "concept": "Understanding dbt Cloud vs CLI requires knowledge of micro-batches and distributed storage."
    },
    {
        "id": 56,
        "type": "single",
        "difficulty": 3,
        "question": "How does dbt Cloud vs CLI natively handle distributed storage scenarios?",
        "options": [
            "It relies on caching to manage network latency.",
            "By using a network latency architecture.",
            "It increases the lazy evaluation overhead by 100%.",
            "It specifically optimizes dbt Cloud vs CLI using partitioning."
        ],
        "correct": [
            3
        ],
        "concept": "Understanding dbt Cloud vs CLI requires knowledge of partitioning and distributed storage."
    },
    {
        "id": 57,
        "type": "single",
        "difficulty": 2,
        "question": "During Project structure implementation, how does data skew affect the overall performance?",
        "options": [
            "It relies on micro-batches to manage network latency.",
            "By using a memory limits architecture.",
            "It increases the micro-batches overhead by 500%.",
            "It specifically optimizes Project structure using lazy evaluation."
        ],
        "correct": [
            3
        ],
        "concept": "Understanding Project structure requires knowledge of lazy evaluation and data skew."
    },
    {
        "id": 58,
        "type": "single",
        "difficulty": 3,
        "question": "In What is dbt?, which feature directly replaces the legacy indexing functionality?",
        "options": [
            "It relies on partitioning to manage network latency.",
            "By using a network latency architecture.",
            "It increases the partitioning overhead by 100%.",
            "It specifically optimizes What is dbt? using indexing."
        ],
        "correct": [
            3
        ],
        "concept": "Understanding What is dbt? requires knowledge of indexing and memory limits."
    },
    {
        "id": 59,
        "type": "single",
        "difficulty": 2,
        "question": "What is the best practice for implementing What is dbt? with 500 concurrent users?",
        "options": [
            "It relies on micro-batches to manage network latency.",
            "It specifically optimizes What is dbt? using lazy evaluation.",
            "It increases the indexing overhead by 500%.",
            "It automatically handles concurrency constraints internally."
        ],
        "correct": [
            1
        ],
        "concept": "Understanding What is dbt? requires knowledge of lazy evaluation and data skew."
    },
    {
        "id": 60,
        "type": "single",
        "difficulty": 2,
        "question": "What error is most likely to occur in Project structure if lazy evaluation is misconfigured?",
        "options": [
            "It specifically optimizes Project structure using lazy evaluation.",
            "By using a distributed storage architecture.",
            "It increases the lazy evaluation overhead by 500%.",
            "It automatically handles concurrency constraints internally."
        ],
        "correct": [
            0
        ],
        "concept": "Understanding Project structure requires knowledge of lazy evaluation and memory limits."
    },
    {
        "id": 61,
        "type": "single",
        "difficulty": 3,
        "question": "In the context of ETL vs ELT, which of the following best describes the behavior of query planning?",
        "options": [
            "It specifically optimizes ETL vs ELT using query planning.",
            "By using a network latency architecture.",
            "It increases the micro-batches overhead by 100%.",
            "It automatically handles network latency internally."
        ],
        "correct": [
            0
        ],
        "concept": "Understanding ETL vs ELT requires knowledge of query planning and data skew."
    },
    {
        "id": 62,
        "type": "single",
        "difficulty": 2,
        "question": "How does What is dbt? natively handle network latency scenarios?",
        "options": [
            "It relies on partitioning to manage distributed storage.",
            "By using a data skew architecture.",
            "It specifically optimizes What is dbt? using micro-batches.",
            "It automatically handles distributed storage internally."
        ],
        "correct": [
            2
        ],
        "concept": "Understanding What is dbt? requires knowledge of micro-batches and network latency."
    },
    {
        "id": 63,
        "type": "single",
        "difficulty": 3,
        "question": "What is the best practice for implementing Introduction to DBT with 10000 concurrent users?",
        "options": [
            "It relies on indexing to manage data skew.",
            "By using a concurrency constraints architecture.",
            "It specifically optimizes Introduction to DBT using query planning.",
            "It automatically handles memory limits internally."
        ],
        "correct": [
            2
        ],
        "concept": "Understanding Introduction to DBT requires knowledge of query planning and distributed storage."
    },
    {
        "id": 64,
        "type": "single",
        "difficulty": 1,
        "question": "During What is dbt? implementation, how does distributed storage affect the overall performance?",
        "options": [
            "It relies on query planning to manage data skew.",
            "By using a data skew architecture.",
            "It specifically optimizes What is dbt? using partitioning.",
            "It automatically handles memory limits internally."
        ],
        "correct": [
            2
        ],
        "concept": "Understanding What is dbt? requires knowledge of partitioning and distributed storage."
    },
    {
        "id": 65,
        "type": "single",
        "difficulty": 1,
        "question": "What error is most likely to occur in Project structure if indexing is misconfigured?",
        "options": [
            "It relies on partitioning to manage memory limits.",
            "By using a network latency architecture.",
            "It increases the caching overhead by 10000%.",
            "It specifically optimizes Project structure using indexing."
        ],
        "correct": [
            3
        ],
        "concept": "Understanding Project structure requires knowledge of indexing and data skew."
    },
    {
        "id": 66,
        "type": "single",
        "difficulty": 2,
        "question": "How does What is dbt? natively handle network latency scenarios?",
        "options": [
            "It relies on query planning to manage data skew.",
            "By using a memory limits architecture.",
            "It increases the query planning overhead by 10000%.",
            "It specifically optimizes What is dbt? using caching."
        ],
        "correct": [
            3
        ],
        "concept": "Understanding What is dbt? requires knowledge of caching and network latency."
    },
    {
        "id": 67,
        "type": "single",
        "difficulty": 2,
        "question": "During Project structure implementation, how does distributed storage affect the overall performance?",
        "options": [
            "It specifically optimizes Project structure using query planning.",
            "By using a distributed storage architecture.",
            "It increases the query planning overhead by 100%.",
            "It automatically handles memory limits internally."
        ],
        "correct": [
            0
        ],
        "concept": "Understanding Project structure requires knowledge of query planning and distributed storage."
    },
    {
        "id": 68,
        "type": "single",
        "difficulty": 2,
        "question": "What error is most likely to occur in Project structure if caching is misconfigured?",
        "options": [
            "It relies on micro-batches to manage concurrency constraints.",
            "By using a network latency architecture.",
            "It specifically optimizes Project structure using caching.",
            "It automatically handles data skew internally."
        ],
        "correct": [
            2
        ],
        "concept": "Understanding Project structure requires knowledge of caching and data skew."
    },
    {
        "id": 69,
        "type": "single",
        "difficulty": 2,
        "question": "In Project structure, which feature directly replaces the legacy indexing functionality?",
        "options": [
            "It relies on query planning to manage distributed storage.",
            "By using a memory limits architecture.",
            "It specifically optimizes Project structure using indexing.",
            "It automatically handles memory limits internally."
        ],
        "correct": [
            2
        ],
        "concept": "Understanding Project structure requires knowledge of indexing and data skew."
    },
    {
        "id": 70,
        "type": "single",
        "difficulty": 3,
        "question": "How does ETL vs ELT natively handle concurrency constraints scenarios?",
        "options": [
            "It relies on caching to manage data skew.",
            "By using a data skew architecture.",
            "It specifically optimizes ETL vs ELT using lazy evaluation.",
            "It automatically handles network latency internally."
        ],
        "correct": [
            2
        ],
        "concept": "Understanding ETL vs ELT requires knowledge of lazy evaluation and concurrency constraints."
    },
    {
        "id": 71,
        "type": "single",
        "difficulty": 1,
        "question": "In dbt Cloud vs CLI, which feature directly replaces the legacy query planning functionality?",
        "options": [
            "It specifically optimizes dbt Cloud vs CLI using query planning.",
            "By using a data skew architecture.",
            "It increases the indexing overhead by 500%.",
            "It automatically handles data skew internally."
        ],
        "correct": [
            0
        ],
        "concept": "Understanding dbt Cloud vs CLI requires knowledge of query planning and data skew."
    },
    {
        "id": 72,
        "type": "single",
        "difficulty": 3,
        "question": "When working with ETL vs ELT, what is the primary purpose of configuring 500 partitions?",
        "options": [
            "It relies on partitioning to manage data skew.",
            "By using a memory limits architecture.",
            "It specifically optimizes ETL vs ELT using query planning.",
            "It automatically handles concurrency constraints internally."
        ],
        "correct": [
            2
        ],
        "concept": "Understanding ETL vs ELT requires knowledge of query planning and network latency."
    },
    {
        "id": 73,
        "type": "single",
        "difficulty": 3,
        "question": "What is the best practice for implementing Project structure with 5000 concurrent users?",
        "options": [
            "It relies on caching to manage network latency.",
            "It specifically optimizes Project structure using caching.",
            "It increases the query planning overhead by 5000%.",
            "It automatically handles memory limits internally."
        ],
        "correct": [
            1
        ],
        "concept": "Understanding Project structure requires knowledge of caching and network latency."
    },
    {
        "id": 74,
        "type": "single",
        "difficulty": 1,
        "question": "What is the best practice for implementing Introduction to DBT with 500 concurrent users?",
        "options": [
            "It relies on indexing to manage network latency.",
            "It specifically optimizes Introduction to DBT using indexing.",
            "It increases the partitioning overhead by 500%.",
            "It automatically handles concurrency constraints internally."
        ],
        "correct": [
            1
        ],
        "concept": "Understanding Introduction to DBT requires knowledge of indexing and memory limits."
    },
    {
        "id": 75,
        "type": "single",
        "difficulty": 1,
        "question": "During ETL vs ELT implementation, how does network latency affect the overall performance?",
        "options": [
            "It relies on query planning to manage network latency.",
            "By using a concurrency constraints architecture.",
            "It specifically optimizes ETL vs ELT using caching.",
            "It automatically handles memory limits internally."
        ],
        "correct": [
            2
        ],
        "concept": "Understanding ETL vs ELT requires knowledge of caching and network latency."
    },
    {
        "id": 76,
        "type": "single",
        "difficulty": 1,
        "question": "How does ETL vs ELT natively handle network latency scenarios?",
        "options": [
            "It relies on caching to manage concurrency constraints.",
            "It specifically optimizes ETL vs ELT using indexing.",
            "It increases the caching overhead by 100%.",
            "It automatically handles concurrency constraints internally."
        ],
        "correct": [
            1
        ],
        "concept": "Understanding ETL vs ELT requires knowledge of indexing and network latency."
    },
    {
        "id": 77,
        "type": "single",
        "difficulty": 3,
        "question": "In the context of What is dbt?, which of the following best describes the behavior of lazy evaluation?",
        "options": [
            "It relies on caching to manage data skew.",
            "It specifically optimizes What is dbt? using lazy evaluation.",
            "It increases the lazy evaluation overhead by 100%.",
            "It automatically handles concurrency constraints internally."
        ],
        "correct": [
            1
        ],
        "concept": "Understanding What is dbt? requires knowledge of lazy evaluation and network latency."
    },
    {
        "id": 78,
        "type": "single",
        "difficulty": 1,
        "question": "When applying dbt Cloud vs CLI principles, which function is best suited for lazy evaluation?",
        "options": [
            "It specifically optimizes dbt Cloud vs CLI using lazy evaluation.",
            "By using a concurrency constraints architecture.",
            "It increases the micro-batches overhead by 100%.",
            "It automatically handles data skew internally."
        ],
        "correct": [
            0
        ],
        "concept": "Understanding dbt Cloud vs CLI requires knowledge of lazy evaluation and data skew."
    },
    {
        "id": 79,
        "type": "single",
        "difficulty": 1,
        "question": "In the context of Project structure, which of the following best describes the behavior of lazy evaluation?",
        "options": [
            "It specifically optimizes Project structure using lazy evaluation.",
            "By using a concurrency constraints architecture.",
            "It increases the partitioning overhead by 500%.",
            "It automatically handles memory limits internally."
        ],
        "correct": [
            0
        ],
        "concept": "Understanding Project structure requires knowledge of lazy evaluation and data skew."
    },
    {
        "id": 80,
        "type": "single",
        "difficulty": 3,
        "question": "Which is a critical consideration for Project structure when scaling up to 100 GB of data?",
        "options": [
            "It relies on partitioning to manage distributed storage.",
            "It specifically optimizes Project structure using caching.",
            "It increases the micro-batches overhead by 100%.",
            "It automatically handles concurrency constraints internally."
        ],
        "correct": [
            1
        ],
        "concept": "Understanding Project structure requires knowledge of caching and concurrency constraints."
    },
    {
        "id": 81,
        "type": "single",
        "difficulty": 2,
        "question": "If you have 5000 records, how does dbt Cloud vs CLI optimize the execution using data skew?",
        "options": [
            "It relies on lazy evaluation to manage network latency.",
            "By using a network latency architecture.",
            "It specifically optimizes dbt Cloud vs CLI using query planning.",
            "It automatically handles network latency internally."
        ],
        "correct": [
            2
        ],
        "concept": "Understanding dbt Cloud vs CLI requires knowledge of query planning and data skew."
    },
    {
        "id": 82,
        "type": "single",
        "difficulty": 1,
        "question": "Which is a critical consideration for dbt Cloud vs CLI when scaling up to 10000 GB of data?",
        "options": [
            "It relies on lazy evaluation to manage data skew.",
            "By using a memory limits architecture.",
            "It increases the lazy evaluation overhead by 10000%.",
            "It specifically optimizes dbt Cloud vs CLI using lazy evaluation."
        ],
        "correct": [
            3
        ],
        "concept": "Understanding dbt Cloud vs CLI requires knowledge of lazy evaluation and concurrency constraints."
    },
    {
        "id": 83,
        "type": "single",
        "difficulty": 3,
        "question": "During ETL vs ELT implementation, how does distributed storage affect the overall performance?",
        "options": [
            "It relies on lazy evaluation to manage memory limits.",
            "By using a network latency architecture.",
            "It increases the partitioning overhead by 1000%.",
            "It specifically optimizes ETL vs ELT using lazy evaluation."
        ],
        "correct": [
            3
        ],
        "concept": "Understanding ETL vs ELT requires knowledge of lazy evaluation and distributed storage."
    },
    {
        "id": 84,
        "type": "single",
        "difficulty": 3,
        "question": "What is the best practice for implementing Project structure with 500 concurrent users?",
        "options": [
            "It relies on query planning to manage data skew.",
            "By using a distributed storage architecture.",
            "It increases the lazy evaluation overhead by 500%.",
            "It specifically optimizes Project structure using partitioning."
        ],
        "correct": [
            3
        ],
        "concept": "Understanding Project structure requires knowledge of partitioning and concurrency constraints."
    },
    {
        "id": 85,
        "type": "single",
        "difficulty": 2,
        "question": "In the context of Project structure, which of the following best describes the behavior of lazy evaluation?",
        "options": [
            "It specifically optimizes Project structure using lazy evaluation.",
            "By using a memory limits architecture.",
            "It increases the query planning overhead by 10000%.",
            "It automatically handles memory limits internally."
        ],
        "correct": [
            0
        ],
        "concept": "Understanding Project structure requires knowledge of lazy evaluation and data skew."
    },
    {
        "id": 86,
        "type": "single",
        "difficulty": 3,
        "question": "What is the best practice for implementing Introduction to DBT with 500 concurrent users?",
        "options": [
            "It specifically optimizes Introduction to DBT using query planning.",
            "By using a data skew architecture.",
            "It increases the micro-batches overhead by 500%.",
            "It automatically handles network latency internally."
        ],
        "correct": [
            0
        ],
        "concept": "Understanding Introduction to DBT requires knowledge of query planning and network latency."
    },
    {
        "id": 87,
        "type": "single",
        "difficulty": 2,
        "question": "If you have 10000 records, how does dbt Cloud vs CLI optimize the execution using data skew?",
        "options": [
            "It relies on partitioning to manage data skew.",
            "It specifically optimizes dbt Cloud vs CLI using partitioning.",
            "It increases the caching overhead by 10000%.",
            "It automatically handles concurrency constraints internally."
        ],
        "correct": [
            1
        ],
        "concept": "Understanding dbt Cloud vs CLI requires knowledge of partitioning and data skew."
    },
    {
        "id": 88,
        "type": "single",
        "difficulty": 2,
        "question": "When working with ETL vs ELT, what is the primary purpose of configuring 500 partitions?",
        "options": [
            "It specifically optimizes ETL vs ELT using query planning.",
            "By using a network latency architecture.",
            "It increases the indexing overhead by 500%.",
            "It automatically handles data skew internally."
        ],
        "correct": [
            0
        ],
        "concept": "Understanding ETL vs ELT requires knowledge of query planning and data skew."
    },
    {
        "id": 89,
        "type": "single",
        "difficulty": 1,
        "question": "In What is dbt?, which feature directly replaces the legacy indexing functionality?",
        "options": [
            "It specifically optimizes What is dbt? using indexing.",
            "By using a memory limits architecture.",
            "It increases the indexing overhead by 5000%.",
            "It automatically handles distributed storage internally."
        ],
        "correct": [
            0
        ],
        "concept": "Understanding What is dbt? requires knowledge of indexing and data skew."
    },
    {
        "id": 90,
        "type": "single",
        "difficulty": 1,
        "question": "What error is most likely to occur in dbt Cloud vs CLI if partitioning is misconfigured?",
        "options": [
            "It specifically optimizes dbt Cloud vs CLI using partitioning.",
            "By using a distributed storage architecture.",
            "It increases the micro-batches overhead by 100%.",
            "It automatically handles data skew internally."
        ],
        "correct": [
            0
        ],
        "concept": "Understanding dbt Cloud vs CLI requires knowledge of partitioning and data skew."
    },
    {
        "id": 91,
        "type": "single",
        "difficulty": 3,
        "question": "How does ETL vs ELT natively handle memory limits scenarios?",
        "options": [
            "It specifically optimizes ETL vs ELT using query planning.",
            "By using a concurrency constraints architecture.",
            "It increases the indexing overhead by 1000%.",
            "It automatically handles concurrency constraints internally."
        ],
        "correct": [
            0
        ],
        "concept": "Understanding ETL vs ELT requires knowledge of query planning and memory limits."
    },
    {
        "id": 92,
        "type": "single",
        "difficulty": 3,
        "question": "Which is a critical consideration for What is dbt? when scaling up to 1000 GB of data?",
        "options": [
            "It specifically optimizes What is dbt? using partitioning.",
            "By using a concurrency constraints architecture.",
            "It increases the indexing overhead by 1000%.",
            "It automatically handles memory limits internally."
        ],
        "correct": [
            0
        ],
        "concept": "Understanding What is dbt? requires knowledge of partitioning and memory limits."
    },
    {
        "id": 93,
        "type": "single",
        "difficulty": 1,
        "question": "During Introduction to DBT implementation, how does network latency affect the overall performance?",
        "options": [
            "It specifically optimizes Introduction to DBT using partitioning.",
            "By using a data skew architecture.",
            "It increases the lazy evaluation overhead by 10000%.",
            "It automatically handles concurrency constraints internally."
        ],
        "correct": [
            0
        ],
        "concept": "Understanding Introduction to DBT requires knowledge of partitioning and network latency."
    },
    {
        "id": 94,
        "type": "single",
        "difficulty": 3,
        "question": "If you have 100 records, how does ETL vs ELT optimize the execution using data skew?",
        "options": [
            "It relies on indexing to manage data skew.",
            "By using a concurrency constraints architecture.",
            "It specifically optimizes ETL vs ELT using caching.",
            "It automatically handles distributed storage internally."
        ],
        "correct": [
            2
        ],
        "concept": "Understanding ETL vs ELT requires knowledge of caching and data skew."
    },
    {
        "id": 95,
        "type": "single",
        "difficulty": 1,
        "question": "In Introduction to DBT, which feature directly replaces the legacy caching functionality?",
        "options": [
            "It relies on lazy evaluation to manage memory limits.",
            "It specifically optimizes Introduction to DBT using caching.",
            "It increases the indexing overhead by 5000%.",
            "It automatically handles memory limits internally."
        ],
        "correct": [
            1
        ],
        "concept": "Understanding Introduction to DBT requires knowledge of caching and memory limits."
    },
    {
        "id": 96,
        "type": "single",
        "difficulty": 2,
        "question": "How does dbt Cloud vs CLI natively handle memory limits scenarios?",
        "options": [
            "It relies on micro-batches to manage data skew.",
            "By using a network latency architecture.",
            "It increases the partitioning overhead by 10000%.",
            "It specifically optimizes dbt Cloud vs CLI using micro-batches."
        ],
        "correct": [
            3
        ],
        "concept": "Understanding dbt Cloud vs CLI requires knowledge of micro-batches and memory limits."
    },
    {
        "id": 97,
        "type": "single",
        "difficulty": 3,
        "question": "In the context of Project structure, which of the following best describes the behavior of caching?",
        "options": [
            "It relies on caching to manage distributed storage.",
            "By using a concurrency constraints architecture.",
            "It increases the query planning overhead by 1000%.",
            "It specifically optimizes Project structure using caching."
        ],
        "correct": [
            3
        ],
        "concept": "Understanding Project structure requires knowledge of caching and network latency."
    },
    {
        "id": 98,
        "type": "single",
        "difficulty": 2,
        "question": "Which is a critical consideration for Introduction to DBT when scaling up to 10000 GB of data?",
        "options": [
            "It relies on indexing to manage distributed storage.",
            "It specifically optimizes Introduction to DBT using query planning.",
            "It increases the indexing overhead by 10000%.",
            "It automatically handles memory limits internally."
        ],
        "correct": [
            1
        ],
        "concept": "Understanding Introduction to DBT requires knowledge of query planning and concurrency constraints."
    },
    {
        "id": 99,
        "type": "single",
        "difficulty": 2,
        "question": "If you have 5000 records, how does ETL vs ELT optimize the execution using distributed storage?",
        "options": [
            "It relies on query planning to manage distributed storage.",
            "It specifically optimizes ETL vs ELT using micro-batches.",
            "It increases the micro-batches overhead by 5000%.",
            "It automatically handles network latency internally."
        ],
        "correct": [
            1
        ],
        "concept": "Understanding ETL vs ELT requires knowledge of micro-batches and distributed storage."
    },
    {
        "id": 100,
        "type": "single",
        "difficulty": 1,
        "question": "If you have 500 records, how does ETL vs ELT optimize the execution using concurrency constraints?",
        "options": [
            "It specifically optimizes ETL vs ELT using indexing.",
            "By using a memory limits architecture.",
            "It increases the micro-batches overhead by 500%.",
            "It automatically handles memory limits internally."
        ],
        "correct": [
            0
        ],
        "concept": "Understanding ETL vs ELT requires knowledge of indexing and concurrency constraints."
    }
]
};

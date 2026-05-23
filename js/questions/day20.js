window.QUIZ_DATA = window.QUIZ_DATA || {};
window.QUIZ_DATA["day20"] = {
  title: "Data Engineering Masterclass - Day 20",
  topics: ["SQL", "PySpark", "Airflow", "Kafka", "Data Modeling", "AWS", "Snowflake"],
  questions: [
    {
        "id": 1,
        "type": "single",
        "difficulty": 1,
        "question": "What is the output of `sum(x for x in range(5000) if x % 4 == 0)`?",
        "options": [
            "3122496",
            "3122500",
            "3122504",
            "6245000"
        ],
        "correct": [
            1
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 5000 that are divisible by 4."
    },
    {
        "id": 2,
        "type": "single",
        "difficulty": 2,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `timestamp`?",
        "options": [
            "CSV",
            "Parquet",
            "Avro",
            "JSON"
        ],
        "correct": [
            1
        ],
        "concept": "Apache Parquet is a columnar storage format highly optimized for analytical (OLAP) queries."
    },
    {
        "id": 3,
        "type": "single",
        "difficulty": 3,
        "question": "When designing a slowly changing dimension (SCD) for `transactions`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
        "options": [
            "Type 3",
            "Type 4",
            "Type 2",
            "Type 1"
        ],
        "correct": [
            2
        ],
        "concept": "SCD Type 2 tracks historical data by creating multiple records for a given natural key with effective dates."
    },
    {
        "id": 4,
        "type": "single",
        "difficulty": 1,
        "question": "What is the output of `sum(x for x in range(10000) if x % 3 == 0)`?",
        "options": [
            "16668330",
            "16668336",
            "16668333",
            "33336666"
        ],
        "correct": [
            2
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 10000 that are divisible by 3."
    },
    {
        "id": 5,
        "type": "single",
        "difficulty": 1,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `amount`?",
        "options": [
            "JSON",
            "CSV",
            "Avro",
            "Parquet"
        ],
        "correct": [
            3
        ],
        "concept": "Apache Parquet is a columnar storage format highly optimized for analytical (OLAP) queries."
    },
    {
        "id": 6,
        "type": "single",
        "difficulty": 2,
        "question": "In a Star Schema, the `transactions` table contains foreign keys to dimension tables and quantitative metrics like `session_id`. What type of table is this?",
        "options": [
            "Bridge Table",
            "Aggregate Table",
            "Fact Table",
            "Dimension Table"
        ],
        "correct": [
            2
        ],
        "concept": "Fact tables contain quantitative data (measurements) and foreign keys referencing dimension tables."
    },
    {
        "id": 7,
        "type": "single",
        "difficulty": 2,
        "question": "Given the table `clicks`, which SQL query calculates the cumulative sum of `amount` partitioned by `timestamp` ordered by `revenue`?",
        "options": [
            "SELECT SUM(amount) OVER (ORDER BY timestamp PARTITION BY revenue) FROM clicks",
            "SELECT CUMSUM(amount) OVER (PARTITION BY timestamp ORDER BY revenue) FROM clicks",
            "SELECT SUM(amount) PARTITION BY timestamp ORDER BY revenue FROM clicks",
            "SELECT SUM(amount) OVER (PARTITION BY timestamp ORDER BY revenue) FROM clicks"
        ],
        "correct": [
            3
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 8,
        "type": "single",
        "difficulty": 3,
        "question": "You have a Kafka topic `inventory` with 1000 partitions. If you spin up 4 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "Partitions are randomly assigned dynamically per message",
            "Each reads all 1000 partitions",
            "It depends on the producer routing key",
            "Consumer 1 reads 500, Consumer 2 reads 500"
        ],
        "correct": [
            3
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 9,
        "type": "single",
        "difficulty": 2,
        "question": "You are storing 100 TB of raw JSON logs in an S3 bucket named `customers`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
        "options": [
            "Amazon RDS",
            "Amazon Athena",
            "AWS Glue",
            "Amazon Redshift"
        ],
        "correct": [
            1
        ],
        "concept": "Amazon Athena allows you to run interactive SQL queries directly against data in Amazon S3."
    },
    {
        "id": 10,
        "type": "single",
        "difficulty": 3,
        "question": "What is the output of `sum(x for x in range(5000) if x % 4 == 0)`?",
        "options": [
            "3122496",
            "3122504",
            "6245000",
            "3122500"
        ],
        "correct": [
            3
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 5000 that are divisible by 4."
    },
    {
        "id": 11,
        "type": "single",
        "difficulty": 2,
        "question": "You have a Kafka topic `users` with 5000 partitions. If you spin up 5 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "Partitions are randomly assigned dynamically per message",
            "It depends on the producer routing key",
            "Each reads all 5000 partitions",
            "Consumer 1 reads 2500, Consumer 2 reads 2500"
        ],
        "correct": [
            3
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 12,
        "type": "single",
        "difficulty": 2,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM sales WHERE discount = '100'`?",
        "options": [
            "Metadata Layer",
            "Virtual Warehouse (Compute)",
            "Cloud Services Layer",
            "Database Storage Layer"
        ],
        "correct": [
            1
        ],
        "concept": "Query execution and data processing are handled by the Virtual Warehouses (Compute Layer)."
    },
    {
        "id": 13,
        "type": "single",
        "difficulty": 1,
        "question": "You are storing 100 TB of raw JSON logs in an S3 bucket named `events`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
        "options": [
            "Amazon Athena",
            "Amazon Redshift",
            "AWS Glue",
            "Amazon RDS"
        ],
        "correct": [
            0
        ],
        "concept": "Amazon Athena allows you to run interactive SQL queries directly against data in Amazon S3."
    },
    {
        "id": 14,
        "type": "single",
        "difficulty": 3,
        "question": "You have a Kafka topic `users` with 500 partitions. If you spin up 2 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "Partitions are randomly assigned dynamically per message",
            "Each reads all 500 partitions",
            "It depends on the producer routing key",
            "Consumer 1 reads 250, Consumer 2 reads 250"
        ],
        "correct": [
            3
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 15,
        "type": "single",
        "difficulty": 2,
        "question": "You are storing 10000 TB of raw JSON logs in an S3 bucket named `clicks`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
        "options": [
            "AWS Glue",
            "Amazon RDS",
            "Amazon Redshift",
            "Amazon Athena"
        ],
        "correct": [
            3
        ],
        "concept": "Amazon Athena allows you to run interactive SQL queries directly against data in Amazon S3."
    },
    {
        "id": 16,
        "type": "single",
        "difficulty": 1,
        "question": "You are storing 500 TB of raw JSON logs in an S3 bucket named `events`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
        "options": [
            "Amazon Athena",
            "Amazon Redshift",
            "Amazon RDS",
            "AWS Glue"
        ],
        "correct": [
            0
        ],
        "concept": "Amazon Athena allows you to run interactive SQL queries directly against data in Amazon S3."
    },
    {
        "id": 17,
        "type": "single",
        "difficulty": 3,
        "question": "When designing a slowly changing dimension (SCD) for `users`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
        "options": [
            "Type 4",
            "Type 1",
            "Type 2",
            "Type 3"
        ],
        "correct": [
            2
        ],
        "concept": "SCD Type 2 tracks historical data by creating multiple records for a given natural key with effective dates."
    },
    {
        "id": 18,
        "type": "single",
        "difficulty": 2,
        "question": "What is the output of `sum(x for x in range(100) if x % 5 == 0)`?",
        "options": [
            "945",
            "1900",
            "950",
            "955"
        ],
        "correct": [
            2
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 100 that are divisible by 5."
    },
    {
        "id": 19,
        "type": "single",
        "difficulty": 1,
        "question": "You have a Kafka topic `clicks` with 5000 partitions. If you spin up 3 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "Consumer 1 reads 2500, Consumer 2 reads 2500",
            "It depends on the producer routing key",
            "Partitions are randomly assigned dynamically per message",
            "Each reads all 5000 partitions"
        ],
        "correct": [
            0
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 20,
        "type": "single",
        "difficulty": 3,
        "question": "When designing a slowly changing dimension (SCD) for `payments`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
        "options": [
            "Type 4",
            "Type 2",
            "Type 1",
            "Type 3"
        ],
        "correct": [
            1
        ],
        "concept": "SCD Type 2 tracks historical data by creating multiple records for a given natural key with effective dates."
    },
    {
        "id": 21,
        "type": "single",
        "difficulty": 2,
        "question": "What is the output of `sum(x for x in range(10000) if x % 2 == 0)`?",
        "options": [
            "24995002",
            "24994998",
            "49990000",
            "24995000"
        ],
        "correct": [
            3
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 10000 that are divisible by 2."
    },
    {
        "id": 22,
        "type": "single",
        "difficulty": 2,
        "question": "What is the output of `sum(x for x in range(500) if x % 2 == 0)`?",
        "options": [
            "62252",
            "62250",
            "62248",
            "124500"
        ],
        "correct": [
            1
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 500 that are divisible by 2."
    },
    {
        "id": 23,
        "type": "single",
        "difficulty": 3,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `revenue` is greater than 10 and drop duplicates based on `status`?",
        "options": [
            "df.filter(df.revenue > 10).dropDuplicates('status')",
            "df.filter(F.col('revenue') > 10).dropDuplicates(['status'])",
            "df.filter('revenue' > 10).drop_duplicates('status')",
            "df.where('revenue' > 10).distinct('status')"
        ],
        "correct": [
            1
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 24,
        "type": "single",
        "difficulty": 3,
        "question": "You have a Kafka topic `clicks` with 5000 partitions. If you spin up 5 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "Partitions are randomly assigned dynamically per message",
            "Each reads all 5000 partitions",
            "Consumer 1 reads 2500, Consumer 2 reads 2500",
            "It depends on the producer routing key"
        ],
        "correct": [
            2
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 25,
        "type": "single",
        "difficulty": 2,
        "question": "What is the output of `sum(x for x in range(100) if x % 5 == 0)`?",
        "options": [
            "1900",
            "950",
            "945",
            "955"
        ],
        "correct": [
            1
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 100 that are divisible by 5."
    },
    {
        "id": 26,
        "type": "single",
        "difficulty": 2,
        "question": "You have a Kafka topic `users` with 10 partitions. If you spin up 5 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "Consumer 1 reads 5, Consumer 2 reads 5",
            "It depends on the producer routing key",
            "Partitions are randomly assigned dynamically per message",
            "Each reads all 10 partitions"
        ],
        "correct": [
            0
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 27,
        "type": "single",
        "difficulty": 2,
        "question": "Given the table `transactions`, which SQL query calculates the cumulative sum of `quantity` partitioned by `session_id` ordered by `session_id`?",
        "options": [
            "SELECT SUM(quantity) OVER (ORDER BY session_id PARTITION BY session_id) FROM transactions",
            "SELECT SUM(quantity) PARTITION BY session_id ORDER BY session_id FROM transactions",
            "SELECT SUM(quantity) OVER (PARTITION BY session_id ORDER BY session_id) FROM transactions",
            "SELECT CUMSUM(quantity) OVER (PARTITION BY session_id ORDER BY session_id) FROM transactions"
        ],
        "correct": [
            2
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 28,
        "type": "single",
        "difficulty": 1,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `tax` is greater than 10 and drop duplicates based on `price`?",
        "options": [
            "df.filter('tax' > 10).drop_duplicates('price')",
            "df.where('tax' > 10).distinct('price')",
            "df.filter(F.col('tax') > 10).dropDuplicates(['price'])",
            "df.filter(df.tax > 10).dropDuplicates('price')"
        ],
        "correct": [
            2
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 29,
        "type": "single",
        "difficulty": 3,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM transactions WHERE price = '50'`?",
        "options": [
            "Virtual Warehouse (Compute)",
            "Cloud Services Layer",
            "Metadata Layer",
            "Database Storage Layer"
        ],
        "correct": [
            0
        ],
        "concept": "Query execution and data processing are handled by the Virtual Warehouses (Compute Layer)."
    },
    {
        "id": 30,
        "type": "single",
        "difficulty": 2,
        "question": "In a Star Schema, the `customers` table contains foreign keys to dimension tables and quantitative metrics like `timestamp`. What type of table is this?",
        "options": [
            "Dimension Table",
            "Aggregate Table",
            "Bridge Table",
            "Fact Table"
        ],
        "correct": [
            3
        ],
        "concept": "Fact tables contain quantitative data (measurements) and foreign keys referencing dimension tables."
    },
    {
        "id": 31,
        "type": "single",
        "difficulty": 2,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM logs WHERE timestamp = '1000'`?",
        "options": [
            "Cloud Services Layer",
            "Database Storage Layer",
            "Metadata Layer",
            "Virtual Warehouse (Compute)"
        ],
        "correct": [
            3
        ],
        "concept": "Query execution and data processing are handled by the Virtual Warehouses (Compute Layer)."
    },
    {
        "id": 32,
        "type": "single",
        "difficulty": 1,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `revenue`?",
        "options": [
            "Avro",
            "CSV",
            "JSON",
            "Parquet"
        ],
        "correct": [
            3
        ],
        "concept": "Apache Parquet is a columnar storage format highly optimized for analytical (OLAP) queries."
    },
    {
        "id": 33,
        "type": "single",
        "difficulty": 1,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `price`?",
        "options": [
            "Parquet",
            "Avro",
            "CSV",
            "JSON"
        ],
        "correct": [
            0
        ],
        "concept": "Apache Parquet is a columnar storage format highly optimized for analytical (OLAP) queries."
    },
    {
        "id": 34,
        "type": "single",
        "difficulty": 2,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `amount` is greater than 100 and drop duplicates based on `timestamp`?",
        "options": [
            "df.filter('amount' > 100).drop_duplicates('timestamp')",
            "df.filter(F.col('amount') > 100).dropDuplicates(['timestamp'])",
            "df.where('amount' > 100).distinct('timestamp')",
            "df.filter(df.amount > 100).dropDuplicates('timestamp')"
        ],
        "correct": [
            1
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 35,
        "type": "single",
        "difficulty": 2,
        "question": "In a Star Schema, the `clicks` table contains foreign keys to dimension tables and quantitative metrics like `revenue`. What type of table is this?",
        "options": [
            "Dimension Table",
            "Aggregate Table",
            "Bridge Table",
            "Fact Table"
        ],
        "correct": [
            3
        ],
        "concept": "Fact tables contain quantitative data (measurements) and foreign keys referencing dimension tables."
    },
    {
        "id": 36,
        "type": "single",
        "difficulty": 3,
        "question": "What is the output of `sum(x for x in range(50) if x % 5 == 0)`?",
        "options": [
            "220",
            "230",
            "450",
            "225"
        ],
        "correct": [
            3
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 50 that are divisible by 5."
    },
    {
        "id": 37,
        "type": "single",
        "difficulty": 1,
        "question": "In Airflow, if task A and task B are upstream of task C, and you want task C to run ONLY if both A and B succeed, which trigger rule should you use for task C?",
        "options": [
            "none_failed",
            "all_done",
            "one_success",
            "all_success"
        ],
        "correct": [
            3
        ],
        "concept": "all_success is the default trigger rule in Airflow, requiring all upstream tasks to succeed."
    },
    {
        "id": 38,
        "type": "single",
        "difficulty": 1,
        "question": "When designing a slowly changing dimension (SCD) for `events`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
        "options": [
            "Type 3",
            "Type 4",
            "Type 2",
            "Type 1"
        ],
        "correct": [
            2
        ],
        "concept": "SCD Type 2 tracks historical data by creating multiple records for a given natural key with effective dates."
    },
    {
        "id": 39,
        "type": "single",
        "difficulty": 2,
        "question": "In a Star Schema, the `customers` table contains foreign keys to dimension tables and quantitative metrics like `discount`. What type of table is this?",
        "options": [
            "Dimension Table",
            "Bridge Table",
            "Aggregate Table",
            "Fact Table"
        ],
        "correct": [
            3
        ],
        "concept": "Fact tables contain quantitative data (measurements) and foreign keys referencing dimension tables."
    },
    {
        "id": 40,
        "type": "single",
        "difficulty": 2,
        "question": "What is the output of `sum(x for x in range(5000) if x % 4 == 0)`?",
        "options": [
            "3122496",
            "3122500",
            "6245000",
            "3122504"
        ],
        "correct": [
            1
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 5000 that are divisible by 4."
    },
    {
        "id": 41,
        "type": "single",
        "difficulty": 3,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `amount`?",
        "options": [
            "JSON",
            "CSV",
            "Avro",
            "Parquet"
        ],
        "correct": [
            3
        ],
        "concept": "Apache Parquet is a columnar storage format highly optimized for analytical (OLAP) queries."
    },
    {
        "id": 42,
        "type": "single",
        "difficulty": 2,
        "question": "You are storing 10000 TB of raw JSON logs in an S3 bucket named `orders`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
        "options": [
            "Amazon RDS",
            "Amazon Athena",
            "AWS Glue",
            "Amazon Redshift"
        ],
        "correct": [
            1
        ],
        "concept": "Amazon Athena allows you to run interactive SQL queries directly against data in Amazon S3."
    },
    {
        "id": 43,
        "type": "single",
        "difficulty": 3,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `discount`?",
        "options": [
            "CSV",
            "JSON",
            "Avro",
            "Parquet"
        ],
        "correct": [
            3
        ],
        "concept": "Apache Parquet is a columnar storage format highly optimized for analytical (OLAP) queries."
    },
    {
        "id": 44,
        "type": "single",
        "difficulty": 3,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `session_id` is greater than 10000 and drop duplicates based on `status`?",
        "options": [
            "df.filter('session_id' > 10000).drop_duplicates('status')",
            "df.filter(df.session_id > 10000).dropDuplicates('status')",
            "df.where('session_id' > 10000).distinct('status')",
            "df.filter(F.col('session_id') > 10000).dropDuplicates(['status'])"
        ],
        "correct": [
            3
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 45,
        "type": "single",
        "difficulty": 1,
        "question": "What is the output of `sum(x for x in range(5000) if x % 4 == 0)`?",
        "options": [
            "3122496",
            "3122500",
            "6245000",
            "3122504"
        ],
        "correct": [
            1
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 5000 that are divisible by 4."
    },
    {
        "id": 46,
        "type": "single",
        "difficulty": 2,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `amount`?",
        "options": [
            "Parquet",
            "JSON",
            "CSV",
            "Avro"
        ],
        "correct": [
            0
        ],
        "concept": "Apache Parquet is a columnar storage format highly optimized for analytical (OLAP) queries."
    },
    {
        "id": 47,
        "type": "single",
        "difficulty": 2,
        "question": "In Airflow, if task A and task B are upstream of task C, and you want task C to run ONLY if both A and B succeed, which trigger rule should you use for task C?",
        "options": [
            "all_done",
            "none_failed",
            "all_success",
            "one_success"
        ],
        "correct": [
            2
        ],
        "concept": "all_success is the default trigger rule in Airflow, requiring all upstream tasks to succeed."
    },
    {
        "id": 48,
        "type": "single",
        "difficulty": 1,
        "question": "You are storing 5000 TB of raw JSON logs in an S3 bucket named `logs`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
        "options": [
            "Amazon Athena",
            "Amazon RDS",
            "AWS Glue",
            "Amazon Redshift"
        ],
        "correct": [
            0
        ],
        "concept": "Amazon Athena allows you to run interactive SQL queries directly against data in Amazon S3."
    },
    {
        "id": 49,
        "type": "single",
        "difficulty": 1,
        "question": "You have a Kafka topic `payments` with 1000 partitions. If you spin up 2 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "Each reads all 1000 partitions",
            "Consumer 1 reads 500, Consumer 2 reads 500",
            "It depends on the producer routing key",
            "Partitions are randomly assigned dynamically per message"
        ],
        "correct": [
            1
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 50,
        "type": "single",
        "difficulty": 2,
        "question": "What is the output of `sum(x for x in range(10) if x % 5 == 0)`?",
        "options": [
            "5",
            "0",
            "10",
            "10"
        ],
        "correct": [
            0
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 10 that are divisible by 5."
    },
    {
        "id": 51,
        "type": "single",
        "difficulty": 3,
        "question": "In Airflow, if task A and task B are upstream of task C, and you want task C to run ONLY if both A and B succeed, which trigger rule should you use for task C?",
        "options": [
            "one_success",
            "none_failed",
            "all_success",
            "all_done"
        ],
        "correct": [
            2
        ],
        "concept": "all_success is the default trigger rule in Airflow, requiring all upstream tasks to succeed."
    },
    {
        "id": 52,
        "type": "single",
        "difficulty": 3,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `timestamp`?",
        "options": [
            "JSON",
            "Avro",
            "Parquet",
            "CSV"
        ],
        "correct": [
            2
        ],
        "concept": "Apache Parquet is a columnar storage format highly optimized for analytical (OLAP) queries."
    },
    {
        "id": 53,
        "type": "single",
        "difficulty": 3,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM sales WHERE timestamp = '100'`?",
        "options": [
            "Cloud Services Layer",
            "Database Storage Layer",
            "Metadata Layer",
            "Virtual Warehouse (Compute)"
        ],
        "correct": [
            3
        ],
        "concept": "Query execution and data processing are handled by the Virtual Warehouses (Compute Layer)."
    },
    {
        "id": 54,
        "type": "single",
        "difficulty": 2,
        "question": "You have a Kafka topic `logs` with 50 partitions. If you spin up 5 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "It depends on the producer routing key",
            "Partitions are randomly assigned dynamically per message",
            "Consumer 1 reads 25, Consumer 2 reads 25",
            "Each reads all 50 partitions"
        ],
        "correct": [
            2
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 55,
        "type": "single",
        "difficulty": 1,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `status` is greater than 500 and drop duplicates based on `tax`?",
        "options": [
            "df.where('status' > 500).distinct('tax')",
            "df.filter(F.col('status') > 500).dropDuplicates(['tax'])",
            "df.filter(df.status > 500).dropDuplicates('tax')",
            "df.filter('status' > 500).drop_duplicates('tax')"
        ],
        "correct": [
            1
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 56,
        "type": "single",
        "difficulty": 1,
        "question": "Given the table `inventory`, which SQL query calculates the cumulative sum of `user_id` partitioned by `quantity` ordered by `user_id`?",
        "options": [
            "SELECT SUM(user_id) OVER (ORDER BY quantity PARTITION BY user_id) FROM inventory",
            "SELECT SUM(user_id) OVER (PARTITION BY quantity ORDER BY user_id) FROM inventory",
            "SELECT SUM(user_id) PARTITION BY quantity ORDER BY user_id FROM inventory",
            "SELECT CUMSUM(user_id) OVER (PARTITION BY quantity ORDER BY user_id) FROM inventory"
        ],
        "correct": [
            1
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 57,
        "type": "single",
        "difficulty": 1,
        "question": "You are storing 5000 TB of raw JSON logs in an S3 bucket named `transactions`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
        "options": [
            "Amazon Athena",
            "Amazon Redshift",
            "Amazon RDS",
            "AWS Glue"
        ],
        "correct": [
            0
        ],
        "concept": "Amazon Athena allows you to run interactive SQL queries directly against data in Amazon S3."
    },
    {
        "id": 58,
        "type": "single",
        "difficulty": 2,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `amount` is greater than 1000 and drop duplicates based on `revenue`?",
        "options": [
            "df.filter(F.col('amount') > 1000).dropDuplicates(['revenue'])",
            "df.filter('amount' > 1000).drop_duplicates('revenue')",
            "df.where('amount' > 1000).distinct('revenue')",
            "df.filter(df.amount > 1000).dropDuplicates('revenue')"
        ],
        "correct": [
            0
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 59,
        "type": "single",
        "difficulty": 2,
        "question": "In a Star Schema, the `transactions` table contains foreign keys to dimension tables and quantitative metrics like `session_id`. What type of table is this?",
        "options": [
            "Dimension Table",
            "Aggregate Table",
            "Bridge Table",
            "Fact Table"
        ],
        "correct": [
            3
        ],
        "concept": "Fact tables contain quantitative data (measurements) and foreign keys referencing dimension tables."
    },
    {
        "id": 60,
        "type": "single",
        "difficulty": 1,
        "question": "When designing a slowly changing dimension (SCD) for `clicks`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
        "options": [
            "Type 1",
            "Type 4",
            "Type 3",
            "Type 2"
        ],
        "correct": [
            3
        ],
        "concept": "SCD Type 2 tracks historical data by creating multiple records for a given natural key with effective dates."
    },
    {
        "id": 61,
        "type": "single",
        "difficulty": 3,
        "question": "In a Star Schema, the `customers` table contains foreign keys to dimension tables and quantitative metrics like `discount`. What type of table is this?",
        "options": [
            "Fact Table",
            "Bridge Table",
            "Aggregate Table",
            "Dimension Table"
        ],
        "correct": [
            0
        ],
        "concept": "Fact tables contain quantitative data (measurements) and foreign keys referencing dimension tables."
    },
    {
        "id": 62,
        "type": "single",
        "difficulty": 1,
        "question": "You have a Kafka topic `orders` with 10 partitions. If you spin up 4 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "Partitions are randomly assigned dynamically per message",
            "Each reads all 10 partitions",
            "It depends on the producer routing key",
            "Consumer 1 reads 5, Consumer 2 reads 5"
        ],
        "correct": [
            3
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 63,
        "type": "single",
        "difficulty": 1,
        "question": "When designing a slowly changing dimension (SCD) for `payments`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
        "options": [
            "Type 3",
            "Type 2",
            "Type 1",
            "Type 4"
        ],
        "correct": [
            1
        ],
        "concept": "SCD Type 2 tracks historical data by creating multiple records for a given natural key with effective dates."
    },
    {
        "id": 64,
        "type": "single",
        "difficulty": 1,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM payments WHERE user_id = '10000'`?",
        "options": [
            "Metadata Layer",
            "Database Storage Layer",
            "Virtual Warehouse (Compute)",
            "Cloud Services Layer"
        ],
        "correct": [
            2
        ],
        "concept": "Query execution and data processing are handled by the Virtual Warehouses (Compute Layer)."
    },
    {
        "id": 65,
        "type": "single",
        "difficulty": 3,
        "question": "When designing a slowly changing dimension (SCD) for `users`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
        "options": [
            "Type 2",
            "Type 4",
            "Type 1",
            "Type 3"
        ],
        "correct": [
            0
        ],
        "concept": "SCD Type 2 tracks historical data by creating multiple records for a given natural key with effective dates."
    },
    {
        "id": 66,
        "type": "single",
        "difficulty": 3,
        "question": "In Airflow, if task A and task B are upstream of task C, and you want task C to run ONLY if both A and B succeed, which trigger rule should you use for task C?",
        "options": [
            "none_failed",
            "one_success",
            "all_success",
            "all_done"
        ],
        "correct": [
            2
        ],
        "concept": "all_success is the default trigger rule in Airflow, requiring all upstream tasks to succeed."
    },
    {
        "id": 67,
        "type": "single",
        "difficulty": 1,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `tax`?",
        "options": [
            "Avro",
            "CSV",
            "JSON",
            "Parquet"
        ],
        "correct": [
            3
        ],
        "concept": "Apache Parquet is a columnar storage format highly optimized for analytical (OLAP) queries."
    },
    {
        "id": 68,
        "type": "single",
        "difficulty": 2,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM sales WHERE tax = '50'`?",
        "options": [
            "Virtual Warehouse (Compute)",
            "Database Storage Layer",
            "Cloud Services Layer",
            "Metadata Layer"
        ],
        "correct": [
            0
        ],
        "concept": "Query execution and data processing are handled by the Virtual Warehouses (Compute Layer)."
    },
    {
        "id": 69,
        "type": "single",
        "difficulty": 3,
        "question": "In a Star Schema, the `inventory` table contains foreign keys to dimension tables and quantitative metrics like `session_id`. What type of table is this?",
        "options": [
            "Aggregate Table",
            "Bridge Table",
            "Fact Table",
            "Dimension Table"
        ],
        "correct": [
            2
        ],
        "concept": "Fact tables contain quantitative data (measurements) and foreign keys referencing dimension tables."
    },
    {
        "id": 70,
        "type": "single",
        "difficulty": 3,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `price`?",
        "options": [
            "Parquet",
            "CSV",
            "Avro",
            "JSON"
        ],
        "correct": [
            0
        ],
        "concept": "Apache Parquet is a columnar storage format highly optimized for analytical (OLAP) queries."
    },
    {
        "id": 71,
        "type": "single",
        "difficulty": 3,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `revenue` is greater than 5000 and drop duplicates based on `price`?",
        "options": [
            "df.filter('revenue' > 5000).drop_duplicates('price')",
            "df.filter(df.revenue > 5000).dropDuplicates('price')",
            "df.filter(F.col('revenue') > 5000).dropDuplicates(['price'])",
            "df.where('revenue' > 5000).distinct('price')"
        ],
        "correct": [
            2
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 72,
        "type": "single",
        "difficulty": 1,
        "question": "When designing a slowly changing dimension (SCD) for `logs`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
        "options": [
            "Type 2",
            "Type 3",
            "Type 1",
            "Type 4"
        ],
        "correct": [
            0
        ],
        "concept": "SCD Type 2 tracks historical data by creating multiple records for a given natural key with effective dates."
    },
    {
        "id": 73,
        "type": "single",
        "difficulty": 3,
        "question": "When designing a slowly changing dimension (SCD) for `events`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
        "options": [
            "Type 2",
            "Type 4",
            "Type 3",
            "Type 1"
        ],
        "correct": [
            0
        ],
        "concept": "SCD Type 2 tracks historical data by creating multiple records for a given natural key with effective dates."
    },
    {
        "id": 74,
        "type": "single",
        "difficulty": 1,
        "question": "When designing a slowly changing dimension (SCD) for `inventory`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
        "options": [
            "Type 4",
            "Type 2",
            "Type 1",
            "Type 3"
        ],
        "correct": [
            1
        ],
        "concept": "SCD Type 2 tracks historical data by creating multiple records for a given natural key with effective dates."
    },
    {
        "id": 75,
        "type": "single",
        "difficulty": 3,
        "question": "When designing a slowly changing dimension (SCD) for `logs`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
        "options": [
            "Type 1",
            "Type 4",
            "Type 3",
            "Type 2"
        ],
        "correct": [
            3
        ],
        "concept": "SCD Type 2 tracks historical data by creating multiple records for a given natural key with effective dates."
    },
    {
        "id": 76,
        "type": "single",
        "difficulty": 2,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `timestamp` is greater than 50 and drop duplicates based on `session_id`?",
        "options": [
            "df.filter(F.col('timestamp') > 50).dropDuplicates(['session_id'])",
            "df.filter(df.timestamp > 50).dropDuplicates('session_id')",
            "df.where('timestamp' > 50).distinct('session_id')",
            "df.filter('timestamp' > 50).drop_duplicates('session_id')"
        ],
        "correct": [
            0
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 77,
        "type": "single",
        "difficulty": 3,
        "question": "In Airflow, if task A and task B are upstream of task C, and you want task C to run ONLY if both A and B succeed, which trigger rule should you use for task C?",
        "options": [
            "none_failed",
            "one_success",
            "all_success",
            "all_done"
        ],
        "correct": [
            2
        ],
        "concept": "all_success is the default trigger rule in Airflow, requiring all upstream tasks to succeed."
    },
    {
        "id": 78,
        "type": "single",
        "difficulty": 3,
        "question": "In a Star Schema, the `customers` table contains foreign keys to dimension tables and quantitative metrics like `session_id`. What type of table is this?",
        "options": [
            "Dimension Table",
            "Aggregate Table",
            "Bridge Table",
            "Fact Table"
        ],
        "correct": [
            3
        ],
        "concept": "Fact tables contain quantitative data (measurements) and foreign keys referencing dimension tables."
    },
    {
        "id": 79,
        "type": "single",
        "difficulty": 2,
        "question": "What is the output of `sum(x for x in range(50) if x % 2 == 0)`?",
        "options": [
            "598",
            "600",
            "1200",
            "602"
        ],
        "correct": [
            1
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 50 that are divisible by 2."
    },
    {
        "id": 80,
        "type": "single",
        "difficulty": 1,
        "question": "In Airflow, if task A and task B are upstream of task C, and you want task C to run ONLY if both A and B succeed, which trigger rule should you use for task C?",
        "options": [
            "none_failed",
            "one_success",
            "all_success",
            "all_done"
        ],
        "correct": [
            2
        ],
        "concept": "all_success is the default trigger rule in Airflow, requiring all upstream tasks to succeed."
    },
    {
        "id": 81,
        "type": "single",
        "difficulty": 1,
        "question": "In Airflow, if task A and task B are upstream of task C, and you want task C to run ONLY if both A and B succeed, which trigger rule should you use for task C?",
        "options": [
            "all_success",
            "none_failed",
            "one_success",
            "all_done"
        ],
        "correct": [
            0
        ],
        "concept": "all_success is the default trigger rule in Airflow, requiring all upstream tasks to succeed."
    },
    {
        "id": 82,
        "type": "single",
        "difficulty": 1,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `session_id` is greater than 500 and drop duplicates based on `user_id`?",
        "options": [
            "df.filter(df.session_id > 500).dropDuplicates('user_id')",
            "df.filter(F.col('session_id') > 500).dropDuplicates(['user_id'])",
            "df.filter('session_id' > 500).drop_duplicates('user_id')",
            "df.where('session_id' > 500).distinct('user_id')"
        ],
        "correct": [
            1
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 83,
        "type": "single",
        "difficulty": 3,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `tax`?",
        "options": [
            "Parquet",
            "JSON",
            "Avro",
            "CSV"
        ],
        "correct": [
            0
        ],
        "concept": "Apache Parquet is a columnar storage format highly optimized for analytical (OLAP) queries."
    },
    {
        "id": 84,
        "type": "single",
        "difficulty": 1,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `quantity`?",
        "options": [
            "JSON",
            "Avro",
            "Parquet",
            "CSV"
        ],
        "correct": [
            2
        ],
        "concept": "Apache Parquet is a columnar storage format highly optimized for analytical (OLAP) queries."
    },
    {
        "id": 85,
        "type": "single",
        "difficulty": 1,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `timestamp` is greater than 10000 and drop duplicates based on `revenue`?",
        "options": [
            "df.filter(df.timestamp > 10000).dropDuplicates('revenue')",
            "df.filter(F.col('timestamp') > 10000).dropDuplicates(['revenue'])",
            "df.filter('timestamp' > 10000).drop_duplicates('revenue')",
            "df.where('timestamp' > 10000).distinct('revenue')"
        ],
        "correct": [
            1
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 86,
        "type": "single",
        "difficulty": 2,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `status` is greater than 1000 and drop duplicates based on `timestamp`?",
        "options": [
            "df.filter('status' > 1000).drop_duplicates('timestamp')",
            "df.filter(F.col('status') > 1000).dropDuplicates(['timestamp'])",
            "df.filter(df.status > 1000).dropDuplicates('timestamp')",
            "df.where('status' > 1000).distinct('timestamp')"
        ],
        "correct": [
            1
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 87,
        "type": "single",
        "difficulty": 3,
        "question": "In Airflow, if task A and task B are upstream of task C, and you want task C to run ONLY if both A and B succeed, which trigger rule should you use for task C?",
        "options": [
            "all_done",
            "one_success",
            "none_failed",
            "all_success"
        ],
        "correct": [
            3
        ],
        "concept": "all_success is the default trigger rule in Airflow, requiring all upstream tasks to succeed."
    },
    {
        "id": 88,
        "type": "single",
        "difficulty": 2,
        "question": "In a Star Schema, the `orders` table contains foreign keys to dimension tables and quantitative metrics like `amount`. What type of table is this?",
        "options": [
            "Aggregate Table",
            "Dimension Table",
            "Bridge Table",
            "Fact Table"
        ],
        "correct": [
            3
        ],
        "concept": "Fact tables contain quantitative data (measurements) and foreign keys referencing dimension tables."
    },
    {
        "id": 89,
        "type": "single",
        "difficulty": 2,
        "question": "Given the table `users`, which SQL query calculates the cumulative sum of `status` partitioned by `session_id` ordered by `discount`?",
        "options": [
            "SELECT SUM(status) OVER (PARTITION BY session_id ORDER BY discount) FROM users",
            "SELECT SUM(status) PARTITION BY session_id ORDER BY discount FROM users",
            "SELECT CUMSUM(status) OVER (PARTITION BY session_id ORDER BY discount) FROM users",
            "SELECT SUM(status) OVER (ORDER BY session_id PARTITION BY discount) FROM users"
        ],
        "correct": [
            0
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 90,
        "type": "single",
        "difficulty": 1,
        "question": "What is the output of `sum(x for x in range(1000) if x % 5 == 0)`?",
        "options": [
            "99500",
            "99495",
            "199000",
            "99505"
        ],
        "correct": [
            0
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 1000 that are divisible by 5."
    },
    {
        "id": 91,
        "type": "single",
        "difficulty": 2,
        "question": "You have a Kafka topic `inventory` with 100 partitions. If you spin up 4 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "Each reads all 100 partitions",
            "Consumer 1 reads 50, Consumer 2 reads 50",
            "Partitions are randomly assigned dynamically per message",
            "It depends on the producer routing key"
        ],
        "correct": [
            1
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 92,
        "type": "single",
        "difficulty": 2,
        "question": "What is the output of `sum(x for x in range(500) if x % 5 == 0)`?",
        "options": [
            "24745",
            "49500",
            "24750",
            "24755"
        ],
        "correct": [
            2
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 500 that are divisible by 5."
    },
    {
        "id": 93,
        "type": "single",
        "difficulty": 2,
        "question": "In a Star Schema, the `orders` table contains foreign keys to dimension tables and quantitative metrics like `status`. What type of table is this?",
        "options": [
            "Fact Table",
            "Dimension Table",
            "Bridge Table",
            "Aggregate Table"
        ],
        "correct": [
            0
        ],
        "concept": "Fact tables contain quantitative data (measurements) and foreign keys referencing dimension tables."
    },
    {
        "id": 94,
        "type": "single",
        "difficulty": 2,
        "question": "You are storing 10000 TB of raw JSON logs in an S3 bucket named `users`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
        "options": [
            "Amazon Redshift",
            "Amazon RDS",
            "Amazon Athena",
            "AWS Glue"
        ],
        "correct": [
            2
        ],
        "concept": "Amazon Athena allows you to run interactive SQL queries directly against data in Amazon S3."
    },
    {
        "id": 95,
        "type": "single",
        "difficulty": 1,
        "question": "You have a Kafka topic `sales` with 500 partitions. If you spin up 3 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "Each reads all 500 partitions",
            "Consumer 1 reads 250, Consumer 2 reads 250",
            "Partitions are randomly assigned dynamically per message",
            "It depends on the producer routing key"
        ],
        "correct": [
            1
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 96,
        "type": "single",
        "difficulty": 1,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `quantity`?",
        "options": [
            "JSON",
            "Parquet",
            "Avro",
            "CSV"
        ],
        "correct": [
            1
        ],
        "concept": "Apache Parquet is a columnar storage format highly optimized for analytical (OLAP) queries."
    },
    {
        "id": 97,
        "type": "single",
        "difficulty": 2,
        "question": "In Airflow, if task A and task B are upstream of task C, and you want task C to run ONLY if both A and B succeed, which trigger rule should you use for task C?",
        "options": [
            "all_success",
            "none_failed",
            "one_success",
            "all_done"
        ],
        "correct": [
            0
        ],
        "concept": "all_success is the default trigger rule in Airflow, requiring all upstream tasks to succeed."
    },
    {
        "id": 98,
        "type": "single",
        "difficulty": 2,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `amount`?",
        "options": [
            "Parquet",
            "JSON",
            "Avro",
            "CSV"
        ],
        "correct": [
            0
        ],
        "concept": "Apache Parquet is a columnar storage format highly optimized for analytical (OLAP) queries."
    },
    {
        "id": 99,
        "type": "single",
        "difficulty": 3,
        "question": "You have a Kafka topic `clicks` with 50 partitions. If you spin up 2 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "Each reads all 50 partitions",
            "Partitions are randomly assigned dynamically per message",
            "Consumer 1 reads 25, Consumer 2 reads 25",
            "It depends on the producer routing key"
        ],
        "correct": [
            2
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 100,
        "type": "single",
        "difficulty": 2,
        "question": "You have a Kafka topic `users` with 100 partitions. If you spin up 2 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "It depends on the producer routing key",
            "Partitions are randomly assigned dynamically per message",
            "Consumer 1 reads 50, Consumer 2 reads 50",
            "Each reads all 100 partitions"
        ],
        "correct": [
            2
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    }
]
};

window.QUIZ_DATA = window.QUIZ_DATA || {};
window.QUIZ_DATA["day27"] = {
  title: "Data Engineering Masterclass - Day 27",
  topics: ["SQL", "PySpark", "Airflow", "Kafka", "Data Modeling", "AWS", "Snowflake"],
  questions: [
    {
        "id": 1,
        "type": "single",
        "difficulty": 1,
        "question": "Given the table `payments`, which SQL query calculates the cumulative sum of `session_id` partitioned by `tax` ordered by `timestamp`?",
        "options": [
            "SELECT SUM(session_id) OVER (ORDER BY tax PARTITION BY timestamp) FROM payments",
            "SELECT SUM(session_id) OVER (PARTITION BY tax ORDER BY timestamp) FROM payments",
            "SELECT SUM(session_id) PARTITION BY tax ORDER BY timestamp FROM payments",
            "SELECT CUMSUM(session_id) OVER (PARTITION BY tax ORDER BY timestamp) FROM payments"
        ],
        "correct": [
            1
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 2,
        "type": "single",
        "difficulty": 2,
        "question": "You are storing 10 TB of raw JSON logs in an S3 bucket named `transactions`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
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
        "id": 3,
        "type": "single",
        "difficulty": 1,
        "question": "When designing a slowly changing dimension (SCD) for `users`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
        "options": [
            "Type 2",
            "Type 3",
            "Type 4",
            "Type 1"
        ],
        "correct": [
            0
        ],
        "concept": "SCD Type 2 tracks historical data by creating multiple records for a given natural key with effective dates."
    },
    {
        "id": 4,
        "type": "single",
        "difficulty": 3,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `discount` is greater than 50 and drop duplicates based on `discount`?",
        "options": [
            "df.filter(F.col('discount') > 50).dropDuplicates(['discount'])",
            "df.where('discount' > 50).distinct('discount')",
            "df.filter('discount' > 50).drop_duplicates('discount')",
            "df.filter(df.discount > 50).dropDuplicates('discount')"
        ],
        "correct": [
            0
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 5,
        "type": "single",
        "difficulty": 3,
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
        "id": 6,
        "type": "single",
        "difficulty": 3,
        "question": "You are storing 10000 TB of raw JSON logs in an S3 bucket named `orders`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
        "options": [
            "Amazon Athena",
            "Amazon RDS",
            "Amazon Redshift",
            "AWS Glue"
        ],
        "correct": [
            0
        ],
        "concept": "Amazon Athena allows you to run interactive SQL queries directly against data in Amazon S3."
    },
    {
        "id": 7,
        "type": "single",
        "difficulty": 3,
        "question": "When designing a slowly changing dimension (SCD) for `logs`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
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
        "id": 8,
        "type": "single",
        "difficulty": 3,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `timestamp`?",
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
        "id": 9,
        "type": "single",
        "difficulty": 1,
        "question": "You are storing 100 TB of raw JSON logs in an S3 bucket named `sales`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
        "options": [
            "Amazon Redshift",
            "Amazon Athena",
            "Amazon RDS",
            "AWS Glue"
        ],
        "correct": [
            1
        ],
        "concept": "Amazon Athena allows you to run interactive SQL queries directly against data in Amazon S3."
    },
    {
        "id": 10,
        "type": "single",
        "difficulty": 2,
        "question": "You have a Kafka topic `clicks` with 1000 partitions. If you spin up 5 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "It depends on the producer routing key",
            "Partitions are randomly assigned dynamically per message",
            "Consumer 1 reads 500, Consumer 2 reads 500",
            "Each reads all 1000 partitions"
        ],
        "correct": [
            2
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 11,
        "type": "single",
        "difficulty": 3,
        "question": "When designing a slowly changing dimension (SCD) for `sales`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
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
        "id": 12,
        "type": "single",
        "difficulty": 2,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `amount` is greater than 50 and drop duplicates based on `user_id`?",
        "options": [
            "df.where('amount' > 50).distinct('user_id')",
            "df.filter(F.col('amount') > 50).dropDuplicates(['user_id'])",
            "df.filter('amount' > 50).drop_duplicates('user_id')",
            "df.filter(df.amount > 50).dropDuplicates('user_id')"
        ],
        "correct": [
            1
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 13,
        "type": "single",
        "difficulty": 1,
        "question": "Given the table `orders`, which SQL query calculates the cumulative sum of `status` partitioned by `tax` ordered by `amount`?",
        "options": [
            "SELECT SUM(status) PARTITION BY tax ORDER BY amount FROM orders",
            "SELECT SUM(status) OVER (PARTITION BY tax ORDER BY amount) FROM orders",
            "SELECT CUMSUM(status) OVER (PARTITION BY tax ORDER BY amount) FROM orders",
            "SELECT SUM(status) OVER (ORDER BY tax PARTITION BY amount) FROM orders"
        ],
        "correct": [
            1
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 14,
        "type": "single",
        "difficulty": 1,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `status`?",
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
        "id": 15,
        "type": "single",
        "difficulty": 3,
        "question": "When designing a slowly changing dimension (SCD) for `customers`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
        "options": [
            "Type 4",
            "Type 2",
            "Type 3",
            "Type 1"
        ],
        "correct": [
            1
        ],
        "concept": "SCD Type 2 tracks historical data by creating multiple records for a given natural key with effective dates."
    },
    {
        "id": 16,
        "type": "single",
        "difficulty": 2,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `amount` is greater than 50 and drop duplicates based on `amount`?",
        "options": [
            "df.where('amount' > 50).distinct('amount')",
            "df.filter(df.amount > 50).dropDuplicates('amount')",
            "df.filter('amount' > 50).drop_duplicates('amount')",
            "df.filter(F.col('amount') > 50).dropDuplicates(['amount'])"
        ],
        "correct": [
            3
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 17,
        "type": "single",
        "difficulty": 3,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM clicks WHERE discount = '10000'`?",
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
        "id": 18,
        "type": "single",
        "difficulty": 3,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `session_id`?",
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
        "id": 19,
        "type": "single",
        "difficulty": 1,
        "question": "You have a Kafka topic `transactions` with 10000 partitions. If you spin up 5 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "Each reads all 10000 partitions",
            "Consumer 1 reads 5000, Consumer 2 reads 5000",
            "It depends on the producer routing key",
            "Partitions are randomly assigned dynamically per message"
        ],
        "correct": [
            1
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 20,
        "type": "single",
        "difficulty": 1,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM inventory WHERE status = '100'`?",
        "options": [
            "Cloud Services Layer",
            "Database Storage Layer",
            "Virtual Warehouse (Compute)",
            "Metadata Layer"
        ],
        "correct": [
            2
        ],
        "concept": "Query execution and data processing are handled by the Virtual Warehouses (Compute Layer)."
    },
    {
        "id": 21,
        "type": "single",
        "difficulty": 1,
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
        "id": 22,
        "type": "single",
        "difficulty": 1,
        "question": "When designing a slowly changing dimension (SCD) for `payments`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
        "options": [
            "Type 2",
            "Type 1",
            "Type 4",
            "Type 3"
        ],
        "correct": [
            0
        ],
        "concept": "SCD Type 2 tracks historical data by creating multiple records for a given natural key with effective dates."
    },
    {
        "id": 23,
        "type": "single",
        "difficulty": 3,
        "question": "You have a Kafka topic `events` with 10 partitions. If you spin up 4 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "Each reads all 10 partitions",
            "Consumer 1 reads 5, Consumer 2 reads 5",
            "Partitions are randomly assigned dynamically per message",
            "It depends on the producer routing key"
        ],
        "correct": [
            1
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 24,
        "type": "single",
        "difficulty": 1,
        "question": "Given the table `events`, which SQL query calculates the cumulative sum of `session_id` partitioned by `timestamp` ordered by `timestamp`?",
        "options": [
            "SELECT SUM(session_id) PARTITION BY timestamp ORDER BY timestamp FROM events",
            "SELECT SUM(session_id) OVER (ORDER BY timestamp PARTITION BY timestamp) FROM events",
            "SELECT CUMSUM(session_id) OVER (PARTITION BY timestamp ORDER BY timestamp) FROM events",
            "SELECT SUM(session_id) OVER (PARTITION BY timestamp ORDER BY timestamp) FROM events"
        ],
        "correct": [
            3
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 25,
        "type": "single",
        "difficulty": 3,
        "question": "You are storing 10000 TB of raw JSON logs in an S3 bucket named `events`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
        "options": [
            "Amazon Athena",
            "AWS Glue",
            "Amazon Redshift",
            "Amazon RDS"
        ],
        "correct": [
            0
        ],
        "concept": "Amazon Athena allows you to run interactive SQL queries directly against data in Amazon S3."
    },
    {
        "id": 26,
        "type": "single",
        "difficulty": 1,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `tax`?",
        "options": [
            "Avro",
            "JSON",
            "Parquet",
            "CSV"
        ],
        "correct": [
            2
        ],
        "concept": "Apache Parquet is a columnar storage format highly optimized for analytical (OLAP) queries."
    },
    {
        "id": 27,
        "type": "single",
        "difficulty": 3,
        "question": "In Airflow, if task A and task B are upstream of task C, and you want task C to run ONLY if both A and B succeed, which trigger rule should you use for task C?",
        "options": [
            "all_success",
            "none_failed",
            "all_done",
            "one_success"
        ],
        "correct": [
            0
        ],
        "concept": "all_success is the default trigger rule in Airflow, requiring all upstream tasks to succeed."
    },
    {
        "id": 28,
        "type": "single",
        "difficulty": 2,
        "question": "In Airflow, if task A and task B are upstream of task C, and you want task C to run ONLY if both A and B succeed, which trigger rule should you use for task C?",
        "options": [
            "all_success",
            "all_done",
            "none_failed",
            "one_success"
        ],
        "correct": [
            0
        ],
        "concept": "all_success is the default trigger rule in Airflow, requiring all upstream tasks to succeed."
    },
    {
        "id": 29,
        "type": "single",
        "difficulty": 2,
        "question": "Given the table `clicks`, which SQL query calculates the cumulative sum of `discount` partitioned by `discount` ordered by `amount`?",
        "options": [
            "SELECT CUMSUM(discount) OVER (PARTITION BY discount ORDER BY amount) FROM clicks",
            "SELECT SUM(discount) OVER (ORDER BY discount PARTITION BY amount) FROM clicks",
            "SELECT SUM(discount) OVER (PARTITION BY discount ORDER BY amount) FROM clicks",
            "SELECT SUM(discount) PARTITION BY discount ORDER BY amount FROM clicks"
        ],
        "correct": [
            2
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 30,
        "type": "single",
        "difficulty": 2,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `price` is greater than 10000 and drop duplicates based on `revenue`?",
        "options": [
            "df.where('price' > 10000).distinct('revenue')",
            "df.filter(df.price > 10000).dropDuplicates('revenue')",
            "df.filter(F.col('price') > 10000).dropDuplicates(['revenue'])",
            "df.filter('price' > 10000).drop_duplicates('revenue')"
        ],
        "correct": [
            2
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 31,
        "type": "single",
        "difficulty": 2,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `user_id`?",
        "options": [
            "CSV",
            "Avro",
            "JSON",
            "Parquet"
        ],
        "correct": [
            3
        ],
        "concept": "Apache Parquet is a columnar storage format highly optimized for analytical (OLAP) queries."
    },
    {
        "id": 32,
        "type": "single",
        "difficulty": 1,
        "question": "In Airflow, if task A and task B are upstream of task C, and you want task C to run ONLY if both A and B succeed, which trigger rule should you use for task C?",
        "options": [
            "all_done",
            "one_success",
            "all_success",
            "none_failed"
        ],
        "correct": [
            2
        ],
        "concept": "all_success is the default trigger rule in Airflow, requiring all upstream tasks to succeed."
    },
    {
        "id": 33,
        "type": "single",
        "difficulty": 1,
        "question": "Given the table `logs`, which SQL query calculates the cumulative sum of `status` partitioned by `amount` ordered by `discount`?",
        "options": [
            "SELECT CUMSUM(status) OVER (PARTITION BY amount ORDER BY discount) FROM logs",
            "SELECT SUM(status) OVER (ORDER BY amount PARTITION BY discount) FROM logs",
            "SELECT SUM(status) PARTITION BY amount ORDER BY discount FROM logs",
            "SELECT SUM(status) OVER (PARTITION BY amount ORDER BY discount) FROM logs"
        ],
        "correct": [
            3
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 34,
        "type": "single",
        "difficulty": 2,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `status` is greater than 1000 and drop duplicates based on `discount`?",
        "options": [
            "df.filter(F.col('status') > 1000).dropDuplicates(['discount'])",
            "df.where('status' > 1000).distinct('discount')",
            "df.filter('status' > 1000).drop_duplicates('discount')",
            "df.filter(df.status > 1000).dropDuplicates('discount')"
        ],
        "correct": [
            0
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 35,
        "type": "single",
        "difficulty": 1,
        "question": "Given the table `payments`, which SQL query calculates the cumulative sum of `timestamp` partitioned by `status` ordered by `amount`?",
        "options": [
            "SELECT CUMSUM(timestamp) OVER (PARTITION BY status ORDER BY amount) FROM payments",
            "SELECT SUM(timestamp) OVER (ORDER BY status PARTITION BY amount) FROM payments",
            "SELECT SUM(timestamp) OVER (PARTITION BY status ORDER BY amount) FROM payments",
            "SELECT SUM(timestamp) PARTITION BY status ORDER BY amount FROM payments"
        ],
        "correct": [
            2
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 36,
        "type": "single",
        "difficulty": 2,
        "question": "Given the table `transactions`, which SQL query calculates the cumulative sum of `amount` partitioned by `discount` ordered by `price`?",
        "options": [
            "SELECT CUMSUM(amount) OVER (PARTITION BY discount ORDER BY price) FROM transactions",
            "SELECT SUM(amount) PARTITION BY discount ORDER BY price FROM transactions",
            "SELECT SUM(amount) OVER (ORDER BY discount PARTITION BY price) FROM transactions",
            "SELECT SUM(amount) OVER (PARTITION BY discount ORDER BY price) FROM transactions"
        ],
        "correct": [
            3
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 37,
        "type": "single",
        "difficulty": 3,
        "question": "You have a Kafka topic `transactions` with 5000 partitions. If you spin up 5 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "Each reads all 5000 partitions",
            "Consumer 1 reads 2500, Consumer 2 reads 2500",
            "Partitions are randomly assigned dynamically per message",
            "It depends on the producer routing key"
        ],
        "correct": [
            1
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 38,
        "type": "single",
        "difficulty": 3,
        "question": "You have a Kafka topic `events` with 5000 partitions. If you spin up 2 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "It depends on the producer routing key",
            "Each reads all 5000 partitions",
            "Partitions are randomly assigned dynamically per message",
            "Consumer 1 reads 2500, Consumer 2 reads 2500"
        ],
        "correct": [
            3
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 39,
        "type": "single",
        "difficulty": 2,
        "question": "In a Star Schema, the `clicks` table contains foreign keys to dimension tables and quantitative metrics like `status`. What type of table is this?",
        "options": [
            "Aggregate Table",
            "Dimension Table",
            "Fact Table",
            "Bridge Table"
        ],
        "correct": [
            2
        ],
        "concept": "Fact tables contain quantitative data (measurements) and foreign keys referencing dimension tables."
    },
    {
        "id": 40,
        "type": "single",
        "difficulty": 2,
        "question": "You have a Kafka topic `logs` with 100 partitions. If you spin up 5 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "It depends on the producer routing key",
            "Partitions are randomly assigned dynamically per message",
            "Each reads all 100 partitions",
            "Consumer 1 reads 50, Consumer 2 reads 50"
        ],
        "correct": [
            3
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 41,
        "type": "single",
        "difficulty": 3,
        "question": "When designing a slowly changing dimension (SCD) for `transactions`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
        "options": [
            "Type 3",
            "Type 1",
            "Type 2",
            "Type 4"
        ],
        "correct": [
            2
        ],
        "concept": "SCD Type 2 tracks historical data by creating multiple records for a given natural key with effective dates."
    },
    {
        "id": 42,
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
        "id": 43,
        "type": "single",
        "difficulty": 2,
        "question": "Given the table `payments`, which SQL query calculates the cumulative sum of `discount` partitioned by `revenue` ordered by `user_id`?",
        "options": [
            "SELECT CUMSUM(discount) OVER (PARTITION BY revenue ORDER BY user_id) FROM payments",
            "SELECT SUM(discount) OVER (ORDER BY revenue PARTITION BY user_id) FROM payments",
            "SELECT SUM(discount) OVER (PARTITION BY revenue ORDER BY user_id) FROM payments",
            "SELECT SUM(discount) PARTITION BY revenue ORDER BY user_id FROM payments"
        ],
        "correct": [
            2
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 44,
        "type": "single",
        "difficulty": 3,
        "question": "You have a Kafka topic `clicks` with 5000 partitions. If you spin up 3 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "It depends on the producer routing key",
            "Consumer 1 reads 2500, Consumer 2 reads 2500",
            "Partitions are randomly assigned dynamically per message",
            "Each reads all 5000 partitions"
        ],
        "correct": [
            1
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 45,
        "type": "single",
        "difficulty": 2,
        "question": "You are storing 100 TB of raw JSON logs in an S3 bucket named `orders`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
        "options": [
            "Amazon RDS",
            "Amazon Athena",
            "Amazon Redshift",
            "AWS Glue"
        ],
        "correct": [
            1
        ],
        "concept": "Amazon Athena allows you to run interactive SQL queries directly against data in Amazon S3."
    },
    {
        "id": 46,
        "type": "single",
        "difficulty": 2,
        "question": "When designing a slowly changing dimension (SCD) for `events`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
        "options": [
            "Type 1",
            "Type 2",
            "Type 3",
            "Type 4"
        ],
        "correct": [
            1
        ],
        "concept": "SCD Type 2 tracks historical data by creating multiple records for a given natural key with effective dates."
    },
    {
        "id": 47,
        "type": "single",
        "difficulty": 1,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `discount` is greater than 5000 and drop duplicates based on `discount`?",
        "options": [
            "df.filter(df.discount > 5000).dropDuplicates('discount')",
            "df.filter('discount' > 5000).drop_duplicates('discount')",
            "df.where('discount' > 5000).distinct('discount')",
            "df.filter(F.col('discount') > 5000).dropDuplicates(['discount'])"
        ],
        "correct": [
            3
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 48,
        "type": "single",
        "difficulty": 3,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `discount`?",
        "options": [
            "CSV",
            "Avro",
            "JSON",
            "Parquet"
        ],
        "correct": [
            3
        ],
        "concept": "Apache Parquet is a columnar storage format highly optimized for analytical (OLAP) queries."
    },
    {
        "id": 49,
        "type": "single",
        "difficulty": 2,
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
        "id": 50,
        "type": "single",
        "difficulty": 1,
        "question": "You have a Kafka topic `events` with 10 partitions. If you spin up 5 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "It depends on the producer routing key",
            "Consumer 1 reads 5, Consumer 2 reads 5",
            "Partitions are randomly assigned dynamically per message",
            "Each reads all 10 partitions"
        ],
        "correct": [
            1
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 51,
        "type": "single",
        "difficulty": 2,
        "question": "What is the output of `sum(x for x in range(50) if x % 4 == 0)`?",
        "options": [
            "312",
            "624",
            "308",
            "316"
        ],
        "correct": [
            0
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 50 that are divisible by 4."
    },
    {
        "id": 52,
        "type": "single",
        "difficulty": 1,
        "question": "Given the table `transactions`, which SQL query calculates the cumulative sum of `amount` partitioned by `discount` ordered by `session_id`?",
        "options": [
            "SELECT SUM(amount) PARTITION BY discount ORDER BY session_id FROM transactions",
            "SELECT SUM(amount) OVER (ORDER BY discount PARTITION BY session_id) FROM transactions",
            "SELECT CUMSUM(amount) OVER (PARTITION BY discount ORDER BY session_id) FROM transactions",
            "SELECT SUM(amount) OVER (PARTITION BY discount ORDER BY session_id) FROM transactions"
        ],
        "correct": [
            3
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 53,
        "type": "single",
        "difficulty": 3,
        "question": "In Airflow, if task A and task B are upstream of task C, and you want task C to run ONLY if both A and B succeed, which trigger rule should you use for task C?",
        "options": [
            "one_success",
            "all_done",
            "all_success",
            "none_failed"
        ],
        "correct": [
            2
        ],
        "concept": "all_success is the default trigger rule in Airflow, requiring all upstream tasks to succeed."
    },
    {
        "id": 54,
        "type": "single",
        "difficulty": 1,
        "question": "When designing a slowly changing dimension (SCD) for `transactions`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
        "options": [
            "Type 1",
            "Type 3",
            "Type 2",
            "Type 4"
        ],
        "correct": [
            2
        ],
        "concept": "SCD Type 2 tracks historical data by creating multiple records for a given natural key with effective dates."
    },
    {
        "id": 55,
        "type": "single",
        "difficulty": 3,
        "question": "In Airflow, if task A and task B are upstream of task C, and you want task C to run ONLY if both A and B succeed, which trigger rule should you use for task C?",
        "options": [
            "all_done",
            "all_success",
            "one_success",
            "none_failed"
        ],
        "correct": [
            1
        ],
        "concept": "all_success is the default trigger rule in Airflow, requiring all upstream tasks to succeed."
    },
    {
        "id": 56,
        "type": "single",
        "difficulty": 2,
        "question": "Given the table `customers`, which SQL query calculates the cumulative sum of `revenue` partitioned by `price` ordered by `price`?",
        "options": [
            "SELECT SUM(revenue) OVER (PARTITION BY price ORDER BY price) FROM customers",
            "SELECT SUM(revenue) OVER (ORDER BY price PARTITION BY price) FROM customers",
            "SELECT CUMSUM(revenue) OVER (PARTITION BY price ORDER BY price) FROM customers",
            "SELECT SUM(revenue) PARTITION BY price ORDER BY price FROM customers"
        ],
        "correct": [
            0
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 57,
        "type": "single",
        "difficulty": 3,
        "question": "You have a Kafka topic `transactions` with 500 partitions. If you spin up 2 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "Consumer 1 reads 250, Consumer 2 reads 250",
            "It depends on the producer routing key",
            "Each reads all 500 partitions",
            "Partitions are randomly assigned dynamically per message"
        ],
        "correct": [
            0
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 58,
        "type": "single",
        "difficulty": 3,
        "question": "You have a Kafka topic `users` with 5000 partitions. If you spin up 5 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "Consumer 1 reads 2500, Consumer 2 reads 2500",
            "Each reads all 5000 partitions",
            "Partitions are randomly assigned dynamically per message",
            "It depends on the producer routing key"
        ],
        "correct": [
            0
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 59,
        "type": "single",
        "difficulty": 3,
        "question": "What is the output of `sum(x for x in range(5000) if x % 5 == 0)`?",
        "options": [
            "2497495",
            "2497500",
            "4995000",
            "2497505"
        ],
        "correct": [
            1
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 5000 that are divisible by 5."
    },
    {
        "id": 60,
        "type": "single",
        "difficulty": 2,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM orders WHERE user_id = '1000'`?",
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
        "id": 61,
        "type": "single",
        "difficulty": 2,
        "question": "In a Star Schema, the `orders` table contains foreign keys to dimension tables and quantitative metrics like `status`. What type of table is this?",
        "options": [
            "Fact Table",
            "Aggregate Table",
            "Dimension Table",
            "Bridge Table"
        ],
        "correct": [
            0
        ],
        "concept": "Fact tables contain quantitative data (measurements) and foreign keys referencing dimension tables."
    },
    {
        "id": 62,
        "type": "single",
        "difficulty": 2,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM customers WHERE user_id = '10'`?",
        "options": [
            "Database Storage Layer",
            "Metadata Layer",
            "Cloud Services Layer",
            "Virtual Warehouse (Compute)"
        ],
        "correct": [
            3
        ],
        "concept": "Query execution and data processing are handled by the Virtual Warehouses (Compute Layer)."
    },
    {
        "id": 63,
        "type": "single",
        "difficulty": 3,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `revenue`?",
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
        "id": 64,
        "type": "single",
        "difficulty": 3,
        "question": "You have a Kafka topic `inventory` with 500 partitions. If you spin up 2 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "Consumer 1 reads 250, Consumer 2 reads 250",
            "Partitions are randomly assigned dynamically per message",
            "Each reads all 500 partitions",
            "It depends on the producer routing key"
        ],
        "correct": [
            0
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 65,
        "type": "single",
        "difficulty": 3,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM transactions WHERE price = '50'`?",
        "options": [
            "Cloud Services Layer",
            "Metadata Layer",
            "Virtual Warehouse (Compute)",
            "Database Storage Layer"
        ],
        "correct": [
            2
        ],
        "concept": "Query execution and data processing are handled by the Virtual Warehouses (Compute Layer)."
    },
    {
        "id": 66,
        "type": "single",
        "difficulty": 3,
        "question": "What is the output of `sum(x for x in range(10000) if x % 3 == 0)`?",
        "options": [
            "16668333",
            "16668330",
            "33336666",
            "16668336"
        ],
        "correct": [
            0
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 10000 that are divisible by 3."
    },
    {
        "id": 67,
        "type": "single",
        "difficulty": 3,
        "question": "Given the table `transactions`, which SQL query calculates the cumulative sum of `revenue` partitioned by `discount` ordered by `revenue`?",
        "options": [
            "SELECT CUMSUM(revenue) OVER (PARTITION BY discount ORDER BY revenue) FROM transactions",
            "SELECT SUM(revenue) OVER (ORDER BY discount PARTITION BY revenue) FROM transactions",
            "SELECT SUM(revenue) OVER (PARTITION BY discount ORDER BY revenue) FROM transactions",
            "SELECT SUM(revenue) PARTITION BY discount ORDER BY revenue FROM transactions"
        ],
        "correct": [
            2
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 68,
        "type": "single",
        "difficulty": 2,
        "question": "In Airflow, if task A and task B are upstream of task C, and you want task C to run ONLY if both A and B succeed, which trigger rule should you use for task C?",
        "options": [
            "none_failed",
            "all_success",
            "all_done",
            "one_success"
        ],
        "correct": [
            1
        ],
        "concept": "all_success is the default trigger rule in Airflow, requiring all upstream tasks to succeed."
    },
    {
        "id": 69,
        "type": "single",
        "difficulty": 3,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `price`?",
        "options": [
            "Avro",
            "JSON",
            "Parquet",
            "CSV"
        ],
        "correct": [
            2
        ],
        "concept": "Apache Parquet is a columnar storage format highly optimized for analytical (OLAP) queries."
    },
    {
        "id": 70,
        "type": "single",
        "difficulty": 3,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `user_id`?",
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
        "id": 71,
        "type": "single",
        "difficulty": 1,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM sales WHERE user_id = '10000'`?",
        "options": [
            "Metadata Layer",
            "Database Storage Layer",
            "Cloud Services Layer",
            "Virtual Warehouse (Compute)"
        ],
        "correct": [
            3
        ],
        "concept": "Query execution and data processing are handled by the Virtual Warehouses (Compute Layer)."
    },
    {
        "id": 72,
        "type": "single",
        "difficulty": 1,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `status`?",
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
        "id": 73,
        "type": "single",
        "difficulty": 2,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `discount` is greater than 50 and drop duplicates based on `price`?",
        "options": [
            "df.filter(df.discount > 50).dropDuplicates('price')",
            "df.filter('discount' > 50).drop_duplicates('price')",
            "df.where('discount' > 50).distinct('price')",
            "df.filter(F.col('discount') > 50).dropDuplicates(['price'])"
        ],
        "correct": [
            3
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 74,
        "type": "single",
        "difficulty": 1,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `quantity` is greater than 100 and drop duplicates based on `revenue`?",
        "options": [
            "df.filter(df.quantity > 100).dropDuplicates('revenue')",
            "df.filter('quantity' > 100).drop_duplicates('revenue')",
            "df.where('quantity' > 100).distinct('revenue')",
            "df.filter(F.col('quantity') > 100).dropDuplicates(['revenue'])"
        ],
        "correct": [
            3
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 75,
        "type": "single",
        "difficulty": 3,
        "question": "In a Star Schema, the `logs` table contains foreign keys to dimension tables and quantitative metrics like `quantity`. What type of table is this?",
        "options": [
            "Fact Table",
            "Bridge Table",
            "Dimension Table",
            "Aggregate Table"
        ],
        "correct": [
            0
        ],
        "concept": "Fact tables contain quantitative data (measurements) and foreign keys referencing dimension tables."
    },
    {
        "id": 76,
        "type": "single",
        "difficulty": 3,
        "question": "You are storing 100 TB of raw JSON logs in an S3 bucket named `customers`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
        "options": [
            "Amazon RDS",
            "Amazon Athena",
            "Amazon Redshift",
            "AWS Glue"
        ],
        "correct": [
            1
        ],
        "concept": "Amazon Athena allows you to run interactive SQL queries directly against data in Amazon S3."
    },
    {
        "id": 77,
        "type": "single",
        "difficulty": 3,
        "question": "When designing a slowly changing dimension (SCD) for `orders`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
        "options": [
            "Type 3",
            "Type 2",
            "Type 4",
            "Type 1"
        ],
        "correct": [
            1
        ],
        "concept": "SCD Type 2 tracks historical data by creating multiple records for a given natural key with effective dates."
    },
    {
        "id": 78,
        "type": "single",
        "difficulty": 3,
        "question": "Given the table `events`, which SQL query calculates the cumulative sum of `status` partitioned by `quantity` ordered by `revenue`?",
        "options": [
            "SELECT CUMSUM(status) OVER (PARTITION BY quantity ORDER BY revenue) FROM events",
            "SELECT SUM(status) OVER (ORDER BY quantity PARTITION BY revenue) FROM events",
            "SELECT SUM(status) OVER (PARTITION BY quantity ORDER BY revenue) FROM events",
            "SELECT SUM(status) PARTITION BY quantity ORDER BY revenue FROM events"
        ],
        "correct": [
            2
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 79,
        "type": "single",
        "difficulty": 3,
        "question": "You have a Kafka topic `sales` with 50 partitions. If you spin up 5 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "Partitions are randomly assigned dynamically per message",
            "It depends on the producer routing key",
            "Each reads all 50 partitions",
            "Consumer 1 reads 25, Consumer 2 reads 25"
        ],
        "correct": [
            3
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 80,
        "type": "single",
        "difficulty": 3,
        "question": "You have a Kafka topic `users` with 100 partitions. If you spin up 4 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "Partitions are randomly assigned dynamically per message",
            "Consumer 1 reads 50, Consumer 2 reads 50",
            "It depends on the producer routing key",
            "Each reads all 100 partitions"
        ],
        "correct": [
            1
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 81,
        "type": "single",
        "difficulty": 2,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `user_id` is greater than 500 and drop duplicates based on `discount`?",
        "options": [
            "df.filter(F.col('user_id') > 500).dropDuplicates(['discount'])",
            "df.filter('user_id' > 500).drop_duplicates('discount')",
            "df.where('user_id' > 500).distinct('discount')",
            "df.filter(df.user_id > 500).dropDuplicates('discount')"
        ],
        "correct": [
            0
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 82,
        "type": "single",
        "difficulty": 3,
        "question": "When designing a slowly changing dimension (SCD) for `transactions`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
        "options": [
            "Type 1",
            "Type 3",
            "Type 2",
            "Type 4"
        ],
        "correct": [
            2
        ],
        "concept": "SCD Type 2 tracks historical data by creating multiple records for a given natural key with effective dates."
    },
    {
        "id": 83,
        "type": "single",
        "difficulty": 1,
        "question": "You have a Kafka topic `customers` with 10000 partitions. If you spin up 5 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "Each reads all 10000 partitions",
            "It depends on the producer routing key",
            "Partitions are randomly assigned dynamically per message",
            "Consumer 1 reads 5000, Consumer 2 reads 5000"
        ],
        "correct": [
            3
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 84,
        "type": "single",
        "difficulty": 3,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM logs WHERE session_id = '100'`?",
        "options": [
            "Cloud Services Layer",
            "Database Storage Layer",
            "Virtual Warehouse (Compute)",
            "Metadata Layer"
        ],
        "correct": [
            2
        ],
        "concept": "Query execution and data processing are handled by the Virtual Warehouses (Compute Layer)."
    },
    {
        "id": 85,
        "type": "single",
        "difficulty": 1,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `quantity` is greater than 10 and drop duplicates based on `user_id`?",
        "options": [
            "df.filter(F.col('quantity') > 10).dropDuplicates(['user_id'])",
            "df.where('quantity' > 10).distinct('user_id')",
            "df.filter('quantity' > 10).drop_duplicates('user_id')",
            "df.filter(df.quantity > 10).dropDuplicates('user_id')"
        ],
        "correct": [
            0
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 86,
        "type": "single",
        "difficulty": 2,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM logs WHERE timestamp = '1000'`?",
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
        "id": 87,
        "type": "single",
        "difficulty": 1,
        "question": "You have a Kafka topic `sales` with 50 partitions. If you spin up 3 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "It depends on the producer routing key",
            "Each reads all 50 partitions",
            "Partitions are randomly assigned dynamically per message",
            "Consumer 1 reads 25, Consumer 2 reads 25"
        ],
        "correct": [
            3
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 88,
        "type": "single",
        "difficulty": 1,
        "question": "Given the table `events`, which SQL query calculates the cumulative sum of `quantity` partitioned by `user_id` ordered by `amount`?",
        "options": [
            "SELECT SUM(quantity) OVER (ORDER BY user_id PARTITION BY amount) FROM events",
            "SELECT CUMSUM(quantity) OVER (PARTITION BY user_id ORDER BY amount) FROM events",
            "SELECT SUM(quantity) PARTITION BY user_id ORDER BY amount FROM events",
            "SELECT SUM(quantity) OVER (PARTITION BY user_id ORDER BY amount) FROM events"
        ],
        "correct": [
            3
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 89,
        "type": "single",
        "difficulty": 3,
        "question": "Given the table `logs`, which SQL query calculates the cumulative sum of `status` partitioned by `price` ordered by `discount`?",
        "options": [
            "SELECT SUM(status) PARTITION BY price ORDER BY discount FROM logs",
            "SELECT CUMSUM(status) OVER (PARTITION BY price ORDER BY discount) FROM logs",
            "SELECT SUM(status) OVER (PARTITION BY price ORDER BY discount) FROM logs",
            "SELECT SUM(status) OVER (ORDER BY price PARTITION BY discount) FROM logs"
        ],
        "correct": [
            2
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 90,
        "type": "single",
        "difficulty": 3,
        "question": "You are storing 50 TB of raw JSON logs in an S3 bucket named `clicks`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
        "options": [
            "AWS Glue",
            "Amazon Redshift",
            "Amazon Athena",
            "Amazon RDS"
        ],
        "correct": [
            2
        ],
        "concept": "Amazon Athena allows you to run interactive SQL queries directly against data in Amazon S3."
    },
    {
        "id": 91,
        "type": "single",
        "difficulty": 1,
        "question": "You are storing 100 TB of raw JSON logs in an S3 bucket named `customers`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
        "options": [
            "Amazon Athena",
            "AWS Glue",
            "Amazon Redshift",
            "Amazon RDS"
        ],
        "correct": [
            0
        ],
        "concept": "Amazon Athena allows you to run interactive SQL queries directly against data in Amazon S3."
    },
    {
        "id": 92,
        "type": "single",
        "difficulty": 3,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM clicks WHERE status = '10'`?",
        "options": [
            "Cloud Services Layer",
            "Metadata Layer",
            "Database Storage Layer",
            "Virtual Warehouse (Compute)"
        ],
        "correct": [
            3
        ],
        "concept": "Query execution and data processing are handled by the Virtual Warehouses (Compute Layer)."
    },
    {
        "id": 93,
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
        "id": 94,
        "type": "single",
        "difficulty": 2,
        "question": "In Airflow, if task A and task B are upstream of task C, and you want task C to run ONLY if both A and B succeed, which trigger rule should you use for task C?",
        "options": [
            "one_success",
            "none_failed",
            "all_done",
            "all_success"
        ],
        "correct": [
            3
        ],
        "concept": "all_success is the default trigger rule in Airflow, requiring all upstream tasks to succeed."
    },
    {
        "id": 95,
        "type": "single",
        "difficulty": 3,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `quantity` is greater than 5000 and drop duplicates based on `amount`?",
        "options": [
            "df.filter(df.quantity > 5000).dropDuplicates('amount')",
            "df.where('quantity' > 5000).distinct('amount')",
            "df.filter(F.col('quantity') > 5000).dropDuplicates(['amount'])",
            "df.filter('quantity' > 5000).drop_duplicates('amount')"
        ],
        "correct": [
            2
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 96,
        "type": "single",
        "difficulty": 1,
        "question": "In a Star Schema, the `sales` table contains foreign keys to dimension tables and quantitative metrics like `session_id`. What type of table is this?",
        "options": [
            "Aggregate Table",
            "Bridge Table",
            "Dimension Table",
            "Fact Table"
        ],
        "correct": [
            3
        ],
        "concept": "Fact tables contain quantitative data (measurements) and foreign keys referencing dimension tables."
    },
    {
        "id": 97,
        "type": "single",
        "difficulty": 1,
        "question": "You have a Kafka topic `payments` with 1000 partitions. If you spin up 3 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "Each reads all 1000 partitions",
            "It depends on the producer routing key",
            "Consumer 1 reads 500, Consumer 2 reads 500",
            "Partitions are randomly assigned dynamically per message"
        ],
        "correct": [
            2
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 98,
        "type": "single",
        "difficulty": 2,
        "question": "When designing a slowly changing dimension (SCD) for `transactions`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
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
        "id": 99,
        "type": "single",
        "difficulty": 1,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `amount`?",
        "options": [
            "Avro",
            "Parquet",
            "JSON",
            "CSV"
        ],
        "correct": [
            1
        ],
        "concept": "Apache Parquet is a columnar storage format highly optimized for analytical (OLAP) queries."
    },
    {
        "id": 100,
        "type": "single",
        "difficulty": 1,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `discount`?",
        "options": [
            "CSV",
            "Avro",
            "JSON",
            "Parquet"
        ],
        "correct": [
            3
        ],
        "concept": "Apache Parquet is a columnar storage format highly optimized for analytical (OLAP) queries."
    }
]
};

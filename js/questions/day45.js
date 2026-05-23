window.QUIZ_DATA = window.QUIZ_DATA || {};
window.QUIZ_DATA["day45"] = {
  title: "Data Engineering Masterclass - Day 45",
  topics: ["SQL", "PySpark", "Airflow", "Kafka", "Data Modeling", "AWS", "Snowflake"],
  questions: [
    {
        "id": 1,
        "type": "single",
        "difficulty": 1,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM clicks WHERE timestamp = '5000'`?",
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
        "id": 2,
        "type": "single",
        "difficulty": 2,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM sales WHERE status = '5000'`?",
        "options": [
            "Database Storage Layer",
            "Cloud Services Layer",
            "Virtual Warehouse (Compute)",
            "Metadata Layer"
        ],
        "correct": [
            2
        ],
        "concept": "Query execution and data processing are handled by the Virtual Warehouses (Compute Layer)."
    },
    {
        "id": 3,
        "type": "single",
        "difficulty": 1,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `amount` is greater than 10 and drop duplicates based on `price`?",
        "options": [
            "df.where('amount' > 10).distinct('price')",
            "df.filter('amount' > 10).drop_duplicates('price')",
            "df.filter(df.amount > 10).dropDuplicates('price')",
            "df.filter(F.col('amount') > 10).dropDuplicates(['price'])"
        ],
        "correct": [
            3
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 4,
        "type": "single",
        "difficulty": 3,
        "question": "In a Star Schema, the `inventory` table contains foreign keys to dimension tables and quantitative metrics like `revenue`. What type of table is this?",
        "options": [
            "Dimension Table",
            "Fact Table",
            "Bridge Table",
            "Aggregate Table"
        ],
        "correct": [
            1
        ],
        "concept": "Fact tables contain quantitative data (measurements) and foreign keys referencing dimension tables."
    },
    {
        "id": 5,
        "type": "single",
        "difficulty": 1,
        "question": "Given the table `customers`, which SQL query calculates the cumulative sum of `session_id` partitioned by `price` ordered by `status`?",
        "options": [
            "SELECT SUM(session_id) PARTITION BY price ORDER BY status FROM customers",
            "SELECT CUMSUM(session_id) OVER (PARTITION BY price ORDER BY status) FROM customers",
            "SELECT SUM(session_id) OVER (ORDER BY price PARTITION BY status) FROM customers",
            "SELECT SUM(session_id) OVER (PARTITION BY price ORDER BY status) FROM customers"
        ],
        "correct": [
            3
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 6,
        "type": "single",
        "difficulty": 1,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `user_id` is greater than 100 and drop duplicates based on `tax`?",
        "options": [
            "df.where('user_id' > 100).distinct('tax')",
            "df.filter(F.col('user_id') > 100).dropDuplicates(['tax'])",
            "df.filter('user_id' > 100).drop_duplicates('tax')",
            "df.filter(df.user_id > 100).dropDuplicates('tax')"
        ],
        "correct": [
            1
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 7,
        "type": "single",
        "difficulty": 3,
        "question": "You are storing 5000 TB of raw JSON logs in an S3 bucket named `customers`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
        "options": [
            "Amazon Redshift",
            "AWS Glue",
            "Amazon RDS",
            "Amazon Athena"
        ],
        "correct": [
            3
        ],
        "concept": "Amazon Athena allows you to run interactive SQL queries directly against data in Amazon S3."
    },
    {
        "id": 8,
        "type": "single",
        "difficulty": 2,
        "question": "Given the table `orders`, which SQL query calculates the cumulative sum of `amount` partitioned by `price` ordered by `timestamp`?",
        "options": [
            "SELECT SUM(amount) PARTITION BY price ORDER BY timestamp FROM orders",
            "SELECT SUM(amount) OVER (ORDER BY price PARTITION BY timestamp) FROM orders",
            "SELECT SUM(amount) OVER (PARTITION BY price ORDER BY timestamp) FROM orders",
            "SELECT CUMSUM(amount) OVER (PARTITION BY price ORDER BY timestamp) FROM orders"
        ],
        "correct": [
            2
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 9,
        "type": "single",
        "difficulty": 2,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM transactions WHERE quantity = '50'`?",
        "options": [
            "Database Storage Layer",
            "Virtual Warehouse (Compute)",
            "Metadata Layer",
            "Cloud Services Layer"
        ],
        "correct": [
            1
        ],
        "concept": "Query execution and data processing are handled by the Virtual Warehouses (Compute Layer)."
    },
    {
        "id": 10,
        "type": "single",
        "difficulty": 1,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `timestamp`?",
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
        "id": 11,
        "type": "single",
        "difficulty": 2,
        "question": "You have a Kafka topic `transactions` with 50 partitions. If you spin up 5 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "Partitions are randomly assigned dynamically per message",
            "Each reads all 50 partitions",
            "It depends on the producer routing key",
            "Consumer 1 reads 25, Consumer 2 reads 25"
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
        "question": "You are storing 1000 TB of raw JSON logs in an S3 bucket named `transactions`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
        "options": [
            "Amazon RDS",
            "Amazon Redshift",
            "Amazon Athena",
            "AWS Glue"
        ],
        "correct": [
            2
        ],
        "concept": "Amazon Athena allows you to run interactive SQL queries directly against data in Amazon S3."
    },
    {
        "id": 13,
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
        "id": 14,
        "type": "single",
        "difficulty": 1,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `price`?",
        "options": [
            "Avro",
            "Parquet",
            "CSV",
            "JSON"
        ],
        "correct": [
            1
        ],
        "concept": "Apache Parquet is a columnar storage format highly optimized for analytical (OLAP) queries."
    },
    {
        "id": 15,
        "type": "single",
        "difficulty": 3,
        "question": "Given the table `clicks`, which SQL query calculates the cumulative sum of `timestamp` partitioned by `status` ordered by `quantity`?",
        "options": [
            "SELECT SUM(timestamp) OVER (PARTITION BY status ORDER BY quantity) FROM clicks",
            "SELECT CUMSUM(timestamp) OVER (PARTITION BY status ORDER BY quantity) FROM clicks",
            "SELECT SUM(timestamp) PARTITION BY status ORDER BY quantity FROM clicks",
            "SELECT SUM(timestamp) OVER (ORDER BY status PARTITION BY quantity) FROM clicks"
        ],
        "correct": [
            0
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 16,
        "type": "single",
        "difficulty": 2,
        "question": "When designing a slowly changing dimension (SCD) for `users`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
        "options": [
            "Type 4",
            "Type 3",
            "Type 1",
            "Type 2"
        ],
        "correct": [
            3
        ],
        "concept": "SCD Type 2 tracks historical data by creating multiple records for a given natural key with effective dates."
    },
    {
        "id": 17,
        "type": "single",
        "difficulty": 2,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM sales WHERE quantity = '10'`?",
        "options": [
            "Database Storage Layer",
            "Virtual Warehouse (Compute)",
            "Metadata Layer",
            "Cloud Services Layer"
        ],
        "correct": [
            1
        ],
        "concept": "Query execution and data processing are handled by the Virtual Warehouses (Compute Layer)."
    },
    {
        "id": 18,
        "type": "single",
        "difficulty": 2,
        "question": "When designing a slowly changing dimension (SCD) for `customers`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
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
        "id": 19,
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
        "id": 20,
        "type": "single",
        "difficulty": 1,
        "question": "You are storing 5000 TB of raw JSON logs in an S3 bucket named `inventory`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
        "options": [
            "AWS Glue",
            "Amazon RDS",
            "Amazon Athena",
            "Amazon Redshift"
        ],
        "correct": [
            2
        ],
        "concept": "Amazon Athena allows you to run interactive SQL queries directly against data in Amazon S3."
    },
    {
        "id": 21,
        "type": "single",
        "difficulty": 2,
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
        "id": 22,
        "type": "single",
        "difficulty": 2,
        "question": "You have a Kafka topic `transactions` with 5000 partitions. If you spin up 2 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "It depends on the producer routing key",
            "Partitions are randomly assigned dynamically per message",
            "Each reads all 5000 partitions",
            "Consumer 1 reads 2500, Consumer 2 reads 2500"
        ],
        "correct": [
            3
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 23,
        "type": "single",
        "difficulty": 1,
        "question": "You are storing 100 TB of raw JSON logs in an S3 bucket named `logs`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
        "options": [
            "Amazon RDS",
            "Amazon Redshift",
            "AWS Glue",
            "Amazon Athena"
        ],
        "correct": [
            3
        ],
        "concept": "Amazon Athena allows you to run interactive SQL queries directly against data in Amazon S3."
    },
    {
        "id": 24,
        "type": "single",
        "difficulty": 2,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM payments WHERE user_id = '1000'`?",
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
        "id": 25,
        "type": "single",
        "difficulty": 2,
        "question": "You have a Kafka topic `events` with 5000 partitions. If you spin up 4 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "Partitions are randomly assigned dynamically per message",
            "Each reads all 5000 partitions",
            "It depends on the producer routing key",
            "Consumer 1 reads 2500, Consumer 2 reads 2500"
        ],
        "correct": [
            3
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 26,
        "type": "single",
        "difficulty": 2,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM orders WHERE timestamp = '5000'`?",
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
        "id": 27,
        "type": "single",
        "difficulty": 3,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM orders WHERE amount = '50'`?",
        "options": [
            "Cloud Services Layer",
            "Virtual Warehouse (Compute)",
            "Database Storage Layer",
            "Metadata Layer"
        ],
        "correct": [
            1
        ],
        "concept": "Query execution and data processing are handled by the Virtual Warehouses (Compute Layer)."
    },
    {
        "id": 28,
        "type": "single",
        "difficulty": 2,
        "question": "You have a Kafka topic `inventory` with 10 partitions. If you spin up 5 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "It depends on the producer routing key",
            "Consumer 1 reads 5, Consumer 2 reads 5",
            "Each reads all 10 partitions",
            "Partitions are randomly assigned dynamically per message"
        ],
        "correct": [
            1
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 29,
        "type": "single",
        "difficulty": 2,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM users WHERE status = '100'`?",
        "options": [
            "Database Storage Layer",
            "Cloud Services Layer",
            "Virtual Warehouse (Compute)",
            "Metadata Layer"
        ],
        "correct": [
            2
        ],
        "concept": "Query execution and data processing are handled by the Virtual Warehouses (Compute Layer)."
    },
    {
        "id": 30,
        "type": "single",
        "difficulty": 1,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM logs WHERE tax = '500'`?",
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
        "id": 31,
        "type": "single",
        "difficulty": 2,
        "question": "You are storing 10000 TB of raw JSON logs in an S3 bucket named `logs`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
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
        "id": 32,
        "type": "single",
        "difficulty": 2,
        "question": "Given the table `inventory`, which SQL query calculates the cumulative sum of `revenue` partitioned by `price` ordered by `status`?",
        "options": [
            "SELECT CUMSUM(revenue) OVER (PARTITION BY price ORDER BY status) FROM inventory",
            "SELECT SUM(revenue) OVER (ORDER BY price PARTITION BY status) FROM inventory",
            "SELECT SUM(revenue) OVER (PARTITION BY price ORDER BY status) FROM inventory",
            "SELECT SUM(revenue) PARTITION BY price ORDER BY status FROM inventory"
        ],
        "correct": [
            2
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 33,
        "type": "single",
        "difficulty": 2,
        "question": "You have a Kafka topic `customers` with 10 partitions. If you spin up 5 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "Consumer 1 reads 5, Consumer 2 reads 5",
            "It depends on the producer routing key",
            "Each reads all 10 partitions",
            "Partitions are randomly assigned dynamically per message"
        ],
        "correct": [
            0
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 34,
        "type": "single",
        "difficulty": 2,
        "question": "You have a Kafka topic `clicks` with 500 partitions. If you spin up 4 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "Each reads all 500 partitions",
            "Partitions are randomly assigned dynamically per message",
            "Consumer 1 reads 250, Consumer 2 reads 250",
            "It depends on the producer routing key"
        ],
        "correct": [
            2
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 35,
        "type": "single",
        "difficulty": 1,
        "question": "What is the output of `sum(x for x in range(100) if x % 4 == 0)`?",
        "options": [
            "1204",
            "1200",
            "1196",
            "2400"
        ],
        "correct": [
            1
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 100 that are divisible by 4."
    },
    {
        "id": 36,
        "type": "single",
        "difficulty": 2,
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
        "id": 37,
        "type": "single",
        "difficulty": 1,
        "question": "When designing a slowly changing dimension (SCD) for `events`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
        "options": [
            "Type 3",
            "Type 4",
            "Type 1",
            "Type 2"
        ],
        "correct": [
            3
        ],
        "concept": "SCD Type 2 tracks historical data by creating multiple records for a given natural key with effective dates."
    },
    {
        "id": 38,
        "type": "single",
        "difficulty": 2,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `price`?",
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
        "id": 39,
        "type": "single",
        "difficulty": 3,
        "question": "You have a Kafka topic `customers` with 500 partitions. If you spin up 4 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "Consumer 1 reads 250, Consumer 2 reads 250",
            "Each reads all 500 partitions",
            "It depends on the producer routing key",
            "Partitions are randomly assigned dynamically per message"
        ],
        "correct": [
            0
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 40,
        "type": "single",
        "difficulty": 3,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM users WHERE price = '500'`?",
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
        "id": 41,
        "type": "single",
        "difficulty": 3,
        "question": "You have a Kafka topic `events` with 100 partitions. If you spin up 2 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "Consumer 1 reads 50, Consumer 2 reads 50",
            "Each reads all 100 partitions",
            "Partitions are randomly assigned dynamically per message",
            "It depends on the producer routing key"
        ],
        "correct": [
            0
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 42,
        "type": "single",
        "difficulty": 2,
        "question": "You are storing 10 TB of raw JSON logs in an S3 bucket named `sales`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
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
        "id": 43,
        "type": "single",
        "difficulty": 2,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM clicks WHERE quantity = '1000'`?",
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
        "id": 44,
        "type": "single",
        "difficulty": 1,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `tax` is greater than 5000 and drop duplicates based on `discount`?",
        "options": [
            "df.filter('tax' > 5000).drop_duplicates('discount')",
            "df.where('tax' > 5000).distinct('discount')",
            "df.filter(df.tax > 5000).dropDuplicates('discount')",
            "df.filter(F.col('tax') > 5000).dropDuplicates(['discount'])"
        ],
        "correct": [
            3
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 45,
        "type": "single",
        "difficulty": 2,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `status`?",
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
        "id": 46,
        "type": "single",
        "difficulty": 2,
        "question": "When designing a slowly changing dimension (SCD) for `users`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
        "options": [
            "Type 4",
            "Type 3",
            "Type 2",
            "Type 1"
        ],
        "correct": [
            2
        ],
        "concept": "SCD Type 2 tracks historical data by creating multiple records for a given natural key with effective dates."
    },
    {
        "id": 47,
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
        "id": 48,
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
        "id": 49,
        "type": "single",
        "difficulty": 2,
        "question": "Given the table `inventory`, which SQL query calculates the cumulative sum of `tax` partitioned by `user_id` ordered by `user_id`?",
        "options": [
            "SELECT SUM(tax) PARTITION BY user_id ORDER BY user_id FROM inventory",
            "SELECT SUM(tax) OVER (ORDER BY user_id PARTITION BY user_id) FROM inventory",
            "SELECT CUMSUM(tax) OVER (PARTITION BY user_id ORDER BY user_id) FROM inventory",
            "SELECT SUM(tax) OVER (PARTITION BY user_id ORDER BY user_id) FROM inventory"
        ],
        "correct": [
            3
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 50,
        "type": "single",
        "difficulty": 3,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `amount` is greater than 50 and drop duplicates based on `quantity`?",
        "options": [
            "df.filter('amount' > 50).drop_duplicates('quantity')",
            "df.where('amount' > 50).distinct('quantity')",
            "df.filter(df.amount > 50).dropDuplicates('quantity')",
            "df.filter(F.col('amount') > 50).dropDuplicates(['quantity'])"
        ],
        "correct": [
            3
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 51,
        "type": "single",
        "difficulty": 3,
        "question": "When designing a slowly changing dimension (SCD) for `users`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
        "options": [
            "Type 4",
            "Type 1",
            "Type 3",
            "Type 2"
        ],
        "correct": [
            3
        ],
        "concept": "SCD Type 2 tracks historical data by creating multiple records for a given natural key with effective dates."
    },
    {
        "id": 52,
        "type": "single",
        "difficulty": 3,
        "question": "You are storing 5000 TB of raw JSON logs in an S3 bucket named `orders`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
        "options": [
            "Amazon Redshift",
            "AWS Glue",
            "Amazon Athena",
            "Amazon RDS"
        ],
        "correct": [
            2
        ],
        "concept": "Amazon Athena allows you to run interactive SQL queries directly against data in Amazon S3."
    },
    {
        "id": 53,
        "type": "single",
        "difficulty": 1,
        "question": "When designing a slowly changing dimension (SCD) for `transactions`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
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
        "id": 54,
        "type": "single",
        "difficulty": 3,
        "question": "You have a Kafka topic `customers` with 50 partitions. If you spin up 2 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "It depends on the producer routing key",
            "Consumer 1 reads 25, Consumer 2 reads 25",
            "Partitions are randomly assigned dynamically per message",
            "Each reads all 50 partitions"
        ],
        "correct": [
            1
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 55,
        "type": "single",
        "difficulty": 3,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM events WHERE tax = '5000'`?",
        "options": [
            "Metadata Layer",
            "Cloud Services Layer",
            "Virtual Warehouse (Compute)",
            "Database Storage Layer"
        ],
        "correct": [
            2
        ],
        "concept": "Query execution and data processing are handled by the Virtual Warehouses (Compute Layer)."
    },
    {
        "id": 56,
        "type": "single",
        "difficulty": 2,
        "question": "You have a Kafka topic `clicks` with 10 partitions. If you spin up 5 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
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
        "id": 57,
        "type": "single",
        "difficulty": 1,
        "question": "In a Star Schema, the `orders` table contains foreign keys to dimension tables and quantitative metrics like `amount`. What type of table is this?",
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
        "id": 58,
        "type": "single",
        "difficulty": 3,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `session_id` is greater than 50 and drop duplicates based on `discount`?",
        "options": [
            "df.filter(df.session_id > 50).dropDuplicates('discount')",
            "df.filter('session_id' > 50).drop_duplicates('discount')",
            "df.where('session_id' > 50).distinct('discount')",
            "df.filter(F.col('session_id') > 50).dropDuplicates(['discount'])"
        ],
        "correct": [
            3
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 59,
        "type": "single",
        "difficulty": 3,
        "question": "Given the table `inventory`, which SQL query calculates the cumulative sum of `amount` partitioned by `status` ordered by `status`?",
        "options": [
            "SELECT CUMSUM(amount) OVER (PARTITION BY status ORDER BY status) FROM inventory",
            "SELECT SUM(amount) OVER (PARTITION BY status ORDER BY status) FROM inventory",
            "SELECT SUM(amount) OVER (ORDER BY status PARTITION BY status) FROM inventory",
            "SELECT SUM(amount) PARTITION BY status ORDER BY status FROM inventory"
        ],
        "correct": [
            1
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 60,
        "type": "single",
        "difficulty": 3,
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
        "id": 61,
        "type": "single",
        "difficulty": 3,
        "question": "When designing a slowly changing dimension (SCD) for `sales`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
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
        "id": 62,
        "type": "single",
        "difficulty": 2,
        "question": "Given the table `payments`, which SQL query calculates the cumulative sum of `status` partitioned by `price` ordered by `quantity`?",
        "options": [
            "SELECT SUM(status) OVER (PARTITION BY price ORDER BY quantity) FROM payments",
            "SELECT SUM(status) PARTITION BY price ORDER BY quantity FROM payments",
            "SELECT CUMSUM(status) OVER (PARTITION BY price ORDER BY quantity) FROM payments",
            "SELECT SUM(status) OVER (ORDER BY price PARTITION BY quantity) FROM payments"
        ],
        "correct": [
            0
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 63,
        "type": "single",
        "difficulty": 3,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `status`?",
        "options": [
            "CSV",
            "JSON",
            "Parquet",
            "Avro"
        ],
        "correct": [
            2
        ],
        "concept": "Apache Parquet is a columnar storage format highly optimized for analytical (OLAP) queries."
    },
    {
        "id": 64,
        "type": "single",
        "difficulty": 2,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `quantity` is greater than 10000 and drop duplicates based on `tax`?",
        "options": [
            "df.filter(df.quantity > 10000).dropDuplicates('tax')",
            "df.filter('quantity' > 10000).drop_duplicates('tax')",
            "df.filter(F.col('quantity') > 10000).dropDuplicates(['tax'])",
            "df.where('quantity' > 10000).distinct('tax')"
        ],
        "correct": [
            2
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 65,
        "type": "single",
        "difficulty": 2,
        "question": "You are storing 100 TB of raw JSON logs in an S3 bucket named `logs`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
        "options": [
            "Amazon Redshift",
            "AWS Glue",
            "Amazon RDS",
            "Amazon Athena"
        ],
        "correct": [
            3
        ],
        "concept": "Amazon Athena allows you to run interactive SQL queries directly against data in Amazon S3."
    },
    {
        "id": 66,
        "type": "single",
        "difficulty": 2,
        "question": "When designing a slowly changing dimension (SCD) for `payments`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
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
        "id": 67,
        "type": "single",
        "difficulty": 1,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `quantity`?",
        "options": [
            "CSV",
            "Parquet",
            "JSON",
            "Avro"
        ],
        "correct": [
            1
        ],
        "concept": "Apache Parquet is a columnar storage format highly optimized for analytical (OLAP) queries."
    },
    {
        "id": 68,
        "type": "single",
        "difficulty": 2,
        "question": "In a Star Schema, the `events` table contains foreign keys to dimension tables and quantitative metrics like `session_id`. What type of table is this?",
        "options": [
            "Dimension Table",
            "Bridge Table",
            "Fact Table",
            "Aggregate Table"
        ],
        "correct": [
            2
        ],
        "concept": "Fact tables contain quantitative data (measurements) and foreign keys referencing dimension tables."
    },
    {
        "id": 69,
        "type": "single",
        "difficulty": 2,
        "question": "Given the table `events`, which SQL query calculates the cumulative sum of `quantity` partitioned by `status` ordered by `user_id`?",
        "options": [
            "SELECT CUMSUM(quantity) OVER (PARTITION BY status ORDER BY user_id) FROM events",
            "SELECT SUM(quantity) OVER (ORDER BY status PARTITION BY user_id) FROM events",
            "SELECT SUM(quantity) PARTITION BY status ORDER BY user_id FROM events",
            "SELECT SUM(quantity) OVER (PARTITION BY status ORDER BY user_id) FROM events"
        ],
        "correct": [
            3
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 70,
        "type": "single",
        "difficulty": 2,
        "question": "You are storing 50 TB of raw JSON logs in an S3 bucket named `users`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
        "options": [
            "Amazon RDS",
            "AWS Glue",
            "Amazon Athena",
            "Amazon Redshift"
        ],
        "correct": [
            2
        ],
        "concept": "Amazon Athena allows you to run interactive SQL queries directly against data in Amazon S3."
    },
    {
        "id": 71,
        "type": "single",
        "difficulty": 1,
        "question": "In a Star Schema, the `events` table contains foreign keys to dimension tables and quantitative metrics like `price`. What type of table is this?",
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
        "id": 72,
        "type": "single",
        "difficulty": 2,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM clicks WHERE timestamp = '10'`?",
        "options": [
            "Database Storage Layer",
            "Cloud Services Layer",
            "Virtual Warehouse (Compute)",
            "Metadata Layer"
        ],
        "correct": [
            2
        ],
        "concept": "Query execution and data processing are handled by the Virtual Warehouses (Compute Layer)."
    },
    {
        "id": 73,
        "type": "single",
        "difficulty": 1,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `price` is greater than 100 and drop duplicates based on `discount`?",
        "options": [
            "df.filter(df.price > 100).dropDuplicates('discount')",
            "df.filter('price' > 100).drop_duplicates('discount')",
            "df.where('price' > 100).distinct('discount')",
            "df.filter(F.col('price') > 100).dropDuplicates(['discount'])"
        ],
        "correct": [
            3
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 74,
        "type": "single",
        "difficulty": 3,
        "question": "You have a Kafka topic `clicks` with 100 partitions. If you spin up 3 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
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
        "id": 75,
        "type": "single",
        "difficulty": 1,
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
        "id": 76,
        "type": "single",
        "difficulty": 1,
        "question": "In Airflow, if task A and task B are upstream of task C, and you want task C to run ONLY if both A and B succeed, which trigger rule should you use for task C?",
        "options": [
            "all_done",
            "none_failed",
            "one_success",
            "all_success"
        ],
        "correct": [
            3
        ],
        "concept": "all_success is the default trigger rule in Airflow, requiring all upstream tasks to succeed."
    },
    {
        "id": 77,
        "type": "single",
        "difficulty": 2,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM inventory WHERE quantity = '1000'`?",
        "options": [
            "Metadata Layer",
            "Virtual Warehouse (Compute)",
            "Database Storage Layer",
            "Cloud Services Layer"
        ],
        "correct": [
            1
        ],
        "concept": "Query execution and data processing are handled by the Virtual Warehouses (Compute Layer)."
    },
    {
        "id": 78,
        "type": "single",
        "difficulty": 1,
        "question": "In a Star Schema, the `payments` table contains foreign keys to dimension tables and quantitative metrics like `user_id`. What type of table is this?",
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
        "id": 79,
        "type": "single",
        "difficulty": 1,
        "question": "When designing a slowly changing dimension (SCD) for `inventory`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
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
        "id": 80,
        "type": "single",
        "difficulty": 2,
        "question": "When designing a slowly changing dimension (SCD) for `users`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
        "options": [
            "Type 4",
            "Type 3",
            "Type 2",
            "Type 1"
        ],
        "correct": [
            2
        ],
        "concept": "SCD Type 2 tracks historical data by creating multiple records for a given natural key with effective dates."
    },
    {
        "id": 81,
        "type": "single",
        "difficulty": 1,
        "question": "When designing a slowly changing dimension (SCD) for `sales`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
        "options": [
            "Type 4",
            "Type 1",
            "Type 3",
            "Type 2"
        ],
        "correct": [
            3
        ],
        "concept": "SCD Type 2 tracks historical data by creating multiple records for a given natural key with effective dates."
    },
    {
        "id": 82,
        "type": "single",
        "difficulty": 2,
        "question": "Given the table `sales`, which SQL query calculates the cumulative sum of `amount` partitioned by `session_id` ordered by `revenue`?",
        "options": [
            "SELECT SUM(amount) OVER (PARTITION BY session_id ORDER BY revenue) FROM sales",
            "SELECT CUMSUM(amount) OVER (PARTITION BY session_id ORDER BY revenue) FROM sales",
            "SELECT SUM(amount) OVER (ORDER BY session_id PARTITION BY revenue) FROM sales",
            "SELECT SUM(amount) PARTITION BY session_id ORDER BY revenue FROM sales"
        ],
        "correct": [
            0
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 83,
        "type": "single",
        "difficulty": 1,
        "question": "What is the output of `sum(x for x in range(10) if x % 2 == 0)`?",
        "options": [
            "40",
            "18",
            "20",
            "22"
        ],
        "correct": [
            2
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 10 that are divisible by 2."
    },
    {
        "id": 84,
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
        "id": 85,
        "type": "single",
        "difficulty": 1,
        "question": "You have a Kafka topic `inventory` with 100 partitions. If you spin up 2 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "Consumer 1 reads 50, Consumer 2 reads 50",
            "It depends on the producer routing key",
            "Partitions are randomly assigned dynamically per message",
            "Each reads all 100 partitions"
        ],
        "correct": [
            0
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 86,
        "type": "single",
        "difficulty": 2,
        "question": "In Airflow, if task A and task B are upstream of task C, and you want task C to run ONLY if both A and B succeed, which trigger rule should you use for task C?",
        "options": [
            "all_success",
            "one_success",
            "all_done",
            "none_failed"
        ],
        "correct": [
            0
        ],
        "concept": "all_success is the default trigger rule in Airflow, requiring all upstream tasks to succeed."
    },
    {
        "id": 87,
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
        "id": 88,
        "type": "single",
        "difficulty": 3,
        "question": "You are storing 500 TB of raw JSON logs in an S3 bucket named `logs`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
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
        "id": 89,
        "type": "single",
        "difficulty": 3,
        "question": "Given the table `events`, which SQL query calculates the cumulative sum of `quantity` partitioned by `session_id` ordered by `amount`?",
        "options": [
            "SELECT CUMSUM(quantity) OVER (PARTITION BY session_id ORDER BY amount) FROM events",
            "SELECT SUM(quantity) OVER (ORDER BY session_id PARTITION BY amount) FROM events",
            "SELECT SUM(quantity) OVER (PARTITION BY session_id ORDER BY amount) FROM events",
            "SELECT SUM(quantity) PARTITION BY session_id ORDER BY amount FROM events"
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
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM payments WHERE status = '50'`?",
        "options": [
            "Database Storage Layer",
            "Metadata Layer",
            "Virtual Warehouse (Compute)",
            "Cloud Services Layer"
        ],
        "correct": [
            2
        ],
        "concept": "Query execution and data processing are handled by the Virtual Warehouses (Compute Layer)."
    },
    {
        "id": 91,
        "type": "single",
        "difficulty": 1,
        "question": "Given the table `customers`, which SQL query calculates the cumulative sum of `timestamp` partitioned by `session_id` ordered by `revenue`?",
        "options": [
            "SELECT SUM(timestamp) OVER (PARTITION BY session_id ORDER BY revenue) FROM customers",
            "SELECT CUMSUM(timestamp) OVER (PARTITION BY session_id ORDER BY revenue) FROM customers",
            "SELECT SUM(timestamp) PARTITION BY session_id ORDER BY revenue FROM customers",
            "SELECT SUM(timestamp) OVER (ORDER BY session_id PARTITION BY revenue) FROM customers"
        ],
        "correct": [
            0
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 92,
        "type": "single",
        "difficulty": 2,
        "question": "In a Star Schema, the `logs` table contains foreign keys to dimension tables and quantitative metrics like `revenue`. What type of table is this?",
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
        "id": 93,
        "type": "single",
        "difficulty": 2,
        "question": "In a Star Schema, the `transactions` table contains foreign keys to dimension tables and quantitative metrics like `status`. What type of table is this?",
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
        "id": 94,
        "type": "single",
        "difficulty": 2,
        "question": "You are storing 50 TB of raw JSON logs in an S3 bucket named `clicks`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
        "options": [
            "AWS Glue",
            "Amazon Redshift",
            "Amazon RDS",
            "Amazon Athena"
        ],
        "correct": [
            3
        ],
        "concept": "Amazon Athena allows you to run interactive SQL queries directly against data in Amazon S3."
    },
    {
        "id": 95,
        "type": "single",
        "difficulty": 2,
        "question": "You have a Kafka topic `orders` with 10000 partitions. If you spin up 2 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
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
        "id": 96,
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
        "id": 97,
        "type": "single",
        "difficulty": 1,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `amount`?",
        "options": [
            "Avro",
            "CSV",
            "Parquet",
            "JSON"
        ],
        "correct": [
            2
        ],
        "concept": "Apache Parquet is a columnar storage format highly optimized for analytical (OLAP) queries."
    },
    {
        "id": 98,
        "type": "single",
        "difficulty": 2,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `timestamp` is greater than 1000 and drop duplicates based on `status`?",
        "options": [
            "df.filter(F.col('timestamp') > 1000).dropDuplicates(['status'])",
            "df.where('timestamp' > 1000).distinct('status')",
            "df.filter(df.timestamp > 1000).dropDuplicates('status')",
            "df.filter('timestamp' > 1000).drop_duplicates('status')"
        ],
        "correct": [
            0
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 99,
        "type": "single",
        "difficulty": 1,
        "question": "What is the output of `sum(x for x in range(10) if x % 2 == 0)`?",
        "options": [
            "18",
            "40",
            "20",
            "22"
        ],
        "correct": [
            2
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 10 that are divisible by 2."
    },
    {
        "id": 100,
        "type": "single",
        "difficulty": 1,
        "question": "You have a Kafka topic `payments` with 5000 partitions. If you spin up 5 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "Consumer 1 reads 2500, Consumer 2 reads 2500",
            "Each reads all 5000 partitions",
            "It depends on the producer routing key",
            "Partitions are randomly assigned dynamically per message"
        ],
        "correct": [
            0
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    }
]
};

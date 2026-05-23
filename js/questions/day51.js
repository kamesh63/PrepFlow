window.QUIZ_DATA = window.QUIZ_DATA || {};
window.QUIZ_DATA["day51"] = {
  title: "Data Engineering Masterclass - Day 51",
  topics: ["SQL", "PySpark", "Airflow", "Kafka", "Data Modeling", "AWS", "Snowflake"],
  questions: [
    {
        "id": 1,
        "type": "single",
        "difficulty": 2,
        "question": "You have a Kafka topic `logs` with 1000 partitions. If you spin up 5 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "Each reads all 1000 partitions",
            "Partitions are randomly assigned dynamically per message",
            "Consumer 1 reads 500, Consumer 2 reads 500",
            "It depends on the producer routing key"
        ],
        "correct": [
            2
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 2,
        "type": "single",
        "difficulty": 1,
        "question": "You are storing 5000 TB of raw JSON logs in an S3 bucket named `logs`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
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
        "id": 3,
        "type": "single",
        "difficulty": 3,
        "question": "In a Star Schema, the `clicks` table contains foreign keys to dimension tables and quantitative metrics like `user_id`. What type of table is this?",
        "options": [
            "Dimension Table",
            "Fact Table",
            "Aggregate Table",
            "Bridge Table"
        ],
        "correct": [
            1
        ],
        "concept": "Fact tables contain quantitative data (measurements) and foreign keys referencing dimension tables."
    },
    {
        "id": 4,
        "type": "single",
        "difficulty": 1,
        "question": "What is the output of `sum(x for x in range(500) if x % 4 == 0)`?",
        "options": [
            "30996",
            "31004",
            "62000",
            "31000"
        ],
        "correct": [
            3
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 500 that are divisible by 4."
    },
    {
        "id": 5,
        "type": "single",
        "difficulty": 3,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `session_id` is greater than 100 and drop duplicates based on `discount`?",
        "options": [
            "df.where('session_id' > 100).distinct('discount')",
            "df.filter('session_id' > 100).drop_duplicates('discount')",
            "df.filter(df.session_id > 100).dropDuplicates('discount')",
            "df.filter(F.col('session_id') > 100).dropDuplicates(['discount'])"
        ],
        "correct": [
            3
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 6,
        "type": "single",
        "difficulty": 1,
        "question": "You have a Kafka topic `transactions` with 50 partitions. If you spin up 3 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "It depends on the producer routing key",
            "Each reads all 50 partitions",
            "Consumer 1 reads 25, Consumer 2 reads 25",
            "Partitions are randomly assigned dynamically per message"
        ],
        "correct": [
            2
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 7,
        "type": "single",
        "difficulty": 3,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `revenue` is greater than 1000 and drop duplicates based on `status`?",
        "options": [
            "df.filter(df.revenue > 1000).dropDuplicates('status')",
            "df.filter(F.col('revenue') > 1000).dropDuplicates(['status'])",
            "df.filter('revenue' > 1000).drop_duplicates('status')",
            "df.where('revenue' > 1000).distinct('status')"
        ],
        "correct": [
            1
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 8,
        "type": "single",
        "difficulty": 3,
        "question": "Given the table `logs`, which SQL query calculates the cumulative sum of `timestamp` partitioned by `timestamp` ordered by `quantity`?",
        "options": [
            "SELECT SUM(timestamp) OVER (PARTITION BY timestamp ORDER BY quantity) FROM logs",
            "SELECT SUM(timestamp) OVER (ORDER BY timestamp PARTITION BY quantity) FROM logs",
            "SELECT SUM(timestamp) PARTITION BY timestamp ORDER BY quantity FROM logs",
            "SELECT CUMSUM(timestamp) OVER (PARTITION BY timestamp ORDER BY quantity) FROM logs"
        ],
        "correct": [
            0
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 9,
        "type": "single",
        "difficulty": 2,
        "question": "You are storing 100 TB of raw JSON logs in an S3 bucket named `logs`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
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
        "id": 10,
        "type": "single",
        "difficulty": 2,
        "question": "What is the output of `sum(x for x in range(500) if x % 5 == 0)`?",
        "options": [
            "24745",
            "49500",
            "24755",
            "24750"
        ],
        "correct": [
            3
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 500 that are divisible by 5."
    },
    {
        "id": 11,
        "type": "single",
        "difficulty": 1,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `user_id` is greater than 10 and drop duplicates based on `discount`?",
        "options": [
            "df.filter('user_id' > 10).drop_duplicates('discount')",
            "df.filter(df.user_id > 10).dropDuplicates('discount')",
            "df.where('user_id' > 10).distinct('discount')",
            "df.filter(F.col('user_id') > 10).dropDuplicates(['discount'])"
        ],
        "correct": [
            3
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 12,
        "type": "single",
        "difficulty": 1,
        "question": "In a Star Schema, the `inventory` table contains foreign keys to dimension tables and quantitative metrics like `user_id`. What type of table is this?",
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
        "id": 13,
        "type": "single",
        "difficulty": 2,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `amount` is greater than 1000 and drop duplicates based on `revenue`?",
        "options": [
            "df.filter('amount' > 1000).drop_duplicates('revenue')",
            "df.filter(df.amount > 1000).dropDuplicates('revenue')",
            "df.where('amount' > 1000).distinct('revenue')",
            "df.filter(F.col('amount') > 1000).dropDuplicates(['revenue'])"
        ],
        "correct": [
            3
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 14,
        "type": "single",
        "difficulty": 3,
        "question": "You have a Kafka topic `customers` with 10000 partitions. If you spin up 5 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "Partitions are randomly assigned dynamically per message",
            "It depends on the producer routing key",
            "Consumer 1 reads 5000, Consumer 2 reads 5000",
            "Each reads all 10000 partitions"
        ],
        "correct": [
            2
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 15,
        "type": "single",
        "difficulty": 2,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM events WHERE timestamp = '500'`?",
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
        "id": 16,
        "type": "single",
        "difficulty": 1,
        "question": "Given the table `orders`, which SQL query calculates the cumulative sum of `amount` partitioned by `timestamp` ordered by `tax`?",
        "options": [
            "SELECT SUM(amount) OVER (ORDER BY timestamp PARTITION BY tax) FROM orders",
            "SELECT CUMSUM(amount) OVER (PARTITION BY timestamp ORDER BY tax) FROM orders",
            "SELECT SUM(amount) OVER (PARTITION BY timestamp ORDER BY tax) FROM orders",
            "SELECT SUM(amount) PARTITION BY timestamp ORDER BY tax FROM orders"
        ],
        "correct": [
            2
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 17,
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
        "id": 18,
        "type": "single",
        "difficulty": 1,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `status` is greater than 50 and drop duplicates based on `amount`?",
        "options": [
            "df.filter(df.status > 50).dropDuplicates('amount')",
            "df.filter(F.col('status') > 50).dropDuplicates(['amount'])",
            "df.where('status' > 50).distinct('amount')",
            "df.filter('status' > 50).drop_duplicates('amount')"
        ],
        "correct": [
            1
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 19,
        "type": "single",
        "difficulty": 1,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM sales WHERE session_id = '500'`?",
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
        "id": 20,
        "type": "single",
        "difficulty": 1,
        "question": "You have a Kafka topic `inventory` with 1000 partitions. If you spin up 5 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "It depends on the producer routing key",
            "Consumer 1 reads 500, Consumer 2 reads 500",
            "Each reads all 1000 partitions",
            "Partitions are randomly assigned dynamically per message"
        ],
        "correct": [
            1
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 21,
        "type": "single",
        "difficulty": 1,
        "question": "Given the table `payments`, which SQL query calculates the cumulative sum of `price` partitioned by `tax` ordered by `discount`?",
        "options": [
            "SELECT CUMSUM(price) OVER (PARTITION BY tax ORDER BY discount) FROM payments",
            "SELECT SUM(price) OVER (PARTITION BY tax ORDER BY discount) FROM payments",
            "SELECT SUM(price) OVER (ORDER BY tax PARTITION BY discount) FROM payments",
            "SELECT SUM(price) PARTITION BY tax ORDER BY discount FROM payments"
        ],
        "correct": [
            1
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 22,
        "type": "single",
        "difficulty": 3,
        "question": "In Airflow, if task A and task B are upstream of task C, and you want task C to run ONLY if both A and B succeed, which trigger rule should you use for task C?",
        "options": [
            "one_success",
            "all_success",
            "all_done",
            "none_failed"
        ],
        "correct": [
            1
        ],
        "concept": "all_success is the default trigger rule in Airflow, requiring all upstream tasks to succeed."
    },
    {
        "id": 23,
        "type": "single",
        "difficulty": 2,
        "question": "You have a Kafka topic `payments` with 500 partitions. If you spin up 5 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
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
        "id": 24,
        "type": "single",
        "difficulty": 1,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `user_id`?",
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
        "id": 25,
        "type": "single",
        "difficulty": 2,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM logs WHERE amount = '500'`?",
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
        "id": 26,
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
        "id": 27,
        "type": "single",
        "difficulty": 3,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `amount` is greater than 10 and drop duplicates based on `price`?",
        "options": [
            "df.filter(df.amount > 10).dropDuplicates('price')",
            "df.filter('amount' > 10).drop_duplicates('price')",
            "df.filter(F.col('amount') > 10).dropDuplicates(['price'])",
            "df.where('amount' > 10).distinct('price')"
        ],
        "correct": [
            2
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 28,
        "type": "single",
        "difficulty": 2,
        "question": "What is the output of `sum(x for x in range(10000) if x % 4 == 0)`?",
        "options": [
            "12495004",
            "24990000",
            "12494996",
            "12495000"
        ],
        "correct": [
            3
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 10000 that are divisible by 4."
    },
    {
        "id": 29,
        "type": "single",
        "difficulty": 3,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `timestamp`?",
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
        "id": 30,
        "type": "single",
        "difficulty": 2,
        "question": "Given the table `clicks`, which SQL query calculates the cumulative sum of `revenue` partitioned by `discount` ordered by `status`?",
        "options": [
            "SELECT SUM(revenue) OVER (ORDER BY discount PARTITION BY status) FROM clicks",
            "SELECT SUM(revenue) OVER (PARTITION BY discount ORDER BY status) FROM clicks",
            "SELECT CUMSUM(revenue) OVER (PARTITION BY discount ORDER BY status) FROM clicks",
            "SELECT SUM(revenue) PARTITION BY discount ORDER BY status FROM clicks"
        ],
        "correct": [
            1
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 31,
        "type": "single",
        "difficulty": 3,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `tax` is greater than 10 and drop duplicates based on `quantity`?",
        "options": [
            "df.where('tax' > 10).distinct('quantity')",
            "df.filter(df.tax > 10).dropDuplicates('quantity')",
            "df.filter('tax' > 10).drop_duplicates('quantity')",
            "df.filter(F.col('tax') > 10).dropDuplicates(['quantity'])"
        ],
        "correct": [
            3
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 32,
        "type": "single",
        "difficulty": 3,
        "question": "Given the table `logs`, which SQL query calculates the cumulative sum of `discount` partitioned by `quantity` ordered by `status`?",
        "options": [
            "SELECT SUM(discount) PARTITION BY quantity ORDER BY status FROM logs",
            "SELECT CUMSUM(discount) OVER (PARTITION BY quantity ORDER BY status) FROM logs",
            "SELECT SUM(discount) OVER (ORDER BY quantity PARTITION BY status) FROM logs",
            "SELECT SUM(discount) OVER (PARTITION BY quantity ORDER BY status) FROM logs"
        ],
        "correct": [
            3
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 33,
        "type": "single",
        "difficulty": 1,
        "question": "Given the table `logs`, which SQL query calculates the cumulative sum of `user_id` partitioned by `session_id` ordered by `revenue`?",
        "options": [
            "SELECT CUMSUM(user_id) OVER (PARTITION BY session_id ORDER BY revenue) FROM logs",
            "SELECT SUM(user_id) OVER (ORDER BY session_id PARTITION BY revenue) FROM logs",
            "SELECT SUM(user_id) OVER (PARTITION BY session_id ORDER BY revenue) FROM logs",
            "SELECT SUM(user_id) PARTITION BY session_id ORDER BY revenue FROM logs"
        ],
        "correct": [
            2
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 34,
        "type": "single",
        "difficulty": 3,
        "question": "When designing a slowly changing dimension (SCD) for `orders`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
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
        "id": 35,
        "type": "single",
        "difficulty": 1,
        "question": "In Airflow, if task A and task B are upstream of task C, and you want task C to run ONLY if both A and B succeed, which trigger rule should you use for task C?",
        "options": [
            "none_failed",
            "all_done",
            "all_success",
            "one_success"
        ],
        "correct": [
            2
        ],
        "concept": "all_success is the default trigger rule in Airflow, requiring all upstream tasks to succeed."
    },
    {
        "id": 36,
        "type": "single",
        "difficulty": 1,
        "question": "You are storing 50 TB of raw JSON logs in an S3 bucket named `clicks`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
        "options": [
            "AWS Glue",
            "Amazon Athena",
            "Amazon RDS",
            "Amazon Redshift"
        ],
        "correct": [
            1
        ],
        "concept": "Amazon Athena allows you to run interactive SQL queries directly against data in Amazon S3."
    },
    {
        "id": 37,
        "type": "single",
        "difficulty": 3,
        "question": "You are storing 500 TB of raw JSON logs in an S3 bucket named `customers`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
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
        "id": 38,
        "type": "single",
        "difficulty": 3,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM events WHERE tax = '1000'`?",
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
        "id": 39,
        "type": "single",
        "difficulty": 2,
        "question": "You have a Kafka topic `clicks` with 1000 partitions. If you spin up 2 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "It depends on the producer routing key",
            "Each reads all 1000 partitions",
            "Consumer 1 reads 500, Consumer 2 reads 500",
            "Partitions are randomly assigned dynamically per message"
        ],
        "correct": [
            2
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 40,
        "type": "single",
        "difficulty": 3,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `status` is greater than 100 and drop duplicates based on `timestamp`?",
        "options": [
            "df.filter(F.col('status') > 100).dropDuplicates(['timestamp'])",
            "df.filter('status' > 100).drop_duplicates('timestamp')",
            "df.filter(df.status > 100).dropDuplicates('timestamp')",
            "df.where('status' > 100).distinct('timestamp')"
        ],
        "correct": [
            0
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 41,
        "type": "single",
        "difficulty": 3,
        "question": "You are storing 5000 TB of raw JSON logs in an S3 bucket named `logs`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
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
        "id": 42,
        "type": "single",
        "difficulty": 3,
        "question": "In a Star Schema, the `transactions` table contains foreign keys to dimension tables and quantitative metrics like `status`. What type of table is this?",
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
        "id": 43,
        "type": "single",
        "difficulty": 1,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM inventory WHERE timestamp = '50'`?",
        "options": [
            "Database Storage Layer",
            "Cloud Services Layer",
            "Metadata Layer",
            "Virtual Warehouse (Compute)"
        ],
        "correct": [
            3
        ],
        "concept": "Query execution and data processing are handled by the Virtual Warehouses (Compute Layer)."
    },
    {
        "id": 44,
        "type": "single",
        "difficulty": 2,
        "question": "What is the output of `sum(x for x in range(10) if x % 4 == 0)`?",
        "options": [
            "24",
            "16",
            "12",
            "8"
        ],
        "correct": [
            2
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 10 that are divisible by 4."
    },
    {
        "id": 45,
        "type": "single",
        "difficulty": 1,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM inventory WHERE price = '10'`?",
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
        "id": 46,
        "type": "single",
        "difficulty": 1,
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
        "id": 47,
        "type": "single",
        "difficulty": 3,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM payments WHERE tax = '5000'`?",
        "options": [
            "Database Storage Layer",
            "Virtual Warehouse (Compute)",
            "Cloud Services Layer",
            "Metadata Layer"
        ],
        "correct": [
            1
        ],
        "concept": "Query execution and data processing are handled by the Virtual Warehouses (Compute Layer)."
    },
    {
        "id": 48,
        "type": "single",
        "difficulty": 1,
        "question": "Given the table `clicks`, which SQL query calculates the cumulative sum of `quantity` partitioned by `revenue` ordered by `user_id`?",
        "options": [
            "SELECT SUM(quantity) OVER (ORDER BY revenue PARTITION BY user_id) FROM clicks",
            "SELECT SUM(quantity) OVER (PARTITION BY revenue ORDER BY user_id) FROM clicks",
            "SELECT SUM(quantity) PARTITION BY revenue ORDER BY user_id FROM clicks",
            "SELECT CUMSUM(quantity) OVER (PARTITION BY revenue ORDER BY user_id) FROM clicks"
        ],
        "correct": [
            1
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 49,
        "type": "single",
        "difficulty": 3,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `quantity` is greater than 5000 and drop duplicates based on `user_id`?",
        "options": [
            "df.filter(F.col('quantity') > 5000).dropDuplicates(['user_id'])",
            "df.filter(df.quantity > 5000).dropDuplicates('user_id')",
            "df.where('quantity' > 5000).distinct('user_id')",
            "df.filter('quantity' > 5000).drop_duplicates('user_id')"
        ],
        "correct": [
            0
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 50,
        "type": "single",
        "difficulty": 3,
        "question": "What is the output of `sum(x for x in range(5000) if x % 3 == 0)`?",
        "options": [
            "8331666",
            "4165836",
            "4165830",
            "4165833"
        ],
        "correct": [
            3
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 5000 that are divisible by 3."
    },
    {
        "id": 51,
        "type": "single",
        "difficulty": 3,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `discount` is greater than 100 and drop duplicates based on `price`?",
        "options": [
            "df.filter(df.discount > 100).dropDuplicates('price')",
            "df.filter('discount' > 100).drop_duplicates('price')",
            "df.filter(F.col('discount') > 100).dropDuplicates(['price'])",
            "df.where('discount' > 100).distinct('price')"
        ],
        "correct": [
            2
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 52,
        "type": "single",
        "difficulty": 3,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM orders WHERE quantity = '1000'`?",
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
        "id": 53,
        "type": "single",
        "difficulty": 1,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `tax`?",
        "options": [
            "Parquet",
            "Avro",
            "JSON",
            "CSV"
        ],
        "correct": [
            0
        ],
        "concept": "Apache Parquet is a columnar storage format highly optimized for analytical (OLAP) queries."
    },
    {
        "id": 54,
        "type": "single",
        "difficulty": 2,
        "question": "Given the table `orders`, which SQL query calculates the cumulative sum of `user_id` partitioned by `amount` ordered by `revenue`?",
        "options": [
            "SELECT CUMSUM(user_id) OVER (PARTITION BY amount ORDER BY revenue) FROM orders",
            "SELECT SUM(user_id) OVER (PARTITION BY amount ORDER BY revenue) FROM orders",
            "SELECT SUM(user_id) PARTITION BY amount ORDER BY revenue FROM orders",
            "SELECT SUM(user_id) OVER (ORDER BY amount PARTITION BY revenue) FROM orders"
        ],
        "correct": [
            1
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 55,
        "type": "single",
        "difficulty": 3,
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
        "id": 56,
        "type": "single",
        "difficulty": 1,
        "question": "Given the table `sales`, which SQL query calculates the cumulative sum of `status` partitioned by `timestamp` ordered by `tax`?",
        "options": [
            "SELECT SUM(status) PARTITION BY timestamp ORDER BY tax FROM sales",
            "SELECT SUM(status) OVER (PARTITION BY timestamp ORDER BY tax) FROM sales",
            "SELECT CUMSUM(status) OVER (PARTITION BY timestamp ORDER BY tax) FROM sales",
            "SELECT SUM(status) OVER (ORDER BY timestamp PARTITION BY tax) FROM sales"
        ],
        "correct": [
            1
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 57,
        "type": "single",
        "difficulty": 2,
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
        "id": 58,
        "type": "single",
        "difficulty": 2,
        "question": "You have a Kafka topic `logs` with 10 partitions. If you spin up 5 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "Partitions are randomly assigned dynamically per message",
            "Each reads all 10 partitions",
            "Consumer 1 reads 5, Consumer 2 reads 5",
            "It depends on the producer routing key"
        ],
        "correct": [
            2
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 59,
        "type": "single",
        "difficulty": 2,
        "question": "You are storing 1000 TB of raw JSON logs in an S3 bucket named `sales`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
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
        "id": 60,
        "type": "single",
        "difficulty": 1,
        "question": "You are storing 10000 TB of raw JSON logs in an S3 bucket named `sales`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
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
        "id": 61,
        "type": "single",
        "difficulty": 2,
        "question": "When designing a slowly changing dimension (SCD) for `clicks`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
        "options": [
            "Type 1",
            "Type 2",
            "Type 4",
            "Type 3"
        ],
        "correct": [
            1
        ],
        "concept": "SCD Type 2 tracks historical data by creating multiple records for a given natural key with effective dates."
    },
    {
        "id": 62,
        "type": "single",
        "difficulty": 1,
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
        "id": 63,
        "type": "single",
        "difficulty": 2,
        "question": "What is the output of `sum(x for x in range(500) if x % 2 == 0)`?",
        "options": [
            "62250",
            "62248",
            "124500",
            "62252"
        ],
        "correct": [
            0
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 500 that are divisible by 2."
    },
    {
        "id": 64,
        "type": "single",
        "difficulty": 2,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `timestamp`?",
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
        "id": 65,
        "type": "single",
        "difficulty": 3,
        "question": "You are storing 10 TB of raw JSON logs in an S3 bucket named `inventory`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
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
        "id": 66,
        "type": "single",
        "difficulty": 3,
        "question": "Given the table `payments`, which SQL query calculates the cumulative sum of `revenue` partitioned by `tax` ordered by `timestamp`?",
        "options": [
            "SELECT CUMSUM(revenue) OVER (PARTITION BY tax ORDER BY timestamp) FROM payments",
            "SELECT SUM(revenue) PARTITION BY tax ORDER BY timestamp FROM payments",
            "SELECT SUM(revenue) OVER (PARTITION BY tax ORDER BY timestamp) FROM payments",
            "SELECT SUM(revenue) OVER (ORDER BY tax PARTITION BY timestamp) FROM payments"
        ],
        "correct": [
            2
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 67,
        "type": "single",
        "difficulty": 3,
        "question": "Given the table `users`, which SQL query calculates the cumulative sum of `status` partitioned by `price` ordered by `price`?",
        "options": [
            "SELECT CUMSUM(status) OVER (PARTITION BY price ORDER BY price) FROM users",
            "SELECT SUM(status) OVER (PARTITION BY price ORDER BY price) FROM users",
            "SELECT SUM(status) OVER (ORDER BY price PARTITION BY price) FROM users",
            "SELECT SUM(status) PARTITION BY price ORDER BY price FROM users"
        ],
        "correct": [
            1
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 68,
        "type": "single",
        "difficulty": 1,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM clicks WHERE user_id = '5000'`?",
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
        "id": 69,
        "type": "single",
        "difficulty": 1,
        "question": "You are storing 50 TB of raw JSON logs in an S3 bucket named `inventory`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
        "options": [
            "AWS Glue",
            "Amazon Athena",
            "Amazon Redshift",
            "Amazon RDS"
        ],
        "correct": [
            1
        ],
        "concept": "Amazon Athena allows you to run interactive SQL queries directly against data in Amazon S3."
    },
    {
        "id": 70,
        "type": "single",
        "difficulty": 1,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `session_id` is greater than 10000 and drop duplicates based on `status`?",
        "options": [
            "df.where('session_id' > 10000).distinct('status')",
            "df.filter(df.session_id > 10000).dropDuplicates('status')",
            "df.filter('session_id' > 10000).drop_duplicates('status')",
            "df.filter(F.col('session_id') > 10000).dropDuplicates(['status'])"
        ],
        "correct": [
            3
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 71,
        "type": "single",
        "difficulty": 3,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM sales WHERE revenue = '50'`?",
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
        "id": 72,
        "type": "single",
        "difficulty": 1,
        "question": "When designing a slowly changing dimension (SCD) for `events`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
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
        "id": 73,
        "type": "single",
        "difficulty": 3,
        "question": "Given the table `payments`, which SQL query calculates the cumulative sum of `quantity` partitioned by `session_id` ordered by `session_id`?",
        "options": [
            "SELECT SUM(quantity) PARTITION BY session_id ORDER BY session_id FROM payments",
            "SELECT CUMSUM(quantity) OVER (PARTITION BY session_id ORDER BY session_id) FROM payments",
            "SELECT SUM(quantity) OVER (PARTITION BY session_id ORDER BY session_id) FROM payments",
            "SELECT SUM(quantity) OVER (ORDER BY session_id PARTITION BY session_id) FROM payments"
        ],
        "correct": [
            2
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 74,
        "type": "single",
        "difficulty": 2,
        "question": "You have a Kafka topic `logs` with 10 partitions. If you spin up 5 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "Each reads all 10 partitions",
            "Partitions are randomly assigned dynamically per message",
            "It depends on the producer routing key",
            "Consumer 1 reads 5, Consumer 2 reads 5"
        ],
        "correct": [
            3
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 75,
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
        "id": 76,
        "type": "single",
        "difficulty": 3,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM clicks WHERE discount = '100'`?",
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
        "id": 77,
        "type": "single",
        "difficulty": 3,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `revenue`?",
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
        "id": 78,
        "type": "single",
        "difficulty": 3,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `price` is greater than 500 and drop duplicates based on `user_id`?",
        "options": [
            "df.where('price' > 500).distinct('user_id')",
            "df.filter(df.price > 500).dropDuplicates('user_id')",
            "df.filter(F.col('price') > 500).dropDuplicates(['user_id'])",
            "df.filter('price' > 500).drop_duplicates('user_id')"
        ],
        "correct": [
            2
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 79,
        "type": "single",
        "difficulty": 2,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `amount`?",
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
        "id": 80,
        "type": "single",
        "difficulty": 1,
        "question": "In a Star Schema, the `payments` table contains foreign keys to dimension tables and quantitative metrics like `amount`. What type of table is this?",
        "options": [
            "Bridge Table",
            "Dimension Table",
            "Aggregate Table",
            "Fact Table"
        ],
        "correct": [
            3
        ],
        "concept": "Fact tables contain quantitative data (measurements) and foreign keys referencing dimension tables."
    },
    {
        "id": 81,
        "type": "single",
        "difficulty": 2,
        "question": "Given the table `users`, which SQL query calculates the cumulative sum of `tax` partitioned by `tax` ordered by `timestamp`?",
        "options": [
            "SELECT CUMSUM(tax) OVER (PARTITION BY tax ORDER BY timestamp) FROM users",
            "SELECT SUM(tax) OVER (PARTITION BY tax ORDER BY timestamp) FROM users",
            "SELECT SUM(tax) PARTITION BY tax ORDER BY timestamp FROM users",
            "SELECT SUM(tax) OVER (ORDER BY tax PARTITION BY timestamp) FROM users"
        ],
        "correct": [
            1
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 82,
        "type": "single",
        "difficulty": 1,
        "question": "In Airflow, if task A and task B are upstream of task C, and you want task C to run ONLY if both A and B succeed, which trigger rule should you use for task C?",
        "options": [
            "all_success",
            "one_success",
            "none_failed",
            "all_done"
        ],
        "correct": [
            0
        ],
        "concept": "all_success is the default trigger rule in Airflow, requiring all upstream tasks to succeed."
    },
    {
        "id": 83,
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
        "id": 84,
        "type": "single",
        "difficulty": 2,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM events WHERE session_id = '10'`?",
        "options": [
            "Virtual Warehouse (Compute)",
            "Cloud Services Layer",
            "Database Storage Layer",
            "Metadata Layer"
        ],
        "correct": [
            0
        ],
        "concept": "Query execution and data processing are handled by the Virtual Warehouses (Compute Layer)."
    },
    {
        "id": 85,
        "type": "single",
        "difficulty": 1,
        "question": "You have a Kafka topic `sales` with 100 partitions. If you spin up 3 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "Each reads all 100 partitions",
            "Partitions are randomly assigned dynamically per message",
            "Consumer 1 reads 50, Consumer 2 reads 50",
            "It depends on the producer routing key"
        ],
        "correct": [
            2
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 86,
        "type": "single",
        "difficulty": 2,
        "question": "Given the table `customers`, which SQL query calculates the cumulative sum of `quantity` partitioned by `user_id` ordered by `discount`?",
        "options": [
            "SELECT CUMSUM(quantity) OVER (PARTITION BY user_id ORDER BY discount) FROM customers",
            "SELECT SUM(quantity) OVER (ORDER BY user_id PARTITION BY discount) FROM customers",
            "SELECT SUM(quantity) OVER (PARTITION BY user_id ORDER BY discount) FROM customers",
            "SELECT SUM(quantity) PARTITION BY user_id ORDER BY discount FROM customers"
        ],
        "correct": [
            2
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 87,
        "type": "single",
        "difficulty": 2,
        "question": "In a Star Schema, the `inventory` table contains foreign keys to dimension tables and quantitative metrics like `tax`. What type of table is this?",
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
        "id": 88,
        "type": "single",
        "difficulty": 1,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM events WHERE discount = '100'`?",
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
        "id": 89,
        "type": "single",
        "difficulty": 3,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM inventory WHERE user_id = '1000'`?",
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
        "id": 90,
        "type": "single",
        "difficulty": 1,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `revenue`?",
        "options": [
            "Avro",
            "JSON",
            "CSV",
            "Parquet"
        ],
        "correct": [
            3
        ],
        "concept": "Apache Parquet is a columnar storage format highly optimized for analytical (OLAP) queries."
    },
    {
        "id": 91,
        "type": "single",
        "difficulty": 3,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM logs WHERE timestamp = '500'`?",
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
        "id": 92,
        "type": "single",
        "difficulty": 1,
        "question": "When designing a slowly changing dimension (SCD) for `transactions`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
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
        "id": 93,
        "type": "single",
        "difficulty": 3,
        "question": "You have a Kafka topic `customers` with 10 partitions. If you spin up 3 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "Partitions are randomly assigned dynamically per message",
            "Each reads all 10 partitions",
            "Consumer 1 reads 5, Consumer 2 reads 5",
            "It depends on the producer routing key"
        ],
        "correct": [
            2
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 94,
        "type": "single",
        "difficulty": 3,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `user_id` is greater than 500 and drop duplicates based on `tax`?",
        "options": [
            "df.where('user_id' > 500).distinct('tax')",
            "df.filter('user_id' > 500).drop_duplicates('tax')",
            "df.filter(F.col('user_id') > 500).dropDuplicates(['tax'])",
            "df.filter(df.user_id > 500).dropDuplicates('tax')"
        ],
        "correct": [
            2
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 95,
        "type": "single",
        "difficulty": 1,
        "question": "What is the output of `sum(x for x in range(10000) if x % 4 == 0)`?",
        "options": [
            "12494996",
            "24990000",
            "12495004",
            "12495000"
        ],
        "correct": [
            3
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 10000 that are divisible by 4."
    },
    {
        "id": 96,
        "type": "single",
        "difficulty": 1,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM transactions WHERE revenue = '500'`?",
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
        "id": 97,
        "type": "single",
        "difficulty": 1,
        "question": "What is the output of `sum(x for x in range(10000) if x % 5 == 0)`?",
        "options": [
            "9995005",
            "9994995",
            "9995000",
            "19990000"
        ],
        "correct": [
            2
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 10000 that are divisible by 5."
    },
    {
        "id": 98,
        "type": "single",
        "difficulty": 2,
        "question": "When designing a slowly changing dimension (SCD) for `clicks`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
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
        "id": 99,
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
        "id": 100,
        "type": "single",
        "difficulty": 3,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `price`?",
        "options": [
            "JSON",
            "CSV",
            "Parquet",
            "Avro"
        ],
        "correct": [
            2
        ],
        "concept": "Apache Parquet is a columnar storage format highly optimized for analytical (OLAP) queries."
    }
]
};

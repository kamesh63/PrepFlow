window.QUIZ_DATA = window.QUIZ_DATA || {};
window.QUIZ_DATA["day30"] = {
  title: "Data Engineering Masterclass - Day 30",
  topics: ["SQL", "PySpark", "Airflow", "Kafka", "Data Modeling", "AWS", "Snowflake"],
  questions: [
    {
        "id": 1,
        "type": "single",
        "difficulty": 3,
        "question": "Given the table `clicks`, which SQL query calculates the cumulative sum of `quantity` partitioned by `session_id` ordered by `quantity`?",
        "options": [
            "SELECT SUM(quantity) OVER (ORDER BY session_id PARTITION BY quantity) FROM clicks",
            "SELECT SUM(quantity) PARTITION BY session_id ORDER BY quantity FROM clicks",
            "SELECT CUMSUM(quantity) OVER (PARTITION BY session_id ORDER BY quantity) FROM clicks",
            "SELECT SUM(quantity) OVER (PARTITION BY session_id ORDER BY quantity) FROM clicks"
        ],
        "correct": [
            3
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 2,
        "type": "single",
        "difficulty": 1,
        "question": "What is the output of `sum(x for x in range(1000) if x % 3 == 0)`?",
        "options": [
            "333666",
            "166836",
            "166830",
            "166833"
        ],
        "correct": [
            3
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 1000 that are divisible by 3."
    },
    {
        "id": 3,
        "type": "single",
        "difficulty": 1,
        "question": "You have a Kafka topic `customers` with 10000 partitions. If you spin up 4 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "Consumer 1 reads 5000, Consumer 2 reads 5000",
            "Each reads all 10000 partitions",
            "Partitions are randomly assigned dynamically per message",
            "It depends on the producer routing key"
        ],
        "correct": [
            0
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 4,
        "type": "single",
        "difficulty": 3,
        "question": "You have a Kafka topic `inventory` with 10000 partitions. If you spin up 5 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "Consumer 1 reads 5000, Consumer 2 reads 5000",
            "It depends on the producer routing key",
            "Each reads all 10000 partitions",
            "Partitions are randomly assigned dynamically per message"
        ],
        "correct": [
            0
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 5,
        "type": "single",
        "difficulty": 2,
        "question": "In a Star Schema, the `sales` table contains foreign keys to dimension tables and quantitative metrics like `price`. What type of table is this?",
        "options": [
            "Bridge Table",
            "Dimension Table",
            "Fact Table",
            "Aggregate Table"
        ],
        "correct": [
            2
        ],
        "concept": "Fact tables contain quantitative data (measurements) and foreign keys referencing dimension tables."
    },
    {
        "id": 6,
        "type": "single",
        "difficulty": 2,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `user_id`?",
        "options": [
            "JSON",
            "Avro",
            "CSV",
            "Parquet"
        ],
        "correct": [
            3
        ],
        "concept": "Apache Parquet is a columnar storage format highly optimized for analytical (OLAP) queries."
    },
    {
        "id": 7,
        "type": "single",
        "difficulty": 1,
        "question": "You are storing 10 TB of raw JSON logs in an S3 bucket named `customers`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
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
        "id": 8,
        "type": "single",
        "difficulty": 3,
        "question": "What is the output of `sum(x for x in range(1000) if x % 4 == 0)`?",
        "options": [
            "249000",
            "124500",
            "124496",
            "124504"
        ],
        "correct": [
            1
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 1000 that are divisible by 4."
    },
    {
        "id": 9,
        "type": "single",
        "difficulty": 2,
        "question": "When designing a slowly changing dimension (SCD) for `events`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
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
        "id": 10,
        "type": "single",
        "difficulty": 2,
        "question": "You are storing 100 TB of raw JSON logs in an S3 bucket named `logs`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
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
        "id": 11,
        "type": "single",
        "difficulty": 1,
        "question": "Given the table `inventory`, which SQL query calculates the cumulative sum of `tax` partitioned by `price` ordered by `discount`?",
        "options": [
            "SELECT SUM(tax) OVER (PARTITION BY price ORDER BY discount) FROM inventory",
            "SELECT SUM(tax) OVER (ORDER BY price PARTITION BY discount) FROM inventory",
            "SELECT SUM(tax) PARTITION BY price ORDER BY discount FROM inventory",
            "SELECT CUMSUM(tax) OVER (PARTITION BY price ORDER BY discount) FROM inventory"
        ],
        "correct": [
            0
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 12,
        "type": "single",
        "difficulty": 2,
        "question": "You are storing 100 TB of raw JSON logs in an S3 bucket named `events`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
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
        "id": 13,
        "type": "single",
        "difficulty": 2,
        "question": "When designing a slowly changing dimension (SCD) for `orders`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
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
        "id": 14,
        "type": "single",
        "difficulty": 3,
        "question": "You are storing 500 TB of raw JSON logs in an S3 bucket named `sales`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
        "options": [
            "Amazon Redshift",
            "Amazon Athena",
            "AWS Glue",
            "Amazon RDS"
        ],
        "correct": [
            1
        ],
        "concept": "Amazon Athena allows you to run interactive SQL queries directly against data in Amazon S3."
    },
    {
        "id": 15,
        "type": "single",
        "difficulty": 3,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `discount` is greater than 50 and drop duplicates based on `quantity`?",
        "options": [
            "df.filter(F.col('discount') > 50).dropDuplicates(['quantity'])",
            "df.filter('discount' > 50).drop_duplicates('quantity')",
            "df.filter(df.discount > 50).dropDuplicates('quantity')",
            "df.where('discount' > 50).distinct('quantity')"
        ],
        "correct": [
            0
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 16,
        "type": "single",
        "difficulty": 2,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM transactions WHERE revenue = '5000'`?",
        "options": [
            "Metadata Layer",
            "Cloud Services Layer",
            "Database Storage Layer",
            "Virtual Warehouse (Compute)"
        ],
        "correct": [
            3
        ],
        "concept": "Query execution and data processing are handled by the Virtual Warehouses (Compute Layer)."
    },
    {
        "id": 17,
        "type": "single",
        "difficulty": 3,
        "question": "You are storing 1000 TB of raw JSON logs in an S3 bucket named `clicks`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
        "options": [
            "Amazon Redshift",
            "Amazon RDS",
            "AWS Glue",
            "Amazon Athena"
        ],
        "correct": [
            3
        ],
        "concept": "Amazon Athena allows you to run interactive SQL queries directly against data in Amazon S3."
    },
    {
        "id": 18,
        "type": "single",
        "difficulty": 3,
        "question": "When designing a slowly changing dimension (SCD) for `customers`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
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
        "id": 19,
        "type": "single",
        "difficulty": 2,
        "question": "In Airflow, if task A and task B are upstream of task C, and you want task C to run ONLY if both A and B succeed, which trigger rule should you use for task C?",
        "options": [
            "none_failed",
            "all_success",
            "one_success",
            "all_done"
        ],
        "correct": [
            1
        ],
        "concept": "all_success is the default trigger rule in Airflow, requiring all upstream tasks to succeed."
    },
    {
        "id": 20,
        "type": "single",
        "difficulty": 1,
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
        "id": 21,
        "type": "single",
        "difficulty": 2,
        "question": "You have a Kafka topic `events` with 10000 partitions. If you spin up 2 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "Consumer 1 reads 5000, Consumer 2 reads 5000",
            "Partitions are randomly assigned dynamically per message",
            "Each reads all 10000 partitions",
            "It depends on the producer routing key"
        ],
        "correct": [
            0
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 22,
        "type": "single",
        "difficulty": 1,
        "question": "When designing a slowly changing dimension (SCD) for `events`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
        "options": [
            "Type 2",
            "Type 1",
            "Type 3",
            "Type 4"
        ],
        "correct": [
            0
        ],
        "concept": "SCD Type 2 tracks historical data by creating multiple records for a given natural key with effective dates."
    },
    {
        "id": 23,
        "type": "single",
        "difficulty": 1,
        "question": "In a Star Schema, the `users` table contains foreign keys to dimension tables and quantitative metrics like `quantity`. What type of table is this?",
        "options": [
            "Bridge Table",
            "Fact Table",
            "Aggregate Table",
            "Dimension Table"
        ],
        "correct": [
            1
        ],
        "concept": "Fact tables contain quantitative data (measurements) and foreign keys referencing dimension tables."
    },
    {
        "id": 24,
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
        "id": 25,
        "type": "single",
        "difficulty": 2,
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
        "id": 26,
        "type": "single",
        "difficulty": 1,
        "question": "You are storing 500 TB of raw JSON logs in an S3 bucket named `users`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
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
        "id": 27,
        "type": "single",
        "difficulty": 3,
        "question": "In a Star Schema, the `users` table contains foreign keys to dimension tables and quantitative metrics like `timestamp`. What type of table is this?",
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
        "id": 28,
        "type": "single",
        "difficulty": 3,
        "question": "In a Star Schema, the `payments` table contains foreign keys to dimension tables and quantitative metrics like `session_id`. What type of table is this?",
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
        "id": 29,
        "type": "single",
        "difficulty": 1,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `session_id`?",
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
        "id": 30,
        "type": "single",
        "difficulty": 3,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM clicks WHERE status = '100'`?",
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
        "id": 31,
        "type": "single",
        "difficulty": 1,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `timestamp` is greater than 10 and drop duplicates based on `session_id`?",
        "options": [
            "df.filter('timestamp' > 10).drop_duplicates('session_id')",
            "df.filter(F.col('timestamp') > 10).dropDuplicates(['session_id'])",
            "df.filter(df.timestamp > 10).dropDuplicates('session_id')",
            "df.where('timestamp' > 10).distinct('session_id')"
        ],
        "correct": [
            1
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 32,
        "type": "single",
        "difficulty": 3,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `user_id`?",
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
        "id": 33,
        "type": "single",
        "difficulty": 2,
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
        "id": 34,
        "type": "single",
        "difficulty": 1,
        "question": "When designing a slowly changing dimension (SCD) for `payments`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
        "options": [
            "Type 1",
            "Type 4",
            "Type 2",
            "Type 3"
        ],
        "correct": [
            2
        ],
        "concept": "SCD Type 2 tracks historical data by creating multiple records for a given natural key with effective dates."
    },
    {
        "id": 35,
        "type": "single",
        "difficulty": 1,
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
        "id": 36,
        "type": "single",
        "difficulty": 2,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `timestamp`?",
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
        "id": 37,
        "type": "single",
        "difficulty": 2,
        "question": "You are storing 100 TB of raw JSON logs in an S3 bucket named `sales`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
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
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `price`?",
        "options": [
            "JSON",
            "Avro",
            "CSV",
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
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `status` is greater than 100 and drop duplicates based on `quantity`?",
        "options": [
            "df.filter('status' > 100).drop_duplicates('quantity')",
            "df.filter(df.status > 100).dropDuplicates('quantity')",
            "df.filter(F.col('status') > 100).dropDuplicates(['quantity'])",
            "df.where('status' > 100).distinct('quantity')"
        ],
        "correct": [
            2
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 40,
        "type": "single",
        "difficulty": 1,
        "question": "In a Star Schema, the `clicks` table contains foreign keys to dimension tables and quantitative metrics like `user_id`. What type of table is this?",
        "options": [
            "Bridge Table",
            "Dimension Table",
            "Fact Table",
            "Aggregate Table"
        ],
        "correct": [
            2
        ],
        "concept": "Fact tables contain quantitative data (measurements) and foreign keys referencing dimension tables."
    },
    {
        "id": 41,
        "type": "single",
        "difficulty": 2,
        "question": "In Airflow, if task A and task B are upstream of task C, and you want task C to run ONLY if both A and B succeed, which trigger rule should you use for task C?",
        "options": [
            "one_success",
            "all_success",
            "none_failed",
            "all_done"
        ],
        "correct": [
            1
        ],
        "concept": "all_success is the default trigger rule in Airflow, requiring all upstream tasks to succeed."
    },
    {
        "id": 42,
        "type": "single",
        "difficulty": 3,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `timestamp` is greater than 10 and drop duplicates based on `revenue`?",
        "options": [
            "df.filter('timestamp' > 10).drop_duplicates('revenue')",
            "df.filter(df.timestamp > 10).dropDuplicates('revenue')",
            "df.where('timestamp' > 10).distinct('revenue')",
            "df.filter(F.col('timestamp') > 10).dropDuplicates(['revenue'])"
        ],
        "correct": [
            3
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 43,
        "type": "single",
        "difficulty": 2,
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
        "id": 44,
        "type": "single",
        "difficulty": 2,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM sales WHERE timestamp = '5000'`?",
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
        "id": 45,
        "type": "single",
        "difficulty": 2,
        "question": "In a Star Schema, the `sales` table contains foreign keys to dimension tables and quantitative metrics like `status`. What type of table is this?",
        "options": [
            "Bridge Table",
            "Aggregate Table",
            "Dimension Table",
            "Fact Table"
        ],
        "correct": [
            3
        ],
        "concept": "Fact tables contain quantitative data (measurements) and foreign keys referencing dimension tables."
    },
    {
        "id": 46,
        "type": "single",
        "difficulty": 1,
        "question": "You have a Kafka topic `transactions` with 5000 partitions. If you spin up 3 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "Each reads all 5000 partitions",
            "Consumer 1 reads 2500, Consumer 2 reads 2500",
            "It depends on the producer routing key",
            "Partitions are randomly assigned dynamically per message"
        ],
        "correct": [
            1
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 47,
        "type": "single",
        "difficulty": 2,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM transactions WHERE session_id = '50'`?",
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
        "id": 48,
        "type": "single",
        "difficulty": 1,
        "question": "When designing a slowly changing dimension (SCD) for `payments`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
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
        "id": 49,
        "type": "single",
        "difficulty": 2,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM logs WHERE revenue = '10000'`?",
        "options": [
            "Cloud Services Layer",
            "Virtual Warehouse (Compute)",
            "Metadata Layer",
            "Database Storage Layer"
        ],
        "correct": [
            1
        ],
        "concept": "Query execution and data processing are handled by the Virtual Warehouses (Compute Layer)."
    },
    {
        "id": 50,
        "type": "single",
        "difficulty": 1,
        "question": "You have a Kafka topic `transactions` with 5000 partitions. If you spin up 5 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
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
        "id": 51,
        "type": "single",
        "difficulty": 3,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM payments WHERE quantity = '10'`?",
        "options": [
            "Virtual Warehouse (Compute)",
            "Metadata Layer",
            "Database Storage Layer",
            "Cloud Services Layer"
        ],
        "correct": [
            0
        ],
        "concept": "Query execution and data processing are handled by the Virtual Warehouses (Compute Layer)."
    },
    {
        "id": 52,
        "type": "single",
        "difficulty": 3,
        "question": "What is the output of `sum(x for x in range(10000) if x % 2 == 0)`?",
        "options": [
            "24995000",
            "49990000",
            "24994998",
            "24995002"
        ],
        "correct": [
            0
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 10000 that are divisible by 2."
    },
    {
        "id": 53,
        "type": "single",
        "difficulty": 3,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `session_id`?",
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
        "id": 54,
        "type": "single",
        "difficulty": 1,
        "question": "What is the output of `sum(x for x in range(5000) if x % 5 == 0)`?",
        "options": [
            "2497500",
            "2497495",
            "2497505",
            "4995000"
        ],
        "correct": [
            0
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 5000 that are divisible by 5."
    },
    {
        "id": 55,
        "type": "single",
        "difficulty": 2,
        "question": "When designing a slowly changing dimension (SCD) for `events`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
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
        "id": 56,
        "type": "single",
        "difficulty": 3,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `timestamp` is greater than 100 and drop duplicates based on `amount`?",
        "options": [
            "df.where('timestamp' > 100).distinct('amount')",
            "df.filter(F.col('timestamp') > 100).dropDuplicates(['amount'])",
            "df.filter(df.timestamp > 100).dropDuplicates('amount')",
            "df.filter('timestamp' > 100).drop_duplicates('amount')"
        ],
        "correct": [
            1
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 57,
        "type": "single",
        "difficulty": 3,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `timestamp`?",
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
        "id": 58,
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
        "id": 59,
        "type": "single",
        "difficulty": 3,
        "question": "Given the table `users`, which SQL query calculates the cumulative sum of `tax` partitioned by `status` ordered by `status`?",
        "options": [
            "SELECT SUM(tax) OVER (ORDER BY status PARTITION BY status) FROM users",
            "SELECT SUM(tax) PARTITION BY status ORDER BY status FROM users",
            "SELECT CUMSUM(tax) OVER (PARTITION BY status ORDER BY status) FROM users",
            "SELECT SUM(tax) OVER (PARTITION BY status ORDER BY status) FROM users"
        ],
        "correct": [
            3
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 60,
        "type": "single",
        "difficulty": 1,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `discount` is greater than 5000 and drop duplicates based on `discount`?",
        "options": [
            "df.filter(F.col('discount') > 5000).dropDuplicates(['discount'])",
            "df.filter('discount' > 5000).drop_duplicates('discount')",
            "df.filter(df.discount > 5000).dropDuplicates('discount')",
            "df.where('discount' > 5000).distinct('discount')"
        ],
        "correct": [
            0
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 61,
        "type": "single",
        "difficulty": 2,
        "question": "When designing a slowly changing dimension (SCD) for `logs`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
        "options": [
            "Type 1",
            "Type 4",
            "Type 2",
            "Type 3"
        ],
        "correct": [
            2
        ],
        "concept": "SCD Type 2 tracks historical data by creating multiple records for a given natural key with effective dates."
    },
    {
        "id": 62,
        "type": "single",
        "difficulty": 2,
        "question": "You have a Kafka topic `clicks` with 10000 partitions. If you spin up 5 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "It depends on the producer routing key",
            "Consumer 1 reads 5000, Consumer 2 reads 5000",
            "Each reads all 10000 partitions",
            "Partitions are randomly assigned dynamically per message"
        ],
        "correct": [
            1
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 63,
        "type": "single",
        "difficulty": 3,
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
        "id": 64,
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
        "id": 65,
        "type": "single",
        "difficulty": 1,
        "question": "What is the output of `sum(x for x in range(10000) if x % 2 == 0)`?",
        "options": [
            "49990000",
            "24995002",
            "24994998",
            "24995000"
        ],
        "correct": [
            3
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 10000 that are divisible by 2."
    },
    {
        "id": 66,
        "type": "single",
        "difficulty": 3,
        "question": "You are storing 10 TB of raw JSON logs in an S3 bucket named `users`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
        "options": [
            "Amazon Redshift",
            "Amazon Athena",
            "AWS Glue",
            "Amazon RDS"
        ],
        "correct": [
            1
        ],
        "concept": "Amazon Athena allows you to run interactive SQL queries directly against data in Amazon S3."
    },
    {
        "id": 67,
        "type": "single",
        "difficulty": 1,
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
        "id": 68,
        "type": "single",
        "difficulty": 3,
        "question": "You have a Kafka topic `logs` with 10000 partitions. If you spin up 4 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "Partitions are randomly assigned dynamically per message",
            "Consumer 1 reads 5000, Consumer 2 reads 5000",
            "Each reads all 10000 partitions",
            "It depends on the producer routing key"
        ],
        "correct": [
            1
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 69,
        "type": "single",
        "difficulty": 2,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `revenue` is greater than 10000 and drop duplicates based on `status`?",
        "options": [
            "df.filter('revenue' > 10000).drop_duplicates('status')",
            "df.where('revenue' > 10000).distinct('status')",
            "df.filter(F.col('revenue') > 10000).dropDuplicates(['status'])",
            "df.filter(df.revenue > 10000).dropDuplicates('status')"
        ],
        "correct": [
            2
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 70,
        "type": "single",
        "difficulty": 1,
        "question": "Given the table `inventory`, which SQL query calculates the cumulative sum of `status` partitioned by `user_id` ordered by `quantity`?",
        "options": [
            "SELECT SUM(status) OVER (ORDER BY user_id PARTITION BY quantity) FROM inventory",
            "SELECT SUM(status) PARTITION BY user_id ORDER BY quantity FROM inventory",
            "SELECT CUMSUM(status) OVER (PARTITION BY user_id ORDER BY quantity) FROM inventory",
            "SELECT SUM(status) OVER (PARTITION BY user_id ORDER BY quantity) FROM inventory"
        ],
        "correct": [
            3
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 71,
        "type": "single",
        "difficulty": 1,
        "question": "Given the table `inventory`, which SQL query calculates the cumulative sum of `tax` partitioned by `quantity` ordered by `price`?",
        "options": [
            "SELECT SUM(tax) PARTITION BY quantity ORDER BY price FROM inventory",
            "SELECT SUM(tax) OVER (ORDER BY quantity PARTITION BY price) FROM inventory",
            "SELECT SUM(tax) OVER (PARTITION BY quantity ORDER BY price) FROM inventory",
            "SELECT CUMSUM(tax) OVER (PARTITION BY quantity ORDER BY price) FROM inventory"
        ],
        "correct": [
            2
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 72,
        "type": "single",
        "difficulty": 3,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `discount` is greater than 10000 and drop duplicates based on `revenue`?",
        "options": [
            "df.where('discount' > 10000).distinct('revenue')",
            "df.filter(F.col('discount') > 10000).dropDuplicates(['revenue'])",
            "df.filter('discount' > 10000).drop_duplicates('revenue')",
            "df.filter(df.discount > 10000).dropDuplicates('revenue')"
        ],
        "correct": [
            1
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 73,
        "type": "single",
        "difficulty": 2,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `revenue` is greater than 1000 and drop duplicates based on `discount`?",
        "options": [
            "df.where('revenue' > 1000).distinct('discount')",
            "df.filter('revenue' > 1000).drop_duplicates('discount')",
            "df.filter(df.revenue > 1000).dropDuplicates('discount')",
            "df.filter(F.col('revenue') > 1000).dropDuplicates(['discount'])"
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
        "question": "You are storing 5000 TB of raw JSON logs in an S3 bucket named `users`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
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
        "id": 75,
        "type": "single",
        "difficulty": 2,
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
        "id": 76,
        "type": "single",
        "difficulty": 1,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `user_id`?",
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
        "id": 77,
        "type": "single",
        "difficulty": 2,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM transactions WHERE quantity = '500'`?",
        "options": [
            "Virtual Warehouse (Compute)",
            "Metadata Layer",
            "Database Storage Layer",
            "Cloud Services Layer"
        ],
        "correct": [
            0
        ],
        "concept": "Query execution and data processing are handled by the Virtual Warehouses (Compute Layer)."
    },
    {
        "id": 78,
        "type": "single",
        "difficulty": 3,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `revenue` is greater than 500 and drop duplicates based on `revenue`?",
        "options": [
            "df.where('revenue' > 500).distinct('revenue')",
            "df.filter('revenue' > 500).drop_duplicates('revenue')",
            "df.filter(df.revenue > 500).dropDuplicates('revenue')",
            "df.filter(F.col('revenue') > 500).dropDuplicates(['revenue'])"
        ],
        "correct": [
            3
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 79,
        "type": "single",
        "difficulty": 3,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `tax`?",
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
        "id": 80,
        "type": "single",
        "difficulty": 1,
        "question": "You are storing 5000 TB of raw JSON logs in an S3 bucket named `inventory`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
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
        "id": 81,
        "type": "single",
        "difficulty": 1,
        "question": "What is the output of `sum(x for x in range(100) if x % 3 == 0)`?",
        "options": [
            "3366",
            "1686",
            "1683",
            "1680"
        ],
        "correct": [
            2
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 100 that are divisible by 3."
    },
    {
        "id": 82,
        "type": "single",
        "difficulty": 2,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `price` is greater than 500 and drop duplicates based on `quantity`?",
        "options": [
            "df.where('price' > 500).distinct('quantity')",
            "df.filter('price' > 500).drop_duplicates('quantity')",
            "df.filter(df.price > 500).dropDuplicates('quantity')",
            "df.filter(F.col('price') > 500).dropDuplicates(['quantity'])"
        ],
        "correct": [
            3
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 83,
        "type": "single",
        "difficulty": 1,
        "question": "Given the table `sales`, which SQL query calculates the cumulative sum of `revenue` partitioned by `session_id` ordered by `tax`?",
        "options": [
            "SELECT SUM(revenue) PARTITION BY session_id ORDER BY tax FROM sales",
            "SELECT SUM(revenue) OVER (PARTITION BY session_id ORDER BY tax) FROM sales",
            "SELECT SUM(revenue) OVER (ORDER BY session_id PARTITION BY tax) FROM sales",
            "SELECT CUMSUM(revenue) OVER (PARTITION BY session_id ORDER BY tax) FROM sales"
        ],
        "correct": [
            1
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 84,
        "type": "single",
        "difficulty": 2,
        "question": "In a Star Schema, the `users` table contains foreign keys to dimension tables and quantitative metrics like `session_id`. What type of table is this?",
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
        "id": 85,
        "type": "single",
        "difficulty": 1,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM inventory WHERE price = '10000'`?",
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
        "id": 86,
        "type": "single",
        "difficulty": 1,
        "question": "What is the output of `sum(x for x in range(10) if x % 5 == 0)`?",
        "options": [
            "10",
            "0",
            "5",
            "10"
        ],
        "correct": [
            2
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 10 that are divisible by 5."
    },
    {
        "id": 87,
        "type": "single",
        "difficulty": 2,
        "question": "Given the table `clicks`, which SQL query calculates the cumulative sum of `quantity` partitioned by `revenue` ordered by `amount`?",
        "options": [
            "SELECT SUM(quantity) OVER (PARTITION BY revenue ORDER BY amount) FROM clicks",
            "SELECT CUMSUM(quantity) OVER (PARTITION BY revenue ORDER BY amount) FROM clicks",
            "SELECT SUM(quantity) OVER (ORDER BY revenue PARTITION BY amount) FROM clicks",
            "SELECT SUM(quantity) PARTITION BY revenue ORDER BY amount FROM clicks"
        ],
        "correct": [
            0
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 88,
        "type": "single",
        "difficulty": 1,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM payments WHERE session_id = '50'`?",
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
        "id": 89,
        "type": "single",
        "difficulty": 3,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM users WHERE timestamp = '5000'`?",
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
        "id": 90,
        "type": "single",
        "difficulty": 1,
        "question": "In a Star Schema, the `clicks` table contains foreign keys to dimension tables and quantitative metrics like `revenue`. What type of table is this?",
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
        "id": 91,
        "type": "single",
        "difficulty": 2,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM events WHERE price = '10000'`?",
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
        "id": 92,
        "type": "single",
        "difficulty": 1,
        "question": "What is the output of `sum(x for x in range(1000) if x % 5 == 0)`?",
        "options": [
            "99505",
            "99495",
            "99500",
            "199000"
        ],
        "correct": [
            2
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 1000 that are divisible by 5."
    },
    {
        "id": 93,
        "type": "single",
        "difficulty": 2,
        "question": "You have a Kafka topic `payments` with 50 partitions. If you spin up 4 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "It depends on the producer routing key",
            "Consumer 1 reads 25, Consumer 2 reads 25",
            "Each reads all 50 partitions",
            "Partitions are randomly assigned dynamically per message"
        ],
        "correct": [
            1
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 94,
        "type": "single",
        "difficulty": 1,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM payments WHERE user_id = '1000'`?",
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
        "id": 95,
        "type": "single",
        "difficulty": 1,
        "question": "You are storing 5000 TB of raw JSON logs in an S3 bucket named `events`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
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
        "id": 96,
        "type": "single",
        "difficulty": 2,
        "question": "You have a Kafka topic `customers` with 5000 partitions. If you spin up 4 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "It depends on the producer routing key",
            "Consumer 1 reads 2500, Consumer 2 reads 2500",
            "Each reads all 5000 partitions",
            "Partitions are randomly assigned dynamically per message"
        ],
        "correct": [
            1
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 97,
        "type": "single",
        "difficulty": 3,
        "question": "You are storing 10000 TB of raw JSON logs in an S3 bucket named `sales`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
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
        "id": 98,
        "type": "single",
        "difficulty": 2,
        "question": "What is the output of `sum(x for x in range(500) if x % 5 == 0)`?",
        "options": [
            "49500",
            "24745",
            "24755",
            "24750"
        ],
        "correct": [
            3
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 500 that are divisible by 5."
    },
    {
        "id": 99,
        "type": "single",
        "difficulty": 1,
        "question": "You are storing 5000 TB of raw JSON logs in an S3 bucket named `payments`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
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
        "id": 100,
        "type": "single",
        "difficulty": 3,
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
    }
]
};

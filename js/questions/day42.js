window.QUIZ_DATA = window.QUIZ_DATA || {};
window.QUIZ_DATA["day42"] = {
  title: "Data Engineering Masterclass - Day 42",
  topics: ["SQL", "PySpark", "Airflow", "Kafka", "Data Modeling", "AWS", "Snowflake"],
  questions: [
    {
        "id": 1,
        "type": "single",
        "difficulty": 3,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `tax` is greater than 500 and drop duplicates based on `timestamp`?",
        "options": [
            "df.filter('tax' > 500).drop_duplicates('timestamp')",
            "df.where('tax' > 500).distinct('timestamp')",
            "df.filter(F.col('tax') > 500).dropDuplicates(['timestamp'])",
            "df.filter(df.tax > 500).dropDuplicates('timestamp')"
        ],
        "correct": [
            2
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 2,
        "type": "single",
        "difficulty": 1,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `timestamp`?",
        "options": [
            "Parquet",
            "CSV",
            "JSON",
            "Avro"
        ],
        "correct": [
            0
        ],
        "concept": "Apache Parquet is a columnar storage format highly optimized for analytical (OLAP) queries."
    },
    {
        "id": 3,
        "type": "single",
        "difficulty": 1,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM events WHERE session_id = '100'`?",
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
        "id": 4,
        "type": "single",
        "difficulty": 2,
        "question": "What is the output of `sum(x for x in range(500) if x % 3 == 0)`?",
        "options": [
            "41580",
            "41583",
            "41586",
            "83166"
        ],
        "correct": [
            1
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 500 that are divisible by 3."
    },
    {
        "id": 5,
        "type": "single",
        "difficulty": 2,
        "question": "What is the output of `sum(x for x in range(5000) if x % 3 == 0)`?",
        "options": [
            "4165833",
            "8331666",
            "4165836",
            "4165830"
        ],
        "correct": [
            0
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 5000 that are divisible by 3."
    },
    {
        "id": 6,
        "type": "single",
        "difficulty": 1,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `discount`?",
        "options": [
            "CSV",
            "Avro",
            "Parquet",
            "JSON"
        ],
        "correct": [
            2
        ],
        "concept": "Apache Parquet is a columnar storage format highly optimized for analytical (OLAP) queries."
    },
    {
        "id": 7,
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
        "id": 8,
        "type": "single",
        "difficulty": 3,
        "question": "What is the output of `sum(x for x in range(100) if x % 3 == 0)`?",
        "options": [
            "1683",
            "1686",
            "1680",
            "3366"
        ],
        "correct": [
            0
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 100 that are divisible by 3."
    },
    {
        "id": 9,
        "type": "single",
        "difficulty": 2,
        "question": "What is the output of `sum(x for x in range(10) if x % 3 == 0)`?",
        "options": [
            "36",
            "21",
            "18",
            "15"
        ],
        "correct": [
            2
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 10 that are divisible by 3."
    },
    {
        "id": 10,
        "type": "single",
        "difficulty": 1,
        "question": "In Airflow, if task A and task B are upstream of task C, and you want task C to run ONLY if both A and B succeed, which trigger rule should you use for task C?",
        "options": [
            "one_success",
            "all_done",
            "none_failed",
            "all_success"
        ],
        "correct": [
            3
        ],
        "concept": "all_success is the default trigger rule in Airflow, requiring all upstream tasks to succeed."
    },
    {
        "id": 11,
        "type": "single",
        "difficulty": 2,
        "question": "In a Star Schema, the `events` table contains foreign keys to dimension tables and quantitative metrics like `status`. What type of table is this?",
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
        "id": 12,
        "type": "single",
        "difficulty": 3,
        "question": "You are storing 10000 TB of raw JSON logs in an S3 bucket named `transactions`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
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
        "id": 13,
        "type": "single",
        "difficulty": 2,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `amount`?",
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
        "id": 14,
        "type": "single",
        "difficulty": 2,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `status`?",
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
        "id": 15,
        "type": "single",
        "difficulty": 3,
        "question": "In a Star Schema, the `transactions` table contains foreign keys to dimension tables and quantitative metrics like `revenue`. What type of table is this?",
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
        "id": 16,
        "type": "single",
        "difficulty": 3,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `session_id` is greater than 1000 and drop duplicates based on `amount`?",
        "options": [
            "df.filter(F.col('session_id') > 1000).dropDuplicates(['amount'])",
            "df.filter('session_id' > 1000).drop_duplicates('amount')",
            "df.filter(df.session_id > 1000).dropDuplicates('amount')",
            "df.where('session_id' > 1000).distinct('amount')"
        ],
        "correct": [
            0
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 17,
        "type": "single",
        "difficulty": 2,
        "question": "You are storing 50 TB of raw JSON logs in an S3 bucket named `inventory`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
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
        "id": 18,
        "type": "single",
        "difficulty": 2,
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
        "id": 19,
        "type": "single",
        "difficulty": 2,
        "question": "You have a Kafka topic `logs` with 5000 partitions. If you spin up 4 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "Consumer 1 reads 2500, Consumer 2 reads 2500",
            "Partitions are randomly assigned dynamically per message",
            "Each reads all 5000 partitions",
            "It depends on the producer routing key"
        ],
        "correct": [
            0
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 20,
        "type": "single",
        "difficulty": 2,
        "question": "When designing a slowly changing dimension (SCD) for `sales`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
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
        "id": 21,
        "type": "single",
        "difficulty": 2,
        "question": "You have a Kafka topic `customers` with 500 partitions. If you spin up 5 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "Each reads all 500 partitions",
            "Partitions are randomly assigned dynamically per message",
            "It depends on the producer routing key",
            "Consumer 1 reads 250, Consumer 2 reads 250"
        ],
        "correct": [
            3
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 22,
        "type": "single",
        "difficulty": 2,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM transactions WHERE tax = '10000'`?",
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
        "id": 23,
        "type": "single",
        "difficulty": 1,
        "question": "In Airflow, if task A and task B are upstream of task C, and you want task C to run ONLY if both A and B succeed, which trigger rule should you use for task C?",
        "options": [
            "all_success",
            "all_done",
            "one_success",
            "none_failed"
        ],
        "correct": [
            0
        ],
        "concept": "all_success is the default trigger rule in Airflow, requiring all upstream tasks to succeed."
    },
    {
        "id": 24,
        "type": "single",
        "difficulty": 3,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM users WHERE session_id = '50'`?",
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
        "id": 25,
        "type": "single",
        "difficulty": 2,
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
        "id": 26,
        "type": "single",
        "difficulty": 1,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `amount`?",
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
        "id": 27,
        "type": "single",
        "difficulty": 1,
        "question": "When designing a slowly changing dimension (SCD) for `payments`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
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
        "id": 28,
        "type": "single",
        "difficulty": 2,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `discount`?",
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
        "id": 29,
        "type": "single",
        "difficulty": 2,
        "question": "Given the table `events`, which SQL query calculates the cumulative sum of `session_id` partitioned by `price` ordered by `revenue`?",
        "options": [
            "SELECT SUM(session_id) OVER (PARTITION BY price ORDER BY revenue) FROM events",
            "SELECT SUM(session_id) OVER (ORDER BY price PARTITION BY revenue) FROM events",
            "SELECT CUMSUM(session_id) OVER (PARTITION BY price ORDER BY revenue) FROM events",
            "SELECT SUM(session_id) PARTITION BY price ORDER BY revenue FROM events"
        ],
        "correct": [
            0
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 30,
        "type": "single",
        "difficulty": 3,
        "question": "You have a Kafka topic `events` with 10000 partitions. If you spin up 5 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
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
        "id": 31,
        "type": "single",
        "difficulty": 3,
        "question": "What is the output of `sum(x for x in range(100) if x % 4 == 0)`?",
        "options": [
            "1204",
            "1200",
            "2400",
            "1196"
        ],
        "correct": [
            1
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 100 that are divisible by 4."
    },
    {
        "id": 32,
        "type": "single",
        "difficulty": 3,
        "question": "Given the table `transactions`, which SQL query calculates the cumulative sum of `session_id` partitioned by `quantity` ordered by `price`?",
        "options": [
            "SELECT SUM(session_id) PARTITION BY quantity ORDER BY price FROM transactions",
            "SELECT SUM(session_id) OVER (PARTITION BY quantity ORDER BY price) FROM transactions",
            "SELECT SUM(session_id) OVER (ORDER BY quantity PARTITION BY price) FROM transactions",
            "SELECT CUMSUM(session_id) OVER (PARTITION BY quantity ORDER BY price) FROM transactions"
        ],
        "correct": [
            1
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 33,
        "type": "single",
        "difficulty": 1,
        "question": "Given the table `logs`, which SQL query calculates the cumulative sum of `price` partitioned by `revenue` ordered by `amount`?",
        "options": [
            "SELECT CUMSUM(price) OVER (PARTITION BY revenue ORDER BY amount) FROM logs",
            "SELECT SUM(price) OVER (PARTITION BY revenue ORDER BY amount) FROM logs",
            "SELECT SUM(price) PARTITION BY revenue ORDER BY amount FROM logs",
            "SELECT SUM(price) OVER (ORDER BY revenue PARTITION BY amount) FROM logs"
        ],
        "correct": [
            1
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 34,
        "type": "single",
        "difficulty": 2,
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
        "id": 35,
        "type": "single",
        "difficulty": 3,
        "question": "When designing a slowly changing dimension (SCD) for `clicks`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
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
        "id": 36,
        "type": "single",
        "difficulty": 3,
        "question": "You are storing 100 TB of raw JSON logs in an S3 bucket named `inventory`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
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
        "id": 37,
        "type": "single",
        "difficulty": 1,
        "question": "You are storing 1000 TB of raw JSON logs in an S3 bucket named `transactions`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
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
        "id": 38,
        "type": "single",
        "difficulty": 2,
        "question": "Given the table `orders`, which SQL query calculates the cumulative sum of `revenue` partitioned by `quantity` ordered by `tax`?",
        "options": [
            "SELECT SUM(revenue) OVER (ORDER BY quantity PARTITION BY tax) FROM orders",
            "SELECT SUM(revenue) OVER (PARTITION BY quantity ORDER BY tax) FROM orders",
            "SELECT CUMSUM(revenue) OVER (PARTITION BY quantity ORDER BY tax) FROM orders",
            "SELECT SUM(revenue) PARTITION BY quantity ORDER BY tax FROM orders"
        ],
        "correct": [
            1
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 39,
        "type": "single",
        "difficulty": 3,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `revenue` is greater than 10000 and drop duplicates based on `status`?",
        "options": [
            "df.where('revenue' > 10000).distinct('status')",
            "df.filter(df.revenue > 10000).dropDuplicates('status')",
            "df.filter(F.col('revenue') > 10000).dropDuplicates(['status'])",
            "df.filter('revenue' > 10000).drop_duplicates('status')"
        ],
        "correct": [
            2
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 40,
        "type": "single",
        "difficulty": 2,
        "question": "You have a Kafka topic `orders` with 1000 partitions. If you spin up 3 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "Consumer 1 reads 500, Consumer 2 reads 500",
            "It depends on the producer routing key",
            "Partitions are randomly assigned dynamically per message",
            "Each reads all 1000 partitions"
        ],
        "correct": [
            0
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 41,
        "type": "single",
        "difficulty": 1,
        "question": "What is the output of `sum(x for x in range(10) if x % 4 == 0)`?",
        "options": [
            "16",
            "24",
            "8",
            "12"
        ],
        "correct": [
            3
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 10 that are divisible by 4."
    },
    {
        "id": 42,
        "type": "single",
        "difficulty": 3,
        "question": "What is the output of `sum(x for x in range(10) if x % 5 == 0)`?",
        "options": [
            "10",
            "0",
            "10",
            "5"
        ],
        "correct": [
            3
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 10 that are divisible by 5."
    },
    {
        "id": 43,
        "type": "single",
        "difficulty": 2,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `discount` is greater than 1000 and drop duplicates based on `quantity`?",
        "options": [
            "df.filter(df.discount > 1000).dropDuplicates('quantity')",
            "df.filter('discount' > 1000).drop_duplicates('quantity')",
            "df.filter(F.col('discount') > 1000).dropDuplicates(['quantity'])",
            "df.where('discount' > 1000).distinct('quantity')"
        ],
        "correct": [
            2
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 44,
        "type": "single",
        "difficulty": 1,
        "question": "In a Star Schema, the `orders` table contains foreign keys to dimension tables and quantitative metrics like `session_id`. What type of table is this?",
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
        "id": 45,
        "type": "single",
        "difficulty": 2,
        "question": "In a Star Schema, the `logs` table contains foreign keys to dimension tables and quantitative metrics like `timestamp`. What type of table is this?",
        "options": [
            "Fact Table",
            "Dimension Table",
            "Aggregate Table",
            "Bridge Table"
        ],
        "correct": [
            0
        ],
        "concept": "Fact tables contain quantitative data (measurements) and foreign keys referencing dimension tables."
    },
    {
        "id": 46,
        "type": "single",
        "difficulty": 2,
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
        "id": 47,
        "type": "single",
        "difficulty": 2,
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
        "id": 48,
        "type": "single",
        "difficulty": 2,
        "question": "You have a Kafka topic `events` with 500 partitions. If you spin up 5 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "Each reads all 500 partitions",
            "Consumer 1 reads 250, Consumer 2 reads 250",
            "It depends on the producer routing key",
            "Partitions are randomly assigned dynamically per message"
        ],
        "correct": [
            1
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 49,
        "type": "single",
        "difficulty": 1,
        "question": "You have a Kafka topic `sales` with 100 partitions. If you spin up 5 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
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
    },
    {
        "id": 50,
        "type": "single",
        "difficulty": 2,
        "question": "Given the table `users`, which SQL query calculates the cumulative sum of `tax` partitioned by `timestamp` ordered by `discount`?",
        "options": [
            "SELECT SUM(tax) OVER (ORDER BY timestamp PARTITION BY discount) FROM users",
            "SELECT CUMSUM(tax) OVER (PARTITION BY timestamp ORDER BY discount) FROM users",
            "SELECT SUM(tax) OVER (PARTITION BY timestamp ORDER BY discount) FROM users",
            "SELECT SUM(tax) PARTITION BY timestamp ORDER BY discount FROM users"
        ],
        "correct": [
            2
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 51,
        "type": "single",
        "difficulty": 1,
        "question": "When designing a slowly changing dimension (SCD) for `users`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
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
        "id": 52,
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
        "id": 53,
        "type": "single",
        "difficulty": 2,
        "question": "Given the table `users`, which SQL query calculates the cumulative sum of `session_id` partitioned by `revenue` ordered by `price`?",
        "options": [
            "SELECT SUM(session_id) OVER (PARTITION BY revenue ORDER BY price) FROM users",
            "SELECT CUMSUM(session_id) OVER (PARTITION BY revenue ORDER BY price) FROM users",
            "SELECT SUM(session_id) PARTITION BY revenue ORDER BY price FROM users",
            "SELECT SUM(session_id) OVER (ORDER BY revenue PARTITION BY price) FROM users"
        ],
        "correct": [
            0
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 54,
        "type": "single",
        "difficulty": 3,
        "question": "You have a Kafka topic `clicks` with 10000 partitions. If you spin up 4 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "Partitions are randomly assigned dynamically per message",
            "Each reads all 10000 partitions",
            "Consumer 1 reads 5000, Consumer 2 reads 5000",
            "It depends on the producer routing key"
        ],
        "correct": [
            2
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 55,
        "type": "single",
        "difficulty": 2,
        "question": "You are storing 10000 TB of raw JSON logs in an S3 bucket named `clicks`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
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
        "id": 56,
        "type": "single",
        "difficulty": 1,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `discount`?",
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
        "id": 57,
        "type": "single",
        "difficulty": 1,
        "question": "When designing a slowly changing dimension (SCD) for `sales`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
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
        "id": 58,
        "type": "single",
        "difficulty": 3,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `session_id` is greater than 10 and drop duplicates based on `price`?",
        "options": [
            "df.filter('session_id' > 10).drop_duplicates('price')",
            "df.filter(df.session_id > 10).dropDuplicates('price')",
            "df.where('session_id' > 10).distinct('price')",
            "df.filter(F.col('session_id') > 10).dropDuplicates(['price'])"
        ],
        "correct": [
            3
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 59,
        "type": "single",
        "difficulty": 2,
        "question": "In a Star Schema, the `events` table contains foreign keys to dimension tables and quantitative metrics like `user_id`. What type of table is this?",
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
        "id": 60,
        "type": "single",
        "difficulty": 3,
        "question": "When designing a slowly changing dimension (SCD) for `sales`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
        "options": [
            "Type 3",
            "Type 1",
            "Type 4",
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
        "difficulty": 1,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM transactions WHERE status = '100'`?",
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
        "id": 62,
        "type": "single",
        "difficulty": 2,
        "question": "In a Star Schema, the `inventory` table contains foreign keys to dimension tables and quantitative metrics like `tax`. What type of table is this?",
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
        "id": 63,
        "type": "single",
        "difficulty": 2,
        "question": "Given the table `orders`, which SQL query calculates the cumulative sum of `user_id` partitioned by `amount` ordered by `timestamp`?",
        "options": [
            "SELECT SUM(user_id) PARTITION BY amount ORDER BY timestamp FROM orders",
            "SELECT SUM(user_id) OVER (PARTITION BY amount ORDER BY timestamp) FROM orders",
            "SELECT SUM(user_id) OVER (ORDER BY amount PARTITION BY timestamp) FROM orders",
            "SELECT CUMSUM(user_id) OVER (PARTITION BY amount ORDER BY timestamp) FROM orders"
        ],
        "correct": [
            1
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 64,
        "type": "single",
        "difficulty": 2,
        "question": "Given the table `customers`, which SQL query calculates the cumulative sum of `timestamp` partitioned by `amount` ordered by `discount`?",
        "options": [
            "SELECT SUM(timestamp) OVER (ORDER BY amount PARTITION BY discount) FROM customers",
            "SELECT CUMSUM(timestamp) OVER (PARTITION BY amount ORDER BY discount) FROM customers",
            "SELECT SUM(timestamp) PARTITION BY amount ORDER BY discount FROM customers",
            "SELECT SUM(timestamp) OVER (PARTITION BY amount ORDER BY discount) FROM customers"
        ],
        "correct": [
            3
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 65,
        "type": "single",
        "difficulty": 2,
        "question": "You have a Kafka topic `customers` with 500 partitions. If you spin up 2 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "Each reads all 500 partitions",
            "Consumer 1 reads 250, Consumer 2 reads 250",
            "It depends on the producer routing key",
            "Partitions are randomly assigned dynamically per message"
        ],
        "correct": [
            1
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 66,
        "type": "single",
        "difficulty": 3,
        "question": "You have a Kafka topic `transactions` with 50 partitions. If you spin up 5 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
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
        "id": 67,
        "type": "single",
        "difficulty": 2,
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
        "id": 68,
        "type": "single",
        "difficulty": 2,
        "question": "What is the output of `sum(x for x in range(5000) if x % 3 == 0)`?",
        "options": [
            "8331666",
            "4165830",
            "4165833",
            "4165836"
        ],
        "correct": [
            2
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 5000 that are divisible by 3."
    },
    {
        "id": 69,
        "type": "single",
        "difficulty": 1,
        "question": "You are storing 500 TB of raw JSON logs in an S3 bucket named `clicks`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
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
        "id": 70,
        "type": "single",
        "difficulty": 2,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM inventory WHERE status = '1000'`?",
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
        "id": 71,
        "type": "single",
        "difficulty": 2,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `session_id` is greater than 500 and drop duplicates based on `timestamp`?",
        "options": [
            "df.where('session_id' > 500).distinct('timestamp')",
            "df.filter(F.col('session_id') > 500).dropDuplicates(['timestamp'])",
            "df.filter('session_id' > 500).drop_duplicates('timestamp')",
            "df.filter(df.session_id > 500).dropDuplicates('timestamp')"
        ],
        "correct": [
            1
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 72,
        "type": "single",
        "difficulty": 1,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `timestamp` is greater than 50 and drop duplicates based on `user_id`?",
        "options": [
            "df.filter('timestamp' > 50).drop_duplicates('user_id')",
            "df.where('timestamp' > 50).distinct('user_id')",
            "df.filter(F.col('timestamp') > 50).dropDuplicates(['user_id'])",
            "df.filter(df.timestamp > 50).dropDuplicates('user_id')"
        ],
        "correct": [
            2
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 73,
        "type": "single",
        "difficulty": 2,
        "question": "Given the table `payments`, which SQL query calculates the cumulative sum of `user_id` partitioned by `discount` ordered by `revenue`?",
        "options": [
            "SELECT CUMSUM(user_id) OVER (PARTITION BY discount ORDER BY revenue) FROM payments",
            "SELECT SUM(user_id) OVER (ORDER BY discount PARTITION BY revenue) FROM payments",
            "SELECT SUM(user_id) OVER (PARTITION BY discount ORDER BY revenue) FROM payments",
            "SELECT SUM(user_id) PARTITION BY discount ORDER BY revenue FROM payments"
        ],
        "correct": [
            2
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 74,
        "type": "single",
        "difficulty": 3,
        "question": "When designing a slowly changing dimension (SCD) for `inventory`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
        "options": [
            "Type 3",
            "Type 1",
            "Type 4",
            "Type 2"
        ],
        "correct": [
            3
        ],
        "concept": "SCD Type 2 tracks historical data by creating multiple records for a given natural key with effective dates."
    },
    {
        "id": 75,
        "type": "single",
        "difficulty": 1,
        "question": "You are storing 10 TB of raw JSON logs in an S3 bucket named `sales`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
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
        "id": 76,
        "type": "single",
        "difficulty": 2,
        "question": "When designing a slowly changing dimension (SCD) for `inventory`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
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
        "difficulty": 1,
        "question": "Given the table `events`, which SQL query calculates the cumulative sum of `user_id` partitioned by `quantity` ordered by `amount`?",
        "options": [
            "SELECT SUM(user_id) PARTITION BY quantity ORDER BY amount FROM events",
            "SELECT CUMSUM(user_id) OVER (PARTITION BY quantity ORDER BY amount) FROM events",
            "SELECT SUM(user_id) OVER (PARTITION BY quantity ORDER BY amount) FROM events",
            "SELECT SUM(user_id) OVER (ORDER BY quantity PARTITION BY amount) FROM events"
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
        "id": 80,
        "type": "single",
        "difficulty": 3,
        "question": "You have a Kafka topic `logs` with 1000 partitions. If you spin up 4 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "Partitions are randomly assigned dynamically per message",
            "It depends on the producer routing key",
            "Each reads all 1000 partitions",
            "Consumer 1 reads 500, Consumer 2 reads 500"
        ],
        "correct": [
            3
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 81,
        "type": "single",
        "difficulty": 2,
        "question": "What is the output of `sum(x for x in range(100) if x % 2 == 0)`?",
        "options": [
            "2450",
            "2448",
            "4900",
            "2452"
        ],
        "correct": [
            0
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 100 that are divisible by 2."
    },
    {
        "id": 82,
        "type": "single",
        "difficulty": 1,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `session_id` is greater than 10000 and drop duplicates based on `amount`?",
        "options": [
            "df.filter(F.col('session_id') > 10000).dropDuplicates(['amount'])",
            "df.where('session_id' > 10000).distinct('amount')",
            "df.filter(df.session_id > 10000).dropDuplicates('amount')",
            "df.filter('session_id' > 10000).drop_duplicates('amount')"
        ],
        "correct": [
            0
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 83,
        "type": "single",
        "difficulty": 2,
        "question": "When designing a slowly changing dimension (SCD) for `inventory`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
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
        "id": 84,
        "type": "single",
        "difficulty": 3,
        "question": "You have a Kafka topic `clicks` with 5000 partitions. If you spin up 3 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
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
        "id": 85,
        "type": "single",
        "difficulty": 3,
        "question": "In a Star Schema, the `clicks` table contains foreign keys to dimension tables and quantitative metrics like `quantity`. What type of table is this?",
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
        "id": 86,
        "type": "single",
        "difficulty": 2,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM users WHERE tax = '5000'`?",
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
        "id": 87,
        "type": "single",
        "difficulty": 3,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `timestamp` is greater than 10000 and drop duplicates based on `amount`?",
        "options": [
            "df.filter(F.col('timestamp') > 10000).dropDuplicates(['amount'])",
            "df.filter(df.timestamp > 10000).dropDuplicates('amount')",
            "df.filter('timestamp' > 10000).drop_duplicates('amount')",
            "df.where('timestamp' > 10000).distinct('amount')"
        ],
        "correct": [
            0
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 88,
        "type": "single",
        "difficulty": 2,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `price` is greater than 50 and drop duplicates based on `quantity`?",
        "options": [
            "df.filter('price' > 50).drop_duplicates('quantity')",
            "df.filter(df.price > 50).dropDuplicates('quantity')",
            "df.where('price' > 50).distinct('quantity')",
            "df.filter(F.col('price') > 50).dropDuplicates(['quantity'])"
        ],
        "correct": [
            3
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 89,
        "type": "single",
        "difficulty": 3,
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
        "id": 90,
        "type": "single",
        "difficulty": 1,
        "question": "What is the output of `sum(x for x in range(10000) if x % 3 == 0)`?",
        "options": [
            "16668336",
            "16668330",
            "16668333",
            "33336666"
        ],
        "correct": [
            2
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 10000 that are divisible by 3."
    },
    {
        "id": 91,
        "type": "single",
        "difficulty": 1,
        "question": "Given the table `orders`, which SQL query calculates the cumulative sum of `amount` partitioned by `revenue` ordered by `tax`?",
        "options": [
            "SELECT SUM(amount) OVER (PARTITION BY revenue ORDER BY tax) FROM orders",
            "SELECT SUM(amount) OVER (ORDER BY revenue PARTITION BY tax) FROM orders",
            "SELECT SUM(amount) PARTITION BY revenue ORDER BY tax FROM orders",
            "SELECT CUMSUM(amount) OVER (PARTITION BY revenue ORDER BY tax) FROM orders"
        ],
        "correct": [
            0
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 92,
        "type": "single",
        "difficulty": 3,
        "question": "In a Star Schema, the `orders` table contains foreign keys to dimension tables and quantitative metrics like `user_id`. What type of table is this?",
        "options": [
            "Fact Table",
            "Dimension Table",
            "Aggregate Table",
            "Bridge Table"
        ],
        "correct": [
            0
        ],
        "concept": "Fact tables contain quantitative data (measurements) and foreign keys referencing dimension tables."
    },
    {
        "id": 93,
        "type": "single",
        "difficulty": 1,
        "question": "In a Star Schema, the `payments` table contains foreign keys to dimension tables and quantitative metrics like `timestamp`. What type of table is this?",
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
        "id": 94,
        "type": "single",
        "difficulty": 1,
        "question": "Given the table `events`, which SQL query calculates the cumulative sum of `status` partitioned by `session_id` ordered by `price`?",
        "options": [
            "SELECT SUM(status) PARTITION BY session_id ORDER BY price FROM events",
            "SELECT SUM(status) OVER (PARTITION BY session_id ORDER BY price) FROM events",
            "SELECT CUMSUM(status) OVER (PARTITION BY session_id ORDER BY price) FROM events",
            "SELECT SUM(status) OVER (ORDER BY session_id PARTITION BY price) FROM events"
        ],
        "correct": [
            1
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 95,
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
        "id": 96,
        "type": "single",
        "difficulty": 1,
        "question": "You have a Kafka topic `transactions` with 5000 partitions. If you spin up 3 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
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
        "id": 97,
        "type": "single",
        "difficulty": 2,
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
        "id": 98,
        "type": "single",
        "difficulty": 3,
        "question": "Given the table `clicks`, which SQL query calculates the cumulative sum of `discount` partitioned by `price` ordered by `status`?",
        "options": [
            "SELECT CUMSUM(discount) OVER (PARTITION BY price ORDER BY status) FROM clicks",
            "SELECT SUM(discount) PARTITION BY price ORDER BY status FROM clicks",
            "SELECT SUM(discount) OVER (PARTITION BY price ORDER BY status) FROM clicks",
            "SELECT SUM(discount) OVER (ORDER BY price PARTITION BY status) FROM clicks"
        ],
        "correct": [
            2
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 99,
        "type": "single",
        "difficulty": 3,
        "question": "Given the table `logs`, which SQL query calculates the cumulative sum of `timestamp` partitioned by `amount` ordered by `user_id`?",
        "options": [
            "SELECT CUMSUM(timestamp) OVER (PARTITION BY amount ORDER BY user_id) FROM logs",
            "SELECT SUM(timestamp) PARTITION BY amount ORDER BY user_id FROM logs",
            "SELECT SUM(timestamp) OVER (ORDER BY amount PARTITION BY user_id) FROM logs",
            "SELECT SUM(timestamp) OVER (PARTITION BY amount ORDER BY user_id) FROM logs"
        ],
        "correct": [
            3
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 100,
        "type": "single",
        "difficulty": 3,
        "question": "You have a Kafka topic `transactions` with 5000 partitions. If you spin up 4 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "Consumer 1 reads 2500, Consumer 2 reads 2500",
            "Partitions are randomly assigned dynamically per message",
            "It depends on the producer routing key",
            "Each reads all 5000 partitions"
        ],
        "correct": [
            0
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    }
]
};

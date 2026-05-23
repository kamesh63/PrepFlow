window.QUIZ_DATA = window.QUIZ_DATA || {};
window.QUIZ_DATA["day50"] = {
  title: "Data Engineering Masterclass - Day 50",
  topics: ["SQL", "PySpark", "Airflow", "Kafka", "Data Modeling", "AWS", "Snowflake"],
  questions: [
    {
        "id": 1,
        "type": "single",
        "difficulty": 2,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `amount`?",
        "options": [
            "JSON",
            "Parquet",
            "CSV",
            "Avro"
        ],
        "correct": [
            1
        ],
        "concept": "Apache Parquet is a columnar storage format highly optimized for analytical (OLAP) queries."
    },
    {
        "id": 2,
        "type": "single",
        "difficulty": 1,
        "question": "In a Star Schema, the `users` table contains foreign keys to dimension tables and quantitative metrics like `quantity`. What type of table is this?",
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
        "id": 3,
        "type": "single",
        "difficulty": 2,
        "question": "What is the output of `sum(x for x in range(100) if x % 5 == 0)`?",
        "options": [
            "955",
            "945",
            "1900",
            "950"
        ],
        "correct": [
            3
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 100 that are divisible by 5."
    },
    {
        "id": 4,
        "type": "single",
        "difficulty": 3,
        "question": "What is the output of `sum(x for x in range(5000) if x % 3 == 0)`?",
        "options": [
            "4165836",
            "4165833",
            "4165830",
            "8331666"
        ],
        "correct": [
            1
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 5000 that are divisible by 3."
    },
    {
        "id": 5,
        "type": "single",
        "difficulty": 2,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `session_id`?",
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
        "id": 6,
        "type": "single",
        "difficulty": 2,
        "question": "You are storing 500 TB of raw JSON logs in an S3 bucket named `inventory`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
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
        "difficulty": 2,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM logs WHERE timestamp = '10'`?",
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
        "id": 8,
        "type": "single",
        "difficulty": 3,
        "question": "When designing a slowly changing dimension (SCD) for `clicks`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
        "options": [
            "Type 1",
            "Type 3",
            "Type 4",
            "Type 2"
        ],
        "correct": [
            3
        ],
        "concept": "SCD Type 2 tracks historical data by creating multiple records for a given natural key with effective dates."
    },
    {
        "id": 9,
        "type": "single",
        "difficulty": 1,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `quantity`?",
        "options": [
            "JSON",
            "Parquet",
            "CSV",
            "Avro"
        ],
        "correct": [
            1
        ],
        "concept": "Apache Parquet is a columnar storage format highly optimized for analytical (OLAP) queries."
    },
    {
        "id": 10,
        "type": "single",
        "difficulty": 2,
        "question": "You have a Kafka topic `orders` with 10 partitions. If you spin up 4 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "Consumer 1 reads 5, Consumer 2 reads 5",
            "Partitions are randomly assigned dynamically per message",
            "It depends on the producer routing key",
            "Each reads all 10 partitions"
        ],
        "correct": [
            0
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 11,
        "type": "single",
        "difficulty": 1,
        "question": "When designing a slowly changing dimension (SCD) for `transactions`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
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
        "id": 12,
        "type": "single",
        "difficulty": 3,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM logs WHERE user_id = '5000'`?",
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
        "id": 13,
        "type": "single",
        "difficulty": 3,
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
        "id": 14,
        "type": "single",
        "difficulty": 1,
        "question": "Given the table `clicks`, which SQL query calculates the cumulative sum of `price` partitioned by `discount` ordered by `status`?",
        "options": [
            "SELECT SUM(price) OVER (PARTITION BY discount ORDER BY status) FROM clicks",
            "SELECT CUMSUM(price) OVER (PARTITION BY discount ORDER BY status) FROM clicks",
            "SELECT SUM(price) PARTITION BY discount ORDER BY status FROM clicks",
            "SELECT SUM(price) OVER (ORDER BY discount PARTITION BY status) FROM clicks"
        ],
        "correct": [
            0
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 15,
        "type": "single",
        "difficulty": 3,
        "question": "Given the table `logs`, which SQL query calculates the cumulative sum of `user_id` partitioned by `session_id` ordered by `status`?",
        "options": [
            "SELECT SUM(user_id) OVER (PARTITION BY session_id ORDER BY status) FROM logs",
            "SELECT CUMSUM(user_id) OVER (PARTITION BY session_id ORDER BY status) FROM logs",
            "SELECT SUM(user_id) PARTITION BY session_id ORDER BY status FROM logs",
            "SELECT SUM(user_id) OVER (ORDER BY session_id PARTITION BY status) FROM logs"
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
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `price`?",
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
        "id": 17,
        "type": "single",
        "difficulty": 2,
        "question": "You are storing 5000 TB of raw JSON logs in an S3 bucket named `sales`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
        "options": [
            "Amazon Athena",
            "AWS Glue",
            "Amazon RDS",
            "Amazon Redshift"
        ],
        "correct": [
            0
        ],
        "concept": "Amazon Athena allows you to run interactive SQL queries directly against data in Amazon S3."
    },
    {
        "id": 18,
        "type": "single",
        "difficulty": 2,
        "question": "You have a Kafka topic `events` with 5000 partitions. If you spin up 3 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "Consumer 1 reads 2500, Consumer 2 reads 2500",
            "It depends on the producer routing key",
            "Each reads all 5000 partitions",
            "Partitions are randomly assigned dynamically per message"
        ],
        "correct": [
            0
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 19,
        "type": "single",
        "difficulty": 2,
        "question": "In a Star Schema, the `payments` table contains foreign keys to dimension tables and quantitative metrics like `revenue`. What type of table is this?",
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
        "id": 20,
        "type": "single",
        "difficulty": 1,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `session_id`?",
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
        "id": 21,
        "type": "single",
        "difficulty": 2,
        "question": "In a Star Schema, the `sales` table contains foreign keys to dimension tables and quantitative metrics like `amount`. What type of table is this?",
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
        "id": 22,
        "type": "single",
        "difficulty": 3,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `status` is greater than 500 and drop duplicates based on `discount`?",
        "options": [
            "df.where('status' > 500).distinct('discount')",
            "df.filter(df.status > 500).dropDuplicates('discount')",
            "df.filter('status' > 500).drop_duplicates('discount')",
            "df.filter(F.col('status') > 500).dropDuplicates(['discount'])"
        ],
        "correct": [
            3
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 23,
        "type": "single",
        "difficulty": 1,
        "question": "You are storing 500 TB of raw JSON logs in an S3 bucket named `events`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
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
        "id": 24,
        "type": "single",
        "difficulty": 1,
        "question": "In a Star Schema, the `orders` table contains foreign keys to dimension tables and quantitative metrics like `user_id`. What type of table is this?",
        "options": [
            "Fact Table",
            "Aggregate Table",
            "Bridge Table",
            "Dimension Table"
        ],
        "correct": [
            0
        ],
        "concept": "Fact tables contain quantitative data (measurements) and foreign keys referencing dimension tables."
    },
    {
        "id": 25,
        "type": "single",
        "difficulty": 2,
        "question": "What is the output of `sum(x for x in range(10) if x % 4 == 0)`?",
        "options": [
            "8",
            "12",
            "16",
            "24"
        ],
        "correct": [
            1
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 10 that are divisible by 4."
    },
    {
        "id": 26,
        "type": "single",
        "difficulty": 1,
        "question": "Given the table `payments`, which SQL query calculates the cumulative sum of `tax` partitioned by `session_id` ordered by `price`?",
        "options": [
            "SELECT SUM(tax) PARTITION BY session_id ORDER BY price FROM payments",
            "SELECT SUM(tax) OVER (ORDER BY session_id PARTITION BY price) FROM payments",
            "SELECT CUMSUM(tax) OVER (PARTITION BY session_id ORDER BY price) FROM payments",
            "SELECT SUM(tax) OVER (PARTITION BY session_id ORDER BY price) FROM payments"
        ],
        "correct": [
            3
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 27,
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
        "id": 28,
        "type": "single",
        "difficulty": 2,
        "question": "What is the output of `sum(x for x in range(10000) if x % 2 == 0)`?",
        "options": [
            "24994998",
            "24995000",
            "49990000",
            "24995002"
        ],
        "correct": [
            1
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 10000 that are divisible by 2."
    },
    {
        "id": 29,
        "type": "single",
        "difficulty": 3,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `tax` is greater than 50 and drop duplicates based on `discount`?",
        "options": [
            "df.filter(F.col('tax') > 50).dropDuplicates(['discount'])",
            "df.filter(df.tax > 50).dropDuplicates('discount')",
            "df.filter('tax' > 50).drop_duplicates('discount')",
            "df.where('tax' > 50).distinct('discount')"
        ],
        "correct": [
            0
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 30,
        "type": "single",
        "difficulty": 1,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `price` is greater than 100 and drop duplicates based on `price`?",
        "options": [
            "df.filter(df.price > 100).dropDuplicates('price')",
            "df.filter('price' > 100).drop_duplicates('price')",
            "df.filter(F.col('price') > 100).dropDuplicates(['price'])",
            "df.where('price' > 100).distinct('price')"
        ],
        "correct": [
            2
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 31,
        "type": "single",
        "difficulty": 3,
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
        "id": 32,
        "type": "single",
        "difficulty": 1,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `discount` is greater than 10 and drop duplicates based on `price`?",
        "options": [
            "df.where('discount' > 10).distinct('price')",
            "df.filter(F.col('discount') > 10).dropDuplicates(['price'])",
            "df.filter(df.discount > 10).dropDuplicates('price')",
            "df.filter('discount' > 10).drop_duplicates('price')"
        ],
        "correct": [
            1
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 33,
        "type": "single",
        "difficulty": 2,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `amount` is greater than 100 and drop duplicates based on `revenue`?",
        "options": [
            "df.filter(df.amount > 100).dropDuplicates('revenue')",
            "df.filter(F.col('amount') > 100).dropDuplicates(['revenue'])",
            "df.filter('amount' > 100).drop_duplicates('revenue')",
            "df.where('amount' > 100).distinct('revenue')"
        ],
        "correct": [
            1
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 34,
        "type": "single",
        "difficulty": 3,
        "question": "In Airflow, if task A and task B are upstream of task C, and you want task C to run ONLY if both A and B succeed, which trigger rule should you use for task C?",
        "options": [
            "all_done",
            "all_success",
            "none_failed",
            "one_success"
        ],
        "correct": [
            1
        ],
        "concept": "all_success is the default trigger rule in Airflow, requiring all upstream tasks to succeed."
    },
    {
        "id": 35,
        "type": "single",
        "difficulty": 2,
        "question": "When designing a slowly changing dimension (SCD) for `sales`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
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
        "id": 36,
        "type": "single",
        "difficulty": 2,
        "question": "What is the output of `sum(x for x in range(50) if x % 2 == 0)`?",
        "options": [
            "598",
            "1200",
            "602",
            "600"
        ],
        "correct": [
            3
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 50 that are divisible by 2."
    },
    {
        "id": 37,
        "type": "single",
        "difficulty": 3,
        "question": "When designing a slowly changing dimension (SCD) for `payments`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
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
        "id": 38,
        "type": "single",
        "difficulty": 3,
        "question": "You have a Kafka topic `events` with 10 partitions. If you spin up 5 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
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
        "id": 39,
        "type": "single",
        "difficulty": 1,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `price` is greater than 100 and drop duplicates based on `user_id`?",
        "options": [
            "df.filter(F.col('price') > 100).dropDuplicates(['user_id'])",
            "df.filter(df.price > 100).dropDuplicates('user_id')",
            "df.filter('price' > 100).drop_duplicates('user_id')",
            "df.where('price' > 100).distinct('user_id')"
        ],
        "correct": [
            0
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 40,
        "type": "single",
        "difficulty": 2,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `status` is greater than 50 and drop duplicates based on `revenue`?",
        "options": [
            "df.filter(df.status > 50).dropDuplicates('revenue')",
            "df.where('status' > 50).distinct('revenue')",
            "df.filter('status' > 50).drop_duplicates('revenue')",
            "df.filter(F.col('status') > 50).dropDuplicates(['revenue'])"
        ],
        "correct": [
            3
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 41,
        "type": "single",
        "difficulty": 1,
        "question": "You have a Kafka topic `users` with 1000 partitions. If you spin up 5 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
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
        "id": 42,
        "type": "single",
        "difficulty": 2,
        "question": "Given the table `users`, which SQL query calculates the cumulative sum of `amount` partitioned by `tax` ordered by `amount`?",
        "options": [
            "SELECT SUM(amount) OVER (PARTITION BY tax ORDER BY amount) FROM users",
            "SELECT SUM(amount) OVER (ORDER BY tax PARTITION BY amount) FROM users",
            "SELECT SUM(amount) PARTITION BY tax ORDER BY amount FROM users",
            "SELECT CUMSUM(amount) OVER (PARTITION BY tax ORDER BY amount) FROM users"
        ],
        "correct": [
            0
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 43,
        "type": "single",
        "difficulty": 2,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `discount`?",
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
        "id": 44,
        "type": "single",
        "difficulty": 2,
        "question": "You have a Kafka topic `inventory` with 500 partitions. If you spin up 5 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
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
        "id": 45,
        "type": "single",
        "difficulty": 1,
        "question": "What is the output of `sum(x for x in range(10) if x % 4 == 0)`?",
        "options": [
            "8",
            "12",
            "24",
            "16"
        ],
        "correct": [
            1
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 10 that are divisible by 4."
    },
    {
        "id": 46,
        "type": "single",
        "difficulty": 1,
        "question": "What is the output of `sum(x for x in range(1000) if x % 2 == 0)`?",
        "options": [
            "249500",
            "499000",
            "249502",
            "249498"
        ],
        "correct": [
            0
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 1000 that are divisible by 2."
    },
    {
        "id": 47,
        "type": "single",
        "difficulty": 2,
        "question": "Given the table `sales`, which SQL query calculates the cumulative sum of `price` partitioned by `tax` ordered by `user_id`?",
        "options": [
            "SELECT CUMSUM(price) OVER (PARTITION BY tax ORDER BY user_id) FROM sales",
            "SELECT SUM(price) OVER (ORDER BY tax PARTITION BY user_id) FROM sales",
            "SELECT SUM(price) OVER (PARTITION BY tax ORDER BY user_id) FROM sales",
            "SELECT SUM(price) PARTITION BY tax ORDER BY user_id FROM sales"
        ],
        "correct": [
            2
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 48,
        "type": "single",
        "difficulty": 2,
        "question": "Given the table `customers`, which SQL query calculates the cumulative sum of `discount` partitioned by `session_id` ordered by `timestamp`?",
        "options": [
            "SELECT SUM(discount) OVER (PARTITION BY session_id ORDER BY timestamp) FROM customers",
            "SELECT CUMSUM(discount) OVER (PARTITION BY session_id ORDER BY timestamp) FROM customers",
            "SELECT SUM(discount) PARTITION BY session_id ORDER BY timestamp FROM customers",
            "SELECT SUM(discount) OVER (ORDER BY session_id PARTITION BY timestamp) FROM customers"
        ],
        "correct": [
            0
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 49,
        "type": "single",
        "difficulty": 3,
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
        "id": 50,
        "type": "single",
        "difficulty": 3,
        "question": "Given the table `payments`, which SQL query calculates the cumulative sum of `user_id` partitioned by `quantity` ordered by `revenue`?",
        "options": [
            "SELECT SUM(user_id) PARTITION BY quantity ORDER BY revenue FROM payments",
            "SELECT SUM(user_id) OVER (PARTITION BY quantity ORDER BY revenue) FROM payments",
            "SELECT SUM(user_id) OVER (ORDER BY quantity PARTITION BY revenue) FROM payments",
            "SELECT CUMSUM(user_id) OVER (PARTITION BY quantity ORDER BY revenue) FROM payments"
        ],
        "correct": [
            1
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 51,
        "type": "single",
        "difficulty": 3,
        "question": "When designing a slowly changing dimension (SCD) for `transactions`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
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
        "id": 52,
        "type": "single",
        "difficulty": 3,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM sales WHERE user_id = '5000'`?",
        "options": [
            "Virtual Warehouse (Compute)",
            "Database Storage Layer",
            "Metadata Layer",
            "Cloud Services Layer"
        ],
        "correct": [
            0
        ],
        "concept": "Query execution and data processing are handled by the Virtual Warehouses (Compute Layer)."
    },
    {
        "id": 53,
        "type": "single",
        "difficulty": 2,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `timestamp` is greater than 5000 and drop duplicates based on `discount`?",
        "options": [
            "df.filter('timestamp' > 5000).drop_duplicates('discount')",
            "df.where('timestamp' > 5000).distinct('discount')",
            "df.filter(F.col('timestamp') > 5000).dropDuplicates(['discount'])",
            "df.filter(df.timestamp > 5000).dropDuplicates('discount')"
        ],
        "correct": [
            2
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 54,
        "type": "single",
        "difficulty": 3,
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
        "id": 55,
        "type": "single",
        "difficulty": 1,
        "question": "In a Star Schema, the `customers` table contains foreign keys to dimension tables and quantitative metrics like `price`. What type of table is this?",
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
        "id": 56,
        "type": "single",
        "difficulty": 2,
        "question": "You have a Kafka topic `sales` with 500 partitions. If you spin up 4 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "Partitions are randomly assigned dynamically per message",
            "Consumer 1 reads 250, Consumer 2 reads 250",
            "Each reads all 500 partitions",
            "It depends on the producer routing key"
        ],
        "correct": [
            1
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 57,
        "type": "single",
        "difficulty": 1,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `discount` is greater than 500 and drop duplicates based on `session_id`?",
        "options": [
            "df.filter(F.col('discount') > 500).dropDuplicates(['session_id'])",
            "df.where('discount' > 500).distinct('session_id')",
            "df.filter(df.discount > 500).dropDuplicates('session_id')",
            "df.filter('discount' > 500).drop_duplicates('session_id')"
        ],
        "correct": [
            0
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 58,
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
        "id": 59,
        "type": "single",
        "difficulty": 3,
        "question": "You have a Kafka topic `payments` with 500 partitions. If you spin up 5 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "It depends on the producer routing key",
            "Partitions are randomly assigned dynamically per message",
            "Consumer 1 reads 250, Consumer 2 reads 250",
            "Each reads all 500 partitions"
        ],
        "correct": [
            2
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 60,
        "type": "single",
        "difficulty": 2,
        "question": "You have a Kafka topic `orders` with 500 partitions. If you spin up 3 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
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
        "id": 61,
        "type": "single",
        "difficulty": 2,
        "question": "When designing a slowly changing dimension (SCD) for `logs`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
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
        "question": "What is the output of `sum(x for x in range(500) if x % 3 == 0)`?",
        "options": [
            "41580",
            "83166",
            "41586",
            "41583"
        ],
        "correct": [
            3
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 500 that are divisible by 3."
    },
    {
        "id": 63,
        "type": "single",
        "difficulty": 3,
        "question": "Given the table `users`, which SQL query calculates the cumulative sum of `timestamp` partitioned by `quantity` ordered by `status`?",
        "options": [
            "SELECT SUM(timestamp) PARTITION BY quantity ORDER BY status FROM users",
            "SELECT CUMSUM(timestamp) OVER (PARTITION BY quantity ORDER BY status) FROM users",
            "SELECT SUM(timestamp) OVER (PARTITION BY quantity ORDER BY status) FROM users",
            "SELECT SUM(timestamp) OVER (ORDER BY quantity PARTITION BY status) FROM users"
        ],
        "correct": [
            2
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 64,
        "type": "single",
        "difficulty": 1,
        "question": "What is the output of `sum(x for x in range(10) if x % 4 == 0)`?",
        "options": [
            "12",
            "24",
            "8",
            "16"
        ],
        "correct": [
            0
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 10 that are divisible by 4."
    },
    {
        "id": 65,
        "type": "single",
        "difficulty": 3,
        "question": "You are storing 1000 TB of raw JSON logs in an S3 bucket named `logs`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
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
        "difficulty": 3,
        "question": "You have a Kafka topic `sales` with 10000 partitions. If you spin up 3 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
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
        "id": 67,
        "type": "single",
        "difficulty": 1,
        "question": "What is the output of `sum(x for x in range(10) if x % 5 == 0)`?",
        "options": [
            "10",
            "10",
            "5",
            "0"
        ],
        "correct": [
            2
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 10 that are divisible by 5."
    },
    {
        "id": 68,
        "type": "single",
        "difficulty": 3,
        "question": "Given the table `clicks`, which SQL query calculates the cumulative sum of `revenue` partitioned by `tax` ordered by `timestamp`?",
        "options": [
            "SELECT SUM(revenue) OVER (ORDER BY tax PARTITION BY timestamp) FROM clicks",
            "SELECT SUM(revenue) OVER (PARTITION BY tax ORDER BY timestamp) FROM clicks",
            "SELECT CUMSUM(revenue) OVER (PARTITION BY tax ORDER BY timestamp) FROM clicks",
            "SELECT SUM(revenue) PARTITION BY tax ORDER BY timestamp FROM clicks"
        ],
        "correct": [
            1
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 69,
        "type": "single",
        "difficulty": 3,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `tax`?",
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
        "id": 70,
        "type": "single",
        "difficulty": 2,
        "question": "Given the table `logs`, which SQL query calculates the cumulative sum of `revenue` partitioned by `revenue` ordered by `amount`?",
        "options": [
            "SELECT SUM(revenue) PARTITION BY revenue ORDER BY amount FROM logs",
            "SELECT CUMSUM(revenue) OVER (PARTITION BY revenue ORDER BY amount) FROM logs",
            "SELECT SUM(revenue) OVER (PARTITION BY revenue ORDER BY amount) FROM logs",
            "SELECT SUM(revenue) OVER (ORDER BY revenue PARTITION BY amount) FROM logs"
        ],
        "correct": [
            2
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 71,
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
        "id": 72,
        "type": "single",
        "difficulty": 1,
        "question": "In a Star Schema, the `logs` table contains foreign keys to dimension tables and quantitative metrics like `amount`. What type of table is this?",
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
        "id": 73,
        "type": "single",
        "difficulty": 2,
        "question": "What is the output of `sum(x for x in range(500) if x % 2 == 0)`?",
        "options": [
            "62250",
            "124500",
            "62248",
            "62252"
        ],
        "correct": [
            0
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 500 that are divisible by 2."
    },
    {
        "id": 74,
        "type": "single",
        "difficulty": 2,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `quantity`?",
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
        "id": 75,
        "type": "single",
        "difficulty": 3,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `revenue` is greater than 10 and drop duplicates based on `tax`?",
        "options": [
            "df.filter(F.col('revenue') > 10).dropDuplicates(['tax'])",
            "df.filter('revenue' > 10).drop_duplicates('tax')",
            "df.where('revenue' > 10).distinct('tax')",
            "df.filter(df.revenue > 10).dropDuplicates('tax')"
        ],
        "correct": [
            0
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 76,
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
        "id": 77,
        "type": "single",
        "difficulty": 3,
        "question": "What is the output of `sum(x for x in range(100) if x % 5 == 0)`?",
        "options": [
            "950",
            "945",
            "955",
            "1900"
        ],
        "correct": [
            0
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 100 that are divisible by 5."
    },
    {
        "id": 78,
        "type": "single",
        "difficulty": 1,
        "question": "Given the table `transactions`, which SQL query calculates the cumulative sum of `price` partitioned by `discount` ordered by `timestamp`?",
        "options": [
            "SELECT SUM(price) OVER (ORDER BY discount PARTITION BY timestamp) FROM transactions",
            "SELECT CUMSUM(price) OVER (PARTITION BY discount ORDER BY timestamp) FROM transactions",
            "SELECT SUM(price) PARTITION BY discount ORDER BY timestamp FROM transactions",
            "SELECT SUM(price) OVER (PARTITION BY discount ORDER BY timestamp) FROM transactions"
        ],
        "correct": [
            3
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 79,
        "type": "single",
        "difficulty": 2,
        "question": "When designing a slowly changing dimension (SCD) for `logs`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
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
        "id": 80,
        "type": "single",
        "difficulty": 3,
        "question": "What is the output of `sum(x for x in range(50) if x % 5 == 0)`?",
        "options": [
            "230",
            "225",
            "220",
            "450"
        ],
        "correct": [
            1
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 50 that are divisible by 5."
    },
    {
        "id": 81,
        "type": "single",
        "difficulty": 2,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `status` is greater than 10 and drop duplicates based on `discount`?",
        "options": [
            "df.where('status' > 10).distinct('discount')",
            "df.filter('status' > 10).drop_duplicates('discount')",
            "df.filter(df.status > 10).dropDuplicates('discount')",
            "df.filter(F.col('status') > 10).dropDuplicates(['discount'])"
        ],
        "correct": [
            3
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 82,
        "type": "single",
        "difficulty": 3,
        "question": "You have a Kafka topic `sales` with 100 partitions. If you spin up 4 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "Consumer 1 reads 50, Consumer 2 reads 50",
            "Each reads all 100 partitions",
            "It depends on the producer routing key",
            "Partitions are randomly assigned dynamically per message"
        ],
        "correct": [
            0
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 83,
        "type": "single",
        "difficulty": 1,
        "question": "In a Star Schema, the `payments` table contains foreign keys to dimension tables and quantitative metrics like `quantity`. What type of table is this?",
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
        "id": 84,
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
        "id": 85,
        "type": "single",
        "difficulty": 3,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM logs WHERE discount = '5000'`?",
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
        "id": 86,
        "type": "single",
        "difficulty": 1,
        "question": "You are storing 1000 TB of raw JSON logs in an S3 bucket named `orders`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
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
        "id": 87,
        "type": "single",
        "difficulty": 1,
        "question": "You have a Kafka topic `users` with 100 partitions. If you spin up 2 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "Consumer 1 reads 50, Consumer 2 reads 50",
            "It depends on the producer routing key",
            "Each reads all 100 partitions",
            "Partitions are randomly assigned dynamically per message"
        ],
        "correct": [
            0
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 88,
        "type": "single",
        "difficulty": 3,
        "question": "In a Star Schema, the `payments` table contains foreign keys to dimension tables and quantitative metrics like `timestamp`. What type of table is this?",
        "options": [
            "Aggregate Table",
            "Fact Table",
            "Bridge Table",
            "Dimension Table"
        ],
        "correct": [
            1
        ],
        "concept": "Fact tables contain quantitative data (measurements) and foreign keys referencing dimension tables."
    },
    {
        "id": 89,
        "type": "single",
        "difficulty": 1,
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
        "id": 90,
        "type": "single",
        "difficulty": 3,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM users WHERE user_id = '10000'`?",
        "options": [
            "Virtual Warehouse (Compute)",
            "Database Storage Layer",
            "Metadata Layer",
            "Cloud Services Layer"
        ],
        "correct": [
            0
        ],
        "concept": "Query execution and data processing are handled by the Virtual Warehouses (Compute Layer)."
    },
    {
        "id": 91,
        "type": "single",
        "difficulty": 3,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `quantity` is greater than 500 and drop duplicates based on `status`?",
        "options": [
            "df.filter('quantity' > 500).drop_duplicates('status')",
            "df.where('quantity' > 500).distinct('status')",
            "df.filter(F.col('quantity') > 500).dropDuplicates(['status'])",
            "df.filter(df.quantity > 500).dropDuplicates('status')"
        ],
        "correct": [
            2
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 92,
        "type": "single",
        "difficulty": 1,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM inventory WHERE status = '1000'`?",
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
        "id": 93,
        "type": "single",
        "difficulty": 1,
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
        "id": 94,
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
        "id": 95,
        "type": "single",
        "difficulty": 2,
        "question": "Given the table `clicks`, which SQL query calculates the cumulative sum of `session_id` partitioned by `tax` ordered by `status`?",
        "options": [
            "SELECT SUM(session_id) OVER (ORDER BY tax PARTITION BY status) FROM clicks",
            "SELECT CUMSUM(session_id) OVER (PARTITION BY tax ORDER BY status) FROM clicks",
            "SELECT SUM(session_id) PARTITION BY tax ORDER BY status FROM clicks",
            "SELECT SUM(session_id) OVER (PARTITION BY tax ORDER BY status) FROM clicks"
        ],
        "correct": [
            3
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 96,
        "type": "single",
        "difficulty": 1,
        "question": "What is the output of `sum(x for x in range(100) if x % 5 == 0)`?",
        "options": [
            "955",
            "1900",
            "950",
            "945"
        ],
        "correct": [
            2
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 100 that are divisible by 5."
    },
    {
        "id": 97,
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
        "id": 98,
        "type": "single",
        "difficulty": 1,
        "question": "You are storing 50 TB of raw JSON logs in an S3 bucket named `sales`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
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
        "id": 99,
        "type": "single",
        "difficulty": 1,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `timestamp`?",
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
        "id": 100,
        "type": "single",
        "difficulty": 1,
        "question": "Given the table `inventory`, which SQL query calculates the cumulative sum of `discount` partitioned by `amount` ordered by `price`?",
        "options": [
            "SELECT CUMSUM(discount) OVER (PARTITION BY amount ORDER BY price) FROM inventory",
            "SELECT SUM(discount) OVER (PARTITION BY amount ORDER BY price) FROM inventory",
            "SELECT SUM(discount) OVER (ORDER BY amount PARTITION BY price) FROM inventory",
            "SELECT SUM(discount) PARTITION BY amount ORDER BY price FROM inventory"
        ],
        "correct": [
            1
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    }
]
};

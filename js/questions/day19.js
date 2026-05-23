window.QUIZ_DATA = window.QUIZ_DATA || {};
window.QUIZ_DATA["day19"] = {
  title: "Data Engineering Masterclass - Day 19",
  topics: ["SQL", "PySpark", "Airflow", "Kafka", "Data Modeling", "AWS", "Snowflake"],
  questions: [
    {
        "id": 1,
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
        "id": 2,
        "type": "single",
        "difficulty": 1,
        "question": "You are storing 1000 TB of raw JSON logs in an S3 bucket named `inventory`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
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
        "id": 3,
        "type": "single",
        "difficulty": 3,
        "question": "Given the table `users`, which SQL query calculates the cumulative sum of `quantity` partitioned by `revenue` ordered by `user_id`?",
        "options": [
            "SELECT SUM(quantity) PARTITION BY revenue ORDER BY user_id FROM users",
            "SELECT SUM(quantity) OVER (ORDER BY revenue PARTITION BY user_id) FROM users",
            "SELECT SUM(quantity) OVER (PARTITION BY revenue ORDER BY user_id) FROM users",
            "SELECT CUMSUM(quantity) OVER (PARTITION BY revenue ORDER BY user_id) FROM users"
        ],
        "correct": [
            2
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 4,
        "type": "single",
        "difficulty": 1,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `user_id` is greater than 500 and drop duplicates based on `price`?",
        "options": [
            "df.filter(df.user_id > 500).dropDuplicates('price')",
            "df.filter(F.col('user_id') > 500).dropDuplicates(['price'])",
            "df.where('user_id' > 500).distinct('price')",
            "df.filter('user_id' > 500).drop_duplicates('price')"
        ],
        "correct": [
            1
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 5,
        "type": "single",
        "difficulty": 1,
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
        "id": 6,
        "type": "single",
        "difficulty": 3,
        "question": "In a Star Schema, the `transactions` table contains foreign keys to dimension tables and quantitative metrics like `session_id`. What type of table is this?",
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
        "id": 7,
        "type": "single",
        "difficulty": 2,
        "question": "In a Star Schema, the `clicks` table contains foreign keys to dimension tables and quantitative metrics like `revenue`. What type of table is this?",
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
        "id": 8,
        "type": "single",
        "difficulty": 2,
        "question": "You have a Kafka topic `customers` with 10 partitions. If you spin up 5 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
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
        "id": 9,
        "type": "single",
        "difficulty": 2,
        "question": "You are storing 1000 TB of raw JSON logs in an S3 bucket named `inventory`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
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
        "id": 10,
        "type": "single",
        "difficulty": 1,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM inventory WHERE amount = '100'`?",
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
        "id": 11,
        "type": "single",
        "difficulty": 2,
        "question": "What is the output of `sum(x for x in range(10) if x % 2 == 0)`?",
        "options": [
            "20",
            "18",
            "40",
            "22"
        ],
        "correct": [
            0
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 10 that are divisible by 2."
    },
    {
        "id": 12,
        "type": "single",
        "difficulty": 2,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM logs WHERE revenue = '10'`?",
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
        "id": 13,
        "type": "single",
        "difficulty": 1,
        "question": "Given the table `inventory`, which SQL query calculates the cumulative sum of `session_id` partitioned by `amount` ordered by `status`?",
        "options": [
            "SELECT SUM(session_id) PARTITION BY amount ORDER BY status FROM inventory",
            "SELECT SUM(session_id) OVER (ORDER BY amount PARTITION BY status) FROM inventory",
            "SELECT CUMSUM(session_id) OVER (PARTITION BY amount ORDER BY status) FROM inventory",
            "SELECT SUM(session_id) OVER (PARTITION BY amount ORDER BY status) FROM inventory"
        ],
        "correct": [
            3
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 14,
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
        "id": 15,
        "type": "single",
        "difficulty": 2,
        "question": "When designing a slowly changing dimension (SCD) for `inventory`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
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
        "id": 16,
        "type": "single",
        "difficulty": 2,
        "question": "When designing a slowly changing dimension (SCD) for `users`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
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
        "id": 17,
        "type": "single",
        "difficulty": 3,
        "question": "You have a Kafka topic `logs` with 5000 partitions. If you spin up 3 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "It depends on the producer routing key",
            "Each reads all 5000 partitions",
            "Consumer 1 reads 2500, Consumer 2 reads 2500",
            "Partitions are randomly assigned dynamically per message"
        ],
        "correct": [
            2
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 18,
        "type": "single",
        "difficulty": 2,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `user_id`?",
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
        "id": 19,
        "type": "single",
        "difficulty": 2,
        "question": "You are storing 1000 TB of raw JSON logs in an S3 bucket named `logs`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
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
        "id": 20,
        "type": "single",
        "difficulty": 3,
        "question": "You are storing 100 TB of raw JSON logs in an S3 bucket named `inventory`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
        "options": [
            "Amazon RDS",
            "AWS Glue",
            "Amazon Redshift",
            "Amazon Athena"
        ],
        "correct": [
            3
        ],
        "concept": "Amazon Athena allows you to run interactive SQL queries directly against data in Amazon S3."
    },
    {
        "id": 21,
        "type": "single",
        "difficulty": 2,
        "question": "Given the table `inventory`, which SQL query calculates the cumulative sum of `discount` partitioned by `session_id` ordered by `quantity`?",
        "options": [
            "SELECT SUM(discount) OVER (ORDER BY session_id PARTITION BY quantity) FROM inventory",
            "SELECT SUM(discount) OVER (PARTITION BY session_id ORDER BY quantity) FROM inventory",
            "SELECT CUMSUM(discount) OVER (PARTITION BY session_id ORDER BY quantity) FROM inventory",
            "SELECT SUM(discount) PARTITION BY session_id ORDER BY quantity FROM inventory"
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
        "question": "What is the output of `sum(x for x in range(50) if x % 5 == 0)`?",
        "options": [
            "450",
            "220",
            "225",
            "230"
        ],
        "correct": [
            2
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 50 that are divisible by 5."
    },
    {
        "id": 23,
        "type": "single",
        "difficulty": 2,
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
        "id": 24,
        "type": "single",
        "difficulty": 2,
        "question": "When designing a slowly changing dimension (SCD) for `inventory`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
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
        "id": 25,
        "type": "single",
        "difficulty": 3,
        "question": "When designing a slowly changing dimension (SCD) for `transactions`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
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
        "id": 26,
        "type": "single",
        "difficulty": 3,
        "question": "You are storing 10 TB of raw JSON logs in an S3 bucket named `orders`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
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
        "id": 27,
        "type": "single",
        "difficulty": 2,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM customers WHERE session_id = '5000'`?",
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
        "id": 28,
        "type": "single",
        "difficulty": 2,
        "question": "You have a Kafka topic `events` with 500 partitions. If you spin up 2 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
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
        "difficulty": 3,
        "question": "Given the table `transactions`, which SQL query calculates the cumulative sum of `price` partitioned by `timestamp` ordered by `price`?",
        "options": [
            "SELECT SUM(price) OVER (PARTITION BY timestamp ORDER BY price) FROM transactions",
            "SELECT CUMSUM(price) OVER (PARTITION BY timestamp ORDER BY price) FROM transactions",
            "SELECT SUM(price) OVER (ORDER BY timestamp PARTITION BY price) FROM transactions",
            "SELECT SUM(price) PARTITION BY timestamp ORDER BY price FROM transactions"
        ],
        "correct": [
            0
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 31,
        "type": "single",
        "difficulty": 2,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `price`?",
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
        "id": 32,
        "type": "single",
        "difficulty": 2,
        "question": "You have a Kafka topic `transactions` with 1000 partitions. If you spin up 4 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "Each reads all 1000 partitions",
            "It depends on the producer routing key",
            "Partitions are randomly assigned dynamically per message",
            "Consumer 1 reads 500, Consumer 2 reads 500"
        ],
        "correct": [
            3
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 33,
        "type": "single",
        "difficulty": 1,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM sales WHERE quantity = '1000'`?",
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
        "id": 34,
        "type": "single",
        "difficulty": 1,
        "question": "When designing a slowly changing dimension (SCD) for `transactions`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
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
        "question": "In a Star Schema, the `logs` table contains foreign keys to dimension tables and quantitative metrics like `amount`. What type of table is this?",
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
        "id": 36,
        "type": "single",
        "difficulty": 2,
        "question": "When designing a slowly changing dimension (SCD) for `customers`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
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
        "id": 37,
        "type": "single",
        "difficulty": 3,
        "question": "You are storing 10 TB of raw JSON logs in an S3 bucket named `events`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
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
        "id": 38,
        "type": "single",
        "difficulty": 2,
        "question": "What is the output of `sum(x for x in range(5000) if x % 2 == 0)`?",
        "options": [
            "12495000",
            "6247498",
            "6247500",
            "6247502"
        ],
        "correct": [
            2
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 5000 that are divisible by 2."
    },
    {
        "id": 39,
        "type": "single",
        "difficulty": 1,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `user_id`?",
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
    },
    {
        "id": 40,
        "type": "single",
        "difficulty": 3,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM clicks WHERE price = '10000'`?",
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
        "id": 41,
        "type": "single",
        "difficulty": 1,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `tax` is greater than 10000 and drop duplicates based on `user_id`?",
        "options": [
            "df.where('tax' > 10000).distinct('user_id')",
            "df.filter(F.col('tax') > 10000).dropDuplicates(['user_id'])",
            "df.filter('tax' > 10000).drop_duplicates('user_id')",
            "df.filter(df.tax > 10000).dropDuplicates('user_id')"
        ],
        "correct": [
            1
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 42,
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
        "id": 43,
        "type": "single",
        "difficulty": 1,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `amount` is greater than 10 and drop duplicates based on `status`?",
        "options": [
            "df.filter('amount' > 10).drop_duplicates('status')",
            "df.where('amount' > 10).distinct('status')",
            "df.filter(F.col('amount') > 10).dropDuplicates(['status'])",
            "df.filter(df.amount > 10).dropDuplicates('status')"
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
        "id": 45,
        "type": "single",
        "difficulty": 3,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `price`?",
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
        "id": 46,
        "type": "single",
        "difficulty": 2,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `tax` is greater than 1000 and drop duplicates based on `revenue`?",
        "options": [
            "df.filter(df.tax > 1000).dropDuplicates('revenue')",
            "df.filter(F.col('tax') > 1000).dropDuplicates(['revenue'])",
            "df.where('tax' > 1000).distinct('revenue')",
            "df.filter('tax' > 1000).drop_duplicates('revenue')"
        ],
        "correct": [
            1
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 47,
        "type": "single",
        "difficulty": 1,
        "question": "In a Star Schema, the `clicks` table contains foreign keys to dimension tables and quantitative metrics like `user_id`. What type of table is this?",
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
        "id": 48,
        "type": "single",
        "difficulty": 2,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `timestamp` is greater than 50 and drop duplicates based on `session_id`?",
        "options": [
            "df.where('timestamp' > 50).distinct('session_id')",
            "df.filter(df.timestamp > 50).dropDuplicates('session_id')",
            "df.filter('timestamp' > 50).drop_duplicates('session_id')",
            "df.filter(F.col('timestamp') > 50).dropDuplicates(['session_id'])"
        ],
        "correct": [
            3
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 49,
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
        "id": 50,
        "type": "single",
        "difficulty": 1,
        "question": "When designing a slowly changing dimension (SCD) for `orders`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
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
        "id": 51,
        "type": "single",
        "difficulty": 3,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM customers WHERE amount = '10000'`?",
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
        "id": 52,
        "type": "single",
        "difficulty": 2,
        "question": "What is the output of `sum(x for x in range(100) if x % 2 == 0)`?",
        "options": [
            "2452",
            "2450",
            "2448",
            "4900"
        ],
        "correct": [
            1
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 100 that are divisible by 2."
    },
    {
        "id": 53,
        "type": "single",
        "difficulty": 3,
        "question": "When designing a slowly changing dimension (SCD) for `payments`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
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
        "id": 54,
        "type": "single",
        "difficulty": 3,
        "question": "You are storing 100 TB of raw JSON logs in an S3 bucket named `users`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
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
        "id": 55,
        "type": "single",
        "difficulty": 1,
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
        "id": 56,
        "type": "single",
        "difficulty": 2,
        "question": "Given the table `users`, which SQL query calculates the cumulative sum of `revenue` partitioned by `revenue` ordered by `user_id`?",
        "options": [
            "SELECT SUM(revenue) OVER (ORDER BY revenue PARTITION BY user_id) FROM users",
            "SELECT SUM(revenue) PARTITION BY revenue ORDER BY user_id FROM users",
            "SELECT SUM(revenue) OVER (PARTITION BY revenue ORDER BY user_id) FROM users",
            "SELECT CUMSUM(revenue) OVER (PARTITION BY revenue ORDER BY user_id) FROM users"
        ],
        "correct": [
            2
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 57,
        "type": "single",
        "difficulty": 3,
        "question": "When designing a slowly changing dimension (SCD) for `users`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
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
        "id": 58,
        "type": "single",
        "difficulty": 2,
        "question": "You have a Kafka topic `transactions` with 10 partitions. If you spin up 5 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
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
        "question": "You have a Kafka topic `inventory` with 10000 partitions. If you spin up 3 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "Consumer 1 reads 5000, Consumer 2 reads 5000",
            "It depends on the producer routing key",
            "Partitions are randomly assigned dynamically per message",
            "Each reads all 10000 partitions"
        ],
        "correct": [
            0
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 60,
        "type": "single",
        "difficulty": 2,
        "question": "You have a Kafka topic `transactions` with 10 partitions. If you spin up 4 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "Partitions are randomly assigned dynamically per message",
            "Consumer 1 reads 5, Consumer 2 reads 5",
            "It depends on the producer routing key",
            "Each reads all 10 partitions"
        ],
        "correct": [
            1
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 61,
        "type": "single",
        "difficulty": 3,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM users WHERE status = '1000'`?",
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
        "id": 62,
        "type": "single",
        "difficulty": 2,
        "question": "You have a Kafka topic `logs` with 10 partitions. If you spin up 4 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
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
        "id": 63,
        "type": "single",
        "difficulty": 2,
        "question": "In a Star Schema, the `events` table contains foreign keys to dimension tables and quantitative metrics like `session_id`. What type of table is this?",
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
        "id": 64,
        "type": "single",
        "difficulty": 1,
        "question": "You have a Kafka topic `transactions` with 50 partitions. If you spin up 5 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
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
        "id": 65,
        "type": "single",
        "difficulty": 2,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM logs WHERE timestamp = '10000'`?",
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
        "id": 66,
        "type": "single",
        "difficulty": 2,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `revenue` is greater than 50 and drop duplicates based on `discount`?",
        "options": [
            "df.filter(df.revenue > 50).dropDuplicates('discount')",
            "df.filter('revenue' > 50).drop_duplicates('discount')",
            "df.where('revenue' > 50).distinct('discount')",
            "df.filter(F.col('revenue') > 50).dropDuplicates(['discount'])"
        ],
        "correct": [
            3
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 67,
        "type": "single",
        "difficulty": 2,
        "question": "You have a Kafka topic `transactions` with 10 partitions. If you spin up 3 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "Partitions are randomly assigned dynamically per message",
            "It depends on the producer routing key",
            "Consumer 1 reads 5, Consumer 2 reads 5",
            "Each reads all 10 partitions"
        ],
        "correct": [
            2
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 68,
        "type": "single",
        "difficulty": 3,
        "question": "You are storing 10 TB of raw JSON logs in an S3 bucket named `logs`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
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
        "id": 69,
        "type": "single",
        "difficulty": 3,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `tax`?",
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
        "id": 70,
        "type": "single",
        "difficulty": 2,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `revenue`?",
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
        "id": 71,
        "type": "single",
        "difficulty": 3,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `timestamp`?",
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
        "id": 72,
        "type": "single",
        "difficulty": 1,
        "question": "When designing a slowly changing dimension (SCD) for `inventory`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
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
        "id": 73,
        "type": "single",
        "difficulty": 1,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM orders WHERE amount = '50'`?",
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
        "id": 74,
        "type": "single",
        "difficulty": 3,
        "question": "You are storing 1000 TB of raw JSON logs in an S3 bucket named `events`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
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
        "id": 75,
        "type": "single",
        "difficulty": 2,
        "question": "In a Star Schema, the `users` table contains foreign keys to dimension tables and quantitative metrics like `price`. What type of table is this?",
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
        "id": 76,
        "type": "single",
        "difficulty": 3,
        "question": "What is the output of `sum(x for x in range(1000) if x % 4 == 0)`?",
        "options": [
            "124496",
            "124504",
            "249000",
            "124500"
        ],
        "correct": [
            3
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 1000 that are divisible by 4."
    },
    {
        "id": 77,
        "type": "single",
        "difficulty": 1,
        "question": "You have a Kafka topic `users` with 500 partitions. If you spin up 5 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "It depends on the producer routing key",
            "Partitions are randomly assigned dynamically per message",
            "Each reads all 500 partitions",
            "Consumer 1 reads 250, Consumer 2 reads 250"
        ],
        "correct": [
            3
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 78,
        "type": "single",
        "difficulty": 2,
        "question": "You are storing 50 TB of raw JSON logs in an S3 bucket named `logs`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
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
        "id": 79,
        "type": "single",
        "difficulty": 3,
        "question": "You have a Kafka topic `transactions` with 1000 partitions. If you spin up 2 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "Each reads all 1000 partitions",
            "Partitions are randomly assigned dynamically per message",
            "It depends on the producer routing key",
            "Consumer 1 reads 500, Consumer 2 reads 500"
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
        "question": "What is the output of `sum(x for x in range(10) if x % 3 == 0)`?",
        "options": [
            "18",
            "21",
            "15",
            "36"
        ],
        "correct": [
            0
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 10 that are divisible by 3."
    },
    {
        "id": 81,
        "type": "single",
        "difficulty": 2,
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
        "id": 82,
        "type": "single",
        "difficulty": 1,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM logs WHERE timestamp = '1000'`?",
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
        "id": 83,
        "type": "single",
        "difficulty": 3,
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
        "id": 84,
        "type": "single",
        "difficulty": 1,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `price`?",
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
        "id": 85,
        "type": "single",
        "difficulty": 3,
        "question": "When designing a slowly changing dimension (SCD) for `users`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
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
        "id": 86,
        "type": "single",
        "difficulty": 3,
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
        "id": 87,
        "type": "single",
        "difficulty": 3,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM transactions WHERE status = '1000'`?",
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
        "id": 88,
        "type": "single",
        "difficulty": 2,
        "question": "You have a Kafka topic `logs` with 500 partitions. If you spin up 2 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
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
        "id": 89,
        "type": "single",
        "difficulty": 1,
        "question": "You have a Kafka topic `events` with 1000 partitions. If you spin up 3 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
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
        "id": 90,
        "type": "single",
        "difficulty": 2,
        "question": "In a Star Schema, the `users` table contains foreign keys to dimension tables and quantitative metrics like `discount`. What type of table is this?",
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
        "id": 91,
        "type": "single",
        "difficulty": 3,
        "question": "In a Star Schema, the `events` table contains foreign keys to dimension tables and quantitative metrics like `session_id`. What type of table is this?",
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
        "id": 92,
        "type": "single",
        "difficulty": 3,
        "question": "What is the output of `sum(x for x in range(100) if x % 3 == 0)`?",
        "options": [
            "3366",
            "1686",
            "1680",
            "1683"
        ],
        "correct": [
            3
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 100 that are divisible by 3."
    },
    {
        "id": 93,
        "type": "single",
        "difficulty": 1,
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
        "id": 94,
        "type": "single",
        "difficulty": 1,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `user_id` is greater than 10000 and drop duplicates based on `revenue`?",
        "options": [
            "df.filter(F.col('user_id') > 10000).dropDuplicates(['revenue'])",
            "df.filter(df.user_id > 10000).dropDuplicates('revenue')",
            "df.where('user_id' > 10000).distinct('revenue')",
            "df.filter('user_id' > 10000).drop_duplicates('revenue')"
        ],
        "correct": [
            0
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 95,
        "type": "single",
        "difficulty": 1,
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
        "id": 96,
        "type": "single",
        "difficulty": 1,
        "question": "What is the output of `sum(x for x in range(50) if x % 2 == 0)`?",
        "options": [
            "600",
            "598",
            "1200",
            "602"
        ],
        "correct": [
            0
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 50 that are divisible by 2."
    },
    {
        "id": 97,
        "type": "single",
        "difficulty": 1,
        "question": "You are storing 10 TB of raw JSON logs in an S3 bucket named `users`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
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
        "id": 98,
        "type": "single",
        "difficulty": 1,
        "question": "You have a Kafka topic `sales` with 10 partitions. If you spin up 5 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "It depends on the producer routing key",
            "Partitions are randomly assigned dynamically per message",
            "Each reads all 10 partitions",
            "Consumer 1 reads 5, Consumer 2 reads 5"
        ],
        "correct": [
            3
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 99,
        "type": "single",
        "difficulty": 3,
        "question": "You are storing 10 TB of raw JSON logs in an S3 bucket named `logs`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
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
        "id": 100,
        "type": "single",
        "difficulty": 2,
        "question": "What is the output of `sum(x for x in range(10) if x % 4 == 0)`?",
        "options": [
            "12",
            "8",
            "16",
            "24"
        ],
        "correct": [
            0
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 10 that are divisible by 4."
    }
]
};

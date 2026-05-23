window.QUIZ_DATA = window.QUIZ_DATA || {};
window.QUIZ_DATA["day41"] = {
  title: "Data Engineering Masterclass - Day 41",
  topics: ["SQL", "PySpark", "Airflow", "Kafka", "Data Modeling", "AWS", "Snowflake"],
  questions: [
    {
        "id": 1,
        "type": "single",
        "difficulty": 3,
        "question": "You are storing 100 TB of raw JSON logs in an S3 bucket named `payments`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
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
        "id": 2,
        "type": "single",
        "difficulty": 1,
        "question": "You have a Kafka topic `logs` with 10000 partitions. If you spin up 4 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "It depends on the producer routing key",
            "Each reads all 10000 partitions",
            "Partitions are randomly assigned dynamically per message",
            "Consumer 1 reads 5000, Consumer 2 reads 5000"
        ],
        "correct": [
            3
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 3,
        "type": "single",
        "difficulty": 1,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `tax`?",
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
        "id": 4,
        "type": "single",
        "difficulty": 1,
        "question": "When designing a slowly changing dimension (SCD) for `clicks`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
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
        "id": 5,
        "type": "single",
        "difficulty": 3,
        "question": "Given the table `customers`, which SQL query calculates the cumulative sum of `tax` partitioned by `timestamp` ordered by `discount`?",
        "options": [
            "SELECT CUMSUM(tax) OVER (PARTITION BY timestamp ORDER BY discount) FROM customers",
            "SELECT SUM(tax) OVER (ORDER BY timestamp PARTITION BY discount) FROM customers",
            "SELECT SUM(tax) PARTITION BY timestamp ORDER BY discount FROM customers",
            "SELECT SUM(tax) OVER (PARTITION BY timestamp ORDER BY discount) FROM customers"
        ],
        "correct": [
            3
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 6,
        "type": "single",
        "difficulty": 2,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM events WHERE discount = '500'`?",
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
        "id": 7,
        "type": "single",
        "difficulty": 3,
        "question": "You have a Kafka topic `events` with 1000 partitions. If you spin up 2 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "Consumer 1 reads 500, Consumer 2 reads 500",
            "Each reads all 1000 partitions",
            "It depends on the producer routing key",
            "Partitions are randomly assigned dynamically per message"
        ],
        "correct": [
            0
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 8,
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
        "id": 9,
        "type": "single",
        "difficulty": 1,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `amount` is greater than 10000 and drop duplicates based on `quantity`?",
        "options": [
            "df.filter('amount' > 10000).drop_duplicates('quantity')",
            "df.filter(df.amount > 10000).dropDuplicates('quantity')",
            "df.where('amount' > 10000).distinct('quantity')",
            "df.filter(F.col('amount') > 10000).dropDuplicates(['quantity'])"
        ],
        "correct": [
            3
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 10,
        "type": "single",
        "difficulty": 1,
        "question": "What is the output of `sum(x for x in range(1000) if x % 4 == 0)`?",
        "options": [
            "124500",
            "124496",
            "124504",
            "249000"
        ],
        "correct": [
            0
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 1000 that are divisible by 4."
    },
    {
        "id": 11,
        "type": "single",
        "difficulty": 2,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM customers WHERE revenue = '50'`?",
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
        "id": 12,
        "type": "single",
        "difficulty": 3,
        "question": "When designing a slowly changing dimension (SCD) for `transactions`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
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
        "id": 13,
        "type": "single",
        "difficulty": 1,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `quantity`?",
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
        "id": 14,
        "type": "single",
        "difficulty": 2,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `price` is greater than 5000 and drop duplicates based on `session_id`?",
        "options": [
            "df.where('price' > 5000).distinct('session_id')",
            "df.filter(df.price > 5000).dropDuplicates('session_id')",
            "df.filter(F.col('price') > 5000).dropDuplicates(['session_id'])",
            "df.filter('price' > 5000).drop_duplicates('session_id')"
        ],
        "correct": [
            2
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 15,
        "type": "single",
        "difficulty": 3,
        "question": "What is the output of `sum(x for x in range(50) if x % 4 == 0)`?",
        "options": [
            "316",
            "312",
            "308",
            "624"
        ],
        "correct": [
            1
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 50 that are divisible by 4."
    },
    {
        "id": 16,
        "type": "single",
        "difficulty": 1,
        "question": "You have a Kafka topic `customers` with 10000 partitions. If you spin up 3 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
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
        "id": 17,
        "type": "single",
        "difficulty": 1,
        "question": "Given the table `clicks`, which SQL query calculates the cumulative sum of `quantity` partitioned by `user_id` ordered by `tax`?",
        "options": [
            "SELECT SUM(quantity) OVER (PARTITION BY user_id ORDER BY tax) FROM clicks",
            "SELECT SUM(quantity) PARTITION BY user_id ORDER BY tax FROM clicks",
            "SELECT CUMSUM(quantity) OVER (PARTITION BY user_id ORDER BY tax) FROM clicks",
            "SELECT SUM(quantity) OVER (ORDER BY user_id PARTITION BY tax) FROM clicks"
        ],
        "correct": [
            0
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 18,
        "type": "single",
        "difficulty": 3,
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
        "id": 19,
        "type": "single",
        "difficulty": 1,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM events WHERE discount = '1000'`?",
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
        "id": 20,
        "type": "single",
        "difficulty": 1,
        "question": "You are storing 10000 TB of raw JSON logs in an S3 bucket named `customers`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
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
        "id": 21,
        "type": "single",
        "difficulty": 1,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM customers WHERE session_id = '500'`?",
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
        "id": 22,
        "type": "single",
        "difficulty": 3,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM users WHERE quantity = '10'`?",
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
        "id": 23,
        "type": "single",
        "difficulty": 1,
        "question": "In a Star Schema, the `customers` table contains foreign keys to dimension tables and quantitative metrics like `tax`. What type of table is this?",
        "options": [
            "Dimension Table",
            "Aggregate Table",
            "Fact Table",
            "Bridge Table"
        ],
        "correct": [
            2
        ],
        "concept": "Fact tables contain quantitative data (measurements) and foreign keys referencing dimension tables."
    },
    {
        "id": 24,
        "type": "single",
        "difficulty": 2,
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
        "id": 25,
        "type": "single",
        "difficulty": 3,
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
        "id": 26,
        "type": "single",
        "difficulty": 2,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `session_id` is greater than 50 and drop duplicates based on `tax`?",
        "options": [
            "df.filter('session_id' > 50).drop_duplicates('tax')",
            "df.filter(F.col('session_id') > 50).dropDuplicates(['tax'])",
            "df.filter(df.session_id > 50).dropDuplicates('tax')",
            "df.where('session_id' > 50).distinct('tax')"
        ],
        "correct": [
            1
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 27,
        "type": "single",
        "difficulty": 2,
        "question": "What is the output of `sum(x for x in range(50) if x % 3 == 0)`?",
        "options": [
            "816",
            "405",
            "411",
            "408"
        ],
        "correct": [
            3
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 50 that are divisible by 3."
    },
    {
        "id": 28,
        "type": "single",
        "difficulty": 2,
        "question": "What is the output of `sum(x for x in range(50) if x % 3 == 0)`?",
        "options": [
            "408",
            "405",
            "816",
            "411"
        ],
        "correct": [
            0
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 50 that are divisible by 3."
    },
    {
        "id": 29,
        "type": "single",
        "difficulty": 3,
        "question": "What is the output of `sum(x for x in range(5000) if x % 4 == 0)`?",
        "options": [
            "3122504",
            "3122496",
            "6245000",
            "3122500"
        ],
        "correct": [
            3
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 5000 that are divisible by 4."
    },
    {
        "id": 30,
        "type": "single",
        "difficulty": 2,
        "question": "You have a Kafka topic `logs` with 10000 partitions. If you spin up 5 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "Consumer 1 reads 5000, Consumer 2 reads 5000",
            "Partitions are randomly assigned dynamically per message",
            "It depends on the producer routing key",
            "Each reads all 10000 partitions"
        ],
        "correct": [
            0
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 31,
        "type": "single",
        "difficulty": 2,
        "question": "What is the output of `sum(x for x in range(5000) if x % 2 == 0)`?",
        "options": [
            "6247500",
            "6247498",
            "12495000",
            "6247502"
        ],
        "correct": [
            0
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 5000 that are divisible by 2."
    },
    {
        "id": 32,
        "type": "single",
        "difficulty": 1,
        "question": "You have a Kafka topic `logs` with 1000 partitions. If you spin up 2 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
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
        "id": 33,
        "type": "single",
        "difficulty": 3,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `revenue`?",
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
        "id": 34,
        "type": "single",
        "difficulty": 2,
        "question": "When designing a slowly changing dimension (SCD) for `logs`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
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
        "id": 35,
        "type": "single",
        "difficulty": 3,
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
        "id": 36,
        "type": "single",
        "difficulty": 3,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `timestamp` is greater than 10 and drop duplicates based on `timestamp`?",
        "options": [
            "df.filter('timestamp' > 10).drop_duplicates('timestamp')",
            "df.filter(df.timestamp > 10).dropDuplicates('timestamp')",
            "df.filter(F.col('timestamp') > 10).dropDuplicates(['timestamp'])",
            "df.where('timestamp' > 10).distinct('timestamp')"
        ],
        "correct": [
            2
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 37,
        "type": "single",
        "difficulty": 1,
        "question": "You are storing 500 TB of raw JSON logs in an S3 bucket named `users`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
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
        "id": 38,
        "type": "single",
        "difficulty": 3,
        "question": "What is the output of `sum(x for x in range(10000) if x % 5 == 0)`?",
        "options": [
            "9995005",
            "9994995",
            "19990000",
            "9995000"
        ],
        "correct": [
            3
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 10000 that are divisible by 5."
    },
    {
        "id": 39,
        "type": "single",
        "difficulty": 3,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM events WHERE session_id = '10000'`?",
        "options": [
            "Virtual Warehouse (Compute)",
            "Metadata Layer",
            "Cloud Services Layer",
            "Database Storage Layer"
        ],
        "correct": [
            0
        ],
        "concept": "Query execution and data processing are handled by the Virtual Warehouses (Compute Layer)."
    },
    {
        "id": 40,
        "type": "single",
        "difficulty": 2,
        "question": "In a Star Schema, the `users` table contains foreign keys to dimension tables and quantitative metrics like `discount`. What type of table is this?",
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
        "id": 41,
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
        "id": 42,
        "type": "single",
        "difficulty": 2,
        "question": "Given the table `users`, which SQL query calculates the cumulative sum of `quantity` partitioned by `revenue` ordered by `amount`?",
        "options": [
            "SELECT SUM(quantity) OVER (PARTITION BY revenue ORDER BY amount) FROM users",
            "SELECT CUMSUM(quantity) OVER (PARTITION BY revenue ORDER BY amount) FROM users",
            "SELECT SUM(quantity) PARTITION BY revenue ORDER BY amount FROM users",
            "SELECT SUM(quantity) OVER (ORDER BY revenue PARTITION BY amount) FROM users"
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
        "id": 44,
        "type": "single",
        "difficulty": 1,
        "question": "In a Star Schema, the `transactions` table contains foreign keys to dimension tables and quantitative metrics like `revenue`. What type of table is this?",
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
        "id": 45,
        "type": "single",
        "difficulty": 2,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `tax` is greater than 10000 and drop duplicates based on `session_id`?",
        "options": [
            "df.filter(F.col('tax') > 10000).dropDuplicates(['session_id'])",
            "df.where('tax' > 10000).distinct('session_id')",
            "df.filter('tax' > 10000).drop_duplicates('session_id')",
            "df.filter(df.tax > 10000).dropDuplicates('session_id')"
        ],
        "correct": [
            0
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 46,
        "type": "single",
        "difficulty": 2,
        "question": "You are storing 10000 TB of raw JSON logs in an S3 bucket named `events`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
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
        "id": 47,
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
        "id": 48,
        "type": "single",
        "difficulty": 3,
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
        "id": 49,
        "type": "single",
        "difficulty": 3,
        "question": "Given the table `payments`, which SQL query calculates the cumulative sum of `quantity` partitioned by `amount` ordered by `quantity`?",
        "options": [
            "SELECT SUM(quantity) PARTITION BY amount ORDER BY quantity FROM payments",
            "SELECT CUMSUM(quantity) OVER (PARTITION BY amount ORDER BY quantity) FROM payments",
            "SELECT SUM(quantity) OVER (PARTITION BY amount ORDER BY quantity) FROM payments",
            "SELECT SUM(quantity) OVER (ORDER BY amount PARTITION BY quantity) FROM payments"
        ],
        "correct": [
            2
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 50,
        "type": "single",
        "difficulty": 2,
        "question": "You are storing 10 TB of raw JSON logs in an S3 bucket named `payments`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
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
        "id": 51,
        "type": "single",
        "difficulty": 1,
        "question": "You have a Kafka topic `events` with 5000 partitions. If you spin up 5 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
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
        "id": 52,
        "type": "single",
        "difficulty": 1,
        "question": "When designing a slowly changing dimension (SCD) for `events`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
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
        "id": 53,
        "type": "single",
        "difficulty": 3,
        "question": "Given the table `events`, which SQL query calculates the cumulative sum of `revenue` partitioned by `timestamp` ordered by `price`?",
        "options": [
            "SELECT SUM(revenue) OVER (PARTITION BY timestamp ORDER BY price) FROM events",
            "SELECT SUM(revenue) OVER (ORDER BY timestamp PARTITION BY price) FROM events",
            "SELECT CUMSUM(revenue) OVER (PARTITION BY timestamp ORDER BY price) FROM events",
            "SELECT SUM(revenue) PARTITION BY timestamp ORDER BY price FROM events"
        ],
        "correct": [
            0
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 54,
        "type": "single",
        "difficulty": 1,
        "question": "You are storing 50 TB of raw JSON logs in an S3 bucket named `clicks`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
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
        "id": 55,
        "type": "single",
        "difficulty": 2,
        "question": "You are storing 50 TB of raw JSON logs in an S3 bucket named `events`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
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
        "id": 56,
        "type": "single",
        "difficulty": 1,
        "question": "You are storing 5000 TB of raw JSON logs in an S3 bucket named `events`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
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
        "id": 57,
        "type": "single",
        "difficulty": 3,
        "question": "When designing a slowly changing dimension (SCD) for `payments`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
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
        "id": 58,
        "type": "single",
        "difficulty": 3,
        "question": "You are storing 10000 TB of raw JSON logs in an S3 bucket named `customers`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
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
        "id": 59,
        "type": "single",
        "difficulty": 3,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `price` is greater than 5000 and drop duplicates based on `status`?",
        "options": [
            "df.filter('price' > 5000).drop_duplicates('status')",
            "df.filter(df.price > 5000).dropDuplicates('status')",
            "df.where('price' > 5000).distinct('status')",
            "df.filter(F.col('price') > 5000).dropDuplicates(['status'])"
        ],
        "correct": [
            3
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 60,
        "type": "single",
        "difficulty": 2,
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
        "id": 61,
        "type": "single",
        "difficulty": 3,
        "question": "Given the table `payments`, which SQL query calculates the cumulative sum of `session_id` partitioned by `price` ordered by `price`?",
        "options": [
            "SELECT SUM(session_id) OVER (PARTITION BY price ORDER BY price) FROM payments",
            "SELECT CUMSUM(session_id) OVER (PARTITION BY price ORDER BY price) FROM payments",
            "SELECT SUM(session_id) PARTITION BY price ORDER BY price FROM payments",
            "SELECT SUM(session_id) OVER (ORDER BY price PARTITION BY price) FROM payments"
        ],
        "correct": [
            0
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 62,
        "type": "single",
        "difficulty": 2,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `price`?",
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
        "id": 63,
        "type": "single",
        "difficulty": 1,
        "question": "In a Star Schema, the `sales` table contains foreign keys to dimension tables and quantitative metrics like `discount`. What type of table is this?",
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
        "id": 64,
        "type": "single",
        "difficulty": 2,
        "question": "In a Star Schema, the `customers` table contains foreign keys to dimension tables and quantitative metrics like `user_id`. What type of table is this?",
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
        "id": 65,
        "type": "single",
        "difficulty": 3,
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
        "id": 66,
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
        "id": 67,
        "type": "single",
        "difficulty": 1,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM transactions WHERE session_id = '50'`?",
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
        "id": 68,
        "type": "single",
        "difficulty": 2,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM payments WHERE user_id = '5000'`?",
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
        "question": "What is the output of `sum(x for x in range(10000) if x % 4 == 0)`?",
        "options": [
            "12495004",
            "24990000",
            "12495000",
            "12494996"
        ],
        "correct": [
            2
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 10000 that are divisible by 4."
    },
    {
        "id": 70,
        "type": "single",
        "difficulty": 1,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM users WHERE discount = '100'`?",
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
        "id": 71,
        "type": "single",
        "difficulty": 2,
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
        "id": 72,
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
        "id": 73,
        "type": "single",
        "difficulty": 3,
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
        "id": 74,
        "type": "single",
        "difficulty": 3,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM payments WHERE timestamp = '500'`?",
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
        "id": 75,
        "type": "single",
        "difficulty": 2,
        "question": "In a Star Schema, the `sales` table contains foreign keys to dimension tables and quantitative metrics like `user_id`. What type of table is this?",
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
        "id": 76,
        "type": "single",
        "difficulty": 3,
        "question": "Given the table `orders`, which SQL query calculates the cumulative sum of `price` partitioned by `tax` ordered by `discount`?",
        "options": [
            "SELECT SUM(price) OVER (ORDER BY tax PARTITION BY discount) FROM orders",
            "SELECT SUM(price) PARTITION BY tax ORDER BY discount FROM orders",
            "SELECT SUM(price) OVER (PARTITION BY tax ORDER BY discount) FROM orders",
            "SELECT CUMSUM(price) OVER (PARTITION BY tax ORDER BY discount) FROM orders"
        ],
        "correct": [
            2
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 77,
        "type": "single",
        "difficulty": 1,
        "question": "Given the table `events`, which SQL query calculates the cumulative sum of `session_id` partitioned by `timestamp` ordered by `user_id`?",
        "options": [
            "SELECT SUM(session_id) PARTITION BY timestamp ORDER BY user_id FROM events",
            "SELECT SUM(session_id) OVER (ORDER BY timestamp PARTITION BY user_id) FROM events",
            "SELECT SUM(session_id) OVER (PARTITION BY timestamp ORDER BY user_id) FROM events",
            "SELECT CUMSUM(session_id) OVER (PARTITION BY timestamp ORDER BY user_id) FROM events"
        ],
        "correct": [
            2
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 78,
        "type": "single",
        "difficulty": 1,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `revenue` is greater than 10 and drop duplicates based on `status`?",
        "options": [
            "df.filter(F.col('revenue') > 10).dropDuplicates(['status'])",
            "df.where('revenue' > 10).distinct('status')",
            "df.filter(df.revenue > 10).dropDuplicates('status')",
            "df.filter('revenue' > 10).drop_duplicates('status')"
        ],
        "correct": [
            0
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 79,
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
        "id": 80,
        "type": "single",
        "difficulty": 3,
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
        "id": 81,
        "type": "single",
        "difficulty": 3,
        "question": "You have a Kafka topic `logs` with 100 partitions. If you spin up 2 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
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
        "id": 82,
        "type": "single",
        "difficulty": 2,
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
        "id": 83,
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
        "difficulty": 2,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `discount` is greater than 10000 and drop duplicates based on `price`?",
        "options": [
            "df.filter(df.discount > 10000).dropDuplicates('price')",
            "df.filter(F.col('discount') > 10000).dropDuplicates(['price'])",
            "df.filter('discount' > 10000).drop_duplicates('price')",
            "df.where('discount' > 10000).distinct('price')"
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
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM inventory WHERE quantity = '10000'`?",
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
        "id": 87,
        "type": "single",
        "difficulty": 3,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `status` is greater than 5000 and drop duplicates based on `amount`?",
        "options": [
            "df.filter('status' > 5000).drop_duplicates('amount')",
            "df.filter(df.status > 5000).dropDuplicates('amount')",
            "df.filter(F.col('status') > 5000).dropDuplicates(['amount'])",
            "df.where('status' > 5000).distinct('amount')"
        ],
        "correct": [
            2
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 88,
        "type": "single",
        "difficulty": 3,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM payments WHERE tax = '500'`?",
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
        "id": 89,
        "type": "single",
        "difficulty": 1,
        "question": "You are storing 10 TB of raw JSON logs in an S3 bucket named `transactions`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
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
        "id": 90,
        "type": "single",
        "difficulty": 3,
        "question": "What is the output of `sum(x for x in range(500) if x % 5 == 0)`?",
        "options": [
            "24755",
            "24745",
            "24750",
            "49500"
        ],
        "correct": [
            2
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 500 that are divisible by 5."
    },
    {
        "id": 91,
        "type": "single",
        "difficulty": 2,
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
        "id": 92,
        "type": "single",
        "difficulty": 1,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `amount` is greater than 500 and drop duplicates based on `amount`?",
        "options": [
            "df.filter('amount' > 500).drop_duplicates('amount')",
            "df.filter(F.col('amount') > 500).dropDuplicates(['amount'])",
            "df.where('amount' > 500).distinct('amount')",
            "df.filter(df.amount > 500).dropDuplicates('amount')"
        ],
        "correct": [
            1
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 93,
        "type": "single",
        "difficulty": 1,
        "question": "Given the table `orders`, which SQL query calculates the cumulative sum of `price` partitioned by `tax` ordered by `session_id`?",
        "options": [
            "SELECT SUM(price) OVER (PARTITION BY tax ORDER BY session_id) FROM orders",
            "SELECT CUMSUM(price) OVER (PARTITION BY tax ORDER BY session_id) FROM orders",
            "SELECT SUM(price) OVER (ORDER BY tax PARTITION BY session_id) FROM orders",
            "SELECT SUM(price) PARTITION BY tax ORDER BY session_id FROM orders"
        ],
        "correct": [
            0
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 94,
        "type": "single",
        "difficulty": 1,
        "question": "When designing a slowly changing dimension (SCD) for `events`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
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
        "id": 95,
        "type": "single",
        "difficulty": 1,
        "question": "When designing a slowly changing dimension (SCD) for `events`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
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
        "id": 96,
        "type": "single",
        "difficulty": 1,
        "question": "When designing a slowly changing dimension (SCD) for `sales`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
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
        "id": 97,
        "type": "single",
        "difficulty": 1,
        "question": "What is the output of `sum(x for x in range(500) if x % 4 == 0)`?",
        "options": [
            "31000",
            "31004",
            "62000",
            "30996"
        ],
        "correct": [
            0
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 500 that are divisible by 4."
    },
    {
        "id": 98,
        "type": "single",
        "difficulty": 2,
        "question": "You are storing 5000 TB of raw JSON logs in an S3 bucket named `logs`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
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
        "id": 99,
        "type": "single",
        "difficulty": 2,
        "question": "You have a Kafka topic `clicks` with 5000 partitions. If you spin up 5 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
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
        "id": 100,
        "type": "single",
        "difficulty": 1,
        "question": "You have a Kafka topic `customers` with 100 partitions. If you spin up 5 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "It depends on the producer routing key",
            "Each reads all 100 partitions",
            "Partitions are randomly assigned dynamically per message",
            "Consumer 1 reads 50, Consumer 2 reads 50"
        ],
        "correct": [
            3
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    }
]
};

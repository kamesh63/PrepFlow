window.QUIZ_DATA = window.QUIZ_DATA || {};
window.QUIZ_DATA["day37"] = {
  title: "Data Engineering Masterclass - Day 37",
  topics: ["SQL", "PySpark", "Airflow", "Kafka", "Data Modeling", "AWS", "Snowflake"],
  questions: [
    {
        "id": 1,
        "type": "single",
        "difficulty": 3,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `discount` is greater than 10000 and drop duplicates based on `price`?",
        "options": [
            "df.filter(F.col('discount') > 10000).dropDuplicates(['price'])",
            "df.where('discount' > 10000).distinct('price')",
            "df.filter(df.discount > 10000).dropDuplicates('price')",
            "df.filter('discount' > 10000).drop_duplicates('price')"
        ],
        "correct": [
            0
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 2,
        "type": "single",
        "difficulty": 3,
        "question": "What is the output of `sum(x for x in range(10000) if x % 4 == 0)`?",
        "options": [
            "12495004",
            "12494996",
            "12495000",
            "24990000"
        ],
        "correct": [
            2
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 10000 that are divisible by 4."
    },
    {
        "id": 3,
        "type": "single",
        "difficulty": 2,
        "question": "What is the output of `sum(x for x in range(5000) if x % 3 == 0)`?",
        "options": [
            "8331666",
            "4165833",
            "4165830",
            "4165836"
        ],
        "correct": [
            1
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 5000 that are divisible by 3."
    },
    {
        "id": 4,
        "type": "single",
        "difficulty": 1,
        "question": "When designing a slowly changing dimension (SCD) for `payments`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
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
        "id": 5,
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
        "id": 6,
        "type": "single",
        "difficulty": 1,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM events WHERE revenue = '10'`?",
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
        "id": 7,
        "type": "single",
        "difficulty": 1,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `user_id` is greater than 5000 and drop duplicates based on `amount`?",
        "options": [
            "df.where('user_id' > 5000).distinct('amount')",
            "df.filter(df.user_id > 5000).dropDuplicates('amount')",
            "df.filter(F.col('user_id') > 5000).dropDuplicates(['amount'])",
            "df.filter('user_id' > 5000).drop_duplicates('amount')"
        ],
        "correct": [
            2
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 8,
        "type": "single",
        "difficulty": 3,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `timestamp`?",
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
        "id": 9,
        "type": "single",
        "difficulty": 1,
        "question": "You have a Kafka topic `orders` with 500 partitions. If you spin up 4 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "It depends on the producer routing key",
            "Consumer 1 reads 250, Consumer 2 reads 250",
            "Each reads all 500 partitions",
            "Partitions are randomly assigned dynamically per message"
        ],
        "correct": [
            1
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 10,
        "type": "single",
        "difficulty": 3,
        "question": "Given the table `clicks`, which SQL query calculates the cumulative sum of `timestamp` partitioned by `tax` ordered by `price`?",
        "options": [
            "SELECT SUM(timestamp) PARTITION BY tax ORDER BY price FROM clicks",
            "SELECT SUM(timestamp) OVER (PARTITION BY tax ORDER BY price) FROM clicks",
            "SELECT SUM(timestamp) OVER (ORDER BY tax PARTITION BY price) FROM clicks",
            "SELECT CUMSUM(timestamp) OVER (PARTITION BY tax ORDER BY price) FROM clicks"
        ],
        "correct": [
            1
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 11,
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
        "id": 12,
        "type": "single",
        "difficulty": 2,
        "question": "What is the output of `sum(x for x in range(50) if x % 3 == 0)`?",
        "options": [
            "408",
            "411",
            "405",
            "816"
        ],
        "correct": [
            0
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 50 that are divisible by 3."
    },
    {
        "id": 13,
        "type": "single",
        "difficulty": 1,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `price` is greater than 10000 and drop duplicates based on `price`?",
        "options": [
            "df.filter(df.price > 10000).dropDuplicates('price')",
            "df.filter('price' > 10000).drop_duplicates('price')",
            "df.filter(F.col('price') > 10000).dropDuplicates(['price'])",
            "df.where('price' > 10000).distinct('price')"
        ],
        "correct": [
            2
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 14,
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
        "id": 15,
        "type": "single",
        "difficulty": 3,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM events WHERE timestamp = '500'`?",
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
        "id": 16,
        "type": "single",
        "difficulty": 3,
        "question": "You are storing 10000 TB of raw JSON logs in an S3 bucket named `events`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
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
        "id": 17,
        "type": "single",
        "difficulty": 1,
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
        "id": 18,
        "type": "single",
        "difficulty": 3,
        "question": "Given the table `transactions`, which SQL query calculates the cumulative sum of `amount` partitioned by `timestamp` ordered by `status`?",
        "options": [
            "SELECT SUM(amount) OVER (ORDER BY timestamp PARTITION BY status) FROM transactions",
            "SELECT SUM(amount) PARTITION BY timestamp ORDER BY status FROM transactions",
            "SELECT SUM(amount) OVER (PARTITION BY timestamp ORDER BY status) FROM transactions",
            "SELECT CUMSUM(amount) OVER (PARTITION BY timestamp ORDER BY status) FROM transactions"
        ],
        "correct": [
            2
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 19,
        "type": "single",
        "difficulty": 1,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `session_id` is greater than 500 and drop duplicates based on `amount`?",
        "options": [
            "df.filter(df.session_id > 500).dropDuplicates('amount')",
            "df.where('session_id' > 500).distinct('amount')",
            "df.filter(F.col('session_id') > 500).dropDuplicates(['amount'])",
            "df.filter('session_id' > 500).drop_duplicates('amount')"
        ],
        "correct": [
            2
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 20,
        "type": "single",
        "difficulty": 3,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `timestamp`?",
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
        "id": 21,
        "type": "single",
        "difficulty": 1,
        "question": "You have a Kafka topic `payments` with 10 partitions. If you spin up 4 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "Each reads all 10 partitions",
            "Consumer 1 reads 5, Consumer 2 reads 5",
            "It depends on the producer routing key",
            "Partitions are randomly assigned dynamically per message"
        ],
        "correct": [
            1
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 22,
        "type": "single",
        "difficulty": 2,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `status`?",
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
        "id": 23,
        "type": "single",
        "difficulty": 3,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM sales WHERE revenue = '1000'`?",
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
        "id": 24,
        "type": "single",
        "difficulty": 3,
        "question": "When designing a slowly changing dimension (SCD) for `logs`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
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
        "id": 25,
        "type": "single",
        "difficulty": 3,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `status` is greater than 5000 and drop duplicates based on `tax`?",
        "options": [
            "df.where('status' > 5000).distinct('tax')",
            "df.filter(df.status > 5000).dropDuplicates('tax')",
            "df.filter(F.col('status') > 5000).dropDuplicates(['tax'])",
            "df.filter('status' > 5000).drop_duplicates('tax')"
        ],
        "correct": [
            2
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 26,
        "type": "single",
        "difficulty": 2,
        "question": "You have a Kafka topic `orders` with 10 partitions. If you spin up 4 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "It depends on the producer routing key",
            "Each reads all 10 partitions",
            "Partitions are randomly assigned dynamically per message",
            "Consumer 1 reads 5, Consumer 2 reads 5"
        ],
        "correct": [
            3
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 27,
        "type": "single",
        "difficulty": 1,
        "question": "What is the output of `sum(x for x in range(100) if x % 3 == 0)`?",
        "options": [
            "1680",
            "1683",
            "3366",
            "1686"
        ],
        "correct": [
            1
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 100 that are divisible by 3."
    },
    {
        "id": 28,
        "type": "single",
        "difficulty": 2,
        "question": "What is the output of `sum(x for x in range(5000) if x % 3 == 0)`?",
        "options": [
            "4165836",
            "4165830",
            "4165833",
            "8331666"
        ],
        "correct": [
            2
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 5000 that are divisible by 3."
    },
    {
        "id": 29,
        "type": "single",
        "difficulty": 2,
        "question": "You are storing 500 TB of raw JSON logs in an S3 bucket named `transactions`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
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
        "id": 30,
        "type": "single",
        "difficulty": 2,
        "question": "You have a Kafka topic `clicks` with 10000 partitions. If you spin up 5 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
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
        "id": 31,
        "type": "single",
        "difficulty": 1,
        "question": "You have a Kafka topic `events` with 1000 partitions. If you spin up 5 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
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
        "id": 32,
        "type": "single",
        "difficulty": 1,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `revenue`?",
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
        "id": 33,
        "type": "single",
        "difficulty": 2,
        "question": "What is the output of `sum(x for x in range(100) if x % 4 == 0)`?",
        "options": [
            "1200",
            "2400",
            "1196",
            "1204"
        ],
        "correct": [
            0
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 100 that are divisible by 4."
    },
    {
        "id": 34,
        "type": "single",
        "difficulty": 2,
        "question": "What is the output of `sum(x for x in range(500) if x % 2 == 0)`?",
        "options": [
            "62250",
            "62252",
            "62248",
            "124500"
        ],
        "correct": [
            0
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 500 that are divisible by 2."
    },
    {
        "id": 35,
        "type": "single",
        "difficulty": 3,
        "question": "In a Star Schema, the `events` table contains foreign keys to dimension tables and quantitative metrics like `tax`. What type of table is this?",
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
        "id": 36,
        "type": "single",
        "difficulty": 3,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `quantity` is greater than 5000 and drop duplicates based on `session_id`?",
        "options": [
            "df.where('quantity' > 5000).distinct('session_id')",
            "df.filter('quantity' > 5000).drop_duplicates('session_id')",
            "df.filter(df.quantity > 5000).dropDuplicates('session_id')",
            "df.filter(F.col('quantity') > 5000).dropDuplicates(['session_id'])"
        ],
        "correct": [
            3
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 37,
        "type": "single",
        "difficulty": 1,
        "question": "In a Star Schema, the `customers` table contains foreign keys to dimension tables and quantitative metrics like `tax`. What type of table is this?",
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
        "id": 38,
        "type": "single",
        "difficulty": 2,
        "question": "You have a Kafka topic `payments` with 10000 partitions. If you spin up 2 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "It depends on the producer routing key",
            "Consumer 1 reads 5000, Consumer 2 reads 5000",
            "Partitions are randomly assigned dynamically per message",
            "Each reads all 10000 partitions"
        ],
        "correct": [
            1
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 39,
        "type": "single",
        "difficulty": 1,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `tax` is greater than 500 and drop duplicates based on `tax`?",
        "options": [
            "df.filter('tax' > 500).drop_duplicates('tax')",
            "df.filter(F.col('tax') > 500).dropDuplicates(['tax'])",
            "df.where('tax' > 500).distinct('tax')",
            "df.filter(df.tax > 500).dropDuplicates('tax')"
        ],
        "correct": [
            1
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 40,
        "type": "single",
        "difficulty": 2,
        "question": "In a Star Schema, the `orders` table contains foreign keys to dimension tables and quantitative metrics like `user_id`. What type of table is this?",
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
        "id": 41,
        "type": "single",
        "difficulty": 3,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM clicks WHERE session_id = '1000'`?",
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
        "id": 42,
        "type": "single",
        "difficulty": 1,
        "question": "Given the table `users`, which SQL query calculates the cumulative sum of `status` partitioned by `session_id` ordered by `revenue`?",
        "options": [
            "SELECT SUM(status) OVER (ORDER BY session_id PARTITION BY revenue) FROM users",
            "SELECT CUMSUM(status) OVER (PARTITION BY session_id ORDER BY revenue) FROM users",
            "SELECT SUM(status) PARTITION BY session_id ORDER BY revenue FROM users",
            "SELECT SUM(status) OVER (PARTITION BY session_id ORDER BY revenue) FROM users"
        ],
        "correct": [
            3
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 43,
        "type": "single",
        "difficulty": 3,
        "question": "Given the table `inventory`, which SQL query calculates the cumulative sum of `amount` partitioned by `amount` ordered by `amount`?",
        "options": [
            "SELECT SUM(amount) PARTITION BY amount ORDER BY amount FROM inventory",
            "SELECT SUM(amount) OVER (PARTITION BY amount ORDER BY amount) FROM inventory",
            "SELECT SUM(amount) OVER (ORDER BY amount PARTITION BY amount) FROM inventory",
            "SELECT CUMSUM(amount) OVER (PARTITION BY amount ORDER BY amount) FROM inventory"
        ],
        "correct": [
            1
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 44,
        "type": "single",
        "difficulty": 2,
        "question": "Given the table `inventory`, which SQL query calculates the cumulative sum of `price` partitioned by `price` ordered by `discount`?",
        "options": [
            "SELECT SUM(price) PARTITION BY price ORDER BY discount FROM inventory",
            "SELECT CUMSUM(price) OVER (PARTITION BY price ORDER BY discount) FROM inventory",
            "SELECT SUM(price) OVER (ORDER BY price PARTITION BY discount) FROM inventory",
            "SELECT SUM(price) OVER (PARTITION BY price ORDER BY discount) FROM inventory"
        ],
        "correct": [
            3
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 45,
        "type": "single",
        "difficulty": 2,
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
        "id": 46,
        "type": "single",
        "difficulty": 2,
        "question": "What is the output of `sum(x for x in range(500) if x % 3 == 0)`?",
        "options": [
            "41583",
            "41586",
            "83166",
            "41580"
        ],
        "correct": [
            0
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 500 that are divisible by 3."
    },
    {
        "id": 47,
        "type": "single",
        "difficulty": 3,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM customers WHERE tax = '1000'`?",
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
        "id": 48,
        "type": "single",
        "difficulty": 2,
        "question": "Given the table `clicks`, which SQL query calculates the cumulative sum of `user_id` partitioned by `discount` ordered by `revenue`?",
        "options": [
            "SELECT CUMSUM(user_id) OVER (PARTITION BY discount ORDER BY revenue) FROM clicks",
            "SELECT SUM(user_id) PARTITION BY discount ORDER BY revenue FROM clicks",
            "SELECT SUM(user_id) OVER (PARTITION BY discount ORDER BY revenue) FROM clicks",
            "SELECT SUM(user_id) OVER (ORDER BY discount PARTITION BY revenue) FROM clicks"
        ],
        "correct": [
            2
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 49,
        "type": "single",
        "difficulty": 3,
        "question": "In a Star Schema, the `logs` table contains foreign keys to dimension tables and quantitative metrics like `price`. What type of table is this?",
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
        "id": 50,
        "type": "single",
        "difficulty": 3,
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
        "id": 51,
        "type": "single",
        "difficulty": 2,
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
        "id": 52,
        "type": "single",
        "difficulty": 3,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `quantity` is greater than 10000 and drop duplicates based on `discount`?",
        "options": [
            "df.filter('quantity' > 10000).drop_duplicates('discount')",
            "df.filter(df.quantity > 10000).dropDuplicates('discount')",
            "df.where('quantity' > 10000).distinct('discount')",
            "df.filter(F.col('quantity') > 10000).dropDuplicates(['discount'])"
        ],
        "correct": [
            3
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 53,
        "type": "single",
        "difficulty": 2,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `session_id` is greater than 50 and drop duplicates based on `user_id`?",
        "options": [
            "df.filter(F.col('session_id') > 50).dropDuplicates(['user_id'])",
            "df.where('session_id' > 50).distinct('user_id')",
            "df.filter('session_id' > 50).drop_duplicates('user_id')",
            "df.filter(df.session_id > 50).dropDuplicates('user_id')"
        ],
        "correct": [
            0
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 54,
        "type": "single",
        "difficulty": 1,
        "question": "What is the output of `sum(x for x in range(10) if x % 3 == 0)`?",
        "options": [
            "21",
            "36",
            "15",
            "18"
        ],
        "correct": [
            3
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 10 that are divisible by 3."
    },
    {
        "id": 55,
        "type": "single",
        "difficulty": 1,
        "question": "You have a Kafka topic `users` with 5000 partitions. If you spin up 5 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "Partitions are randomly assigned dynamically per message",
            "Consumer 1 reads 2500, Consumer 2 reads 2500",
            "Each reads all 5000 partitions",
            "It depends on the producer routing key"
        ],
        "correct": [
            1
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 56,
        "type": "single",
        "difficulty": 3,
        "question": "You are storing 500 TB of raw JSON logs in an S3 bucket named `inventory`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
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
        "difficulty": 1,
        "question": "Given the table `events`, which SQL query calculates the cumulative sum of `status` partitioned by `quantity` ordered by `amount`?",
        "options": [
            "SELECT SUM(status) OVER (PARTITION BY quantity ORDER BY amount) FROM events",
            "SELECT SUM(status) OVER (ORDER BY quantity PARTITION BY amount) FROM events",
            "SELECT SUM(status) PARTITION BY quantity ORDER BY amount FROM events",
            "SELECT CUMSUM(status) OVER (PARTITION BY quantity ORDER BY amount) FROM events"
        ],
        "correct": [
            0
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 58,
        "type": "single",
        "difficulty": 3,
        "question": "You are storing 10000 TB of raw JSON logs in an S3 bucket named `orders`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
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
        "id": 59,
        "type": "single",
        "difficulty": 1,
        "question": "You have a Kafka topic `clicks` with 5000 partitions. If you spin up 4 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
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
        "id": 60,
        "type": "single",
        "difficulty": 2,
        "question": "What is the output of `sum(x for x in range(5000) if x % 4 == 0)`?",
        "options": [
            "3122500",
            "6245000",
            "3122496",
            "3122504"
        ],
        "correct": [
            0
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 5000 that are divisible by 4."
    },
    {
        "id": 61,
        "type": "single",
        "difficulty": 3,
        "question": "You are storing 10000 TB of raw JSON logs in an S3 bucket named `clicks`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
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
        "id": 62,
        "type": "single",
        "difficulty": 1,
        "question": "Given the table `orders`, which SQL query calculates the cumulative sum of `session_id` partitioned by `user_id` ordered by `price`?",
        "options": [
            "SELECT SUM(session_id) OVER (PARTITION BY user_id ORDER BY price) FROM orders",
            "SELECT SUM(session_id) PARTITION BY user_id ORDER BY price FROM orders",
            "SELECT SUM(session_id) OVER (ORDER BY user_id PARTITION BY price) FROM orders",
            "SELECT CUMSUM(session_id) OVER (PARTITION BY user_id ORDER BY price) FROM orders"
        ],
        "correct": [
            0
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 63,
        "type": "single",
        "difficulty": 1,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `tax` is greater than 5000 and drop duplicates based on `tax`?",
        "options": [
            "df.filter(df.tax > 5000).dropDuplicates('tax')",
            "df.filter('tax' > 5000).drop_duplicates('tax')",
            "df.where('tax' > 5000).distinct('tax')",
            "df.filter(F.col('tax') > 5000).dropDuplicates(['tax'])"
        ],
        "correct": [
            3
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 64,
        "type": "single",
        "difficulty": 3,
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
        "id": 65,
        "type": "single",
        "difficulty": 3,
        "question": "You are storing 100 TB of raw JSON logs in an S3 bucket named `sales`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
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
        "id": 66,
        "type": "single",
        "difficulty": 3,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `status`?",
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
        "id": 67,
        "type": "single",
        "difficulty": 2,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM transactions WHERE user_id = '1000'`?",
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
        "id": 68,
        "type": "single",
        "difficulty": 3,
        "question": "You have a Kafka topic `orders` with 5000 partitions. If you spin up 2 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
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
    },
    {
        "id": 69,
        "type": "single",
        "difficulty": 1,
        "question": "You are storing 50 TB of raw JSON logs in an S3 bucket named `transactions`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
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
        "id": 70,
        "type": "single",
        "difficulty": 1,
        "question": "You have a Kafka topic `transactions` with 50 partitions. If you spin up 4 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "Each reads all 50 partitions",
            "Partitions are randomly assigned dynamically per message",
            "It depends on the producer routing key",
            "Consumer 1 reads 25, Consumer 2 reads 25"
        ],
        "correct": [
            3
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 71,
        "type": "single",
        "difficulty": 1,
        "question": "In a Star Schema, the `orders` table contains foreign keys to dimension tables and quantitative metrics like `revenue`. What type of table is this?",
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
        "id": 72,
        "type": "single",
        "difficulty": 1,
        "question": "What is the output of `sum(x for x in range(100) if x % 3 == 0)`?",
        "options": [
            "1680",
            "1686",
            "3366",
            "1683"
        ],
        "correct": [
            3
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 100 that are divisible by 3."
    },
    {
        "id": 73,
        "type": "single",
        "difficulty": 2,
        "question": "What is the output of `sum(x for x in range(5000) if x % 4 == 0)`?",
        "options": [
            "3122504",
            "6245000",
            "3122500",
            "3122496"
        ],
        "correct": [
            2
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 5000 that are divisible by 4."
    },
    {
        "id": 74,
        "type": "single",
        "difficulty": 1,
        "question": "You are storing 1000 TB of raw JSON logs in an S3 bucket named `clicks`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
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
        "id": 75,
        "type": "single",
        "difficulty": 1,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `discount`?",
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
        "id": 76,
        "type": "single",
        "difficulty": 2,
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
        "id": 77,
        "type": "single",
        "difficulty": 3,
        "question": "Given the table `payments`, which SQL query calculates the cumulative sum of `status` partitioned by `revenue` ordered by `session_id`?",
        "options": [
            "SELECT CUMSUM(status) OVER (PARTITION BY revenue ORDER BY session_id) FROM payments",
            "SELECT SUM(status) OVER (PARTITION BY revenue ORDER BY session_id) FROM payments",
            "SELECT SUM(status) OVER (ORDER BY revenue PARTITION BY session_id) FROM payments",
            "SELECT SUM(status) PARTITION BY revenue ORDER BY session_id FROM payments"
        ],
        "correct": [
            1
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 78,
        "type": "single",
        "difficulty": 1,
        "question": "What is the output of `sum(x for x in range(100) if x % 4 == 0)`?",
        "options": [
            "1200",
            "2400",
            "1204",
            "1196"
        ],
        "correct": [
            0
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 100 that are divisible by 4."
    },
    {
        "id": 79,
        "type": "single",
        "difficulty": 3,
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
        "id": 80,
        "type": "single",
        "difficulty": 2,
        "question": "Given the table `events`, which SQL query calculates the cumulative sum of `revenue` partitioned by `tax` ordered by `amount`?",
        "options": [
            "SELECT CUMSUM(revenue) OVER (PARTITION BY tax ORDER BY amount) FROM events",
            "SELECT SUM(revenue) OVER (PARTITION BY tax ORDER BY amount) FROM events",
            "SELECT SUM(revenue) OVER (ORDER BY tax PARTITION BY amount) FROM events",
            "SELECT SUM(revenue) PARTITION BY tax ORDER BY amount FROM events"
        ],
        "correct": [
            1
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 81,
        "type": "single",
        "difficulty": 1,
        "question": "You have a Kafka topic `users` with 500 partitions. If you spin up 3 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
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
        "id": 82,
        "type": "single",
        "difficulty": 1,
        "question": "In a Star Schema, the `events` table contains foreign keys to dimension tables and quantitative metrics like `revenue`. What type of table is this?",
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
        "id": 83,
        "type": "single",
        "difficulty": 1,
        "question": "You are storing 5000 TB of raw JSON logs in an S3 bucket named `customers`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
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
        "id": 84,
        "type": "single",
        "difficulty": 3,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `amount` is greater than 10 and drop duplicates based on `tax`?",
        "options": [
            "df.filter('amount' > 10).drop_duplicates('tax')",
            "df.filter(df.amount > 10).dropDuplicates('tax')",
            "df.filter(F.col('amount') > 10).dropDuplicates(['tax'])",
            "df.where('amount' > 10).distinct('tax')"
        ],
        "correct": [
            2
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 85,
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
        "id": 86,
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
        "id": 87,
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
        "id": 88,
        "type": "single",
        "difficulty": 2,
        "question": "Given the table `customers`, which SQL query calculates the cumulative sum of `quantity` partitioned by `revenue` ordered by `price`?",
        "options": [
            "SELECT CUMSUM(quantity) OVER (PARTITION BY revenue ORDER BY price) FROM customers",
            "SELECT SUM(quantity) OVER (PARTITION BY revenue ORDER BY price) FROM customers",
            "SELECT SUM(quantity) OVER (ORDER BY revenue PARTITION BY price) FROM customers",
            "SELECT SUM(quantity) PARTITION BY revenue ORDER BY price FROM customers"
        ],
        "correct": [
            1
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 89,
        "type": "single",
        "difficulty": 3,
        "question": "In a Star Schema, the `orders` table contains foreign keys to dimension tables and quantitative metrics like `session_id`. What type of table is this?",
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
        "id": 90,
        "type": "single",
        "difficulty": 2,
        "question": "Given the table `payments`, which SQL query calculates the cumulative sum of `session_id` partitioned by `status` ordered by `amount`?",
        "options": [
            "SELECT SUM(session_id) OVER (ORDER BY status PARTITION BY amount) FROM payments",
            "SELECT SUM(session_id) OVER (PARTITION BY status ORDER BY amount) FROM payments",
            "SELECT SUM(session_id) PARTITION BY status ORDER BY amount FROM payments",
            "SELECT CUMSUM(session_id) OVER (PARTITION BY status ORDER BY amount) FROM payments"
        ],
        "correct": [
            1
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 91,
        "type": "single",
        "difficulty": 1,
        "question": "In a Star Schema, the `inventory` table contains foreign keys to dimension tables and quantitative metrics like `revenue`. What type of table is this?",
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
        "id": 92,
        "type": "single",
        "difficulty": 1,
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
        "id": 93,
        "type": "single",
        "difficulty": 1,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `tax` is greater than 1000 and drop duplicates based on `timestamp`?",
        "options": [
            "df.where('tax' > 1000).distinct('timestamp')",
            "df.filter('tax' > 1000).drop_duplicates('timestamp')",
            "df.filter(F.col('tax') > 1000).dropDuplicates(['timestamp'])",
            "df.filter(df.tax > 1000).dropDuplicates('timestamp')"
        ],
        "correct": [
            2
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 94,
        "type": "single",
        "difficulty": 1,
        "question": "In a Star Schema, the `sales` table contains foreign keys to dimension tables and quantitative metrics like `status`. What type of table is this?",
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
        "id": 95,
        "type": "single",
        "difficulty": 1,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `status`?",
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
        "id": 96,
        "type": "single",
        "difficulty": 3,
        "question": "Given the table `sales`, which SQL query calculates the cumulative sum of `tax` partitioned by `revenue` ordered by `quantity`?",
        "options": [
            "SELECT CUMSUM(tax) OVER (PARTITION BY revenue ORDER BY quantity) FROM sales",
            "SELECT SUM(tax) OVER (ORDER BY revenue PARTITION BY quantity) FROM sales",
            "SELECT SUM(tax) PARTITION BY revenue ORDER BY quantity FROM sales",
            "SELECT SUM(tax) OVER (PARTITION BY revenue ORDER BY quantity) FROM sales"
        ],
        "correct": [
            3
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 97,
        "type": "single",
        "difficulty": 2,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `price` is greater than 500 and drop duplicates based on `tax`?",
        "options": [
            "df.filter('price' > 500).drop_duplicates('tax')",
            "df.where('price' > 500).distinct('tax')",
            "df.filter(F.col('price') > 500).dropDuplicates(['tax'])",
            "df.filter(df.price > 500).dropDuplicates('tax')"
        ],
        "correct": [
            2
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 98,
        "type": "single",
        "difficulty": 2,
        "question": "You have a Kafka topic `inventory` with 10 partitions. If you spin up 3 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "Partitions are randomly assigned dynamically per message",
            "Consumer 1 reads 5, Consumer 2 reads 5",
            "Each reads all 10 partitions",
            "It depends on the producer routing key"
        ],
        "correct": [
            1
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 99,
        "type": "single",
        "difficulty": 1,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `price` is greater than 1000 and drop duplicates based on `timestamp`?",
        "options": [
            "df.filter('price' > 1000).drop_duplicates('timestamp')",
            "df.filter(F.col('price') > 1000).dropDuplicates(['timestamp'])",
            "df.where('price' > 1000).distinct('timestamp')",
            "df.filter(df.price > 1000).dropDuplicates('timestamp')"
        ],
        "correct": [
            1
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 100,
        "type": "single",
        "difficulty": 3,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `user_id` is greater than 10000 and drop duplicates based on `session_id`?",
        "options": [
            "df.filter('user_id' > 10000).drop_duplicates('session_id')",
            "df.where('user_id' > 10000).distinct('session_id')",
            "df.filter(df.user_id > 10000).dropDuplicates('session_id')",
            "df.filter(F.col('user_id') > 10000).dropDuplicates(['session_id'])"
        ],
        "correct": [
            3
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    }
]
};

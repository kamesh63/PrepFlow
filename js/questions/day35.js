window.QUIZ_DATA = window.QUIZ_DATA || {};
window.QUIZ_DATA["day35"] = {
  title: "Data Engineering Masterclass - Day 35",
  topics: ["SQL", "PySpark", "Airflow", "Kafka", "Data Modeling", "AWS", "Snowflake"],
  questions: [
    {
        "id": 1,
        "type": "single",
        "difficulty": 1,
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
        "id": 2,
        "type": "single",
        "difficulty": 3,
        "question": "Given the table `payments`, which SQL query calculates the cumulative sum of `session_id` partitioned by `tax` ordered by `tax`?",
        "options": [
            "SELECT SUM(session_id) PARTITION BY tax ORDER BY tax FROM payments",
            "SELECT SUM(session_id) OVER (PARTITION BY tax ORDER BY tax) FROM payments",
            "SELECT SUM(session_id) OVER (ORDER BY tax PARTITION BY tax) FROM payments",
            "SELECT CUMSUM(session_id) OVER (PARTITION BY tax ORDER BY tax) FROM payments"
        ],
        "correct": [
            1
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 3,
        "type": "single",
        "difficulty": 3,
        "question": "In a Star Schema, the `sales` table contains foreign keys to dimension tables and quantitative metrics like `discount`. What type of table is this?",
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
        "id": 4,
        "type": "single",
        "difficulty": 2,
        "question": "Given the table `customers`, which SQL query calculates the cumulative sum of `price` partitioned by `quantity` ordered by `tax`?",
        "options": [
            "SELECT CUMSUM(price) OVER (PARTITION BY quantity ORDER BY tax) FROM customers",
            "SELECT SUM(price) OVER (ORDER BY quantity PARTITION BY tax) FROM customers",
            "SELECT SUM(price) PARTITION BY quantity ORDER BY tax FROM customers",
            "SELECT SUM(price) OVER (PARTITION BY quantity ORDER BY tax) FROM customers"
        ],
        "correct": [
            3
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 5,
        "type": "single",
        "difficulty": 1,
        "question": "You are storing 10000 TB of raw JSON logs in an S3 bucket named `customers`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
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
        "id": 6,
        "type": "single",
        "difficulty": 2,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `timestamp` is greater than 10000 and drop duplicates based on `revenue`?",
        "options": [
            "df.filter('timestamp' > 10000).drop_duplicates('revenue')",
            "df.where('timestamp' > 10000).distinct('revenue')",
            "df.filter(F.col('timestamp') > 10000).dropDuplicates(['revenue'])",
            "df.filter(df.timestamp > 10000).dropDuplicates('revenue')"
        ],
        "correct": [
            2
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 7,
        "type": "single",
        "difficulty": 2,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `session_id` is greater than 5000 and drop duplicates based on `discount`?",
        "options": [
            "df.where('session_id' > 5000).distinct('discount')",
            "df.filter(df.session_id > 5000).dropDuplicates('discount')",
            "df.filter(F.col('session_id') > 5000).dropDuplicates(['discount'])",
            "df.filter('session_id' > 5000).drop_duplicates('discount')"
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
        "question": "In a Star Schema, the `logs` table contains foreign keys to dimension tables and quantitative metrics like `tax`. What type of table is this?",
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
        "id": 9,
        "type": "single",
        "difficulty": 3,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM events WHERE quantity = '10'`?",
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
        "id": 10,
        "type": "single",
        "difficulty": 3,
        "question": "You are storing 50 TB of raw JSON logs in an S3 bucket named `orders`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
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
        "id": 11,
        "type": "single",
        "difficulty": 2,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `price`?",
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
        "id": 12,
        "type": "single",
        "difficulty": 3,
        "question": "You are storing 10 TB of raw JSON logs in an S3 bucket named `sales`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
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
        "id": 13,
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
        "id": 14,
        "type": "single",
        "difficulty": 1,
        "question": "You are storing 50 TB of raw JSON logs in an S3 bucket named `payments`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
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
        "id": 15,
        "type": "single",
        "difficulty": 2,
        "question": "You have a Kafka topic `orders` with 5000 partitions. If you spin up 3 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
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
        "id": 16,
        "type": "single",
        "difficulty": 1,
        "question": "You are storing 10000 TB of raw JSON logs in an S3 bucket named `transactions`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
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
        "id": 17,
        "type": "single",
        "difficulty": 1,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM inventory WHERE discount = '100'`?",
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
        "id": 18,
        "type": "single",
        "difficulty": 3,
        "question": "In a Star Schema, the `events` table contains foreign keys to dimension tables and quantitative metrics like `timestamp`. What type of table is this?",
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
        "id": 19,
        "type": "single",
        "difficulty": 1,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `timestamp`?",
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
        "id": 20,
        "type": "single",
        "difficulty": 3,
        "question": "You have a Kafka topic `transactions` with 5000 partitions. If you spin up 2 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
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
        "id": 21,
        "type": "single",
        "difficulty": 2,
        "question": "Given the table `payments`, which SQL query calculates the cumulative sum of `discount` partitioned by `session_id` ordered by `tax`?",
        "options": [
            "SELECT SUM(discount) PARTITION BY session_id ORDER BY tax FROM payments",
            "SELECT SUM(discount) OVER (ORDER BY session_id PARTITION BY tax) FROM payments",
            "SELECT SUM(discount) OVER (PARTITION BY session_id ORDER BY tax) FROM payments",
            "SELECT CUMSUM(discount) OVER (PARTITION BY session_id ORDER BY tax) FROM payments"
        ],
        "correct": [
            2
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 22,
        "type": "single",
        "difficulty": 3,
        "question": "What is the output of `sum(x for x in range(50) if x % 5 == 0)`?",
        "options": [
            "225",
            "220",
            "230",
            "450"
        ],
        "correct": [
            0
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 50 that are divisible by 5."
    },
    {
        "id": 23,
        "type": "single",
        "difficulty": 1,
        "question": "You have a Kafka topic `events` with 5000 partitions. If you spin up 2 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
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
    },
    {
        "id": 24,
        "type": "single",
        "difficulty": 2,
        "question": "You have a Kafka topic `events` with 5000 partitions. If you spin up 3 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
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
        "id": 25,
        "type": "single",
        "difficulty": 3,
        "question": "You have a Kafka topic `customers` with 10000 partitions. If you spin up 2 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "It depends on the producer routing key",
            "Partitions are randomly assigned dynamically per message",
            "Consumer 1 reads 5000, Consumer 2 reads 5000",
            "Each reads all 10000 partitions"
        ],
        "correct": [
            2
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 26,
        "type": "single",
        "difficulty": 1,
        "question": "In a Star Schema, the `transactions` table contains foreign keys to dimension tables and quantitative metrics like `revenue`. What type of table is this?",
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
        "id": 27,
        "type": "single",
        "difficulty": 1,
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
        "id": 28,
        "type": "single",
        "difficulty": 3,
        "question": "What is the output of `sum(x for x in range(1000) if x % 2 == 0)`?",
        "options": [
            "499000",
            "249498",
            "249500",
            "249502"
        ],
        "correct": [
            2
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 1000 that are divisible by 2."
    },
    {
        "id": 29,
        "type": "single",
        "difficulty": 1,
        "question": "When designing a slowly changing dimension (SCD) for `sales`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
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
        "id": 30,
        "type": "single",
        "difficulty": 1,
        "question": "When designing a slowly changing dimension (SCD) for `events`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
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
        "id": 31,
        "type": "single",
        "difficulty": 1,
        "question": "What is the output of `sum(x for x in range(1000) if x % 4 == 0)`?",
        "options": [
            "124504",
            "124496",
            "249000",
            "124500"
        ],
        "correct": [
            3
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 1000 that are divisible by 4."
    },
    {
        "id": 32,
        "type": "single",
        "difficulty": 1,
        "question": "Given the table `transactions`, which SQL query calculates the cumulative sum of `status` partitioned by `discount` ordered by `user_id`?",
        "options": [
            "SELECT SUM(status) PARTITION BY discount ORDER BY user_id FROM transactions",
            "SELECT SUM(status) OVER (PARTITION BY discount ORDER BY user_id) FROM transactions",
            "SELECT SUM(status) OVER (ORDER BY discount PARTITION BY user_id) FROM transactions",
            "SELECT CUMSUM(status) OVER (PARTITION BY discount ORDER BY user_id) FROM transactions"
        ],
        "correct": [
            1
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 33,
        "type": "single",
        "difficulty": 3,
        "question": "When designing a slowly changing dimension (SCD) for `logs`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
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
        "id": 34,
        "type": "single",
        "difficulty": 3,
        "question": "In a Star Schema, the `users` table contains foreign keys to dimension tables and quantitative metrics like `amount`. What type of table is this?",
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
        "id": 35,
        "type": "single",
        "difficulty": 1,
        "question": "What is the output of `sum(x for x in range(5000) if x % 5 == 0)`?",
        "options": [
            "4995000",
            "2497500",
            "2497505",
            "2497495"
        ],
        "correct": [
            1
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 5000 that are divisible by 5."
    },
    {
        "id": 36,
        "type": "single",
        "difficulty": 2,
        "question": "You have a Kafka topic `payments` with 1000 partitions. If you spin up 3 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
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
        "id": 37,
        "type": "single",
        "difficulty": 3,
        "question": "You are storing 10 TB of raw JSON logs in an S3 bucket named `clicks`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
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
        "id": 38,
        "type": "single",
        "difficulty": 2,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `amount` is greater than 10 and drop duplicates based on `quantity`?",
        "options": [
            "df.filter(F.col('amount') > 10).dropDuplicates(['quantity'])",
            "df.where('amount' > 10).distinct('quantity')",
            "df.filter(df.amount > 10).dropDuplicates('quantity')",
            "df.filter('amount' > 10).drop_duplicates('quantity')"
        ],
        "correct": [
            0
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 39,
        "type": "single",
        "difficulty": 3,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `price`?",
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
        "id": 40,
        "type": "single",
        "difficulty": 3,
        "question": "Given the table `orders`, which SQL query calculates the cumulative sum of `user_id` partitioned by `amount` ordered by `tax`?",
        "options": [
            "SELECT CUMSUM(user_id) OVER (PARTITION BY amount ORDER BY tax) FROM orders",
            "SELECT SUM(user_id) OVER (ORDER BY amount PARTITION BY tax) FROM orders",
            "SELECT SUM(user_id) OVER (PARTITION BY amount ORDER BY tax) FROM orders",
            "SELECT SUM(user_id) PARTITION BY amount ORDER BY tax FROM orders"
        ],
        "correct": [
            2
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 41,
        "type": "single",
        "difficulty": 3,
        "question": "You have a Kafka topic `events` with 50 partitions. If you spin up 2 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
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
        "id": 42,
        "type": "single",
        "difficulty": 2,
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
        "id": 43,
        "type": "single",
        "difficulty": 2,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `revenue` is greater than 100 and drop duplicates based on `tax`?",
        "options": [
            "df.filter(df.revenue > 100).dropDuplicates('tax')",
            "df.filter(F.col('revenue') > 100).dropDuplicates(['tax'])",
            "df.filter('revenue' > 100).drop_duplicates('tax')",
            "df.where('revenue' > 100).distinct('tax')"
        ],
        "correct": [
            1
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 44,
        "type": "single",
        "difficulty": 3,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `discount` is greater than 5000 and drop duplicates based on `user_id`?",
        "options": [
            "df.filter(df.discount > 5000).dropDuplicates('user_id')",
            "df.filter('discount' > 5000).drop_duplicates('user_id')",
            "df.filter(F.col('discount') > 5000).dropDuplicates(['user_id'])",
            "df.where('discount' > 5000).distinct('user_id')"
        ],
        "correct": [
            2
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 45,
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
        "id": 46,
        "type": "single",
        "difficulty": 1,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `session_id` is greater than 1000 and drop duplicates based on `quantity`?",
        "options": [
            "df.filter(df.session_id > 1000).dropDuplicates('quantity')",
            "df.filter(F.col('session_id') > 1000).dropDuplicates(['quantity'])",
            "df.where('session_id' > 1000).distinct('quantity')",
            "df.filter('session_id' > 1000).drop_duplicates('quantity')"
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
        "id": 48,
        "type": "single",
        "difficulty": 3,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `tax` is greater than 5000 and drop duplicates based on `quantity`?",
        "options": [
            "df.filter(df.tax > 5000).dropDuplicates('quantity')",
            "df.where('tax' > 5000).distinct('quantity')",
            "df.filter('tax' > 5000).drop_duplicates('quantity')",
            "df.filter(F.col('tax') > 5000).dropDuplicates(['quantity'])"
        ],
        "correct": [
            3
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 49,
        "type": "single",
        "difficulty": 2,
        "question": "What is the output of `sum(x for x in range(500) if x % 5 == 0)`?",
        "options": [
            "24755",
            "49500",
            "24745",
            "24750"
        ],
        "correct": [
            3
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 500 that are divisible by 5."
    },
    {
        "id": 50,
        "type": "single",
        "difficulty": 2,
        "question": "When designing a slowly changing dimension (SCD) for `clicks`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
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
        "id": 51,
        "type": "single",
        "difficulty": 1,
        "question": "In a Star Schema, the `orders` table contains foreign keys to dimension tables and quantitative metrics like `timestamp`. What type of table is this?",
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
        "id": 52,
        "type": "single",
        "difficulty": 1,
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
        "id": 53,
        "type": "single",
        "difficulty": 1,
        "question": "In a Star Schema, the `orders` table contains foreign keys to dimension tables and quantitative metrics like `tax`. What type of table is this?",
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
        "id": 54,
        "type": "single",
        "difficulty": 1,
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
        "id": 55,
        "type": "single",
        "difficulty": 3,
        "question": "When designing a slowly changing dimension (SCD) for `transactions`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
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
        "id": 56,
        "type": "single",
        "difficulty": 2,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `revenue` is greater than 50 and drop duplicates based on `amount`?",
        "options": [
            "df.filter('revenue' > 50).drop_duplicates('amount')",
            "df.filter(df.revenue > 50).dropDuplicates('amount')",
            "df.where('revenue' > 50).distinct('amount')",
            "df.filter(F.col('revenue') > 50).dropDuplicates(['amount'])"
        ],
        "correct": [
            3
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 57,
        "type": "single",
        "difficulty": 2,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `tax`?",
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
        "id": 58,
        "type": "single",
        "difficulty": 2,
        "question": "What is the output of `sum(x for x in range(10000) if x % 2 == 0)`?",
        "options": [
            "24995002",
            "49990000",
            "24994998",
            "24995000"
        ],
        "correct": [
            3
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 10000 that are divisible by 2."
    },
    {
        "id": 59,
        "type": "single",
        "difficulty": 2,
        "question": "In Airflow, if task A and task B are upstream of task C, and you want task C to run ONLY if both A and B succeed, which trigger rule should you use for task C?",
        "options": [
            "none_failed",
            "one_success",
            "all_done",
            "all_success"
        ],
        "correct": [
            3
        ],
        "concept": "all_success is the default trigger rule in Airflow, requiring all upstream tasks to succeed."
    },
    {
        "id": 60,
        "type": "single",
        "difficulty": 2,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `revenue` is greater than 50 and drop duplicates based on `quantity`?",
        "options": [
            "df.filter(df.revenue > 50).dropDuplicates('quantity')",
            "df.filter(F.col('revenue') > 50).dropDuplicates(['quantity'])",
            "df.filter('revenue' > 50).drop_duplicates('quantity')",
            "df.where('revenue' > 50).distinct('quantity')"
        ],
        "correct": [
            1
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 61,
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
        "id": 62,
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
        "id": 63,
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
        "id": 64,
        "type": "single",
        "difficulty": 1,
        "question": "Given the table `users`, which SQL query calculates the cumulative sum of `amount` partitioned by `timestamp` ordered by `session_id`?",
        "options": [
            "SELECT CUMSUM(amount) OVER (PARTITION BY timestamp ORDER BY session_id) FROM users",
            "SELECT SUM(amount) PARTITION BY timestamp ORDER BY session_id FROM users",
            "SELECT SUM(amount) OVER (PARTITION BY timestamp ORDER BY session_id) FROM users",
            "SELECT SUM(amount) OVER (ORDER BY timestamp PARTITION BY session_id) FROM users"
        ],
        "correct": [
            2
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 65,
        "type": "single",
        "difficulty": 1,
        "question": "You have a Kafka topic `inventory` with 10000 partitions. If you spin up 5 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
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
        "id": 66,
        "type": "single",
        "difficulty": 1,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `discount`?",
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
        "id": 67,
        "type": "single",
        "difficulty": 3,
        "question": "When designing a slowly changing dimension (SCD) for `orders`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
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
        "id": 68,
        "type": "single",
        "difficulty": 1,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `discount` is greater than 10000 and drop duplicates based on `tax`?",
        "options": [
            "df.filter(F.col('discount') > 10000).dropDuplicates(['tax'])",
            "df.where('discount' > 10000).distinct('tax')",
            "df.filter('discount' > 10000).drop_duplicates('tax')",
            "df.filter(df.discount > 10000).dropDuplicates('tax')"
        ],
        "correct": [
            0
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 69,
        "type": "single",
        "difficulty": 1,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM clicks WHERE quantity = '10'`?",
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
        "id": 70,
        "type": "single",
        "difficulty": 3,
        "question": "In a Star Schema, the `payments` table contains foreign keys to dimension tables and quantitative metrics like `session_id`. What type of table is this?",
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
        "id": 71,
        "type": "single",
        "difficulty": 2,
        "question": "You are storing 100 TB of raw JSON logs in an S3 bucket named `transactions`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
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
        "id": 72,
        "type": "single",
        "difficulty": 2,
        "question": "Given the table `users`, which SQL query calculates the cumulative sum of `quantity` partitioned by `timestamp` ordered by `user_id`?",
        "options": [
            "SELECT SUM(quantity) OVER (PARTITION BY timestamp ORDER BY user_id) FROM users",
            "SELECT SUM(quantity) OVER (ORDER BY timestamp PARTITION BY user_id) FROM users",
            "SELECT CUMSUM(quantity) OVER (PARTITION BY timestamp ORDER BY user_id) FROM users",
            "SELECT SUM(quantity) PARTITION BY timestamp ORDER BY user_id FROM users"
        ],
        "correct": [
            0
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 73,
        "type": "single",
        "difficulty": 1,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `user_id` is greater than 500 and drop duplicates based on `session_id`?",
        "options": [
            "df.where('user_id' > 500).distinct('session_id')",
            "df.filter(df.user_id > 500).dropDuplicates('session_id')",
            "df.filter(F.col('user_id') > 500).dropDuplicates(['session_id'])",
            "df.filter('user_id' > 500).drop_duplicates('session_id')"
        ],
        "correct": [
            2
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 74,
        "type": "single",
        "difficulty": 2,
        "question": "You are storing 1000 TB of raw JSON logs in an S3 bucket named `payments`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
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
        "id": 75,
        "type": "single",
        "difficulty": 1,
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
        "id": 76,
        "type": "single",
        "difficulty": 1,
        "question": "Given the table `events`, which SQL query calculates the cumulative sum of `user_id` partitioned by `user_id` ordered by `revenue`?",
        "options": [
            "SELECT SUM(user_id) OVER (ORDER BY user_id PARTITION BY revenue) FROM events",
            "SELECT SUM(user_id) OVER (PARTITION BY user_id ORDER BY revenue) FROM events",
            "SELECT SUM(user_id) PARTITION BY user_id ORDER BY revenue FROM events",
            "SELECT CUMSUM(user_id) OVER (PARTITION BY user_id ORDER BY revenue) FROM events"
        ],
        "correct": [
            1
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 77,
        "type": "single",
        "difficulty": 3,
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
        "id": 78,
        "type": "single",
        "difficulty": 1,
        "question": "You have a Kafka topic `orders` with 1000 partitions. If you spin up 5 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "Partitions are randomly assigned dynamically per message",
            "It depends on the producer routing key",
            "Consumer 1 reads 500, Consumer 2 reads 500",
            "Each reads all 1000 partitions"
        ],
        "correct": [
            2
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 79,
        "type": "single",
        "difficulty": 3,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM inventory WHERE revenue = '100'`?",
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
        "id": 80,
        "type": "single",
        "difficulty": 2,
        "question": "You have a Kafka topic `orders` with 500 partitions. If you spin up 5 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
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
        "id": 81,
        "type": "single",
        "difficulty": 1,
        "question": "Given the table `sales`, which SQL query calculates the cumulative sum of `timestamp` partitioned by `tax` ordered by `quantity`?",
        "options": [
            "SELECT SUM(timestamp) OVER (ORDER BY tax PARTITION BY quantity) FROM sales",
            "SELECT CUMSUM(timestamp) OVER (PARTITION BY tax ORDER BY quantity) FROM sales",
            "SELECT SUM(timestamp) OVER (PARTITION BY tax ORDER BY quantity) FROM sales",
            "SELECT SUM(timestamp) PARTITION BY tax ORDER BY quantity FROM sales"
        ],
        "correct": [
            2
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 82,
        "type": "single",
        "difficulty": 2,
        "question": "What is the output of `sum(x for x in range(5000) if x % 5 == 0)`?",
        "options": [
            "2497495",
            "2497505",
            "4995000",
            "2497500"
        ],
        "correct": [
            3
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 5000 that are divisible by 5."
    },
    {
        "id": 83,
        "type": "single",
        "difficulty": 3,
        "question": "You are storing 5000 TB of raw JSON logs in an S3 bucket named `payments`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
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
        "id": 84,
        "type": "single",
        "difficulty": 2,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `tax`?",
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
        "id": 85,
        "type": "single",
        "difficulty": 3,
        "question": "In a Star Schema, the `customers` table contains foreign keys to dimension tables and quantitative metrics like `discount`. What type of table is this?",
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
        "id": 86,
        "type": "single",
        "difficulty": 2,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `status` is greater than 10000 and drop duplicates based on `revenue`?",
        "options": [
            "df.filter('status' > 10000).drop_duplicates('revenue')",
            "df.where('status' > 10000).distinct('revenue')",
            "df.filter(df.status > 10000).dropDuplicates('revenue')",
            "df.filter(F.col('status') > 10000).dropDuplicates(['revenue'])"
        ],
        "correct": [
            3
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 87,
        "type": "single",
        "difficulty": 1,
        "question": "Given the table `customers`, which SQL query calculates the cumulative sum of `session_id` partitioned by `session_id` ordered by `amount`?",
        "options": [
            "SELECT SUM(session_id) OVER (PARTITION BY session_id ORDER BY amount) FROM customers",
            "SELECT SUM(session_id) OVER (ORDER BY session_id PARTITION BY amount) FROM customers",
            "SELECT CUMSUM(session_id) OVER (PARTITION BY session_id ORDER BY amount) FROM customers",
            "SELECT SUM(session_id) PARTITION BY session_id ORDER BY amount FROM customers"
        ],
        "correct": [
            0
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 88,
        "type": "single",
        "difficulty": 2,
        "question": "Given the table `users`, which SQL query calculates the cumulative sum of `tax` partitioned by `discount` ordered by `discount`?",
        "options": [
            "SELECT SUM(tax) PARTITION BY discount ORDER BY discount FROM users",
            "SELECT CUMSUM(tax) OVER (PARTITION BY discount ORDER BY discount) FROM users",
            "SELECT SUM(tax) OVER (PARTITION BY discount ORDER BY discount) FROM users",
            "SELECT SUM(tax) OVER (ORDER BY discount PARTITION BY discount) FROM users"
        ],
        "correct": [
            2
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 89,
        "type": "single",
        "difficulty": 2,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `tax`?",
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
        "id": 90,
        "type": "single",
        "difficulty": 3,
        "question": "You are storing 10 TB of raw JSON logs in an S3 bucket named `orders`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
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
        "id": 91,
        "type": "single",
        "difficulty": 3,
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
        "id": 92,
        "type": "single",
        "difficulty": 2,
        "question": "You have a Kafka topic `logs` with 50 partitions. If you spin up 4 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "Consumer 1 reads 25, Consumer 2 reads 25",
            "Partitions are randomly assigned dynamically per message",
            "Each reads all 50 partitions",
            "It depends on the producer routing key"
        ],
        "correct": [
            0
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 93,
        "type": "single",
        "difficulty": 1,
        "question": "You have a Kafka topic `customers` with 5000 partitions. If you spin up 4 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
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
        "id": 94,
        "type": "single",
        "difficulty": 3,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `session_id`?",
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
        "id": 95,
        "type": "single",
        "difficulty": 2,
        "question": "What is the output of `sum(x for x in range(500) if x % 3 == 0)`?",
        "options": [
            "41586",
            "83166",
            "41580",
            "41583"
        ],
        "correct": [
            3
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 500 that are divisible by 3."
    },
    {
        "id": 96,
        "type": "single",
        "difficulty": 2,
        "question": "You are storing 100 TB of raw JSON logs in an S3 bucket named `transactions`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
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
        "id": 97,
        "type": "single",
        "difficulty": 3,
        "question": "You have a Kafka topic `payments` with 500 partitions. If you spin up 5 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "Consumer 1 reads 250, Consumer 2 reads 250",
            "It depends on the producer routing key",
            "Partitions are randomly assigned dynamically per message",
            "Each reads all 500 partitions"
        ],
        "correct": [
            0
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 98,
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
        "id": 99,
        "type": "single",
        "difficulty": 1,
        "question": "You are storing 10000 TB of raw JSON logs in an S3 bucket named `users`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
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
        "id": 100,
        "type": "single",
        "difficulty": 3,
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
    }
]
};

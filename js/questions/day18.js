window.QUIZ_DATA = window.QUIZ_DATA || {};
window.QUIZ_DATA["day18"] = {
  title: "Data Engineering Masterclass - Day 18",
  topics: ["SQL", "PySpark", "Airflow", "Kafka", "Data Modeling", "AWS", "Snowflake"],
  questions: [
    {
        "id": 1,
        "type": "single",
        "difficulty": 1,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `price` is greater than 1000 and drop duplicates based on `status`?",
        "options": [
            "df.where('price' > 1000).distinct('status')",
            "df.filter('price' > 1000).drop_duplicates('status')",
            "df.filter(df.price > 1000).dropDuplicates('status')",
            "df.filter(F.col('price') > 1000).dropDuplicates(['status'])"
        ],
        "correct": [
            3
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 2,
        "type": "single",
        "difficulty": 1,
        "question": "Given the table `events`, which SQL query calculates the cumulative sum of `tax` partitioned by `discount` ordered by `user_id`?",
        "options": [
            "SELECT CUMSUM(tax) OVER (PARTITION BY discount ORDER BY user_id) FROM events",
            "SELECT SUM(tax) OVER (ORDER BY discount PARTITION BY user_id) FROM events",
            "SELECT SUM(tax) PARTITION BY discount ORDER BY user_id FROM events",
            "SELECT SUM(tax) OVER (PARTITION BY discount ORDER BY user_id) FROM events"
        ],
        "correct": [
            3
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 3,
        "type": "single",
        "difficulty": 2,
        "question": "In a Star Schema, the `users` table contains foreign keys to dimension tables and quantitative metrics like `user_id`. What type of table is this?",
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
        "id": 4,
        "type": "single",
        "difficulty": 3,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `session_id`?",
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
        "id": 5,
        "type": "single",
        "difficulty": 2,
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
        "id": 6,
        "type": "single",
        "difficulty": 3,
        "question": "When designing a slowly changing dimension (SCD) for `logs`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
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
        "id": 7,
        "type": "single",
        "difficulty": 1,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `session_id` is greater than 50 and drop duplicates based on `session_id`?",
        "options": [
            "df.where('session_id' > 50).distinct('session_id')",
            "df.filter(F.col('session_id') > 50).dropDuplicates(['session_id'])",
            "df.filter(df.session_id > 50).dropDuplicates('session_id')",
            "df.filter('session_id' > 50).drop_duplicates('session_id')"
        ],
        "correct": [
            1
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 8,
        "type": "single",
        "difficulty": 2,
        "question": "You have a Kafka topic `inventory` with 500 partitions. If you spin up 4 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "It depends on the producer routing key",
            "Each reads all 500 partitions",
            "Partitions are randomly assigned dynamically per message",
            "Consumer 1 reads 250, Consumer 2 reads 250"
        ],
        "correct": [
            3
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 9,
        "type": "single",
        "difficulty": 1,
        "question": "You are storing 10 TB of raw JSON logs in an S3 bucket named `users`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
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
        "difficulty": 2,
        "question": "When designing a slowly changing dimension (SCD) for `transactions`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
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
        "id": 11,
        "type": "single",
        "difficulty": 2,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM events WHERE timestamp = '10000'`?",
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
        "id": 12,
        "type": "single",
        "difficulty": 1,
        "question": "In a Star Schema, the `orders` table contains foreign keys to dimension tables and quantitative metrics like `amount`. What type of table is this?",
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
        "id": 13,
        "type": "single",
        "difficulty": 1,
        "question": "When designing a slowly changing dimension (SCD) for `orders`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
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
        "id": 14,
        "type": "single",
        "difficulty": 3,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM customers WHERE status = '100'`?",
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
        "id": 15,
        "type": "single",
        "difficulty": 1,
        "question": "In a Star Schema, the `orders` table contains foreign keys to dimension tables and quantitative metrics like `price`. What type of table is this?",
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
        "id": 16,
        "type": "single",
        "difficulty": 1,
        "question": "What is the output of `sum(x for x in range(1000) if x % 2 == 0)`?",
        "options": [
            "249498",
            "249500",
            "499000",
            "249502"
        ],
        "correct": [
            1
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 1000 that are divisible by 2."
    },
    {
        "id": 17,
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
        "id": 18,
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
        "id": 19,
        "type": "single",
        "difficulty": 1,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM payments WHERE discount = '10000'`?",
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
        "id": 20,
        "type": "single",
        "difficulty": 1,
        "question": "Given the table `transactions`, which SQL query calculates the cumulative sum of `quantity` partitioned by `session_id` ordered by `tax`?",
        "options": [
            "SELECT SUM(quantity) OVER (PARTITION BY session_id ORDER BY tax) FROM transactions",
            "SELECT CUMSUM(quantity) OVER (PARTITION BY session_id ORDER BY tax) FROM transactions",
            "SELECT SUM(quantity) PARTITION BY session_id ORDER BY tax FROM transactions",
            "SELECT SUM(quantity) OVER (ORDER BY session_id PARTITION BY tax) FROM transactions"
        ],
        "correct": [
            0
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 21,
        "type": "single",
        "difficulty": 2,
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
        "id": 22,
        "type": "single",
        "difficulty": 3,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM payments WHERE discount = '50'`?",
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
        "id": 23,
        "type": "single",
        "difficulty": 1,
        "question": "In a Star Schema, the `clicks` table contains foreign keys to dimension tables and quantitative metrics like `quantity`. What type of table is this?",
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
        "id": 24,
        "type": "single",
        "difficulty": 3,
        "question": "You have a Kafka topic `inventory` with 100 partitions. If you spin up 3 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "Partitions are randomly assigned dynamically per message",
            "Each reads all 100 partitions",
            "Consumer 1 reads 50, Consumer 2 reads 50",
            "It depends on the producer routing key"
        ],
        "correct": [
            2
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 25,
        "type": "single",
        "difficulty": 2,
        "question": "What is the output of `sum(x for x in range(1000) if x % 2 == 0)`?",
        "options": [
            "499000",
            "249502",
            "249500",
            "249498"
        ],
        "correct": [
            2
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 1000 that are divisible by 2."
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
        "difficulty": 1,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM sales WHERE status = '10'`?",
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
        "id": 28,
        "type": "single",
        "difficulty": 2,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM clicks WHERE discount = '1000'`?",
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
        "id": 29,
        "type": "single",
        "difficulty": 2,
        "question": "What is the output of `sum(x for x in range(50) if x % 2 == 0)`?",
        "options": [
            "1200",
            "600",
            "598",
            "602"
        ],
        "correct": [
            1
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 50 that are divisible by 2."
    },
    {
        "id": 30,
        "type": "single",
        "difficulty": 2,
        "question": "When designing a slowly changing dimension (SCD) for `customers`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
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
        "id": 31,
        "type": "single",
        "difficulty": 1,
        "question": "In a Star Schema, the `clicks` table contains foreign keys to dimension tables and quantitative metrics like `amount`. What type of table is this?",
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
        "id": 32,
        "type": "single",
        "difficulty": 1,
        "question": "When designing a slowly changing dimension (SCD) for `orders`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
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
        "id": 33,
        "type": "single",
        "difficulty": 3,
        "question": "You have a Kafka topic `clicks` with 5000 partitions. If you spin up 3 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
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
        "id": 34,
        "type": "single",
        "difficulty": 1,
        "question": "In a Star Schema, the `events` table contains foreign keys to dimension tables and quantitative metrics like `amount`. What type of table is this?",
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
        "id": 35,
        "type": "single",
        "difficulty": 1,
        "question": "When designing a slowly changing dimension (SCD) for `customers`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
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
        "id": 36,
        "type": "single",
        "difficulty": 1,
        "question": "When designing a slowly changing dimension (SCD) for `customers`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
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
        "id": 37,
        "type": "single",
        "difficulty": 2,
        "question": "What is the output of `sum(x for x in range(1000) if x % 3 == 0)`?",
        "options": [
            "166836",
            "166833",
            "166830",
            "333666"
        ],
        "correct": [
            1
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 1000 that are divisible by 3."
    },
    {
        "id": 38,
        "type": "single",
        "difficulty": 3,
        "question": "In a Star Schema, the `customers` table contains foreign keys to dimension tables and quantitative metrics like `tax`. What type of table is this?",
        "options": [
            "Bridge Table",
            "Fact Table",
            "Dimension Table",
            "Aggregate Table"
        ],
        "correct": [
            1
        ],
        "concept": "Fact tables contain quantitative data (measurements) and foreign keys referencing dimension tables."
    },
    {
        "id": 39,
        "type": "single",
        "difficulty": 1,
        "question": "When designing a slowly changing dimension (SCD) for `events`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
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
        "id": 40,
        "type": "single",
        "difficulty": 3,
        "question": "In a Star Schema, the `orders` table contains foreign keys to dimension tables and quantitative metrics like `user_id`. What type of table is this?",
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
        "id": 41,
        "type": "single",
        "difficulty": 1,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM orders WHERE quantity = '5000'`?",
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
        "id": 42,
        "type": "single",
        "difficulty": 1,
        "question": "You are storing 10000 TB of raw JSON logs in an S3 bucket named `users`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
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
        "id": 43,
        "type": "single",
        "difficulty": 1,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `discount` is greater than 10 and drop duplicates based on `amount`?",
        "options": [
            "df.filter(df.discount > 10).dropDuplicates('amount')",
            "df.where('discount' > 10).distinct('amount')",
            "df.filter('discount' > 10).drop_duplicates('amount')",
            "df.filter(F.col('discount') > 10).dropDuplicates(['amount'])"
        ],
        "correct": [
            3
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 44,
        "type": "single",
        "difficulty": 3,
        "question": "Given the table `users`, which SQL query calculates the cumulative sum of `timestamp` partitioned by `revenue` ordered by `price`?",
        "options": [
            "SELECT CUMSUM(timestamp) OVER (PARTITION BY revenue ORDER BY price) FROM users",
            "SELECT SUM(timestamp) PARTITION BY revenue ORDER BY price FROM users",
            "SELECT SUM(timestamp) OVER (ORDER BY revenue PARTITION BY price) FROM users",
            "SELECT SUM(timestamp) OVER (PARTITION BY revenue ORDER BY price) FROM users"
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
        "question": "Given the table `users`, which SQL query calculates the cumulative sum of `user_id` partitioned by `quantity` ordered by `session_id`?",
        "options": [
            "SELECT SUM(user_id) PARTITION BY quantity ORDER BY session_id FROM users",
            "SELECT SUM(user_id) OVER (PARTITION BY quantity ORDER BY session_id) FROM users",
            "SELECT SUM(user_id) OVER (ORDER BY quantity PARTITION BY session_id) FROM users",
            "SELECT CUMSUM(user_id) OVER (PARTITION BY quantity ORDER BY session_id) FROM users"
        ],
        "correct": [
            1
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 46,
        "type": "single",
        "difficulty": 2,
        "question": "Given the table `inventory`, which SQL query calculates the cumulative sum of `revenue` partitioned by `discount` ordered by `price`?",
        "options": [
            "SELECT SUM(revenue) PARTITION BY discount ORDER BY price FROM inventory",
            "SELECT CUMSUM(revenue) OVER (PARTITION BY discount ORDER BY price) FROM inventory",
            "SELECT SUM(revenue) OVER (PARTITION BY discount ORDER BY price) FROM inventory",
            "SELECT SUM(revenue) OVER (ORDER BY discount PARTITION BY price) FROM inventory"
        ],
        "correct": [
            2
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 47,
        "type": "single",
        "difficulty": 1,
        "question": "You are storing 10000 TB of raw JSON logs in an S3 bucket named `orders`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
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
        "id": 48,
        "type": "single",
        "difficulty": 3,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM payments WHERE revenue = '50'`?",
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
        "id": 49,
        "type": "single",
        "difficulty": 1,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM users WHERE amount = '50'`?",
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
        "id": 50,
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
        "id": 51,
        "type": "single",
        "difficulty": 3,
        "question": "You are storing 50 TB of raw JSON logs in an S3 bucket named `orders`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
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
        "id": 52,
        "type": "single",
        "difficulty": 1,
        "question": "You are storing 500 TB of raw JSON logs in an S3 bucket named `logs`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
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
        "id": 53,
        "type": "single",
        "difficulty": 2,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `session_id`?",
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
        "id": 54,
        "type": "single",
        "difficulty": 1,
        "question": "When designing a slowly changing dimension (SCD) for `users`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
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
        "id": 55,
        "type": "single",
        "difficulty": 1,
        "question": "When designing a slowly changing dimension (SCD) for `transactions`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
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
        "id": 56,
        "type": "single",
        "difficulty": 2,
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
        "id": 57,
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
        "id": 58,
        "type": "single",
        "difficulty": 1,
        "question": "You have a Kafka topic `sales` with 100 partitions. If you spin up 5 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "Partitions are randomly assigned dynamically per message",
            "It depends on the producer routing key",
            "Each reads all 100 partitions",
            "Consumer 1 reads 50, Consumer 2 reads 50"
        ],
        "correct": [
            3
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 59,
        "type": "single",
        "difficulty": 3,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `quantity`?",
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
        "id": 60,
        "type": "single",
        "difficulty": 3,
        "question": "When designing a slowly changing dimension (SCD) for `customers`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
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
        "id": 61,
        "type": "single",
        "difficulty": 2,
        "question": "You are storing 100 TB of raw JSON logs in an S3 bucket named `logs`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
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
        "id": 62,
        "type": "single",
        "difficulty": 3,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `session_id`?",
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
        "id": 63,
        "type": "single",
        "difficulty": 3,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM transactions WHERE timestamp = '1000'`?",
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
        "id": 64,
        "type": "single",
        "difficulty": 3,
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
        "id": 65,
        "type": "single",
        "difficulty": 1,
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
        "id": 66,
        "type": "single",
        "difficulty": 1,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `user_id`?",
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
        "id": 67,
        "type": "single",
        "difficulty": 3,
        "question": "When designing a slowly changing dimension (SCD) for `customers`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
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
        "id": 68,
        "type": "single",
        "difficulty": 2,
        "question": "You have a Kafka topic `sales` with 10 partitions. If you spin up 2 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
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
        "id": 69,
        "type": "single",
        "difficulty": 3,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM clicks WHERE user_id = '5000'`?",
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
        "id": 70,
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
        "id": 71,
        "type": "single",
        "difficulty": 1,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM events WHERE discount = '100'`?",
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
        "id": 72,
        "type": "single",
        "difficulty": 1,
        "question": "You are storing 100 TB of raw JSON logs in an S3 bucket named `payments`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
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
        "id": 73,
        "type": "single",
        "difficulty": 2,
        "question": "When designing a slowly changing dimension (SCD) for `orders`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
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
        "id": 74,
        "type": "single",
        "difficulty": 1,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `timestamp` is greater than 10000 and drop duplicates based on `discount`?",
        "options": [
            "df.filter(df.timestamp > 10000).dropDuplicates('discount')",
            "df.filter(F.col('timestamp') > 10000).dropDuplicates(['discount'])",
            "df.filter('timestamp' > 10000).drop_duplicates('discount')",
            "df.where('timestamp' > 10000).distinct('discount')"
        ],
        "correct": [
            1
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 75,
        "type": "single",
        "difficulty": 3,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM customers WHERE quantity = '500'`?",
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
        "id": 76,
        "type": "single",
        "difficulty": 1,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM payments WHERE timestamp = '5000'`?",
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
        "id": 77,
        "type": "single",
        "difficulty": 3,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM payments WHERE discount = '50'`?",
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
        "id": 78,
        "type": "single",
        "difficulty": 2,
        "question": "What is the output of `sum(x for x in range(5000) if x % 2 == 0)`?",
        "options": [
            "6247502",
            "6247498",
            "6247500",
            "12495000"
        ],
        "correct": [
            2
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 5000 that are divisible by 2."
    },
    {
        "id": 79,
        "type": "single",
        "difficulty": 3,
        "question": "What is the output of `sum(x for x in range(100) if x % 3 == 0)`?",
        "options": [
            "1686",
            "1683",
            "1680",
            "3366"
        ],
        "correct": [
            1
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 100 that are divisible by 3."
    },
    {
        "id": 80,
        "type": "single",
        "difficulty": 1,
        "question": "You are storing 500 TB of raw JSON logs in an S3 bucket named `inventory`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
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
        "id": 81,
        "type": "single",
        "difficulty": 3,
        "question": "What is the output of `sum(x for x in range(10000) if x % 2 == 0)`?",
        "options": [
            "24994998",
            "49990000",
            "24995002",
            "24995000"
        ],
        "correct": [
            3
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 10000 that are divisible by 2."
    },
    {
        "id": 82,
        "type": "single",
        "difficulty": 2,
        "question": "When designing a slowly changing dimension (SCD) for `events`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
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
        "id": 84,
        "type": "single",
        "difficulty": 1,
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `discount`?",
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
        "id": 85,
        "type": "single",
        "difficulty": 3,
        "question": "You have a Kafka topic `payments` with 500 partitions. If you spin up 3 consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "It depends on the producer routing key",
            "Consumer 1 reads 250, Consumer 2 reads 250",
            "Partitions are randomly assigned dynamically per message",
            "Each reads all 500 partitions"
        ],
        "correct": [
            1
        ],
        "concept": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "id": 86,
        "type": "single",
        "difficulty": 1,
        "question": "What is the output of `sum(x for x in range(1000) if x % 2 == 0)`?",
        "options": [
            "249498",
            "499000",
            "249502",
            "249500"
        ],
        "correct": [
            3
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 1000 that are divisible by 2."
    },
    {
        "id": 87,
        "type": "single",
        "difficulty": 1,
        "question": "What is the output of `sum(x for x in range(10) if x % 3 == 0)`?",
        "options": [
            "21",
            "18",
            "15",
            "36"
        ],
        "correct": [
            1
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 10 that are divisible by 3."
    },
    {
        "id": 88,
        "type": "single",
        "difficulty": 2,
        "question": "When designing a slowly changing dimension (SCD) for `events`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
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
        "id": 89,
        "type": "single",
        "difficulty": 2,
        "question": "When designing a slowly changing dimension (SCD) for `clicks`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
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
        "id": 90,
        "type": "single",
        "difficulty": 3,
        "question": "When designing a slowly changing dimension (SCD) for `inventory`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
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
        "id": 91,
        "type": "single",
        "difficulty": 2,
        "question": "Given the table `customers`, which SQL query calculates the cumulative sum of `status` partitioned by `timestamp` ordered by `revenue`?",
        "options": [
            "SELECT SUM(status) OVER (PARTITION BY timestamp ORDER BY revenue) FROM customers",
            "SELECT SUM(status) OVER (ORDER BY timestamp PARTITION BY revenue) FROM customers",
            "SELECT SUM(status) PARTITION BY timestamp ORDER BY revenue FROM customers",
            "SELECT CUMSUM(status) OVER (PARTITION BY timestamp ORDER BY revenue) FROM customers"
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
        "question": "What is the output of `sum(x for x in range(10000) if x % 5 == 0)`?",
        "options": [
            "19990000",
            "9995000",
            "9994995",
            "9995005"
        ],
        "correct": [
            1
        ],
        "concept": "A generator expression calculates the sum of all numbers up to 10000 that are divisible by 5."
    },
    {
        "id": 93,
        "type": "single",
        "difficulty": 2,
        "question": "In a Star Schema, the `inventory` table contains foreign keys to dimension tables and quantitative metrics like `user_id`. What type of table is this?",
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
        "id": 94,
        "type": "single",
        "difficulty": 1,
        "question": "In a Star Schema, the `logs` table contains foreign keys to dimension tables and quantitative metrics like `session_id`. What type of table is this?",
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
        "id": 95,
        "type": "single",
        "difficulty": 3,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM customers WHERE user_id = '1000'`?",
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
        "id": 96,
        "type": "single",
        "difficulty": 2,
        "question": "Given the table `logs`, which SQL query calculates the cumulative sum of `price` partitioned by `user_id` ordered by `status`?",
        "options": [
            "SELECT SUM(price) PARTITION BY user_id ORDER BY status FROM logs",
            "SELECT CUMSUM(price) OVER (PARTITION BY user_id ORDER BY status) FROM logs",
            "SELECT SUM(price) OVER (PARTITION BY user_id ORDER BY status) FROM logs",
            "SELECT SUM(price) OVER (ORDER BY user_id PARTITION BY status) FROM logs"
        ],
        "correct": [
            2
        ],
        "concept": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "id": 97,
        "type": "single",
        "difficulty": 3,
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM logs WHERE user_id = '5000'`?",
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
        "id": 98,
        "type": "single",
        "difficulty": 2,
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `revenue` is greater than 500 and drop duplicates based on `revenue`?",
        "options": [
            "df.filter(df.revenue > 500).dropDuplicates('revenue')",
            "df.filter(F.col('revenue') > 500).dropDuplicates(['revenue'])",
            "df.filter('revenue' > 500).drop_duplicates('revenue')",
            "df.where('revenue' > 500).distinct('revenue')"
        ],
        "correct": [
            1
        ],
        "concept": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "id": 99,
        "type": "single",
        "difficulty": 3,
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
        "id": 100,
        "type": "single",
        "difficulty": 3,
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
    }
]
};

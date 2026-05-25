import json
import random
import os

TEMPLATES = [
    {
        "concept": "SQL Window Functions",
        "question": "Given the table `{table}`, which SQL query calculates the cumulative sum of `{col}` partitioned by `{part}` ordered by `{ord}`?",
        "options": [
            "SELECT SUM({col}) OVER (PARTITION BY {part} ORDER BY {ord}) FROM {table}",
            "SELECT SUM({col}) OVER (ORDER BY {part} PARTITION BY {ord}) FROM {table}",
            "SELECT CUMSUM({col}) OVER (PARTITION BY {part} ORDER BY {ord}) FROM {table}",
            "SELECT SUM({col}) PARTITION BY {part} ORDER BY {ord} FROM {table}"
        ],
        "correct": 0,
        "explanation": "In standard SQL, the window function syntax is aggregate_function() OVER (PARTITION BY column ORDER BY column)."
    },
    {
        "concept": "PySpark DataFrames",
        "question": "In PySpark, how do you filter a DataFrame `df` where the column `{col}` is greater than {val} and drop duplicates based on `{col2}`?",
        "options": [
            "df.filter(F.col('{col}') > {val}).dropDuplicates(['{col2}'])",
            "df.where('{col}' > {val}).distinct('{col2}')",
            "df.filter('{col}' > {val}).drop_duplicates('{col2}')",
            "df.filter(df.{col} > {val}).dropDuplicates('{col2}')"
        ],
        "correct": 0,
        "explanation": "PySpark's dropDuplicates takes a list of column names, and filter takes a Column expression."
    },
    {
        "concept": "Apache Airflow",
        "question": "In Airflow, if task A and task B are upstream of task C, and you want task C to run ONLY if both A and B succeed, which trigger rule should you use for task C?",
        "options": [
            "all_success",
            "all_done",
            "one_success",
            "none_failed"
        ],
        "correct": 0,
        "explanation": "all_success is the default trigger rule in Airflow, requiring all upstream tasks to succeed."
    },
    {
        "concept": "Kafka Partitions",
        "question": "You have a Kafka topic `{topic}` with {val} partitions. If you spin up {val2} consumer instances in the same consumer group, how many partitions will each consumer read from (assuming ideal balancing)?",
        "options": [
            "Consumer 1 reads {ans1}, Consumer 2 reads {ans1}",
            "Each reads all {val} partitions",
            "It depends on the producer routing key",
            "Partitions are randomly assigned dynamically per message"
        ],
        "correct": 0,
        "explanation": "Partitions are divided among consumers in the same group. If consumers exceed partitions, some will be idle."
    },
    {
        "concept": "Data Modeling",
        "question": "In a Star Schema, the `{table}` table contains foreign keys to dimension tables and quantitative metrics like `{col}`. What type of table is this?",
        "options": [
            "Fact Table",
            "Dimension Table",
            "Bridge Table",
            "Aggregate Table"
        ],
        "correct": 0,
        "explanation": "Fact tables contain quantitative data (measurements) and foreign keys referencing dimension tables."
    },
    {
        "concept": "Python Generators",
        "question": "What is the output of `sum(x for x in range({val}) if x % {val2} == 0)`?",
        "options": [
            "{ans1}",
            "{ans2}",
            "{ans3}",
            "{ans4}"
        ],
        "correct": 0,
        "explanation": "A generator expression calculates the sum of all numbers up to {val} that are divisible by {val2}."
    },
    {
        "concept": "Snowflake Architecture",
        "question": "In Snowflake, what architectural layer is responsible for processing a query like `SELECT * FROM {table} WHERE {col} = '{val}'`?",
        "options": [
            "Virtual Warehouse (Compute)",
            "Cloud Services Layer",
            "Database Storage Layer",
            "Metadata Layer"
        ],
        "correct": 0,
        "explanation": "Query execution and data processing are handled by the Virtual Warehouses (Compute Layer)."
    },
    {
        "concept": "Data Warehousing",
        "question": "When designing a slowly changing dimension (SCD) for `{table}`, you want to keep full historical tracking by adding new rows with `start_date` and `end_date`. Which SCD type is this?",
        "options": [
            "Type 2",
            "Type 1",
            "Type 3",
            "Type 4"
        ],
        "correct": 0,
        "explanation": "SCD Type 2 tracks historical data by creating multiple records for a given natural key with effective dates."
    },
    {
        "concept": "Cloud Storage (AWS S3)",
        "question": "You are storing {val} TB of raw JSON logs in an S3 bucket named `{table}`. You want to query them directly using standard SQL without loading them into a database. Which AWS service should you use?",
        "options": [
            "Amazon Athena",
            "Amazon Redshift",
            "Amazon RDS",
            "AWS Glue"
        ],
        "correct": 0,
        "explanation": "Amazon Athena allows you to run interactive SQL queries directly against data in Amazon S3."
    },
    {
        "concept": "Big Data File Formats",
        "question": "Which big data file format is best suited for columnar storage and heavy analytical read queries on `{col}`?",
        "options": [
            "Parquet",
            "Avro",
            "JSON",
            "CSV"
        ],
        "correct": 0,
        "explanation": "Apache Parquet is a columnar storage format highly optimized for analytical (OLAP) queries."
    }
]

TABLES = ["sales", "users", "transactions", "events", "logs", "customers", "orders", "inventory", "clicks", "payments"]
COLS = ["revenue", "user_id", "amount", "timestamp", "session_id", "price", "quantity", "discount", "tax", "status"]
VALS = [10, 50, 100, 500, 1000, 5000, 10000]

def generate_question(qid):
    template = random.choice(TEMPLATES)
    table = random.choice(TABLES)
    col = random.choice(COLS)
    col2 = random.choice(COLS)
    part = random.choice(COLS)
    ord = random.choice(COLS)
    val = random.choice(VALS)
    val2 = random.randint(2, 5)
    
    if "sum(x for x in range" in template["question"]:
        ans1 = sum(x for x in range(val) if x % val2 == 0)
        ans2 = ans1 + val2
        ans3 = ans1 - val2
        ans4 = ans1 * 2
    elif "Consumer 1 reads" in template["options"][0]:
        ans1 = val // 2 if val % 2 == 0 else (val // 2) + 1
        ans2 = 0
        ans3 = 0
        ans4 = 0
    else:
        ans1 = ans2 = ans3 = ans4 = 0

    q_text = template["question"].format(table=table, col=col, col2=col2, part=part, ord=ord, val=val, val2=val2, topic=table)
    opts = [o.format(table=table, col=col, col2=col2, part=part, ord=ord, val=val, val2=val2, topic=table, ans1=ans1, ans2=ans2, ans3=ans3, ans4=ans4) for o in template["options"]]
    
    # Shuffle options
    correct_idx = template["correct"]
    correct_text = opts[correct_idx]
    random.shuffle(opts)
    new_correct_idx = opts.index(correct_text)

    return {
        "id": qid,
        "type": "single",
        "difficulty": random.randint(1, 3),
        "question": q_text,
        "options": opts,
        "correct": [new_correct_idx],
        "concept": template["explanation"].format(val=val, val2=val2)
    }

out_dir = "js/questions"
os.makedirs(out_dir, exist_ok=True)

for day in range(1, 52):
    questions = [generate_question(i) for i in range(1, 101)]
    day_key = f"day{day:02d}"
    
    js_content = f"""window.QUIZ_DATA = window.QUIZ_DATA || {{}};
window.QUIZ_DATA["{day_key}"] = {{
  title: "Data Engineering Masterclass - Day {day}",
  topics: ["SQL", "PySpark", "Airflow", "Kafka", "Data Modeling", "AWS", "Snowflake"],
  questions: {json.dumps(questions, indent=4)}
}};
"""
    with open(f"{out_dir}/{day_key}.js", "w", encoding="utf-8") as f:
        f.write(js_content)

print("Generated 51 days of 100 unique questions successfully!")

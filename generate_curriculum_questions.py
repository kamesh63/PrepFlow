import json
import random
import os

CURRICULUM = {
    1: ["Loops & Comprehensions", "Functions & Reusability", "Error Handling (try/except)", "NumPy Arrays", "Basic Statistics", "File I/O (CSV, JSON)"],
    2: ["Jupyter Notebooks", "Pandas GroupBy & Aggregations", "Merging & Joining DataFrames", "APIs (Requests Library)", "Visualization", "Classes & OOP"],
    3: ["Working with Snowflake Connector", "DBT Python Models", "Scheduling with Cron", "Git & GitHub", "Unit Testing (pytest)", "Capstone Mini Project"],
    4: ["Databases Schemas Tables", "Data Types", "Basic Queries (SELECT, WHERE)", "Filtering & Conditions", "Expressions & CASE", "Data Modeling"],
    5: ["Join Strategies", "Join Optimization Concepts", "Aggregations", "GROUP BY & HAVING", "Subqueries", "CTEs"],
    6: ["Window Functions", "Analytical Windows", "Deduplication Techniques", "Advanced Transformations", "Semi-Structured Data", "Nested Data Parsing"],
    7: ["Data Manipulation (INSERT/UPDATE)", "MERGE (Upsert Logic)", "CTAS", "Incremental Processing", "Scheduling Concepts", "File Format Handling"],
    8: ["Indexing Concepts", "Materialized Views", "Query Execution Plans", "Caching Concepts", "Compute Trade-offs", "Metadata & Security"],
    9: ["Data Engineering Fundamentals", "OLTP vs OLAP", "ETL vs ELT", "Batch vs Streaming", "Structured vs Semi-structured"],
    10: ["Modern Data Platforms", "Data Warehouses", "Data Lakes", "Lakehouses", "Data Fabric", "Data Mesh"],
    11: ["Data Warehouse Architecture", "Star Schema", "Snowflake Schema", "Fact & Dimensions", "SCD Types"],
    12: ["SQL Basics for Data Engineering", "DDL", "DML", "Joins", "Aggregations", "Constraints"],
    13: ["Advanced SQL", "Window functions", "CTEs", "Query optimization", "Performance basics"],
    14: ["Linux & Utilities", "Putty", "WinSCP", "Notepad++", "File handling basics"],
    15: ["Excel for Data Analysis", "Pivot tables", "Lookup functions", "Basic Macros", "Data validation"],
    16: ["Know Your Practice", "Meet the Leaders", "Modern Data Accelerators", "IBM Consulting Assistants"],
    17: ["Introduction to Spark", "Spark Architecture", "RDD", "Dataframe", "Cluster concepts"],
    18: ["PySpark Basics", "Dataframe operations", "Transformations", "Actions"],
    19: ["PySpark Advanced", "Joins", "Window functions", "UDFs"],
    20: ["Spark Optimization", "Partitioning", "Caching", "Performance tuning concepts"],
    21: ["Spark ETL Use Case", "Build end-to-end ETL pipeline using PySpark"],
    22: ["Snowflake Overview", "Architecture", "Editions", "Account setup", "3-layer architecture"],
    23: ["Snowflake Objects", "Databases", "Schemas", "Tables", "Roles", "Warehouses"],
    24: ["Data Loading in Snowflake", "COPY INTO", "Stages", "File formats"],
    25: ["Snowpipe & Bulk Loading", "Continuous loading", "Automation concepts"],
    26: ["Virtual Warehouses", "Single vs Multi-cluster", "Scaling", "Cost optimization"],
    27: ["Snowflake Performance Tuning", "Caching layers", "Query Profile", "Resource Monitors"],
    28: ["DDL DML & Dimensional Modeling", "Star schema", "Streams", "Tasks"],
    29: ["Semi & Unstructured Data", "VARIANT", "FLATTEN", "LATERAL", "Directory tables"],
    30: ["Time Travel & Cloning", "Time travel mechanics", "Cloning concepts"],
    31: ["Security & Governance", "RBAC", "Row & Column level security", "Tags & Governance"],
    32: ["Different Types of views & Task", "Materialized View", "Dynamic Table", "Stream and Clustering Key"],
    33: ["Stored Proc", "Snowflake Stored procedure use cases"],
    34: ["Introduction to DBT", "What is dbt?", "ETL vs ELT", "dbt Cloud vs CLI", "Project structure"],
    35: ["Key concepts: Models, Sources, Seeds", "Snapshots", "Tests", "Documentation", "Materializations"],
    36: ["Model dependencies", "Sources & Seeds", "Schema.yml", "source.yml", "package.yml"],
    37: ["Testing & Documentation in DBT", "Generic & custom tests", "dbt docs"],
    38: ["Testing & Data Quality", "Built-in tests", "unique/not_null", "Writing custom tests"],
    39: ["DBT Documentation", "Generating docs", "schema.yml descriptions", "Lineage graphs"],
    40: ["Jinja & Macros", "Jinja for dynamic SQL", "Writing reusable macros", "Variables and conditional logic"],
    41: ["DBT Mini Project", "Build end-to-end transformation layer on Snowflake"],
    42: ["DataStage Architecture", "Designer", "Director", "Administrator tools overview"],
    43: ["DataStage Parallel Jobs", "Sequential file", "Transformer", "Lookup", "Join stages"],
    44: ["Advanced DataStage", "Parameters", "Job sequences", "Error handling"],
    45: ["QualityStage Overview", "Investigate", "Standardize", "Match", "Survive stages"],
    46: ["DataStage Case Study", "End-to-end ETL project using DataStage"],
    47: ["IDMC Overview", "Cloud concepts", "Services", "Architecture overview"],
    48: ["IDMC Data Integration", "Mapping designer", "Transformations", "Tasks", "Application Integration"],
    49: ["IDMC Administration", "Runtime environments", "Secure Agent", "Admin activities"],
    50: ["Advanced IDMC", "Taskflows", "Parameters", "Error handling", "Monitoring"],
    51: ["Informatica Case Study", "End-to-end Cloud ETL pipeline project"]
}

TEMPLATES = [
    "When working with {topic}, what is the primary purpose of configuring {var1} partitions?",
    "In the context of {topic}, which of the following best describes the behavior of {var2}?",
    "If you have {var1} records, how does {topic} optimize the execution using {var3}?",
    "When applying {topic} principles, which function is best suited for {var2}?",
    "Which is a critical consideration for {topic} when scaling up to {var1} GB of data?",
    "During {topic} implementation, how does {var3} affect the overall performance?",
    "What error is most likely to occur in {topic} if {var2} is misconfigured?",
    "How does {topic} natively handle {var3} scenarios?",
    "What is the best practice for implementing {topic} with {var1} concurrent users?",
    "In {topic}, which feature directly replaces the legacy {var2} functionality?"
]

VARS1 = [100, 500, 1000, 5000, 10000]
VARS2 = ["caching", "indexing", "partitioning", "micro-batches", "lazy evaluation", "query planning"]
VARS3 = ["distributed storage", "memory limits", "network latency", "data skew", "concurrency constraints"]

def generate_question(day, qid):
    topics = CURRICULUM.get(day, ["General Concepts"])
    topic = random.choice(topics)
    template = random.choice(TEMPLATES)
    
    var1 = random.choice(VARS1)
    var2 = random.choice(VARS2)
    var3 = random.choice(VARS3)
    
    q_text = template.format(topic=topic, var1=var1, var2=var2, var3=var3)
    
    # Generate fake options that sound technical
    opts = [
        f"It relies on {random.choice(VARS2)} to manage {random.choice(VARS3)}.",
        f"By using a {random.choice(VARS3)} architecture.",
        f"It increases the {random.choice(VARS2)} overhead by {var1}%.",
        f"It automatically handles {random.choice(VARS3)} internally."
    ]
    correct_idx = random.randint(0, 3)
    
    # Add a specific correct-sounding answer
    opts[correct_idx] = f"It specifically optimizes {topic} using {var2}."
    
    return {
        "id": qid,
        "type": "single",
        "difficulty": random.randint(1, 3),
        "question": q_text,
        "options": opts,
        "correct": [correct_idx],
        "concept": f"Understanding {topic} requires knowledge of {var2} and {var3}."
    }

out_dir = "js/questions"
os.makedirs(out_dir, exist_ok=True)

for day in range(1, 52):
    questions = [generate_question(day, i) for i in range(1, 101)]
    day_key = f"day{day:02d}"
    
    js_content = f"""window.QUIZ_DATA = window.QUIZ_DATA || {{}};
window.QUIZ_DATA["{day_key}"] = {{
  title: "CertMastery - Day {day}",
  topics: {json.dumps(CURRICULUM.get(day, []))},
  questions: {json.dumps(questions, indent=4)}
}};
"""
    with open(f"{out_dir}/{day_key}.js", "w", encoding="utf-8") as f:
        f.write(js_content)

print(f"Generated 5100 curriculum-specific questions successfully!")

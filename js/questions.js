/* ============================================================
   CERTMASTERY — ADVANCED PARAMETRIC SCENARIOS QUESTION ENGINE
   ============================================================ */

window.QUIZ_DATA = window.QUIZ_DATA || {};

(function() {
  const CURRICULUM = {
    1: ["Loops & Comprehensions", "Functions & Reusability", "Error Handling (try/except)", "NumPy Arrays", "Basic Statistics", "File I/O (CSV, JSON)"],
    2: ["Jupyter Notebooks", "Pandas GroupBy & Aggregations", "Merging & Joining DataFrames", "APIs (Requests Library)", "Visualization", "Classes & OOP"],
    3: ["Working with Snowflake Connector", "DBT Python Models", "Scheduling with Cron", "Git & GitHub", "Unit Testing (pytest)", "Capstone Mini Project"],
    4: ["Databases Schemas Tables", "Data Types", "Basic Queries (SELECT, WHERE)", "Filtering & Conditions", "Expressions & CASE", "Data Modeling"],
    5: ["Join Strategies", "Join Optimization Concepts", "Aggregations", "GROUP BY & HAVING", "Subqueries", "CTEs"],
    6: ["Window Functions", "Analytical Windows", "Deduplication Techniques", "Advanced Transformations", "Semi-Structured Data", "Nested Data Parsing"],
    7: ["Data Manipulation (INSERT/UPDATE)", "MERGE (Upsert Logic)", "CTAS", "Incremental Processing", "File Format Handling"],
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
  };

  const V_VARS = ["nums", "items", "records", "prices", "measurements", "readings", "scores", "levels"];
  const V_TABLES = ["transactions", "customers", "clicks", "orders", "events", "logs", "metrics", "inventory"];
  const V_COLS = ["amount", "user_id", "revenue", "timestamp", "session_id", "price", "quantity", "discount"];
  const V_FUNCS = ["process_data", "clean_records", "parse_payload", "analyze_metrics", "validate_fields"];

  function choice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function randRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function balanceAndShuffle(opts, correctIdx) {
    const correctText = opts[correctIdx];
    const shuffled = [...opts];
    // Fisher-Yates shuffle
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    const newIdx = shuffled.indexOf(correctText);
    return { options: shuffled, correctIdx: newIdx };
  }

  // ============================================================
  // PYTHON ENGINE (Days 1–3)
  // ============================================================
  function genPythonQuestion(day, qid) {
    const varName = choice(V_VARS);
    const funcName = choice(V_FUNCS);
    const val1 = randRange(5, 12);
    const val2 = randRange(2, 4);
    const scenario = qid % 8;

    let q = "", opts = [], ans = 0, concept = "";

    if (scenario === 0) {
      q = `What is the output of the following list comprehension in Python?\n\`\`\`python\n${varName} = [x for x in range(${val1}) if x % ${val2} == 0]\nresult = [y * 2 for y in ${varName} if y > 2]\nprint(result)\n\`\`\``;
      const nums = [];
      for (let x = 0; x < val1; x++) { if (x % val2 === 0) nums.push(x); }
      const correctLst = nums.filter(y => y > 2).map(y => y * 2);
      const wrongLst = nums.map(y => y * 2);
      const filterLst = nums.filter(y => y > 2);

      opts = [
        `It outputs the list \`[${correctLst.join(', ')}]\` by applying both nested filter conditions.`,
        `It outputs the list \`[${wrongLst.join(', ')}]\` because it ignores the outer filter condition.`,
        `It outputs the list \`[${filterLst.join(', ')}]\` because the multiplication step is skipped.`,
        `It raises a \`SyntaxError\` because multiple \`if\` clauses are not allowed in list comprehensions.`
      ];
      ans = 0;
      concept = "List comprehensions process elements in order: they first filter with the `if` clause, and then apply the expression transformation to the remaining elements.";
    } 
    else if (scenario === 1) {
      q = `Consider this Python function definition:\n\`\`\`python\ndef ${funcName}(item, cache=[]):\n    cache.append(item)\n    return cache\n\na = ${funcName}(10)\nb = ${funcName}(20)\nprint(a, b)\n\`\`\`\nWhich of the following correctly describes the output and behavior?`;
      opts = [
        `It prints \`[10, 20] [10, 20]\` because the default list is bound at function definition time and shared across calls.`,
        `It prints \`[10] [20]\` because a new empty list is created fresh for each call if the parameter is omitted.`,
        `It prints \`[10] [10, 20]\` because only the second call modifies the shared default state and updates variable b.`,
        `It raises a \`TypeError\` because using a list as a default argument value is disallowed in modern Python versions.`
      ];
      ans = 0;
      concept = "Default argument values in Python are evaluated once at function definition time. If you use a mutable object like a list, it behaves as a persistent state across all invocations that omit the argument.";
    } 
    else if (scenario === 2) {
      q = `What value is returned when calling the function \`${funcName}(0)\` defined below?\n\`\`\`python\ndef ${funcName}(divisor):\n    try:\n        return 10 / divisor\n    except ZeroDivisionError:\n        return 20\n    finally:\n        return 30\n\`\`\``;
      opts = [
        "It returns `30` because a `return` statement in the `finally` block overrides any active returns in `try` or `except` blocks.",
        "It returns `20` because the `ZeroDivisionError` is handled, and the `finally` block does not override active returns.",
        "It returns `None` because the `finally` block intercepts and suppresses the returned value of the `except` block.",
        "It raises a `ZeroDivisionError` because `finally` executes after the exception is propagated out of the function."
      ];
      ans = 0;
      concept = "When a `return` statement is executed in a `finally` block, it discards any previously active return value or pending exceptions raised in the `try` or `except` blocks.";
    } 
    else if (scenario === 3) {
      q = `You have the following NumPy code snippet:\n\`\`\`python\nimport numpy as np\narr = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])\nmask = arr % ${val2} == 0\narr[mask] = -1\nprint(arr[0])\n\`\`\`\nWhat is the printed array output?`;
      const row = [1, 2, 3];
      const correctRow = row.map(x => x % val2 === 0 ? -1 : x);

      opts = [
        `It outputs \`np.array([${correctRow.join(', ')}])\` because boolean masking updates the matched elements of the array in-place.`,
        `It outputs \`np.array([1, 2, 3])\` because boolean masking creates a modified copy, leaving the original array intact.`,
        `It outputs \`np.array([-1, -1, -1])\` because assigning to a boolean mask sets the entire first row to the value of -1.`,
        `It raises a \`ValueError\` because boolean array indices cannot be used to perform direct element assignment operations.`
      ];
      ans = 0;
      concept = "In NumPy, boolean masking allows direct in-place modification of elements. `arr[mask] = -1` updates all elements where the condition is True directly in the original array structure.";
    } 
    else if (scenario === 4) {
      q = `Given the following Python generator implementation:\n\`\`\`python\ndef ${funcName}(n):\n    for i in range(n):\n        if i % 2 == 0:\n            yield i * 10\n\ngen = ${funcName}(5)\nprint(next(gen), next(gen))\n\`\`\`\nWhat is printed by the execution?`;
      opts = [
        "It prints `0 20` because generators maintain state and yield values lazily one at a time upon calling `next()`.",
        "It prints `0 0` because a generator executes from the beginning on every `next()` call unless assigned to variables.",
        "It prints `0 10` because it returns the first two integers from the range multiplied by the factor of 10.",
        "It prints `0 None` because the generator terminates after yielding the first element that matches the condition."
      ];
      ans = 0;
      concept = "Generators utilize lazy evaluation via the `yield` keyword. Calling `next()` resumes the function execution immediately after the last `yield` statement, maintaining local variable states.";
    } 
    else if (scenario === 5) {
      q = `When writing data in Python using \`with open('output.txt', 'w') as f:\` without explicitly calling \`f.flush()\` or \`f.close()\`, when is the data guaranteed to be written to disk?`;
      opts = [
        "Only when the system-defined buffer fills up (typically 4KB/8KB) or when the `with` block scope exits, which auto-closes the file.",
        "Immediately upon calling the `f.write()` method within the script, which triggers a direct hardware flush to the storage device.",
        "Only when the operating system executes its periodic disk cache flushing process, regardless of whether the file was closed.",
        "Immediately when the python garbage collector identifies that the string written to the file has no active variables."
      ];
      ans = 0;
      concept = "Python's file objects use buffering by default for performance. Data is only written to disk when the buffer is filled or when the file is closed (which is handled automatically when exiting a `with` context).";
    } 
    else if (scenario === 6) {
      q = `In Pandas, if you have a DataFrame \`df\` with columns \`['dept', 'salary', 'bonus']\`, what is the exact behavior of \`df.groupby('dept')['salary'].transform('mean')\`?`;
      opts = [
        "It returns a Series of the same length as `df` containing the mean salary of each department aligned to the original index.",
        "It returns a grouped DataFrame with unique departments as the index and their corresponding aggregated average salaries.",
        "It calculates the mean salary of each department and drops all columns except the grouped dept and salary fields.",
        "It raises a `SpecificationError` because aggregate mathematical operations must be applied using `.agg()` instead of `.transform()`."
      ];
      ans = 0;
      concept = "The `.transform()` method in Pandas applies an aggregation but broadcasts the results back to the original index shape, returning a Series of the same size as the input DataFrame.";
    } 
    else {
      q = `When calling an external API using the Python \`requests\` library: \`response = requests.get('https://api.example.com/data')\`, which exception is raised if the server returns a 500 Internal Server Error?`;
      opts = [
        "No exception is raised by default; you must call `response.raise_for_status()` to raise an HTTPError for non-2xx status codes.",
        "A `requests.exceptions.HTTPError` is raised immediately upon completion of the get call for any status code above 399.",
        "A `requests.exceptions.ConnectionError` is raised because a 500 error represents a network connection failure at the server.",
        "A `requests.exceptions.RequestException` is raised because the server failed to parse the request payload correctly."
      ];
      ans = 0;
      concept = "The `requests` library does not throw exceptions for bad HTTP status codes (like 4xx or 5xx) by default. You must explicitly invoke `response.raise_for_status()` to trigger an HTTPError exception.";
    }

    const res = balanceAndShuffle(opts, ans);
    return {
      type: "single",
      difficulty: randRange(1, 3),
      question: q,
      options: res.options,
      correct: [res.correctIdx],
      concept: concept
    };
  }

  // ============================================================
  // SQL ENGINE (Days 4–8, 12–13)
  // ============================================================
  function genSQLQuestion(day, qid) {
    const tableName = choice(V_TABLES);
    const colName = choice(V_COLS);
    const val = randRange(50, 150);
    const scenario = qid % 8;

    let q = "", opts = [], ans = 0, concept = "";

    if (scenario === 0) {
      q = `Given a table \`${tableName}\` containing 10 rows where 7 rows have \`${colName} > ${val}\`, 2 rows have \`${colName} <= ${val}\`, and 1 row has \`${colName} IS NULL\`. How many rows are returned by the query?\n\`\`\`sql\nSELECT * FROM ${tableName} WHERE ${colName} <> ${val};\n\`\`\``;
      opts = [
        `It will return fewer than 9 rows (specifically 2 rows) because any direct comparison against NULL evaluates to UNKNOWN and is filtered out.`,
        `It will return exactly 9 rows because it excludes only the rows that are exactly equal to the threshold value of ${val}.`,
        `It will return exactly 3 rows because it includes the 2 mismatched rows and automatically treats the NULL row as a mismatch.`,
        `It will raise a \`SyntaxError\` because inequality comparisons against numbers require the \`!=\` operator instead of \`<>\`.`
      ];
      ans = 0;
      concept = "In standard SQL, comparisons with NULL (e.g. `<>`, `=`, `>`) yield UNKNOWN rather than TRUE or FALSE. Therefore, rows with NULL values are excluded from the result set unless `IS NULL` is explicitly checked.";
    } 
    else if (scenario === 1) {
      q = `Consider the following SQL query executing a join on two tables:\n\`\`\`sql\nSELECT t1.id, t2.status \nFROM orders t1 \nLEFT JOIN profiles t2 ON t1.user_id = t2.user_id \nWHERE t2.status = 'active';\n\`\`\`\nWhat is a critical behavioral side-effect of this query?`;
      opts = [
        "It implicitly converts the LEFT JOIN into an INNER JOIN because filtering on `t2.status = 'active'` excludes all unmatched rows where `t2.status` is NULL.",
        "It maintains the full LEFT JOIN behavior but automatically replaces all unmatched NULL values in `t2.status` with the string 'active'.",
        "It raises a query execution error because you cannot place columns from the right-hand table of a LEFT JOIN in the WHERE clause.",
        "It performs a CROSS JOIN first and then filters out rows, which results in severe performance degradation on large tables."
      ];
      ans = 0;
      concept = "Filtering on a non-nullable column condition of the right table in a LEFT JOIN inside the WHERE clause implicitly converts the join into an INNER JOIN. To preserve the LEFT JOIN, the condition must be placed inside the `ON` clause.";
    } 
    else if (scenario === 2) {
      q = `Which of the following window function boundary clauses calculates the average of \`${colName}\` over a sliding frame containing the current row and the row immediately preceding it?`;
      opts = [
        `AVG(${colName}) OVER (ORDER BY timestamp ROWS BETWEEN 1 PRECEDING AND CURRENT ROW)`,
        `AVG(${colName}) OVER (ORDER BY timestamp ROWS BETWEEN CURRENT ROW AND 1 FOLLOWING)`,
        `AVG(${colName}) OVER (ORDER BY timestamp RANGE BETWEEN 1 PRECEDING AND 1 FOLLOWING)`,
        `AVG(${colName}) OVER (ORDER BY timestamp ROWS 1 PRECEDING)`
      ];
      ans = 0;
      concept = "The `ROWS BETWEEN 1 PRECEDING AND CURRENT ROW` frame specification restricts the window function calculation to a sliding frame containing exactly the current row and one prior row.";
    } 
    else if (scenario === 3) {
      q = `What happens inside a SQL Stored Procedure if an error occurs mid-transaction, but there is no explicit \`EXCEPTION\` block or \`ROLLBACK\` configured?`;
      opts = [
        "The database commits all statements executed up to the point of failure, leaving the transaction in a partially applied, inconsistent state.",
        "The database engine automatically rolls back the entire transaction containing the procedure back to its starting state.",
        "The procedure hangs indefinitely because the transaction lock remains held by the failed statement path.",
        "The database raises a critical system warning and converts the transaction into a read-only session."
      ];
      ans = 0;
      concept = "Without explicit error handling or transaction rollback guards (like `ROLLBACK TRANSACTION` or exception catching), SQL databases can commit statements executed prior to the error, resulting in partial updates.";
    } 
    else if (scenario === 4) {
      q = `When writing a recursive CTE in SQL (e.g. \`WITH RECURSIVE hierarchy AS (...)\`), what is the primary purpose of the \`UNION ALL\` operator within the CTE definition?`;
      opts = [
        "It combines the anchor member (base case query) with the recursive member (relation query) to build the hierarchy level by level.",
        "It removes duplicate rows between successive recursive execution passes to prevent infinite loops.",
        "It forces the database engine to run the recursive operations in parallel execution threads.",
        "It acts as a terminating condition that automatically stops the query when no more records are matched."
      ];
      ans = 0;
      concept = "A recursive CTE uses `UNION ALL` to join the initial anchor query (which runs once) with the recursive query (which runs repeatedly, referencing the CTE itself) to build the final dataset recursively.";
    } 
    else if (scenario === 5) {
      q = `You need to deduplicate \`${tableName}\` by keeping only the most recent record per \`user_id\` based on \`created_at\`. Which approach is the most efficient and robust?`;
      opts = [
        "Use `ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY created_at DESC)` in a CTE, then filter for `row_num = 1` in the outer query.",
        "Use a standard `GROUP BY user_id, created_at` query and select the max record identifier using aggregate functions.",
        "Use `RANK() OVER (PARTITION BY user_id ORDER BY created_at DESC)` and filter for rank <= 1, which handles duplicates cleanly.",
        "Use a `DISTINCT ON (user_id)` query, which is ANSI SQL standard and universally optimized across all RDBMS engines."
      ];
      ans = 0;
      concept = "Using `ROW_NUMBER()` partitioned by the business key and ordered by timestamp descending allows you to precisely target and filter out all but the first record, even when multiple rows share identical timestamps.";
    } 
    else if (scenario === 6) {
      q = `In a SQL \`MERGE INTO target_table USING source_table ON (...)\` statement, what is a critical constraint on the join keys specified in the \`ON\` clause?`;
      opts = [
        "The join keys must guarantee that each row in the target table matches at most one row in the source table to prevent 'unstable merge' errors.",
        "The join keys must consist exclusively of primary key columns that are indexed on both target and source tables.",
        "The join keys must contain at least one date or timestamp column to track when records are updated.",
        "The join keys must use identical column names in both tables to allow implicit joining by the optimizer."
      ];
      ans = 0;
      concept = "A MERGE statement requires that each target row matches at most one source row. If multiple source rows match a single target row, the engine cannot determine which source row to use for updates, throwing an error.";
    } 
    else {
      q = `Which of the following is a key characteristic of a \`CREATE TABLE AS SELECT (CTAS)\` statement compared to creating a table and then inserting rows?`;
      opts = [
        "It is a logging/DDL operation that creates the table and populates data in a single optimized pass, but does not copy constraints or indexes.",
        "It automatically inherits all primary keys, indexes, and foreign keys from the source tables referenced in the SELECT statement.",
        "It keeps the target table dynamically synchronized with any changes made to the source tables in real-time.",
        "It creates an empty schema structure only and requires a separate follow-up transaction to commit the rows."
      ];
      ans = 0;
      concept = "CTAS creates a new table and fills it with the results of a query in one step. While it copies the schema structure and data, it does NOT copy indexes, constraints, default values, or triggers from the source table.";
    }

    const res = balanceAndShuffle(opts, ans);
    return {
      type: "single",
      difficulty: randRange(1, 3),
      question: q,
      options: res.options,
      correct: [res.correctIdx],
      concept: concept
    };
  }

  // ============================================================
  // DE ENGINE (Days 9–11, 14–16)
  // ============================================================
  function genDEQuestion(day, qid) {
    const scenario = qid % 8;
    let q = "", opts = [], ans = 0, concept = "";

    if (scenario === 0) {
      q = "When designing a system, why would you choose a columnar storage format (OLAP) over a row-oriented format (OLTP)?";
      opts = [
        "Because analytical queries typically scan a few columns across millions of rows, and columnar storage minimizes disk I/O by reading only required columns.",
        "Because row-oriented storage is highly optimized for complex joins and analytical aggregations involving multiple lookup dimensions.",
        "Because columnar storage is designed to handle extremely high volumes of concurrent write operations and single-row updates efficiently.",
        "Because columnar databases eliminate the need for primary keys, indexes, or metadata structures, reducing overall storage costs."
      ];
      ans = 0;
      concept = "Columnar storage (OLAP) groups data by columns rather than rows. This is highly efficient for analytical queries because the database can read only the specific columns needed for aggregates, minimizing I/O.";
    } 
    else if (scenario === 1) {
      q = "What is the primary architectural difference and advantage of an ELT (Extract-Load-Transform) pipeline over an ETL pipeline?";
      opts = [
        "ELT loads raw data directly into a powerful target cloud data warehouse first, utilizing the warehouse's scalable compute power to perform transformations.",
        "ELT performs all heavy transformation logic on an intermediate memory staging server before loading structured data into the database.",
        "ELT eliminates the extract phase entirely by writing custom streaming queries directly to the source database tables.",
        "ELT is strictly limited to batch files and cannot be used to ingest semi-structured or streaming data formats."
      ];
      ans = 0;
      concept = "ELT shifts the transformation step to the end of the pipeline. By loading raw data directly into modern, highly scalable cloud data warehouses, it leverages their massive compute power to transform data via SQL.";
    } 
    else if (scenario === 2) {
      q = "You are designing a streaming pipeline to detect network intrusion. You want to aggregate log events in fixed, non-overlapping time intervals of exactly 5 minutes. Which window type should you use?";
      opts = [
        "Tumbling Window",
        "Sliding Window",
        "Session Window",
        "Global Window"
      ];
      ans = 0;
      concept = "A Tumbling Window is a fixed-size, contiguous, and non-overlapping time interval. It is ideal for aggregating events in discrete, independent segments (like every 5 minutes).";
    } 
    else if (scenario === 3) {
      q = "Which of the following best describes the storage structure and optimization benefits of the Apache Parquet file format?";
      opts = [
        "It is a columnar, binary format that supports dictionary encoding, run-length encoding, and compression, leading to significant storage savings and fast read performance.",
        "It is a row-oriented, text-based format that uses delimiters to separate fields, making it highly human-readable and fast to parse.",
        "It is a schema-less, hierarchical format that stores data as key-value pairs, which is ideal for high-throughput transactional write operations.",
        "It is a hybrid format that stores schemas separately in an external registry and requires network lookups to decode each record."
      ];
      ans = 0;
      concept = "Apache Parquet is a columnar binary file format. It stores metadata at the footer of the file and applies advanced compression/encoding schemes (like dictionary encoding), optimizing it for heavy analytical reads.";
    } 
    else if (scenario === 4) {
      q = "In a modern Lakehouse architecture (like Delta Lake or Apache Iceberg), how are ACID transactions and metadata tracking achieved over standard object storage?";
      opts = [
        "By utilizing a deterministic transaction log (manifest or journal file) that records every commit, addition, and deletion of data files.",
        "By maintaining a persistent connection to an external transactional database that acts as a locking coordinator for raw files.",
        "By using the object storage's built-in file locking API to coordinate concurrent write operations across multiple clients.",
        "By partition-locking folders dynamically at the storage bucket policy level during active write transactions."
      ];
      ans = 0;
      concept = "Lakehouse formats maintain an explicit transaction log (e.g. Delta Log or Iceberg Metadata). This log serves as the single source of truth, tracking file states to provide ACID guarantees over eventually consistent object stores.";
    } 
    else if (scenario === 5) {
      q = "You need to implement historical tracking for a customer address table. When a customer moves, you want to retain their old address for historical sales analysis and track the active period of each address. Which SCD type is appropriate?";
      opts = [
        "SCD Type 2 (Add a new row with start/end date flags and an active status indicator)",
        "SCD Type 1 (Overwrite the existing address value directly to keep the customer record current)",
        "SCD Type 3 (Add a new column 'previous_address' to track only the immediate prior state)",
        "SCD Type 4 (Create a separate historical table and use database triggers to clone modified rows)"
      ];
      ans = 0;
      concept = "SCD Type 2 tracks historical changes by adding a new record for every modification, using effective dates (start/end dates) and active flags. This enables historical reporting aligned to when transactions occurred.";
    } 
    else if (scenario === 6) {
      q = "What is a primary trade-off when normalising a Star Schema into a Snowflake Schema?";
      opts = [
        "It reduces storage redundancy by normalizing dimension tables, but increases query complexity and join overhead during execution.",
        "It simplifies query writing by combining all columns into a single table, but increases storage costs due to data duplication.",
        "It completely eliminates the need for fact tables, but limits the database to single-column indexing strategies.",
        "It speeds up query execution significantly by reducing the number of database joins required to compile results."
      ];
      ans = 0;
      concept = "A Snowflake Schema normalizes dimension tables (splitting them into sub-dimensions). While this reduces storage redundancy and maintains data integrity, it requires more joins in SQL queries, potentially slowing down reads.";
    } 
    else {
      q = "Which regular expression pattern is best suited to match and validate a standard ISO 8601 date format (YYYY-MM-DD)?";
      opts = [
        "^\\d{4}-\\d{2}-\\d{2}$",
        "^[0-9]{2}-[0-9]{2}-[0-9]{4}$",
        "^\\w{4}-\\w{2}-\\w{2}$",
        "^\\d{4}/\\d{2}/\\d{2}$"
      ];
      ans = 0;
      concept = "The regex pattern `^\\d{4}-\\d{2}-\\d{2}$` enforces exactly 4 digits for the year, a hyphen, exactly 2 digits for the month, a hyphen, and exactly 2 digits for the day, bounded by start (^) and end ($) anchors.";
    }

    const res = balanceAndShuffle(opts, ans);
    return {
      type: "single",
      difficulty: randRange(1, 3),
      question: q,
      options: res.options,
      correct: [res.correctIdx],
      concept: concept
    };
  }

  // ============================================================
  // SPARK ENGINE (Days 17–21)
  // ============================================================
  function genSparkQuestion(day, qid) {
    const scenario = qid % 8;
    let q = "", opts = [], ans = 0, concept = "";

    if (scenario === 0) {
      q = "In Apache Spark, which of the following sequences of operations represents a transformation chain followed by an action that triggers job execution?";
      opts = [
        "df.filter().select().groupBy() followed by df.count()",
        "df.show() followed by df.filter().select()",
        "df.write.save() followed by df.select()",
        "df.collect() followed by df.limit()"
      ];
      ans = 0;
      concept = "Spark operations are lazy. Transformations (like `filter`, `select`, `groupBy`) build a logical execution plan but do not execute. Only an Action (like `count`, `collect`, `show`, `write`) triggers actual cluster execution.";
    } 
    else if (scenario === 1) {
      q = "Under what condition will a Broadcast Hash Join in Spark fail with an OutOfMemory (OOM) error on the driver node?";
      opts = [
        "When the broadcasted DataFrame exceeds the configured relation size threshold or the physical memory capacity of the Driver node.",
        "When the executor nodes run out of memory while caching the larger table involved in the join operation.",
        "When the broadcasted table contains highly skewed keys that accumulate on a single executor partition.",
        "When the network connection between executors times out during the shuffle partition phase."
      ];
      ans = 0;
      concept = "In a Broadcast Join, the Driver node collects the small table and broadcasts it to all Executors. If this table is larger than the Driver's available memory, or exceeds `spark.sql.autoBroadcastJoinThreshold`, the Driver will fail with an OOM error.";
    } 
    else if (scenario === 2) {
      q = "What is the primary difference in execution between `df.repartition(10)` and `df.coalesce(10)` when reducing the number of partitions of a DataFrame?";
      opts = [
        "`repartition` triggers a full shuffle across the network to distribute data evenly, whereas `coalesce` minimizes shuffles by merging adjacent partitions.",
        "`coalesce` triggers a full shuffle to balance partitions, whereas `repartition` strictly avoids network traffic.",
        "`repartition` is a local action that executes immediately, whereas `coalesce` is a lazy transformation.",
        "Both operations perform identical physical executions, but `repartition` is limited to Spark SQL dataframes."
      ];
      ans = 0;
      concept = "`repartition` allows increasing or decreasing partitions and always triggers a full network shuffle. `coalesce` can only decrease partitions and avoids a full shuffle by grouping existing partitions locally, which can sometimes lead to data skew.";
    } 
    else if (scenario === 3) {
      q = "You have a Spark job joining a large transactions DataFrame with a small metadata DataFrame. The job hangs at 99% during the join phase on a single task. What is the cause and the best resolution?";
      opts = [
        "Data skew on the join key. Resolution: Implement key salting by appending a random integer suffix to the join key on both datasets.",
        "Insufficient driver memory. Resolution: Increase the driver memory size using the `spark.driver.memory` configuration parameter.",
        "An invalid shuffle partition limit. Resolution: Decrease the shuffle partitions to a small value like 10 to force consolidation.",
        "Network timeout between executors. Resolution: Increase the heartbeat timeout intervals in the spark configurations."
      ];
      ans = 0;
      concept = "A job hanging at the end is a classic sign of data skew (one executor processing a massive key partition). Key salting splits the skewed key across multiple partitions by adding a randomized suffix, balancing executor load.";
    } 
    else if (scenario === 4) {
      q = "In Spark's Catalyst Optimizer, what is the correct progression of execution plan stages from SQL/DataFrame code to physical execution?";
      opts = [
        "Parsed Logical Plan -> Analyzed Logical Plan -> Optimized Logical Plan -> Physical Plans -> Cost-Based Model Selection",
        "Physical Plan -> Logical Plan -> Execution Plan -> Code Generation -> Cost-Based Selection",
        "Optimized Plan -> Parsed Plan -> Analyzed Plan -> Physical Plan -> Task Scheduling",
        "Logical Plan -> Physical Plan -> Task Set -> Execution Plan -> Memory Allocation"
      ];
      ans = 0;
      concept = "The Catalyst Optimizer processes queries through standard stages: parsing (Unresolved Logical Plan), analysis using Catalog (Analyzed Logical Plan), optimization rules (Optimized Logical Plan), physical planning generation, and cost-based selection of the physical plan.";
    } 
    else if (scenario === 5) {
      q = "Which Spark storage level serialization option provides the best balance between fast query retrieval speed and low memory usage?";
      opts = [
        "MEMORY_AND_DISK_SER (Serializes objects in memory to save space, and spills to disk if memory is full)",
        "MEMORY_ONLY (Keeps deserialized Java objects in memory for fastest retrieval, consuming maximum space)",
        "DISK_ONLY (Writes all DataFrame partitions to disk, completely bypassing JVM heap memory)",
        "OFF_HEAP (Stores uncompressed data in off-heap memory, bypassing garbage collection overhead)"
      ];
      ans = 0;
      concept = "Serialized caching (`_SER`) converts Java objects into a compact byte array, significantly reducing memory footprint at the expense of slight CPU overhead for deserialization during reads.";
    } 
    else if (scenario === 6) {
      q = "How does Spark manage its internal JVM heap executor memory between Storage memory and Execution memory pools?";
      opts = [
        "They share a dynamic boundary: Execution memory takes precedence, and can evict Storage memory blocks if needed, but Storage cannot evict Execution.",
        "They are strictly separated by a hardcoded boundary that cannot be modified or crossed during runtime execution.",
        "Storage memory takes absolute precedence and can evict active Execution memory blocks to prevent out-of-memory errors.",
        "Both pools are managed independently by the JVM Garbage Collector without any explicit boundary coordination by Spark."
      ];
      ans = 0;
      concept = "Spark shares memory dynamically between Storage (caching) and Execution (joins/aggregations). Execution memory has priority: if it needs space, it will evict cached data from Storage. Storage cannot evict active Execution data.";
    } 
    else {
      q = "Which PySpark code fragment correctly defines a schema with a string column named `id` and an integer column named `count`?";
      opts = [
        "StructType([StructField('id', StringType(), True), StructField('count', IntegerType(), True)])",
        "StructType([StructField('id', 'string'), StructField('count', 'integer')])",
        "SchemaType([Field('id', StringType()), Field('count', IntegerType())])",
        "DataFrameSchema(id=String, count=Integer)"
      ];
      ans = 0;
      concept = "In PySpark, a schema is built using `StructType` containing a list of `StructField` definitions, specifying the column name, data type class, and nullability boolean.";
    }

    const res = balanceAndShuffle(opts, ans);
    return {
      type: "single",
      difficulty: randRange(1, 3),
      question: q,
      options: res.options,
      correct: [res.correctIdx],
      concept: concept
    };
  }

  // ============================================================
  // SNOWFLAKE ENGINE (Days 22–33)
  // ============================================================
  function genSnowflakeQuestion(day, qid) {
    const scenario = qid % 8;
    let q = "", opts = [], ans = 0, concept = "";

    if (scenario === 0) {
      q = "A Snowflake Virtual Warehouse is configured with `AUTO_SUSPEND = 60` (seconds). A query runs for 10 seconds, and the warehouse sits idle. 45 seconds later, a second query is executed. How many seconds of credit consumption are billed?";
      opts = [
        "115 seconds (60 seconds minimum charge for the first query, plus 55 seconds of active/idle elapsed time before the second query finishes).",
        "70 seconds (10 seconds for the first query, 45 seconds of idle time, and 15 seconds for the second query).",
        "120 seconds (two separate minimum charges of 60 seconds each because the queries ran independently).",
        "15 seconds (only active query execution time is billed under the serverless compute model)."
      ];
      ans = 0;
      concept = "Snowflake warehouses have a minimum charge of 60 seconds when started. After 60 seconds, they bill per second. Since the warehouse did not suspend (it was idle for only 45s, which is less than the 60s auto-suspend limit), it remained running, billing continuously for the entire elapsed time.";
    } 
    else if (scenario === 1) {
      q = "You create a zero-copy clone of a 1 TB table in Snowflake. You then immediately update 100 GB of rows in the cloned table. How is your storage billed?";
      opts = [
        "You are billed for 1.1 TB of storage (1 TB shared for the base data, plus 100 GB of unique modified partitions on the cloned table).",
        "You are billed for 2 TB of storage because cloning copies the underlying micro-partitions completely to the new table.",
        "You are billed for only 100 GB of storage because the cloned table's base storage is fully absorbed by the primary database.",
        "You are billed for 1.1 TB of storage, plus a 10% administrative performance surcharge for maintaining shared metadata state."
      ];
      ans = 0;
      concept = "Zero-copy cloning duplicates only metadata. The underlying micro-partitions are shared. You are only billed for storage when data in the clone or original table changes, causing micro-partitions to diverge. Here, only the 100 GB of changed data represents unique storage.";
    } 
    else if (scenario === 2) {
      q = "What is the primary mechanism and best practice for setting up continuous, low-latency file loading using Snowflake Snowpipe?";
      opts = [
        "Configure cloud object storage (e.g. AWS S3) event notifications to publish messages to a Snowflake-managed SQS queue, triggering Snowpipe automatically.",
        "Schedule a Snowflake task to run the COPY INTO command every 10 seconds to scan the external stage for new files.",
        "Create a stored procedure that polls the storage bucket via REST API calls and processes file chunks sequentially.",
        "Implement a Kafka consumer inside a secure runtime agent that pushes raw binary payloads into stage objects."
      ];
      ans = 0;
      concept = "Snowpipe auto-ingest uses cloud messaging (AWS SQS, Azure Event Grid, or GCP Pub/Sub) triggered by bucket write events. This notifies Snowpipe to load files asynchronously as soon as they land in the stage, achieving near real-time ingestion.";
    } 
    else if (scenario === 3) {
      q = "You have a Snowflake stream set up on a table. If you perform a Time Travel query to view data as of 1 hour ago: `SELECT * FROM my_table AT(OFFSET => -3600)`, how does this affect the stream's offset?";
      opts = [
        "It does not affect the stream's offset; streams track changes made since a transaction point, while Time Travel queries read historical partition states independently.",
        "It automatically rolls back the stream's tracking pointer by 1 hour, discarding all changes recorded in the interim.",
        "It raises a compile error because streams and Time Travel queries cannot be combined on the same database object.",
        "It purges the stream's current change data tracking log to guarantee read consistency."
      ];
      ans = 0;
      concept = "Streams and Time Travel are independent features. A stream tracks DML changes from a specific point in time forward. Time Travel allows querying the state of a table at a past point. Querying a table via Time Travel has no impact on a stream's offset.";
    } 
    else if (scenario === 4) {
      q = "Which of the following describes how Snowflake structures table data internally to optimize query performance?";
      opts = [
        "Data is stored in immutable, encrypted micro-partitions (50MB to 500MB in size) containing columnar data layouts, with clustering metadata stored in the Cloud Services layer.",
        "Data is stored in a single large row-based file per schema, utilizing index tables stored in virtual warehouse caches.",
        "Data is normalized into physical B-trees distributed across the compute nodes of the virtual warehouse cluster.",
        "Data is grouped into dynamic partitions that scale out across cloud object storage containers based on active query filters."
      ];
      ans = 0;
      concept = "Snowflake tables are divided into immutable micro-partitions (50-500MB of uncompressed data) structured columnarily. Snowflake automatically maintains clustering metadata on these micro-partitions in its Cloud Services layer, eliminating the need for traditional indexes.";
    } 
    else if (scenario === 5) {
      q = "You execute a complex query in Snowflake. Under what condition is the query result served directly from the Result Cache, bypassing the Virtual Warehouse compute layer entirely?";
      opts = [
        "The identical query is run within 24 hours, the underlying table data has not changed, and the query does not contain user-defined or non-deterministic functions (like `CURRENT_TIMESTAMP()`).",
        "The query has been executed at least once before, and the virtual warehouse has not been suspended or resized in the meantime.",
        "The query is executed by a user with the same role and permissions as the user who originally compiled and ran the query.",
        "The metadata cache contains the table's statistics, allowing the cloud services layer to calculate the values directly."
      ];
      ans = 0;
      concept = "The Result Cache persists query results for 24 hours. If an identical query is executed and the base table's data has not changed, Snowflake returns the cached results immediately without using any Virtual Warehouse compute credits.";
    } 
    else if (scenario === 6) {
      q = "Given a Snowflake table `events` with a VARIANT column `src` containing: `{\"user\": {\"id\": 101}}`. Which SQL query correctly extracts the nested user ID as an integer?";
      opts = [
        "SELECT src:user.id::INT FROM events;",
        "SELECT GET_PATH(src, 'user/id')::INT FROM events;",
        "SELECT src.user.id FROM events;",
        "SELECT JSON_EXTRACT_PATH(src, 'user.id') FROM events;"
      ];
      ans = 0;
      concept = "Snowflake uses colon syntax (`:`) to traverse variant JSON keys. Dot notation navigates nested objects. Casting using `::` converts the variant value into a concrete SQL data type (e.g. `::INT`).";
    } 
    else {
      q = "In Snowflake's Role-Based Access Control (RBAC), which privilege is required to allow a custom role to inherit the privileges of another role?";
      opts = [
        "GRANT ROLE role_a TO ROLE role_b;",
        "GRANT INHERIT ON ROLE role_a TO ROLE role_b;",
        "GRANT ALL PRIVILEGES ON ROLE role_a TO ROLE role_b;",
        "GRANT USAGE ON ROLE role_a TO ROLE role_b;"
      ];
      ans = 0;
      concept = "Snowflake manages role hierarchies by granting one role to another. `GRANT ROLE role_a TO ROLE role_b` means `role_b` inherits all the privileges of `role_a`, forming a parent-child relationship.";
    }

    const res = balanceAndShuffle(opts, ans);
    return {
      type: "single",
      difficulty: randRange(1, 3),
      question: q,
      options: res.options,
      correct: [res.correctIdx],
      concept: concept
    };
  }

  // ============================================================
  // DBT ENGINE (Days 34–41)
  // ============================================================
  function genDBTQuestion(day, qid) {
    const scenario = qid % 8;
    let q = "", opts = [], ans = 0, concept = "";

    if (scenario === 0) {
      q = "In dbt, how does the `ephemeral` materialization behave during compilation and execution in the target database?";
      opts = [
        "It does not create any table or view in the database; instead, dbt compiles its code as a Common Table Expression (CTE) inside downstream referencing models.",
        "It creates a temporary table that is automatically dropped by the database engine at the end of the dbt run transaction.",
        "It compiles as a permanent database view in a separate schema to isolate intermediate transformation steps.",
        "It generates a seed table loaded from a local CSV file that is referenced by downstream join queries."
      ];
      ans = 0;
      concept = "The `ephemeral` materialization tells dbt not to create a physical object in the database. Instead, dbt interpolates the SQL of the ephemeral model as a Common Table Expression (CTE) directly into any downstream models that reference it via `ref()`.";
    } 
    else if (scenario === 1) {
      q = "When building a dbt incremental model: `is_incremental()` returns True ONLY under which condition?";
      opts = [
        "The model is configured with `materialized='incremental'`, the target table already exists in the database, and the run is NOT executed with the `--full-refresh` flag.",
        "The model runs for the first time, and the staging schema contains new rows that have not yet been loaded.",
        "The target table does not exist, and dbt compiles the DDL statements to create the initial destination table.",
        "The dbt execution command is explicitly set to `dbt run --incremental` from the terminal command line."
      ];
      ans = 0;
      concept = "The `is_incremental()` macro evaluates to True only when: (1) the model is configured as incremental, (2) the target table already exists in the target database, and (3) the run is not a full-refresh (which forces a rebuild).";
    } 
    else if (scenario === 2) {
      q = "Why is it a critical best practice to reference tables using the `{{ source() }}` and `{{ ref() }}` macros in dbt instead of hardcoding raw table names?";
      opts = [
        "It dynamically resolves table schemas based on environment configurations, builds the project's dependency DAG, and ensures correct execution order.",
        "It encrypts the underlying table connections to secure credentials and prevent SQL injection attacks.",
        "It forces dbt to bypass the local cache and query the target database directly for real-time schema validation.",
        "It automatically formats the generated SQL statements to comply with standard linting rules of the database dialect."
      ];
      ans = 0;
      concept = "The `ref()` and `source()` macros are core to dbt. They enable dbt to dynamically compile target object names depending on the profile target (e.g. dev vs prod), map lineage, and construct the directed acyclic graph (DAG) to run models in the correct order.";
    } 
    else if (scenario === 3) {
      q = "Which of the following is NOT one of the four default, built-in generic tests provided out-of-the-box by dbt in schema configuration files?";
      opts = [
        "not_empty",
        "unique",
        "not_null",
        "accepted_values"
      ];
      ans = 0;
      concept = "dbt's four built-in generic tests are: `unique`, `not_null`, `accepted_values`, and `relationships`. There is no built-in test named `not_empty`; testing for empty states is typically handled by `not_null` or custom tests.";
    } 
    else if (scenario === 4) {
      q = "How do you install and manage external utility libraries (like `dbt_utils`) in a dbt project?";
      opts = [
        "Define the package name and version in a `packages.yml` file in the root directory, then run the `dbt deps` command in the terminal.",
        "Install the package using the Python package manager: `pip install dbt-utils` before executing the dbt run command.",
        "Copy the source SQL code of the package utilities directly into your project's local `macros/` folder.",
        "Configure the external package dependencies within the `dbt_project.yml` file under the model configurations section."
      ];
      ans = 0;
      concept = "dbt handles external package management via `packages.yml`. Adding the package details there and running `dbt deps` downloads the dependencies into the `dbt_packages/` directory, making their macros available to your project.";
    } 
    else if (scenario === 5) {
      q = "In dbt, what is the correct syntax to retrieve a variable configured in your `dbt_project.yml` file inside a SQL model?";
      opts = [
        "{{ var('my_variable_name') }}",
        "{{ env_var('my_variable_name') }}",
        "{{ config.get('my_variable_name') }}",
        "{{ my_variable_name }}"
      ];
      ans = 0;
      concept = "The `var()` macro is used in dbt to reference variables defined in the `dbt_project.yml` file or passed via the command line `--vars` flag. `env_var()` is used to retrieve environment variables from the OS.";
    } 
    else if (scenario === 6) {
      q = "When you execute `dbt docs generate`, what does dbt compile to build the visual documentation site?";
      opts = [
        "It extracts schema metadata, descriptions, and model SQL definitions, compiling them into static `manifest.json` and `catalog.json` files.",
        "It establishes a live connection to the database and builds dynamic reporting dashboards using embedded HTML frames.",
        "It generates a set of markdown files containing auto-generated documentation for every database table in the target schema.",
        "It translates the dbt project DAG into a static image file stored in the local target directory."
      ];
      ans = 0;
      concept = "`dbt docs generate` produces static JSON files (`manifest.json` and `catalog.json`) containing the project's structure, descriptions, and database catalog metadata. The `dbt docs serve` command uses these JSON files to render the interactive documentation website.";
    } 
    else {
      q = "In dbt, what is a 'Seed' and when is it best utilized?";
      opts = [
        "A CSV file stored in the `seeds/` directory that dbt loads into the database as a table, best used for static lookup data that changes rarely.",
        "A SQL script that populates staging tables with randomized test data during continuous integration pipelines.",
        "A specialized configuration profile that defines database connection parameters for developer environments.",
        "A model that contains raw SELECT queries extracting data directly from external source tables."
      ];
      ans = 0;
      concept = "dbt Seeds are CSV files located in the `seeds/` folder. Running `dbt seed` loads these CSVs into the target database as tables. They are ideal for small, static lookup datasets (like country codes or department mappings) rather than raw event data.";
    }

    const res = balanceAndShuffle(opts, ans);
    return {
      type: "single",
      difficulty: randRange(1, 3),
      question: q,
      options: res.options,
      correct: [res.correctIdx],
      concept: concept
    };
  }

  // ============================================================
  // DATASTAGE ENGINE (Days 42–46)
  // ============================================================
  function genDataStageQuestion(day, qid) {
    const scenario = qid % 6;
    let q = "", opts = [], ans = 0, concept = "";

    if (scenario === 0) {
      q = "In IBM DataStage Parallel Jobs, which partitioning method distributes rows round-robin without inspecting data values, guaranteeing perfectly size-balanced partitions but potentially breaking hash-based stages?";
      opts = [
        "Round Robin Partitioning",
        "Hash Partitioning",
        "Entire Partitioning",
        "Same Partitioning"
      ];
      ans = 0;
      concept = "Round Robin partitioning distributes records evenly across all processing nodes sequentially. While it provides excellent load balancing, it does not group related rows together, which can cause incorrect results in stages like Join or Aggregator that require key grouping.";
    } 
    else if (scenario === 1) {
      q = "In a DataStage Transformer Stage, what is the precise execution and evaluation order of Stage Variables, Loop Variables, and Output Derivations for each incoming record?";
      opts = [
        "Stage Variables first (top-to-bottom), then Loop Variables, then Loop Conditions/Derivations, and finally Output Link Derivations.",
        "Output Link Derivations first, then Loop Variables, and finally Stage Variables are evaluated in parallel.",
        "Stage Variables and Output Derivations are executed in random order depending on the JVM compiler optimization path.",
        "Loop Conditions are evaluated first, then Output Link Derivations, and Stage Variables are updated at the end of the record boundary."
      ];
      ans = 0;
      concept = "DataStage processes Transformer variables in a strict order: (1) Stage Variables are evaluated from top to bottom, (2) Loop Variables are evaluated, (3) Loop Conditions control looping, and (4) Output Link derivations are evaluated after loops complete.";
    } 
    else if (scenario === 2) {
      q = "When configuring a Lookup Stage in a DataStage parallel job, what is the critical architectural difference between a Normal Lookup and a Sparse Lookup?";
      opts = [
        "Normal Lookup loads the entire reference dataset into memory (ideal for small tables), while Sparse Lookup queries the database directly for each record (ideal for large tables).",
        "Normal Lookup operates strictly on CSV files, while Sparse Lookup requires a direct connection to a relational database.",
        "Sparse Lookup partitions the input data across all nodes, while Normal Lookup processes the entire stream on the conductor node.",
        "There is no architectural difference; Sparse Lookup is simply a legacy naming convention for un-indexed lookup stages."
      ];
      ans = 0;
      concept = "Normal Lookup loads the reference table into memory, making lookups extremely fast but memory-intensive. Sparse Lookup queries the database for every single incoming row via SQL, which is slow for large streams but uses minimal memory.";
    } 
    else if (scenario === 3) {
      q = "In DataStage, under what scenario should you choose a Join Stage over a Lookup Stage for combining two datasets in a parallel job?";
      opts = [
        "When both datasets are very large, as a Join Stage utilizes disk-based sorting and partitioning, avoiding memory exhaustion.",
        "When one dataset is extremely small and fits entirely in memory, maximizing join throughput.",
        "When you need to perform an inequality join (e.g. `t1.date >= t2.start_date`) between two relational tables.",
        "When processing streaming JSON files that require hierarchical schema parsing on the conductor node."
      ];
      ans = 0;
      concept = "Lookup stages are optimized for small reference tables that fit in memory. For two large datasets, a Join stage is preferred because it partitions and sorts data on disk/memory across execution nodes, preventing out-of-memory issues.";
    } 
    else if (scenario === 4) {
      q = "In a DataStage Job Sequence, how can you pass the output parameter of an upstream Job Activity (e.g. its status or row count) to a downstream Job Activity?";
      opts = [
        "Use the expression syntax `JobActivityName.ValueName` (e.g. `Job_A.RowCount`) in the downstream job's parameter properties.",
        "Write the parameter to a shared text file in the project's temp directory and read it using a custom shell script step.",
        "Configure a global user variable in the Administrator client that dynamically binds to all active job sequences.",
        "Pass the parameter using the native `SET PARAMETER` statement inside an inline SQL command in the sequence properties."
      ];
      ans = 0;
      concept = "DataStage sequences expose properties of completed job activities. Downstream jobs can access these values directly using the dot notation expression syntax (`JobActivityName.ValueName`) in their parameter binding fields.";
    } 
    else {
      q = "In IBM InfoSphere QualityStage, what is the primary function of the Survive Stage in a data cleansing pipeline?";
      opts = [
        "To build a single, best-of-breed 'golden record' from a group of matched duplicate records based on configurable rule priorities.",
        "To filter out and drop records that fail to meet baseline schema validation and data quality thresholds.",
        "To standardize address columns by parsing them into structured fields using a postal validation database.",
        "To encrypt sensitive personally identifiable information (PII) before loading data into a data warehouse."
      ];
      ans = 0;
      concept = "The Survive Stage (Survival) takes groups of matched records (duplicates) and selects the best, most complete, and accurate values from each record in the group to construct a single consolidated 'golden record'.";
    }

    const res = balanceAndShuffle(opts, ans);
    return {
      type: "single",
      difficulty: randRange(1, 3),
      question: q,
      options: res.options,
      correct: [res.correctIdx],
      concept: concept
    };
  }

  // ============================================================
  // IDMC ENGINE (Days 47–51)
  // ============================================================
  function genIDMCQuestion(day, qid) {
    const scenario = qid % 6;
    let q = "", opts = [], ans = 0, concept = "";

    if (scenario === 0) {
      q = "In Informatica Intelligent Data Management Cloud (IDMC), where does the actual data processing and execution occur when a mapping task runs?";
      opts = [
        "On the local Secure Agent server inside your firewall, keeping your data fully secured within your infrastructure.",
        "In the Informatica Cloud hosting environment, where all source data is temporarily staged in cloud databases.",
        "In the user's web browser using client-side JavaScript processing threads to compute transformations.",
        "In a shared public staging container managed by the cloud infrastructure provider."
      ];
      ans = 0;
      concept = "IDMC splits the control plane from the data plane. The control plane resides in the Informatica Cloud (metadata, scheduling), but the actual data processing (data plane) is executed entirely on the local Secure Agent server, ensuring raw data never leaves your secure network.";
    } 
    else if (scenario === 1) {
      q = "What is the critical distinction between an Active Transformation and a Passive Transformation in an IDMC mapping?";
      opts = [
        "An Active Transformation can change the number of rows that pass through it (e.g. Filter, Router), while a Passive Transformation cannot change the row count.",
        "An Active Transformation is executed in memory, while a Passive Transformation writes intermediate stages to disk storage.",
        "A Passive Transformation requires active database transactions, while an Active Transformation operates strictly on flat files.",
        "An Active Transformation requires a runtime license, while a Passive Transformation is free and built-in by default."
      ];
      ans = 0;
      concept = "Active transformations (like Filter, Aggregator, Joiner, Router) can modify the row count or row order between input and output. Passive transformations (like Expression, Sequence Generator) modify data at the cell/column level but guarantee that row count and row order remain unchanged.";
    } 
    else if (scenario === 2) {
      q = "How does IDMC handle high availability and load balancing for Secure Agents within an organization?";
      opts = [
        "By grouping multiple Secure Agents into a Secure Agent Group (Cluster), allowing tasks to load-balance and failover automatically.",
        "By setting up a master-slave replication configuration in the Informatica Cloud administration panel.",
        "By running a background load-balancing script on the client machine that routes network traffic dynamically.",
        "By deploying a third-party hardware load balancer in front of the Secure Agent network ports."
      ];
      ans = 0;
      concept = "IDMC supports Secure Agent Groups. By installing multiple Secure Agents and placing them in the same group, IDMC automatically distributes tasks among active agents (load balancing) and routes tasks to surviving agents if one agent goes offline (failover).";
    } 
    else if (scenario === 3) {
      q = "In an IDMC Taskflow, what is the primary purpose of a Data Decision step?";
      opts = [
        "To evaluate a conditional expression (e.g. checking task status or record count) and branch the execution path accordingly.",
        "To validate whether the source database schema is compatible with the target table structures.",
        "To perform an inline mapping transformation that cleans data values before the next step runs.",
        "To halt the execution flow immediately if a mapping task encounters any warning messages."
      ];
      ans = 0;
      concept = "A Data Decision step in an IDMC Taskflow evaluates variables (like outputs from a previous Mapping Task) using conditional logic to determine which branch of the workflow to execute next.";
    } 
    else if (scenario === 4) {
      q = "When using a Lookup Transformation in Informatica Cloud (CDI), what is a key benefit of enabling a Persistent Cache?";
      opts = [
        "It saves the lookup cache files to disk, allowing subsequent mapping runs to reuse the cache and avoid rebuilding it from the database.",
        "It ensures that the lookup table is locked for updates during the entire execution of the mapping pipeline.",
        "It automatically encrypts the lookup table's primary key columns using dynamic data masking policies.",
        "It bypasses the Secure Agent memory allocations, executing the lookup operation directly in-database."
      ];
      ans = 0;
      concept = "A Persistent Cache saves the lookup cache files to the Secure Agent's local disk. If a mapping runs frequently and the lookup data changes rarely, reusing the persistent cache saves significant time by avoiding repeated database queries.";
    } 
    else {
      q = "When designing an IDMC mapping, under what scenario is it highly recommended to use a Router Transformation instead of a Filter Transformation?";
      opts = [
        "When you need to split a single input stream into multiple mutually exclusive output streams based on different conditional rules.",
        "When you need to completely block all records that do not satisfy a specific data quality threshold.",
        "When performing an aggregation or calculation across a grouped partition of rows in a flat file.",
        "When connecting a single source table to multiple target tables without applying any conditional filters."
      ];
      ans = 0;
      concept = "A Filter transformation evaluates one condition and either keeps or discards rows. A Router transformation can define multiple conditional output groups, allowing a single stream to be split and routed to different targets in one step.";
    }

    const res = balanceAndShuffle(opts, ans);
    return {
      type: "single",
      difficulty: randRange(1, 3),
      question: q,
      options: res.options,
      correct: [res.correctIdx],
      concept: concept
    };
  }

  // ============================================================
  // PUBLIC EXPOSED GENERATOR FUNCTION
  // ============================================================
  window.generateQuestionsForDay = function(dayNum) {
    let generatorFn;
    if (dayNum >= 1 && dayNum <= 3) generatorFn = genPythonQuestion;
    else if (dayNum >= 4 && dayNum <= 8) generatorFn = genSQLQuestion;
    else if (dayNum >= 9 && dayNum <= 16) generatorFn = genDEQuestion;
    else if (dayNum >= 17 && dayNum <= 21) generatorFn = genSparkQuestion;
    else if (dayNum >= 22 && dayNum <= 33) generatorFn = genSnowflakeQuestion;
    else if (dayNum >= 34 && dayNum <= 41) generatorFn = genDBTQuestion;
    else if (dayNum >= 42 && dayNum <= 46) generatorFn = genDataStageQuestion;
    else generatorFn = genIDMCQuestion; // 47 to 51

    const questions = [];
    for (let i = 1; i <= 100; i++) {
      const q = generatorFn(dayNum, i);
      q.id = i;
      questions.push(q);
    }

    return {
      title: `CertMastery - Day ${dayNum}`,
      topics: CURRICULUM[dayNum] || [],
      questions: questions
    };
  };

  console.log("CertMastery Advanced Parametric Questions Engine initialized successfully.");
})();

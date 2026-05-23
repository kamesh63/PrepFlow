window.QUIZ_DATA = window.QUIZ_DATA || {};
window.QUIZ_DATA["day32"] = {
  title: "Tasks Sequences & Stored Procs",
  topics: ["Tasks & Scheduling", "Sequences", "Stored Procedures", "JavaScript UDFs", "Task Dependencies"],
  questions: [
    {
      id: 1,
      type: "single",
      difficulty: 1,
      question: "Which SQL statement is used to create a task in Snowflake?",
      options: ["CREATE SCHEDULE", "CREATE TASK", "CREATE JOB", "CREATE WORKFLOW"],
      correct: [1],
      concept: "Tasks in Snowflake are created using the CREATE TASK statement. A task can execute a single SQL statement or call a stored procedure on a defined schedule."
    },
    {
      id: 2,
      type: "single",
      difficulty: 1,
      question: "What is the default state of a task immediately after creation in Snowflake?",
      options: ["STARTED", "SUSPENDED", "RUNNING", "PENDING"],
      correct: [1],
      concept: "When a task is created in Snowflake, it is in the SUSPENDED state by default. You must explicitly execute ALTER TASK task_name RESUME to start the task. This prevents unintended executions."
    },
    {
      id: 3,
      type: "single",
      difficulty: 1,
      question: "Which command is used to start a suspended task in Snowflake?",
      options: ["START TASK my_task", "ALTER TASK my_task RESUME", "EXECUTE TASK my_task", "SET TASK my_task STATE = STARTED"],
      correct: [1],
      concept: "ALTER TASK task_name RESUME changes a task\'s state from SUSPENDED to STARTED, allowing it to run on its defined schedule. ALTER TASK task_name SUSPEND pauses it."
    },
    {
      id: 4,
      type: "single",
      difficulty: 1,
      question: "Which object in Snowflake generates auto-incrementing unique numbers?",
      options: ["AUTO_INCREMENT column", "Sequence", "Identity generator", "Counter"],
      correct: [1],
      concept: "A sequence is a schema-level object that generates unique, auto-incrementing numbers. Sequences are created with CREATE SEQUENCE and are useful for generating surrogate keys or unique identifiers."
    },
    {
      id: 5,
      type: "single",
      difficulty: 1,
      question: "What is the correct syntax to create a sequence in Snowflake?",
      options: ["CREATE SEQUENCE my_seq", "CREATE AUTO_INCREMENT my_seq", "CREATE COUNTER my_seq", "CREATE NUMBER_GENERATOR my_seq"],
      correct: [0],
      concept: "Sequences are created using CREATE SEQUENCE sequence_name; Optionally you can specify START, INCREMENT, and other parameters. For example: CREATE SEQUENCE my_seq START = 1 INCREMENT = 1;"
    },
    {
      id: 6,
      type: "single",
      difficulty: 1,
      question: "Which keyword retrieves the next value from a sequence in Snowflake?",
      options: ["NEXT()", "NEXTVAL", "GET_NEXT()", "INCREMENT()"],
      correct: [1],
      concept: "The NEXTVAL keyword is used to get the next value from a sequence. It is used in SQL statements like: SELECT my_seq.NEXTVAL; or INSERT INTO my_table (id) VALUES (my_seq.NEXTVAL);"
    },
    {
      id: 7,
      type: "single",
      difficulty: 1,
      question: "What is a stored procedure in Snowflake?",
      options: ["A precompiled SQL query stored in the query cache for fast execution", "A procedural code block that can contain logic, variables, and multiple SQL statements", "A materialized view that is refreshed on a schedule", "A task that runs SQL statements at defined intervals"],
      correct: [1],
      concept: "A stored procedure is a named procedural code block stored in Snowflake that can contain business logic, variables, conditional statements, loops, and execute multiple SQL statements. It supports multiple languages including JavaScript, SQL, Python, Java, and Scala."
    },
    {
      id: 8,
      type: "single",
      difficulty: 1,
      question: "Which of the following languages can be used to write stored procedures in Snowflake?",
      options: ["Only SQL and JavaScript", "SQL, JavaScript, Python, Java, and Scala", "Only Python and Java", "SQL, JavaScript, and R"],
      correct: [1],
      concept: "Snowflake stored procedures support multiple handler languages: SQL (Snowflake Scripting), JavaScript, Python, Java, and Scala. This flexibility allows developers to use the language they are most comfortable with."
    },
    {
      id: 9,
      type: "single",
      difficulty: 1,
      question: "What is a JavaScript UDF in Snowflake?",
      options: ["A user-defined function written in JavaScript that returns a single value for each input row", "A JavaScript task that runs on a schedule within Snowflake", "A JavaScript-based stored procedure that can modify data", "A JavaScript library loaded into Snowflake for ETL processing"],
      correct: [0],
      concept: "A JavaScript UDF (User-Defined Function) is a scalar or tabular function written in JavaScript. Unlike stored procedures, UDFs return values and can be used in SQL expressions like SELECT my_udf(col1) FROM my_table."
    },
    {
      id: 10,
      type: "single",
      difficulty: 1,
      question: "What is a predecessor task in Snowflake?",
      options: ["A task that runs before another task in a task dependency chain", "A task that has higher priority than other tasks", "A task that was created before another task chronologically", "A task that monitors other tasks for failures"],
      correct: [0],
      concept: "A predecessor task is a task that must complete successfully before a dependent (child) task can start. This creates a task dependency chain where tasks execute in sequence based on the completion of their predecessors."
    },
    {
      id: 11,
      type: "single",
      difficulty: 1,
      question: "Which scheduling method specifies a task to run every N minutes?",
      options: ["SCHEDULE = \'EVERY N MINUTES\'", "SCHEDULE = \'N MINUTE\'", "SCHEDULE = \'USING CRON */N * * * * UTC\'", "SCHEDULE = \'INTERVAL N MINUTES\'"],
      correct: [1],
      concept: "Tasks can be scheduled using a simple interval syntax: SCHEDULE = \'N MINUTE\' where N is the number of minutes between runs. For example, SCHEDULE = \'5 MINUTE\' runs the task every 5 minutes."
    },
    {
      id: 12,
      type: "single",
      difficulty: 1,
      question: "Which function returns the history of task executions in Snowflake?",
      options: ["TASK_LOG()", "TASK_HISTORY()", "GET_TASK_RUNS()", "SHOW TASK HISTORY"],
      correct: [1],
      concept: "The TASK_HISTORY() table function in the INFORMATION_SCHEMA returns the history of task executions including status, duration, error messages, and other metadata. It can be filtered by task name and time range."
    },
    {
      id: 13,
      type: "single",
      difficulty: 1,
      question: "What is the difference between a stored procedure and a UDF in Snowflake?",
      options: ["Stored procedures can only be written in SQL while UDFs support multiple languages", "Stored procedures can execute DDL/DML and have side effects, while UDFs are designed to return values without side effects", "UDFs can modify data while stored procedures cannot", "There is no functional difference; they are interchangeable"],
      correct: [1],
      concept: "Stored procedures can execute DDL, DML, and have side effects (create tables, insert data, etc.). UDFs are designed to return values and be used in SQL expressions. UDFs should not have side effects and cannot execute DDL statements."
    },
    {
      id: 14,
      type: "single",
      difficulty: 1,
      question: "How do you create a SQL UDF in Snowflake?",
      options: ["CREATE FUNCTION my_func() RETURNS NUMBER LANGUAGE SQL AS \'SELECT 42\'", "CREATE UDF my_func() RETURNS NUMBER AS \'SELECT 42\'", "CREATE FUNCTION my_func() RETURNS NUMBER LANGUAGE SQL AS $$ SELECT 42 $$", "CREATE SQL FUNCTION my_func() AS \'RETURN 42\'"],
      correct: [2],
      concept: "A SQL UDF is created using CREATE FUNCTION with LANGUAGE SQL and a dollar-sign-delimited body: CREATE FUNCTION my_func() RETURNS NUMBER LANGUAGE SQL AS $$ SELECT 42 $$; The $$ delimiters allow multi-line SQL expressions."
    },
    {
      id: 15,
      type: "single",
      difficulty: 1,
      question: "What does the SYSTEM$STREAM_HAS_DATA function return?",
      options: ["The number of rows in a stream", "A BOOLEAN indicating whether a stream has change data", "The timestamp of the last change captured by the stream", "A table of changes captured by the stream"],
      correct: [1],
      concept: "SYSTEM$STREAM_HAS_DATA(\'stream_name\') returns TRUE if the specified stream contains change data (inserts, updates, or deletes) and FALSE if the stream is empty. It is commonly used in task conditions."
    },
    {
      id: 16,
      type: "single",
      difficulty: 1,
      question: "What is a DAG of tasks in Snowflake?",
      options: ["A debugging and governance framework for task monitoring", "A Directed Acyclic Graph where tasks have defined predecessor-successor relationships", "A data aggregation group that runs tasks in parallel", "A dashboard for visualizing task execution metrics"],
      correct: [1],
      concept: "A DAG (Directed Acyclic Graph) of tasks is a collection of tasks with defined predecessor-successor relationships. The root task has a schedule, and child tasks are triggered based on the completion of their predecessors, forming a tree-like execution flow."
    },
    {
      id: 17,
      type: "single",
      difficulty: 1,
      question: "Which privilege is required for a role to own and manage a task?",
      options: ["EXECUTE TASK", "CREATE TASK", "OWNERSHIP on the task", "MANAGE TASKS"],
      correct: [2],
      concept: "The OWNERSHIP privilege on a task allows a role to fully manage the task, including altering, suspending, resuming, and dropping it. The role that creates a task is automatically granted OWNERSHIP."
    },
    {
      id: 18,
      type: "single",
      difficulty: 1,
      question: "What is the purpose of a finalizer task in a task DAG?",
      options: ["It runs first to initialize the DAG before other tasks", "It runs after all other tasks in the DAG complete, regardless of whether they succeeded or failed", "It validates the output of all tasks in the DAG", "It cleans up temporary warehouses used by the DAG"],
      correct: [1],
      concept: "A finalizer task is a special task in a DAG that always runs after the DAG execution completes, whether the predecessor tasks succeeded or failed. It is used for cleanup operations, notifications, or error handling."
    },
    {
      id: 19,
      type: "single",
      difficulty: 1,
      question: "What is a serverless task in Snowflake?",
      options: ["A task that runs without any SQL statements", "A task that uses Snowflake-managed compute resources instead of a user-specified warehouse", "A task that runs on an external cloud function service", "A task that does not require any role or privileges"],
      correct: [1],
      concept: "A serverless task uses Snowflake-managed compute resources (no user warehouse specified). Snowflake automatically provisions and manages the compute. Serverless tasks are created by omitting the WAREHOUSE parameter in the CREATE TASK statement."
    },
    {
      id: 20,
      type: "single",
      difficulty: 1,
      question: "What does the CRON expression \'0 9 * * 1\' represent in a Snowflake task schedule?",
      options: ["Every day at 9:00 AM", "Every Monday at 9:00 AM", "Every 9 minutes on the 1st of each month", "The 1st and 9th of every month at midnight"],
      correct: [1],
      concept: "The CRON expression \'0 9 * * 1\' means: minute 0, hour 9, any day of month, any month, day of week 1 (Monday). This schedules the task to run every Monday at 9:00 AM in the specified timezone."
    },
    {
      id: 21,
      type: "single",
      difficulty: 1,
      question: "Which column in TASK_HISTORY output indicates whether a task run was successful?",
      options: ["RESULT", "STATE", "STATUS", "EXECUTION_STATE"],
      correct: [1],
      concept: "The STATE column in TASK_HISTORY indicates the outcome of a task run. Common values include SUCCEEDED, FAILED, SKIPPED, and CANCELLED. This helps in monitoring and troubleshooting task executions."
    },
    {
      id: 22,
      type: "single",
      difficulty: 1,
      question: "What is the correct way to use a sequence value when inserting a row?",
      options: ["INSERT INTO t (id, name) VALUES (my_seq.NEXTVAL, \'Alice\')", "INSERT INTO t (id, name) VALUES (NEXT(my_seq), \'Alice\')", "INSERT INTO t (id, name) VALUES (my_seq.NEXT(), \'Alice\')", "INSERT INTO t (id, name) VALUES (GET_SEQ(my_seq), \'Alice\')"],
      correct: [0],
      concept: "Sequence values are accessed using the sequence_name.NEXTVAL syntax. In an INSERT statement: INSERT INTO t (id, name) VALUES (my_seq.NEXTVAL, \'Alice\'); generates the next value from my_seq and inserts it as the id."
    },
    {
      id: 23,
      type: "single",
      difficulty: 1,
      question: "What rights model determines whose privileges are checked when a stored procedure executes SQL?",
      options: ["Executor\'s rights vs definer\'s rights", "Caller\'s rights vs owner\'s rights", "Admin rights vs user rights", "Session rights vs global rights"],
      correct: [1],
      concept: "Snowflake stored procedures support two rights models: caller\'s rights (SQL executes with the privileges of the calling role) and owner\'s rights (SQL executes with the privileges of the role that owns the procedure). This is specified at creation."
    },
    {
      id: 24,
      type: "single",
      difficulty: 1,
      question: "Which keyword is used to specify a task condition that determines whether a task should run?",
      options: ["WHEN", "IF", "CONDITION", "FILTER"],
      correct: [0],
      concept: "The WHEN clause in a task definition specifies a boolean condition that is evaluated before each scheduled run. If the condition is FALSE, the task is skipped. For example: CREATE TASK ... WHEN SYSTEM$STREAM_HAS_DATA(\'my_stream\') AS ..."
    },
    {
      id: 25,
      type: "single",
      difficulty: 1,
      question: "What does the EXECUTE TASK privilege allow a role to do?",
      options: ["Create new tasks in a schema", "Manually trigger a task to run outside its schedule", "Run serverless tasks only", "Execute the SQL defined within a task body"],
      correct: [1],
      concept: "The EXECUTE TASK privilege on an account allows a role\'s tasks to run on schedule. Without this privilege granted to the task owner role, tasks owned by that role will not execute. It is an account-level privilege."
    },
    {
      id: 26,
      type: "single",
      difficulty: 1,
      question: "What is the default INCREMENT value for a sequence in Snowflake?",
      options: ["0", "1", "10", "100"],
      correct: [1],
      concept: "By default, a sequence in Snowflake starts at 1 and increments by 1. You can customize this with the START and INCREMENT parameters: CREATE SEQUENCE my_seq START = 100 INCREMENT = 5;"
    },
    {
      id: 27,
      type: "single",
      difficulty: 1,
      question: "Which SQL statement suspends a running task?",
      options: ["STOP TASK my_task", "ALTER TASK my_task SUSPEND", "DROP TASK my_task", "PAUSE TASK my_task"],
      correct: [1],
      concept: "ALTER TASK task_name SUSPEND changes a task\'s state from STARTED to SUSPENDED, preventing it from running on its schedule. This does not drop the task — it can be resumed later with ALTER TASK RESUME."
    },
    {
      id: 28,
      type: "single",
      difficulty: 1,
      question: "How do you create a Python UDF in Snowflake?",
      options: ["CREATE FUNCTION my_func() RETURNS NUMBER LANGUAGE PYTHON RUNTIME_VERSION = \'3.8\' HANDLER = \'main\' AS $$ def main(): return 42 $$", "CREATE UDF my_func() LANGUAGE PYTHON AS \'def main(): return 42\'", "CREATE PYTHON FUNCTION my_func() AS $$ return 42 $$", "CREATE FUNCTION my_func() RETURNS NUMBER AS PYTHON $$ return 42 $$"],
      correct: [0],
      concept: "Python UDFs require LANGUAGE PYTHON, a RUNTIME_VERSION, a HANDLER specifying the Python function name, and the function body. For example: CREATE FUNCTION ... LANGUAGE PYTHON RUNTIME_VERSION = \'3.8\' HANDLER = \'main\' AS $$ def main(): return 42 $$"
    },
    {
      id: 29,
      type: "single",
      difficulty: 1,
      question: "What happens when a task\'s WHEN condition evaluates to FALSE?",
      options: ["The task fails with an error", "The task execution is skipped for that scheduled interval", "The task is automatically suspended", "The task retries after 1 minute"],
      correct: [1],
      concept: "When a task\'s WHEN condition evaluates to FALSE, the task execution is skipped for that scheduled interval. The task remains in the STARTED state and will be re-evaluated at the next scheduled time. No compute resources are consumed for skipped runs."
    },
    {
      id: 30,
      type: "single",
      difficulty: 1,
      question: "Which function is used to check the dependents (child tasks) of a root task?",
      options: ["GET_TASK_CHILDREN()", "SYSTEM$TASK_DEPENDENTS()", "SHOW TASK DEPENDENTS", "TASK_DEPENDENTS_LIST()"],
      correct: [1],
      concept: "SYSTEM$TASK_DEPENDENTS(\'root_task_name\') returns a JSON array listing all dependent tasks in the task DAG. It helps visualize the complete task tree starting from the root task."
    },
    {
      id: 31,
      type: "single",
      difficulty: 1,
      question: "Which clause defines the SQL to execute in a task?",
      options: ["EXECUTE AS", "BODY AS", "AS", "RUN"],
      correct: [2],
      concept: "The AS clause in a CREATE TASK statement defines the SQL statement that the task will execute. For example: CREATE TASK my_task ... AS INSERT INTO target SELECT * FROM source; The AS keyword precedes the SQL body."
    },
    {
      id: 32,
      type: "single",
      difficulty: 1,
      question: "What is the maximum number of predecessor tasks a child task can have in Snowflake?",
      options: ["1", "100", "Unlimited", "10"],
      correct: [1],
      concept: "A child task in a Snowflake DAG can have up to 100 predecessor tasks. This allows complex DAG topologies where a single task depends on the completion of many upstream tasks before it executes."
    },
    {
      id: 33,
      type: "single",
      difficulty: 1,
      question: "In a JavaScript stored procedure, how do you execute a SQL statement?",
      options: ["sql.execute(\"SELECT 1\")", "snowflake.execute({sqlText: \"SELECT 1\"})", "db.query(\"SELECT 1\")", "execute_sql(\"SELECT 1\")"],
      correct: [1],
      concept: "In JavaScript stored procedures, SQL statements are executed using the snowflake.execute() method with an object parameter: snowflake.execute({sqlText: \"SELECT 1\"}); This returns a resultSet object that can be iterated."
    },
    {
      id: 34,
      type: "single",
      difficulty: 1,
      question: "Which CRON field represents the day of the week in a Snowflake task schedule?",
      options: ["First field", "Third field", "Fourth field", "Fifth field"],
      correct: [3],
      concept: "The CRON expression has 5 fields: minute, hour, day-of-month, month, day-of-week. The fifth (last) field represents the day of the week (0=Sunday, 1=Monday, ..., 6=Saturday)."
    },
    {
      id: 35,
      type: "single",
      difficulty: 1,
      question: "What is the CURRVAL of a sequence?",
      options: ["The current maximum value the sequence can generate", "The most recent value generated by the sequence in the current session", "The initial starting value of the sequence", "The value that will be returned by the next NEXTVAL call"],
      correct: [1],
      concept: "CURRVAL returns the most recent value generated by the sequence in the current session. Note: CURRVAL is not supported in Snowflake in all contexts — it is primarily referenced after a NEXTVAL call in the same session."
    },
    {
      id: 36,
      type: "single",
      difficulty: 2,
      question: "A task is scheduled with SCHEDULE = \'5 MINUTE\' but the task SQL takes 7 minutes to complete. What happens to the next scheduled run?",
      options: ["The next run starts immediately after the current run completes, overlapping with the schedule", "The next scheduled run is skipped and the task runs again at the next interval after completion", "Snowflake queues the next run and executes it immediately after the current run finishes", "The task fails because it exceeded its scheduled interval"],
      correct: [1],
      concept: "If a task run exceeds its scheduled interval, the next scheduled run is skipped. Snowflake does not overlap task executions. The task will run again at the next scheduled interval after the current run completes."
    },
    {
      id: 37,
      type: "single",
      difficulty: 2,
      question: "You have a task DAG with a root task and 3 child tasks. To modify a child task, what must you do first?",
      options: ["Drop the root task", "Suspend the root task", "Suspend all child tasks", "No action needed; child tasks can be modified while running"],
      correct: [1],
      concept: "To modify any task in a DAG, the root task must first be suspended using ALTER TASK root_task SUSPEND. This prevents the DAG from running during modifications. After changes are made, resume the root task."
    },
    {
      id: 38,
      type: "single",
      difficulty: 2,
      question: "What happens when you call NEXTVAL on a sequence in a multi-row INSERT statement like INSERT INTO t SELECT seq.NEXTVAL, col FROM source?",
      options: ["The same value is used for all rows in the INSERT", "Each row gets a unique, incremented value from the sequence", "An error occurs because NEXTVAL cannot be used in SELECT statements", "Only the first row gets a sequence value; others get NULL"],
      correct: [1],
      concept: "When NEXTVAL is used in a multi-row INSERT...SELECT statement, each row receives a unique, incrementing value from the sequence. The sequence advances once per row, ensuring unique identifiers across all inserted rows."
    },
    {
      id: 39,
      type: "single",
      difficulty: 2,
      question: "What is the difference between a caller\'s rights and an owner\'s rights stored procedure?",
      options: ["Caller\'s rights procedures run with the caller\'s role privileges; owner\'s rights run with the owner role\'s privileges", "Caller\'s rights procedures can modify data; owner\'s rights are read-only", "Owner\'s rights procedures run faster because they are precompiled", "Caller\'s rights procedures cannot access temporary tables"],
      correct: [0],
      concept: "Caller\'s rights stored procedures (EXECUTE AS CALLER) execute SQL with the privileges of the role that calls the procedure. Owner\'s rights procedures (EXECUTE AS OWNER) execute SQL with the privileges of the role that owns the procedure, regardless of who calls it."
    },
    {
      id: 40,
      type: "single",
      difficulty: 2,
      question: "How do you specify a stored procedure to use caller\'s rights?",
      options: ["EXECUTE AS CALLER", "RIGHTS = CALLER", "SECURITY = INVOKER", "RUN AS CALLER"],
      correct: [0],
      concept: "The EXECUTE AS CALLER clause in CREATE PROCEDURE specifies that the procedure uses caller\'s rights. The SQL inside the procedure executes with the privileges of the role that invokes the procedure, not the owner."
    },
    {
      id: 41,
      type: "single",
      difficulty: 2,
      question: "A serverless task does not specify a WAREHOUSE. How does Snowflake handle compute for this task?",
      options: ["It uses the account\'s default warehouse", "Snowflake provisions and manages compute resources automatically, scaling as needed", "The task runs on shared compute resources with other accounts", "The task fails because a warehouse is required"],
      correct: [1],
      concept: "Serverless tasks use Snowflake-managed compute. Snowflake automatically provisions, scales, and manages the compute resources. You are billed based on the compute used. This is useful for tasks that need dynamic scaling without managing warehouses."
    },
    {
      id: 42,
      type: "single",
      difficulty: 2,
      question: "What is the maximum number of tasks allowed in a single task DAG?",
      options: ["100", "500", "1000", "Unlimited"],
      correct: [2],
      concept: "A single task DAG in Snowflake can contain up to 1000 tasks (including the root task). This allows for complex data pipeline workflows with many dependent steps."
    },
    {
      id: 43,
      type: "single",
      difficulty: 2,
      question: "Which clause is used to specify the predecessor of a child task?",
      options: ["DEPENDS ON", "AFTER", "PREDECESSOR", "FOLLOWS"],
      correct: [1],
      concept: "The AFTER clause in CREATE TASK specifies the predecessor task(s). For example: CREATE TASK child_task ... AFTER parent_task AS ...; The child task runs only after the parent task completes successfully."
    },
    {
      id: 44,
      type: "single",
      difficulty: 2,
      question: "A task uses WHEN SYSTEM$STREAM_HAS_DATA(\'my_stream\') as its condition. The stream has no new data. What resource cost is incurred?",
      options: ["Full warehouse compute for evaluating the condition", "Minimal serverless compute for evaluating the WHEN condition only", "No compute cost; the WHEN condition is evaluated without using compute resources", "The warehouse starts but immediately shuts down, incurring minimum 60-second charge"],
      correct: [2],
      concept: "The WHEN condition of a task is evaluated by Snowflake\'s cloud services layer, not by the warehouse. If the condition is FALSE, no warehouse compute is consumed. This makes WHEN conditions very cost-efficient for conditional task execution."
    },
    {
      id: 45,
      type: "single",
      difficulty: 2,
      question: "How do you manually trigger a task to run outside its schedule?",
      options: ["CALL TASK my_task", "EXECUTE TASK my_task", "RUN TASK my_task", "ALTER TASK my_task RUN"],
      correct: [1],
      concept: "EXECUTE TASK task_name manually triggers a single run of the task outside its regular schedule. This is useful for testing or ad-hoc execution. The task must be in SUSPENDED state to be manually executed via EXECUTE TASK."
    },
    {
      id: 46,
      type: "single",
      difficulty: 2,
      question: "Which of the following is a valid CRON schedule for running a task at midnight on the first day of every month in UTC?",
      options: ["USING CRON 0 0 1 * * UTC", "USING CRON * * 1 * * UTC", "USING CRON 0 0 * 1 * UTC", "USING CRON 1 0 0 * * UTC"],
      correct: [0],
      concept: "The CRON expression \'0 0 1 * *\' means: minute 0, hour 0 (midnight), day 1 of month, any month, any day of week. Combined with USING CRON and UTC timezone, this runs the task at midnight UTC on the 1st of every month."
    },
    {
      id: 47,
      type: "single",
      difficulty: 2,
      question: "In a JavaScript stored procedure, how do you iterate through the results of a SQL query?",
      options: ["Use a for loop on the result array returned by execute()", "Use resultSet.next() to advance through rows and getColumnValue() to read values", "Use resultSet.forEach() to iterate through all rows", "Use snowflake.fetch() to retrieve all rows as a JavaScript array"],
      correct: [1],
      concept: "In JavaScript stored procedures, snowflake.execute() returns a resultSet. You iterate using a while loop with resultSet.next() to advance to the next row, and resultSet.getColumnValue(\'col_name\') or getColumnValue(index) to read values."
    },
    {
      id: 48,
      type: "single",
      difficulty: 2,
      question: "What happens when a child task\'s predecessor fails in a task DAG?",
      options: ["The child task runs anyway with default values", "The child task is skipped and its state is set to SKIPPED", "The entire DAG is retried from the root task", "The child task waits indefinitely for the predecessor to succeed"],
      correct: [1],
      concept: "If a predecessor task fails, all downstream (child) tasks in the DAG are skipped. Their state is recorded as SKIPPED in the task history. The finalizer task (if configured) will still execute regardless of failures."
    },
    {
      id: 49,
      type: "single",
      difficulty: 2,
      question: "You want to create a task that calls a stored procedure. What is the correct AS clause?",
      options: ["AS CALL my_procedure()", "AS EXEC my_procedure()", "AS RUN my_procedure()", "AS my_procedure()"],
      correct: [0],
      concept: "To create a task that invokes a stored procedure, use the CALL statement in the AS clause: CREATE TASK my_task ... AS CALL my_procedure(); The CALL keyword is required to invoke stored procedures."
    },
    {
      id: 50,
      type: "single",
      difficulty: 2,
      question: "What is the purpose of the ALLOW_OVERLAPPING_EXECUTION parameter on a task?",
      options: ["It allows the task to run on multiple warehouses simultaneously", "It allows a new instance of the task to start even if the previous instance is still running", "It allows the task to execute overlapping SQL statements within a single run", "It enables parallel execution of child tasks in a DAG"],
      correct: [1],
      concept: "ALLOW_OVERLAPPING_EXECUTION = TRUE permits a new scheduled run of the task to begin even if the prior run has not completed. By default this is FALSE, meaning runs do not overlap and the next run is skipped if the current one is still executing."
    },
    {
      id: 51,
      type: "single",
      difficulty: 2,
      question: "What is the TASK_HISTORY retention period in the INFORMATION_SCHEMA?",
      options: ["7 days", "14 days", "30 days", "365 days"],
      correct: [0],
      concept: "The TASK_HISTORY table function in INFORMATION_SCHEMA retains task execution history for 7 days. For longer retention, use the SNOWFLAKE.ACCOUNT_USAGE.TASK_HISTORY view, which retains data for 365 days."
    },
    {
      id: 52,
      type: "single",
      difficulty: 2,
      question: "Can a sequence in Snowflake generate duplicate values across concurrent sessions?",
      options: ["No, sequences guarantee globally unique values across all sessions", "Yes, sequences can produce duplicates when multiple sessions call NEXTVAL simultaneously", "Only if the sequence uses INCREMENT = 0", "Yes, but only for serverless tasks accessing the sequence"],
      correct: [0],
      concept: "Snowflake sequences guarantee unique values across all concurrent sessions. Each NEXTVAL call atomically advances the sequence and returns a unique value. However, values may not be contiguous (gaps can occur due to internal optimization)."
    },
    {
      id: 53,
      type: "single",
      difficulty: 2,
      question: "What is the behavior of a sequence with START = 10 and INCREMENT = 5?",
      options: ["It generates: 10, 15, 20, 25, ...", "It generates: 5, 10, 15, 20, ...", "It generates: 10, 10, 10, 10, ... (always returns 10)", "It generates: 15, 20, 25, 30, ..."],
      correct: [0],
      concept: "A sequence with START = 10 and INCREMENT = 5 begins at 10 and adds 5 for each subsequent NEXTVAL call: 10, 15, 20, 25, 30, etc. The START value is the first value returned."
    },
    {
      id: 54,
      type: "single",
      difficulty: 2,
      question: "How do you define a JavaScript UDF that accepts two numbers and returns their sum?",
      options: [
        "CREATE FUNCTION add_nums(a FLOAT, b FLOAT) RETURNS FLOAT LANGUAGE JAVASCRIPT AS $$ return A + B; $$",
        "CREATE FUNCTION add_nums(a FLOAT, b FLOAT) RETURNS FLOAT LANGUAGE JAVASCRIPT AS $$ return a + b; $$",
        "CREATE FUNCTION add_nums(a FLOAT, b FLOAT) RETURNS FLOAT LANGUAGE JS AS $$ return a + b; $$",
        "CREATE FUNCTION add_nums(a INT, b INT) RETURNS INT LANGUAGE JAVASCRIPT AS $$ return a + b; $$"
      ],
      correct: [0],
      concept: "In JavaScript UDFs, input argument names are automatically uppercased by Snowflake. So parameter \'a\' becomes \'A\' and \'b\' becomes \'B\' in the JavaScript body. The correct syntax uses LANGUAGE JAVASCRIPT and references A and B in uppercase."
    },
    {
      id: 55,
      type: "single",
      difficulty: 2,
      question: "Which statement about task ownership is correct?",
      options: ["Any role with USAGE on the schema can modify any task in that schema", "Only the task owner role (or a role with OPERATE privilege) can resume or suspend a task", "SYSADMIN can always modify any task regardless of ownership", "Tasks do not have ownership; they are managed by the warehouse they run on"],
      correct: [1],
      concept: "Task management (resume, suspend, alter) requires OWNERSHIP on the task or the OPERATE privilege on the task. The OPERATE privilege allows a non-owner role to resume, suspend, or execute a task without full ownership."
    },
    {
      id: 56,
      type: "single",
      difficulty: 2,
      question: "A stored procedure with EXECUTE AS OWNER creates a table. Who owns the newly created table?",
      options: ["The role that called the procedure", "The role that owns the procedure", "The SYSADMIN role", "The PUBLIC role"],
      correct: [1],
      concept: "In an owner\'s rights stored procedure (EXECUTE AS OWNER), all SQL statements execute with the privileges of the owning role. Any objects created (like tables) are owned by the procedure\'s owner role, not the caller\'s role."
    },
    {
      id: 57,
      type: "single",
      difficulty: 2,
      question: "What is the minimum interval for a task schedule using the MINUTE syntax?",
      options: ["1 MINUTE", "5 MINUTE", "10 MINUTE", "15 MINUTE"],
      correct: [0],
      concept: "The minimum interval for a task schedule using the simple MINUTE syntax is 1 MINUTE (SCHEDULE = \'1 MINUTE\'). However, for CRON schedules, the finest granularity is also 1 minute."
    },
    {
      id: 58,
      type: "single",
      difficulty: 2,
      question: "Which system function provides information about why a task was not run?",
      options: ["SYSTEM$TASK_STATUS()", "SYSTEM$GET_TASK_ERROR()", "TASK_HISTORY() with error_message column", "SYSTEM$TASK_SKIP_REASON()"],
      correct: [2],
      concept: "TASK_HISTORY() includes columns like STATE, ERROR_MESSAGE, and CONDITION_TEXT that explain why a task did not run or failed. If a task was skipped due to a WHEN condition, the state shows SKIPPED."
    },
    {
      id: 59,
      type: "single",
      difficulty: 2,
      question: "How does Snowflake handle the CURRVAL of a sequence if NEXTVAL has not been called in the current session?",
      options: ["It returns the last value generated by any session", "It returns NULL", "It returns an error", "It returns the START value of the sequence"],
      correct: [2],
      concept: "In Snowflake, calling CURRVAL before NEXTVAL in the same session results in an error. CURRVAL is only valid after NEXTVAL has been called at least once in the current session. This differs from some other databases."
    },
    {
      id: 60,
      type: "single",
      difficulty: 2,
      question: "What happens to child tasks when the root task of a DAG is suspended?",
      options: ["Child tasks continue running on their own schedule", "Child tasks are automatically suspended as well", "Child tasks are dropped", "Child tasks enter a PENDING state until the root is resumed"],
      correct: [1],
      concept: "When the root task is suspended, the entire DAG stops executing. Child tasks do not run independently — they depend on the root task\'s schedule to trigger the DAG. Suspending the root effectively suspends the entire DAG."
    },
    {
      id: 61,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are valid scheduling options for a Snowflake task? (Select all that apply)",
      options: ["SCHEDULE = \'5 MINUTE\'", "SCHEDULE = \'USING CRON 0 9 * * * UTC\'", "SCHEDULE = \'DAILY\'", "SCHEDULE = \'USING CRON */15 * * * * America/New_York\'"],
      correct: [0, 1, 3],
      concept: "Tasks support two scheduling methods: simple interval (\'N MINUTE\') and CRON expressions (\'USING CRON expr timezone\'). \'DAILY\' is not a valid schedule syntax. CRON expressions support timezone specification."
    },
    {
      id: 62,
      type: "multi",
      difficulty: 2,
      question: "Which languages are supported for writing UDFs in Snowflake? (Select all that apply)",
      options: ["JavaScript", "Python", "Java", "R"],
      correct: [0, 1, 2],
      concept: "Snowflake UDFs can be written in SQL, JavaScript, Python, Java, and Scala. R is not natively supported as a UDF language in Snowflake. External functions can be used to call R code via external services."
    },
    {
      id: 63,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are true about serverless tasks? (Select all that apply)",
      options: ["No WAREHOUSE parameter is specified in the task definition", "Snowflake automatically manages compute resources", "Serverless tasks are always free of charge", "Serverless tasks can scale compute based on workload"],
      correct: [0, 1, 3],
      concept: "Serverless tasks omit the WAREHOUSE parameter, letting Snowflake manage compute. Snowflake can scale resources as needed. Serverless tasks are NOT free — you are billed for the compute used, at a per-second rate with Snowflake-managed pricing."
    },
    {
      id: 64,
      type: "multi",
      difficulty: 2,
      question: "Which columns are available in the TASK_HISTORY output? (Select all that apply)",
      options: ["QUERY_ID", "STATE", "SCHEDULED_TIME", "WAREHOUSE_SIZE"],
      correct: [0, 1, 2],
      concept: "TASK_HISTORY includes QUERY_ID (the query executed), STATE (SUCCEEDED, FAILED, SKIPPED), SCHEDULED_TIME (when the task was scheduled to run), and other columns like ERROR_MESSAGE, COMPLETED_TIME, etc. WAREHOUSE_SIZE is not a standard column in TASK_HISTORY."
    },
    {
      id: 65,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are valid properties of a sequence in Snowflake? (Select all that apply)",
      options: ["START value", "INCREMENT value", "MAXVALUE limit", "CYCLE option"],
      correct: [0, 1],
      concept: "Snowflake sequences support START (initial value) and INCREMENT (step size). Unlike some databases, Snowflake sequences do NOT support MAXVALUE, MINVALUE, or CYCLE options. Sequences in Snowflake always generate increasing or decreasing values without cycling."
    },
    {
      id: 66,
      type: "multi",
      difficulty: 2,
      question: "Which statements about JavaScript stored procedures in Snowflake are correct? (Select all that apply)",
      options: ["They use snowflake.execute() to run SQL statements", "They can return tabular results directly", "They support try-catch for error handling", "They run in a sandboxed JavaScript environment"],
      correct: [0, 2, 3],
      concept: "JavaScript stored procedures use snowflake.execute() for SQL, support try-catch error handling, and run in a sandboxed environment. They return scalar values (not tabular results directly) — to return tabular results, you need a UDTF."
    },
    {
      id: 67,
      type: "multi",
      difficulty: 2,
      question: "Which of the following statements about task conditions (WHEN clause) are true? (Select all that apply)",
      options: ["The WHEN condition is evaluated by the cloud services layer without warehouse compute", "SYSTEM$STREAM_HAS_DATA() is the most common function used in task conditions", "The WHEN clause can contain any arbitrary SQL subquery", "If the WHEN condition is FALSE, the task run is recorded as SKIPPED"],
      correct: [0, 1, 3],
      concept: "The WHEN clause is evaluated by cloud services (no warehouse cost). SYSTEM$STREAM_HAS_DATA() is commonly used. The WHEN clause supports only boolean expressions using specific system functions — arbitrary SQL subqueries are not allowed. Skipped runs are recorded in TASK_HISTORY."
    },
    {
      id: 68,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are differences between UDFs and stored procedures? (Select all that apply)",
      options: ["UDFs return values and can be used in SELECT; procedures use CALL syntax", "Procedures can execute DDL statements; UDFs cannot", "UDFs support caller\'s rights; procedures do not", "Procedures can have side effects like creating objects; UDFs should not"],
      correct: [0, 1, 3],
      concept: "UDFs are used in expressions (SELECT my_udf()) and return values. Procedures use CALL syntax and can execute DDL, DML, and have side effects. Both UDFs and procedures support owner\'s/caller\'s rights. UDFs should be side-effect-free."
    },
    {
      id: 69,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are true about finalizer tasks? (Select all that apply)",
      options: ["A finalizer task runs regardless of whether predecessor tasks succeeded or failed", "A DAG can have at most one finalizer task", "A finalizer task can have its own child tasks", "A finalizer task is defined using the FINALIZE clause"],
      correct: [0, 1, 3],
      concept: "Finalizer tasks run after all other tasks in the DAG complete, regardless of success or failure. Each DAG can have at most one finalizer task. The finalizer is defined using the FINALIZE = \'root_task_name\' clause. Finalizer tasks cannot have child tasks."
    },
    {
      id: 70,
      type: "multi",
      difficulty: 2,
      question: "Which operations require the root task to be suspended first in a task DAG? (Select all that apply)",
      options: ["Adding a new child task to the DAG", "Modifying the SQL body of a child task", "Viewing the task history of a child task", "Changing the warehouse of a child task"],
      correct: [0, 1, 3],
      concept: "Any modification to the DAG structure or task properties (adding tasks, modifying SQL, changing warehouses) requires the root task to be suspended first. Viewing task history is a read-only operation that does not require suspension."
    },
    {
      id: 71,
      type: "multi",
      difficulty: 3,
      question: "Which of the following are true about the EXECUTE TASK privilege? (Select all that apply)",
      options: ["It is an account-level privilege", "It must be granted to the task owner role for the task to run on schedule", "It allows any user with the privilege to manually trigger any task", "Without it, tasks owned by the role will not execute on their schedule"],
      correct: [0, 1, 3],
      concept: "EXECUTE TASK is an account-level privilege that must be granted to the task owner role. Without it, tasks owned by that role will not run on schedule. It does not allow manual triggering of any task — manual execution requires OPERATE or OWNERSHIP on the specific task."
    },
    {
      id: 72,
      type: "multi",
      difficulty: 3,
      question: "Which of the following are valid ways to handle errors in a JavaScript stored procedure? (Select all that apply)",
      options: ["Using try-catch blocks around snowflake.execute() calls", "Checking the resultSet.getStatus() for error codes", "Throwing custom exceptions with throw new Error()", "Using snowflake.log() to record error messages"],
      correct: [0, 2],
      concept: "JavaScript stored procedures support try-catch for error handling and can throw custom exceptions. There is no getStatus() method on resultSet. Snowflake does support snowflake.log() for logging in Snowpark procedures, but in classic JavaScript procedures, error handling relies on try-catch."
    },
    {
      id: 73,
      type: "multi",
      difficulty: 3,
      question: "Which of the following system functions are useful for managing and monitoring tasks? (Select all that apply)",
      options: ["SYSTEM$TASK_DEPENDENTS()", "SYSTEM$STREAM_HAS_DATA()", "TASK_HISTORY()", "SYSTEM$TASK_RUNTIME_INFO()"],
      correct: [0, 1, 2],
      concept: "SYSTEM$TASK_DEPENDENTS() shows the task dependency tree. SYSTEM$STREAM_HAS_DATA() is used in task WHEN conditions. TASK_HISTORY() provides execution history. SYSTEM$TASK_RUNTIME_INFO() is not a standard Snowflake function."
    },
    {
      id: 74,
      type: "multi",
      difficulty: 3,
      question: "Which of the following scenarios would cause a child task in a DAG to be skipped? (Select all that apply)",
      options: ["Its predecessor task failed", "Its WHEN condition evaluates to FALSE", "The root task was manually executed with EXECUTE TASK but a predecessor was skipped", "The warehouse assigned to the child task is suspended"],
      correct: [0, 1, 2],
      concept: "A child task is skipped if its predecessor failed, if its own WHEN condition is FALSE, or if its predecessor was skipped (cascading skip). If the warehouse is suspended, the task fails rather than being skipped — it needs compute to run."
    },
    {
      id: 75,
      type: "multi",
      difficulty: 3,
      question: "Which of the following are true about sequences in multi-row operations? (Select all that apply)",
      options: ["Each row in a multi-row INSERT gets a unique sequence value", "Sequence values are guaranteed to be contiguous with no gaps", "Sequences advance atomically, preventing duplicates across concurrent sessions", "NEXTVAL can be used in DEFAULT column definitions"],
      correct: [0, 2, 3],
      concept: "In multi-row operations, each row gets a unique value. Sequences are atomic (no duplicates). NEXTVAL can be used in column defaults. However, values are NOT guaranteed to be contiguous — gaps can occur due to caching, rollbacks, or internal optimization."
    },
    {
      id: 76,
      type: "single",
      difficulty: 3,
      question: "You create a task with SCHEDULE = \'USING CRON */5 * * * * America/New_York\'. The task warehouse is suspended. What happens at the scheduled time?",
      options: ["The task is skipped because the warehouse is not available", "The warehouse is automatically resumed, the task runs, and the warehouse is suspended after", "The task fails with a warehouse unavailable error", "The warehouse is resumed, the task runs, but the warehouse remains running"],
      correct: [1],
      concept: "When a task is scheduled to run, Snowflake automatically resumes the specified warehouse if it is suspended. After the task completes, the warehouse auto-suspends based on its auto-suspend setting. Tasks do not fail due to a suspended warehouse."
    },
    {
      id: 77,
      type: "single",
      difficulty: 3,
      question: "A sequence has ORDER specified vs NOORDER. What is the performance implication?",
      options: ["ORDER sequences are faster because they use parallel generation", "NOORDER sequences are faster because they do not need cross-node coordination for value ordering", "There is no performance difference; ORDER and NOORDER produce identical behavior", "ORDER sequences use less storage because values are compressed"],
      correct: [1],
      concept: "NOORDER sequences are faster because each compute node can generate values independently without coordinating with other nodes. ORDER sequences require cross-node coordination to ensure strictly increasing values, which adds latency. NOORDER is the default and recommended for most use cases."
    },
    {
      id: 78,
      type: "single",
      difficulty: 3,
      question: "You have a task DAG where Task A is the root, Tasks B and C depend on A, and Task D depends on both B and C. If Task B fails but Task C succeeds, what happens to Task D?",
      options: ["Task D runs because at least one predecessor succeeded", "Task D is skipped because not all predecessors succeeded", "Task D runs but receives an error flag from Task B", "Task D waits until Task B is retried and succeeds"],
      correct: [1],
      concept: "In Snowflake task DAGs, a child task runs only when ALL of its predecessors succeed. If any predecessor fails, the child task is skipped. Task D requires both B and C to succeed, so it is skipped when B fails."
    },
    {
      id: 79,
      type: "single",
      difficulty: 3,
      question: "A stored procedure is created with EXECUTE AS OWNER. The owner role has SELECT on table T, but the caller role has SELECT and INSERT on table T. The procedure tries to INSERT into table T. What happens?",
      options: ["The INSERT succeeds because the caller has INSERT privilege", "The INSERT fails because the owner role does not have INSERT privilege", "The INSERT succeeds because combined privileges are used", "The INSERT fails because owner\'s rights procedures cannot execute DML"],
      correct: [1],
      concept: "In owner\'s rights procedures (EXECUTE AS OWNER), all SQL executes with the owner\'s privileges only. The caller\'s privileges are irrelevant. Since the owner only has SELECT (not INSERT) on table T, the INSERT will fail with a privilege error."
    },
    {
      id: 80,
      type: "single",
      difficulty: 3,
      question: "What is the effect of using ALLOW_OVERLAPPING_EXECUTION = TRUE on a root task with child tasks?",
      options: ["Only the root task can overlap; child tasks still wait for the previous DAG run to complete", "Multiple complete DAG runs can execute simultaneously, including all child tasks", "Each child task can overlap independently of the root task", "Overlapping is not allowed for tasks in a DAG; this parameter is ignored"],
      correct: [1],
      concept: "When ALLOW_OVERLAPPING_EXECUTION = TRUE is set on the root task, a new DAG run can start even if the previous run is still in progress. This means multiple complete executions of the entire DAG (root and all children) can run concurrently."
    },
    {
      id: 81,
      type: "single",
      difficulty: 3,
      question: "You need a stored procedure that creates temporary tables and performs multi-step transformations. The calling user should not need direct access to the source tables. Which rights model should you use?",
      options: ["Caller\'s rights, so the procedure can create objects in the caller\'s context", "Owner\'s rights, so the procedure\'s owner role provides access to source tables", "Either works; rights model does not affect access to source tables", "Caller\'s rights with GRANT SELECT to the calling user"],
      correct: [1],
      concept: "Owner\'s rights (EXECUTE AS OWNER) is appropriate when the procedure needs to access objects the caller cannot directly access. The owner role\'s privileges are used, so the caller doesn\'t need direct SELECT on source tables. This is useful for controlled data access patterns."
    },
    {
      id: 82,
      type: "single",
      difficulty: 3,
      question: "What happens if you try to resume a child task in a DAG without resuming the root task?",
      options: ["The child task starts running independently of the DAG", "The child task is resumed but will not run until the root task is also resumed and triggers the DAG", "An error occurs because child tasks cannot be individually resumed", "The root task is automatically resumed as well"],
      correct: [1],
      concept: "Child tasks in a DAG can be individually resumed, but they will not execute until the root task is also resumed and triggers a DAG run. The root task controls the schedule, and child tasks only run when triggered by their predecessors in the DAG."
    },
    {
      id: 83,
      type: "single",
      difficulty: 3,
      question: "A JavaScript UDF processes NULL input values. How are SQL NULLs represented in JavaScript UDFs?",
      options: ["As the string \'NULL\'", "As JavaScript null", "As JavaScript undefined", "As the number 0"],
      correct: [2],
      concept: "In Snowflake JavaScript UDFs, SQL NULL values are passed as JavaScript undefined (not null). This is an important distinction because null === undefined is false in JavaScript. You should check for undefined when handling NULL inputs."
    },
    {
      id: 84,
      type: "single",
      difficulty: 3,
      question: "You want to ensure a task DAG sends a notification email whether the DAG succeeds or fails. Which approach should you use?",
      options: ["Add a WHEN condition to the last child task that sends an email", "Use a finalizer task that calls a stored procedure to send notifications", "Add email logic to every task in the DAG", "Use a separate scheduled task that monitors the DAG and sends emails"],
      correct: [1],
      concept: "A finalizer task runs regardless of DAG success or failure, making it the ideal place for notification logic. The finalizer can call a stored procedure that uses an email integration or notification integration to send status alerts."
    },
    {
      id: 85,
      type: "single",
      difficulty: 3,
      question: "A task references a stream in its WHEN condition and also consumes the stream in its SQL body. If the WHEN condition evaluates to TRUE and the task runs, what happens to the stream offset?",
      options: ["The stream offset advances only if the task SQL commits successfully", "The stream offset advances as soon as the WHEN condition is evaluated", "The stream offset never advances; tasks cannot consume streams", "The stream offset advances regardless of whether the task SQL succeeds or fails"],
      correct: [0],
      concept: "The stream offset advances only when the DML in the task body completes successfully (i.e., the transaction commits). If the task fails, the stream offset is not advanced, and the same data will be available for the next task run."
    },
    {
      id: 86,
      type: "tf",
      difficulty: 3,
      question: "A Snowflake task can execute multiple SQL statements in its body without using a stored procedure.",
      options: ["True, tasks support multiple SQL statements separated by semicolons in the AS clause", "False, a task can only execute a single SQL statement; for multiple statements, you must use a stored procedure"],
      correct: [1],
      concept: "A Snowflake task can execute only a single SQL statement in its AS clause. To execute multiple SQL statements, you must create a stored procedure containing all the logic and have the task CALL that stored procedure."
    },
    {
      id: 87,
      type: "tf",
      difficulty: 3,
      question: "Sequences in Snowflake guarantee contiguous (gapless) values when used in INSERT statements.",
      options: ["True, sequences always produce contiguous values without gaps in normal INSERT operations", "False, sequences may produce gaps due to caching, failed transactions, or internal optimization"],
      correct: [1],
      concept: "Snowflake sequences do NOT guarantee contiguous values. Gaps can occur due to sequence value caching for performance, failed transactions, rollbacks, or internal optimizations. Sequences guarantee uniqueness, not contiguity."
    },
    {
      id: 88,
      type: "tf",
      difficulty: 3,
      question: "A child task in a DAG can have its own SCHEDULE defined independently of the root task.",
      options: ["True, child tasks can have independent schedules that override the DAG execution order", "False, only the root task has a schedule; child tasks are triggered by their predecessors"],
      correct: [1],
      concept: "Only the root task in a DAG has a schedule (CRON or MINUTE). Child tasks do not have their own schedules — they are triggered when their predecessor tasks complete successfully. Specifying a schedule on a child task (one with an AFTER clause) is not allowed."
    },
    {
      id: 89,
      type: "tf",
      difficulty: 3,
      question: "A JavaScript UDF can modify data in Snowflake tables using INSERT or UPDATE statements.",
      options: ["True, JavaScript UDFs can execute DML statements just like stored procedures", "False, UDFs cannot execute DML statements; they can only return computed values"],
      correct: [1],
      concept: "UDFs (including JavaScript UDFs) cannot execute DML or DDL statements. They are designed to compute and return values based on input parameters. For data modification, use stored procedures instead."
    },
    {
      id: 90,
      type: "tf",
      difficulty: 3,
      question: "The EXECUTE TASK command can only be used on tasks that are currently in the SUSPENDED state.",
      options: ["True, EXECUTE TASK requires the task to be in SUSPENDED state for manual execution", "False, EXECUTE TASK can be used on tasks in any state including STARTED"],
      correct: [0],
      concept: "EXECUTE TASK can only be used to manually trigger tasks that are in the SUSPENDED state. If a task is in the STARTED state (actively scheduled), you must first suspend it before using EXECUTE TASK for a manual run."
    },
    {
      id: 91,
      type: "tf",
      difficulty: 3,
      question: "In Snowflake, stored procedures can return tabular results (multiple rows and columns) directly.",
      options: ["True, stored procedures can return TABLE results using the RETURNS TABLE(...) syntax", "False, stored procedures can only return scalar values like a single string or number"],
      correct: [0],
      concept: "Snowflake stored procedures support RETURNS TABLE(...) syntax to return tabular results. This allows procedures to return multiple rows and columns. For example: CREATE PROCEDURE ... RETURNS TABLE(name VARCHAR, age INT) ... This was introduced for Snowpark-based procedures."
    },
    {
      id: 92,
      type: "tf",
      difficulty: 3,
      question: "A task with a WHEN condition of SYSTEM$STREAM_HAS_DATA(\'my_stream\') will consume warehouse credits even when the stream has no data.",
      options: ["True, the warehouse is started to evaluate the WHEN condition each time", "False, the WHEN condition is evaluated by the cloud services layer without starting the warehouse"],
      correct: [1],
      concept: "The WHEN condition is evaluated by Snowflake\'s cloud services layer, not by the warehouse. If the condition is FALSE (stream has no data), the warehouse is never started and no warehouse credits are consumed. Only the minimal cloud services cost applies."
    },
    {
      id: 93,
      type: "tf",
      difficulty: 3,
      question: "A sequence can be shared with consumers via Snowflake data sharing.",
      options: ["True, sequences can be included in shares just like tables and views", "False, sequences cannot be shared through Snowflake data sharing"],
      correct: [1],
      concept: "Sequences cannot be shared via Snowflake data sharing. Only tables, secure views, and secure UDFs can be shared. If consumers need auto-incrementing values, they must create their own sequences in their account."
    },
    {
      id: 94,
      type: "tf",
      difficulty: 3,
      question: "In a caller\'s rights stored procedure, the procedure can access the caller\'s session variables and temporary tables.",
      options: ["True, caller\'s rights procedures execute in the caller\'s session context and can access their session variables and temporary tables", "False, stored procedures always run in an isolated session regardless of the rights model"],
      correct: [0],
      concept: "Caller\'s rights procedures (EXECUTE AS CALLER) run in the caller\'s session context, giving them access to the caller\'s session variables, temporary tables, and session-level settings. Owner\'s rights procedures may not have this access."
    },
    {
      id: 95,
      type: "tf",
      difficulty: 3,
      question: "Snowflake supports creating tasks with both a SCHEDULE and an AFTER clause on the same task.",
      options: ["True, you can define both to have a scheduled task that also depends on another task", "False, a task can have either a SCHEDULE (root task) or an AFTER clause (child task), but not both"],
      correct: [1],
      concept: "A task is either a root task (with SCHEDULE) or a child task (with AFTER clause), but not both. A root task defines the schedule for the entire DAG. A child task is triggered by its predecessor. Having both would create conflicting execution triggers."
    },
    {
      id: 96,
      type: "tf",
      difficulty: 3,
      question: "The TASK_HISTORY table function in INFORMATION_SCHEMA can be filtered to show only failed task executions.",
      options: ["True, TASK_HISTORY supports filtering by various parameters including error status to show only failed executions", "False, TASK_HISTORY returns all executions and cannot be filtered by status"],
      correct: [0],
      concept: "TASK_HISTORY can be filtered using various parameters. You can add a WHERE clause on the STATE column to filter for FAILED executions: SELECT * FROM TABLE(INFORMATION_SCHEMA.TASK_HISTORY()) WHERE STATE = \'FAILED\'; It also supports TASK_NAME and TIME_RANGE filters."
    },
    {
      id: 97,
      type: "tf",
      difficulty: 3,
      question: "A JavaScript stored procedure can call another stored procedure using the CALL statement via snowflake.execute().",
      options: ["True, JavaScript stored procedures can call other stored procedures using snowflake.execute({sqlText: \"CALL my_other_procedure()\"})", "False, stored procedures cannot call other stored procedures in Snowflake"],
      correct: [0],
      concept: "JavaScript stored procedures can call other stored procedures by passing a CALL statement to snowflake.execute(). This allows for modular procedure design where complex logic is broken into reusable procedures that call each other."
    },
    {
      id: 98,
      type: "tf",
      difficulty: 3,
      question: "When a root task is resumed, all child tasks in the DAG are automatically resumed as well.",
      options: ["True, resuming the root task automatically resumes all child tasks in the DAG", "False, each child task must be individually resumed before the root task is resumed for the DAG to execute completely"],
      correct: [1],
      concept: "Resuming the root task does NOT automatically resume child tasks. Each child task must be individually resumed using ALTER TASK child_name RESUME. If any child task is suspended when the DAG runs, that branch of the DAG will be skipped."
    },
    {
      id: 99,
      type: "tf",
      difficulty: 3,
      question: "Python UDFs in Snowflake can import third-party packages from Anaconda.",
      options: ["True, Python UDFs can use packages from the Snowflake Anaconda channel specified in the PACKAGES clause", "False, Python UDFs can only use the Python standard library with no external packages"],
      correct: [0],
      concept: "Python UDFs support importing third-party packages from the Snowflake Anaconda channel. You specify packages in the PACKAGES clause: CREATE FUNCTION ... PACKAGES = (\'numpy\', \'pandas\') ... This enables powerful data processing capabilities within UDFs."
    },
    {
      id: 100,
      type: "tf",
      difficulty: 3,
      question: "The ORDER BY clause guarantees that sequence values assigned in a multi-row INSERT will follow the same order as the sorted rows.",
      options: ["True, ORDER BY in INSERT ... SELECT ensures sequence values are assigned in the specified sort order", "False, the assignment of sequence values to rows is not guaranteed to follow the ORDER BY sequence"],
      correct: [1],
      concept: "Snowflake does not guarantee that sequence values will be assigned in the order specified by ORDER BY. The internal execution plan may assign sequence values in a different order than the sort order. If you need ordered sequence values, you should use ROW_NUMBER() window function instead."
    }
  ]
};

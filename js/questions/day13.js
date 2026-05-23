window.QUIZ_DATA = window.QUIZ_DATA || {};
window.QUIZ_DATA["day13"] = {
  title: "Advanced SQL for DE",
  category: "de",
  topics: ["Window Functions Deep Dive", "CTEs & Recursive CTEs", "Query Optimization", "Execution Plans", "Performance Patterns"],
  questions: [
    {
      id: 1,
      type: "single",
      difficulty: 1,
      topic: "Window Functions Deep Dive",
      question: "What does the ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW frame specification define in a window function?",
      options: ["All rows from the current row to the end of the partition", "All rows from the start of the partition up to and including the current row", "Only the current row itself", "All rows in the entire partition regardless of position"],
      correct: [1],
      concept: "ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW defines a frame starting from the first row of the partition and ending at the current row. This is the default frame for aggregate window functions when ORDER BY is specified and creates a running/cumulative calculation."
    },
    {
      id: 2,
      type: "single",
      difficulty: 1,
      topic: "Window Functions Deep Dive",
      question: "What is the difference between ROWS and RANGE frame specifications in window functions?",
      options: ["ROWS counts physical row positions while RANGE considers logical value ranges for peers", "ROWS is used for numeric data while RANGE is used for string data", "RANGE is faster because it processes fewer rows", "There is no difference; they are interchangeable keywords"],
      correct: [0],
      concept: "ROWS defines the frame based on physical row positions (e.g., 3 rows before). RANGE defines the frame based on logical value ranges, treating rows with the same ORDER BY value (peers) as a group. For example, RANGE BETWEEN 1 PRECEDING means values within 1 unit of the current row\'s value."
    },
    {
      id: 3,
      type: "single",
      difficulty: 1,
      topic: "Window Functions Deep Dive",
      question: "What does the PERCENT_RANK() window function calculate?",
      options: ["The percentile of each row within the total dataset", "The relative rank of a row as (rank - 1) / (total_rows - 1), returning values between 0 and 1", "The percentage of rows that have a lower value than the current row", "The rank of each row expressed as a percentage of the partition size"],
      correct: [1],
      concept: "PERCENT_RANK() calculates the relative rank of a row within its partition using the formula (rank - 1) / (total_rows - 1). The first row always gets 0 and the last row gets 1. It is useful for percentile-based analysis and normalization of rankings across partitions of different sizes."
    },
    {
      id: 4,
      type: "single",
      difficulty: 1,
      topic: "Window Functions Deep Dive",
      question: "What does CUME_DIST() return for a given row in a window partition?",
      options: ["The cumulative sum of all values up to the current row", "The fraction of rows with values less than or equal to the current row\'s value", "The distance between the current row and the partition boundary", "The cumulative count of distinct values in the partition"],
      correct: [1],
      concept: "CUME_DIST() (Cumulative Distribution) returns the fraction of partition rows that have a value less than or equal to the current row\'s value. It ranges from 0 (exclusive) to 1 (inclusive). Unlike PERCENT_RANK, CUME_DIST never returns 0 and always reaches 1 for the last row(s)."
    },
    {
      id: 5,
      type: "single",
      difficulty: 1,
      topic: "Window Functions Deep Dive",
      question: "What does NTH_VALUE(column, n) return in a window function?",
      options: ["The value of the column in the nth row of the entire table", "The value of the column from the nth row within the window frame", "The nth highest value in the partition", "Every nth row from the partition"],
      correct: [1],
      concept: "NTH_VALUE(column, n) returns the value from the nth row within the defined window frame. If the frame does not contain n rows, it returns NULL. It is useful for accessing specific positional values like the 2nd highest salary. The frame specification determines which rows are included."
    },
    {
      id: 6,
      type: "single",
      difficulty: 1,
      topic: "CTEs & Recursive CTEs",
      question: "What is a Common Table Expression (CTE) in SQL?",
      options: ["A permanent table created for temporary use during a session", "A named temporary result set defined with the WITH clause that exists only for the duration of a single query", "A cached query result stored in memory for repeated use across multiple queries", "A materialized view that updates automatically"],
      correct: [1],
      concept: "A CTE is a named temporary result set defined using the WITH keyword. It exists only for the duration of the single SQL statement that follows it. CTEs improve readability by breaking complex queries into logical blocks and can be referenced multiple times within the same statement."
    },
    {
      id: 7,
      type: "single",
      difficulty: 1,
      topic: "CTEs & Recursive CTEs",
      question: "What are the two parts of a recursive CTE?",
      options: ["A CREATE part and a SELECT part", "An anchor member and a recursive member joined by UNION ALL", "A header part and a footer part", "A base query and a filter query joined by INTERSECT"],
      correct: [1],
      concept: "A recursive CTE has two parts: the anchor member (base case) that provides initial rows, and the recursive member that references the CTE itself and iterates until no new rows are produced. These parts are combined with UNION ALL. The anchor member executes once; the recursive member repeats until the termination condition is met."
    },
    {
      id: 8,
      type: "single",
      difficulty: 1,
      topic: "CTEs & Recursive CTEs",
      question: "What happens if a recursive CTE has no termination condition?",
      options: ["The query returns an empty result set", "The recursion runs indefinitely until the database hits a maximum recursion depth limit or runs out of resources", "The database automatically detects the cycle and stops after one iteration", "The CTE is silently converted to a non-recursive CTE"],
      correct: [1],
      concept: "Without a termination condition (WHERE clause that eventually produces no rows), a recursive CTE will loop infinitely. Most databases have a maximum recursion limit (e.g., SQL Server defaults to 100, PostgreSQL has no default limit but can set one). Hitting the limit raises an error."
    },
    {
      id: 9,
      type: "single",
      difficulty: 1,
      topic: "Query Optimization",
      question: "What is \'subquery flattening\' (or subquery unnesting) in query optimization?",
      options: ["Converting a nested subquery into a simpler flat file format", "The optimizer transforming a correlated subquery into an equivalent JOIN for better performance", "Removing all subqueries from a query and replacing them with temporary tables", "Flattening the results of a subquery into a single row"],
      correct: [1],
      concept: "Subquery flattening (unnesting) is an optimization where the optimizer rewrites a correlated subquery as an equivalent JOIN. This allows the optimizer to choose better join strategies (hash join, merge join) instead of executing the subquery once per row, often dramatically improving performance."
    },
    {
      id: 10,
      type: "single",
      difficulty: 1,
      topic: "Query Optimization",
      question: "What is \'view inlining\' in the context of query optimization?",
      options: ["Converting a view definition into a materialized table", "The optimizer expanding the view definition into the query, treating it as an inline subquery", "Caching view results for faster subsequent access", "Physically storing view data alongside the base table"],
      correct: [1],
      concept: "View inlining occurs when the optimizer replaces a view reference with the view\'s underlying SQL definition, merging it into the main query. This allows the optimizer to optimize the combined query holistically, potentially pushing predicates into the view or choosing better join orders than treating the view as a black box."
    },
    {
      id: 11,
      type: "single",
      difficulty: 1,
      topic: "Execution Plans",
      question: "What command is used to display the execution plan of a query without running it in PostgreSQL?",
      options: ["SHOW PLAN FOR SELECT ...", "DESCRIBE SELECT ...", "EXPLAIN SELECT ...", "ANALYZE SELECT ..."],
      correct: [2],
      concept: "EXPLAIN displays the estimated execution plan showing operators, costs, and row estimates without executing the query. EXPLAIN ANALYZE actually runs the query and shows both estimated and actual metrics. SHOW PLAN and DESCRIBE are not the standard PostgreSQL syntax for execution plans."
    },
    {
      id: 12,
      type: "single",
      difficulty: 1,
      topic: "Execution Plans",
      question: "In an execution plan, what does \'Seq Scan\' (Sequential Scan) indicate?",
      options: ["The database is scanning an index sequentially", "The database is reading every row of the table from disk in order", "The database is performing a parallel scan across multiple CPU cores", "The database is scanning only the first sequence of matching rows"],
      correct: [1],
      concept: "A Sequential Scan (Seq Scan in PostgreSQL, Table Scan in SQL Server) means the database reads every row in the table to find matching rows. This is the default access method when no suitable index exists or when the optimizer determines a full scan is cheaper than an index lookup."
    },
    {
      id: 13,
      type: "single",
      difficulty: 1,
      topic: "Performance Patterns",
      question: "Why is SELECT * considered an anti-pattern for performance in production data engineering pipelines?",
      options: ["SELECT * causes syntax warnings in all modern databases", "It fetches all columns including unnecessary ones, increasing I/O and preventing covering index usage", "It is slower because the database must parse the asterisk symbol", "SELECT * is only an anti-pattern for tables with more than 100 columns"],
      correct: [1],
      concept: "SELECT * retrieves all columns, causing unnecessary I/O, memory consumption, and network traffic. It prevents covering index optimizations and breaks downstream code when table schemas change. In data pipelines, always specify explicit columns to ensure predictability and performance."
    },
    {
      id: 14,
      type: "single",
      difficulty: 1,
      topic: "Performance Patterns",
      question: "What is \'batch processing\' in the context of SQL data operations?",
      options: ["Running queries only during off-peak hours", "Processing large datasets in smaller, manageable chunks rather than all at once", "Using batch files to automate SQL script execution", "Grouping DDL statements together for atomic execution"],
      correct: [1],
      concept: "Batch processing in SQL involves breaking large data operations (inserts, updates, deletes) into smaller chunks (e.g., 10,000 rows at a time). This reduces lock duration, transaction log size, memory pressure, and allows other operations to interleave, improving overall system responsiveness."
    },
    {
      id: 15,
      type: "single",
      difficulty: 1,
      topic: "Window Functions Deep Dive",
      question: "What is the default window frame when an ORDER BY is specified in a window function?",
      options: ["ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING", "RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW", "ROWS BETWEEN CURRENT ROW AND UNBOUNDED FOLLOWING", "ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING"],
      correct: [1],
      concept: "When ORDER BY is specified without an explicit frame clause, the default frame is RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW. This means for aggregate functions like SUM(), the result is a running total. Note it uses RANGE (not ROWS), so peer rows (same ORDER BY value) are included together."
    },
    {
      id: 16,
      type: "single",
      difficulty: 1,
      topic: "CTEs & Recursive CTEs",
      question: "Can you reference a CTE multiple times within the same query?",
      options: ["No, a CTE can only be referenced once", "Yes, a CTE can be referenced multiple times in the same query statement", "Only if the CTE is materialized explicitly", "Only in databases that support WITH RECURSIVE"],
      correct: [1],
      concept: "A CTE can be referenced multiple times within the same query. This is one advantage of CTEs over inline subqueries — you define the logic once and use it in multiple places (e.g., self-joining a CTE). Whether the database materializes or re-evaluates the CTE depends on the optimizer."
    },
    {
      id: 17,
      type: "single",
      difficulty: 1,
      topic: "Execution Plans",
      question: "What does \'Index Scan\' mean in an execution plan?",
      options: ["The database is rebuilding the index", "The database is using an index to find matching rows, then fetching full rows from the table", "The database is scanning the entire table using a hash function", "The database is sorting the index entries before returning results"],
      correct: [1],
      concept: "An Index Scan means the database traverses the index to find row locations matching the query predicates, then fetches the complete rows from the base table (a \'bookmark lookup\'). This is more efficient than a full table scan when only a small percentage of rows match."
    },
    {
      id: 18,
      type: "single",
      difficulty: 1,
      topic: "Performance Patterns",
      question: "What is the primary risk of using functions on indexed columns in WHERE clauses?",
      options: ["Functions cause data corruption in the indexed column", "Functions prevent the optimizer from using the index, forcing a full table scan", "Functions are not allowed in WHERE clauses and cause syntax errors", "Functions cause the index to be permanently dropped"],
      correct: [1],
      concept: "Applying a function to an indexed column (e.g., WHERE UPPER(name) = \'JOHN\') makes the predicate non-SARGable. The database cannot use the index because the stored index values differ from the computed function results. Instead, use function-based indexes or rewrite the query to avoid functions on indexed columns."
    },
    {
      id: 19,
      type: "single",
      difficulty: 1,
      topic: "Query Optimization",
      question: "What is a \'query hint\' in SQL?",
      options: ["A comment that documents the purpose of a query for other developers", "An instruction embedded in the query that directs the optimizer to use a specific strategy", "A suggestion from the database to improve query syntax", "A warning message displayed when a query has performance issues"],
      correct: [1],
      concept: "Query hints are directives that override the optimizer\'s automatic plan selection. Examples include forcing a specific join type (HASH JOIN, MERGE JOIN), forcing index usage (USE INDEX), or setting parallelism. Hints should be used sparingly since they prevent the optimizer from adapting to data changes."
    },
    {
      id: 20,
      type: "single",
      difficulty: 1,
      topic: "Window Functions Deep Dive",
      question: "What is a \'named window\' in SQL?",
      options: ["A window function that has been assigned to a variable", "A reusable window definition declared in the WINDOW clause that can be referenced by multiple window functions", "A window function with an alias in the SELECT list", "A window that spans multiple queries in a session"],
      correct: [1],
      concept: "A named window is defined using the WINDOW clause (e.g., WINDOW w AS (PARTITION BY dept ORDER BY salary)) and can be referenced by multiple window functions in the same query using OVER w. This avoids repeating the same window specification and improves readability."
    },
    {
      id: 21,
      type: "single",
      difficulty: 1,
      topic: "CTEs & Recursive CTEs",
      question: "Which keyword is required to create a recursive CTE in standard SQL?",
      options: ["WITH LOOP", "WITH ITERATE", "WITH RECURSIVE", "WITH REPEAT"],
      correct: [2],
      concept: "Standard SQL requires the WITH RECURSIVE keyword to declare a recursive CTE. In some databases like SQL Server, the RECURSIVE keyword is optional — any CTE that references itself is automatically treated as recursive. PostgreSQL and MySQL require WITH RECURSIVE explicitly."
    },
    {
      id: 22,
      type: "single",
      difficulty: 1,
      topic: "Execution Plans",
      question: "What does \'estimated cost\' represent in a query execution plan?",
      options: ["The actual dollar cost of running the query on cloud infrastructure", "A relative metric the optimizer uses to compare different plan alternatives based on estimated resource usage", "The exact number of seconds the query will take", "The amount of disk space the query results will consume"],
      correct: [1],
      concept: "Estimated cost is a unitless relative metric representing the optimizer\'s prediction of resource usage (CPU, I/O, memory). It is used internally to compare alternative plans and choose the cheapest one. The cost values are not in real time units and are only meaningful relative to other plans for the same query."
    },
    {
      id: 23,
      type: "single",
      difficulty: 1,
      topic: "Performance Patterns",
      question: "What does \'implicit type conversion\' mean in a SQL query context?",
      options: ["Explicitly casting a column using CAST() or CONVERT()", "The database automatically converting one data type to another when comparing different types in a predicate", "Converting query results to a different file format for export", "Changing a column\'s data type using ALTER TABLE"],
      correct: [1],
      concept: "Implicit type conversion occurs when the database automatically converts a value to match the data type of the column it is being compared to (e.g., comparing a VARCHAR column to an integer). This can prevent index usage and cause unexpected results due to type coercion rules."
    },
    {
      id: 24,
      type: "single",
      difficulty: 1,
      topic: "Window Functions Deep Dive",
      question: "What is the difference between RANK() and DENSE_RANK() when there are ties?",
      options: ["RANK() skips numbers after ties while DENSE_RANK() does not skip numbers", "DENSE_RANK() skips numbers after ties while RANK() does not", "Both produce identical results regardless of ties", "RANK() handles ties alphabetically while DENSE_RANK() handles them numerically"],
      correct: [0],
      concept: "With tied values, RANK() assigns the same rank to tied rows but skips subsequent numbers (1, 2, 2, 4). DENSE_RANK() also assigns the same rank to tied rows but does not skip numbers (1, 2, 2, 3). The choice depends on whether you need consecutive ranking or gap-aware ranking."
    },
    {
      id: 25,
      type: "single",
      difficulty: 1,
      topic: "Query Optimization",
      question: "What is \'join order optimization\' in the context of query processing?",
      options: ["Ensuring JOIN keywords appear in alphabetical order in the SQL text", "The optimizer determining the most efficient sequence in which to join multiple tables", "Reordering the columns in JOIN conditions for readability", "Sorting the results after all joins are completed"],
      correct: [1],
      concept: "Join order optimization determines which tables to join first when a query involves multiple joins. The order can dramatically affect performance because intermediate result set sizes vary. A cost-based optimizer evaluates different join orderings and picks the one with the lowest estimated cost."
    },
    {
      id: 26,
      type: "single",
      difficulty: 1,
      topic: "CTEs & Recursive CTEs",
      question: "What is a common use case for recursive CTEs in data engineering?",
      options: ["Optimizing query execution plans", "Traversing hierarchical data such as organizational charts or bill of materials", "Creating database indexes automatically", "Performing bulk data inserts"],
      correct: [1],
      concept: "Recursive CTEs excel at traversing hierarchical or graph-like data structures: organizational charts (manager-employee), bill of materials (parent-child components), file system paths, category trees, and network routing. They iteratively follow parent-child relationships until the hierarchy is fully traversed."
    },
    {
      id: 27,
      type: "single",
      difficulty: 1,
      topic: "Execution Plans",
      question: "What does \'Hash Join\' in an execution plan signify about the join strategy?",
      options: ["The database is using a hash function to encrypt the join results", "One table is loaded into a hash table in memory, then the other table is probed against it to find matches", "The join is performed by sorting both tables by the join key", "The database is using a nested loop to compare every row pair"],
      correct: [1],
      concept: "A Hash Join builds a hash table from the smaller table (build phase) using the join key, then scans the larger table and probes the hash table for matches (probe phase). It is efficient for large unsorted datasets but requires memory to hold the hash table. No indexes are needed."
    },
    {
      id: 28,
      type: "single",
      difficulty: 1,
      topic: "Performance Patterns",
      question: "What is the performance impact of using correlated subqueries?",
      options: ["Correlated subqueries are always faster than JOINs", "They can be slow because the subquery is re-executed for each row of the outer query", "They have no performance impact because the optimizer always flattens them", "Correlated subqueries execute only once regardless of outer query size"],
      correct: [1],
      concept: "A correlated subquery references the outer query\'s columns, so it must be re-evaluated for each row of the outer query. This O(n*m) behavior can be very slow on large datasets. The optimizer may flatten it to a JOIN, but if it cannot, performance degrades significantly. Rewriting as a JOIN is often beneficial."
    },
    {
      id: 29,
      type: "single",
      difficulty: 1,
      topic: "Window Functions Deep Dive",
      question: "What does UNBOUNDED FOLLOWING mean in a window frame specification?",
      options: ["The frame extends to the row immediately following the current row", "The frame extends to the very last row of the partition", "The frame has no upper bound and includes rows from other partitions", "The frame extends only to the next row with a different value"],
      correct: [1],
      concept: "UNBOUNDED FOLLOWING means the window frame extends from its start point to the last row of the current partition. Combined with UNBOUNDED PRECEDING, it creates a frame covering the entire partition. It is commonly used for calculations like total partition aggregates on every row."
    },
    {
      id: 30,
      type: "single",
      difficulty: 1,
      topic: "Performance Patterns",
      question: "What is the benefit of using UNION ALL instead of UNION when duplicate elimination is not needed?",
      options: ["UNION ALL returns fewer rows than UNION", "UNION ALL avoids the overhead of sorting and deduplication, making it faster", "UNION ALL preserves column data types better than UNION", "UNION ALL enables parallel execution while UNION does not"],
      correct: [1],
      concept: "UNION performs a sort or hash operation to eliminate duplicate rows, which is expensive on large result sets. UNION ALL simply concatenates the results without deduplication. When you know there are no duplicates or duplicates are acceptable, UNION ALL is significantly faster."
    },
    {
      id: 31,
      type: "single",
      difficulty: 1,
      topic: "CTEs & Recursive CTEs",
      question: "What operator is typically used to combine the anchor and recursive members of a recursive CTE?",
      options: ["UNION", "UNION ALL", "INTERSECT", "EXCEPT"],
      correct: [1],
      concept: "UNION ALL is the standard operator for combining anchor and recursive members. UNION (with deduplication) can be used but is less common and adds overhead. INTERSECT and EXCEPT are not valid for recursive CTE construction. UNION ALL preserves all generated rows including potential duplicates."
    },
    {
      id: 32,
      type: "single",
      difficulty: 1,
      topic: "Execution Plans",
      question: "What does the \'rows\' or \'estimated rows\' field in an execution plan node represent?",
      options: ["The exact number of rows in the table", "The optimizer\'s estimate of how many rows will be produced by that operation", "The number of rows that have been cached in memory", "The maximum rows allowed before the query times out"],
      correct: [1],
      concept: "The \'rows\' field shows the optimizer\'s prediction of how many rows each plan node will produce. Comparing estimated rows to actual rows (in EXPLAIN ANALYZE) reveals estimation accuracy. Large discrepancies between estimated and actual rows indicate stale statistics or complex data distributions."
    },
    {
      id: 33,
      type: "single",
      difficulty: 1,
      topic: "Query Optimization",
      question: "What is a \'correlated subquery\'?",
      options: ["A subquery that runs independently of the outer query", "A subquery that references columns from the outer query, creating a dependency", "A subquery that is cached for reuse across multiple queries", "A subquery that uses aggregate functions exclusively"],
      correct: [1],
      concept: "A correlated subquery references one or more columns from the outer query, creating a dependency. Unlike non-correlated subqueries that execute once, correlated subqueries may execute once per outer row. They are powerful but can be performance-intensive on large datasets."
    },
    {
      id: 34,
      type: "single",
      difficulty: 1,
      topic: "Window Functions Deep Dive",
      question: "Which window function would you use to access the value from the previous row without a self-join?",
      options: ["LEAD()", "LAG()", "FIRST_VALUE()", "LAST_VALUE()"],
      correct: [1],
      concept: "LAG(column, offset, default) accesses data from a preceding row within the partition. LAG(col, 1) gets the immediately previous row\'s value. LEAD() accesses following rows. FIRST_VALUE() and LAST_VALUE() access the first and last rows of the window frame, not relative positions."
    },
    {
      id: 35,
      type: "single",
      difficulty: 1,
      topic: "Performance Patterns",
      question: "Why is it recommended to avoid using ORDER BY in subqueries?",
      options: ["ORDER BY is syntactically invalid inside subqueries", "ORDER BY in subqueries wastes resources since the outer query may reorder or disregard the subquery\'s sort order", "ORDER BY causes the subquery to return duplicate rows", "ORDER BY prevents the subquery from being parallelized"],
      correct: [1],
      concept: "Sorting is expensive. An ORDER BY inside a subquery is typically meaningless because the outer query controls the final result order (SQL does not guarantee intermediate ordering). The optimizer may remove it, but if not, it wastes CPU and memory. Only use ORDER BY in subqueries when combined with LIMIT/TOP."
    },
    {
      id: 36,
      type: "single",
      difficulty: 2,
      topic: "Window Functions Deep Dive",
      question: "What is the difference between ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING and RANGE BETWEEN 1 PRECEDING AND 1 FOLLOWING?",
      options: ["No difference; both create a 3-row sliding window", "ROWS includes exactly 3 physical rows; RANGE includes all rows whose ORDER BY values are within 1 unit of the current row\'s value", "RANGE includes 3 rows while ROWS includes all rows in the partition", "ROWS uses physical offsets only for numeric types; RANGE works with all types"],
      correct: [1],
      concept: "ROWS 1 PRECEDING AND 1 FOLLOWING creates a fixed 3-row window (previous, current, next physical rows). RANGE 1 PRECEDING AND 1 FOLLOWING includes all rows whose ORDER BY value falls within [current_value - 1, current_value + 1], which could include many rows if there are peers. RANGE is value-based; ROWS is position-based."
    },
    {
      id: 37,
      type: "single",
      difficulty: 2,
      topic: "Window Functions Deep Dive",
      question: "What does the GROUPS frame mode do in window functions (SQL:2011 standard)?",
      options: ["Groups all partition rows into a single aggregate result", "Counts frame boundaries in terms of peer groups rather than individual rows or value ranges", "Creates multiple separate window frames for each group", "Groups consecutive identical values into a single row before applying the function"],
      correct: [1],
      concept: "GROUPS mode (added in SQL:2011) counts frame boundaries in terms of peer groups — sets of rows with the same ORDER BY value. GROUPS BETWEEN 1 PRECEDING AND 1 FOLLOWING includes the current peer group plus one peer group before and one after. It sits between ROWS (physical) and RANGE (value-based) in abstraction."
    },
    {
      id: 38,
      type: "single",
      difficulty: 2,
      topic: "Window Functions Deep Dive",
      question: "What does the EXCLUDE clause do in a window frame specification?",
      options: ["Excludes entire partitions from the window function calculation", "Excludes specific rows from the window frame, such as the current row, ties, or group peers", "Excludes NULL values from the window function result", "Excludes the window function from the query execution plan"],
      correct: [1],
      concept: "The EXCLUDE clause (SQL:2011) removes specific rows from the frame: EXCLUDE CURRENT ROW (removes the current row), EXCLUDE TIES (removes peers of the current row), EXCLUDE GROUP (removes the current row and its peers), EXCLUDE NO OTHERS (default, excludes nothing). Useful for calculations like \'average of all other rows.\'"
    },
    {
      id: 39,
      type: "single",
      difficulty: 2,
      topic: "Window Functions Deep Dive",
      question: "What is the result of NTH_VALUE(salary, 2) with the default frame RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW when the current row is the first row?",
      options: ["It returns the second highest salary in the partition", "It returns NULL because the frame contains only 1 row and cannot reach the 2nd value", "It returns the first row\'s salary as a fallback", "It raises an error because the nth value exceeds the frame"],
      correct: [1],
      concept: "NTH_VALUE returns the value from the nth row within the current frame. If the frame does not contain enough rows (e.g., requesting the 2nd value when the frame has only 1 row), it returns NULL. To always get the 2nd value in the partition, use ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING."
    },
    {
      id: 40,
      type: "single",
      difficulty: 2,
      topic: "Window Functions Deep Dive",
      question: "How does LAST_VALUE() typically produce unexpected results, and how do you fix it?",
      options: ["LAST_VALUE() does not work with string columns; use MAX() instead", "The default frame ends at CURRENT ROW, so LAST_VALUE returns the current row instead of the partition\'s last row; fix by specifying ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING", "LAST_VALUE() is deprecated and should never be used", "LAST_VALUE() skips NULL values by default and returns the first non-null from the end"],
      correct: [1],
      concept: "LAST_VALUE() is frequently misused because the default frame with ORDER BY ends at CURRENT ROW, making LAST_VALUE return the current row\'s value instead of the last row in the partition. The fix is to explicitly specify ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING to include the entire partition in the frame."
    },
    {
      id: 41,
      type: "single",
      difficulty: 2,
      topic: "CTEs & Recursive CTEs",
      question: "What is \'CTE materialization\' and how does it affect performance?",
      options: ["CTE materialization means the CTE result is written to permanent storage", "The database computes the CTE result once and stores it in a temporary structure, avoiding re-evaluation on each reference", "CTE materialization converts the CTE into a materialized view automatically", "Materialization means the CTE runs in parallel across multiple nodes"],
      correct: [1],
      concept: "CTE materialization means the database evaluates the CTE once and stores the result in a temporary spool/buffer. Subsequent references read from this buffer instead of re-executing the CTE. PostgreSQL materializes CTEs by default (prior to v12), while other databases may inline them. You can control this with MATERIALIZED/NOT MATERIALIZED hints in PostgreSQL 12+."
    },
    {
      id: 42,
      type: "single",
      difficulty: 2,
      topic: "CTEs & Recursive CTEs",
      question: "You need to find all descendants of employee ID 1 in a hierarchical org chart. Which recursive CTE structure is correct?",
      options: ["Anchor: SELECT * FROM employees WHERE id = 1; Recursive: SELECT e.* FROM employees e JOIN cte ON e.id = cte.manager_id", "Anchor: SELECT * FROM employees WHERE id = 1; Recursive: SELECT e.* FROM employees e JOIN cte ON e.manager_id = cte.id", "Anchor: SELECT * FROM employees; Recursive: SELECT e.* FROM employees e WHERE e.manager_id IS NOT NULL", "Anchor: SELECT * FROM employees WHERE manager_id = 1; Recursive: SELECT * FROM cte WHERE id > 1"],
      correct: [1],
      concept: "To find descendants: the anchor selects the root employee (id = 1). The recursive member joins employees whose manager_id matches the CTE\'s id (finding children of previously found rows). Option A reverses the join direction (would find ancestors instead). Option C has no proper recursive reference."
    },
    {
      id: 43,
      type: "single",
      difficulty: 2,
      topic: "CTEs & Recursive CTEs",
      question: "What technique can prevent infinite loops in a recursive CTE when traversing a graph with cycles?",
      options: ["Using DISTINCT in the anchor query", "Tracking visited nodes in an array column and checking for membership before recursing", "Adding an ORDER BY clause to the recursive member", "Using GROUP BY in the recursive member to eliminate duplicates"],
      correct: [1],
      concept: "Cycle detection in recursive CTEs can be achieved by maintaining a path array (or string) of visited node IDs and adding a WHERE condition that checks whether the next node is already in the path. PostgreSQL 14+ also supports CYCLE clause for automatic cycle detection. Without cycle detection, circular references cause infinite recursion."
    },
    {
      id: 44,
      type: "single",
      difficulty: 2,
      topic: "CTEs & Recursive CTEs",
      question: "Can multiple CTEs be defined in a single WITH clause, and can later CTEs reference earlier ones?",
      options: ["No, only one CTE can be defined per WITH clause", "Yes, multiple CTEs can be defined separated by commas, and later CTEs can reference earlier ones", "Yes, but each CTE must use a separate WITH keyword", "Multiple CTEs can be defined but they cannot reference each other"],
      correct: [1],
      concept: "Multiple CTEs can be defined in a single WITH clause, separated by commas. Later CTEs can reference earlier ones, creating a pipeline of transformations. This is a major advantage for readability and modularity. However, a CTE cannot reference a CTE defined after it (forward references are not allowed)."
    },
    {
      id: 45,
      type: "single",
      difficulty: 2,
      topic: "Query Optimization",
      question: "What is the difference between a \'Nested Loop Join\' and a \'Hash Join\' in terms of when each is preferred?",
      options: ["Nested Loop is always faster; Hash Join is deprecated", "Nested Loop is preferred for small outer tables with indexed inner tables; Hash Join is preferred for large unsorted tables without indexes", "Hash Join is preferred for small datasets; Nested Loop is preferred for large datasets", "There is no difference; the optimizer uses them interchangeably"],
      correct: [1],
      concept: "Nested Loop Join iterates through the outer table and for each row looks up matching rows in the inner table (ideally via index). It is efficient when the outer table is small. Hash Join builds a hash table from one table and probes with the other, efficient for large unsorted tables. Merge Join is optimal when both inputs are sorted."
    },
    {
      id: 46,
      type: "single",
      difficulty: 2,
      topic: "Query Optimization",
      question: "What optimizer transformation is applied when a subquery like WHERE col IN (SELECT col FROM t) is rewritten as a semi-join?",
      options: ["View inlining", "Subquery decorrelation and semi-join conversion", "Predicate pushdown", "Join order reversal"],
      correct: [1],
      concept: "The optimizer can convert IN subqueries to semi-joins, which check for the existence of at least one match without producing duplicates. Semi-joins are more efficient than materializing the entire subquery result. Similarly, NOT IN can be converted to anti-joins. This transformation is also called subquery decorrelation."
    },
    {
      id: 47,
      type: "single",
      difficulty: 2,
      topic: "Query Optimization",
      question: "What is the \'optimizer directive\' /*+ USE_HASH(t1) */ an example of?",
      options: ["A SQL comment with no functional effect", "A query hint that instructs the optimizer to use a hash join strategy for table t1", "A compiler directive that encrypts the query for security", "A profiling marker that records hash join performance"],
      correct: [1],
      concept: "Optimizer directives (query hints) like /*+ USE_HASH(t1) */ are special comments that influence the optimizer\'s plan selection. In Oracle, these hint comments direct join methods, access paths, and parallelism. Different databases have different hint syntaxes (Oracle uses /*+ */, SQL Server uses OPTION(), MySQL uses USE INDEX)."
    },
    {
      id: 48,
      type: "single",
      difficulty: 2,
      topic: "Execution Plans",
      question: "In EXPLAIN ANALYZE output, what does a large difference between \'estimated rows\' and \'actual rows\' indicate?",
      options: ["The query returned incorrect results due to a bug", "The optimizer\'s statistics are inaccurate, leading to potentially suboptimal plan choices", "The table has data corruption that needs repair", "The index was dropped during query execution"],
      correct: [1],
      concept: "A significant discrepancy between estimated and actual rows in EXPLAIN ANALYZE indicates that the optimizer\'s statistics do not accurately represent the data. This can lead to poor plan choices (wrong join type, wrong join order, unnecessary sorts). Running ANALYZE to update statistics often resolves the issue."
    },
    {
      id: 49,
      type: "single",
      difficulty: 2,
      topic: "Execution Plans",
      question: "What does a \'Sort\' node in an execution plan indicate, and when is it a performance concern?",
      options: ["Sort always indicates an ORDER BY clause and is never a concern", "A Sort node means the database must sort intermediate results, which is costly for large datasets that spill to disk", "Sort nodes only appear when data is already sorted and are always efficient", "Sort is a lightweight operation that never affects query performance"],
      correct: [1],
      concept: "A Sort node means the database must sort data in memory (or on disk if the data exceeds available memory). Sorts are expensive for large datasets, especially when they spill to disk (temp file I/O). Sorts appear for ORDER BY, MERGE JOIN preparation, DISTINCT, and GROUP BY. Indexes that provide pre-sorted data can eliminate sort nodes."
    },
    {
      id: 50,
      type: "single",
      difficulty: 2,
      topic: "Execution Plans",
      question: "What is an \'Index Only Scan\' in a PostgreSQL execution plan?",
      options: ["A scan that only builds the index without reading any data", "A scan that retrieves all needed data from the index without accessing the heap/base table", "A scan that only works on primary key indexes", "A scan that reads the index in reverse order"],
      correct: [1],
      concept: "An Index Only Scan retrieves all query columns directly from the index without needing to access the base table (heap). This is possible when the index \'covers\' all columns in the query. It significantly reduces I/O. In PostgreSQL, it requires the visibility map to confirm row visibility without heap access."
    },
    {
      id: 51,
      type: "single",
      difficulty: 2,
      topic: "Performance Patterns",
      question: "Why should you avoid using HAVING to filter non-aggregated columns?",
      options: ["HAVING cannot filter non-aggregated columns in any database", "HAVING filters after GROUP BY, so filtering non-aggregated columns in WHERE (before aggregation) reduces the data processed by GROUP BY", "HAVING produces incorrect results when used with non-aggregated columns", "HAVING is deprecated in modern SQL standards"],
      correct: [1],
      concept: "While some databases allow non-aggregated column filters in HAVING, this is inefficient because HAVING executes after GROUP BY. The same filter in WHERE would eliminate rows before the expensive GROUP BY aggregation, processing fewer rows. Use WHERE for row-level filters and HAVING only for aggregate-level conditions."
    },
    {
      id: 52,
      type: "single",
      difficulty: 2,
      topic: "Performance Patterns",
      question: "What is the \'N+1 query problem\' in data processing applications?",
      options: ["A query that returns N+1 more rows than expected", "Executing one query to get a list of N items, then N additional queries to fetch details for each item, instead of using a single JOIN", "A query that requires N+1 indexes to execute efficiently", "A subquery that nests N+1 levels deep"],
      correct: [1],
      concept: "The N+1 problem occurs when an application runs 1 query to get N parent records, then N individual queries to get related child records. This creates N+1 total queries with N+1 network round-trips. The solution is to use JOINs, subqueries, or batch IN clauses to fetch all data in 1-2 queries."
    },
    {
      id: 53,
      type: "single",
      difficulty: 2,
      topic: "Query Optimization",
      question: "What is \'predicate pushdown\' through a JOIN, and when is it valid?",
      options: ["Moving filter conditions from above a JOIN to below it, valid for INNER JOINs but not always for OUTER JOINs", "Pushing JOIN conditions into subqueries for parallel execution", "Rewriting JOIN conditions as WHERE clauses for better readability", "Moving all predicates to the ON clause regardless of join type"],
      correct: [0],
      concept: "Predicate pushdown through a JOIN moves filter conditions below the join to filter rows earlier. For INNER JOINs, this is always safe. For OUTER JOINs, pushing a filter on the preserved (outer) side is safe, but pushing a filter on the null-producing side into the ON clause changes semantics and may not be valid."
    },
    {
      id: 54,
      type: "single",
      difficulty: 2,
      topic: "Window Functions Deep Dive",
      question: "What is the output of NTILE(4) applied to a partition of 10 rows?",
      options: ["Four groups of exactly 2.5 rows each", "First two groups have 3 rows each, last two groups have 2 rows each", "Four groups of 2 rows with 2 rows unassigned", "All 10 rows receive the same tile number 4"],
      correct: [1],
      concept: "NTILE(n) divides the partition into n approximately equal groups. With 10 rows and 4 tiles: 10 / 4 = 2 remainder 2, so the first 2 groups get 3 rows (2+1) and the last 2 groups get 2 rows. NTILE distributes the remainder among the first groups to keep sizes as equal as possible."
    },
    {
      id: 55,
      type: "single",
      difficulty: 2,
      topic: "CTEs & Recursive CTEs",
      question: "How do you limit the depth of recursion in a recursive CTE?",
      options: ["Use LIMIT clause after the CTE definition", "Add a depth counter column in the anchor and increment it in the recursive member, then filter with WHERE depth < max_depth", "Set a global database parameter for maximum CTE depth", "Use MAXRECURSION keyword in the CTE definition"],
      correct: [1],
      concept: "To limit recursion depth, introduce a \'level\' or \'depth\' counter: the anchor sets it to 0 or 1, the recursive member increments it (level + 1), and a WHERE clause stops recursion when the depth limit is reached. SQL Server also supports OPTION (MAXRECURSION n) as a query-level safety limit."
    },
    {
      id: 56,
      type: "single",
      difficulty: 2,
      topic: "Execution Plans",
      question: "What does \'Bitmap Index Scan\' followed by \'Bitmap Heap Scan\' indicate in a PostgreSQL plan?",
      options: ["The database is creating a new bitmap index on the fly", "The database builds a bitmap of matching row locations from the index, then fetches those rows from the heap in physical order to reduce random I/O", "The database is using a bitmap to compress the query results", "The database is performing a parallel scan across multiple bitmap indexes simultaneously"],
      correct: [1],
      concept: "Bitmap Index Scan creates an in-memory bitmap of row locations matching the index condition. Bitmap Heap Scan then reads those rows from the table in physical (sequential) order rather than random index order. This reduces random I/O and is chosen when too many rows match for a regular index scan but too few for a full table scan."
    },
    {
      id: 57,
      type: "single",
      difficulty: 2,
      topic: "Performance Patterns",
      question: "What is the preferred approach for processing a 10-million-row DELETE operation in a production database?",
      options: ["Execute a single DELETE FROM table WHERE condition statement", "Use batched deletes with a loop: DELETE TOP 10000 ... until no more rows match", "TRUNCATE the entire table and reload the rows you want to keep", "Convert the table to a temporary table before deleting"],
      correct: [1],
      concept: "Batched deletes (processing 5,000-50,000 rows per iteration) reduce lock duration, transaction log impact, and replication lag. A single 10M-row DELETE can cause massive lock escalation, log file growth, and long rollback times if interrupted. TRUNCATE is only viable when removing ALL rows."
    },
    {
      id: 58,
      type: "single",
      difficulty: 2,
      topic: "Query Optimization",
      question: "What is \'join elimination\' in query optimization?",
      options: ["The optimizer removes unused JOINs when the joined table\'s columns are not referenced in SELECT, WHERE, or other clauses", "The optimizer replaces all JOINs with subqueries", "The optimizer eliminates duplicate rows produced by JOINs", "The optimizer removes JOINs that would produce cartesian products"],
      correct: [0],
      concept: "Join elimination occurs when the optimizer detects that a joined table contributes no columns to the output and the join relationship guarantees no filtering or row multiplication (e.g., a LEFT JOIN to a table with a foreign key where the joined columns are not used). The optimizer removes the join entirely for efficiency."
    },
    {
      id: 59,
      type: "single",
      difficulty: 2,
      topic: "Window Functions Deep Dive",
      question: "Can you use multiple different window functions with different PARTITION BY clauses in the same SELECT statement?",
      options: ["No, all window functions in a SELECT must share the same PARTITION BY", "Yes, each window function can have its own independent OVER clause with a different PARTITION BY", "Only if named windows are used for each partition definition", "Only two different PARTITION BY clauses are allowed per SELECT"],
      correct: [1],
      concept: "Each window function in a SELECT can have its own independent OVER clause with different PARTITION BY and ORDER BY specifications. For example: SUM(sales) OVER (PARTITION BY region) and RANK() OVER (PARTITION BY department ORDER BY salary). The database processes each window specification independently."
    },
    {
      id: 60,
      type: "single",
      difficulty: 2,
      topic: "Performance Patterns",
      question: "What is the performance benefit of EXISTS over IN for checking existence in a correlated subquery?",
      options: ["EXISTS always returns faster because it short-circuits on the first matching row instead of materializing the entire subquery result", "EXISTS is always slower than IN because it uses correlated execution", "There is no performance difference; the optimizer treats them identically", "EXISTS only works with indexed columns; IN works without indexes"],
      correct: [0],
      concept: "EXISTS can short-circuit and stop scanning as soon as the first matching row is found, while IN may need to materialize the entire subquery result. For large subquery results where early matches are likely, EXISTS is more efficient. Modern optimizers may transform between them, but EXISTS is generally preferred for existence checks."
    },
    {
      id: 61,
      type: "multi",
      difficulty: 2,
      topic: "Window Functions Deep Dive",
      question: "Which of the following are valid window frame bound specifications? (Select all that apply)",
      options: ["UNBOUNDED PRECEDING", "CURRENT ROW", "3 PRECEDING", "NEXT ROW"],
      correct: [0, 1, 2],
      concept: "Valid frame bounds include: UNBOUNDED PRECEDING (start of partition), UNBOUNDED FOLLOWING (end of partition), CURRENT ROW, and N PRECEDING/N FOLLOWING (offset by N rows or values). NEXT ROW is not valid SQL syntax; the correct form is 1 FOLLOWING."
    },
    {
      id: 62,
      type: "multi",
      difficulty: 2,
      topic: "Window Functions Deep Dive",
      question: "Which window functions do NOT support a frame specification (ROWS/RANGE/GROUPS)? (Select all that apply)",
      options: ["ROW_NUMBER()", "RANK()", "SUM()", "LAG()"],
      correct: [0, 1, 3],
      concept: "Ranking functions (ROW_NUMBER, RANK, DENSE_RANK, NTILE) and offset functions (LAG, LEAD, FIRST_VALUE, LAST_VALUE, NTH_VALUE) operate on fixed positions, not customizable frames. Aggregate window functions (SUM, AVG, COUNT, MIN, MAX) support frame specifications to define the window of rows for the calculation."
    },
    {
      id: 63,
      type: "multi",
      difficulty: 2,
      topic: "CTEs & Recursive CTEs",
      question: "Which of the following are valid use cases for recursive CTEs? (Select all that apply)",
      options: ["Traversing an organizational hierarchy", "Generating a series of dates or numbers", "Performing graph traversal to find shortest paths", "Replacing GROUP BY aggregations"],
      correct: [0, 1, 2],
      concept: "Recursive CTEs are ideal for hierarchical traversal (org charts, BOMs), generating sequences (date ranges, number series), and graph traversal (shortest paths, network analysis). They are not a replacement for GROUP BY — aggregations are fundamentally different from recursive iteration."
    },
    {
      id: 64,
      type: "multi",
      difficulty: 2,
      topic: "CTEs & Recursive CTEs",
      question: "Which of the following restrictions apply to the recursive member of a recursive CTE? (Select all that apply)",
      options: ["It cannot use aggregate functions like SUM or COUNT", "It cannot use DISTINCT", "It must reference the CTE name exactly once", "It can use any type of JOIN including OUTER JOINs with the recursive reference"],
      correct: [0, 1, 2],
      concept: "The recursive member has several restrictions: no aggregates (GROUP BY, SUM, etc.), no DISTINCT, must reference the CTE exactly once (not in a subquery), and typically cannot use OUTER JOINs with the CTE reference. These restrictions ensure deterministic termination and correct iteration semantics."
    },
    {
      id: 65,
      type: "multi",
      difficulty: 2,
      topic: "Query Optimization",
      question: "Which of the following optimizer transformations can improve query performance? (Select all that apply)",
      options: ["Subquery flattening to equivalent JOINs", "Predicate pushdown to filter rows early", "View inlining to allow cross-optimization", "Converting all JOINs to subqueries"],
      correct: [0, 1, 2],
      concept: "Subquery flattening converts slow row-by-row subqueries to set-based JOINs. Predicate pushdown filters data early, reducing intermediate result sizes. View inlining allows the optimizer to optimize across view boundaries. Converting JOINs to subqueries generally degrades performance and goes against optimization goals."
    },
    {
      id: 66,
      type: "multi",
      difficulty: 2,
      topic: "Execution Plans",
      question: "Which of the following join strategies might appear in an execution plan? (Select all that apply)",
      options: ["Nested Loop Join", "Merge Join", "Hash Join", "Cross Apply Join"],
      correct: [0, 1, 2],
      concept: "The three fundamental join strategies are: Nested Loop (iterate outer, lookup inner), Merge Join (merge two sorted inputs), and Hash Join (build hash table, probe). CROSS APPLY is a lateral join syntax in SQL Server/Oracle, not a join strategy — it uses one of the three strategies internally."
    },
    {
      id: 67,
      type: "multi",
      difficulty: 2,
      topic: "Execution Plans",
      question: "Which of the following can you learn from EXPLAIN ANALYZE that you cannot learn from EXPLAIN alone? (Select all that apply)",
      options: ["Actual number of rows processed by each operation", "Actual wall-clock time spent on each operation", "Whether sort operations spilled to disk", "The estimated cost of each operation"],
      correct: [0, 1, 2],
      concept: "EXPLAIN ANALYZE actually executes the query and provides actual row counts, actual execution times, and details like disk spills. EXPLAIN alone only shows estimated costs, estimated row counts, and the chosen plan structure. Estimated cost is available in both EXPLAIN and EXPLAIN ANALYZE."
    },
    {
      id: 68,
      type: "multi",
      difficulty: 2,
      topic: "Performance Patterns",
      question: "Which of the following are valid strategies to eliminate sort operations in a query? (Select all that apply)",
      options: ["Create an index that matches the ORDER BY columns in the correct order", "Use a covering index that includes all SELECT columns in sorted order", "Replace ORDER BY with GROUP BY", "Use the NOSORT hint to skip sorting"],
      correct: [0, 1],
      concept: "An index matching the ORDER BY columns (in order and direction) provides pre-sorted data, eliminating the Sort node. A covering index that also includes SELECT columns avoids the heap access. Replacing ORDER BY with GROUP BY changes semantics entirely. NOSORT is not a standard SQL hint."
    },
    {
      id: 69,
      type: "multi",
      difficulty: 2,
      topic: "Performance Patterns",
      question: "Which of the following are common SQL anti-patterns that hurt performance? (Select all that apply)",
      options: ["Using SELECT * in production queries", "Applying functions on indexed columns in WHERE clauses", "Using parameterized queries with bind variables", "Performing implicit type conversions in join conditions"],
      correct: [0, 1, 3],
      concept: "SELECT * fetches unnecessary columns. Functions on indexed columns prevent index usage. Implicit type conversions can prevent index usage and cause unexpected results. Parameterized queries with bind variables are actually a BEST practice — they enable plan caching and prevent SQL injection."
    },
    {
      id: 70,
      type: "multi",
      difficulty: 2,
      topic: "Window Functions Deep Dive",
      question: "Which of the following window functions return the same result for all rows that are peers (have the same ORDER BY value)? (Select all that apply)",
      options: ["RANK()", "ROW_NUMBER()", "DENSE_RANK()", "CUME_DIST()"],
      correct: [0, 2, 3],
      concept: "RANK(), DENSE_RANK(), and CUME_DIST() return the same value for peer rows (rows with identical ORDER BY values). ROW_NUMBER() always assigns unique sequential numbers even to peers — the assignment among peers is non-deterministic. This is why ROW_NUMBER() is used for arbitrary tie-breaking."
    },
    {
      id: 71,
      type: "multi",
      difficulty: 2,
      topic: "CTEs & Recursive CTEs",
      question: "Which of the following correctly describe the behavior of CTE materialization in PostgreSQL? (Select all that apply)",
      options: ["Prior to PostgreSQL 12, CTEs were always materialized as an optimization fence", "PostgreSQL 12+ allows NOT MATERIALIZED hint to inline the CTE", "Materialized CTEs can be beneficial when the CTE is referenced multiple times", "CTE materialization always improves performance"],
      correct: [0, 1, 2],
      concept: "Before PostgreSQL 12, CTEs were always materialized (optimization fence), preventing predicate pushdown into CTEs. PostgreSQL 12+ added MATERIALIZED/NOT MATERIALIZED hints. Materialization benefits queries referencing the CTE multiple times (computed once) but can hurt when predicate pushdown would be more efficient."
    },
    {
      id: 72,
      type: "multi",
      difficulty: 2,
      topic: "Query Optimization",
      question: "Which factors influence the optimizer\'s choice between a Nested Loop Join and a Hash Join? (Select all that apply)",
      options: ["The size of the input tables", "Availability of indexes on the join columns", "The estimated number of matching rows", "The alphabetical order of the table names"],
      correct: [0, 1, 2],
      concept: "The optimizer considers: table sizes (small outer table favors nested loop), index availability (indexed inner table favors nested loop), and matching row estimates (many matches may favor hash join). Table name order has no impact — the optimizer can reorder tables freely for optimal performance."
    },
    {
      id: 73,
      type: "multi",
      difficulty: 2,
      topic: "Execution Plans",
      question: "Which plan nodes indicate that an index is being used in a PostgreSQL execution plan? (Select all that apply)",
      options: ["Index Scan", "Index Only Scan", "Bitmap Index Scan", "Seq Scan"],
      correct: [0, 1, 2],
      concept: "Index Scan traverses the index and fetches rows from the heap. Index Only Scan retrieves all data from the index without heap access. Bitmap Index Scan builds a bitmap of matching locations for batched heap access. Seq Scan (Sequential Scan) reads the entire table without using any index."
    },
    {
      id: 74,
      type: "multi",
      difficulty: 2,
      topic: "Performance Patterns",
      question: "Which of the following are benefits of batch processing patterns in SQL operations? (Select all that apply)",
      options: ["Reduced lock contention and shorter lock hold times", "Lower transaction log growth per batch", "Other transactions can interleave between batches", "Batch processing eliminates the need for indexes"],
      correct: [0, 1, 2],
      concept: "Batch processing reduces lock hold time (releasing locks between batches), limits transaction log growth per batch (allowing log truncation between batches), and enables other transactions to interleave for better concurrency. However, batch processing does not eliminate the need for indexes — indexes are still important for efficient batch filtering."
    },
    {
      id: 75,
      type: "multi",
      difficulty: 2,
      topic: "Query Optimization",
      question: "Which of the following are valid approaches to prevent the optimizer from choosing a suboptimal plan? (Select all that apply)",
      options: ["Update table statistics with ANALYZE or UPDATE STATISTICS", "Add appropriate indexes for the query predicates", "Use query hints to direct plan selection when statistics are unreliable", "Always use FORCE INDEX on every query"],
      correct: [0, 1, 2],
      concept: "Updating statistics ensures accurate cost estimates. Adding indexes provides the optimizer with efficient access paths. Query hints can override poor plans when needed. However, FORCE INDEX on every query is not valid because it prevents the optimizer from adapting to data changes and may lock in suboptimal plans."
    },
    {
      id: 76,
      type: "multi",
      difficulty: 3,
      topic: "Window Functions Deep Dive",
      question: "Which of the following statements about EXCLUDE clause options in window frames are correct? (Select all that apply)",
      options: ["EXCLUDE CURRENT ROW removes only the current row from the frame", "EXCLUDE TIES removes all rows with the same ORDER BY value as the current row, but keeps the current row", "EXCLUDE GROUP removes the current row and all its peers from the frame", "EXCLUDE NO OTHERS is the default behavior that excludes nothing"],
      correct: [0, 1, 2, 3],
      concept: "All four EXCLUDE options are correctly described: CURRENT ROW excludes only the current row, TIES excludes peers but keeps the current row, GROUP excludes the current row and all peers, NO OTHERS is the default (no exclusion). These options (SQL:2011) are useful for leave-one-out calculations."
    },
    {
      id: 77,
      type: "multi",
      difficulty: 3,
      topic: "CTEs & Recursive CTEs",
      question: "Which of the following are true about recursive CTE termination conditions? (Select all that apply)",
      options: ["Recursion stops when the recursive member returns zero rows", "A WHERE clause in the recursive member typically provides the termination condition", "SQL Server has a default maximum recursion depth of 100", "PostgreSQL automatically detects and breaks infinite cycles"],
      correct: [0, 1, 2],
      concept: "Recursion terminates when the recursive member produces an empty result set. A WHERE clause (e.g., WHERE depth < 10) typically ensures this happens. SQL Server defaults to MAXRECURSION 100 (configurable). PostgreSQL 14+ has CYCLE clause, but does not automatically detect cycles in older versions — infinite recursion runs until resource exhaustion."
    },
    {
      id: 78,
      type: "multi",
      difficulty: 3,
      topic: "Query Optimization",
      question: "Which of the following are limitations of query hints? (Select all that apply)",
      options: ["Hints prevent the optimizer from adapting to data distribution changes", "Hints can become stale as data volume grows, degrading performance", "Hints are portable across all database systems", "Hint syntax varies significantly between database vendors"],
      correct: [0, 1, 3],
      concept: "Hints lock the optimizer into specific strategies regardless of changing data. As data grows, a once-good hint can become harmful. Hint syntax is vendor-specific: Oracle uses /*+ */, SQL Server uses OPTION(), MySQL uses USE INDEX/FORCE INDEX. Hints are NOT portable across database systems."
    },
    {
      id: 79,
      type: "multi",
      difficulty: 3,
      topic: "Execution Plans",
      question: "Which of the following scenarios indicate that you should investigate and potentially redesign a query based on its execution plan? (Select all that apply)",
      options: ["Estimated rows differ from actual rows by more than 10x", "A Sort node shows \'Sort Method: external merge Disk\' indicating disk spills", "A Hash Join is being used instead of a Nested Loop Join", "Sequential scans on large tables when only a few rows are needed"],
      correct: [0, 1, 3],
      concept: "10x+ row estimation errors indicate stale statistics or optimizer limitations. Disk spills in sorts mean insufficient work_mem and cause slow I/O. Sequential scans fetching few rows from large tables suggest missing indexes. Hash Join vs Nested Loop is a normal optimizer choice that may be correct for the data distribution."
    },
    {
      id: 80,
      type: "multi",
      difficulty: 3,
      topic: "Performance Patterns",
      question: "Which of the following are effective strategies for optimizing a query that joins 6+ tables? (Select all that apply)",
      options: ["Ensure join columns have appropriate indexes", "Update statistics on all tables involved in the join", "Use CTEs to break the query into logical stages for readability", "Limit the search space with query hints if the optimizer times out on plan enumeration"],
      correct: [0, 1, 2, 3],
      concept: "Multi-table joins create exponential plan search spaces. Indexes on join columns enable efficient join strategies. Updated statistics ensure accurate cost estimates. CTEs improve readability (and may help or hurt performance depending on materialization). Query hints can limit search space when the optimizer struggles with many tables."
    },
    {
      id: 81,
      type: "multi",
      difficulty: 3,
      topic: "Window Functions Deep Dive",
      question: "Which of the following are true about PERCENT_RANK() and CUME_DIST()? (Select all that apply)",
      options: ["PERCENT_RANK() can return 0 for the first row", "CUME_DIST() can return 0 for the first row", "PERCENT_RANK formula is (rank - 1) / (total_rows - 1)", "CUME_DIST formula is count_of_rows_leq_current / total_rows"],
      correct: [0, 2, 3],
      concept: "PERCENT_RANK returns 0 for the first row (formula: (rank-1)/(total-1)). CUME_DIST never returns 0 — its minimum is 1/total_rows (formula: count of rows <= current / total). For a single row partition, PERCENT_RANK returns 0 (0/0 special case) and CUME_DIST returns 1."
    },
    {
      id: 82,
      type: "multi",
      difficulty: 3,
      topic: "CTEs & Recursive CTEs",
      question: "Which of the following are potential performance pitfalls of using CTEs? (Select all that apply)",
      options: ["CTE materialization may prevent predicate pushdown from the outer query", "Recursive CTEs with no depth limit can cause resource exhaustion", "CTEs referenced multiple times may be re-evaluated each time if not materialized", "CTEs always perform worse than equivalent inline subqueries"],
      correct: [0, 1, 2],
      concept: "Materialized CTEs act as optimization fences, blocking predicate pushdown. Unbounded recursion can exhaust memory and CPU. Non-materialized CTEs referenced multiple times may be evaluated multiple times. However, CTEs do NOT always perform worse — materialization can help when referenced multiple times, and the optimizer may choose efficiently."
    },
    {
      id: 83,
      type: "multi",
      difficulty: 3,
      topic: "Query Optimization",
      question: "Which of the following transformations preserve query semantics and are safe for the optimizer to apply? (Select all that apply)",
      options: ["Converting INNER JOIN + WHERE to a combined ON clause", "Pushing a WHERE filter below a LEFT JOIN onto the preserved side", "Converting EXISTS subquery to a semi-join", "Pushing a WHERE filter on the nullable side of a LEFT JOIN into the ON clause"],
      correct: [0, 1, 2],
      concept: "Combining INNER JOIN with WHERE is always safe. Pushing filters on the preserved side below a LEFT JOIN is safe. EXISTS to semi-join conversion preserves semantics. Pushing a filter on the nullable side of LEFT JOIN into the ON clause changes semantics (rows become NULL-extended instead of eliminated), so it is NOT safe."
    },
    {
      id: 84,
      type: "multi",
      difficulty: 3,
      topic: "Execution Plans",
      question: "Which of the following are indicators of a good execution plan? (Select all that apply)",
      options: ["Estimated rows closely match actual rows throughout the plan", "Index scans are used for selective predicates on large tables", "No unnecessary sort operations that could be avoided with indexes", "Every join uses Hash Join strategy regardless of table sizes"],
      correct: [0, 1, 2],
      concept: "Good plans show accurate estimates (indicating reliable statistics), use indexes for selective queries (efficient I/O), and avoid unnecessary sorts (indicating proper indexing). Not all joins should be Hash Joins — Nested Loop is better for small/indexed lookups, and Merge Join for pre-sorted data. The best strategy depends on context."
    },
    {
      id: 85,
      type: "multi",
      difficulty: 3,
      topic: "Performance Patterns",
      question: "Which of the following are valid strategies for handling slow aggregation queries on very large tables? (Select all that apply)",
      options: ["Pre-compute aggregates in summary tables or materialized views", "Partition the table and leverage partition pruning for filtered aggregates", "Use approximate aggregation functions when exact results are not required", "Add an index on every column used in GROUP BY"],
      correct: [0, 1, 2],
      concept: "Pre-computed summaries avoid repeated expensive aggregations. Partition pruning reduces scanned data for filtered aggregates. Approximate functions (APPROX_COUNT_DISTINCT, HyperLogLog) trade accuracy for speed. Adding indexes on every GROUP BY column is not always effective because GROUP BY often requires full scans of matched data."
    },
    {
      id: 86,
      type: "tf",
      difficulty: 3,
      topic: "Window Functions Deep Dive",
      question: "When no ORDER BY is specified in a window function\'s OVER clause, the default frame includes all rows in the partition (UNBOUNDED PRECEDING to UNBOUNDED FOLLOWING).",
      options: ["True - Without ORDER BY, the entire partition is the default frame, making aggregate window functions equivalent to partition-level aggregates", "False - Without ORDER BY, the default frame only includes the current row"],
      correct: [0],
      concept: "When ORDER BY is omitted from OVER(), the default frame is the entire partition (UNBOUNDED PRECEDING to UNBOUNDED FOLLOWING). This means SUM(col) OVER (PARTITION BY group) returns the total sum for the entire partition on every row. When ORDER BY is specified, the default changes to RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW."
    },
    {
      id: 87,
      type: "tf",
      difficulty: 3,
      topic: "Window Functions Deep Dive",
      question: "ROW_NUMBER() guarantees a deterministic ordering even when there are ties in the ORDER BY column.",
      options: ["True - ROW_NUMBER() always produces consistent ordering of tied rows across executions", "False - ROW_NUMBER() assigns arbitrary numbers to tied rows, and the assignment may vary between executions"],
      correct: [1],
      concept: "ROW_NUMBER() assigns unique sequential numbers, but when rows have the same ORDER BY values (ties), the assignment is non-deterministic — the same query may number tied rows differently across executions. To ensure deterministic ordering, include a unique tiebreaker column in the ORDER BY clause."
    },
    {
      id: 88,
      type: "tf",
      difficulty: 3,
      topic: "CTEs & Recursive CTEs",
      question: "A recursive CTE can use UNION instead of UNION ALL, which automatically provides cycle detection by eliminating duplicate rows.",
      options: ["True - UNION eliminates duplicate rows in each iteration, effectively preventing cycles from revisiting the same nodes", "False - Using UNION in recursive CTEs is not supported by any SQL standard or database implementation"],
      correct: [0],
      concept: "While UNION ALL is standard for recursive CTEs, some databases (like PostgreSQL) allow UNION in recursive CTEs. Using UNION automatically deduplicates rows, which effectively prevents cycles because a previously visited node produces a duplicate that gets eliminated. However, this adds deduplication overhead per iteration."
    },
    {
      id: 89,
      type: "tf",
      difficulty: 3,
      topic: "CTEs & Recursive CTEs",
      question: "Recursive CTEs can only traverse tree structures (one parent per node) and cannot handle general graph structures (multiple parents per node).",
      options: ["True - Recursive CTEs are limited to tree-like hierarchies with single parent relationships", "False - Recursive CTEs can traverse general graphs with multiple parents, but cycle detection must be implemented to handle circular references"],
      correct: [1],
      concept: "Recursive CTEs can traverse any graph structure, not just trees. However, graphs with cycles require explicit cycle detection (tracking visited nodes) to prevent infinite recursion. Graphs with multiple parents are handled naturally — a node may appear multiple times in the result set via different paths."
    },
    {
      id: 90,
      type: "tf",
      difficulty: 3,
      topic: "Query Optimization",
      question: "The optimizer can always find the globally optimal execution plan for any query, regardless of the number of tables involved.",
      options: ["True - Modern optimizers use exhaustive search algorithms that guarantee finding the optimal plan", "False - For queries with many tables, the search space grows exponentially and the optimizer may use heuristics that find a good but not necessarily optimal plan"],
      correct: [1],
      concept: "The number of possible join orderings grows factorially with the number of tables (n! for n tables). For queries joining many tables (e.g., 10+), exhaustive search is impractical. Optimizers use heuristics, greedy algorithms, or genetic algorithms to find good plans within time limits, but these may miss the truly optimal plan."
    },
    {
      id: 91,
      type: "tf",
      difficulty: 3,
      topic: "Query Optimization",
      question: "Subquery flattening (unnesting) is always beneficial and the optimizer should always convert subqueries to JOINs.",
      options: ["True - JOINs are always more efficient than subqueries in every scenario", "False - Subquery flattening can sometimes increase the result set size (due to duplicates from JOINs) and may not be applicable for all subquery types"],
      correct: [1],
      concept: "Subquery flattening is not always safe or beneficial. Converting an IN subquery to a JOIN can produce duplicates if the subquery source has duplicate values (changing cardinality). Anti-joins (NOT IN with NULLs) have different NULL handling than equivalent LEFT JOIN ... IS NULL. The optimizer must verify semantic equivalence before flattening."
    },
    {
      id: 92,
      type: "tf",
      difficulty: 3,
      topic: "Execution Plans",
      question: "An EXPLAIN plan that shows an Index Scan is always faster than one that shows a Seq Scan on the same table.",
      options: ["True - Index scans are always more efficient than sequential scans", "False - Sequential scans can be faster when reading a large portion of the table due to sequential I/O being cheaper than random I/O from index lookups"],
      correct: [1],
      concept: "Index scans involve random I/O (jumping to different disk locations for each row), while sequential scans use efficient sequential I/O. When a large percentage of the table must be read, the cumulative cost of random I/O from index lookups exceeds the cost of reading the entire table sequentially."
    },
    {
      id: 93,
      type: "tf",
      difficulty: 3,
      topic: "Execution Plans",
      question: "In PostgreSQL\'s EXPLAIN output, the \'cost\' numbers (e.g., cost=0.00..425.00) represent the actual time in milliseconds to execute that operation.",
      options: ["True - The cost values directly correspond to milliseconds of execution time", "False - The cost values are abstract units used for plan comparison, not real time measurements"],
      correct: [1],
      concept: "PostgreSQL\'s EXPLAIN cost numbers are in arbitrary units (roughly corresponding to sequential page reads) used by the optimizer to compare plan alternatives. They do not represent milliseconds or any real-time metric. Actual execution times are only available in EXPLAIN ANALYZE output, shown separately as \'actual time\'."
    },
    {
      id: 94,
      type: "tf",
      difficulty: 3,
      topic: "Performance Patterns",
      question: "Using OR conditions in a WHERE clause always prevents index usage and results in a full table scan.",
      options: ["True - OR conditions cannot use indexes and always force full table scans", "False - The optimizer may use index merge (combining results from multiple index scans) or bitmap scans to handle OR conditions efficiently"],
      correct: [1],
      concept: "While OR conditions can prevent index usage in some cases, modern optimizers have strategies: Bitmap OR scans (PostgreSQL), Index Merge (MySQL), and index intersection. OR conditions on the SAME column can be rewritten as IN, which is index-friendly. UNION ALL rewrite is another optimization technique for OR."
    },
    {
      id: 95,
      type: "tf",
      difficulty: 3,
      topic: "Performance Patterns",
      question: "A materialized view always provides better query performance than running the underlying query directly, with no trade-offs.",
      options: ["True - Materialized views always provide faster reads with no downsides", "False - Materialized views trade storage space and refresh overhead for faster reads, and may serve stale data between refreshes"],
      correct: [1],
      concept: "Materialized views pre-compute and store results, speeding up reads. However, they consume additional storage, require refresh operations (which can be expensive), and may serve stale data between refreshes. The refresh strategy (manual, on-commit, scheduled) determines the trade-off between data freshness and performance."
    },
    {
      id: 96,
      type: "tf",
      difficulty: 3,
      topic: "Window Functions Deep Dive",
      question: "Window functions can be used in the WHERE clause to filter rows based on their computed values.",
      options: ["True - You can directly filter rows using window functions in WHERE", "False - Window functions cannot appear in WHERE clauses because they are evaluated after WHERE in the logical query processing order"],
      correct: [1],
      concept: "Window functions are evaluated in the SELECT phase, which occurs after WHERE in the logical processing order. To filter based on window function results, you must wrap the query in a subquery or CTE and apply the filter in the outer query\'s WHERE clause. For example: SELECT * FROM (SELECT *, ROW_NUMBER() OVER (...) as rn FROM t) sub WHERE rn = 1."
    },
    {
      id: 97,
      type: "tf",
      difficulty: 3,
      topic: "CTEs & Recursive CTEs",
      question: "A non-recursive CTE is functionally equivalent to an inline subquery (derived table) in all cases and always produces the same execution plan.",
      options: ["True - CTEs and inline subqueries are always optimized identically", "False - While semantically equivalent, CTEs may be materialized differently than inline subqueries depending on the database, potentially producing different execution plans"],
      correct: [1],
      concept: "While non-recursive CTEs and inline subqueries are semantically equivalent, execution can differ. In older PostgreSQL versions, CTEs were always materialized (optimization fence), while inline subqueries were integrated into the main plan. This meant CTEs could prevent predicate pushdown. Modern versions give more optimizer freedom, but differences can still occur."
    },
    {
      id: 98,
      type: "tf",
      difficulty: 3,
      topic: "Query Optimization",
      question: "View inlining always improves performance by allowing the optimizer to optimize the combined query holistically.",
      options: ["True - Expanding views into the main query always leads to better optimization", "False - View inlining can sometimes hurt performance by creating a larger and more complex query for the optimizer to process"],
      correct: [1],
      concept: "While view inlining often helps (enabling cross-boundary optimizations like predicate pushdown), it can increase query complexity, making optimization harder. For complex views, the optimizer may spend more time on plan enumeration or make worse choices due to the expanded search space. Some views are better left as optimization boundaries."
    },
    {
      id: 99,
      type: "tf",
      difficulty: 3,
      topic: "Execution Plans",
      question: "A Merge Join requires both input datasets to be sorted on the join key, making it ideal when indexes already provide the required sort order.",
      options: ["True - Merge Join merges two sorted inputs and is very efficient when pre-sorted data is available from indexes", "False - Merge Join does not require sorted inputs; it sorts data internally during execution"],
      correct: [0],
      concept: "Merge Join works by simultaneously scanning two sorted inputs and merging matching rows. When indexes provide pre-sorted data, no additional sort is needed, making Merge Join very efficient (O(n+m) complexity). Without pre-sorted data, the optimizer adds Sort nodes before the Merge Join, which adds overhead."
    },
    {
      id: 100,
      type: "tf",
      difficulty: 3,
      topic: "Performance Patterns",
      question: "In a data engineering pipeline that processes millions of rows, using INSERT ... SELECT is generally more efficient than executing individual INSERT statements in a loop.",
      options: ["True - INSERT ... SELECT is a set-based operation that processes all rows in a single pass, reducing overhead from repeated statement parsing and network round-trips", "False - Individual INSERT statements in a loop provide better performance because each row is committed separately"],
      correct: [0],
      concept: "INSERT ... SELECT is a set-based operation that avoids the overhead of repeated statement parsing, plan compilation, network round-trips, and individual commits. Individual INSERT statements in a loop incur these costs for every row, making them orders of magnitude slower for large datasets. Set-based operations are a core SQL performance principle."
    }
  ]
};

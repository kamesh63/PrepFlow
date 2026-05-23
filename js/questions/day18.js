window.QUIZ_DATA = window.QUIZ_DATA || {};
window.QUIZ_DATA["day18"] = {
  title: "PySpark Basics",
  category: "spark",
  topics: ["DataFrame Operations", "Transformations & Actions", "Data Reading & Writing", "Schema Definition", "Basic Aggregations"],
  questions: [
    {
      id: 1,
      type: "single",
      difficulty: 1,
      question: "Which PySpark method is used to select specific columns from a DataFrame?",
      options: ["df.select(\"col1\", \"col2\")", "df.pick(\"col1\", \"col2\")", "df.columns(\"col1\", \"col2\")", "df.get(\"col1\", \"col2\")"],
      correct: [0],
      concept: "df.select() is the standard method to project specific columns from a DataFrame. It accepts column names as strings or Column objects and returns a new DataFrame containing only the specified columns. This is analogous to the SELECT clause in SQL."
    },
    {
      id: 2,
      type: "single",
      difficulty: 1,
      question: "Which method filters rows in a PySpark DataFrame based on a condition?",
      options: ["df.filter(condition)", "df.remove(condition)", "df.exclude(condition)", "df.eliminate(condition)"],
      correct: [0],
      concept: "df.filter() (also aliased as df.where()) filters rows based on a boolean condition. For example, df.filter(col(\"age\") > 25) retains only rows where age exceeds 25. Both filter() and where() are interchangeable in PySpark."
    },
    {
      id: 3,
      type: "single",
      difficulty: 1,
      question: "What does df.show() do in PySpark?",
      options: ["Displays the first 20 rows of the DataFrame in a tabular format", "Returns all rows as a Python list", "Saves the DataFrame to a CSV file", "Prints the schema of the DataFrame"],
      correct: [0],
      concept: "df.show() is an action that triggers computation and displays the first 20 rows (by default) in a formatted table in the console. You can customize the output with show(n, truncate=False) to show n rows without truncating long values."
    },
    {
      id: 4,
      type: "single",
      difficulty: 1,
      question: "Which function creates a Column object referencing a column by name in PySpark?",
      options: ["col(\"column_name\")", "ref(\"column_name\")", "column(\"column_name\")", "field(\"column_name\")"],
      correct: [0],
      concept: "col() from pyspark.sql.functions creates a Column object that references a column by name. It is used in expressions like df.select(col(\"name\")) and df.filter(col(\"age\") > 25). You can also use df[\"column_name\"] or df.column_name as alternatives."
    },
    {
      id: 5,
      type: "single",
      difficulty: 1,
      question: "What does the withColumn() method do in PySpark?",
      options: ["Adds a new column or replaces an existing column with the given expression", "Removes a column from the DataFrame", "Renames a column in the DataFrame", "Converts a column to a different data type"],
      correct: [0],
      concept: "withColumn(colName, expression) returns a new DataFrame with a new column added or an existing column replaced. Since DataFrames are immutable, it creates a new DataFrame rather than modifying the original. Example: df.withColumn(\"age_plus_1\", col(\"age\") + 1)."
    },
    {
      id: 6,
      type: "single",
      difficulty: 1,
      question: "How do you remove a column from a PySpark DataFrame?",
      options: ["df.drop(\"column_name\")", "df.remove(\"column_name\")", "df.delete(\"column_name\")", "df.exclude(\"column_name\")"],
      correct: [0],
      concept: "df.drop(\"column_name\") returns a new DataFrame with the specified column removed. You can drop multiple columns at once: df.drop(\"col1\", \"col2\"). If the column doesn\'t exist, drop() silently returns the DataFrame unchanged without raising an error."
    },
    {
      id: 7,
      type: "single",
      difficulty: 1,
      question: "Which PySpark function is used to add a constant value as a new column?",
      options: ["lit(value)", "const(value)", "static(value)", "fixed(value)"],
      correct: [0],
      concept: "lit() from pyspark.sql.functions creates a Column of a literal constant value. For example, df.withColumn(\"country\", lit(\"USA\")) adds a column where every row has the value \"USA\". Without lit(), Spark would interpret the string as a column name reference."
    },
    {
      id: 8,
      type: "single",
      difficulty: 1,
      question: "What is the default format when reading a file with spark.read.load() without specifying a format?",
      options: ["Parquet", "CSV", "JSON", "ORC"],
      correct: [0],
      concept: "Parquet is Spark\'s default file format. If you call spark.read.load(\"path\") without specifying a format, Spark assumes Parquet. Parquet is a columnar storage format that provides efficient compression and encoding, making it the preferred format for Spark workloads."
    },
    {
      id: 9,
      type: "single",
      difficulty: 1,
      question: "Which write mode will overwrite existing data at the output path?",
      options: ["\"overwrite\"", "\"append\"", "\"ignore\"", "\"errorIfExists\""],
      correct: [0],
      concept: "The \"overwrite\" mode deletes any existing data at the output path and writes the new data. \"append\" adds data without deleting existing files. \"ignore\" skips writing if data exists. \"errorIfExists\" (or \"error\") throws an exception if data already exists."
    },
    {
      id: 10,
      type: "single",
      difficulty: 1,
      question: "Which class is used to define a DataFrame schema programmatically in PySpark?",
      options: ["StructType", "SchemaBuilder", "DataSchema", "ColumnDef"],
      correct: [0],
      concept: "StructType is the primary class for defining DataFrame schemas in PySpark. It contains a list of StructField objects, each defining a column\'s name, data type, and nullability. Example: StructType([StructField(\"name\", StringType(), True)])."
    },
    {
      id: 11,
      type: "single",
      difficulty: 1,
      question: "What does df.count() return in PySpark?",
      options: ["The total number of rows in the DataFrame", "The number of columns in the DataFrame", "The number of non-null values in each column", "The number of distinct rows in the DataFrame"],
      correct: [0],
      concept: "df.count() is an action that returns the total number of rows in the DataFrame as an integer. It triggers a full scan of the data. For column-level null counts, use df.select(count(col(\"column_name\")))."
    },
    {
      id: 12,
      type: "single",
      difficulty: 1,
      question: "Which PySpark method groups rows by one or more columns for aggregation?",
      options: ["df.groupBy(\"column\")", "df.partition(\"column\")", "df.cluster(\"column\")", "df.segment(\"column\")"],
      correct: [0],
      concept: "df.groupBy() (also spelled groupby()) groups rows sharing the same values in the specified columns, returning a GroupedData object. You then chain aggregation methods like .agg(), .count(), .sum(), etc. to compute aggregate values for each group."
    },
    {
      id: 13,
      type: "single",
      difficulty: 1,
      question: "What is the output of df.describe() in PySpark?",
      options: ["Summary statistics including count, mean, stddev, min, and max for numeric columns", "The schema of the DataFrame with column names and types", "The first 5 rows of the DataFrame", "The execution plan for the DataFrame"],
      correct: [0],
      concept: "df.describe() computes summary statistics for numeric and string columns, returning a DataFrame with rows for count, mean, stddev, min, and max. For string columns, it shows count, min, and max. It is useful for quick exploratory data analysis."
    },
    {
      id: 14,
      type: "single",
      difficulty: 1,
      question: "How do you rename a column in a PySpark DataFrame?",
      options: ["df.withColumnRenamed(\"old_name\", \"new_name\")", "df.rename(\"old_name\", \"new_name\")", "df.setColumnName(\"old_name\", \"new_name\")", "df.alterColumn(\"old_name\", \"new_name\")"],
      correct: [0],
      concept: "withColumnRenamed() returns a new DataFrame with the specified column renamed. You can also use df.select(col(\"old_name\").alias(\"new_name\")) to achieve the same effect. Both approaches create a new DataFrame since DataFrames are immutable."
    },
    {
      id: 15,
      type: "single",
      difficulty: 1,
      question: "Which PySpark function computes the distinct count of a column?",
      options: ["countDistinct(\"column\")", "distinctCount(\"column\")", "uniqueCount(\"column\")", "count_unique(\"column\")"],
      correct: [0],
      concept: "countDistinct() from pyspark.sql.functions returns the number of distinct values in a column. It is commonly used inside agg(): df.agg(countDistinct(\"city\")). For approximate distinct counts on large datasets, use approx_count_distinct() for better performance."
    },
    {
      id: 16,
      type: "single",
      difficulty: 1,
      question: "What does the alias() method do when applied to a Column in PySpark?",
      options: ["Gives the column a new name in the output DataFrame", "Creates a copy of the column with a different data type", "Links two columns together with a foreign key", "Filters the column to show only non-null values"],
      correct: [0],
      concept: "alias() renames a column expression in the output. For example, col(\"price\").alias(\"unit_price\") produces a column named \"unit_price\". It is commonly used in select() and agg() to give meaningful names to computed columns."
    },
    {
      id: 17,
      type: "single",
      difficulty: 1,
      question: "Which method reads a CSV file into a PySpark DataFrame?",
      options: ["spark.read.csv(\"path\")", "spark.load.csv(\"path\")", "spark.open.csv(\"path\")", "spark.import.csv(\"path\")"],
      correct: [0],
      concept: "spark.read.csv(\"path\") reads a CSV file and returns a DataFrame. You can chain options like .option(\"header\", \"true\").option(\"inferSchema\", \"true\") before .csv() to configure header parsing and schema inference."
    },
    {
      id: 18,
      type: "single",
      difficulty: 1,
      question: "What does the nullable parameter in StructField control?",
      options: ["Whether the column can contain null values", "Whether the column can be dropped from the DataFrame", "Whether the column is included in the output schema", "Whether the column allows duplicate values"],
      correct: [0],
      concept: "The nullable parameter (third argument of StructField) indicates whether the column can contain null values. StructField(\"age\", IntegerType(), True) means the age column allows nulls. Setting it to False enforces non-null values during schema validation."
    },
    {
      id: 19,
      type: "single",
      difficulty: 1,
      question: "Which PySpark data type represents an array of elements?",
      options: ["ArrayType", "ListType", "VectorType", "SequenceType"],
      correct: [0],
      concept: "ArrayType represents an array column in PySpark. It is defined as ArrayType(elementType, containsNull) where elementType is the type of elements (e.g., StringType()) and containsNull indicates whether elements can be null. Example: ArrayType(IntegerType(), True)."
    },
    {
      id: 20,
      type: "single",
      difficulty: 1,
      question: "Which aggregation function returns the average value of a numeric column?",
      options: ["avg(\"column\")", "mean(\"column\")", "average(\"column\")", "Both avg() and mean() are valid in PySpark"],
      correct: [3],
      concept: "In PySpark, both avg() and mean() are valid functions for computing the average of a numeric column. They are aliases for the same operation. You can use either in groupBy().agg() or in df.select(). Both return the same result."
    },
    {
      id: 21,
      type: "single",
      difficulty: 1,
      question: "What does df.distinct() return?",
      options: ["A new DataFrame with duplicate rows removed", "The count of distinct values in each column", "A list of unique column names", "A boolean indicating if all rows are unique"],
      correct: [0],
      concept: "df.distinct() returns a new DataFrame with duplicate rows removed. It considers all columns when determining duplicates. For removing duplicates based on specific columns, use df.dropDuplicates([\"col1\", \"col2\"]) instead."
    },
    {
      id: 22,
      type: "single",
      difficulty: 1,
      question: "Which method returns the first row of a PySpark DataFrame?",
      options: ["df.first()", "df.top()", "df.begin()", "df.start()"],
      correct: [0],
      concept: "df.first() returns the first Row object of the DataFrame. It is equivalent to df.head() and df.take(1)[0]. Note that first() is an action that triggers computation and returns a single Row, not a DataFrame."
    },
    {
      id: 23,
      type: "single",
      difficulty: 1,
      question: "How do you write a DataFrame to a Parquet file in PySpark?",
      options: ["df.write.parquet(\"output_path\")", "df.save.parquet(\"output_path\")", "df.export.parquet(\"output_path\")", "df.to_parquet(\"output_path\")"],
      correct: [0],
      concept: "df.write.parquet(\"path\") writes the DataFrame in Parquet format. You can chain .mode(\"overwrite\") or .option() before .parquet(). Parquet is the default and recommended format in Spark due to its columnar storage, compression, and predicate pushdown support."
    },
    {
      id: 24,
      type: "single",
      difficulty: 1,
      question: "What does the when() function do in PySpark?",
      options: ["Creates conditional expressions similar to SQL CASE WHEN", "Schedules a function to run at a specific time", "Waits for a condition to be true before proceeding", "Triggers an action when a DataFrame reaches a certain size"],
      correct: [0],
      concept: "when(condition, value) from pyspark.sql.functions creates conditional expressions like SQL\'s CASE WHEN. It is typically chained with .otherwise(default_value). Example: df.withColumn(\"label\", when(col(\"age\") >= 18, \"adult\").otherwise(\"minor\"))."
    },
    {
      id: 25,
      type: "single",
      difficulty: 1,
      question: "Which PySpark method returns the schema of a DataFrame?",
      options: ["df.printSchema()", "df.showSchema()", "df.describeSchema()", "df.getStructure()"],
      correct: [0],
      concept: "df.printSchema() prints the schema of the DataFrame in a tree format showing column names, data types, and nullability. To get the schema as a StructType object programmatically, use df.schema. printSchema() is useful for quick visual inspection during development."
    },
    {
      id: 26,
      type: "single",
      difficulty: 1,
      question: "What does the collect() action return in PySpark?",
      options: ["A Python list of Row objects containing all data from the DataFrame", "A new DataFrame with all partitions merged", "An iterator over the rows of the DataFrame", "A dictionary mapping column names to their values"],
      correct: [0],
      concept: "collect() returns all rows of the DataFrame as a list of Row objects to the Driver. This brings all data to the Driver\'s memory, so it should be used cautiously on large datasets. For large DataFrames, prefer take(n) or show() to limit data transfer."
    },
    {
      id: 27,
      type: "single",
      difficulty: 1,
      question: "Which option should be set to treat the first row of a CSV file as column headers?",
      options: ["option(\"header\", \"true\")", "option(\"columns\", \"first_row\")", "option(\"headerRow\", \"true\")", "option(\"useHeaders\", \"true\")"],
      correct: [0],
      concept: "option(\"header\", \"true\") tells Spark to use the first row of the CSV file as column names. Without this option, Spark generates default column names like _c0, _c1, _c2, etc. This is one of the most commonly used CSV reading options."
    },
    {
      id: 28,
      type: "single",
      difficulty: 1,
      question: "What does df.take(5) return in PySpark?",
      options: ["A list of the first 5 Row objects from the DataFrame", "A new DataFrame containing only 5 rows", "The 5th row of the DataFrame", "Five random rows from the DataFrame"],
      correct: [0],
      concept: "df.take(n) is an action that returns a list of the first n Row objects. It is more memory-efficient than collect() because it only brings n rows to the Driver. It is equivalent to df.head(n) and similar to df.limit(n).collect()."
    },
    {
      id: 29,
      type: "single",
      difficulty: 1,
      question: "Which PySpark data type represents a key-value pair column?",
      options: ["MapType", "DictType", "HashType", "KeyValueType"],
      correct: [0],
      concept: "MapType represents a column of key-value pairs in PySpark. It is defined as MapType(keyType, valueType, valueContainsNull). For example, MapType(StringType(), IntegerType(), True) represents a map with string keys and nullable integer values."
    },
    {
      id: 30,
      type: "single",
      difficulty: 1,
      question: "What does the sum() aggregation function do in PySpark?",
      options: ["Returns the sum of all values in a numeric column", "Returns the total number of rows", "Returns the cumulative sum across rows", "Returns the sum of column name lengths"],
      correct: [0],
      concept: "sum(\"column\") computes the total sum of all values in a numeric column. It is used in aggregations like df.groupBy(\"dept\").agg(sum(\"salary\")). Null values are ignored by default. For cumulative sums, you would use window functions instead."
    },
    {
      id: 31,
      type: "single",
      difficulty: 1,
      question: "How do you read a JSON file into a PySpark DataFrame?",
      options: ["spark.read.json(\"path\")", "spark.read.load(\"path\", format=\"json\")", "Both A and B are valid approaches", "spark.read.text(\"path\").parseJSON()"],
      correct: [2],
      concept: "Both spark.read.json(\"path\") and spark.read.load(\"path\", format=\"json\") are valid ways to read JSON files. Spark expects one JSON object per line (JSON Lines format) by default. For multi-line JSON, use option(\"multiLine\", \"true\")."
    },
    {
      id: 32,
      type: "single",
      difficulty: 1,
      question: "What does the min() aggregation function return?",
      options: ["The minimum value in the specified column", "The row with the minimum value across all columns", "The index of the minimum value", "The column with the fewest non-null values"],
      correct: [0],
      concept: "min(\"column\") returns the minimum value found in the specified column. It works with numeric, string, and date columns. For strings, it returns the lexicographically smallest value. Null values are ignored in the computation."
    },
    {
      id: 33,
      type: "single",
      difficulty: 1,
      question: "Which method is used to apply multiple aggregation functions in a single groupBy operation?",
      options: ["df.groupBy(\"col\").agg(sum(\"a\"), avg(\"b\"))", "df.groupBy(\"col\").multi_agg(sum(\"a\"), avg(\"b\"))", "df.groupBy(\"col\").apply(sum(\"a\"), avg(\"b\"))", "df.groupBy(\"col\").compute(sum(\"a\"), avg(\"b\"))"],
      correct: [0],
      concept: "The agg() method accepts multiple aggregation expressions, allowing you to compute several aggregates in a single pass. Example: df.groupBy(\"dept\").agg(sum(\"salary\").alias(\"total\"), avg(\"salary\").alias(\"average\")). This is more efficient than running separate aggregations."
    },
    {
      id: 34,
      type: "single",
      difficulty: 1,
      question: "What is the purpose of the otherwise() function in PySpark?",
      options: ["Provides a default value for a when() condition that is not met", "Handles exceptions during DataFrame transformations", "Specifies an alternative data source if the primary one fails", "Creates an else branch in a PySpark UDF"],
      correct: [0],
      concept: "otherwise() is chained after when() to specify the default value when no condition is matched. Without otherwise(), unmatched rows receive null. Example: when(col(\"score\") >= 90, \"A\").when(col(\"score\") >= 80, \"B\").otherwise(\"C\")."
    },
    {
      id: 35,
      type: "single",
      difficulty: 1,
      question: "Which method returns the number of columns in a PySpark DataFrame?",
      options: ["len(df.columns)", "df.columnCount()", "df.numColumns()", "df.width()"],
      correct: [0],
      concept: "df.columns returns a Python list of column names, and len(df.columns) gives the count. There is no built-in columnCount() method. You can also use len(df.schema.fields) or len(df.dtypes) to get the same result."
    },
    {
      id: 36,
      type: "single",
      difficulty: 2,
      question: "What happens when you call df.where(\"age > 25\") versus df.filter(col(\"age\") > 25)?",
      options: ["They produce the same result — where() is an alias for filter()", "where() uses SQL syntax only; filter() uses Python expressions only", "where() is lazy; filter() is eager", "filter() returns a DataFrame; where() returns an RDD"],
      correct: [0],
      concept: "where() and filter() are exact aliases in PySpark — they produce identical results and execution plans. Both accept either a Column expression (col(\"age\") > 25) or a SQL string expression (\"age > 25\"). The choice is purely stylistic."
    },
    {
      id: 37,
      type: "single",
      difficulty: 2,
      question: "What is the memory risk when using collect() on a DataFrame with 100 million rows?",
      options: ["The Driver may crash with an OutOfMemoryError because all rows are sent to the Driver", "The executors will run out of memory during collection", "The cluster manager will reject the operation", "There is no risk — Spark handles memory management automatically"],
      correct: [0],
      concept: "collect() brings ALL data from executors to the Driver\'s JVM heap. With 100 million rows, this data may exceed the Driver\'s memory allocation, causing an OutOfMemoryError. Use take(n), show(), or write to storage for large datasets instead."
    },
    {
      id: 38,
      type: "single",
      difficulty: 2,
      question: "What is the difference between df.head(5) and df.take(5) in PySpark?",
      options: ["They return the same result — both return a list of the first 5 Row objects", "head() returns a DataFrame; take() returns a list", "take() triggers computation; head() does not", "head() returns a single Row; take() returns a list"],
      correct: [0],
      concept: "In PySpark, head(n) and take(n) both return a list of the first n Row objects. They are functionally identical. However, head() without arguments returns a single Row (equivalent to first()), while take() always requires an argument."
    },
    {
      id: 39,
      type: "single",
      difficulty: 2,
      question: "When reading a CSV file, what happens if inferSchema is set to false (the default)?",
      options: ["All columns are read as StringType regardless of their actual content", "Spark throws an error if the data contains non-string values", "Spark uses IntegerType for numeric columns and StringType for others", "The DataFrame is created without any schema information"],
      correct: [0],
      concept: "By default (inferSchema=false), Spark reads all CSV columns as StringType. This is faster because Spark doesn\'t need an extra pass to determine types. To get proper types, either set inferSchema=true or provide an explicit schema using the schema parameter."
    },
    {
      id: 40,
      type: "single",
      difficulty: 2,
      question: "What does the \"ignore\" write mode do when the output path already contains data?",
      options: ["Silently skips writing without error and leaves existing data intact", "Overwrites the existing data", "Appends new data to the existing data", "Throws a FileAlreadyExistsException"],
      correct: [0],
      concept: "The \"ignore\" write mode acts like SQL\'s CREATE TABLE IF NOT EXISTS. If data already exists at the output path, the write operation is silently skipped without any error or modification. This is useful in idempotent pipeline designs."
    },
    {
      id: 41,
      type: "single",
      difficulty: 2,
      question: "What is the advantage of providing an explicit schema instead of using inferSchema when reading CSV files?",
      options: ["It avoids an extra pass over the data and ensures correct types from the start", "It automatically handles missing values better than inferSchema", "It allows reading files larger than available memory", "It enables Spark to read the file in a single partition"],
      correct: [0],
      concept: "Schema inference requires an extra scan of the data to determine column types, doubling the I/O. An explicit schema eliminates this overhead and guarantees correct types even for edge cases (like a column of all nulls that inferSchema might mistype)."
    },
    {
      id: 42,
      type: "single",
      difficulty: 2,
      question: "How does partitionBy on write affect the output directory structure?",
      options: ["It creates subdirectories for each distinct value of the partition column", "It splits the DataFrame into a fixed number of files", "It compresses the output files by partition key", "It sorts the data within each output file by the partition column"],
      correct: [0],
      concept: "df.write.partitionBy(\"country\").parquet(\"path\") creates a directory structure like path/country=US/, path/country=UK/, etc. This is partition pruning friendly — queries filtering on the partition column only read relevant subdirectories."
    },
    {
      id: 43,
      type: "single",
      difficulty: 2,
      question: "What does the pivot() method do in PySpark?",
      options: ["Rotates rows into columns based on distinct values of a column", "Transposes the entire DataFrame (swaps rows and columns)", "Creates a cross-tabulation of two categorical columns", "Sorts the DataFrame by multiple columns simultaneously"],
      correct: [0],
      concept: "pivot() rotates distinct values of a specified column into individual columns, typically used after groupBy(). Example: df.groupBy(\"year\").pivot(\"quarter\").sum(\"revenue\") creates columns Q1, Q2, Q3, Q4 with summed revenue for each year."
    },
    {
      id: 44,
      type: "single",
      difficulty: 2,
      question: "What is the difference between cube() and rollup() in PySpark aggregations?",
      options: ["cube() computes all possible grouping combinations; rollup() computes hierarchical subtotals", "rollup() computes all combinations; cube() computes only paired groupings", "cube() is for numeric data only; rollup() works with any data type", "They are identical functions with different names"],
      correct: [0],
      concept: "cube(\"a\", \"b\") computes aggregates for all combinations: (a,b), (a,null), (null,b), (null,null). rollup(\"a\", \"b\") computes hierarchical subtotals: (a,b), (a,null), (null,null) — it follows a hierarchy from left to right. cube() produces more groupings."
    },
    {
      id: 45,
      type: "single",
      difficulty: 2,
      question: "Which option in spark.read.csv controls the character used to delimit fields?",
      options: ["option(\"delimiter\", \"|\")", "option(\"fieldSep\", \"|\")", "option(\"separator\", \"|\")", "option(\"columnDelimiter\", \"|\""],
      correct: [0],
      concept: "option(\"delimiter\", \"|\") or equivalently option(\"sep\", \"|\") specifies the field delimiter character. The default delimiter is a comma (\",\"). Common alternatives include tab (\"\\t\"), pipe (\"|\"), and semicolon (\";\")."
    },
    {
      id: 46,
      type: "single",
      difficulty: 2,
      question: "What happens when you use withColumn() with an existing column name?",
      options: ["The existing column is replaced with the new expression", "A duplicate column with the same name is added", "An error is raised because column names must be unique", "The original column is renamed and the new one takes its place"],
      correct: [0],
      concept: "When withColumn() is called with a column name that already exists, it replaces the existing column with the new expression. This is a common pattern for transforming columns in place: df.withColumn(\"price\", col(\"price\") * 1.1) to increase price by 10%."
    },
    {
      id: 47,
      type: "single",
      difficulty: 2,
      question: "What does the errorIfExists (default) write mode do?",
      options: ["Throws an AnalysisException if data already exists at the output path", "Silently ignores the write if data exists", "Deletes the existing data before writing", "Appends data to the existing output"],
      correct: [0],
      concept: "\"errorIfExists\" (also written as \"error\") is the default write mode. It throws an AnalysisException if the output path already contains data. This is a safety measure to prevent accidental data overwrites in production pipelines."
    },
    {
      id: 48,
      type: "single",
      difficulty: 2,
      question: "How do you chain multiple when() conditions in PySpark?",
      options: ["when(cond1, val1).when(cond2, val2).otherwise(default)", "when(cond1, val1).elif(cond2, val2).else(default)", "when(cond1, val1).then(cond2, val2).otherwise(default)", "when(cond1, val1).or_when(cond2, val2).default(default)"],
      correct: [0],
      concept: "Multiple conditions are chained by calling .when() repeatedly: when(cond1, val1).when(cond2, val2).when(cond3, val3).otherwise(default). This is equivalent to SQL\'s CASE WHEN cond1 THEN val1 WHEN cond2 THEN val2 ELSE default END."
    },
    {
      id: 49,
      type: "single",
      difficulty: 2,
      question: "What does df.dropDuplicates([\"col1\", \"col2\"]) do?",
      options: ["Removes rows that are duplicate based on the specified subset of columns", "Drops the specified columns from the DataFrame", "Removes all rows where col1 or col2 have null values", "Keeps only rows where col1 and col2 have the same value"],
      correct: [0],
      concept: "dropDuplicates([\"col1\", \"col2\"]) removes duplicate rows based on the specified columns only, keeping the first occurrence. Unlike distinct(), which considers all columns, dropDuplicates() allows you to define the uniqueness criteria."
    },
    {
      id: 50,
      type: "single",
      difficulty: 2,
      question: "What is the result of df.select(col(\"name\").alias(\"employee_name\"))?",
      options: ["A new DataFrame with one column named \"employee_name\" containing values from the \"name\" column", "The original DataFrame with the \"name\" column renamed to \"employee_name\"", "An error because alias() cannot be used inside select()", "A DataFrame with two columns: \"name\" and \"employee_name\""],
      correct: [0],
      concept: "select() with alias() creates a new DataFrame containing only the selected columns with their aliases. The original DataFrame remains unchanged. This is different from withColumnRenamed(), which keeps all columns but renames one."
    },
    {
      id: 51,
      type: "single",
      difficulty: 2,
      question: "When reading a CSV with multiLine set to true, what happens?",
      options: ["Spark can parse CSV records that span multiple lines, such as fields with embedded newlines", "Spark reads multiple CSV files simultaneously", "Each line is treated as a separate DataFrame", "Multiple schemas are inferred from different parts of the file"],
      correct: [0],
      concept: "option(\"multiLine\", \"true\") allows Spark to handle CSV fields that contain embedded newline characters. By default, Spark treats each line as a separate record. With multiLine, quoted fields spanning multiple lines are parsed correctly but reading is slower."
    },
    {
      id: 52,
      type: "single",
      difficulty: 2,
      question: "What happens when you apply a schema to data that doesn\'t match the expected types?",
      options: ["Non-conforming values become null (in PERMISSIVE mode, the default)", "An error is immediately thrown for type mismatches", "Spark silently coerces all values to the specified types", "The DataFrame is created but cannot be displayed"],
      correct: [0],
      concept: "In PERMISSIVE mode (default for CSV), Spark sets non-conforming values to null rather than failing. DROPMALFORMED mode drops non-conforming rows. FAILFAST mode throws an exception on the first mismatch. The mode is set via option(\"mode\", \"FAILFAST\")."
    },
    {
      id: 53,
      type: "single",
      difficulty: 2,
      question: "What is the correct syntax to define a nested struct in a PySpark schema?",
      options: ["StructField(\"address\", StructType([StructField(\"city\", StringType()), StructField(\"zip\", StringType())]))", "StructField(\"address\", NestedType([StructField(\"city\", StringType())]))", "StructField(\"address\", ObjectType({\"city\": StringType()}))", "StructField(\"address\", RecordType([\"city\", \"zip\"]))"],
      correct: [0],
      concept: "Nested structures are defined by using StructType as the data type within a StructField. This creates a column that contains sub-fields, similar to a JSON object. You can nest StructTypes to any depth to represent complex hierarchical data."
    },
    {
      id: 54,
      type: "single",
      difficulty: 2,
      question: "What does df.na.fill(0) do in PySpark?",
      options: ["Replaces all null values with 0 in numeric columns", "Fills the first 0 rows with default values", "Removes rows that contain zero values", "Adds 0 as a new row at the end of the DataFrame"],
      correct: [0],
      concept: "df.na.fill(0) replaces null values with 0 in all numeric columns. You can target specific columns with df.na.fill({\"age\": 0, \"name\": \"unknown\"}). This is a common data cleaning operation to handle missing values before analysis."
    },
    {
      id: 55,
      type: "single",
      difficulty: 2,
      question: "What is the effect of df.write.mode(\"append\").parquet(\"path\")?",
      options: ["New data is added to the existing Parquet files at the output path", "Existing data is deleted and replaced with new data", "An error is thrown if data already exists", "The operation is skipped silently if data exists"],
      correct: [0],
      concept: "Append mode adds new data files alongside existing files at the output path. The existing data remains untouched. This is commonly used in incremental loading scenarios where new batches of data are added to an existing dataset."
    },
    {
      id: 56,
      type: "single",
      difficulty: 2,
      question: "How do you create a column expression for a column named with special characters like spaces?",
      options: ["col(\"`column name`\") or df[\"`column name`\"]", "col(\"column name\") works directly", "You must rename the column first", "Special characters are not supported in column names"],
      correct: [0],
      concept: "Columns with special characters (spaces, dots, hyphens) must be enclosed in backticks: col(\"`my column`\"). Alternatively, df[\"`my column`\"] works. Without backticks, Spark may misinterpret the name. It is best practice to avoid special characters in column names."
    },
    {
      id: 57,
      type: "single",
      difficulty: 2,
      question: "What does the coalesce function from pyspark.sql.functions do?",
      options: ["Returns the first non-null value among the given columns", "Reduces the number of DataFrame partitions", "Merges multiple DataFrames into one", "Combines adjacent null values into a single null"],
      correct: [0],
      concept: "The coalesce() SQL function returns the first non-null value from a list of columns. Example: coalesce(col(\"phone\"), col(\"mobile\"), lit(\"N/A\")) returns phone if not null, otherwise mobile, otherwise \"N/A\". This is different from DataFrame.coalesce() which reduces partitions."
    },
    {
      id: 58,
      type: "single",
      difficulty: 2,
      question: "What is the output format when you use df.write.option(\"compression\", \"gzip\").csv(\"path\")?",
      options: ["CSV files compressed with gzip, resulting in .csv.gz files", "A single gzip archive containing all CSV files", "Uncompressed CSV files with a separate gzip index", "An error because CSV does not support compression"],
      correct: [0],
      concept: "Spark supports writing compressed CSV files using codecs like gzip, snappy, bzip2, and deflate. Each partition\'s output file is individually compressed, resulting in .csv.gz files. This reduces storage but gzip files cannot be split for parallel reading."
    },
    {
      id: 59,
      type: "single",
      difficulty: 2,
      question: "How does the max() aggregation handle null values?",
      options: ["Null values are ignored and the maximum is computed from non-null values only", "Null values are treated as the highest possible value", "The result is null if any value in the column is null", "An error is thrown if the column contains null values"],
      correct: [0],
      concept: "All Spark aggregation functions (max, min, sum, avg, count) ignore null values by default. max() returns the maximum non-null value. If all values are null, the result is null. To count nulls, use sum(when(col(\"x\").isNull(), 1).otherwise(0))."
    },
    {
      id: 60,
      type: "single",
      difficulty: 2,
      question: "What is the difference between df.show() and df.display() in PySpark?",
      options: ["show() is a standard PySpark method; display() is a Databricks-specific method", "display() shows more rows than show() by default", "show() renders HTML tables; display() renders plain text", "They are identical methods available in all PySpark environments"],
      correct: [0],
      concept: "df.show() is a standard PySpark method that prints rows as text to the console. df.display() is specific to Databricks notebooks and renders a rich HTML table with interactive features. display() is not available in standard PySpark or Jupyter environments."
    },
    {
      id: 61,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are valid write modes in PySpark? (Select all that apply)",
      options: ["overwrite", "append", "merge", "ignore"],
      correct: [0, 1, 3],
      concept: "PySpark supports four write modes: \"overwrite\" (replace existing), \"append\" (add to existing), \"ignore\" (skip if exists), and \"error\"/\"errorIfExists\" (fail if exists). \"merge\" is not a built-in write mode — MERGE operations require Delta Lake."
    },
    {
      id: 62,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are actions in PySpark? (Select all that apply)",
      options: ["df.count()", "df.show()", "df.select(\"col1\")", "df.collect()"],
      correct: [0, 1, 3],
      concept: "count(), show(), and collect() are actions that trigger computation and return results. select() is a transformation that lazily defines a new DataFrame without executing anything. Actions are the operations that trigger the Spark job execution."
    },
    {
      id: 63,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are valid PySpark data types for schema definition? (Select all that apply)",
      options: ["StringType()", "IntegerType()", "ArrayType(StringType())", "DictType()"],
      correct: [0, 1, 2],
      concept: "StringType(), IntegerType(), and ArrayType() are valid PySpark data types from pyspark.sql.types. DictType() does not exist — for key-value pair columns, use MapType(keyType, valueType). Other valid types include FloatType, BooleanType, DateType, etc."
    },
    {
      id: 64,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are valid ways to filter a PySpark DataFrame? (Select all that apply)",
      options: ["df.filter(col(\"age\") > 25)", "df.where(\"age > 25\")", "df.filter(\"age > 25\")", "df.query(\"age > 25\")"],
      correct: [0, 1, 2],
      concept: "filter() and where() are aliases and accept both Column expressions and SQL string expressions. df.filter(col(\"age\") > 25), df.where(\"age > 25\"), and df.filter(\"age > 25\") all work. df.query() is a Pandas method and does not exist in PySpark."
    },
    {
      id: 65,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are valid aggregation functions in PySpark? (Select all that apply)",
      options: ["sum()", "avg()", "median()", "count()"],
      correct: [0, 1, 3],
      concept: "sum(), avg(), and count() are standard PySpark aggregation functions from pyspark.sql.functions. median() is not a standard aggregation function in PySpark — to compute the median, you use percentile_approx(col, 0.5) or the exact percentile function."
    },
    {
      id: 66,
      type: "multi",
      difficulty: 2,
      question: "Which of the following options are commonly used when reading CSV files in PySpark? (Select all that apply)",
      options: ["header", "inferSchema", "delimiter", "encoding"],
      correct: [0, 1, 2, 3],
      concept: "All four are commonly used CSV options: \"header\" (use first row as column names), \"inferSchema\" (auto-detect types), \"delimiter\" or \"sep\" (field separator), and \"encoding\" (character encoding like UTF-8). Other options include \"quote\", \"escape\", \"nullValue\", and \"dateFormat\"."
    },
    {
      id: 67,
      type: "multi",
      difficulty: 2,
      question: "Which of the following correctly describe the behavior of df.drop()? (Select all that apply)",
      options: ["It returns a new DataFrame without the specified column", "It can drop multiple columns in a single call", "It raises an error if the column does not exist", "It does not modify the original DataFrame"],
      correct: [0, 1, 3],
      concept: "drop() returns a new DataFrame with the specified column(s) removed. It supports dropping multiple columns: df.drop(\"col1\", \"col2\"). If a column doesn\'t exist, drop() silently ignores it — no error is raised. The original DataFrame is unchanged due to immutability."
    },
    {
      id: 68,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are transformations (not actions) in PySpark? (Select all that apply)",
      options: ["df.filter(col(\"x\") > 5)", "df.withColumn(\"y\", col(\"x\") + 1)", "df.groupBy(\"a\").count()", "df.select(\"col1\", \"col2\")"],
      correct: [0, 1, 3],
      concept: "filter(), withColumn(), and select() are transformations that return new DataFrames lazily. groupBy().count() is actually an action — count() after groupBy() triggers computation. Note that df.groupBy(\"a\").agg(count(\"b\")) would be a transformation returning a GroupedData result."
    },
    {
      id: 69,
      type: "multi",
      difficulty: 2,
      question: "Which of the following formats support predicate pushdown in Spark? (Select all that apply)",
      options: ["Parquet", "ORC", "CSV", "JSON"],
      correct: [0, 1],
      concept: "Parquet and ORC are columnar formats that support predicate pushdown — Spark can skip reading entire row groups or stripes that don\'t match filter conditions. CSV and JSON are row-based formats that must be fully scanned, making them less efficient for filtered queries."
    },
    {
      id: 70,
      type: "multi",
      difficulty: 2,
      question: "Which of the following statements about StructType are correct? (Select all that apply)",
      options: ["It represents the schema of a DataFrame", "It contains a list of StructField objects", "It can be nested within another StructType", "It automatically infers column types from data"],
      correct: [0, 1, 2],
      concept: "StructType represents a DataFrame schema containing StructField objects that define columns. StructTypes can be nested (a StructField can have StructType as its type). However, StructType itself does not infer types — that is done by the reader with inferSchema option."
    },
    {
      id: 71,
      type: "multi",
      difficulty: 2,
      question: "Which of the following PySpark methods can return a single Row from a DataFrame? (Select all that apply)",
      options: ["df.first()", "df.head()", "df.take(1)[0]", "df.select(1)"],
      correct: [0, 1, 2],
      concept: "first(), head() (without arguments), and take(1)[0] all return a single Row object from the DataFrame. df.select(1) is not valid for retrieving a row — select() returns a DataFrame, not a Row. These are actions that trigger computation."
    },
    {
      id: 72,
      type: "multi",
      difficulty: 2,
      question: "Which of the following correctly describe the groupBy() operation in PySpark? (Select all that apply)",
      options: ["It returns a GroupedData object, not a DataFrame", "It must be followed by an aggregation function", "It triggers immediate computation when called", "It can group by multiple columns simultaneously"],
      correct: [0, 1, 3],
      concept: "groupBy() returns a GroupedData object that must be followed by an aggregation method (agg, count, sum, etc.) to produce a DataFrame. It is lazy and does not trigger computation. It supports multiple columns: df.groupBy(\"col1\", \"col2\")."
    },
    {
      id: 73,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are benefits of writing data in Parquet format? (Select all that apply)",
      options: ["Efficient columnar compression", "Schema stored within the file", "Support for predicate pushdown", "Human-readable text format"],
      correct: [0, 1, 2],
      concept: "Parquet provides columnar compression (similar values compress better), embedded schema (no need for external schema definition), and predicate pushdown (skip irrelevant data). However, Parquet is a binary format, not human-readable. CSV and JSON are human-readable alternatives."
    },
    {
      id: 74,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are valid column reference methods in PySpark? (Select all that apply)",
      options: ["col(\"name\")", "df[\"name\"]", "df.name", "F.column(\"name\")"],
      correct: [0, 1, 2, 3],
      concept: "All four are valid: col(\"name\") creates a Column object, df[\"name\"] uses bracket notation, df.name uses attribute notation (may conflict with DataFrame methods), and F.column(\"name\") is the full function name (col is a shorthand). Each returns a Column expression."
    },
    {
      id: 75,
      type: "multi",
      difficulty: 2,
      question: "Which of the following describe the behavior of the pivot() method? (Select all that apply)",
      options: ["It must be called after groupBy()", "It converts distinct row values into separate columns", "It requires an aggregation function to be called after it", "It can only pivot on numeric columns"],
      correct: [0, 1, 2],
      concept: "pivot() must be called after groupBy() and before an aggregation function. It transposes distinct values of the pivot column into separate columns. The pivot column can be of any type (string, numeric, date), not just numeric."
    },
    {
      id: 76,
      type: "multi",
      difficulty: 3,
      question: "Which of the following scenarios would benefit from using partitionBy when writing data? (Select all that apply)",
      options: ["Queries frequently filter on a specific column like date or country", "The data needs to be incrementally loaded by partition", "The output should consist of a single large file", "Downstream consumers read only specific subsets of the data"],
      correct: [0, 1, 3],
      concept: "partitionBy creates directory partitions that enable partition pruning — queries filtering on the partition column skip irrelevant directories. It supports incremental loads by writing only new partitions. It produces multiple files (not one), so it\'s not for single-file output."
    },
    {
      id: 77,
      type: "multi",
      difficulty: 3,
      question: "Which of the following are correct about PySpark\'s handling of null values in aggregations? (Select all that apply)",
      options: ["sum() ignores nulls and sums only non-null values", "count(\"*\") includes rows with null values in the count", "avg() includes nulls as zeros in the average calculation", "count(col(\"x\")) excludes rows where x is null"],
      correct: [0, 1, 3],
      concept: "Spark aggregations generally ignore nulls: sum() and avg() skip null values, count(\"*\") counts all rows regardless of nulls, and count(col(\"x\")) counts only non-null values in column x. avg() does NOT treat nulls as zeros — it excludes them from both numerator and denominator."
    },
    {
      id: 78,
      type: "multi",
      difficulty: 3,
      question: "Which of the following are valid PySpark read modes for handling corrupt records in CSV? (Select all that apply)",
      options: ["PERMISSIVE", "DROPMALFORMED", "FAILFAST", "SKIPINVALID"],
      correct: [0, 1, 2],
      concept: "PySpark supports three read modes: PERMISSIVE (default — sets corrupt fields to null), DROPMALFORMED (drops rows that don\'t parse), and FAILFAST (throws exception on first corrupt record). SKIPINVALID is not a valid mode."
    },
    {
      id: 79,
      type: "multi",
      difficulty: 3,
      question: "Which of the following are true about the when().otherwise() pattern in PySpark? (Select all that apply)",
      options: ["Multiple when() clauses can be chained for complex conditions", "Without otherwise(), unmatched rows get null", "when() can be used inside withColumn() and select()", "when() triggers immediate evaluation of the condition"],
      correct: [0, 1, 2],
      concept: "when() supports chaining: when().when().otherwise(). Without otherwise(), unmatched rows default to null. when() can be used in any column expression context (withColumn, select, agg). It is lazily evaluated like all transformations — no immediate computation."
    },
    {
      id: 80,
      type: "multi",
      difficulty: 3,
      question: "Which of the following are differences between cube() and rollup() in PySpark? (Select all that apply)",
      options: ["cube() generates all possible grouping combinations", "rollup() follows a left-to-right hierarchy for subtotals", "cube() always produces more output rows than rollup()", "rollup() does not include a grand total row"],
      correct: [0, 1, 2],
      concept: "cube() generates all 2^n combinations of n grouping columns, while rollup() generates only hierarchical subtotals from left to right. For columns (a, b), cube produces (a,b), (a,null), (null,b), (null,null) while rollup produces (a,b), (a,null), (null,null). Both include the grand total."
    },
    {
      id: 81,
      type: "multi",
      difficulty: 3,
      question: "Which of the following are true about schema enforcement in PySpark? (Select all that apply)",
      options: ["An explicit schema prevents extra passes over the data for type inference", "Schema enforcement catches type mismatches during read with FAILFAST mode", "Providing a schema with fewer fields than the data drops the extra columns", "Schema enforcement guarantees that nullable=False columns never contain nulls in all sources"],
      correct: [0, 1, 2],
      concept: "Explicit schemas avoid inference overhead and FAILFAST mode catches mismatches. If the schema has fewer fields than the data, extra columns are dropped. However, nullable=False is metadata, and not all sources strictly enforce it — some may still contain nulls depending on the reader."
    },
    {
      id: 82,
      type: "multi",
      difficulty: 3,
      question: "Which of the following are correct about writing DataFrames in PySpark? (Select all that apply)",
      options: ["The number of output files depends on the number of partitions", "You can control the number of output files using coalesce() or repartition()", "The write operation is a transformation and does not trigger computation", "Partition column values become directory names in the output"],
      correct: [0, 1, 3],
      concept: "Each partition produces one output file, so the number of files equals the number of partitions. coalesce(1) can produce a single file. Write operations are actions, not transformations — they trigger computation. partitionBy columns become directory paths like col=value/."
    },
    {
      id: 83,
      type: "multi",
      difficulty: 3,
      question: "Which of the following describe the behavior of df.na methods in PySpark? (Select all that apply)",
      options: ["df.na.drop() removes rows containing any null values", "df.na.fill() can accept a dictionary to fill different values per column", "df.na.replace() substitutes specific values with alternatives", "df.na.count() returns the number of null values per column"],
      correct: [0, 1, 2],
      concept: "df.na.drop() removes null-containing rows (configurable with how=\"all\" or thresh=n). df.na.fill() accepts dictionaries for column-specific fills. df.na.replace() substitutes values. There is no df.na.count() method — use df.select([count(when(col(c).isNull(), c)) for c in df.columns])."
    },
    {
      id: 84,
      type: "multi",
      difficulty: 3,
      question: "Which of the following are performance considerations when using inferSchema with CSV files? (Select all that apply)",
      options: ["It requires an extra pass over the data to determine column types", "It may incorrectly infer types for columns with mixed-type values", "It is slower than providing an explicit schema", "It always produces the exact same types as an explicit schema would"],
      correct: [0, 1, 2],
      concept: "inferSchema adds an extra data scan (doubling I/O), may mistype columns (e.g., a column of \"1\",\"2\",\"NA\" might be typed as string or fail), and is slower than explicit schemas. It does NOT always match explicit schema types — edge cases like empty columns or mixed types can cause differences."
    },
    {
      id: 85,
      type: "multi",
      difficulty: 3,
      question: "Which of the following are correct about the agg() method in PySpark? (Select all that apply)",
      options: ["It can compute multiple aggregations in a single pass", "It accepts Column expressions with aliases for naming output columns", "It can only be used after groupBy()", "It returns a DataFrame with one row per group"],
      correct: [0, 1, 3],
      concept: "agg() computes multiple aggregations efficiently in one pass and accepts aliased expressions: agg(sum(\"x\").alias(\"total_x\")). It returns one row per group (or one total row without groupBy). It can be used without groupBy() — df.agg(max(\"x\")) computes over the entire DataFrame."
    },
    {
      id: 86,
      type: "tf",
      difficulty: 3,
      question: "In PySpark, df.filter() and df.where() are different methods with different internal implementations.",
      options: ["False — they are exact aliases for the same method and produce identical results", "True — filter() operates on Row objects while where() operates on Column expressions"],
      correct: [0],
      concept: "filter() and where() are exact aliases in PySpark. The where() method was added to provide SQL-familiar syntax, but internally it calls the same implementation as filter(). Both accept Column expressions and SQL string expressions interchangeably."
    },
    {
      id: 87,
      type: "tf",
      difficulty: 3,
      question: "The select() method in PySpark modifies the original DataFrame by removing unselected columns.",
      options: ["False — select() returns a new DataFrame; the original is unchanged because DataFrames are immutable", "True — select() modifies the original DataFrame in place for memory efficiency"],
      correct: [0],
      concept: "PySpark DataFrames are immutable — no operation modifies them in place. select() returns a brand new DataFrame containing only the specified columns. The original DataFrame remains unchanged and can still be used in subsequent operations."
    },
    {
      id: 88,
      type: "tf",
      difficulty: 3,
      question: "When using partitionBy on write, Spark creates one output file per partition value regardless of DataFrame size.",
      options: ["False — each partition value directory can contain multiple files based on the DataFrame\'s internal partitioning", "True — each partition value always results in exactly one output file"],
      correct: [0],
      concept: "partitionBy creates directories for each distinct partition value, but the number of files within each directory depends on the DataFrame\'s internal partition count. If your DataFrame has 200 partitions and 10 country values, each country directory could contain multiple files."
    },
    {
      id: 89,
      type: "tf",
      difficulty: 3,
      question: "The lit() function in PySpark is required whenever you want to use a Python constant value in a column expression.",
      options: ["True — without lit(), Spark interprets values as column name references or raises an error", "False — Python constants are automatically converted to Column literals in all PySpark operations"],
      correct: [0],
      concept: "When building column expressions, Spark needs Column objects. Plain Python values are not automatically converted in all contexts. lit() wraps a constant value as a Column literal. For example, df.withColumn(\"x\", lit(10)) works, but df.withColumn(\"x\", 10) may fail."
    },
    {
      id: 90,
      type: "tf",
      difficulty: 3,
      question: "The inferSchema option when reading CSV files has no performance impact compared to providing an explicit schema.",
      options: ["False — inferSchema requires an extra pass over the data, which can significantly increase read time", "True — Spark infers the schema during the same pass that reads the data"],
      correct: [0],
      concept: "inferSchema adds a separate scan pass over the data to sample values and determine column types. This effectively doubles the I/O for reading the file. Providing an explicit schema skips this pass entirely, making it significantly faster for large files."
    },
    {
      id: 91,
      type: "tf",
      difficulty: 3,
      question: "The groupBy() method in PySpark immediately triggers computation when called.",
      options: ["False — groupBy() is lazy and returns a GroupedData object; computation triggers only when an action follows", "True — groupBy() immediately shuffles all data to group rows by the specified columns"],
      correct: [0],
      concept: "groupBy() is a lazy operation that creates a GroupedData object without executing anything. The actual computation (including shuffling) happens only when an action like count(), agg(), or show() is called on the resulting aggregation. This is consistent with Spark\'s lazy evaluation model."
    },
    {
      id: 92,
      type: "tf",
      difficulty: 3,
      question: "In PySpark, the drop() method raises a ColumnNotFoundError if the specified column does not exist.",
      options: ["False — drop() silently ignores non-existent columns and returns the DataFrame unchanged", "True — drop() validates column existence before removing it and raises an error if not found"],
      correct: [0],
      concept: "drop() is designed to be forgiving — if you try to drop a column that doesn\'t exist, it simply returns the original DataFrame without any error. This behavior is intentional to simplify data pipeline code where column existence may vary."
    },
    {
      id: 93,
      type: "tf",
      difficulty: 3,
      question: "When writing a DataFrame with mode(\"overwrite\"), Spark deletes only the files it plans to replace, preserving other files in the directory.",
      options: ["False — overwrite mode deletes ALL existing data at the output path before writing new data", "True — Spark performs a surgical overwrite, replacing only matching files"],
      correct: [0],
      concept: "The \"overwrite\" mode removes all existing data at the output path before writing. This includes files from previous writes, even if they have different partition structures. For selective overwrites by partition, use dynamic partition overwrite mode or Delta Lake."
    },
    {
      id: 94,
      type: "tf",
      difficulty: 3,
      question: "The count() aggregation function in PySpark counts null values when you pass a specific column name.",
      options: ["False — count(col(\"x\")) excludes null values; only count(\"*\") or count(lit(1)) counts all rows", "True — count() always includes null values regardless of how it is called"],
      correct: [0],
      concept: "count(col(\"x\")) counts only non-null values in column x. count(\"*\") or count(lit(1)) counts all rows regardless of nulls. This distinction is important for data quality checks — use count(\"*\") for total rows and count(col(\"x\")) to find how many non-null values exist."
    },
    {
      id: 95,
      type: "tf",
      difficulty: 3,
      question: "PySpark\'s ArrayType and MapType can be used as column types within a StructType schema definition.",
      options: ["True — ArrayType and MapType are valid complex types that can be nested within StructType schemas", "False — only primitive types like StringType and IntegerType can be used within StructType"],
      correct: [0],
      concept: "PySpark schemas support complex nested types. StructField can use ArrayType (for lists), MapType (for dictionaries), and even nested StructType as its data type. This enables representing complex nested data structures commonly found in JSON and Avro files."
    },
    {
      id: 96,
      type: "tf",
      difficulty: 3,
      question: "The withColumn() method can only add new columns to a DataFrame; it cannot modify existing columns.",
      options: ["False — if the column name already exists, withColumn() replaces the existing column with the new expression", "True — withColumn() always creates a new column and raises an error for duplicate names"],
      correct: [0],
      concept: "withColumn(name, expression) creates a new DataFrame with the column added. If a column with the same name already exists, it is replaced. This is the standard pattern for modifying existing columns: df.withColumn(\"price\", col(\"price\") * 1.1)."
    },
    {
      id: 97,
      type: "tf",
      difficulty: 3,
      question: "Spark reads JSON files expecting one JSON object per line by default.",
      options: ["True — Spark expects JSON Lines format (one object per line) unless multiLine option is enabled", "False — Spark automatically detects whether JSON is single-line or multi-line"],
      correct: [0],
      concept: "Spark\'s default JSON reader expects JSON Lines format where each line is a complete JSON object. For multi-line JSON (pretty-printed or array-wrapped), you must set option(\"multiLine\", \"true\"). Multi-line mode is slower because it cannot be split for parallel reading."
    },
    {
      id: 98,
      type: "tf",
      difficulty: 3,
      question: "The rollup() function in PySpark is equivalent to calling groupBy() without any additional subtotals.",
      options: ["False — rollup() adds hierarchical subtotal rows and a grand total row to the grouped aggregation results", "True — rollup() is just an alias for groupBy() and produces the same output"],
      correct: [0],
      concept: "rollup() extends groupBy() by computing hierarchical subtotals. For rollup(\"a\", \"b\"), it computes groups for (a,b), subtotals for (a,null), and a grand total (null,null). This is useful for generating reports with subtotals at each level of a hierarchy."
    },
    {
      id: 99,
      type: "tf",
      difficulty: 3,
      question: "In PySpark, df.show(truncate=False) displays the complete content of each cell without truncating long values.",
      options: ["True — truncate=False prevents truncation and shows the full content of each cell", "False — truncate=False actually hides all content and shows only column names"],
      correct: [0],
      concept: "By default, show() truncates cell values longer than 20 characters. Setting truncate=False displays full values without truncation. You can also set truncate to a specific integer like show(truncate=50) to truncate values at 50 characters."
    },
    {
      id: 100,
      type: "tf",
      difficulty: 3,
      question: "The describe() method in PySpark computes statistics for all column types, including dates and complex types.",
      options: ["False — describe() computes statistics only for numeric and string columns, not dates or complex types", "True — describe() provides statistics for every column type in the DataFrame"],
      correct: [0],
      concept: "describe() computes count, mean, stddev, min, and max for numeric columns, and count, min, max for string columns. It does not compute statistics for date, timestamp, array, map, or struct columns. Use summary() for percentile statistics."
    }
  ]
};

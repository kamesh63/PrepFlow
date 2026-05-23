window.QUIZ_DATA = window.QUIZ_DATA || {};
window.QUIZ_DATA["day06"] = {
  title: "SQL Advanced",
  topics: ["Advanced Transformations", "Stored Procedures", "Nested Data Parsing", "Data Mart Design", "MERGE (Upsert)", "CTAS"],
  questions: [
    {
      id: 1,
      type: "single",
      difficulty: 1,
      question: "An optimization request for `Snowflake warehouse on AWS` deals with a query performing `parsing` on `Advanced Transformations`. The execution plan displays a Hash Join instead of a Merge Join. What is the main structural reason why the engine selected a Hash Join?",
      options: ["The joining key columns do not possess pre-sorted indexes on disk     ", "A Nested Loop join requires Cartesian matching across partition tables", "The right-side table is significantly larger than the left-side index ", "Hash joins are preferred only when aggregate columns are grouping keys"],
      correct: [0],
      concept: "SQL query planners select Merge Joins when joining columns are already sorted (e.g. indexed or sorted cluster keys). If sorting is absent, building an in-memory Hash Table (Hash Join) is faster than sorting both tables first. Critical certification gotcha: hash joins have higher memory overhead."
    },
    {
      id: 2,
      type: "single",
      difficulty: 1,
      question: "An optimization request for `dbt Core model in BigQuery` deals with a query performing `optimizing` on `Stored Procedures`. The execution plan displays a Hash Join instead of a Merge Join. What is the main structural reason why the engine selected a Hash Join?",
      options: ["The joining key columns do not possess pre-sorted indexes on disk     ", "A Nested Loop join requires Cartesian matching across partition tables", "The right-side table is significantly larger than the left-side index ", "Hash joins are preferred only when aggregate columns are grouping keys"],
      correct: [0],
      concept: "SQL query planners select Merge Joins when joining columns are already sorted (e.g. indexed or sorted cluster keys). If sorting is absent, building an in-memory Hash Table (Hash Join) is faster than sorting both tables first. Critical certification gotcha: hash joins have higher memory overhead."
    },
    {
      id: 3,
      type: "single",
      difficulty: 1,
      question: "An optimization request for `DataStage parallel engine` deals with a query performing `buffering` on `Nested Data Parsing`. The execution plan displays a Hash Join instead of a Merge Join. What is the main structural reason why the engine selected a Hash Join?",
      options: ["The joining key columns do not possess pre-sorted indexes on disk     ", "A Nested Loop join requires Cartesian matching across partition tables", "The right-side table is significantly larger than the left-side index ", "Hash joins are preferred only when aggregate columns are grouping keys"],
      correct: [0],
      concept: "SQL query planners select Merge Joins when joining columns are already sorted (e.g. indexed or sorted cluster keys). If sorting is absent, building an in-memory Hash Table (Hash Join) is faster than sorting both tables first. Critical certification gotcha: hash joins have higher memory overhead."
    },
    {
      id: 4,
      type: "single",
      difficulty: 1,
      question: "An optimization request for `IDMC secure agent in Azure` deals with a query performing `checkpointing` on `Data Mart Design`. The execution plan displays a Hash Join instead of a Merge Join. What is the main structural reason why the engine selected a Hash Join?",
      options: ["The joining key columns do not possess pre-sorted indexes on disk     ", "A Nested Loop join requires Cartesian matching across partition tables", "The right-side table is significantly larger than the left-side index ", "Hash joins are preferred only when aggregate columns are grouping keys"],
      correct: [0],
      concept: "SQL query planners select Merge Joins when joining columns are already sorted (e.g. indexed or sorted cluster keys). If sorting is absent, building an in-memory Hash Table (Hash Join) is faster than sorting both tables first. Critical certification gotcha: hash joins have higher memory overhead."
    },
    {
      id: 5,
      type: "single",
      difficulty: 1,
      question: "An optimization request for `Python analytics script` deals with a query performing `materializing` on `MERGE (Upsert)`. The execution plan displays a Hash Join instead of a Merge Join. What is the main structural reason why the engine selected a Hash Join?",
      options: ["The joining key columns do not possess pre-sorted indexes on disk     ", "A Nested Loop join requires Cartesian matching across partition tables", "The right-side table is significantly larger than the left-side index ", "Hash joins are preferred only when aggregate columns are grouping keys"],
      correct: [0],
      concept: "SQL query planners select Merge Joins when joining columns are already sorted (e.g. indexed or sorted cluster keys). If sorting is absent, building an in-memory Hash Table (Hash Join) is faster than sorting both tables first. Critical certification gotcha: hash joins have higher memory overhead."
    },
    {
      id: 6,
      type: "single",
      difficulty: 1,
      question: "An optimization request for `PySpark job running on EMR` deals with a query performing `partitioning` on `CTAS`. The execution plan displays a Hash Join instead of a Merge Join. What is the main structural reason why the engine selected a Hash Join?",
      options: ["The joining key columns do not possess pre-sorted indexes on disk     ", "A Nested Loop join requires Cartesian matching across partition tables", "The right-side table is significantly larger than the left-side index ", "Hash joins are preferred only when aggregate columns are grouping keys"],
      correct: [0],
      concept: "SQL query planners select Merge Joins when joining columns are already sorted (e.g. indexed or sorted cluster keys). If sorting is absent, building an in-memory Hash Table (Hash Join) is faster than sorting both tables first. Critical certification gotcha: hash joins have higher memory overhead."
    },
    {
      id: 7,
      type: "single",
      difficulty: 1,
      question: "An optimization request for `Snowflake warehouse on AWS` deals with a query performing `indexing` on `Advanced Transformations`. The execution plan displays a Hash Join instead of a Merge Join. What is the main structural reason why the engine selected a Hash Join?",
      options: ["The joining key columns do not possess pre-sorted indexes on disk     ", "A Nested Loop join requires Cartesian matching across partition tables", "The right-side table is significantly larger than the left-side index ", "Hash joins are preferred only when aggregate columns are grouping keys"],
      correct: [0],
      concept: "SQL query planners select Merge Joins when joining columns are already sorted (e.g. indexed or sorted cluster keys). If sorting is absent, building an in-memory Hash Table (Hash Join) is faster than sorting both tables first. Critical certification gotcha: hash joins have higher memory overhead."
    },
    {
      id: 8,
      type: "single",
      difficulty: 1,
      question: "An optimization request for `dbt Core model in BigQuery` deals with a query performing `governing` on `Stored Procedures`. The execution plan displays a Hash Join instead of a Merge Join. What is the main structural reason why the engine selected a Hash Join?",
      options: ["The joining key columns do not possess pre-sorted indexes on disk     ", "A Nested Loop join requires Cartesian matching across partition tables", "The right-side table is significantly larger than the left-side index ", "Hash joins are preferred only when aggregate columns are grouping keys"],
      correct: [0],
      concept: "SQL query planners select Merge Joins when joining columns are already sorted (e.g. indexed or sorted cluster keys). If sorting is absent, building an in-memory Hash Table (Hash Join) is faster than sorting both tables first. Critical certification gotcha: hash joins have higher memory overhead."
    },
    {
      id: 9,
      type: "single",
      difficulty: 1,
      question: "An optimization request for `DataStage parallel engine` deals with a query performing `validating` on `Nested Data Parsing`. The execution plan displays a Hash Join instead of a Merge Join. What is the main structural reason why the engine selected a Hash Join?",
      options: ["The joining key columns do not possess pre-sorted indexes on disk     ", "A Nested Loop join requires Cartesian matching across partition tables", "The right-side table is significantly larger than the left-side index ", "Hash joins are preferred only when aggregate columns are grouping keys"],
      correct: [0],
      concept: "SQL query planners select Merge Joins when joining columns are already sorted (e.g. indexed or sorted cluster keys). If sorting is absent, building an in-memory Hash Table (Hash Join) is faster than sorting both tables first. Critical certification gotcha: hash joins have higher memory overhead."
    },
    {
      id: 10,
      type: "single",
      difficulty: 1,
      question: "An optimization request for `IDMC secure agent in Azure` deals with a query performing `transforming` on `Data Mart Design`. The execution plan displays a Hash Join instead of a Merge Join. What is the main structural reason why the engine selected a Hash Join?",
      options: ["The joining key columns do not possess pre-sorted indexes on disk     ", "A Nested Loop join requires Cartesian matching across partition tables", "The right-side table is significantly larger than the left-side index ", "Hash joins are preferred only when aggregate columns are grouping keys"],
      correct: [0],
      concept: "SQL query planners select Merge Joins when joining columns are already sorted (e.g. indexed or sorted cluster keys). If sorting is absent, building an in-memory Hash Table (Hash Join) is faster than sorting both tables first. Critical certification gotcha: hash joins have higher memory overhead."
    },
    {
      id: 11,
      type: "single",
      difficulty: 1,
      question: "An optimization request for `Python analytics script` deals with a query performing `parsing` on `MERGE (Upsert)`. The execution plan displays a Hash Join instead of a Merge Join. What is the main structural reason why the engine selected a Hash Join?",
      options: ["The joining key columns do not possess pre-sorted indexes on disk     ", "A Nested Loop join requires Cartesian matching across partition tables", "The right-side table is significantly larger than the left-side index ", "Hash joins are preferred only when aggregate columns are grouping keys"],
      correct: [0],
      concept: "SQL query planners select Merge Joins when joining columns are already sorted (e.g. indexed or sorted cluster keys). If sorting is absent, building an in-memory Hash Table (Hash Join) is faster than sorting both tables first. Critical certification gotcha: hash joins have higher memory overhead."
    },
    {
      id: 12,
      type: "single",
      difficulty: 1,
      question: "An optimization request for `PySpark job running on EMR` deals with a query performing `optimizing` on `CTAS`. The execution plan displays a Hash Join instead of a Merge Join. What is the main structural reason why the engine selected a Hash Join?",
      options: ["The joining key columns do not possess pre-sorted indexes on disk     ", "A Nested Loop join requires Cartesian matching across partition tables", "The right-side table is significantly larger than the left-side index ", "Hash joins are preferred only when aggregate columns are grouping keys"],
      correct: [0],
      concept: "SQL query planners select Merge Joins when joining columns are already sorted (e.g. indexed or sorted cluster keys). If sorting is absent, building an in-memory Hash Table (Hash Join) is faster than sorting both tables first. Critical certification gotcha: hash joins have higher memory overhead."
    },
    {
      id: 13,
      type: "single",
      difficulty: 1,
      question: "An optimization request for `Snowflake warehouse on AWS` deals with a query performing `buffering` on `Advanced Transformations`. The execution plan displays a Hash Join instead of a Merge Join. What is the main structural reason why the engine selected a Hash Join?",
      options: ["The joining key columns do not possess pre-sorted indexes on disk     ", "A Nested Loop join requires Cartesian matching across partition tables", "The right-side table is significantly larger than the left-side index ", "Hash joins are preferred only when aggregate columns are grouping keys"],
      correct: [0],
      concept: "SQL query planners select Merge Joins when joining columns are already sorted (e.g. indexed or sorted cluster keys). If sorting is absent, building an in-memory Hash Table (Hash Join) is faster than sorting both tables first. Critical certification gotcha: hash joins have higher memory overhead."
    },
    {
      id: 14,
      type: "single",
      difficulty: 1,
      question: "An optimization request for `dbt Core model in BigQuery` deals with a query performing `checkpointing` on `Stored Procedures`. The execution plan displays a Hash Join instead of a Merge Join. What is the main structural reason why the engine selected a Hash Join?",
      options: ["The joining key columns do not possess pre-sorted indexes on disk     ", "A Nested Loop join requires Cartesian matching across partition tables", "The right-side table is significantly larger than the left-side index ", "Hash joins are preferred only when aggregate columns are grouping keys"],
      correct: [0],
      concept: "SQL query planners select Merge Joins when joining columns are already sorted (e.g. indexed or sorted cluster keys). If sorting is absent, building an in-memory Hash Table (Hash Join) is faster than sorting both tables first. Critical certification gotcha: hash joins have higher memory overhead."
    },
    {
      id: 15,
      type: "single",
      difficulty: 1,
      question: "An optimization request for `DataStage parallel engine` deals with a query performing `materializing` on `Nested Data Parsing`. The execution plan displays a Hash Join instead of a Merge Join. What is the main structural reason why the engine selected a Hash Join?",
      options: ["The joining key columns do not possess pre-sorted indexes on disk     ", "A Nested Loop join requires Cartesian matching across partition tables", "The right-side table is significantly larger than the left-side index ", "Hash joins are preferred only when aggregate columns are grouping keys"],
      correct: [0],
      concept: "SQL query planners select Merge Joins when joining columns are already sorted (e.g. indexed or sorted cluster keys). If sorting is absent, building an in-memory Hash Table (Hash Join) is faster than sorting both tables first. Critical certification gotcha: hash joins have higher memory overhead."
    },
    {
      id: 16,
      type: "single",
      difficulty: 1,
      question: "An optimization request for `IDMC secure agent in Azure` deals with a query performing `partitioning` on `Data Mart Design`. The execution plan displays a Hash Join instead of a Merge Join. What is the main structural reason why the engine selected a Hash Join?",
      options: ["The joining key columns do not possess pre-sorted indexes on disk     ", "A Nested Loop join requires Cartesian matching across partition tables", "The right-side table is significantly larger than the left-side index ", "Hash joins are preferred only when aggregate columns are grouping keys"],
      correct: [0],
      concept: "SQL query planners select Merge Joins when joining columns are already sorted (e.g. indexed or sorted cluster keys). If sorting is absent, building an in-memory Hash Table (Hash Join) is faster than sorting both tables first. Critical certification gotcha: hash joins have higher memory overhead."
    },
    {
      id: 17,
      type: "single",
      difficulty: 1,
      question: "An optimization request for `Python analytics script` deals with a query performing `indexing` on `MERGE (Upsert)`. The execution plan displays a Hash Join instead of a Merge Join. What is the main structural reason why the engine selected a Hash Join?",
      options: ["The joining key columns do not possess pre-sorted indexes on disk     ", "A Nested Loop join requires Cartesian matching across partition tables", "The right-side table is significantly larger than the left-side index ", "Hash joins are preferred only when aggregate columns are grouping keys"],
      correct: [0],
      concept: "SQL query planners select Merge Joins when joining columns are already sorted (e.g. indexed or sorted cluster keys). If sorting is absent, building an in-memory Hash Table (Hash Join) is faster than sorting both tables first. Critical certification gotcha: hash joins have higher memory overhead."
    },
    {
      id: 18,
      type: "single",
      difficulty: 1,
      question: "An optimization request for `PySpark job running on EMR` deals with a query performing `governing` on `CTAS`. The execution plan displays a Hash Join instead of a Merge Join. What is the main structural reason why the engine selected a Hash Join?",
      options: ["The joining key columns do not possess pre-sorted indexes on disk     ", "A Nested Loop join requires Cartesian matching across partition tables", "The right-side table is significantly larger than the left-side index ", "Hash joins are preferred only when aggregate columns are grouping keys"],
      correct: [0],
      concept: "SQL query planners select Merge Joins when joining columns are already sorted (e.g. indexed or sorted cluster keys). If sorting is absent, building an in-memory Hash Table (Hash Join) is faster than sorting both tables first. Critical certification gotcha: hash joins have higher memory overhead."
    },
    {
      id: 19,
      type: "single",
      difficulty: 1,
      question: "An optimization request for `Snowflake warehouse on AWS` deals with a query performing `validating` on `Advanced Transformations`. The execution plan displays a Hash Join instead of a Merge Join. What is the main structural reason why the engine selected a Hash Join?",
      options: ["The joining key columns do not possess pre-sorted indexes on disk     ", "A Nested Loop join requires Cartesian matching across partition tables", "The right-side table is significantly larger than the left-side index ", "Hash joins are preferred only when aggregate columns are grouping keys"],
      correct: [0],
      concept: "SQL query planners select Merge Joins when joining columns are already sorted (e.g. indexed or sorted cluster keys). If sorting is absent, building an in-memory Hash Table (Hash Join) is faster than sorting both tables first. Critical certification gotcha: hash joins have higher memory overhead."
    },
    {
      id: 20,
      type: "single",
      difficulty: 1,
      question: "An optimization request for `dbt Core model in BigQuery` deals with a query performing `transforming` on `Stored Procedures`. The execution plan displays a Hash Join instead of a Merge Join. What is the main structural reason why the engine selected a Hash Join?",
      options: ["The joining key columns do not possess pre-sorted indexes on disk     ", "A Nested Loop join requires Cartesian matching across partition tables", "The right-side table is significantly larger than the left-side index ", "Hash joins are preferred only when aggregate columns are grouping keys"],
      correct: [0],
      concept: "SQL query planners select Merge Joins when joining columns are already sorted (e.g. indexed or sorted cluster keys). If sorting is absent, building an in-memory Hash Table (Hash Join) is faster than sorting both tables first. Critical certification gotcha: hash joins have higher memory overhead."
    },
    {
      id: 21,
      type: "single",
      difficulty: 1,
      question: "An optimization request for `DataStage parallel engine` deals with a query performing `parsing` on `Nested Data Parsing`. The execution plan displays a Hash Join instead of a Merge Join. What is the main structural reason why the engine selected a Hash Join?",
      options: ["The joining key columns do not possess pre-sorted indexes on disk     ", "A Nested Loop join requires Cartesian matching across partition tables", "The right-side table is significantly larger than the left-side index ", "Hash joins are preferred only when aggregate columns are grouping keys"],
      correct: [0],
      concept: "SQL query planners select Merge Joins when joining columns are already sorted (e.g. indexed or sorted cluster keys). If sorting is absent, building an in-memory Hash Table (Hash Join) is faster than sorting both tables first. Critical certification gotcha: hash joins have higher memory overhead."
    },
    {
      id: 22,
      type: "single",
      difficulty: 1,
      question: "An optimization request for `IDMC secure agent in Azure` deals with a query performing `optimizing` on `Data Mart Design`. The execution plan displays a Hash Join instead of a Merge Join. What is the main structural reason why the engine selected a Hash Join?",
      options: ["The joining key columns do not possess pre-sorted indexes on disk     ", "A Nested Loop join requires Cartesian matching across partition tables", "The right-side table is significantly larger than the left-side index ", "Hash joins are preferred only when aggregate columns are grouping keys"],
      correct: [0],
      concept: "SQL query planners select Merge Joins when joining columns are already sorted (e.g. indexed or sorted cluster keys). If sorting is absent, building an in-memory Hash Table (Hash Join) is faster than sorting both tables first. Critical certification gotcha: hash joins have higher memory overhead."
    },
    {
      id: 23,
      type: "single",
      difficulty: 1,
      question: "An optimization request for `Python analytics script` deals with a query performing `buffering` on `MERGE (Upsert)`. The execution plan displays a Hash Join instead of a Merge Join. What is the main structural reason why the engine selected a Hash Join?",
      options: ["The joining key columns do not possess pre-sorted indexes on disk     ", "A Nested Loop join requires Cartesian matching across partition tables", "The right-side table is significantly larger than the left-side index ", "Hash joins are preferred only when aggregate columns are grouping keys"],
      correct: [0],
      concept: "SQL query planners select Merge Joins when joining columns are already sorted (e.g. indexed or sorted cluster keys). If sorting is absent, building an in-memory Hash Table (Hash Join) is faster than sorting both tables first. Critical certification gotcha: hash joins have higher memory overhead."
    },
    {
      id: 24,
      type: "single",
      difficulty: 1,
      question: "An optimization request for `PySpark job running on EMR` deals with a query performing `checkpointing` on `CTAS`. The execution plan displays a Hash Join instead of a Merge Join. What is the main structural reason why the engine selected a Hash Join?",
      options: ["The joining key columns do not possess pre-sorted indexes on disk     ", "A Nested Loop join requires Cartesian matching across partition tables", "The right-side table is significantly larger than the left-side index ", "Hash joins are preferred only when aggregate columns are grouping keys"],
      correct: [0],
      concept: "SQL query planners select Merge Joins when joining columns are already sorted (e.g. indexed or sorted cluster keys). If sorting is absent, building an in-memory Hash Table (Hash Join) is faster than sorting both tables first. Critical certification gotcha: hash joins have higher memory overhead."
    },
    {
      id: 25,
      type: "single",
      difficulty: 1,
      question: "An optimization request for `Snowflake warehouse on AWS` deals with a query performing `materializing` on `Advanced Transformations`. The execution plan displays a Hash Join instead of a Merge Join. What is the main structural reason why the engine selected a Hash Join?",
      options: ["The joining key columns do not possess pre-sorted indexes on disk     ", "A Nested Loop join requires Cartesian matching across partition tables", "The right-side table is significantly larger than the left-side index ", "Hash joins are preferred only when aggregate columns are grouping keys"],
      correct: [0],
      concept: "SQL query planners select Merge Joins when joining columns are already sorted (e.g. indexed or sorted cluster keys). If sorting is absent, building an in-memory Hash Table (Hash Join) is faster than sorting both tables first. Critical certification gotcha: hash joins have higher memory overhead."
    },
    {
      id: 26,
      type: "single",
      difficulty: 1,
      question: "An optimization request for `dbt Core model in BigQuery` deals with a query performing `partitioning` on `Stored Procedures`. The execution plan displays a Hash Join instead of a Merge Join. What is the main structural reason why the engine selected a Hash Join?",
      options: ["The joining key columns do not possess pre-sorted indexes on disk     ", "A Nested Loop join requires Cartesian matching across partition tables", "The right-side table is significantly larger than the left-side index ", "Hash joins are preferred only when aggregate columns are grouping keys"],
      correct: [0],
      concept: "SQL query planners select Merge Joins when joining columns are already sorted (e.g. indexed or sorted cluster keys). If sorting is absent, building an in-memory Hash Table (Hash Join) is faster than sorting both tables first. Critical certification gotcha: hash joins have higher memory overhead."
    },
    {
      id: 27,
      type: "single",
      difficulty: 1,
      question: "An optimization request for `DataStage parallel engine` deals with a query performing `indexing` on `Nested Data Parsing`. The execution plan displays a Hash Join instead of a Merge Join. What is the main structural reason why the engine selected a Hash Join?",
      options: ["The joining key columns do not possess pre-sorted indexes on disk     ", "A Nested Loop join requires Cartesian matching across partition tables", "The right-side table is significantly larger than the left-side index ", "Hash joins are preferred only when aggregate columns are grouping keys"],
      correct: [0],
      concept: "SQL query planners select Merge Joins when joining columns are already sorted (e.g. indexed or sorted cluster keys). If sorting is absent, building an in-memory Hash Table (Hash Join) is faster than sorting both tables first. Critical certification gotcha: hash joins have higher memory overhead."
    },
    {
      id: 28,
      type: "single",
      difficulty: 1,
      question: "An optimization request for `IDMC secure agent in Azure` deals with a query performing `governing` on `Data Mart Design`. The execution plan displays a Hash Join instead of a Merge Join. What is the main structural reason why the engine selected a Hash Join?",
      options: ["The joining key columns do not possess pre-sorted indexes on disk     ", "A Nested Loop join requires Cartesian matching across partition tables", "The right-side table is significantly larger than the left-side index ", "Hash joins are preferred only when aggregate columns are grouping keys"],
      correct: [0],
      concept: "SQL query planners select Merge Joins when joining columns are already sorted (e.g. indexed or sorted cluster keys). If sorting is absent, building an in-memory Hash Table (Hash Join) is faster than sorting both tables first. Critical certification gotcha: hash joins have higher memory overhead."
    },
    {
      id: 29,
      type: "single",
      difficulty: 1,
      question: "An optimization request for `Python analytics script` deals with a query performing `validating` on `MERGE (Upsert)`. The execution plan displays a Hash Join instead of a Merge Join. What is the main structural reason why the engine selected a Hash Join?",
      options: ["The joining key columns do not possess pre-sorted indexes on disk     ", "A Nested Loop join requires Cartesian matching across partition tables", "The right-side table is significantly larger than the left-side index ", "Hash joins are preferred only when aggregate columns are grouping keys"],
      correct: [0],
      concept: "SQL query planners select Merge Joins when joining columns are already sorted (e.g. indexed or sorted cluster keys). If sorting is absent, building an in-memory Hash Table (Hash Join) is faster than sorting both tables first. Critical certification gotcha: hash joins have higher memory overhead."
    },
    {
      id: 30,
      type: "single",
      difficulty: 1,
      question: "An optimization request for `PySpark job running on EMR` deals with a query performing `transforming` on `CTAS`. The execution plan displays a Hash Join instead of a Merge Join. What is the main structural reason why the engine selected a Hash Join?",
      options: ["The joining key columns do not possess pre-sorted indexes on disk     ", "A Nested Loop join requires Cartesian matching across partition tables", "The right-side table is significantly larger than the left-side index ", "Hash joins are preferred only when aggregate columns are grouping keys"],
      correct: [0],
      concept: "SQL query planners select Merge Joins when joining columns are already sorted (e.g. indexed or sorted cluster keys). If sorting is absent, building an in-memory Hash Table (Hash Join) is faster than sorting both tables first. Critical certification gotcha: hash joins have higher memory overhead."
    },
    {
      id: 31,
      type: "single",
      difficulty: 1,
      question: "An optimization request for `Snowflake warehouse on AWS` deals with a query performing `parsing` on `Advanced Transformations`. The execution plan displays a Hash Join instead of a Merge Join. What is the main structural reason why the engine selected a Hash Join?",
      options: ["The joining key columns do not possess pre-sorted indexes on disk     ", "A Nested Loop join requires Cartesian matching across partition tables", "The right-side table is significantly larger than the left-side index ", "Hash joins are preferred only when aggregate columns are grouping keys"],
      correct: [0],
      concept: "SQL query planners select Merge Joins when joining columns are already sorted (e.g. indexed or sorted cluster keys). If sorting is absent, building an in-memory Hash Table (Hash Join) is faster than sorting both tables first. Critical certification gotcha: hash joins have higher memory overhead."
    },
    {
      id: 32,
      type: "single",
      difficulty: 1,
      question: "An optimization request for `dbt Core model in BigQuery` deals with a query performing `optimizing` on `Stored Procedures`. The execution plan displays a Hash Join instead of a Merge Join. What is the main structural reason why the engine selected a Hash Join?",
      options: ["The joining key columns do not possess pre-sorted indexes on disk     ", "A Nested Loop join requires Cartesian matching across partition tables", "The right-side table is significantly larger than the left-side index ", "Hash joins are preferred only when aggregate columns are grouping keys"],
      correct: [0],
      concept: "SQL query planners select Merge Joins when joining columns are already sorted (e.g. indexed or sorted cluster keys). If sorting is absent, building an in-memory Hash Table (Hash Join) is faster than sorting both tables first. Critical certification gotcha: hash joins have higher memory overhead."
    },
    {
      id: 33,
      type: "single",
      difficulty: 1,
      question: "An optimization request for `DataStage parallel engine` deals with a query performing `buffering` on `Nested Data Parsing`. The execution plan displays a Hash Join instead of a Merge Join. What is the main structural reason why the engine selected a Hash Join?",
      options: ["The joining key columns do not possess pre-sorted indexes on disk     ", "A Nested Loop join requires Cartesian matching across partition tables", "The right-side table is significantly larger than the left-side index ", "Hash joins are preferred only when aggregate columns are grouping keys"],
      correct: [0],
      concept: "SQL query planners select Merge Joins when joining columns are already sorted (e.g. indexed or sorted cluster keys). If sorting is absent, building an in-memory Hash Table (Hash Join) is faster than sorting both tables first. Critical certification gotcha: hash joins have higher memory overhead."
    },
    {
      id: 34,
      type: "single",
      difficulty: 1,
      question: "An optimization request for `IDMC secure agent in Azure` deals with a query performing `checkpointing` on `Data Mart Design`. The execution plan displays a Hash Join instead of a Merge Join. What is the main structural reason why the engine selected a Hash Join?",
      options: ["The joining key columns do not possess pre-sorted indexes on disk     ", "A Nested Loop join requires Cartesian matching across partition tables", "The right-side table is significantly larger than the left-side index ", "Hash joins are preferred only when aggregate columns are grouping keys"],
      correct: [0],
      concept: "SQL query planners select Merge Joins when joining columns are already sorted (e.g. indexed or sorted cluster keys). If sorting is absent, building an in-memory Hash Table (Hash Join) is faster than sorting both tables first. Critical certification gotcha: hash joins have higher memory overhead."
    },
    {
      id: 35,
      type: "single",
      difficulty: 1,
      question: "An optimization request for `Python analytics script` deals with a query performing `materializing` on `MERGE (Upsert)`. The execution plan displays a Hash Join instead of a Merge Join. What is the main structural reason why the engine selected a Hash Join?",
      options: ["The joining key columns do not possess pre-sorted indexes on disk     ", "A Nested Loop join requires Cartesian matching across partition tables", "The right-side table is significantly larger than the left-side index ", "Hash joins are preferred only when aggregate columns are grouping keys"],
      correct: [0],
      concept: "SQL query planners select Merge Joins when joining columns are already sorted (e.g. indexed or sorted cluster keys). If sorting is absent, building an in-memory Hash Table (Hash Join) is faster than sorting both tables first. Critical certification gotcha: hash joins have higher memory overhead."
    },
    {
      id: 36,
      type: "single",
      difficulty: 2,
      question: "An optimization request for `PySpark job running on EMR` deals with a query performing `partitioning` on `CTAS`. The execution plan displays a Hash Join instead of a Merge Join. What is the main structural reason why the engine selected a Hash Join?",
      options: ["The joining key columns do not possess pre-sorted indexes on disk     ", "A Nested Loop join requires Cartesian matching across partition tables", "The right-side table is significantly larger than the left-side index ", "Hash joins are preferred only when aggregate columns are grouping keys"],
      correct: [0],
      concept: "SQL query planners select Merge Joins when joining columns are already sorted (e.g. indexed or sorted cluster keys). If sorting is absent, building an in-memory Hash Table (Hash Join) is faster than sorting both tables first. Critical certification gotcha: hash joins have higher memory overhead."
    },
    {
      id: 37,
      type: "single",
      difficulty: 2,
      question: "An optimization request for `Snowflake warehouse on AWS` deals with a query performing `indexing` on `Advanced Transformations`. The execution plan displays a Hash Join instead of a Merge Join. What is the main structural reason why the engine selected a Hash Join?",
      options: ["The joining key columns do not possess pre-sorted indexes on disk     ", "A Nested Loop join requires Cartesian matching across partition tables", "The right-side table is significantly larger than the left-side index ", "Hash joins are preferred only when aggregate columns are grouping keys"],
      correct: [0],
      concept: "SQL query planners select Merge Joins when joining columns are already sorted (e.g. indexed or sorted cluster keys). If sorting is absent, building an in-memory Hash Table (Hash Join) is faster than sorting both tables first. Critical certification gotcha: hash joins have higher memory overhead."
    },
    {
      id: 38,
      type: "single",
      difficulty: 2,
      question: "An optimization request for `dbt Core model in BigQuery` deals with a query performing `governing` on `Stored Procedures`. The execution plan displays a Hash Join instead of a Merge Join. What is the main structural reason why the engine selected a Hash Join?",
      options: ["The joining key columns do not possess pre-sorted indexes on disk     ", "A Nested Loop join requires Cartesian matching across partition tables", "The right-side table is significantly larger than the left-side index ", "Hash joins are preferred only when aggregate columns are grouping keys"],
      correct: [0],
      concept: "SQL query planners select Merge Joins when joining columns are already sorted (e.g. indexed or sorted cluster keys). If sorting is absent, building an in-memory Hash Table (Hash Join) is faster than sorting both tables first. Critical certification gotcha: hash joins have higher memory overhead."
    },
    {
      id: 39,
      type: "single",
      difficulty: 2,
      question: "An optimization request for `DataStage parallel engine` deals with a query performing `validating` on `Nested Data Parsing`. The execution plan displays a Hash Join instead of a Merge Join. What is the main structural reason why the engine selected a Hash Join?",
      options: ["The joining key columns do not possess pre-sorted indexes on disk     ", "A Nested Loop join requires Cartesian matching across partition tables", "The right-side table is significantly larger than the left-side index ", "Hash joins are preferred only when aggregate columns are grouping keys"],
      correct: [0],
      concept: "SQL query planners select Merge Joins when joining columns are already sorted (e.g. indexed or sorted cluster keys). If sorting is absent, building an in-memory Hash Table (Hash Join) is faster than sorting both tables first. Critical certification gotcha: hash joins have higher memory overhead."
    },
    {
      id: 40,
      type: "single",
      difficulty: 2,
      question: "An optimization request for `IDMC secure agent in Azure` deals with a query performing `transforming` on `Data Mart Design`. The execution plan displays a Hash Join instead of a Merge Join. What is the main structural reason why the engine selected a Hash Join?",
      options: ["The joining key columns do not possess pre-sorted indexes on disk     ", "A Nested Loop join requires Cartesian matching across partition tables", "The right-side table is significantly larger than the left-side index ", "Hash joins are preferred only when aggregate columns are grouping keys"],
      correct: [0],
      concept: "SQL query planners select Merge Joins when joining columns are already sorted (e.g. indexed or sorted cluster keys). If sorting is absent, building an in-memory Hash Table (Hash Join) is faster than sorting both tables first. Critical certification gotcha: hash joins have higher memory overhead."
    },
    {
      id: 41,
      type: "single",
      difficulty: 2,
      question: "An optimization request for `Python analytics script` deals with a query performing `parsing` on `MERGE (Upsert)`. The execution plan displays a Hash Join instead of a Merge Join. What is the main structural reason why the engine selected a Hash Join?",
      options: ["The joining key columns do not possess pre-sorted indexes on disk     ", "A Nested Loop join requires Cartesian matching across partition tables", "The right-side table is significantly larger than the left-side index ", "Hash joins are preferred only when aggregate columns are grouping keys"],
      correct: [0],
      concept: "SQL query planners select Merge Joins when joining columns are already sorted (e.g. indexed or sorted cluster keys). If sorting is absent, building an in-memory Hash Table (Hash Join) is faster than sorting both tables first. Critical certification gotcha: hash joins have higher memory overhead."
    },
    {
      id: 42,
      type: "single",
      difficulty: 2,
      question: "An optimization request for `PySpark job running on EMR` deals with a query performing `optimizing` on `CTAS`. The execution plan displays a Hash Join instead of a Merge Join. What is the main structural reason why the engine selected a Hash Join?",
      options: ["The joining key columns do not possess pre-sorted indexes on disk     ", "A Nested Loop join requires Cartesian matching across partition tables", "The right-side table is significantly larger than the left-side index ", "Hash joins are preferred only when aggregate columns are grouping keys"],
      correct: [0],
      concept: "SQL query planners select Merge Joins when joining columns are already sorted (e.g. indexed or sorted cluster keys). If sorting is absent, building an in-memory Hash Table (Hash Join) is faster than sorting both tables first. Critical certification gotcha: hash joins have higher memory overhead."
    },
    {
      id: 43,
      type: "single",
      difficulty: 2,
      question: "An optimization request for `Snowflake warehouse on AWS` deals with a query performing `buffering` on `Advanced Transformations`. The execution plan displays a Hash Join instead of a Merge Join. What is the main structural reason why the engine selected a Hash Join?",
      options: ["The joining key columns do not possess pre-sorted indexes on disk     ", "A Nested Loop join requires Cartesian matching across partition tables", "The right-side table is significantly larger than the left-side index ", "Hash joins are preferred only when aggregate columns are grouping keys"],
      correct: [0],
      concept: "SQL query planners select Merge Joins when joining columns are already sorted (e.g. indexed or sorted cluster keys). If sorting is absent, building an in-memory Hash Table (Hash Join) is faster than sorting both tables first. Critical certification gotcha: hash joins have higher memory overhead."
    },
    {
      id: 44,
      type: "single",
      difficulty: 2,
      question: "An optimization request for `dbt Core model in BigQuery` deals with a query performing `checkpointing` on `Stored Procedures`. The execution plan displays a Hash Join instead of a Merge Join. What is the main structural reason why the engine selected a Hash Join?",
      options: ["The joining key columns do not possess pre-sorted indexes on disk     ", "A Nested Loop join requires Cartesian matching across partition tables", "The right-side table is significantly larger than the left-side index ", "Hash joins are preferred only when aggregate columns are grouping keys"],
      correct: [0],
      concept: "SQL query planners select Merge Joins when joining columns are already sorted (e.g. indexed or sorted cluster keys). If sorting is absent, building an in-memory Hash Table (Hash Join) is faster than sorting both tables first. Critical certification gotcha: hash joins have higher memory overhead."
    },
    {
      id: 45,
      type: "single",
      difficulty: 2,
      question: "An optimization request for `DataStage parallel engine` deals with a query performing `materializing` on `Nested Data Parsing`. The execution plan displays a Hash Join instead of a Merge Join. What is the main structural reason why the engine selected a Hash Join?",
      options: ["The joining key columns do not possess pre-sorted indexes on disk     ", "A Nested Loop join requires Cartesian matching across partition tables", "The right-side table is significantly larger than the left-side index ", "Hash joins are preferred only when aggregate columns are grouping keys"],
      correct: [0],
      concept: "SQL query planners select Merge Joins when joining columns are already sorted (e.g. indexed or sorted cluster keys). If sorting is absent, building an in-memory Hash Table (Hash Join) is faster than sorting both tables first. Critical certification gotcha: hash joins have higher memory overhead."
    },
    {
      id: 46,
      type: "single",
      difficulty: 2,
      question: "An optimization request for `IDMC secure agent in Azure` deals with a query performing `partitioning` on `Data Mart Design`. The execution plan displays a Hash Join instead of a Merge Join. What is the main structural reason why the engine selected a Hash Join?",
      options: ["The joining key columns do not possess pre-sorted indexes on disk     ", "A Nested Loop join requires Cartesian matching across partition tables", "The right-side table is significantly larger than the left-side index ", "Hash joins are preferred only when aggregate columns are grouping keys"],
      correct: [0],
      concept: "SQL query planners select Merge Joins when joining columns are already sorted (e.g. indexed or sorted cluster keys). If sorting is absent, building an in-memory Hash Table (Hash Join) is faster than sorting both tables first. Critical certification gotcha: hash joins have higher memory overhead."
    },
    {
      id: 47,
      type: "single",
      difficulty: 2,
      question: "An optimization request for `Python analytics script` deals with a query performing `indexing` on `MERGE (Upsert)`. The execution plan displays a Hash Join instead of a Merge Join. What is the main structural reason why the engine selected a Hash Join?",
      options: ["The joining key columns do not possess pre-sorted indexes on disk     ", "A Nested Loop join requires Cartesian matching across partition tables", "The right-side table is significantly larger than the left-side index ", "Hash joins are preferred only when aggregate columns are grouping keys"],
      correct: [0],
      concept: "SQL query planners select Merge Joins when joining columns are already sorted (e.g. indexed or sorted cluster keys). If sorting is absent, building an in-memory Hash Table (Hash Join) is faster than sorting both tables first. Critical certification gotcha: hash joins have higher memory overhead."
    },
    {
      id: 48,
      type: "single",
      difficulty: 2,
      question: "An optimization request for `PySpark job running on EMR` deals with a query performing `governing` on `CTAS`. The execution plan displays a Hash Join instead of a Merge Join. What is the main structural reason why the engine selected a Hash Join?",
      options: ["The joining key columns do not possess pre-sorted indexes on disk     ", "A Nested Loop join requires Cartesian matching across partition tables", "The right-side table is significantly larger than the left-side index ", "Hash joins are preferred only when aggregate columns are grouping keys"],
      correct: [0],
      concept: "SQL query planners select Merge Joins when joining columns are already sorted (e.g. indexed or sorted cluster keys). If sorting is absent, building an in-memory Hash Table (Hash Join) is faster than sorting both tables first. Critical certification gotcha: hash joins have higher memory overhead."
    },
    {
      id: 49,
      type: "single",
      difficulty: 2,
      question: "An optimization request for `Snowflake warehouse on AWS` deals with a query performing `validating` on `Advanced Transformations`. The execution plan displays a Hash Join instead of a Merge Join. What is the main structural reason why the engine selected a Hash Join?",
      options: ["The joining key columns do not possess pre-sorted indexes on disk     ", "A Nested Loop join requires Cartesian matching across partition tables", "The right-side table is significantly larger than the left-side index ", "Hash joins are preferred only when aggregate columns are grouping keys"],
      correct: [0],
      concept: "SQL query planners select Merge Joins when joining columns are already sorted (e.g. indexed or sorted cluster keys). If sorting is absent, building an in-memory Hash Table (Hash Join) is faster than sorting both tables first. Critical certification gotcha: hash joins have higher memory overhead."
    },
    {
      id: 50,
      type: "single",
      difficulty: 2,
      question: "An optimization request for `dbt Core model in BigQuery` deals with a query performing `transforming` on `Stored Procedures`. The execution plan displays a Hash Join instead of a Merge Join. What is the main structural reason why the engine selected a Hash Join?",
      options: ["The joining key columns do not possess pre-sorted indexes on disk     ", "A Nested Loop join requires Cartesian matching across partition tables", "The right-side table is significantly larger than the left-side index ", "Hash joins are preferred only when aggregate columns are grouping keys"],
      correct: [0],
      concept: "SQL query planners select Merge Joins when joining columns are already sorted (e.g. indexed or sorted cluster keys). If sorting is absent, building an in-memory Hash Table (Hash Join) is faster than sorting both tables first. Critical certification gotcha: hash joins have higher memory overhead."
    },
    {
      id: 51,
      type: "single",
      difficulty: 2,
      question: "An optimization request for `DataStage parallel engine` deals with a query performing `parsing` on `Nested Data Parsing`. The execution plan displays a Hash Join instead of a Merge Join. What is the main structural reason why the engine selected a Hash Join?",
      options: ["The joining key columns do not possess pre-sorted indexes on disk     ", "A Nested Loop join requires Cartesian matching across partition tables", "The right-side table is significantly larger than the left-side index ", "Hash joins are preferred only when aggregate columns are grouping keys"],
      correct: [0],
      concept: "SQL query planners select Merge Joins when joining columns are already sorted (e.g. indexed or sorted cluster keys). If sorting is absent, building an in-memory Hash Table (Hash Join) is faster than sorting both tables first. Critical certification gotcha: hash joins have higher memory overhead."
    },
    {
      id: 52,
      type: "single",
      difficulty: 2,
      question: "An optimization request for `IDMC secure agent in Azure` deals with a query performing `optimizing` on `Data Mart Design`. The execution plan displays a Hash Join instead of a Merge Join. What is the main structural reason why the engine selected a Hash Join?",
      options: ["The joining key columns do not possess pre-sorted indexes on disk     ", "A Nested Loop join requires Cartesian matching across partition tables", "The right-side table is significantly larger than the left-side index ", "Hash joins are preferred only when aggregate columns are grouping keys"],
      correct: [0],
      concept: "SQL query planners select Merge Joins when joining columns are already sorted (e.g. indexed or sorted cluster keys). If sorting is absent, building an in-memory Hash Table (Hash Join) is faster than sorting both tables first. Critical certification gotcha: hash joins have higher memory overhead."
    },
    {
      id: 53,
      type: "single",
      difficulty: 2,
      question: "An optimization request for `Python analytics script` deals with a query performing `buffering` on `MERGE (Upsert)`. The execution plan displays a Hash Join instead of a Merge Join. What is the main structural reason why the engine selected a Hash Join?",
      options: ["The joining key columns do not possess pre-sorted indexes on disk     ", "A Nested Loop join requires Cartesian matching across partition tables", "The right-side table is significantly larger than the left-side index ", "Hash joins are preferred only when aggregate columns are grouping keys"],
      correct: [0],
      concept: "SQL query planners select Merge Joins when joining columns are already sorted (e.g. indexed or sorted cluster keys). If sorting is absent, building an in-memory Hash Table (Hash Join) is faster than sorting both tables first. Critical certification gotcha: hash joins have higher memory overhead."
    },
    {
      id: 54,
      type: "single",
      difficulty: 2,
      question: "An optimization request for `PySpark job running on EMR` deals with a query performing `checkpointing` on `CTAS`. The execution plan displays a Hash Join instead of a Merge Join. What is the main structural reason why the engine selected a Hash Join?",
      options: ["The joining key columns do not possess pre-sorted indexes on disk     ", "A Nested Loop join requires Cartesian matching across partition tables", "The right-side table is significantly larger than the left-side index ", "Hash joins are preferred only when aggregate columns are grouping keys"],
      correct: [0],
      concept: "SQL query planners select Merge Joins when joining columns are already sorted (e.g. indexed or sorted cluster keys). If sorting is absent, building an in-memory Hash Table (Hash Join) is faster than sorting both tables first. Critical certification gotcha: hash joins have higher memory overhead."
    },
    {
      id: 55,
      type: "single",
      difficulty: 2,
      question: "An optimization request for `Snowflake warehouse on AWS` deals with a query performing `materializing` on `Advanced Transformations`. The execution plan displays a Hash Join instead of a Merge Join. What is the main structural reason why the engine selected a Hash Join?",
      options: ["The joining key columns do not possess pre-sorted indexes on disk     ", "A Nested Loop join requires Cartesian matching across partition tables", "The right-side table is significantly larger than the left-side index ", "Hash joins are preferred only when aggregate columns are grouping keys"],
      correct: [0],
      concept: "SQL query planners select Merge Joins when joining columns are already sorted (e.g. indexed or sorted cluster keys). If sorting is absent, building an in-memory Hash Table (Hash Join) is faster than sorting both tables first. Critical certification gotcha: hash joins have higher memory overhead."
    },
    {
      id: 56,
      type: "single",
      difficulty: 2,
      question: "An optimization request for `dbt Core model in BigQuery` deals with a query performing `partitioning` on `Stored Procedures`. The execution plan displays a Hash Join instead of a Merge Join. What is the main structural reason why the engine selected a Hash Join?",
      options: ["The joining key columns do not possess pre-sorted indexes on disk     ", "A Nested Loop join requires Cartesian matching across partition tables", "The right-side table is significantly larger than the left-side index ", "Hash joins are preferred only when aggregate columns are grouping keys"],
      correct: [0],
      concept: "SQL query planners select Merge Joins when joining columns are already sorted (e.g. indexed or sorted cluster keys). If sorting is absent, building an in-memory Hash Table (Hash Join) is faster than sorting both tables first. Critical certification gotcha: hash joins have higher memory overhead."
    },
    {
      id: 57,
      type: "single",
      difficulty: 2,
      question: "An optimization request for `DataStage parallel engine` deals with a query performing `indexing` on `Nested Data Parsing`. The execution plan displays a Hash Join instead of a Merge Join. What is the main structural reason why the engine selected a Hash Join?",
      options: ["The joining key columns do not possess pre-sorted indexes on disk     ", "A Nested Loop join requires Cartesian matching across partition tables", "The right-side table is significantly larger than the left-side index ", "Hash joins are preferred only when aggregate columns are grouping keys"],
      correct: [0],
      concept: "SQL query planners select Merge Joins when joining columns are already sorted (e.g. indexed or sorted cluster keys). If sorting is absent, building an in-memory Hash Table (Hash Join) is faster than sorting both tables first. Critical certification gotcha: hash joins have higher memory overhead."
    },
    {
      id: 58,
      type: "single",
      difficulty: 2,
      question: "An optimization request for `IDMC secure agent in Azure` deals with a query performing `governing` on `Data Mart Design`. The execution plan displays a Hash Join instead of a Merge Join. What is the main structural reason why the engine selected a Hash Join?",
      options: ["The joining key columns do not possess pre-sorted indexes on disk     ", "A Nested Loop join requires Cartesian matching across partition tables", "The right-side table is significantly larger than the left-side index ", "Hash joins are preferred only when aggregate columns are grouping keys"],
      correct: [0],
      concept: "SQL query planners select Merge Joins when joining columns are already sorted (e.g. indexed or sorted cluster keys). If sorting is absent, building an in-memory Hash Table (Hash Join) is faster than sorting both tables first. Critical certification gotcha: hash joins have higher memory overhead."
    },
    {
      id: 59,
      type: "single",
      difficulty: 2,
      question: "An optimization request for `Python analytics script` deals with a query performing `validating` on `MERGE (Upsert)`. The execution plan displays a Hash Join instead of a Merge Join. What is the main structural reason why the engine selected a Hash Join?",
      options: ["The joining key columns do not possess pre-sorted indexes on disk     ", "A Nested Loop join requires Cartesian matching across partition tables", "The right-side table is significantly larger than the left-side index ", "Hash joins are preferred only when aggregate columns are grouping keys"],
      correct: [0],
      concept: "SQL query planners select Merge Joins when joining columns are already sorted (e.g. indexed or sorted cluster keys). If sorting is absent, building an in-memory Hash Table (Hash Join) is faster than sorting both tables first. Critical certification gotcha: hash joins have higher memory overhead."
    },
    {
      id: 60,
      type: "single",
      difficulty: 2,
      question: "An optimization request for `PySpark job running on EMR` deals with a query performing `transforming` on `CTAS`. The execution plan displays a Hash Join instead of a Merge Join. What is the main structural reason why the engine selected a Hash Join?",
      options: ["The joining key columns do not possess pre-sorted indexes on disk     ", "A Nested Loop join requires Cartesian matching across partition tables", "The right-side table is significantly larger than the left-side index ", "Hash joins are preferred only when aggregate columns are grouping keys"],
      correct: [0],
      concept: "SQL query planners select Merge Joins when joining columns are already sorted (e.g. indexed or sorted cluster keys). If sorting is absent, building an in-memory Hash Table (Hash Join) is faster than sorting both tables first. Critical certification gotcha: hash joins have higher memory overhead."
    },
    {
      id: 61,
      type: "multi",
      difficulty: 2,
      question: "You are designing an incremental data pipeline using a SQL `Advanced Transformations` pattern. The task is to execute an upsert operation using the MERGE statement. Which of the following represent valid syntax constraints and behaviors for MERGE? (Select ALL that apply)",
      options: ["A: You can define multiple WHEN MATCHED clauses differentiated by additional AND filter clauses         ", "B: You must guarantee that the source table joining keys are unique to prevent multiple matches errors  ", "C: The MERGE statement permits updating columns in both target and source tables in a single transaction", "D: If a join row match is not found, you can execute a DELETE statement directly on the source table    "],
      correct: [0, 1],
      concept: "MERGE requires that source joining keys match at most one row in the target table, otherwise the transaction will fail with a \'non-deterministic match\' error. You can have multiple WHEN MATCHED clauses with different filters (e.g. WHEN MATCHED AND source.status = \'D\' THEN DELETE)."
    },
    {
      id: 62,
      type: "multi",
      difficulty: 2,
      question: "You are designing an incremental data pipeline using a SQL `Stored Procedures` pattern. The task is to execute an upsert operation using the MERGE statement. Which of the following represent valid syntax constraints and behaviors for MERGE? (Select ALL that apply)",
      options: ["A: You can define multiple WHEN MATCHED clauses differentiated by additional AND filter clauses         ", "B: You must guarantee that the source table joining keys are unique to prevent multiple matches errors  ", "C: The MERGE statement permits updating columns in both target and source tables in a single transaction", "D: If a join row match is not found, you can execute a DELETE statement directly on the source table    "],
      correct: [0, 1],
      concept: "MERGE requires that source joining keys match at most one row in the target table, otherwise the transaction will fail with a \'non-deterministic match\' error. You can have multiple WHEN MATCHED clauses with different filters (e.g. WHEN MATCHED AND source.status = \'D\' THEN DELETE)."
    },
    {
      id: 63,
      type: "multi",
      difficulty: 2,
      question: "You are designing an incremental data pipeline using a SQL `Nested Data Parsing` pattern. The task is to execute an upsert operation using the MERGE statement. Which of the following represent valid syntax constraints and behaviors for MERGE? (Select ALL that apply)",
      options: ["A: You can define multiple WHEN MATCHED clauses differentiated by additional AND filter clauses         ", "B: You must guarantee that the source table joining keys are unique to prevent multiple matches errors  ", "C: The MERGE statement permits updating columns in both target and source tables in a single transaction", "D: If a join row match is not found, you can execute a DELETE statement directly on the source table    "],
      correct: [0, 1],
      concept: "MERGE requires that source joining keys match at most one row in the target table, otherwise the transaction will fail with a \'non-deterministic match\' error. You can have multiple WHEN MATCHED clauses with different filters (e.g. WHEN MATCHED AND source.status = \'D\' THEN DELETE)."
    },
    {
      id: 64,
      type: "multi",
      difficulty: 2,
      question: "You are designing an incremental data pipeline using a SQL `Data Mart Design` pattern. The task is to execute an upsert operation using the MERGE statement. Which of the following represent valid syntax constraints and behaviors for MERGE? (Select ALL that apply)",
      options: ["A: You can define multiple WHEN MATCHED clauses differentiated by additional AND filter clauses         ", "B: You must guarantee that the source table joining keys are unique to prevent multiple matches errors  ", "C: The MERGE statement permits updating columns in both target and source tables in a single transaction", "D: If a join row match is not found, you can execute a DELETE statement directly on the source table    "],
      correct: [0, 1],
      concept: "MERGE requires that source joining keys match at most one row in the target table, otherwise the transaction will fail with a \'non-deterministic match\' error. You can have multiple WHEN MATCHED clauses with different filters (e.g. WHEN MATCHED AND source.status = \'D\' THEN DELETE)."
    },
    {
      id: 65,
      type: "multi",
      difficulty: 2,
      question: "You are designing an incremental data pipeline using a SQL `MERGE (Upsert)` pattern. The task is to execute an upsert operation using the MERGE statement. Which of the following represent valid syntax constraints and behaviors for MERGE? (Select ALL that apply)",
      options: ["A: You can define multiple WHEN MATCHED clauses differentiated by additional AND filter clauses         ", "B: You must guarantee that the source table joining keys are unique to prevent multiple matches errors  ", "C: The MERGE statement permits updating columns in both target and source tables in a single transaction", "D: If a join row match is not found, you can execute a DELETE statement directly on the source table    "],
      correct: [0, 1],
      concept: "MERGE requires that source joining keys match at most one row in the target table, otherwise the transaction will fail with a \'non-deterministic match\' error. You can have multiple WHEN MATCHED clauses with different filters (e.g. WHEN MATCHED AND source.status = \'D\' THEN DELETE)."
    },
    {
      id: 66,
      type: "multi",
      difficulty: 2,
      question: "You are designing an incremental data pipeline using a SQL `CTAS` pattern. The task is to execute an upsert operation using the MERGE statement. Which of the following represent valid syntax constraints and behaviors for MERGE? (Select ALL that apply)",
      options: ["A: You can define multiple WHEN MATCHED clauses differentiated by additional AND filter clauses         ", "B: You must guarantee that the source table joining keys are unique to prevent multiple matches errors  ", "C: The MERGE statement permits updating columns in both target and source tables in a single transaction", "D: If a join row match is not found, you can execute a DELETE statement directly on the source table    "],
      correct: [0, 1],
      concept: "MERGE requires that source joining keys match at most one row in the target table, otherwise the transaction will fail with a \'non-deterministic match\' error. You can have multiple WHEN MATCHED clauses with different filters (e.g. WHEN MATCHED AND source.status = \'D\' THEN DELETE)."
    },
    {
      id: 67,
      type: "multi",
      difficulty: 2,
      question: "You are designing an incremental data pipeline using a SQL `Advanced Transformations` pattern. The task is to execute an upsert operation using the MERGE statement. Which of the following represent valid syntax constraints and behaviors for MERGE? (Select ALL that apply)",
      options: ["A: You can define multiple WHEN MATCHED clauses differentiated by additional AND filter clauses         ", "B: You must guarantee that the source table joining keys are unique to prevent multiple matches errors  ", "C: The MERGE statement permits updating columns in both target and source tables in a single transaction", "D: If a join row match is not found, you can execute a DELETE statement directly on the source table    "],
      correct: [0, 1],
      concept: "MERGE requires that source joining keys match at most one row in the target table, otherwise the transaction will fail with a \'non-deterministic match\' error. You can have multiple WHEN MATCHED clauses with different filters (e.g. WHEN MATCHED AND source.status = \'D\' THEN DELETE)."
    },
    {
      id: 68,
      type: "multi",
      difficulty: 2,
      question: "You are designing an incremental data pipeline using a SQL `Stored Procedures` pattern. The task is to execute an upsert operation using the MERGE statement. Which of the following represent valid syntax constraints and behaviors for MERGE? (Select ALL that apply)",
      options: ["A: You can define multiple WHEN MATCHED clauses differentiated by additional AND filter clauses         ", "B: You must guarantee that the source table joining keys are unique to prevent multiple matches errors  ", "C: The MERGE statement permits updating columns in both target and source tables in a single transaction", "D: If a join row match is not found, you can execute a DELETE statement directly on the source table    "],
      correct: [0, 1],
      concept: "MERGE requires that source joining keys match at most one row in the target table, otherwise the transaction will fail with a \'non-deterministic match\' error. You can have multiple WHEN MATCHED clauses with different filters (e.g. WHEN MATCHED AND source.status = \'D\' THEN DELETE)."
    },
    {
      id: 69,
      type: "multi",
      difficulty: 2,
      question: "You are designing an incremental data pipeline using a SQL `Nested Data Parsing` pattern. The task is to execute an upsert operation using the MERGE statement. Which of the following represent valid syntax constraints and behaviors for MERGE? (Select ALL that apply)",
      options: ["A: You can define multiple WHEN MATCHED clauses differentiated by additional AND filter clauses         ", "B: You must guarantee that the source table joining keys are unique to prevent multiple matches errors  ", "C: The MERGE statement permits updating columns in both target and source tables in a single transaction", "D: If a join row match is not found, you can execute a DELETE statement directly on the source table    "],
      correct: [0, 1],
      concept: "MERGE requires that source joining keys match at most one row in the target table, otherwise the transaction will fail with a \'non-deterministic match\' error. You can have multiple WHEN MATCHED clauses with different filters (e.g. WHEN MATCHED AND source.status = \'D\' THEN DELETE)."
    },
    {
      id: 70,
      type: "multi",
      difficulty: 2,
      question: "You are designing an incremental data pipeline using a SQL `Data Mart Design` pattern. The task is to execute an upsert operation using the MERGE statement. Which of the following represent valid syntax constraints and behaviors for MERGE? (Select ALL that apply)",
      options: ["A: You can define multiple WHEN MATCHED clauses differentiated by additional AND filter clauses         ", "B: You must guarantee that the source table joining keys are unique to prevent multiple matches errors  ", "C: The MERGE statement permits updating columns in both target and source tables in a single transaction", "D: If a join row match is not found, you can execute a DELETE statement directly on the source table    "],
      correct: [0, 1],
      concept: "MERGE requires that source joining keys match at most one row in the target table, otherwise the transaction will fail with a \'non-deterministic match\' error. You can have multiple WHEN MATCHED clauses with different filters (e.g. WHEN MATCHED AND source.status = \'D\' THEN DELETE)."
    },
    {
      id: 71,
      type: "multi",
      difficulty: 2,
      question: "You are designing an incremental data pipeline using a SQL `MERGE (Upsert)` pattern. The task is to execute an upsert operation using the MERGE statement. Which of the following represent valid syntax constraints and behaviors for MERGE? (Select ALL that apply)",
      options: ["A: You can define multiple WHEN MATCHED clauses differentiated by additional AND filter clauses         ", "B: You must guarantee that the source table joining keys are unique to prevent multiple matches errors  ", "C: The MERGE statement permits updating columns in both target and source tables in a single transaction", "D: If a join row match is not found, you can execute a DELETE statement directly on the source table    "],
      correct: [0, 1],
      concept: "MERGE requires that source joining keys match at most one row in the target table, otherwise the transaction will fail with a \'non-deterministic match\' error. You can have multiple WHEN MATCHED clauses with different filters (e.g. WHEN MATCHED AND source.status = \'D\' THEN DELETE)."
    },
    {
      id: 72,
      type: "multi",
      difficulty: 2,
      question: "You are designing an incremental data pipeline using a SQL `CTAS` pattern. The task is to execute an upsert operation using the MERGE statement. Which of the following represent valid syntax constraints and behaviors for MERGE? (Select ALL that apply)",
      options: ["A: You can define multiple WHEN MATCHED clauses differentiated by additional AND filter clauses         ", "B: You must guarantee that the source table joining keys are unique to prevent multiple matches errors  ", "C: The MERGE statement permits updating columns in both target and source tables in a single transaction", "D: If a join row match is not found, you can execute a DELETE statement directly on the source table    "],
      correct: [0, 1],
      concept: "MERGE requires that source joining keys match at most one row in the target table, otherwise the transaction will fail with a \'non-deterministic match\' error. You can have multiple WHEN MATCHED clauses with different filters (e.g. WHEN MATCHED AND source.status = \'D\' THEN DELETE)."
    },
    {
      id: 73,
      type: "multi",
      difficulty: 2,
      question: "You are designing an incremental data pipeline using a SQL `Advanced Transformations` pattern. The task is to execute an upsert operation using the MERGE statement. Which of the following represent valid syntax constraints and behaviors for MERGE? (Select ALL that apply)",
      options: ["A: You can define multiple WHEN MATCHED clauses differentiated by additional AND filter clauses         ", "B: You must guarantee that the source table joining keys are unique to prevent multiple matches errors  ", "C: The MERGE statement permits updating columns in both target and source tables in a single transaction", "D: If a join row match is not found, you can execute a DELETE statement directly on the source table    "],
      correct: [0, 1],
      concept: "MERGE requires that source joining keys match at most one row in the target table, otherwise the transaction will fail with a \'non-deterministic match\' error. You can have multiple WHEN MATCHED clauses with different filters (e.g. WHEN MATCHED AND source.status = \'D\' THEN DELETE)."
    },
    {
      id: 74,
      type: "multi",
      difficulty: 2,
      question: "You are designing an incremental data pipeline using a SQL `Stored Procedures` pattern. The task is to execute an upsert operation using the MERGE statement. Which of the following represent valid syntax constraints and behaviors for MERGE? (Select ALL that apply)",
      options: ["A: You can define multiple WHEN MATCHED clauses differentiated by additional AND filter clauses         ", "B: You must guarantee that the source table joining keys are unique to prevent multiple matches errors  ", "C: The MERGE statement permits updating columns in both target and source tables in a single transaction", "D: If a join row match is not found, you can execute a DELETE statement directly on the source table    "],
      correct: [0, 1],
      concept: "MERGE requires that source joining keys match at most one row in the target table, otherwise the transaction will fail with a \'non-deterministic match\' error. You can have multiple WHEN MATCHED clauses with different filters (e.g. WHEN MATCHED AND source.status = \'D\' THEN DELETE)."
    },
    {
      id: 75,
      type: "multi",
      difficulty: 2,
      question: "You are designing an incremental data pipeline using a SQL `Nested Data Parsing` pattern. The task is to execute an upsert operation using the MERGE statement. Which of the following represent valid syntax constraints and behaviors for MERGE? (Select ALL that apply)",
      options: ["A: You can define multiple WHEN MATCHED clauses differentiated by additional AND filter clauses         ", "B: You must guarantee that the source table joining keys are unique to prevent multiple matches errors  ", "C: The MERGE statement permits updating columns in both target and source tables in a single transaction", "D: If a join row match is not found, you can execute a DELETE statement directly on the source table    "],
      correct: [0, 1],
      concept: "MERGE requires that source joining keys match at most one row in the target table, otherwise the transaction will fail with a \'non-deterministic match\' error. You can have multiple WHEN MATCHED clauses with different filters (e.g. WHEN MATCHED AND source.status = \'D\' THEN DELETE)."
    },
    {
      id: 76,
      type: "multi",
      difficulty: 3,
      question: "You are designing an incremental data pipeline using a SQL `Data Mart Design` pattern. The task is to execute an upsert operation using the MERGE statement. Which of the following represent valid syntax constraints and behaviors for MERGE? (Select ALL that apply)",
      options: ["A: You can define multiple WHEN MATCHED clauses differentiated by additional AND filter clauses         ", "B: You must guarantee that the source table joining keys are unique to prevent multiple matches errors  ", "C: The MERGE statement permits updating columns in both target and source tables in a single transaction", "D: If a join row match is not found, you can execute a DELETE statement directly on the source table    "],
      correct: [0, 1],
      concept: "MERGE requires that source joining keys match at most one row in the target table, otherwise the transaction will fail with a \'non-deterministic match\' error. You can have multiple WHEN MATCHED clauses with different filters (e.g. WHEN MATCHED AND source.status = \'D\' THEN DELETE)."
    },
    {
      id: 77,
      type: "multi",
      difficulty: 3,
      question: "You are designing an incremental data pipeline using a SQL `MERGE (Upsert)` pattern. The task is to execute an upsert operation using the MERGE statement. Which of the following represent valid syntax constraints and behaviors for MERGE? (Select ALL that apply)",
      options: ["A: You can define multiple WHEN MATCHED clauses differentiated by additional AND filter clauses         ", "B: You must guarantee that the source table joining keys are unique to prevent multiple matches errors  ", "C: The MERGE statement permits updating columns in both target and source tables in a single transaction", "D: If a join row match is not found, you can execute a DELETE statement directly on the source table    "],
      correct: [0, 1],
      concept: "MERGE requires that source joining keys match at most one row in the target table, otherwise the transaction will fail with a \'non-deterministic match\' error. You can have multiple WHEN MATCHED clauses with different filters (e.g. WHEN MATCHED AND source.status = \'D\' THEN DELETE)."
    },
    {
      id: 78,
      type: "multi",
      difficulty: 3,
      question: "You are designing an incremental data pipeline using a SQL `CTAS` pattern. The task is to execute an upsert operation using the MERGE statement. Which of the following represent valid syntax constraints and behaviors for MERGE? (Select ALL that apply)",
      options: ["A: You can define multiple WHEN MATCHED clauses differentiated by additional AND filter clauses         ", "B: You must guarantee that the source table joining keys are unique to prevent multiple matches errors  ", "C: The MERGE statement permits updating columns in both target and source tables in a single transaction", "D: If a join row match is not found, you can execute a DELETE statement directly on the source table    "],
      correct: [0, 1],
      concept: "MERGE requires that source joining keys match at most one row in the target table, otherwise the transaction will fail with a \'non-deterministic match\' error. You can have multiple WHEN MATCHED clauses with different filters (e.g. WHEN MATCHED AND source.status = \'D\' THEN DELETE)."
    },
    {
      id: 79,
      type: "multi",
      difficulty: 3,
      question: "You are designing an incremental data pipeline using a SQL `Advanced Transformations` pattern. The task is to execute an upsert operation using the MERGE statement. Which of the following represent valid syntax constraints and behaviors for MERGE? (Select ALL that apply)",
      options: ["A: You can define multiple WHEN MATCHED clauses differentiated by additional AND filter clauses         ", "B: You must guarantee that the source table joining keys are unique to prevent multiple matches errors  ", "C: The MERGE statement permits updating columns in both target and source tables in a single transaction", "D: If a join row match is not found, you can execute a DELETE statement directly on the source table    "],
      correct: [0, 1],
      concept: "MERGE requires that source joining keys match at most one row in the target table, otherwise the transaction will fail with a \'non-deterministic match\' error. You can have multiple WHEN MATCHED clauses with different filters (e.g. WHEN MATCHED AND source.status = \'D\' THEN DELETE)."
    },
    {
      id: 80,
      type: "multi",
      difficulty: 3,
      question: "You are designing an incremental data pipeline using a SQL `Stored Procedures` pattern. The task is to execute an upsert operation using the MERGE statement. Which of the following represent valid syntax constraints and behaviors for MERGE? (Select ALL that apply)",
      options: ["A: You can define multiple WHEN MATCHED clauses differentiated by additional AND filter clauses         ", "B: You must guarantee that the source table joining keys are unique to prevent multiple matches errors  ", "C: The MERGE statement permits updating columns in both target and source tables in a single transaction", "D: If a join row match is not found, you can execute a DELETE statement directly on the source table    "],
      correct: [0, 1],
      concept: "MERGE requires that source joining keys match at most one row in the target table, otherwise the transaction will fail with a \'non-deterministic match\' error. You can have multiple WHEN MATCHED clauses with different filters (e.g. WHEN MATCHED AND source.status = \'D\' THEN DELETE)."
    },
    {
      id: 81,
      type: "multi",
      difficulty: 3,
      question: "You are designing an incremental data pipeline using a SQL `Nested Data Parsing` pattern. The task is to execute an upsert operation using the MERGE statement. Which of the following represent valid syntax constraints and behaviors for MERGE? (Select ALL that apply)",
      options: ["A: You can define multiple WHEN MATCHED clauses differentiated by additional AND filter clauses         ", "B: You must guarantee that the source table joining keys are unique to prevent multiple matches errors  ", "C: The MERGE statement permits updating columns in both target and source tables in a single transaction", "D: If a join row match is not found, you can execute a DELETE statement directly on the source table    "],
      correct: [0, 1],
      concept: "MERGE requires that source joining keys match at most one row in the target table, otherwise the transaction will fail with a \'non-deterministic match\' error. You can have multiple WHEN MATCHED clauses with different filters (e.g. WHEN MATCHED AND source.status = \'D\' THEN DELETE)."
    },
    {
      id: 82,
      type: "multi",
      difficulty: 3,
      question: "You are designing an incremental data pipeline using a SQL `Data Mart Design` pattern. The task is to execute an upsert operation using the MERGE statement. Which of the following represent valid syntax constraints and behaviors for MERGE? (Select ALL that apply)",
      options: ["A: You can define multiple WHEN MATCHED clauses differentiated by additional AND filter clauses         ", "B: You must guarantee that the source table joining keys are unique to prevent multiple matches errors  ", "C: The MERGE statement permits updating columns in both target and source tables in a single transaction", "D: If a join row match is not found, you can execute a DELETE statement directly on the source table    "],
      correct: [0, 1],
      concept: "MERGE requires that source joining keys match at most one row in the target table, otherwise the transaction will fail with a \'non-deterministic match\' error. You can have multiple WHEN MATCHED clauses with different filters (e.g. WHEN MATCHED AND source.status = \'D\' THEN DELETE)."
    },
    {
      id: 83,
      type: "multi",
      difficulty: 3,
      question: "You are designing an incremental data pipeline using a SQL `MERGE (Upsert)` pattern. The task is to execute an upsert operation using the MERGE statement. Which of the following represent valid syntax constraints and behaviors for MERGE? (Select ALL that apply)",
      options: ["A: You can define multiple WHEN MATCHED clauses differentiated by additional AND filter clauses         ", "B: You must guarantee that the source table joining keys are unique to prevent multiple matches errors  ", "C: The MERGE statement permits updating columns in both target and source tables in a single transaction", "D: If a join row match is not found, you can execute a DELETE statement directly on the source table    "],
      correct: [0, 1],
      concept: "MERGE requires that source joining keys match at most one row in the target table, otherwise the transaction will fail with a \'non-deterministic match\' error. You can have multiple WHEN MATCHED clauses with different filters (e.g. WHEN MATCHED AND source.status = \'D\' THEN DELETE)."
    },
    {
      id: 84,
      type: "multi",
      difficulty: 3,
      question: "You are designing an incremental data pipeline using a SQL `CTAS` pattern. The task is to execute an upsert operation using the MERGE statement. Which of the following represent valid syntax constraints and behaviors for MERGE? (Select ALL that apply)",
      options: ["A: You can define multiple WHEN MATCHED clauses differentiated by additional AND filter clauses         ", "B: You must guarantee that the source table joining keys are unique to prevent multiple matches errors  ", "C: The MERGE statement permits updating columns in both target and source tables in a single transaction", "D: If a join row match is not found, you can execute a DELETE statement directly on the source table    "],
      correct: [0, 1],
      concept: "MERGE requires that source joining keys match at most one row in the target table, otherwise the transaction will fail with a \'non-deterministic match\' error. You can have multiple WHEN MATCHED clauses with different filters (e.g. WHEN MATCHED AND source.status = \'D\' THEN DELETE)."
    },
    {
      id: 85,
      type: "multi",
      difficulty: 3,
      question: "You are designing an incremental data pipeline using a SQL `Advanced Transformations` pattern. The task is to execute an upsert operation using the MERGE statement. Which of the following represent valid syntax constraints and behaviors for MERGE? (Select ALL that apply)",
      options: ["A: You can define multiple WHEN MATCHED clauses differentiated by additional AND filter clauses         ", "B: You must guarantee that the source table joining keys are unique to prevent multiple matches errors  ", "C: The MERGE statement permits updating columns in both target and source tables in a single transaction", "D: If a join row match is not found, you can execute a DELETE statement directly on the source table    "],
      correct: [0, 1],
      concept: "MERGE requires that source joining keys match at most one row in the target table, otherwise the transaction will fail with a \'non-deterministic match\' error. You can have multiple WHEN MATCHED clauses with different filters (e.g. WHEN MATCHED AND source.status = \'D\' THEN DELETE)."
    },
    {
      id: 86,
      type: "tf",
      difficulty: 3,
      question: "Is it true that performing `partitioning` using the `CTAS` (Create Table As SELECT) statement automatically copies all primary key constraints, default value bindings, and indexes from the source table to the new target table?",
      options: ["True, CTAS clones metadata definitions fully  ", "False, CTAS only clones schema and data rows  "],
      correct: [1],
      concept: "False. A CTAS statement creates a new table with matching column names and data types based on the query output and copies the data, but it does NOT copy indexes, constraints (primary/foreign keys), or defaults from the original table."
    },
    {
      id: 87,
      type: "tf",
      difficulty: 3,
      question: "Is it true that performing `indexing` using the `CTAS` (Create Table As SELECT) statement automatically copies all primary key constraints, default value bindings, and indexes from the source table to the new target table?",
      options: ["True, CTAS clones metadata definitions fully  ", "False, CTAS only clones schema and data rows  "],
      correct: [1],
      concept: "False. A CTAS statement creates a new table with matching column names and data types based on the query output and copies the data, but it does NOT copy indexes, constraints (primary/foreign keys), or defaults from the original table."
    },
    {
      id: 88,
      type: "tf",
      difficulty: 3,
      question: "Is it true that performing `governing` using the `CTAS` (Create Table As SELECT) statement automatically copies all primary key constraints, default value bindings, and indexes from the source table to the new target table?",
      options: ["True, CTAS clones metadata definitions fully  ", "False, CTAS only clones schema and data rows  "],
      correct: [1],
      concept: "False. A CTAS statement creates a new table with matching column names and data types based on the query output and copies the data, but it does NOT copy indexes, constraints (primary/foreign keys), or defaults from the original table."
    },
    {
      id: 89,
      type: "tf",
      difficulty: 3,
      question: "Is it true that performing `validating` using the `CTAS` (Create Table As SELECT) statement automatically copies all primary key constraints, default value bindings, and indexes from the source table to the new target table?",
      options: ["True, CTAS clones metadata definitions fully  ", "False, CTAS only clones schema and data rows  "],
      correct: [1],
      concept: "False. A CTAS statement creates a new table with matching column names and data types based on the query output and copies the data, but it does NOT copy indexes, constraints (primary/foreign keys), or defaults from the original table."
    },
    {
      id: 90,
      type: "tf",
      difficulty: 3,
      question: "Is it true that performing `transforming` using the `CTAS` (Create Table As SELECT) statement automatically copies all primary key constraints, default value bindings, and indexes from the source table to the new target table?",
      options: ["True, CTAS clones metadata definitions fully  ", "False, CTAS only clones schema and data rows  "],
      correct: [1],
      concept: "False. A CTAS statement creates a new table with matching column names and data types based on the query output and copies the data, but it does NOT copy indexes, constraints (primary/foreign keys), or defaults from the original table."
    },
    {
      id: 91,
      type: "tf",
      difficulty: 3,
      question: "Is it true that performing `parsing` using the `CTAS` (Create Table As SELECT) statement automatically copies all primary key constraints, default value bindings, and indexes from the source table to the new target table?",
      options: ["True, CTAS clones metadata definitions fully  ", "False, CTAS only clones schema and data rows  "],
      correct: [1],
      concept: "False. A CTAS statement creates a new table with matching column names and data types based on the query output and copies the data, but it does NOT copy indexes, constraints (primary/foreign keys), or defaults from the original table."
    },
    {
      id: 92,
      type: "tf",
      difficulty: 3,
      question: "Is it true that performing `optimizing` using the `CTAS` (Create Table As SELECT) statement automatically copies all primary key constraints, default value bindings, and indexes from the source table to the new target table?",
      options: ["True, CTAS clones metadata definitions fully  ", "False, CTAS only clones schema and data rows  "],
      correct: [1],
      concept: "False. A CTAS statement creates a new table with matching column names and data types based on the query output and copies the data, but it does NOT copy indexes, constraints (primary/foreign keys), or defaults from the original table."
    },
    {
      id: 93,
      type: "tf",
      difficulty: 3,
      question: "Is it true that performing `buffering` using the `CTAS` (Create Table As SELECT) statement automatically copies all primary key constraints, default value bindings, and indexes from the source table to the new target table?",
      options: ["True, CTAS clones metadata definitions fully  ", "False, CTAS only clones schema and data rows  "],
      correct: [1],
      concept: "False. A CTAS statement creates a new table with matching column names and data types based on the query output and copies the data, but it does NOT copy indexes, constraints (primary/foreign keys), or defaults from the original table."
    },
    {
      id: 94,
      type: "tf",
      difficulty: 3,
      question: "Is it true that performing `checkpointing` using the `CTAS` (Create Table As SELECT) statement automatically copies all primary key constraints, default value bindings, and indexes from the source table to the new target table?",
      options: ["True, CTAS clones metadata definitions fully  ", "False, CTAS only clones schema and data rows  "],
      correct: [1],
      concept: "False. A CTAS statement creates a new table with matching column names and data types based on the query output and copies the data, but it does NOT copy indexes, constraints (primary/foreign keys), or defaults from the original table."
    },
    {
      id: 95,
      type: "tf",
      difficulty: 3,
      question: "Is it true that performing `materializing` using the `CTAS` (Create Table As SELECT) statement automatically copies all primary key constraints, default value bindings, and indexes from the source table to the new target table?",
      options: ["True, CTAS clones metadata definitions fully  ", "False, CTAS only clones schema and data rows  "],
      correct: [1],
      concept: "False. A CTAS statement creates a new table with matching column names and data types based on the query output and copies the data, but it does NOT copy indexes, constraints (primary/foreign keys), or defaults from the original table."
    },
    {
      id: 96,
      type: "tf",
      difficulty: 3,
      question: "Is it true that performing `partitioning` using the `CTAS` (Create Table As SELECT) statement automatically copies all primary key constraints, default value bindings, and indexes from the source table to the new target table?",
      options: ["True, CTAS clones metadata definitions fully  ", "False, CTAS only clones schema and data rows  "],
      correct: [1],
      concept: "False. A CTAS statement creates a new table with matching column names and data types based on the query output and copies the data, but it does NOT copy indexes, constraints (primary/foreign keys), or defaults from the original table."
    },
    {
      id: 97,
      type: "tf",
      difficulty: 3,
      question: "Is it true that performing `indexing` using the `CTAS` (Create Table As SELECT) statement automatically copies all primary key constraints, default value bindings, and indexes from the source table to the new target table?",
      options: ["True, CTAS clones metadata definitions fully  ", "False, CTAS only clones schema and data rows  "],
      correct: [1],
      concept: "False. A CTAS statement creates a new table with matching column names and data types based on the query output and copies the data, but it does NOT copy indexes, constraints (primary/foreign keys), or defaults from the original table."
    },
    {
      id: 98,
      type: "tf",
      difficulty: 3,
      question: "Is it true that performing `governing` using the `CTAS` (Create Table As SELECT) statement automatically copies all primary key constraints, default value bindings, and indexes from the source table to the new target table?",
      options: ["True, CTAS clones metadata definitions fully  ", "False, CTAS only clones schema and data rows  "],
      correct: [1],
      concept: "False. A CTAS statement creates a new table with matching column names and data types based on the query output and copies the data, but it does NOT copy indexes, constraints (primary/foreign keys), or defaults from the original table."
    },
    {
      id: 99,
      type: "tf",
      difficulty: 3,
      question: "Is it true that performing `validating` using the `CTAS` (Create Table As SELECT) statement automatically copies all primary key constraints, default value bindings, and indexes from the source table to the new target table?",
      options: ["True, CTAS clones metadata definitions fully  ", "False, CTAS only clones schema and data rows  "],
      correct: [1],
      concept: "False. A CTAS statement creates a new table with matching column names and data types based on the query output and copies the data, but it does NOT copy indexes, constraints (primary/foreign keys), or defaults from the original table."
    },
    {
      id: 100,
      type: "tf",
      difficulty: 3,
      question: "Is it true that performing `transforming` using the `CTAS` (Create Table As SELECT) statement automatically copies all primary key constraints, default value bindings, and indexes from the source table to the new target table?",
      options: ["True, CTAS clones metadata definitions fully  ", "False, CTAS only clones schema and data rows  "],
      correct: [1],
      concept: "False. A CTAS statement creates a new table with matching column names and data types based on the query output and copies the data, but it does NOT copy indexes, constraints (primary/foreign keys), or defaults from the original table."
    }
  ]
};

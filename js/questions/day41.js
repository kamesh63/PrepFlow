window.QUIZ_DATA = window.QUIZ_DATA || {};
window.QUIZ_DATA["day41"] = {
  title: "dbt Testing & Data Quality",
  topics: ["Generic Tests", "Custom Tests", "test_accepted_values", "Unique & Not Null", "Schema Tests"],
  questions: [
    {
      id: 1,
      type: "single",
      difficulty: 1,
      question: "Which dbt command is used to execute all tests defined in a project?",
      options: ["dbt test", "dbt run --tests", "dbt check", "dbt validate"],
      correct: [0],
      concept: "The \"dbt test\" command runs all tests defined in a dbt project including schema tests in YAML files and singular tests in the tests/ directory. It is the primary command for validating data quality in dbt."
    },
    {
      id: 2,
      type: "single",
      difficulty: 1,
      question: "How many built-in generic tests does dbt ship with out of the box?",
      options: ["4", "3", "5", "6"],
      correct: [0],
      concept: "dbt includes exactly four built-in generic tests: unique, not_null, accepted_values, and relationships. These cover the most common data quality checks and can be extended with custom generic tests or packages like dbt-utils."
    },
    {
      id: 3,
      type: "single",
      difficulty: 1,
      question: "Where are schema tests typically defined in a dbt project?",
      options: ["In YAML files under the models/ directory", "In SQL files under the tests/ directory", "In the dbt_project.yml file only", "In a dedicated testing/ directory at the root"],
      correct: [0],
      concept: "Schema tests (generic tests) are defined in YAML files (commonly schema.yml or _schema.yml) alongside models in the models/ directory. They are specified under the columns or model-level tests section in these YAML files."
    },
    {
      id: 4,
      type: "single",
      difficulty: 1,
      question: "What does the built-in \"unique\" test validate on a column?",
      options: ["That all values in the column are distinct with no duplicates", "That the column exists in the table schema definition", "That the column values match a predefined list exactly", "That the column has a unique data type across models"],
      correct: [0],
      concept: "The \"unique\" generic test checks that every value in the specified column is distinct — no two rows share the same value. If any duplicate values are found, the test fails. This is commonly applied to primary key columns."
    },
    {
      id: 5,
      type: "single",
      difficulty: 1,
      question: "What does the built-in \"not_null\" test check for a column?",
      options: ["That no rows contain NULL values in the column", "That the column has a NOT NULL constraint in the database", "That the column has at least one non-null value present", "That NULL values are replaced with default values automatically"],
      correct: [0],
      concept: "The \"not_null\" generic test asserts that the specified column contains no NULL values across all rows. If even one NULL is found, the test fails. This test runs a query like SELECT count(*) FROM model WHERE column IS NULL and checks for zero results."
    },
    {
      id: 6,
      type: "single",
      difficulty: 1,
      question: "Which YAML syntax correctly applies a \"not_null\" test to the \"user_id\" column?",
      options: [
        "columns:\\n  - name: user_id\\n    tests:\\n      - not_null",
        "columns:\\n  - name: user_id\\n    validate:\\n      - not_null",
        "tests:\\n  - column: user_id\\n    type: not_null",
        "columns:\\n  - name: user_id\\n    constraints:\\n      - not_null"
      ],
      correct: [0],
      concept: "In dbt schema YAML files, tests are applied under the \"tests\" key within a column definition. The correct syntax nests the test name (not_null) as a list item under \"tests\" which is under the specific column definition."
    },
    {
      id: 7,
      type: "single",
      difficulty: 1,
      question: "What does the \"accepted_values\" test verify for a column?",
      options: [
        "That every value in the column is contained within a specified list",
        "That the column accepts any data type value without errors",
        "That all values meet a minimum character length requirement",
        "That the column values are within a specified numeric range"
      ],
      correct: [0],
      concept: "The \"accepted_values\" test checks that every non-null value in the column matches one of the values in a predefined list. Any value not in the list causes the test to fail. This is useful for status columns, category fields, and other enum-like data."
    },
    {
      id: 8,
      type: "single",
      difficulty: 1,
      question: "What does the built-in \"relationships\" test validate?",
      options: [
        "That every value in a column exists in a referenced column of another model",
        "That two models share the same schema and column definitions",
        "That a model has proper join conditions defined in its SQL",
        "That foreign key constraints are physically enforced in the database"
      ],
      correct: [0],
      concept: "The \"relationships\" test performs referential integrity checking — it verifies that every value in a column of the current model exists in a specified column of another model (the referenced model). This is similar to a foreign key constraint but is validated at test time rather than enforced by the database."
    },
    {
      id: 9,
      type: "single",
      difficulty: 1,
      question: "Which directory is the default location for singular (custom SQL) tests in a dbt project?",
      options: ["tests/", "models/tests/", "macros/tests/", "analysis/tests/"],
      correct: [0],
      concept: "Singular tests are SQL files placed in the tests/ directory (or a configured test-paths directory). Each SQL file should return rows that represent test failures — if the query returns zero rows, the test passes; if it returns any rows, the test fails."
    },
    {
      id: 10,
      type: "single",
      difficulty: 1,
      question: "A singular test SQL query should return which result to indicate the test has PASSED?",
      options: ["Zero rows (empty result set)", "A single row with value TRUE", "A row containing the word PASS", "Any non-null result set of rows"],
      correct: [0],
      concept: "In dbt singular tests, the SQL query returns rows that represent failures. If the query returns zero rows, it means no failing records were found and the test passes. If any rows are returned, those represent violations and the test fails."
    },
    {
      id: 11,
      type: "single",
      difficulty: 1,
      question: "What are the two possible severity levels for a dbt test?",
      options: ["warn and error", "info and critical", "low and high", "notice and failure"],
      correct: [0],
      concept: "dbt tests support two severity levels: \"warn\" and \"error\". When severity is set to \"error\" (the default), a failing test causes dbt test to return a non-zero exit code. When set to \"warn\", the test failure is reported but does not cause dbt to return a failure exit code."
    },
    {
      id: 12,
      type: "single",
      difficulty: 1,
      question: "How do you set a test to severity \"warn\" in a YAML schema file?",
      options: [
        "Add config: severity: warn under the test definition",
        "Add warning: true under the test definition in YAML",
        "Set the test name to warn_not_null instead of not_null",
        "Add a --warn flag when running the dbt test command"
      ],
      correct: [0],
      concept: "Test severity is configured using the config block within the test definition in YAML. For example: tests: [{ not_null: { config: { severity: \"warn\" } } }]. This makes the test report warnings instead of errors when it fails."
    },
    {
      id: 13,
      type: "single",
      difficulty: 1,
      question: "What is the purpose of the \"where\" config on a dbt test?",
      options: [
        "To filter the rows that the test evaluates using a SQL condition",
        "To specify which warehouse to run the test query against",
        "To define where the test results should be stored in the database",
        "To indicate where in the DAG the test should be executed"
      ],
      correct: [0],
      concept: "The \"where\" config on a test adds a WHERE clause to the test query, allowing you to filter which rows are included in the test evaluation. For example, you might test not_null only where status != \"deleted\" to exclude soft-deleted records from the check."
    },
    {
      id: 14,
      type: "single",
      difficulty: 1,
      question: "Which config option causes dbt to save test failure records to a table in the database?",
      options: ["store_failures", "save_results", "persist_failures", "log_failures"],
      correct: [0],
      concept: "The \"store_failures\" config, when set to true, causes dbt to create a table in the database containing the rows that failed the test. This is extremely useful for debugging and auditing data quality issues, as you can query the failure table to inspect problematic records."
    },
    {
      id: 15,
      type: "single",
      difficulty: 1,
      question: "When using the \"accepted_values\" test, how do you handle values that contain special characters like single quotes?",
      options: [
        "Use the quote config option set to true to properly escape values",
        "Wrap values in double quotes within the YAML values list",
        "Use the escape_chars config to specify characters to escape",
        "Prefix special characters with a backslash in the values list"
      ],
      correct: [0],
      concept: "The accepted_values test supports a \"quote\" config option. When set to true, dbt will wrap each value in the list with single quotes in the generated SQL. This is useful when values contain special characters that need proper quoting in the SQL query."
    },
    {
      id: 16,
      type: "single",
      difficulty: 1,
      question: "How do you run tests for only a specific model named \"dim_customers\"?",
      options: [
        "dbt test --select dim_customers",
        "dbt test --model dim_customers",
        "dbt test --only dim_customers",
        "dbt test --target dim_customers"
      ],
      correct: [0],
      concept: "The --select flag (or -s shorthand) in dbt test allows you to specify which models\' tests to run. Running \"dbt test --select dim_customers\" executes only the tests associated with the dim_customers model, including both schema tests and singular tests that reference it."
    },
    {
      id: 17,
      type: "single",
      difficulty: 1,
      question: "What is a custom generic test in dbt?",
      options: [
        "A reusable test macro defined in the macros/ directory that accepts parameters",
        "A one-off SQL file in the tests/ directory that checks specific data",
        "A third-party test installed from a dbt package automatically",
        "A database-native constraint like CHECK or UNIQUE applied by dbt"
      ],
      correct: [0],
      concept: "Custom generic tests are Jinja macros defined in the macros/ directory (or tests/generic/ directory) that follow a specific naming convention (test_<name>). They accept parameters like model and column_name and return a SQL query. Once defined, they can be used in YAML schema files just like built-in generic tests."
    },
    {
      id: 18,
      type: "single",
      difficulty: 1,
      question: "What naming convention must a custom generic test macro follow?",
      options: [
        "The macro must be named test_<test_name>",
        "The macro must be named check_<test_name>",
        "The macro must be named validate_<test_name>",
        "The macro must be named assert_<test_name>"
      ],
      correct: [0],
      concept: "Custom generic test macros must follow the naming convention test_<test_name>. For example, a test called \"is_positive\" would be defined as a macro named \"test_is_positive\". dbt automatically strips the \"test_\" prefix when referencing it in YAML files."
    },
    {
      id: 19,
      type: "single",
      difficulty: 1,
      question: "In a relationships test, which parameter specifies the model being referenced?",
      options: ["to: ref(\"other_model\")", "model: ref(\"other_model\")", "target: ref(\"other_model\")", "reference: ref(\"other_model\")"],
      correct: [0],
      concept: "The relationships test uses the \"to\" parameter to specify the referenced model and the \"field\" parameter to specify the column in that model. For example: relationships: { to: ref(\"dim_customers\"), field: customer_id }. This checks that every value in the tested column exists in dim_customers.customer_id."
    },
    {
      id: 20,
      type: "single",
      difficulty: 1,
      question: "Which parameter in the relationships test specifies the column in the referenced model?",
      options: ["field", "column", "ref_column", "target_column"],
      correct: [0],
      concept: "The \"field\" parameter in the relationships test specifies which column in the referenced model (specified by \"to\") should be checked for matching values. Together, \"to\" and \"field\" define the target of the referential integrity check."
    },
    {
      id: 21,
      type: "single",
      difficulty: 1,
      question: "What is a data quality dimension that dbt tests primarily address?",
      options: ["Accuracy and completeness of data values", "Network latency of database connections", "Storage compression ratios of tables", "Query execution plan optimization"],
      correct: [0],
      concept: "Data quality dimensions include accuracy, completeness, consistency, timeliness, validity, and uniqueness. dbt tests primarily address these dimensions — for example, not_null tests completeness, unique tests uniqueness, accepted_values tests validity, and relationships tests consistency."
    },
    {
      id: 22,
      type: "single",
      difficulty: 1,
      question: "What does the dbt-expectations package provide for data quality testing?",
      options: [
        "Great Expectations-style test macros usable within dbt schema files",
        "A Python runtime for executing Great Expectations suites in dbt",
        "Automated data profiling that generates test configurations",
        "A dashboard for visualizing data quality metrics over time"
      ],
      correct: [0],
      concept: "The dbt-expectations package (also called dbt_expectations) brings Great Expectations-inspired test macros into dbt. It provides tests like expect_column_values_to_be_between, expect_column_to_exist, expect_table_row_count_to_equal, and many more, all usable as generic tests in YAML schema files."
    },
    {
      id: 23,
      type: "single",
      difficulty: 1,
      question: "What is the elementary dbt package primarily used for?",
      options: [
        "Data observability with anomaly detection and automated monitoring",
        "Generating elementary SQL queries from natural language prompts",
        "Simplifying dbt project setup for beginner-level users",
        "Creating basic CRUD operations on database tables via dbt"
      ],
      correct: [0],
      concept: "The elementary dbt package provides data observability capabilities including anomaly detection, automated data monitoring, test result tracking over time, and a data observability dashboard. It helps teams proactively identify data quality issues beyond what standard tests catch."
    },
    {
      id: 24,
      type: "single",
      difficulty: 1,
      question: "What is test-driven development (TDD) in the context of dbt?",
      options: [
        "Writing tests for expected data behavior before building the model SQL",
        "Running all tests automatically before every git commit in the project",
        "Using test results to drive the choice of materialization strategy",
        "Developing tests only after production data issues are reported"
      ],
      correct: [0],
      concept: "Test-driven development in dbt means defining the expected data contracts and quality assertions (tests) before writing the model SQL. This approach helps clarify requirements, catch issues early, and ensures models are built with quality in mind from the start."
    },
    {
      id: 25,
      type: "single",
      difficulty: 1,
      question: "How can you test an expression rather than a single column in dbt schema tests?",
      options: [
        "Use the expression key instead of column name and provide a SQL expression",
        "Define the expression as a separate ephemeral model and test that",
        "Write a singular test since schema tests only support column names",
        "Use the eval() function within the YAML test configuration block"
      ],
      correct: [0],
      concept: "dbt allows testing expressions (like COALESCE(col_a, col_b) or col_a || col_b) by specifying the expression in place of a column name or by using certain packages that support expression-based testing. Some teams also create an ephemeral model that exposes the expression as a column, then test that column."
    },
    {
      id: 26,
      type: "single",
      difficulty: 1,
      question: "Which flag is used to exclude specific models from a dbt test run?",
      options: ["--exclude", "--skip", "--ignore", "--without"],
      correct: [0],
      concept: "The --exclude flag in dbt test allows you to exclude specific models or selectors from the test run. For example, \"dbt test --exclude staging\" would run all tests except those on models in the staging directory. This complements the --select flag for fine-grained test execution control."
    },
    {
      id: 27,
      type: "single",
      difficulty: 1,
      question: "What does \"dbt test --select source:*\" do?",
      options: [
        "Runs all source freshness tests and schema tests on sources",
        "Tests all models that are sourced from external databases",
        "Selects only tests defined in the sources.yml file for execution",
        "Runs tests on all models in the source schema of the database"
      ],
      correct: [0],
      concept: "The selector \"source:*\" targets all defined sources in the project. Running \"dbt test --select source:*\" executes all tests that are defined on sources, including freshness checks and any schema tests applied to source tables in YAML files."
    },
    {
      id: 28,
      type: "single",
      difficulty: 1,
      question: "How do you configure test freshness for a dbt source?",
      options: [
        "Define loaded_at_field and freshness with warn_after/error_after in sources YAML",
        "Add a freshness_check: true config in the dbt_project.yml file",
        "Create a singular test that checks the max timestamp of the source",
        "Use the dbt freshness command with --source and --threshold flags"
      ],
      correct: [0],
      concept: "Source freshness is configured in the sources YAML file by specifying a \"loaded_at_field\" (a timestamp column indicating when data was loaded) and a \"freshness\" block with \"warn_after\" and \"error_after\" thresholds (e.g., {count: 12, period: hour}). Running \"dbt source freshness\" then checks these thresholds."
    },
    {
      id: 29,
      type: "single",
      difficulty: 1,
      question: "When testing incremental models, what is a common challenge that must be addressed?",
      options: [
        "Tests may need to account for only new/updated records rather than the full table",
        "Incremental models cannot have any tests applied to them at all",
        "The unique test always fails because incremental models have duplicates",
        "Schema tests must be rewritten as singular tests for incremental models"
      ],
      correct: [0],
      concept: "Testing incremental models presents challenges because the model only processes new or updated records on subsequent runs. Tests need to account for the full table state, and special attention must be given to ensuring uniqueness and completeness across incremental boundaries. The \"where\" config can be used to scope tests appropriately."
    },
    {
      id: 30,
      type: "single",
      difficulty: 1,
      question: "What happens when a dbt test with severity \"error\" fails during a CI/CD pipeline?",
      options: [
        "The dbt test command returns a non-zero exit code causing the pipeline to fail",
        "dbt logs a warning message but the pipeline continues successfully",
        "The failing test is automatically retried up to three times before failing",
        "dbt sends an email notification but does not affect the pipeline status"
      ],
      correct: [0],
      concept: "When a test with severity \"error\" (the default) fails, dbt test returns a non-zero exit code (exit code 1). In CI/CD pipelines, this non-zero exit code typically causes the pipeline step to fail, preventing deployment of models with data quality issues."
    },
    {
      id: 31,
      type: "single",
      difficulty: 1,
      question: "Which of the following is a valid way to apply the unique test at the model level rather than the column level?",
      options: [
        "Define the test under the model-level tests key with an expression combining columns",
        "Apply unique to every individual column in the model separately",
        "Use the model_unique test macro from the dbt-utils package directly",
        "Set unique: true in the model config block in dbt_project.yml"
      ],
      correct: [0],
      concept: "Model-level tests can be defined under the model-level \"tests\" key in YAML. For composite uniqueness (unique combination of multiple columns), you can use dbt_utils.unique_combination_of_columns or define a custom expression-based test at the model level."
    },
    {
      id: 32,
      type: "single",
      difficulty: 1,
      question: "What is the correct YAML syntax for an accepted_values test on a \"status\" column with values [\"active\", \"inactive\", \"pending\"]?",
      options: [
        "tests:\\n  - accepted_values:\\n      values: [\"active\", \"inactive\", \"pending\"]",
        "tests:\\n  - values_in: [\"active\", \"inactive\", \"pending\"]",
        "tests:\\n  - accepted_values: \"active,inactive,pending\"",
        "tests:\\n  - check_values:\\n      list: [\"active\", \"inactive\", \"pending\"]"
      ],
      correct: [0],
      concept: "The accepted_values test requires a \"values\" parameter containing a list of acceptable values. The correct YAML syntax nests the values list under the accepted_values test name. Each value in the list is checked against the column data."
    },
    {
      id: 33,
      type: "single",
      difficulty: 1,
      question: "Where are store_failures test results materialized by default?",
      options: [
        "In a schema specific to test results within the target database",
        "In the same schema as the model being tested in the database",
        "In a local CSV file in the dbt project target/ directory",
        "In the dbt Cloud metadata store accessible via the API only"
      ],
      correct: [0],
      concept: "When store_failures is enabled, dbt materializes failing test rows into tables in the database. By default, these are created in a separate schema (typically <target_schema>_dbt_test__audit) to keep test artifacts separate from production data."
    },
    {
      id: 34,
      type: "single",
      difficulty: 1,
      question: "Which built-in generic test would you use to verify referential integrity between an orders table and a customers table?",
      options: ["relationships", "unique", "accepted_values", "not_null"],
      correct: [0],
      concept: "The \"relationships\" test is specifically designed for referential integrity checking. It verifies that every value in a column (e.g., orders.customer_id) exists in a referenced column of another model (e.g., customers.customer_id), functioning like a foreign key validation."
    },
    {
      id: 35,
      type: "single",
      difficulty: 1,
      question: "How does dbt determine if a singular test passes or fails?",
      options: [
        "If the SQL query returns zero rows the test passes; any returned rows indicate failure",
        "If the SQL query returns a TRUE boolean value the test passes otherwise it fails",
        "If the SQL query executes without errors the test passes regardless of results",
        "If the SQL query returns exactly one row with a PASS column the test passes"
      ],
      correct: [0],
      concept: "Singular tests in dbt follow a simple convention: the SQL query should return rows that represent failures or violations. If zero rows are returned, no violations exist and the test passes. If one or more rows are returned, each represents a failing record and the test fails."
    },
    {
      id: 36,
      type: "single",
      difficulty: 2,
      question: "You want a not_null test to only check records from the last 30 days. Which config achieves this?",
      options: [
        "config: { where: \"created_at >= dateadd(day, -30, current_date)\" }",
        "config: { filter: \"created_at >= dateadd(day, -30, current_date)\" }",
        "config: { having: \"created_at >= dateadd(day, -30, current_date)\" }",
        "config: { scope: \"last_30_days\" }"
      ],
      correct: [0],
      concept: "The \"where\" config adds a WHERE clause to the test query, filtering which rows are evaluated. Setting where to a date condition like \"created_at >= dateadd(day, -30, current_date)\" limits the test to only recent records, which is useful for large tables where historical data may have known quality issues."
    },
    {
      id: 37,
      type: "single",
      difficulty: 2,
      question: "What is the difference between a generic test and a singular test in dbt?",
      options: [
        "Generic tests are reusable parametrized macros in YAML; singular tests are one-off SQL files",
        "Generic tests run on all models automatically; singular tests run on one model only",
        "Generic tests use Python; singular tests use SQL for their test definitions",
        "Generic tests are for schema validation; singular tests are for performance testing"
      ],
      correct: [0],
      concept: "Generic tests are parameterized Jinja macros that can be applied to any model/column via YAML configuration (e.g., unique, not_null). Singular tests are standalone SQL files in the tests/ directory that contain specific one-off queries testing custom business logic. Generic tests are reusable; singular tests are project-specific."
    },
    {
      id: 38,
      type: "single",
      difficulty: 2,
      question: "A custom generic test macro receives which two standard arguments?",
      options: [
        "model and column_name",
        "table_name and field_name",
        "ref and source",
        "schema and column"
      ],
      correct: [0],
      concept: "Custom generic test macros receive \"model\" (a Jinja ref to the model being tested) and \"column_name\" (the name of the column the test is applied to) as standard arguments. The macro can also accept additional custom keyword arguments defined in the YAML test configuration."
    },
    {
      id: 39,
      type: "single",
      difficulty: 2,
      question: "You define a custom generic test called \"is_positive\". How do you reference it in a schema YAML file?",
      options: [
        "tests:\\n  - is_positive",
        "tests:\\n  - test_is_positive",
        "tests:\\n  - custom.is_positive",
        "tests:\\n  - generic_test.is_positive"
      ],
      correct: [0],
      concept: "When referencing a custom generic test in YAML, you use the test name WITHOUT the \"test_\" prefix. Even though the macro is defined as \"test_is_positive\" in the macros directory, you reference it simply as \"is_positive\" in the YAML schema file. dbt automatically prepends \"test_\" to find the macro."
    },
    {
      id: 40,
      type: "single",
      difficulty: 2,
      question: "What is the purpose of the \"limit\" config option on a dbt test?",
      options: [
        "To cap the number of failing rows returned for debugging purposes",
        "To limit the number of rows scanned by the test for performance",
        "To set the maximum execution time before the test times out",
        "To restrict the number of times the test can be retried on failure"
      ],
      correct: [0],
      concept: "The \"limit\" config on a dbt test limits the number of failure rows returned in the test results. This is useful when a test has many failures and you only need a sample for debugging. It does not affect whether the test passes or fails — even one failure still causes the test to fail."
    },
    {
      id: 41,
      type: "single",
      difficulty: 2,
      question: "How do you apply a test to all models in a directory using dbt_project.yml?",
      options: [
        "Use the tests config under the model path configuration with +tests syntax",
        "Create a _tests.yml file in that directory with a wildcard model selector",
        "Run dbt test --select models/directory_name/ to apply default tests",
        "Define a macro that iterates over all models in the directory and tests them"
      ],
      correct: [0],
      concept: "In dbt_project.yml, you can configure tests for all models in a directory path using the nested config syntax. For example, under models > your_project > staging, you can set +tests to apply tests like not_null or unique to all models in that path. This leverages dbt\'s config inheritance."
    },
    {
      id: 42,
      type: "single",
      difficulty: 2,
      question: "What happens when the accepted_values test encounters a NULL value in the tested column?",
      options: [
        "NULL values are ignored by default and do not cause the test to fail",
        "NULL values are treated as failures unless NULL is in the values list",
        "The test automatically adds a not_null check before running accepted_values",
        "NULL values cause the test to error with an unexpected data type message"
      ],
      correct: [0],
      concept: "By default, the accepted_values test ignores NULL values — it only checks non-null values against the accepted list. If you need to also ensure no NULLs exist, you should add a separate not_null test on the same column. This is a common gotcha in dbt testing."
    },
    {
      id: 43,
      type: "single",
      difficulty: 2,
      question: "You need to test that a combination of two columns (first_name, last_name) is unique. Which approach is correct?",
      options: [
        "Use the dbt_utils.unique_combination_of_columns test at the model level",
        "Apply the unique test to both first_name and last_name columns separately",
        "Create a concatenated column in the model and apply unique to it",
        "Use the relationships test between first_name and last_name columns"
      ],
      correct: [0],
      concept: "The dbt_utils package provides the \"unique_combination_of_columns\" test which checks that the combination of specified columns is unique across all rows. This is applied at the model level (not column level) and accepts a list of column names as a parameter. Simply testing each column individually for uniqueness would be incorrect."
    },
    {
      id: 44,
      type: "single",
      difficulty: 2,
      question: "What is the exit code when dbt test completes with only warnings (severity: warn) and no errors?",
      options: [
        "Exit code 0 (success)", 
        "Exit code 1 (failure)", 
        "Exit code 2 (warning)", 
        "Exit code -1 (partial failure)"
      ],
      correct: [0],
      concept: "When all test failures have severity \"warn\", dbt test returns exit code 0 (success). Only tests with severity \"error\" cause dbt to return a non-zero exit code. This allows CI/CD pipelines to continue despite known data quality warnings while still blocking on critical errors."
    },
    {
      id: 45,
      type: "single",
      difficulty: 2,
      question: "How can you run only tests of type \"singular\" and exclude schema tests?",
      options: [
        "dbt test --select test_type:singular",
        "dbt test --type singular",
        "dbt test --singular-only",
        "dbt test --select type:singular"
      ],
      correct: [0],
      concept: "The selector \"test_type:singular\" targets only singular tests (SQL files in the tests/ directory), while \"test_type:generic\" targets schema-defined generic tests. This allows you to selectively run only one category of tests when needed."
    },
    {
      id: 46,
      type: "single",
      difficulty: 2,
      question: "A model has both schema tests in YAML and a singular test SQL file. When you run \"dbt test --select my_model\", which tests execute?",
      options: [
        "Both the schema tests and the singular test that references the model",
        "Only the schema tests defined in the YAML for that model",
        "Only the singular test SQL file that references the model",
        "Neither — you must specify test type along with the model name"
      ],
      correct: [0],
      concept: "When you select a model for testing with --select, dbt runs ALL tests associated with that model, including both generic/schema tests defined in YAML and any singular tests that reference the model using the ref() function. dbt determines singular test associations by parsing ref() calls in the SQL."
    },
    {
      id: 47,
      type: "single",
      difficulty: 2,
      question: "What is the \"error_if\" config on a dbt test used for?",
      options: [
        "To set a threshold for number of failures before the test errors (e.g., \">10\")",
        "To define the condition under which the test SQL should be executed",
        "To specify the error message displayed when the test fails in logs",
        "To conditionally apply the test only if an environment variable is set"
      ],
      correct: [0],
      concept: "The \"error_if\" config sets a threshold for the number of failures that triggers an error. For example, error_if: \">10\" means the test only errors if more than 10 rows fail. Combined with \"warn_if\", this allows graduated severity: warn for a few failures, error for many."
    },
    {
      id: 48,
      type: "single",
      difficulty: 2,
      question: "What does the \"warn_if\" config do on a dbt test?",
      options: [
        "Sets a threshold for number of failures before the test warns (e.g., \">0\")",
        "Determines whether warnings are displayed in the console output",
        "Converts error-level tests to warning level during development mode",
        "Specifies the warning message text shown when the test fails"
      ],
      correct: [0],
      concept: "The \"warn_if\" config sets a threshold for the number of failures that triggers a warning. When used with \"error_if\", you can create nuanced test behavior: for example, warn_if: \">0\" and error_if: \">100\" means warn for any failures but only error if more than 100 rows fail."
    },
    {
      id: 49,
      type: "single",
      difficulty: 2,
      question: "In a custom generic test macro, what does the {{ model }} argument represent?",
      options: [
        "A relation object that can be used in FROM clauses to reference the model table",
        "A string containing the SQL code of the model being tested",
        "A dictionary of all columns and their data types in the model",
        "The YAML configuration block associated with the model definition"
      ],
      correct: [0],
      concept: "In a custom generic test macro, {{ model }} is a Relation object that represents the database table/view of the model being tested. It can be used directly in FROM clauses of the test SQL query, like: SELECT * FROM {{ model }} WHERE {{ column_name }} < 0."
    },
    {
      id: 50,
      type: "single",
      difficulty: 2,
      question: "How do you apply the store_failures config to all tests in a dbt project?",
      options: [
        "Set tests: +store_failures: true in dbt_project.yml",
        "Add store_failures: true to the profile configuration",
        "Set a global environment variable DBT_STORE_FAILURES=true",
        "Add --store-failures flag every time you run dbt test"
      ],
      correct: [0],
      concept: "To enable store_failures globally, you set it in dbt_project.yml under the tests configuration: tests: { +store_failures: true }. This applies the config to all tests in the project. It can also be overridden at the individual test level in YAML schema files."
    },
    {
      id: 51,
      type: "single",
      difficulty: 2,
      question: "What SQL pattern does the built-in unique test generate when compiled?",
      options: [
        "SELECT column FROM model GROUP BY column HAVING count(*) > 1",
        "SELECT DISTINCT column FROM model WHERE column IS NOT UNIQUE",
        "SELECT count(*) FROM model WHERE column IN (SELECT DUPLICATE column FROM model)",
        "SELECT column, row_number() OVER (PARTITION BY column) FROM model WHERE rn > 1"
      ],
      correct: [0],
      concept: "The unique test compiles to a SQL query that groups by the tested column and checks for any groups with more than one row: SELECT column FROM model GROUP BY column HAVING count(*) > 1. Any results returned indicate duplicate values, causing the test to fail."
    },
    {
      id: 52,
      type: "single",
      difficulty: 2,
      question: "Which dbt command runs both models and their associated tests in dependency order?",
      options: ["dbt build", "dbt run --test", "dbt test --run", "dbt deploy"],
      correct: [0],
      concept: "The \"dbt build\" command runs models, tests, snapshots, and seeds in DAG order. It executes each model\'s tests immediately after the model is built, so if a test fails, downstream models are skipped. This provides a safer deployment workflow compared to running \"dbt run\" and \"dbt test\" separately."
    },
    {
      id: 53,
      type: "single",
      difficulty: 2,
      question: "A singular test references two models using ref(). The test will be run when either model is selected. How does dbt determine this association?",
      options: [
        "dbt parses the ref() calls in the singular test SQL to determine model associations",
        "You must manually configure the association in the dbt_project.yml file",
        "Singular tests are associated only with the first ref() call found in the SQL",
        "dbt runs all singular tests regardless of model selection criteria specified"
      ],
      correct: [0],
      concept: "dbt automatically parses ref() calls in singular test SQL files to determine which models the test is associated with. If a singular test references multiple models, selecting any of those models with --select will include that test in the run. This is how dbt builds the test dependency graph."
    },
    {
      id: 54,
      type: "single",
      difficulty: 2,
      question: "You want to test that a \"revenue\" column contains only positive values. Which approach using built-in tests is most appropriate?",
      options: [
        "Write a custom generic test or singular test since no built-in test checks value ranges",
        "Use accepted_values with all possible positive numbers listed",
        "Use not_null since positive values cannot be null by definition",
        "Use unique since each positive revenue value should occur only once"
      ],
      correct: [0],
      concept: "dbt\'s four built-in generic tests (unique, not_null, accepted_values, relationships) do not include range or value comparison checks. To test that values are positive, you need either a custom generic test (e.g., test_is_positive) or a singular test with SQL like: SELECT * FROM {{ ref(\"model\") }} WHERE revenue <= 0."
    },
    {
      id: 55,
      type: "single",
      difficulty: 2,
      question: "What is the purpose of the \"tags\" config on dbt tests?",
      options: [
        "To group tests so they can be selectively run using --select tag:tag_name",
        "To add metadata labels that appear in the dbt documentation site",
        "To prioritize test execution order within the dbt test run",
        "To categorize tests for reporting in the dbt Cloud dashboard only"
      ],
      correct: [0],
      concept: "Tags on tests allow you to group and selectively run tests. For example, tagging tests as \"nightly\" or \"critical\" lets you run subsets with \"dbt test --select tag:critical\". Tags can be applied at the test level in YAML or globally via dbt_project.yml configuration."
    },
    {
      id: 56,
      type: "single",
      difficulty: 2,
      question: "What happens when you apply both \"unique\" and \"not_null\" tests to the same column?",
      options: [
        "Both tests run independently and both must pass for the column to be considered valid",
        "dbt automatically merges them into a single combined uniqueness check",
        "The not_null test is skipped because unique already implies not null",
        "dbt raises a configuration error for having conflicting test types"
      ],
      correct: [0],
      concept: "The unique and not_null tests are completely independent in dbt. The unique test checks for duplicates but ignores NULLs, while not_null checks for NULL values. Applying both ensures the column has no NULLs AND no duplicates — a common pattern for primary key columns."
    },
    {
      id: 57,
      type: "single",
      difficulty: 2,
      question: "How does the unique test handle NULL values by default?",
      options: [
        "NULL values are ignored and multiple NULLs do not cause a uniqueness failure",
        "NULL values are treated as a single distinct value for uniqueness checking",
        "Multiple NULL values cause the unique test to fail with a duplicate error",
        "The unique test raises an error if any NULL values are present in the column"
      ],
      correct: [0],
      concept: "The built-in unique test typically ignores NULL values because it uses GROUP BY, and NULL handling in GROUP BY varies by database. In most databases, NULLs are grouped together as a single group. To ensure true primary key behavior, combine unique with not_null."
    },
    {
      id: 58,
      type: "single",
      difficulty: 2,
      question: "What is the recommended location for custom generic test macros starting from dbt v1.0+?",
      options: [
        "tests/generic/ directory", 
        "macros/tests/ directory only", 
        "models/tests/ directory", 
        "analysis/generic/ directory"
      ],
      correct: [0],
      concept: "Starting from dbt v1.0, the recommended location for custom generic test macros is the tests/generic/ directory. While they can still be defined in the macros/ directory, the tests/generic/ location provides better project organization and makes it clear these are test definitions."
    },
    {
      id: 59,
      type: "single",
      difficulty: 2,
      question: "When using store_failures, what is the naming convention for the failure table created in the database?",
      options: [
        "The table is named after the test, typically with a prefix/suffix indicating it stores failures",
        "The table is always named \"test_failures\" with a timestamp suffix appended",
        "The table shares the same name as the model being tested with _failures added",
        "The table name is a UUID generated at runtime to avoid naming conflicts"
      ],
      correct: [0],
      concept: "When store_failures is enabled, dbt creates tables named after the test (e.g., not_null_orders_customer_id) in the test audit schema. The naming convention includes the test type, model name, and column name to uniquely identify each failure table."
    },
    {
      id: 60,
      type: "single",
      difficulty: 2,
      question: "How do you run tests for all models that are children (downstream) of a specific model?",
      options: [
        "dbt test --select my_model+",
        "dbt test --select +my_model",
        "dbt test --select my_model --downstream",
        "dbt test --children my_model"
      ],
      correct: [0],
      concept: "The \"+\" suffix selector runs tests for the specified model and all its downstream children. \"dbt test --select my_model+\" tests my_model and every model that depends on it. Conversely, \"+my_model\" (prefix) would test the model and all its upstream parents."
    },
    {
      id: 61,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are built-in generic tests provided by dbt? (Select all that apply)",
      options: ["unique", "accepted_values", "row_count", "relationships"],
      correct: [0, 1, 3],
      concept: "dbt provides exactly four built-in generic tests: unique, not_null, accepted_values, and relationships. \"row_count\" is NOT a built-in test — it would need to be implemented as a custom test or obtained from a package like dbt-utils or dbt-expectations."
    },
    {
      id: 62,
      type: "multi",
      difficulty: 2,
      question: "Which of the following configs can be applied to a dbt test? (Select all that apply)",
      options: ["severity", "where", "tags", "materialized"],
      correct: [0, 1, 2],
      concept: "Tests support configs including \"severity\" (warn/error), \"where\" (filter rows), \"tags\" (grouping/selection), \"store_failures\", \"limit\", \"error_if\", and \"warn_if\". The \"materialized\" config applies to models not tests — tests always run as queries that check for failures."
    },
    {
      id: 63,
      type: "multi",
      difficulty: 2,
      question: "Which parameters are required when configuring a relationships test? (Select all that apply)",
      options: ["to (the referenced model)", "field (the column in the referenced model)", "type (the join type to use)", "severity (warn or error level)"],
      correct: [0, 1],
      concept: "The relationships test requires two parameters: \"to\" (specifying the referenced model using ref()) and \"field\" (specifying the column in the referenced model to check against). The join type and severity are not required — the test performs a LEFT JOIN by default and uses \"error\" severity."
    },
    {
      id: 64,
      type: "multi",
      difficulty: 2,
      question: "Which are valid test severity configurations in dbt? (Select all that apply)",
      options: ["severity: \"warn\"", "severity: \"error\"", "severity: \"critical\"", "severity: \"info\""],
      correct: [0, 1],
      concept: "dbt tests support exactly two severity levels: \"warn\" and \"error\". There is no \"critical\" or \"info\" severity level. The default severity is \"error\", which causes dbt test to return a non-zero exit code on failure."
    },
    {
      id: 65,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are data quality dimensions that dbt tests can address? (Select all that apply)",
      options: ["Completeness (no missing values)", "Uniqueness (no duplicate values)", "Validity (values within expected set)", "Latency (query response time)"],
      correct: [0, 1, 2],
      concept: "dbt tests address multiple data quality dimensions: completeness (not_null tests), uniqueness (unique tests), validity (accepted_values tests), and consistency (relationships tests). Query response time/latency is a performance metric, not a data quality dimension that dbt tests address."
    },
    {
      id: 66,
      type: "multi",
      difficulty: 2,
      question: "Which of the following can cause a relationships test to fail? (Select all that apply)",
      options: [
        "A value in the child column does not exist in the parent column",
        "The parent model has been dropped from the database",
        "The child column contains more rows than the parent column",
        "A non-null child value has no matching parent record"
      ],
      correct: [0, 1, 3],
      concept: "A relationships test fails when any non-null value in the child column cannot be found in the parent column. This can happen because: the value doesn\'t exist in the parent, or the parent table is missing. Having more rows in the child than parent is fine — it\'s a many-to-one relationship pattern. NULL values in the child are ignored."
    },
    {
      id: 67,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are valid selectors for running specific tests? (Select all that apply)",
      options: [
        "dbt test --select test_type:singular",
        "dbt test --select tag:critical",
        "dbt test --select source:raw_data",
        "dbt test --select severity:warn"
      ],
      correct: [0, 1, 2],
      concept: "Valid test selectors include test_type (singular/generic), tag (user-defined tags), and source (source name). There is no built-in \"severity\" selector for running tests — severity is a configuration applied to tests, not a selection criterion for the --select flag."
    },
    {
      id: 68,
      type: "multi",
      difficulty: 2,
      question: "Which approaches can be used to test that a numeric column is within a valid range? (Select all that apply)",
      options: [
        "Write a singular test with SQL checking the range condition",
        "Create a custom generic test macro that validates the range",
        "Use dbt_expectations.expect_column_values_to_be_between",
        "Use the built-in accepted_values test with numeric range syntax"
      ],
      correct: [0, 1, 2],
      concept: "Range validation can be done via: singular tests (SQL with WHERE col < min OR col > max), custom generic tests (reusable macro accepting min/max parameters), or the dbt_expectations package which provides expect_column_values_to_be_between. The built-in accepted_values test only checks against a discrete list, not ranges."
    },
    {
      id: 69,
      type: "multi",
      difficulty: 3,
      question: "Which of the following are valid configurations for the accepted_values test? (Select all that apply)",
      options: [
        "values: [\"a\", \"b\", \"c\"]",
        "quote: true",
        "where: \"status IS NOT NULL\"",
        "case_sensitive: false"
      ],
      correct: [0, 1, 2],
      concept: "The accepted_values test supports \"values\" (required list of acceptable values), \"quote\" (whether to quote values in SQL), and \"where\" (filter condition inherited from base test config). There is no built-in \"case_sensitive\" configuration — case sensitivity depends on the database collation settings."
    },
    {
      id: 70,
      type: "multi",
      difficulty: 3,
      question: "Which of the following are benefits of using store_failures in dbt? (Select all that apply)",
      options: [
        "Failed rows are persisted in the database for debugging and auditing",
        "Teams can query failure tables to understand the nature of data issues",
        "Test failures are automatically fixed when store_failures is enabled",
        "Historical failure data enables trend analysis of data quality over time"
      ],
      correct: [0, 1, 3],
      concept: "store_failures persists failing test rows into database tables, enabling: debugging (query the exact rows that failed), auditing (maintain records of data quality issues), and trend analysis (compare failures across runs). It does NOT automatically fix failures — it only stores the failing records for investigation."
    },
    {
      id: 71,
      type: "multi",
      difficulty: 3,
      question: "Which of the following correctly describe how dbt handles test dependencies in the DAG? (Select all that apply)",
      options: [
        "Tests depend on the model they are testing and run after the model is built",
        "In dbt build, a failing test blocks downstream models from running",
        "Tests can depend on multiple models if they reference multiple refs",
        "Tests always run in alphabetical order regardless of model dependencies"
      ],
      correct: [0, 1, 2],
      concept: "dbt tests are nodes in the DAG that depend on their associated models. In \"dbt build\", tests run after their model is built, and failures block downstream execution. Tests can depend on multiple models (e.g., a singular test using two ref() calls). Tests do NOT run alphabetically — they follow DAG order."
    },
    {
      id: 72,
      type: "multi",
      difficulty: 3,
      question: "Which of the following are true about custom generic test macros? (Select all that apply)",
      options: [
        "They must return a SQL query whose results represent test failures",
        "They receive model and column_name as standard parameters",
        "They can accept additional custom parameters defined in the YAML config",
        "They must be defined in a Python file with a .py extension"
      ],
      correct: [0, 1, 2],
      concept: "Custom generic test macros: return SQL that yields failing rows (zero rows = pass), receive \"model\" and \"column_name\" as standard params, and can accept custom keyword arguments from YAML. They are defined as Jinja/SQL macros in .sql files, NOT Python .py files."
    },
    {
      id: 73,
      type: "multi",
      difficulty: 3,
      question: "Which of the following practices align with test-driven development (TDD) in dbt? (Select all that apply)",
      options: [
        "Define expected data contracts and tests before writing model SQL",
        "Use schema tests to document expected column behaviors upfront",
        "Write tests only after production incidents reveal data issues",
        "Iterate on model SQL until all pre-defined tests pass successfully"
      ],
      correct: [0, 1, 3],
      concept: "TDD in dbt involves: defining data contracts first (expected column types, uniqueness, relationships), writing tests before model SQL, and iterating until tests pass. Writing tests only after incidents is reactive, not TDD — TDD is proactive by design."
    },
    {
      id: 74,
      type: "multi",
      difficulty: 3,
      question: "Which of the following are features provided by the elementary dbt package? (Select all that apply)",
      options: [
        "Anomaly detection on data metrics like row count and column values",
        "Automated schema change monitoring and alerting capabilities",
        "Built-in replacement for dbt\'s native unique and not_null tests",
        "Data observability dashboard for visualizing test results history"
      ],
      correct: [0, 1, 3],
      concept: "The elementary package provides: anomaly detection (monitors data metrics for unexpected changes), schema change monitoring (alerts on column additions/removals), and an observability dashboard (visualizes test results over time). It does not replace dbt\'s built-in tests — it supplements them with additional monitoring capabilities."
    },
    {
      id: 75,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are valid ways to configure test severity in dbt? (Select all that apply)",
      options: [
        "In the test definition within a YAML schema file",
        "Globally in dbt_project.yml under the tests config",
        "Using the --severity flag on the dbt test command",
        "At the individual test level using the config property"
      ],
      correct: [0, 1, 3],
      concept: "Test severity can be configured: in YAML schema files (per-test), in dbt_project.yml (globally or per-path), or using the config property on individual tests. There is no --severity CLI flag for the dbt test command."
    },
    {
      id: 76,
      type: "multi",
      difficulty: 3,
      question: "Which of the following describe valid use cases for the \"where\" config on tests? (Select all that apply)",
      options: [
        "Excluding soft-deleted records from test evaluation",
        "Testing only recent data within a specific date range",
        "Filtering to test only a specific business unit\'s data",
        "Changing the database schema where the test query runs"
      ],
      correct: [0, 1, 2],
      concept: "The \"where\" config adds a WHERE clause to filter which rows the test evaluates. Valid uses include: excluding deleted records (WHERE is_deleted = false), filtering by date (WHERE date >= \'2024-01-01\'), and scoping to specific data partitions (WHERE business_unit = \'US\'). It does NOT change the database schema — that\'s controlled by target configuration."
    },
    {
      id: 77,
      type: "multi",
      difficulty: 3,
      question: "Which of the following are challenges when testing incremental models in dbt? (Select all that apply)",
      options: [
        "Late-arriving data may introduce duplicates that tests need to catch",
        "Full table scans by tests may be expensive on large incremental tables",
        "Tests defined on incremental models are completely ignored by dbt test",
        "The unique test may need the where config to scope to recent partitions"
      ],
      correct: [0, 1, 3],
      concept: "Incremental model testing challenges include: late-arriving data causing duplicates across batches, performance concerns from scanning large tables (use \"where\" to limit scope), and needing scoped uniqueness checks. Tests are NOT ignored on incremental models — they work the same as on other materializations."
    },
    {
      id: 78,
      type: "multi",
      difficulty: 3,
      question: "Which of the following are correct about the \"error_if\" and \"warn_if\" test configs? (Select all that apply)",
      options: [
        "They accept comparison expressions like \">10\" or \"!=0\"",
        "They compare against the count of rows returned by the test query",
        "error_if defaults to \"!=0\" meaning any failure triggers an error",
        "warn_if and error_if cannot be used together on the same test"
      ],
      correct: [0, 1, 2],
      concept: "error_if and warn_if accept comparison expressions (e.g., \">10\", \"!=0\") that compare against the failure row count. The default error_if is \"!=0\" (any failure = error). They CAN be used together — for example, warn_if: \">0\" and error_if: \">100\" creates graduated severity."
    },
    {
      id: 79,
      type: "multi",
      difficulty: 3,
      question: "Which of the following are valid approaches to test source freshness in dbt? (Select all that apply)",
      options: [
        "Configure loaded_at_field and freshness thresholds in sources YAML",
        "Run dbt source freshness to check configured freshness thresholds",
        "Use the not_null test on timestamp columns to ensure freshness",
        "Define warn_after and error_after with count and period values"
      ],
      correct: [0, 1, 3],
      concept: "Source freshness testing involves: defining loaded_at_field (timestamp column), setting freshness thresholds with warn_after and error_after (e.g., {count: 12, period: hour}), and running \"dbt source freshness\". The not_null test checks for NULL values, not data freshness — these are different concepts."
    },
    {
      id: 80,
      type: "multi",
      difficulty: 3,
      question: "Which of the following are true about how dbt compiles the not_null test? (Select all that apply)",
      options: [
        "It generates SQL that counts rows where the column IS NULL",
        "The test passes when the count of NULL values equals zero",
        "It modifies the database schema to add a NOT NULL constraint",
        "The where config adds a filter to the generated NULL check query"
      ],
      correct: [0, 1, 3],
      concept: "The not_null test compiles to SQL like: SELECT * FROM model WHERE column IS NULL. It passes when zero rows are returned (no NULLs found). The \"where\" config adds an additional filter. Importantly, it does NOT modify the database schema — it only queries and reports; constraints are not enforced."
    },
    {
      id: 81,
      type: "multi",
      difficulty: 3,
      question: "Which of the following are true about the accepted_values test with the quote option? (Select all that apply)",
      options: [
        "Setting quote: true wraps each value in single quotes in the generated SQL",
        "The quote option is useful when values contain special characters",
        "The quote option defaults to true for string-type column values",
        "Without quote, values are inserted into SQL without any quoting"
      ],
      correct: [0, 1, 2],
      concept: "The quote option in accepted_values controls SQL quoting of the provided values. When true (the default for string comparisons), values are wrapped in quotes. This is important for values with special characters. Without quote (set to false), values are unquoted — useful for numeric or boolean comparisons."
    },
    {
      id: 82,
      type: "multi",
      difficulty: 3,
      question: "Which of the following are valid dbt test selection syntaxes? (Select all that apply)",
      options: [
        "dbt test --select +my_model (model and its upstream parents)",
        "dbt test --select my_model+ (model and its downstream children)",
        "dbt test --exclude tag:slow (exclude tests tagged as slow)",
        "dbt test --select @my_model (model, parents, and children)"
      ],
      correct: [0, 1, 2],
      concept: "Valid selectors include: +model (upstream parents), model+ (downstream children), --exclude with tags, and @model (the model plus both parents and children in graph). All four of these are valid dbt selection syntaxes for test runs."
    },
    {
      id: 83,
      type: "multi",
      difficulty: 3,
      question: "Which of the following describe Great Expectations integration with dbt? (Select all that apply)",
      options: [
        "The dbt-expectations package provides GE-style test macros for YAML",
        "Tests like expect_column_values_to_not_be_null mirror GE expectations",
        "Great Expectations replaces dbt\'s test execution engine entirely",
        "expect_column_values_to_be_between validates numeric ranges in dbt"
      ],
      correct: [0, 1, 3],
      concept: "The dbt-expectations package brings Great Expectations-style tests into dbt as generic test macros. Tests like expect_column_values_to_not_be_null and expect_column_values_to_be_between are available in YAML schema files. GE does NOT replace dbt\'s test engine — the package works within dbt\'s native testing framework."
    },
    {
      id: 84,
      type: "multi",
      difficulty: 3,
      question: "Which of the following are best practices for dbt test configuration in production? (Select all that apply)",
      options: [
        "Apply unique and not_null tests to all primary key columns",
        "Use severity: warn for non-critical tests to avoid blocking pipelines",
        "Disable all tests in production to improve pipeline performance",
        "Use store_failures to enable debugging of data quality issues"
      ],
      correct: [0, 1, 3],
      concept: "Production testing best practices include: testing all primary keys with unique + not_null, using warn severity for non-critical checks, and enabling store_failures for debugging. Disabling tests in production is an anti-pattern — tests are crucial for catching data quality issues before they affect downstream consumers."
    },
    {
      id: 85,
      type: "multi",
      difficulty: 3,
      question: "Which of the following are true about singular tests vs generic tests? (Select all that apply)",
      options: [
        "Singular tests are SQL files that return failing rows as their result set",
        "Generic tests are reusable across models via YAML configuration files",
        "Singular tests cannot reference models using the ref() function",
        "Generic tests can accept custom parameters beyond model and column_name"
      ],
      correct: [0, 1, 3],
      concept: "Singular tests are standalone SQL files returning failing rows, while generic tests are reusable macros applied via YAML. Singular tests CAN and SHOULD use ref() to reference models — this is how dbt determines test-model associations. Generic tests accept custom parameters through their YAML configuration."
    },
    {
      id: 86,
      type: "tf",
      difficulty: 3,
      question: "The dbt unique test will fail if a column contains multiple NULL values.",
      options: [
        "False — the unique test ignores NULL values by default and multiple NULLs do not cause failure",
        "True — the unique test treats each NULL as a distinct value and flags duplicates"
      ],
      correct: [0],
      concept: "The unique test typically ignores NULL values because of how SQL GROUP BY handles NULLs. Multiple NULL values do not cause a uniqueness failure. To ensure no NULLs exist, a separate not_null test should be added alongside the unique test."
    },
    {
      id: 87,
      type: "tf",
      difficulty: 3,
      question: "A singular test SQL file should return zero rows to indicate that the test has failed.",
      options: [
        "False — zero rows means the test passed; returning rows indicates failure",
        "True — zero rows signals a failure condition to the dbt test runner"
      ],
      correct: [0],
      concept: "In dbt singular tests, the SQL returns rows representing failures/violations. Zero rows means no problems were found (test passes). One or more rows means violations exist (test fails). This is the opposite of what some might expect — the query finds bad data, and finding none is good."
    },
    {
      id: 88,
      type: "tf",
      difficulty: 3,
      question: "The accepted_values test will fail if a NULL value is found in the tested column.",
      options: [
        "False — accepted_values ignores NULL values by default and only checks non-null values",
        "True — NULL is not in the accepted values list so it causes a failure"
      ],
      correct: [0],
      concept: "The accepted_values test filters out NULL values before checking against the values list. NULLs are silently ignored. If you need to ensure no NULLs exist, you must add a separate not_null test. This is a common source of confusion in dbt testing."
    },
    {
      id: 89,
      type: "tf",
      difficulty: 3,
      question: "Custom generic tests in dbt must be written in Python and placed in the macros/ directory.",
      options: [
        "False — custom generic tests are written as Jinja SQL macros in .sql files not Python",
        "True — Python is required for custom generic tests to enable complex logic"
      ],
      correct: [0],
      concept: "Custom generic tests are written as Jinja SQL macros in .sql files, not Python. They can be placed in the macros/ directory or in tests/generic/ (recommended in dbt v1.0+). The macro returns a SQL query that dbt executes to check for failures."
    },
    {
      id: 90,
      type: "tf",
      difficulty: 3,
      question: "The store_failures config causes dbt to automatically fix failing test records in the source data.",
      options: [
        "False — store_failures only saves failing rows to a database table for inspection, it does not fix data",
        "True — store_failures identifies and automatically corrects data quality issues in the source"
      ],
      correct: [0],
      concept: "store_failures does NOT fix data — it only persists the rows that failed the test into a separate database table (in the _dbt_test__audit schema) for debugging and auditing purposes. Data remediation must be done manually or through separate data quality processes."
    },
    {
      id: 91,
      type: "tf",
      difficulty: 3,
      question: "When a test has severity set to \"warn\", it causes dbt test to return a non-zero exit code upon failure.",
      options: [
        "False — warn severity failures return exit code 0; only error severity causes non-zero exit codes",
        "True — any test failure regardless of severity causes a non-zero exit code"
      ],
      correct: [0],
      concept: "Tests with severity \"warn\" report warnings but do NOT cause dbt test to return a non-zero exit code. Only \"error\" severity (the default) causes exit code 1 on failure. This distinction is critical for CI/CD pipelines where you want warnings to be informational without blocking deployments."
    },
    {
      id: 92,
      type: "tf",
      difficulty: 3,
      question: "The \"dbt build\" command runs model tests immediately after each model is built, blocking downstream models on test failure.",
      options: [
        "True — dbt build executes tests in DAG order right after each model and blocks downstream on failures",
        "False — dbt build runs all models first then runs all tests as a separate phase"
      ],
      correct: [0],
      concept: "The \"dbt build\" command interleaves model execution and testing in DAG order. After each model is built, its tests run immediately. If a test fails, downstream models that depend on the failing model are skipped. This provides safer deployments compared to separate dbt run + dbt test."
    },
    {
      id: 93,
      type: "tf",
      difficulty: 3,
      question: "The relationships test in dbt physically creates foreign key constraints in the database.",
      options: [
        "False — the relationships test only validates referential integrity via queries without creating database constraints",
        "True — dbt creates foreign key constraints in the database when the relationships test is defined"
      ],
      correct: [0],
      concept: "The relationships test does NOT create physical foreign key constraints in the database. It simply runs a query to check that every value in the child column exists in the parent column. Many cloud data warehouses (like BigQuery, Snowflake) don\'t enforce foreign key constraints anyway — dbt\'s approach is query-based validation."
    },
    {
      id: 94,
      type: "tf",
      difficulty: 3,
      question: "You can apply the \"where\" config to built-in generic tests like unique and not_null to filter which rows are tested.",
      options: [
        "True — the where config works on all generic tests including built-in ones to add a WHERE clause",
        "False — the where config only works on custom generic tests, not dbt built-in tests"
      ],
      correct: [0],
      concept: "The \"where\" config is a universal test configuration that works on ALL generic tests, including the four built-in ones (unique, not_null, accepted_values, relationships). It adds a WHERE clause to the generated test SQL, filtering which rows are evaluated by the test."
    },
    {
      id: 95,
      type: "tf",
      difficulty: 3,
      question: "Source freshness checks are executed using the \"dbt test\" command along with schema tests.",
      options: [
        "False — source freshness checks require the separate \"dbt source freshness\" command",
        "True — dbt test automatically includes source freshness checks when configured"
      ],
      correct: [0],
      concept: "Source freshness checks are NOT part of \"dbt test\" — they require the separate \"dbt source freshness\" command. While schema tests on sources run with \"dbt test\", freshness checks (which compare loaded_at timestamps against thresholds) are a distinct operation with their own command."
    },
    {
      id: 96,
      type: "tf",
      difficulty: 3,
      question: "In dbt, a custom generic test macro named \"test_is_even\" would be referenced in YAML schema files as \"is_even\".",
      options: [
        "True — dbt strips the test_ prefix when referencing custom generic tests in YAML files",
        "False — you must use the full macro name test_is_even when referencing it in YAML"
      ],
      correct: [0],
      concept: "When referencing custom generic tests in YAML, you use the name WITHOUT the \"test_\" prefix. The macro is defined as \"test_is_even\" but referenced as just \"is_even\" in the tests list. dbt automatically prepends \"test_\" when looking up the macro to execute."
    },
    {
      id: 97,
      type: "tf",
      difficulty: 3,
      question: "The dbt-expectations package requires a separate Python runtime to execute Great Expectations tests within dbt.",
      options: [
        "False — dbt-expectations implements tests as native dbt Jinja macros requiring no separate Python runtime",
        "True — dbt-expectations wraps the Python Great Expectations library and requires Python installed"
      ],
      correct: [0],
      concept: "The dbt-expectations package is a pure dbt package that implements Great Expectations-style tests as Jinja SQL macros. It does NOT require the Python Great Expectations library or a separate Python runtime. The tests are compiled to SQL and executed natively by dbt."
    },
    {
      id: 98,
      type: "tf",
      difficulty: 3,
      question: "Using \"dbt test --select test_type:generic\" runs only the generic/schema tests and excludes all singular tests.",
      options: [
        "True — the test_type:generic selector targets only generic tests defined in YAML schema files",
        "False — test_type:generic runs both generic and singular tests from YAML schema files"
      ],
      correct: [0],
      concept: "The test_type selector allows filtering tests by type. \"test_type:generic\" runs only generic tests (those defined in YAML schema files), while \"test_type:singular\" runs only singular tests (SQL files in the tests/ directory). This provides fine-grained control over which test category to execute."
    },
    {
      id: 99,
      type: "tf",
      difficulty: 3,
      question: "The elementary dbt package can detect anomalies by comparing current data metrics against historical baselines.",
      options: [
        "True — elementary monitors metrics like row count and column statistics against historical patterns to detect anomalies",
        "False — elementary only provides dashboards and cannot perform automated anomaly detection"
      ],
      correct: [0],
      concept: "The elementary package includes anomaly detection capabilities. It monitors data metrics (row counts, null ratios, column statistics) and compares them against historical baselines. When metrics deviate significantly from expected patterns, it flags anomalies, providing proactive data observability."
    },
    {
      id: 100,
      type: "tf",
      difficulty: 3,
      question: "Applying both unique and not_null tests to a column is redundant because the unique test already ensures no NULL values exist.",
      options: [
        "False — the unique test ignores NULLs so not_null is needed separately to ensure completeness",
        "True — the unique test implicitly checks for NULLs since NULL cannot be a unique value"
      ],
      correct: [0],
      concept: "The unique test does NOT check for NULLs — it only checks for duplicate non-null values. Multiple NULLs can exist without failing the unique test. Therefore, applying both unique AND not_null is NOT redundant; both are needed to fully validate a primary key column (no duplicates AND no NULLs)."
    }
  ]
};

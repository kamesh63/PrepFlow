window.QUIZ_DATA = window.QUIZ_DATA || {};
window.QUIZ_DATA["day11"] = {
  title: "Data Warehouse Architecture",
  topics: ["Star Schema", "Snowflake Schema", "Fact & Dimension Tables", "SCD Types", "Kimball vs Inmon"],
  questions: [
    {
      id: 1,
      type: "single",
      difficulty: 1,
      question: "A dimensional modeling standard requires implementing `Star Schema` to track historical variations. The architecture uses SCD Type 2. What is the impact of executing a bulk dimension upsert if the active indicator column utilizes NULL instead of an end-date placeholder like \'9999-12-31\'?",
      options: ["Query filtering on current records requires checking `IS NULL` which defeats B-Tree indexes         ", "SCD Type 2 records must possess unique integer IDs which cannot coexist with nullable date fields   ", "Null values cause the upsert mechanism to default to Type 1, overriding existing history tables     ", "The database engine throws constraint validation errors on composite keys containing NULL indicators"],
      correct: [0],
      concept: "Using NULL for active indicators in SCD Type 2 makes queries check WHERE end_date IS NULL. In standard B-Tree indexing, NULL entries are either excluded or grouped together, causing poor index performance on large datasets. Using a high dummy date like \'9999-12-31\' allows standard range scans."
    },
    {
      id: 2,
      type: "single",
      difficulty: 1,
      question: "A dimensional modeling standard requires implementing `Snowflake Schema` to track historical variations. The architecture uses SCD Type 2. What is the impact of executing a bulk dimension upsert if the active indicator column utilizes NULL instead of an end-date placeholder like \'9999-12-31\'?",
      options: ["Query filtering on current records requires checking `IS NULL` which defeats B-Tree indexes         ", "SCD Type 2 records must possess unique integer IDs which cannot coexist with nullable date fields   ", "Null values cause the upsert mechanism to default to Type 1, overriding existing history tables     ", "The database engine throws constraint validation errors on composite keys containing NULL indicators"],
      correct: [0],
      concept: "Using NULL for active indicators in SCD Type 2 makes queries check WHERE end_date IS NULL. In standard B-Tree indexing, NULL entries are either excluded or grouped together, causing poor index performance on large datasets. Using a high dummy date like \'9999-12-31\' allows standard range scans."
    },
    {
      id: 3,
      type: "single",
      difficulty: 1,
      question: "A dimensional modeling standard requires implementing `Fact & Dimension Tables` to track historical variations. The architecture uses SCD Type 2. What is the impact of executing a bulk dimension upsert if the active indicator column utilizes NULL instead of an end-date placeholder like \'9999-12-31\'?",
      options: ["Query filtering on current records requires checking `IS NULL` which defeats B-Tree indexes         ", "SCD Type 2 records must possess unique integer IDs which cannot coexist with nullable date fields   ", "Null values cause the upsert mechanism to default to Type 1, overriding existing history tables     ", "The database engine throws constraint validation errors on composite keys containing NULL indicators"],
      correct: [0],
      concept: "Using NULL for active indicators in SCD Type 2 makes queries check WHERE end_date IS NULL. In standard B-Tree indexing, NULL entries are either excluded or grouped together, causing poor index performance on large datasets. Using a high dummy date like \'9999-12-31\' allows standard range scans."
    },
    {
      id: 4,
      type: "single",
      difficulty: 1,
      question: "A dimensional modeling standard requires implementing `SCD Types` to track historical variations. The architecture uses SCD Type 2. What is the impact of executing a bulk dimension upsert if the active indicator column utilizes NULL instead of an end-date placeholder like \'9999-12-31\'?",
      options: ["Query filtering on current records requires checking `IS NULL` which defeats B-Tree indexes         ", "SCD Type 2 records must possess unique integer IDs which cannot coexist with nullable date fields   ", "Null values cause the upsert mechanism to default to Type 1, overriding existing history tables     ", "The database engine throws constraint validation errors on composite keys containing NULL indicators"],
      correct: [0],
      concept: "Using NULL for active indicators in SCD Type 2 makes queries check WHERE end_date IS NULL. In standard B-Tree indexing, NULL entries are either excluded or grouped together, causing poor index performance on large datasets. Using a high dummy date like \'9999-12-31\' allows standard range scans."
    },
    {
      id: 5,
      type: "single",
      difficulty: 1,
      question: "A dimensional modeling standard requires implementing `Kimball vs Inmon` to track historical variations. The architecture uses SCD Type 2. What is the impact of executing a bulk dimension upsert if the active indicator column utilizes NULL instead of an end-date placeholder like \'9999-12-31\'?",
      options: ["Query filtering on current records requires checking `IS NULL` which defeats B-Tree indexes         ", "SCD Type 2 records must possess unique integer IDs which cannot coexist with nullable date fields   ", "Null values cause the upsert mechanism to default to Type 1, overriding existing history tables     ", "The database engine throws constraint validation errors on composite keys containing NULL indicators"],
      correct: [0],
      concept: "Using NULL for active indicators in SCD Type 2 makes queries check WHERE end_date IS NULL. In standard B-Tree indexing, NULL entries are either excluded or grouped together, causing poor index performance on large datasets. Using a high dummy date like \'9999-12-31\' allows standard range scans."
    },
    {
      id: 6,
      type: "single",
      difficulty: 1,
      question: "A dimensional modeling standard requires implementing `Star Schema` to track historical variations. The architecture uses SCD Type 2. What is the impact of executing a bulk dimension upsert if the active indicator column utilizes NULL instead of an end-date placeholder like \'9999-12-31\'?",
      options: ["Query filtering on current records requires checking `IS NULL` which defeats B-Tree indexes         ", "SCD Type 2 records must possess unique integer IDs which cannot coexist with nullable date fields   ", "Null values cause the upsert mechanism to default to Type 1, overriding existing history tables     ", "The database engine throws constraint validation errors on composite keys containing NULL indicators"],
      correct: [0],
      concept: "Using NULL for active indicators in SCD Type 2 makes queries check WHERE end_date IS NULL. In standard B-Tree indexing, NULL entries are either excluded or grouped together, causing poor index performance on large datasets. Using a high dummy date like \'9999-12-31\' allows standard range scans."
    },
    {
      id: 7,
      type: "single",
      difficulty: 1,
      question: "A dimensional modeling standard requires implementing `Snowflake Schema` to track historical variations. The architecture uses SCD Type 2. What is the impact of executing a bulk dimension upsert if the active indicator column utilizes NULL instead of an end-date placeholder like \'9999-12-31\'?",
      options: ["Query filtering on current records requires checking `IS NULL` which defeats B-Tree indexes         ", "SCD Type 2 records must possess unique integer IDs which cannot coexist with nullable date fields   ", "Null values cause the upsert mechanism to default to Type 1, overriding existing history tables     ", "The database engine throws constraint validation errors on composite keys containing NULL indicators"],
      correct: [0],
      concept: "Using NULL for active indicators in SCD Type 2 makes queries check WHERE end_date IS NULL. In standard B-Tree indexing, NULL entries are either excluded or grouped together, causing poor index performance on large datasets. Using a high dummy date like \'9999-12-31\' allows standard range scans."
    },
    {
      id: 8,
      type: "single",
      difficulty: 1,
      question: "A dimensional modeling standard requires implementing `Fact & Dimension Tables` to track historical variations. The architecture uses SCD Type 2. What is the impact of executing a bulk dimension upsert if the active indicator column utilizes NULL instead of an end-date placeholder like \'9999-12-31\'?",
      options: ["Query filtering on current records requires checking `IS NULL` which defeats B-Tree indexes         ", "SCD Type 2 records must possess unique integer IDs which cannot coexist with nullable date fields   ", "Null values cause the upsert mechanism to default to Type 1, overriding existing history tables     ", "The database engine throws constraint validation errors on composite keys containing NULL indicators"],
      correct: [0],
      concept: "Using NULL for active indicators in SCD Type 2 makes queries check WHERE end_date IS NULL. In standard B-Tree indexing, NULL entries are either excluded or grouped together, causing poor index performance on large datasets. Using a high dummy date like \'9999-12-31\' allows standard range scans."
    },
    {
      id: 9,
      type: "single",
      difficulty: 1,
      question: "A dimensional modeling standard requires implementing `SCD Types` to track historical variations. The architecture uses SCD Type 2. What is the impact of executing a bulk dimension upsert if the active indicator column utilizes NULL instead of an end-date placeholder like \'9999-12-31\'?",
      options: ["Query filtering on current records requires checking `IS NULL` which defeats B-Tree indexes         ", "SCD Type 2 records must possess unique integer IDs which cannot coexist with nullable date fields   ", "Null values cause the upsert mechanism to default to Type 1, overriding existing history tables     ", "The database engine throws constraint validation errors on composite keys containing NULL indicators"],
      correct: [0],
      concept: "Using NULL for active indicators in SCD Type 2 makes queries check WHERE end_date IS NULL. In standard B-Tree indexing, NULL entries are either excluded or grouped together, causing poor index performance on large datasets. Using a high dummy date like \'9999-12-31\' allows standard range scans."
    },
    {
      id: 10,
      type: "single",
      difficulty: 1,
      question: "A dimensional modeling standard requires implementing `Kimball vs Inmon` to track historical variations. The architecture uses SCD Type 2. What is the impact of executing a bulk dimension upsert if the active indicator column utilizes NULL instead of an end-date placeholder like \'9999-12-31\'?",
      options: ["Query filtering on current records requires checking `IS NULL` which defeats B-Tree indexes         ", "SCD Type 2 records must possess unique integer IDs which cannot coexist with nullable date fields   ", "Null values cause the upsert mechanism to default to Type 1, overriding existing history tables     ", "The database engine throws constraint validation errors on composite keys containing NULL indicators"],
      correct: [0],
      concept: "Using NULL for active indicators in SCD Type 2 makes queries check WHERE end_date IS NULL. In standard B-Tree indexing, NULL entries are either excluded or grouped together, causing poor index performance on large datasets. Using a high dummy date like \'9999-12-31\' allows standard range scans."
    },
    {
      id: 11,
      type: "single",
      difficulty: 1,
      question: "A dimensional modeling standard requires implementing `Star Schema` to track historical variations. The architecture uses SCD Type 2. What is the impact of executing a bulk dimension upsert if the active indicator column utilizes NULL instead of an end-date placeholder like \'9999-12-31\'?",
      options: ["Query filtering on current records requires checking `IS NULL` which defeats B-Tree indexes         ", "SCD Type 2 records must possess unique integer IDs which cannot coexist with nullable date fields   ", "Null values cause the upsert mechanism to default to Type 1, overriding existing history tables     ", "The database engine throws constraint validation errors on composite keys containing NULL indicators"],
      correct: [0],
      concept: "Using NULL for active indicators in SCD Type 2 makes queries check WHERE end_date IS NULL. In standard B-Tree indexing, NULL entries are either excluded or grouped together, causing poor index performance on large datasets. Using a high dummy date like \'9999-12-31\' allows standard range scans."
    },
    {
      id: 12,
      type: "single",
      difficulty: 1,
      question: "A dimensional modeling standard requires implementing `Snowflake Schema` to track historical variations. The architecture uses SCD Type 2. What is the impact of executing a bulk dimension upsert if the active indicator column utilizes NULL instead of an end-date placeholder like \'9999-12-31\'?",
      options: ["Query filtering on current records requires checking `IS NULL` which defeats B-Tree indexes         ", "SCD Type 2 records must possess unique integer IDs which cannot coexist with nullable date fields   ", "Null values cause the upsert mechanism to default to Type 1, overriding existing history tables     ", "The database engine throws constraint validation errors on composite keys containing NULL indicators"],
      correct: [0],
      concept: "Using NULL for active indicators in SCD Type 2 makes queries check WHERE end_date IS NULL. In standard B-Tree indexing, NULL entries are either excluded or grouped together, causing poor index performance on large datasets. Using a high dummy date like \'9999-12-31\' allows standard range scans."
    },
    {
      id: 13,
      type: "single",
      difficulty: 1,
      question: "A dimensional modeling standard requires implementing `Fact & Dimension Tables` to track historical variations. The architecture uses SCD Type 2. What is the impact of executing a bulk dimension upsert if the active indicator column utilizes NULL instead of an end-date placeholder like \'9999-12-31\'?",
      options: ["Query filtering on current records requires checking `IS NULL` which defeats B-Tree indexes         ", "SCD Type 2 records must possess unique integer IDs which cannot coexist with nullable date fields   ", "Null values cause the upsert mechanism to default to Type 1, overriding existing history tables     ", "The database engine throws constraint validation errors on composite keys containing NULL indicators"],
      correct: [0],
      concept: "Using NULL for active indicators in SCD Type 2 makes queries check WHERE end_date IS NULL. In standard B-Tree indexing, NULL entries are either excluded or grouped together, causing poor index performance on large datasets. Using a high dummy date like \'9999-12-31\' allows standard range scans."
    },
    {
      id: 14,
      type: "single",
      difficulty: 1,
      question: "A dimensional modeling standard requires implementing `SCD Types` to track historical variations. The architecture uses SCD Type 2. What is the impact of executing a bulk dimension upsert if the active indicator column utilizes NULL instead of an end-date placeholder like \'9999-12-31\'?",
      options: ["Query filtering on current records requires checking `IS NULL` which defeats B-Tree indexes         ", "SCD Type 2 records must possess unique integer IDs which cannot coexist with nullable date fields   ", "Null values cause the upsert mechanism to default to Type 1, overriding existing history tables     ", "The database engine throws constraint validation errors on composite keys containing NULL indicators"],
      correct: [0],
      concept: "Using NULL for active indicators in SCD Type 2 makes queries check WHERE end_date IS NULL. In standard B-Tree indexing, NULL entries are either excluded or grouped together, causing poor index performance on large datasets. Using a high dummy date like \'9999-12-31\' allows standard range scans."
    },
    {
      id: 15,
      type: "single",
      difficulty: 1,
      question: "A dimensional modeling standard requires implementing `Kimball vs Inmon` to track historical variations. The architecture uses SCD Type 2. What is the impact of executing a bulk dimension upsert if the active indicator column utilizes NULL instead of an end-date placeholder like \'9999-12-31\'?",
      options: ["Query filtering on current records requires checking `IS NULL` which defeats B-Tree indexes         ", "SCD Type 2 records must possess unique integer IDs which cannot coexist with nullable date fields   ", "Null values cause the upsert mechanism to default to Type 1, overriding existing history tables     ", "The database engine throws constraint validation errors on composite keys containing NULL indicators"],
      correct: [0],
      concept: "Using NULL for active indicators in SCD Type 2 makes queries check WHERE end_date IS NULL. In standard B-Tree indexing, NULL entries are either excluded or grouped together, causing poor index performance on large datasets. Using a high dummy date like \'9999-12-31\' allows standard range scans."
    },
    {
      id: 16,
      type: "single",
      difficulty: 1,
      question: "A dimensional modeling standard requires implementing `Star Schema` to track historical variations. The architecture uses SCD Type 2. What is the impact of executing a bulk dimension upsert if the active indicator column utilizes NULL instead of an end-date placeholder like \'9999-12-31\'?",
      options: ["Query filtering on current records requires checking `IS NULL` which defeats B-Tree indexes         ", "SCD Type 2 records must possess unique integer IDs which cannot coexist with nullable date fields   ", "Null values cause the upsert mechanism to default to Type 1, overriding existing history tables     ", "The database engine throws constraint validation errors on composite keys containing NULL indicators"],
      correct: [0],
      concept: "Using NULL for active indicators in SCD Type 2 makes queries check WHERE end_date IS NULL. In standard B-Tree indexing, NULL entries are either excluded or grouped together, causing poor index performance on large datasets. Using a high dummy date like \'9999-12-31\' allows standard range scans."
    },
    {
      id: 17,
      type: "single",
      difficulty: 1,
      question: "A dimensional modeling standard requires implementing `Snowflake Schema` to track historical variations. The architecture uses SCD Type 2. What is the impact of executing a bulk dimension upsert if the active indicator column utilizes NULL instead of an end-date placeholder like \'9999-12-31\'?",
      options: ["Query filtering on current records requires checking `IS NULL` which defeats B-Tree indexes         ", "SCD Type 2 records must possess unique integer IDs which cannot coexist with nullable date fields   ", "Null values cause the upsert mechanism to default to Type 1, overriding existing history tables     ", "The database engine throws constraint validation errors on composite keys containing NULL indicators"],
      correct: [0],
      concept: "Using NULL for active indicators in SCD Type 2 makes queries check WHERE end_date IS NULL. In standard B-Tree indexing, NULL entries are either excluded or grouped together, causing poor index performance on large datasets. Using a high dummy date like \'9999-12-31\' allows standard range scans."
    },
    {
      id: 18,
      type: "single",
      difficulty: 1,
      question: "A dimensional modeling standard requires implementing `Fact & Dimension Tables` to track historical variations. The architecture uses SCD Type 2. What is the impact of executing a bulk dimension upsert if the active indicator column utilizes NULL instead of an end-date placeholder like \'9999-12-31\'?",
      options: ["Query filtering on current records requires checking `IS NULL` which defeats B-Tree indexes         ", "SCD Type 2 records must possess unique integer IDs which cannot coexist with nullable date fields   ", "Null values cause the upsert mechanism to default to Type 1, overriding existing history tables     ", "The database engine throws constraint validation errors on composite keys containing NULL indicators"],
      correct: [0],
      concept: "Using NULL for active indicators in SCD Type 2 makes queries check WHERE end_date IS NULL. In standard B-Tree indexing, NULL entries are either excluded or grouped together, causing poor index performance on large datasets. Using a high dummy date like \'9999-12-31\' allows standard range scans."
    },
    {
      id: 19,
      type: "single",
      difficulty: 1,
      question: "A dimensional modeling standard requires implementing `SCD Types` to track historical variations. The architecture uses SCD Type 2. What is the impact of executing a bulk dimension upsert if the active indicator column utilizes NULL instead of an end-date placeholder like \'9999-12-31\'?",
      options: ["Query filtering on current records requires checking `IS NULL` which defeats B-Tree indexes         ", "SCD Type 2 records must possess unique integer IDs which cannot coexist with nullable date fields   ", "Null values cause the upsert mechanism to default to Type 1, overriding existing history tables     ", "The database engine throws constraint validation errors on composite keys containing NULL indicators"],
      correct: [0],
      concept: "Using NULL for active indicators in SCD Type 2 makes queries check WHERE end_date IS NULL. In standard B-Tree indexing, NULL entries are either excluded or grouped together, causing poor index performance on large datasets. Using a high dummy date like \'9999-12-31\' allows standard range scans."
    },
    {
      id: 20,
      type: "single",
      difficulty: 1,
      question: "A dimensional modeling standard requires implementing `Kimball vs Inmon` to track historical variations. The architecture uses SCD Type 2. What is the impact of executing a bulk dimension upsert if the active indicator column utilizes NULL instead of an end-date placeholder like \'9999-12-31\'?",
      options: ["Query filtering on current records requires checking `IS NULL` which defeats B-Tree indexes         ", "SCD Type 2 records must possess unique integer IDs which cannot coexist with nullable date fields   ", "Null values cause the upsert mechanism to default to Type 1, overriding existing history tables     ", "The database engine throws constraint validation errors on composite keys containing NULL indicators"],
      correct: [0],
      concept: "Using NULL for active indicators in SCD Type 2 makes queries check WHERE end_date IS NULL. In standard B-Tree indexing, NULL entries are either excluded or grouped together, causing poor index performance on large datasets. Using a high dummy date like \'9999-12-31\' allows standard range scans."
    },
    {
      id: 21,
      type: "single",
      difficulty: 1,
      question: "A dimensional modeling standard requires implementing `Star Schema` to track historical variations. The architecture uses SCD Type 2. What is the impact of executing a bulk dimension upsert if the active indicator column utilizes NULL instead of an end-date placeholder like \'9999-12-31\'?",
      options: ["Query filtering on current records requires checking `IS NULL` which defeats B-Tree indexes         ", "SCD Type 2 records must possess unique integer IDs which cannot coexist with nullable date fields   ", "Null values cause the upsert mechanism to default to Type 1, overriding existing history tables     ", "The database engine throws constraint validation errors on composite keys containing NULL indicators"],
      correct: [0],
      concept: "Using NULL for active indicators in SCD Type 2 makes queries check WHERE end_date IS NULL. In standard B-Tree indexing, NULL entries are either excluded or grouped together, causing poor index performance on large datasets. Using a high dummy date like \'9999-12-31\' allows standard range scans."
    },
    {
      id: 22,
      type: "single",
      difficulty: 1,
      question: "A dimensional modeling standard requires implementing `Snowflake Schema` to track historical variations. The architecture uses SCD Type 2. What is the impact of executing a bulk dimension upsert if the active indicator column utilizes NULL instead of an end-date placeholder like \'9999-12-31\'?",
      options: ["Query filtering on current records requires checking `IS NULL` which defeats B-Tree indexes         ", "SCD Type 2 records must possess unique integer IDs which cannot coexist with nullable date fields   ", "Null values cause the upsert mechanism to default to Type 1, overriding existing history tables     ", "The database engine throws constraint validation errors on composite keys containing NULL indicators"],
      correct: [0],
      concept: "Using NULL for active indicators in SCD Type 2 makes queries check WHERE end_date IS NULL. In standard B-Tree indexing, NULL entries are either excluded or grouped together, causing poor index performance on large datasets. Using a high dummy date like \'9999-12-31\' allows standard range scans."
    },
    {
      id: 23,
      type: "single",
      difficulty: 1,
      question: "A dimensional modeling standard requires implementing `Fact & Dimension Tables` to track historical variations. The architecture uses SCD Type 2. What is the impact of executing a bulk dimension upsert if the active indicator column utilizes NULL instead of an end-date placeholder like \'9999-12-31\'?",
      options: ["Query filtering on current records requires checking `IS NULL` which defeats B-Tree indexes         ", "SCD Type 2 records must possess unique integer IDs which cannot coexist with nullable date fields   ", "Null values cause the upsert mechanism to default to Type 1, overriding existing history tables     ", "The database engine throws constraint validation errors on composite keys containing NULL indicators"],
      correct: [0],
      concept: "Using NULL for active indicators in SCD Type 2 makes queries check WHERE end_date IS NULL. In standard B-Tree indexing, NULL entries are either excluded or grouped together, causing poor index performance on large datasets. Using a high dummy date like \'9999-12-31\' allows standard range scans."
    },
    {
      id: 24,
      type: "single",
      difficulty: 1,
      question: "A dimensional modeling standard requires implementing `SCD Types` to track historical variations. The architecture uses SCD Type 2. What is the impact of executing a bulk dimension upsert if the active indicator column utilizes NULL instead of an end-date placeholder like \'9999-12-31\'?",
      options: ["Query filtering on current records requires checking `IS NULL` which defeats B-Tree indexes         ", "SCD Type 2 records must possess unique integer IDs which cannot coexist with nullable date fields   ", "Null values cause the upsert mechanism to default to Type 1, overriding existing history tables     ", "The database engine throws constraint validation errors on composite keys containing NULL indicators"],
      correct: [0],
      concept: "Using NULL for active indicators in SCD Type 2 makes queries check WHERE end_date IS NULL. In standard B-Tree indexing, NULL entries are either excluded or grouped together, causing poor index performance on large datasets. Using a high dummy date like \'9999-12-31\' allows standard range scans."
    },
    {
      id: 25,
      type: "single",
      difficulty: 1,
      question: "A dimensional modeling standard requires implementing `Kimball vs Inmon` to track historical variations. The architecture uses SCD Type 2. What is the impact of executing a bulk dimension upsert if the active indicator column utilizes NULL instead of an end-date placeholder like \'9999-12-31\'?",
      options: ["Query filtering on current records requires checking `IS NULL` which defeats B-Tree indexes         ", "SCD Type 2 records must possess unique integer IDs which cannot coexist with nullable date fields   ", "Null values cause the upsert mechanism to default to Type 1, overriding existing history tables     ", "The database engine throws constraint validation errors on composite keys containing NULL indicators"],
      correct: [0],
      concept: "Using NULL for active indicators in SCD Type 2 makes queries check WHERE end_date IS NULL. In standard B-Tree indexing, NULL entries are either excluded or grouped together, causing poor index performance on large datasets. Using a high dummy date like \'9999-12-31\' allows standard range scans."
    },
    {
      id: 26,
      type: "single",
      difficulty: 1,
      question: "A dimensional modeling standard requires implementing `Star Schema` to track historical variations. The architecture uses SCD Type 2. What is the impact of executing a bulk dimension upsert if the active indicator column utilizes NULL instead of an end-date placeholder like \'9999-12-31\'?",
      options: ["Query filtering on current records requires checking `IS NULL` which defeats B-Tree indexes         ", "SCD Type 2 records must possess unique integer IDs which cannot coexist with nullable date fields   ", "Null values cause the upsert mechanism to default to Type 1, overriding existing history tables     ", "The database engine throws constraint validation errors on composite keys containing NULL indicators"],
      correct: [0],
      concept: "Using NULL for active indicators in SCD Type 2 makes queries check WHERE end_date IS NULL. In standard B-Tree indexing, NULL entries are either excluded or grouped together, causing poor index performance on large datasets. Using a high dummy date like \'9999-12-31\' allows standard range scans."
    },
    {
      id: 27,
      type: "single",
      difficulty: 1,
      question: "A dimensional modeling standard requires implementing `Snowflake Schema` to track historical variations. The architecture uses SCD Type 2. What is the impact of executing a bulk dimension upsert if the active indicator column utilizes NULL instead of an end-date placeholder like \'9999-12-31\'?",
      options: ["Query filtering on current records requires checking `IS NULL` which defeats B-Tree indexes         ", "SCD Type 2 records must possess unique integer IDs which cannot coexist with nullable date fields   ", "Null values cause the upsert mechanism to default to Type 1, overriding existing history tables     ", "The database engine throws constraint validation errors on composite keys containing NULL indicators"],
      correct: [0],
      concept: "Using NULL for active indicators in SCD Type 2 makes queries check WHERE end_date IS NULL. In standard B-Tree indexing, NULL entries are either excluded or grouped together, causing poor index performance on large datasets. Using a high dummy date like \'9999-12-31\' allows standard range scans."
    },
    {
      id: 28,
      type: "single",
      difficulty: 1,
      question: "A dimensional modeling standard requires implementing `Fact & Dimension Tables` to track historical variations. The architecture uses SCD Type 2. What is the impact of executing a bulk dimension upsert if the active indicator column utilizes NULL instead of an end-date placeholder like \'9999-12-31\'?",
      options: ["Query filtering on current records requires checking `IS NULL` which defeats B-Tree indexes         ", "SCD Type 2 records must possess unique integer IDs which cannot coexist with nullable date fields   ", "Null values cause the upsert mechanism to default to Type 1, overriding existing history tables     ", "The database engine throws constraint validation errors on composite keys containing NULL indicators"],
      correct: [0],
      concept: "Using NULL for active indicators in SCD Type 2 makes queries check WHERE end_date IS NULL. In standard B-Tree indexing, NULL entries are either excluded or grouped together, causing poor index performance on large datasets. Using a high dummy date like \'9999-12-31\' allows standard range scans."
    },
    {
      id: 29,
      type: "single",
      difficulty: 1,
      question: "A dimensional modeling standard requires implementing `SCD Types` to track historical variations. The architecture uses SCD Type 2. What is the impact of executing a bulk dimension upsert if the active indicator column utilizes NULL instead of an end-date placeholder like \'9999-12-31\'?",
      options: ["Query filtering on current records requires checking `IS NULL` which defeats B-Tree indexes         ", "SCD Type 2 records must possess unique integer IDs which cannot coexist with nullable date fields   ", "Null values cause the upsert mechanism to default to Type 1, overriding existing history tables     ", "The database engine throws constraint validation errors on composite keys containing NULL indicators"],
      correct: [0],
      concept: "Using NULL for active indicators in SCD Type 2 makes queries check WHERE end_date IS NULL. In standard B-Tree indexing, NULL entries are either excluded or grouped together, causing poor index performance on large datasets. Using a high dummy date like \'9999-12-31\' allows standard range scans."
    },
    {
      id: 30,
      type: "single",
      difficulty: 1,
      question: "A dimensional modeling standard requires implementing `Kimball vs Inmon` to track historical variations. The architecture uses SCD Type 2. What is the impact of executing a bulk dimension upsert if the active indicator column utilizes NULL instead of an end-date placeholder like \'9999-12-31\'?",
      options: ["Query filtering on current records requires checking `IS NULL` which defeats B-Tree indexes         ", "SCD Type 2 records must possess unique integer IDs which cannot coexist with nullable date fields   ", "Null values cause the upsert mechanism to default to Type 1, overriding existing history tables     ", "The database engine throws constraint validation errors on composite keys containing NULL indicators"],
      correct: [0],
      concept: "Using NULL for active indicators in SCD Type 2 makes queries check WHERE end_date IS NULL. In standard B-Tree indexing, NULL entries are either excluded or grouped together, causing poor index performance on large datasets. Using a high dummy date like \'9999-12-31\' allows standard range scans."
    },
    {
      id: 31,
      type: "single",
      difficulty: 1,
      question: "A dimensional modeling standard requires implementing `Star Schema` to track historical variations. The architecture uses SCD Type 2. What is the impact of executing a bulk dimension upsert if the active indicator column utilizes NULL instead of an end-date placeholder like \'9999-12-31\'?",
      options: ["Query filtering on current records requires checking `IS NULL` which defeats B-Tree indexes         ", "SCD Type 2 records must possess unique integer IDs which cannot coexist with nullable date fields   ", "Null values cause the upsert mechanism to default to Type 1, overriding existing history tables     ", "The database engine throws constraint validation errors on composite keys containing NULL indicators"],
      correct: [0],
      concept: "Using NULL for active indicators in SCD Type 2 makes queries check WHERE end_date IS NULL. In standard B-Tree indexing, NULL entries are either excluded or grouped together, causing poor index performance on large datasets. Using a high dummy date like \'9999-12-31\' allows standard range scans."
    },
    {
      id: 32,
      type: "single",
      difficulty: 1,
      question: "A dimensional modeling standard requires implementing `Snowflake Schema` to track historical variations. The architecture uses SCD Type 2. What is the impact of executing a bulk dimension upsert if the active indicator column utilizes NULL instead of an end-date placeholder like \'9999-12-31\'?",
      options: ["Query filtering on current records requires checking `IS NULL` which defeats B-Tree indexes         ", "SCD Type 2 records must possess unique integer IDs which cannot coexist with nullable date fields   ", "Null values cause the upsert mechanism to default to Type 1, overriding existing history tables     ", "The database engine throws constraint validation errors on composite keys containing NULL indicators"],
      correct: [0],
      concept: "Using NULL for active indicators in SCD Type 2 makes queries check WHERE end_date IS NULL. In standard B-Tree indexing, NULL entries are either excluded or grouped together, causing poor index performance on large datasets. Using a high dummy date like \'9999-12-31\' allows standard range scans."
    },
    {
      id: 33,
      type: "single",
      difficulty: 1,
      question: "A dimensional modeling standard requires implementing `Fact & Dimension Tables` to track historical variations. The architecture uses SCD Type 2. What is the impact of executing a bulk dimension upsert if the active indicator column utilizes NULL instead of an end-date placeholder like \'9999-12-31\'?",
      options: ["Query filtering on current records requires checking `IS NULL` which defeats B-Tree indexes         ", "SCD Type 2 records must possess unique integer IDs which cannot coexist with nullable date fields   ", "Null values cause the upsert mechanism to default to Type 1, overriding existing history tables     ", "The database engine throws constraint validation errors on composite keys containing NULL indicators"],
      correct: [0],
      concept: "Using NULL for active indicators in SCD Type 2 makes queries check WHERE end_date IS NULL. In standard B-Tree indexing, NULL entries are either excluded or grouped together, causing poor index performance on large datasets. Using a high dummy date like \'9999-12-31\' allows standard range scans."
    },
    {
      id: 34,
      type: "single",
      difficulty: 1,
      question: "A dimensional modeling standard requires implementing `SCD Types` to track historical variations. The architecture uses SCD Type 2. What is the impact of executing a bulk dimension upsert if the active indicator column utilizes NULL instead of an end-date placeholder like \'9999-12-31\'?",
      options: ["Query filtering on current records requires checking `IS NULL` which defeats B-Tree indexes         ", "SCD Type 2 records must possess unique integer IDs which cannot coexist with nullable date fields   ", "Null values cause the upsert mechanism to default to Type 1, overriding existing history tables     ", "The database engine throws constraint validation errors on composite keys containing NULL indicators"],
      correct: [0],
      concept: "Using NULL for active indicators in SCD Type 2 makes queries check WHERE end_date IS NULL. In standard B-Tree indexing, NULL entries are either excluded or grouped together, causing poor index performance on large datasets. Using a high dummy date like \'9999-12-31\' allows standard range scans."
    },
    {
      id: 35,
      type: "single",
      difficulty: 1,
      question: "A dimensional modeling standard requires implementing `Kimball vs Inmon` to track historical variations. The architecture uses SCD Type 2. What is the impact of executing a bulk dimension upsert if the active indicator column utilizes NULL instead of an end-date placeholder like \'9999-12-31\'?",
      options: ["Query filtering on current records requires checking `IS NULL` which defeats B-Tree indexes         ", "SCD Type 2 records must possess unique integer IDs which cannot coexist with nullable date fields   ", "Null values cause the upsert mechanism to default to Type 1, overriding existing history tables     ", "The database engine throws constraint validation errors on composite keys containing NULL indicators"],
      correct: [0],
      concept: "Using NULL for active indicators in SCD Type 2 makes queries check WHERE end_date IS NULL. In standard B-Tree indexing, NULL entries are either excluded or grouped together, causing poor index performance on large datasets. Using a high dummy date like \'9999-12-31\' allows standard range scans."
    },
    {
      id: 36,
      type: "single",
      difficulty: 2,
      question: "A dimensional modeling standard requires implementing `Star Schema` to track historical variations. The architecture uses SCD Type 2. What is the impact of executing a bulk dimension upsert if the active indicator column utilizes NULL instead of an end-date placeholder like \'9999-12-31\'?",
      options: ["Query filtering on current records requires checking `IS NULL` which defeats B-Tree indexes         ", "SCD Type 2 records must possess unique integer IDs which cannot coexist with nullable date fields   ", "Null values cause the upsert mechanism to default to Type 1, overriding existing history tables     ", "The database engine throws constraint validation errors on composite keys containing NULL indicators"],
      correct: [0],
      concept: "Using NULL for active indicators in SCD Type 2 makes queries check WHERE end_date IS NULL. In standard B-Tree indexing, NULL entries are either excluded or grouped together, causing poor index performance on large datasets. Using a high dummy date like \'9999-12-31\' allows standard range scans."
    },
    {
      id: 37,
      type: "single",
      difficulty: 2,
      question: "A dimensional modeling standard requires implementing `Snowflake Schema` to track historical variations. The architecture uses SCD Type 2. What is the impact of executing a bulk dimension upsert if the active indicator column utilizes NULL instead of an end-date placeholder like \'9999-12-31\'?",
      options: ["Query filtering on current records requires checking `IS NULL` which defeats B-Tree indexes         ", "SCD Type 2 records must possess unique integer IDs which cannot coexist with nullable date fields   ", "Null values cause the upsert mechanism to default to Type 1, overriding existing history tables     ", "The database engine throws constraint validation errors on composite keys containing NULL indicators"],
      correct: [0],
      concept: "Using NULL for active indicators in SCD Type 2 makes queries check WHERE end_date IS NULL. In standard B-Tree indexing, NULL entries are either excluded or grouped together, causing poor index performance on large datasets. Using a high dummy date like \'9999-12-31\' allows standard range scans."
    },
    {
      id: 38,
      type: "single",
      difficulty: 2,
      question: "A dimensional modeling standard requires implementing `Fact & Dimension Tables` to track historical variations. The architecture uses SCD Type 2. What is the impact of executing a bulk dimension upsert if the active indicator column utilizes NULL instead of an end-date placeholder like \'9999-12-31\'?",
      options: ["Query filtering on current records requires checking `IS NULL` which defeats B-Tree indexes         ", "SCD Type 2 records must possess unique integer IDs which cannot coexist with nullable date fields   ", "Null values cause the upsert mechanism to default to Type 1, overriding existing history tables     ", "The database engine throws constraint validation errors on composite keys containing NULL indicators"],
      correct: [0],
      concept: "Using NULL for active indicators in SCD Type 2 makes queries check WHERE end_date IS NULL. In standard B-Tree indexing, NULL entries are either excluded or grouped together, causing poor index performance on large datasets. Using a high dummy date like \'9999-12-31\' allows standard range scans."
    },
    {
      id: 39,
      type: "single",
      difficulty: 2,
      question: "A dimensional modeling standard requires implementing `SCD Types` to track historical variations. The architecture uses SCD Type 2. What is the impact of executing a bulk dimension upsert if the active indicator column utilizes NULL instead of an end-date placeholder like \'9999-12-31\'?",
      options: ["Query filtering on current records requires checking `IS NULL` which defeats B-Tree indexes         ", "SCD Type 2 records must possess unique integer IDs which cannot coexist with nullable date fields   ", "Null values cause the upsert mechanism to default to Type 1, overriding existing history tables     ", "The database engine throws constraint validation errors on composite keys containing NULL indicators"],
      correct: [0],
      concept: "Using NULL for active indicators in SCD Type 2 makes queries check WHERE end_date IS NULL. In standard B-Tree indexing, NULL entries are either excluded or grouped together, causing poor index performance on large datasets. Using a high dummy date like \'9999-12-31\' allows standard range scans."
    },
    {
      id: 40,
      type: "single",
      difficulty: 2,
      question: "A dimensional modeling standard requires implementing `Kimball vs Inmon` to track historical variations. The architecture uses SCD Type 2. What is the impact of executing a bulk dimension upsert if the active indicator column utilizes NULL instead of an end-date placeholder like \'9999-12-31\'?",
      options: ["Query filtering on current records requires checking `IS NULL` which defeats B-Tree indexes         ", "SCD Type 2 records must possess unique integer IDs which cannot coexist with nullable date fields   ", "Null values cause the upsert mechanism to default to Type 1, overriding existing history tables     ", "The database engine throws constraint validation errors on composite keys containing NULL indicators"],
      correct: [0],
      concept: "Using NULL for active indicators in SCD Type 2 makes queries check WHERE end_date IS NULL. In standard B-Tree indexing, NULL entries are either excluded or grouped together, causing poor index performance on large datasets. Using a high dummy date like \'9999-12-31\' allows standard range scans."
    },
    {
      id: 41,
      type: "single",
      difficulty: 2,
      question: "A dimensional modeling standard requires implementing `Star Schema` to track historical variations. The architecture uses SCD Type 2. What is the impact of executing a bulk dimension upsert if the active indicator column utilizes NULL instead of an end-date placeholder like \'9999-12-31\'?",
      options: ["Query filtering on current records requires checking `IS NULL` which defeats B-Tree indexes         ", "SCD Type 2 records must possess unique integer IDs which cannot coexist with nullable date fields   ", "Null values cause the upsert mechanism to default to Type 1, overriding existing history tables     ", "The database engine throws constraint validation errors on composite keys containing NULL indicators"],
      correct: [0],
      concept: "Using NULL for active indicators in SCD Type 2 makes queries check WHERE end_date IS NULL. In standard B-Tree indexing, NULL entries are either excluded or grouped together, causing poor index performance on large datasets. Using a high dummy date like \'9999-12-31\' allows standard range scans."
    },
    {
      id: 42,
      type: "single",
      difficulty: 2,
      question: "A dimensional modeling standard requires implementing `Snowflake Schema` to track historical variations. The architecture uses SCD Type 2. What is the impact of executing a bulk dimension upsert if the active indicator column utilizes NULL instead of an end-date placeholder like \'9999-12-31\'?",
      options: ["Query filtering on current records requires checking `IS NULL` which defeats B-Tree indexes         ", "SCD Type 2 records must possess unique integer IDs which cannot coexist with nullable date fields   ", "Null values cause the upsert mechanism to default to Type 1, overriding existing history tables     ", "The database engine throws constraint validation errors on composite keys containing NULL indicators"],
      correct: [0],
      concept: "Using NULL for active indicators in SCD Type 2 makes queries check WHERE end_date IS NULL. In standard B-Tree indexing, NULL entries are either excluded or grouped together, causing poor index performance on large datasets. Using a high dummy date like \'9999-12-31\' allows standard range scans."
    },
    {
      id: 43,
      type: "single",
      difficulty: 2,
      question: "A dimensional modeling standard requires implementing `Fact & Dimension Tables` to track historical variations. The architecture uses SCD Type 2. What is the impact of executing a bulk dimension upsert if the active indicator column utilizes NULL instead of an end-date placeholder like \'9999-12-31\'?",
      options: ["Query filtering on current records requires checking `IS NULL` which defeats B-Tree indexes         ", "SCD Type 2 records must possess unique integer IDs which cannot coexist with nullable date fields   ", "Null values cause the upsert mechanism to default to Type 1, overriding existing history tables     ", "The database engine throws constraint validation errors on composite keys containing NULL indicators"],
      correct: [0],
      concept: "Using NULL for active indicators in SCD Type 2 makes queries check WHERE end_date IS NULL. In standard B-Tree indexing, NULL entries are either excluded or grouped together, causing poor index performance on large datasets. Using a high dummy date like \'9999-12-31\' allows standard range scans."
    },
    {
      id: 44,
      type: "single",
      difficulty: 2,
      question: "A dimensional modeling standard requires implementing `SCD Types` to track historical variations. The architecture uses SCD Type 2. What is the impact of executing a bulk dimension upsert if the active indicator column utilizes NULL instead of an end-date placeholder like \'9999-12-31\'?",
      options: ["Query filtering on current records requires checking `IS NULL` which defeats B-Tree indexes         ", "SCD Type 2 records must possess unique integer IDs which cannot coexist with nullable date fields   ", "Null values cause the upsert mechanism to default to Type 1, overriding existing history tables     ", "The database engine throws constraint validation errors on composite keys containing NULL indicators"],
      correct: [0],
      concept: "Using NULL for active indicators in SCD Type 2 makes queries check WHERE end_date IS NULL. In standard B-Tree indexing, NULL entries are either excluded or grouped together, causing poor index performance on large datasets. Using a high dummy date like \'9999-12-31\' allows standard range scans."
    },
    {
      id: 45,
      type: "single",
      difficulty: 2,
      question: "A dimensional modeling standard requires implementing `Kimball vs Inmon` to track historical variations. The architecture uses SCD Type 2. What is the impact of executing a bulk dimension upsert if the active indicator column utilizes NULL instead of an end-date placeholder like \'9999-12-31\'?",
      options: ["Query filtering on current records requires checking `IS NULL` which defeats B-Tree indexes         ", "SCD Type 2 records must possess unique integer IDs which cannot coexist with nullable date fields   ", "Null values cause the upsert mechanism to default to Type 1, overriding existing history tables     ", "The database engine throws constraint validation errors on composite keys containing NULL indicators"],
      correct: [0],
      concept: "Using NULL for active indicators in SCD Type 2 makes queries check WHERE end_date IS NULL. In standard B-Tree indexing, NULL entries are either excluded or grouped together, causing poor index performance on large datasets. Using a high dummy date like \'9999-12-31\' allows standard range scans."
    },
    {
      id: 46,
      type: "single",
      difficulty: 2,
      question: "A dimensional modeling standard requires implementing `Star Schema` to track historical variations. The architecture uses SCD Type 2. What is the impact of executing a bulk dimension upsert if the active indicator column utilizes NULL instead of an end-date placeholder like \'9999-12-31\'?",
      options: ["Query filtering on current records requires checking `IS NULL` which defeats B-Tree indexes         ", "SCD Type 2 records must possess unique integer IDs which cannot coexist with nullable date fields   ", "Null values cause the upsert mechanism to default to Type 1, overriding existing history tables     ", "The database engine throws constraint validation errors on composite keys containing NULL indicators"],
      correct: [0],
      concept: "Using NULL for active indicators in SCD Type 2 makes queries check WHERE end_date IS NULL. In standard B-Tree indexing, NULL entries are either excluded or grouped together, causing poor index performance on large datasets. Using a high dummy date like \'9999-12-31\' allows standard range scans."
    },
    {
      id: 47,
      type: "single",
      difficulty: 2,
      question: "A dimensional modeling standard requires implementing `Snowflake Schema` to track historical variations. The architecture uses SCD Type 2. What is the impact of executing a bulk dimension upsert if the active indicator column utilizes NULL instead of an end-date placeholder like \'9999-12-31\'?",
      options: ["Query filtering on current records requires checking `IS NULL` which defeats B-Tree indexes         ", "SCD Type 2 records must possess unique integer IDs which cannot coexist with nullable date fields   ", "Null values cause the upsert mechanism to default to Type 1, overriding existing history tables     ", "The database engine throws constraint validation errors on composite keys containing NULL indicators"],
      correct: [0],
      concept: "Using NULL for active indicators in SCD Type 2 makes queries check WHERE end_date IS NULL. In standard B-Tree indexing, NULL entries are either excluded or grouped together, causing poor index performance on large datasets. Using a high dummy date like \'9999-12-31\' allows standard range scans."
    },
    {
      id: 48,
      type: "single",
      difficulty: 2,
      question: "A dimensional modeling standard requires implementing `Fact & Dimension Tables` to track historical variations. The architecture uses SCD Type 2. What is the impact of executing a bulk dimension upsert if the active indicator column utilizes NULL instead of an end-date placeholder like \'9999-12-31\'?",
      options: ["Query filtering on current records requires checking `IS NULL` which defeats B-Tree indexes         ", "SCD Type 2 records must possess unique integer IDs which cannot coexist with nullable date fields   ", "Null values cause the upsert mechanism to default to Type 1, overriding existing history tables     ", "The database engine throws constraint validation errors on composite keys containing NULL indicators"],
      correct: [0],
      concept: "Using NULL for active indicators in SCD Type 2 makes queries check WHERE end_date IS NULL. In standard B-Tree indexing, NULL entries are either excluded or grouped together, causing poor index performance on large datasets. Using a high dummy date like \'9999-12-31\' allows standard range scans."
    },
    {
      id: 49,
      type: "single",
      difficulty: 2,
      question: "A dimensional modeling standard requires implementing `SCD Types` to track historical variations. The architecture uses SCD Type 2. What is the impact of executing a bulk dimension upsert if the active indicator column utilizes NULL instead of an end-date placeholder like \'9999-12-31\'?",
      options: ["Query filtering on current records requires checking `IS NULL` which defeats B-Tree indexes         ", "SCD Type 2 records must possess unique integer IDs which cannot coexist with nullable date fields   ", "Null values cause the upsert mechanism to default to Type 1, overriding existing history tables     ", "The database engine throws constraint validation errors on composite keys containing NULL indicators"],
      correct: [0],
      concept: "Using NULL for active indicators in SCD Type 2 makes queries check WHERE end_date IS NULL. In standard B-Tree indexing, NULL entries are either excluded or grouped together, causing poor index performance on large datasets. Using a high dummy date like \'9999-12-31\' allows standard range scans."
    },
    {
      id: 50,
      type: "single",
      difficulty: 2,
      question: "A dimensional modeling standard requires implementing `Kimball vs Inmon` to track historical variations. The architecture uses SCD Type 2. What is the impact of executing a bulk dimension upsert if the active indicator column utilizes NULL instead of an end-date placeholder like \'9999-12-31\'?",
      options: ["Query filtering on current records requires checking `IS NULL` which defeats B-Tree indexes         ", "SCD Type 2 records must possess unique integer IDs which cannot coexist with nullable date fields   ", "Null values cause the upsert mechanism to default to Type 1, overriding existing history tables     ", "The database engine throws constraint validation errors on composite keys containing NULL indicators"],
      correct: [0],
      concept: "Using NULL for active indicators in SCD Type 2 makes queries check WHERE end_date IS NULL. In standard B-Tree indexing, NULL entries are either excluded or grouped together, causing poor index performance on large datasets. Using a high dummy date like \'9999-12-31\' allows standard range scans."
    },
    {
      id: 51,
      type: "single",
      difficulty: 2,
      question: "A dimensional modeling standard requires implementing `Star Schema` to track historical variations. The architecture uses SCD Type 2. What is the impact of executing a bulk dimension upsert if the active indicator column utilizes NULL instead of an end-date placeholder like \'9999-12-31\'?",
      options: ["Query filtering on current records requires checking `IS NULL` which defeats B-Tree indexes         ", "SCD Type 2 records must possess unique integer IDs which cannot coexist with nullable date fields   ", "Null values cause the upsert mechanism to default to Type 1, overriding existing history tables     ", "The database engine throws constraint validation errors on composite keys containing NULL indicators"],
      correct: [0],
      concept: "Using NULL for active indicators in SCD Type 2 makes queries check WHERE end_date IS NULL. In standard B-Tree indexing, NULL entries are either excluded or grouped together, causing poor index performance on large datasets. Using a high dummy date like \'9999-12-31\' allows standard range scans."
    },
    {
      id: 52,
      type: "single",
      difficulty: 2,
      question: "A dimensional modeling standard requires implementing `Snowflake Schema` to track historical variations. The architecture uses SCD Type 2. What is the impact of executing a bulk dimension upsert if the active indicator column utilizes NULL instead of an end-date placeholder like \'9999-12-31\'?",
      options: ["Query filtering on current records requires checking `IS NULL` which defeats B-Tree indexes         ", "SCD Type 2 records must possess unique integer IDs which cannot coexist with nullable date fields   ", "Null values cause the upsert mechanism to default to Type 1, overriding existing history tables     ", "The database engine throws constraint validation errors on composite keys containing NULL indicators"],
      correct: [0],
      concept: "Using NULL for active indicators in SCD Type 2 makes queries check WHERE end_date IS NULL. In standard B-Tree indexing, NULL entries are either excluded or grouped together, causing poor index performance on large datasets. Using a high dummy date like \'9999-12-31\' allows standard range scans."
    },
    {
      id: 53,
      type: "single",
      difficulty: 2,
      question: "A dimensional modeling standard requires implementing `Fact & Dimension Tables` to track historical variations. The architecture uses SCD Type 2. What is the impact of executing a bulk dimension upsert if the active indicator column utilizes NULL instead of an end-date placeholder like \'9999-12-31\'?",
      options: ["Query filtering on current records requires checking `IS NULL` which defeats B-Tree indexes         ", "SCD Type 2 records must possess unique integer IDs which cannot coexist with nullable date fields   ", "Null values cause the upsert mechanism to default to Type 1, overriding existing history tables     ", "The database engine throws constraint validation errors on composite keys containing NULL indicators"],
      correct: [0],
      concept: "Using NULL for active indicators in SCD Type 2 makes queries check WHERE end_date IS NULL. In standard B-Tree indexing, NULL entries are either excluded or grouped together, causing poor index performance on large datasets. Using a high dummy date like \'9999-12-31\' allows standard range scans."
    },
    {
      id: 54,
      type: "single",
      difficulty: 2,
      question: "A dimensional modeling standard requires implementing `SCD Types` to track historical variations. The architecture uses SCD Type 2. What is the impact of executing a bulk dimension upsert if the active indicator column utilizes NULL instead of an end-date placeholder like \'9999-12-31\'?",
      options: ["Query filtering on current records requires checking `IS NULL` which defeats B-Tree indexes         ", "SCD Type 2 records must possess unique integer IDs which cannot coexist with nullable date fields   ", "Null values cause the upsert mechanism to default to Type 1, overriding existing history tables     ", "The database engine throws constraint validation errors on composite keys containing NULL indicators"],
      correct: [0],
      concept: "Using NULL for active indicators in SCD Type 2 makes queries check WHERE end_date IS NULL. In standard B-Tree indexing, NULL entries are either excluded or grouped together, causing poor index performance on large datasets. Using a high dummy date like \'9999-12-31\' allows standard range scans."
    },
    {
      id: 55,
      type: "single",
      difficulty: 2,
      question: "A dimensional modeling standard requires implementing `Kimball vs Inmon` to track historical variations. The architecture uses SCD Type 2. What is the impact of executing a bulk dimension upsert if the active indicator column utilizes NULL instead of an end-date placeholder like \'9999-12-31\'?",
      options: ["Query filtering on current records requires checking `IS NULL` which defeats B-Tree indexes         ", "SCD Type 2 records must possess unique integer IDs which cannot coexist with nullable date fields   ", "Null values cause the upsert mechanism to default to Type 1, overriding existing history tables     ", "The database engine throws constraint validation errors on composite keys containing NULL indicators"],
      correct: [0],
      concept: "Using NULL for active indicators in SCD Type 2 makes queries check WHERE end_date IS NULL. In standard B-Tree indexing, NULL entries are either excluded or grouped together, causing poor index performance on large datasets. Using a high dummy date like \'9999-12-31\' allows standard range scans."
    },
    {
      id: 56,
      type: "single",
      difficulty: 2,
      question: "A dimensional modeling standard requires implementing `Star Schema` to track historical variations. The architecture uses SCD Type 2. What is the impact of executing a bulk dimension upsert if the active indicator column utilizes NULL instead of an end-date placeholder like \'9999-12-31\'?",
      options: ["Query filtering on current records requires checking `IS NULL` which defeats B-Tree indexes         ", "SCD Type 2 records must possess unique integer IDs which cannot coexist with nullable date fields   ", "Null values cause the upsert mechanism to default to Type 1, overriding existing history tables     ", "The database engine throws constraint validation errors on composite keys containing NULL indicators"],
      correct: [0],
      concept: "Using NULL for active indicators in SCD Type 2 makes queries check WHERE end_date IS NULL. In standard B-Tree indexing, NULL entries are either excluded or grouped together, causing poor index performance on large datasets. Using a high dummy date like \'9999-12-31\' allows standard range scans."
    },
    {
      id: 57,
      type: "single",
      difficulty: 2,
      question: "A dimensional modeling standard requires implementing `Snowflake Schema` to track historical variations. The architecture uses SCD Type 2. What is the impact of executing a bulk dimension upsert if the active indicator column utilizes NULL instead of an end-date placeholder like \'9999-12-31\'?",
      options: ["Query filtering on current records requires checking `IS NULL` which defeats B-Tree indexes         ", "SCD Type 2 records must possess unique integer IDs which cannot coexist with nullable date fields   ", "Null values cause the upsert mechanism to default to Type 1, overriding existing history tables     ", "The database engine throws constraint validation errors on composite keys containing NULL indicators"],
      correct: [0],
      concept: "Using NULL for active indicators in SCD Type 2 makes queries check WHERE end_date IS NULL. In standard B-Tree indexing, NULL entries are either excluded or grouped together, causing poor index performance on large datasets. Using a high dummy date like \'9999-12-31\' allows standard range scans."
    },
    {
      id: 58,
      type: "single",
      difficulty: 2,
      question: "A dimensional modeling standard requires implementing `Fact & Dimension Tables` to track historical variations. The architecture uses SCD Type 2. What is the impact of executing a bulk dimension upsert if the active indicator column utilizes NULL instead of an end-date placeholder like \'9999-12-31\'?",
      options: ["Query filtering on current records requires checking `IS NULL` which defeats B-Tree indexes         ", "SCD Type 2 records must possess unique integer IDs which cannot coexist with nullable date fields   ", "Null values cause the upsert mechanism to default to Type 1, overriding existing history tables     ", "The database engine throws constraint validation errors on composite keys containing NULL indicators"],
      correct: [0],
      concept: "Using NULL for active indicators in SCD Type 2 makes queries check WHERE end_date IS NULL. In standard B-Tree indexing, NULL entries are either excluded or grouped together, causing poor index performance on large datasets. Using a high dummy date like \'9999-12-31\' allows standard range scans."
    },
    {
      id: 59,
      type: "single",
      difficulty: 2,
      question: "A dimensional modeling standard requires implementing `SCD Types` to track historical variations. The architecture uses SCD Type 2. What is the impact of executing a bulk dimension upsert if the active indicator column utilizes NULL instead of an end-date placeholder like \'9999-12-31\'?",
      options: ["Query filtering on current records requires checking `IS NULL` which defeats B-Tree indexes         ", "SCD Type 2 records must possess unique integer IDs which cannot coexist with nullable date fields   ", "Null values cause the upsert mechanism to default to Type 1, overriding existing history tables     ", "The database engine throws constraint validation errors on composite keys containing NULL indicators"],
      correct: [0],
      concept: "Using NULL for active indicators in SCD Type 2 makes queries check WHERE end_date IS NULL. In standard B-Tree indexing, NULL entries are either excluded or grouped together, causing poor index performance on large datasets. Using a high dummy date like \'9999-12-31\' allows standard range scans."
    },
    {
      id: 60,
      type: "single",
      difficulty: 2,
      question: "A dimensional modeling standard requires implementing `Kimball vs Inmon` to track historical variations. The architecture uses SCD Type 2. What is the impact of executing a bulk dimension upsert if the active indicator column utilizes NULL instead of an end-date placeholder like \'9999-12-31\'?",
      options: ["Query filtering on current records requires checking `IS NULL` which defeats B-Tree indexes         ", "SCD Type 2 records must possess unique integer IDs which cannot coexist with nullable date fields   ", "Null values cause the upsert mechanism to default to Type 1, overriding existing history tables     ", "The database engine throws constraint validation errors on composite keys containing NULL indicators"],
      correct: [0],
      concept: "Using NULL for active indicators in SCD Type 2 makes queries check WHERE end_date IS NULL. In standard B-Tree indexing, NULL entries are either excluded or grouped together, causing poor index performance on large datasets. Using a high dummy date like \'9999-12-31\' allows standard range scans."
    },
    {
      id: 61,
      type: "multi",
      difficulty: 2,
      question: "You are optimizing a `Snowflake warehouse on AWS` that performs `parsing` on `Star Schema`. The design uses a Star Schema. What are the key advantages of a Star Schema over a fully normalized Snowflake Schema? (Select ALL that apply)",
      options: ["A: Reduced number of JOIN operations required during query execution, leading to lower CPU utilization", "B: Simplified query writing and BI tool integration because dimension structures are flattened        ", "C: Complete elimination of data redundancy and disk storage space overheads across all tables         ", "D: Faster metadata caching because primary key indexes are distributed evenly across the database     "],
      correct: [0, 1],
      concept: "Star Schemas denormalize dimensions, which increases storage redundancy but significantly reduces JOIN complexity and increases scan speeds. BI tools also perform better on denormalized structures."
    },
    {
      id: 62,
      type: "multi",
      difficulty: 2,
      question: "You are optimizing a `dbt Core model in BigQuery` that performs `optimizing` on `Snowflake Schema`. The design uses a Star Schema. What are the key advantages of a Star Schema over a fully normalized Snowflake Schema? (Select ALL that apply)",
      options: ["A: Reduced number of JOIN operations required during query execution, leading to lower CPU utilization", "B: Simplified query writing and BI tool integration because dimension structures are flattened        ", "C: Complete elimination of data redundancy and disk storage space overheads across all tables         ", "D: Faster metadata caching because primary key indexes are distributed evenly across the database     "],
      correct: [0, 1],
      concept: "Star Schemas denormalize dimensions, which increases storage redundancy but significantly reduces JOIN complexity and increases scan speeds. BI tools also perform better on denormalized structures."
    },
    {
      id: 63,
      type: "multi",
      difficulty: 2,
      question: "You are optimizing a `DataStage parallel engine` that performs `buffering` on `Fact & Dimension Tables`. The design uses a Star Schema. What are the key advantages of a Star Schema over a fully normalized Snowflake Schema? (Select ALL that apply)",
      options: ["A: Reduced number of JOIN operations required during query execution, leading to lower CPU utilization", "B: Simplified query writing and BI tool integration because dimension structures are flattened        ", "C: Complete elimination of data redundancy and disk storage space overheads across all tables         ", "D: Faster metadata caching because primary key indexes are distributed evenly across the database     "],
      correct: [0, 1],
      concept: "Star Schemas denormalize dimensions, which increases storage redundancy but significantly reduces JOIN complexity and increases scan speeds. BI tools also perform better on denormalized structures."
    },
    {
      id: 64,
      type: "multi",
      difficulty: 2,
      question: "You are optimizing a `IDMC secure agent in Azure` that performs `checkpointing` on `SCD Types`. The design uses a Star Schema. What are the key advantages of a Star Schema over a fully normalized Snowflake Schema? (Select ALL that apply)",
      options: ["A: Reduced number of JOIN operations required during query execution, leading to lower CPU utilization", "B: Simplified query writing and BI tool integration because dimension structures are flattened        ", "C: Complete elimination of data redundancy and disk storage space overheads across all tables         ", "D: Faster metadata caching because primary key indexes are distributed evenly across the database     "],
      correct: [0, 1],
      concept: "Star Schemas denormalize dimensions, which increases storage redundancy but significantly reduces JOIN complexity and increases scan speeds. BI tools also perform better on denormalized structures."
    },
    {
      id: 65,
      type: "multi",
      difficulty: 2,
      question: "You are optimizing a `Python analytics script` that performs `materializing` on `Kimball vs Inmon`. The design uses a Star Schema. What are the key advantages of a Star Schema over a fully normalized Snowflake Schema? (Select ALL that apply)",
      options: ["A: Reduced number of JOIN operations required during query execution, leading to lower CPU utilization", "B: Simplified query writing and BI tool integration because dimension structures are flattened        ", "C: Complete elimination of data redundancy and disk storage space overheads across all tables         ", "D: Faster metadata caching because primary key indexes are distributed evenly across the database     "],
      correct: [0, 1],
      concept: "Star Schemas denormalize dimensions, which increases storage redundancy but significantly reduces JOIN complexity and increases scan speeds. BI tools also perform better on denormalized structures."
    },
    {
      id: 66,
      type: "multi",
      difficulty: 2,
      question: "You are optimizing a `PySpark job running on EMR` that performs `partitioning` on `Star Schema`. The design uses a Star Schema. What are the key advantages of a Star Schema over a fully normalized Snowflake Schema? (Select ALL that apply)",
      options: ["A: Reduced number of JOIN operations required during query execution, leading to lower CPU utilization", "B: Simplified query writing and BI tool integration because dimension structures are flattened        ", "C: Complete elimination of data redundancy and disk storage space overheads across all tables         ", "D: Faster metadata caching because primary key indexes are distributed evenly across the database     "],
      correct: [0, 1],
      concept: "Star Schemas denormalize dimensions, which increases storage redundancy but significantly reduces JOIN complexity and increases scan speeds. BI tools also perform better on denormalized structures."
    },
    {
      id: 67,
      type: "multi",
      difficulty: 2,
      question: "You are optimizing a `Snowflake warehouse on AWS` that performs `indexing` on `Snowflake Schema`. The design uses a Star Schema. What are the key advantages of a Star Schema over a fully normalized Snowflake Schema? (Select ALL that apply)",
      options: ["A: Reduced number of JOIN operations required during query execution, leading to lower CPU utilization", "B: Simplified query writing and BI tool integration because dimension structures are flattened        ", "C: Complete elimination of data redundancy and disk storage space overheads across all tables         ", "D: Faster metadata caching because primary key indexes are distributed evenly across the database     "],
      correct: [0, 1],
      concept: "Star Schemas denormalize dimensions, which increases storage redundancy but significantly reduces JOIN complexity and increases scan speeds. BI tools also perform better on denormalized structures."
    },
    {
      id: 68,
      type: "multi",
      difficulty: 2,
      question: "You are optimizing a `dbt Core model in BigQuery` that performs `governing` on `Fact & Dimension Tables`. The design uses a Star Schema. What are the key advantages of a Star Schema over a fully normalized Snowflake Schema? (Select ALL that apply)",
      options: ["A: Reduced number of JOIN operations required during query execution, leading to lower CPU utilization", "B: Simplified query writing and BI tool integration because dimension structures are flattened        ", "C: Complete elimination of data redundancy and disk storage space overheads across all tables         ", "D: Faster metadata caching because primary key indexes are distributed evenly across the database     "],
      correct: [0, 1],
      concept: "Star Schemas denormalize dimensions, which increases storage redundancy but significantly reduces JOIN complexity and increases scan speeds. BI tools also perform better on denormalized structures."
    },
    {
      id: 69,
      type: "multi",
      difficulty: 2,
      question: "You are optimizing a `DataStage parallel engine` that performs `validating` on `SCD Types`. The design uses a Star Schema. What are the key advantages of a Star Schema over a fully normalized Snowflake Schema? (Select ALL that apply)",
      options: ["A: Reduced number of JOIN operations required during query execution, leading to lower CPU utilization", "B: Simplified query writing and BI tool integration because dimension structures are flattened        ", "C: Complete elimination of data redundancy and disk storage space overheads across all tables         ", "D: Faster metadata caching because primary key indexes are distributed evenly across the database     "],
      correct: [0, 1],
      concept: "Star Schemas denormalize dimensions, which increases storage redundancy but significantly reduces JOIN complexity and increases scan speeds. BI tools also perform better on denormalized structures."
    },
    {
      id: 70,
      type: "multi",
      difficulty: 2,
      question: "You are optimizing a `IDMC secure agent in Azure` that performs `transforming` on `Kimball vs Inmon`. The design uses a Star Schema. What are the key advantages of a Star Schema over a fully normalized Snowflake Schema? (Select ALL that apply)",
      options: ["A: Reduced number of JOIN operations required during query execution, leading to lower CPU utilization", "B: Simplified query writing and BI tool integration because dimension structures are flattened        ", "C: Complete elimination of data redundancy and disk storage space overheads across all tables         ", "D: Faster metadata caching because primary key indexes are distributed evenly across the database     "],
      correct: [0, 1],
      concept: "Star Schemas denormalize dimensions, which increases storage redundancy but significantly reduces JOIN complexity and increases scan speeds. BI tools also perform better on denormalized structures."
    },
    {
      id: 71,
      type: "multi",
      difficulty: 2,
      question: "You are optimizing a `Python analytics script` that performs `parsing` on `Star Schema`. The design uses a Star Schema. What are the key advantages of a Star Schema over a fully normalized Snowflake Schema? (Select ALL that apply)",
      options: ["A: Reduced number of JOIN operations required during query execution, leading to lower CPU utilization", "B: Simplified query writing and BI tool integration because dimension structures are flattened        ", "C: Complete elimination of data redundancy and disk storage space overheads across all tables         ", "D: Faster metadata caching because primary key indexes are distributed evenly across the database     "],
      correct: [0, 1],
      concept: "Star Schemas denormalize dimensions, which increases storage redundancy but significantly reduces JOIN complexity and increases scan speeds. BI tools also perform better on denormalized structures."
    },
    {
      id: 72,
      type: "multi",
      difficulty: 2,
      question: "You are optimizing a `PySpark job running on EMR` that performs `optimizing` on `Snowflake Schema`. The design uses a Star Schema. What are the key advantages of a Star Schema over a fully normalized Snowflake Schema? (Select ALL that apply)",
      options: ["A: Reduced number of JOIN operations required during query execution, leading to lower CPU utilization", "B: Simplified query writing and BI tool integration because dimension structures are flattened        ", "C: Complete elimination of data redundancy and disk storage space overheads across all tables         ", "D: Faster metadata caching because primary key indexes are distributed evenly across the database     "],
      correct: [0, 1],
      concept: "Star Schemas denormalize dimensions, which increases storage redundancy but significantly reduces JOIN complexity and increases scan speeds. BI tools also perform better on denormalized structures."
    },
    {
      id: 73,
      type: "multi",
      difficulty: 2,
      question: "You are optimizing a `Snowflake warehouse on AWS` that performs `buffering` on `Fact & Dimension Tables`. The design uses a Star Schema. What are the key advantages of a Star Schema over a fully normalized Snowflake Schema? (Select ALL that apply)",
      options: ["A: Reduced number of JOIN operations required during query execution, leading to lower CPU utilization", "B: Simplified query writing and BI tool integration because dimension structures are flattened        ", "C: Complete elimination of data redundancy and disk storage space overheads across all tables         ", "D: Faster metadata caching because primary key indexes are distributed evenly across the database     "],
      correct: [0, 1],
      concept: "Star Schemas denormalize dimensions, which increases storage redundancy but significantly reduces JOIN complexity and increases scan speeds. BI tools also perform better on denormalized structures."
    },
    {
      id: 74,
      type: "multi",
      difficulty: 2,
      question: "You are optimizing a `dbt Core model in BigQuery` that performs `checkpointing` on `SCD Types`. The design uses a Star Schema. What are the key advantages of a Star Schema over a fully normalized Snowflake Schema? (Select ALL that apply)",
      options: ["A: Reduced number of JOIN operations required during query execution, leading to lower CPU utilization", "B: Simplified query writing and BI tool integration because dimension structures are flattened        ", "C: Complete elimination of data redundancy and disk storage space overheads across all tables         ", "D: Faster metadata caching because primary key indexes are distributed evenly across the database     "],
      correct: [0, 1],
      concept: "Star Schemas denormalize dimensions, which increases storage redundancy but significantly reduces JOIN complexity and increases scan speeds. BI tools also perform better on denormalized structures."
    },
    {
      id: 75,
      type: "multi",
      difficulty: 2,
      question: "You are optimizing a `DataStage parallel engine` that performs `materializing` on `Kimball vs Inmon`. The design uses a Star Schema. What are the key advantages of a Star Schema over a fully normalized Snowflake Schema? (Select ALL that apply)",
      options: ["A: Reduced number of JOIN operations required during query execution, leading to lower CPU utilization", "B: Simplified query writing and BI tool integration because dimension structures are flattened        ", "C: Complete elimination of data redundancy and disk storage space overheads across all tables         ", "D: Faster metadata caching because primary key indexes are distributed evenly across the database     "],
      correct: [0, 1],
      concept: "Star Schemas denormalize dimensions, which increases storage redundancy but significantly reduces JOIN complexity and increases scan speeds. BI tools also perform better on denormalized structures."
    },
    {
      id: 76,
      type: "multi",
      difficulty: 3,
      question: "You are optimizing a `IDMC secure agent in Azure` that performs `partitioning` on `Star Schema`. The design uses a Star Schema. What are the key advantages of a Star Schema over a fully normalized Snowflake Schema? (Select ALL that apply)",
      options: ["A: Reduced number of JOIN operations required during query execution, leading to lower CPU utilization", "B: Simplified query writing and BI tool integration because dimension structures are flattened        ", "C: Complete elimination of data redundancy and disk storage space overheads across all tables         ", "D: Faster metadata caching because primary key indexes are distributed evenly across the database     "],
      correct: [0, 1],
      concept: "Star Schemas denormalize dimensions, which increases storage redundancy but significantly reduces JOIN complexity and increases scan speeds. BI tools also perform better on denormalized structures."
    },
    {
      id: 77,
      type: "multi",
      difficulty: 3,
      question: "You are optimizing a `Python analytics script` that performs `indexing` on `Snowflake Schema`. The design uses a Star Schema. What are the key advantages of a Star Schema over a fully normalized Snowflake Schema? (Select ALL that apply)",
      options: ["A: Reduced number of JOIN operations required during query execution, leading to lower CPU utilization", "B: Simplified query writing and BI tool integration because dimension structures are flattened        ", "C: Complete elimination of data redundancy and disk storage space overheads across all tables         ", "D: Faster metadata caching because primary key indexes are distributed evenly across the database     "],
      correct: [0, 1],
      concept: "Star Schemas denormalize dimensions, which increases storage redundancy but significantly reduces JOIN complexity and increases scan speeds. BI tools also perform better on denormalized structures."
    },
    {
      id: 78,
      type: "multi",
      difficulty: 3,
      question: "You are optimizing a `PySpark job running on EMR` that performs `governing` on `Fact & Dimension Tables`. The design uses a Star Schema. What are the key advantages of a Star Schema over a fully normalized Snowflake Schema? (Select ALL that apply)",
      options: ["A: Reduced number of JOIN operations required during query execution, leading to lower CPU utilization", "B: Simplified query writing and BI tool integration because dimension structures are flattened        ", "C: Complete elimination of data redundancy and disk storage space overheads across all tables         ", "D: Faster metadata caching because primary key indexes are distributed evenly across the database     "],
      correct: [0, 1],
      concept: "Star Schemas denormalize dimensions, which increases storage redundancy but significantly reduces JOIN complexity and increases scan speeds. BI tools also perform better on denormalized structures."
    },
    {
      id: 79,
      type: "multi",
      difficulty: 3,
      question: "You are optimizing a `Snowflake warehouse on AWS` that performs `validating` on `SCD Types`. The design uses a Star Schema. What are the key advantages of a Star Schema over a fully normalized Snowflake Schema? (Select ALL that apply)",
      options: ["A: Reduced number of JOIN operations required during query execution, leading to lower CPU utilization", "B: Simplified query writing and BI tool integration because dimension structures are flattened        ", "C: Complete elimination of data redundancy and disk storage space overheads across all tables         ", "D: Faster metadata caching because primary key indexes are distributed evenly across the database     "],
      correct: [0, 1],
      concept: "Star Schemas denormalize dimensions, which increases storage redundancy but significantly reduces JOIN complexity and increases scan speeds. BI tools also perform better on denormalized structures."
    },
    {
      id: 80,
      type: "multi",
      difficulty: 3,
      question: "You are optimizing a `dbt Core model in BigQuery` that performs `transforming` on `Kimball vs Inmon`. The design uses a Star Schema. What are the key advantages of a Star Schema over a fully normalized Snowflake Schema? (Select ALL that apply)",
      options: ["A: Reduced number of JOIN operations required during query execution, leading to lower CPU utilization", "B: Simplified query writing and BI tool integration because dimension structures are flattened        ", "C: Complete elimination of data redundancy and disk storage space overheads across all tables         ", "D: Faster metadata caching because primary key indexes are distributed evenly across the database     "],
      correct: [0, 1],
      concept: "Star Schemas denormalize dimensions, which increases storage redundancy but significantly reduces JOIN complexity and increases scan speeds. BI tools also perform better on denormalized structures."
    },
    {
      id: 81,
      type: "multi",
      difficulty: 3,
      question: "You are optimizing a `DataStage parallel engine` that performs `parsing` on `Star Schema`. The design uses a Star Schema. What are the key advantages of a Star Schema over a fully normalized Snowflake Schema? (Select ALL that apply)",
      options: ["A: Reduced number of JOIN operations required during query execution, leading to lower CPU utilization", "B: Simplified query writing and BI tool integration because dimension structures are flattened        ", "C: Complete elimination of data redundancy and disk storage space overheads across all tables         ", "D: Faster metadata caching because primary key indexes are distributed evenly across the database     "],
      correct: [0, 1],
      concept: "Star Schemas denormalize dimensions, which increases storage redundancy but significantly reduces JOIN complexity and increases scan speeds. BI tools also perform better on denormalized structures."
    },
    {
      id: 82,
      type: "multi",
      difficulty: 3,
      question: "You are optimizing a `IDMC secure agent in Azure` that performs `optimizing` on `Snowflake Schema`. The design uses a Star Schema. What are the key advantages of a Star Schema over a fully normalized Snowflake Schema? (Select ALL that apply)",
      options: ["A: Reduced number of JOIN operations required during query execution, leading to lower CPU utilization", "B: Simplified query writing and BI tool integration because dimension structures are flattened        ", "C: Complete elimination of data redundancy and disk storage space overheads across all tables         ", "D: Faster metadata caching because primary key indexes are distributed evenly across the database     "],
      correct: [0, 1],
      concept: "Star Schemas denormalize dimensions, which increases storage redundancy but significantly reduces JOIN complexity and increases scan speeds. BI tools also perform better on denormalized structures."
    },
    {
      id: 83,
      type: "multi",
      difficulty: 3,
      question: "You are optimizing a `Python analytics script` that performs `buffering` on `Fact & Dimension Tables`. The design uses a Star Schema. What are the key advantages of a Star Schema over a fully normalized Snowflake Schema? (Select ALL that apply)",
      options: ["A: Reduced number of JOIN operations required during query execution, leading to lower CPU utilization", "B: Simplified query writing and BI tool integration because dimension structures are flattened        ", "C: Complete elimination of data redundancy and disk storage space overheads across all tables         ", "D: Faster metadata caching because primary key indexes are distributed evenly across the database     "],
      correct: [0, 1],
      concept: "Star Schemas denormalize dimensions, which increases storage redundancy but significantly reduces JOIN complexity and increases scan speeds. BI tools also perform better on denormalized structures."
    },
    {
      id: 84,
      type: "multi",
      difficulty: 3,
      question: "You are optimizing a `PySpark job running on EMR` that performs `checkpointing` on `SCD Types`. The design uses a Star Schema. What are the key advantages of a Star Schema over a fully normalized Snowflake Schema? (Select ALL that apply)",
      options: ["A: Reduced number of JOIN operations required during query execution, leading to lower CPU utilization", "B: Simplified query writing and BI tool integration because dimension structures are flattened        ", "C: Complete elimination of data redundancy and disk storage space overheads across all tables         ", "D: Faster metadata caching because primary key indexes are distributed evenly across the database     "],
      correct: [0, 1],
      concept: "Star Schemas denormalize dimensions, which increases storage redundancy but significantly reduces JOIN complexity and increases scan speeds. BI tools also perform better on denormalized structures."
    },
    {
      id: 85,
      type: "multi",
      difficulty: 3,
      question: "You are optimizing a `Snowflake warehouse on AWS` that performs `materializing` on `Kimball vs Inmon`. The design uses a Star Schema. What are the key advantages of a Star Schema over a fully normalized Snowflake Schema? (Select ALL that apply)",
      options: ["A: Reduced number of JOIN operations required during query execution, leading to lower CPU utilization", "B: Simplified query writing and BI tool integration because dimension structures are flattened        ", "C: Complete elimination of data redundancy and disk storage space overheads across all tables         ", "D: Faster metadata caching because primary key indexes are distributed evenly across the database     "],
      correct: [0, 1],
      concept: "Star Schemas denormalize dimensions, which increases storage redundancy but significantly reduces JOIN complexity and increases scan speeds. BI tools also perform better on denormalized structures."
    },
    {
      id: 86,
      type: "tf",
      difficulty: 3,
      question: "Is it true that an OLAP database system designed for `Star Schema` uses columnar storage to ensure that broad row-wise INSERT statements are executed faster than in an OLTP row-based system?",
      options: ["True, columnar files optimize disk writes globally  ", "False, columnar layouts slow down single row writes "],
      correct: [1],
      concept: "False. Columnar storage is optimized for scanning and aggregating a subset of columns across millions of rows (OLAP). However, single row-wise INSERT statements are slower than in row-oriented databases (OLTP) because the system has to write data across separate columns on disk."
    },
    {
      id: 87,
      type: "tf",
      difficulty: 3,
      question: "Is it true that an OLAP database system designed for `Snowflake Schema` uses columnar storage to ensure that broad row-wise INSERT statements are executed faster than in an OLTP row-based system?",
      options: ["True, columnar files optimize disk writes globally  ", "False, columnar layouts slow down single row writes "],
      correct: [1],
      concept: "False. Columnar storage is optimized for scanning and aggregating a subset of columns across millions of rows (OLAP). However, single row-wise INSERT statements are slower than in row-oriented databases (OLTP) because the system has to write data across separate columns on disk."
    },
    {
      id: 88,
      type: "tf",
      difficulty: 3,
      question: "Is it true that an OLAP database system designed for `Fact & Dimension Tables` uses columnar storage to ensure that broad row-wise INSERT statements are executed faster than in an OLTP row-based system?",
      options: ["True, columnar files optimize disk writes globally  ", "False, columnar layouts slow down single row writes "],
      correct: [1],
      concept: "False. Columnar storage is optimized for scanning and aggregating a subset of columns across millions of rows (OLAP). However, single row-wise INSERT statements are slower than in row-oriented databases (OLTP) because the system has to write data across separate columns on disk."
    },
    {
      id: 89,
      type: "tf",
      difficulty: 3,
      question: "Is it true that an OLAP database system designed for `SCD Types` uses columnar storage to ensure that broad row-wise INSERT statements are executed faster than in an OLTP row-based system?",
      options: ["True, columnar files optimize disk writes globally  ", "False, columnar layouts slow down single row writes "],
      correct: [1],
      concept: "False. Columnar storage is optimized for scanning and aggregating a subset of columns across millions of rows (OLAP). However, single row-wise INSERT statements are slower than in row-oriented databases (OLTP) because the system has to write data across separate columns on disk."
    },
    {
      id: 90,
      type: "tf",
      difficulty: 3,
      question: "Is it true that an OLAP database system designed for `Kimball vs Inmon` uses columnar storage to ensure that broad row-wise INSERT statements are executed faster than in an OLTP row-based system?",
      options: ["True, columnar files optimize disk writes globally  ", "False, columnar layouts slow down single row writes "],
      correct: [1],
      concept: "False. Columnar storage is optimized for scanning and aggregating a subset of columns across millions of rows (OLAP). However, single row-wise INSERT statements are slower than in row-oriented databases (OLTP) because the system has to write data across separate columns on disk."
    },
    {
      id: 91,
      type: "tf",
      difficulty: 3,
      question: "Is it true that an OLAP database system designed for `Star Schema` uses columnar storage to ensure that broad row-wise INSERT statements are executed faster than in an OLTP row-based system?",
      options: ["True, columnar files optimize disk writes globally  ", "False, columnar layouts slow down single row writes "],
      correct: [1],
      concept: "False. Columnar storage is optimized for scanning and aggregating a subset of columns across millions of rows (OLAP). However, single row-wise INSERT statements are slower than in row-oriented databases (OLTP) because the system has to write data across separate columns on disk."
    },
    {
      id: 92,
      type: "tf",
      difficulty: 3,
      question: "Is it true that an OLAP database system designed for `Snowflake Schema` uses columnar storage to ensure that broad row-wise INSERT statements are executed faster than in an OLTP row-based system?",
      options: ["True, columnar files optimize disk writes globally  ", "False, columnar layouts slow down single row writes "],
      correct: [1],
      concept: "False. Columnar storage is optimized for scanning and aggregating a subset of columns across millions of rows (OLAP). However, single row-wise INSERT statements are slower than in row-oriented databases (OLTP) because the system has to write data across separate columns on disk."
    },
    {
      id: 93,
      type: "tf",
      difficulty: 3,
      question: "Is it true that an OLAP database system designed for `Fact & Dimension Tables` uses columnar storage to ensure that broad row-wise INSERT statements are executed faster than in an OLTP row-based system?",
      options: ["True, columnar files optimize disk writes globally  ", "False, columnar layouts slow down single row writes "],
      correct: [1],
      concept: "False. Columnar storage is optimized for scanning and aggregating a subset of columns across millions of rows (OLAP). However, single row-wise INSERT statements are slower than in row-oriented databases (OLTP) because the system has to write data across separate columns on disk."
    },
    {
      id: 94,
      type: "tf",
      difficulty: 3,
      question: "Is it true that an OLAP database system designed for `SCD Types` uses columnar storage to ensure that broad row-wise INSERT statements are executed faster than in an OLTP row-based system?",
      options: ["True, columnar files optimize disk writes globally  ", "False, columnar layouts slow down single row writes "],
      correct: [1],
      concept: "False. Columnar storage is optimized for scanning and aggregating a subset of columns across millions of rows (OLAP). However, single row-wise INSERT statements are slower than in row-oriented databases (OLTP) because the system has to write data across separate columns on disk."
    },
    {
      id: 95,
      type: "tf",
      difficulty: 3,
      question: "Is it true that an OLAP database system designed for `Kimball vs Inmon` uses columnar storage to ensure that broad row-wise INSERT statements are executed faster than in an OLTP row-based system?",
      options: ["True, columnar files optimize disk writes globally  ", "False, columnar layouts slow down single row writes "],
      correct: [1],
      concept: "False. Columnar storage is optimized for scanning and aggregating a subset of columns across millions of rows (OLAP). However, single row-wise INSERT statements are slower than in row-oriented databases (OLTP) because the system has to write data across separate columns on disk."
    },
    {
      id: 96,
      type: "tf",
      difficulty: 3,
      question: "Is it true that an OLAP database system designed for `Star Schema` uses columnar storage to ensure that broad row-wise INSERT statements are executed faster than in an OLTP row-based system?",
      options: ["True, columnar files optimize disk writes globally  ", "False, columnar layouts slow down single row writes "],
      correct: [1],
      concept: "False. Columnar storage is optimized for scanning and aggregating a subset of columns across millions of rows (OLAP). However, single row-wise INSERT statements are slower than in row-oriented databases (OLTP) because the system has to write data across separate columns on disk."
    },
    {
      id: 97,
      type: "tf",
      difficulty: 3,
      question: "Is it true that an OLAP database system designed for `Snowflake Schema` uses columnar storage to ensure that broad row-wise INSERT statements are executed faster than in an OLTP row-based system?",
      options: ["True, columnar files optimize disk writes globally  ", "False, columnar layouts slow down single row writes "],
      correct: [1],
      concept: "False. Columnar storage is optimized for scanning and aggregating a subset of columns across millions of rows (OLAP). However, single row-wise INSERT statements are slower than in row-oriented databases (OLTP) because the system has to write data across separate columns on disk."
    },
    {
      id: 98,
      type: "tf",
      difficulty: 3,
      question: "Is it true that an OLAP database system designed for `Fact & Dimension Tables` uses columnar storage to ensure that broad row-wise INSERT statements are executed faster than in an OLTP row-based system?",
      options: ["True, columnar files optimize disk writes globally  ", "False, columnar layouts slow down single row writes "],
      correct: [1],
      concept: "False. Columnar storage is optimized for scanning and aggregating a subset of columns across millions of rows (OLAP). However, single row-wise INSERT statements are slower than in row-oriented databases (OLTP) because the system has to write data across separate columns on disk."
    },
    {
      id: 99,
      type: "tf",
      difficulty: 3,
      question: "Is it true that an OLAP database system designed for `SCD Types` uses columnar storage to ensure that broad row-wise INSERT statements are executed faster than in an OLTP row-based system?",
      options: ["True, columnar files optimize disk writes globally  ", "False, columnar layouts slow down single row writes "],
      correct: [1],
      concept: "False. Columnar storage is optimized for scanning and aggregating a subset of columns across millions of rows (OLAP). However, single row-wise INSERT statements are slower than in row-oriented databases (OLTP) because the system has to write data across separate columns on disk."
    },
    {
      id: 100,
      type: "tf",
      difficulty: 3,
      question: "Is it true that an OLAP database system designed for `Kimball vs Inmon` uses columnar storage to ensure that broad row-wise INSERT statements are executed faster than in an OLTP row-based system?",
      options: ["True, columnar files optimize disk writes globally  ", "False, columnar layouts slow down single row writes "],
      correct: [1],
      concept: "False. Columnar storage is optimized for scanning and aggregating a subset of columns across millions of rows (OLAP). However, single row-wise INSERT statements are slower than in row-oriented databases (OLTP) because the system has to write data across separate columns on disk."
    }
  ]
};

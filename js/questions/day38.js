window.QUIZ_DATA = window.QUIZ_DATA || {};
window.QUIZ_DATA["day38"] = {
  title: "dbt Sources & Seeds",
  topics: ["Defining Sources", "Schema Configuration", "Source Properties", "Seeds & CSV Loading", "Ref & Source Functions"],
  questions: [
    {
      id: 1,
      type: "single",
      difficulty: 1,
      question: "A dbt project is configured for `Defining Sources` using incremental materialization. You notice that new rows are being inserted but old rows are not being updated when their values change in the source table. What is the most likely configuration error in the model\'s SQL block?",
      options: ["The model is missing the `unique_key` parameter definition in its config block      ", "The database user lacks appropriate DML privileges to execute upsert transactions   ", "Incremental models do not support matching source records by default parameters     ", "The target table requires a primary key constraint to match incremental updates     "],
      correct: [0],
      concept: "For an incremental dbt model to perform an upsert (update existing + insert new), it requires a unique_key config parameter (e.g. unique_key=\'id\'). If unique_key is omitted, dbt defaults to an append-only strategy, inserting all rows as duplicates."
    },
    {
      id: 2,
      type: "single",
      difficulty: 1,
      question: "A dbt project is configured for `Schema Configuration` using incremental materialization. You notice that new rows are being inserted but old rows are not being updated when their values change in the source table. What is the most likely configuration error in the model\'s SQL block?",
      options: ["The model is missing the `unique_key` parameter definition in its config block      ", "The database user lacks appropriate DML privileges to execute upsert transactions   ", "Incremental models do not support matching source records by default parameters     ", "The target table requires a primary key constraint to match incremental updates     "],
      correct: [0],
      concept: "For an incremental dbt model to perform an upsert (update existing + insert new), it requires a unique_key config parameter (e.g. unique_key=\'id\'). If unique_key is omitted, dbt defaults to an append-only strategy, inserting all rows as duplicates."
    },
    {
      id: 3,
      type: "single",
      difficulty: 1,
      question: "A dbt project is configured for `Source Properties` using incremental materialization. You notice that new rows are being inserted but old rows are not being updated when their values change in the source table. What is the most likely configuration error in the model\'s SQL block?",
      options: ["The model is missing the `unique_key` parameter definition in its config block      ", "The database user lacks appropriate DML privileges to execute upsert transactions   ", "Incremental models do not support matching source records by default parameters     ", "The target table requires a primary key constraint to match incremental updates     "],
      correct: [0],
      concept: "For an incremental dbt model to perform an upsert (update existing + insert new), it requires a unique_key config parameter (e.g. unique_key=\'id\'). If unique_key is omitted, dbt defaults to an append-only strategy, inserting all rows as duplicates."
    },
    {
      id: 4,
      type: "single",
      difficulty: 1,
      question: "A dbt project is configured for `Seeds & CSV Loading` using incremental materialization. You notice that new rows are being inserted but old rows are not being updated when their values change in the source table. What is the most likely configuration error in the model\'s SQL block?",
      options: ["The model is missing the `unique_key` parameter definition in its config block      ", "The database user lacks appropriate DML privileges to execute upsert transactions   ", "Incremental models do not support matching source records by default parameters     ", "The target table requires a primary key constraint to match incremental updates     "],
      correct: [0],
      concept: "For an incremental dbt model to perform an upsert (update existing + insert new), it requires a unique_key config parameter (e.g. unique_key=\'id\'). If unique_key is omitted, dbt defaults to an append-only strategy, inserting all rows as duplicates."
    },
    {
      id: 5,
      type: "single",
      difficulty: 1,
      question: "A dbt project is configured for `Ref & Source Functions` using incremental materialization. You notice that new rows are being inserted but old rows are not being updated when their values change in the source table. What is the most likely configuration error in the model\'s SQL block?",
      options: ["The model is missing the `unique_key` parameter definition in its config block      ", "The database user lacks appropriate DML privileges to execute upsert transactions   ", "Incremental models do not support matching source records by default parameters     ", "The target table requires a primary key constraint to match incremental updates     "],
      correct: [0],
      concept: "For an incremental dbt model to perform an upsert (update existing + insert new), it requires a unique_key config parameter (e.g. unique_key=\'id\'). If unique_key is omitted, dbt defaults to an append-only strategy, inserting all rows as duplicates."
    },
    {
      id: 6,
      type: "single",
      difficulty: 1,
      question: "A dbt project is configured for `Defining Sources` using incremental materialization. You notice that new rows are being inserted but old rows are not being updated when their values change in the source table. What is the most likely configuration error in the model\'s SQL block?",
      options: ["The model is missing the `unique_key` parameter definition in its config block      ", "The database user lacks appropriate DML privileges to execute upsert transactions   ", "Incremental models do not support matching source records by default parameters     ", "The target table requires a primary key constraint to match incremental updates     "],
      correct: [0],
      concept: "For an incremental dbt model to perform an upsert (update existing + insert new), it requires a unique_key config parameter (e.g. unique_key=\'id\'). If unique_key is omitted, dbt defaults to an append-only strategy, inserting all rows as duplicates."
    },
    {
      id: 7,
      type: "single",
      difficulty: 1,
      question: "A dbt project is configured for `Schema Configuration` using incremental materialization. You notice that new rows are being inserted but old rows are not being updated when their values change in the source table. What is the most likely configuration error in the model\'s SQL block?",
      options: ["The model is missing the `unique_key` parameter definition in its config block      ", "The database user lacks appropriate DML privileges to execute upsert transactions   ", "Incremental models do not support matching source records by default parameters     ", "The target table requires a primary key constraint to match incremental updates     "],
      correct: [0],
      concept: "For an incremental dbt model to perform an upsert (update existing + insert new), it requires a unique_key config parameter (e.g. unique_key=\'id\'). If unique_key is omitted, dbt defaults to an append-only strategy, inserting all rows as duplicates."
    },
    {
      id: 8,
      type: "single",
      difficulty: 1,
      question: "A dbt project is configured for `Source Properties` using incremental materialization. You notice that new rows are being inserted but old rows are not being updated when their values change in the source table. What is the most likely configuration error in the model\'s SQL block?",
      options: ["The model is missing the `unique_key` parameter definition in its config block      ", "The database user lacks appropriate DML privileges to execute upsert transactions   ", "Incremental models do not support matching source records by default parameters     ", "The target table requires a primary key constraint to match incremental updates     "],
      correct: [0],
      concept: "For an incremental dbt model to perform an upsert (update existing + insert new), it requires a unique_key config parameter (e.g. unique_key=\'id\'). If unique_key is omitted, dbt defaults to an append-only strategy, inserting all rows as duplicates."
    },
    {
      id: 9,
      type: "single",
      difficulty: 1,
      question: "A dbt project is configured for `Seeds & CSV Loading` using incremental materialization. You notice that new rows are being inserted but old rows are not being updated when their values change in the source table. What is the most likely configuration error in the model\'s SQL block?",
      options: ["The model is missing the `unique_key` parameter definition in its config block      ", "The database user lacks appropriate DML privileges to execute upsert transactions   ", "Incremental models do not support matching source records by default parameters     ", "The target table requires a primary key constraint to match incremental updates     "],
      correct: [0],
      concept: "For an incremental dbt model to perform an upsert (update existing + insert new), it requires a unique_key config parameter (e.g. unique_key=\'id\'). If unique_key is omitted, dbt defaults to an append-only strategy, inserting all rows as duplicates."
    },
    {
      id: 10,
      type: "single",
      difficulty: 1,
      question: "A dbt project is configured for `Ref & Source Functions` using incremental materialization. You notice that new rows are being inserted but old rows are not being updated when their values change in the source table. What is the most likely configuration error in the model\'s SQL block?",
      options: ["The model is missing the `unique_key` parameter definition in its config block      ", "The database user lacks appropriate DML privileges to execute upsert transactions   ", "Incremental models do not support matching source records by default parameters     ", "The target table requires a primary key constraint to match incremental updates     "],
      correct: [0],
      concept: "For an incremental dbt model to perform an upsert (update existing + insert new), it requires a unique_key config parameter (e.g. unique_key=\'id\'). If unique_key is omitted, dbt defaults to an append-only strategy, inserting all rows as duplicates."
    },
    {
      id: 11,
      type: "single",
      difficulty: 1,
      question: "A dbt project is configured for `Defining Sources` using incremental materialization. You notice that new rows are being inserted but old rows are not being updated when their values change in the source table. What is the most likely configuration error in the model\'s SQL block?",
      options: ["The model is missing the `unique_key` parameter definition in its config block      ", "The database user lacks appropriate DML privileges to execute upsert transactions   ", "Incremental models do not support matching source records by default parameters     ", "The target table requires a primary key constraint to match incremental updates     "],
      correct: [0],
      concept: "For an incremental dbt model to perform an upsert (update existing + insert new), it requires a unique_key config parameter (e.g. unique_key=\'id\'). If unique_key is omitted, dbt defaults to an append-only strategy, inserting all rows as duplicates."
    },
    {
      id: 12,
      type: "single",
      difficulty: 1,
      question: "A dbt project is configured for `Schema Configuration` using incremental materialization. You notice that new rows are being inserted but old rows are not being updated when their values change in the source table. What is the most likely configuration error in the model\'s SQL block?",
      options: ["The model is missing the `unique_key` parameter definition in its config block      ", "The database user lacks appropriate DML privileges to execute upsert transactions   ", "Incremental models do not support matching source records by default parameters     ", "The target table requires a primary key constraint to match incremental updates     "],
      correct: [0],
      concept: "For an incremental dbt model to perform an upsert (update existing + insert new), it requires a unique_key config parameter (e.g. unique_key=\'id\'). If unique_key is omitted, dbt defaults to an append-only strategy, inserting all rows as duplicates."
    },
    {
      id: 13,
      type: "single",
      difficulty: 1,
      question: "A dbt project is configured for `Source Properties` using incremental materialization. You notice that new rows are being inserted but old rows are not being updated when their values change in the source table. What is the most likely configuration error in the model\'s SQL block?",
      options: ["The model is missing the `unique_key` parameter definition in its config block      ", "The database user lacks appropriate DML privileges to execute upsert transactions   ", "Incremental models do not support matching source records by default parameters     ", "The target table requires a primary key constraint to match incremental updates     "],
      correct: [0],
      concept: "For an incremental dbt model to perform an upsert (update existing + insert new), it requires a unique_key config parameter (e.g. unique_key=\'id\'). If unique_key is omitted, dbt defaults to an append-only strategy, inserting all rows as duplicates."
    },
    {
      id: 14,
      type: "single",
      difficulty: 1,
      question: "A dbt project is configured for `Seeds & CSV Loading` using incremental materialization. You notice that new rows are being inserted but old rows are not being updated when their values change in the source table. What is the most likely configuration error in the model\'s SQL block?",
      options: ["The model is missing the `unique_key` parameter definition in its config block      ", "The database user lacks appropriate DML privileges to execute upsert transactions   ", "Incremental models do not support matching source records by default parameters     ", "The target table requires a primary key constraint to match incremental updates     "],
      correct: [0],
      concept: "For an incremental dbt model to perform an upsert (update existing + insert new), it requires a unique_key config parameter (e.g. unique_key=\'id\'). If unique_key is omitted, dbt defaults to an append-only strategy, inserting all rows as duplicates."
    },
    {
      id: 15,
      type: "single",
      difficulty: 1,
      question: "A dbt project is configured for `Ref & Source Functions` using incremental materialization. You notice that new rows are being inserted but old rows are not being updated when their values change in the source table. What is the most likely configuration error in the model\'s SQL block?",
      options: ["The model is missing the `unique_key` parameter definition in its config block      ", "The database user lacks appropriate DML privileges to execute upsert transactions   ", "Incremental models do not support matching source records by default parameters     ", "The target table requires a primary key constraint to match incremental updates     "],
      correct: [0],
      concept: "For an incremental dbt model to perform an upsert (update existing + insert new), it requires a unique_key config parameter (e.g. unique_key=\'id\'). If unique_key is omitted, dbt defaults to an append-only strategy, inserting all rows as duplicates."
    },
    {
      id: 16,
      type: "single",
      difficulty: 1,
      question: "A dbt project is configured for `Defining Sources` using incremental materialization. You notice that new rows are being inserted but old rows are not being updated when their values change in the source table. What is the most likely configuration error in the model\'s SQL block?",
      options: ["The model is missing the `unique_key` parameter definition in its config block      ", "The database user lacks appropriate DML privileges to execute upsert transactions   ", "Incremental models do not support matching source records by default parameters     ", "The target table requires a primary key constraint to match incremental updates     "],
      correct: [0],
      concept: "For an incremental dbt model to perform an upsert (update existing + insert new), it requires a unique_key config parameter (e.g. unique_key=\'id\'). If unique_key is omitted, dbt defaults to an append-only strategy, inserting all rows as duplicates."
    },
    {
      id: 17,
      type: "single",
      difficulty: 1,
      question: "A dbt project is configured for `Schema Configuration` using incremental materialization. You notice that new rows are being inserted but old rows are not being updated when their values change in the source table. What is the most likely configuration error in the model\'s SQL block?",
      options: ["The model is missing the `unique_key` parameter definition in its config block      ", "The database user lacks appropriate DML privileges to execute upsert transactions   ", "Incremental models do not support matching source records by default parameters     ", "The target table requires a primary key constraint to match incremental updates     "],
      correct: [0],
      concept: "For an incremental dbt model to perform an upsert (update existing + insert new), it requires a unique_key config parameter (e.g. unique_key=\'id\'). If unique_key is omitted, dbt defaults to an append-only strategy, inserting all rows as duplicates."
    },
    {
      id: 18,
      type: "single",
      difficulty: 1,
      question: "A dbt project is configured for `Source Properties` using incremental materialization. You notice that new rows are being inserted but old rows are not being updated when their values change in the source table. What is the most likely configuration error in the model\'s SQL block?",
      options: ["The model is missing the `unique_key` parameter definition in its config block      ", "The database user lacks appropriate DML privileges to execute upsert transactions   ", "Incremental models do not support matching source records by default parameters     ", "The target table requires a primary key constraint to match incremental updates     "],
      correct: [0],
      concept: "For an incremental dbt model to perform an upsert (update existing + insert new), it requires a unique_key config parameter (e.g. unique_key=\'id\'). If unique_key is omitted, dbt defaults to an append-only strategy, inserting all rows as duplicates."
    },
    {
      id: 19,
      type: "single",
      difficulty: 1,
      question: "A dbt project is configured for `Seeds & CSV Loading` using incremental materialization. You notice that new rows are being inserted but old rows are not being updated when their values change in the source table. What is the most likely configuration error in the model\'s SQL block?",
      options: ["The model is missing the `unique_key` parameter definition in its config block      ", "The database user lacks appropriate DML privileges to execute upsert transactions   ", "Incremental models do not support matching source records by default parameters     ", "The target table requires a primary key constraint to match incremental updates     "],
      correct: [0],
      concept: "For an incremental dbt model to perform an upsert (update existing + insert new), it requires a unique_key config parameter (e.g. unique_key=\'id\'). If unique_key is omitted, dbt defaults to an append-only strategy, inserting all rows as duplicates."
    },
    {
      id: 20,
      type: "single",
      difficulty: 1,
      question: "A dbt project is configured for `Ref & Source Functions` using incremental materialization. You notice that new rows are being inserted but old rows are not being updated when their values change in the source table. What is the most likely configuration error in the model\'s SQL block?",
      options: ["The model is missing the `unique_key` parameter definition in its config block      ", "The database user lacks appropriate DML privileges to execute upsert transactions   ", "Incremental models do not support matching source records by default parameters     ", "The target table requires a primary key constraint to match incremental updates     "],
      correct: [0],
      concept: "For an incremental dbt model to perform an upsert (update existing + insert new), it requires a unique_key config parameter (e.g. unique_key=\'id\'). If unique_key is omitted, dbt defaults to an append-only strategy, inserting all rows as duplicates."
    },
    {
      id: 21,
      type: "single",
      difficulty: 1,
      question: "A dbt project is configured for `Defining Sources` using incremental materialization. You notice that new rows are being inserted but old rows are not being updated when their values change in the source table. What is the most likely configuration error in the model\'s SQL block?",
      options: ["The model is missing the `unique_key` parameter definition in its config block      ", "The database user lacks appropriate DML privileges to execute upsert transactions   ", "Incremental models do not support matching source records by default parameters     ", "The target table requires a primary key constraint to match incremental updates     "],
      correct: [0],
      concept: "For an incremental dbt model to perform an upsert (update existing + insert new), it requires a unique_key config parameter (e.g. unique_key=\'id\'). If unique_key is omitted, dbt defaults to an append-only strategy, inserting all rows as duplicates."
    },
    {
      id: 22,
      type: "single",
      difficulty: 1,
      question: "A dbt project is configured for `Schema Configuration` using incremental materialization. You notice that new rows are being inserted but old rows are not being updated when their values change in the source table. What is the most likely configuration error in the model\'s SQL block?",
      options: ["The model is missing the `unique_key` parameter definition in its config block      ", "The database user lacks appropriate DML privileges to execute upsert transactions   ", "Incremental models do not support matching source records by default parameters     ", "The target table requires a primary key constraint to match incremental updates     "],
      correct: [0],
      concept: "For an incremental dbt model to perform an upsert (update existing + insert new), it requires a unique_key config parameter (e.g. unique_key=\'id\'). If unique_key is omitted, dbt defaults to an append-only strategy, inserting all rows as duplicates."
    },
    {
      id: 23,
      type: "single",
      difficulty: 1,
      question: "A dbt project is configured for `Source Properties` using incremental materialization. You notice that new rows are being inserted but old rows are not being updated when their values change in the source table. What is the most likely configuration error in the model\'s SQL block?",
      options: ["The model is missing the `unique_key` parameter definition in its config block      ", "The database user lacks appropriate DML privileges to execute upsert transactions   ", "Incremental models do not support matching source records by default parameters     ", "The target table requires a primary key constraint to match incremental updates     "],
      correct: [0],
      concept: "For an incremental dbt model to perform an upsert (update existing + insert new), it requires a unique_key config parameter (e.g. unique_key=\'id\'). If unique_key is omitted, dbt defaults to an append-only strategy, inserting all rows as duplicates."
    },
    {
      id: 24,
      type: "single",
      difficulty: 1,
      question: "A dbt project is configured for `Seeds & CSV Loading` using incremental materialization. You notice that new rows are being inserted but old rows are not being updated when their values change in the source table. What is the most likely configuration error in the model\'s SQL block?",
      options: ["The model is missing the `unique_key` parameter definition in its config block      ", "The database user lacks appropriate DML privileges to execute upsert transactions   ", "Incremental models do not support matching source records by default parameters     ", "The target table requires a primary key constraint to match incremental updates     "],
      correct: [0],
      concept: "For an incremental dbt model to perform an upsert (update existing + insert new), it requires a unique_key config parameter (e.g. unique_key=\'id\'). If unique_key is omitted, dbt defaults to an append-only strategy, inserting all rows as duplicates."
    },
    {
      id: 25,
      type: "single",
      difficulty: 1,
      question: "A dbt project is configured for `Ref & Source Functions` using incremental materialization. You notice that new rows are being inserted but old rows are not being updated when their values change in the source table. What is the most likely configuration error in the model\'s SQL block?",
      options: ["The model is missing the `unique_key` parameter definition in its config block      ", "The database user lacks appropriate DML privileges to execute upsert transactions   ", "Incremental models do not support matching source records by default parameters     ", "The target table requires a primary key constraint to match incremental updates     "],
      correct: [0],
      concept: "For an incremental dbt model to perform an upsert (update existing + insert new), it requires a unique_key config parameter (e.g. unique_key=\'id\'). If unique_key is omitted, dbt defaults to an append-only strategy, inserting all rows as duplicates."
    },
    {
      id: 26,
      type: "single",
      difficulty: 1,
      question: "A dbt project is configured for `Defining Sources` using incremental materialization. You notice that new rows are being inserted but old rows are not being updated when their values change in the source table. What is the most likely configuration error in the model\'s SQL block?",
      options: ["The model is missing the `unique_key` parameter definition in its config block      ", "The database user lacks appropriate DML privileges to execute upsert transactions   ", "Incremental models do not support matching source records by default parameters     ", "The target table requires a primary key constraint to match incremental updates     "],
      correct: [0],
      concept: "For an incremental dbt model to perform an upsert (update existing + insert new), it requires a unique_key config parameter (e.g. unique_key=\'id\'). If unique_key is omitted, dbt defaults to an append-only strategy, inserting all rows as duplicates."
    },
    {
      id: 27,
      type: "single",
      difficulty: 1,
      question: "A dbt project is configured for `Schema Configuration` using incremental materialization. You notice that new rows are being inserted but old rows are not being updated when their values change in the source table. What is the most likely configuration error in the model\'s SQL block?",
      options: ["The model is missing the `unique_key` parameter definition in its config block      ", "The database user lacks appropriate DML privileges to execute upsert transactions   ", "Incremental models do not support matching source records by default parameters     ", "The target table requires a primary key constraint to match incremental updates     "],
      correct: [0],
      concept: "For an incremental dbt model to perform an upsert (update existing + insert new), it requires a unique_key config parameter (e.g. unique_key=\'id\'). If unique_key is omitted, dbt defaults to an append-only strategy, inserting all rows as duplicates."
    },
    {
      id: 28,
      type: "single",
      difficulty: 1,
      question: "A dbt project is configured for `Source Properties` using incremental materialization. You notice that new rows are being inserted but old rows are not being updated when their values change in the source table. What is the most likely configuration error in the model\'s SQL block?",
      options: ["The model is missing the `unique_key` parameter definition in its config block      ", "The database user lacks appropriate DML privileges to execute upsert transactions   ", "Incremental models do not support matching source records by default parameters     ", "The target table requires a primary key constraint to match incremental updates     "],
      correct: [0],
      concept: "For an incremental dbt model to perform an upsert (update existing + insert new), it requires a unique_key config parameter (e.g. unique_key=\'id\'). If unique_key is omitted, dbt defaults to an append-only strategy, inserting all rows as duplicates."
    },
    {
      id: 29,
      type: "single",
      difficulty: 1,
      question: "A dbt project is configured for `Seeds & CSV Loading` using incremental materialization. You notice that new rows are being inserted but old rows are not being updated when their values change in the source table. What is the most likely configuration error in the model\'s SQL block?",
      options: ["The model is missing the `unique_key` parameter definition in its config block      ", "The database user lacks appropriate DML privileges to execute upsert transactions   ", "Incremental models do not support matching source records by default parameters     ", "The target table requires a primary key constraint to match incremental updates     "],
      correct: [0],
      concept: "For an incremental dbt model to perform an upsert (update existing + insert new), it requires a unique_key config parameter (e.g. unique_key=\'id\'). If unique_key is omitted, dbt defaults to an append-only strategy, inserting all rows as duplicates."
    },
    {
      id: 30,
      type: "single",
      difficulty: 1,
      question: "A dbt project is configured for `Ref & Source Functions` using incremental materialization. You notice that new rows are being inserted but old rows are not being updated when their values change in the source table. What is the most likely configuration error in the model\'s SQL block?",
      options: ["The model is missing the `unique_key` parameter definition in its config block      ", "The database user lacks appropriate DML privileges to execute upsert transactions   ", "Incremental models do not support matching source records by default parameters     ", "The target table requires a primary key constraint to match incremental updates     "],
      correct: [0],
      concept: "For an incremental dbt model to perform an upsert (update existing + insert new), it requires a unique_key config parameter (e.g. unique_key=\'id\'). If unique_key is omitted, dbt defaults to an append-only strategy, inserting all rows as duplicates."
    },
    {
      id: 31,
      type: "single",
      difficulty: 1,
      question: "A dbt project is configured for `Defining Sources` using incremental materialization. You notice that new rows are being inserted but old rows are not being updated when their values change in the source table. What is the most likely configuration error in the model\'s SQL block?",
      options: ["The model is missing the `unique_key` parameter definition in its config block      ", "The database user lacks appropriate DML privileges to execute upsert transactions   ", "Incremental models do not support matching source records by default parameters     ", "The target table requires a primary key constraint to match incremental updates     "],
      correct: [0],
      concept: "For an incremental dbt model to perform an upsert (update existing + insert new), it requires a unique_key config parameter (e.g. unique_key=\'id\'). If unique_key is omitted, dbt defaults to an append-only strategy, inserting all rows as duplicates."
    },
    {
      id: 32,
      type: "single",
      difficulty: 1,
      question: "A dbt project is configured for `Schema Configuration` using incremental materialization. You notice that new rows are being inserted but old rows are not being updated when their values change in the source table. What is the most likely configuration error in the model\'s SQL block?",
      options: ["The model is missing the `unique_key` parameter definition in its config block      ", "The database user lacks appropriate DML privileges to execute upsert transactions   ", "Incremental models do not support matching source records by default parameters     ", "The target table requires a primary key constraint to match incremental updates     "],
      correct: [0],
      concept: "For an incremental dbt model to perform an upsert (update existing + insert new), it requires a unique_key config parameter (e.g. unique_key=\'id\'). If unique_key is omitted, dbt defaults to an append-only strategy, inserting all rows as duplicates."
    },
    {
      id: 33,
      type: "single",
      difficulty: 1,
      question: "A dbt project is configured for `Source Properties` using incremental materialization. You notice that new rows are being inserted but old rows are not being updated when their values change in the source table. What is the most likely configuration error in the model\'s SQL block?",
      options: ["The model is missing the `unique_key` parameter definition in its config block      ", "The database user lacks appropriate DML privileges to execute upsert transactions   ", "Incremental models do not support matching source records by default parameters     ", "The target table requires a primary key constraint to match incremental updates     "],
      correct: [0],
      concept: "For an incremental dbt model to perform an upsert (update existing + insert new), it requires a unique_key config parameter (e.g. unique_key=\'id\'). If unique_key is omitted, dbt defaults to an append-only strategy, inserting all rows as duplicates."
    },
    {
      id: 34,
      type: "single",
      difficulty: 1,
      question: "A dbt project is configured for `Seeds & CSV Loading` using incremental materialization. You notice that new rows are being inserted but old rows are not being updated when their values change in the source table. What is the most likely configuration error in the model\'s SQL block?",
      options: ["The model is missing the `unique_key` parameter definition in its config block      ", "The database user lacks appropriate DML privileges to execute upsert transactions   ", "Incremental models do not support matching source records by default parameters     ", "The target table requires a primary key constraint to match incremental updates     "],
      correct: [0],
      concept: "For an incremental dbt model to perform an upsert (update existing + insert new), it requires a unique_key config parameter (e.g. unique_key=\'id\'). If unique_key is omitted, dbt defaults to an append-only strategy, inserting all rows as duplicates."
    },
    {
      id: 35,
      type: "single",
      difficulty: 1,
      question: "A dbt project is configured for `Ref & Source Functions` using incremental materialization. You notice that new rows are being inserted but old rows are not being updated when their values change in the source table. What is the most likely configuration error in the model\'s SQL block?",
      options: ["The model is missing the `unique_key` parameter definition in its config block      ", "The database user lacks appropriate DML privileges to execute upsert transactions   ", "Incremental models do not support matching source records by default parameters     ", "The target table requires a primary key constraint to match incremental updates     "],
      correct: [0],
      concept: "For an incremental dbt model to perform an upsert (update existing + insert new), it requires a unique_key config parameter (e.g. unique_key=\'id\'). If unique_key is omitted, dbt defaults to an append-only strategy, inserting all rows as duplicates."
    },
    {
      id: 36,
      type: "single",
      difficulty: 2,
      question: "A dbt project is configured for `Defining Sources` using incremental materialization. You notice that new rows are being inserted but old rows are not being updated when their values change in the source table. What is the most likely configuration error in the model\'s SQL block?",
      options: ["The model is missing the `unique_key` parameter definition in its config block      ", "The database user lacks appropriate DML privileges to execute upsert transactions   ", "Incremental models do not support matching source records by default parameters     ", "The target table requires a primary key constraint to match incremental updates     "],
      correct: [0],
      concept: "For an incremental dbt model to perform an upsert (update existing + insert new), it requires a unique_key config parameter (e.g. unique_key=\'id\'). If unique_key is omitted, dbt defaults to an append-only strategy, inserting all rows as duplicates."
    },
    {
      id: 37,
      type: "single",
      difficulty: 2,
      question: "A dbt project is configured for `Schema Configuration` using incremental materialization. You notice that new rows are being inserted but old rows are not being updated when their values change in the source table. What is the most likely configuration error in the model\'s SQL block?",
      options: ["The model is missing the `unique_key` parameter definition in its config block      ", "The database user lacks appropriate DML privileges to execute upsert transactions   ", "Incremental models do not support matching source records by default parameters     ", "The target table requires a primary key constraint to match incremental updates     "],
      correct: [0],
      concept: "For an incremental dbt model to perform an upsert (update existing + insert new), it requires a unique_key config parameter (e.g. unique_key=\'id\'). If unique_key is omitted, dbt defaults to an append-only strategy, inserting all rows as duplicates."
    },
    {
      id: 38,
      type: "single",
      difficulty: 2,
      question: "A dbt project is configured for `Source Properties` using incremental materialization. You notice that new rows are being inserted but old rows are not being updated when their values change in the source table. What is the most likely configuration error in the model\'s SQL block?",
      options: ["The model is missing the `unique_key` parameter definition in its config block      ", "The database user lacks appropriate DML privileges to execute upsert transactions   ", "Incremental models do not support matching source records by default parameters     ", "The target table requires a primary key constraint to match incremental updates     "],
      correct: [0],
      concept: "For an incremental dbt model to perform an upsert (update existing + insert new), it requires a unique_key config parameter (e.g. unique_key=\'id\'). If unique_key is omitted, dbt defaults to an append-only strategy, inserting all rows as duplicates."
    },
    {
      id: 39,
      type: "single",
      difficulty: 2,
      question: "A dbt project is configured for `Seeds & CSV Loading` using incremental materialization. You notice that new rows are being inserted but old rows are not being updated when their values change in the source table. What is the most likely configuration error in the model\'s SQL block?",
      options: ["The model is missing the `unique_key` parameter definition in its config block      ", "The database user lacks appropriate DML privileges to execute upsert transactions   ", "Incremental models do not support matching source records by default parameters     ", "The target table requires a primary key constraint to match incremental updates     "],
      correct: [0],
      concept: "For an incremental dbt model to perform an upsert (update existing + insert new), it requires a unique_key config parameter (e.g. unique_key=\'id\'). If unique_key is omitted, dbt defaults to an append-only strategy, inserting all rows as duplicates."
    },
    {
      id: 40,
      type: "single",
      difficulty: 2,
      question: "A dbt project is configured for `Ref & Source Functions` using incremental materialization. You notice that new rows are being inserted but old rows are not being updated when their values change in the source table. What is the most likely configuration error in the model\'s SQL block?",
      options: ["The model is missing the `unique_key` parameter definition in its config block      ", "The database user lacks appropriate DML privileges to execute upsert transactions   ", "Incremental models do not support matching source records by default parameters     ", "The target table requires a primary key constraint to match incremental updates     "],
      correct: [0],
      concept: "For an incremental dbt model to perform an upsert (update existing + insert new), it requires a unique_key config parameter (e.g. unique_key=\'id\'). If unique_key is omitted, dbt defaults to an append-only strategy, inserting all rows as duplicates."
    },
    {
      id: 41,
      type: "single",
      difficulty: 2,
      question: "A dbt project is configured for `Defining Sources` using incremental materialization. You notice that new rows are being inserted but old rows are not being updated when their values change in the source table. What is the most likely configuration error in the model\'s SQL block?",
      options: ["The model is missing the `unique_key` parameter definition in its config block      ", "The database user lacks appropriate DML privileges to execute upsert transactions   ", "Incremental models do not support matching source records by default parameters     ", "The target table requires a primary key constraint to match incremental updates     "],
      correct: [0],
      concept: "For an incremental dbt model to perform an upsert (update existing + insert new), it requires a unique_key config parameter (e.g. unique_key=\'id\'). If unique_key is omitted, dbt defaults to an append-only strategy, inserting all rows as duplicates."
    },
    {
      id: 42,
      type: "single",
      difficulty: 2,
      question: "A dbt project is configured for `Schema Configuration` using incremental materialization. You notice that new rows are being inserted but old rows are not being updated when their values change in the source table. What is the most likely configuration error in the model\'s SQL block?",
      options: ["The model is missing the `unique_key` parameter definition in its config block      ", "The database user lacks appropriate DML privileges to execute upsert transactions   ", "Incremental models do not support matching source records by default parameters     ", "The target table requires a primary key constraint to match incremental updates     "],
      correct: [0],
      concept: "For an incremental dbt model to perform an upsert (update existing + insert new), it requires a unique_key config parameter (e.g. unique_key=\'id\'). If unique_key is omitted, dbt defaults to an append-only strategy, inserting all rows as duplicates."
    },
    {
      id: 43,
      type: "single",
      difficulty: 2,
      question: "A dbt project is configured for `Source Properties` using incremental materialization. You notice that new rows are being inserted but old rows are not being updated when their values change in the source table. What is the most likely configuration error in the model\'s SQL block?",
      options: ["The model is missing the `unique_key` parameter definition in its config block      ", "The database user lacks appropriate DML privileges to execute upsert transactions   ", "Incremental models do not support matching source records by default parameters     ", "The target table requires a primary key constraint to match incremental updates     "],
      correct: [0],
      concept: "For an incremental dbt model to perform an upsert (update existing + insert new), it requires a unique_key config parameter (e.g. unique_key=\'id\'). If unique_key is omitted, dbt defaults to an append-only strategy, inserting all rows as duplicates."
    },
    {
      id: 44,
      type: "single",
      difficulty: 2,
      question: "A dbt project is configured for `Seeds & CSV Loading` using incremental materialization. You notice that new rows are being inserted but old rows are not being updated when their values change in the source table. What is the most likely configuration error in the model\'s SQL block?",
      options: ["The model is missing the `unique_key` parameter definition in its config block      ", "The database user lacks appropriate DML privileges to execute upsert transactions   ", "Incremental models do not support matching source records by default parameters     ", "The target table requires a primary key constraint to match incremental updates     "],
      correct: [0],
      concept: "For an incremental dbt model to perform an upsert (update existing + insert new), it requires a unique_key config parameter (e.g. unique_key=\'id\'). If unique_key is omitted, dbt defaults to an append-only strategy, inserting all rows as duplicates."
    },
    {
      id: 45,
      type: "single",
      difficulty: 2,
      question: "A dbt project is configured for `Ref & Source Functions` using incremental materialization. You notice that new rows are being inserted but old rows are not being updated when their values change in the source table. What is the most likely configuration error in the model\'s SQL block?",
      options: ["The model is missing the `unique_key` parameter definition in its config block      ", "The database user lacks appropriate DML privileges to execute upsert transactions   ", "Incremental models do not support matching source records by default parameters     ", "The target table requires a primary key constraint to match incremental updates     "],
      correct: [0],
      concept: "For an incremental dbt model to perform an upsert (update existing + insert new), it requires a unique_key config parameter (e.g. unique_key=\'id\'). If unique_key is omitted, dbt defaults to an append-only strategy, inserting all rows as duplicates."
    },
    {
      id: 46,
      type: "single",
      difficulty: 2,
      question: "A dbt project is configured for `Defining Sources` using incremental materialization. You notice that new rows are being inserted but old rows are not being updated when their values change in the source table. What is the most likely configuration error in the model\'s SQL block?",
      options: ["The model is missing the `unique_key` parameter definition in its config block      ", "The database user lacks appropriate DML privileges to execute upsert transactions   ", "Incremental models do not support matching source records by default parameters     ", "The target table requires a primary key constraint to match incremental updates     "],
      correct: [0],
      concept: "For an incremental dbt model to perform an upsert (update existing + insert new), it requires a unique_key config parameter (e.g. unique_key=\'id\'). If unique_key is omitted, dbt defaults to an append-only strategy, inserting all rows as duplicates."
    },
    {
      id: 47,
      type: "single",
      difficulty: 2,
      question: "A dbt project is configured for `Schema Configuration` using incremental materialization. You notice that new rows are being inserted but old rows are not being updated when their values change in the source table. What is the most likely configuration error in the model\'s SQL block?",
      options: ["The model is missing the `unique_key` parameter definition in its config block      ", "The database user lacks appropriate DML privileges to execute upsert transactions   ", "Incremental models do not support matching source records by default parameters     ", "The target table requires a primary key constraint to match incremental updates     "],
      correct: [0],
      concept: "For an incremental dbt model to perform an upsert (update existing + insert new), it requires a unique_key config parameter (e.g. unique_key=\'id\'). If unique_key is omitted, dbt defaults to an append-only strategy, inserting all rows as duplicates."
    },
    {
      id: 48,
      type: "single",
      difficulty: 2,
      question: "A dbt project is configured for `Source Properties` using incremental materialization. You notice that new rows are being inserted but old rows are not being updated when their values change in the source table. What is the most likely configuration error in the model\'s SQL block?",
      options: ["The model is missing the `unique_key` parameter definition in its config block      ", "The database user lacks appropriate DML privileges to execute upsert transactions   ", "Incremental models do not support matching source records by default parameters     ", "The target table requires a primary key constraint to match incremental updates     "],
      correct: [0],
      concept: "For an incremental dbt model to perform an upsert (update existing + insert new), it requires a unique_key config parameter (e.g. unique_key=\'id\'). If unique_key is omitted, dbt defaults to an append-only strategy, inserting all rows as duplicates."
    },
    {
      id: 49,
      type: "single",
      difficulty: 2,
      question: "A dbt project is configured for `Seeds & CSV Loading` using incremental materialization. You notice that new rows are being inserted but old rows are not being updated when their values change in the source table. What is the most likely configuration error in the model\'s SQL block?",
      options: ["The model is missing the `unique_key` parameter definition in its config block      ", "The database user lacks appropriate DML privileges to execute upsert transactions   ", "Incremental models do not support matching source records by default parameters     ", "The target table requires a primary key constraint to match incremental updates     "],
      correct: [0],
      concept: "For an incremental dbt model to perform an upsert (update existing + insert new), it requires a unique_key config parameter (e.g. unique_key=\'id\'). If unique_key is omitted, dbt defaults to an append-only strategy, inserting all rows as duplicates."
    },
    {
      id: 50,
      type: "single",
      difficulty: 2,
      question: "A dbt project is configured for `Ref & Source Functions` using incremental materialization. You notice that new rows are being inserted but old rows are not being updated when their values change in the source table. What is the most likely configuration error in the model\'s SQL block?",
      options: ["The model is missing the `unique_key` parameter definition in its config block      ", "The database user lacks appropriate DML privileges to execute upsert transactions   ", "Incremental models do not support matching source records by default parameters     ", "The target table requires a primary key constraint to match incremental updates     "],
      correct: [0],
      concept: "For an incremental dbt model to perform an upsert (update existing + insert new), it requires a unique_key config parameter (e.g. unique_key=\'id\'). If unique_key is omitted, dbt defaults to an append-only strategy, inserting all rows as duplicates."
    },
    {
      id: 51,
      type: "single",
      difficulty: 2,
      question: "A dbt project is configured for `Defining Sources` using incremental materialization. You notice that new rows are being inserted but old rows are not being updated when their values change in the source table. What is the most likely configuration error in the model\'s SQL block?",
      options: ["The model is missing the `unique_key` parameter definition in its config block      ", "The database user lacks appropriate DML privileges to execute upsert transactions   ", "Incremental models do not support matching source records by default parameters     ", "The target table requires a primary key constraint to match incremental updates     "],
      correct: [0],
      concept: "For an incremental dbt model to perform an upsert (update existing + insert new), it requires a unique_key config parameter (e.g. unique_key=\'id\'). If unique_key is omitted, dbt defaults to an append-only strategy, inserting all rows as duplicates."
    },
    {
      id: 52,
      type: "single",
      difficulty: 2,
      question: "A dbt project is configured for `Schema Configuration` using incremental materialization. You notice that new rows are being inserted but old rows are not being updated when their values change in the source table. What is the most likely configuration error in the model\'s SQL block?",
      options: ["The model is missing the `unique_key` parameter definition in its config block      ", "The database user lacks appropriate DML privileges to execute upsert transactions   ", "Incremental models do not support matching source records by default parameters     ", "The target table requires a primary key constraint to match incremental updates     "],
      correct: [0],
      concept: "For an incremental dbt model to perform an upsert (update existing + insert new), it requires a unique_key config parameter (e.g. unique_key=\'id\'). If unique_key is omitted, dbt defaults to an append-only strategy, inserting all rows as duplicates."
    },
    {
      id: 53,
      type: "single",
      difficulty: 2,
      question: "A dbt project is configured for `Source Properties` using incremental materialization. You notice that new rows are being inserted but old rows are not being updated when their values change in the source table. What is the most likely configuration error in the model\'s SQL block?",
      options: ["The model is missing the `unique_key` parameter definition in its config block      ", "The database user lacks appropriate DML privileges to execute upsert transactions   ", "Incremental models do not support matching source records by default parameters     ", "The target table requires a primary key constraint to match incremental updates     "],
      correct: [0],
      concept: "For an incremental dbt model to perform an upsert (update existing + insert new), it requires a unique_key config parameter (e.g. unique_key=\'id\'). If unique_key is omitted, dbt defaults to an append-only strategy, inserting all rows as duplicates."
    },
    {
      id: 54,
      type: "single",
      difficulty: 2,
      question: "A dbt project is configured for `Seeds & CSV Loading` using incremental materialization. You notice that new rows are being inserted but old rows are not being updated when their values change in the source table. What is the most likely configuration error in the model\'s SQL block?",
      options: ["The model is missing the `unique_key` parameter definition in its config block      ", "The database user lacks appropriate DML privileges to execute upsert transactions   ", "Incremental models do not support matching source records by default parameters     ", "The target table requires a primary key constraint to match incremental updates     "],
      correct: [0],
      concept: "For an incremental dbt model to perform an upsert (update existing + insert new), it requires a unique_key config parameter (e.g. unique_key=\'id\'). If unique_key is omitted, dbt defaults to an append-only strategy, inserting all rows as duplicates."
    },
    {
      id: 55,
      type: "single",
      difficulty: 2,
      question: "A dbt project is configured for `Ref & Source Functions` using incremental materialization. You notice that new rows are being inserted but old rows are not being updated when their values change in the source table. What is the most likely configuration error in the model\'s SQL block?",
      options: ["The model is missing the `unique_key` parameter definition in its config block      ", "The database user lacks appropriate DML privileges to execute upsert transactions   ", "Incremental models do not support matching source records by default parameters     ", "The target table requires a primary key constraint to match incremental updates     "],
      correct: [0],
      concept: "For an incremental dbt model to perform an upsert (update existing + insert new), it requires a unique_key config parameter (e.g. unique_key=\'id\'). If unique_key is omitted, dbt defaults to an append-only strategy, inserting all rows as duplicates."
    },
    {
      id: 56,
      type: "single",
      difficulty: 2,
      question: "A dbt project is configured for `Defining Sources` using incremental materialization. You notice that new rows are being inserted but old rows are not being updated when their values change in the source table. What is the most likely configuration error in the model\'s SQL block?",
      options: ["The model is missing the `unique_key` parameter definition in its config block      ", "The database user lacks appropriate DML privileges to execute upsert transactions   ", "Incremental models do not support matching source records by default parameters     ", "The target table requires a primary key constraint to match incremental updates     "],
      correct: [0],
      concept: "For an incremental dbt model to perform an upsert (update existing + insert new), it requires a unique_key config parameter (e.g. unique_key=\'id\'). If unique_key is omitted, dbt defaults to an append-only strategy, inserting all rows as duplicates."
    },
    {
      id: 57,
      type: "single",
      difficulty: 2,
      question: "A dbt project is configured for `Schema Configuration` using incremental materialization. You notice that new rows are being inserted but old rows are not being updated when their values change in the source table. What is the most likely configuration error in the model\'s SQL block?",
      options: ["The model is missing the `unique_key` parameter definition in its config block      ", "The database user lacks appropriate DML privileges to execute upsert transactions   ", "Incremental models do not support matching source records by default parameters     ", "The target table requires a primary key constraint to match incremental updates     "],
      correct: [0],
      concept: "For an incremental dbt model to perform an upsert (update existing + insert new), it requires a unique_key config parameter (e.g. unique_key=\'id\'). If unique_key is omitted, dbt defaults to an append-only strategy, inserting all rows as duplicates."
    },
    {
      id: 58,
      type: "single",
      difficulty: 2,
      question: "A dbt project is configured for `Source Properties` using incremental materialization. You notice that new rows are being inserted but old rows are not being updated when their values change in the source table. What is the most likely configuration error in the model\'s SQL block?",
      options: ["The model is missing the `unique_key` parameter definition in its config block      ", "The database user lacks appropriate DML privileges to execute upsert transactions   ", "Incremental models do not support matching source records by default parameters     ", "The target table requires a primary key constraint to match incremental updates     "],
      correct: [0],
      concept: "For an incremental dbt model to perform an upsert (update existing + insert new), it requires a unique_key config parameter (e.g. unique_key=\'id\'). If unique_key is omitted, dbt defaults to an append-only strategy, inserting all rows as duplicates."
    },
    {
      id: 59,
      type: "single",
      difficulty: 2,
      question: "A dbt project is configured for `Seeds & CSV Loading` using incremental materialization. You notice that new rows are being inserted but old rows are not being updated when their values change in the source table. What is the most likely configuration error in the model\'s SQL block?",
      options: ["The model is missing the `unique_key` parameter definition in its config block      ", "The database user lacks appropriate DML privileges to execute upsert transactions   ", "Incremental models do not support matching source records by default parameters     ", "The target table requires a primary key constraint to match incremental updates     "],
      correct: [0],
      concept: "For an incremental dbt model to perform an upsert (update existing + insert new), it requires a unique_key config parameter (e.g. unique_key=\'id\'). If unique_key is omitted, dbt defaults to an append-only strategy, inserting all rows as duplicates."
    },
    {
      id: 60,
      type: "single",
      difficulty: 2,
      question: "A dbt project is configured for `Ref & Source Functions` using incremental materialization. You notice that new rows are being inserted but old rows are not being updated when their values change in the source table. What is the most likely configuration error in the model\'s SQL block?",
      options: ["The model is missing the `unique_key` parameter definition in its config block      ", "The database user lacks appropriate DML privileges to execute upsert transactions   ", "Incremental models do not support matching source records by default parameters     ", "The target table requires a primary key constraint to match incremental updates     "],
      correct: [0],
      concept: "For an incremental dbt model to perform an upsert (update existing + insert new), it requires a unique_key config parameter (e.g. unique_key=\'id\'). If unique_key is omitted, dbt defaults to an append-only strategy, inserting all rows as duplicates."
    },
    {
      id: 61,
      type: "multi",
      difficulty: 2,
      question: "You are configuring tests in dbt for `Defining Sources` to maintain high data quality. Which of the following represent generic out-of-the-box dbt tests? (Select ALL that apply)",
      options: ["A: `unique` test to assert that values in a column do not contain duplicates   ", "B: `not_null` test to assert that a column does not contain null or blank rows ", "C: `accepted_values` test to restrict a column to a specific list of strings   ", "D: `cardinality` test to verify many-to-many join mappings across CTE tables   "],
      correct: [0, 1, 2],
      concept: "dbt provides four out-of-the-box generic tests: unique, 
ot_null, ccepted_values, and elationships. Tests are configured in schema.yml files."
    },
    {
      id: 62,
      type: "multi",
      difficulty: 2,
      question: "You are configuring tests in dbt for `Schema Configuration` to maintain high data quality. Which of the following represent generic out-of-the-box dbt tests? (Select ALL that apply)",
      options: ["A: `unique` test to assert that values in a column do not contain duplicates   ", "B: `not_null` test to assert that a column does not contain null or blank rows ", "C: `accepted_values` test to restrict a column to a specific list of strings   ", "D: `cardinality` test to verify many-to-many join mappings across CTE tables   "],
      correct: [0, 1, 2],
      concept: "dbt provides four out-of-the-box generic tests: unique, 
ot_null, ccepted_values, and elationships. Tests are configured in schema.yml files."
    },
    {
      id: 63,
      type: "multi",
      difficulty: 2,
      question: "You are configuring tests in dbt for `Source Properties` to maintain high data quality. Which of the following represent generic out-of-the-box dbt tests? (Select ALL that apply)",
      options: ["A: `unique` test to assert that values in a column do not contain duplicates   ", "B: `not_null` test to assert that a column does not contain null or blank rows ", "C: `accepted_values` test to restrict a column to a specific list of strings   ", "D: `cardinality` test to verify many-to-many join mappings across CTE tables   "],
      correct: [0, 1, 2],
      concept: "dbt provides four out-of-the-box generic tests: unique, 
ot_null, ccepted_values, and elationships. Tests are configured in schema.yml files."
    },
    {
      id: 64,
      type: "multi",
      difficulty: 2,
      question: "You are configuring tests in dbt for `Seeds & CSV Loading` to maintain high data quality. Which of the following represent generic out-of-the-box dbt tests? (Select ALL that apply)",
      options: ["A: `unique` test to assert that values in a column do not contain duplicates   ", "B: `not_null` test to assert that a column does not contain null or blank rows ", "C: `accepted_values` test to restrict a column to a specific list of strings   ", "D: `cardinality` test to verify many-to-many join mappings across CTE tables   "],
      correct: [0, 1, 2],
      concept: "dbt provides four out-of-the-box generic tests: unique, 
ot_null, ccepted_values, and elationships. Tests are configured in schema.yml files."
    },
    {
      id: 65,
      type: "multi",
      difficulty: 2,
      question: "You are configuring tests in dbt for `Ref & Source Functions` to maintain high data quality. Which of the following represent generic out-of-the-box dbt tests? (Select ALL that apply)",
      options: ["A: `unique` test to assert that values in a column do not contain duplicates   ", "B: `not_null` test to assert that a column does not contain null or blank rows ", "C: `accepted_values` test to restrict a column to a specific list of strings   ", "D: `cardinality` test to verify many-to-many join mappings across CTE tables   "],
      correct: [0, 1, 2],
      concept: "dbt provides four out-of-the-box generic tests: unique, 
ot_null, ccepted_values, and elationships. Tests are configured in schema.yml files."
    },
    {
      id: 66,
      type: "multi",
      difficulty: 2,
      question: "You are configuring tests in dbt for `Defining Sources` to maintain high data quality. Which of the following represent generic out-of-the-box dbt tests? (Select ALL that apply)",
      options: ["A: `unique` test to assert that values in a column do not contain duplicates   ", "B: `not_null` test to assert that a column does not contain null or blank rows ", "C: `accepted_values` test to restrict a column to a specific list of strings   ", "D: `cardinality` test to verify many-to-many join mappings across CTE tables   "],
      correct: [0, 1, 2],
      concept: "dbt provides four out-of-the-box generic tests: unique, 
ot_null, ccepted_values, and elationships. Tests are configured in schema.yml files."
    },
    {
      id: 67,
      type: "multi",
      difficulty: 2,
      question: "You are configuring tests in dbt for `Schema Configuration` to maintain high data quality. Which of the following represent generic out-of-the-box dbt tests? (Select ALL that apply)",
      options: ["A: `unique` test to assert that values in a column do not contain duplicates   ", "B: `not_null` test to assert that a column does not contain null or blank rows ", "C: `accepted_values` test to restrict a column to a specific list of strings   ", "D: `cardinality` test to verify many-to-many join mappings across CTE tables   "],
      correct: [0, 1, 2],
      concept: "dbt provides four out-of-the-box generic tests: unique, 
ot_null, ccepted_values, and elationships. Tests are configured in schema.yml files."
    },
    {
      id: 68,
      type: "multi",
      difficulty: 2,
      question: "You are configuring tests in dbt for `Source Properties` to maintain high data quality. Which of the following represent generic out-of-the-box dbt tests? (Select ALL that apply)",
      options: ["A: `unique` test to assert that values in a column do not contain duplicates   ", "B: `not_null` test to assert that a column does not contain null or blank rows ", "C: `accepted_values` test to restrict a column to a specific list of strings   ", "D: `cardinality` test to verify many-to-many join mappings across CTE tables   "],
      correct: [0, 1, 2],
      concept: "dbt provides four out-of-the-box generic tests: unique, 
ot_null, ccepted_values, and elationships. Tests are configured in schema.yml files."
    },
    {
      id: 69,
      type: "multi",
      difficulty: 2,
      question: "You are configuring tests in dbt for `Seeds & CSV Loading` to maintain high data quality. Which of the following represent generic out-of-the-box dbt tests? (Select ALL that apply)",
      options: ["A: `unique` test to assert that values in a column do not contain duplicates   ", "B: `not_null` test to assert that a column does not contain null or blank rows ", "C: `accepted_values` test to restrict a column to a specific list of strings   ", "D: `cardinality` test to verify many-to-many join mappings across CTE tables   "],
      correct: [0, 1, 2],
      concept: "dbt provides four out-of-the-box generic tests: unique, 
ot_null, ccepted_values, and elationships. Tests are configured in schema.yml files."
    },
    {
      id: 70,
      type: "multi",
      difficulty: 2,
      question: "You are configuring tests in dbt for `Ref & Source Functions` to maintain high data quality. Which of the following represent generic out-of-the-box dbt tests? (Select ALL that apply)",
      options: ["A: `unique` test to assert that values in a column do not contain duplicates   ", "B: `not_null` test to assert that a column does not contain null or blank rows ", "C: `accepted_values` test to restrict a column to a specific list of strings   ", "D: `cardinality` test to verify many-to-many join mappings across CTE tables   "],
      correct: [0, 1, 2],
      concept: "dbt provides four out-of-the-box generic tests: unique, 
ot_null, ccepted_values, and elationships. Tests are configured in schema.yml files."
    },
    {
      id: 71,
      type: "multi",
      difficulty: 2,
      question: "You are configuring tests in dbt for `Defining Sources` to maintain high data quality. Which of the following represent generic out-of-the-box dbt tests? (Select ALL that apply)",
      options: ["A: `unique` test to assert that values in a column do not contain duplicates   ", "B: `not_null` test to assert that a column does not contain null or blank rows ", "C: `accepted_values` test to restrict a column to a specific list of strings   ", "D: `cardinality` test to verify many-to-many join mappings across CTE tables   "],
      correct: [0, 1, 2],
      concept: "dbt provides four out-of-the-box generic tests: unique, 
ot_null, ccepted_values, and elationships. Tests are configured in schema.yml files."
    },
    {
      id: 72,
      type: "multi",
      difficulty: 2,
      question: "You are configuring tests in dbt for `Schema Configuration` to maintain high data quality. Which of the following represent generic out-of-the-box dbt tests? (Select ALL that apply)",
      options: ["A: `unique` test to assert that values in a column do not contain duplicates   ", "B: `not_null` test to assert that a column does not contain null or blank rows ", "C: `accepted_values` test to restrict a column to a specific list of strings   ", "D: `cardinality` test to verify many-to-many join mappings across CTE tables   "],
      correct: [0, 1, 2],
      concept: "dbt provides four out-of-the-box generic tests: unique, 
ot_null, ccepted_values, and elationships. Tests are configured in schema.yml files."
    },
    {
      id: 73,
      type: "multi",
      difficulty: 2,
      question: "You are configuring tests in dbt for `Source Properties` to maintain high data quality. Which of the following represent generic out-of-the-box dbt tests? (Select ALL that apply)",
      options: ["A: `unique` test to assert that values in a column do not contain duplicates   ", "B: `not_null` test to assert that a column does not contain null or blank rows ", "C: `accepted_values` test to restrict a column to a specific list of strings   ", "D: `cardinality` test to verify many-to-many join mappings across CTE tables   "],
      correct: [0, 1, 2],
      concept: "dbt provides four out-of-the-box generic tests: unique, 
ot_null, ccepted_values, and elationships. Tests are configured in schema.yml files."
    },
    {
      id: 74,
      type: "multi",
      difficulty: 2,
      question: "You are configuring tests in dbt for `Seeds & CSV Loading` to maintain high data quality. Which of the following represent generic out-of-the-box dbt tests? (Select ALL that apply)",
      options: ["A: `unique` test to assert that values in a column do not contain duplicates   ", "B: `not_null` test to assert that a column does not contain null or blank rows ", "C: `accepted_values` test to restrict a column to a specific list of strings   ", "D: `cardinality` test to verify many-to-many join mappings across CTE tables   "],
      correct: [0, 1, 2],
      concept: "dbt provides four out-of-the-box generic tests: unique, 
ot_null, ccepted_values, and elationships. Tests are configured in schema.yml files."
    },
    {
      id: 75,
      type: "multi",
      difficulty: 2,
      question: "You are configuring tests in dbt for `Ref & Source Functions` to maintain high data quality. Which of the following represent generic out-of-the-box dbt tests? (Select ALL that apply)",
      options: ["A: `unique` test to assert that values in a column do not contain duplicates   ", "B: `not_null` test to assert that a column does not contain null or blank rows ", "C: `accepted_values` test to restrict a column to a specific list of strings   ", "D: `cardinality` test to verify many-to-many join mappings across CTE tables   "],
      correct: [0, 1, 2],
      concept: "dbt provides four out-of-the-box generic tests: unique, 
ot_null, ccepted_values, and elationships. Tests are configured in schema.yml files."
    },
    {
      id: 76,
      type: "multi",
      difficulty: 3,
      question: "You are configuring tests in dbt for `Defining Sources` to maintain high data quality. Which of the following represent generic out-of-the-box dbt tests? (Select ALL that apply)",
      options: ["A: `unique` test to assert that values in a column do not contain duplicates   ", "B: `not_null` test to assert that a column does not contain null or blank rows ", "C: `accepted_values` test to restrict a column to a specific list of strings   ", "D: `cardinality` test to verify many-to-many join mappings across CTE tables   "],
      correct: [0, 1, 2],
      concept: "dbt provides four out-of-the-box generic tests: unique, 
ot_null, ccepted_values, and elationships. Tests are configured in schema.yml files."
    },
    {
      id: 77,
      type: "multi",
      difficulty: 3,
      question: "You are configuring tests in dbt for `Schema Configuration` to maintain high data quality. Which of the following represent generic out-of-the-box dbt tests? (Select ALL that apply)",
      options: ["A: `unique` test to assert that values in a column do not contain duplicates   ", "B: `not_null` test to assert that a column does not contain null or blank rows ", "C: `accepted_values` test to restrict a column to a specific list of strings   ", "D: `cardinality` test to verify many-to-many join mappings across CTE tables   "],
      correct: [0, 1, 2],
      concept: "dbt provides four out-of-the-box generic tests: unique, 
ot_null, ccepted_values, and elationships. Tests are configured in schema.yml files."
    },
    {
      id: 78,
      type: "multi",
      difficulty: 3,
      question: "You are configuring tests in dbt for `Source Properties` to maintain high data quality. Which of the following represent generic out-of-the-box dbt tests? (Select ALL that apply)",
      options: ["A: `unique` test to assert that values in a column do not contain duplicates   ", "B: `not_null` test to assert that a column does not contain null or blank rows ", "C: `accepted_values` test to restrict a column to a specific list of strings   ", "D: `cardinality` test to verify many-to-many join mappings across CTE tables   "],
      correct: [0, 1, 2],
      concept: "dbt provides four out-of-the-box generic tests: unique, 
ot_null, ccepted_values, and elationships. Tests are configured in schema.yml files."
    },
    {
      id: 79,
      type: "multi",
      difficulty: 3,
      question: "You are configuring tests in dbt for `Seeds & CSV Loading` to maintain high data quality. Which of the following represent generic out-of-the-box dbt tests? (Select ALL that apply)",
      options: ["A: `unique` test to assert that values in a column do not contain duplicates   ", "B: `not_null` test to assert that a column does not contain null or blank rows ", "C: `accepted_values` test to restrict a column to a specific list of strings   ", "D: `cardinality` test to verify many-to-many join mappings across CTE tables   "],
      correct: [0, 1, 2],
      concept: "dbt provides four out-of-the-box generic tests: unique, 
ot_null, ccepted_values, and elationships. Tests are configured in schema.yml files."
    },
    {
      id: 80,
      type: "multi",
      difficulty: 3,
      question: "You are configuring tests in dbt for `Ref & Source Functions` to maintain high data quality. Which of the following represent generic out-of-the-box dbt tests? (Select ALL that apply)",
      options: ["A: `unique` test to assert that values in a column do not contain duplicates   ", "B: `not_null` test to assert that a column does not contain null or blank rows ", "C: `accepted_values` test to restrict a column to a specific list of strings   ", "D: `cardinality` test to verify many-to-many join mappings across CTE tables   "],
      correct: [0, 1, 2],
      concept: "dbt provides four out-of-the-box generic tests: unique, 
ot_null, ccepted_values, and elationships. Tests are configured in schema.yml files."
    },
    {
      id: 81,
      type: "multi",
      difficulty: 3,
      question: "You are configuring tests in dbt for `Defining Sources` to maintain high data quality. Which of the following represent generic out-of-the-box dbt tests? (Select ALL that apply)",
      options: ["A: `unique` test to assert that values in a column do not contain duplicates   ", "B: `not_null` test to assert that a column does not contain null or blank rows ", "C: `accepted_values` test to restrict a column to a specific list of strings   ", "D: `cardinality` test to verify many-to-many join mappings across CTE tables   "],
      correct: [0, 1, 2],
      concept: "dbt provides four out-of-the-box generic tests: unique, 
ot_null, ccepted_values, and elationships. Tests are configured in schema.yml files."
    },
    {
      id: 82,
      type: "multi",
      difficulty: 3,
      question: "You are configuring tests in dbt for `Schema Configuration` to maintain high data quality. Which of the following represent generic out-of-the-box dbt tests? (Select ALL that apply)",
      options: ["A: `unique` test to assert that values in a column do not contain duplicates   ", "B: `not_null` test to assert that a column does not contain null or blank rows ", "C: `accepted_values` test to restrict a column to a specific list of strings   ", "D: `cardinality` test to verify many-to-many join mappings across CTE tables   "],
      correct: [0, 1, 2],
      concept: "dbt provides four out-of-the-box generic tests: unique, 
ot_null, ccepted_values, and elationships. Tests are configured in schema.yml files."
    },
    {
      id: 83,
      type: "multi",
      difficulty: 3,
      question: "You are configuring tests in dbt for `Source Properties` to maintain high data quality. Which of the following represent generic out-of-the-box dbt tests? (Select ALL that apply)",
      options: ["A: `unique` test to assert that values in a column do not contain duplicates   ", "B: `not_null` test to assert that a column does not contain null or blank rows ", "C: `accepted_values` test to restrict a column to a specific list of strings   ", "D: `cardinality` test to verify many-to-many join mappings across CTE tables   "],
      correct: [0, 1, 2],
      concept: "dbt provides four out-of-the-box generic tests: unique, 
ot_null, ccepted_values, and elationships. Tests are configured in schema.yml files."
    },
    {
      id: 84,
      type: "multi",
      difficulty: 3,
      question: "You are configuring tests in dbt for `Seeds & CSV Loading` to maintain high data quality. Which of the following represent generic out-of-the-box dbt tests? (Select ALL that apply)",
      options: ["A: `unique` test to assert that values in a column do not contain duplicates   ", "B: `not_null` test to assert that a column does not contain null or blank rows ", "C: `accepted_values` test to restrict a column to a specific list of strings   ", "D: `cardinality` test to verify many-to-many join mappings across CTE tables   "],
      correct: [0, 1, 2],
      concept: "dbt provides four out-of-the-box generic tests: unique, 
ot_null, ccepted_values, and elationships. Tests are configured in schema.yml files."
    },
    {
      id: 85,
      type: "multi",
      difficulty: 3,
      question: "You are configuring tests in dbt for `Ref & Source Functions` to maintain high data quality. Which of the following represent generic out-of-the-box dbt tests? (Select ALL that apply)",
      options: ["A: `unique` test to assert that values in a column do not contain duplicates   ", "B: `not_null` test to assert that a column does not contain null or blank rows ", "C: `accepted_values` test to restrict a column to a specific list of strings   ", "D: `cardinality` test to verify many-to-many join mappings across CTE tables   "],
      correct: [0, 1, 2],
      concept: "dbt provides four out-of-the-box generic tests: unique, 
ot_null, ccepted_values, and elationships. Tests are configured in schema.yml files."
    },
    {
      id: 86,
      type: "tf",
      difficulty: 3,
      question: "Is it true that calling the `ref()` function in a dbt model to join tables in `Defining Sources` automatically compiles the references into physical database paths and creates lineage dependencies visible in dbt Docs?",
      options: ["True, ref builds the DAG lineage map dynamically ", "False, ref compiles static paths without lineage "],
      correct: [0],
      concept: "True. The ef() function is the core of dbt\'s dependency management. It automatically resolves the appropriate environment-specific schemas and builds the Directed Acyclic Graph (DAG) for model execution and documentation lineage."
    },
    {
      id: 87,
      type: "tf",
      difficulty: 3,
      question: "Is it true that calling the `ref()` function in a dbt model to join tables in `Schema Configuration` automatically compiles the references into physical database paths and creates lineage dependencies visible in dbt Docs?",
      options: ["True, ref builds the DAG lineage map dynamically ", "False, ref compiles static paths without lineage "],
      correct: [0],
      concept: "True. The ef() function is the core of dbt\'s dependency management. It automatically resolves the appropriate environment-specific schemas and builds the Directed Acyclic Graph (DAG) for model execution and documentation lineage."
    },
    {
      id: 88,
      type: "tf",
      difficulty: 3,
      question: "Is it true that calling the `ref()` function in a dbt model to join tables in `Source Properties` automatically compiles the references into physical database paths and creates lineage dependencies visible in dbt Docs?",
      options: ["True, ref builds the DAG lineage map dynamically ", "False, ref compiles static paths without lineage "],
      correct: [0],
      concept: "True. The ef() function is the core of dbt\'s dependency management. It automatically resolves the appropriate environment-specific schemas and builds the Directed Acyclic Graph (DAG) for model execution and documentation lineage."
    },
    {
      id: 89,
      type: "tf",
      difficulty: 3,
      question: "Is it true that calling the `ref()` function in a dbt model to join tables in `Seeds & CSV Loading` automatically compiles the references into physical database paths and creates lineage dependencies visible in dbt Docs?",
      options: ["True, ref builds the DAG lineage map dynamically ", "False, ref compiles static paths without lineage "],
      correct: [0],
      concept: "True. The ef() function is the core of dbt\'s dependency management. It automatically resolves the appropriate environment-specific schemas and builds the Directed Acyclic Graph (DAG) for model execution and documentation lineage."
    },
    {
      id: 90,
      type: "tf",
      difficulty: 3,
      question: "Is it true that calling the `ref()` function in a dbt model to join tables in `Ref & Source Functions` automatically compiles the references into physical database paths and creates lineage dependencies visible in dbt Docs?",
      options: ["True, ref builds the DAG lineage map dynamically ", "False, ref compiles static paths without lineage "],
      correct: [0],
      concept: "True. The ef() function is the core of dbt\'s dependency management. It automatically resolves the appropriate environment-specific schemas and builds the Directed Acyclic Graph (DAG) for model execution and documentation lineage."
    },
    {
      id: 91,
      type: "tf",
      difficulty: 3,
      question: "Is it true that calling the `ref()` function in a dbt model to join tables in `Defining Sources` automatically compiles the references into physical database paths and creates lineage dependencies visible in dbt Docs?",
      options: ["True, ref builds the DAG lineage map dynamically ", "False, ref compiles static paths without lineage "],
      correct: [0],
      concept: "True. The ef() function is the core of dbt\'s dependency management. It automatically resolves the appropriate environment-specific schemas and builds the Directed Acyclic Graph (DAG) for model execution and documentation lineage."
    },
    {
      id: 92,
      type: "tf",
      difficulty: 3,
      question: "Is it true that calling the `ref()` function in a dbt model to join tables in `Schema Configuration` automatically compiles the references into physical database paths and creates lineage dependencies visible in dbt Docs?",
      options: ["True, ref builds the DAG lineage map dynamically ", "False, ref compiles static paths without lineage "],
      correct: [0],
      concept: "True. The ef() function is the core of dbt\'s dependency management. It automatically resolves the appropriate environment-specific schemas and builds the Directed Acyclic Graph (DAG) for model execution and documentation lineage."
    },
    {
      id: 93,
      type: "tf",
      difficulty: 3,
      question: "Is it true that calling the `ref()` function in a dbt model to join tables in `Source Properties` automatically compiles the references into physical database paths and creates lineage dependencies visible in dbt Docs?",
      options: ["True, ref builds the DAG lineage map dynamically ", "False, ref compiles static paths without lineage "],
      correct: [0],
      concept: "True. The ef() function is the core of dbt\'s dependency management. It automatically resolves the appropriate environment-specific schemas and builds the Directed Acyclic Graph (DAG) for model execution and documentation lineage."
    },
    {
      id: 94,
      type: "tf",
      difficulty: 3,
      question: "Is it true that calling the `ref()` function in a dbt model to join tables in `Seeds & CSV Loading` automatically compiles the references into physical database paths and creates lineage dependencies visible in dbt Docs?",
      options: ["True, ref builds the DAG lineage map dynamically ", "False, ref compiles static paths without lineage "],
      correct: [0],
      concept: "True. The ef() function is the core of dbt\'s dependency management. It automatically resolves the appropriate environment-specific schemas and builds the Directed Acyclic Graph (DAG) for model execution and documentation lineage."
    },
    {
      id: 95,
      type: "tf",
      difficulty: 3,
      question: "Is it true that calling the `ref()` function in a dbt model to join tables in `Ref & Source Functions` automatically compiles the references into physical database paths and creates lineage dependencies visible in dbt Docs?",
      options: ["True, ref builds the DAG lineage map dynamically ", "False, ref compiles static paths without lineage "],
      correct: [0],
      concept: "True. The ef() function is the core of dbt\'s dependency management. It automatically resolves the appropriate environment-specific schemas and builds the Directed Acyclic Graph (DAG) for model execution and documentation lineage."
    },
    {
      id: 96,
      type: "tf",
      difficulty: 3,
      question: "Is it true that calling the `ref()` function in a dbt model to join tables in `Defining Sources` automatically compiles the references into physical database paths and creates lineage dependencies visible in dbt Docs?",
      options: ["True, ref builds the DAG lineage map dynamically ", "False, ref compiles static paths without lineage "],
      correct: [0],
      concept: "True. The ef() function is the core of dbt\'s dependency management. It automatically resolves the appropriate environment-specific schemas and builds the Directed Acyclic Graph (DAG) for model execution and documentation lineage."
    },
    {
      id: 97,
      type: "tf",
      difficulty: 3,
      question: "Is it true that calling the `ref()` function in a dbt model to join tables in `Schema Configuration` automatically compiles the references into physical database paths and creates lineage dependencies visible in dbt Docs?",
      options: ["True, ref builds the DAG lineage map dynamically ", "False, ref compiles static paths without lineage "],
      correct: [0],
      concept: "True. The ef() function is the core of dbt\'s dependency management. It automatically resolves the appropriate environment-specific schemas and builds the Directed Acyclic Graph (DAG) for model execution and documentation lineage."
    },
    {
      id: 98,
      type: "tf",
      difficulty: 3,
      question: "Is it true that calling the `ref()` function in a dbt model to join tables in `Source Properties` automatically compiles the references into physical database paths and creates lineage dependencies visible in dbt Docs?",
      options: ["True, ref builds the DAG lineage map dynamically ", "False, ref compiles static paths without lineage "],
      correct: [0],
      concept: "True. The ef() function is the core of dbt\'s dependency management. It automatically resolves the appropriate environment-specific schemas and builds the Directed Acyclic Graph (DAG) for model execution and documentation lineage."
    },
    {
      id: 99,
      type: "tf",
      difficulty: 3,
      question: "Is it true that calling the `ref()` function in a dbt model to join tables in `Seeds & CSV Loading` automatically compiles the references into physical database paths and creates lineage dependencies visible in dbt Docs?",
      options: ["True, ref builds the DAG lineage map dynamically ", "False, ref compiles static paths without lineage "],
      correct: [0],
      concept: "True. The ef() function is the core of dbt\'s dependency management. It automatically resolves the appropriate environment-specific schemas and builds the Directed Acyclic Graph (DAG) for model execution and documentation lineage."
    },
    {
      id: 100,
      type: "tf",
      difficulty: 3,
      question: "Is it true that calling the `ref()` function in a dbt model to join tables in `Ref & Source Functions` automatically compiles the references into physical database paths and creates lineage dependencies visible in dbt Docs?",
      options: ["True, ref builds the DAG lineage map dynamically ", "False, ref compiles static paths without lineage "],
      correct: [0],
      concept: "True. The ef() function is the core of dbt\'s dependency management. It automatically resolves the appropriate environment-specific schemas and builds the Directed Acyclic Graph (DAG) for model execution and documentation lineage."
    }
  ]
};

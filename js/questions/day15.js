window.QUIZ_DATA = window.QUIZ_DATA || {};
window.QUIZ_DATA["day15"] = {
  title: "Version Data & SCD",
  topics: ["SCD Type 1", "SCD Type 2", "SCD Type 3", "History Tracking", "Slowly Changing Dimensions"],
  questions: [
    {
      id: 1,
      type: "single",
      difficulty: 1,
      question: "In an SCD Type 1 implementation, what happens when a customer\'s phone number changes in the source system?",
      options: ["The old phone number is overwritten with the new value in the dimension table", "A new row is inserted with the new phone number and a surrogate key", "Both old and new phone numbers are stored in separate columns", "The change is ignored until a full reload is triggered"],
      correct: [0],
      concept: "SCD Type 1 simply overwrites the old value with the new value. No history is preserved. This is the simplest approach and is used when historical tracking of that attribute is not required."
    },
    {
      id: 2,
      type: "single",
      difficulty: 1,
      question: "Which scenario is MOST appropriate for using SCD Type 1?",
      options: ["Correcting a misspelled customer name in the dimension table", "Tracking a customer\'s address changes over the past five years", "Maintaining an audit trail of salary adjustments for employees", "Recording every status change for an insurance claim"],
      correct: [0],
      concept: "SCD Type 1 is best suited for data corrections or when historical values are irrelevant. Fixing a misspelling is a correction, not a meaningful change, so overwriting is appropriate. The other scenarios require history preservation (Type 2)."
    },
    {
      id: 3,
      type: "single",
      difficulty: 1,
      question: "What is a PRIMARY disadvantage of SCD Type 1?",
      options: ["It permanently loses all previous attribute values", "It requires surrogate keys for every dimension table", "It doubles the storage requirement for each changed row", "It prevents any updates to dimension table attributes"],
      correct: [0],
      concept: "The main drawback of SCD Type 1 is the loss of historical data. Once a value is overwritten, the previous value cannot be recovered. This makes historical analysis of that attribute impossible."
    },
    {
      id: 4,
      type: "single",
      difficulty: 1,
      question: "In SCD Type 2, what is the purpose of the surrogate key?",
      options: ["To uniquely identify each version of a dimension record", "To replace the natural key entirely in the source system", "To encrypt sensitive dimension attributes for compliance", "To link the dimension table back to the staging area"],
      correct: [0],
      concept: "SCD Type 2 creates a new row for each change, so the natural key is no longer unique. A surrogate key (typically an auto-incrementing integer) uniquely identifies each version/row, allowing fact tables to reference the correct historical version."
    },
    {
      id: 5,
      type: "single",
      difficulty: 1,
      question: "Which column set is MOST commonly used together in an SCD Type 2 dimension table?",
      options: ["surrogate_key, natural_key, effective_start_date, effective_end_date, is_current", "natural_key, previous_value, current_value, change_timestamp, change_type", "surrogate_key, version_number, hash_value, merge_key, delete_flag", "natural_key, scd_type, overwrite_flag, audit_user, audit_timestamp"],
      correct: [0],
      concept: "SCD Type 2 tables typically include a surrogate key, the natural/business key, effective date range (start and end), and a current row indicator flag. These columns together enable both point-in-time lookups and identification of the most current version."
    },
    {
      id: 6,
      type: "single",
      difficulty: 1,
      question: "What does the is_current flag indicate in an SCD Type 2 dimension?",
      options: ["Whether the row represents the most recent version of that entity", "Whether the row has been validated by the data quality process", "Whether the row was loaded during the most recent ETL batch", "Whether the row\'s natural key still exists in the source system"],
      correct: [0],
      concept: "The is_current (or current_flag) column is a boolean indicator that marks whether a given row is the latest active version for that business entity. It simplifies queries that only need the current state without filtering on date ranges."
    },
    {
      id: 7,
      type: "single",
      difficulty: 1,
      question: "In SCD Type 3, how is a change to a customer\'s city attribute typically handled?",
      options: ["A new column called previous_city is added to store the old value", "A new row is inserted with the updated city and a new surrogate key", "The city value is overwritten and the old value is permanently lost", "The change is stored in a separate history table linked by foreign key"],
      correct: [0],
      concept: "SCD Type 3 adds additional columns to the same row to capture limited history. For example, \'city\' becomes \'current_city\' and \'previous_city\'. This preserves one level of change history without adding new rows."
    },
    {
      id: 8,
      type: "single",
      difficulty: 1,
      question: "What is a key limitation of SCD Type 3?",
      options: ["It can only track a limited number of historical changes per attribute", "It requires significantly more storage than SCD Type 2", "It cannot be used with natural keys from the source system", "It forces all attributes in the dimension to be versioned together"],
      correct: [0],
      concept: "SCD Type 3 only stores a fixed number of historical values (typically one previous value). If the attribute changes multiple times, earlier values are lost. This makes it unsuitable for attributes that change frequently or where full history is needed."
    },
    {
      id: 9,
      type: "single",
      difficulty: 1,
      question: "Which technique is used to detect changes in source data for SCD processing?",
      options: ["Comparing hash values of source and target attribute columns", "Running a full table scan on the target table every hour", "Dropping and recreating the dimension table on each ETL run", "Randomly sampling rows from the source to detect drift"],
      correct: [0],
      concept: "Delta detection commonly uses hash comparison — a hash of the relevant source columns is compared to the hash stored in the target. If they differ, a change has occurred. This is efficient and avoids column-by-column comparison for wide tables."
    },
    {
      id: 10,
      type: "single",
      difficulty: 1,
      question: "What is a late-arriving dimension in the context of a data warehouse?",
      options: ["A dimension record that arrives after the fact records referencing it", "A dimension table that is loaded last in the ETL sequence", "A dimension with attributes that change very slowly over time", "A dimension that is only populated during month-end processing"],
      correct: [0],
      concept: "A late-arriving dimension occurs when fact records reference a dimension member that hasn\'t been loaded yet. The warehouse must insert a placeholder (inferred member) and update it later when the actual dimension data arrives."
    },
    {
      id: 11,
      type: "single",
      difficulty: 1,
      question: "When a late-arriving dimension record finally arrives, what must happen to the placeholder row?",
      options: ["The placeholder attributes are updated with actual values from the source", "The placeholder row is deleted and a completely new row is inserted", "The fact table foreign keys are updated to point to a new surrogate key", "The placeholder is archived to a history table before being replaced"],
      correct: [0],
      concept: "When the actual dimension data arrives, the inferred/placeholder row is updated in place with real attribute values. The surrogate key remains the same, so existing fact table references remain valid. This is essentially an SCD Type 1 update on the placeholder."
    },
    {
      id: 12,
      type: "single",
      difficulty: 1,
      question: "What is a late-arriving fact?",
      options: ["A fact record that arrives after the time period it belongs to has already been closed", "A fact table that is created after all dimension tables are loaded", "A measurement that takes longer than expected to compute during ETL", "A fact record that references a dimension not yet created in the model"],
      correct: [0],
      concept: "A late-arriving fact is a transaction or event record that arrives after its business time period has passed. The challenge is associating it with the correct historical version of dimensions that may have since changed (requiring point-in-time lookups)."
    },
    {
      id: 13,
      type: "single",
      difficulty: 1,
      question: "In SCD Type 2, when a new version of a record is created, what happens to the effective_end_date of the previous version?",
      options: ["It is updated to reflect the day before the new version\'s start date", "It remains NULL because the row is still considered active", "It is set to a far-future date like 9999-12-31 to indicate closure", "It is deleted since the previous version is no longer relevant"],
      correct: [0],
      concept: "When a new version is inserted, the previous version\'s effective_end_date is updated to close that record\'s validity period — typically set to the day before (or the same day as) the new version\'s effective_start_date. This creates non-overlapping date ranges."
    },
    {
      id: 14,
      type: "single",
      difficulty: 1,
      question: "Which value is commonly used for effective_end_date on the current active row in SCD Type 2?",
      options: ["A far-future sentinel date such as 9999-12-31", "The current system date at the time of the last ETL run", "NULL to indicate the row has no defined end date yet", "The effective_start_date of the same row repeated twice"],
      correct: [0],
      concept: "Using a far-future date like 9999-12-31 as the end date for current rows simplifies BETWEEN queries for point-in-time lookups. While NULL is also used, a sentinel date avoids NULL-handling complexities in date range filters."
    },
    {
      id: 15,
      type: "single",
      difficulty: 1,
      question: "What is a surrogate key typically implemented as in an SCD Type 2 dimension?",
      options: ["A system-generated auto-incrementing integer with no business meaning", "The natural key concatenated with a version timestamp string", "A composite key of the natural key and the effective start date", "A UUID generated from hashing all attribute columns together"],
      correct: [0],
      concept: "Surrogate keys are typically auto-incrementing integers assigned by the data warehouse. They carry no business meaning, are compact for joins, and provide a unique identifier for each version row. This is preferred over composite keys for join performance."
    },
    {
      id: 16,
      type: "single",
      difficulty: 1,
      question: "A data engineer needs to track how many times an employee\'s department has changed historically. Which SCD type is MOST appropriate?",
      options: ["SCD Type 2, which creates a new row for every change", "SCD Type 1, which overwrites the department on each change", "SCD Type 3, which stores the previous department in a column", "SCD Type 0, which never updates the original department value"],
      correct: [0],
      concept: "SCD Type 2 preserves complete change history by inserting a new row for each change. To count the number of department changes, you simply count the number of rows for that employee\'s natural key. Types 1 and 3 lose earlier history."
    },
    {
      id: 17,
      type: "single",
      difficulty: 1,
      question: "What is SCD Type 0?",
      options: ["A strategy where the dimension attribute is never updated after initial load", "A strategy where every change creates a new dimension table entirely", "A strategy that applies Type 1 and Type 2 simultaneously to all columns", "A strategy that uses only temporal tables instead of dimension tables"],
      correct: [0],
      concept: "SCD Type 0 (also called \'retain original\') means the attribute value is set when first loaded and never changed, regardless of source updates. It is used for attributes like original_credit_score or date_of_birth that should reflect the value at the time of initial capture."
    },
    {
      id: 18,
      type: "single",
      difficulty: 1,
      question: "Which audit column is MOST useful for troubleshooting when an SCD Type 2 version was created?",
      options: ["A row_insert_timestamp column recording when the ETL created the row", "A hash_value column storing the MD5 of all tracked attributes", "A batch_size column showing how many rows were processed together", "A source_system column identifying which application sent the data"],
      correct: [0],
      concept: "Audit columns like row_insert_timestamp (or created_datetime) capture when the ETL process inserted the row. This is critical for debugging — it tells you exactly when the warehouse recognized the change, independently of the business effective date."
    },
    {
      id: 19,
      type: "single",
      difficulty: 1,
      question: "What is a mini-dimension used for in dimensional modeling?",
      options: ["To separate frequently changing attributes from the main dimension to reduce Type 2 row explosion", "To store dimension attributes that have fewer than ten distinct values", "To create a smaller copy of a large dimension for development testing", "To replace surrogate keys with natural keys for improved join performance"],
      correct: [0],
      concept: "Mini-dimensions extract rapidly changing attributes (e.g., age band, income bracket, credit score range) into a separate small dimension. This prevents excessive row creation in the main SCD Type 2 dimension when these attributes change frequently."
    },
    {
      id: 20,
      type: "single",
      difficulty: 1,
      question: "What does Change Data Capture (CDC) provide to an SCD process?",
      options: ["A stream of insert, update, and delete events from the source system", "A complete snapshot of the source table taken at regular intervals", "A pre-built SCD Type 2 table that can be loaded directly into the warehouse", "A schema comparison tool that detects structural changes in source tables"],
      correct: [0],
      concept: "CDC captures row-level changes (inserts, updates, deletes) from the source database\'s transaction log. This provides the SCD process with exactly which records changed and how, eliminating the need for full-table comparisons for delta detection."
    },
    {
      id: 21,
      type: "single",
      difficulty: 1,
      question: "In a hybrid SCD Type 6 implementation, which three SCD types are combined?",
      options: ["Type 1, Type 2, and Type 3 together in a single dimension", "Type 0, Type 1, and Type 2 together in a single dimension", "Type 2, Type 3, and Type 4 together in a single dimension", "Type 1, Type 3, and Type 4 together in a single dimension"],
      correct: [0],
      concept: "SCD Type 6 (named because 1+2+3=6) combines all three basic SCD types: Type 2 rows for full history, Type 3 previous-value columns for quick comparison, and Type 1 overwrites on a \'current\' column across all historical rows for easy reporting on the latest value."
    },
    {
      id: 22,
      type: "single",
      difficulty: 1,
      question: "What is bitemporal modeling?",
      options: ["Tracking both the valid time (business reality) and transaction time (when recorded) for each record", "Using two separate dimension tables for the same business entity", "Applying SCD Type 2 with two different effective date columns for different attributes", "Storing the same data in two different time zones for global reporting"],
      correct: [0],
      concept: "Bitemporal modeling captures two independent time dimensions: valid time (when something was true in the real world) and transaction time (when the database recorded it). This enables answering questions like \'what did we think was true as of date X about the state at date Y?\'"
    },
    {
      id: 23,
      type: "single",
      difficulty: 1,
      question: "A temporal table in SQL Server automatically manages which aspect of data versioning?",
      options: ["System-versioned row history with period start and end timestamps", "SCD Type 3 column pairs for previous and current attribute values", "Surrogate key generation based on the natural key and version number", "Automatic detection and classification of SCD types for each column"],
      correct: [0],
      concept: "SQL Server temporal tables (system-versioned tables) automatically track the history of all row changes. When a row is updated or deleted, the old version is moved to a linked history table with system-generated period columns (SysStartTime, SysEndTime)."
    },
    {
      id: 24,
      type: "single",
      difficulty: 1,
      question: "When using SCD Type 2 with a MERGE statement, which MERGE clause handles inserting the new version of a changed record?",
      options: ["The WHEN NOT MATCHED clause with appropriate new row values", "The WHEN MATCHED clause with an UPDATE to the existing row", "The WHEN NOT MATCHED BY SOURCE clause with a DELETE action", "The OUTPUT clause that captures changed rows for downstream use"],
      correct: [0],
      concept: "In a MERGE-based SCD Type 2 pattern, changed records are handled in two steps: (1) the WHEN MATCHED clause expires the old row, and (2) the changed record appears as NOT MATCHED in a second pass or is inserted via the OUTPUT clause to add the new version row."
    },
    {
      id: 25,
      type: "single",
      difficulty: 1,
      question: "What is a rapidly changing dimension?",
      options: ["A dimension with one or more attributes that change very frequently, causing excessive Type 2 rows", "A dimension table that is dropped and recreated on every ETL run cycle", "A dimension with a very large number of distinct natural key values", "A dimension that must be loaded before all other dimensions in the pipeline"],
      correct: [0],
      concept: "A rapidly changing dimension (or rapidly changing monster dimension) has attributes that change so often that SCD Type 2 would create an unmanageable number of rows. Solutions include mini-dimensions, junk dimensions, or moving volatile attributes to fact tables."
    },
    {
      id: 26,
      type: "single",
      difficulty: 1,
      question: "Which attribute would be LEAST suitable for SCD Type 2 tracking?",
      options: ["A customer\'s real-time web session count that updates every second", "A customer\'s mailing address that changes once every few years", "An employee\'s job title that changes with each promotion cycle", "A product\'s list price that is updated quarterly by the vendor"],
      correct: [0],
      concept: "SCD Type 2 is designed for slowly changing attributes. A real-time metric like web session count changes too frequently — it would create millions of rows. Such rapidly changing measures belong in fact tables or mini-dimensions, not in a Type 2 dimension."
    },
    {
      id: 27,
      type: "single",
      difficulty: 1,
      question: "What is the purpose of a versioning strategy in data pipelines?",
      options: ["To track and manage different states of data as it evolves over time", "To assign sequential build numbers to ETL job deployments", "To compress historical data by removing duplicate version rows", "To encrypt sensitive columns differently for each data version"],
      correct: [0],
      concept: "Versioning strategies enable tracking how data changes over time. This includes SCD approaches for dimensions, snapshot tables for periodic states, and event sourcing for capturing every change as an immutable event — all supporting reproducibility and auditability."
    },
    {
      id: 28,
      type: "single",
      difficulty: 1,
      question: "In delta detection for SCD processing, what advantage does a hash-based comparison have over column-by-column comparison?",
      options: ["It reduces the comparison to a single value check regardless of column count", "It automatically identifies which specific columns changed in the row", "It eliminates the need for any staging area in the ETL pipeline", "It guarantees zero false positives even with billions of rows"],
      correct: [0],
      concept: "Hash-based delta detection computes a single hash (e.g., MD5 or SHA-256) of all tracked columns. Comparing one hash value is simpler and often faster than comparing many individual columns, especially for wide tables. However, it doesn\'t reveal which column changed."
    },
    {
      id: 29,
      type: "single",
      difficulty: 1,
      question: "What is a slowly changing measure?",
      options: ["A fact table measure whose value is corrected or restated after initial load", "A dimension attribute that changes at unpredictable intervals", "A calculated metric that varies based on the aggregation time window", "A key performance indicator that only changes during fiscal year-end"],
      correct: [0],
      concept: "Slowly changing measures (or slowly changing facts) refer to fact values that may be revised after initial recording — such as restated revenue or adjusted inventory counts. These require versioning or accumulating snapshot approaches in fact tables."
    },
    {
      id: 30,
      type: "single",
      difficulty: 1,
      question: "Which SCD type is BEST when a business only needs to compare the current value of an attribute with its immediately previous value?",
      options: ["SCD Type 3, which stores current and previous values in separate columns", "SCD Type 2, which creates a new row for every historical change", "SCD Type 1, which overwrites the previous value completely", "SCD Type 0, which never updates the attribute after initial load"],
      correct: [0],
      concept: "SCD Type 3 is ideal when the business requirement is limited to comparing current vs. previous values (e.g., current_region and previous_region). It avoids the complexity and storage overhead of Type 2 when only one level of history is needed."
    },
    {
      id: 31,
      type: "single",
      difficulty: 1,
      question: "How does SCD Type 1 impact existing fact table aggregations after an attribute is overwritten?",
      options: ["Historical facts are now grouped under the new attribute value, changing past report totals", "Historical facts retain their original grouping since they use a separate key", "Historical facts are automatically archived to prevent reporting inconsistencies", "Historical facts are deleted and must be reloaded from the source system"],
      correct: [0],
      concept: "Since SCD Type 1 overwrites the dimension attribute, any fact records linked to that dimension row now report under the new value. This retroactively changes historical aggregations — a major consideration when deciding whether Type 1 is acceptable."
    },
    {
      id: 32,
      type: "single",
      difficulty: 1,
      question: "A company uses SCD Type 2 for its customer dimension. Customer #1001 has moved from New York to Chicago. How many rows now exist for customer #1001?",
      options: ["At least two rows: one expired row for New York and one current row for Chicago", "Exactly one row with the city updated to Chicago via an overwrite", "Three rows: one for New York, one for Chicago, and one bridge record", "One row with both current_city = Chicago and previous_city = New York"],
      correct: [0],
      concept: "SCD Type 2 creates a new row for each change. The original New York row is expired (end-dated, is_current = false), and a new row with Chicago is inserted (is_current = true). The customer has at least 2 rows, possibly more if there were earlier changes."
    },
    {
      id: 33,
      type: "single",
      difficulty: 1,
      question: "What is the role of the natural key (business key) in an SCD Type 2 dimension?",
      options: ["It groups all version rows belonging to the same real-world entity together", "It serves as the primary key that uniquely identifies each row in the table", "It replaces the surrogate key for joining to fact tables in queries", "It stores the hash of all tracked columns for change detection purposes"],
      correct: [0],
      concept: "In SCD Type 2, the natural/business key (e.g., customer_id from the source) is no longer unique per row — it\'s duplicated across version rows. It groups all versions of the same entity, while the surrogate key uniquely identifies each version row."
    },
    {
      id: 34,
      type: "single",
      difficulty: 1,
      question: "Which of the following is an example of an SCD Type 0 attribute?",
      options: ["A customer\'s original signup date that should never be modified", "A customer\'s email address that is updated whenever they change it", "A customer\'s loyalty tier that is recalculated monthly", "A customer\'s last login timestamp that updates on every visit"],
      correct: [0],
      concept: "SCD Type 0 preserves the original value and never updates it. A signup date is a perfect example — it represents a historical fact that should not change. Other examples include date_of_birth and original_credit_score at account opening."
    },
    {
      id: 35,
      type: "single",
      difficulty: 1,
      question: "What is the main reason SCD Type 2 is the most commonly used SCD strategy in enterprise data warehouses?",
      options: ["It preserves complete change history while maintaining referential integrity with fact tables", "It is the simplest to implement and requires no additional columns or keys", "It uses the least storage of any SCD type since it compresses old versions", "It automatically generates reports showing attribute changes over time"],
      correct: [0],
      concept: "SCD Type 2 is favored because it captures full history, supports point-in-time analysis, and maintains clean referential integrity via surrogate keys. Though more complex than Type 1, the analytical value of preserved history justifies the implementation cost."
    },
    {
      id: 36,
      type: "single",
      difficulty: 2,
      question: "A data engineer uses SCD Type 2 with only effective_start_date and is_current flag (no end_date). What problem does this create for point-in-time queries?",
      options: ["The query must use a self-join or window function to derive the end date from the next version\'s start date", "The query cannot determine the current row because is_current is unreliable", "The dimension table cannot be joined to any fact table without an end date", "The ETL process cannot expire old rows because there is no end date to set"],
      correct: [0],
      concept: "Without an explicit end_date, point-in-time queries require deriving it — typically via LEAD() window function to get the next version\'s start_date. This adds query complexity and performance overhead compared to having an explicit end_date column."
    },
    {
      id: 37,
      type: "single",
      difficulty: 2,
      question: "In a Type 6 SCD, when a new version row is inserted for a customer who changed cities, what happens to the \'current_city\' column on ALL previous version rows?",
      options: ["All previous rows are updated with the new city value via a Type 1 overwrite", "All previous rows retain their original city values without any modification", "Only the immediately preceding row is updated with the new city value", "All previous rows have their current_city set to NULL to indicate expiration"],
      correct: [0],
      concept: "In SCD Type 6, the \'current\' column (e.g., current_city) is overwritten (Type 1 style) across ALL version rows for that entity. This allows any historical row to show both its point-in-time value AND the latest value, enabling flexible reporting."
    },
    {
      id: 38,
      type: "single",
      difficulty: 2,
      question: "A fact record arrives with a date of January 15, but the referenced customer dimension changed on January 10 (SCD Type 2). Which surrogate key should the fact record use?",
      options: ["The surrogate key of the version that was active on January 15 (the post-change version)", "The surrogate key of the version that was active before January 10 (the pre-change version)", "The surrogate key of the very first version ever created for that customer", "The surrogate key should be NULL since the exact match date is ambiguous"],
      correct: [0],
      concept: "Fact records should reference the dimension version that was current at the time of the fact event. Since the fact date (Jan 15) falls after the dimension change (Jan 10), it should use the new version\'s surrogate key — the one whose effective date range includes Jan 15."
    },
    {
      id: 39,
      type: "single",
      difficulty: 2,
      question: "A data warehouse team discovers that their SCD Type 2 customer dimension has grown from 1 million to 50 million rows due to frequent attribute changes. What is the BEST remediation?",
      options: ["Extract the rapidly changing attributes into a mini-dimension and remove them from Type 2 tracking", "Switch all attributes to SCD Type 1 to eliminate historical row accumulation", "Delete all expired rows older than one year to reduce the table size", "Partition the table by is_current flag to speed up queries on active rows"],
      correct: [0],
      concept: "When Type 2 row explosion occurs due to volatile attributes, the recommended solution is a mini-dimension. Moving rapidly changing attributes (like age band, credit score range) to a separate small dimension prevents unnecessary versioning in the main dimension."
    },
    {
      id: 40,
      type: "single",
      difficulty: 2,
      question: "In bitemporal modeling, a record shows valid_from = 2024-01-01 and transaction_from = 2024-03-15. What does this indicate?",
      options: ["The change was effective in reality on Jan 1 but was only recorded in the system on Mar 15", "The record is valid in both January and March simultaneously for reporting", "The record was entered on Jan 1 but will not become active until Mar 15", "The system detected a conflict between two different versions of the record"],
      correct: [0],
      concept: "In bitemporal modeling, valid_from represents when the fact became true in the real world, while transaction_from represents when the database recorded it. A gap between them (Jan 1 vs Mar 15) indicates late recording — common with retroactive corrections or delayed data feeds."
    },
    {
      id: 41,
      type: "single",
      difficulty: 2,
      question: "What is the recommended approach for handling a late-arriving fact that references an SCD Type 2 dimension?",
      options: ["Look up the dimension version that was active on the fact\'s business date and use that surrogate key", "Use the current active dimension row\'s surrogate key since it is the most recent version", "Reject the fact record and log it as an exception for manual review and correction", "Insert the fact with a NULL dimension key and update it during the next ETL cycle"],
      correct: [0],
      concept: "Late-arriving facts must be matched to the correct historical dimension version based on the fact\'s business date, not the current date. This requires a point-in-time lookup: WHERE fact_date BETWEEN effective_start_date AND effective_end_date."
    },
    {
      id: 42,
      type: "single",
      difficulty: 2,
      question: "A dimension table uses SCD Type 2 with version numbering. Customer #5000 has version_number values of 1, 2, and 3. The team wants to find what changed between versions 2 and 3. What query technique is MOST efficient?",
      options: ["Self-join the table on natural_key where one alias has version N and the other has version N-1", "Use EXCEPT between two full table scans filtered to different version numbers", "Query the CDC log table directly instead of comparing dimension versions", "Use UNPIVOT to transform columns to rows and then compare row-by-row"],
      correct: [0],
      concept: "A self-join on the natural key with version_number = 3 and version_number = 2 lets you compare all attributes side by side. This is efficient for targeted comparisons. Alternatively, LAG/LEAD window functions can achieve similar results without an explicit join."
    },
    {
      id: 43,
      type: "single",
      difficulty: 2,
      question: "When implementing CDC-based SCD processing, what does the \'delete\' operation type in the CDC stream typically translate to in the dimension?",
      options: ["A soft delete — setting an is_deleted flag or expiring the current row with an end date", "A hard delete — physically removing all version rows for that natural key", "An SCD Type 1 overwrite — setting all attributes to NULL on the current row", "A no-op — delete events are ignored since dimensions should never lose rows"],
      correct: [0],
      concept: "In dimensional modeling, physical deletes are generally avoided to preserve history. CDC delete events are translated to soft deletes: the current Type 2 row is expired (end-dated) and optionally flagged as deleted. This maintains referential integrity with existing facts."
    },
    {
      id: 44,
      type: "single",
      difficulty: 2,
      question: "A team implements SCD Type 2 using a MERGE statement but finds that some changes produce duplicate active rows. What is the MOST likely cause?",
      options: ["The MERGE source contains duplicate natural keys, causing multiple matches per target row", "The MERGE WHEN MATCHED clause is missing the UPDATE to expire the old row", "The surrogate key sequence is generating duplicate values across parallel sessions", "The is_current flag default value is set to false instead of true for new rows"],
      correct: [0],
      concept: "MERGE operations require unique keys in the source. If the source has duplicate natural keys, one target row matches multiple source rows, causing nondeterministic behavior. Always deduplicate the source data before merging, or the MERGE may produce duplicate active rows."
    },
    {
      id: 45,
      type: "single",
      difficulty: 2,
      question: "Which approach correctly handles an SCD Type 2 dimension when the source system sends a full snapshot instead of change records?",
      options: ["Compare each source row\'s attributes against the current dimension row and process only differences", "Insert all source rows as new versions regardless of whether attributes actually changed", "Delete all existing dimension rows and reload from the full snapshot each time", "Ignore the snapshot and wait for the source to provide incremental change feeds"],
      correct: [0],
      concept: "When receiving full snapshots, the SCD process must perform delta detection — comparing source attributes to current dimension values (often via hashing). Only rows with actual changes should generate new Type 2 versions. Loading everything would create false version rows."
    },
    {
      id: 46,
      type: "single",
      difficulty: 2,
      question: "In an SCD Type 2 table, what happens to query performance as the number of historical versions per entity grows?",
      options: ["Queries filtering for current rows degrade because they must scan more rows per natural key", "Query performance improves because the optimizer can parallelize across more rows", "There is no performance impact because the surrogate key index handles all lookups", "Only INSERT performance degrades while SELECT performance remains unchanged"],
      correct: [0],
      concept: "As version rows accumulate, queries that filter on natural_key + is_current must scan more rows. Performance mitigation strategies include partitioning by is_current flag, maintaining a current-only view, or indexing on (natural_key, is_current)."
    },
    {
      id: 47,
      type: "single",
      difficulty: 2,
      question: "A data engineer needs to implement SCD Type 2 in a cloud data warehouse that does not support MERGE statements. What is the recommended alternative?",
      options: ["Use a combination of INSERT for new versions and UPDATE for expiring old versions in separate statements", "Use only DELETE and INSERT to replace changed rows entirely on each run", "Use CREATE TABLE AS SELECT to rebuild the entire dimension table daily", "Use stored procedures with cursor-based row-by-row processing logic"],
      correct: [0],
      concept: "Without MERGE, SCD Type 2 can be implemented as two separate DML statements: (1) UPDATE to expire current rows where changes are detected, and (2) INSERT to add new version rows. This two-step approach achieves the same result as MERGE."
    },
    {
      id: 48,
      type: "single",
      difficulty: 2,
      question: "What distinguishes an SCD Type 4 (history table) from SCD Type 2?",
      options: ["Type 4 stores history in a separate table while the main dimension only holds current values", "Type 4 stores three versions of each attribute in the same row like Type 3", "Type 4 uses only natural keys and eliminates the need for surrogate keys", "Type 4 applies changes only at the end of each fiscal quarter, not continuously"],
      correct: [0],
      concept: "SCD Type 4 uses two tables: the main dimension table always contains only current data (like Type 1), and a separate history table stores all previous versions. This keeps the main table lean for current-state queries while preserving full history elsewhere."
    },
    {
      id: 49,
      type: "single",
      difficulty: 2,
      question: "A team uses effective_start_date and effective_end_date for SCD Type 2. They discover overlapping date ranges for the same natural key. What is the root cause?",
      options: ["The ETL process failed to properly expire the previous row before inserting the new version", "The database automatically generates overlapping ranges for concurrent transactions", "The natural key was changed in the source system causing a cross-entity overlap", "The date columns use different time zones causing apparent but not real overlaps"],
      correct: [0],
      concept: "Overlapping date ranges occur when the ETL does not atomically expire the old row (set end_date) and insert the new row. If the update to expire the old row fails or is skipped, both the old and new rows appear as active for overlapping periods."
    },
    {
      id: 50,
      type: "single",
      difficulty: 2,
      question: "Which indexing strategy BEST supports SCD Type 2 queries that need to find the current version of a dimension record?",
      options: ["A composite index on (natural_key, is_current) for fast current-version lookups", "A clustered index on surrogate_key alone since it is the primary key", "A full-text index on all attribute columns for flexible text searching", "A bitmap index on effective_start_date for range-based date queries"],
      correct: [0],
      concept: "Queries for the current version typically filter on WHERE natural_key = X AND is_current = true. A composite index on (natural_key, is_current) directly supports this access pattern, enabling index seeks rather than scans across all version rows."
    },
    {
      id: 51,
      type: "single",
      difficulty: 2,
      question: "In dimensional modeling, what is a junk dimension and how does it relate to SCD?",
      options: ["A dimension combining low-cardinality flags and indicators, typically managed as SCD Type 1", "A dimension that stores invalid or rejected records from the ETL quality process", "A temporary staging dimension used only during the SCD merge operation", "A dimension that tracks only deleted records from other dimension tables"],
      correct: [0],
      concept: "A junk dimension consolidates miscellaneous low-cardinality flags and indicators (e.g., is_rush_order, payment_type) into one dimension. Since these are typically enumerated combinations, they are usually managed as Type 1 — new combinations are added, existing ones rarely change."
    },
    {
      id: 52,
      type: "single",
      difficulty: 2,
      question: "A company needs to answer: \'What was the customer\'s address when order #12345 was placed?\' Which design supports this requirement?",
      options: ["SCD Type 2 on the customer dimension with the fact referencing the version-specific surrogate key", "SCD Type 1 on the customer dimension with the fact referencing the natural key", "SCD Type 3 on the customer dimension with current and previous address columns", "A separate address history table that is not linked to the fact table at all"],
      correct: [0],
      concept: "Only SCD Type 2 supports true point-in-time analysis. The fact table\'s foreign key points to the specific version row that was current when the order was placed. This \'freezes\' the dimensional context at the time of the transaction."
    },
    {
      id: 53,
      type: "single",
      difficulty: 2,
      question: "When performing delta detection using timestamps from the source system, what risk must the data engineer account for?",
      options: ["Source system timestamps may not be reliable due to clock skew, delayed updates, or batch modifications", "Timestamp-based detection always produces more false positives than hash-based detection", "Timestamps cannot be used with SCD Type 2 because they conflict with effective dates", "Timestamp columns are always indexed in source systems so performance is never a concern"],
      correct: [0],
      concept: "Source timestamps (e.g., last_modified_date) may be unreliable — bulk updates might not set them, clock synchronization issues exist, or application bugs may skip timestamp updates. This can cause missed changes. Hash-based detection is more reliable for correctness."
    },
    {
      id: 54,
      type: "single",
      difficulty: 2,
      question: "What is the \'inferred member\' technique in handling late-arriving dimensions?",
      options: ["Inserting a placeholder dimension row with the natural key and default attribute values until real data arrives", "Inferring the dimension attributes from the fact record\'s descriptive fields", "Using machine learning to predict what the missing dimension attributes should be", "Creating a special \'unknown\' dimension row shared by all late-arriving facts"],
      correct: [0],
      concept: "An inferred member is a placeholder row inserted with the natural key and default/unknown values for attributes. When the actual dimension data arrives, the placeholder is updated (Type 1) with real attributes. This allows fact loading to proceed without waiting for dimension data."
    },
    {
      id: 55,
      type: "single",
      difficulty: 2,
      question: "A data warehouse uses SCD Type 2 for a product dimension. The business asks: \'Show me total sales by current product category.\' The report should reclassify historical sales. Which approach achieves this?",
      options: ["Join fact table to the current product dimension row using natural key instead of surrogate key", "Join fact table to the versioned product dimension using surrogate key as designed", "Apply SCD Type 1 to retroactively update the category on all historical versions", "Create a separate aggregate table pre-joined with the current category values"],
      correct: [0],
      concept: "To reclassify historical sales under the current category, join facts to the current dimension version via natural key (ignoring surrogate keys). Alternatively, a Type 6 approach with a \'current_category\' column on all rows provides this without changing the join strategy."
    },
    {
      id: 56,
      type: "single",
      difficulty: 2,
      question: "Which statement about SCD Type 3 column naming conventions is correct?",
      options: ["Columns are typically named with prefixes like current_ and previous_ (e.g., current_city, previous_city)", "Columns must use version numbers as suffixes (e.g., city_v1, city_v2, city_v3)", "The original column name is kept unchanged and a _delta column stores the difference", "Column names are irrelevant since Type 3 uses a separate metadata table for tracking"],
      correct: [0],
      concept: "SCD Type 3 convention uses descriptive prefixes: current_<attribute> for the latest value and previous_<attribute> for the prior value. Some implementations also include a change_date column to record when the switch occurred."
    },
    {
      id: 57,
      type: "single",
      difficulty: 2,
      question: "In an SCD Type 2 implementation, what should happen when the source sends an update but none of the tracked attributes have actually changed?",
      options: ["No action is taken — the existing current row remains unchanged", "A new version row is still created to record that the record was re-evaluated", "The effective_start_date of the current row is updated to the latest load date", "The audit timestamp is updated but no new version row is created"],
      correct: [0],
      concept: "If delta detection shows no actual attribute changes, no new Type 2 version should be created. Creating versions for non-changes would bloat the table with identical rows. Only genuine attribute differences should trigger a new version."
    },
    {
      id: 58,
      type: "single",
      difficulty: 2,
      question: "What is the primary benefit of using a hash column stored in the SCD Type 2 dimension table?",
      options: ["It enables efficient change detection on subsequent loads without comparing every attribute individually", "It provides data encryption for sensitive personally identifiable information", "It replaces the surrogate key as the unique identifier for each version row", "It ensures referential integrity between the dimension and fact tables"],
      correct: [0],
      concept: "Storing a hash of tracked attributes in the dimension row allows future ETL runs to quickly detect changes: compute the hash of incoming source data and compare it to the stored hash. If different, a change occurred. This avoids expensive multi-column comparisons."
    },
    {
      id: 59,
      type: "single",
      difficulty: 2,
      question: "A data engineer implements SCD Type 2 using only INSERT operations (never UPDATE). How is this possible?",
      options: ["By using an immutable/append-only pattern where the latest row per natural key is determined by MAX(effective_start_date)", "By deleting the old row and inserting a replacement row in a single transaction", "By relying on the database to automatically expire old rows via row-level TTL settings", "By having the fact table always join to the latest row using a database-level trigger"],
      correct: [0],
      concept: "In an append-only SCD Type 2 pattern, rows are never updated. Instead, the \'current\' version is determined at query time using MAX(effective_start_date) or ROW_NUMBER() partitioned by natural key. This works well in immutable storage systems like data lakes."
    },
    {
      id: 60,
      type: "single",
      difficulty: 2,
      question: "What is a common pitfall when implementing SCD Type 2 for a dimension with 200+ columns?",
      options: ["Every minor change in any tracked column creates a full row copy, wasting storage on unchanged attributes", "The surrogate key sequence will exhaust faster than expected due to high row counts", "The MERGE statement cannot handle more than 100 columns in the WHEN MATCHED clause", "The hash function cannot produce unique hashes for rows with more than 200 columns"],
      correct: [0],
      concept: "Wide dimensions amplify Type 2 storage costs because each new version copies ALL columns, even unchanged ones. Solutions include splitting into multiple dimensions, using mini-dimensions for volatile attributes, or tracking only a subset of columns for SCD purposes."
    },
    {
      id: 61,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are valid techniques for handling rapidly changing attributes in a dimensional model? (Select all that apply)",
      options: ["Moving volatile attributes into a mini-dimension with its own surrogate key", "Storing rapidly changing attributes as degenerate dimensions in the fact table", "Applying SCD Type 2 to all attributes regardless of change frequency", "Using a band/range approach to discretize continuous values into stable groups"],
      correct: [0, 1, 3],
      concept: "Rapidly changing attributes can be handled by: (1) mini-dimensions that isolate volatile attributes, (2) storing them directly in the fact table as degenerate dimensions when cardinality is low, or (3) banding/discretizing values to reduce change frequency. Applying Type 2 to all attributes causes row explosion."
    },
    {
      id: 62,
      type: "multi",
      difficulty: 2,
      question: "Which columns are typically required in an SCD Type 2 dimension table? (Select all that apply)",
      options: ["Surrogate key as the primary key", "Natural/business key from the source system", "Effective start and end date columns for version tracking", "Columns storing the previous value of every tracked attribute"],
      correct: [0, 1, 2],
      concept: "SCD Type 2 requires: surrogate key (unique per version), natural key (groups versions), and effective dates (defines version validity). Storing previous values in columns is an SCD Type 3 technique, not a requirement of Type 2."
    },
    {
      id: 63,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are advantages of using CDC for SCD processing over full snapshot comparisons? (Select all that apply)",
      options: ["Reduced data volume transferred from source to target systems", "Exact identification of insert, update, and delete operations", "Elimination of the need for any staging area or intermediate tables", "Lower latency in detecting and processing source system changes"],
      correct: [0, 1, 3],
      concept: "CDC provides incremental changes (less data), explicit operation types (INSERT/UPDATE/DELETE), and near-real-time change detection. However, CDC data still typically lands in a staging area for transformation and SCD processing before loading to the target dimension."
    },
    {
      id: 64,
      type: "multi",
      difficulty: 2,
      question: "Which of the following statements about SCD Type 6 are correct? (Select all that apply)",
      options: ["It creates new rows for each change like Type 2", "It includes a current-value column that is overwritten across all rows like Type 1", "It maintains previous-value columns like Type 3", "It never creates new rows and only modifies existing columns"],
      correct: [0, 1, 2],
      concept: "SCD Type 6 combines: Type 2 (new rows for history), Type 1 (overwriting a \'current\' column on all rows), and Type 3 (previous value columns). It does NOT avoid creating new rows — that would make it a simple Type 1/3 combination."
    },
    {
      id: 65,
      type: "multi",
      difficulty: 2,
      question: "When dealing with late-arriving dimensions, which of the following steps are part of the standard handling process? (Select all that apply)",
      options: ["Creating an inferred member row with default attribute values and the natural key", "Loading the fact record with a reference to the inferred member\'s surrogate key", "Updating the inferred member with actual attributes when dimension data arrives", "Rejecting and discarding all fact records until the dimension data is available"],
      correct: [0, 1, 2],
      concept: "Late-arriving dimension handling: (1) insert an inferred member placeholder, (2) load facts referencing the placeholder\'s surrogate key, and (3) update the placeholder when real data arrives. Facts should NOT be rejected — that would cause data loss and delay."
    },
    {
      id: 66,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are valid reasons to use SCD Type 1 instead of Type 2? (Select all that apply)",
      options: ["The attribute change represents a data correction, not a real-world change", "Preserving historical values for the attribute has no business requirement", "Storage constraints make it impractical to maintain multiple version rows", "The business requires point-in-time analysis on this specific attribute"],
      correct: [0, 1, 2],
      concept: "Type 1 is appropriate for corrections, non-historical attributes, and storage-constrained environments. Point-in-time analysis specifically requires Type 2 — if the business needs to look back in time at what an attribute was, Type 1 destroys that capability."
    },
    {
      id: 67,
      type: "multi",
      difficulty: 2,
      question: "In bitemporal modeling, which two time dimensions are tracked independently? (Select all that apply)",
      options: ["Valid time — when the data is true in the real world", "Transaction time — when the data was recorded in the database", "Processing time — how long the ETL job took to execute", "Display time — when the data was last shown in a report"],
      correct: [0, 1],
      concept: "Bitemporal modeling tracks exactly two time dimensions: valid time (real-world truth) and transaction time (database recording time). Processing time and display time are operational metrics, not part of the bitemporal model."
    },
    {
      id: 68,
      type: "multi",
      difficulty: 2,
      question: "Which of the following describe correct behavior of SQL Server temporal tables? (Select all that apply)",
      options: ["Old versions of rows are automatically moved to a linked history table on UPDATE or DELETE", "The system maintains SysStartTime and SysEndTime period columns automatically", "Users must manually insert rows into the history table during each transaction", "Queries can use FOR SYSTEM_TIME AS OF to retrieve point-in-time data"],
      correct: [0, 1, 3],
      concept: "SQL Server temporal tables automatically manage versioning: old row versions go to the history table on UPDATE/DELETE, period columns are system-maintained, and FOR SYSTEM_TIME enables point-in-time queries. Users never manually insert into the history table."
    },
    {
      id: 69,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are valid delta detection methods for identifying changed records in SCD processing? (Select all that apply)",
      options: ["Comparing hash values of source vs. target attribute columns", "Using source system timestamps like last_modified_date", "Leveraging CDC streams from the source database transaction log", "Counting the total row count in source and target and comparing the totals"],
      correct: [0, 1, 2],
      concept: "Valid delta detection methods include hash comparison (reliable but requires computation), source timestamps (fast but dependent on source reliability), and CDC (most accurate for operational sources). Row count comparison only detects net row changes, not individual record modifications."
    },
    {
      id: 70,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are challenges when implementing SCD Type 2 in a data lake environment? (Select all that apply)",
      options: ["Data lakes typically use immutable file formats that don\'t support in-place row updates", "Expiring old rows requires rewriting entire data files or partitions", "Surrogate key generation is complex without a centralized sequence generator", "Data lakes cannot store structured data with defined column schemas"],
      correct: [0, 1, 2],
      concept: "Data lakes (Parquet, ORC files) are immutable — updating a row means rewriting the file. Expiring Type 2 rows requires file rewrites or append-only patterns. Surrogate key generation without a relational sequence is also challenging. Data lakes CAN store structured/schema data."
    },
    {
      id: 71,
      type: "multi",
      difficulty: 2,
      question: "Which of the following audit columns provide value in an SCD Type 2 dimension? (Select all that apply)",
      options: ["row_created_timestamp — when the ETL process inserted the version row", "row_created_by — the ETL job or user that created the version row", "source_system — which upstream system provided the source data", "row_color — the display color assigned to the row in report visualizations"],
      correct: [0, 1, 2],
      concept: "Useful audit columns include: when the row was created (debugging timing), who/what created it (traceability), and which source system it came from (lineage). Row display color is a presentation concern and does not belong in the dimension table."
    },
    {
      id: 72,
      type: "multi",
      difficulty: 3,
      question: "A late-arriving fact for order date January 5 references customer #2000. The customer dimension (SCD Type 2) shows: Version 1 (effective Jan 1 - Jan 9), Version 2 (effective Jan 10 - current). Which actions are correct? (Select all that apply)",
      options: ["Use Version 1\'s surrogate key because January 5 falls within its effective range", "The fact record should be associated with the historical dimension context at time of the event", "Use Version 2\'s surrogate key because it is the current active version", "Reject the fact since it arrived after Version 2 was created"],
      correct: [0, 1],
      concept: "Late-arriving facts must use point-in-time lookups. January 5 falls within Version 1\'s range (Jan 1-9), so Version 1\'s surrogate key is correct. Using the current version would misrepresent the dimensional context at the time of the transaction."
    },
    {
      id: 73,
      type: "multi",
      difficulty: 3,
      question: "Which of the following strategies help optimize query performance on large SCD Type 2 dimension tables? (Select all that apply)",
      options: ["Creating a composite index on natural_key and is_current flag columns", "Materializing a view that contains only current (active) dimension rows", "Partitioning the table by the is_current flag to separate active from historical rows", "Removing all historical rows older than 30 days to keep the table small"],
      correct: [0, 1, 2],
      concept: "Performance optimizations include: composite indexes for direct lookups, materialized views for current-only access patterns, and partitioning to physically separate active from historical data. Removing historical rows defeats the purpose of SCD Type 2."
    },
    {
      id: 74,
      type: "multi",
      difficulty: 3,
      question: "In a Type 6 SCD implementation for a customer dimension tracking city, which columns would you expect to find on each row? (Select all that apply)",
      options: ["historical_city — the city value that was current when this version was active", "current_city — the latest city value, overwritten across all versions via Type 1", "previous_city — the city value from the immediately prior version via Type 3", "effective_start_date and effective_end_date — version validity dates via Type 2"],
      correct: [0, 1, 2, 3],
      concept: "SCD Type 6 includes ALL of these: historical_city (the point-in-time value for that version row), current_city (Type 1 overwrite of latest value on all rows), previous_city (Type 3 column), and effective dates (Type 2 versioning). All three SCD types are combined."
    },
    {
      id: 75,
      type: "multi",
      difficulty: 3,
      question: "Which problems can arise from using SCD Type 1 in a dimension joined to a fact table? (Select all that apply)",
      options: ["Historical fact aggregations retroactively change when dimension attributes are overwritten", "Reports run yesterday and today may show different totals for the same historical period", "Audit trails for regulatory compliance become impossible for overwritten attributes", "The fact table must be reloaded every time a dimension attribute is overwritten"],
      correct: [0, 1, 2],
      concept: "SCD Type 1 overwrites cause retroactive changes in reports (historical totals shift), report inconsistency across runs (yesterday vs today differ), and audit trail loss. The fact table itself does NOT need reloading — the facts haven\'t changed, only the dimension they join to."
    },
    {
      id: 76,
      type: "single",
      difficulty: 3,
      question: "A data engineer discovers that SCD Type 2 processing on a customer dimension takes 4 hours nightly. The dimension has 500 million rows and 80 columns, but only 5 columns are tracked for changes. What is the MOST impactful optimization?",
      options: ["Hash only the 5 tracked columns instead of all 80 for delta detection", "Switch from SCD Type 2 to SCD Type 1 to eliminate version row creation", "Increase the ETL server\'s memory allocation from 16GB to 64GB", "Change the surrogate key data type from BIGINT to INT for faster comparisons"],
      correct: [0],
      concept: "Hashing all 80 columns wastes computation when only 5 drive versioning. Computing the hash on just the 5 tracked columns dramatically reduces comparison time and eliminates false changes triggered by non-tracked column modifications."
    },
    {
      id: 77,
      type: "single",
      difficulty: 3,
      question: "In a bitemporal model, a correction is made today (May 22, 2026) to a salary that was actually effective on January 1, 2026 but originally recorded as effective March 1, 2026. How should this be modeled?",
      options: ["Insert a new record with valid_from = Jan 1, transaction_from = May 22, and expire the incorrect Mar 1 record in transaction time", "Update the existing record\'s valid_from from March 1 to January 1 and leave transaction_time unchanged", "Delete the March 1 record and insert a new record with both valid_from and transaction_from set to January 1", "Create two records: one backdated to January 1 and one for March 1, both with transaction_from = May 22"],
      correct: [0],
      concept: "Bitemporal corrections insert a new record with the corrected valid time (Jan 1) and current transaction time (May 22). The incorrect record is expired in transaction time (not deleted). This preserves what we previously believed AND what we now know to be true."
    },
    {
      id: 78,
      type: "single",
      difficulty: 3,
      question: "A data lake implements SCD Type 2 using Delta Lake\'s MERGE operation. What advantage does Delta Lake provide over plain Parquet for this use case?",
      options: ["Delta Lake supports ACID transactions and row-level MERGE/UPDATE on Parquet files", "Delta Lake automatically generates surrogate keys without explicit sequence management", "Delta Lake stores each version in a separate file eliminating the need for effective dates", "Delta Lake compresses historical versions more efficiently than standard Parquet encoding"],
      correct: [0],
      concept: "Delta Lake adds ACID transactions and MERGE/UPDATE/DELETE support on top of Parquet files. This is critical for SCD Type 2 in data lakes, where plain Parquet is immutable. Delta Lake handles the file rewrite complexity transparently while maintaining transactional consistency."
    },
    {
      id: 79,
      type: "single",
      difficulty: 3,
      question: "An SCD Type 2 dimension uses effective dates but no is_current flag. A query needs the current version. Which window function approach is MOST efficient?",
      options: ["ROW_NUMBER() OVER (PARTITION BY natural_key ORDER BY effective_start_date DESC) = 1", "RANK() OVER (ORDER BY effective_start_date ASC) = 1 without partitioning", "LEAD(effective_start_date) OVER (ORDER BY surrogate_key) IS NULL", "COUNT(*) OVER (PARTITION BY natural_key) = 1 to find single-version records"],
      correct: [0],
      concept: "ROW_NUMBER() partitioned by natural_key and ordered by effective_start_date DESC assigns 1 to the most recent version. Filtering for row_number = 1 gives the current version. This is the standard pattern when is_current flag is absent."
    },
    {
      id: 80,
      type: "single",
      difficulty: 3,
      question: "A team implements SCD Type 2 for a product dimension with 100,000 products. After 3 years, the table has 15 million rows. The ETL MERGE takes increasingly long. What is the root cause?",
      options: ["The MERGE must compare every incoming source row against all 15 million rows including expired versions", "The surrogate key integer sequence has overflowed causing insert failures", "The hash function produces too many collisions at 15 million rows", "The effective_end_date index becomes fragmented after 15 million updates"],
      correct: [0],
      concept: "MERGE performance degrades when the target table grows because the join condition compares source rows against the full target. Optimizing by filtering the target to only is_current = true rows in the MERGE source/target join condition significantly reduces the comparison set."
    },
    {
      id: 81,
      type: "single",
      difficulty: 3,
      question: "A slowly changing measure scenario: quarterly revenue figures are restated months later. What is the BEST approach to handle this in the fact table?",
      options: ["Use an accumulating snapshot fact with version columns that track original and restated values", "Overwrite the original revenue value with the restated value using a Type 1 approach", "Create a new fact row for each restatement with a version number and restatement date", "Store only the restated value and discard the original since it is no longer accurate"],
      correct: [2],
      concept: "For slowly changing measures, creating versioned fact rows (with a version number and restatement date) preserves both original and restated values. This enables analysis of both the original reporting and the corrected figures, supporting audit requirements."
    },
    {
      id: 82,
      type: "single",
      difficulty: 3,
      question: "A multi-source data warehouse receives customer data from CRM and billing systems. Both systems send changes at different times for the same customer. What SCD challenge does this create?",
      options: ["Conflicting updates may arrive out of order, requiring conflict resolution rules before applying SCD Type 2 versions", "The surrogate key sequences from each source will collide in the target dimension", "SCD Type 2 cannot be used when data comes from more than one source system", "Each source must have its own separate dimension table to avoid version conflicts"],
      correct: [0],
      concept: "Multi-source SCD requires conflict resolution: which source is authoritative for which attributes? Updates may arrive out of order (billing says city A, CRM says city B). The solution involves defining source priority rules, timestamps for conflict resolution, and attribute-level source ownership."
    },
    {
      id: 83,
      type: "single",
      difficulty: 3,
      question: "A data engineer needs to implement SCD Type 2 in a streaming pipeline processing real-time events. What is the key design challenge compared to batch SCD?",
      options: ["Events may arrive out of order, requiring watermarks or event-time processing to determine the correct version sequence", "Streaming pipelines cannot create new rows, so only Type 1 overwrites are possible", "The surrogate key generation is impossible in a streaming context without a database", "SCD Type 2 requires a full table scan which is not possible in streaming mode"],
      correct: [0],
      concept: "In streaming SCD, events can arrive out of order (e.g., an earlier change arrives after a later one). Event-time processing with watermarks ensures versions are sequenced correctly by business time, not arrival time. This is significantly more complex than batch processing."
    },
    {
      id: 84,
      type: "single",
      difficulty: 3,
      question: "In an SCD Type 2 dimension, a data engineer must retroactively insert a missed historical change that occurred between two existing versions. What is the correct procedure?",
      options: ["Split the affected version row by adjusting its dates and inserting the missed version row between existing versions", "Append the missed change as the newest version since SCD Type 2 is append-only", "Delete all versions after the missed change date and re-process from that point forward", "Mark the missed change in an exception table since SCD Type 2 cannot backfill history"],
      correct: [0],
      concept: "Retroactive insertion requires: (1) find the version active during the missed change period, (2) adjust its end_date to the missed change date, (3) insert the missed version with correct date range, and (4) ensure the subsequent version\'s start_date aligns. This maintains continuous, non-overlapping coverage."
    },
    {
      id: 85,
      type: "single",
      difficulty: 3,
      question: "What is the main advantage of using SCD Type 4 (separate history table) over Type 2 for a very large, frequently queried dimension?",
      options: ["The main dimension table stays small with only current data, optimizing query performance for current-state reports", "The history table is automatically compressed by the database engine saving significant storage", "The history table eliminates the need for surrogate keys since only natural keys are required", "The approach requires fewer ETL steps since the database handles history movement automatically"],
      correct: [0],
      concept: "SCD Type 4 keeps the main dimension lean (current data only), so most queries that need current state run fast. Historical analysis queries go to the history table. This is advantageous when most queries need current state and historical lookups are infrequent."
    },
    {
      id: 86,
      type: "tf",
      difficulty: 3,
      question: "SCD Type 1 is appropriate when the business needs to perform point-in-time historical analysis on an attribute.",
      options: ["False — SCD Type 1 overwrites old values, destroying history needed for point-in-time analysis", "True — SCD Type 1 preserves historical context by maintaining previous values in audit tables"],
      correct: [0],
      concept: "SCD Type 1 overwrites values in place, permanently losing previous values. Point-in-time analysis requires SCD Type 2, which preserves every version with effective date ranges. Type 1 is only suitable when history is irrelevant or for data corrections."
    },
    {
      id: 87,
      type: "tf",
      difficulty: 3,
      question: "In SCD Type 2, the natural key remains unique across all rows in the dimension table.",
      options: ["False — the natural key is duplicated across version rows; only the surrogate key is unique per row", "True — the natural key is always unique, and version tracking uses separate metadata columns"],
      correct: [0],
      concept: "In SCD Type 2, each change creates a new row with the SAME natural key. Therefore, the natural key is NOT unique — multiple rows share the same natural key. The surrogate key provides uniqueness. This is why surrogate keys are essential for Type 2."
    },
    {
      id: 88,
      type: "tf",
      difficulty: 3,
      question: "SCD Type 3 can fully preserve unlimited historical changes for a dimension attribute.",
      options: ["False — SCD Type 3 only preserves a fixed number of historical values, typically one previous value", "True — SCD Type 3 dynamically adds columns for each historical change, preserving unlimited history"],
      correct: [0],
      concept: "SCD Type 3 uses a fixed number of columns (e.g., current_value, previous_value). It can only store the most recent previous value. When the attribute changes again, the oldest stored value is lost. For unlimited history, SCD Type 2 is required."
    },
    {
      id: 89,
      type: "tf",
      difficulty: 3,
      question: "A mini-dimension is used to handle attributes that change very slowly over long periods of time.",
      options: ["False — mini-dimensions handle rapidly changing attributes to prevent Type 2 row explosion", "True — mini-dimensions store slowly changing attributes separately for better organization"],
      correct: [0],
      concept: "Mini-dimensions are specifically designed for RAPIDLY changing attributes (like age band, credit score range). By isolating these volatile attributes, the main dimension avoids excessive Type 2 row creation. Slowly changing attributes can remain in the main Type 2 dimension."
    },
    {
      id: 90,
      type: "tf",
      difficulty: 3,
      question: "In bitemporal modeling, correcting a previously recorded value requires deleting the old record and inserting a new one.",
      options: ["False — the old record is expired in transaction time but preserved; a new record is inserted with corrected valid time", "True — bitemporal modeling requires physical deletion of incorrect records to maintain data integrity"],
      correct: [0],
      concept: "Bitemporal modeling NEVER deletes records. Corrections are handled by expiring the old record in transaction time (setting transaction_end) and inserting a new record with the corrected valid time and current transaction time. Both the error and correction are preserved."
    },
    {
      id: 91,
      type: "tf",
      difficulty: 3,
      question: "When using hash-based delta detection for SCD processing, the hash function guarantees zero false negatives (no missed changes).",
      options: ["True — if any tracked column value changes, the hash will always produce a different output", "False — hash functions can produce collisions where different inputs generate the same hash value"],
      correct: [0],
      concept: "Cryptographic hash functions like MD5/SHA-256 are deterministic: different inputs virtually always produce different outputs. While theoretical collisions exist, they are astronomically unlikely in practice. A changed row will always produce a different hash, so false negatives are effectively impossible."
    },
    {
      id: 92,
      type: "tf",
      difficulty: 3,
      question: "SCD Type 6 is named Type 6 because it combines Types 1, 2, and 3, and 1+2+3 equals 6.",
      options: ["True — SCD Type 6 is a hybrid of Types 1, 2, and 3, and is named for the sum 1+2+3=6", "False — SCD Type 6 is the sixth chronologically defined SCD strategy, unrelated to arithmetic"],
      correct: [0],
      concept: "SCD Type 6 is indeed a mnemonic: it combines SCD Types 1 (overwrite current-value column), 2 (new version rows), and 3 (previous-value columns), and 1+2+3=6. This naming convention was popularized by Ralph Kimball\'s dimensional modeling methodology."
    },
    {
      id: 93,
      type: "tf",
      difficulty: 3,
      question: "An inferred member in a late-arriving dimension scenario should have its surrogate key changed when real attribute data finally arrives.",
      options: ["False — the surrogate key must remain the same so existing fact table references stay valid", "True — a new surrogate key is needed to differentiate the placeholder from the real dimension record"],
      correct: [0],
      concept: "The inferred member\'s surrogate key MUST be preserved when updating with real data. Fact records already reference this surrogate key. Changing it would break referential integrity. Only the attribute values (which were placeholders/defaults) are updated — this is a Type 1 update."
    },
    {
      id: 94,
      type: "tf",
      difficulty: 3,
      question: "CDC (Change Data Capture) eliminates the need for delta detection logic in SCD processing pipelines.",
      options: ["True — CDC provides exact change events from the source, removing the need for source-to-target comparison", "False — CDC only captures source events but the SCD pipeline must still compare against the current warehouse state"],
      correct: [0],
      concept: "CDC captures changes at the source level, providing explicit INSERT/UPDATE/DELETE events. This eliminates the need for the traditional delta detection step (comparing source snapshot to target). However, the SCD logic (versioning, expiring rows) still needs to be applied to the CDC events."
    },
    {
      id: 95,
      type: "tf",
      difficulty: 3,
      question: "In SCD Type 2, setting effective_end_date to NULL for current rows is always preferred over using a far-future sentinel date like 9999-12-31.",
      options: ["False — NULL requires special handling in date range queries; sentinel dates simplify BETWEEN clauses", "True — NULL is the standard and most efficient representation for an open-ended date range"],
      correct: [0],
      concept: "While NULL semantically represents \'no end date,\' it complicates queries because BETWEEN cannot handle NULL without COALESCE or IS NULL checks. A sentinel date (9999-12-31) allows simple WHERE event_date BETWEEN start_date AND end_date queries. Both approaches are valid; sentinel dates are often preferred."
    },
    {
      id: 96,
      type: "tf",
      difficulty: 3,
      question: "SQL Server temporal tables automatically implement SCD Type 2 with surrogate keys and is_current flags.",
      options: ["False — temporal tables use system-managed period columns for versioning but do not generate surrogate keys or current flags", "True — temporal tables are a complete SCD Type 2 implementation including surrogate key management"],
      correct: [0],
      concept: "SQL Server temporal tables provide automatic row versioning with system-time period columns, but they do NOT generate surrogate keys, is_current flags, or business-meaningful effective dates. They implement system-time versioning, which overlaps with but is not identical to SCD Type 2."
    },
    {
      id: 97,
      type: "tf",
      difficulty: 3,
      question: "A fact table should always join to the SCD Type 2 dimension using the surrogate key, never the natural key.",
      options: ["False — natural key joins are valid when current-state reporting is needed that reclassifies historical facts", "True — fact tables must exclusively use surrogate keys to maintain referential integrity with versioned dimensions"],
      correct: [0],
      concept: "While surrogate key joins are the standard for point-in-time analysis, natural key joins are valid for \'as-is\' current-state reporting (e.g., \'show all sales under the customer\'s current region\'). The choice depends on the analytical requirement — both have legitimate use cases."
    },
    {
      id: 98,
      type: "tf",
      difficulty: 3,
      question: "SCD Type 0 means the attribute value is loaded once during initial insert and never updated, even if the source value changes.",
      options: ["True — SCD Type 0 retains the original value permanently regardless of subsequent source changes", "False — SCD Type 0 means the attribute is excluded from the dimension entirely"],
      correct: [0],
      concept: "SCD Type 0 (retain original) preserves the initial value forever. Source changes are deliberately ignored for that attribute. Common examples include original_hire_date, date_of_birth, or initial_credit_score — values that represent a point-in-time snapshot at creation."
    },
    {
      id: 99,
      type: "tf",
      difficulty: 3,
      question: "When implementing SCD Type 2 using an append-only pattern in a data lake, expired rows must be physically updated to set the end date.",
      options: ["False — append-only patterns determine the current version at query time without modifying historical records", "True — end dates must be physically set on expired rows even in append-only storage systems"],
      correct: [0],
      concept: "In an append-only SCD Type 2 pattern (common in data lakes), no rows are ever modified. The current version is determined at query time using ROW_NUMBER() or MAX(effective_start_date). End dates are derived from the next version\'s start date using window functions like LEAD()."
    },
    {
      id: 100,
      type: "tf",
      difficulty: 3,
      question: "A dimension attribute can have different SCD types applied to different columns within the same dimension table.",
      options: ["True — different columns can use different SCD types based on business requirements for each attribute", "False — all columns in a dimension must follow the same SCD type for consistency"],
      correct: [0],
      concept: "Mixed SCD types within a single dimension are common and recommended. For example, customer_name might use Type 1 (corrections), address might use Type 2 (history tracking), and original_signup_date might use Type 0 (never change). This is called a hybrid SCD approach."
    }
  ]
};

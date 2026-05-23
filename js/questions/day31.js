window.QUIZ_DATA = window.QUIZ_DATA || {};
window.QUIZ_DATA["day31"] = {
  title: "Security & Governance",
  topics: ["RBAC", "Row-Level Security", "Column-Level Security", "Tags & Governance", "Network Policies"],
  questions: [
    {
      id: 1,
      type: "single",
      difficulty: 1,
      question: "Which system-defined role in Snowflake is the top-level role that has full control over the entire account, including billing and resource monitors?",
      options: ["SYSADMIN", "ACCOUNTADMIN", "SECURITYADMIN", "USERADMIN"],
      correct: [1],
      concept: "ACCOUNTADMIN is the most powerful role in a Snowflake account. It encapsulates both SYSADMIN and SECURITYADMIN and has full control over billing, resource monitors, and all account-level operations. Best practice is to limit its use and assign it to very few users."
    },
    {
      id: 2,
      type: "single",
      difficulty: 1,
      question: "Which system-defined role is specifically designed for managing users and roles in Snowflake?",
      options: ["SYSADMIN", "PUBLIC", "USERADMIN", "ACCOUNTADMIN"],
      correct: [2],
      concept: "USERADMIN is granted the CREATE USER and CREATE ROLE privileges and is intended for user and role management. It is a child of SECURITYADMIN in the default role hierarchy."
    },
    {
      id: 3,
      type: "single",
      difficulty: 1,
      question: "What is the default role that is automatically granted to every user in Snowflake?",
      options: ["USERADMIN", "SYSADMIN", "PUBLIC", "SECURITYADMIN"],
      correct: [2],
      concept: "The PUBLIC role is automatically granted to every user and every role in Snowflake. Any privileges granted to PUBLIC are available to all users. It is at the bottom of the default role hierarchy."
    },
    {
      id: 4,
      type: "single",
      difficulty: 1,
      question: "Which SQL command is used to assign a privilege on an object to a role in Snowflake?",
      options: ["ASSIGN PRIVILEGE", "GRANT", "SET PRIVILEGE", "ADD PERMISSION"],
      correct: [1],
      concept: "The GRANT statement is used to assign privileges on objects to roles. For example, GRANT SELECT ON TABLE my_table TO ROLE analyst_role; grants read access on my_table to the analyst_role."
    },
    {
      id: 5,
      type: "single",
      difficulty: 1,
      question: "In Snowflake\'s RBAC model, privileges are granted to which entity?",
      options: ["Users directly", "Roles", "Warehouses", "Databases"],
      correct: [1],
      concept: "In Snowflake\'s role-based access control model, privileges are always granted to roles, not directly to users. Users are then granted roles, and they inherit the privileges associated with those roles."
    },
    {
      id: 6,
      type: "single",
      difficulty: 1,
      question: "Which SQL command removes a previously granted privilege from a role?",
      options: ["DELETE PRIVILEGE", "DROP GRANT", "REVOKE", "REMOVE ACCESS"],
      correct: [2],
      concept: "The REVOKE statement is used to remove privileges from a role. For example, REVOKE SELECT ON TABLE my_table FROM ROLE analyst_role; removes the SELECT privilege on my_table from analyst_role."
    },
    {
      id: 7,
      type: "single",
      difficulty: 1,
      question: "What does a row access policy in Snowflake do?",
      options: ["Encrypts individual rows at rest for compliance", "Determines which rows a query returns based on the user or role executing the query", "Limits the number of rows that can be inserted into a table per transaction", "Restricts which columns are visible in a row depending on the schema"],
      correct: [1],
      concept: "A row access policy controls which rows are visible to a given user or role when querying a table or view. It acts as a filter applied transparently at query time, returning only the rows the policy allows."
    },
    {
      id: 8,
      type: "single",
      difficulty: 1,
      question: "What type of SQL object is a masking policy in Snowflake?",
      options: ["A table constraint", "A schema-level object", "A database-level parameter", "An account-level setting"],
      correct: [1],
      concept: "A masking policy is a schema-level object in Snowflake. It is created within a specific schema using CREATE MASKING POLICY and can then be applied to columns in tables or views within the same or different schemas."
    },
    {
      id: 9,
      type: "single",
      difficulty: 1,
      question: "Which Snowflake feature allows you to attach key-value metadata to objects like tables, columns, and warehouses?",
      options: ["COMMENT ON", "Object tags", "Object labels", "Extended properties"],
      correct: [1],
      concept: "Object tags (created with CREATE TAG) allow you to attach key-value metadata to Snowflake objects such as tables, columns, warehouses, databases, and schemas. Tags are useful for governance, data classification, cost attribution, and compliance."
    },
    {
      id: 10,
      type: "single",
      difficulty: 1,
      question: "What does a network policy in Snowflake control?",
      options: ["The virtual network between warehouses and storage", "Which IP addresses are allowed or blocked from accessing the Snowflake account", "The bandwidth allocated to a specific warehouse", "Encryption protocols for data in transit between client and server"],
      correct: [1],
      concept: "A network policy in Snowflake defines a list of allowed and/or blocked IP addresses that can connect to the Snowflake account. It acts as an IP allowlist/blocklist to restrict access at the network layer."
    },
    {
      id: 11,
      type: "single",
      difficulty: 1,
      question: "Which system-defined role is the recommended parent for all custom roles to ensure SYSADMIN can manage objects created by custom roles?",
      options: ["ACCOUNTADMIN", "SYSADMIN", "SECURITYADMIN", "PUBLIC"],
      correct: [1],
      concept: "Snowflake best practice is to grant all custom roles to SYSADMIN so that SYSADMIN can manage all objects in the account. If custom roles are not granted to SYSADMIN, ACCOUNTADMIN would have to intervene to manage those objects."
    },
    {
      id: 12,
      type: "single",
      difficulty: 1,
      question: "Which command is used to create a new custom role in Snowflake?",
      options: ["ADD ROLE custom_role", "CREATE ROLE custom_role", "INSERT ROLE custom_role", "DEFINE ROLE custom_role"],
      correct: [1],
      concept: "The CREATE ROLE statement is used to create a new custom role. For example: CREATE ROLE analyst_role; After creation, you can grant privileges and assign users to this role."
    },
    {
      id: 13,
      type: "single",
      difficulty: 1,
      question: "What is the correct syntax to grant a role to another role, creating a role hierarchy?",
      options: ["GRANT ROLE child_role TO ROLE parent_role", "GRANT parent_role TO ROLE child_role", "ADD ROLE child_role INTO parent_role", "SET HIERARCHY child_role UNDER parent_role"],
      correct: [0],
      concept: "To create a role hierarchy, you grant a child role to a parent role using: GRANT ROLE child_role TO ROLE parent_role; The parent role then inherits all privileges of the child role."
    },
    {
      id: 14,
      type: "single",
      difficulty: 1,
      question: "In the default Snowflake role hierarchy, which role is the direct parent of USERADMIN?",
      options: ["ACCOUNTADMIN", "SECURITYADMIN", "SYSADMIN", "PUBLIC"],
      correct: [1],
      concept: "In the default role hierarchy, USERADMIN is a child of SECURITYADMIN. SECURITYADMIN inherits all privileges of USERADMIN, and SECURITYADMIN itself is a child of ACCOUNTADMIN."
    },
    {
      id: 15,
      type: "single",
      difficulty: 1,
      question: "What is the return type of a row access policy in Snowflake?",
      options: ["VARCHAR", "BOOLEAN", "NUMBER", "VARIANT"],
      correct: [1],
      concept: "A row access policy must return a BOOLEAN value. If the policy returns TRUE for a given row, that row is included in the query results. If it returns FALSE, the row is filtered out."
    },
    {
      id: 16,
      type: "single",
      difficulty: 1,
      question: "Which SQL statement is used to attach a row access policy to a table?",
      options: ["SET ROW ACCESS POLICY ON TABLE", "ALTER TABLE ... ADD ROW ACCESS POLICY", "GRANT ROW ACCESS POLICY TO TABLE", "APPLY POLICY TO TABLE"],
      correct: [1],
      concept: "You use ALTER TABLE ... ADD ROW ACCESS POLICY policy_name ON (column_name) to attach a row access policy to a table. The column specified in the ON clause is the column evaluated by the policy."
    },
    {
      id: 17,
      type: "single",
      difficulty: 1,
      question: "What does dynamic data masking in Snowflake do?",
      options: ["Permanently encrypts column data using AES-256 encryption at rest", "Masks column values at query time based on the executing role without altering stored data", "Replaces sensitive data with tokenized values during the ETL process", "Deletes rows containing sensitive data after a defined retention period"],
      correct: [1],
      concept: "Dynamic data masking uses masking policies to mask or transform column values at query time, based on the role executing the query. The underlying stored data remains unchanged — masking is applied dynamically during query execution."
    },
    {
      id: 18,
      type: "single",
      difficulty: 1,
      question: "Which function is used in a masking policy to determine the current executing role?",
      options: ["CURRENT_USER()", "CURRENT_ROLE()", "SESSION_ROLE()", "EXECUTING_ROLE()"],
      correct: [1],
      concept: "CURRENT_ROLE() returns the name of the role currently in use in the session. It is commonly used in masking policies and row access policies to conditionally mask or filter data based on the executing role."
    },
    {
      id: 19,
      type: "single",
      difficulty: 1,
      question: "How do you create an object tag in Snowflake?",
      options: ["CREATE TAG tag_name", "CREATE LABEL tag_name", "CREATE METADATA tag_name", "ADD TAG tag_name"],
      correct: [0],
      concept: "Object tags are created using CREATE TAG tag_name; optionally with allowed_values. For example: CREATE TAG cost_center ALLOWED_VALUES \'finance\', \'engineering\'; Tags are schema-level objects."
    },
    {
      id: 20,
      type: "single",
      difficulty: 1,
      question: "Which Snowflake system function automatically classifies columns to detect sensitive data like emails and phone numbers?",
      options: ["SYSTEM$DETECT_SENSITIVE_DATA", "SYSTEM$CLASSIFY", "SYSTEM$TAG_COLUMNS", "SYSTEM$DATA_PROFILE"],
      correct: [1],
      concept: "SYSTEM$CLASSIFY is a built-in Snowflake function that analyzes table columns and automatically classifies them based on detected sensitive data categories like email, phone number, name, etc. It helps with governance and compliance."
    },
    {
      id: 21,
      type: "single",
      difficulty: 1,
      question: "Which view in Snowflake provides a historical record of queries that accessed specific columns and tables?",
      options: ["QUERY_HISTORY", "ACCESS_HISTORY", "LOGIN_HISTORY", "DATA_TRANSFER_HISTORY"],
      correct: [1],
      concept: "The ACCESS_HISTORY view (in the ACCOUNT_USAGE schema of the SNOWFLAKE database) tracks which columns and tables were accessed by queries, who accessed them, and when. It is critical for auditing and compliance."
    },
    {
      id: 22,
      type: "single",
      difficulty: 1,
      question: "When creating a network policy, which parameter defines the IP addresses that are explicitly allowed to connect?",
      options: ["ALLOWED_IP_LIST", "WHITELIST_IPS", "PERMITTED_IPS", "INCLUDE_IP_LIST"],
      correct: [0],
      concept: "The ALLOWED_IP_LIST parameter in a network policy specifies the IP addresses (or CIDR ranges) that are permitted to access the Snowflake account. Only IPs in this list can connect (unless overridden by BLOCKED_IP_LIST)."
    },
    {
      id: 23,
      type: "single",
      difficulty: 1,
      question: "A network policy in Snowflake can be attached at which levels?",
      options: ["Only at the account level", "Account level and individual user level", "Only at the database level", "Account level, database level, and schema level"],
      correct: [1],
      concept: "A network policy can be applied at the account level (affecting all users) or at the individual user level (overriding the account-level policy for that specific user). It cannot be applied at the database or schema level."
    },
    {
      id: 24,
      type: "single",
      difficulty: 1,
      question: "Which privilege is required to create a masking policy in Snowflake?",
      options: ["CREATE TABLE on the schema", "CREATE MASKING POLICY on the schema", "MANAGE GRANTS on the account", "OWNERSHIP on the database"],
      correct: [1],
      concept: "To create a masking policy, a role must have the CREATE MASKING POLICY privilege on the schema where the policy will reside. This is granted using GRANT CREATE MASKING POLICY ON SCHEMA schema_name TO ROLE role_name."
    },
    {
      id: 25,
      type: "single",
      difficulty: 1,
      question: "What happens when a user with no special privileges queries a column protected by a masking policy?",
      options: ["The query fails with an access denied error", "The column is entirely hidden from the result set", "The column values are masked according to the policy logic", "The query returns NULL for all rows in that column"],
      correct: [2],
      concept: "When a column has a masking policy, queries return masked values based on the policy logic. The policy typically checks the executing role and returns original data for authorized roles or masked data (e.g., \'****\', NULL, hash) for unauthorized roles."
    },
    {
      id: 26,
      type: "single",
      difficulty: 1,
      question: "Which of the following best describes privilege inheritance in Snowflake\'s role hierarchy?",
      options: ["Child roles inherit privileges from parent roles", "Parent roles inherit privileges from their child roles", "Privileges are shared equally among all roles in the hierarchy", "Only the ACCOUNTADMIN role can inherit privileges from other roles"],
      correct: [1],
      concept: "In Snowflake, privilege inheritance flows upward: parent roles inherit all privileges from their child roles. For example, if ROLE_A is granted to ROLE_B, then ROLE_B inherits all privileges of ROLE_A."
    },
    {
      id: 27,
      type: "single",
      difficulty: 1,
      question: "Which command transfers ownership of a table from one role to another?",
      options: ["ALTER TABLE my_table SET OWNER = new_role", "GRANT OWNERSHIP ON TABLE my_table TO ROLE new_role", "TRANSFER TABLE my_table TO ROLE new_role", "MOVE OWNERSHIP ON TABLE my_table TO ROLE new_role"],
      correct: [1],
      concept: "Ownership is transferred using the GRANT OWNERSHIP statement. For example: GRANT OWNERSHIP ON TABLE my_table TO ROLE new_role COPY CURRENT GRANTS; The COPY CURRENT GRANTS option preserves existing privileges."
    },
    {
      id: 28,
      type: "single",
      difficulty: 1,
      question: "What does the OWNERSHIP privilege on a Snowflake object allow?",
      options: ["Only SELECT access on the object", "Full control including the ability to grant privileges and drop the object", "Only the ability to modify data but not structure", "Read-only access with the ability to grant SELECT to others"],
      correct: [1],
      concept: "The OWNERSHIP privilege provides full control over an object, including the ability to alter, drop, and grant privileges on the object to other roles. Every securable object in Snowflake has exactly one owner role."
    },
    {
      id: 29,
      type: "single",
      difficulty: 1,
      question: "What is external tokenization in Snowflake?",
      options: ["A method of encrypting data using Snowflake\'s internal key management service", "Replacing sensitive data with tokens using an external tokenization service integrated via external functions", "A process where Snowflake automatically replaces PII with random strings", "A network security feature that uses external token servers for authentication"],
      correct: [1],
      concept: "External tokenization involves using an external tokenization service (via external functions) to replace sensitive column values with tokens. The original data is stored externally, and Snowflake only holds tokens, enhancing security for highly sensitive data."
    },
    {
      id: 30,
      type: "single",
      difficulty: 1,
      question: "Which context function can be used inside a row access policy to get the current user\'s name?",
      options: ["CURRENT_ROLE()", "CURRENT_USER()", "SESSION_USER()", "INVOKING_USER()"],
      correct: [1],
      concept: "CURRENT_USER() returns the login name of the user executing the query. It is commonly used in row access policies to filter rows based on the user identity, such as returning only rows where an owner column matches the current user."
    },
    {
      id: 31,
      type: "single",
      difficulty: 1,
      question: "Which system-defined role is responsible for managing grants and can grant privileges to other roles?",
      options: ["SYSADMIN", "USERADMIN", "SECURITYADMIN", "PUBLIC"],
      correct: [2],
      concept: "SECURITYADMIN has the MANAGE GRANTS global privilege, allowing it to grant or revoke privileges on any object in the account. It is the recommended role for managing access control policies."
    },
    {
      id: 32,
      type: "single",
      difficulty: 1,
      question: "Can a single table have both a row access policy and a masking policy applied at the same time?",
      options: ["No, only one security policy type is allowed per table", "Yes, a table can have both a row access policy and masking policies on its columns", "Yes, but only if both policies reference the same role condition", "No, masking policies can only be applied to views, not tables"],
      correct: [1],
      concept: "A table can have both a row access policy (filtering rows) and masking policies (masking column values) simultaneously. The row access policy filters first, then masking policies are applied to the columns of the returned rows."
    },
    {
      id: 33,
      type: "single",
      difficulty: 1,
      question: "What is the purpose of the ALLOWED_VALUES parameter when creating a tag?",
      options: ["It specifies default values for the tag if none is assigned", "It restricts the values that can be assigned to the tag to a predefined set", "It lists the roles that are allowed to use the tag", "It defines the data types that the tag can hold"],
      correct: [1],
      concept: "The ALLOWED_VALUES parameter on CREATE TAG constrains the tag to accept only specific string values. For example: CREATE TAG environment ALLOWED_VALUES \'prod\', \'dev\', \'staging\'; prevents assignment of unlisted values."
    },
    {
      id: 34,
      type: "single",
      difficulty: 1,
      question: "How do you assign a tag to a table in Snowflake?",
      options: ["ALTER TABLE my_table SET TAG cost_center = \'finance\'", "GRANT TAG cost_center TO TABLE my_table", "CREATE TAG ASSIGNMENT cost_center ON my_table", "UPDATE TAGS SET cost_center = \'finance\' ON my_table"],
      correct: [0],
      concept: "Tags are assigned to objects using ALTER statements. For example: ALTER TABLE my_table SET TAG cost_center = \'finance\'; You can also assign tags during object creation with the WITH TAG clause."
    },
    {
      id: 35,
      type: "single",
      difficulty: 1,
      question: "Which command creates a network policy in Snowflake?",
      options: ["ALTER ACCOUNT SET NETWORK_POLICY", "CREATE NETWORK POLICY", "ADD FIREWALL RULE", "CREATE NETWORK RULE"],
      correct: [1],
      concept: "Network policies are created using CREATE NETWORK POLICY policy_name ALLOWED_IP_LIST = (\'ip1\', \'ip2\') BLOCKED_IP_LIST = (\'ip3\'); They are account-level objects that control which IPs can access Snowflake."
    },
    {
      id: 36,
      type: "single",
      difficulty: 2,
      question: "A company wants to ensure that analysts can only see rows from their own department in a shared table. Which security feature should they implement?",
      options: ["Column-level masking policy with department check", "Row access policy filtering by department", "Secure view with WHERE clause per department", "Network policy restricted per department IP range"],
      correct: [1],
      concept: "A row access policy is the ideal solution for filtering rows based on user attributes like department. The policy can use a mapping table that links users/roles to departments and only return rows matching the user\'s department."
    },
    {
      id: 37,
      type: "single",
      difficulty: 2,
      question: "What happens if you create a custom role but do NOT grant it to SYSADMIN?",
      options: ["The custom role cannot create any objects", "Objects created by the custom role are invisible to SYSADMIN and ACCOUNTADMIN", "Objects created by the custom role are invisible to SYSADMIN but visible to ACCOUNTADMIN", "The custom role is automatically deleted after 30 days"],
      correct: [2],
      concept: "If a custom role is not granted to SYSADMIN, then SYSADMIN cannot see or manage objects created by that role. However, ACCOUNTADMIN can still see them since ACCOUNTADMIN is the top-level role. This is why best practice recommends granting all custom roles to SYSADMIN."
    },
    {
      id: 38,
      type: "single",
      difficulty: 2,
      question: "What is the correct syntax to create a masking policy that returns \'****\' for non-admin roles?",
      options: [
        "CREATE MASKING POLICY mask_ssn AS (val STRING) RETURNS STRING -> CASE WHEN CURRENT_ROLE() IN (\'ADMIN\') THEN val ELSE \'****\' END",
        "CREATE MASKING POLICY mask_ssn AS (val STRING) RETURNS STRING -> IF CURRENT_ROLE() = \'ADMIN\' RETURN val ELSE RETURN \'****\'",
        "CREATE MASKING POLICY mask_ssn ON COLUMN ssn RETURNS STRING -> CASE WHEN ROLE = \'ADMIN\' THEN val ELSE \'****\' END",
        "CREATE MASKING POLICY mask_ssn INPUT (val STRING) OUTPUT STRING -> CASE WHEN CURRENT_ROLE() IN (\'ADMIN\') THEN val ELSE \'****\' END"
      ],
      correct: [0],
      concept: "The correct syntax uses CREATE MASKING POLICY name AS (val datatype) RETURNS datatype -> expression. The expression uses a CASE statement with CURRENT_ROLE() to conditionally return the original value or a masked value."
    },
    {
      id: 39,
      type: "single",
      difficulty: 2,
      question: "How does a masking policy handle data type consistency between input and output?",
      options: ["The return type can be any data type regardless of the input", "The return type must match the data type of the column the policy is applied to", "The return type is always VARCHAR regardless of input type", "Snowflake automatically casts the return type to match the column"],
      correct: [1],
      concept: "A masking policy\'s return type must match the data type of the column it is applied to. If the column is NUMBER, the policy must return a NUMBER. This ensures type consistency and prevents runtime errors."
    },
    {
      id: 40,
      type: "single",
      difficulty: 2,
      question: "A row access policy references a mapping table to determine access. What happens if the mapping table is dropped?",
      options: ["The row access policy silently returns no rows for all users", "All queries on the protected table fail with an error", "The row access policy is automatically removed from the table", "The protected table becomes read-only until the mapping table is recreated"],
      correct: [1],
      concept: "If a mapping table referenced by a row access policy is dropped, queries on the protected table will fail because the policy cannot resolve its reference. The mapping table must be recreated or the policy must be updated."
    },
    {
      id: 41,
      type: "single",
      difficulty: 2,
      question: "Which statement correctly applies a network policy to a specific user?",
      options: ["ALTER ACCOUNT SET NETWORK_POLICY = \'my_policy\' FOR USER john", "ALTER USER john SET NETWORK_POLICY = \'my_policy\'", "GRANT NETWORK POLICY my_policy TO USER john", "CREATE NETWORK POLICY my_policy FOR USER john"],
      correct: [1],
      concept: "A network policy is applied to a specific user using ALTER USER username SET NETWORK_POLICY = \'policy_name\'; This overrides the account-level network policy for that specific user."
    },
    {
      id: 42,
      type: "single",
      difficulty: 2,
      question: "What is the behavior when both an account-level and a user-level network policy exist for a user?",
      options: ["Both policies are evaluated and the most restrictive one applies", "The account-level policy takes precedence over the user-level policy", "The user-level policy takes precedence over the account-level policy", "The connection is rejected because conflicting policies are not allowed"],
      correct: [2],
      concept: "When both an account-level and user-level network policy exist, the user-level policy takes precedence for that user. The account-level policy applies to all other users who don\'t have a user-level policy set."
    },
    {
      id: 43,
      type: "single",
      difficulty: 2,
      question: "What is the effect of setting BLOCKED_IP_LIST in a network policy when ALLOWED_IP_LIST is also specified?",
      options: ["BLOCKED_IP_LIST is ignored when ALLOWED_IP_LIST is present", "IPs in BLOCKED_IP_LIST are excluded from the ALLOWED_IP_LIST range", "Both lists are merged and only unique IPs are blocked", "An error is thrown because both lists cannot coexist"],
      correct: [1],
      concept: "When both ALLOWED_IP_LIST and BLOCKED_IP_LIST are specified, BLOCKED_IP_LIST acts as an exception to ALLOWED_IP_LIST. IPs in the blocked list are denied even if they fall within the allowed CIDR range. This is useful for excluding specific IPs from a broad range."
    },
    {
      id: 44,
      type: "single",
      difficulty: 2,
      question: "Which Snowflake function is used inside a row access policy to check if the executing role has been granted a specific database role?",
      options: ["IS_ROLE_IN_SESSION()", "IS_DATABASE_ROLE_IN_SESSION()", "HAS_ROLE()", "CURRENT_AVAILABLE_ROLES()"],
      correct: [1],
      concept: "IS_DATABASE_ROLE_IN_SESSION() checks if a specific database role is active in the current session\'s role hierarchy. It is useful in row access policies when access control is based on database-level roles rather than account-level roles."
    },
    {
      id: 45,
      type: "single",
      difficulty: 2,
      question: "What is tag-based masking in Snowflake?",
      options: ["Applying masking policies based on the data type of a column", "Associating a masking policy with a tag so that any column with that tag is automatically masked", "Tagging masked data so users know which columns are protected", "Using tags to define the masking algorithm (SHA, MD5, etc.)"],
      correct: [1],
      concept: "Tag-based masking allows you to associate a masking policy with a tag. When that tag is assigned to a column, the masking policy is automatically applied. This simplifies governance because you can mask many columns by simply tagging them."
    },
    {
      id: 46,
      type: "single",
      difficulty: 2,
      question: "What is the maximum number of row access policies that can be applied to a single table?",
      options: ["Unlimited", "One", "Five", "Ten"],
      correct: [1],
      concept: "Only one row access policy can be applied to a single table or view at a time. If you need complex filtering logic, the single policy must contain all the necessary conditions within its body."
    },
    {
      id: 47,
      type: "single",
      difficulty: 2,
      question: "A masking policy is applied to a column. A user with the OWNERSHIP privilege on the table queries the column. Will the data be masked?",
      options: ["No, OWNERSHIP always bypasses masking policies", "Yes, masking is based on the policy logic, not on object ownership", "No, only ACCOUNTADMIN can see masked data", "Yes, but only if the owner has not been explicitly exempted"],
      correct: [1],
      concept: "Masking policies are independent of object ownership. Even a role with OWNERSHIP on the table will see masked data unless the masking policy logic explicitly allows that role to see unmasked values. The policy\'s CASE logic determines access."
    },
    {
      id: 48,
      type: "single",
      difficulty: 2,
      question: "Which view provides information about tag assignments across all objects in the account?",
      options: ["INFORMATION_SCHEMA.TAG_REFERENCES", "SNOWFLAKE.ACCOUNT_USAGE.TAG_REFERENCES", "SNOWFLAKE.ACCOUNT_USAGE.TAGS", "INFORMATION_SCHEMA.OBJECT_TAGS"],
      correct: [1],
      concept: "The SNOWFLAKE.ACCOUNT_USAGE.TAG_REFERENCES view provides a comprehensive record of all tag assignments across all objects in the account. The INFORMATION_SCHEMA.TAG_REFERENCES table function is also available but is scoped to a specific database."
    },
    {
      id: 49,
      type: "single",
      difficulty: 2,
      question: "What is the GRANT ... ON FUTURE syntax used for in Snowflake?",
      options: ["Granting privileges on objects that will be created in a future time period", "Granting privileges automatically on objects that are created in the future in a schema or database", "Scheduling privilege grants to take effect at a future date and time", "Granting temporary privileges that expire after a predefined duration"],
      correct: [1],
      concept: "GRANT ... ON FUTURE is used to define default privileges for objects that will be created in the future within a specified database or schema. For example: GRANT SELECT ON FUTURE TABLES IN SCHEMA my_schema TO ROLE analyst; ensures every new table in my_schema automatically gets SELECT granted to analyst."
    },
    {
      id: 50,
      type: "single",
      difficulty: 2,
      question: "When using GRANT OWNERSHIP with the COPY CURRENT GRANTS option, what happens to existing privileges?",
      options: ["All existing privileges are revoked and must be re-granted", "Existing privileges are preserved and remain intact after ownership transfer", "Only SELECT and INSERT privileges are copied; all others are revoked", "Existing privileges are moved to the new owner role exclusively"],
      correct: [1],
      concept: "The COPY CURRENT GRANTS option on GRANT OWNERSHIP preserves all existing privilege grants on the object during the ownership transfer. Without this option, all existing grants (except the new ownership) are revoked."
    },
    {
      id: 51,
      type: "single",
      difficulty: 2,
      question: "Which privilege is needed to apply a masking policy to a column on a table you own?",
      options: ["APPLY MASKING POLICY on the account", "OWNERSHIP on the masking policy", "APPLY MASKING POLICY on the masking policy or the global APPLY MASKING POLICY privilege", "CREATE MASKING POLICY on the schema"],
      correct: [2],
      concept: "To apply a masking policy to a column, you need either the APPLY MASKING POLICY privilege on the specific masking policy or the global APPLY MASKING POLICY privilege. Having OWNERSHIP on the table alone is not sufficient."
    },
    {
      id: 52,
      type: "single",
      difficulty: 2,
      question: "How does IS_ROLE_IN_SESSION() differ from CURRENT_ROLE() when used in a security policy?",
      options: ["IS_ROLE_IN_SESSION() checks if a role is active anywhere in the current role hierarchy, while CURRENT_ROLE() returns only the primary active role", "IS_ROLE_IN_SESSION() returns the role name, while CURRENT_ROLE() returns a boolean", "They are identical in behavior and are interchangeable", "IS_ROLE_IN_SESSION() only works in masking policies, while CURRENT_ROLE() only works in row access policies"],
      correct: [0],
      concept: "IS_ROLE_IN_SESSION() checks whether a specified role is activated in the current session\'s role hierarchy (including inherited roles), returning a boolean. CURRENT_ROLE() only returns the single primary role currently in use. IS_ROLE_IN_SESSION() is more flexible for security policies."
    },
    {
      id: 53,
      type: "single",
      difficulty: 2,
      question: "What is the purpose of the ACCESS_HISTORY view in governance?",
      options: ["It tracks login and logout times for all users in the account", "It records which data was read or written by queries, including column-level lineage", "It logs all DDL changes made to database objects over time", "It monitors network access attempts and blocked IP addresses"],
      correct: [1],
      concept: "ACCESS_HISTORY in SNOWFLAKE.ACCOUNT_USAGE records detailed information about data access including which columns were read (directly or via views), which objects were modified, and column-level data lineage. It is essential for compliance and auditing."
    },
    {
      id: 54,
      type: "single",
      difficulty: 2,
      question: "A conditional masking policy shows full SSN to the HR role and last 4 digits to the MANAGER role. Which approach is correct?",
      options: [
        "Create two separate masking policies and apply both to the same column",
        "Use a single masking policy with nested CASE expressions checking CURRENT_ROLE() for both roles",
        "Create a row access policy that filters SSN visibility per role",
        "Use two views with different masking for each role"
      ],
      correct: [1],
      concept: "A single masking policy can handle multiple roles using nested CASE or WHEN expressions. For example: CASE WHEN CURRENT_ROLE() IN (\'HR\') THEN val WHEN CURRENT_ROLE() IN (\'MANAGER\') THEN \'XXX-XX-\' || RIGHT(val, 4) ELSE \'****\' END. Only one masking policy can be applied per column."
    },
    {
      id: 55,
      type: "single",
      difficulty: 2,
      question: "You need to see all privileges granted on a specific table. Which command do you use?",
      options: ["DESCRIBE TABLE my_table", "SHOW GRANTS ON TABLE my_table", "LIST PRIVILEGES ON TABLE my_table", "SELECT * FROM INFORMATION_SCHEMA.TABLE_PRIVILEGES WHERE table_name = \'MY_TABLE\'"],
      correct: [1],
      concept: "SHOW GRANTS ON TABLE my_table displays all privileges that have been granted on the specified table, including which role holds each privilege. This is the most direct way to audit object-level access."
    },
    {
      id: 56,
      type: "single",
      difficulty: 2,
      question: "Which command shows all privileges granted to a specific role?",
      options: ["SHOW GRANTS OF ROLE my_role", "SHOW GRANTS TO ROLE my_role", "DESCRIBE ROLE my_role", "LIST GRANTS FOR ROLE my_role"],
      correct: [1],
      concept: "SHOW GRANTS TO ROLE my_role shows all privileges that have been granted to that role. SHOW GRANTS OF ROLE my_role shows which users and roles the specified role has been granted to — a different query."
    },
    {
      id: 57,
      type: "single",
      difficulty: 2,
      question: "What is the recommended approach for ACCOUNTADMIN usage according to Snowflake best practices?",
      options: ["Use ACCOUNTADMIN as the default role for all administrative users", "Limit ACCOUNTADMIN to a few trusted users with MFA enabled and avoid using it for daily tasks", "Never assign ACCOUNTADMIN to any user and rely on SYSADMIN instead", "Assign ACCOUNTADMIN to all users but restrict it via network policies"],
      correct: [1],
      concept: "Snowflake recommends limiting ACCOUNTADMIN to a small number of trusted users, enabling MFA for those users, and avoiding its use for routine tasks. Daily operations should use less privileged roles like SYSADMIN or custom roles."
    },
    {
      id: 58,
      type: "single",
      difficulty: 2,
      question: "How can you remove a tag value from an object?",
      options: ["ALTER TABLE my_table DROP TAG cost_center", "ALTER TABLE my_table UNSET TAG cost_center", "DELETE TAG cost_center FROM TABLE my_table", "REVOKE TAG cost_center FROM TABLE my_table"],
      correct: [1],
      concept: "To remove a tag assignment from an object, use ALTER object_type object_name UNSET TAG tag_name; For example: ALTER TABLE my_table UNSET TAG cost_center; This removes the tag association but does not drop the tag itself."
    },
    {
      id: 59,
      type: "single",
      difficulty: 2,
      question: "What is the relationship between SECURITYADMIN and SYSADMIN in the default Snowflake role hierarchy?",
      options: ["SYSADMIN is a parent of SECURITYADMIN", "SECURITYADMIN is a parent of SYSADMIN", "They are sibling roles with no parent-child relationship, both reporting to ACCOUNTADMIN", "SECURITYADMIN is a child of SYSADMIN"],
      correct: [2],
      concept: "SECURITYADMIN and SYSADMIN are sibling roles in the default hierarchy — neither is the parent of the other. Both are direct children of ACCOUNTADMIN. SYSADMIN manages objects; SECURITYADMIN manages access control."
    },
    {
      id: 60,
      type: "single",
      difficulty: 2,
      question: "Which SQL clause in a row access policy definition specifies the columns that the policy evaluates?",
      options: ["ON (column_list)", "USING (column_list)", "FILTER BY (column_list)", "WHERE (column_list)"],
      correct: [0],
      concept: "When attaching a row access policy to a table using ALTER TABLE ... ADD ROW ACCESS POLICY, the ON (column_list) clause specifies which columns are passed to the policy function for evaluation. The policy body then uses these column values to determine row visibility."
    },
    {
      id: 61,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are system-defined roles in Snowflake? (Select all that apply)",
      options: ["ACCOUNTADMIN", "ORGADMIN", "DATAADMIN", "SECURITYADMIN"],
      correct: [0, 1, 3],
      concept: "ACCOUNTADMIN, ORGADMIN, SYSADMIN, SECURITYADMIN, USERADMIN, and PUBLIC are all system-defined roles in Snowflake. ORGADMIN manages organization-level operations. DATAADMIN is not a system-defined role — it would be a custom role."
    },
    {
      id: 62,
      type: "multi",
      difficulty: 2,
      question: "Which of the following context functions can be used inside a row access policy or masking policy? (Select all that apply)",
      options: ["CURRENT_ROLE()", "CURRENT_USER()", "CURRENT_WAREHOUSE()", "IS_ROLE_IN_SESSION()"],
      correct: [0, 1, 3],
      concept: "CURRENT_ROLE(), CURRENT_USER(), and IS_ROLE_IN_SESSION() are commonly used in security policies to determine the executing context. CURRENT_WAREHOUSE() is a valid Snowflake function but is not typically used in security policies for access decisions."
    },
    {
      id: 63,
      type: "multi",
      difficulty: 2,
      question: "Which of the following objects can have tags assigned to them in Snowflake? (Select all that apply)",
      options: ["Tables", "Columns", "Warehouses", "Stages"],
      correct: [0, 1, 2, 3],
      concept: "Snowflake tags can be assigned to a wide range of objects including tables, columns, views, warehouses, databases, schemas, stages, and more. Tags provide a flexible governance framework for metadata management across the entire account."
    },
    {
      id: 64,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are valid approaches for column-level security in Snowflake? (Select all that apply)",
      options: ["Dynamic data masking policies", "Secure views that exclude sensitive columns", "External tokenization via external functions", "Row access policies filtering by column values"],
      correct: [0, 1, 2],
      concept: "Column-level security can be achieved through dynamic data masking (masking policies), secure views (which can exclude or transform columns), and external tokenization. Row access policies filter rows, not columns, so they don\'t provide column-level security."
    },
    {
      id: 65,
      type: "multi",
      difficulty: 2,
      question: "Which statements about Snowflake network policies are correct? (Select all that apply)",
      options: ["Network policies support both IPv4 and CIDR notation", "A user-level network policy overrides the account-level policy", "Network policies can be applied to individual databases", "BLOCKED_IP_LIST can exclude IPs from the ALLOWED_IP_LIST range"],
      correct: [0, 1, 3],
      concept: "Network policies use IPv4 addresses and CIDR notation. User-level policies override account-level ones. BLOCKED_IP_LIST excludes specific IPs from the allowed range. Network policies cannot be applied at the database level — only account or user level."
    },
    {
      id: 66,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are valid ways to grant a role to a user in Snowflake? (Select all that apply)",
      options: ["GRANT ROLE analyst TO USER john", "ALTER USER john SET DEFAULT_ROLE = \'analyst\'", "GRANT ROLE analyst TO USER john WITH GRANT OPTION", "CREATE USER john DEFAULT_ROLE = \'analyst\'"],
      correct: [0, 2],
      concept: "GRANT ROLE role_name TO USER username; is the standard way to grant a role. WITH GRANT OPTION allows the user to grant that role to others. ALTER USER SET DEFAULT_ROLE only changes the default role (the user must already have the role). CREATE USER with DEFAULT_ROLE sets the default but doesn\'t grant the role."
    },
    {
      id: 67,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are true about the OWNERSHIP privilege? (Select all that apply)",
      options: ["Every object must have exactly one owner role", "Multiple roles can share OWNERSHIP of the same object", "OWNERSHIP includes the right to DROP the object", "OWNERSHIP includes the right to GRANT privileges on the object to other roles"],
      correct: [0, 2, 3],
      concept: "Every Snowflake object has exactly one owner role at any time. OWNERSHIP cannot be shared. The owner can perform any action on the object including ALTER, DROP, and GRANT privileges to other roles."
    },
    {
      id: 68,
      type: "multi",
      difficulty: 2,
      question: "Which attributes of a masking policy can be modified after creation using ALTER MASKING POLICY? (Select all that apply)",
      options: ["The masking policy body (expression)", "The masking policy name", "The input data type", "The comment on the masking policy"],
      correct: [0, 3],
      concept: "ALTER MASKING POLICY can modify the policy body (SET BODY) and the comment. The policy name can be changed using ALTER MASKING POLICY ... RENAME TO. The input/output data types cannot be changed after creation — you must recreate the policy."
    },
    {
      id: 69,
      type: "multi",
      difficulty: 2,
      question: "What information is captured in the ACCESS_HISTORY view? (Select all that apply)",
      options: ["Columns that were directly accessed by a query", "Columns accessed through views (base table columns)", "The query text that accessed the data", "The IP address from which the query was executed"],
      correct: [0, 1, 2],
      concept: "ACCESS_HISTORY captures direct column access, indirect column access through views (providing column-level lineage), and the query text. It does not directly include the IP address — that information is in LOGIN_HISTORY or SESSIONS."
    },
    {
      id: 70,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are benefits of using tag-based masking policies? (Select all that apply)",
      options: ["Reduces the need to apply masking policies individually to each column", "Tags can propagate masking policies across multiple tables automatically", "Allows different masking logic per tag value", "Eliminates the need for CREATE MASKING POLICY statements"],
      correct: [0, 1],
      concept: "Tag-based masking simplifies governance by associating a masking policy with a tag. Any column assigned that tag automatically gets the masking policy applied, reducing manual work. However, you still need to create the masking policy and the tag. Different masking logic per tag value requires separate tag-policy associations."
    },
    {
      id: 71,
      type: "multi",
      difficulty: 2,
      question: "Which of the following privileges can SECURITYADMIN grant? (Select all that apply)",
      options: ["SELECT on a table owned by SYSADMIN", "CREATE WAREHOUSE", "USAGE on a database", "MANAGE GRANTS"],
      correct: [0, 2],
      concept: "SECURITYADMIN has the MANAGE GRANTS privilege, which allows it to grant or revoke any privilege on any object, including SELECT on tables and USAGE on databases. However, SECURITYADMIN cannot grant MANAGE GRANTS itself (only ACCOUNTADMIN can). CREATE WAREHOUSE is a privilege that SYSADMIN holds."
    },
    {
      id: 72,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are required parameters when creating a row access policy? (Select all that apply)",
      options: ["Policy name", "Input column arguments with data types", "A RETURNS BOOLEAN clause", "A body expression that evaluates to BOOLEAN"],
      correct: [0, 1, 2, 3],
      concept: "A row access policy requires a name, input arguments (column references with data types), a RETURNS BOOLEAN clause, and a body expression that evaluates to TRUE or FALSE. All four elements are mandatory in the CREATE ROW ACCESS POLICY statement."
    },
    {
      id: 73,
      type: "multi",
      difficulty: 3,
      question: "A company needs to implement a governance framework. Which Snowflake features should they use together? (Select all that apply)",
      options: ["Object tags for data classification", "ACCESS_HISTORY for audit trails", "SYSTEM$CLASSIFY for automatic sensitive data detection", "Network policies for data classification"],
      correct: [0, 1, 2],
      concept: "A comprehensive governance framework uses tags for classification, ACCESS_HISTORY for auditing who accessed what data, and SYSTEM$CLASSIFY for automatic detection of sensitive data. Network policies control network access but are not used for data classification."
    },
    {
      id: 74,
      type: "multi",
      difficulty: 3,
      question: "Which of the following statements about row access policies are correct? (Select all that apply)",
      options: ["A table can have at most one row access policy", "Row access policies can reference other tables (mapping tables)", "Row access policies are applied before masking policies during query execution", "Row access policies can be applied to materialized views"],
      correct: [0, 1, 2],
      concept: "A table can have only one row access policy. Policies can reference mapping/lookup tables for flexible access rules. Row access policies filter rows first, then masking policies mask columns on the remaining rows. Row access policies cannot be applied to materialized views."
    },
    {
      id: 75,
      type: "multi",
      difficulty: 3,
      question: "Which of the following are true about GRANT OWNERSHIP? (Select all that apply)",
      options: ["REVOKE CURRENT GRANTS is the default behavior without COPY CURRENT GRANTS", "The original owner retains a co-ownership role after transfer", "The COPY CURRENT GRANTS option preserves all existing grants during transfer", "Only ACCOUNTADMIN or the current owner can transfer ownership"],
      correct: [0, 2],
      concept: "By default, GRANT OWNERSHIP revokes existing grants (REVOKE CURRENT GRANTS). COPY CURRENT GRANTS preserves them. The original owner loses all ownership privileges after transfer — there is no co-ownership. Both the current owner and roles with MANAGE GRANTS can transfer ownership."
    },
    {
      id: 76,
      type: "single",
      difficulty: 3,
      question: "A masking policy uses CURRENT_ROLE() to check access, but a user accessing via a secondary role that is active in the session hierarchy does not see unmasked data. What is the likely issue?",
      options: ["The masking policy was applied to the wrong column", "CURRENT_ROLE() only returns the primary active role, not inherited/secondary roles; the policy should use IS_ROLE_IN_SESSION()", "Secondary roles cannot access tables with masking policies", "The user needs APPLY MASKING POLICY privilege to see unmasked data"],
      correct: [1],
      concept: "CURRENT_ROLE() returns only the primary role in use, not secondary or inherited roles. If the user\'s access should be based on any role in their hierarchy, IS_ROLE_IN_SESSION() should be used instead, as it checks all active roles including inherited ones."
    },
    {
      id: 77,
      type: "single",
      difficulty: 3,
      question: "An analyst creates a view on a table with a row access policy. The analyst can see all rows through the view. What is the most likely reason?",
      options: ["Views bypass row access policies by default in Snowflake", "The row access policy was only applied to the base table, not the view, and the view owner\'s role satisfies the policy condition", "The analyst has ACCOUNTADMIN role which bypasses all policies", "The row access policy was created with EXEMPT_VIEWS = TRUE parameter"],
      correct: [1],
      concept: "Row access policies are enforced on the object they are attached to. If the base table has a row access policy, queries through a non-secure view use the view owner\'s rights, which may satisfy the policy. For proper enforcement through views, use secure views or apply the policy to the view as well."
    },
    {
      id: 78,
      type: "single",
      difficulty: 3,
      question: "You want to apply different masking policies to the same column based on different tag values. How should you configure this?",
      options: ["Create multiple masking policies and apply all of them to the same column", "Use tag-based masking with different tag-policy associations for different tag values", "Create a single masking policy with conditional logic based on SYSTEM$GET_TAG_ON_CURRENT_COLUMN()", "This is not possible; only one masking policy per tag-column combination is supported"],
      correct: [3],
      concept: "Only one masking policy can be applied to a column at a time, whether directly or through tag-based masking. If you need different masking behavior, you must implement the conditional logic within a single masking policy using CASE statements."
    },
    {
      id: 79,
      type: "single",
      difficulty: 3,
      question: "A network policy with ALLOWED_IP_LIST = (\'10.0.0.0/8\') and BLOCKED_IP_LIST = (\'10.0.1.5\') is applied to the account. What happens when a user connects from 10.0.1.5?",
      options: ["The connection is allowed because 10.0.1.5 falls within the 10.0.0.0/8 range", "The connection is blocked because BLOCKED_IP_LIST takes precedence within the allowed range", "The connection result depends on the user\'s role", "An error occurs because the IP cannot be in both lists simultaneously"],
      correct: [1],
      concept: "BLOCKED_IP_LIST acts as an exception to ALLOWED_IP_LIST. Even though 10.0.1.5 falls within the 10.0.0.0/8 CIDR range, it is explicitly blocked. The BLOCKED_IP_LIST always takes precedence for IPs that fall within the allowed range."
    },
    {
      id: 80,
      type: "single",
      difficulty: 3,
      question: "You need to ensure that even ACCOUNTADMIN cannot see SSN data in a table. Which approach achieves this?",
      options: ["Apply a masking policy that does not include ACCOUNTADMIN in the allowed roles", "This is impossible; ACCOUNTADMIN always bypasses masking policies", "Revoke SELECT on the table from ACCOUNTADMIN", "Set a parameter EXEMPT_ADMIN = FALSE on the masking policy"],
      correct: [0],
      concept: "Masking policies are enforced regardless of role, including ACCOUNTADMIN. If the masking policy logic does not include ACCOUNTADMIN in the CASE condition that reveals unmasked data, even ACCOUNTADMIN will see masked values. This is a key security feature."
    },
    {
      id: 81,
      type: "single",
      difficulty: 3,
      question: "A company uses external tokenization. When a user queries tokenized data, what happens?",
      options: ["Snowflake automatically detokenizes the data using internal functions", "The query calls an external function that sends tokens to an external service to retrieve original values", "Tokenized data cannot be queried — it must be exported first", "Snowflake decrypts the tokens using the account\'s encryption key"],
      correct: [1],
      concept: "External tokenization works with external functions. When querying tokenized data, a masking policy can call an external function that sends the token to an external tokenization service, which returns the original (or partially masked) value based on the user\'s authorization."
    },
    {
      id: 82,
      type: "single",
      difficulty: 3,
      question: "What happens when you try to DROP a masking policy that is currently attached to one or more columns?",
      options: ["The policy is dropped and columns revert to showing unmasked data", "The DROP fails with an error because the policy is in use", "The policy is dropped and all attached columns become inaccessible", "The policy is marked for deletion and removed during the next maintenance window"],
      correct: [1],
      concept: "You cannot drop a masking policy that is currently attached to any column. You must first detach the policy from all columns using ALTER TABLE ... UNSET MASKING POLICY before dropping it. This prevents accidental exposure of sensitive data."
    },
    {
      id: 83,
      type: "single",
      difficulty: 3,
      question: "Which data in the SNOWFLAKE.ACCOUNT_USAGE.ACCESS_HISTORY view has a retention period of 365 days?",
      options: ["Only read access records are retained for 365 days", "Both read and write access records are retained for 365 days", "Only DML operations are retained for 365 days", "Access history is retained indefinitely with no expiration"],
      correct: [1],
      concept: "The ACCESS_HISTORY view in ACCOUNT_USAGE retains data for 365 days, covering both read access (SELECT) and write access (INSERT, UPDATE, DELETE, COPY INTO, etc.). This provides a full year of audit trail for compliance purposes."
    },
    {
      id: 84,
      type: "single",
      difficulty: 3,
      question: "A row access policy on a table uses a mapping table to determine user-to-department access. How can you ensure the policy works correctly for users whose department changes frequently?",
      options: ["Recreate the row access policy each time a department change occurs", "Update the mapping table; the policy dynamically evaluates it at query time", "Detach and reattach the policy after each mapping table update", "Use ALTER ROW ACCESS POLICY to refresh the policy cache"],
      correct: [1],
      concept: "Row access policies that reference mapping tables evaluate those tables dynamically at query time. Simply updating the mapping table is sufficient — the policy will use the latest data on the next query. No policy modification or reattachment is needed."
    },
    {
      id: 85,
      type: "single",
      difficulty: 3,
      question: "You have a role hierarchy where ROLE_A is granted to ROLE_B, and ROLE_B is granted to ROLE_C. A row access policy allows only ROLE_A. If a user with active role ROLE_C queries the table, what happens?",
      options: ["The user sees all rows because ROLE_C inherits ROLE_A\'s access", "The user sees no rows if the policy checks CURRENT_ROLE() = \'ROLE_A\'", "The user sees all rows because role inheritance always applies in policies", "An error occurs because the policy cannot resolve the role hierarchy"],
      correct: [1],
      concept: "If the policy uses CURRENT_ROLE() = \'ROLE_A\', the user with active role ROLE_C will see no rows because CURRENT_ROLE() returns \'ROLE_C\', not \'ROLE_A\'. Even though ROLE_C inherits ROLE_A\'s privileges, CURRENT_ROLE() only returns the active role name. To check hierarchy, use IS_ROLE_IN_SESSION()."
    },
    {
      id: 86,
      type: "tf",
      difficulty: 3,
      question: "The PUBLIC role can be dropped from a Snowflake account if it is no longer needed.",
      options: ["True, the PUBLIC role can be dropped like any custom role using DROP ROLE PUBLIC", "False, PUBLIC is a system-defined role that cannot be dropped or altered in the role hierarchy"],
      correct: [1],
      concept: "The PUBLIC role is a system-defined role that cannot be dropped, renamed, or removed from the role hierarchy. It is permanently granted to every user and every role in the account. You can only manage which privileges are granted to PUBLIC."
    },
    {
      id: 87,
      type: "tf",
      difficulty: 3,
      question: "A masking policy can reference columns from other tables within its body expression.",
      options: ["True, masking policies can join with lookup tables to determine masking behavior dynamically", "False, masking policies can only reference the column they are applied to and context functions"],
      correct: [0],
      concept: "Masking policies can reference other tables (lookup/mapping tables) in their body expression using subqueries. For example, a masking policy can check a mapping table to see if the current user is authorized to see unmasked data for a specific column."
    },
    {
      id: 88,
      type: "tf",
      difficulty: 3,
      question: "In Snowflake, the SECURITYADMIN role can create databases and warehouses.",
      options: ["True, SECURITYADMIN has the same object creation privileges as SYSADMIN", "False, SECURITYADMIN manages access control and grants but cannot create databases or warehouses"],
      correct: [1],
      concept: "SECURITYADMIN is focused on access control — managing users, roles, and grants via the MANAGE GRANTS privilege. It does not have CREATE DATABASE or CREATE WAREHOUSE privileges. Those belong to SYSADMIN or ACCOUNTADMIN."
    },
    {
      id: 89,
      type: "tf",
      difficulty: 3,
      question: "A row access policy can be applied to both tables and views in Snowflake.",
      options: ["True, row access policies can be applied to both tables and views using ALTER TABLE/VIEW ... ADD ROW ACCESS POLICY", "False, row access policies can only be applied to base tables and not to views"],
      correct: [0],
      concept: "Row access policies can be applied to both tables and views (including secure views) using ALTER TABLE or ALTER VIEW ... ADD ROW ACCESS POLICY. This provides flexible row-level security across different object types."
    },
    {
      id: 90,
      type: "tf",
      difficulty: 3,
      question: "SYSTEM$CLASSIFY can automatically apply masking policies to columns it identifies as containing sensitive data.",
      options: ["True, SYSTEM$CLASSIFY both classifies and applies masking policies in a single operation", "False, SYSTEM$CLASSIFY only classifies columns and suggests tags; masking policies must be applied separately"],
      correct: [1],
      concept: "SYSTEM$CLASSIFY analyzes columns and recommends classification tags (like PII, EMAIL, PHONE_NUMBER), but it does not automatically apply masking policies. After classification, administrators must separately create and apply masking policies based on the classification results."
    },
    {
      id: 91,
      type: "tf",
      difficulty: 3,
      question: "Tags in Snowflake support tag lineage, meaning a tag assigned to a database automatically propagates to all schemas and tables within it.",
      options: ["True, tags propagate from parent objects to child objects through tag lineage", "False, tags must be individually assigned to each object and do not propagate from parent to child"],
      correct: [0],
      concept: "Snowflake supports tag lineage (inheritance). When a tag is set on a parent object like a database, it propagates to child objects like schemas and tables. However, a tag set directly on a child object overrides the inherited tag value."
    },
    {
      id: 92,
      type: "tf",
      difficulty: 3,
      question: "A network policy with only BLOCKED_IP_LIST specified (no ALLOWED_IP_LIST) will block only the listed IPs and allow all others.",
      options: ["True, when only BLOCKED_IP_LIST is specified, all IPs are allowed except the blocked ones", "False, a network policy must have an ALLOWED_IP_LIST; BLOCKED_IP_LIST alone has no effect"],
      correct: [0],
      concept: "When only BLOCKED_IP_LIST is specified without ALLOWED_IP_LIST, Snowflake allows all IP addresses except those explicitly listed in the blocked list. This is useful when you want to block specific known bad IPs while allowing everything else."
    },
    {
      id: 93,
      type: "tf",
      difficulty: 3,
      question: "Once a masking policy is applied to a column, the column\'s data type in query results changes to VARCHAR to accommodate masked values.",
      options: ["True, masked columns are automatically cast to VARCHAR to support mixed original and masked values", "False, the column retains its original data type because the masking policy return type must match the column data type"],
      correct: [1],
      concept: "Masking policies must return the same data type as the column they are applied to. A NUMBER column requires a NUMBER return type. This means masked values must also be of the same type (e.g., returning 0 or -1 for masked numbers, not a string like \'****\')."
    },
    {
      id: 94,
      type: "tf",
      difficulty: 3,
      question: "GRANT FUTURE privileges in a schema apply retroactively to objects that already exist in that schema.",
      options: ["True, GRANT FUTURE applies to both existing and future objects in the schema", "False, GRANT FUTURE only applies to objects created after the grant and does not affect existing objects"],
      correct: [1],
      concept: "GRANT ... ON FUTURE only applies to objects created after the grant statement is executed. Existing objects in the schema are not affected. To grant privileges on existing objects, use GRANT ... ON ALL TABLES IN SCHEMA or similar statements."
    },
    {
      id: 95,
      type: "tf",
      difficulty: 3,
      question: "A user can have multiple roles active simultaneously in a single Snowflake session using secondary roles.",
      options: ["True, Snowflake supports secondary roles allowing multiple roles to be active in a session via USE SECONDARY ROLES ALL", "False, only one role can be active in a Snowflake session at any time"],
      correct: [0],
      concept: "Snowflake supports secondary roles. By executing USE SECONDARY ROLES ALL, a user can activate all granted roles simultaneously in a session. This allows access to objects across multiple roles without switching the primary role."
    },
    {
      id: 96,
      type: "tf",
      difficulty: 3,
      question: "Dropping a tag automatically removes the tag assignment from all objects it was assigned to.",
      options: ["True, dropping a tag with DROP TAG removes the tag and all its assignments from every object", "False, you must manually unset the tag from all objects before dropping it"],
      correct: [0],
      concept: "When you DROP a tag, Snowflake automatically removes all tag assignments from all objects that had that tag. You do not need to manually unset the tag from each object first. However, any tag-based masking policies associated with the tag are also disassociated."
    },
    {
      id: 97,
      type: "tf",
      difficulty: 3,
      question: "The ACCOUNTADMIN role can always bypass masking policies and see unmasked data.",
      options: ["True, ACCOUNTADMIN has special privileges that exempt it from all masking policies", "False, masking policies are enforced based on their logic; ACCOUNTADMIN sees masked data unless the policy explicitly allows it"],
      correct: [1],
      concept: "Masking policies are enforced based on their body logic, not on the role\'s position in the hierarchy. If the policy does not include a condition that allows ACCOUNTADMIN to see unmasked data, even ACCOUNTADMIN will see masked values. This is by design for strong security."
    },
    {
      id: 98,
      type: "tf",
      difficulty: 3,
      question: "A Snowflake account can have multiple network policies active at the account level simultaneously.",
      options: ["True, multiple network policies can be stacked at the account level with the most restrictive taking precedence", "False, only one network policy can be active at the account level at any given time"],
      correct: [1],
      concept: "Only one network policy can be active at the account level at a time. To change the account-level policy, you must unset the current one and set a new one, or alter the existing policy. Multiple policies can exist but only one is active at the account level."
    },
    {
      id: 99,
      type: "tf",
      difficulty: 3,
      question: "The MANAGE GRANTS privilege allows a role to grant any privilege on any object in the Snowflake account to any other role.",
      options: ["True, MANAGE GRANTS provides the ability to grant or revoke any privilege on any object to any role", "False, MANAGE GRANTS only allows managing grants within the role\'s own hierarchy, not across all objects"],
      correct: [0],
      concept: "The MANAGE GRANTS global privilege (held by SECURITYADMIN by default) allows a role to grant or revoke any privilege on any object in the account to any role. It provides comprehensive access control management across the entire account."
    },
    {
      id: 100,
      type: "tf",
      difficulty: 3,
      question: "When a row access policy is attached to a table, it affects all operations including INSERT, UPDATE, DELETE, and SELECT.",
      options: ["True, row access policies filter rows for all DML operations including SELECT, INSERT, UPDATE, and DELETE", "False, row access policies only filter rows for SELECT queries and do not affect INSERT, UPDATE, or DELETE operations"],
      correct: [0],
      concept: "Row access policies filter rows for all operations that read data from the table, including SELECT, UPDATE (affecting which rows can be updated), DELETE (affecting which rows can be deleted), and MERGE. INSERT is not filtered since it adds new rows rather than reading existing ones."
    }
  ]
};

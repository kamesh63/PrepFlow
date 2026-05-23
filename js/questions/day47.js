window.QUIZ_DATA = window.QUIZ_DATA || {};
window.QUIZ_DATA["day47"] = {
  title: "IDMC Overview",
  topics: ["Cloud Concepts", "Services & Architecture", "IDMC Components", "Integration Overview", "Administration Basics"],
  questions: [
    {
      id: 1,
      type: "single",
      difficulty: 1,
      question: "What does IDMC stand for in the context of Informatica\'s cloud platform?",
      options: ["Intelligent Data Management Cloud", "Integrated Data Migration Console", "Informatica Data Modeling Center", "Intelligent Database Monitoring Cloud"],
      correct: [0],
      concept: "IDMC stands for Intelligent Data Management Cloud. It is Informatica\'s cloud-native, AI-powered platform that provides a comprehensive suite of data management services including data integration, quality, governance, and master data management."
    },
    {
      id: 2,
      type: "single",
      difficulty: 1,
      question: "Which deployment model does IDMC primarily use?",
      options: ["Multi-tenant SaaS model", "Single-tenant on-premises model", "Hybrid peer-to-peer model", "Dedicated private cloud only"],
      correct: [0],
      concept: "IDMC is a multi-tenant SaaS (Software as a Service) platform. Multiple customers share the same cloud infrastructure while their data remains logically isolated. This model provides cost efficiency, automatic updates, and scalability without requiring customers to manage infrastructure."
    },
    {
      id: 3,
      type: "single",
      difficulty: 1,
      question: "Which component of IDMC is responsible for running data integration tasks on-premises or in a private cloud?",
      options: ["Secure Agent", "Cloud Server", "Repository Manager", "Workflow Monitor"],
      correct: [0],
      concept: "The Secure Agent is a lightweight program installed on a local machine or private cloud that enables communication between IDMC and on-premises data sources. It executes data integration tasks locally while being managed from the cloud console."
    },
    {
      id: 4,
      type: "single",
      difficulty: 1,
      question: "What underlying architecture does IDMC use to deliver its services?",
      options: ["Microservices architecture", "Monolithic architecture", "Client-server architecture", "Mainframe architecture"],
      correct: [0],
      concept: "IDMC is built on a microservices architecture, meaning each service (Data Integration, Data Quality, etc.) is independently deployable and scalable. This allows Informatica to update individual services without affecting the entire platform."
    },
    {
      id: 5,
      type: "single",
      difficulty: 1,
      question: "Which of the following is NOT a standard service category offered by IDMC?",
      options: ["Data Visualization", "Data Integration", "Data Quality", "Data Governance"],
      correct: [0],
      concept: "IDMC service categories include Data Integration, Data Quality, Data Governance, Master Data Management, and API Management. Data Visualization is not a native IDMC service category — customers typically use third-party BI tools for visualization purposes."
    },
    {
      id: 6,
      type: "single",
      difficulty: 1,
      question: "What is the top-level logical container for managing users, assets, and services in IDMC?",
      options: ["Organization", "Workspace", "Domain", "Repository"],
      correct: [0],
      concept: "An Organization is the top-level container in IDMC. When a company subscribes to IDMC, they receive an organization that contains all their users, connections, assets, runtime environments, and sub-organizations. It is the root entity for access control and billing."
    },
    {
      id: 7,
      type: "single",
      difficulty: 1,
      question: "How does IDMC differ from traditional PowerCenter in terms of infrastructure management?",
      options: ["IDMC eliminates the need for customers to manage server infrastructure", "IDMC requires more infrastructure than PowerCenter", "IDMC uses the same domain-based architecture as PowerCenter", "IDMC requires a dedicated repository database like PowerCenter"],
      correct: [0],
      concept: "Unlike PowerCenter which requires customers to manage domains, nodes, repository databases, and integration services, IDMC is a fully managed SaaS platform. Infrastructure provisioning, patching, and upgrades are handled by Informatica, reducing operational overhead."
    },
    {
      id: 8,
      type: "single",
      difficulty: 1,
      question: "Which IDMC service is specifically designed for cleansing, standardizing, and validating data?",
      options: ["Data Quality", "Data Integration", "Data Governance", "Master Data Management"],
      correct: [0],
      concept: "Data Quality in IDMC provides capabilities for data cleansing, standardization, validation, and enrichment. It helps ensure data accuracy and consistency across an organization by profiling data and applying quality rules."
    },
    {
      id: 9,
      type: "single",
      difficulty: 1,
      question: "What is the purpose of sub-organizations in IDMC?",
      options: ["To partition resources and assets for different teams or business units", "To create backup copies of the parent organization", "To migrate assets from PowerCenter to IDMC", "To enable cross-region replication of metadata"],
      correct: [0],
      concept: "Sub-organizations allow enterprises to partition their IDMC environment for different teams, departments, or business units. Each sub-organization can have its own users, assets, and configurations while still being managed under the parent organization."
    },
    {
      id: 10,
      type: "single",
      difficulty: 1,
      question: "Which protocol does the Secure Agent use to communicate with the IDMC cloud?",
      options: ["Outbound HTTPS", "Inbound HTTP", "FTP over TLS", "SSH tunneling"],
      correct: [0],
      concept: "The Secure Agent communicates with IDMC using outbound HTTPS only. This means no inbound firewall ports need to be opened, making it security-friendly. The agent initiates all connections to the cloud, pulling instructions and pushing results."
    },
    {
      id: 11,
      type: "single",
      difficulty: 1,
      question: "What is the IDMC Administrator console primarily used for?",
      options: ["Managing users, connections, runtime environments, and monitoring jobs", "Designing data integration mappings and transformations", "Building machine learning models for data classification", "Creating dashboards for business intelligence reporting"],
      correct: [0],
      concept: "The IDMC Administrator console is the central management interface where administrators configure organizations, manage users and roles, set up connections and runtime environments, monitor job executions, and manage licenses and system settings."
    },
    {
      id: 12,
      type: "single",
      difficulty: 1,
      question: "Which IDMC service helps organizations catalog, discover, and manage data assets across the enterprise?",
      options: ["Data Governance", "Data Integration", "Data Quality", "API Management"],
      correct: [0],
      concept: "Data Governance (and its catalog component) in IDMC helps organizations discover, catalog, classify, and govern data assets. It provides a unified view of metadata across the enterprise, supports data lineage tracking, and enables policy-based governance."
    },
    {
      id: 13,
      type: "single",
      difficulty: 1,
      question: "What type of licensing model does IDMC typically use?",
      options: ["Subscription-based licensing with IPU consumption", "Perpetual one-time license purchase", "Per-user flat-rate licensing only", "Free open-source licensing"],
      correct: [0],
      concept: "IDMC uses a subscription-based licensing model often measured in IPUs (Informatica Processing Units). IPUs represent compute capacity consumed by jobs. This consumption-based model allows customers to pay based on actual usage across different IDMC services."
    },
    {
      id: 14,
      type: "single",
      difficulty: 1,
      question: "In IDMC, what is an asset type?",
      options: ["A reusable object such as a mapping, task, or connection definition", "A physical server hosting the Secure Agent software", "A billing record tracking cloud compute consumption", "A network security certificate for encrypted communication"],
      correct: [0],
      concept: "Asset types in IDMC refer to reusable objects that users create and manage. Common asset types include mappings, mapping tasks, connections, schedules, taskflows, and data quality rules. These assets are version-controlled and can be organized in projects and folders."
    },
    {
      id: 15,
      type: "single",
      difficulty: 1,
      question: "Which IDMC service enables organizations to create, manage, and publish APIs for data access?",
      options: ["API Management", "Data Integration", "Data Governance", "Master Data Management"],
      correct: [0],
      concept: "API Management in IDMC allows organizations to design, publish, secure, and monitor APIs that provide controlled access to data. It supports API lifecycle management and enables data-driven microservices through RESTful API endpoints."
    },
    {
      id: 16,
      type: "single",
      difficulty: 1,
      question: "What advantage does IDMC\'s cloud-native design provide for software updates?",
      options: ["Updates are applied automatically by Informatica without customer downtime planning", "Customers must manually download and install patches each quarter", "Updates require a complete reinstallation of the Secure Agent", "Software updates are only available through professional services engagements"],
      correct: [0],
      concept: "As a cloud-native SaaS platform, IDMC receives automatic updates from Informatica. New features, bug fixes, and security patches are rolled out continuously without requiring customers to plan downtime or manage update installations on the platform side."
    },
    {
      id: 17,
      type: "single",
      difficulty: 1,
      question: "What is the primary purpose of the IDMC Monitor?",
      options: ["To track the execution status and performance of running and completed jobs", "To design and test data transformation mappings", "To configure network firewall rules for Secure Agents", "To manage database schema definitions and table structures"],
      correct: [0],
      concept: "The IDMC Monitor provides real-time visibility into job executions. Administrators and operators can view job status (running, completed, failed), execution logs, performance metrics, and error details. It is essential for operational monitoring and troubleshooting."
    },
    {
      id: 18,
      type: "single",
      difficulty: 1,
      question: "Which of the following best describes the connector ecosystem in IDMC?",
      options: ["A library of pre-built adapters for connecting to hundreds of cloud and on-premises data sources", "A single universal connector that works with all data sources", "A set of custom APIs that must be coded for each data source", "A collection of open-source database drivers bundled with the Secure Agent"],
      correct: [0],
      concept: "IDMC provides an extensive connector ecosystem with pre-built adapters for hundreds of data sources including databases, SaaS applications, cloud storage, mainframes, and file systems. These connectors handle authentication, data type mapping, and API interactions."
    },
    {
      id: 19,
      type: "single",
      difficulty: 1,
      question: "In IDMC, what does role-based access control (RBAC) enable?",
      options: ["Assigning specific permissions to users based on their organizational role", "Encrypting data at rest using role-specific encryption keys", "Automatically scaling compute resources based on job priority", "Routing data to different targets based on user identity"],
      correct: [0],
      concept: "Role-based access control in IDMC allows administrators to define roles with specific privileges and assign them to users. This ensures that designers can create mappings, operators can run jobs, and administrators can manage the organization — each with appropriate permissions."
    },
    {
      id: 20,
      type: "single",
      difficulty: 1,
      question: "What is the relationship between a Secure Agent and a runtime environment in IDMC?",
      options: ["A runtime environment is a logical grouping of one or more Secure Agents", "A Secure Agent contains multiple runtime environments", "Runtime environments replace Secure Agents in serverless mode", "They are the same component with different names"],
      correct: [0],
      concept: "A runtime environment in IDMC is a logical grouping that can contain one or more Secure Agents. When you assign a task to a runtime environment, it runs on one of the agents in that group. This abstraction enables load balancing and high availability."
    },
    {
      id: 21,
      type: "single",
      difficulty: 1,
      question: "Which IDMC service provides capabilities to create and manage a single, trusted view of master data?",
      options: ["Master Data Management", "Data Integration", "Data Quality", "Data Governance"],
      correct: [0],
      concept: "Master Data Management (MDM) in IDMC provides capabilities to create, maintain, and govern a single, trusted golden record of critical business entities like customers, products, and suppliers. It includes match/merge logic and stewardship workflows."
    },
    {
      id: 22,
      type: "single",
      difficulty: 1,
      question: "How does IDMC handle data isolation in its multi-tenant architecture?",
      options: ["Through logical data isolation where each tenant\'s data is kept separate", "By running each tenant on a physically separate server cluster", "By using a dedicated database instance per tenant", "Multi-tenancy does not provide any data isolation"],
      correct: [0],
      concept: "IDMC uses logical data isolation in its multi-tenant architecture. While tenants share the same cloud infrastructure, each organization\'s data, metadata, and configurations are logically separated using tenant identifiers and access controls to ensure privacy and security."
    },
    {
      id: 23,
      type: "single",
      difficulty: 1,
      question: "What is the minimum requirement for a customer to start using IDMC services?",
      options: ["An active IDMC subscription and an IDMC organization provisioned by Informatica", "An on-premises PowerCenter installation for hybrid connectivity", "A dedicated virtual private cloud with Informatica-approved hardware", "A minimum of five Secure Agents installed across multiple data centers"],
      correct: [0],
      concept: "To start using IDMC, a customer needs an active subscription and a provisioned organization. Informatica sets up the cloud organization upon subscription. The customer can then log in, configure users, and install Secure Agents if needed for on-premises connectivity."
    },
    {
      id: 24,
      type: "single",
      difficulty: 1,
      question: "Which concept in IDMC allows grouping multiple Secure Agents to provide high availability?",
      options: ["Agent groups", "Agent clusters", "Agent domains", "Agent federations"],
      correct: [0],
      concept: "Agent groups in IDMC allow multiple Secure Agents to be grouped together within a runtime environment. If one agent fails, another agent in the group can take over job execution, providing high availability and failover capability."
    },
    {
      id: 25,
      type: "single",
      difficulty: 1,
      question: "What is the primary interface for creating and managing data integration mappings in IDMC?",
      options: ["Mapping Designer", "PowerCenter Designer", "Administrator console", "Data Quality Analyst"],
      correct: [0],
      concept: "The Mapping Designer is the web-based interface in IDMC where developers create, configure, and test data integration mappings. It provides a visual canvas for defining source-to-target data flows with transformations."
    },
    {
      id: 26,
      type: "single",
      difficulty: 1,
      question: "In the context of IDMC licensing, what are IPUs?",
      options: ["Informatica Processing Units — a measure of compute consumption", "Integrated Platform Upgrades — scheduled maintenance windows", "Internal Process Utilities — system diagnostic tools", "Informatica Partner Users — licensed partner accounts"],
      correct: [0],
      concept: "IPUs (Informatica Processing Units) are the consumption-based licensing metric in IDMC. They measure the compute resources consumed when running tasks. Different services consume IPUs at different rates, allowing organizations to allocate compute across services flexibly."
    },
    {
      id: 27,
      type: "single",
      difficulty: 1,
      question: "Which IDMC feature allows administrators to define what actions specific users can perform?",
      options: ["Privileges and roles", "Connection parameters", "Runtime environments", "Asset tagging"],
      correct: [0],
      concept: "Privileges and roles in IDMC control what actions users can perform. Privileges are granular permissions (e.g., create mapping, run task), and roles are collections of privileges. Administrators assign roles to users to enforce least-privilege access."
    },
    {
      id: 28,
      type: "single",
      difficulty: 1,
      question: "What does the term \"cloud-native\" mean in the context of IDMC?",
      options: ["The platform was designed and built specifically for cloud deployment from the ground up", "The platform was migrated from on-premises to cloud with minimal changes", "The platform runs exclusively on a single cloud provider", "The platform only supports cloud-based data sources"],
      correct: [0],
      concept: "Cloud-native means IDMC was designed from the ground up to leverage cloud capabilities like elasticity, microservices, containerization, and multi-tenancy. It was not a lift-and-shift of an on-premises product but built specifically for cloud delivery."
    },
    {
      id: 29,
      type: "single",
      difficulty: 1,
      question: "How are connections managed in IDMC?",
      options: ["Connections are defined centrally and can be reused across multiple mappings and tasks", "Each mapping must define its own connection inline without reuse", "Connections are stored on the Secure Agent and cannot be modified from the cloud", "Connections are automatically created when a mapping is deployed"],
      correct: [0],
      concept: "IDMC provides centralized connection management. Connections are defined once with parameters (hostname, credentials, etc.) and stored securely. They can be referenced by multiple mappings and tasks, promoting reusability and simplifying credential management."
    },
    {
      id: 30,
      type: "single",
      difficulty: 1,
      question: "What is the benefit of IDMC\'s elastic scalability for data processing?",
      options: ["Resources automatically scale up or down based on workload demands", "A fixed amount of resources is permanently allocated to each organization", "Scaling requires manual provisioning of additional Secure Agents", "Scalability is limited to the capacity of the installed Secure Agent"],
      correct: [0],
      concept: "IDMC\'s cloud-native architecture provides elastic scalability. For serverless runtime and certain services, compute resources automatically scale based on workload demands. This ensures efficient processing during peak loads without over-provisioning during idle periods."
    },
    {
      id: 31,
      type: "single",
      difficulty: 1,
      question: "Which component in IDMC stores metadata such as mapping definitions, task configurations, and schedules?",
      options: ["Cloud-hosted metadata repository", "Local Secure Agent database", "On-premises repository server", "External RDBMS configured by the customer"],
      correct: [0],
      concept: "IDMC stores all metadata — including mapping definitions, task configurations, schedules, and connection information — in a cloud-hosted metadata repository managed by Informatica. This eliminates the need for customers to maintain a separate repository database."
    },
    {
      id: 32,
      type: "single",
      difficulty: 1,
      question: "What is the main difference between IDMC\'s SaaS model and PowerCenter\'s deployment model?",
      options: ["IDMC is managed by Informatica in the cloud while PowerCenter is managed by the customer on-premises", "PowerCenter supports more data sources than IDMC", "IDMC requires more hardware than PowerCenter", "PowerCenter uses microservices while IDMC uses monolithic architecture"],
      correct: [0],
      concept: "The fundamental difference is the deployment and management model. IDMC is a SaaS platform managed by Informatica in the cloud, while PowerCenter is deployed and managed by the customer on their own infrastructure. This shifts infrastructure responsibility to Informatica."
    },
    {
      id: 33,
      type: "single",
      difficulty: 1,
      question: "In IDMC, where can a user view the audit trail of administrative actions performed in the organization?",
      options: ["Audit logs in the Administrator console", "Secure Agent log files on the local machine", "IDMC Monitor\'s job execution history", "The Mapping Designer\'s version history"],
      correct: [0],
      concept: "Audit logs in the IDMC Administrator console track administrative actions such as user creation, role changes, connection modifications, and login events. These logs provide accountability and are essential for compliance and security monitoring."
    },
    {
      id: 34,
      type: "single",
      difficulty: 1,
      question: "Which runtime option in IDMC allows executing tasks without installing any local Secure Agent?",
      options: ["Serverless runtime environment", "Hosted agent runtime", "Cloud-managed Secure Agent", "Remote desktop integration service"],
      correct: [0],
      concept: "The serverless runtime environment in IDMC allows tasks to execute entirely in the cloud without requiring a locally installed Secure Agent. It is ideal for cloud-to-cloud integrations where no on-premises data access is needed."
    },
    {
      id: 35,
      type: "single",
      difficulty: 1,
      question: "What is the primary purpose of user management in the IDMC Administrator console?",
      options: ["Creating user accounts, assigning roles, and controlling access to IDMC services", "Monitoring CPU and memory usage of the Secure Agent host machine", "Configuring network routing between cloud and on-premises environments", "Scheduling automated backups of the IDMC metadata repository"],
      correct: [0],
      concept: "User management in IDMC Administrator allows creating and managing user accounts, assigning roles and privileges, configuring authentication methods, and organizing users into groups. It is the foundation for controlling who can access what in the IDMC environment."
    },
    {
      id: 36,
      type: "single",
      difficulty: 2,
      question: "A company has both cloud-based Salesforce data and on-premises Oracle databases. Which IDMC component enables accessing the on-premises Oracle data?",
      options: ["A Secure Agent installed in the on-premises network", "A serverless runtime environment configured for Oracle", "A cloud-hosted gateway proxy service", "A VPN-only connection without any agent"],
      correct: [0],
      concept: "To access on-premises data sources like Oracle databases, a Secure Agent must be installed within the on-premises network. The agent can reach the Oracle database locally and securely communicates with IDMC over outbound HTTPS to execute integration tasks."
    },
    {
      id: 37,
      type: "single",
      difficulty: 2,
      question: "Which statement correctly describes IDMC\'s approach to software versioning and releases?",
      options: ["IDMC uses continuous delivery with frequent incremental updates", "IDMC releases major versions annually requiring full re-deployment", "Customers must request specific version upgrades through support tickets", "IDMC version upgrades require Secure Agent reinstallation each time"],
      correct: [0],
      concept: "IDMC follows a continuous delivery model where new features and fixes are deployed frequently and incrementally. This cloud-native approach means customers automatically receive the latest capabilities without managing upgrade cycles."
    },
    {
      id: 38,
      type: "single",
      difficulty: 2,
      question: "An organization wants to separate development and production IDMC environments. What is the recommended approach?",
      options: ["Use sub-organizations to isolate dev and prod assets and users", "Install separate Secure Agents for dev and prod on the same machine", "Create duplicate connections with different names for each environment", "Use a single organization with folder-based separation only"],
      correct: [0],
      concept: "Sub-organizations provide proper environment isolation in IDMC. Each sub-organization can have its own users, roles, connections, and runtime environments, making them ideal for separating development, testing, and production environments."
    },
    {
      id: 39,
      type: "single",
      difficulty: 2,
      question: "What happens to running jobs when a Secure Agent in a multi-agent group goes offline?",
      options: ["New jobs are routed to other available agents in the group", "All jobs in the group are immediately terminated", "The IDMC platform goes into maintenance mode", "Jobs queue indefinitely until the failed agent recovers"],
      correct: [0],
      concept: "In a multi-agent group, if one Secure Agent goes offline, IDMC routes new job requests to other available agents in the group. This failover mechanism ensures continuity of data integration operations. However, jobs already running on the failed agent may need to be restarted."
    },
    {
      id: 40,
      type: "single",
      difficulty: 2,
      question: "Which IDMC feature would you use to schedule a mapping task to run every night at midnight?",
      options: ["Schedule configuration in the mapping task settings", "A cron job configured on the Secure Agent host machine", "An external workflow orchestration tool only", "Manual execution triggered by an operator each night"],
      correct: [0],
      concept: "IDMC provides built-in scheduling capabilities within mapping task settings. Users can define recurring schedules (daily, weekly, etc.) with specific start times. This native scheduling eliminates the need for external schedulers for basic scheduling requirements."
    },
    {
      id: 41,
      type: "single",
      difficulty: 2,
      question: "How does IDMC ensure the security of credentials stored in connections?",
      options: ["Credentials are encrypted and stored securely in the cloud vault", "Credentials are stored in plain text but protected by network firewalls", "Credentials are only stored on the local Secure Agent filesystem", "Credentials must be manually entered each time a task runs"],
      correct: [0],
      concept: "IDMC encrypts connection credentials and stores them securely in a cloud vault. The encryption ensures that even if metadata is accessed, credentials remain protected. The Secure Agent decrypts credentials at runtime only when needed for task execution."
    },
    {
      id: 42,
      type: "single",
      difficulty: 2,
      question: "A company needs to process data entirely within AWS without any on-premises component. Which runtime is most appropriate?",
      options: ["Serverless runtime environment", "On-premises Secure Agent runtime", "Hybrid agent group runtime", "PowerCenter-compatible runtime"],
      correct: [0],
      concept: "The serverless runtime environment is ideal for cloud-to-cloud processing. It runs entirely in the cloud without requiring any on-premises Secure Agent installation. For AWS-native processing, this eliminates the need to provision and manage agent infrastructure."
    },
    {
      id: 43,
      type: "single",
      difficulty: 2,
      question: "In IDMC, what is the purpose of the connector ecosystem when integrating with a new SaaS application?",
      options: ["Pre-built connectors provide ready-to-use adapters that handle authentication and API calls", "Connectors generate SQL scripts that must be manually executed on the target", "The connector ecosystem only supports on-premises databases", "Connectors are third-party plugins not managed by Informatica"],
      correct: [0],
      concept: "IDMC\'s connector ecosystem provides pre-built, Informatica-managed adapters for SaaS applications. These connectors handle API authentication, pagination, rate limiting, and data type mapping, allowing users to integrate with new applications without writing custom code."
    },
    {
      id: 44,
      type: "single",
      difficulty: 2,
      question: "What is the impact of IDMC\'s microservices architecture on service availability?",
      options: ["Individual services can be updated or restarted without affecting other services", "All services must be restarted together during any maintenance window", "Service failures cascade and bring down the entire platform", "Microservices require manual intervention to recover from failures"],
      correct: [0],
      concept: "IDMC\'s microservices architecture enables independent service lifecycle management. If the Data Quality service needs an update, it can be updated without affecting Data Integration or Data Governance. This isolation improves overall platform availability."
    },
    {
      id: 45,
      type: "single",
      difficulty: 2,
      question: "How does IDMC\'s licensing model differ from traditional PowerCenter licensing?",
      options: ["IDMC uses consumption-based IPU licensing while PowerCenter uses processor-based licensing", "Both use identical licensing models based on CPU cores", "IDMC licensing is free while PowerCenter requires payment", "PowerCenter uses IPUs while IDMC uses processor-based licensing"],
      correct: [0],
      concept: "IDMC uses IPU (Informatica Processing Unit) based consumption licensing where customers pay based on compute usage across services. PowerCenter traditionally uses processor-based licensing tied to the number of CPU cores on the server. The IPU model provides more flexibility."
    },
    {
      id: 46,
      type: "single",
      difficulty: 2,
      question: "An administrator needs to grant a user the ability to create mappings but not execute tasks. How is this achieved?",
      options: ["Assign a custom role that includes design privileges but excludes execution privileges", "Create a separate IDMC organization for the user", "Install a dedicated Secure Agent for the user", "Configure the connection to be read-only for that user"],
      correct: [0],
      concept: "IDMC\'s role-based access control allows creating custom roles with specific privilege combinations. An administrator can create a role that grants mapping design privileges while withholding task execution privileges, enforcing separation of duties."
    },
    {
      id: 47,
      type: "single",
      difficulty: 2,
      question: "Which IDMC capability helps trace data from its source through transformations to its target destination?",
      options: ["Data lineage tracking in Data Governance", "Job execution logs in the Monitor", "Connection test results in Administrator", "Mapping validation reports in Mapping Designer"],
      correct: [0],
      concept: "Data lineage tracking in IDMC\'s Data Governance service provides end-to-end visibility of how data flows from sources through transformations to targets. It helps answer questions like \"where did this data come from?\" and \"what downstream systems are affected?\""
    },
    {
      id: 48,
      type: "single",
      difficulty: 2,
      question: "What is the recommended method for migrating existing PowerCenter mappings to IDMC?",
      options: ["Use the PowerCenter-to-IDMC migration tool or converter utility", "Manually recreate each mapping in the IDMC Mapping Designer", "Export PowerCenter XML and directly import into IDMC", "PowerCenter mappings cannot be used in IDMC in any form"],
      correct: [0],
      concept: "Informatica provides migration tools and converter utilities to help move PowerCenter assets to IDMC. These tools can convert PowerCenter mappings, workflows, and other objects to their IDMC equivalents, reducing the effort of manual recreation."
    },
    {
      id: 49,
      type: "single",
      difficulty: 2,
      question: "Which IDMC component is responsible for managing API endpoints and throttling API requests?",
      options: ["API Management service", "Secure Agent gateway module", "IDMC Monitor throttle settings", "Data Integration task scheduler"],
      correct: [0],
      concept: "The API Management service in IDMC handles API lifecycle management including creating endpoints, managing versions, applying rate limiting/throttling, authentication, and monitoring API usage. It provides a governed approach to exposing data as APIs."
    },
    {
      id: 50,
      type: "single",
      difficulty: 2,
      question: "How does IDMC handle automatic failover for its cloud services?",
      options: ["Cloud services are deployed across multiple availability zones with automatic failover", "Customers must configure their own failover mechanisms", "Failover is only available for the Secure Agent component", "IDMC does not support automatic failover for cloud services"],
      correct: [0],
      concept: "IDMC\'s cloud services are deployed across multiple availability zones within cloud regions. If one zone experiences issues, services automatically fail over to another zone. This architecture ensures high availability without customer intervention."
    },
    {
      id: 51,
      type: "single",
      difficulty: 2,
      question: "What type of authentication can IDMC use for enterprise single sign-on integration?",
      options: ["SAML-based single sign-on", "Kerberos ticket-based authentication only", "LDAP bind authentication only", "Certificate-based mutual TLS only"],
      correct: [0],
      concept: "IDMC supports SAML (Security Assertion Markup Language) based single sign-on (SSO) integration. This allows enterprises to use their existing identity providers (like Okta, Azure AD, or ADFS) to authenticate users accessing IDMC without separate credentials."
    },
    {
      id: 52,
      type: "single",
      difficulty: 2,
      question: "An IDMC user sees \"IPU limit exceeded\" warnings. What does this indicate?",
      options: ["The organization has consumed its allocated Informatica Processing Units", "The Secure Agent has exceeded its CPU processing capacity", "The mapping has too many transformations to execute", "The connection pool has reached its maximum concurrent connections"],
      correct: [0],
      concept: "An \"IPU limit exceeded\" warning indicates that the organization has consumed its allocated IPU quota for the billing period. IPUs measure compute consumption across IDMC services. Organizations may need to optimize their workloads or purchase additional IPU capacity."
    },
    {
      id: 53,
      type: "single",
      difficulty: 2,
      question: "What is the function of projects and folders in IDMC asset organization?",
      options: ["They provide a hierarchical structure for organizing and managing assets", "They define security boundaries that override role-based access", "They represent physical storage locations on the Secure Agent", "They control which runtime environment executes each task"],
      correct: [0],
      concept: "Projects and folders in IDMC provide a hierarchical organizational structure for assets. Users can group related mappings, tasks, and connections into projects and subfolders, making it easier to manage, find, and maintain assets in large environments."
    },
    {
      id: 54,
      type: "single",
      difficulty: 2,
      question: "Which IDMC feature enables chaining multiple tasks together in a defined sequence with conditional logic?",
      options: ["Taskflows", "Mapping chains", "Workflow templates", "Job sequences"],
      correct: [0],
      concept: "Taskflows in IDMC allow users to orchestrate multiple tasks in a defined sequence with conditional branching, parallel execution, and error handling. They replace the workflow concept from PowerCenter and provide visual orchestration of complex data pipelines."
    },
    {
      id: 55,
      type: "single",
      difficulty: 2,
      question: "How does IDMC support data integration across multiple cloud providers like AWS, Azure, and GCP?",
      options: ["Through native connectors for each cloud platform\'s services and storage", "By requiring a separate IDMC subscription for each cloud provider", "By only supporting one cloud provider per organization", "Through a custom gateway that must be deployed in each cloud"],
      correct: [0],
      concept: "IDMC provides native connectors for services across multiple cloud providers — including AWS S3, Azure Blob Storage, Google BigQuery, and many more. This multi-cloud support allows organizations to integrate data across different cloud platforms seamlessly."
    },
    {
      id: 56,
      type: "single",
      difficulty: 2,
      question: "What is the significance of the IDMC POD (Point of Deployment) for an organization?",
      options: ["It determines the geographic region where the organization\'s cloud metadata and services are hosted", "It specifies which version of IDMC software the organization runs", "It defines the number of Secure Agents an organization can install", "It sets the maximum number of concurrent users allowed"],
      correct: [0],
      concept: "The IDMC POD determines the geographic location of the cloud infrastructure hosting the organization\'s metadata and services. PODs are in specific regions (e.g., US West, Europe) and affect data residency, latency, and compliance with regional data regulations."
    },
    {
      id: 57,
      type: "single",
      difficulty: 2,
      question: "Which monitoring metric is most useful for identifying a slow-running data integration task in IDMC?",
      options: ["Task execution duration and row throughput rate", "Number of users currently logged into the organization", "Amount of storage used by the metadata repository", "Number of connections configured in the organization"],
      correct: [0],
      concept: "Task execution duration and row throughput rate are key metrics for identifying slow-running tasks. The IDMC Monitor shows these metrics, helping administrators pinpoint bottlenecks such as slow source queries, network latency, or resource contention."
    },
    {
      id: 58,
      type: "single",
      difficulty: 2,
      question: "In IDMC, what happens when an organization\'s subscription expires?",
      options: ["Access to IDMC services is suspended and jobs can no longer be executed", "All mappings and tasks are permanently deleted from the platform", "The organization is automatically downgraded to a free tier", "Secure Agents continue to run jobs using cached configurations"],
      correct: [0],
      concept: "When an IDMC subscription expires, access to the platform is suspended. Users cannot log in, and scheduled jobs stop executing. However, data and assets are retained for a grace period. Organizations must renew their subscription to regain access."
    },
    {
      id: 59,
      type: "single",
      difficulty: 2,
      question: "A data engineer needs to verify that a connection to a Snowflake database is properly configured. What should they do in IDMC?",
      options: ["Use the \"Test Connection\" feature in the connection configuration page", "Run a sample mapping and check if it completes without errors", "Review the Secure Agent logs for connection establishment messages", "Create a data quality rule to validate the connection parameters"],
      correct: [0],
      concept: "IDMC provides a \"Test Connection\" feature on the connection configuration page. When clicked, it validates the connection parameters by attempting to establish a connection to the target system. This is the fastest way to verify connection settings before using them in tasks."
    },
    {
      id: 60,
      type: "single",
      difficulty: 2,
      question: "What is the difference between an IDMC organization administrator and a service administrator?",
      options: ["Organization admin manages the entire org including users; service admin manages a specific service like Data Integration", "There is no distinction — both roles have identical permissions", "Service admin has more privileges than organization admin", "Organization admin can only view reports while service admin configures everything"],
      correct: [0],
      concept: "In IDMC, the organization administrator has full control over the organization including user management, licensing, and all services. A service administrator has elevated privileges within a specific service (e.g., Data Integration) but cannot manage organization-wide settings."
    },
    {
      id: 61,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are standard IDMC service categories? (Select all that apply)",
      options: ["Data Integration", "Data Visualization", "Data Quality", "Master Data Management"],
      correct: [0, 2, 3],
      concept: "Standard IDMC service categories include Data Integration, Data Quality, Data Governance, Master Data Management, and API Management. Data Visualization is not a native IDMC service — organizations typically use third-party BI tools for data visualization needs."
    },
    {
      id: 62,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are valid IDMC asset types? (Select all that apply)",
      options: ["Mapping", "Connection", "Taskflow", "Database index"],
      correct: [0, 1, 2],
      concept: "Mappings, connections, and taskflows are all valid IDMC asset types that can be created, managed, and version-controlled within the platform. Database indexes are database-level objects managed within the database itself, not IDMC asset types."
    },
    {
      id: 63,
      type: "multi",
      difficulty: 2,
      question: "Which benefits does IDMC\'s cloud-native architecture provide? (Select all that apply)",
      options: ["Automatic software updates", "Elastic scalability", "Zero need for any internet connectivity", "Reduced infrastructure management"],
      correct: [0, 1, 3],
      concept: "IDMC\'s cloud-native architecture provides automatic software updates, elastic scalability, and reduced infrastructure management. However, internet connectivity is required to access the cloud platform and for Secure Agents to communicate with IDMC services."
    },
    {
      id: 64,
      type: "multi",
      difficulty: 2,
      question: "Which of the following can be configured through the IDMC Administrator console? (Select all that apply)",
      options: ["User accounts and roles", "Runtime environments", "Connection definitions", "Database table schemas"],
      correct: [0, 1, 2],
      concept: "The IDMC Administrator console is used to configure user accounts and roles, runtime environments, and connection definitions. Database table schemas are managed within the database systems themselves, not through the IDMC Administrator console."
    },
    {
      id: 65,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are advantages of IDMC over traditional PowerCenter? (Select all that apply)",
      options: ["No infrastructure management required for cloud services", "Built-in cloud connectors for SaaS applications", "Requires less network bandwidth than PowerCenter", "Automatic platform updates and patches"],
      correct: [0, 1, 3],
      concept: "IDMC advantages over PowerCenter include no infrastructure management for cloud services, built-in cloud connectors, and automatic updates. Network bandwidth requirements depend on data volumes and workloads, not the platform itself, so this is not a guaranteed advantage."
    },
    {
      id: 66,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are valid runtime environment types in IDMC? (Select all that apply)",
      options: ["Secure Agent runtime", "Serverless runtime", "Mainframe runtime", "Hosted Agent runtime"],
      correct: [0, 1, 3],
      concept: "IDMC supports Secure Agent runtime (locally installed agents), serverless runtime (cloud-only execution), and Hosted Agent runtime (Informatica-managed agents). There is no specific mainframe runtime type, though mainframe data can be accessed through appropriate connectors."
    },
    {
      id: 67,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are key capabilities of IDMC\'s Data Governance service? (Select all that apply)",
      options: ["Data cataloging and discovery", "Data lineage tracking", "Real-time data streaming", "Business glossary management"],
      correct: [0, 1, 3],
      concept: "IDMC\'s Data Governance service provides data cataloging, discovery, lineage tracking, and business glossary management. Real-time data streaming is a capability of the Data Integration service, not Data Governance."
    },
    {
      id: 68,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are components of an IDMC organization hierarchy? (Select all that apply)",
      options: ["Parent organization", "Sub-organizations", "Domains", "Users and groups"],
      correct: [0, 1, 3],
      concept: "An IDMC organization hierarchy includes a parent organization, sub-organizations, and users/groups. Domains are a PowerCenter concept (not IDMC). In IDMC, the organizational structure is based on organizations and sub-organizations."
    },
    {
      id: 69,
      type: "multi",
      difficulty: 2,
      question: "Which monitoring capabilities does the IDMC Monitor provide? (Select all that apply)",
      options: ["Job execution status tracking", "Error log viewing", "Mapping design validation", "Performance metric analysis"],
      correct: [0, 1, 3],
      concept: "The IDMC Monitor provides job execution status tracking, error log viewing, and performance metric analysis. Mapping design validation is performed within the Mapping Designer, not the Monitor. The Monitor focuses on runtime operations and post-execution analysis."
    },
    {
      id: 70,
      type: "multi",
      difficulty: 2,
      question: "Which security features are available in IDMC? (Select all that apply)",
      options: ["Role-based access control", "SAML SSO integration", "Data encryption at rest and in transit", "Physical server rack locking"],
      correct: [0, 1, 2],
      concept: "IDMC provides role-based access control, SAML SSO integration, and data encryption at rest and in transit. Physical server security is managed by the cloud infrastructure provider (AWS, Azure, etc.) and is not an IDMC-specific feature users configure."
    },
    {
      id: 71,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are valid methods for executing tasks in IDMC? (Select all that apply)",
      options: ["Manual execution from the UI", "Scheduled execution using IDMC schedules", "REST API-triggered execution", "Email-triggered execution"],
      correct: [0, 1, 2],
      concept: "Tasks in IDMC can be executed manually from the UI, through scheduled execution, or triggered via REST API calls. IDMC does not natively support email-triggered execution — external tools would need to call the IDMC REST API in response to emails."
    },
    {
      id: 72,
      type: "multi",
      difficulty: 2,
      question: "Which factors should be considered when choosing between Secure Agent and serverless runtime? (Select all that apply)",
      options: ["Whether on-premises data sources need to be accessed", "The volume of data being processed", "Whether the user prefers a web browser over a desktop client", "Network security requirements for data in transit"],
      correct: [0, 1, 3],
      concept: "When choosing between Secure Agent and serverless runtime, consider: on-premises data access needs (requires Secure Agent), data volume (affects processing time and costs), and network security requirements. Browser vs. desktop preference is irrelevant since both runtimes use the web UI."
    },
    {
      id: 73,
      type: "multi",
      difficulty: 2,
      question: "Which of the following are true about IDMC\'s multi-tenant architecture? (Select all that apply)",
      options: ["Multiple customers share cloud infrastructure", "Each tenant\'s data is logically isolated", "Tenants can access each other\'s metadata", "Infrastructure costs are shared across tenants"],
      correct: [0, 1, 3],
      concept: "In IDMC\'s multi-tenant architecture, customers share cloud infrastructure and costs while maintaining logical data isolation. Tenants cannot access each other\'s metadata or data — strict access controls ensure tenant isolation and data privacy."
    },
    {
      id: 74,
      type: "multi",
      difficulty: 2,
      question: "Which IDMC features help with compliance and auditing requirements? (Select all that apply)",
      options: ["Audit logs tracking user actions", "Role-based access control", "Data lineage tracking", "Automatic code refactoring"],
      correct: [0, 1, 2],
      concept: "Audit logs, role-based access control, and data lineage tracking all support compliance and auditing requirements. Audit logs record who did what, RBAC ensures proper access controls, and lineage shows data flow for regulatory reporting. Automatic code refactoring is not a compliance feature."
    },
    {
      id: 75,
      type: "multi",
      difficulty: 2,
      question: "Which of the following describe the Secure Agent correctly? (Select all that apply)",
      options: ["It runs on a customer-managed machine", "It communicates with IDMC using outbound HTTPS", "It requires inbound firewall ports to be opened", "It can execute data integration tasks locally"],
      correct: [0, 1, 3],
      concept: "The Secure Agent runs on a customer-managed machine, communicates with IDMC via outbound HTTPS (no inbound ports needed), and can execute data integration tasks locally. The outbound-only communication model is a key security advantage."
    },
    {
      id: 76,
      type: "single",
      difficulty: 3,
      question: "An enterprise has strict data residency requirements mandating that metadata must not leave the EU region. How should they configure their IDMC deployment?",
      options: ["Select an IDMC POD located in the EU region during organization provisioning", "Install Secure Agents only in EU data centers", "Enable GDPR compliance mode in the Administrator console", "Request Informatica to create a dedicated private cloud instance"],
      correct: [0],
      concept: "IDMC PODs (Points of Deployment) determine where metadata and cloud services are hosted. For EU data residency requirements, the organization should be provisioned on an EU-based POD. This ensures metadata stays within the EU region. Secure Agent location affects data processing but not metadata residency."
    },
    {
      id: 77,
      type: "single",
      difficulty: 3,
      question: "A company is experiencing IPU consumption higher than expected. Which approach would best help optimize IPU usage?",
      options: ["Analyze task execution patterns and optimize mappings to reduce processing overhead", "Increase the number of Secure Agents to distribute the IPU load", "Switch from serverless runtime to Secure Agent runtime for all tasks", "Disable audit logging to reduce background IPU consumption"],
      correct: [0],
      concept: "Optimizing IPU consumption requires analyzing which tasks consume the most IPUs and optimizing those mappings. This includes reducing unnecessary transformations, filtering data early in the pipeline, using pushdown optimization, and scheduling tasks efficiently. Adding agents doesn\'t reduce IPU consumption."
    },
    {
      id: 78,
      type: "single",
      difficulty: 3,
      question: "In a complex IDMC deployment with multiple sub-organizations, how does license allocation work?",
      options: ["IPU licenses are allocated from the parent organization to sub-organizations based on configured limits", "Each sub-organization automatically receives an equal share of the total IPUs", "Sub-organizations must purchase their own separate IPU licenses", "License allocation is not possible — all sub-organizations share a single unlimited pool"],
      correct: [0],
      concept: "In IDMC, the parent organization\'s IPU license pool can be allocated to sub-organizations with configured limits. Administrators can control how much compute capacity each sub-organization can consume, preventing one team from monopolizing shared resources."
    },
    {
      id: 79,
      type: "single",
      difficulty: 3,
      question: "A Secure Agent is showing as \"Not Responding\" in the IDMC console but the host machine is running normally. What is the most likely cause?",
      options: ["The Secure Agent service has stopped or is unable to reach the IDMC cloud endpoint", "The IDMC organization\'s subscription has expired", "The mapping being executed has a syntax error", "The target database has run out of storage space"],
      correct: [0],
      concept: "A \"Not Responding\" status typically indicates the Secure Agent process has stopped or cannot communicate with IDMC. Common causes include the agent service crashing, network connectivity issues, proxy configuration changes, or firewall rule changes blocking outbound HTTPS traffic."
    },
    {
      id: 80,
      type: "single",
      difficulty: 3,
      question: "How should an organization implement disaster recovery for their IDMC-based data integration environment?",
      options: ["Configure agent groups across multiple machines and maintain asset version control for recovery", "IDMC is SaaS and requires no disaster recovery planning whatsoever", "Deploy a standby IDMC organization on a different cloud provider", "Keep a parallel PowerCenter environment as a hot standby"],
      correct: [0],
      concept: "While IDMC\'s cloud services are managed by Informatica with built-in redundancy, organizations should still plan for DR. This includes configuring agent groups across machines for local failover, maintaining asset exports/version control, and documenting recovery procedures for connections and configurations."
    },
    {
      id: 81,
      type: "single",
      difficulty: 3,
      question: "An organization needs to integrate IDMC job execution with their existing DevOps CI/CD pipeline. Which approach is most appropriate?",
      options: ["Use the IDMC REST API to trigger task execution and monitor status programmatically", "Export mappings as Java code and include them in the CI/CD build", "Configure the Secure Agent to poll a Git repository for changes", "Use the IDMC web UI to manually trigger deployments after each build"],
      correct: [0],
      concept: "IDMC provides REST APIs for programmatic interaction, including triggering task execution, checking status, and managing assets. Integrating these API calls into CI/CD pipelines enables automated deployment and execution of data integration tasks as part of the DevOps workflow."
    },
    {
      id: 82,
      type: "single",
      difficulty: 3,
      question: "What is the impact of upgrading a Secure Agent to a newer version on currently running tasks?",
      options: ["Running tasks complete before the upgrade is applied; the agent restarts after current jobs finish", "All running tasks are immediately terminated and must be restarted", "The upgrade is applied live without any impact to running tasks", "Upgrades require manual uninstallation and reinstallation of the agent"],
      correct: [0],
      concept: "Secure Agent upgrades are designed to be minimally disruptive. When an upgrade is triggered, the agent waits for currently running tasks to complete before applying the update and restarting. This ensures that in-progress data integration jobs are not interrupted."
    },
    {
      id: 83,
      type: "single",
      difficulty: 3,
      question: "A multinational company needs different teams in different countries to manage their own IDMC assets independently. What architecture should be used?",
      options: ["Create sub-organizations for each country team with delegated administration", "Create separate user groups with folder-level permissions in a single organization", "Purchase separate IDMC subscriptions for each country", "Use a single organization with no access controls for maximum collaboration"],
      correct: [0],
      concept: "Sub-organizations with delegated administration provide the best architecture for multinational teams. Each country team gets their own sub-organization with independent user management, assets, connections, and runtime environments while the parent organization maintains overall governance."
    },
    {
      id: 84,
      type: "single",
      difficulty: 3,
      question: "When configuring IDMC for a highly regulated financial institution, which combination of features addresses compliance requirements?",
      options: ["SAML SSO, RBAC with custom roles, audit logging, and encryption at rest and in transit", "Basic password authentication with shared accounts and minimal logging", "Serverless runtime with default roles and disabled audit trails", "VPN-only access with no authentication and full administrator access for all users"],
      correct: [0],
      concept: "Regulated financial institutions require comprehensive security: SAML SSO for centralized identity management, RBAC with custom roles for least-privilege access, audit logging for accountability and regulatory reporting, and encryption for data protection. These features together address compliance requirements."
    },
    {
      id: 85,
      type: "single",
      difficulty: 3,
      question: "An IDMC organization has exhausted its IPU allocation mid-cycle. What is the immediate operational impact?",
      options: ["New task executions may be blocked or throttled until additional IPUs are procured or the cycle resets", "All existing mappings and connections are deleted from the organization", "The Secure Agent automatically shuts down and uninstalls itself", "All users are locked out of the IDMC console immediately"],
      correct: [0],
      concept: "When IPU allocation is exhausted, IDMC may block or throttle new task executions depending on the organization\'s licensing agreement. Existing assets are preserved, and users can still access the console. Organizations must procure additional IPUs or wait for the billing cycle to reset."
    },
    {
      id: 86,
      type: "tf",
      difficulty: 3,
      question: "The Secure Agent requires inbound firewall ports to be opened for communication with the IDMC cloud platform.",
      options: ["True — inbound ports must be opened for IDMC to send instructions to the agent", "False — the Secure Agent uses outbound HTTPS only and does not require inbound ports"],
      correct: [1],
      concept: "The Secure Agent uses outbound HTTPS communication only. It initiates all connections to the IDMC cloud platform, pulling instructions and pushing results. No inbound firewall ports need to be opened, which is a key security feature of the architecture."
    },
    {
      id: 87,
      type: "tf",
      difficulty: 3,
      question: "In IDMC, sub-organizations can have their own independent sets of users and roles separate from the parent organization.",
      options: ["True — sub-organizations support independent user and role management", "False — all users and roles must be managed at the parent organization level only"],
      correct: [0],
      concept: "Sub-organizations in IDMC can have their own users, roles, and administrative settings independent of the parent organization. This allows delegated administration where each business unit manages its own access control within the boundaries set by the parent organization."
    },
    {
      id: 88,
      type: "tf",
      difficulty: 3,
      question: "IDMC\'s serverless runtime can be used to access data sources located in a customer\'s on-premises data center.",
      options: ["True — serverless runtime can connect to any data source regardless of location", "False — serverless runtime can only access cloud-based data sources; on-premises access requires a Secure Agent"],
      correct: [1],
      concept: "The serverless runtime operates entirely in the cloud and cannot directly access on-premises data sources behind firewalls. To access on-premises data, a Secure Agent must be installed within the customer\'s network to bridge the connection."
    },
    {
      id: 89,
      type: "tf",
      difficulty: 3,
      question: "IDMC automatically applies platform updates and patches without requiring customer-initiated upgrade actions.",
      options: ["True — Informatica manages all cloud platform updates automatically", "False — customers must manually approve and schedule each platform update"],
      correct: [0],
      concept: "As a SaaS platform, IDMC is automatically updated by Informatica. Platform patches, security updates, and new features are rolled out without requiring customers to initiate or schedule upgrades. This ensures all organizations run the latest version."
    },
    {
      id: 90,
      type: "tf",
      difficulty: 3,
      question: "IPU consumption in IDMC is calculated identically for all services regardless of the type of processing performed.",
      options: ["True — all IDMC services consume IPUs at the same fixed rate per row processed", "False — different services have different IPU consumption rates based on the type and complexity of processing"],
      correct: [1],
      concept: "IPU consumption varies by service and processing type. Data Integration, Data Quality, and other services have different IPU consumption rates based on the complexity of operations performed. Advanced transformations and quality rules typically consume more IPUs than simple data movement."
    },
    {
      id: 91,
      type: "tf",
      difficulty: 3,
      question: "A single Secure Agent can belong to multiple runtime environments simultaneously in IDMC.",
      options: ["True — agents can be shared across multiple runtime environments for better utilization", "False — a Secure Agent can only belong to one runtime environment at a time"],
      correct: [1],
      concept: "A Secure Agent can only be assigned to one runtime environment at a time. If an organization needs tasks to run in different runtime environments, separate Secure Agents must be installed and assigned to each respective runtime environment."
    },
    {
      id: 92,
      type: "tf",
      difficulty: 3,
      question: "IDMC connections store database passwords in encrypted format rather than plain text.",
      options: ["True — all credentials in IDMC connections are encrypted for security", "False — passwords are stored in plain text but access is restricted by role-based controls"],
      correct: [0],
      concept: "IDMC encrypts all sensitive credentials stored in connection definitions. Passwords and other secrets are encrypted at rest and in transit, ensuring that even internal access to the metadata store does not expose plain-text credentials."
    },
    {
      id: 93,
      type: "tf",
      difficulty: 3,
      question: "The IDMC Mapping Designer is a thick client application that must be installed on a developer\'s workstation.",
      options: ["True — Mapping Designer requires local installation similar to PowerCenter Designer", "False — Mapping Designer is a web-based application accessed through a browser"],
      correct: [1],
      concept: "Unlike PowerCenter\'s thick-client Designer tool, the IDMC Mapping Designer is a web-based application accessed through a browser. No local installation is required, enabling developers to design mappings from any device with a supported web browser and internet access."
    },
    {
      id: 94,
      type: "tf",
      difficulty: 3,
      question: "IDMC\'s Data Governance service can automatically discover and classify sensitive data like PII across connected data sources.",
      options: ["True — Data Governance includes automated data discovery and classification capabilities", "False — data classification in IDMC must always be performed manually by data stewards"],
      correct: [0],
      concept: "IDMC\'s Data Governance service includes automated data discovery and classification capabilities that can scan connected data sources to identify and classify sensitive data such as PII (Personally Identifiable Information), financial data, and healthcare information."
    },
    {
      id: 95,
      type: "tf",
      difficulty: 3,
      question: "When a Secure Agent group has multiple agents, all agents in the group must be installed on the same operating system.",
      options: ["True — all agents in a group must run on the same OS for compatibility", "False — agents in a group can run on different operating systems without restrictions"],
      correct: [0],
      concept: "Agents within a Secure Agent group should run on the same operating system to ensure consistent task execution behavior. Mixing operating systems (e.g., Windows and Linux) in the same agent group can cause compatibility issues with file paths, line endings, and system-specific configurations."
    },
    {
      id: 96,
      type: "tf",
      difficulty: 3,
      question: "IDMC can only connect to Informatica-branded data sources and does not support third-party databases.",
      options: ["True — IDMC is limited to Informatica ecosystem products", "False — IDMC supports hundreds of third-party data sources through its connector ecosystem"],
      correct: [1],
      concept: "IDMC\'s connector ecosystem supports hundreds of third-party data sources including Oracle, SQL Server, MySQL, PostgreSQL, Salesforce, SAP, Workday, Snowflake, AWS services, Azure services, Google Cloud services, and many more. It is designed for broad interoperability."
    },
    {
      id: 97,
      type: "tf",
      difficulty: 3,
      question: "The IDMC REST API can be used to programmatically create users and assign roles without using the Administrator console UI.",
      options: ["True — IDMC provides REST APIs for user management and role assignment", "False — user management can only be performed through the Administrator console UI"],
      correct: [0],
      concept: "IDMC exposes REST APIs for various administrative operations including user creation, role assignment, and organization management. This enables automation of user provisioning through scripts or integration with identity management systems like SCIM-compatible tools."
    },
    {
      id: 98,
      type: "tf",
      difficulty: 3,
      question: "In IDMC, the organization administrator role can be assigned to multiple users within the same organization.",
      options: ["True — multiple users can hold the organization administrator role simultaneously", "False — only one user can be the organization administrator at any given time"],
      correct: [0],
      concept: "IDMC allows multiple users to be assigned the organization administrator role. This ensures that administrative responsibilities can be shared and that the organization is not dependent on a single individual for critical operations like user management and configuration changes."
    },
    {
      id: 99,
      type: "tf",
      difficulty: 3,
      question: "IDMC\'s multi-tenant architecture means that one tenant\'s heavy workload can significantly degrade performance for other tenants.",
      options: ["True — multi-tenancy means all tenants share identical compute resources without isolation", "False — IDMC implements resource isolation to prevent one tenant\'s workload from impacting others"],
      correct: [1],
      concept: "While IDMC is multi-tenant, it implements resource isolation mechanisms to prevent \"noisy neighbor\" problems. Each tenant\'s workloads are isolated at the compute level, ensuring that one organization\'s heavy processing does not significantly degrade performance for other tenants."
    },
    {
      id: 100,
      type: "tf",
      difficulty: 3,
      question: "Taskflows in IDMC can include conditional branching logic to execute different tasks based on the success or failure of preceding tasks.",
      options: ["True — taskflows support conditional branching based on task execution outcomes", "False — taskflows only support linear sequential execution without any branching"],
      correct: [0],
      concept: "IDMC taskflows support conditional branching logic where subsequent tasks can be executed based on the success, failure, or specific conditions of preceding tasks. This enables complex orchestration patterns including error handling, retry logic, and parallel execution paths."
    }
  ]
};

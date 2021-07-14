- CQRS
- TypeORM, pg, postgres
- TypeScript

## Examples demonstrated:

CQRS Pattern
- application/persons namespace shows creation and execution of the POSTPersonsCommand
- domain/persons namespace shows creation and of createPerson command
- Framework specific routing and global middleware separated into infrastructure/http-server and infrastructure/databasee

TypeORM
- Postgres, pg driver
- Table schema migration generation based off of entity class definition
- Creates DB if it does not exist
- Will seed data in development environments (based off of NODE_ENV)

# Reflections
On the CQRS stuff:
- This really just demonstrates a single "write" command and a separation between infra, application, and domain layers
- The "read" service, when created, would be its own repo or just some independently deployable service, which would complete this "command" / "query" response segregation (I imagine a GRAPHQL service that does nothing but read/resolve data fields would be a nice way to handle the read-only service...)

On the DATABASE stuff:
- This demonstrates that it is perfectly reasonable to generate and seed test data in non-production environments.
- This also shows that an app developer can rapidly evolve their application with the help of automatic schema table generation.
- Further architecting would be needed so that guardrails were in place in Production so a dev does not accidentally drop production database tables, but a "tell-dont-ask" model of table schema changes reasonable ask from an App Feature Developer SDLC perspective

On general gaps or future improvements:
- One improvement would be to have better global error handling middleware setup for KOA. Creating a single ErrorHandler middleware to catch and handle 5xx vs 4xx statuses and error messages would be ideal.
- Instead of hardcoding the command names (e.g. "POSTCommand"), those should be imported via an enum
- This is just a sandbox repo so no test suites were set up, but tests obvi TDD and tests would be good for any serious project
- It would be cool to look into Event Sourcing to see how that would work with CQRS
- The patterns used are all via convention, which would make maintenance error prone by new developers. Enforcing convention and constraints with lint rules would put up some guard rails for new devs maintaining a codebase with this structure so that it'd be harder for them to make mistakes
- I kind of want to see what this pattern looks like in a language like `Go` and or `gRPC`




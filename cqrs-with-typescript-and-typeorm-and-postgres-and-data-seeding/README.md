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

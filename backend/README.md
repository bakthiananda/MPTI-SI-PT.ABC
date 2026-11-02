# FILE BACKEND DISINI

Backend files for MPTI-SI-PT.ABC, backend and database live on the same machine
so uses sqlite for simplicity and reduced overhead.

## Project Details

### Frameworks / Libraries
- Express.JS
- Drizzle ORM

### Development Setup
To get dev tools, run:
```sh
npm install
```

### Database Migration System
Use drizzle's codebase first approach while generating migration files, see:
[option 3](https://orm.drizzle.team/docs/sqlite/migrations)
+ Change `src/db/schema.ts` to reflect new project schema
+ Run `npx drizzle-kit generate` to make migration files
+ If the migration looks correct, run `npx drizzle-kit migrate`

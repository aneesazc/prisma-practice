# Prisma Getting Started

Short description of your project.



## Getting Started

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/your-repo.git
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the database using Docker:

    ```bash
    docker-compose up -d
    ```

4. Set up the database schema:

    ```bash
    npx prisma migrate dev
    ```

5. Start the application:

    ```bash
    npx tsc -b
    node dist/index.js
    ```

## Starting Fresh from Scratch

1. Initialize an empty Node.js project

    ```bash
    npm init -y
    ```
2. Add dependencies

    ```bash
    npm install prisma typescript ts-node @types/node --save-dev
    ```

3. Initialize typescript

    ```bash
    npx tsc --init
    Change `rootDit` to `src`
    Change `outDir` to `dist`
    ```

4. Initialize a fresh prisma project

    ```bash
    npx prisma init
    ```

5. Create Models

    ```bash
    generator client {
    provider = "prisma-client-js"
    }

    datasource db {
    provider = "postgresql"
    url      = env("DATABASE_URL")
    }

    model User {
    id         Int      @id @default(autoincrement())
    username   String   @unique
    password   String
    firstName  String
    lastName   String
    }

    model Todo {
    id          Int     @id @default(autoincrement())
    title       String
    description String
    done        Boolean @default(false)
    userId      Int
    }
    ```

6. Generate Migrations

    ```bash
    npx prisma migrate dev --name Initialize_the_schema
    ```

7. Generate Client(remeber to generate client after every new migration)

    ```bash
    npx prisma generate
    ```

8. Type your code in index.ts in /src folder

    ```bash
    tsc -b
    node dist/index.js
    ```
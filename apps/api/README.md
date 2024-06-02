# api

GraphQL application based on NestJS and Apollo.

Jest and Supertest uses for testing.

## Getting Started

### Commands

```shell
# Install Packages
pnpm install

# Start App for Development
pnpm run dev

# Execute Test
pnpm run test

# Execute E2E Test
pnpm run test:e2e

# Lint
pnpm run lint

# TypeCheck
pnpm run typecheck
```

## GraphQL Playground

Playground is located on
http://localhost:3000/graphql by default.

Execute the below schema, if you check the app version.

```graphql
query {
  info {
    version
  }
}
```

## for Production

```shell
# Install Dependencies
pnpm install

# Build App
pnpm run build

# Start App
pnpm run start
```

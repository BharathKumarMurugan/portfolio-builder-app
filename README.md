# Portfolio Builder App

<!-- Application description goes here -->

## Tools used

1. NextJS
2. Tailwind CSS
3. NextAuth (Beta)
4. OAuth
5. Prisma
6. PostgreSQL
7. Docker

## Run Postgres DB on docker container

`docker run --name portfolio-builder --env=POSTGRES_PASSWORD=portfolio --env=POSTGRES_USER=portfolio --volume=/var/lib/postgresql/data -p 5432:5432 -d postgres:latest`

## Steps involved in developing this application
- Initialize the NextJS project using `npx create-next-app@latest` with required tools.
- Install below dependencies for Authentication & Database connection.
```shell
$ npm install next-auth

$ npm install @prisma/client

$ npm install prisma --save-dev
```
- Install axios for API call. `npm install axios`
- Initializing Prisma
```shell
$ npx prisma init
```
- The above command generates `prisma/schema.prisma` file.
- Migrate the database using the command `npx prisma migrate dev --name init`.
- Generate Prisma client `npx prisma generate`.
const {
  PG_USER = "postgres",
  PG_PASSWORD = "ajdinba",
  PG_HOST = "localhost",
  PG_PORT = 5432,
  PG_DATABASE_NAME = "falcon",
} = process.env;

export const POSTGRES_URI = `postgres://${PG_USER}:${PG_PASSWORD}@${PG_HOST}:${PG_PORT}/${PG_DATABASE_NAME}`;

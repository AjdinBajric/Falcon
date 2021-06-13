import express from "express";
import Redis from "ioredis";
import connectRedis from "connect-redis";
import session from "express-session";
import { Pool } from "pg";

import {
  REDIS_OPTIONS,
  SESSION_OPTIONS,
  APP_PORT,
  POSTGRES_URI,
} from "./config";

const RedisStore = connectRedis(session);
const client = new Redis(REDIS_OPTIONS);
const pool = new Pool({ connectionString: POSTGRES_URI });

const app = express();

app.use(session({ ...SESSION_OPTIONS, store: new RedisStore({ client }) }));

app.get("/", (req, res) =>
  res.json({
    message: "Hello",
  })
);

app.listen(APP_PORT, () => console.log(`http://localhost:${APP_PORT}`));

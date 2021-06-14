import Redis from "ioredis";
import connectRedis from "connect-redis";
import session from "express-session";
import { Pool } from "pg";
import { createApp } from "./app";
import { REDIS_OPTIONS, APP_PORT, POSTGRES_URI } from "./config";

const pool = new Pool({ connectionString: POSTGRES_URI });

const RedisStore = connectRedis(session);

const client = new Redis(REDIS_OPTIONS);

const store = new RedisStore({ client });

const app = createApp(store);

app.listen(APP_PORT, () => console.log(`http://localhost:${APP_PORT}`));

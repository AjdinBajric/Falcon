import { Pool } from "pg";
import { POSTGRES_URI } from "../config";

export const pool = new Pool({ connectionString: POSTGRES_URI });

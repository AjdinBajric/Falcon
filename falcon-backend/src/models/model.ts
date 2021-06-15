import { Pool } from "pg";
import { pool } from "./pool";

class Model {
  private pool: Pool;
  private table: string;
  constructor(table: string) {
    this.pool = pool;
    this.table = table;
    this.pool.on(
      "error",
      (err, client) => `Error, ${err}, on idle client${client}`
    );
  }

  public async select(columns: string, clause: string) {
    let query = `SELECT ${columns} FROM ${this.table}`;
    if (clause) query += " " + clause;
    return this.pool.query(query);
  }

  public async customQuery(query: string) {
    return this.pool.query(query);
  }

  public get getPool(): Pool {
    return this.pool;
  }

  public get getTable(): string {
    return this.table;
  }

  public set setPool(pool: Pool) {
    this.pool = pool;
  }

  public set setTable(table: string) {
    this.table = table;
  }
}

export default Model;

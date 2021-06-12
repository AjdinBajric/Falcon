const dotenv = require("dotenv");
const session = require("express-session");
const pgSession = require("connect-pg-simple")(session);
const crypto = require("crypto");
const path = require("path");
const { Pool } = require("pg");

dotenv.config({ path: path.join(__dirname, "../.env") });

const connectionString = process.env.CONNECTION_STRING;

const sessionDBAccess = new Pool({ connectionString });

const sessionConfig = {
  store: new pgSession({
    pool: sessionDBAccess,
    tableName: "session",
  }),
  name: "SID",
  secret: crypto.randomBytes(14).toString("hex"),
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
  },
};

module.exports = {
  connectionString: process.env.CONNECTION_STRING,
  sessionConfig,
};

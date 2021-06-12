const express = require("express");
const session = require("express-session");
const sessionConfig = require("./config/config");
const pgSession = require("connect-pg-simple")(session);
const cors = require("cors");
const crypto = require("crypto");
const routes = require("./routes");
const { connectionString } = require("./config/config");
const { Pool } = require("pg");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// enable cors
app.use(cors());
app.options("*", cors());

const sessionDBAccess = new Pool({ connectionString });

app.use(
  session({
    store: new pgSession({
      pool: sessionDBAccess,
      tableName: "session",
    }),
    name: "SID",
    secret: crypto.randomBytes(15).toString("hex"),
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7,
    },
  })
);

app.use(routes);

app.listen(4000, function () {
  console.log("Falcon app listening on port 4000!");
});

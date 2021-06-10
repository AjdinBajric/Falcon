const express = require("express");
const { connectionString } = require("./config/config");
const cors = require("cors");
const routes = require("./routes");

const app = express();

app.use(express.json());

// enable cors
app.use(cors());
app.options("*", cors());

app.use("", routes);

app.listen(4000, function () {
  console.log("Falcon app listening on port 4000!");
});

const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.join(__dirname, "../.env") });

module.exports = {
  connectionString: process.env.CONNECTION_STRING,
};

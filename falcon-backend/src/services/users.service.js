const httpStatus = require("http-status");
const { connectionString } = require("../config/config");
const { Pool } = require("pg");

const pool = new Pool({ connectionString });

pool.connect();

const getUsers = async () => {
  const response = await pool.query("SELECT * FROM member");
  return response.rows;
};

const createUser = async (req, res) => {
  const { name, email, hash, salt } = req;
  const response = await pool.query(
    `INSERT INTO member(name, email, hash, salt) VALUES('${name}', '${email}', '${hash}', '${salt}')`
  );

  if (response.rowCount == 1) {
    return req;
  }
};

module.exports = {
  getUsers,
  createUser,
};

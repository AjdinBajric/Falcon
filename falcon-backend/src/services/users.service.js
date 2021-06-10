const { connectionString } = require("../config/config");
const { Pool } = require("pg");

const pool = new Pool({ connectionString });

pool.connect();

const getUsers = async () => {
  const response = await pool.query("SELECT * FROM member");
  return response.rows;
};

const createUser = async (body, res) => {
  const { name, email, password } = body;
  let hash = "asdadsadadsa";
  let salt = "saaaaaa";
  const response = await pool.query(
    `INSERT INTO member(name, email, hash, salt) VALUES('${name}', '${email}', '${hash}', '${salt}')`
  );

  if (response.rowCount == 1) {
    return body;
  }
};

const loginUser = async (body, res) => {
  const { email, password } = body;
  let hash = password;
  const response = await pool.query(
    `SELECT name 
    FROM member
    WHERE email='${email}' AND hash='${hash}'`
  );

  return response.rows[0];
};

module.exports = {
  getUsers,
  createUser,
  loginUser,
};

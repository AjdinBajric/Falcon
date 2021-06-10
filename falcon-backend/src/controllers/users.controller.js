const httpStatus = require("http-status");
const usersService = require("../services/users.service");

const createUser = async (req, res) => {
  const user = await usersService.createUser(req.body);
  res.status(httpStatus.CREATED).send(user);
};

const getUsers = async (req, res) => {
  const users = await usersService.getUsers();
  res.send(users);
};

const loginUser = async (req, res) => {
  const user = await usersService.loginUser(req.body);
  res.send(httpStatus[200]);
};
module.exports = {
  createUser,
  getUsers,
  loginUser,
};

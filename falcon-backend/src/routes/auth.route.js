const express = require("express");
const usersController = require("../controllers/users.controller");

const router = express.Router();

router.route("/login").post(usersController.loginUser);

module.exports = router;

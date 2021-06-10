const express = require("express");
const usersRoute = require("./users.route");
const authRoute = require("./auth.route.js");

const router = express.Router();

const defaultRoutes = [
  {
    path: "/users",
    route: usersRoute,
  },
  {
    path: "/auth",
    route: authRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;

const { Router } = require("express");

const userRoute = require("../modules/users/routes/user.route");

const routes = Router();

routes.use("/users", userRoute);

module.exports = routes;

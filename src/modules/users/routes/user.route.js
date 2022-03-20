const { Router } = require("express");

const UserController = require("../controllers/user.controller");

const router = Router();

router.get("/", UserController.getAll);

module.exports = router;

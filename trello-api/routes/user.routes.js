const express = require("express");
const router = express.Router();

const userController = require("../controller/user.controller");
router.route("/login").post(userController.login);
router.post("/register", userController.register);
//router.post("/login", userController.login);

module.exports = router;

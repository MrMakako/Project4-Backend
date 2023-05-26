const express = require("express");

const router = express.Router();

const userController = require("../controller/user.controller");

router.get("/get", userController.getUser);
router.post("/create", userController.createUser);

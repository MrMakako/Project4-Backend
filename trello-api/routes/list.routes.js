const express = require("express");
const router = express.Router();

const listController = require("../controller/list.controller");

const { authenticateToken } = require("../auth/middleware");
//router.get("/all", authenticateToken, cardController.getCards);

router.get("/all", listController.getLists);
//ready up
module.exports = router;

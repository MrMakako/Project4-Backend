const express = require("express");
const router = express.Router();

const boardController = require("../controller/board.controller");
const { authenticateToken } = require("../auth/middleware");

router.post("/all", authenticateToken, boardController.getBoards);
router.post("/add", boardController.createBoard);
module.exports = router;

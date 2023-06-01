const express = require("express");
const router = express.Router();

const boardController = require("../controller/board.controller");
//const { authenticateToken } = require("../auth/middleware");

//router.get("/all", authenticateToken, boardController.getCards);
router.post("/all", boardController.getBoards);
router.post("/add", boardController.createBoard);
module.exports = router;

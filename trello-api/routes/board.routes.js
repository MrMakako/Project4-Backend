const express = require("express");
const router = express.Router();
const { verify_jwt } = require("../validators/verify.jwt");
const boardController = require("../controller/board.controller");
const { authenticateToken } = require("../auth/middleware");

router.post("/all", boardController.getBoards);
router.post("/add", boardController.createBoard);
module.exports = router;

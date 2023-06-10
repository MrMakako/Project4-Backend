const express = require("express");
const router = express.Router();
const { verify_jwt } = require("../validators/verify.jwt");
const boardController = require("../controller/board.controller");
const { authenticateToken } = require("../auth/middleware");

router.get("/all", boardController.getBoards);
router.post("/add", boardController.createBoard);
router.delete("/delete", boardController.deleteBoard);
module.exports = router;

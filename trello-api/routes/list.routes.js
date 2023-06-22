const express = require("express");
const router = express.Router();

const listController = require("../controller/list.controller");

const { authenticateToken } = require("../auth/middleware");
//router.get("/all", authenticateToken, cardController.getCards);

router.get("/all", listController.getLists);
router.post("/new", listController.addList);
router.put("/update", listController.updateList);
//ready up
module.exports = router;

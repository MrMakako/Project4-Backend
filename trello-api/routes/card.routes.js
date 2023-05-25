const express = require("express");
const router = express.Router();

const cardController = require("../controller/card.controller");
//const { authenticateToken } = require("../auth/middleware");

//router.get("/all", authenticateToken, cardController.getCards);
router.get("/all", cardController.getCards);
router.post("/all", cardController.addCards);
router.put("/update", cardController.updateCards);
router.delete("/delete", cardController.deleteCard);
//ready up
module.exports = router;

const express = require("express");
const router = express.Router();

const refreshTokenController = require("../controller/refreshToken.controller");

router.post(
  "/refresh",

  refreshTokenController.refreshTokenHandler
);

//ready up
module.exports = router;

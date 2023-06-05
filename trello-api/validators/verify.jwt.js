const crypto = require("crypto");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const Http_Codes = require("../utils/Http_Codes");

function verify_jwt(req, res, next) {
  const authHeader = req.headers["authorization"];
  console.log(authHeader);
  if (!authHeader) return res.sendStatus(Http_Codes.BAD_REQUEST);
  console.log(authHeader); //Bearer Token
  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.ACCESSTOKEN_SECRET, (err, decoded) => {
    if ((err, decoded)) {
      // console.log(err);
      if (err) res.sendStatus(403); //invalid token forbridden
      req.user_id = decoded.user_id;
      console.log(req.user_id);
      next(); //next r4eally important to send parameters in req to reoutes below this one
    } else {
      res.sendStatus(403);
    }
  });
}
module.exports = { verify_jwt };

const crypto = require("crypto");
const jwt = require("jsonwebtoken");
require("dotenv").config();

function verify_jwt(req, res, next) {
  const authHeader = req.headers["authorization"];
  if (!authHeader) return res.sendStatus("401");
  console.log(authHeader); //Bearer Token
  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.ACCESSTOKEN_SECRET, (err, decoded) => {
    if ((err, decoded)) {
      // console.log(err);
      if (err) res.sendStatus(403); //invalid token forbridden
      req.user = decoded.email;
      console.log(req.user);
      next();
    } else {
      res.sendStatus(403);
    }
  });
}
module.exports = { verify_jwt };

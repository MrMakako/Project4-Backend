const Http_Codes = require("../utils/Http_Codes");
const jwt = require("jsonwebtoken");
const dot = require("dotenv").config();
//
async function refreshTokenHandler(req, res) {
  const authHeader = req.headers["authorization"];
  if (!authHeader) return res.sendStatus(Http_Codes.BAD_REQUEST);
  console.log(authHeader); //Bearer Token
  const token = authHeader.split(" ")[1];

  jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
    if ((err, decoded)) {
      // console.log(err);
      if (err) res.sendStatus(Http_Codes.BAD_REQUEST); //invalid token forbridden
      const user_id = decoded.user_id;
      const accessToken = jwt.sign(
        { user_id: user_id },
        process.env.ACCESSTOKEN_SECRET,
        {
          expiresIn: "1d",
        }
      );
      res.send({
        success: true,
        data: {
          accessToken,
          user_id: user_id,
        },
      });
    } else {
      res.sendStatus(Http_Codes.BAD_REQUEST);
    }
  });
}

module.exports = {
  refreshTokenHandler,
};

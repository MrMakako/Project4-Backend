const Http_Codes = require("../utils/Http_Codes");
const jwt = require("jsonwebtoken");
const dot = require("dotenv").config();

async function refreshTokenHandler(req, res) {
  if (!req.body?.refreshToken) res.sendStatus(Http_Codes.UNAUTHORIZED);
  console.log(req.body);

  jwt.verify(
    req.body.refreshToken,
    process.env.REFRESH_TOKEN_SECRET,
    (err, decoded) => {
      if ((err, decoded)) {
        // console.log(err);
        if (err) res.sendStatus(Http_Codes.UNAUTHORIZED); //invalid token forbridden
        const user_id = decoded.user_id;
        const accessToken = jwt.sign(
          { user_id: user_id },
          process.env.ACCESSTOKEN_SECRET,
          {
            expiresIn: "30s",
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
    }
  );
}

module.exports = {
  refreshTokenHandler,
};

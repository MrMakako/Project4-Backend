const { async } = require("validate.js");
const user_service = require("../services/user_service");
const { Http_Codes } = require("../utils/httpcodes");
async function createUser(req, res) {
  try {
    if (
      validate.isPassword(req.body.password) &&
      validate.isEmail(req.body.email)
      //check on validate.js

      ///code below will go under function register
    ) {
      const iterations = 100;
      const KEY_LENGTH = 64;
      //Generartin salt
      const salt = crypto.randomBytes(128).toString("base64");
      //Generating encrypted password
      const ecncrypted_password = crypto.pbkdf2Sync(
        req.body.password,
        salt,
        iterations,
        KEY_LENGTH,
        "sha256"
      );
      //add user to MySql
      res.send(Http_Codes.OK);
      //send request satuts 200
    } else {
      res.send(Http_Codes["Bad Request"]);
      //bad request status sended if (emial or password not valid)
    }
  } catch (error) {
    console.log(error);
    res.send("Error");
  }
}

async function getUser(req, res) {}
//Expoerts
module.exports = {
  createUser,
  getUser,
};

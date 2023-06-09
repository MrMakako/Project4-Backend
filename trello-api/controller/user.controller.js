const Http_Codes = require("../utils/Http_Codes");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const dot = require("dotenv").config();

const { isEmail, isPassword } = require("../validators/validators");
const {
  registerUser,
  getCredentials,
  logged_user,
} = require("../services/user_service");

async function register(req, res) {
  try {
    const { email, password } = req.body;
    const errorMessages = [];
    if (!isEmail(email)) {
      errorMessages.push("Email is not valid");
    }

    if (!isPassword(password)) {
      errorMessages.push("Password is not valid");
    }

    if (errorMessages.length) {
      res.status(Http_Codes.BAD_REQUEST).send({ error: errorMessages });
    } else {
      const salt = crypto.randomBytes(128).toString("base64");
      const encryptedPassword = crypto
        .pbkdf2Sync(password, salt, 30000, 64, "sha256")
        .toString("base64");

      const newUserId = await registerUser({
        email: email,
        salt: salt,
        password: encryptedPassword,
      });

      res.send({
        success: true,
        user_email: newUserId.email,
      });
    }
  } catch (e) {
    console.log(e);
    res.status(Http_Codes.INTERNAL_SERVER_ERROR).send({
      message: "Internal server error",
      detail: e.toString(),
    });
  }
}

async function login(req, res) {
  const { email, password } = req.body;
  // 0. TODO: middleware

  // 1. verificacion de los parametros (formato)
  try {
    const errorMessages = [];
    if (!isEmail(email)) {
      errorMessages.push("Email is not valid");
    }

    if (!isPassword(password)) {
      errorMessages.push("Password is not valid");
    }

    if (errorMessages.length) {
      res.status(Http_Codes.BAD_REQUEST).send({ error: errorMessages });
    } else {
      const [credentials] = await getCredentials(email);

      //console.log("credentials", credentials);
      const encryptedPassword = crypto
        .pbkdf2Sync(password, credentials[0][0].salt, 30000, 64, "sha256")
        .toString("base64");

      //console.log("process.env.TOKEN_KEY", process.env.TOKEN_KEY);
      if (encryptedPassword == credentials[0][0].password) {
        // generate
        const accessToken = jwt.sign(
          { user_id: credentials[0][0].id },
          process.env.ACCESSTOKEN_SECRET,
          {
            expiresIn: "1d",
          }
        );

        const refreshToken = jwt.sign(
          { user_id: credentials[0][0].id },
          process.env.REFRESH_TOKEN_SECRET,
          {
            expiresIn: "1d",
          }
        );

        const currentUser = { email, refreshToken };
        logged_user.push(currentUser);

        res.send({
          success: true,
          data: {
            accessToken,
            refreshToken,
            user_id: credentials[0][0].id,
          },
        });

        //store use in memory
      } else {
        res.status(Http_Codes.UNAUTHORIZED).send({
          message: "Contraseña incorrecta",
        });
      }
    }
  } catch (e) {
    // logging
    // writeFile(exception e)

    // alerts/notifications
    console.log(e);
    res.status(Http_Codes.INTERNAL_SERVER_ERROR).send({
      message: "Try again later",
    });
  }

  // 2. TODO: ejecucion del procedimiento
  // 2.1 validacion en base de datos

  // 3. TODO: mandar una respuesta para cada escenario

  // 4. TODO: control de excepciones try catch
}

module.exports = {
  register,
  login,
};

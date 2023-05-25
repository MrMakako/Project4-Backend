const express = require("express");
const app = express();
const port = 3006;
const bodyParser = require("body-parser");
const pool = require("./database");
//const board_service = require("./board_service");
//const card_service = require("./cards_service");
const { IntegerType } = require("@mysql/xdevapi");
const validate = require("./validators/validators");
const { Http_Codes } = require("./utils/httpcodes");
const crypto = require("crypto");
const { async } = require("validate.js");
app.use(bodyParser.json());

const cardRouter = require("./routes/card.routes");
const boardRouter = require("./routes/board.routes");

app.use("/cards", cardRouter);
app.use("/boards", boardRouter);
/*

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/boards", async (req, res) => {
  //baords?user_id=1;
  //const user_id = req.query.user_id;
  const user_id = parseInt(req.query.user_id);
  console.log(user_id);
  if (validate.isInteger(user_id)) {
    const result = await board_service.get_boards(user_id);
    res.json(result[0]);
  } else {
    res.send("invalid input");
  }
});

app.post("/cards", async (req, res) => {
  try {
    await card_service.delete_All_Cards();
    for (const key in req.body) {
      console.log(req.body[key]);
      const body = req.body[key];
      const name = body.name;
      const description = body.description;
      const list_id = parseInt(body.list_id);
      const position = parseInt(body.position);
      await card_service.add_card(name, description, list_id, position); //
    }
    res.send(card_service.getCards(1));
  } catch (error) {}
});

app.get("/cards", async (req, res) => {
  //cards?board_id=1;
  //req.query.board.id
  const board_id = parseInt(req.query.board_id);
  console.log(board_id);
  if (validate.isInteger(board_id)) {
    const result = await card_service.getCards(board_id);
    res.json(result[0]);
  } else {
    res.send("invalid input");
  }
});
////
app.put("/cards", async (req, res) => {
  try {
    const card_id = req.body.id;
    const name = req.body.name;
    const description = req.body.description;
    await card_service.update_card(card_id, name, description);
    res.send("ok");
  } catch (error) {
    res.send("fatal error");
  }
});

//for login
app.post("/login", async (req, res) => {
  //generate
  const accesToken = jwt.sign({ email }, process.env.TOKEN_KEY || "sad12", {
    expiresIn: "1m",
  });

  //whenever we want to refresh our wbsite run these , the acces token neeeds to be stores in the front for later.
  const refreshToken = jwt.sign({ email }, process.env.TOKEN_KEY || "sad12", {
    expiresIn: "1m",
  });
});

//Register request
app.post("/register", async (req, res) => {
  try {
    if (
      validate.isPassword(req.body.password) &&
      validate.isEmail(req.body.email)

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
      //process to authenticate password this is just fror testing
      const pwd = crypto.pbkdf2Sync(
        req.body.password,
        salt,
        iterations,
        KEY_LENGTH,
        "sha256"
      );

      // const pwd = hashPwd(salt, req.body.password);
      //validating password
      if (pwd.toString("base64") === ecncrypted_password.toString("base64")) {
        console.log("VALIDATED ");
      }

      res.send(Http_Codes.OK);
    } else {
      res.send(Http_Codes["Bad Request"]);
    }
  } catch (error) {
    console.log(error);
    res.send("Error");
  }
});

app.delete("/cards", async (req, res) => {
  if (validate.isInteger(req.params.card_id)) {
    res.send("OK");
    await card_service.delete_Card();
  }

  res.send("FATALL ERROR INCORRECT VALUE");
});

app.post("/dasshboard/", (req, res) => {
  const user_id = req.body.user_id;
  const table_name = req.body.table_name;
  const table_desc = req.body.table_desc;

  //VALIDAR

  // .sql("CALL trellodb.create_board(?,?,?)")

  res.send("ok");
});

//respuestas de la pagina a los request//
//Respuesta//
*/

app.listen(port, () => {});

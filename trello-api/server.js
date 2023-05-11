const express = require("express");
const app = express();
const port = 3006;
const bodyParser = require("body-parser");
const pool = require("./database");
const board_service = require("./board_service");
const card_service = require("./cards_service");
const { IntegerType } = require("@mysql/xdevapi");
const validate = require("./validators/validators");
app.use(bodyParser.json());

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
  res.send("ok");
  for (const key in req.body) {
    console.log(req.body[key]);
    const body = req.body[key];
    const name = body.name;
    const description = body.description;
    const list_id = parseInt(body.list_id);
    const position = parseInt(body.position);
    card_service.add_card(name, description, list_id, position); //
  }
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
app.post("/dasshboard/", (req, res) => {
  const user_id = req.body.user_id;
  const table_name = req.body.table_name;
  const table_desc = req.body.table_desc;

  //VALIDAR

  // .sql("CALL trellodb.create_board(?,?,?)")

  res.send("HE");
});

//respuestas de la pagina a los request//
//Respuesta//

app.listen(port, () => {});

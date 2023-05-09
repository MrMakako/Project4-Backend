const express = require("express");
const app = express();
const port = 3006;
const bodyParser = require("body-parser");
const pool = require("./database");

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/boards", (req, res) => {
  //baords?user_id=1;
  //const user_id = req.query.user_id;
  const user_id = req.query.user_id;
  pool.query("CALL getBoards(?)", [parseInt(user_id)], function (err, results) {
    res.json(results);
  });
});

app.get("/cards", (req, res) => {
  //cards?board_id=1;
  //req.query.board.id
  const board_id = req.query.board_id;
  console.log(board_id);
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

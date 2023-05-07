const express = require("express");
const app = express();
const port = 3006;
const bodyParser = require("body-parser");
const client = require("./database");

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/boards", (req, res) => {
  //baords?user_id=1;
  //const user_id = req.query.user_id;
  const user_id = req.query.user_id;
  console.log(user_id);
  client.getSession().then((session) => {
    session
      .sql("CALL trellodb.getBoards(?)")
      .bind(parseInt(user_id))
      .execute()
      .then((result) => {
        res.json(result.fetchAll());
      });
  });
});

app.get("/cards", (req, res) => {
  //cards?board_id=1;
  //req.query.board.id
  const board_id = req.query.board_id;
  console.log(board_id);
  client.getSession().then((session) => {
    session
      .sql("CALL trellodb.getCards(?)")
      .bind(parseInt(board_id))
      .execute()
      .then((result) => {
        res.json(result.fetchAll());
      });
  });
});
////
app.post("/dasshboard/", (req, res) => {
  const user_id = req.body.user_id;
  const table_name = req.body.table_name;
  const table_desc = req.body.table_desc;

  //VALIDAR
  client.getSession().then((session) => {
    session
      .sql("CALL trellodb.create_board(?,?,?)")
      .bind(parseInt(user_id), table_name, table_desc)
      .execute();
  });

  res.send("HE");
});

//respuestas de la pagina a los request///

app.listen(port, () => {});

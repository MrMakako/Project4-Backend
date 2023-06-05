const board_service = require("../services/board_service");
const validate = require("../validators/validators");

async function createBoard(req, res) {
  const user_id = req.body.user_id;
  const table_name = req.body.table_name;
  const table_desc = req.body.table_desc;

  res.send("ok");
}

async function getBoards(req, res) {
  //baords?user_id=1;
  //const user_id = req.query.user_id;
  const user_id = req.user_id;
  console.log("user_id");
  console.log(user_id);
  if (validate.isInteger(user_id)) {
    const result = await board_service.get_boards(user_id);
    res.json(result[0]);
  } else {
    res.send("invalid input");
  }
}

module.exports = {
  getBoards,
  createBoard,
};

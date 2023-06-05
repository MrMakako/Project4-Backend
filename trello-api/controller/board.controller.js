const board_service = require("../services/board_service");
const validate = require("../validators/validators");
const Http_Codes = require("../utils/Http_Codes");
async function createBoard(req, res) {
  const user_id = req.user_id;
  const table_name = req.body[0].name;
  const table_desc = req.body[0].description;

  try {
    board_service.add_boards(user_id, table_name, table_desc);
    res.sendStatus(Http_Codes.CREATED);
  } catch (error) {
    res.sendStatus(Http_Codes.BAD_REQUEST);
  }
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

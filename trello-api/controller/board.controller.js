const board_service = require("../services/board_service");
const validate = require("../validators/validators");
const Http_Codes = require("../utils/Http_Codes");
async function createBoard(req, res) {
  const user_id = req.user_id;
  const table_name = req.body[0].name;
  const table_desc = req.body[0].description;

  try {
    board_service.addBoards(user_id, table_name, table_desc);
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
    const result = await board_service.getBoards(user_id);
    res.json(result[0]);
  } else {
    res.send("invalid input");
  }
}

async function deleteBoard(req, res) {
  const user_id = req.user_id;
  const board_id = req.headers["board_id"];
  console.log(user_id);
  console.log("Requesting deleteBoard");
  if (validate.isInteger(user_id) && validate.isInteger(board_id)) {
    board_service.deleteBoard(user_id, board_id);
    const result = await res.send("Ok").status(Http_Codes.OK);
  } else {
    res.send("invalid input").status(Http_Codes.NOT_FOUND);
  }
}

module.exports = {
  getBoards,
  createBoard,
  deleteBoard,
};

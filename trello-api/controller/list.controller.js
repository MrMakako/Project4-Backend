const list_service = require("../services/list_service");
const validate = require("../validators/validators");
const HTTP_CODES = require("../utils/Http_Codes");
const getLists = async (req, res) => {
  const board_id = parseInt(req.headers["board_id"]);

  console.log(board_id);
  if (validate.isInteger(board_id)) {
    const result = await list_service.get_lists(board_id);

    res.json(result[0]);
  } else {
    res.send("invalid input");
  }
};

const addList = async (req, res) => {
  try {
    console.log("Agregando Listas:", req.body);
    const listName = req.body.list_name;
    const boardId = req.body.board_id;

    list_service.add_list(listName, boardId);
    res.status(201).send("Operation Finished");
  } catch (error) {
    console.log(error);
    res.status(HTTP_CODES.BAD_REQUEST).send("May be the board doestn exist");
  }
};

const updateList = async (req, res) => {
  try {
    const list_name = req.body.list_name;
    const list_id = req.body.list_id;
    list_service.update_list(list_name, list_id);
    res.status(HTTP_CODES.OK).send("Operation Finished");
  } catch (error) {
    console.log(error);
    res
      .status(HTTP_CODES.INTERNAL_SERVER_ERROR)
      .send("May be the board doestn exist");
  }
};

module.exports = { getLists, addList, updateList };

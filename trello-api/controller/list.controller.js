const list_service = require("../services/list_service");
const validate = require("../validators/validators");

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

module.exports = { getLists };

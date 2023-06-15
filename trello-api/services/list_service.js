const pool = require("../database");

async function get_lists(board_id) {
  return await pool.query(
    "SELECT lists.id,lists.name FROM trellodb.lists where board_id=?",
    [board_id]
  );
}
module.exports = { get_lists };

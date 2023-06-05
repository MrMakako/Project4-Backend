const pool = require("../database");

async function get_boards(user_id) {
  const result = await pool.query("CALL getBoards(?)", [user_id]);

  return result;
}

async function add_boards(user_id, name, description) {
  const result = await pool.execute("CALL `trellodb`.`addTBoard`(?,?,?);", [
    user_id,
    name,
    description,
  ]);
}

module.exports = { get_boards, add_boards };

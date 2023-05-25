const pool = require("../database");

async function get_boards(user_id) {
  const result = await pool.query("CALL getBoards(?)", [user_id]);

  return result;
}

module.exports = { get_boards };

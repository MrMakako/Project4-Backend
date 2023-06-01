const pool = require("../database");

async function get_boards(email) {
  const result = await pool.query("CALL getBoards_email(?)", [email]);

  return result;
}

module.exports = { get_boards };

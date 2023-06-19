const pool = require("../database");

async function getBoards(user_id) {
  const result = await pool.query("CALL getBoards(?)", [user_id]);

  return result;
}

async function addBoards(user_id, name, description) {
  const result = await pool.execute(
    "INSERT INTO `trellodb`.`boards (`name`,`user_id`, `description`, `creation_date` )VALUES ( ?,?,? CURRENT_DATE );",
    [name, user_id, description]
  );
}

async function deleteBoard(user_id, board_id) {
  const result = await pool.execute(
    "DELETE FROM `trellodb`.`boards` b WHERE b.user_id= ? AND b.user_id= ?;",
    [user_id, board_id]
  );
}

module.exports = { getBoards, deleteBoard, addBoards };

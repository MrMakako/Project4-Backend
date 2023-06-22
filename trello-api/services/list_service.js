const pool = require("../database");

async function get_lists(board_id) {
  return await pool.query(
    "SELECT lists.id,lists.name FROM trellodb.lists where board_id=?",
    [board_id]
  );
}

async function add_list(list_name, board_id) {
  return await pool.execute(
    "INSERT INTO `trellodb`.`lists` (`name`, `board_id`) VALUES (?,?);",
    [list_name, board_id]
  );
}

async function update_list(list_name, list_id) {
  return await pool.execute(
    "UPDATE `trellodb`.`lists` SET `name` = ? WHERE `id` =?;",
    [list_name, list_id]
  );
}
module.exports = { get_lists, add_list, update_list };

const pool = require("./database");

async function delete_Card() {}

async function add_card(name, desc, list_id, position) {
  await pool.query("Call createCard(?,?,?,?)", [name, desc, list_id, position]);
}

async function update_card() {}

async function getCards(list_id) {
  const result = await pool.query("Call getCards(?)", [list_id]);
  return result;
}

module.exports = {
  getCards,
  add_card,
};

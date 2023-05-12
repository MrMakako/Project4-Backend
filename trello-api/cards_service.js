const pool = require("./database");

async function delete_Card() {}

async function add_card(name, desc, list_id, position) {
  console.log("card_inserted");
  await pool.query("Call createCard(?,?,?,?)", [name, desc, list_id, position]);
}

async function delete_All_Cards() {
  await pool.query("call deleteAllcards()");
}
async function delete_Card(card_id) {
  await pool.query("call deleteCard(?)", [card_id]);
}

async function update_card(card_id, name, description) {
  await pool.query("Call updateCard(?,?,?)", [card_id, name, description]);
}

async function getCards(board_id) {
  const result = await pool.query("Call getCards(?)", [board_id]);
  return result;
}

module.exports = {
  getCards,
  add_card,
  update_card,
  delete_All_Cards,
  delete_Card,
};

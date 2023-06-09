const pool = require("../database");

async function delete_Card() {}

async function add_card(name, desc, list_id, position) {
  console.log("card_inserted");
  await pool.query("Call createCard(?,?,?,?)", [name, desc, list_id, position]);
}

async function delete_All_Cards() {
  return await pool.query("call deleteAllcards()");
}
async function delete_Card(card_id) {
  await pool.query("call deleteCard(?)", [card_id]);
}

async function update_card(card_id, name, description) {
  await pool.query("Call updateCard(?,?,?)", [card_id, name, description]);
}

async function getCards(board_id) {
  const result = await pool.query(
    "SELECT c.id,c.name,c.description,c.list_id,c.position FROM trellodb.lists l INNER JOIN trellodb.cards c WHERE l.board_id=? AND l.id= c.list_id ORDER BY c.position;",
    [board_id]
  );
  return result;
}

module.exports = {
  getCards,
  add_card,
  update_card,
  delete_All_Cards,
  delete_Card,
};

const card_service = require("../services/cards_service");
const validate = require("../validators/validators");

const getCards = async (req, res) => {
  const board_id = parseInt(req.headers["board_id"]);
  console.log(board_id);
  if (validate.isInteger(board_id)) {
    const result = await card_service.getCards(board_id);
    res.json(result[0]);
  } else {
    res.send("invalid input");
  }
};
const deleteCard = async (req, res) => {
  console.log(req.body);
  if (validate.isInteger(req.body.card_id)) {
    await card_service.delete_Card(req.body.card_id);
    res.send("OK");
  } else {
    res.send("FATALL ERROR INCORRECT VALUE");
  }
};

const updateCards = async (req, res) => {
  try {
    const card_id = req.body.id;
    const name = req.body.name;
    const description = req.body.description;
    await card_service.update_card(card_id, name, description);
    res.send("ok");
  } catch (error) {
    res.send("fatal error");
  }
};
const addCards = async (req, res) => {
  // const card = req.body;
  // card.name
  try {
    // await card_service.delete_All_Cards();
    for (const key in req.body) {
      console.log(req.body[key]);
      const body = req.body[key];
      const name = body.name;
      const description = body.description;
      const list_id = parseInt(body.list_id);
      const position = parseInt(body.position);
      await card_service.add_card(name, description, list_id, position); //
    }
    res.send(card_service.getCards(1));
  } catch (error) {}
};

module.exports = {
  getCards,
  addCards,
  updateCards,
  deleteCard,
};

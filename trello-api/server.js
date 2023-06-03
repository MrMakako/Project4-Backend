const express = require("express");
const app = express();
const port = 3006;
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const cors = require("cors");

app.use(cors());

const cardRouter = require("./routes/card.routes");
const boardRouter = require("./routes/board.routes");
const userRouter = require("./routes/user.routes");

app.use("/cards", cardRouter);
app.use("/boards", boardRouter);
app.use("/user", userRouter);

app.listen(port, () => {});

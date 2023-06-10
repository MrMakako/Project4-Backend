const express = require("express");
const app = express();
const port = 3006;
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const cors = require("cors");
const { verify_jwt } = require("./validators/verify.jwt");
app.use(cors());

const cardRouter = require("./routes/card.routes");
const boardRouter = require("./routes/board.routes");
const userRouter = require("./routes/user.routes");
const refreshRouter = require("./routes/refresh.routes");

app.use("/user", userRouter);
//verify will execute before going to routes below
app.use("/jwt", refreshRouter);
app.use(verify_jwt);

app.use("/cards", cardRouter);
app.use("/boards", boardRouter);

app.listen(port, () => {});

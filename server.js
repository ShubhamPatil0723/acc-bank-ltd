import express from "express";
import * as Router from "./routes/index.js";
import { sequelizeConnect } from "./config/sequelizeConfig.js";

const { PORT, SEQUELIZE_CONNECTION } = process.env;
const app = new express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", Router.transactionRouter);

if (SEQUELIZE_CONNECTION === "yes") {
  sequelizeConnect();
}

app.listen(PORT, () => {
  console.log(`Listening at ${PORT}`);
});

export { app };

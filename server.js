import express from "express";
import * as Router from "./routes/index.js";
import { sequelizeConnect } from "./config/sequelizeConfig.js";
import { errorHandler } from "./middleware/errorHandler.js";
const { PORT, SEQUELIZE_CONNECTION, BASE_ROUTE } = process.env;

const app = new express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(`${BASE_ROUTE}/`, Router.customerRouter);
app.use(`${BASE_ROUTE}/`, Router.transactionRouter);

app.use(errorHandler);

if (SEQUELIZE_CONNECTION === "yes") {
  sequelizeConnect();
}

app.listen(PORT, () => {
  console.log(`Listening at ${PORT}`);
});

export { app };

import express from "express";
import * as Router from "./routes/index.js";
import { sequelizeConnect } from "./config/sequelizeConfig.js";
import { errorHandler } from "./middleware/errorHandler.js";
const { PORT, SEQUELIZE_CONNECTION, BASE_ROUTE } = process.env;


const app = express()

app.use(`${BASE_ROUTE}/`, Router.customerRouter);
app.use(`${BASE_ROUTE}/`, Router.transactionRouter);
app.use(`${BASE_ROUTE}/`, Router.reportRouter);
app.use(errorHandler);

if (SEQUELIZE_CONNECTION === "yes") {
  sequelizeConnect();
}

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})
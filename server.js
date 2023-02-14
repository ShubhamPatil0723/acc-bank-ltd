import express from "express";
import customerRoutes from "./routes/customerRoutes.js";
import { sequelizeConnect } from "./config/sequelizeConfig.js";
import { errorHandler } from "./middleware/errorHandler.js";
const { PORT, SEQUELIZE_CONNECTION, BASE_ROUTE } = process.env;
//const PORT = 3000;
const app = new express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(`${BASE_ROUTE}/customerDetails`, customerRoutes);
app.use(errorHandler);
if (SEQUELIZE_CONNECTION === "Y") {
  sequelizeConnect();
}

app.get("/", (req, res) => res.send("homepage"));
app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));

export { app };

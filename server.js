import express from "express";
// import { Router } from "./routes/index.js";
// import { sequelizeConnect } from "./config/seqeulizeConfig.js";

const { PORT, SEQUELIZE_CONNECTION } = process.env;
const app = new express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use("/", Router);

// if (SEQUELIZE_CONNECTION === "Y") {
//   sequelizeConnect();
// }

app.listen(PORT, () => {
  console.log(`Listening at ${PORT}`);
});

export { app };

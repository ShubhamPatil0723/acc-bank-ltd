import { Sequelize, DataTypes } from "sequelize";
import { generateModels } from "./generateModels.js";

const db = {};
const databaseName = "accbank";

const sequelizeInit = new Sequelize(databaseName, "root", "root", {
  host: "localhost",
  dialect: "mysql",

  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

db.models = generateModels(sequelizeInit, DataTypes);

db.sequelizeInit = sequelizeInit;
db.Sequelize = Sequelize;

export default db;

import { Sequelize, DataTypes } from "sequelize";
import { cdbConfig } from "../config/customerDbConfig.js";
import {
  AccountType,
  CustomerDetails,
} from "./customerControl/customerModel.js";
import { generateModel } from "./generateModels.js";

const env = process.argv[2];
const sequelize = new Sequelize(
  cdbConfig[env].DB,
  cdbConfig[env].USER,
  cdbConfig[env].PASSWORD,
  {
    host: cdbConfig[env].HOST,
    dialect: cdbConfig[env].dialect,

    operatorsAliases: false,
    pool: {
      max: cdbConfig[env].pool.max,
      min: cdbConfig[env].pool.min,
      acquire: cdbConfig[env].pool.acquire,
      idle: cdbConfig[env].pool.idle,
    },
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//db.users = User(sequelize, DataTypes); for user db
// db.custdetail = CustomerDetails(sequelize, DataTypes); //for Customer details
// db.accounttype = AccountType(sequelize, DataTypes); //for account type ID

db.models = generateModel(sequelize, DataTypes);

db.sequelize.sync({ force: false }).then(() => {
  console.log("resync");
});

export default db;

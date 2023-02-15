import { Sequelize, DataTypes } from "sequelize";
import { cdbConfig } from "../config/customerDbConfig.js";
import { generateModels } from "./generateModels.js";

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

db.models = generateModels(sequelize, DataTypes);

// db.customers.hasMany(db.Transaction, {
//     foreignKey: 'customer_id'
    
// })

// db.Transaction.belongsTo(db.customers, {
//     foreignKey: 'customer_id'
   
// })

export default db;

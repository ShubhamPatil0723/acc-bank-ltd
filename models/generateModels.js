import { Transactions } from "./transactions/Transaction.js";

const models = {};

export const generateModels = (sequelize, DataTypes) => {
  models.Transactions = Transactions(sequelize, DataTypes);
  return models;
};

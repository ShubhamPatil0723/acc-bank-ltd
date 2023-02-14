import * as CustomerModel from "./customerControl/customerModel.js";
import * as TransactionModel from "./transactions/Transaction.js";

const models = {};

export const generateModels = (sequelize, DataTypes) => {
  models.Transactions = TransactionModel.Transactions(sequelize, DataTypes);
  models.custdetail = CustomerModel.CustomerDetails(sequelize, DataTypes);
  models.accounttype = CustomerModel.AccountType(sequelize, DataTypes);

  models.custdetail.hasOne(models.accounttype, { foreignKey: "id" });
  models.accounttype.belongsTo(models.custdetail, { foreignKey: "id" });
  return models;
};

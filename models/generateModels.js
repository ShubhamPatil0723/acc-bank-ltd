import { CustomerDetails } from "./customerControl/customerModel.js";
import { Transactions } from "./transactions/Transaction.js";

const models = {};

export const generateModels = (sequelize, DataTypes) => {
  models.Transactions = Transactions(sequelize, DataTypes);
  models.custdetail = CustomerDetails(sequelize, DataTypes);
  models.accounttype = CustomerDetails(sequelize, DataTypes);

  models.custdetail.hasOne(models.accounttype, { foreignKey: "id" });
  models.accounttype.belongsTo(models.custdetail, { foreignKey: "id" });
  return models;
};

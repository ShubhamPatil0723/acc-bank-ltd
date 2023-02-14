import { CustomerDetails } from "./customerControl/customerModel.js";

const models = {};
export const generateModel = (sequelize, DataTypes) => {
  models.custdetail = CustomerDetails(sequelize, DataTypes);
  models.accounttype = CustomerDetails(sequelize, DataTypes);

  models.custdetail.hasOne(models.accounttype, { foreignKey: "id" });
  models.accounttype.belongsTo(models.custdetail, { foreignKey: "id" });

  return models;
};

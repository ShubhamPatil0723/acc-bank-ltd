// import { Sequelize } from "sequelize";

const tableName = "transactions";

export const Transactions = (sequelizeInit, DataTypes) => {
  const modelName = sequelizeInit.define(tableName, {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    transaction_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    balance: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    transaction_status: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });

  modelName.associate = (models) => {
    // Define associations
    // modelName.hasOne()
  };
  return modelName;
};

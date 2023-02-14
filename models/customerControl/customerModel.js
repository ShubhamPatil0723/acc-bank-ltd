export const CustomerDetails = (sequelize, DataTypes) => {
  const CustomerDetails = sequelize.define("customerDetails", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    full_Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNo: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    addhar_Card: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pan_Card: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    account_type_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }, //demat,savings,salary
    account_Number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Balance: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    kyc_Status: {
      type: DataTypes.STRING,
    },
  });
  return CustomerDetails;
};

//account type table

export const AccountType = (sequelize, DataTypes) => {
  const AccountType = sequelize.define("AccountType", {
    account_Type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return AccountType;
};

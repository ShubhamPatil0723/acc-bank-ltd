import db from "../../models/index.js";
const CustomerInfo = db.models.custdetail;

export const generateSerialNumber = () => {
  const year = new Date().getFullYear();
  const randomNumber = Math.floor(Math.random() * 1000);
  return `ACC${year}${randomNumber}`;
};

const serialNumber = generateSerialNumber();
console.log(serialNumber);

export const getAllCustomers = async (limit) => {
  const allUsers = await CustomerInfo.findAll({
    limit: parseInt(limit),
    offset: 2,
  });
  return allUsers;
};

export const deleteCustomerByAC = async (an) => {
  const deletee = await CustomerInfo.destroy({
    where: { account_Number: an },
  });
  console.log(deletee);
  return deletee;
};

export const updateCustomerByAC = async (an, custUpdate) => {
  const update = await CustomerInfo.update(custUpdate, {
    where: { account_Number: an },
  });
  console.log(update);
  return update;
};

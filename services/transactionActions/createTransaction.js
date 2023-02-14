import db from "../../models/index.js";

export const createTransaction = async (
  transaction_id,
  customer_id,
  amount,
  balance,
  transaction_status
) => {
  const transactionObj = {
    transaction_id,
    customer_id,
    amount,
    balance,
    transaction_status,
  };

  const transactionInstance = await db.models.Transactions.create(
    transactionObj
  );
  return transactionInstance;
};

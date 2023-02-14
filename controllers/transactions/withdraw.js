import * as transactionActions from "../../services/transactionActions/index.js";
export const withdraw = async (req, res) => {
  // Fetch these values
  const balance = 100;
  const customer_id = 1;
  const account_no = 12;

  const { withdrawAmt } = req.body;
  const { accountNo } = req.params;

  // Verify whether routed params and accountno is getting accessed by authorized person
  //Check KYC
  if (balance < withdrawAmt && withdrawAmt <= 0) {
    return res.status(400).json({
      requestPrams: {
        ...req.body,
        accountNo,
      },
    });
  }

  const newBalance = balance - withdrawAmt;

  transactionActions.createTransaction(1, 1, withdrawAmt, newBalance, true);
  try {
    return res.status(200).send("Transaction successfull");
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

import db from "../../models/index.js";

import { v4 as uuidv4 } from "uuid";
import { logger } from "../../middleware/logger.js";
import { generateSerialNumber } from "../../services/customerServices/customerAdminServices.js";
import { emailSend } from "../../utils/emailSend.js";

const CustomerInfo = db.models.custdetail;

export const postCustomerDetails = async (req, res) => {
  try {
    const account_Number_gen = generateSerialNumber();
    const kyc_Statuss = "Pending";
    var email2 = req.body.email;
    var phno2 = req.body.phoneNo;
    var CurEmail = await CustomerInfo.findOne({ where: { email: email2 } });
    var CurPhno = await CustomerInfo.findOne({ where: { phoneNo: phno2 } });
    if (CurEmail || CurPhno) {
      return res.status(500).json({ reason: "email or phone already exist" });
    }
    if (req.body.Balance <= 1000) {
      return res.status(500).json({ reason: "need minimum 1000 rs" });
    } else {
      let customerInf = {
        id: req.body.id,
        full_Name: req.body.full_Name,
        age: req.body.age,
        gender: req.body.gender,
        email: req.body.email,
        phoneNo: req.body.phoneNo,
        address: req.body.address,
        addhar_Card: req.body.addhar_Card,
        pan_Card: req.body.pan_Card,
        account_type_ID: req.body.account_type_ID,
        account_Number: account_Number_gen,
        Balance: req.body.Balance,
        kyc_Status: kyc_Statuss,
      };
      const cInfo = await CustomerInfo.create(customerInf);
      console.log(cInfo);
      const emaill = req.body.email;
      console.log(emaill);
      const mailOpt = {
        from: "accBank@gmail.com",
        to: emaill,
        subject: "Welcomme to ACC bank",
        text: "Once KYC is done you will be elligible to perform transactions",
      };
      emailSend(mailOpt);
      return res.status(200).json({ cInfo });
    }
    //MERGE
  } catch (error) {
        logger.error("Error in PostCustomerDetails");

    return res.status(400).json(error);
  }
};

export const getCUstomerDetailsByAccountNummber = async (req, res) => {
  const an = req.params.an;
  let cust = await CustomerInfo.findOne({
    where: { account_Number: an },
  });

  return res.json({ Welcome: cust });
};

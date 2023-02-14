import db from "../../models/index.js";
import { v4 as uuidv4 } from "uuid";
import { logger } from "../../middleware/logger.js";
import {
  deleteCustomerByAC,
  generateSerialNumber,
  getAllCustomers,
  updateCustomerByAC,
} from "../../services/customerServices/customerAdminServices.js";

const CustomerInfo = db.models.custdetail;

export const UpdateCUstomerDetailsByAccountNummber = async (req, res) => {
  const an = req.params.an;
  console.log(an);

  try {
    updateCustomerByAC(an, req.body);

    res.status(200).json({
      Updated: an,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const DeleteCUstomerDetailsByAccountNummber = async (req, res) => {
  try {
    let an = req.params.an;
    deleteCustomerByAC(an);
    res.status(200).json({
      Deleted: an,
    });
  } catch (error) {
    res.status(400).json({ error: "..." });
  }
};
export const GetCUstomerDetails = async (req, res) => {
  try {
    const limit = req.query.limit;
    const offset = req.query.offset;
    let cust = await getAllCustomers(limit);
    res.status(200).json({
      Result: cust,
    });
  } catch (error) {
    res.status(400).json({ error });
  }
};

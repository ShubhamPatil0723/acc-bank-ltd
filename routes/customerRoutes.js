import express from "express";
import { v4 as uuidv4 } from "uuid";
import * as Controllers from "../controllers/index.js";
import {
  getCUstomerDetailsByAccountNummber,
  postCustomerDetails,
} from "../controllers/customerControllers/customerControllers.js";
const customerRouter = express.Router();

//routes starting with /customerDetails

//for users
// postCustomer
customerRouter.post("/customerDetails/formFill", Controllers.postCustomerDetails);
//getCustomer with ID
customerRouter.get("/customerDetails/:an", Controllers.getCUstomerDetailsByAccountNummber);

//for admin

//getCustomer
customerRouter.get(
  "/admin/:an",
  Controllers.getCUstomerDetailsByAccountNummber
);
//deleteCustomer
customerRouter.delete(
  "/admin/:an",
  Controllers.DeleteCUstomerDetailsByAccountNummber
);
//updateCustomer
customerRouter.put(
  "/admin/update/:an",
  Controllers.UpdateCUstomerDetailsByAccountNummber
);
//getAllCustomer
customerRouter.get("/adminn", Controllers.GetCUstomerDetails);

export { customerRouter };

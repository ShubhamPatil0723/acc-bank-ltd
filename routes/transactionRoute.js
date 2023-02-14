import express from "express";
import * as Controllers from "../controllers/index.js";

export const transactionRouter = express.Router();

transactionRouter.post("/withdraw/:accountNo", Controllers.withdraw);

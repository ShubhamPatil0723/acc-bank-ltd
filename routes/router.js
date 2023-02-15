// import controllers 
//import report from '../controllers/report.js'
import {getReport} from '../controllers/reportControllers/report.js'
import * as controllers from "../controllers/index.js"
import express  from 'express'
// router
export const reportRouter = express.Router()


// use routers

// router.get('/report', getReport);
reportRouter.get('/report',controllers.getReport);


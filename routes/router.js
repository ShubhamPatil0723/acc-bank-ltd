// import controllers 
//import report from '../controllers/report.js'
import {getReport} from '../controllers/report.js'
import express  from 'express'
// router
export const router = express.Router()


// use routers

// router.get('/report', getReport);
router.get('/report', getReport);


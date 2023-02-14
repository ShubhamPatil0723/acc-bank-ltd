import {dbConfig} from '../config/dbConfig.js';

import { Sequelize, DataTypes } from 'sequelize';
import { Transaction } from './Transaction.js';
import { Customer } from './Customer.js';
//const Transaction = require('./Transaction.js');
//const tableName=Transaction
const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,

        pool: {
            max: 
            dbConfig.pool.max,
            min:dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle

        }
    }
)

sequelize.authenticate()
.then(() => {
    console.log('connected..')
})
.catch(err => {
    console.log('Error'+ err)
})

export const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.Transaction = Transaction(sequelize, DataTypes)
db.customers = Customer(sequelize, DataTypes)

db.sequelize.sync({ force: false })
.then(() => {
    console.log('yes re-sync done!')
})



// 1 to Many Relation

db.customers.hasMany(db.Transaction, {
    foreignKey: 'customer_id'
    
})

db.Transaction.belongsTo(db.customers, {
    foreignKey: 'customer_id'
   
})

//module.exports ={db}

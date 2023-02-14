//tableName='Transaction'
export const Transaction= (sequelize, DataTypes) => {
   

    const Transaction = sequelize.define("Transaction", {
        Transaction_id: {
            type: DataTypes.INTEGER,
            allowNull:false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        amount: {//+ or -ve to show that is amount incremented or deducted
            type: DataTypes.INTEGER,
            allowNull:false
        },
        balance: {
            type: DataTypes.INTEGER,
            allowNull:false
        },
        Transaction_status: {
            type: DataTypes.TEXT,
            allowNull:false
        }
    })
    
    return Transaction;

}
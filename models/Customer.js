//tableName='customers'
export const Customer =(sequelize, DataTypes) => {
   

    const Customer = sequelize.define("customer", {
        customer_id: {
            type: DataTypes.INTEGER,
            allowNull:false
        },
        fullname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        age: {//+ or -ve to show that is amount incremented or deducted
            type: DataTypes.INTEGER,
            allowNull:false
        },
        genderID: {
            type: DataTypes.INTEGER,
            allowNull:false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull:false
        }
    })
    
    return Customer;

}

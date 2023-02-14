export const dbConfig= {
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: '',
    DB: 'acc_Bank',
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}
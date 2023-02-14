import dotenv from "dotenv";
dotenv.config();
export const cdbConfig = {
  development: {
    HOST: process.env.DEVELOPMENT_HOST,
    USER: process.env.DEVELOPMENT_USER,
    PASSWORD: process.env.DEVELOPMENT_PASSWORD,
    DB: process.env.DEVELOPMENT_DB,
    dialect: process.env.DEVELOPMENT_DIALECT,

    pool: {
      max: parseInt(process.env.DEVELOPMENT_MAX) || 5,
      min: parseInt(process.env.DEVELOPMENT_MIN) || 0,
      acquire: parseInt(process.env.DEVELOPMENT_ACQUIRE) || 30000,
      idle: parseInt(process.env.DEVELOPMENT_IDLE) || 10000,
    },
  },
};

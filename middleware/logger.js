import { createLogger, format, transports } from "winston";
export const logger = createLogger({
  level: "debug",
  format: format.json(),
  transports: [
    new transports.File({
      filename: "D:/ACC Node/Adwait Acc/acc-bank-ltd/logs/error.log",
      level: "error",
    }),
  ],
});

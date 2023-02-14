import dotenv from "dotenv";

dotenv.config();

const requiredVars = [
  "PORT",
  "DEVELOPMENT_HOST",
  "DEVELOPMENT_USER",
  "DEVELOPMENT_PASSWORD",
  "DEVELOPMENT_DB",
  "DEVELOPMENT_DIALECT",
  "BASE_ROUTE",
  "DEVELOPMENT_MAX",
  "DEVELOPMENT_MIN",
  "DEVELOPMENT_ACQUIRE",
  "DEVELOPMENT_IDLE",
];
const unusedEnvVar = requiredVars.filter((variable) => !process.env[variable]);

if (unusedEnvVar.length) {
  console.log(`Please set these required variables ${unusedEnvVar}`);
}

import("./server.js");

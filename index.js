import dotenv from "dotenv";

dotenv.config();

const requiredVars = ["PORT", "NODE_ENV", "BASE_ROUTE"];
const unusedEnvVar = requiredVars.filter((variable) => !process.env[variable]);

if (unusedEnvVar.length) {
  console.log(`Please set these required variables ${unusedEnvVar}`);
}

import("./server.js");

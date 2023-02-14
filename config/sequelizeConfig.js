import model from "../models/index.js";

export const sequelizeConnect = () => {
  model.sequelizeInit
    .sync({
      alter: true,
      logging: false,
    })
    .then(() => {
      console.log("MYSQL BOOTSTRAP :: SUCCESS");
    })
    .catch((error) => {
      console.error(`Error connecting to database :: ${JSON.stringify(error)}`);
    });
};

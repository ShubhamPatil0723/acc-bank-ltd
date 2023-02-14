import nodemailer from "nodemailer";
export const emailSend = (mailOps) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "appliedccbank@gmail.com",
      pass: "gmjwssjnuigjxctn",
    },
  });

  transporter.sendMail(mailOps, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent" + info.response);
    }
  });
};

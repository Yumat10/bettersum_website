const sgMail = require("@sendgrid/mail");
console.log("process.env.SENDGRID_API_KEY...", process.env.SENDGRID_API_KEY);
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default sgMail;

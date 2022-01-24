import { NextApiRequest, NextApiResponse } from "next";
import sgMail from "./sendGridConfig";
import { SendEmailData } from "types/SendEmailData";

enum TemplateTypes {
  ContactTeam = "contactTeam",
}

export const sendEmail = ({
  emailAddress,
  templateData,
  template,
}: SendEmailData) =>
  new Promise<void>(async (resolve, reject) => {
    try {
      // Get the right template Id
      let templateId = "";

      switch (template) {
        case TemplateTypes.ContactTeam:
          templateId = "d-224e5a8aab5c4ab6bee5c5649d59a1df";
          break;
        default:
          return reject("Email template not found");
      }

      const msg = {
        to: "team@rangr.org",
        from: {
          email: "yuma@rangr.org",
        },
        dynamic_template_data: { ...templateData },
        template_id: templateId,
      };
      console.log("sending email...", template, msg);

      //Send email
      await sgMail.send(msg);

      console.log("Mail sent!...", "account created...", emailAddress);

      return resolve();
    } catch (err) {
      console.log(err);
      return reject(err);
    }
  });

const sendEmailFunc = async (
  req: NextApiRequest,
  res: NextApiResponse<void | { error: string }>
) => {
  console.log("---sendEmail---");

  //   try {
  //     await fbAuth(req, res, uid);
  //   } catch (err) {
  //     console.log(err);
  //     return res.status(err.status).json({ error: err.message });
  //   }

  try {
    await sendEmail({ ...req.body });
    return res.status(200).json();
  } catch (err) {
    const error = JSON.stringify(err);
    console.log(err);
    return res.status(500).json({ error });
  }
};

export default sendEmailFunc;

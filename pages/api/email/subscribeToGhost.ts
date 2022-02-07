// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ghostAdmin } from "lib/ghost";
import type { NextApiRequest, NextApiResponse } from "next";

const subscribeToGhost = async (
  req: NextApiRequest,
  res: NextApiResponse<void | { error: string }>
) => {
  const { email }: { email: string } = req.body;

  try {
    await ghostAdmin.members.add(
      {
        email,
      }
      //   { send_email: true, email_type: "subscribe" }
    );
    return res.status(200).json();
  } catch (err: object | any) {
    console.log(err);
    if (
      err.context ===
      "Member already exists Attempting to add member with existing email address."
    ) {
      return res.status(400).json({ error: "Email has already been added :)" });
    } else {
      const error = JSON.stringify(err);
      return res.status(500).json({ error });
    }
  }
};

export default subscribeToGhost;

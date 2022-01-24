import { Prisma } from "@prisma/client";
import prisma from "lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const subscribeToNewsletter = async (
  req: NextApiRequest,
  res: NextApiResponse<void | { error: string }>
) => {
  const { email } = req.body;

  try {
    await prisma.emails.create({
      data: {
        email,
      },
    });
    return res.status(200).json();
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      if (err.code === "P2002") {
        return res.status(400).json({ error: `Email has already been added` });
      }
    }
    console.log(err);
    const error = JSON.stringify(err);
    return res.status(500).json({ error });
  }
};

export default subscribeToNewsletter;

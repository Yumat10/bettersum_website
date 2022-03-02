import { NextApiRequest, NextApiResponse } from "next";

const setPreview = async (
  req: NextApiRequest,
  res: NextApiResponse<void | { error: string }>
) => {
  console.log("---sendEmail---");

  const { route, secret } = req.query;

  if (secret !== process.env.PREVIEW_TOKEN || !route) {
    return res.status(401).json({ error: "Invalid token" });
  }

  try {
    res.setPreviewData({});

    res.redirect(`${route}`);

    return res.status(200).json();
  } catch (err) {
    const error = JSON.stringify(err);
    console.log(err);
    return res.status(500).json({ error });
  }
};

export default setPreview;

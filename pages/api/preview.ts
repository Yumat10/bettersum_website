import { NextApiRequest, NextApiResponse } from "next";

const setPreview = async (
  req: NextApiRequest,
  res: NextApiResponse<void | { error: string }>
) => {
  console.log("---setPreview---");

  const { route, secret } = req.query;

  if (secret !== process.env.PREVIEW_TOKEN || !route) {
    return res.status(401).json({ error: "Invalid token" });
  }

  try {
    res.setPreviewData({});

    return res.redirect(`${route}`);
  } catch (err) {
    const error = JSON.stringify(err);
    console.log(err);
    return res.status(500).json({ error });
  }
};

export default setPreview;

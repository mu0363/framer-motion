import { NextApiRequest, NextApiResponse } from "next";
// import { PER_PAGE } from "@libs/constant";
// import { pagesRange } from "@libs/function";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.query.secret !== process.env.REVALIDATE_SECRET_TOKEN) {
    return res.status(401).json({ message: "Invalid token" });
  }

  try {
    const { _id } = req.body;
    // const numArray = pagesRange(1, Math.ceil(data.total / PER_PAGE));
    // const paths = numArray.map((number) => `/article/page/${number}`);
    // eslint-disable-next-line no-return-await
    // Promise.all(paths.map(async (path) => await res.revalidate(path)));
    await res.revalidate(`/article/${_id}`);

    return res.json({ revalidated: true });
  } catch (err) {
    return res.status(500).send("Error revalidating");
  }
};

export default handler;

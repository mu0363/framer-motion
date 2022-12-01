import { z } from "zod";
import type { NextApiRequest, NextApiResponse, NextApiHandler } from "next";
import { PER_PAGE } from "@libs/constant";
import { pagesRange } from "@libs/function";
import { newtClient } from "@libs/newtClient";
import { ArticleType } from "@types";

const requestData = z.object({
  body: z.object({ _id: z.string().min(1) }),
  headers: z.object({ secret: z.literal(process.env.REVALIDATE_SECRET_TOKEN) }),
});

const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const parsedRequest = requestData.parse(req);
    const { _id } = parsedRequest.body;
    const { total } = await newtClient.getContents<ArticleType>({
      appUid: process.env.NEWT_APP_UID,
      modelUid: process.env.NEWT_ARTICLE_UID,
      query: {
        select: ["_id"],
        limit: 1,
      },
    });
    const numArray = pagesRange(1, Math.ceil(total / PER_PAGE));
    const paths = numArray.map((number) => `/article/page/${number}`);
    // eslint-disable-next-line no-return-await
    Promise.all(paths.map(async (path) => await res.revalidate(path)));
    await res.revalidate(`/article/${_id}`);

    return res.json({ revalidated: true });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(500).send(`${err.message}`);
    }
    return res.status(500).send("Error revalidating");
  }
};

export default handler;

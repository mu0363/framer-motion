import type { NextApiRequest, NextApiResponse } from "next";
import { getArticleBySlug } from "src/libs/newtClient";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // secretを検証する、slugパラメータの有無を検証する
  if (req.query.secret !== process.env.PREVIEW_SECRET || !req.query.slug) {
    return res.status(401).json({ message: "Invalid token" });
  }

  // slugと対応するコンテンツがあるか検証する
  const news = await getArticleBySlug(`${req.query.slug}`, true);
  if (!news) {
    return res.status(401).json({ message: "Invalid slug" });
  }

  // Cookieを設定し、プレビューモードを有効にする
  res.setPreviewData({});

  // 取得した情報からパスを指定してリダイレクトする
  res.redirect(`/news/${news.slug}`);

  return null;
};

export default handler;

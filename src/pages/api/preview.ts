// FIXME:
/* eslint-disable consistent-return */
import type { NextApiRequest, NextApiResponse } from "next";
import { getArticleById } from "src/libs/newtClient";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // secretを検証する、idパラメータの有無を検証する
  if (req.query.secret !== process.env.PREVIEW_SECRET || !req.query.id) {
    return res.status(401).json({ message: "Invalid token" });
  }

  // idと対応するコンテンツがあるか検証する
  const news = await getArticleById(`${req.query.id}`, true);
  if (!news) {
    return res.status(401).json({ message: "Invalid id" });
  }

  // Cookieを設定し、プレビューモードを有効にする
  res.setPreviewData({});

  // 取得した情報からパスを指定してリダイレクトする
  res.redirect(`/news/${news._id}`);
};

export default handler;

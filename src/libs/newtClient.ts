import { createClient } from "newt-client-js";
import { NewsType } from "src/types";

// Newt CDN APIのクライアント（公開コンテンツのみ取得）
export const newtClient = createClient({
  spaceUid: process.env.NEWT_SPACE_UID || "",
  token: process.env.NEWT_CDN_API_KEY || "",
  apiType: "cdn",
});

// Newt APIのクライアント（全コンテンツ取得）
const newtApiClient = createClient({
  spaceUid: process.env.NEWT_SPACE_UID || "",
  token: process.env.NEWT_API_KEY || "",
  apiType: "api",
});

export async function getArticleBySlug(
  slug: string,
  preview: boolean
): Promise<NewsType | null> {
  const client = preview ? newtApiClient : newtClient;
  const news = await client.getFirstContent<NewsType>({
    appUid: process.env.NEWT_APP_UID,
    modelUid: process.env.NEWT_ARTICLE_UID,
    query: { slug },
  });
  return news;
}

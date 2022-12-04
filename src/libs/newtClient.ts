import { createClient } from "newt-client-js";

// Newt CDN APIのクライアント（公開コンテンツのみ取得）
export const newtClient = createClient({
  spaceUid: process.env.NEWT_SPACE_UID || "",
  token: process.env.NEWT_CDN_API_KEY || "",
  apiType: "cdn",
});

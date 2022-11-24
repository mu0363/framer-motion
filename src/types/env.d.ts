declare namespace NodeJS {
  interface ProcessEnv {
    readonly NEWT_API_KEY: string;
    readonly NEWT_CDN_API_KEY: string;
    readonly NEWT_PREVIEW_SECRET: string;
    readonly NEWT_SPACE_UID: string;
    readonly NEWT_APP_UID: string;
    readonly NEWT_ARTICLE_UID: string;
  }
}

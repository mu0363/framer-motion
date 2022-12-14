declare namespace NodeJS {
  interface ProcessEnv {
    readonly NEWT_CDN_API_KEY: string;
    readonly NEWT_SPACE_UID: string;
    readonly NEWT_ARTICLE_APP_UID: string;
    readonly NEWT_QA_APP_UID: string;
    readonly NEWT_QA_APP_Q_AND_A_UID: string;
    readonly NEWT_ARTICLE_UID: string;
    readonly NEWT_CATEGORY_UID: string;
    readonly REVALIDATE_SECRET_TOKEN: string;
    readonly NEXT_PUBLIC_RECAPTCHA_CLIENT_KEY: string;
    readonly RECAPTCHA_SERVER_SECRET_KEY: string;
    readonly NEXT_PUBLIC_EMAIL_ENDPOINT: string;
    readonly SENDGRID_API_KEY: string;
    readonly MAIL_TO: string;
    readonly MAIL_FROM: string;
  }
}

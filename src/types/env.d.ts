declare namespace NodeJS {
  interface ProcessEnv {
    readonly NEWT_API_KEY: string;
    readonly NEWT_CDN_API_KEY: string;
    readonly NEWT_PREVIEW_SECRET: string;
    readonly NEWT_SPACE_UID: string;
    readonly NEWT_APP_UID: string;
    readonly NEWT_ARTICLE_UID: string;
    readonly NEWT_CATEGORY_UID: string;
    readonly REVALIDATE_SECRET_TOKEN: string;
    readonly NEXT_PUBLIC_RECAPTCHA_CLIENT_KEY: string;
    readonly RECAPTCHA_SERVER_SECRET_KEY: string;
    readonly NEXT_PUBLIC_SPACE_UID: string;
    readonly NEXT_PUBLIC_CONTACT_FORM_UID: string;
    readonly NEXT_PUBLIC_EVENT_FORM_UID: string;
    readonly NEXT_PUBLIC_MEMBERSHIP_FORM_UID: string;
  }
}

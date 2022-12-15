import { DefaultSeoProps } from "next-seo";

const config: DefaultSeoProps = {
  defaultTitle: "デフォルトのタイトル",
  description: "デフォルトの説明",
  openGraph: {
    type: "website",
    title: "デフォルトのタイトル",
    description: "デフォルトの説明",
    siteName: "JAAC",
    url: "https://framer-motion-sigma.vercel.app/",
    locale: "ja_JP",
  },
  twitter: {
    handle: "@JAAC",
    site: "@JAAC",
    cardType: "summary",
  },
};

export default config;

/* eslint-disable camelcase */
import "../styles/globals.css";
import { MantineProvider } from "@mantine/core";
import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";
import Head from "next/head";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import SEO from "../../next-seo.config";
import { GoogleAnalytics, usePageView } from "@libs/gtag";

const MyApp = ({ Component, pageProps }: AppProps) => {
  usePageView();

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <GoogleReCaptchaProvider
        reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_CLIENT_KEY}
        language="ja"
      >
        <div>
          <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{
              colorScheme: "light",

              // fontFamily: "Zen Maru Gothic",
            }}
          >
            <GoogleAnalytics />
            <DefaultSeo {...SEO} />
            <Component {...pageProps} />
          </MantineProvider>
        </div>
      </GoogleReCaptchaProvider>
    </>
  );
};

export default MyApp;

/* eslint-disable camelcase */
import "../styles/globals.css";
import { MantineProvider } from "@mantine/core";
import { AppProps } from "next/app";
import Head from "next/head";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

const MyApp = ({ Component, pageProps }: AppProps) => {
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
        <div className="font-zenMaruGothic">
          <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{
              colorScheme: "light",
              fontFamily: "Zen Maru Gothic",
            }}
          >
            <Component {...pageProps} />
          </MantineProvider>
        </div>
      </GoogleReCaptchaProvider>
    </>
  );
};

export default MyApp;

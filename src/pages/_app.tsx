import "../styles/globals.css";
import { MantineProvider } from "@mantine/core";
import { AppProps } from "next/app";
import Head from "next/head";
import { CustomFonts } from "src/components/Layout/CustomFonts";

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

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "light",
          fontFamily: "LINESeedJP",
        }}
      >
        <CustomFonts />
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
};

export default MyApp;
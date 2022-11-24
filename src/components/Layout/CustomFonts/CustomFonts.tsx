/* eslint-disable quotes */
import { Global } from "@mantine/core";

/** @package */
export const CustomFonts = () => {
  return (
    <Global
      styles={[
        {
          "@font-face": {
            fontFamily: "LINESeedJP",
            src: `url("/fonts/LINESeedJP_OTF_Rg.woff2") format("woff2")`,
            fontWeight: 400,
            fontStyle: "normal",
          },
        },
        {
          "@font-face": {
            fontFamily: "LINESeedJP",
            src: `url("/fonts/LINESeedJP_OTF_Bd.woff2") format("woff2")`,
            fontWeight: 700,
            fontStyle: "bold",
          },
        },
        {
          "@font-face": {
            fontFamily: "LINESeedJP",
            src: `url("/fonts/LINESeedJP_OTF_Eb.woff2) format("woff2")`,
            fontWeight: 800,
            fontStyle: "extrabold",
          },
        },
      ]}
    />
  );
};

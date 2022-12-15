// FIXME: console.log削除
/* eslint-disable no-console */
import { z } from "zod";
import type { NextApiRequest, NextApiResponse } from "next";

type ResponseType = {
  status: string;
  message: string;
};

const responseJsonData = z.object({
  success: z.boolean(),
  challenge_ts: z.string(),
  hostname: z.string(),
  score: z.number(),
  action: z.string(),
});

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) => {
  if (req.method === "POST") {
    try {
      // reCAPTCHA認証サーバーに認証リクエストをPOSTし、認証結果を受け取る
      const serverSecretKey = `secret=${process.env.RECAPTCHA_SERVER_SECRET_KEY}&response=${req.body.token}`;
      const responseRecaptcha = await fetch(
        "https://www.google.com/recaptcha/api/siteverify",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: serverSecretKey,
        }
      );

      // zodでデータを検証
      const responseJsonRecaptcha = await responseRecaptcha.json();
      const parsedResponseJsonRecaptcha = responseJsonData.parse(
        responseJsonRecaptcha
      );

      if (!parsedResponseJsonRecaptcha) {
        throw new Error("Invalid data");
      }

      if (!parsedResponseJsonRecaptcha.success) {
        res.status(400).json({
          status: "failure",
          message: "Google ReCaptcha Failure",
        });
      }

      res.status(200).json({
        status: "success",
        message: "Enquiry submitted successfully",
      });
    } catch (error) {
      res.status(405).json({
        status: "failure",
        message: "Error submitting the enquiry form",
      });
    }
  } else {
    res.status(405);
    res.end();
  }
};

export default handler;

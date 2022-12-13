import sgMail from "@sendgrid/mail";
import type { EmailData } from "@sendgrid/helpers/classes/email-address";
import type { MailDataRequired } from "@sendgrid/mail";
import type { NextApiRequest, NextApiResponse } from "next";
import { indention } from "@libs/function";
import { ContactSchema, EventSchema } from "@libs/zodSchema";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  // イベント案内
  if (req.body.formType === "event") {
    const perseContactRequest = EventSchema.parse(req.body);
    const {
      name,
      email,
      zipcodeSub,
      zipcodeMain,
      address,
      phone,
      guest,
      numberOfGuest,
      content,
    } = perseContactRequest;
    const indentedContent = indention(content);
    const message: MailDataRequired = {
      to: process.env.MAIL_TO,
      from: process.env.MAIL_FROM as EmailData,
      subject: "【JAAC / イベント案内】新着メッセージを受信しました",
      text: `${name}さんからのお申し込み`,
      html: `
        <p>以下のお申し込みがありました。</p>
        <hr />
        <span>お名前: ${name} 様</span>
        <p>メールアドレス: ${email}</p>
        <p>電話番号: ${phone}</p>
        <p>郵便番号: ${zipcodeMain}-${zipcodeSub}</p>
        <p>住所: ${address}</p>
        <p>参加者: ${guest}</p>
        <p>参加人数: ${numberOfGuest}</p>
        <br />
        <p>連絡事項: </p>
        <p>${indentedContent}</p>
          `,
    };
    try {
      await sgMail.send(message);
      res.status(200).json(message);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  }

  // お問い合わせ
  if (req.body.formType === "contact") {
    const perseContactRequest = ContactSchema.parse(req.body);
    const { name, email, person, content } = perseContactRequest;
    const indentedContent = indention(content);
    const message: MailDataRequired = {
      to: process.env.MAIL_TO,
      from: process.env.MAIL_FROM as EmailData,
      subject: "【JAAC / お問合せ】新着メッセージを受信しました",
      text: `${name}さんからの問い合わせ`,
      html: `
        <p>以下のお問い合わせがありました。</p>
        <hr />
        <p>お名前: ${name} 様</p>
        <br />
        <p>メールアドレス: ${email}</p>
        <br />
        <p>対象: ${person}</p>
        <br />
        <p>お問い合わせ内容: </p>
        <p>${indentedContent}</p>
          `,
    };
    try {
      await sgMail.send(message);
      res.status(200).json(message);
    } catch (err) {
      console.error(err);
      res.status(400).send("メールの送信に失敗しました。");
    }
  }
}

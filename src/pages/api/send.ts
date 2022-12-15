import sgMail from "@sendgrid/mail";
import type { MailDataRequired } from "@sendgrid/mail";
import type { NextApiRequest, NextApiResponse } from "next";
import {
  indention,
  contactMessageToStaff,
  contactMessageToCustomer,
  eventMessageToStaff,
  eventMessageToCustomer,
  membershipMessageToStaff,
  membershipMessageToCustomer,
} from "@libs/function";
import {
  ContactSchema,
  EventSchema,
  MembershipServerSchema,
} from "@libs/zodSchema";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  /**
   * 入会メール
   */
  if (req.body.formType === "membership") {
    const perseContactRequest = MembershipServerSchema.parse(req.body);
    const indentedContent = indention(perseContactRequest.content);

    // 役員メッセージ
    const forStaffMessage: MailDataRequired = membershipMessageToStaff({
      ...perseContactRequest,
      indentedContent,
    });
    // 返信メッセージ
    const forCustomerMessage: MailDataRequired = membershipMessageToCustomer({
      ...perseContactRequest,
      indentedContent,
    });

    // メール配信
    try {
      await sgMail.send(forStaffMessage);
      await sgMail.send(forCustomerMessage);
      res.status(200).send(forStaffMessage);
    } catch (err) {
      console.error(err);
      res.status(500).send(err);
    }
  }

  /**
   * イベント案内メール
   */
  if (req.body.formType === "event") {
    const perseContactRequest = EventSchema.parse(req.body);
    const indentedContent = indention(perseContactRequest.content);

    // 役員メッセージ
    const forStaffMessage: MailDataRequired = eventMessageToStaff({
      ...perseContactRequest,
      indentedContent,
    });
    // 返信メッセージ
    const forCustomerMessage: MailDataRequired = eventMessageToCustomer({
      ...perseContactRequest,
      indentedContent,
    });

    // メール配信
    try {
      await sgMail.send(forStaffMessage);
      await sgMail.send(forCustomerMessage);
      res.status(200).send(forStaffMessage);
    } catch (err) {
      console.error(err);
      res.status(500).send(err);
    }
  }

  /**
   * お問い合わせメール
   */
  if (req.body.formType === "contact") {
    const perseContactRequest = ContactSchema.parse(req.body);
    const indentedContent = indention(perseContactRequest.content);

    // 役員メッセージ
    const forStaffMessage: MailDataRequired = contactMessageToStaff({
      ...perseContactRequest,
      indentedContent,
    });
    // 返信メッセージ
    const forCustomerMessage: MailDataRequired = contactMessageToCustomer({
      ...perseContactRequest,
      indentedContent,
    });

    // メール配信
    try {
      await sgMail.send(forStaffMessage);
      await sgMail.send(forCustomerMessage);
      res.status(200).send(forStaffMessage);
    } catch (err) {
      console.error(err);
      res.status(400).send("メールの送信に失敗しました。");
    }
  }
}

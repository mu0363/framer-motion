import {
  ContactSchemaType,
  EventSchemaType,
  MembershipServerSchemaType,
} from "./zodSchema";
import type { EmailData } from "@sendgrid/helpers/classes/email-address";
import type { MailDataRequired } from "@sendgrid/mail";
import type {
  AllSchemaTypes,
  NarrowSchemaType,
  WithContact,
  WithEvent,
  WithMembership,
} from "@types";

// ページネーションが何ページあるか計算
export const pagesRange = (start: number, end: number) =>
  [...Array(end - start + 1)].map((_, i) => start + i);

export const indention = (text: string) => {
  const replacedText = text.replace(/\n/g, "<br />");
  return replacedText;
};

// Type Guards
export const isContact = (
  data: AllSchemaTypes
): data is NarrowSchemaType<WithContact> => {
  if (data !== undefined && "person" in data) {
    return true;
  }
  return false;
};

export const isEvent = (
  data: AllSchemaTypes
): data is NarrowSchemaType<WithEvent> => {
  if (data !== undefined && "guest" in data) {
    return true;
  }
  return false;
};

export const isMembership = (
  data: AllSchemaTypes
): data is NarrowSchemaType<WithMembership> => {
  if (data !== undefined && "birthday" in data) {
    return true;
  }
  return false;
};

export const membershipMessageToStaff = (
  perseContactRequest: MembershipServerSchemaType & { indentedContent: string }
): MailDataRequired => {
  const {
    name,
    email,
    phone,
    zipcodeMain,
    zipcodeSub,
    address,
    person,
    birthday,
    indentedContent,
  } = perseContactRequest;
  return {
    to: process.env.MAIL_TO.split(" "),
    from: process.env.MAIL_FROM as EmailData,
    subject: "【JAAC / 入会】新着メッセージを受信しました",
    text: `${name}さんからのお申し込み`,
    html: `
        <p>以下の入会お申し込みがありました。</p>
        <hr />
        <span>お名前: ${name} 様</span>
        <p>メールアドレス: ${email}</p>
        <p>電話番号: ${phone}</p>
        <p>郵便番号: ${zipcodeMain}-${zipcodeSub}</p>
        <p>住所: ${address}</p>
        <p>対象: ${person}</p>
        <p>生年月日: ${birthday}</p>
        <br />
        <p>連絡事項: </p>
        <p>${indentedContent}</p>
          `,
  };
};

export const eventMessageToStaff = (
  perseContactRequest: EventSchemaType & { indentedContent: string }
): MailDataRequired => {
  const {
    name,
    email,
    phone,
    zipcodeMain,
    zipcodeSub,
    address,
    guest,
    numberOfGuest,
    indentedContent,
  } = perseContactRequest;
  return {
    to: process.env.MAIL_TO.split(" "),
    from: process.env.MAIL_FROM as EmailData,
    subject: "【JAAC / イベント案内】新着メッセージを受信しました",
    text: `${name}さんからのお申し込み`,
    html: `
        <p>以下のイベントお申し込みがありました。</p>
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
};

export const contactMessageToStaff = (
  perseContactRequest: ContactSchemaType & { indentedContent: string }
): MailDataRequired => {
  const { name, email, person, indentedContent } = perseContactRequest;
  return {
    to: process.env.MAIL_TO.split(" "),
    from: process.env.MAIL_FROM as EmailData,
    subject: "【JAAC / お問合せ】新着メッセージを受信しました",
    text: `${name}さんからの問い合わせ`,
    html: `
        <p>以下のお問い合わせがありました。</p>
        <hr />
        <p>お名前: ${name} 様</p>
        <p>メールアドレス: ${email}</p>
        <p>対象: ${person}</p>
        <br />
        <p>お問い合わせ内容: </p>
        <p>${indentedContent}</p>
          `,
  };
};

export const membershipMessageToCustomer = (
  perseContactRequest: MembershipServerSchemaType & { indentedContent: string }
): MailDataRequired => {
  const {
    name,
    email,
    phone,
    zipcodeMain,
    zipcodeSub,
    address,
    person,
    birthday,
    indentedContent,
  } = perseContactRequest;
  return {
    to: email,
    from: process.env.MAIL_FROM as EmailData,
    subject: "【JAAC】入会お申し込みを受付いたしました",
    html: `<!DOCTYPE html>
              <html>
              <head>

                <meta charset="utf-8">
                <meta http-equiv="x-ua-compatible" content="ie=edge">
                <title>Welcome Email</title>
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <style type="text/css">
                /**
                 * Google webfonts. Recommended to include the .woff version for cross-client compatibility.
                 */
                @media screen {
                  @font-face {
                    font-family: 'Source Sans Pro';
                    font-style: normal;
                    font-weight: 400;
                    src: local('Source Sans Pro Regular'), local('SourceSansPro-Regular'), url(https://fonts.gstatic.com/s/sourcesanspro/v10/ODelI1aHBYDBqgeIAH2zlBM0YzuT7MdOe03otPbuUS0.woff) format('woff');
                  }
                
                  @font-face {
                    font-family: 'Source Sans Pro';
                    font-style: normal;
                    font-weight: 700;
                    src: local('Source Sans Pro Bold'), local('SourceSansPro-Bold'), url(https://fonts.gstatic.com/s/sourcesanspro/v10/toadOcfmlt9b38dHJxOBGFkQc6VGVFSmCnC_l7QZG60.woff) format('woff');
                  }
                }
              
                /**
                 * Avoid browser level font resizing.
                 * 1. Windows Mobile
                 * 2. iOS / OSX
                 */
                body,
                table,
                td,
                a {
                  -ms-text-size-adjust: 100%; /* 1 */
                  -webkit-text-size-adjust: 100%; /* 2 */
                }
              
                /**
                 * Remove extra space added to tables and cells in Outlook.
                 */
                table,
                td {
                  mso-table-rspace: 0pt;
                  mso-table-lspace: 0pt;
                }
              
                /**
                 * Better fluid images in Internet Explorer.
                 */
                img {
                  -ms-interpolation-mode: bicubic;
                }
              
                /**
                 * Remove blue links for iOS devices.
                 */
                a[x-apple-data-detectors] {
                  font-family: inherit !important;
                  font-size: inherit !important;
                  font-weight: inherit !important;
                  line-height: inherit !important;
                  color: inherit !important;
                  text-decoration: none !important;
                }
              
                /**
                 * Fix centering issues in Android 4.4.
                 */
                div[style*="margin: 16px 0;"] {
                  margin: 0 !important;
                }
              
                body {
                  width: 100% !important;
                  height: 100% !important;
                  padding: 0 !important;
                  margin: 0 !important;
                }
              
                /**
                 * Collapse table borders to avoid space between cells.
                 */
                table {
                  border-collapse: collapse !important;
                }
              
                a {
                  color: black;
                }
              
                img {
                  height: auto;
                  line-height: 100%;
                  text-decoration: none;
                  border: 0;
                  outline: none;
                }
                </style>
              
              </head>
              <body style="background-color: #e9ecef;">
              
                <!-- start preheader -->
                <div class="preheader" style="display: none; max-width: 0; max-height: 0; overflow: hidden; font-size: 1px; line-height: 1px; color: #fff; opacity: 0;">
                  ai-relationsへのお問い合わせ
                </div>
                <!-- end preheader -->
              
                <!-- start body -->
                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                  <!-- start copy block -->
                  <tr>
                    <td align="center" bgcolor="#e9ecef" style="padding: 48px 48px;">
                      <!--[if (gte mso 9)|(IE)]>
                      <table align="center" border="0" cellpadding="0" cellspacing="0" width="800">
                      <tr>
                      <td align="center" valign="top" width="600">
                      <![endif]-->
                      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 800px;">
              
                        <!-- start copy -->
                        <tr>
                          <td bgcolor="#ffffff" align="left" style="padding: 24px 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px;">
                            <h1 style="margin: 0 0 12px; font-size: 16px; font-weight: 400; line-height: 48px;">${name} 様</h1>
                            <p style="margin: 0;">この度はJAAC入会のお申し込みありがとうございます。</p>
                            <p style="margin: 0;">以下の内容で受付いたしました。</p>
                            <br>
                            <p style="margin: 0;">お名前: ${name} 様</p>
                            <p style="margin: 0;">メールアドレス: ${email}</p>
                            <p style="margin: 0;">電話番号: ${phone}</p>
                            <p style="margin: 0;">郵便番号: ${zipcodeMain}-${zipcodeSub}</p>
                            <p style="margin: 0;">住所: ${address}</p>
                            <p style="margin: 0;">対象: ${person}</p>
                            <p style="margin: 0;">生年月日: ${birthday}</p>
                            <br />
                            <p style="margin: 0;">連絡事項:</p>
                            <p style="margin: 0;">${indentedContent}</p>
                          </td>
                        </tr>
                        <!-- end copy -->
              
                      </table>
                      <!--[if (gte mso 9)|(IE)]>
                      </td>
                      </tr>
                      </table>
                      <![endif]-->
                    </td>
                  </tr>
                  <!-- end copy block -->
              
                  <!-- start footer -->
                  <tr>
                    <td align="center" bgcolor="#e9ecef" style="padding: 12px;">
                      <!--[if (gte mso 9)|(IE)]>
                      <table align="center" border="0" cellpadding="0" cellspacing="0" width="800">
                      <tr>
                      <td align="center" valign="top" width="600">
                      <![endif]-->
                      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 800px;">
              
                        <!-- start permission -->
                        <tr>
                          <td align="left" bgcolor="#e9ecef" style="padding: 12px 12px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 20px; color: #666;">
                            <p style="margin: 0;">※このメールはシステムからの自動返信です。</p>
                            <p style="margin: 0;">※このメールに心当たりのない場合や、ご不明な点がございましたら、${process.env.MAIL_FROM}までご連絡ください。</p>
                          </td>
                        </tr>
                        <!-- end permission -->

                      </table>
                      <!--[if (gte mso 9)|(IE)]>
                      </td>
                      </tr>
                      </table>
                      <![endif]-->
                    </td>
                  </tr>
                  <!-- end footer -->
              
                </table>
                <!-- end body -->
              
              </body>
              </html>`,
  };
};

export const eventMessageToCustomer = (
  perseContactRequest: EventSchemaType & { indentedContent: string }
): MailDataRequired => {
  const {
    name,
    email,
    phone,
    zipcodeMain,
    zipcodeSub,
    address,
    guest,
    numberOfGuest,
    indentedContent,
  } = perseContactRequest;
  return {
    to: email,
    from: process.env.MAIL_FROM as EmailData,
    subject: "【JAAC】イベントお申し込みを受付いたしました",
    html: `<!DOCTYPE html>
              <html>
              <head>

                <meta charset="utf-8">
                <meta http-equiv="x-ua-compatible" content="ie=edge">
                <title>Welcome Email</title>
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <style type="text/css">
                /**
                 * Google webfonts. Recommended to include the .woff version for cross-client compatibility.
                 */
                @media screen {
                  @font-face {
                    font-family: 'Source Sans Pro';
                    font-style: normal;
                    font-weight: 400;
                    src: local('Source Sans Pro Regular'), local('SourceSansPro-Regular'), url(https://fonts.gstatic.com/s/sourcesanspro/v10/ODelI1aHBYDBqgeIAH2zlBM0YzuT7MdOe03otPbuUS0.woff) format('woff');
                  }
                
                  @font-face {
                    font-family: 'Source Sans Pro';
                    font-style: normal;
                    font-weight: 700;
                    src: local('Source Sans Pro Bold'), local('SourceSansPro-Bold'), url(https://fonts.gstatic.com/s/sourcesanspro/v10/toadOcfmlt9b38dHJxOBGFkQc6VGVFSmCnC_l7QZG60.woff) format('woff');
                  }
                }
              
                /**
                 * Avoid browser level font resizing.
                 * 1. Windows Mobile
                 * 2. iOS / OSX
                 */
                body,
                table,
                td,
                a {
                  -ms-text-size-adjust: 100%; /* 1 */
                  -webkit-text-size-adjust: 100%; /* 2 */
                }
              
                /**
                 * Remove extra space added to tables and cells in Outlook.
                 */
                table,
                td {
                  mso-table-rspace: 0pt;
                  mso-table-lspace: 0pt;
                }
              
                /**
                 * Better fluid images in Internet Explorer.
                 */
                img {
                  -ms-interpolation-mode: bicubic;
                }
              
                /**
                 * Remove blue links for iOS devices.
                 */
                a[x-apple-data-detectors] {
                  font-family: inherit !important;
                  font-size: inherit !important;
                  font-weight: inherit !important;
                  line-height: inherit !important;
                  color: inherit !important;
                  text-decoration: none !important;
                }
              
                /**
                 * Fix centering issues in Android 4.4.
                 */
                div[style*="margin: 16px 0;"] {
                  margin: 0 !important;
                }
              
                body {
                  width: 100% !important;
                  height: 100% !important;
                  padding: 0 !important;
                  margin: 0 !important;
                }
              
                /**
                 * Collapse table borders to avoid space between cells.
                 */
                table {
                  border-collapse: collapse !important;
                }
              
                a {
                  color: black;
                }
              
                img {
                  height: auto;
                  line-height: 100%;
                  text-decoration: none;
                  border: 0;
                  outline: none;
                }
                </style>
              
              </head>
              <body style="background-color: #e9ecef;">
              
                <!-- start preheader -->
                <div class="preheader" style="display: none; max-width: 0; max-height: 0; overflow: hidden; font-size: 1px; line-height: 1px; color: #fff; opacity: 0;">
                  ai-relationsへのお問い合わせ
                </div>
                <!-- end preheader -->
              
                <!-- start body -->
                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                  <!-- start copy block -->
                  <tr>
                    <td align="center" bgcolor="#e9ecef" style="padding: 48px 48px;">
                      <!--[if (gte mso 9)|(IE)]>
                      <table align="center" border="0" cellpadding="0" cellspacing="0" width="800">
                      <tr>
                      <td align="center" valign="top" width="600">
                      <![endif]-->
                      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 800px;">
              
                        <!-- start copy -->
                        <tr>
                          <td bgcolor="#ffffff" align="left" style="padding: 24px 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px;">
                            <h1 style="margin: 0 0 12px; font-size: 16px; font-weight: 400; line-height: 48px;">${name} 様</h1>
                            <p style="margin: 0;">この度はJAACイベント参加へのお申し込みありがとうございます。</p>
                            <p style="margin: 0;">以下の内容で受付いたしました。</p>
                            <br>
                            <p style="margin: 0;">お名前: ${name} 様</p>
                            <p style="margin: 0;">メールアドレス: ${email}</p>
                            <p style="margin: 0;">電話番号: ${phone}</p>
                            <p style="margin: 0;">郵便番号: ${zipcodeMain}-${zipcodeSub}</p>
                            <p style="margin: 0;">住所: ${address}</p>
                            <p style="margin: 0;">参加者: ${guest}</p>
                            <p style="margin: 0;">人数: ${numberOfGuest}</p>
                            <br />
                            <p style="margin: 0;">連絡事項:</p>
                            <p style="margin: 0;">${indentedContent}</p>
                          </td>
                        </tr>
                        <!-- end copy -->
              
                      </table>
                      <!--[if (gte mso 9)|(IE)]>
                      </td>
                      </tr>
                      </table>
                      <![endif]-->
                    </td>
                  </tr>
                  <!-- end copy block -->
              
                  <!-- start footer -->
                  <tr>
                    <td align="center" bgcolor="#e9ecef" style="padding: 12px;">
                      <!--[if (gte mso 9)|(IE)]>
                      <table align="center" border="0" cellpadding="0" cellspacing="0" width="800">
                      <tr>
                      <td align="center" valign="top" width="600">
                      <![endif]-->
                      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 800px;">
              
                        <!-- start permission -->
                        <tr>
                          <td align="left" bgcolor="#e9ecef" style="padding: 12px 12px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 20px; color: #666;">
                            <p style="margin: 0;">※このメールはシステムからの自動返信です。</p>
                            <p style="margin: 0;">※このメールに心当たりのない場合や、ご不明な点がございましたら、${process.env.MAIL_FROM}までご連絡ください。</p>
                          </td>
                        </tr>
                        <!-- end permission -->

                      </table>
                      <!--[if (gte mso 9)|(IE)]>
                      </td>
                      </tr>
                      </table>
                      <![endif]-->
                    </td>
                  </tr>
                  <!-- end footer -->
              
                </table>
                <!-- end body -->
              
              </body>
              </html>`,
  };
};

export const contactMessageToCustomer = (
  perseContactRequest: ContactSchemaType & { indentedContent: string }
): MailDataRequired => {
  const { name, email, person, indentedContent } = perseContactRequest;
  return {
    to: email,
    from: process.env.MAIL_FROM as EmailData,
    subject: "【JAAC】お問い合わせを受付いたしました",
    html: `<!DOCTYPE html>
              <html>
              <head>

                <meta charset="utf-8">
                <meta http-equiv="x-ua-compatible" content="ie=edge">
                <title>Welcome Email</title>
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <style type="text/css">
                /**
                 * Google webfonts. Recommended to include the .woff version for cross-client compatibility.
                 */
                @media screen {
                  @font-face {
                    font-family: 'Source Sans Pro';
                    font-style: normal;
                    font-weight: 400;
                    src: local('Source Sans Pro Regular'), local('SourceSansPro-Regular'), url(https://fonts.gstatic.com/s/sourcesanspro/v10/ODelI1aHBYDBqgeIAH2zlBM0YzuT7MdOe03otPbuUS0.woff) format('woff');
                  }
                
                  @font-face {
                    font-family: 'Source Sans Pro';
                    font-style: normal;
                    font-weight: 700;
                    src: local('Source Sans Pro Bold'), local('SourceSansPro-Bold'), url(https://fonts.gstatic.com/s/sourcesanspro/v10/toadOcfmlt9b38dHJxOBGFkQc6VGVFSmCnC_l7QZG60.woff) format('woff');
                  }
                }
              
                /**
                 * Avoid browser level font resizing.
                 * 1. Windows Mobile
                 * 2. iOS / OSX
                 */
                body,
                table,
                td,
                a {
                  -ms-text-size-adjust: 100%; /* 1 */
                  -webkit-text-size-adjust: 100%; /* 2 */
                }
              
                /**
                 * Remove extra space added to tables and cells in Outlook.
                 */
                table,
                td {
                  mso-table-rspace: 0pt;
                  mso-table-lspace: 0pt;
                }
              
                /**
                 * Better fluid images in Internet Explorer.
                 */
                img {
                  -ms-interpolation-mode: bicubic;
                }
              
                /**
                 * Remove blue links for iOS devices.
                 */
                a[x-apple-data-detectors] {
                  font-family: inherit !important;
                  font-size: inherit !important;
                  font-weight: inherit !important;
                  line-height: inherit !important;
                  color: inherit !important;
                  text-decoration: none !important;
                }
              
                /**
                 * Fix centering issues in Android 4.4.
                 */
                div[style*="margin: 16px 0;"] {
                  margin: 0 !important;
                }
              
                body {
                  width: 100% !important;
                  height: 100% !important;
                  padding: 0 !important;
                  margin: 0 !important;
                }
              
                /**
                 * Collapse table borders to avoid space between cells.
                 */
                table {
                  border-collapse: collapse !important;
                }
              
                a {
                  color: black;
                }
              
                img {
                  height: auto;
                  line-height: 100%;
                  text-decoration: none;
                  border: 0;
                  outline: none;
                }
                </style>
              
              </head>
              <body style="background-color: #e9ecef;">
              
                <!-- start preheader -->
                <div class="preheader" style="display: none; max-width: 0; max-height: 0; overflow: hidden; font-size: 1px; line-height: 1px; color: #fff; opacity: 0;">
                  ai-relationsへのお問い合わせ
                </div>
                <!-- end preheader -->
              
                <!-- start body -->
                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                  <!-- start copy block -->
                  <tr>
                    <td align="center" bgcolor="#e9ecef" style="padding: 48px 48px;">
                      <!--[if (gte mso 9)|(IE)]>
                      <table align="center" border="0" cellpadding="0" cellspacing="0" width="800">
                      <tr>
                      <td align="center" valign="top" width="600">
                      <![endif]-->
                      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 800px;">
              
                        <!-- start copy -->
                        <tr>
                          <td bgcolor="#ffffff" align="left" style="padding: 24px 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px;">
                            <h1 style="margin: 0 0 12px; font-size: 16px; font-weight: 400; line-height: 48px;">${name} 様</h1>
                            <p style="margin: 0;">この度はJAACへのお問い合わせありがとうございます。</p>
                            <p style="margin: 0;">以下の内容で受付いたしました。</p>
                            <br>
                            <p style="margin: 0;">お名前: ${name} 様</p>
                            <p style="margin: 0;">メールアドレス: ${email}</p>
                            <p style="margin: 0;">対象: ${person}</p>
                            <br />
                            <p style="margin: 0;">お問い合わせ内容:</p>
                            <p style="margin: 0;">${indentedContent}</p>
                          </td>
                        </tr>
                        <!-- end copy -->
              
                      </table>
                      <!--[if (gte mso 9)|(IE)]>
                      </td>
                      </tr>
                      </table>
                      <![endif]-->
                    </td>
                  </tr>
                  <!-- end copy block -->
              
                  <!-- start footer -->
                  <tr>
                    <td align="center" bgcolor="#e9ecef" style="padding: 12px;">
                      <!--[if (gte mso 9)|(IE)]>
                      <table align="center" border="0" cellpadding="0" cellspacing="0" width="800">
                      <tr>
                      <td align="center" valign="top" width="600">
                      <![endif]-->
                      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 800px;">
              
                        <!-- start permission -->
                        <tr>
                          <td align="left" bgcolor="#e9ecef" style="padding: 12px 12px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 20px; color: #666;">
                            <p style="margin: 0;">※このメールはシステムからの自動返信です。</p>
                            <p style="margin: 0;">※このメールに心当たりのない場合や、ご不明な点がございましたら、${process.env.MAIL_FROM}までご連絡ください。</p>
                          </td>
                        </tr>
                        <!-- end permission -->

                      </table>
                      <!--[if (gte mso 9)|(IE)]>
                      </td>
                      </tr>
                      </table>
                      <![endif]-->
                    </td>
                  </tr>
                  <!-- end footer -->
              
                </table>
                <!-- end body -->
              
              </body>
              </html>`,
  };
};

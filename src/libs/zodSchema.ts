import { z } from "zod";

// 名前とemailの共通スキーマ
const NameEmailSchema = z.object({
  name: z
    .string()
    .min(1, { message: "必須項目です。" })
    .max(100, { message: "100文字以内で入力してください。" }),
  email: z
    .string()
    .email({ message: "無効なアドレスです。" })
    .min(1, { message: "必須項目です。" })
    .max(100, { message: "100文字以内で入力してください。" }),
});

// 住所と電話番号の共通スキーマ
const AddressPhoneSchema = z.object({
  address: z
    .string()
    .min(1, { message: "必須項目です。" })
    .max(100, { message: "100文字以内で入力してください。" }),
  phone: z
    .string()
    .regex(/^[0-9]*$/, { message: "半角数字で入力してください。" })
    .min(10, { message: "10文字以上で入力してください。" })
    .max(11, { message: "11文字以内で入力してください。" }),
});

// 必須コメントスキーマ
const RequiredCommentSchema = z.object({
  content: z
    .string()
    .min(1, { message: "必須項目です。" })
    .max(300, { message: "300文字で入力してください。" }),
});

// コメントスキーマ
const CommentSchema = z.object({
  content: z.string().max(300, { message: "300文字で入力してください。" }),
});

/**
 * お問い合わせフォーム
 */
export const ContactSchema = z
  .object({
    person: z.union([
      z.literal("患者本人"),
      z.literal("家族"),
      z.literal("その他"),
    ]),
  })
  .merge(NameEmailSchema)
  .merge(AddressPhoneSchema)
  .merge(RequiredCommentSchema);

export type ContactSchemaType = z.infer<typeof ContactSchema>;

/**
 * イベント参加フォーム
 */
export const EventSchema = z
  .object({
    guest: z.union([
      z.literal("本人会員"),
      z.literal("家族会員"),
      z.literal("賛助会員"),
      z.literal("非会員本人"),
      z.literal("非会員家族"),
    ]),
    numberOfGuest: z.union([
      z.literal("1人"),
      z.literal("2人"),
      z.literal("3人"),
      z.literal("4人"),
      z.literal("5人"),
    ]),
  })
  .merge(NameEmailSchema)
  .merge(AddressPhoneSchema)
  .merge(CommentSchema);

export type EventSchemaType = z.infer<typeof EventSchema>;

/**
 * 入会フォーム
 */
export const MembershipSchema = z
  .object({
    person: z.union([
      z.literal("患者本人"),
      z.literal("家族"),
      z.literal("その他"),
    ]),
  })
  .merge(NameEmailSchema)
  .merge(AddressPhoneSchema)
  .merge(CommentSchema);

export type MembershipSchemaType = z.infer<typeof MembershipSchema>;

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

// 住所スキーマ
const AddressSchema = z.object({
  zipcodeMain: z
    .string()
    .regex(/^[0-9]*$/, { message: "半角数字で入力してください。" })
    .min(3, { message: "必須項目です。" })
    .max(3, { message: "必須項目です。" }),
  zipcodeSub: z
    .string()
    .regex(/^[0-9]*$/, { message: "半角数字で入力してください。" })
    .min(4, { message: "必須項目です。" })
    .max(4, { message: "必須項目です。" }),
  address: z
    .string()
    .min(1, { message: "必須項目です。" })
    .max(100, { message: "100文字以内で入力してください。" }),
});

// 電話番号スキーマ
const PhoneSchema = z.object({
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
  .merge(AddressSchema)
  .merge(PhoneSchema)
  .merge(CommentSchema);

export type EventSchemaType = z.infer<typeof EventSchema>;

/**
 * 入会フォーム
 */
export const MembershipSchema = z
  .object({
    birthday: z.date({
      required_error: "必須項目です。",
      invalid_type_error: "無効な値です。",
    }),
    person: z.union([
      z.literal("患者本人"),
      z.literal("家族"),
      z.literal("その他"),
    ]),
  })
  .merge(NameEmailSchema)
  .merge(AddressSchema)
  .merge(PhoneSchema)
  .merge(CommentSchema);

export type MembershipSchemaType = z.infer<typeof MembershipSchema>;

import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, { message: "必須項目です。" }),
  email: z
    .string()
    .email({ message: "無効なアドレスです。" })
    .min(1, { message: "必須項目です。" }),
  person: z.union([
    z.literal("患者本人"),
    z.literal("家族"),
    z.literal("その他"),
  ]),
  content: z
    .string()
    .min(1, { message: "必須項目です。" })
    .max(300, { message: "300文字以内にしてください。" }),
});

export type ContactSchemaType = z.infer<typeof contactSchema>;

export const eventSchema = z.object({
  name: z.string().min(1, { message: "必須項目です。" }),
  email: z
    .string()
    .email({ message: "無効なアドレスです。" })
    .min(1, { message: "必須項目です。" }),
  address: z.string().min(1, { message: "必須項目です。" }),
  phone: z.string().min(10, { message: "必須項目です。" }),
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
  content: z
    .string()
    .min(1, { message: "必須項目です。" })
    .max(300, { message: "300文字以内にしてください。" }),
});

export type EventSchemaType = z.infer<typeof eventSchema>;

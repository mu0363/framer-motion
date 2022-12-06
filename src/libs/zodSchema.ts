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

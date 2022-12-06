// FIXME: console.logを削除
/* eslint-disable no-console */
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import type { FC } from "react";
import { RadioInput } from "src/components/Common/RadioInput";
import { TextArea } from "src/components/Common/TextArea";
import { TextField } from "src/components/Common/TextField";

const schema = z.object({
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

type Inputs = z.infer<typeof schema>;

/** @package */
export const ContactTextFields: FC = () => {
  const {
    register,
    formState: { errors },
  } = useForm<Inputs>({ resolver: zodResolver(schema) });

  return (
    <>
      <TextField
        label="お名前"
        id="name"
        placeholder="山田太郎"
        register={register("name")}
        errorMessage={errors.name?.message}
      />
      <TextField
        label="メールアドレス"
        id="email"
        placeholder="email@example.com"
        register={register("email")}
        errorMessage={errors.email?.message}
      />

      <RadioInput register={register("person")} />

      <TextArea
        label="お問い合わせ内容"
        id="content"
        register={register("content")}
        errorMessage={errors.content?.message}
      />
    </>
  );
};

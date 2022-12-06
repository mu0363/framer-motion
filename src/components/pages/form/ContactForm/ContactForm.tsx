import type { FC } from "react";
import { BotNotification } from "@components/Common/BotNotification/BotNotification";
import { useFormOnSubmit } from "@hooks/useFormOnSubmit";
import { contactSchema } from "@libs/zodSchema";
import { PrimaryButton } from "src/components/Common/PrimaryButton";
import { RadioInput } from "src/components/Common/RadioInput";
import { TextArea } from "src/components/Common/TextArea";
import { TextField } from "src/components/Common/TextField";

type Props = { formUID: string };

/** @package */
export const ContactForm: FC<Props> = ({ formUID }) => {
  const { errors, register, onSubmit, handleSubmit, isBot, setIsBot } =
    useFormOnSubmit({ contactSchema, formUID });

  return (
    <div>
      <form
        className="mt-8 flex w-full flex-col space-y-6 px-5 md:mx-auto xl:w-1/2"
        onSubmit={handleSubmit(onSubmit)}
        method="post"
      >
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

        <PrimaryButton title="送信" />
      </form>
      <BotNotification isBot={isBot} setIsBot={setIsBot} />
    </div>
  );
};

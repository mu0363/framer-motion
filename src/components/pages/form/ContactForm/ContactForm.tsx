import type { FC } from "react";
import { BotNotification } from "@components/Common/BotNotification/BotNotification";
import { PrimaryButton } from "@components/Common/PrimaryButton";
import { useFormOnSubmit } from "@hooks/useFormOnSubmit";
import { personTypes } from "@libs/constant";
import { ContactSchema, ContactSchemaType } from "@libs/zodSchema";
import { RadioInput } from "src/components/Common/RadioInput";
import { TextArea } from "src/components/Common/TextArea";
import { TextField } from "src/components/Common/TextField";

type Props = { formUID: string };

/** @package */
export const ContactForm: FC<Props> = ({ formUID }) => {
  const { errors, register, onSubmit, handleSubmit, isBot, setIsBot } =
    useFormOnSubmit<ContactSchemaType>({ schema: ContactSchema, formUID });

  return (
    <>
      <form
        className="mt-8 w-full px-5 md:mx-auto xl:w-1/2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col space-y-6">
          <TextField
            label="お名前"
            id="name"
            placeholder="山田太郎"
            register={register("name")}
            errorMessage={errors.name?.message}
            isRequired
            maxLength={100}
            type="text"
          />
          <TextField
            label="メールアドレス"
            id="email"
            placeholder="email@example.com"
            register={register("email")}
            errorMessage={errors.email?.message}
            isRequired
            maxLength={100}
            type="email"
          />

          <RadioInput register={register("person")} types={personTypes} />

          <TextArea
            label="お問い合わせ内容"
            id="content"
            register={register("content")}
            errorMessage={errors.content?.message}
            isRequired
          />
          <PrimaryButton title="送信" />
        </div>
      </form>
      <BotNotification isBot={isBot} setIsBot={setIsBot} />
    </>
  );
};

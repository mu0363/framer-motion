import { PrimaryButton } from "../atom/PrimaryButton";
import { RadioInput } from "../atom/RadioInput";
import { TextArea } from "../atom/TextArea";
import { TextInput } from "../atom/TextInput";
import type { FC } from "react";
import { InvalidNotification } from "@components/Common/InvalidNotification";
import { useFormOnSubmit } from "@hooks/useFormOnSubmit";
import { personTypes } from "@libs/constant";
import { ContactSchema, ContactSchemaType } from "@libs/zodSchema";

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
          <TextInput
            label="お名前"
            id="name"
            placeholder="山田太郎"
            register={register("name")}
            errorMessage={errors.name?.message}
            isRequired
            maxLength={100}
            type="text"
          />
          <TextInput
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
      <InvalidNotification isInvalid={isBot} setIsInvalid={setIsBot}>
        操作は無効です
      </InvalidNotification>
    </>
  );
};

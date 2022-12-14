import { ConfirmButton } from "../atom/ConfirmButton";
import { ConfirmModal } from "../atom/ConfirmModal";
import { RadioInput } from "../atom/RadioInput";
import { TextArea } from "../atom/TextArea";
import { TextInput } from "../atom/TextInput";
import type { ContactSchemaType } from "@libs/zodSchema";
import type { WithContact } from "@types";
import type { FC } from "react";
import { useFormOnSubmit } from "@hooks/useFormOnSubmit";
import { personTypes } from "@libs/constant";
import { ContactSchema } from "@libs/zodSchema";

/** @package */
export const ContactForm: FC = () => {
  const {
    errors,
    register,
    onSubmit,
    handleSubmit,
    confirmData,
    setIsOpened,
    isOpened,
  } = useFormOnSubmit<ContactSchemaType>({ schema: ContactSchema });

  return (
    <>
      <form
        className="mt-8 w-full md:mx-auto xl:w-1/2"
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
          <ConfirmButton>確認する</ConfirmButton>
        </div>
      </form>
      <ConfirmModal<WithContact>
        isOpened={isOpened}
        setIsOpened={setIsOpened}
        confirmData={confirmData}
      />
    </>
  );
};

import { PrimaryButton } from "../atom/PrimaryButton";
import { RadioInput } from "../atom/RadioInput";
import { TextArea } from "../atom/TextArea";
import { TextInput } from "../atom/TextInput";
import { ZipcodeFiled } from "../atom/ZipcodeFiled/ZipcodeFiled";
import type { FC } from "react";
import { BotNotification } from "@components/Common/BotNotification/BotNotification";
import { useFormOnSubmit } from "@hooks/useFormOnSubmit";
import { personTypes } from "@libs/constant";
import { MembershipSchema, MembershipSchemaType } from "@libs/zodSchema";

type Props = { formUID: string };

/** @package */
export const MembershipForm: FC<Props> = ({ formUID }) => {
  const { errors, register, onSubmit, handleSubmit, isBot, setIsBot } =
    useFormOnSubmit<MembershipSchemaType>({
      schema: MembershipSchema,
      formUID,
    });

  return (
    <div>
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
          <ZipcodeFiled
            registerMain={register("zipcodeMain")}
            registerSub={register("zipcodeSub")}
          />
          <TextInput
            label="住所"
            id="address"
            placeholder="東京都○○区"
            register={register("address")}
            errorMessage={errors.address?.message}
            isRequired
            maxLength={100}
            type="text"
          />
          <TextInput
            label="電話番号"
            id="phone"
            placeholder="08012345678"
            register={register("phone")}
            errorMessage={errors.phone?.message}
            isRequired
            maxLength={11}
            type="tel"
          />
          <RadioInput register={register("person")} types={personTypes} />

          <TextArea
            label="連絡事項・コメントなど"
            id="content"
            register={register("content")}
            errorMessage={errors.content?.message}
            isRequired={false}
          />
          <PrimaryButton title="送信" />
        </div>
      </form>
      <BotNotification isBot={isBot} setIsBot={setIsBot} />
    </div>
  );
};

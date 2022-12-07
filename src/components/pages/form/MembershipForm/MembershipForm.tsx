import { FC } from "react";
import { AddressFiled } from "../atom/AddressFiled";
import { BDDatePicker } from "../atom/BDDatePicker";
import { PrimaryButton } from "../atom/PrimaryButton";
import { RadioInput } from "../atom/RadioInput";
import { TextArea } from "../atom/TextArea";
import { TextInput } from "../atom/TextInput";
import { InvalidNotification } from "@components/Common/InvalidNotification";
import { useFormOnSubmit } from "@hooks/useFormOnSubmit";
import { personTypes } from "@libs/constant";
import { MembershipSchema, MembershipSchemaType } from "@libs/zodSchema";

type Props = { formUID: string };

/** @package */
export const MembershipForm: FC<Props> = ({ formUID }) => {
  const {
    errors,
    register,
    onSubmit,
    handleSubmit,
    setValue,
    control,
    isBot,
    setIsBot,
  } = useFormOnSubmit<MembershipSchemaType>({
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
          <AddressFiled
            registerZipMain={register("zipcodeMain")}
            registerZipSub={register("zipcodeSub")}
            registerAddress={register("address")}
            setValue={setValue}
            errorMessage={errors.address?.message}
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
          <BDDatePicker
            label="生年月日"
            errorMessage={errors.birthday?.message}
            isRequired
            control={control}
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
      <InvalidNotification isInvalid={isBot} setIsInvalid={setIsBot}>
        操作は無効です
      </InvalidNotification>
    </div>
  );
};

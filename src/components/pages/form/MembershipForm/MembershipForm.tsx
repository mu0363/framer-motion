import { FC } from "react";
import { AddressField } from "../atom/AddressField";
import { BDDatePicker } from "../atom/BDDatePicker";
import { ConfirmButton } from "../atom/ConfirmButton";
import { ConfirmModal } from "../atom/ConfirmModal";
import { RadioInput } from "../atom/RadioInput";
import { TextArea } from "../atom/TextArea";
import { TextInput } from "../atom/TextInput";
import type { WithMembership } from "@types";
import { useFormOnSubmit } from "@hooks/useFormOnSubmit";
import { personTypes } from "@libs/constant";
import { MembershipSchema, MembershipSchemaType } from "@libs/zodSchema";

/** @package */
export const MembershipForm: FC = () => {
  const {
    errors,
    register,
    onSubmit,
    handleSubmit,
    confirmData,
    setIsOpened,
    isOpened,
    setValue,
    control,
  } = useFormOnSubmit<MembershipSchemaType>({
    schema: MembershipSchema,
  });

  return (
    <div>
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
          <AddressField
            zipcodeErrorMessage={errors.zipcodeMain?.message}
            addressErrorMessage={errors.address?.message}
            isRequired
            registerZipMain={register("zipcodeMain")}
            registerZipSub={register("zipcodeSub")}
            registerAddress={register("address")}
            setValue={setValue}
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
          <ConfirmButton>確認する</ConfirmButton>
        </div>
      </form>
      <ConfirmModal<WithMembership>
        isOpened={isOpened}
        setIsOpened={setIsOpened}
        confirmData={confirmData}
      />
    </div>
  );
};

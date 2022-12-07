import { AddressField } from "../atom/AddressField";
import { PrimaryButton } from "../atom/PrimaryButton";
import { RadioInput } from "../atom/RadioInput";
import { TextArea } from "../atom/TextArea";
import { TextInput } from "../atom/TextInput";
import type { FC } from "react";
import { InvalidNotification } from "@components/Common/InvalidNotification";
import { useFormOnSubmit } from "@hooks/useFormOnSubmit";
import { guestTypes, numberOfGuestTypes } from "@libs/constant";
import { EventSchema, EventSchemaType } from "@libs/zodSchema";

type Props = { formUID: string };

/** @package */
export const EventForm: FC<Props> = ({ formUID }) => {
  const {
    errors,
    register,
    onSubmit,
    handleSubmit,
    setValue,
    isBot,
    setIsBot,
  } = useFormOnSubmit<EventSchemaType>({ schema: EventSchema, formUID });

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

          <RadioInput register={register("guest")} types={guestTypes} />
          <RadioInput
            register={register("numberOfGuest")}
            types={numberOfGuestTypes}
          />

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

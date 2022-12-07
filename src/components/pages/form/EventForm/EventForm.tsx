import type { FC } from "react";
import { BotNotification } from "@components/Common/BotNotification/BotNotification";
import { PrimaryButton } from "@components/Common/PrimaryButton";
import { useFormOnSubmit } from "@hooks/useFormOnSubmit";
import { guestTypes, numberOfGuestTypes } from "@libs/constant";
import { EventSchema, EventSchemaType } from "@libs/zodSchema";
import { RadioInput } from "src/components/Common/RadioInput";
import { TextArea } from "src/components/Common/TextArea";
import { TextField } from "src/components/Common/TextField";

type Props = { formUID: string };

/** @package */
export const EventForm: FC<Props> = ({ formUID }) => {
  const { errors, register, onSubmit, handleSubmit, isBot, setIsBot } =
    useFormOnSubmit<EventSchemaType>({ schema: EventSchema, formUID });

  return (
    <div>
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
          <TextField
            label="住所"
            id="address"
            placeholder="東京都○○区"
            register={register("address")}
            errorMessage={errors.address?.message}
            isRequired
            maxLength={100}
            type="text"
          />
          <TextField
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
      <BotNotification isBot={isBot} setIsBot={setIsBot} />
    </div>
  );
};

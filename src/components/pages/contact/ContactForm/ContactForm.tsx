// FIXME: console.logを削除
/* eslint-disable no-console */
import { zodResolver } from "@hookform/resolvers/zod";
import { Notification } from "@mantine/core";
import { IconX } from "@tabler/icons";
import axios from "axios";
import { useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useForm, SubmitHandler } from "react-hook-form";
import type { FC } from "react";
import { contactSchema, ContactSchemaType } from "@libs/zodSchema";
import { PrimaryButton } from "src/components/Common/PrimaryButton";
import { RadioInput } from "src/components/Common/RadioInput";
import { TextArea } from "src/components/Common/TextArea";
import { TextField } from "src/components/Common/TextField";

type Props = { formUID: string };

/** @package */
export const ContactForm: FC<Props> = ({ formUID }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactSchemaType>({ resolver: zodResolver(contactSchema) });
  const [isBot, setIsBot] = useState(false);
  const { executeRecaptcha } = useGoogleReCaptcha();

  const onSubmit: SubmitHandler<ContactSchemaType> = async (data) => {
    try {
      if (!executeRecaptcha) {
        return;
      }

      const token = await executeRecaptcha("Contact");

      // reCAPTCHAでbotかどうか判定
      const serverEndpoint = "api/recaptcha";
      const res = await fetch(serverEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token,
        }),
      });

      if (res.status === 200) {
        // botでなければnewtに問い合わせ内容を送信
        axios.post(
          `https://${process.env.NEXT_PUBLIC_SPACE_UID}.form.newt.so/v1/${formUID}`,
          data,
          {
            headers: {
              Accept: "application/json",
            },
          }
        );
      } else {
        setIsBot(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

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
      {isBot && (
        <div className="mt-10">
          <Notification
            icon={<IconX size={18} />}
            color="red"
            onClose={() => setIsBot(false)}
          >
            操作は無効です。
          </Notification>
        </div>
      )}
    </div>
  );
};

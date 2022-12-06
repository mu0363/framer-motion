// FIXME: console.log削除
/* eslint-disable no-console */
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { ZodSchema } from "zod";

type Props = {
  schema: ZodSchema;
  formUID: string;
};

export const useFormOnSubmit = <T extends FieldValues>({
  schema,
  formUID,
}: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<T>({
    resolver: zodResolver(schema),
  });
  const [isBot, setIsBot] = useState(false);
  const { executeRecaptcha } = useGoogleReCaptcha();

  const onSubmit: SubmitHandler<T> = async (data) => {
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

  return {
    register,
    errors,
    handleSubmit,
    onSubmit,
    isBot,
    setIsBot,
  };
};

// FIXME: console.log削除
/* eslint-disable no-console */
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { ZodSchema } from "zod";

type Props = {
  schema: ZodSchema;
};

export const useFormOnSubmit = <T extends FieldValues>({ schema }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
  } = useForm<T>({
    resolver: zodResolver(schema),
  });
  const [isOpened, setIsOpened] = useState(false);
  const [confirmData, setConfirmData] = useState<T>();
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
        // botでなければ問い合わせ内容をセット
        setIsOpened(true);
        setConfirmData(data);
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
    control,
    isBot,
    setIsBot,
    setValue,
    confirmData,
    setIsOpened,
    isOpened,
  };
};

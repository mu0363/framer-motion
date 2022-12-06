// FIXME: console.logを削除
/* eslint-disable no-console */
import { zodResolver } from "@hookform/resolvers/zod";
import { Notification } from "@mantine/core";
import { IconX } from "@tabler/icons";
import axios from "axios";
import { cloneElement, useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import type { FC, ReactElement } from "react";
import { contactSchema } from "@libs/zodSchema";
import { PrimaryButton } from "src/components/Common/PrimaryButton";

type Inputs = z.infer<typeof contactSchema>;

type Props = { children: ReactElement; formUID: string };

/** @package */
export const BaseForm: FC<Props> = ({ children, formUID }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: zodResolver(contactSchema) });
  const [isBot, setIsBot] = useState(false);
  const { executeRecaptcha } = useGoogleReCaptcha();

  const childrenWithProps = cloneElement(children, {
    register,
    errors,
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
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
        {childrenWithProps}

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

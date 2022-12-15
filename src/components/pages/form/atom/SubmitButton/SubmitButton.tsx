// FIXME: any削除
import axios from "axios";
import { format } from "date-fns";
import { useRouter } from "next/router";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import type { FormType, SubmitProps } from "@types";
import { isContact, isEvent, isMembership } from "@libs/function";

export const SubmitButton = <T,>(props: SubmitProps<T>) => {
  const { children, confirmData, setIsError, setIsVisible } = props;
  const { executeRecaptcha } = useGoogleReCaptcha();
  const router = useRouter();
  const handleSubmit = async () => {
    setIsVisible(true);
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

      const postEmailData = async (formType: FormType, birthday?: Date) => {
        if (birthday) {
          await axios.post(process.env.NEXT_PUBLIC_EMAIL_ENDPOINT, {
            ...confirmData,
            formType,
            birthday: format(birthday, "yyyy年MM月dd日"),
          });
        } else {
          await axios.post(process.env.NEXT_PUBLIC_EMAIL_ENDPOINT, {
            ...confirmData,
            formType,
          });
        }
      };

      if (res.status === 200) {
        // botでなければ問い合わせ内容をセット
        if (isMembership(confirmData)) {
          try {
            postEmailData("membership", confirmData.birthday);
          } catch (error) {
            setIsError(true);
          }
        } else if (isEvent(confirmData)) {
          try {
            postEmailData("event");
          } catch (error) {
            setIsError(true);
          }
        } else if (isContact(confirmData)) {
          try {
            postEmailData("contact");
          } catch (error) {
            setIsError(true);
          }
        }
        router.push("/message-delivered");
      } else {
        setIsError(true);
        setIsVisible(false);
      }
    } catch (error) {
      setIsError(true);
      setIsVisible(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleSubmit}
      className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      {children}
    </button>
  );
};

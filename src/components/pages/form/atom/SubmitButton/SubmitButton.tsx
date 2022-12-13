// FIXME: console.log() 削除 any削除
/* eslint-disable no-console */
// import { useRouter } from "next/router";
import axios from "axios";
import type { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  confirmData?: any;
  setIsError: (isError: boolean) => void;
};

export const SubmitButton: FC<Props> = ({
  children,
  confirmData = {},
  setIsError,
}) => {
  // const router = useRouter();
  const handleSubmit = async () => {
    if ("birthday" in confirmData) {
      try {
        await axios.post("/api/send", {
          formType: "membership",
          ...confirmData,
        });
      } catch (error) {
        setIsError(true);
      }
    }
    if ("guest" in confirmData) {
      try {
        await axios.post("/api/send", {
          formType: "event",
          ...confirmData,
        });
      } catch (error) {
        setIsError(true);
      }
    }
    if ("person" in confirmData) {
      try {
        await axios.post("/api/send", { formType: "contact", ...confirmData });
      } catch (error) {
        setIsError(true);
      }
    }

    // router.push("/message-delivered");
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

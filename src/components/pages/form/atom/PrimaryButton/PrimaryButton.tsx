// FIXME: console.log() 削除 any削除
/* eslint-disable no-console */
import { useRouter } from "next/router";
import type { FC } from "react";

type Props = {
  title: string;
  type: "submit" | "button";
  confirmData?: any;
};

export const PrimaryButton: FC<Props> = ({ title, type, confirmData = {} }) => {
  const router = useRouter();
  const handleSubmit = () => {
    console.log({ confirmData });
    router.push("/message-delivered");
  };

  return (
    <button
      type={type ? "submit" : "button"}
      onClick={type === "button" ? handleSubmit : undefined}
      className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      {title}
    </button>
  );
};

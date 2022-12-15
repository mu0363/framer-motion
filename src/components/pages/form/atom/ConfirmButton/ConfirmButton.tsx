// FIXME: console.log() 削除 any削除
/* eslint-disable no-console */
import type { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const ConfirmButton: FC<Props> = ({ children }) => {
  return (
    <button
      type="submit"
      className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      {children}
    </button>
  );
};

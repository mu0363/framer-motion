import type { FC } from "react";

type Props = {
  text: string;
};

/** @package */
export const Badge: FC<Props> = ({ text }) => {
  return (
    <span className="rounded-full border border-green-400 px-2 py-0.5 text-xs text-green-600 xl:px-2 xl:py-1">
      {text}
    </span>
  );
};

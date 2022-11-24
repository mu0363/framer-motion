import type { FC } from "react";

type Props = {
  label: string;
  errorMessage?: string;
};

/** @package */
export const LabelAndError: FC<Props> = ({ label, errorMessage = "" }) => {
  return (
    <div className="mb-2 flex items-center space-x-2">
      <span className="text-sm font-bold">{label}</span>
      {errorMessage && (
        <span className="text-sm font-bold text-red-700">{errorMessage}</span>
      )}
    </div>
  );
};

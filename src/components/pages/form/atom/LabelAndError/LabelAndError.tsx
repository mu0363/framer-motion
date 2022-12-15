import type { FC } from "react";

type Props = {
  label: string;
  errorMessage?: string;
  isRequired: boolean;
};

/** @package */
export const LabelAndError: FC<Props> = ({
  label,
  errorMessage = "",
  isRequired,
}) => {
  return (
    <div className="mb-2 flex items-center">
      <div className="flex items-center space-x-1">
        <span className="text-sm font-bold md:text-base">{label}</span>
        {isRequired && <span className="text-xl text-red-700">*</span>}
      </div>
      {errorMessage && (
        <span className="text-sm font-bold text-red-700">{errorMessage}</span>
      )}
    </div>
  );
};

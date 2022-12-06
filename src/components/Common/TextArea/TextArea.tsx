import { UseFormRegisterReturn } from "react-hook-form";
import { LabelAndError } from "../LabelAndError";
import type { FC } from "react";

type Props = {
  label: string;
  id: string;
  isRequired: boolean;
  register: UseFormRegisterReturn;
  errorMessage?: string;
};

/** @package */
export const TextArea: FC<Props> = ({
  label,
  id,
  isRequired,
  register,
  errorMessage = "",
}) => {
  return (
    <label htmlFor={id}>
      <LabelAndError label={label} errorMessage={errorMessage} />
      <div className="mt-1">
        <textarea
          id={id}
          rows={3}
          className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder:text-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
          defaultValue=""
          required={isRequired}
          {...register}
        />
      </div>
    </label>
  );
};

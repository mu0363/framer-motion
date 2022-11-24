import { UseFormRegisterReturn } from "react-hook-form";
import { LabelAndError } from "../LabelAndError";
import type { FC } from "react";

type Props = {
  label: string;
  id: string;
  placeholder: string;
  register: UseFormRegisterReturn;
  errorMessage?: string;
};

/** @package */
export const TextField: FC<Props> = ({
  label,
  id,
  placeholder,
  register,
  errorMessage = "",
}) => {
  return (
    <label htmlFor={id}>
      <LabelAndError label={label} errorMessage={errorMessage} />
      <input
        id={id}
        className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder:text-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        placeholder={placeholder}
        {...register}
      />
    </label>
  );
};

import { UseFormRegisterReturn } from "react-hook-form";
import type { ChangeEvent, FC } from "react";

type Props = {
  id: string;
  placeholder: string;
  register: UseFormRegisterReturn;
  length: number;
  type: "tel" | "text" | "email";
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

/** @package */
export const ZipcodeInput: FC<Props> = ({
  id,
  placeholder,
  register,
  length,
  type,
  onChange,
}) => {
  return (
    <label htmlFor={id}>
      <input
        id={id}
        className="relative block w-24 appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder:text-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        placeholder={placeholder}
        minLength={length}
        maxLength={length}
        type={type}
        {...register}
        onChange={onChange}
      />
    </label>
  );
};

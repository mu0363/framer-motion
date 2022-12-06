import { UseFormRegisterReturn } from "react-hook-form";
import type { FC } from "react";
import { RadioInputType } from "@types";

type Props = {
  register: UseFormRegisterReturn;
  types: RadioInputType[];
};

/** @package */
export const RadioInput: FC<Props> = ({ register, types }) => {
  return (
    <div className="flex items-center space-x-3">
      {types.map((type) => (
        <div key={type.id} className="flex items-center">
          <input
            id={type.id.toString()}
            type="radio"
            value={type.title}
            defaultChecked={type.id === 1}
            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
            {...register}
          />
          <label
            htmlFor={type.id.toString()}
            className="ml-2 text-sm font-bold"
          >
            {type.title}
          </label>
        </div>
      ))}
    </div>
  );
};

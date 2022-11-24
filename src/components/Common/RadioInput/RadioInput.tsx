import { UseFormRegisterReturn } from "react-hook-form";
import type { FC } from "react";

const personTypes = [
  { id: "患者本人", title: "患者本人" },
  { id: "家族", title: "家族" },
  { id: "その他", title: "その他" },
];

type Props = {
  register: UseFormRegisterReturn;
};

/** @package */
export const RadioInput: FC<Props> = ({ register }) => {
  return (
    <div className="flex items-center space-x-3">
      {personTypes.map((personType) => (
        <div key={personType.id} className="flex items-center">
          <input
            id={personType.id}
            type="radio"
            value={personType.title}
            defaultChecked={personType.id === "患者本人"}
            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
            {...register}
          />
          <label htmlFor={personType.id} className="ml-2 text-sm font-bold">
            {personType.title}
          </label>
        </div>
      ))}
    </div>
  );
};

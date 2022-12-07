import { ZipcodeInput } from "../ZipcodeInput";
import type { FC } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

type Props = {
  registerMain: UseFormRegisterReturn;
  registerSub: UseFormRegisterReturn;
};

export const ZipcodeFiled: FC<Props> = ({ registerMain, registerSub }) => {
  return (
    <div>
      <div className="mb-2 flex items-center space-x-4">
        <div className="flex items-center space-x-1">
          <span className="text-sm font-bold md:text-lg">郵便番号</span>
          <span className="text-xl text-red-700">*</span>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <ZipcodeInput
          id="zipcode-main"
          placeholder="例:000"
          register={registerMain}
          length={3}
          type="text"
        />
        <span> - </span>
        <ZipcodeInput
          id="zipcode-sub"
          placeholder="例:0000"
          register={registerSub}
          length={4}
          type="text"
        />
      </div>
    </div>
  );
};

import axios from "axios";
import { useState } from "react";
import { LabelAndError } from "../LabelAndError";
import { ZipcodeInput } from "../ZipcodeInput";
import type { ChangeEvent, FC } from "react";
import type { UseFormRegisterReturn, UseFormSetValue } from "react-hook-form";
import { InvalidNotification } from "@components/Common/InvalidNotification";

type Zipcode = {
  main: string;
  sub: string;
};

type Props = {
  registerZipMain: UseFormRegisterReturn;
  registerZipSub: UseFormRegisterReturn;
  registerAddress: UseFormRegisterReturn;
  // FIXME: any削除
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setValue: UseFormSetValue<any>;
  zipcodeErrorMessage?: string;
  addressErrorMessage?: string;
  isRequired: boolean;
};

export const AddressField: FC<Props> = ({
  registerZipMain,
  registerZipSub,
  registerAddress,
  setValue,
  zipcodeErrorMessage = "",
  addressErrorMessage = "",
  isRequired,
}) => {
  const [zipcode, setZipcode] = useState<Zipcode>({
    main: "",
    sub: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isInvalid, setIsInvalid] = useState<boolean>(false);

  const updateZipcodeMain = (e: ChangeEvent<HTMLInputElement>) => {
    setZipcode({ ...zipcode, main: e.target.value });
  };

  const updateZipcodeSub = async (e: ChangeEvent<HTMLInputElement>) => {
    setZipcode({ ...zipcode, sub: e.target.value });
    if (e.target.value.length === 4 && zipcode.main.length === 3) {
      setIsLoading(true);
      setIsInvalid(false);
      setValue("address", "");
      const res = await axios.get("https://zipcloud.ibsnet.co.jp/api/search", {
        params: {
          zipcode: zipcode.main + e.target.value,
        },
      });

      if (res.data.results === null) {
        setIsLoading(false);
        setIsInvalid(true);
      }

      if (res.data.results) {
        setIsLoading(false);
        const result = res.data.results[0];
        setValue(
          "address",
          `${result.address1}${result.address2}${result.address3}`
        );
      }
    }
  };

  return (
    <div>
      <LabelAndError
        label="郵便番号"
        errorMessage={zipcodeErrorMessage}
        isRequired={isRequired}
      />
      <div className="mb-6 flex items-center space-x-2">
        <ZipcodeInput
          id="zipcode-main"
          placeholder="例:000"
          register={registerZipMain}
          length={3}
          type="text"
          onChange={updateZipcodeMain}
        />
        <span> - </span>
        <ZipcodeInput
          id="zipcode-sub"
          placeholder="例:0000"
          register={registerZipSub}
          length={4}
          type="text"
          onChange={updateZipcodeSub}
        />
      </div>

      <LabelAndError
        label="住所"
        errorMessage={addressErrorMessage}
        isRequired
      />
      <input
        id="address"
        className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder:text-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        placeholder={isLoading ? "検索中です..." : "東京都○○区"}
        disabled={!!isLoading}
        maxLength={100}
        type="text"
        {...registerAddress}
      />

      <InvalidNotification isInvalid={isInvalid} setIsInvalid={setIsInvalid}>
        住所の取得に失敗しました。
      </InvalidNotification>
    </div>
  );
};

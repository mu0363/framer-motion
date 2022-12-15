import type { EventSchemaType } from "@libs/zodSchema";
import type { FC } from "react";

/** @package */
export const ConfirmEventField: FC<EventSchemaType> = ({
  name,
  email,
  address,
  zipcodeMain,
  zipcodeSub,
  phone,
  guest,
  numberOfGuest,
  content,
}) => {
  return (
    <>
      <div>
        <p className="label-field">お名前</p>
        <p className="data-field">{name}</p>
      </div>
      <hr />
      <div>
        <p className="label-field">メールアドレス</p>
        <p className="data-field">{email}</p>
      </div>
      <hr />
      <div>
        <p className="label-field">郵便番号</p>
        <span className="data-field">{zipcodeMain}</span>
        <span>-</span>
        <span className="data-field">{zipcodeSub}</span>
      </div>
      <hr />
      <div>
        <p className="label-field">電話</p>
        <p className="data-field">{phone}</p>
      </div>
      <hr />
      <div>
        <p className="label-field">住所</p>
        <p className="data-field">{address}</p>
      </div>
      <hr />
      <div>
        <p className="label-field">対象</p>
        <p className="data-field">{guest}</p>
      </div>
      <hr />
      <div>
        <p className="label-field">人数</p>
        <p className="data-field">{numberOfGuest}</p>
      </div>
      <hr />
      <div>
        <p className="label-field">連絡事項</p>
        <p className="data-field">{content}</p>
      </div>
    </>
  );
};

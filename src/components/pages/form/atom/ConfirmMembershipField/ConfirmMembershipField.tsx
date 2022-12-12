import { format } from "date-fns";
import type { MembershipSchemaType } from "@libs/zodSchema";
import type { FC } from "react";

/** @package */
export const ConfirmMembershipField: FC<MembershipSchemaType> = ({
  name,
  email,
  address,
  zipcodeMain,
  zipcodeSub,
  phone,
  person,
  birthday,
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
        <p className="data-field">{person}</p>
      </div>
      <hr />
      <div>
        <p className="label-field">生年月日</p>
        <p className="data-field">{format(birthday, "yyyy年MM月dd日")}</p>
      </div>
      <hr />
      <div>
        <p className="label-field">連絡事項</p>
        <p className="data-field">{content}</p>
      </div>
    </>
  );
};

import type { ContactSchemaType } from "@libs/zodSchema";
import type { FC } from "react";

/** @package */
export const ConfirmContactField: FC<ContactSchemaType> = ({
  name,
  email,
  person,
  content,
}) => {
  return (
    <>
      <div>
        <p className="mb-1 text-xs text-gray-500">お名前</p>
        <p className="data-field">{name}</p>
      </div>
      <hr />
      <div>
        <p className="mb-1 text-xs text-gray-500">メールアドレス</p>
        <p className="data-field">{email}</p>
      </div>
      <hr />
      <div>
        <p className="mb-1 text-xs text-gray-500">対象</p>
        <p className="data-field">{person}</p>
      </div>
      <hr />
      <div>
        <p className="mb-1 text-xs text-gray-500">お問い合わせ内容</p>
        <p className="data-field">{content}</p>
      </div>
    </>
  );
};

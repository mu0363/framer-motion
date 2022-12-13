// FIXME: コンポーネントを出し分ける
/* eslint-disable no-nested-ternary */
import { Modal } from "@mantine/core";
import { useCallback, useState } from "react";
import { ConfirmContactField } from "../ConfirmContactField";
import { ConfirmEventField } from "../ConfirmEventField";
import { ConfirmMembershipField } from "../ConfirmMembershipField";
import { SubmitButton } from "../SubmitButton";
import type {
  AllSchemaTypes,
  ConfirmProps,
  NarrowSchemaType,
  WithContact,
  WithEvent,
  WithMembership,
} from "@types";
import { InvalidNotification } from "@components/Common/InvalidNotification";

/** @package */
export const ConfirmModal = <T,>(props: ConfirmProps<T>) => {
  const { isOpened, setIsOpened, confirmData } = props;
  const [isError, setIsError] = useState(true);

  const isContact = useCallback(
    (data: AllSchemaTypes): data is NarrowSchemaType<WithContact> => {
      if (data !== undefined && "person" in data) {
        return true;
      }
      return false;
    },
    []
  );

  const isEvent = useCallback(
    (data: AllSchemaTypes): data is NarrowSchemaType<WithEvent> => {
      if (data !== undefined && "guest" in data) {
        return true;
      }
      return false;
    },
    []
  );

  const isMembership = useCallback(
    (data: AllSchemaTypes): data is NarrowSchemaType<WithMembership> => {
      if (data !== undefined && "birthday" in data) {
        return true;
      }
      return false;
    },
    []
  );

  return (
    <Modal
      overlayColor="gray"
      overlayOpacity={0.55}
      overlayBlur={3}
      centered
      size="md"
      withCloseButton
      opened={isOpened}
      onClose={() => setIsOpened(false)}
      title="以下の内容で送信しますか?"
    >
      <div className="my-4 grid gap-3">
        {isMembership(confirmData) ? (
          <ConfirmMembershipField {...confirmData} />
        ) : isEvent(confirmData) ? (
          <ConfirmEventField {...confirmData} />
        ) : isContact(confirmData) ? (
          <ConfirmContactField {...confirmData} />
        ) : null}
      </div>
      <InvalidNotification isInvalid={isError} setIsInvalid={setIsError}>
        メールの送信に失敗しました
      </InvalidNotification>
      <SubmitButton confirmData={confirmData} setIsError={setIsError}>
        送信するよ
      </SubmitButton>
    </Modal>
  );
};

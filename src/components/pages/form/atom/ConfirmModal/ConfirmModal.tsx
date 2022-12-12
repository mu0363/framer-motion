// FIXME: コンポーネントを出し分ける
/* eslint-disable no-nested-ternary */
import { Modal } from "@mantine/core";
import { ConfirmContactField } from "../ConfirmContactField";
import { ConfirmEventField } from "../ConfirmEventField";
import { ConfirmMembershipField } from "../ConfirmMembershipField";
import { PrimaryButton } from "../PrimaryButton";
import type {
  AllSchemaTypes,
  ConfirmProps,
  NarrowSchemaType,
  WithContact,
  WithEvent,
  WithMembership,
} from "@types";

/** @package */
export const ConfirmModal = <T,>(props: ConfirmProps<T>) => {
  const { isOpened, setIsOpened, confirmData } = props;

  const isContact = (
    data: AllSchemaTypes
  ): data is NarrowSchemaType<WithContact> => {
    if (data !== undefined && "person" in data) {
      return true;
    }
    return false;
  };

  const isEvent = (
    data: AllSchemaTypes
  ): data is NarrowSchemaType<WithEvent> => {
    if (data !== undefined && "guest" in data) {
      return true;
    }
    return false;
  };

  const isMembership = (
    data: AllSchemaTypes
  ): data is NarrowSchemaType<WithMembership> => {
    if (data !== undefined && "birthday" in data) {
      return true;
    }
    return false;
  };

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

      <PrimaryButton title="送信する" type="button" confirmData={confirmData} />
    </Modal>
  );
};

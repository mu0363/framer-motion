// FIXME: コンポーネントを出し分ける
/* eslint-disable no-nested-ternary */
import { Modal, LoadingOverlay } from "@mantine/core";
import { useState } from "react";
import { ConfirmContactField } from "../ConfirmContactField";
import { ConfirmEventField } from "../ConfirmEventField";
import { ConfirmMembershipField } from "../ConfirmMembershipField";
import { SubmitButton } from "../SubmitButton";
import type { ConfirmProps } from "@types";
import { InvalidNotification } from "@components/Common/InvalidNotification";
import { isContact, isEvent, isMembership } from "@libs/function";

/** @package */
export const ConfirmModal = <T,>(props: ConfirmProps<T>) => {
  const { isOpened, setIsOpened, confirmData } = props;
  const [isError, setIsError] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

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
      <LoadingOverlay visible={isVisible} overlayBlur={2} />
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
      <SubmitButton
        confirmData={confirmData}
        setIsError={setIsError}
        setIsVisible={setIsVisible}
      >
        送信するよ
      </SubmitButton>
    </Modal>
  );
};

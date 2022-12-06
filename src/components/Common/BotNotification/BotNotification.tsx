import { Notification } from "@mantine/core";
import { IconX } from "@tabler/icons";
import type { FC } from "react";

type Props = {
  isBot: boolean;
  setIsBot: (isBot: boolean) => void;
};

export const BotNotification: FC<Props> = ({ isBot, setIsBot }) => {
  return (
    <div>
      {isBot && (
        <div className="mt-10">
          <Notification
            icon={<IconX size={18} />}
            color="red"
            onClose={() => setIsBot(false)}
          >
            操作は無効です。
          </Notification>
        </div>
      )}
    </div>
  );
};

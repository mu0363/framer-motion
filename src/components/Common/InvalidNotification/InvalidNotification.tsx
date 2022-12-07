import { Notification } from "@mantine/core";
import { IconX } from "@tabler/icons";
import type { FC, ReactNode } from "react";

type Props = {
  isInvalid: boolean;
  setIsInvalid: (isBot: boolean) => void;
  children: ReactNode;
};

export const InvalidNotification: FC<Props> = ({
  isInvalid,
  setIsInvalid,
  children,
}) => {
  return (
    <div>
      {isInvalid && (
        <div className="mt-10">
          <Notification
            icon={<IconX size={18} />}
            color="red"
            onClose={() => setIsInvalid(false)}
          >
            {children}
          </Notification>
        </div>
      )}
    </div>
  );
};

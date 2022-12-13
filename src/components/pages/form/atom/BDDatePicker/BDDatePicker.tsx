import "dayjs/locale/ja";
import { DatePicker } from "@mantine/dates";
import { useMediaQuery } from "@mantine/hooks";
import { IconCalendar } from "@tabler/icons";
import { Control, Controller } from "react-hook-form";
import { LabelAndError } from "../LabelAndError";
import type { FC } from "react";
import { MembershipSchemaType } from "@libs/zodSchema";

type Props = {
  label: string;
  control: Control<MembershipSchemaType>;
  errorMessage?: string;
  isRequired: boolean;
};

/** @package */
export const BDDatePicker: FC<Props> = ({
  label,
  control,
  errorMessage = "",
  isRequired,
}) => {
  const isMobile = useMediaQuery("(max-width: 755px)");
  return (
    <div>
      <LabelAndError
        label={label}
        errorMessage={errorMessage}
        isRequired={isRequired}
      />
      <Controller
        control={control}
        name="birthday"
        render={({ field: { onChange, value } }) => (
          <DatePicker
            sx={{ fontSize: "16px" }}
            locale="ja"
            placeholder="生年月日を選択してください"
            inputFormat="YYYY年MM月DD日"
            onChange={onChange}
            value={value}
            icon={<IconCalendar size={16} />}
            dropdownType={isMobile ? "modal" : "popover"}
            firstDayOfWeek="sunday"
          />
        )}
      />
    </div>
  );
};

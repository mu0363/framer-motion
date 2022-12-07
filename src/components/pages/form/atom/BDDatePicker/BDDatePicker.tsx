import "dayjs/locale/ja";
import { DatePicker } from "@mantine/dates";
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
  return (
    <>
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
            locale="ja"
            withAsterisk
            placeholder="生年月日を選択してください"
            inputFormat="YYYY年MM月DD日"
            onChange={onChange}
            value={value}
            icon={<IconCalendar size={16} />}
            style={{
              fontSize: 26,
              marginTop: 24,
            }}
          />
        )}
      />
    </>
  );
};

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { ZodSchema } from "zod";

type Props = {
  schema: ZodSchema;
};

export const useFormOnSubmit = <T extends FieldValues>({ schema }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
  } = useForm<T>({
    resolver: zodResolver(schema),
  });
  const [isOpened, setIsOpened] = useState(false);
  const [confirmData, setConfirmData] = useState<T>();

  const onSubmit: SubmitHandler<T> = async (data) => {
    setIsOpened(true);
    setConfirmData(data);
  };

  return {
    register,
    errors,
    handleSubmit,
    onSubmit,
    control,
    setValue,
    confirmData,
    setIsOpened,
    isOpened,
  };
};

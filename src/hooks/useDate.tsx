import { parseISO, format } from "date-fns";

export const useDate = (publishedAt: string) => {
  return format(parseISO(publishedAt), "yyyy年MM月dd日");
};

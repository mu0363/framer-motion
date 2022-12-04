import { parseISO } from "date-fns";

export const useDate = (publishedAt: string) => {
  const year = parseISO(publishedAt).getFullYear();
  const month = parseISO(publishedAt).getMonth();
  const day = parseISO(publishedAt).getDay();

  return `${year}年${month}月${day}日`;
};

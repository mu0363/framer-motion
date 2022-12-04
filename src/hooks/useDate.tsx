export const useDate = (publishedAt: string) => {
  const date = new Date(publishedAt);
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDay();

  return `${year}年${month}月${day}日`;
};

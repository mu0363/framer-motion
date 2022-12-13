// ページネーションが何ページあるか計算
export const pagesRange = (start: number, end: number) =>
  [...Array(end - start + 1)].map((_, i) => start + i);

export const indention = (text: string) => {
  const replacedText = text.replace(/\n/g, "<br />");
  return replacedText;
};

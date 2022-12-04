// ページネーションが何ページあるか計算
export const pagesRange = (start: number, end: number) =>
  [...Array(end - start + 1)].map((_, i) => start + i);

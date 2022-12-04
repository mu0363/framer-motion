export const useRange = (start: number, total: number, perRange: number) => {
  return [...Array(Math.ceil(total / perRange) - start + 1)].map(
    (_, i) => start + i
  );
};

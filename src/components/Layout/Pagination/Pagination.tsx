import Link from "next/link";
import type { FC } from "react";
import { PER_PAGE } from "@pages/article/page/[pageId]";

type Props = {
  totalCount: number;
};

export const Pagination: FC<Props> = ({ totalCount }) => {
  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);

  return (
    <ul>
      {range(1, Math.ceil(totalCount / PER_PAGE)).map((number) => (
        <li key={number}>
          <Link href={`/article/page/${number}`}>{number}</Link>
        </li>
      ))}
    </ul>
  );
};

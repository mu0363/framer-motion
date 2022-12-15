import { parseISO, format } from "date-fns";
import Link from "next/link";
import type { FC } from "react";
import type { ArticleType } from "src/types";

type Props = Omit<ArticleType, "author" | "body" | "meta">;

/** @package */
export const ArticleCard: FC<Props> = ({ title, _id, publishedAt }) => {
  return (
    <div className="transition-colors md:hover:bg-green-50">
      <Link href={`/article/content/${_id}`}>
        <hr />
        <div className="flex items-center justify-between transition-transform md:hover:translate-x-2">
          <div className="flex items-center space-x-4 overflow-hidden p-3 lg:space-x-16">
            <p className="w-16 text-xs text-gray-400 xl:text-sm">
              {format(parseISO(publishedAt), "yyyy.MM.dd")}
            </p>
            <p className="truncate text-xs lg:text-sm">{title}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

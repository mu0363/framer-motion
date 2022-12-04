import { format } from "date-fns";
import Link from "next/link";
import type { FC } from "react";
import type { ArticleType } from "src/types";

type Props = Omit<ArticleType, "author" | "body" | "meta">;

/** @package */
export const ArticleCard: FC<Props> = ({ title, _id, _sys }) => {
  return (
    <div className="transition-colors hover:bg-green-50">
      <Link href={`/article/content/${_id}`}>
        <hr />
        <div className="flex items-center justify-between transition-transform hover:translate-x-2">
          <div className="flex items-center space-x-4 overflow-hidden p-3 lg:space-x-16">
            <span className="text-xs text-gray-400 xl:text-sm">
              {format(new Date(_sys.createdAt), "yyyy.MM.dd")}
            </span>
            <span className="truncate text-xs lg:text-base">{title}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

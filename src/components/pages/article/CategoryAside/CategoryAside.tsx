import { PlayIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import type { CategoryType } from "@types";
import type { FC } from "react";

type Props = {
  categories: CategoryType[];
};

/** @package */
export const CategoryAside: FC<Props> = ({ categories }) => {
  return (
    <div className="grid-rows-1 lg:col-span-1">
      <p className="mb-5 text-lg font-bold md:mb-10">記事カテゴリ</p>
      <div className="flex flex-col space-y-4">
        {categories.map((item) => (
          <Link href={`/article/category/${item._id}/1`} key={item._id}>
            <div className="flex items-center space-x-3 transition-transform md:hover:translate-x-1 md:hover:text-cyan-600">
              <PlayIcon className="h-2" />
              <p className="text-xs">{item.category}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

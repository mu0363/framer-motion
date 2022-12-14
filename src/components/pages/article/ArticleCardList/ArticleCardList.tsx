import { ArticleCard } from "../ArticleCard/ArticleCard";
import type { ArticleType } from "@types";
import type { FC } from "react";

type Props = {
  articles: ArticleType[];
};

/** @package */
export const ArticleCardList: FC<Props> = ({ articles }) => {
  return (
    <div className="grid-rows-5 lg:col-span-5">
      {articles.map((item) => {
        const { _id } = item;
        return (
          <div key={_id}>
            <ArticleCard {...item} />
          </div>
        );
      })}
      <hr />
    </div>
  );
};

import { Pagination } from "@mantine/core";
import { ArticleCardList } from "../ArticleCardList/ArticleCardList";
import { CategoryAside } from "../CategoryAside";
import type { ArticleType, CategoryType } from "@types";
import type { FC } from "react";

type Props = {
  articles: ArticleType[];
  categories: CategoryType[];
  pageRange: number;
  currentPage: number;
  handlePaginate: (page: number) => void;
};

/** @package */
export const ArticleCardListPage: FC<Props> = ({
  articles,
  categories,
  pageRange,
  currentPage,
  handlePaginate,
}) => {
  return (
    <section className="mx-5 flex flex-col lg:mx-20">
      <div className="mb-20 flex flex-col-reverse lg:grid lg:grid-cols-6">
        <CategoryAside categories={categories} />
        <ArticleCardList articles={articles} />
      </div>
      <div className="mx-auto mb-20">
        <Pagination
          initialPage={1}
          total={pageRange}
          page={currentPage}
          color="cyan"
          radius="md"
          siblings={2}
          onChange={handlePaginate}
        />
      </div>
    </section>
  );
};

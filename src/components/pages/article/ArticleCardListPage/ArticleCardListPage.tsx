import { Pagination } from "@mantine/core";
import { ArticleCardList } from "../ArticleCardList/ArticleCardList";
import { CategoryAside } from "../CategoryAside";
import { CommonBreadcrumbs } from "../CommonBreadcrumbs/CommonBreadcrumbs";
import type { ArticleType, CategoryType } from "@types";
import type { FC } from "react";
import { useBreadcrumbs } from "@hooks/useBreadcrumbs";

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
  const { breadcrumbsItems, categoryName } = useBreadcrumbs(categories);

  return (
    <div className="flex flex-col">
      <CommonBreadcrumbs
        breadcrumbsItems={breadcrumbsItems}
        title={categoryName}
      />
      <div className="mb-8 flex flex-col-reverse md:mb-16 lg:grid lg:grid-cols-6">
        <div className="hidden lg:inline-block">
          <CategoryAside categories={categories} />
        </div>
        <ArticleCardList articles={articles} />
      </div>
      <div className="mx-auto mb-16">
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
      <div className="mb-16 lg:hidden">
        <CategoryAside categories={categories} />
      </div>
    </div>
  );
};

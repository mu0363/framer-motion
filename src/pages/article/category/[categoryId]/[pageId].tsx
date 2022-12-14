import Head from "next/head";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import type { ArticleType, CategoryType } from "src/types";
import { ArticleCardListPage } from "@components/pages/article/ArticleCardListPage/ArticleCardListPage";
import { PER_PAGE } from "@libs/constant";
import { pagesRange } from "@libs/function";
import { MainLayout } from "src/components/Layout/MainLayout";
import { newtClient } from "src/libs/newtClient";

type Props = {
  articles: ArticleType[];
  categories: CategoryType[];
  categoryId: string;
  pageRange: number;
};

const ArticleCategory: NextPage<Props> = (props) => {
  const { categoryId, ...rest } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();

  useEffect(() => {
    setCurrentPage(Number(router.query.pageId));
  }, [router]);

  const handlePaginate = useCallback(
    (page: number) => {
      router.push(`/article/category/${categoryId}/${page}`);
    },
    [router, categoryId]
  );

  return (
    <>
      <Head>
        <title>Category Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainLayout>
        <ArticleCardListPage
          {...rest}
          currentPage={currentPage}
          handlePaginate={handlePaginate}
        />
      </MainLayout>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { items: categories } = await newtClient.getContents<CategoryType>({
    appUid: process.env.NEWT_ARTICLE_APP_UID,
    modelUid: process.env.NEWT_CATEGORY_UID,
    query: {
      select: ["_id"],
    },
  });

  const { items: articleItems } = await newtClient.getContents<ArticleType>({
    appUid: process.env.NEWT_ARTICLE_APP_UID,
    modelUid: process.env.NEWT_ARTICLE_UID,
    query: {
      select: ["categories"],
    },
  });

  const categoryIdLength = categories.map((category) => {
    const array = articleItems.filter(
      (article) => article.categories[0]._id === category._id
    );
    return { categoryId: category._id, length: array.length };
  });

  const categoryPaths: { params: { categoryId: string; pageId: string } }[] =
    [];
  categoryIdLength.forEach((category) => {
    const categoryLengthArray = pagesRange(
      1,
      Math.ceil(category.length / PER_PAGE)
    );

    categoryLengthArray.forEach((number) => {
      const paramItem = {
        params: {
          categoryId: category.categoryId,
          pageId: number.toString(),
        },
      };
      categoryPaths.push(paramItem);
    });
  });

  return { paths: categoryPaths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  if (!ctx.params) {
    return { notFound: true };
  }

  const { pageId, categoryId } = ctx.params;

  const { items, total } = await newtClient.getContents<ArticleType>({
    appUid: process.env.NEWT_ARTICLE_APP_UID,
    modelUid: process.env.NEWT_ARTICLE_UID,
    query: {
      limit: PER_PAGE,
      skip: (Number(pageId) - 1) * PER_PAGE,
      categories: categoryId,
    },
  });

  const { items: categories } = await newtClient.getContents<CategoryType>({
    appUid: process.env.NEWT_ARTICLE_APP_UID,
    modelUid: process.env.NEWT_CATEGORY_UID,
    query: {
      select: ["_id", "category"],
    },
  });

  const numArray = pagesRange(1, Math.ceil(total / PER_PAGE));

  return {
    props: {
      articles: items,
      categories,
      totalCount: total,
      pageRange: numArray.length,
      categoryId,
    },
  };
};

export default ArticleCategory;

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
  totalCount: number;
  pageRange: number;
};

const ArticlePage: NextPage<Props> = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();

  useEffect(() => {
    setCurrentPage(Number(router.query.pageId));
  }, [router]);

  const handlePaginate = useCallback(
    (page: number) => {
      router.push(`/article/page/${page}`);
    },
    [router]
  );

  return (
    <>
      <Head>
        <title>Article Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainLayout>
        <ArticleCardListPage
          {...props}
          currentPage={currentPage}
          handlePaginate={handlePaginate}
        />
      </MainLayout>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { total } = await newtClient.getContents<ArticleType>({
    appUid: process.env.NEWT_ARTICLE_APP_UID,
    modelUid: process.env.NEWT_ARTICLE_UID,
    query: {
      select: ["_id"],
      limit: 1,
    },
  });

  // 全てのパスの配列を作成
  const numArray = pagesRange(1, Math.ceil(total / PER_PAGE));
  const paths = numArray.map((number) => `/article/page/${number}`);

  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  if (!ctx.params) {
    return { notFound: true };
  }

  const { pageId } = ctx.params;

  const { items, total } = await newtClient.getContents<ArticleType>({
    appUid: process.env.NEWT_ARTICLE_APP_UID,
    modelUid: process.env.NEWT_ARTICLE_UID,
    query: {
      limit: PER_PAGE,
      skip: (Number(pageId) - 1) * PER_PAGE,
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
    },
  };
};

export default ArticlePage;

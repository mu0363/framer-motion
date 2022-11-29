import { Pagination } from "@mantine/core";
import Head from "next/head";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import type { ArticleType } from "src/types";
import { PER_PAGE } from "@libs/constant";
import { TextItem } from "src/components/Common/TextItem";
import { MainLayout } from "src/components/Layout/MainLayout";
import { ArticleCard } from "src/components/pages/article/ArticleCard";
import { newtClient } from "src/libs/newtClient";

type Props = {
  articles: ArticleType[];
  totalCount: number;
  pageRange: number;
};

const ArticlePage: NextPage<Props> = ({ articles, totalCount, pageRange }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();

  useEffect(() => {
    setCurrentPage(Number(router.query.pageId));
  }, [router]);

  const handlePaginate = useCallback(
    (page: number) => {
      if (page === 1) {
        router.push("/article/page/1");
      } else {
        router.push(`${page}`);
      }
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
        <section className="flex flex-col px-5 xl:px-20">
          <div className="h-60 xl:h-64" />
          <TextItem text="Article" />
          <p>{`total: ${totalCount}`}</p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
            {articles.map((item) => {
              const { _id } = item;
              return (
                <div key={_id}>
                  <ArticleCard {...item} />
                </div>
              );
            })}
          </div>
          <Pagination
            initialPage={1}
            total={pageRange}
            page={currentPage}
            color="cyan"
            radius="md"
            onChange={handlePaginate}
          />
        </section>
      </MainLayout>
    </>
  );
};

// ページネーションが何ページあるか計算
const range = (start: number, end: number) =>
  [...Array(end - start + 1)].map((_, i) => start + i);

export const getStaticPaths: GetStaticPaths = async () => {
  const { total } = await newtClient.getContents<ArticleType>({
    appUid: process.env.NEWT_APP_UID,
    modelUid: process.env.NEWT_ARTICLE_UID,
    query: {
      select: ["_id"],
      limit: 1,
    },
  });

  // 全てのパスの配列を作成
  const numArray = range(1, Math.ceil(total / PER_PAGE));
  const paths = numArray.map((number) => `/article/page/${number}`);

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  if (!ctx.params) {
    return { notFound: true };
  }

  const { pageId } = ctx.params;

  const { items, total } = await newtClient.getContents<ArticleType>({
    appUid: process.env.NEWT_APP_UID,
    modelUid: process.env.NEWT_ARTICLE_UID,
    query: {
      select: ["_id", "_sys", "title", "coverImage", "categories"],
      limit: PER_PAGE,
      skip: (Number(pageId) - 1) * PER_PAGE,
    },
  });

  const numArray = range(1, Math.ceil(total / PER_PAGE));

  return {
    props: {
      articles: items,
      totalCount: total,
      pageRange: numArray.length,
    },
  };
};

export default ArticlePage;

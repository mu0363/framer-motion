import Head from "next/head";
import type { Contents } from "newt-client-js";
import type { GetStaticProps, NextPage } from "next";
import type { NewsType } from "src/types";
import { AnimatedTitle } from "src/components/Common/AnimatedTitle";
import { TextItem } from "src/components/Common/TextItem";
import { MainLayout } from "src/components/Layout/MainLayout";
import { NewsCard } from "src/components/pages/news/NewsCard";
import { newtClient } from "src/libs/newtClient";

const News: NextPage<Contents<Omit<NewsType, "author" | "body" | "meta">>> = (
  props
) => {
  const { items } = props;
  return (
    <>
      <Head>
        <title>News Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainLayout>
        <section className="flex flex-col px-5 xl:px-20">
          <div className="h-60 xl:h-64" />
          <TextItem text="NEWS" />
          <AnimatedTitle />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
            {items.map((item) => {
              const { _id } = item;
              return (
                <div key={_id}>
                  <NewsCard {...item} />
                </div>
              );
            })}
          </div>
        </section>
      </MainLayout>
    </>
  );
};

export default News;

export const getStaticProps: GetStaticProps<Contents<NewsType>> = async () => {
  const data = await newtClient.getContents<NewsType>({
    appUid: process.env.NEWT_APP_UID,
    modelUid: process.env.NEWT_ARTICLE_UID,
    query: {
      select: ["_id", "_sys", "title", "coverImage", "categories"],
      limit: 8,
    },
  });

  return {
    props: data,
  };
};
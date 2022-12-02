import { format } from "date-fns";
import Head from "next/head";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import type { ArticleType } from "src/types";
import { Badge } from "src/components/Badge";
import { MainLayout } from "src/components/Layout/MainLayout";
import { newtClient } from "src/libs/newtClient";

const ArticleDetail: NextPage<ArticleType> = ({
  title,
  body,
  meta,
  publishedAt,
  categories,
  author,
}) => {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainLayout>
        <section className="mx-5">
          <div className="h-10 md:h-36" />
          <div className="md: mb-4 flex flex-col items-start md:flex-row-reverse md:items-center md:justify-end">
            <Badge text={categories[0].category} />
            <h1 className="mt-2 text-2xl font-bold md:mr-4 md:mt-0 md:text-4xl">
              {title}
            </h1>
          </div>
          <div className="mb-16 flex items-center space-x-2 md:flex">
            <span className="text-base">{author.fullName}</span>
            <span className="text-sm text-gray-500">
              {format(new Date(publishedAt), "yyyy年MM月dd日")}
            </span>
          </div>
          <div
            className="prose my-16 text-sm md:my-24 lg:text-xl"
            dangerouslySetInnerHTML={{ __html: body }}
          />
          <div className="mb-12 rounded-md border p-5 md:mb-24 md:p-10">
            <p className="font-bold">{author.fullName}</p>
            <p className="mt-2 text-xs">{author.biography}</p>
          </div>
        </section>
      </MainLayout>
    </>
  );
};

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const { items } = await newtClient.getContents<ArticleType>({
    appUid: process.env.NEWT_APP_UID,
    modelUid: process.env.NEWT_ARTICLE_UID,
  });
  const ids = items.map((item) => `/article/${item._id}`);

  return {
    paths: ids,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<
  ArticleType,
  { id: string }
> = async (ctx) => {
  if (!ctx.params) {
    return { notFound: true };
  }
  const data = await newtClient.getContent<ArticleType>({
    appUid: process.env.NEWT_APP_UID,
    modelUid: process.env.NEWT_ARTICLE_UID,
    contentId: ctx.params.id,
  });

  return {
    props: data,
  };
};

export default ArticleDetail;

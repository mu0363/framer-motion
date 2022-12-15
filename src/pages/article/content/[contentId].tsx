import { parseISO, format } from "date-fns";
import Head from "next/head";

import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import type { ArticleType } from "src/types";
import { CommonBreadcrumbs } from "@components/pages/article/CommonBreadcrumbs/CommonBreadcrumbs";
import { SNSShare } from "@components/pages/article/SNSShare";
import { useBreadcrumbs } from "@hooks/useBreadcrumbs";
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
  const { breadcrumbsItems, path } = useBreadcrumbs(categories);

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="title" content={meta.title} />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_DOMAIN}${path}`}
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.ogImage.src} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:site_name" content="JAAC" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@JAAC" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainLayout>
        <CommonBreadcrumbs breadcrumbsItems={breadcrumbsItems} title={title} />
        <div className="md: mb-4 flex flex-col items-start md:flex-row-reverse md:items-center md:justify-end">
          <Badge text={categories[0].category} />
          <h1 className="mt-2 text-2xl font-bold md:mr-4 md:mt-0 md:text-4xl">
            {title}
          </h1>
        </div>
        <div className="mb-16 flex items-center space-x-2 md:flex">
          <span className="text-base">{author.fullName}</span>
          <span className="text-sm text-gray-500">
            {format(parseISO(publishedAt), "yyyy年MM月dd日")}
          </span>
        </div>
        <div
          className="prose my-16 text-sm leading-6 md:my-24 lg:leading-10"
          dangerouslySetInnerHTML={{ __html: body }}
        />
        <hr />
        <SNSShare path={path} title={title} />

        <div className="mb-12 rounded-md border p-5 md:mb-24 md:p-10">
          <p className="font-bold">{author.fullName}</p>
          <p className="mt-2 text-xs">{author.biography}</p>
        </div>
      </MainLayout>
    </>
  );
};

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const { items } = await newtClient.getContents<ArticleType>({
    appUid: process.env.NEWT_ARTICLE_APP_UID,
    modelUid: process.env.NEWT_ARTICLE_UID,
  });
  const ids = items.map((item) => `/article/content/${item._id}`);

  return {
    paths: ids,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<
  ArticleType,
  { contentId: string }
> = async (ctx) => {
  if (!ctx.params) {
    return { notFound: true };
  }
  const data = await newtClient.getContent<ArticleType>({
    appUid: process.env.NEWT_ARTICLE_APP_UID,
    modelUid: process.env.NEWT_ARTICLE_UID,
    contentId: ctx.params.contentId,
  });

  return {
    props: data,
  };
};

export default ArticleDetail;

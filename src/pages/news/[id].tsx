import { format } from "date-fns";
import Head from "next/head";
import Image from "next/image";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import type { BlogType } from "src/types";
import { Badge } from "src/components/Badge";
import { MainLayout } from "src/components/Layout/MainLayout";
import { newtClient } from "src/libs/newtClient";

const NewsId: NextPage<BlogType> = ({
  _sys,
  title,
  body,
  meta,
  coverImage,
  categories,
  author,
}) => {
  return (
    <>
      <Head>
        <title>{meta[0].title}</title>
        <meta name="description" content={meta[0].description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainLayout>
        <section className="mx-auto w-11/12 md:w-4/5 xl:w-1/2">
          <div className="h-10 md:h-36" />
          <div className="md: mb-4 flex flex-col items-start md:flex-row-reverse md:items-center md:justify-end">
            <Badge text={categories[0].category} />
            <h1 className="mt-2 text-2xl font-bold md:mr-4 md:mt-0 md:text-3xl">
              {title}
            </h1>
          </div>
          <div className="mb-16 flex items-center space-x-2 md:flex">
            <span className="text-sm">{author.fullName}</span>
            <span className="text-xs text-gray-500">
              {format(new Date(_sys.createdAt), "yyyy年MM月dd日")}
            </span>
          </div>
          <div className="relative mb-2 h-44 w-full overflow-hidden md:h-80 xl:h-96">
            <Image
              src={coverImage.src}
              alt={coverImage.fileName}
              fill
              priority
              sizes="(max-width: 768px) 100vw,
              (max-width: 1280px) 50vw,
              33vw"
              className="object-cover"
            />
          </div>
          <div
            className="prose my-16 md:my-24"
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
  const { items } = await newtClient.getContents<BlogType>({
    appUid: process.env.NEWT_APP_UID,
    modelUid: process.env.NEWT_ARTICLE_UID,
  });
  const ids = items.map((item) => `/news/${item._id}`);
  return {
    paths: ids,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<BlogType, { id: string }> = async (
  ctx
) => {
  if (!ctx.params) {
    return { notFound: true };
  }
  const data = await newtClient.getContent<BlogType>({
    appUid: process.env.NEWT_APP_UID,
    modelUid: process.env.NEWT_ARTICLE_UID,
    contentId: ctx.params.id,
  });

  return {
    props: data,
  };
};

export default NewsId;

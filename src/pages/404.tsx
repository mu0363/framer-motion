import Head from "next/head";
import Link from "next/link";
import type { NextPage } from "next";
import { MainLayout } from "src/components/Layout/MainLayout";

const Custom404: NextPage = () => {
  return (
    <>
      <Head>
        <title>404 Not Found</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainLayout>
        <main className="">
          <div className="my-64 flex flex-col items-center justify-center space-y-4 md:my-80">
            <p className="md:text-2xl">
              お探しのページが見つかりませんでした。
            </p>
            <Link
              href="/"
              className="rounded-full bg-blue-400 px-4 py-2 font-bold text-white md:hover:bg-blue-300"
            >
              ホームへ戻る
            </Link>
          </div>
        </main>
      </MainLayout>
    </>
  );
};

export default Custom404;

import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { MainLayout } from "src/components/Layout/MainLayout";

const MessageDelivered = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 4000);
  });

  return (
    <>
      <Head>
        <title>送信完了</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainLayout>
        <section className="mb-20 md:mb-40">
          <h2>送信完了しました</h2>
        </section>
      </MainLayout>
    </>
  );
};

export default MessageDelivered;

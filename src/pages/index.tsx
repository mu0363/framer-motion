import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import type { NextPage } from "next";
import { ImageItem } from "src/components/Common/ImageItem";
import { TextItem } from "src/components/Common/TextItem";
import { WideImage } from "src/components/Common/WideImage";
import { MainLayout } from "src/components/Layout/MainLayout";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Main Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta
          property="og:image"
          content="https://og-examples.vercel.sh/api/static"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainLayout>
        <main>
          <section className="mb-40 flex flex-col space-y-12">
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 1, delay: 0.5, ease: "easeOut" },
              }}
              className="relative h-screen w-screen"
            >
              <Image
                src="/image-05_small.webp"
                alt="image"
                fill
                priority
                className="object-cover"
              />
            </motion.div>
            <ImageItem />
            <TextItem text="ようこそ、ここからの世界へ。" />
            <TextItem text="次の文字は" />
            <TextItem text="動き出し、早くなる。" />
            <TextItem text="ようこそ、ここからの世界へ。" />
            <TextItem text="次の文字は" />
          </section>
          <WideImage />
          <WideImage />
          <WideImage />
        </main>
      </MainLayout>
    </>
  );
};

export default Home;

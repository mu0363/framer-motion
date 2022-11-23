import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import { TextItem } from "../components/TextItem";
import type { NextPage } from "next";
import { AnimatedTitle } from "src/components/AnimatedTitle";
import { Layout } from "src/components/Layout";
import { useRevealImage } from "src/hooks/useRevealImage";

const NewsImage = () => {
  const { ref, variants, control } = useRevealImage();
  return (
    <div className="mb-5 xl:mb-10">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={control}
        variants={variants}
        className="mb-5"
      >
        <div className="relative mb-2 h-52 w-full overflow-hidden rounded-md xl:h-64">
          <Image
            src="/image-05.jpg"
            alt="image"
            fill
            priority
            sizes="(max-width: 768px) 100vw,
              (max-width: 1280px) 50vw,
              33vw"
            className="object-cover transition duration-300 hover:scale-110"
          />
        </div>
        <div className="mb-2 flex items-center space-x-4 text-gray-400">
          <span className="rounded-full border border-green-400 px-1 py-0.5 text-xs text-green-400 xl:border-2 xl:px-2 xl:py-1">
            お知らせ
          </span>
          <span className="text-xs xl:text-base">Oct.27.2022</span>
        </div>
        <p className="text-base xl:text-xl">
          相模原線(小田急線)から弊社への乗り換えについて
        </p>
      </motion.div>
    </div>
  );
};

const News: NextPage = () => {
  return (
    <>
      <Head>
        <title>News Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <section className="flex flex-col px-5 xl:px-20">
          <div className="h-60 xl:h-64" />
          <TextItem text="NEWS" />
          <AnimatedTitle />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
            <NewsImage />
            <NewsImage />
            <NewsImage />
            <NewsImage />
            <NewsImage />
            <NewsImage />
            <NewsImage />
            <NewsImage />
          </div>
        </section>
      </Layout>
    </>
  );
};

export default News;

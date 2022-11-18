import { motion } from "framer-motion";
import type { FC } from "react";
import { ImageBlock } from "src/components/ImageBlock";

type Props = {
  setIsLoading: (arg: boolean) => void;
};

/** @package */
export const Loader: FC<Props> = ({ setIsLoading }) => {
  const container = {
    show: {
      transition: {
        staggerChildren: 0.35,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 200,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeInOut",
        duration: 1.6,
      },
    },
    exit: {
      opacity: 0,
      y: -200,
      transition: {
        ease: "easeInOut",
        duration: 0.8,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
      onAnimationComplete={() => setIsLoading(false)}
    >
      <motion.div className="relative h-[440px] w-[660px]" layoutId="mainImage">
        <motion.img src="/image-05.jpg" alt="image" layoutId="mainImage" />
      </motion.div>
      <ImageBlock url="/image-04.jpg" variants={item} />
      <ImageBlock url="/image-04.jpg" variants={item} />
      <ImageBlock url="/image-04.jpg" variants={item} />
    </motion.div>
  );
};

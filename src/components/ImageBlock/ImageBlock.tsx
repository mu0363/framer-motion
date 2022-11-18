import { motion } from "framer-motion";
import Image from "next/image";
import type { FC } from "react";

type VariantsType = {
  opacity: number;
  y: number;
  transition?: {
    ease: string;
    duration: number;
  };
};

type Props = {
  url: string;
  variants: {
    hidden: VariantsType;
    show: VariantsType;
    exit: VariantsType;
  };
};

/** @package */
export const ImageBlock: FC<Props> = ({ url, variants }) => (
  <motion.div className="relative h-[440px] w-[660px]" variants={variants}>
    <Image src={url} alt="image" layout="fill" objectFit="contain" />
  </motion.div>
);

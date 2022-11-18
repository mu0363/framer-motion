import { motion } from "framer-motion";
import Image from "next/image";
import { FC } from "react";
import { useRevealItem } from "src/hooks/useRevealItem";

/** @package */
export const ImageItem: FC = () => {
  const { ref, variants, control } = useRevealItem();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={control}
      variants={variants}
      className="text-center text-6xl font-extrabold italic text-green-300"
    >
      <Image
        src="/image-05.jpg"
        alt="image"
        width={700}
        height={1000}
        className="rounded-xl"
      />
    </motion.div>
  );
};

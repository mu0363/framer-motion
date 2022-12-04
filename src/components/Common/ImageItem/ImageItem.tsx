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
      className="text-center text-6xl font-bold italic text-green-300"
    >
      <div className="relative h-96 w-1/3">
        <Image
          src="/image-05_small.webp"
          alt="image"
          fill
          priority
          sizes="(max-width: 768px) 100vw,
              (max-width: 1280px) 50vw,
              33vw"
          className="rounded-xl object-cover"
        />
      </div>
    </motion.div>
  );
};

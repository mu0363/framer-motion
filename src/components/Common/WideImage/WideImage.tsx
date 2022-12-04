import { motion } from "framer-motion";
import Image from "next/image";
import { FC } from "react";
import { useRevealImage } from "src/hooks/useRevealImage";

/** @package */
export const WideImage: FC = () => {
  const { ref, variants, control } = useRevealImage();

  return (
    <div className="overflow-hidden">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={control}
        variants={variants}
      >
        <div className="relative h-44 w-screen md:h-72 lg:h-[30em]">
          <Image
            src="/image-05_small.webp"
            alt="image"
            fill
            priority
            className="object-cover grayscale transition duration-300 hover:grayscale-0"
          />
        </div>
      </motion.div>
    </div>
  );
};

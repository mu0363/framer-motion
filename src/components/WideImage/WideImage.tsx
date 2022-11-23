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
        <div className="relative h-[600px] w-screen">
          <Image
            src="/image-05.jpg"
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

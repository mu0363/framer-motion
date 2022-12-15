import { motion } from "framer-motion";
import { FC } from "react";
import { useRevealItem } from "src/hooks/useRevealItem";

type Props = {
  text: string;
};

/**
 * @package
 */
export const TextItem: FC<Props> = ({ text }) => {
  const { ref, variants, control } = useRevealItem();

  return (
    <motion.h1
      ref={ref}
      initial="hidden"
      animate={control}
      variants={variants}
      className="text-center font-bold italic text-green-300"
    >
      {text}
    </motion.h1>
  );
};

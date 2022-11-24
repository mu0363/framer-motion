import { motion } from "framer-motion";
import Link from "next/link";
import type { FC } from "react";

type Props = {
  title: string;
  width: number;
  delay: number;
};

/** @package */
export const MenuItem: FC<Props> = ({ title, width, delay }) => {
  const underbarMotion = {
    rest: { width: 0, ease: "easeOut", duration: 0.2, type: "tween" },
    hover: {
      width,
      transition: {
        duration: 0.3,
        type: "tween",
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay, type: "tween", ease: "easeOut", duration: 1.2 }}
    >
      <motion.li initial="rest" whileHover="hover" className="cursor-pointer">
        <Link href={`/${title.toLowerCase()}`}>{title}</Link>
        <motion.div variants={underbarMotion} className="h-0.5 bg-black" />
      </motion.li>
    </motion.div>
  );
};

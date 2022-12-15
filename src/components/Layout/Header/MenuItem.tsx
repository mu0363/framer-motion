import { motion } from "framer-motion";
import Link from "next/link";
import type { FC } from "react";

type Props = {
  title: string;
  width: number;
};

/** @package */
export const MenuItem: FC<Props> = ({ title, width }) => {
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
    <motion.li initial="rest" whileHover="hover" className="cursor-pointer">
      <Link href={`/${title.toLowerCase()}`} className="text-sm">
        {title}
      </Link>
      <motion.div variants={underbarMotion} className="h-0.5 bg-black" />
    </motion.li>
  );
};

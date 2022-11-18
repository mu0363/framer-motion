import { BugAntIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Link from "next/link";
import type { FC } from "react";

type MenuItemProps = {
  title: string;
  width: number;
  delay: number;
};

/** @package */
const MenuItem: FC<MenuItemProps> = ({ title, width, delay }) => {
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

/** @package */
export const Header: FC = () => {
  return (
    <header className="fixed top-0 z-10 flex w-full items-center justify-center p-8">
      <Link href="/">
        <BugAntIcon className="mr-10 h-10 cursor-pointer transition hover:scale-105 hover:text-green-500" />
      </Link>
      <ul className="flex items-center justify-center space-x-8 text-center">
        <MenuItem title="QUESTION" width={83} delay={0} />
        <MenuItem title="ABOUT" width={57} delay={0.1} />
        <MenuItem title="NEWS" width={48} delay={0.2} />
        <MenuItem title="LINK" width={36} delay={0.3} />
      </ul>
    </header>
  );
};

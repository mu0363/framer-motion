import { BugAntIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { MenuItem } from "./MenuItem";
import type { FC } from "react";

/** @package */
export const Header: FC = () => {
  return (
    <header className="fixed top-0 z-10 hidden w-full items-center justify-center p-8 md:flex">
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

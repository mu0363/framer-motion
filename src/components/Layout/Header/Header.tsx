import { BugAntIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { MenuItem } from "./MenuItem";
import type { FC } from "react";

/** @package */
export const Header: FC = () => {
  return (
    <header className="z-10 mb-24 hidden h-24 w-full items-center justify-center bg-gray-300 p-8 md:flex">
      <Link href="/" title="home">
        <BugAntIcon className="mr-10 h-10 cursor-pointer transition hover:scale-105 hover:text-green-500" />
      </Link>
      <ul className="flex items-center justify-center space-x-8 text-center">
        <MenuItem title="QUESTION" width={83} />
        <MenuItem title="ABOUT" width={57} />
        <MenuItem title="ARTICLE/PAGE/1" width={48} />
        <MenuItem title="LINK" width={36} />
        <Link
          href="/contact"
          className="rounded-full bg-green-600 px-4 py-2 text-white hover:bg-green-500"
        >
          お問い合わせ
        </Link>
      </ul>
    </header>
  );
};

import { BugAntIcon } from "@heroicons/react/24/solid";
import { Burger, Drawer } from "@mantine/core";
import Link from "next/link";
import { useState } from "react";
import { MenuItem } from "./MenuItem";
import type { FC } from "react";

/** @package */
export const Header: FC = () => {
  const [opened, setOpened] = useState(false);
  const title = opened ? "Close navigation" : "Open navigation";
  return (
    <header className="fixed top-0 left-0 z-10 h-14 w-full items-center justify-center border-b bg-white p-3 shadow-md md:flex md:h-24 md:p-8">
      <Link href="/" title="home" className="hidden md:flex">
        <BugAntIcon className="mr-10 h-7 cursor-pointer transition hover:scale-105 hover:text-green-500 md:h-10" />
      </Link>
      <div className="flex items-center justify-end md:hidden">
        <Burger
          opened={opened}
          onClick={() => setOpened((o) => !o)}
          title={title}
        />
      </div>
      <ul className="hidden items-center justify-center space-x-8 text-center md:flex">
        <MenuItem title="QUESTION" width={83} />
        <MenuItem title="ABOUT" width={57} />
        <MenuItem title="ARTICLE/PAGE/1" width={48} />
        <Link
          href="/event"
          className="rounded-full bg-green-600 px-4 py-2 text-white hover:bg-green-500"
        >
          イベント案内
        </Link>
        <Link
          href="/contact"
          className="rounded-full bg-green-600 px-4 py-2 text-white hover:bg-green-500"
        >
          お問い合わせ
        </Link>
        <Link
          href="/membership"
          className="rounded-full bg-green-600 px-4 py-2 text-white hover:bg-green-500"
        >
          入会
        </Link>
      </ul>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        padding="xl"
        size="lg"
        position="right"
        overlayColor="white"
        withCloseButton={false}
        overlayOpacity={0.55}
        overlayBlur={3}
        className="mt-14"
      >
        <ul className="grid grid-cols-1 gap-2">
          <MenuItem title="QUESTION" width={83} />
          <MenuItem title="ABOUT" width={57} />
          <MenuItem title="ARTICLE/PAGE/1" width={48} />
          <Link
            href="/event"
            className="rounded-full bg-green-600 px-4 py-2 text-white hover:bg-green-500"
          >
            イベント案内
          </Link>
          <Link
            href="/contact"
            className="rounded-full bg-green-600 px-4 py-2 text-white hover:bg-green-500"
          >
            お問い合わせ
          </Link>
          <Link
            href="/membership"
            className="rounded-full bg-green-600 px-4 py-2 text-white hover:bg-green-500"
          >
            入会
          </Link>
        </ul>
      </Drawer>
    </header>
  );
};

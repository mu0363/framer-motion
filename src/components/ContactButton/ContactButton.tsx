import { EnvelopeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

/** @package */
export const ContactButton = () => {
  return (
    <Link href="/contact">
      <EnvelopeIcon className="fixed right-14 bottom-14 h-12 cursor-pointer rounded-full  p-3 text-red-800 antialiased outline outline-2 transition hover:bg-red-800 hover:p-3.5 hover:text-white hover:outline-none" />
    </Link>
  );
};

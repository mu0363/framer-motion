import { EnvelopeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

/** @package */
export const ContactFormButton = () => {
  return (
    <Link href="/contact">
      <EnvelopeIcon className="fixed right-8 bottom-8 h-10 cursor-pointer rounded-full border-2 border-red-800 p-2 text-red-800 outline-red-800 transition hover:bg-red-800 hover:text-white hover:outline-none md:right-14 md:bottom-14 md:h-12 md:p-3" />
    </Link>
  );
};

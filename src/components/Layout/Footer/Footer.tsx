import { BugAntIcon } from "@heroicons/react/24/solid";

/** @package */
export const Footer = () => {
  return (
    <footer className="sticky w-full bg-gray-900 py-5 text-white md:h-[700px] md:p-20 lg:p-40">
      <BugAntIcon className="mx-auto my-5 h-8 md:mx-0 md:mb-20" />
      <div className="hidden md:block">
        <div className="mb-10 flex flex-col space-y-3 text-center md:mb-20 md:text-left">
          <p className="mb-4  text-base md:text-xl">John Doe CORPORATION</p>
          <p className="text-xs md:text-sm">〒 100-9872</p>
          <p className="text-xs md:text-sm">東京都目黒区自由が丘1-23-45</p>
          <p className="text-xs md:text-sm">TEL : 050-1234-5679</p>
        </div>
        <hr className="h-px border-0 bg-gray-200 dark:bg-gray-700" />
      </div>

      <div className="flex flex-col space-y-2 text-center text-xs text-gray-400 md:flex-row md:space-y-0 md:text-left md:text-sm">
        <span className="mr-2">COPYRIGHT (C)2022.</span>
        <span>John Doe CORPORATION</span>
      </div>
    </footer>
  );
};

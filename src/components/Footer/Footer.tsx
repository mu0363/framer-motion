import { BugAntIcon } from "@heroicons/react/24/solid";

/** @package */
export const Footer = () => {
  return (
    <footer className="h-[700px] w-full bg-gray-900 p-40 text-white">
      <BugAntIcon className="mb-20 h-12" />
      <div className="mb-20 flex flex-col space-y-3">
        <p className="mb-4 text-xl">John Doe CORPORATION</p>
        <p className="text-sm">〒 100-9872</p>
        <p className="text-sm">東京都目黒区自由が丘1-23-45</p>
        <p className="text-sm">TEL : 050-1234-5679</p>
      </div>
      <hr className="my-8 h-px border-0 bg-gray-200 dark:bg-gray-700" />
      <p className="text-xs text-gray-500">
        COPYRIGHT (C)2022. John Doe CORPORATION
      </p>
    </footer>
  );
};

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

      <p>This site is protected by reCAPTCHA and the Google</p>
      <a href="https://policies.google.com/privacy" className="mr-5">
        Privacy Policy
      </a>
      <a href="https://policies.google.com/terms">Terms of Service</a>

      <small>
        This site is protected by reCAPTCHA and the Google
        <a href="https://policies.google.com/privacy">Privacy Policy</a> and
        <a href="https://policies.google.com/terms">Terms of Service</a> apply.
      </small>
    </footer>
  );
};

import {
  FacebookIcon,
  FacebookShareButton,
  LineIcon,
  LineShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";
import type { FC } from "react";

type Props = {
  path: string;
  title: string;
};

export const SNSShare: FC<Props> = ({ path, title }) => {
  return (
    <div className="flex items-center space-x-4 p-5 md:space-x-6 md:p-10 md:text-base">
      <p className="text-xs font-bold text-gray-400">シェアする</p>
      <FacebookShareButton
        url={`${process.env.NEXT_PUBLIC_DOMAIN}${path}`}
        quote={title}
      >
        <FacebookIcon size={24} round />
      </FacebookShareButton>
      <TwitterShareButton
        url={`${process.env.NEXT_PUBLIC_DOMAIN}${path}`}
        title={title}
      >
        <TwitterIcon size={24} round />
      </TwitterShareButton>
      <LineShareButton
        url={`${process.env.NEXT_PUBLIC_DOMAIN}${path}`}
        title={title}
      >
        <LineIcon size={24} round />
      </LineShareButton>
    </div>
  );
};

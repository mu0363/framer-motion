import type { Content } from "newt-client-js";

export type NewsType = Content & {
  title: string;
  body: string;
  meta: [
    {
      title: string;
      description: string;
      ogImage: {
        _id: string;
        src: string;
        fileType: string;
        fileSize: number;
        fileName: string;
        width: number;
        height: number;
      };
    }
  ];
  coverImage: {
    _id: string;
    src: string;
    fileType: string;
    fileSize: number;
    fileName: string;
    width: number;
    height: number;
  };
  author: {
    _id: Content["_id"];
    _sys: Content["_sys"];
    fullName: string;
    biography: string;
  };
  categories: [
    { _id: Content["_id"]; _sys: Content["_sys"]; category: string }
  ];
};

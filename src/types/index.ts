import type { Content } from "newt-client-js";

type Merge<T extends object> = {
  [P in keyof T]: T[P];
};
export type ArticleType = Merge<
  Content & {
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
      altText: string;
      description: string;
      src: string;
      fileType: string;
      fileSize: number;
      fileName: string;
      width: number;
      height: number;
      title: string;
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
  }
>;

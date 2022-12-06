import type { Content } from "newt-client-js";

type NewtImageType = {
  _id: string;
  altText: string;
  description: string;
  src: string;
  fileType: string;
  fileSize: number;
  fileName: string;
  width: number;
  height: number;
  metadata: object;
  title: string;
};

type Merge<T extends object> = {
  [P in keyof T]: T[P];
};

export type ArticleType = Merge<
  Content & {
    publishedAt: string;
    meta: {
      title: string;
      description: string;
      ogImage: NewtImageType;
    };
    title: string;
    body: string;
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

export type CategoryType = { _id: string; category: string };

export type RadioInputType = { id: number; title: string };

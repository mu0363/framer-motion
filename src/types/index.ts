import { ReactNode } from "react";
import type {
  ContactSchemaType,
  EventSchemaType,
  MembershipSchemaType,
} from "@libs/zodSchema";
import type { Content } from "newt-client-js";

export type CategoryType = {
  _id: Content["_id"];
  _sys: Content["_sys"];
  category: string;
};

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
    categories: CategoryType[];
  }
>;

export type QAType = Merge<
  Content & {
    question: string;
    answer: string;
    category: CategoryType;
  }
>;

export type SortedQAListType = {
  id: number;
  title: string;
  contents: QAType[];
};

export type RadioInputType = { id: number; title: string };

export type WithContact = "withContact";
export type WithEvent = "withEvent";
export type WithMembership = "withMembership";

export type FormType = "contact" | "event" | "membership";

export type NarrowSchemaType<T = WithContact> = T extends WithContact
  ? ContactSchemaType
  : T extends WithEvent
  ? EventSchemaType
  : T extends WithMembership
  ? MembershipSchemaType
  : never;

export type AllSchemaTypes =
  | ContactSchemaType
  | EventSchemaType
  | MembershipSchemaType
  | undefined;

export type ConfirmProps<T> = {
  isOpened: boolean;
  setIsOpened: (isOpened: boolean) => void;
  confirmData: NarrowSchemaType<T> | undefined;
};

export type SubmitProps<T> = {
  children: ReactNode;
  confirmData: NarrowSchemaType<T> | undefined;
  setIsError: (isError: boolean) => void;
  setIsVisible: (isVisible: boolean) => void;
};

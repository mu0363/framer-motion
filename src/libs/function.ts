import type {
  AllSchemaTypes,
  NarrowSchemaType,
  WithContact,
  WithEvent,
  WithMembership,
} from "@types";

// ページネーションが何ページあるか計算
export const pagesRange = (start: number, end: number) =>
  [...Array(end - start + 1)].map((_, i) => start + i);

export const indention = (text: string) => {
  const replacedText = text.replace(/\n/g, "<br />");
  return replacedText;
};

// Type Guards
export const isContact = (
  data: AllSchemaTypes
): data is NarrowSchemaType<WithContact> => {
  if (data !== undefined && "person" in data) {
    return true;
  }
  return false;
};

export const isEvent = (
  data: AllSchemaTypes
): data is NarrowSchemaType<WithEvent> => {
  if (data !== undefined && "guest" in data) {
    return true;
  }
  return false;
};

export const isMembership = (
  data: AllSchemaTypes
): data is NarrowSchemaType<WithMembership> => {
  if (data !== undefined && "birthday" in data) {
    return true;
  }
  return false;
};

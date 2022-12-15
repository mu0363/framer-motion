import { RadioInputType } from "@types";

export const PER_PAGE = 10;

export const personTypes: RadioInputType[] = [
  { id: 1, title: "患者本人" },
  { id: 2, title: "家族" },
  { id: 3, title: "その他" },
];

export const guestTypes: RadioInputType[] = [
  { id: 1, title: "本人会員" },
  { id: 2, title: "家族会員" },
  { id: 3, title: "賛助会員" },
  { id: 4, title: "非会員本人" },
  { id: 5, title: "非会員家族" },
];

export const numberOfGuestTypes: RadioInputType[] = [
  { id: 1, title: "1人" },
  { id: 2, title: "2人" },
  { id: 3, title: "3人" },
  { id: 4, title: "4人" },
  { id: 5, title: "5人" },
];

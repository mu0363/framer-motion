import { Anchor, Breadcrumbs } from "@mantine/core";
import type { BreadcrumbsItem } from "@types";
import type { FC } from "react";

type Props = {
  breadcrumbsItems: BreadcrumbsItem[];
  title: string;
};

export const CommonBreadcrumbs: FC<Props> = ({ breadcrumbsItems, title }) => {
  return (
    <Breadcrumbs className="my-10 truncate text-xs">
      {breadcrumbsItems.map((item) => (
        <Anchor href={item.href} key={item.id}>
          {item.title}
        </Anchor>
      ))}
      {title || "記事一覧"}
    </Breadcrumbs>
  );
};

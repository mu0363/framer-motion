import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import type { CategoryType } from "@types";

export const useBreadcrumbs = (categories: CategoryType[]) => {
  const [breadcrumbsItems, setBreadcrumbsItems] = useState<
    { id: number; title: string; href: string }[]
  >([{ id: 1, title: "ホーム", href: "/" }]);
  const [categoryName, setCategoryName] = useState("");
  const router = useRouter();
  const paths = decodeURI(router.asPath).substring(1).split("/");

  useEffect(() => {
    if (paths.includes("category") || paths.includes("content")) {
      const category = categories.find((item) => item._id === paths[2]);
      if (category?.category) {
        setCategoryName(category?.category);
      }
      setBreadcrumbsItems([
        { id: 1, title: "ホーム", href: "/" },
        { id: 2, title: "記事一覧", href: "/article/page/1" },
      ]);
    }
  }, [router]);

  return { breadcrumbsItems, categoryName, path: router.asPath };
};

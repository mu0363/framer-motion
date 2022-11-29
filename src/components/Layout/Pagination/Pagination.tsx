import { useRouter } from "next/router";
import ReactPaginate from "react-paginate";
import type { FC } from "react";

type Props = {
  rootPath: string;
  totalCount: number;
  currentNum: number;
};

const LIST_LIMIT = 8;
// const LIST_OFFSET = 10;
const ONE_PAGE_DISPLAY_USERS = LIST_LIMIT;
const LAST_DISPLAY_SIZE = LIST_LIMIT;
const AROUND_DISPLAY_PAGES = Math.floor(LIST_LIMIT / 2);

export const Pagination: FC<Props> = ({ rootPath, totalCount, currentNum }) => {
  const router = useRouter();

  const handlePaginate = (selectedItem: { selected: number }) => {
    if (selectedItem.selected === 0) {
      router.push("/");
    } else {
      router.push(`${rootPath || ""}/page/${selectedItem.selected}`);
    }
  };
  return (
    <div>
      <ReactPaginate
        pageCount={Math.ceil(totalCount / ONE_PAGE_DISPLAY_USERS)}
        initialPage={currentNum}
        marginPagesDisplayed={LAST_DISPLAY_SIZE}
        pageRangeDisplayed={AROUND_DISPLAY_PAGES}
        onPageChange={handlePaginate}
      />
    </div>
  );
};

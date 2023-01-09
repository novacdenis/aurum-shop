import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import RcPagination, { PaginationProps as RcPaginationProps } from "rc-pagination";

export interface PaginationProps extends RcPaginationProps {}

export const Pagination: React.FC<PaginationProps> = (props) => {
  return <RcPagination prevIcon={<ChevronLeftIcon />} nextIcon={<ChevronRightIcon />} {...props} />;
};

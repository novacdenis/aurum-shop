export interface Pagination<T> {
  total: number;
  per_page: number;
  current_page: number;
  data: T;
}

export type SortType = "asc" | "desc";

export interface PaginationQuery {
  page: number;
  per_page?: number;
  sort_by?: string;
  sort_direction?: SortType;
}

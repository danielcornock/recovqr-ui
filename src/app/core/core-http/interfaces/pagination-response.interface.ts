export interface PaginationResponse<T> {
  data: Array<T>;
  count: number;
}
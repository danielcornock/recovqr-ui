export type ApiErrorResponse<T = undefined> = ApiErrorFormResponse<T> | ApiErrorMessageResponse;

export type ApiErrorFormResponse<T> = Record<keyof T, string>;

export interface ApiErrorMessageResponse {
  error: string;
  message: string;
  statusCode: number;
}
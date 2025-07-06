export interface StateResponse {
  statusCode: number;
  success: boolean;
  message: string;
}

export interface StateResponseData<T> extends StateResponse {
  data?: T;
}
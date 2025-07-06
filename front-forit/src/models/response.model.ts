export interface ResponseHttp {
  statusCode: number;
  message: string;
}

export interface ResponseHttpData<T> extends ResponseHttp {
  data: T
}
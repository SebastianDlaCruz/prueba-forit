
export interface FileMethods {
  read(): Promise<string>;
  write<T>(data: T): void
}
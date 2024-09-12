import { AxiosResponse } from 'axios';

export type ApiRequestFnResponse<ReturnType> = Promise<AxiosResponse<ReturnType>>;
export type ApiRequestFn<ReturnType, DataType = void> = (data: DataType) => ApiRequestFnResponse<ReturnType>;

export interface IApiError {
  status: number;
  message: string;
}

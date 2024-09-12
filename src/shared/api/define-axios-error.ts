import { AxiosError } from 'axios';
import { IApiError } from './api.types.ts';

interface IErrorResponseBody {
  statusCode: number;
  message: string | string[];
  error?: string;
}

export const defineAxiosError = (error: AxiosError<IErrorResponseBody>): IApiError => {
  if (error.response) {
    return {
      status: error.response.status,
      message: error.response.statusText,
    };
  }

  if (error.request) {
    return {
      status: 503,
      message: 'Сервер не отвечает',
    };
  }

  return {
    status: -1,
    message: 'Неизвестная ошибка',
  };
};

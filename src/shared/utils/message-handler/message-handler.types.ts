import { MessageInstance } from 'antd/es/message/interface';
import { IApiResponse } from '../../api';

export type MessageHandler = (messageApi: MessageInstance) => <T>(response: IApiResponse<T>, successMessage?: string) => T | undefined;

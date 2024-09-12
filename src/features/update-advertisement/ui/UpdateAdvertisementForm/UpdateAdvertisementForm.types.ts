import { CreateAdvertisementBody } from '../../../../entities/advertisement';
import { MessageInstance } from 'antd/es/message/interface';

export type FieldType = CreateAdvertisementBody;

export enum ADVERTISEMENT_FORM_TYPES {
  CREATE = 'CREATE',
  UPDATE = 'UPDATE',
}

export type UpdateAdvertisementFormProps =
  | {
      onSuccess: (messageApi: MessageInstance) => void;
      initialValues?: undefined;
      type: `${ADVERTISEMENT_FORM_TYPES.CREATE}`;
      advertisementId?: undefined;
    }
  | {
      onSuccess?: (messageApi: MessageInstance) => void;
      initialValues: FieldType;
      type: `${ADVERTISEMENT_FORM_TYPES.UPDATE}`;
      advertisementId: string;
    };

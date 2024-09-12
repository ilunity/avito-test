import { IAdvertisement } from '../../../entities/advertisement';
import { ADVERTISEMENT_FORM_TYPES } from '../../../features/update-advertisement';

export const modalTitle: Record<`${ADVERTISEMENT_FORM_TYPES}`, string> = {
  [ADVERTISEMENT_FORM_TYPES.UPDATE]: 'Изменить объявление:',
  [ADVERTISEMENT_FORM_TYPES.CREATE]: 'Создать объявление:',
};

export const successMessage: Record<`${ADVERTISEMENT_FORM_TYPES}`, string> = {
  [ADVERTISEMENT_FORM_TYPES.UPDATE]: 'Объявление успешно изменено!',
  [ADVERTISEMENT_FORM_TYPES.CREATE]: 'Объявление успешно создано!',
};

export type AdvertisementFormModalProps =
  | {
      type: `${ADVERTISEMENT_FORM_TYPES.UPDATE}`;
      advertisement: IAdvertisement;
      isOpen: boolean;
      onCancel: () => void;
    }
  | {
      type: `${ADVERTISEMENT_FORM_TYPES.CREATE}`;
      advertisement?: undefined;
      isOpen: boolean;
      onCancel: () => void;
    };

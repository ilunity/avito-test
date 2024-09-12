import { api, ApiRequestFn } from '../../../shared/api';
import { IAdvertisement } from '../model';
import { CreateAdvertisementBody, GetAdvertisementsParams, UpdateAdvertisementBody } from './types.ts';

class AdvertisementsService {
  get: ApiRequestFn<IAdvertisement[], GetAdvertisementsParams | URLSearchParams | void> = (params) => {
    return api.get('/advertisements', { params });
  };

  getOne: ApiRequestFn<IAdvertisement, string> = (advertisementId) => {
    return api.get('/advertisements/' + advertisementId);
  };

  getCount = async (): Promise<number> => {
    const advertisements = await this.get();
    return advertisements.data.length;
  };

  create: ApiRequestFn<IAdvertisement, CreateAdvertisementBody> = (data) => {
    return api.post('/advertisements', JSON.stringify(data));
  };

  update: ApiRequestFn<IAdvertisement, UpdateAdvertisementBody> = ({ advertisementId, ...data }) => {
    return api.patch(`/advertisements/${advertisementId}`, JSON.stringify(data));
  };
}

export const advertisementsService = new AdvertisementsService();

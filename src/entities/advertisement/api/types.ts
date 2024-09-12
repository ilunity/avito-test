import { IAdvertisement } from '../model';

export interface GetAdvertisementsParams {
  _start: string;
  _limit: string;
  name?: string;
}

export type CreateAdvertisementBody = Partial<Pick<IAdvertisement, 'imageUrl'>> &
  Pick<IAdvertisement, 'name' | 'description' | 'price'>;

export type UpdateAdvertisementBody = Partial<CreateAdvertisementBody> & {
  advertisementId: string;
};

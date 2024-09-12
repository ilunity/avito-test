import { IAdvertisement } from '../../../entities/advertisement';

export interface AdvertisementsLoaderData {
  advertisementsCount: number;
  advertisements: IAdvertisement[];
}

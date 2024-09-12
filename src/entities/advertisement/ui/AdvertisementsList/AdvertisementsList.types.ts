import { IAdvertisement } from '../../model';

export interface AdvertisementsListProps {
  advertisements: IAdvertisement[];
  onClick?: (advertisementId: string) => void;
}

import { IAdvertisement } from '../../model';

export interface AdvertisementCardProps {
  advertisement: IAdvertisement;
  onClick?: (advertisementId: string) => void;
}

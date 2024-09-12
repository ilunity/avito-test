import { LoaderFunction } from 'react-router-dom';
import { AdvertisementLoaderData } from './types.ts';
import { executeRequest } from '../../../shared/api';
import { advertisementsService, IAdvertisement } from '../../../entities/advertisement';

export const advertisementLoader: LoaderFunction = async ({ params }): Promise<AdvertisementLoaderData> => {
  const advertisementId = params.advertisementId as string;
  const { error, data } = await executeRequest(() => advertisementsService.getOne(advertisementId));

  if (error) {
    throw new Error(error);
  }

  return {
    advertisement: data as IAdvertisement,
  };
};

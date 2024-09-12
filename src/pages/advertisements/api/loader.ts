import { executeRequest } from '../../../shared/api';
import { advertisementsService, IAdvertisement } from '../../../entities/advertisement';
import { LoaderFunction } from 'react-router-dom';
import { AdvertisementsLoaderData } from './types.ts';

export const advertisementsLoader: LoaderFunction = async ({
  request,
}): Promise<AdvertisementsLoaderData> => {
  const url = new URL(request.url);
  const params = url.searchParams;

  const isPaginationParamsEmpty = !params.get('_start') || !params.get('_limit');
  if (isPaginationParamsEmpty) {
    params.set('_start', '0');
    params.set('_limit', '10');
  }

  const advertisementsCount = await advertisementsService.getCount();
  const { data } = await executeRequest(() => advertisementsService.get(params));

  return {
    advertisementsCount,
    advertisements: data as IAdvertisement[],
  };
};

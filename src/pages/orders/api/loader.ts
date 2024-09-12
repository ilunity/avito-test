import { LoaderFunction } from 'react-router-dom';
import { OrdersLoaderData } from './types.ts';
import { executeRequest } from '../../../shared/api';
import { IOrder, ordersService } from '../../../entities/order';

export const ordersLoader: LoaderFunction = async ({ request }): Promise<OrdersLoaderData> => {
  const url = new URL(request.url);
  const params = url.searchParams;

  const isPaginationParamsEmpty = !params.get('_start') || !params.get('_limit');
  if (isPaginationParamsEmpty) {
    params.set('_start', '0');
    params.set('_limit', '10');
  }

  const ordersCount = await ordersService.getCount();
  const { data } = await executeRequest(() => ordersService.get(params));

  return {
    ordersCount,
    orders: data as IOrder[],
  };
};

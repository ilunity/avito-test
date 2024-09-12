import { api, ApiRequestFn } from '../../../shared/api';
import { IOrder, OrderStatus } from '../model';
import { GetOrdersParams } from './types.ts';

class OrdersService {
  get: ApiRequestFn<IOrder[], GetOrdersParams | URLSearchParams | void> = (params) => {
    return api.get('/orders', { params });
  };

  getCount = async (): Promise<number> => {
    const orders = await this.get();
    return orders.data.length;
  };

  archive: ApiRequestFn<IOrder, string> = (orderId) => {
    return api.patch(`/orders/${orderId}`, { status: OrderStatus.Archived });
  };
}

export const ordersService = new OrdersService();

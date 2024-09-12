import { IOrder } from '../../../entities/order';

export interface OrdersLoaderData {
  ordersCount: number;
  orders: IOrder[];
}

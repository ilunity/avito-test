import { IOrder } from '../../../entities/order';

export interface OrdersSectionProps {
  ordersCount: number;
  orders: IOrder[];
}

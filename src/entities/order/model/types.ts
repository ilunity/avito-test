import { IAdvertisement } from '../../advertisement';

export const OrderStatus = {
  Created: 0,
  Paid: 1,
  Transport: 2,
  DeliveredToThePoint: 3,
  Received: 4,
  Archived: 5,
  Refund: 6,
};

export type OrderNumStatus = (typeof OrderStatus)[keyof typeof OrderStatus];

const orderStatus2TextMap: Record<OrderNumStatus, string> = {
  0: 'Created',
  1: 'Paid',
  2: 'Transport',
  3: 'DeliveredToThePoint',
  4: 'Received',
  5: 'Archived',
  6: 'Refund',
};

export const orderStatus2Text = (status: OrderNumStatus):string => {
  return orderStatus2TextMap[status];
}

type OrderItem = IAdvertisement & { count: number };

export interface IOrder {
  id: string;
  status: OrderNumStatus;
  createdAt: string;
  finishedAt?: string;
  items: Array<OrderItem>;
  deliveryWay: string;
  total: number;
}

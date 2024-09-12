import { IOrder } from '../../model';
import { ReactNode } from 'react';

export interface OrderCardProps {
  order: IOrder;
  onItemClick?: (advertisementId: string) => void;
  action?: (orderId: string) => ReactNode;
}

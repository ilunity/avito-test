import { IOrder } from '../../model';
import { OrderCardProps } from '../OrderCard/OrderCard.types.ts';

export interface OrdersListProps {
  orders: IOrder[];
  onItemClick?: OrderCardProps['onItemClick'];
  cardAction?: OrderCardProps['action'];
}

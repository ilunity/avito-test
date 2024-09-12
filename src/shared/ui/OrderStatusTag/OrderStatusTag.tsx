import React from 'react';
import { OrderStatusTagProps } from './OrderStatusTag.types';
import { Tag, TagProps } from 'antd';
import { orderStatus2Text } from '../../../entities/order';

const orderStatusColor: TagProps['color'][] = [
  'magenta',
  'red',
  'volcano',
  'orange',
  'gold',
  'lime',
  'green',
];

export const OrderStatusTag: React.FC<OrderStatusTagProps> = ({ status }) => {
  return <Tag color={ orderStatusColor[status] }>{ orderStatus2Text(status) }</Tag>;
};

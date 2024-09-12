import React from 'react';
import { OrdersListProps } from './OrdersList.types';
import { useStyles } from './OrdersList.styles';
import { Col, Row } from 'antd';
import { OrderCard } from '../OrderCard';

export const OrdersList: React.FC<OrdersListProps> = ({ orders, onItemClick, cardAction }) => {
  const { styles } = useStyles();

  return (
    <Row gutter={ [16, 16] }>
      { orders.map((order) => (
        <Col
          className={ styles.column }
          key={ order.id }
          xs={ { flex: '100%' } }
          sm={ { flex: '50%' } }
          md={ { flex: '33%' } }
          lg={ { flex: '25%' } }>
          <OrderCard
            order={ order }
            onItemClick={ onItemClick }
            action={ cardAction } />
        </Col>
      )) }
    </Row>
  );
};

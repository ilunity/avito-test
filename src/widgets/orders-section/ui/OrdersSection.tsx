import React from 'react';
import { OrdersSectionProps } from './OrdersSection.types';
import { useStyles } from './OrdersSection.styles';
import { Pagination, Section } from '../../../shared/ui';
import { Flex } from 'antd';
import { useSetPaginationSearchParams } from '../../../shared/utils';
import { useNavigate } from 'react-router-dom';
import { OrdersList } from '../../../entities/order';
import { ArchiveOrderButton } from '../../../features/archive-order';

export const OrdersSection: React.FC<OrdersSectionProps> = ({ ordersCount, orders }) => {
  const setPaginationSearchParams = useSetPaginationSearchParams();
  const navigate = useNavigate();
  const { styles } = useStyles();

  const onOrderItemClick = (advertisementId: string) => {
    navigate(`/advertisements/${advertisementId}`);
  };

  return (
    <Section title={ 'Заказы' }>
      <Flex className={ styles.container }>
        <OrdersList
          orders={ orders }
          onItemClick={ onOrderItemClick }
          cardAction={ (orderId) => <ArchiveOrderButton orderId={ orderId } /> }
        />
        <Pagination
          onChange={ setPaginationSearchParams }
          total={ ordersCount } />
      </Flex>
    </Section>
  );
};

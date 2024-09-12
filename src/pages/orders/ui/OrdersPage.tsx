import React from 'react';
import { Layout } from '../../../widgets/layout';
import { OrdersSection } from '../../../widgets/orders-section';
import { useLoaderData } from 'react-router-dom';
import { OrdersLoaderData } from '../api';
import { OrdersParams } from '../../../widgets/orders-params';
import { Flex } from 'antd';
import { useStyles } from './OrdersPage.styles.ts';


export const OrdersPage: React.FC = () => {
  const { styles } = useStyles();
  const { ordersCount, orders } = useLoaderData() as OrdersLoaderData;

  return (
    <Layout>
      <Flex className={ styles.container }>
        <OrdersParams/>
        <OrdersSection
          orders={ orders }
          ordersCount={ ordersCount } />
      </Flex>
    </Layout>
  );
};

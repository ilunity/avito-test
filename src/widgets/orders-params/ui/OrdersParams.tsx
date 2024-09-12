import React from 'react';
import { PageParamsWrapper } from '../../../shared/ui';
import { FilterOrdersForm } from '../../../features/filter-orders';

export const OrdersParams: React.FC = () => {
  return (
    <PageParamsWrapper title={ 'Параметры заказов' }>
      <FilterOrdersForm />
    </PageParamsWrapper>
  );
};

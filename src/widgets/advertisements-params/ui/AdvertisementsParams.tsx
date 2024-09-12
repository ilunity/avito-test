import React from 'react';
import { PageParamsWrapper } from '../../../shared/ui';
import { FilterAdvertisementsForm } from '../../../features/filter-advertisements';

export const AdvertisementsParams: React.FC = () => {
  return (
    <PageParamsWrapper title={ 'Параметры объявлений' }>
      <FilterAdvertisementsForm />
    </PageParamsWrapper>
  );
};

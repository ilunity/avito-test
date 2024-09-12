import React, { useState } from 'react';
import { AdvertisementsSectionProps } from './AdvertisementsSection.types';
import { useStyles } from './AdvertisementsSection.styles';
import { Button, Flex } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { SearchAdvertisements } from '../../../features/search-advertisements';
import { AdvertisementsList } from '../../../entities/advertisement';
import { Pagination, Section } from '../../../shared/ui';
import { useNavigate } from 'react-router-dom';
import { AdvertisementFormModal } from '../../change-advertisement';
import { useSetPaginationSearchParams } from '../../../shared/utils';
import { ADVERTISEMENT_FORM_TYPES } from '../../../features/update-advertisement';


export const AdvertisementsSection: React.FC<AdvertisementsSectionProps> = (
  {
    advertisements,
    advertisementsCount,
  }
) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const { styles } = useStyles();
  const setPaginationSearchParams = useSetPaginationSearchParams();

  const onAdvertisementCardClick = (advertisementId: string) => {
    navigate(`/advertisements/${advertisementId}`);
  };

  return (
    <Section
      title={ 'Объявления' }
      action={
        <Button
          type={ 'primary' }
          icon={ <PlusOutlined /> }
          onClick={ () => setIsModalOpen(true) }>
          Создать объявление
        </Button>
      }
    >
      <Flex className={ styles.container }>
        <SearchAdvertisements />
        <AdvertisementsList
          advertisements={ advertisements }
          onClick={ onAdvertisementCardClick } />
        <Pagination
          onChange={ setPaginationSearchParams }
          total={ advertisementsCount } />
      </Flex>
      <AdvertisementFormModal
        type={ ADVERTISEMENT_FORM_TYPES.CREATE }
        isOpen={ isModalOpen }
        onCancel={ () => setIsModalOpen(false) }
      />
    </Section>
  );
};

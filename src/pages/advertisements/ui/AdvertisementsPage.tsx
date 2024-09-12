import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Layout } from '../../../widgets/layout';
import { AdvertisementsLoaderData } from '../api/types.ts';
import { AdvertisementsSection } from '../../../widgets/advertisements-section';
import { Flex } from 'antd';
import { useStyles } from './AdvertisementsPage.styles.ts';
import { AdvertisementsParams } from '../../../widgets/advertisements-params';

export const AdvertisementsPage: React.FC = () => {
  const { advertisementsCount, advertisements } = useLoaderData() as AdvertisementsLoaderData;
  const { styles } = useStyles();

  return (
    <Layout>
      <Flex className={ styles.container }>
        <AdvertisementsParams/>
        <AdvertisementsSection
          advertisements={ advertisements }
          advertisementsCount={ advertisementsCount }
        />
      </Flex>
    </Layout>
  );
};

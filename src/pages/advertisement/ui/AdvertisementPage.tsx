import React from 'react';
import { AdvertisementSection } from '../../../widgets/advertisement-section';
import { useLoaderData } from 'react-router-dom';
import { AdvertisementLoaderData } from '../api/types.ts';
import { Layout } from '../../../widgets/layout';

export const AdvertisementPage: React.FC = () => {
  const { advertisement } = useLoaderData() as AdvertisementLoaderData;

  return (
    <Layout>
      <AdvertisementSection advertisement={ advertisement } />
    </Layout>
  );
};

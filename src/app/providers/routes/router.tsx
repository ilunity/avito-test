import { createBrowserRouter } from 'react-router-dom';
import { advertisementsLoader, AdvertisementsPage } from '../../../pages/advertisements';
import { AdvertisementPage } from '../../../pages/advertisement';
import { advertisementLoader } from '../../../pages/advertisement/api/loader.ts';

export const router = createBrowserRouter([
  {
    path: '/advertisements',
    element: <AdvertisementsPage />,
    loader: advertisementsLoader,
  },
  {
    path: '/advertisements/:advertisementId',
    element: <AdvertisementPage />,
    loader: advertisementLoader,
  },
]);

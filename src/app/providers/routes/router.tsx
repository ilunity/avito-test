import { createBrowserRouter } from 'react-router-dom';
import { advertisementsLoader, AdvertisementsPage } from '../../../pages/advertisements';

export const router = createBrowserRouter([
  {
    path: '/advertisements',
    element: <AdvertisementsPage />,
    loader: advertisementsLoader,
  },
]);

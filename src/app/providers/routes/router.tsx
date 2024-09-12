import { createBrowserRouter, redirect } from 'react-router-dom';
import { advertisementsLoader, AdvertisementsPage } from '../../../pages/advertisements';
import { AdvertisementPage } from '../../../pages/advertisement';
import { advertisementLoader } from '../../../pages/advertisement/api/loader.ts';
import { OrdersPage } from '../../../pages/orders';
import { ordersLoader } from '../../../pages/orders/api';

export const router = createBrowserRouter([
  {
    path: '/',
    loader: () => {
      return redirect('/advertisements');
    },
  },
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
  {
    path: '/orders',
    element: <OrdersPage />,
    loader: ordersLoader,
  },
]);

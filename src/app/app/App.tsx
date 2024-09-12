import React from 'react';
import { AntdConfigProvider, RouterProvider } from '../providers';

export const App: React.FC = () => {
  return (
    <AntdConfigProvider>
      <RouterProvider />
    </AntdConfigProvider>
  );
};

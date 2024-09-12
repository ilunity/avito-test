import React from 'react';
import { PaginationProps } from './Pagination.types';
import { Pagination as AntdPagination } from 'antd'


export const Pagination: React.FC<PaginationProps> = ({ onChange,total }) => {
  return (
    <AntdPagination
      align={ 'center' }
      showSizeChanger
      onChange={ onChange }
      defaultCurrent={ 1 }
      pageSizeOptions={ [5, 10, 20, 50, 100, 250, 500] }
      total={ total }
    />
  );
};

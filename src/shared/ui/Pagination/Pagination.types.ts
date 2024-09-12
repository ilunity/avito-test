import { PaginationProps as AntdPaginationProps } from 'antd';

export interface PaginationProps {
  onChange: AntdPaginationProps['onChange'];
  total: AntdPaginationProps['total'];
}

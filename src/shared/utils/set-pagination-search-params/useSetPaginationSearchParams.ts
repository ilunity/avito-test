import { PaginationProps } from 'antd';
import { useChangeSearchParam } from '../search-params';

export const useSetPaginationSearchParams = () => {
  const changeParams = useChangeSearchParam();

  const onShowSizeChange: PaginationProps['onShowSizeChange'] = (current, pageSize) => {
    changeParams({
      _start: `${(current - 1) * pageSize}`,
      _limit: `${pageSize}`,
    });
  };

  return onShowSizeChange;
};

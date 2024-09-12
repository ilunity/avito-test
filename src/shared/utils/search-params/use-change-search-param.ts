import { useSearchParams } from 'react-router-dom';

export const useChangeSearchParam = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (params: Record<string, string | number>) => {
    const newParams = new URLSearchParams(searchParams);

    Object.entries(params).forEach(([name, value]) => {
      const isEmpty = value === undefined || value === null || value === '';

      if (isEmpty) {
        newParams.delete(name);
      } else {
        newParams.set(name, `${value}`);
      }
    });

    setSearchParams(newParams);
  };
};

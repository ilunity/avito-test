import { useNavigate } from 'react-router-dom';

export const useRefreshPage = () => {
  const navigate = useNavigate();

  return (timeout?: number) => {
    if (!timeout) {
      return navigate(0);
    }

    setTimeout(() => navigate(0), timeout);
  };
};

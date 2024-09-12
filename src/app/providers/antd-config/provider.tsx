import { ConfigProvider } from 'antd';
import { theme } from './theme';
import { ProviderProps } from '../provider.types.ts';

export const AntdConfigProvider: React.FC<ProviderProps> = ({ children }) => (
  <ConfigProvider theme={ theme }>
    { children }
  </ConfigProvider>
);

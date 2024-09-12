import React from 'react';
import { LayoutProps } from './Layout.types';
import { useStyles } from './Layout.styles';
import { Layout as AntdLayout } from 'antd';
import { NavigationPanel } from '../../navigation';

const { Content } = AntdLayout;

export const Layout: React.FC<LayoutProps> = ({ children, contentClassName }) => {
  const { styles } = useStyles();

  const contentLayoutClassName = contentClassName
    ? `${styles.contentContainer} ${contentClassName}`
    : styles.contentContainer;

  return (
    <AntdLayout className={ styles.container }>
      <Content className={ contentLayoutClassName }>
        <NavigationPanel />
        { children }
      </Content>
    </AntdLayout>
  );
};

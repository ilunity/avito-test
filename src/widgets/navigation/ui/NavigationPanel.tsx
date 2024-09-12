import React from 'react';
import {
  href2NavigationItem,
  NAVIGATION_ITEMS,
  navigationItemHref,
} from './NavigationPanel.types';
import { useStyles } from './NavigationPanel.styles';
import { Menu, MenuProps } from 'antd';
import { ShoppingCartOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { useLocation, useNavigate } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

const menuItems: MenuItem[] = [
  {
    key: NAVIGATION_ITEMS.ADVERTISEMENTS,
    label: 'Объявления',
    icon: <UnorderedListOutlined />,
  },
  {
    key: NAVIGATION_ITEMS.ORDERS,
    label: 'Заказы',
    icon: <ShoppingCartOutlined />,
  },
];

export const NavigationPanel: React.FC = () => {
  const { styles } = useStyles();
  const navigate = useNavigate();

  const location = useLocation();
  const selected = href2NavigationItem[location.pathname];

  const handleClick = ({ key }: { key: string }) => {
    const url = navigationItemHref[key as `${NAVIGATION_ITEMS}`];
    navigate(url);
  };

  return (
    <div className={ styles.wrapper }>
      <Menu
        className={ styles.navigation }
        onClick={ handleClick }
        selectedKeys={ [selected] }
        mode={ 'horizontal' }
        items={ menuItems }
      />
    </div>
  );
};

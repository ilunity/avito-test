export enum NAVIGATION_ITEMS {
  ADVERTISEMENTS = 'ADVERTISEMENTS',
  ORDERS = 'ORDERS',
}

export const navigationItemHref = {
  [NAVIGATION_ITEMS.ADVERTISEMENTS]: '/advertisements',
  [NAVIGATION_ITEMS.ORDERS]: '/orders',
};

export const href2NavigationItem:Record<string, `${NAVIGATION_ITEMS}`> = {
  '/advertisements': NAVIGATION_ITEMS.ADVERTISEMENTS,
  '/orders': NAVIGATION_ITEMS.ORDERS,
};

export enum ADVERTISEMENTS_SORT_TYPE {
  PRICE = 'PRICE',
  VIEWS = 'VIEWS',
  LIKES = 'LIKES',
  NONE = 'NONE',
}

const sortType2SearchParamsMap: Record<`${ADVERTISEMENTS_SORT_TYPE}`, string> = {
  [ADVERTISEMENTS_SORT_TYPE.PRICE]: 'price',
  [ADVERTISEMENTS_SORT_TYPE.VIEWS]: 'views',
  [ADVERTISEMENTS_SORT_TYPE.LIKES]: 'likes',
  [ADVERTISEMENTS_SORT_TYPE.NONE]: '',
};
export const advertisementsSortType2SearchParams = (type: `${ADVERTISEMENTS_SORT_TYPE}`): string => {
  return sortType2SearchParamsMap[type];
};

export const searchParams2AdvertisementsSortType = (param: string | undefined): `${ADVERTISEMENTS_SORT_TYPE}` => {
  for (const [key, value] of Object.entries(sortType2SearchParamsMap)) {
    if (param === value) {
      return key as `${ADVERTISEMENTS_SORT_TYPE}`;
    }
  }

  return ADVERTISEMENTS_SORT_TYPE.NONE;
};

export type FieldType = {
  sort: `${ADVERTISEMENTS_SORT_TYPE}`;
};

import React, { useEffect, useState } from 'react';
import { Form, Input, InputProps } from 'antd';
import { useDebounce } from 'use-debounce';
import { useStyles } from './SearchAdvertisements.styles.ts';
import { useChangeSearchParam } from '../../../../shared/utils';

export const SearchAdvertisements: React.FC = () => {
  const { styles } = useStyles();
  const [value, setValue] = useState<string>('');
  const [debouncedValue] = useDebounce(value, 3000);
  const changeParams = useChangeSearchParam();

  const onChange: InputProps['onChange'] = ({ currentTarget }) => {
    setValue(currentTarget.value);
  };

  useEffect(() => {
    changeParams({ name: debouncedValue });
  }, [debouncedValue]);

  return (
    <Form.Item label={ 'Поиск по названию:' }>
      <Input
        className={ styles.input }
        onChange={ onChange } />
    </Form.Item>
  );
};

import React, { useEffect } from 'react';
import {
  ADVERTISEMENTS_SORT_TYPE,
  advertisementsSortType2SearchParams,
  searchParams2AdvertisementsSortType,
  FieldType,
} from './FilterAdvertisementsForm.types';
import { Button, Form, FormProps, Select, Space } from 'antd';
import { useChangeSearchParam, useSearchParamsObject } from '../../../../shared/utils';

export const FilterAdvertisementsForm: React.FC = () => {
  const [form] = Form.useForm();
  const params = useSearchParamsObject();
  const changeSearchParam = useChangeSearchParam();

  const setValuesFromSearchParams = () => {
    const values = {
      sort: searchParams2AdvertisementsSortType(params._sort),
    };

    form.setFieldsValue(values);
  };

  useEffect(setValuesFromSearchParams, []);

  const onFinish: FormProps<FieldType>['onFinish'] = async ({ sort }) => {
    const params = {
      _sort: sort && advertisementsSortType2SearchParams(sort),
    };
    changeSearchParam(params);
  };

  const resetParams = () => {
    form.resetFields();
    form.submit();
  };

  return (
    <Form
      name={ 'filter-advertisements-form' }
      style={ { maxWidth: 800 } }
      onFinish={ onFinish }
      autoComplete="off"
      layout={ 'vertical' }
      form={ form }
    >
      <Form.Item
        label="Параметр сортировки"
        name="sort">
        <Select>
          <Select.Option value={ ADVERTISEMENTS_SORT_TYPE.PRICE }>Цена</Select.Option>
          <Select.Option value={ ADVERTISEMENTS_SORT_TYPE.VIEWS }>Просмотры</Select.Option>
          <Select.Option value={ ADVERTISEMENTS_SORT_TYPE.LIKES }>Лайки</Select.Option>
          <Select.Option value={ ADVERTISEMENTS_SORT_TYPE.NONE }>-</Select.Option>
        </Select>
      </Form.Item>
      <Space.Compact block>
        <Button
          style={ { width: '55%' } }
          type="primary"
          htmlType="submit">
          Подтвердить
        </Button>
        <Button
          style={ { width: '45%' } }
          type="default"
          htmlType="reset"
          onClick={ resetParams }>
          Сбросить
        </Button>
      </Space.Compact>
    </Form>
  );
};

import React, { useEffect } from 'react';
import { FieldType } from './FilterOrdersForm.types';
import { Button, Form, FormProps, Select, Space, Switch } from 'antd';
import { OrderStatus, orderStatus2Text } from '../../../../entities/order';
import { useChangeSearchParam, useSearchParamsObject } from '../../../../shared/utils';

export const FilterOrdersForm: React.FC = () => {
  const [form] = Form.useForm();
  const params = useSearchParamsObject();
  const changeSearchParam = useChangeSearchParam();

  const setValuesFromSearchParams = () => {
    const values = {
      status: params.status ? orderStatus2Text(+params.status) : '',
      priceSort: params._sort === 'total',
    };

    form.setFieldsValue(values);
  };

  useEffect(setValuesFromSearchParams, []);

  const onFinish: FormProps<FieldType>['onFinish'] = async ({ priceSort, ...values }) => {
    const params = {
      _sort: priceSort ? 'total' : '',
      ...values,
    };
    changeSearchParam(params);
  };

  const resetParams = () => {
    form.resetFields();
    form.submit();
  };

  return (
    <Form
      name={ 'filter-orders-form' }
      style={ { maxWidth: 800 } }
      onFinish={ onFinish }
      autoComplete="off"
      layout={ 'vertical' }
      form={ form }
    >
      <Form.Item
        label="Статус"
        name="status">
        <Select>
          { Object.entries(OrderStatus).map(([key, value]) => (
            <Select.Option
              key={ key }
              value={ value }>
              { key }
            </Select.Option>
          )) }
          <Select.Option value={ '' }>-</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        label={ 'Сортировка по цене' }
        name={ 'priceSort' }>
        <Switch />
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

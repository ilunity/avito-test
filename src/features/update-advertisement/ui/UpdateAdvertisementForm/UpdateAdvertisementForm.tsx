import React from 'react';
import { ADVERTISEMENT_FORM_TYPES, UpdateAdvertisementFormProps, FieldType } from './UpdateAdvertisementForm.types.ts';
import { Button, Form, FormProps, Input, InputNumber, message } from 'antd';
import { requestMessageHandler } from '../../../../shared/utils';
import { executeRequest } from '../../../../shared/api';
import { advertisementsService } from '../../../../entities/advertisement';

const { useForm } = Form;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};

export const UpdateAdvertisementForm: React.FC<UpdateAdvertisementFormProps> = ({
  type,
  initialValues,
  advertisementId,
  onSuccess,
}) => {
  const [messageApi, contextHolder] = message.useMessage();
  const requestHandler = requestMessageHandler(messageApi);
  const [form] = useForm();

  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    const response =
      type === ADVERTISEMENT_FORM_TYPES.CREATE
        ? await executeRequest(() => advertisementsService.create(values))
        : await executeRequest(() => advertisementsService.update({ ...values, advertisementId }));

    requestHandler(response);
    if (response.success) {
      onSuccess?.(messageApi);

      if (type === ADVERTISEMENT_FORM_TYPES.CREATE) {
        form.resetFields();
      }
    }
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    messageApi.error(`Failed: ${errorInfo}`);
  };

  const required = type === ADVERTISEMENT_FORM_TYPES.CREATE;

  return (
    <>
      { contextHolder }
      <Form
        { ...formItemLayout }
        name={ 'advertisement-form' }
        style={ { maxWidth: 800 } }
        initialValues={ initialValues }
        onFinish={ onFinish }
        onFinishFailed={ onFinishFailed }
        autoComplete={ 'on' }
        form={ form }
        labelAlign={ 'left' }
        labelWrap
        colon={ false }
      >
        <Form.Item<FieldType>
          label="Название"
          name="name"
          rules={ [{ required, message: 'Введите название!' }] }
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label="Адрес изображения"
          name="imageUrl"
          rules={ [{ message: 'Введите адрес с изображением!' }] }
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label="Описание"
          name="description"
          rules={ [{ required, message: 'Введите описание!' }] }
        >
          <Input.TextArea autoSize={ { minRows: 12, maxRows: 24 } } />
        </Form.Item>
        <Form.Item<FieldType>
          label="Стоимость"
          name="price"
          rules={ [{ required, message: 'Введите стоимость!' }] }
        >
          <InputNumber />
        </Form.Item>
        <Form.Item wrapperCol={ { xs: { offset: 0 }, sm: { offset: 6 } } }>
          <Button
            type={ 'primary' }
            htmlType={ 'submit' }>
            Подтвердить
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

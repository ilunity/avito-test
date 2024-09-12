import React from 'react';
import { ArchiveOrderButtonProps } from './ArchiveOrderButton.types';
import { Button, message } from 'antd';
import { executeRequest } from '../../../../shared/api';
import { ordersService } from '../../../../entities/order';
import { requestMessageHandler, useRefreshPage } from '../../../../shared/utils';


export const ArchiveOrderButton: React.FC<ArchiveOrderButtonProps> = ({ orderId }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const requestHandler = requestMessageHandler(messageApi);
  const refreshPage = useRefreshPage();

  const archiveOrder = async () => {
    const response = await executeRequest(() => ordersService.archive(orderId));

    requestHandler(response, 'Заказ завершен!');
    if (response.success) {
      refreshPage(1000);
    };
  };

  return (
    <>
      { contextHolder }
      <Button
        type={ 'primary' }
        onClick={ archiveOrder }>
      Завершить
      </Button>
    </>
  );
};

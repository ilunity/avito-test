import React from 'react';
import { AdvertisementFormModalProps, modalTitle, successMessage } from './AdvertisementFormModal.types';
import { Modal } from 'antd';
import { useRefreshPage } from '../../../shared/utils';
import { ADVERTISEMENT_FORM_TYPES, UpdateAdvertisementForm } from '../../../features/update-advertisement';

export const AdvertisementFormModal: React.FC<AdvertisementFormModalProps> = ({
  type,
  advertisement,
  isOpen,
  onCancel,
}) => {
  const refreshPage = useRefreshPage();

  return (
    <Modal
      open={ isOpen }
      title={ modalTitle[type] }
      centered
      footer={ () => <></> }
      onCancel={ onCancel }>
      { type === ADVERTISEMENT_FORM_TYPES.UPDATE ? (
        <UpdateAdvertisementForm
          advertisementId={ advertisement.id }
          initialValues={ advertisement }
          type={ type }
          onSuccess={ (messageApi) => {
            messageApi.success(successMessage[type]);
            onCancel();
            refreshPage(1000);
          } }
        />
      ) : (
        <UpdateAdvertisementForm
          type={ type }
          onSuccess={ (messageApi) => {
            messageApi.success(successMessage[type]);
            onCancel();
            refreshPage(1000);
          } }
        />
      ) }
    </Modal>
  );
};

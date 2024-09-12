import React from 'react';
import { AdvertisementsListProps } from './AdvertisementsList.types';
import { useStyles } from './AdvertisementsList.styles';
import { Col, Row } from 'antd';
import { AdvertisementCard } from '../AdvertisementCard';

export const AdvertisementsList: React.FC<AdvertisementsListProps> = ({ advertisements, onClick }) => {
  const { styles } = useStyles();

  return (
    <Row gutter={ [16, 16] }>
      { advertisements.map((advertisement) => (
        <Col
          className={ styles.column }
          key={ advertisement.id }
          xs={ { flex: '100%' } }
          sm={ { flex: '50%' } }
          xl={ { flex: '33%' } }
        >
          <AdvertisementCard
            advertisement={ advertisement }
            onClick={ onClick } />
        </Col>
      )) }
    </Row>
  );
};

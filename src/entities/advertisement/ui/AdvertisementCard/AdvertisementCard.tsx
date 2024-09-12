import React from 'react';
import { AdvertisementCardProps } from './AdvertisementCard.types';
import { useStyles } from './AdvertisementCard.styles';
import { Card, Flex, Image, Tooltip, Typography } from 'antd';
import { EyeOutlined, HeartFilled } from '@ant-design/icons';
import { fallbackImage } from '../../../../shared/consts';

const { Text, Title } = Typography;

export const AdvertisementCard: React.FC<AdvertisementCardProps> = ({ advertisement, onClick }) => {
  const { styles } = useStyles();

  const handleClick = () => {
    onClick?.(advertisement.id);
  };

  return (
    <Card
      className={ styles.container }
      classNames={ {
        body: styles.cardBody,
      } }
      cover={
        <Image
          height={ 170 }
          className={ styles.image }
          src={ advertisement.imageUrl }
          alt={ 'Изображение товара' }
          fallback={ fallbackImage }
          preview={ false }
        />
      }
      hoverable
      onClick={ handleClick }
    >
      <Flex className={ styles.contentContainer }>
        <Flex className={ styles.textContainer }>
          <Title
            className={ styles.advertisementName }
            level={ 5 }
            ellipsis={ {
              rows: 1,
              expandable: true,
              symbol: '',
              tooltip: advertisement.name,
            } }
          >
            { advertisement.name }
          </Title>
          <Text
            className={ styles.secondaryText }
            type={ 'secondary' }
            ellipsis={ {
              suffix: ' ₽',
              tooltip: advertisement.price + ' ₽',
            } }
          >
            { advertisement.price }
          </Text>
        </Flex>
        <Flex className={ styles.feedbackContainer }>
          <Tooltip
            className={ styles.feedbackWrapper }
            title={ 'Количество лайков' }>
            <HeartFilled className={ `${styles.feedbackIcon} ${styles.likeIcon}` } />
            <Text>{ advertisement.likes }</Text>
          </Tooltip>
          <Tooltip
            className={ styles.feedbackWrapper }
            title={ 'Количество просмотров' }>
            <EyeOutlined className={ styles.feedbackIcon } />
            <Text>{ advertisement.views }</Text>
          </Tooltip>
        </Flex>
      </Flex>
    </Card>
  );
};

import React from 'react';
import { Card, Statistic } from 'antd';
import { useStyles } from './StatisticCard.styles';
import { StatisticCardProps } from './StatisticCard.types.ts';

export const StatisticCard: React.FC<StatisticCardProps> = ({ primary, ...statisticProps }) => {
  const { styles } = useStyles({ primary: Boolean(primary) });

  return (
    <Card
      bordered={ false }
      size="small"
      className={ styles.container }>
      <Statistic { ...statisticProps } />
    </Card>
  );
};

import React from 'react';
import { OrderCardProps } from './OrderCard.types';
import { useStyles } from './OrderCard.styles';
import { Card, Flex, Table, TableProps, Typography } from 'antd';
import { Divider, OrderStatusTag } from '../../../../shared/ui';
import { format } from 'date-fns';

const { Text, Title } = Typography;
type ColumnsType = TableProps['columns'];

export const OrderCard: React.FC<OrderCardProps> = ({ order, onItemClick, action }) => {
  const { styles } = useStyles();

  const tableData: TableProps['dataSource'] = order.items.map((item) => ({
    key: item.id,
    name: item.name,
    count: item.count,
    price: item.price,
  }));

  const columns: ColumnsType = [
    {
      title: 'Название',
      dataIndex: 'name',
      key: 'name',
      width: '50%',
    },
    {
      title: 'Кол-во',
      dataIndex: 'count',
      key: 'count',
    },
    {
      title: 'Цена',
      dataIndex: 'price',
      key: 'price',
    },
  ];

  const formattedDate = format(new Date(order.createdAt), 'yyyy-MM-dd');

  return (
    <Card
      className={ styles.container }
      classNames={ {
        body: styles.cardBody,
      } }
    >
      <Flex className={ styles.contentContainer }>
        <Flex className={ styles.textContainer }>
          <Typography>
            <Text className={ styles.primaryText }>№{ order.id }</Text>
            <Text
              type={ 'secondary' }
              className={ styles.secondaryText }>
              { ' ' }
              ({ formattedDate })
            </Text>
          </Typography>
          <OrderStatusTag status={ order.status } />
        </Flex>
        <Divider />
        <Flex className={ styles.itemsTitleContainer }>
          <Title
            className={ styles.itemsTitle }
            level={ 5 }>
            Товары:
          </Title>
          <Text type={ 'secondary' }>Кол-во позиций: { order.items.length }</Text>
        </Flex>
        <Table
          className={ styles.itemsTable }
          dataSource={ tableData }
          columns={ columns }
          size={ 'small' }
          pagination={ false }
          bordered
          scroll={ { y: 200 } }
          summary={ () => (
            <Table.Summary fixed>
              <Table.Summary.Row>
                <Table.Summary.Cell index={ 0 }>Сумма</Table.Summary.Cell>
                <Table.Summary.Cell index={ 1 }></Table.Summary.Cell>
                <Table.Summary.Cell index={ 2 }>{ order.total }₽</Table.Summary.Cell>
              </Table.Summary.Row>
            </Table.Summary>
          ) }
          onRow={ (record) => ({
            onClick: () => onItemClick?.(record.key),
          }) }
        />
        <Divider />
        { action && action(order.id) }
      </Flex>
    </Card>
  );
};

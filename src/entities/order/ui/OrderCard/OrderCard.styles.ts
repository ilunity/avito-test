import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token }) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: 350,
  },
  cardBody: {
    flex: 1,
  },
  contentContainer: {
    height: '100%',
    flexDirection: 'column',
    gap: token.marginSM,
  },
  textContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemsTitleContainer: {
    justifyContent: 'space-between',
  },
  itemsTitle: {
    marginBottom: '0px !important',
  },
  itemsTable: {
    marginBottom: 'auto',
    width: '100%',
  },
  primaryText: {
    fontSize: token.fontSizeXL,
    fontWeight: token.fontWeightStrong,
  },
  secondaryText: {
    fontSize: token.fontSizeLG,
  },
  centeredText: {
    margin: '0 auto',
  },
}));

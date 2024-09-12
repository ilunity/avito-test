import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token }) => ({
  container: {
    width: '100%',
    flexDirection: 'column',
    marginBottom: token.marginXL,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    marginBottom: token.marginMD,
  },
}));

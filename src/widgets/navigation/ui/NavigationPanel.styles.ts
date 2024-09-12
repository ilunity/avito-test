import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token }) => ({
  wrapper: {
    marginBottom: token.marginLG,
  },
  navigation: {
    backgroundColor: token.colorInfoBg,
  },
}));

import { createStyles } from 'antd-style';

interface StylesProps {
  primary: boolean;
}

export const useStyles = createStyles(({ token }, { primary }: StylesProps) => ({
  container: {
    display: 'inline-block',
    backgroundColor: primary ? token.colorPrimaryBg : token.colorBgBase,
  },
}));

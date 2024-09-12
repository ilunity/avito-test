import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token }) => ({
  container: {
    maxWidth: 300,
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  cardBody: {
    flex: 1,
  },
  image: {
    objectFit: 'cover',
    border: `1px solid ${token.colorBorder}`,
  },
  contentContainer: {
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: token.marginSM,
  },
  advertisementName: {
    marginBottom: '0px !important',
  },
  textContainer: {
    flexDirection: 'column',
  },
  primaryText: {
    fontSize: token.fontSizeXL,
    fontWeight: token.fontWeightStrong,
  },
  secondaryText: {
    fontSize: token.fontSizeLG,
  },
  description: {
    minHeight: token.fontSize * token.lineHeight * 8,
  },
  feedbackContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: token.marginSM,
  },
  feedbackWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: token.marginXXS,
  },
  feedbackIcon: {
    fontSize: token.fontSizeXL,
  },
  likeIcon: {
    color: 'red',
  },
}));

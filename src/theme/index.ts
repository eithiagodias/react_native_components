import { createTheme } from '@shopify/restyle';

import { colors } from './colors';
import { spacing } from './spacing';

const theme = createTheme({
  colors,
  spacing,
  textVariants: {
    header: {
      fontWeight: 'bold',
      fontSize: 34,
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
    },
    defaults: {
    },
  },
});

type ThemeProps = typeof theme;

export { theme };

export type { ThemeProps };

import { extendTheme } from '@chakra-ui/react';

import colors from './components/colors';
import fonts from './components/fonts';
import styles from './components/styles';

const theme = extendTheme({
  colors,
  fonts,
  styles,
});

export default theme;

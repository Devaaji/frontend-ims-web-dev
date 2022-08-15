import { ChakraProvider } from '@chakra-ui/react';
import themes from '../theme';

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <ChakraProvider theme={themes}>
      {getLayout(<Component {...pageProps} />)}
    </ChakraProvider>
  );
}

export default MyApp;

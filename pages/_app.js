import { ChakraProvider } from '@chakra-ui/react';
import themes from '../theme';
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <ChakraProvider theme={themes}>
      <NextNProgress
        height={5}
        color="#D3AF37"
        options={{ showSpinner: false }}
      />
      {getLayout(<Component {...pageProps} />)}
    </ChakraProvider>
  );
}

export default MyApp;

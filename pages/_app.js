import React, { useState } from 'react';

import { ChakraProvider } from '@chakra-ui/react';
import themes from '../theme';
import NextNProgress from 'nextjs-progressbar';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  const [queryClient] = useState(() => new QueryClient());

  return (
    <ChakraProvider theme={themes}>
      <NextNProgress
        height={5}
        color="#D3AF37"
        options={{ showSpinner: false }}
      />
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          {getLayout(<Component {...pageProps} />)}
        </Hydrate>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default MyApp;

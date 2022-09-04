import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import MainLayout from 'components/layouts/MainLayout';
import theme from 'utils/theme';
import React from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Page title</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={theme}
      >
        <MainLayout>
          <React.Suspense fallback={<div>Loading...</div>}>
            <Component {...pageProps} />
          </React.Suspense>
        </MainLayout>
      </MantineProvider>
    </div>
  )
}

export default MyApp

import Head from 'next/head';
import GlobalStyle from '@/globalStyles';
import type { AppProps } from 'next/app';
import { GameProvider } from '@/context/GameContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GameProvider>
      <GlobalStyle />
      <Head>
        {/* eslint-disable */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet" />
        <title>Gaming 1 Frontend Assessment</title>
      </Head>
      <Component {...pageProps} />
    </GameProvider>
  )
}

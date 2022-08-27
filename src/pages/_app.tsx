import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Head>
          <title>EZMoney</title>
        </Head>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;

import type { AppProps } from "next/app";

import { ChakraProvider } from "@chakra-ui/react";
import { TransactionModal } from "../components/Modal";
import { ModalContextProvider } from "../contexts/ModalContext";
import { theme } from "../styles/theme";
import Head from "next/head";

import "../styles/globals.css";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ModalContextProvider>
        <ChakraProvider theme={theme}>
          <Head>
            <title>EZMoney</title>
          </Head>
          <TransactionModal />
          <Toaster position="top-center" />
          <Component {...pageProps} />
        </ChakraProvider>
      </ModalContextProvider>
    </>
  );
}

export default MyApp;

import type { AppProps } from "next/app";
import { ChakraProvider, useColorMode } from "@chakra-ui/react";
import { TransactionModal } from "../components/Modal";
import { ModalContextProvider } from "../contexts/ModalContext";
import { Toaster } from "react-hot-toast";
import Head from "next/head";
import "../styles/globals.css";
import { theme } from "../styles/theme";

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

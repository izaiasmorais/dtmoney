import type { NextPage } from "next";
import { Flex, Grid, useColorMode } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Summary } from "../components/Summary";
import { Transaction } from "../components/Transaction";
import { useModal } from "../contexts/ModalContext";
import { useEffect } from "react";

import styles from "../styles/home.module.css";
import { Footer } from "../components/Footer";

const Home: NextPage = () => {
  const { transactions, setTransactions } = useModal();
  const { colorMode } = useColorMode();

  useEffect(() => {
    const client_transactions = localStorage.getItem("client_transactions");

    if (client_transactions) {
      setTransactions(JSON.parse(client_transactions));
    }
  }, []);

  return (
    <Flex
      as="div"
      direction="column"
      position="relative"
      w="100%"
      h="100vh"
      className={colorMode === "light" ? styles.lightMode : styles.darkMode}
    >
      <Header />
      <Summary />
      <Flex direction="column" p="1rem" h="100%">
        {transactions.map((transaction, index) => (
          <Transaction
            key={index}
            category={transaction.category}
            price={transaction.price}
            title={transaction.title}
            type={transaction.type}
            create_at={transaction.create_at}
          />
        ))}
      </Flex>
      <Footer />
    </Flex>
  );
};

export default Home;

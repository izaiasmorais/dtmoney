import { Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Header } from "../components/Header";
import { Summary } from "../components/Summary";
import { Transaction } from "../components/Transaction";

const Home: NextPage = () => {
  return (
    <Flex direction="column" h="100vh" w="100%">
      <Header />
      <Flex direction="column" p="1rem">
        <Summary />
        <Transaction />
        <Transaction />
      </Flex>
    </Flex>
  );
};

export default Home;

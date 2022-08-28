import { Flex, useColorMode } from "@chakra-ui/react";
import { useModal } from "../../contexts/ModalContext";
import { SummaryBox } from "./SummaryBox";

export function Summary() {
  const { colorMode } = useColorMode();
  const { transactions } = useModal();

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.deposits += transaction.price;
        acc.total += transaction.price;
      } else {
        acc.withdraws += transaction.price;
        acc.total -= transaction.price;
      }

      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  );

  const entradas = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(summary.deposits);

  const saídas = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(summary.withdraws);

  const total = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(summary.total);

  return (
    <Flex pl="1rem" pr={["0", "1rem", "1rem"]}>
      <Flex
        overflowX="auto"
        maxWidth="1120px"
        w="100%"
        mt="-4.5rem"
        mx="auto"
        gap={["1rem", "1rem", "2rem"]}
        mb={["2rem", "4rem"]}
        color={colorMode == "light" ? "normal" : "white.100"}
      >
        <SummaryBox
          url="/Income.png"
          bg={colorMode == "light" ? "white.100" : "gray.300"}
          title="Entradas"
          value={entradas}
        />
        <SummaryBox
          url="/Outcome.png"
          bg={colorMode == "light" ? "white.100" : "gray.300"}
          title="Saídas"
          value={saídas}
        />
        <SummaryBox
          url="/Total.png"
          bg={colorMode == "light" ? "green.500" : "purple.500"}
          title="Total"
          value={total}
          color="white.100"
        />
      </Flex>
    </Flex>
  );
}

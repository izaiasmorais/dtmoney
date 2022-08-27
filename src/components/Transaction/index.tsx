import { Flex, Grid, SimpleGrid, Text } from "@chakra-ui/react";
import { TransactionProps } from "../../contexts/ModalContext";

export function Transaction({
  type,
  category,
  title,
  price,
  create_at,
}: TransactionProps) {
  return (
    <SimpleGrid
      gridTemplateColumns={["1fr", "1fr", "2fr 1fr 1fr"]}
      borderRadius=".25rem"
      maxWidth="1120px"
      w="100%"
      mx="auto"
      px={["1rem", "1rem", "2rem"]}
      py={["1rem", "1rem", "1.25rem"]}
      mt="1rem"
      bg="white.100"
    >
      <Flex h="100%" mb=".5rem" align="center">
        <Text>{title}</Text>
      </Flex>
      {type === "deposit" ? (
        <Flex h="100%" mb=".5rem" color="green.300" align="center">
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(price)}
        </Flex>
      ) : (
        <Flex h="100%" mb=".5rem" color="red.300" align="center">
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(price)}
        </Flex>
      )}
      <Flex align="center" justify="space-between" gap="1rem">
        <Text>{category}</Text>
        <Text>{create_at}</Text>
      </Flex>
    </SimpleGrid>
  );
}

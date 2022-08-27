import { Flex, Grid, SimpleGrid, Text } from "@chakra-ui/react";

export function Transaction() {
  return (
    <SimpleGrid
      gridTemplateColumns={["1fr", "1fr", "2fr 1fr 1fr"]}
      borderRadius=".5rem"
      maxWidth="1120px"
      w="100%"
      mx="auto"
      px="2rem"
      py="1.25rem"
      mt=".5rem"
      bg="gray.100"
    >
      <Flex h="100%" mb=".5rem" align="center">
        <Text>Compras no supermercado</Text>
      </Flex>
      <Flex h="100%" mb=".5rem" color="green.300" align="center">
        R$ 2.200,00
      </Flex>
      <Flex align="center" justify="space-between" gap="1rem">
        <Text>Venda</Text>
        <Text>13/04/1945</Text>
      </Flex>
    </SimpleGrid>
  );
}

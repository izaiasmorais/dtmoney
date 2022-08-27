import { Box, Flex, Image, Text } from "@chakra-ui/react";

export function Summary() {
  return (
    <Flex
      overflowX="auto"
      maxWidth="1120px"
      w="100%"
      mx="auto"
      mt={["-4.5rem"]}
      mb={["2rem", "4rem"]}
      gap={["1rem", "2rem"]}
    >
      <Box
        w="100%"
        bg="gray.100"
        py="1.125rem"
        px="2rem"
        minW="280px"
        borderRadius=".5rem"
      >
        <Flex w="100%" justify="space-between" mb=".7rem">
          <Text>Entradas</Text>
          <Image src="/Income.png" w="2rem" h="2rem" />
        </Flex>
        <Text fontSize="2rem">R$ 5.700,00</Text>
      </Box>
      <Box
        w="100%"
        bg="gray.100"
        py="1.125rem"
        px="2rem"
        minW="280px"
        borderRadius=".5rem"
      >
        <Flex w="100%" justify="space-between" mb=".7rem">
          <Text>Saídas</Text>
          <Image src="/Outcome.png" w="2rem" h="2rem" />
        </Flex>
        <Text fontSize="2rem">R$ 2.200,00</Text>
      </Box>
      <Box
        w="100%"
        bg="purple.500"
        py="1.125rem"
        px="2rem"
        minW="280px"
        borderRadius=".5rem"
      >
        <Flex w="100%" justify="space-between" mb=".7rem">
          <Text>Total</Text>
          <Image src="/Total.png" w="2rem" h="2rem" />
        </Flex>
        <Text fontSize="2rem">R$ 3.500,00</Text>
      </Box>
    </Flex>
  );
}

import {
  Flex,
  Grid,
  Image,
  SimpleGrid,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { TransactionProps } from "../../contexts/ModalContext";

export function Transaction({
  type,
  category,
  title,
  price,
  create_at,
}: TransactionProps) {
  const { colorMode } = useColorMode();

  return (
    <SimpleGrid
      gridTemplateColumns={["1fr", "1fr", "2fr 1fr 1fr"]}
      borderRadius=".5rem"
      maxWidth="1120px"
      w="100%"
      mx="auto"
      px={["1rem", "1rem", "2rem"]}
      py={["1rem", "1rem", "1.25rem"]}
      mb="1rem"
      color={colorMode == "light" ? "gray.300" : "white.100"}
      bg={colorMode == "light" ? "white.100" : "gray.300"}
    >
      <Flex h="100%" mb=".5rem" align="center">
        <Text>{title}</Text>
      </Flex>
      {type === "deposit" ? (
        <Flex
          h="100%"
          mb=".5rem"
          pb={["1rem", 0, 0]}
          color="green.300"
          align="center"
        >
          <Text fontWeight={["600", "400"]}>
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(price)}
          </Text>
        </Flex>
      ) : (
        <Flex
          h="100%"
          mb=".5rem"
          pb={["1rem", 0, 0]}
          color="red.300"
          align="center"
        >
          <Text fontWeight={["600", "400"]}>
            -{" "}
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(price)}
          </Text>
        </Flex>
      )}
      <Flex align="center" justify="space-between" gap="1rem">
        <Text color="white.500">
          <Flex align="center" justify="center" gap=".3rem">
            <Image w="1rem" h="1rem" src="/tag.png" /> {category}
          </Flex>
        </Text>
        <Text color="white.500">
          <Flex align="center" justify="center" gap=".3rem">
            <Image w="1rem" h="1rem" src="/calendar.png" />
            {create_at}
          </Flex>
        </Text>
      </Flex>
    </SimpleGrid>
  );
}

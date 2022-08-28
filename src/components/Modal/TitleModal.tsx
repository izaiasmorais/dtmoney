import { Text, useColorMode } from "@chakra-ui/react";

export function TitleModal() {
  const { colorMode } = useColorMode();

  return (
    <Text
      fontSize="1.5rem"
      fontWeight="600"
      mt="1rem"
      color={colorMode == "light" ? "blackAlpha.900" : "white.300"}
    >
      Nova transação
    </Text>
  );
}

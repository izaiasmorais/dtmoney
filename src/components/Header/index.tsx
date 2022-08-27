import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex w="100%" h="13rem" bg="blackAlpha.900" pb="6rem">
      <Flex
        w="100%"
        maxWidth="1120px"
        mx="auto"
        justify="space-between"
        pt="2.5rem"
        px="1rem"
      >
        <Box display="flex" alignItems="top" justifyItems="center" gap=".5rem">
          <Image src="/Logo.png" maxWidth="100%" maxHeight="41px" />
          <Text mt=".2rem" fontWeight="bold" fontSize="1.2rem">
            EZMoney
          </Text>
        </Box>
        <Button bg="purple.500" p="1rem" _hover={{ bg: "purple.700" }}>
          Nova transação
        </Button>
      </Flex>
    </Flex>
  );
}

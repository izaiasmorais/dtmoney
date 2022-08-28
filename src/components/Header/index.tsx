import { Box, Button, Flex, Image, Text, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useModal } from "../../contexts/ModalContext";

export function Header() {
  const { onOpen } = useModal();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      w="100%"
      h="13rem"
      bg={colorMode === "light" ? "purple.500" : "blackAlpha.900"}
      pb="6rem"
    >
      <Flex
        w="100%"
        maxWidth="1120px"
        mx="auto"
        justify="space-between"
        pt="2.5rem"
        px={["1rem", 0]}
      >
        <Box
          display="flex"
          alignItems="top"
          mt={[".3rem", 0, 0]}
          justifyItems="center"
          gap={[".5rem", "1rem"]}
        >
          <Image src="/Logo.png" maxWidth="100%" maxHeight={["30px", "35px"]} />
          <Text
            mt=".2rem"
            fontWeight="bold"
            fontSize={["1rem", "1.2rem", "1.2rem"]}
            color="white"
          >
            EZMoney
          </Text>
        </Box>

        <Flex>
          <Button
            p="1rem"
            bg="transparent"
            _hover={{ filter: "brightness(0.9)" }}
            _active={{ filter: "brightness(0.9)" }}
            onClick={() => toggleColorMode()}
          >
            {colorMode === "light" ? (
              <MoonIcon color="white" height={5} width={5} />
            ) : (
              <SunIcon color="white" height={5} width={5} />
            )}
          </Button>
          <Button
            bg={colorMode === "light" ? "blue.700" : "purple.500"}
            p="1rem"
            color="white"
            transition="filter .2s"
            _hover={{ filter: "brightness(0.9)" }}
            _active={{ filter: "brightness(0.9)" }}
            onClick={() => onOpen()}
          >
            <Text fontSize={[".85rem", "1rem"]}>Nova transação</Text>
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}

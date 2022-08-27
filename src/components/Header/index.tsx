import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  useBreakpointValue,
  useColorMode,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useModal } from "../../contexts/ModalContext";
import { TbReportMoney } from "react-icons/tb";

export function Header() {
  const { onOpen } = useModal();
  const { colorMode, toggleColorMode } = useColorMode();

  const isMobile = useBreakpointValue({
    base: true,
    md: false,
  });

  return (
    <Flex w="100%" h="13rem" bg="purple.500" pb="6rem">
      <Flex
        w="100%"
        maxWidth="1120px"
        mx="auto"
        justify="space-between"
        pt="2.5rem"
        px="1rem"
      >
        <Box display="flex" alignItems="top" justifyItems="center" gap=".5rem">
          <Image src="/Logo.png" maxWidth="100%" maxHeight={["30px", "41px"]} />
          <Text
            mt={[".2rem", ".4rem"]}
            fontWeight="bold"
            fontSize={["1rem", "1.2rem", "1.2rem"]}
            color="white"
          >
            EZMoney
          </Text>
        </Box>

        <Button
          bg="blue.700"
          p={["1rem", "1.5rem"]}
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
  );
}

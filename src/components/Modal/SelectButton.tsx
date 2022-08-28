import { Button, Image, useColorMode, Text } from "@chakra-ui/react";
import { useModal } from "../../contexts/ModalContext";

interface SelectButtonProps {
  bg: string;
  src: string;
  option: string;
  name: string;
  clickFunction: () => void;
}

export function SelectButton({
  bg,
  name,
  src,
  option,
  clickFunction,
}: SelectButtonProps) {
  const { type } = useModal();
  const { colorMode } = useColorMode();

  return (
    <Button
      py="1.75rem"
      w="100%"
      gap=".5rem"
      border="1px solid transparent"
      onClick={clickFunction}
      _hover={{ bg: "normal" }}
      _active={{ bg: "normal" }}
      color={colorMode === "light" ? "gray.700 " : "white.500"}
      borderColor={colorMode === "light" ? "#D7D7D7" : "transparent"}
      bg={colorMode === "light" ? "transparent" : "gray.100"}
      css={{
        background:
          colorMode === "light"
            ? type === option
              ? bg
              : "transparent"
            : type === option
            ? bg
            : "gray.100",
        borderColor: type === option ? "transparent" : "normal",
      }}
    >
      <Image src={src} w="1.5rem" h="1.5rem" />
      <Text fontWeight="400">{name}</Text>
    </Button>
  );
}

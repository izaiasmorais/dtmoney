import { Button, Image, useColorMode } from "@chakra-ui/react";
import { useModal } from "../../contexts/ModalContext";

interface SelectButtonProps {
  bg: string;
  src: string;
  option: string;
  clickFunction: () => void;
}

export function SelectButton({
  bg,
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
      color={colorMode === "light" ? "gray.700" : "white.500"}
      borderColor={colorMode === "light" ? "#D7D7D7" : "none"}
      bg={colorMode === "light" ? "transparent" : "gray.100"}
    >
      <Image src={src} w="1.5rem" h="1.5rem" />
      Entrada
    </Button>
  );
}

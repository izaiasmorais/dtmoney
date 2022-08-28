import { Input, useColorMode } from "@chakra-ui/react";

interface InputModalProps {
  value: string | number;
  place: string;
  type: string;
  changeFunction: (e: any) => void;
}

export function InputModal({
  value,
  place,
  type,
  changeFunction,
}: InputModalProps) {
  const { colorMode } = useColorMode();
  return (
    <Input
      type={type}
      placeholder={place}
      py="1.75rem"
      value={value}
      color={colorMode === "light" ? "gray.700" : "white.100"}
      bg={colorMode === "light" ? "white.400" : "gray.700"}
      border={colorMode === "light" ? "1px solid #d7d7d7" : "none"}
      borderColor={colorMode === "light" ? "#d7d7d7" : "none"}
      _placeholder={{
        color: colorMode === "light" ? "#969CB2" : "white.700",
      }}
      onChange={(e) => changeFunction(e.target.value)}
    />
  );
}

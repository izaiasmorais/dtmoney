import { Flex, Text, Box, Image } from "@chakra-ui/react";

interface SummaryBoxProps {
  title: string;
  value: string;
  bg: string;
  url: string;
  color?: string;
}

export function SummaryBox({ title, bg, url, value, color }: SummaryBoxProps) {
  return (
    <Box
      w="100%"
      bg={bg}
      color={color}
      py="1.5rem"
      px="2rem"
      minW="280px"
      borderRadius=".5rem"
    >
      <Flex w="100%" justify="space-between" mb={["1rem", ".7rem"]}>
        <Text>{title}</Text>
        <Image src={url} w="2rem" h="2rem" />
      </Flex>
      <Text fontSize="2rem" fontWeight="500">
        {value}
      </Text>
    </Box>
  );
}

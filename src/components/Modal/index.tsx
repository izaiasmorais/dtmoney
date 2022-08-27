import {
  Button,
  Flex,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useModal } from "../../contexts/ModalContext";

export function TransactionModal() {
  const {
    isOpen,
    onClose,
    title,
    category,
    price,
    setCategory,
    setTitle,
    setPrice,
    setType,
    type,
    crateTransaction,
  } = useModal();

  function handleAddTransaction() {
    crateTransaction();
    onClose();
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent mt="150px" px="1rem" pb="2rem" w="500px">
        <ModalBody>
          <Flex direction="column" gap="1rem">
            <Text
              fontSize="1.5rem"
              fontWeight="600"
              mt="1rem"
              color="blackAlpha.900"
            >
              Nova transação
            </Text>
            <Input
              type="text"
              placeholder="descrição"
              py="1.75rem"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Input
              type="number"
              placeholder="preço"
              py="1.75rem"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
            />
            <Input
              placeholder="categoria"
              py="1.75rem"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
            <Flex gap="1rem">
              <Button
                py="1.75rem"
                w="100%"
                gap=".5rem"
                border="1px solid transparent"
                onClick={() => setType("deposit")}
                _hover={{ bg: "transparent" }}
                _active={{ bg: "transparent" }}
                borderColor={type === "deposit" ? "transparent" : "#bac9d8a9"}
                bg={type === "deposit" ? "#12a45429" : "transparent"}
              >
                <Image src="/Income.png" w="1.5rem" h="1.5rem" />
                Entrada
              </Button>
              <Button
                py="1.75rem"
                w="100%"
                gap=".5rem"
                border="1px solid transparent"
                onClick={() => setType("withdraw")}
                _hover={{ bg: "transparent" }}
                _active={{ bg: "transparent" }}
                borderColor={type === "withdraw" ? "transparent" : "#bac9d8a9"}
                bg={type === "withdraw" ? "#e62e4d28" : "transparent"}
              >
                <Image src="/Outcome.png" w="1.5rem" h="1.5rem" />
                Saída
              </Button>
            </Flex>
            <Button
              py="1.75rem"
              mt="1rem"
              bg="green.500"
              color="white.100"
              transition="filter .2s"
              _hover={{ filter: "brightness(0.9)" }}
              _active={{ filter: "brightness(0.9)" }}
              onClick={() => handleAddTransaction()}
            >
              Cadastrar
            </Button>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

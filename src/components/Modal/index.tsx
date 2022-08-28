import {
  Button,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  useColorMode,
} from "@chakra-ui/react";
import { useModal } from "../../contexts/ModalContext";
import { InputModal } from "./InputModal";
import { SelectButton } from "./SelectButton";
import { TitleModal } from "./TitleModal";

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
    crateTransaction,
  } = useModal();
  const { colorMode } = useColorMode();

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        mt="150px"
        px="1rem"
        pb="2rem"
        bg={[colorMode === "light" ? "white.300" : "gray.300"]}
        color="white.300"
      >
        <ModalBody>
          <Flex direction="column" gap="1rem">
            <TitleModal />

            <InputModal
              type="text"
              place="descrição"
              value={title}
              changeFunction={setTitle}
            />

            <Input
              type="number"
              placeholder="preço"
              py="1.75rem"
              value={price}
              color={colorMode === "light" ? "gray.700" : "white.100"}
              bg={colorMode === "light" ? "white.400" : "gray.700"}
              border={colorMode === "light" ? "1px solid #d7d7d7" : "none"}
              borderColor={colorMode === "light" ? "#d7d7d7" : "none"}
              _placeholder={{
                color: colorMode === "light" ? "#969CB2" : "white.500",
              }}
              onChange={(e) => setPrice(Number(e.target.value))}
            />
            <InputModal
              type="text"
              place="categoria"
              value={category}
              changeFunction={setCategory}
            />

            <Flex gap="1rem">
              <SelectButton
                src="/Income.png"
                bg="#12a45429"
                clickFunction={() => setType("deposit")}
                option={"deposit"}
              />
              <SelectButton
                src="/Outcome.png"
                bg="#e62e4d28"
                clickFunction={() => setType("withdraw")}
                option={"withdraw"}
              />
            </Flex>

            <Button
              py="1.75rem"
              mt="1rem"
              bg="green.500"
              color="white.100"
              transition="filter .2s"
              _hover={{ filter: "brightness(0.9)" }}
              _active={{ filter: "brightness(0.9)" }}
              onClick={() => crateTransaction()}
            >
              Cadastrar
            </Button>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
